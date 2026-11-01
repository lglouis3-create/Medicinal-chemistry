/* Saved progress survives the move onto the kit core.
 *
 *   node progress_test.js <live site dir> <new site dir> <out dir>
 *
 * Both sites are served on one origin at /Medicinal-chemistry/, as GitHub Pages
 * serves them, so they share localStorage and Cache Storage as they do for Louis.
 *   1. The live page (built from origin/main) is used through its own screens:
 *      a quiz with right and wrong answers, a select-all item, "I guessed that
 *      one", Settings -> Long term, and a whole exam paper submitted.
 *   2. Its localStorage is recorded (out/live-localStorage.json), and the Weak
 *      spots numbers and Topics counts are read off the screen.
 *   3. The server switches to the new build at the same address and the page is
 *      reloaded in the same browser profile (the old worker is replaced by the
 *      core's): every saved key, every answered concept's state, the answer log,
 *      the counter and the settings are compared, and the same screens are read.
 *   4. /preview/ (build.py --preview) is opened: it must copy the live keys into
 *      phar4342final-preview once, show the same progress, keep its answers to
 *      itself, and change no live key.
 */
const http = require('http'), fs = require('fs'), path = require('path');
const {chromium} = require('playwright');
const [LIVE, NEW, OUT] = process.argv.slice(2);
let ROOT = LIVE;
const BASE = '/Medicinal-chemistry/';
const TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png'};
const server = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0]);
  if (!u.startsWith(BASE)) { res.writeHead(404); return res.end('not found'); }
  let f = path.join(ROOT, u.slice(BASE.length));
  if (u.endsWith('/')) f = path.join(f, 'index.html');
  fs.stat(f, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('not found'); }
    const body = fs.readFileSync(f);
    res.writeHead(200, {'content-type': TYPES[path.extname(f)] || 'application/octet-stream', 'cache-control': 'max-age=600',
                        'etag': '"' + st.size + '-' + Math.floor(st.mtimeMs) + '-' + ROOT.length + '"', 'content-length': body.length});
    res.end(body);
  });
});
const results = [];
const check = (ok, what, detail) => { results.push({ok: !!ok, what, detail}); console.log((ok ? '  ok    ' : '  FAIL  ') + what + (ok || detail === undefined ? '' : '  — ' + JSON.stringify(detail).slice(0, 400))); };
const NS = 'phar4342final';

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const url = origin + BASE;
  const browser = await chromium.launch();
  const ctx = await browser.newContext({viewport: {width: 1100, height: 900}});
  await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; window.alert = () => {}; window.confirm = () => true; });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  const boot = async () => page.waitForFunction(() => document.querySelectorAll('#nav button').length > 3, null, {timeout: 20000});
  const ls = () => page.evaluate(() => Object.fromEntries(Object.keys(localStorage).sort().map(k => [k, localStorage.getItem(k)])));

  console.log('\n=== 1. The live page, used through its own screens ===');
  await page.goto(url);
  await boot();
  await page.waitForFunction(() => navigator.serviceWorker && navigator.serviceWorker.controller, null, {timeout: 30000}).catch(() => {});
  const liveCaches = await page.evaluate(() => caches.keys());
  check(liveCaches.includes('phar4342-drill-v1'), 'the live page saved its offline copy as phar4342-drill-v1', liveCaches);
  // A quiz on CYP450 (the first topic): click Start on a subtopic, answer through the option buttons.
  await page.click('#nav button[data-v="topics"]');
  await page.click('.subrow button[data-t="cyp"][data-s=""]');
  const plan = ['right', 'wrong', 'right', 'right+guess', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'right'];
  const did = [];
  for (const how of plan) {
    const q = await page.evaluate(() => Q && Q.current ? {id: Q.current.id, multi: !!Q.current.multi, n: Q.current.options.length, right: Q.current.options.map((o, i) => o.correct ? i : -1).filter(i => i >= 0)} : null);
    if (!q) break;
    const right = how.startsWith('right');
    if (q.multi) {
      const picks = right ? q.right : [q.right[0]];
      for (const i of picks) await page.click(`#v-quiz .opt[data-o="${i}"]`);
      await page.click('#btnCheck');
    } else {
      const wrong = [...Array(q.n).keys()].find(i => !q.right.includes(i));
      await page.click(`#v-quiz .opt[data-o="${right ? q.right[0] : wrong}"]`);
    }
    if (how === 'right+guess') await page.click('#btnGuess');
    did.push(q.id + ':' + how + (q.multi ? '(select-all)' : ''));
    await page.click('#btnNext');
  }
  // one select-all item on purpose, from the Sikazwe select-all file
  await page.evaluate(() => { const q = QUESTIONS.find(x => x.id === 'sa-cyp-5'); startQuiz(q.topic, q.sub); show('quiz'); Q.current = q; Q.order = q.options.map((_, i) => i); Q.revealed = false; Q.picked = null; if (Q.picks) Q.picks = []; renderQuiz(); });
  const sa = await page.evaluate(() => Q.current.options.map((o, i) => o.correct ? i : -1).filter(i => i >= 0));
  for (const i of sa) await page.click(`#v-quiz .opt[data-o="${i}"]`);
  await page.click('#btnCheck');
  did.push('sa-cyp-5:right(select-all)');
  // Settings: Long term
  await page.click('#nav button[data-v="settings"]');
  await page.click('#v-settings .chip[data-m="long"]');
  // An exam paper: answer the first five, submit the paper
  await page.click('#nav button[data-v="exam"]');
  await page.click('#startExam');
  for (let i = 0; i < 5; i++) {
    const r = await page.evaluate(() => { const q = EX.qs[EX.i]; return {multi: !!q.multi, right: q.options.map((o, j) => o.correct ? j : -1).filter(j => j >= 0)}; });
    if (r.multi) for (const j of r.right) await page.click(`#v-exam .opt[data-o="${j}"]`);
    else await page.click(`#v-exam .opt[data-o="${i % 2 ? r.right[0] : (r.right[0] + 1) % 4}"]`);
    await page.click('#exNext');
  }
  await page.click('#exEnd');
  did.push('exam paper: 5 answered of 50, submitted');
  await page.waitForTimeout(400);
  const liveStore = await ls();
  fs.writeFileSync(path.join(OUT, 'live-localStorage.json'), JSON.stringify(liveStore, null, 1));
  const liveDB = JSON.parse(liveStore[NS + ':data:TestUser']);
  console.log('  answered:', did.join(', '));
  console.log(`  live keys: ${Object.keys(liveStore).join(', ')}`);
  console.log(`  live DB: qn ${liveDB.qn}, ${liveDB.answers.length} answers, ${Object.keys(liveDB.concepts).length} concepts, settings ${JSON.stringify(liveDB.settings)}`);
  const screens = async () => {
    await page.click('#nav button[data-v="gaps"]');
    await page.waitForTimeout(200);
    const gaps = await page.evaluate(() => { const v = document.querySelector('#v-gaps');
      const stat = v.querySelector('.stats, .statrow, .row') || v; return [...v.querySelectorAll('b')].slice(0, 6).map(b => b.textContent.trim() + ' ' + ((b.nextElementSibling || {}).textContent || '').trim()); });
    const missed = await page.evaluate(() => (document.querySelector('#v-gaps').innerText.match(/Every question you have missed \((\d+)\)/) || [])[1] || null);
    const counts = await page.evaluate(() => { const db = DB; const by = r => db.answers.filter(a => a.result === r).length;
      return {answers: db.answers.length, correct: by('correct'), wrong: by('wrong'), guessed: by('guessed'), qn: db.qn}; });
    return {gaps, missed, counts};
  };
  const liveScreens = await screens();
  console.log('  live Weak spots:', JSON.stringify(liveScreens));

  console.log('\n=== 2. The new build at the same address, same browser ===');
  ROOT = NEW;
  await page.goto(url);
  await boot();
  // the browser replaces the old worker by itself (no update() call): poll until the caches show it
  await page.reload(); await boot();
  const st = () => page.evaluate(async () => { const r = await navigator.serviceWorker.getRegistration();
    return {installing: !!(r && r.installing), waiting: !!(r && r.waiting), active: !!(r && r.active), caches: await caches.keys(),
            activeIsCore: r && r.active ? /"old": "phar4342-drill-"/.test(await (await fetch(r.active.scriptURL, {cache: 'no-store'})).text()) : null,
            controlled: !!navigator.serviceWorker.controller}; });
  const t0 = Date.now(); let w;
  for (;;) { w = await st(); if ((w.caches.includes(NS + '-v1') && !w.caches.includes('phar4342-drill-v1')) || Date.now() - t0 > 60000) break; await page.waitForTimeout(500); }
  console.log(`  worker after two navigations to the new build (${((Date.now() - t0) / 1000).toFixed(1)} s of polling):`, JSON.stringify(w));
  check(w.activeIsCore && w.controlled, 'the core\'s worker replaced the old one and controls the page', w);
  const newCaches = await page.evaluate(() => caches.keys());
  check(!newCaches.includes('phar4342-drill-v1'), 'the old worker\'s cache phar4342-drill-v1 is deleted', newCaches);
  check(newCaches.includes(NS + '-v1'), `the core's worker saved its copy as ${NS}-v1`, newCaches);
  const after = await ls();
  for (const [k, v] of Object.entries(liveStore)) {
    if (k === NS + ':data:TestUser') continue;
    check(after[k] === v, `live key ${k} is unchanged`, {before: v, after: after[k]});
  }
  check(await page.evaluate(() => PROFILE) === 'TestUser', 'the same profile opens (TestUser)');
  const db = await page.evaluate(() => JSON.parse(JSON.stringify(DB)));
  const F = ['seen', 'correct', 'wrong', 'guessed', 'streak', 'box', 'dueAt', 'dueQ', 'lastQ', 'asked'];
  let same = 0; const diff = [];
  for (const [c, s] of Object.entries(liveDB.concepts)) {
    const t = db.concepts[c];
    const bad = F.filter(f => JSON.stringify(s[f]) !== JSON.stringify(t && t[f]));
    if (bad.length) diff.push(c + ':' + bad.join('/')); else same++;
  }
  check(!diff.length, `every answered concept keeps its state (${same} of ${Object.keys(liveDB.concepts).length} concepts, fields ${F.join(', ')})`, diff.slice(0, 5));
  check(JSON.stringify(db.answers) === JSON.stringify(liveDB.answers), `the answer log is unchanged (${liveDB.answers.length} entries: question, result, time, counter, option picked, time taken)`);
  check(db.qn === liveDB.qn, `the question counter is unchanged (${liveDB.qn})`);
  check(db.created === liveDB.created, 'the profile\'s creation time is unchanged');
  check(JSON.stringify(db.settings) === JSON.stringify(liveDB.settings), `the settings are unchanged (${JSON.stringify(liveDB.settings)})`, db.settings);
  check(await page.evaluate(() => pace()) === 'semester', '"Long term" reads as the Semester pace (the same days, 1, 3, 7, 14, 30, 60)');
  const qids = new Set(await page.evaluate(() => QUESTIONS.map(q => q.id)));
  const missingQ = [...new Set(liveDB.answers.map(a => a.qid))].filter(id => !qids.has(id));
  check(!missingQ.length, `every answered question id is in the new bank (${new Set(liveDB.answers.map(a => a.qid)).size} ids)`, missingQ);
  const lastOK = await page.evaluate(() => Object.values(DB.concepts).every(s => s.last && Object.keys(s.last).length));
  check(lastOK && db.v === 2, 'the core\'s converter ran on the old save (v 2, `last` rebuilt for every concept)', {v: db.v});
  const newScreens = await screens();
  console.log('  new Weak spots: ', JSON.stringify(newScreens));
  check(JSON.stringify(newScreens.counts) === JSON.stringify(liveScreens.counts), 'the same counts of right, wrong and guessed answers', newScreens.counts);
  check(newScreens.missed === liveScreens.missed, `Weak spots lists the same number of missed questions (${liveScreens.missed})`, newScreens.missed);
  // the next quiz question still follows the saved state: a missed concept that has cooled is ranked first
  const nextOk = await page.evaluate(() => { const pool = QUESTIONS.filter(q => q.topic === 'cyp'); const q = pickNext(pool, null); const s = q && DB.concepts[q.concept];
    return {id: q && q.id, box: s ? s.box : 'never seen', seen: s ? s.seen : 0}; });
  console.log('  next CYP question the scheduler picks:', JSON.stringify(nextOk));
  // a save by the new page keeps the old fields
  await page.evaluate(() => { save(); });
  await page.waitForTimeout(400);
  const saved = JSON.parse((await ls())[NS + ':data:TestUser']);
  const keptAll = Object.keys(liveDB).every(k => k in saved) && Object.keys(liveDB.concepts).every(c => F.every(f => JSON.stringify(saved.concepts[c][f]) === JSON.stringify(liveDB.concepts[c][f])));
  check(keptAll, 'after the new page saves, every field of the old save is still there with its value');
  fs.writeFileSync(path.join(OUT, 'new-localStorage.json'), JSON.stringify(await ls(), null, 1));
  // the live page's two other settings: Exam cram (also what a profile that never opened Settings has) and Ask everything
  const modes = await page.evaluate(() => { const keep = JSON.stringify(DB.settings), r = {};
    DB.settings = {mode: 'cram'}; r.cram = pace(); show('settings'); r.cramPressed = (document.querySelector('#v-settings .chip[aria-pressed="true"]') || {}).textContent;
    DB.settings = {mode: 'all'}; show('settings'); r.allPressed = (document.querySelector('#v-settings .chip[aria-pressed="true"]') || {}).textContent;
    DB.settings = JSON.parse(keep); show('settings'); r.longPressed = (document.querySelector('#v-settings .chip[aria-pressed="true"]') || {}).textContent; return r; });
  check(modes.cram === 'cram' && modes.cramPressed === 'Exam cram', 'a live "Exam cram" setting reads as Exam cram', modes);
  check(modes.allPressed === 'Ask everything', 'a live "Ask everything" setting reads as Ask everything', modes);
  check(modes.longPressed === 'Semester', 'a live "Long term" setting shows Semester selected in Settings', modes);

  console.log('\n=== 3. The /preview/ build on the same origin ===');
  const liveBefore = await page.evaluate(n => Object.fromEntries(Object.keys(localStorage).filter(k => k.startsWith(n + ':')).sort().map(k => [k, localStorage.getItem(k)])), NS);
  await page.goto(url + 'preview/index.html');
  await boot();
  check(await page.evaluate(() => NS) === NS + '-preview', `the preview keeps its own namespace (${NS}-preview)`);
  const pv = await page.evaluate(n => Object.fromEntries(Object.keys(localStorage).filter(k => k.startsWith(n + '-preview:')).sort().map(k => [k, localStorage.getItem(k)])), NS);
  const copiedAll = Object.entries(liveBefore).every(([k, v]) => pv[NS + '-preview' + k.slice(NS.length)] === v);
  check(copiedAll, `every live key is copied into the preview once (${Object.keys(liveBefore).length} keys)`, Object.keys(pv));
  const pdb = await page.evaluate(() => JSON.parse(JSON.stringify(DB)));
  check(JSON.stringify(pdb.answers) === JSON.stringify(liveDB.answers) && pdb.qn === liveDB.qn, 'the preview shows the same answers and counter');
  const pdiff = Object.keys(liveDB.concepts).filter(c => F.some(f => JSON.stringify(liveDB.concepts[c][f]) !== JSON.stringify(pdb.concepts[c] && pdb.concepts[c][f])));
  check(!pdiff.length, 'the preview shows every answered concept\'s state', pdiff.slice(0, 5));
  const pScreens = await screens();
  check(JSON.stringify(pScreens.counts) === JSON.stringify(liveScreens.counts) && pScreens.missed === liveScreens.missed, 'the preview\'s Weak spots counts are the live ones', pScreens);
  // answer one question in the preview
  await page.evaluate(() => startQuiz('fgdm', null));
  const pq = await page.evaluate(() => ({id: Q.current.id, multi: !!Q.current.multi, right: (Q.current.options || []).map((o, i) => o.correct ? i : -1).filter(i => i >= 0)}));
  for (const i of (pq.multi ? pq.right : [pq.right[0]])) await page.click(`#v-quiz .opt[data-o="${i}"]`);
  if (pq.multi) await page.click('#btnCheck');
  console.log('  answered in the preview:', pq.id);
  await page.waitForTimeout(400);
  const liveAfterPv = await page.evaluate(n => Object.fromEntries(Object.keys(localStorage).filter(k => k.startsWith(n + ':')).sort().map(k => [k, localStorage.getItem(k)])), NS);
  check(JSON.stringify(liveAfterPv) === JSON.stringify(liveBefore), 'answering in the preview changed no live key');
  const pvQn = await page.evaluate(() => DB.qn);
  check(pvQn === liveDB.qn + 1, `the preview counted its own answer (${pvQn})`);
  const regs = await page.evaluate(() => navigator.serviceWorker.getRegistrations().then(r => r.map(x => x.scope)));
  check(!regs.some(s => s.includes('/preview/')), 'the preview registered no service worker', regs);
  check(!errors.length, 'no script error on any page', errors.slice(0, 3));
  const fails = results.filter(r => !r.ok).length;
  console.log(fails ? `FAIL: progress_test: ${fails} of ${results.length} checks failed` : `PASS: progress_test: ${results.length} checks passed`);
  await browser.close(); server.close();
  process.exit(fails ? 1 : 0);
})().catch(e => { console.log('FAIL: progress_test stopped: ' + e.stack); process.exit(1); });
