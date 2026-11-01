/* The preview stage: the live site unchanged (old page, old worker) with the new
 * build's preview/ added beside it, as it would be served while Louis reviews.
 *
 *   node preview_stage_test.js <live site dir with preview/ copied in> <out dir>
 *
 * Uses the live page, then opens /preview/: the preview must copy the live keys
 * once, show the same progress, register no worker, change no live key, and the
 * old worker must keep serving the live page and its own cache untouched.
 */
const http = require('http'), fs = require('fs'), path = require('path');
const {chromium} = require('playwright');
const [ROOT, OUT] = process.argv.slice(2);
const BASE = '/Medicinal-chemistry/';
const TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png'};
const server = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0]);
  if (!u.startsWith(BASE)) { res.writeHead(404); return res.end(); }
  let f = path.join(ROOT, u.slice(BASE.length)); if (u.endsWith('/')) f = path.join(f, 'index.html');
  fs.stat(f, (e, st) => { if (e || !st.isFile()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, {'content-type': TYPES[path.extname(f)] || 'application/octet-stream', etag: '"' + st.size + '"'}); res.end(fs.readFileSync(f)); });
});
const results = [];
const check = (ok, what, d) => { results.push(!!ok); console.log((ok ? '  ok    ' : '  FAIL  ') + what + (ok || d === undefined ? '' : '  — ' + JSON.stringify(d).slice(0, 300))); };
const NS = 'phar4342final';
(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const url = 'http://127.0.0.1:' + server.address().port + BASE;
  const b = await chromium.launch();
  const ctx = await b.newContext();
  await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; window.alert = () => {}; window.confirm = () => true; });
  const p = await ctx.newPage();
  const errors = []; p.on('pageerror', e => errors.push(e.message));
  const boot = () => p.waitForFunction(() => document.querySelectorAll('#nav button').length > 3, null, {timeout: 20000});
  const live = () => p.evaluate(n => Object.fromEntries(Object.keys(localStorage).filter(k => k.startsWith(n + ':')).sort().map(k => [k, localStorage.getItem(k)])), NS);
  console.log('\n=== Preview stage: old live page and worker, new preview beside them ===');
  await p.goto(url); await boot();
  for (let i = 0; i < 40 && !(await p.evaluate(() => !!navigator.serviceWorker.controller)); i++) await p.waitForTimeout(250);
  await p.click('.subrow button[data-t="cyp"][data-s=""]');
  for (let i = 0; i < 6; i++) {
    const q = await p.evaluate(() => ({multi: !!Q.current.multi, right: Q.current.options.map((o, j) => o.correct ? j : -1).filter(j => j >= 0), n: Q.current.options.length}));
    const pick = i % 2 ? q.right[0] : [...Array(q.n).keys()].find(j => !q.right.includes(j));
    if (q.multi) { for (const j of (i % 2 ? q.right : [q.right[0]])) await p.click(`#v-quiz .opt[data-o="${j}"]`); await p.click('#btnCheck'); }
    else await p.click(`#v-quiz .opt[data-o="${pick}"]`);
    await p.click('#btnNext');
  }
  await p.waitForTimeout(500);
  const before = await live();
  const liveDB = JSON.parse(before[NS + ':data:TestUser']);
  console.log(`  live: ${liveDB.answers.length} answers, ${Object.keys(liveDB.concepts).length} concepts, keys ${Object.keys(before).join(', ')}`);
  await p.goto(url + 'preview/'); await boot();
  check(await p.evaluate(() => BUILD.preview === true && NS === 'phar4342final-preview'), 'the preview page opens at /preview/ under phar4342final-preview');
  check(await p.evaluate(() => !!document.getElementById('previewnote')), 'the preview says it is a preview');
  const db = await p.evaluate(() => JSON.parse(JSON.stringify(DB)));
  check(JSON.stringify(db.answers) === JSON.stringify(liveDB.answers) && db.qn === liveDB.qn, `the preview shows the live answers (${liveDB.answers.length}) and counter (${liveDB.qn})`);
  const F = ['seen', 'correct', 'wrong', 'guessed', 'streak', 'box', 'dueAt', 'dueQ', 'lastQ', 'asked'];
  const bad = Object.keys(liveDB.concepts).filter(c => F.some(f => JSON.stringify(liveDB.concepts[c][f]) !== JSON.stringify(db.concepts[c] && db.concepts[c][f])));
  check(!bad.length, `every answered concept's state is in the preview (${Object.keys(liveDB.concepts).length})`, bad);
  await p.evaluate(() => startQuiz('fgdm', null));
  const q = await p.evaluate(() => ({multi: !!Q.current.multi, right: (Q.current.options || []).map((o, j) => o.correct ? j : -1).filter(j => j >= 0)}));
  for (const j of (q.multi ? q.right : [q.right[0]])) await p.click(`#v-quiz .opt[data-o="${j}"]`);
  if (q.multi) await p.click('#btnCheck');
  await p.waitForTimeout(500);
  check(JSON.stringify(await live()) === JSON.stringify(before), 'answering in the preview changed no live key');
  const regs = await p.evaluate(() => navigator.serviceWorker.getRegistrations().then(r => r.map(x => x.scope)));
  check(regs.length === 1 && !regs[0].includes('/preview/'), 'only the live worker is registered (none for /preview/)', regs);
  const caches_ = await p.evaluate(() => caches.keys());
  check(caches_.includes('phar4342-drill-v1') && !caches_.some(c => c.startsWith('phar4342final')), 'the old worker\'s cache is untouched and no new cache exists', caches_);
  await p.goto(url); await boot();
  check(await p.evaluate(() => typeof BUILD === 'undefined' || !BUILD.preview) && await p.evaluate(() => QUESTIONS.length) === 387, 'the live page is still the old one (387 questions)');
  check(JSON.stringify(await live()) === JSON.stringify(before), 'the live progress reads back unchanged after the preview visit');
  check(!errors.length, 'no script error', errors.slice(0, 3));
  fs.writeFileSync(path.join(OUT, 'preview-stage-localStorage.json'), JSON.stringify(await p.evaluate(() => Object.fromEntries(Object.keys(localStorage).sort().map(k => [k, localStorage.getItem(k)]))), null, 1));
  const f = results.filter(x => !x).length;
  console.log(f ? `FAIL: preview_stage_test: ${f} of ${results.length} checks failed` : `PASS: preview_stage_test: ${results.length} checks passed`);
  await b.close(); server.close(); process.exit(f ? 1 : 0);
})().catch(e => { console.log('FAIL: preview_stage_test stopped: ' + e.stack); process.exit(1); });
