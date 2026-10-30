/* Service worker for the PHAR 4342 drill.

   What it is for: the drill keeps working with no connection (on a plane, in a
   basement lecture hall), and a flaky connection never leaves a student staring
   at a blank screen.

   What it must never do: hold a student on an outdated copy of the bank. A
   corrected answer key has to reach them on their next load. So the page is
   fetched network-first: when the network answers in time, the student gets the
   current page and the saved copy is refreshed from it. The saved copy is used
   only when the network is down or slower than NET_TIMEOUT, and if the network
   copy then turns out to be newer, the page is told so it can offer a reload.

   This origin (lglouis3-create.github.io) also serves other sites, and Cache
   Storage is shared across the whole origin. Every cache this worker creates is
   named with PREFIX, and cleanup only ever deletes caches carrying that prefix. */

const PREFIX = 'phar4342-drill-';
// Bump only when the shape of what is cached changes; content updates do not
// need a bump, because the page is refreshed from the network on every load.
const CACHE = PREFIX + 'v1';
const NET_TIMEOUT = 3500;

const SCOPE = new URL(self.registration.scope);
const at = (path) => new URL(path, SCOPE).href;
const INDEX = at('index.html');

// Paths a navigation can arrive on that should open the drill.
const APP_PATHS = new Set([
  SCOPE.pathname,
  new URL(INDEX).pathname,
  new URL(at('PHAR4342_Final_Drill.html')).pathname,
]);

// Saved at install, so the drill opens offline straight after the first visit.
const PRECACHE = [
  INDEX,
  at('PHAR4342_Final_Drill.html'),
  at('manifest.json'),
  at('icon-192.png'),
  at('icon-512.png'),
  at('icon-maskable-512.png'),
  at('apple-touch-icon.png'),
];
const PRECACHE_PATHS = new Set(PRECACHE.map((u) => new URL(u).pathname));

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // no-cache: revalidate with the server, so a stale HTTP-cached copy is
    // never what gets saved. An unchanged file costs only a 304.
    await cache.addAll(PRECACHE.map((u) => new Request(u, { cache: 'no-cache' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((n) => n.startsWith(PREFIX) && n !== CACHE)
      .map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== SCOPE.origin || !url.pathname.startsWith(SCOPE.pathname)) return;

  if (req.mode === 'navigate' && APP_PATHS.has(url.pathname)) {
    event.respondWith(openDrill(event));
    return;
  }
  if (PRECACHE_PATHS.has(url.pathname)) {
    event.respondWith(savedFirst(req));
  }
  // Anything else in scope (the src/ sources, the README) goes to the network
  // untouched.
});

/* The drill itself: network first, saved copy on failure or delay. */
async function openDrill(event) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(INDEX);

  const fromNetwork = fetch(INDEX, { cache: 'no-cache' }).then(async (res) => {
    if (res && res.ok) await cache.put(INDEX, res.clone());
    return res;
  });

  if (!saved) return fromNetwork;

  try {
    const winner = await Promise.race([
      fromNetwork,
      new Promise((resolve) => setTimeout(() => resolve('timeout'), NET_TIMEOUT)),
    ]);
    if (winner !== 'timeout' && winner.ok) return winner;
  } catch (_) {
    // offline: fall through to the saved copy
  }

  // Serving the saved copy. If the network copy arrives later and differs,
  // tell the page so it can offer a reload.
  event.waitUntil(fromNetwork
    .then((res) => { if (res && res.ok && differs(res, saved)) return tellUpdated(event); })
    .catch(() => {}));
  return saved;
}

/* Small static files: saved copy first, network if it is missing. */
async function savedFirst(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req, { ignoreSearch: true });
  return hit || fetch(req);
}

/* Two responses for the same URL differ when their validators differ. When
   neither carries a validator, say nothing rather than nag. */
function differs(a, b) {
  for (const h of ['etag', 'last-modified', 'content-length']) {
    const x = a.headers.get(h), y = b.headers.get(h);
    if (x && y) return x !== y;
  }
  return false;
}

/* The page being loaded may not exist as a client yet when this runs, so look
   for it a few times before giving up. */
async function tellUpdated(event) {
  for (let i = 0; i < 20; i++) {
    const target = event.resultingClientId && await self.clients.get(event.resultingClientId);
    const clients = target ? [target] : await self.clients.matchAll({ type: 'window' });
    if (clients.length) {
      clients.forEach((c) => c.postMessage({ type: 'drill-updated' }));
      return;
    }
    await new Promise((r) => setTimeout(r, 250));
  }
}
