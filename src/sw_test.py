#!/usr/bin/env python3
"""Drive the service worker the way GitHub Pages serves it, and check that it
keeps its promises: the drill opens offline, a corrected page reaches the
student on the next load, a slow network falls back to the saved copy and then
offers a reload, and nothing outside this drill is touched.

browser_test.py opens the page from disk, where a service worker cannot
register, so it cannot see any of this. This test serves the repository over
HTTP under /medicinal-chemistry/ — the path Pages uses — with ETags, gzip and
Pages' max-age=600, plus switches to change the deployed page, slow it down, or
cut the network.

    python3 build.py && python3 sw_test.py
"""
import gzip, hashlib, os, sys, threading, time
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from playwright.sync_api import sync_playwright

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
BASE = '/medicinal-chemistry/'
TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json',
         '.png': 'image/png', '.md': 'text/markdown; charset=utf-8'}

# what the "deployed" site looks like right now; the tests change it
DEPLOY = {'index_extra': b'', 'index_delay': 0.0, 'sw_cache': None}


class Pages(BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def do_GET(self):
        path = self.path.split('?')[0]
        if not path.startswith(BASE):
            self.send_error(404); return
        rel = path[len(BASE):] or 'index.html'
        f = os.path.normpath(os.path.join(ROOT, rel))
        if not f.startswith(ROOT) or not os.path.isfile(f):
            self.send_error(404); return
        body = open(f, 'rb').read()
        if rel == 'index.html':
            # a "new deploy" appends a marker the test can look for
            body = body.replace(b'</body>', DEPLOY['index_extra'] + b'</body>', 1)
            if DEPLOY['index_delay']:
                time.sleep(DEPLOY['index_delay'])
        if rel == 'sw.js' and DEPLOY['sw_cache']:
            body = body.replace(b"const CACHE = PREFIX + 'v1';",
                                b"const CACHE = PREFIX + '" + DEPLOY['sw_cache'].encode() + b"';")
        etag = '"' + hashlib.md5(body).hexdigest() + '"'
        if self.headers.get('If-None-Match') == etag:
            self.send_response(304); self.send_header('ETag', etag); self.end_headers(); return
        ctype = TYPES.get(os.path.splitext(f)[1], 'application/octet-stream')
        if not ctype.startswith('image/'):
            body = gzip.compress(body, 6)
        self.send_response(200)
        self.send_header('Content-Type', ctype)
        self.send_header('ETag', etag)
        self.send_header('Cache-Control', 'max-age=600')
        if not ctype.startswith('image/'):
            self.send_header('Content-Encoding', 'gzip')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)


results = []
def check(ok, label):
    results.append(ok)
    print(('  ok    ' if ok else '  FAIL  ') + label)


def app_shown(page):
    return page.evaluate("""() => document.title.includes('PHAR 4342')
        && document.querySelectorAll('#nav button').length > 3""")


def cache_names(page):
    return page.evaluate('caches.keys()')


