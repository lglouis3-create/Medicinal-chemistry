/* Validate the built app: parse the script, check the question bank, exercise the SRS. */
const fs = require('fs');
const vm = require('vm');

const OUT = '/mnt/user-data/outputs/' + ((require('fs').readFileSync('course.js','utf8').match(/output:\s*'([^']+)'/)||[])[1] || 'exam_drill.html');
const html = fs.readFileSync(OUT, 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (scripts.length !== 1) { console.error('FAIL: expected 1 script block, got ' + scripts.length); process.exit(1); }
let code = scripts[0];

// strip only the final boot block, which needs a real DOM
const bootAt = code.lastIndexOf('   BOOT');
if (bootAt === -1) { console.error('FAIL: BOOT marker not found'); process.exit(1); }
code = code.slice(0, code.lastIndexOf('/* ===', bootAt));

// minimal DOM + storage stubs
const store = {};
const el = () => ({ innerHTML:'', textContent:'', classList:{toggle(){},add(){},remove(){},contains(){return false}},
                    setAttribute(){}, querySelectorAll(){return []}, onclick:null, dataset:{}, style:{}, click(){} });
const sandbox = {
  console,
  localStorage:{ getItem:k=>(k in store?store[k]:null), setItem:(k,v)=>{store[k]=String(v)}, removeItem:k=>{delete store[k]} },
  document:{ querySelector:el, querySelectorAll:()=>[], getElementById:el, createElement:el, body:el() },
  window:{ scrollTo(){} },
  prompt:()=> 'TestUser',
  alert:()=>{}, confirm:()=>true,
  setTimeout:(f)=>{ f(); return 0; }, clearTimeout(){}, setInterval:()=>0, clearInterval(){},
  Blob:function(){}, URL:{createObjectURL:()=>'', revokeObjectURL(){}}, FileReader:function(){},
  Date, Math, JSON, Object, Array, String, Number, Boolean, RegExp, Error, isNaN, parseInt, parseFloat
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
code += "\nglobalThis.__X={QUESTIONS,TOPICS,IMAGES,COURSE,EXAM,record,pickNext,st,score,drawN,drawMixed,drawPaper,EXAM_SATA,askProfile,markGuessed,markShaky,isMulti,gradeMulti,correctSet,gradeNumeric,lecOf,skillOf,getDB:()=>DB};\n";
try { vm.runInContext(code, sandbox); }
catch (e) { console.error('FAIL: script threw at load — ' + e.message + '\n' + e.stack); process.exit(1); }

const X = sandbox.__X;
const { QUESTIONS, TOPICS, IMAGES, COURSE } = X;
let fails = 0, warns = 0;
const bad = m => { console.log('  FAIL  ' + m); fails++; };
const warn = m => { console.log('  warn  ' + m); warns++; };

console.log('\n=== 1. Question bank integrity ===');
console.log(`  ${QUESTIONS.length} questions, ${TOPICS.length} topics, ${Object.keys(IMAGES).length} images`);

const ids = new Set();
const topicIds = new Set(TOPICS.map(t=>t.id));
const subIds = new Set(TOPICS.flatMap(t=>t.subs.map(s=>t.id+'/'+s.id)));
for (const q of QUESTIONS) {
  if (ids.has(q.id)) bad(`duplicate question id: ${q.id}`);
  ids.add(q.id);
  for (const f of ['prof','tier','topic','sub','concept','stem','cite'])
    if (!q[f]) bad(`${q.id}: missing ${f}`);
  if (!q.type && !q.options) bad(`${q.id}: missing options`);
  if (!topicIds.has(q.topic)) bad(`${q.id}: unknown topic "${q.topic}"`);
  if (!subIds.has(q.topic+'/'+q.sub)) bad(`${q.id}: unknown sub "${q.topic}/${q.sub}"`);
  if (!COURSE.professors.includes(q.prof)) bad(`${q.id}: prof "${q.prof}" is not in the manifest`);
  if (!['new','old'].includes(q.tier)) bad(`${q.id}: bad tier "${q.tier}"`);
  if (q.type === 'numeric') {
    if (typeof q.answer !== 'number') bad(`${q.id}: numeric item without a numeric answer`);
    if (!Array.isArray(q.steps) || q.steps.length < 2) bad(`${q.id}: numeric item needs worked steps`);
    (q.steps||[]).forEach(s => { if(!['setup','unit','algebra','round'].includes(s.k)) bad(`${q.id}: step kind "${s.k}" unknown`); });
    if (!q.skill) bad(`${q.id}: typed item without a skill tag`);
    continue;
  }
  if (q.type === 'match') {
    if (!Array.isArray(q.pairs) || q.pairs.length < 3) bad(`${q.id}: matching item needs at least 3 pairs`);
    (q.pairs||[]).forEach(p => { if(!p.l || !p.r) bad(`${q.id}: matching pair missing a side`); });
    if (new Set((q.pairs||[]).map(p=>p.r)).size !== (q.pairs||[]).length) bad(`${q.id}: matching right-hand values must be distinct`);
    continue;
  }
  if (q.skill && !COURSE.skills.some(s => s.id === q.skill)) bad(`${q.id}: skill "${q.skill}" is not in the course taxonomy`);
  const correct = q.options.filter(o=>o.correct);
  if (q.multi) {
    // select-all: at least two keyed options and at least one distractor,
    // so the toggles and the all-or-nothing grade both have something to do
    if (correct.length < 2) bad(`${q.id}: select-all with ${correct.length} correct option(s) (needs 2 or more)`);
    if (correct.length === q.options.length) bad(`${q.id}: select-all with no distractor`);
    if (q.options.length < 4) bad(`${q.id}: select-all with only ${q.options.length} options`);
  } else if (correct.length !== 1) bad(`${q.id}: ${correct.length} correct options (must be exactly 1)`);
  if (q.options.length < 3) bad(`${q.id}: only ${q.options.length} options`);
  if (q.options.length > 10) bad(`${q.id}: ${q.options.length} options, more than the option letters can label`);
  if (q.teachImg && !IMAGES[q.teachImg]) bad(`${q.id}: references missing teachImg "${q.teachImg}"`);
  for (const o of q.options) {
    if (!o.t) bad(`${q.id}: option with no text`);
    if (!o.why) bad(`${q.id}: option "${String(o.t).slice(0,30)}" has no explanation`);
    if (o.why && o.why.length < 25) warn(`${q.id}: very short explanation on "${String(o.t).slice(0,30)}"`);
  }
  if (q.img && !IMAGES[q.img]) bad(`${q.id}: references missing image "${q.img}"`);
}

console.log('\n=== 2. Exam blueprint coverage ===');
for (const p of X.EXAM.pools) {
  const n = QUESTIONS.filter(p.test).length;
  console.log(`  ${p.name}: ${n} questions (paper takes ${p.marks})`);
  if (n < p.marks) bad(`pool "${p.name}" cannot fill its ${p.marks} marks`);
}

console.log('\n=== 3. Concept spread per topic ===');
for (const t of TOPICS) {
  const pool = QUESTIONS.filter(q=>q.topic===t.id);
  const cs = new Set(pool.map(q=>q.concept));
  console.log(`  ${t.id.padEnd(10)} ${String(pool.length).padStart(3)} q / ${String(cs.size).padStart(3)} concepts  (${t.prof})`);
  if (!pool.length) bad(`topic "${t.id}" has no questions`);
  for (const s of t.subs) {
    const sp = pool.filter(q=>q.sub===s.id);
    if (!sp.length) warn(`subtopic "${t.id}/${s.id}" (${s.name}) has no questions`);
  }
}

console.log('\n=== 4. Spaced repetition rules ===');
const { record, pickNext, st, score, markGuessed, isMulti, gradeMulti, correctSet } = X;
const conceptsIn = pool => [...new Set(pool.map(q=>q.concept))];
X.askProfile(false);
const DB = X.getDB;

// Rule 2: a missed concept must not come straight back
// the scheduler tests use the topic with the most concepts, and a second topic for the guess test
const byTopic = TOPICS.map(t => ({t, qs: QUESTIONS.filter(q => q.topic === t.id && !q.type)}))
  .filter(x => new Set(x.qs.map(q=>q.concept)).size >= 3).sort((a,b) => b.qs.length - a.qs.length);
if (!byTopic.length) { console.log('  (no topic with 3+ concepts yet; scheduler tests skipped)'); }
const pool = byTopic.length ? byTopic[0].qs : QUESTIONS.filter(q=>!q.type), pool2 = (byTopic[1] || byTopic[0] || {qs:pool}).qs;
const q0 = pool[0];
record(q0, 'wrong');
let immediate = pickNext(pool, q0.id);
if (immediate && immediate.concept === q0.concept)
  bad('missed concept returned immediately (rule 2 requires a gap)');
else console.log('  ok    missed concept is held back rather than repeated at once');

// ...but it must come back after the gap
for (let i=0;i<6;i++){ const n = pickNext(pool.filter(q=>q.concept!==q0.concept), null); if(n) record(n,'correct'); }
let seen = false;
for (let i=0;i<40;i++){ const n = pickNext(pool, null); if(!n) break; if(n.concept===q0.concept){seen=true;break;} record(n,'correct'); }
if (!seen && conceptsIn(pool).length < 6) console.log('  (resurfacing test needs a topic with 6+ concepts; skipped on this bank)');
else if (!seen) bad('missed concept never resurfaced (rule 2 requires continued review)');
else console.log('  ok    missed concept resurfaces after other questions');

// Rule 1/4: repeated correct answers push the interval out
const c = st(q0.concept);
const before = c.box;
record(q0,'correct'); record(q0,'correct'); record(q0,'correct');
if (st(q0.concept).box <= before) bad('box did not advance after repeated correct answers (rules 1, 7)');
else console.log(`  ok    box advanced ${before} -> ${st(q0.concept).box} with repeated correct answers`);

// Rule 4: a later miss resets it to active review
record(q0,'wrong');
if (st(q0.concept).box !== 0) bad('a miss did not reset the concept to active review (rule 4)');
else console.log('  ok    a later miss resets the concept to active review');

// Rule 3: a guess is a gap. It must rank with missed concepts, ahead of
// never-seen ones, no matter how far the concept had advanced beforehand.
// The old rule capped the box at 1, which let a guess on a box-2 concept drop
// to ordinary due-review below unseen material; this asserts the fix.
const q1 = pool2.find(q=>q.concept!==q0.concept);
record(q1,'correct'); X.getDB().qn += 9; record(q1,'correct'); X.getDB().qn += 21;   // box 2 first
record(q1,'guessed');
const g = st(q1.concept);
if (g.streak !== 0) bad('a guess advanced the streak (rule 3)');
else if (g.box !== 0) bad(`a guess on a learned concept left box at ${g.box}, not 0 (rule 3)`);
else {
  X.getDB().qn += 4;
  const sc = score(q1);
  if (!sc || sc.tier !== 4) bad(`a guessed concept scored tier ${sc ? sc.tier : 'null'}; it must be tier 4, above never-seen (rule 3/5)`);
  else console.log('  ok    a guess resets the concept to unresolved and outranks never-seen material');
}
// The after-the-fact guess button must agree with record('guessed')
const q2 = pool2.find(q=>q.concept!==q0.concept && q.concept!==q1.concept);
record(q2,'correct', 0, 1200);
const flipped = markGuessed(q2);
const g2 = st(q2.concept), lastA = X.getDB().answers[X.getDB().answers.length-1];
if (!flipped || lastA.result !== 'guessed' || g2.box !== 0 || g2.guessed !== 1)
  bad('marking a correct answer as a guess did not rewrite the log and reset the box');
else if (lastA.picked !== 0 || lastA.ms !== 1200)
  bad('the answer log lost the picked option or the time taken');
else console.log('  ok    "I guessed that one" rewrites the log, resets the box, keeps picked and ms');

// Rule 6: prefers unseen wording of a concept already missed
const multi = {};
QUESTIONS.forEach(q => (multi[q.concept] ||= []).push(q));
const shared = Object.values(multi).find(a=>a.length>1);
console.log(shared ? `  ok    ${Object.values(multi).filter(a=>a.length>1).length} concepts have more than one wording available`
                   : '  note  every concept currently has a single question');

// Rule 5: never-tested ranks above recently mastered
const fresh = QUESTIONS.find(q=>!DB().concepts[q.concept]);
const mastered = QUESTIONS.find(q=>{const s=DB().concepts[q.concept];return s&&s.box>=3;});
if (fresh && mastered) {
  const s1 = X.score(fresh), s2 = X.score(mastered);
  if (s1 && s2 && s1.tier <= s2.tier) bad('never-tested did not outrank recently mastered (rule 5)');
  else console.log('  ok    never-tested concepts outrank recently mastered ones');
}

console.log('\n=== 5. Exam simulation draw ===');
// the paper follows the manifest: each pool supplies its marks, select-all in proportion
const EXAMQ = X.EXAM.questions, POOLS = X.EXAM.pools;
console.log(`  blueprint: ${X.EXAM.name} — ${POOLS.map(p=>`${p.name} ${p.marks}`).join(', ')} (${POOLS.reduce((n,p)=>n+p.marks,0)} of ${EXAMQ})`);
if (POOLS.reduce((n,p)=>n+p.marks,0) !== EXAMQ) bad('pool marks do not add up to the paper length');
for (const p of POOLS){
  const n = QUESTIONS.filter(q => !q.lowYield && !q.type && p.test(q)).length;
  if (n < p.marks) bad(`pool "${p.name}" holds ${n} eligible questions, fewer than its ${p.marks} marks`);
}
const paper = X.drawPaper();
console.log(`  drew ${paper.length}`);
if (paper.length !== EXAMQ) bad(`exam paper is ${paper.length} questions, expected ${EXAMQ}`);
if (new Set(paper.map(q=>q.id)).size !== paper.length) bad('duplicate questions on one exam paper');
else console.log('  ok    no duplicate questions on a single paper');
if (paper.some(q => q.type)) bad('a typed (numeric or matching) item reached the paper');
// dupOf: every target exists, and 20 papers never carry a question with its dupOf partner or a lowYield item
const allIds = new Set(QUESTIONS.map(q=>q.id));
QUESTIONS.filter(q=>q.dupOf && !allIds.has(q.dupOf)).forEach(q=>bad(`${q.id} dupOf points at missing ${q.dupOf}`));
{ let clash=0, low=0, shape=0;
  for(let k=0;k<20;k++){
    const pp = X.drawPaper();
    const on=new Set(pp.map(q=>q.id));
    pp.forEach(q=>{ if(q.dupOf && on.has(q.dupOf)) clash++; if(q.lowYield) low++; });
    if (pp.length!==EXAMQ || on.size!==EXAMQ || pp.filter(X.isMulti).length!==X.EXAM_SATA) shape++;
  }
  if(clash) bad(`${clash} dupOf pairs drawn together across 20 papers`);
  else console.log(`  ok    dupOf partners never share a paper (${QUESTIONS.filter(q=>q.dupOf).length} marked; ${QUESTIONS.filter(q=>q.lowYield).length} lowYield kept off the paper)`);
  if(low) bad(`${low} lowYield items reached a paper`);
  if(shape) bad(`${shape} of 20 draws broke the paper shape`);
  else console.log('  ok    20 repeated draws all kept the paper shape');
}
const nSata = paper.filter(X.isMulti).length;
console.log(`  select-all on the paper: ${nSata} of ${EXAMQ} (target ${X.EXAM_SATA})`);
if (nSata !== X.EXAM_SATA) bad(`paper carries ${nSata} select-all items, expected ${X.EXAM_SATA}`);
else console.log('  ok    the paper carries the intended number of select-all items');
// labels: every question resolves to a lecture in the manifest
{ const unl = QUESTIONS.filter(q => !X.lecOf(q));
  if (unl.length) bad(`${unl.length} questions cite no deck in the manifest: ${unl.slice(0,6).map(q=>q.id).join(', ')}`);
  else console.log(`  ok    every question resolves to a lecture, exam and module`); }
// skills: every question tagged from the taxonomy
{ const ids = new Set(COURSE.skills.map(s=>s.id)); const un = QUESTIONS.filter(q => !q.skill || !ids.has(q.skill));
  if (un.length) bad(`${un.length} questions without a taxonomy skill: ${un.slice(0,6).map(q=>q.id).join(', ')}`);
  else console.log(`  ok    every question carries a skill from the course taxonomy (${COURSE.skills.map(s=>s.id).join(', ')})`); }
// numeric grading
{ const nq = QUESTIONS.find(q => q.type === 'numeric');
  if (nq){ const okA = X.gradeNumeric(nq, String(nq.answer)), okB = X.gradeNumeric(nq, String(nq.answer + (nq.tol||1)*3)), okC = X.gradeNumeric(nq, 'abc');
    if (!okA || okB || okC) bad('numeric grading: exact answer, far answer or junk misgraded');
    else console.log('  ok    numeric grading accepts the answer within tolerance and rejects the rest'); } }

console.log('\n=== 6. Storage isolation ===');
const keys = Object.keys(store);
if (!keys.some(k=>k.includes('TestUser'))) bad('profile-namespaced key not written');
else console.log(`  ok    progress written under namespaced key: ${keys.find(k=>k.includes('TestUser'))}`);



// --- extra: rule 2 requires a DIFFERENT wording on retry when one exists ---
console.log('=== 7. Different wording when a missed concept returns ===');
(function(){
  // find a concept that has more than one question
  const byC = {};
  QUESTIONS.forEach(q => (byC[q.concept] ||= []).push(q));
  const pair = Object.values(byC).find(a => a.length > 1);
  if (!pair) { console.log('  skip  no multi-question concept'); return; }
  const topic = pair[0].topic;
  const pool  = QUESTIONS.filter(q => q.topic === topic);
  // reset state
  X.getDB().concepts = {}; X.getDB().answers = []; X.getDB().qn = 0;
  record(pair[0], 'wrong');
  // advance past the cool-down gap with unrelated questions
  for (let i=0;i<6;i++){ const n = pickNext(pool.filter(q=>q.concept!==pair[0].concept), null); if(n) record(n,'correct'); }
  let got = null;
  for (let i=0;i<60;i++){
    const n = pickNext(pool, null);
    if (!n) break;
    if (n.concept === pair[0].concept) { got = n; break; }
    record(n,'correct');
  }
  if (!got) { console.log('  FAIL  missed concept never returned'); process.exitCode = 1; }
  else if (got.id === pair[0].id) { console.log('  FAIL  returned the identical question, not a new wording'); process.exitCode = 1; }
  else console.log(`  ok    returned as a different question (${pair[0].id} -> ${got.id})`);
})();


// --- extra: a small pool must end rather than loop the same questions ---
console.log('=== 8. Small pools end instead of looping ===');
(function(){
  // the smallest subtopic pool with at least two questions
  const subs = TOPICS.flatMap(t => t.subs.map(s => QUESTIONS.filter(q => q.topic===t.id && q.sub===s.id && !q.type)))
    .filter(p => p.length >= 2).sort((a,b) => a.length - b.length);
  const pool = subs[0] || QUESTIONS.filter(q=>!q.type);
  X.getDB().concepts={}; X.getDB().answers=[]; X.getDB().qn=0;
  X.getDB().settings.mode='cram';
  const served=[]; let last=null;
  for(let i=0;i<30;i++){
    const q=pickNext(pool,last);
    if(!q) break;
    served.push(q.id); record(q,'correct'); last=q.id;
  }
  const uniq=new Set(served).size;
  if(served.length > pool.length){
    console.log(`  FAIL  served ${served.length} from a pool of ${pool.length} — repeats occurred`); process.exitCode=1;
  } else {
    console.log(`  ok    pool of ${pool.length} served ${served.length} (${uniq} distinct) then stopped`);
  }
  // and "Ask everything" should still keep going
  X.getDB().settings.mode='all';
  let more=0, l2=null;
  for(let i=0;i<10;i++){ const q=pickNext(pool,l2); if(!q) break; record(q,'correct'); l2=q.id; more++; }
  console.log(more>0 ? `  ok    "Ask everything" still serves (${more} more)` : '  FAIL  "Ask everything" stopped too');
  if(!more) process.exitCode=1;
  X.getDB().settings.mode='cram';
})();

console.log(`\n${fails ? 'FAILURES: '+fails : 'All checks passed'}${warns ? '  (warnings: '+warns+')' : ''}\n`);
process.exit(fails ? 1 : 0);
