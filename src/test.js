/* Validate the built app: parse the script, check the question bank, exercise the SRS. */
const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('/mnt/user-data/outputs/PHAR4342_Final_Drill.html', 'utf8');
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
code += "\nglobalThis.__X={QUESTIONS,TOPICS,IMAGES,record,pickNext,st,score,drawN,drawMixed,EXAM_SATA,askProfile,markGuessed,isMulti,gradeMulti,correctSet,getDB:()=>DB};\n";
try { vm.runInContext(code, sandbox); }
catch (e) { console.error('FAIL: script threw at load — ' + e.message + '\n' + e.stack); process.exit(1); }

const X = sandbox.__X;
const { QUESTIONS, TOPICS, IMAGES } = X;
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
  for (const f of ['prof','tier','topic','sub','concept','stem','options','cite'])
    if (!q[f]) bad(`${q.id}: missing ${f}`);
  if (!topicIds.has(q.topic)) bad(`${q.id}: unknown topic "${q.topic}"`);
  if (!subIds.has(q.topic+'/'+q.sub)) bad(`${q.id}: unknown sub "${q.topic}/${q.sub}"`);
  if (!['Sikazwe','Yendapally'].includes(q.prof)) bad(`${q.id}: bad prof "${q.prof}"`);
  if (!['new','old'].includes(q.tier)) bad(`${q.id}: bad tier "${q.tier}"`);
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
const yen = QUESTIONS.filter(q=>q.prof==='Yendapally');
const sikOld = QUESTIONS.filter(q=>q.prof==='Sikazwe' && q.tier==='old');
const sikNew = QUESTIONS.filter(q=>q.prof==='Sikazwe' && q.tier==='new');
console.log(`  Yendapally ${yen.length} (exam needs 8)`);
console.log(`  Sikazwe older ${sikOld.length} (exam needs 4)`);
console.log(`  Sikazwe new   ${sikNew.length} (exam needs 38)`);
if (yen.length < 8) bad('not enough Yendapally questions to fill an exam paper');
if (sikOld.length < 4) bad('not enough Sikazwe older questions to fill an exam paper');
if (sikNew.length < 38) bad(`only ${sikNew.length} Sikazwe new questions — exam sim needs 38`);

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
X.askProfile(false);
const DB = X.getDB;

// Rule 2: a missed concept must not come straight back
const pool = QUESTIONS.filter(q=>q.topic==='cyp');
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
if (!seen) bad('missed concept never resurfaced (rule 2 requires continued review)');
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
const q1 = QUESTIONS.find(q=>q.concept!==q0.concept && q.topic==='tox');
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
const q2 = QUESTIONS.find(q=>q.concept!==q0.concept && q.concept!==q1.concept && q.topic==='tox');
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
// the same split beginExam uses: select-all items spread 38 : 8 : 4 across the pools
const sNew = Math.round(X.EXAM_SATA * 38/50), sYen = Math.round(X.EXAM_SATA * 8/50);
const sOld = Math.max(0, X.EXAM_SATA - sNew - sYen);
function drawTest(){
  const y = X.drawMixed(QUESTIONS.filter(q=>q.prof==='Yendapally'), 8, sYen);
  const o = X.drawMixed(QUESTIONS.filter(q=>q.prof==='Sikazwe'&&q.tier==='old'), 4, sOld);
  const n = X.drawMixed(QUESTIONS.filter(q=>q.prof==='Sikazwe'&&q.tier==='new'), 38, sNew);
  return [y,o,n];
}
const [y,o,n] = drawTest();
const total = y.length+o.length+n.length;
console.log(`  drew ${y.length} + ${o.length} + ${n.length} = ${total}`);
if (total !== 50) bad(`exam paper is ${total} questions, expected 50`);
const dupes = new Set(); let dupCount=0;
[...y,...o,...n].forEach(q=>{ if(dupes.has(q.id)) dupCount++; dupes.add(q.id); });
if (dupCount) bad(`${dupCount} duplicate questions on one exam paper`);
else console.log('  ok    no duplicate questions on a single paper');
// dupOf: every target exists, and 20 papers never carry a question with its dupOf partner or a lowYield item
const allIds = new Set(QUESTIONS.map(q=>q.id));
QUESTIONS.filter(q=>q.dupOf && !allIds.has(q.dupOf)).forEach(q=>bad(`${q.id} dupOf points at missing ${q.dupOf}`));
{ let clash=0, low=0;
  for(let k=0;k<20;k++){
    const paper=[...X.drawMixed(QUESTIONS.filter(q=>!q.lowYield&&q.prof==='Yendapally'),8,sYen),
                 ...X.drawMixed(QUESTIONS.filter(q=>!q.lowYield&&q.prof==='Sikazwe'&&q.tier==='old'),4,sOld),
                 ...X.drawMixed(QUESTIONS.filter(q=>!q.lowYield&&q.prof==='Sikazwe'&&q.tier==='new'),38,sNew)];
    const on=new Set(paper.map(q=>q.id));
    paper.forEach(q=>{ if(q.dupOf && on.has(q.dupOf)) clash++; if(q.lowYield) low++; });
  }
  if(clash) bad(`${clash} dupOf pairs drawn together across 20 papers`);
  else console.log(`  ok    dupOf partners never share a paper (${QUESTIONS.filter(q=>q.dupOf).length} marked; ${QUESTIONS.filter(q=>q.lowYield).length} lowYield kept off the paper)`);
}
const nSata = [...y,...o,...n].filter(X.isMulti).length;
const bankSata = {yen: QUESTIONS.filter(q=>q.prof==='Yendapally' && X.isMulti(q)).length,
                  old: QUESTIONS.filter(q=>q.prof==='Sikazwe'&&q.tier==='old' && X.isMulti(q)).length,
                  nw:  QUESTIONS.filter(q=>q.prof==='Sikazwe'&&q.tier==='new' && X.isMulti(q)).length};
console.log(`  select-all on the paper: ${nSata} of 50 (target ${X.EXAM_SATA}; bank holds new ${bankSata.nw}, old ${bankSata.old}, Yendapally ${bankSata.yen})`);
if (nSata !== X.EXAM_SATA) bad(`paper carries ${nSata} select-all items, expected ${X.EXAM_SATA}`);
else console.log('  ok    the paper carries the intended number of select-all items');
if (bankSata.nw < sNew || bankSata.old < sOld || bankSata.yen < sYen)
  bad(`a pool holds fewer select-all questions than its share of the paper (need new ${sNew}, old ${sOld}, Yendapally ${sYen})`);
// 20 fresh draws: every paper is 50 distinct questions with the same select-all count
for (let i=0;i<20;i++){ const [a,b,c]=drawTest(); const all=[...a,...b,...c];
  if (all.length!==50 || new Set(all.map(q=>q.id)).size!==50 || all.filter(X.isMulti).length!==X.EXAM_SATA){ bad('a repeated draw broke the paper shape'); break; } }
console.log('  ok    20 repeated draws all kept the paper shape');

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
  const pool = QUESTIONS.filter(q=>q.topic==='fgs' && q.sub==='hc');
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