def main():
    srv = ThreadingHTTPServer(('127.0.0.1', 0), Pages)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    url = f'http://127.0.0.1:{srv.server_address[1]}{BASE}'

    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context(viewport={'width': 390, 'height': 844})
        errs = []
        page = ctx.new_page()
        page.on('pageerror', lambda e: errs.append(str(e)))

        print('=== first visit ===')
        page.goto(url)
        page.wait_for_function('navigator.serviceWorker.controller !== null', timeout=60000)
        check(app_shown(page), 'the drill opens at the site root')
        scope = page.evaluate('navigator.serviceWorker.getRegistration().then(r => r.scope)')
        check(scope == url, f'the worker is scoped to this drill only ({scope.replace(url[:-len(BASE)], "")})')
        check('phar4342-drill-v1' in cache_names(page), 'the drill is saved in its own cache')
        page.wait_for_selector('#swbar', timeout=10000)
        check('offline' in page.inner_text('#swbar').lower(), 'the student is told it now works offline')

        page.reload(); page.wait_for_timeout(1500)
        check(page.query_selector('#swbar') is None, 'that notice is shown once, not on every load')

        print('=== offline ===')
        ctx.set_offline(True)
        page.reload(); page.wait_for_timeout(800)
        check(app_shown(page), 'the drill opens with no connection')
        page.goto(url + 'PHAR4342_Final_Drill.html'); page.wait_for_timeout(800)
        check(app_shown(page), 'the old link opens the drill with no connection')
        page.click('#nav button[data-v="topics"]'); page.wait_for_timeout(400)
        page.click('button:has-text("Start")'); page.wait_for_timeout(700)
        n_opts = page.evaluate("document.querySelectorAll('.opt, [data-opt], button.option, .options button').length")
        check(n_opts >= 2, f'a pass starts offline and serves a question ({n_opts} options)')
        ctx.set_offline(False)

        print('=== a corrected page is deployed ===')
        DEPLOY['index_extra'] = b'<i id="deploy-2"></i>'
        page.goto(url); page.wait_for_timeout(1200)
        check(page.query_selector('#deploy-2') is not None,
              'the next load shows the corrected page, not the saved one')
        check(page.query_selector('#swbar') is None, 'and no reload prompt is needed for that')
        ctx.set_offline(True)
        page.reload(); page.wait_for_timeout(800)
        check(page.query_selector('#deploy-2') is not None, 'the saved copy was refreshed to match')
        ctx.set_offline(False)

        print('=== slow network, newer page ===')
        DEPLOY['index_extra'] = b'<i id="deploy-3"></i>'
        DEPLOY['index_delay'] = 6.0
        t0 = time.time(); page.goto(url, wait_until='domcontentloaded')
        shown_after = time.time() - t0
        check(shown_after < 5.5, f'the saved copy is shown without waiting on the network ({shown_after:.1f}s)')
        check(page.query_selector('#deploy-2') is not None, 'that copy is the last good one')
        page.wait_for_selector('#swbar', timeout=15000)
        check('newer version' in page.inner_text('#swbar').lower(), 'a reload is offered once the newer page arrives')
        check(page.query_selector('#deploy-2') is not None, 'the page never reloads by itself')
        DEPLOY['index_delay'] = 0.0
        page.click('#swbar button:not(.swx)'); page.wait_for_timeout(1200)
        check(page.query_selector('#deploy-3') is not None, 'Reload brings in the newer page')

        print('=== anything else in scope ===')
        r = page.goto(url + 'README.md')
        check(r.ok and 'Cumulative Final Drill' in page.content() and not app_shown(page),
              'other files (README, src/) are served as themselves')

        print('=== caches belonging to other sites ===')
        page.goto(url); page.wait_for_timeout(800)
        page.evaluate("""async () => {
            await (await caches.open('intro-pharm-drill-v1')).put('/x', new Response('theirs'));
            await (await caches.open('phar4342-drill-v0')).put('/x', new Response('old'));
        }""")
        DEPLOY['sw_cache'] = 'v2'
        page.evaluate('navigator.serviceWorker.getRegistration().then(r => r.update())')
        page.wait_for_function("caches.keys().then(k => k.includes('phar4342-drill-v2'))", timeout=60000)
        page.wait_for_timeout(1500)
        names = cache_names(page)
        check('intro-pharm-drill-v1' in names, "another site's cache on the same origin is left alone")
        check('phar4342-drill-v0' not in names and 'phar4342-drill-v1' not in names,
              "this drill's superseded caches are removed")

        check(not errs, 'no uncaught page errors' + (f': {errs[:2]}' if errs else ''))
        browser.close()
    srv.shutdown()

    ok = all(results)
    print(f"\nService worker test {'passed' if ok else 'FAILED'} ({sum(results)}/{len(results)})")
    return 0 if ok else 1


if __name__ == '__main__':
    sys.exit(main())
