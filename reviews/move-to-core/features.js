// node features.js <page.html> <label>  -> JSON of feature probes on one built drill page (Chromium, file://)
const {chromium} = require('playwright');
const page_ = process.argv[2], label = process.argv[3] || '';
const out = {label};
const T = async (p, fn, arg) => { try { return await p.evaluate(fn, arg); } catch (e) { return 'ERR ' + e.message.split('\n')[0]; } };
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({viewport: {width: 1100, height: 900}});
  await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; window.alert = () => {}; window.confirm = () => true; });
  const p = await ctx.newPage();
  const errors = [];
  p.on('pageerror', e => errors.push(e.message));
  await p.goto('file://' + page_);
  await p.waitForFunction(() => document.querySelectorAll('#nav button').length > 3);
  const tab = async v => { await T(p, v => { const b = document.querySelector(`#nav button[data-v="${v}"]`); if (b) b.click(); }, v); await p.waitForTimeout(250); };
  out.tabs = await T(p, () => [...document.querySelectorAll('#nav button')].filter(b => !b.hidden && b.offsetParent !== null).map(b => b.textContent.trim()));
  out.title = await T(p, () => document.title);
  out.header = await T(p, () => (document.querySelector('header') || document.body).innerText.split('\n').slice(0, 3).join(' | '));
  out.profileSwitch = await T(p, () => !!document.getElementById('btnWho'));
  out.questions = await T(p, () => QUESTIONS.length);
  out.images = await T(p, () => Object.keys(IMAGES).length);
  out.glossEntries = await T(p, () => (typeof GLOSS !== 'undefined' ? GLOSS.length : 0));
  out.byType = await T(p, () => { const n = {}; QUESTIONS.forEach(q => { const t = q.type || (q.multi ? 'multi' : 'mc'); n[t] = (n[t] || 0) + 1; }); return n; });
  out.withSkill = await T(p, () => QUESTIONS.filter(q => q.skill).length);
  out.manifestLink = await T(p, () => !!document.querySelector('link[rel="manifest"]'));
  out.appleIcon = await T(p, () => !!document.querySelector('link[rel="apple-touch-icon"]'));
  out.swCode = await T(p, () => /serviceWorker\.register|sw\.register\(/.test(document.documentElement.innerHTML));
  out.versionCheck = await T(p, () => /version\.json/.test(document.documentElement.innerHTML));

  // Topics
  await tab('topics');
  out.topics = await T(p, () => {
    const v = document.querySelector('#v-topics');
    return {
      cards: v.querySelectorAll('.topic:not(.sweepcard)').length,
      examLine: (v.querySelector('p.sub') || {}).textContent ? v.querySelector('p.sub').textContent.replace(/\s+/g, ' ').trim().slice(0, 140) : '',
      sweepWeighted: !!v.querySelector('#sweepWeighted'), sweepAll: !!v.querySelector('#sweepAll'), sweepFiltered: !!v.querySelector('#sweepFiltered'),
      filterChips: [...v.querySelectorAll('.chip[data-f]')].map(c => c.textContent.trim()),
      whatsNew: !!v.querySelector('#news, #whatsnew'),
      homeCard: /Home Screen/i.test(v.innerText),
      countdown: /\bdays? (left|to go|until)|\btoday\b.*exam/i.test(v.innerText),
    };
  });

  // Atlas
  await tab('atlas');
  out.atlas = await T(p, () => {
    const v = document.querySelector('#v-atlas');
    return {tiles: v.querySelectorAll('svg').length, boards: v.querySelectorAll('h3').length, hideNames: !!v.querySelector('#atHide'), count: (v.querySelector('#atCount') || {}).textContent || ''};
  });
  out.atlasHide = await T(p, async () => {
    const h = document.querySelector('#atHide'); if (!h) return 'no button';
    h.click(); await new Promise(r => setTimeout(r, 200));
    return {afterClick: document.querySelector('#v-atlas').className + ' ' + (document.querySelector('#atShow') ? 'show-button' : '')};
  });

  // Reading tabs
  for (const [v, sel] of [['ref', '#v-ref'], ['tell', '#v-tell'], ['guide', '#v-guide']]) {
    await tab(v);
    out[v] = await T(p, sel => {
      const e = document.querySelector(sel);
      if (!e) return 'no view';
      return {tables: e.querySelectorAll('table').length, rows: e.querySelectorAll('tbody tr, table tr').length,
              figures: e.querySelectorAll('img, svg').length, sections: e.querySelectorAll('section').length,
              bullets: e.querySelectorAll('.gpt').length, prose: e.querySelectorAll('p.prose').length,
              jumpList: !!e.querySelector('.refnav, details, .jump'), whyButtons: e.querySelectorAll('.whybtn').length,
              h3: e.querySelectorAll('h3').length, chars: e.innerText.length};
    }, sel);
  }
  // Diagrams tab
  out.diagramsTab = await T(p, () => { const b = document.querySelector('#nav button[data-v="diagrams"]'); return b ? (b.hidden || b.offsetParent === null ? 'present but hidden' : 'shown') : 'absent'; });

  // Settings
  await tab('settings');
  out.settings = await T(p, () => {
    const v = document.querySelector('#v-settings');
    return {chips: [...v.querySelectorAll('.chip')].map(c => c.textContent.trim()),
            buttons: [...v.querySelectorAll('button')].map(c => c.textContent.trim()).filter(Boolean),
            changelog: !!v.querySelector('#changelog'), homeCard: /Home Screen/i.test(v.innerText),
            build: ((v.innerText.match(/Build [^\n]*/) || [''])[0])};
  });

  // Quiz: a single-answer atlas question (structure shown, option figures, compare strip after answering)
  const forceQ = async (id, pick) => T(p, async ([id, pick]) => {
    const q = QUESTIONS.find(x => x.id === id); if (!q) return 'no question ' + id;
    if (typeof startQuiz === 'function') startQuiz(q.topic, q.sub);
    show('quiz');
    Q.current = q; if ('revealed' in Q) Q.revealed = false; Q.picked = null; if (Q.picks) Q.picks = [];
    renderQuiz();
    await new Promise(r => setTimeout(r, 100));
    const v = document.querySelector('#v-quiz');
    const before = {svg: v.querySelectorAll('.qcard svg').length, img: v.querySelectorAll('.qcard img').length,
                    checkboxes: v.querySelectorAll('input[type=checkbox], .opt[aria-pressed], .opt.multi').length,
                    numInput: !!v.querySelector('#numIn'), selects: v.querySelectorAll('select').length,
                    checkBtn: !!v.querySelector('#btnCheck'), sataTag: !!v.querySelector('.tag.sata, .sata')};
    if (pick === 'none') return {before};
    const opts = v.querySelectorAll('.opt');
    const idx = pick === 'wrong' ? q.options.findIndex(o => !o.correct) : q.options.findIndex(o => o.correct);
    // options may be shuffled on screen: find the button whose text is that option's
    const want = q.options[idx].t;
    const btn = [...opts].find(o => o.textContent.includes(want)) || opts[idx];
    btn.click();
    await new Promise(r => setTimeout(r, 150));
    const ids = [...v.querySelectorAll('button[id]')].map(b => b.id + ':' + b.textContent.trim().slice(0, 40));
    return {before, after: {buttons: ids, cmpStrip: !!v.querySelector('.cmp'), optFigs: v.querySelectorAll('.wfig').length,
            gloss: v.querySelectorAll('.gloss').length, teach: !!v.querySelector('.teach'), cite: ((v.querySelector('.cite') || {}).textContent || '').slice(0, 60),
            why: v.querySelectorAll('.why').length, explainMore: /Explain more/i.test(v.innerText)}};
  }, [id, pick]);
  out.quizAtlasWrong = await forceQ('fga-1', 'wrong');
  out.quizAtlasRight = await forceQ('fga-2', 'right');
  out.quizSata = await forceQ('sa-cyp-5', 'none');
  out.quizNumeric = await forceQ('nm-1', 'none');
  out.quizMatch = await T(p, () => { const q = QUESTIONS.find(x => x.type === 'match'); return q ? q.id : 'none'; });
  if (out.quizMatch !== 'none') out.quizMatchRender = await forceQ(out.quizMatch, 'none');
  // a question with a slide image
  out.quizImageId = await T(p, () => { const q = QUESTIONS.find(x => x.img && !x.multi && !x.type); return q ? q.id : 'none'; });
  out.quizImage = await forceQ(out.quizImageId, 'wrong');

  // Weak spots after those answers
  await tab('gaps');
  out.gaps = await T(p, () => { const v = document.querySelector('#v-gaps'); return {h3: [...v.querySelectorAll('h2,h3,h4')].map(h => h.textContent.trim().slice(0, 50)), buttons: [...v.querySelectorAll('button[id]')].map(b => b.id)}; });

  // Exam sim
  await tab('exam');
  out.examIntro = await T(p, () => document.querySelector('#v-exam').innerText.replace(/\s+/g, ' ').slice(0, 200));
  out.exam = await T(p, async () => {
    const s = document.querySelector('#startExam'); if (!s) return 'no start button';
    s.click(); await new Promise(r => setTimeout(r, 300));
    const pools = {};
    EX.qs.forEach(q => { const k = q.prof + '|' + q.tier; pools[k] = (pools[k] || 0) + 1; });
    return {n: EX.qs.length, multi: EX.qs.filter(q => q.multi).length, typed: EX.qs.filter(q => q.type).length, pools,
            clock: (document.querySelector('#exClock') || {}).textContent || '', endButton: ((document.querySelector('#exEnd') || {}).textContent || '').trim(),
            secondsLeft: EX.ends ? Math.round((EX.ends - Date.now()) / 1000) : (EX.left || EX.secs || null)};
  });
  await p.reload();
  await p.waitForFunction(() => document.querySelectorAll('#nav button').length > 3);
  await p.waitForTimeout(400);
  out.examAfterReload = await T(p, () => ({examRunning: !!(typeof EX !== 'undefined' && EX && EX.running), view: (document.querySelector('#nav button[aria-selected="true"]') || {}).textContent || '',
                                            n: (typeof EX !== 'undefined' && EX && EX.qs) ? EX.qs.length : 0}));
  out.errors = errors.slice(0, 5);
  console.log(JSON.stringify(out, null, 1));
  await b.close();
})().catch(e => { console.log(JSON.stringify(Object.assign(out, {fatal: e.message}))); process.exit(1); });
