/* ==========================================================================
   TERM GLOSSES
   ==========================================================================
   Terms that carry conceptual weight in this course get a short definition the
   first time they appear in a question's explanation. `p` is what to match,
   `d` is the definition, and `skip` recognises a question that already defines
   the term in its own prose, so a hand-written gloss is never doubled.
   Definitions follow the course's wording where the decks give one.
   ========================================================================== */
const GLOSS = [
 {k:'deloc',  p:'delocalis\\w*|delocaliz\\w*',
  d:'spread across several atoms rather than held on one',
  skip:/spread (across|over)|not (held|sitting) on one|shared (across|between)/i},
 {k:'nucl',   p:'nucleophil\\w*',
  d:'electron-rich, so it attacks electron-poor centres',
  skip:/electron[- ]rich|donates? (an? )?electron|attacks? .*(electron[- ]poor|positive)/i},
 {k:'elec',   p:'electrophil\\w*',
  d:'electron-poor, so electron-rich groups attack it',
  skip:/electron[- ]poor|electron[- ]deficient|accepts? (an? )?electron|short of electrons/i},
 {k:'zwit',   p:'zwitterion\\w*',
  d:'carrying a positive and a negative charge at the same time',
  skip:/both .*charges?|positive and .*negative/i},
 {k:'cbase',  p:'conjugate base',
  d:'what is left once an acid has donated its proton',
  skip:/what (is )?(left|remains) after|after (it )?(loses|donat)|deprotonated form/i},
 {k:'cacid',  p:'conjugate acid',
  d:'what is formed once a base has accepted a proton',
  skip:/after (it )?accepts?|protonated form/i},
 {k:'enant',  p:'enantiomers?',
  d:'mirror images that cannot be superimposed',
  skip:/mirror image|non[- ]?superimposable/i},
 {k:'diast',  p:'diastereomers?',
  d:'stereoisomers that are not mirror images of each other',
  skip:/differ at (some|one)|not mirror images/i},
 {k:'racem',  p:'racemic|racemate',
  d:'an equal mixture of both enantiomers',
  skip:/equal (amounts|parts|mixture)|fifty[- ]fifty|50:50|both enantiomers/i},
 {k:'efflux', p:'efflux',
  d:'pumped back out of the cell',
  skip:/pumps? .*(out|back)|moves? .*out of the cell|expels?/i},
 {k:'fpass',  p:'first[- ]pass',
  d:'removed by the liver before reaching the systemic circulation',
  skip:/before (it )?reaches|liver .*before|removed .*on the (first|way)/i},
 {k:'vd',     p:'volume of distribution',
  d:'a hypothetical volume rather than a physical one, showing how widely the drug leaves the bloodstream',
  skip:/apparent volume|hypothetical volume|not (an? )?actual physical volume/i},
 {k:'ehc',    p:'enterohepatic',
  d:'excreted in bile, then reabsorbed from the gut',
  skip:/bile .*(back|reabsorb|gut)|recycl/i},
 {k:'toxo',   p:'toxicophor\\w*',
  d:'the structural feature that makes a molecule toxic',
  skip:/structural (feature|group) .*(toxic|harm)|part of the molecule .*toxic/i},
 {k:'bioact', p:'bioactivat\\w*',
  d:'metabolism turning the drug into a more reactive species instead of a safer one',
  skip:/(turned|converted|changed) into .*(reactive|toxic)|metabolism (makes|creates) .*(reactive|toxic)/i},
 {k:'sat',    p:'saturab\\w*|saturated enzyme',
  d:'having a fixed capacity that a large enough dose overwhelms',
  skip:/runs? out|fixed (amount|capacity)|can be overwhelmed|limited (amount|capacity)|exhaust/i},
 {k:'free',   p:'free fraction',
  d:'the share not bound to plasma protein, and the only share that is active',
  skip:/not bound|unbound/i},
 {k:'pc',     p:'partition coefficient',
  d:'how a drug divides between a lipid phase and water',
  skip:/ratio of .*concentrations?|how .*(divides?|distributes?) between|movement of molecules from one phase/i},
 {k:'poly',   p:'polymorphis\\w*',
  d:'an inherited variation in the gene, so the enzyme differs between people',
  skip:/genetic (variation|difference)|differs? between people|inherited (variation|difference)/i},
 {k:'steric', p:'steric\\w*',
  d:'to do with the physical size and bulk of a group',
  skip:/size|bulk|physically (blocks?|in the way)|too (big|large)/i},
 {k:'val',    p:'valence|valency',
  d:'how many bonds an atom forms to reach a closed shell',
  skip:/outer[- ]shell|bonds? it (can )?(form|make)|number of bonds|closed shell/i},
 {k:'adduct', p:'adducts?',
  d:'a covalent addition product, here the drug bound onto a protein or DNA',
  skip:/covalent\w* (bound|bond|attach|add)|binds? covalently/i},
 {k:'prodrug',p:'prodrugs?',
  d:'an inactive form that metabolism converts into the active drug',
  skip:/inactive (form|until)|converted .*into the active|activated by metabolism/i},
 {k:'isoform',p:'isoforms?',
  d:'one variant within an enzyme family',
  skip:/variant|member of the .*family|one of the .*enzymes in/i},
 {k:'cofac',  p:'cofactors?|co-factors?',
  d:'a molecule the enzyme must have on hand for the reaction to run at all',
  skip:/will not (occur|run|proceed) without|must (be present|have)|required for the reaction/i},
 {k:'glomer', p:'glomerul\\w*',
  d:'filtration at the kidney, driven by blood pressure and molecular size rather than by any enzyme',
  skip:/blood pressure and (molecular )?size|physical process|filtered by size/i},
 {k:'chiral', p:'chiral\\w*|chirality',
  d:'having a carbon with four different groups, so the molecule and its mirror image differ',
  skip:/four different (groups|substituents)|mirror image/i},
 {k:'reson',  p:'resonance',
  d:'the same structure drawn with electrons in more than one position, the real molecule being the average',
  skip:/more than one position|average of|shared between the/i},
 {k:'taut',   p:'tautomer\\w*',
  d:'two forms that interconvert by moving a proton and a double bond',
  skip:/moving a proton|proton shifts?|interconvert/i},
 {k:'regio',  p:'regioselectiv\\w*|regiochemistr\\w*',
  d:'which position on the molecule the reaction happens at',
  skip:/which position|where on the molecule/i},
 {k:'hepext', p:'hepatic extraction',
  d:'the share of drug the liver removes from the blood passing through it',
  skip:/share .*liver removes|fraction removed/i},
 {k:'epimer', p:'epimers?',
  d:'stereoisomers differing at exactly one centre',
  skip:/one (stereo)?cent(re|er)|single cent(re|er)/i},
 {k:'induct', p:'inductive effects?',
  d:'electrons pulled along the bonds by a nearby electronegative atom',
  skip:/pulled along the bonds|electron withdrawal through/i},
 {k:'mother', p:'mother carbon',
  d:'the carbon the functional group is attached to, not the chain around it',
  skip:/carbon (the|that) .*(attached|carries|holding|holds)/i},
 {k:'bioiso', p:'bioisoster\\w*',
  d:'a different group chosen because it behaves like the one it replaces',
  skip:/behaves? like|same (behaviour|properties) as|replacement for|swapped (in|for)/i},
 {k:'lipo',  p:'lipophilic\\w*|lipophilicity',
  d:'how readily the molecule dissolves in fat rather than in water',
  skip:/dissolves? in (fat|lipid)|fat[- ]soluble|oil[- ]soluble|greasi|water soluble/i},
 {k:'arom',  p:'aromaticity',
  d:'a flat ring whose electrons circulate around it, which makes it unusually stable',
  skip:/flat ring|electrons? (circulate|move around)|H(u|ü)ckel/i},
];

/* ==========================================================================
   STRUCTURE SHOWN WITH A QUESTION
   ==========================================================================
   Atlas structures are drawn at the size an atlas tile wants, which is small
   enough to fit dozens on a screen. A question shows one structure and the
   reader has to count atoms in it, so each is scaled up to a common size
   before it goes on the page. Scaling by the larger dimension keeps a wide
   tricyclic and a four-membered ring at comparable visual weight instead of
   making one of them fill the card.
   ========================================================================== */
/* Natural sizes run from 59px across (aziridine) to 166px (dibenzazepine), so
   a single target with a capped multiplier brings the small rings up without
   blowing the tricyclics past the width of the card. */
const FG_TARGET = 240;   // px across the structure's larger dimension

function fgScale(svg, target, floor){
  if(!svg) return '';
  const w = +(svg.match(/\bwidth="(\d+(?:\.\d+)?)"/)  || [])[1];
  const h = +(svg.match(/\bheight="(\d+(?:\.\d+)?)"/) || [])[1];
  if(!w || !h) return svg;
  const k = Math.min(3.6, Math.max(floor, target / Math.max(w, h)));
  return svg.replace(/\bwidth="[\d.]+"/,  `width="${(w*k).toFixed(0)}"`)
            .replace(/\bheight="[\d.]+"/, `height="${(h*k).toFixed(0)}"`);
}

/* Resolve an option's wording to an atlas key. Option text says
   "Tetrahydrofuran" or "Epoxide"; the atlas key is "Tetrahydrofuran THF" or
   "Epoxide oxirane". Exact match first, then case-insensitive, then the
   atlas key whose first word is the whole option, so a structure is drawn
   whenever one exists for that group and never for a different one. */
const FG_KEYS = (typeof FG !== 'undefined') ? Object.keys(FG) : [];
const FG_INDEX = (() => {
  const ix = {};
  FG_KEYS.forEach(k => {
    ix[k.toLowerCase()] = k;
    const first = k.toLowerCase().split(' ')[0];
    if(!(first in ix)) ix[first] = k;
  });
  return ix;
})();
function fgKey(name){
  if(!name) return null;
  if(typeof FG !== 'undefined' && FG[name]) return name;
  const lc = String(name).toLowerCase().trim();
  return FG_INDEX[lc] || null;
}

function fgShow(key){
  const k = fgKey(key);
  const svg = (k && typeof FGQ !== 'undefined' && FGQ[k]) || '';
  return svg ? `<div class="fgshow">${fgScale(svg, FG_TARGET, 1.4)}</div>` : '';
}

/* ==========================================================================
   SIDE-BY-SIDE STRUCTURES
   ==========================================================================
   Describing a difference in words and drawing it are not the same thing. Two
   rings that differ by one atom read as near-identical sentences and as
   obviously different pictures, so wherever an explanation compares named
   groups, the structures go next to each other and the sentence says what to
   look at.

   Names come from the atlas, so a group that is discussed but not drawn there
   is left out rather than faked. `cmpNames(q)` is what any question can set
   through `cmp`; a question whose options are all atlas groups gets the
   comparison built from its own options without having to declare anything.
   ========================================================================== */
const CMP_TARGET = 132;   // px, smaller than the question's own structure

function fgName(key){
  const it = (typeof ATLAS !== 'undefined' ? ATLAS.item(key) : null);
  return it ? it.n : esc(key);
}
function fgTell(key){
  const it = (typeof ATLAS !== 'undefined' ? ATLAS.item(key) : null);
  if(!it) return '';
  /* the first clause of the atlas tell: what to look at, without the
     consequence trailing behind it */
  const plain = String(it.t).replace(/<[^>]+>/g, '');
  const stop = plain.search(/[.!?]/);
  return deEnt(stop > 0 ? plain.slice(0, stop + 1) : plain);
}

/* Which groups a question compares. An explicit `cmp` wins; otherwise a
   question whose every option names an atlas group compares its own options,
   which is exactly the set the reader was choosing between. The right answer
   leads, because the row is read as "this one, and here is what each of the
   others would have looked like". */
function cmpNames(q){
  if(Array.isArray(q.cmp)) return q.cmp.map(fgKey).filter(Boolean);
  const opts = (q.options || []).map(o => fgKey(o.t));
  if(!opts.length || !opts.every(Boolean)) return [];
  const right = fgKey((q.options.find(o => o.correct) || {}).t);
  return right ? [right, ...opts.filter(t => t !== right)] : opts;
}

function cmpStrip(q, heading){
  const names = cmpNames(q);
  if(names.length < 2) return '';
  const right = (q.options || []).filter(o => o.correct).map(o => fgKey(o.t));
  const cells = names.map(k => {
    const ok = right.includes(k);
    return `<figure class="cmpcell${ok ? ' is-ok' : ''}">
      <div class="cmpfig">${fgScale(FG[k], CMP_TARGET, 1.15)}</div>
      <figcaption><b>${fgName(k)}${ok ? '<i>the answer</i>' : ''}</b>${
        fgTell(k) ? `<span>${esc(fgTell(k))}</span>` : ''}</figcaption>
    </figure>`;
  }).join('');
  return `<div class="cmp">${heading ? `<h5>${esc(heading)}</h5>` : ''}
    <div class="cmprow">${cells}</div></div>`;
}

/* The structure for one option, drawn beside its explanation so the reader is
   not asked to hold four shapes in mind while reading about them. */
function optFig(name){
  const k = fgKey(name);
  const svg = (k && typeof FG !== 'undefined' && FG[k]) || '';
  return svg ? `<span class="wfig">${fgScale(svg, 84, 1)}</span>` : '';
}

/* ==========================================================================
   CONCEPT BLOCKS
   ==========================================================================
   `teach` is either a plain string or a list of {h, t} sections. A long block
   of unbroken prose is hard to scan and hard to re-read selectively, so a
   question whose concept splits into distinct parts — the mechanism, the
   category it belongs to, what it connects to — carries them as named
   sections instead. Both forms render, so no question has to be rewritten.
   ========================================================================== */
const teachParts = t => Array.isArray(t)
  ? t.filter(p => p && p.t).map(p => ({h: p.h, t: String(p.t)}))
  : (t ? [{t: String(t)}] : []);
const teachText  = t => teachParts(t).map(p => p.t).join(' ');

function renderTeach(t, seen, self){
  return teachParts(t).map(p =>
    (p.h ? `<h5 class="tsec">${esc(p.h)}</h5>` : '') +
    `<p class="prose">${seen ? glossify(esc(p.t), seen, self) : esc(p.t)}</p>`
  ).join('');
}

/* Adds each term's definition once per question, at its first appearance.
   `seen` is shared across the option explanations and the concept block, so a
   term is defined once and not at every mention. The text arrives escaped;
   insertions run right-to-left so earlier offsets stay valid. */
function glossify(txt, seen, self){
  const ins = [];
  for(const g of GLOSS){
    if(seen.has(g.k)) continue;
    if(g.skip.test(self)) { seen.add(g.k); continue; }
    const m = txt.match(new RegExp('\\b(' + g.p + ')', 'i'));
    if(!m) continue;
    seen.add(g.k);
    ins.push([m.index + m[0].length, g.d]);
  }
  ins.sort((a,b) => b[0] - a[0]);
  let out = txt;
  for(const [at, d] of ins)
    out = out.slice(0, at) + ' <span class="gloss">(' + d + ')</span>' + out.slice(at);
  return out;
}

/* ==========================================================================
   FILTERS + VIEW ROUTING
   ========================================================================== */
const FILTER = {prof:'all', tier:'all', tag:'all'};
let VIEW = 'topics';

function matchesFilter(q){
  if(FILTER.prof !== 'all' && q.prof !== FILTER.prof) return false;
  if(FILTER.tier !== 'all' && q.tier !== FILTER.tier) return false;
  if(FILTER.tag  !== 'all' && !(q.types||[]).includes(FILTER.tag)) return false;
  return true;
}
function poolFor(topicId, subId){
  return QUESTIONS.filter(q =>
    (!topicId || q.topic === topicId) &&
    (!subId   || q.sub   === subId)   &&
    matchesFilter(q));
}
/* Question types describe the TASK, matching how Dr. Sikazwe asks. Derived from
   each question rather than hand-tagged, so every file follows the same scheme. */
const TYPE_LABEL = {
  structure:'read a structure', enzyme:'name the enzyme or cofactor',
  predict:'predict the outcome', define:'define a term',
  list:'list or rank', tf:'true or false'};
/* What a question asks the student to do. One class per question, judged from
   the stem and the figure, in this order: a scheme or structure to read; a
   patient or drug scenario to work; two similar things to tell apart; the
   fact itself. Used by Weak spots to say which kind of thinking is failing. */
const SKILLS = [['read','Read a structure or scheme'], ['apply','Apply to a case'],
                ['tell','Tell apart'], ['recall','Recall the fact']];
const SKILL_SHORT = {read:'Read', apply:'Apply', tell:'Tell apart', recall:'Recall'};
function skillOf(q){
  if(q._skill) return q._skill;
  const s = q.stem, tags = q.tags || [];
  let k;
  if(q.img || q.fg || /\bshown\b|scheme below|plot shows|reaction below|circled|which number/i.test(s)) k = 'read';
  else if(tags.includes('case') || /patient|dialysis|is given|starts (a |an |taking |smoking|rifamp)|receives|takes |co-administ|overdose|what happens|expect|outcome|likely|develops|prescrib|a drug (that|with|has|is)|two drugs|two highly/i.test(s)) k = 'apply';
  else if(tags.includes('compare') || /differ|distinguish|\bboth\b|rather than|instead of|versus|\bvs\b|respectively|EXCEPT|WRONG|\bNOT\b|compared|in common|tell|which (one|two) of|same|apart|which of the (two|four)|only\b/i.test(s)) k = 'tell';
  else k = 'recall';
  return (q._skill = k);
}
function typesOf(q){
  const s = q.stem, t = new Set();
  if (/^true or false/i.test(s)) t.add('tf');
  if (q.img || /shown|below|structure|which number|circled/i.test(s)) t.add('structure');
  if (/enzyme|cofactor|co-factor|isoform|which family/i.test(s)) t.add('enzyme');
  if (/rank|order|itemize|list|how many|which set|which combination/i.test(s)) t.add('list');
  if (/what is |what does |defined|definition|term/i.test(s)) t.add('define');
  if (/patient|what happens|outcome|expect|predict|why does|explain|consequence|likely/i.test(s)) t.add('predict');
  if (!t.size) t.add((q.tags||[]).includes('definition') ? 'define' : 'predict');
  return [...t];
}
QUESTIONS.forEach(q => { q.types = typesOf(q); });
const ALL_TAGS = Object.keys(TYPE_LABEL).filter(k => QUESTIONS.some(q=>q.types.includes(k)));

function show(v){
  VIEW = v;
  document.querySelectorAll('#nav button').forEach(b=>b.setAttribute('aria-selected', b.dataset.v===v));
  ['topics','quiz','gaps','exam','atlas','guide','tell','ref','settings'].forEach(k=>
    document.getElementById('v-'+k).classList.toggle('hide', k!==v));
  window.scrollTo(0,0);
  ({topics:renderTopics, quiz:renderQuiz, gaps:renderGaps, exam:renderExam,
    atlas:renderAtlas, guide:renderGuide, tell:renderTell, ref:renderRef, settings:renderSettings}[v])();
}

/* ==========================================================================
   TOPICS
   ========================================================================== */
function filterBar(){
  const chip=(g,v,l)=>`<button class="chip" data-f="${g}" data-v="${v}" aria-pressed="${FILTER[g]===v}">${l}</button>`;
  return `<div class="filters">
    <div class="frow"><label>Professor</label>
      ${chip('prof','all','Both')}${chip('prof','Sikazwe','Sikazwe')}${chip('prof','Yendapally','Yendapally')}</div>
    <div class="frow"><label>Weighting</label>
      ${chip('tier','all','All')}${chip('tier','new','New (38 q)')}${chip('tier','old','Older (12 q)')}</div>
    <div class="frow"><label>Question type</label>
      ${chip('tag','all','Any')}${ALL_TAGS.map(t=>chip('tag',t,TYPE_LABEL[t])).join('')}</div>
  </div>`;
}

function renderTopics(){
  const counts = {};
  QUESTIONS.forEach(q => counts[q.prof] = (counts[q.prof]||0)+1);

  let h = `<h2>Pick a topic</h2>
  <p class="sub">Exam 4 is 50 questions on Mon 9/21, 9:00–10:15 am.
  Dr.&nbsp;Yendapally 8 · Dr.&nbsp;Sikazwe 42 (38 new, 4 older).
  Question bank: ${QUESTIONS.length} across ${conceptsIn(QUESTIONS).length} concepts.</p>`;

  h += filterBar();

  // The featured pass follows the paper. The bank holds 129 questions in the
  // pool that supplies 4 of the 50 marks and 137 in the pool that supplies 38,
  // so a pass through everything spends most of its time on the least-weighted
  // material. This one samples the three pools in the paper's own proportion,
  // anchored on the whole of the 38-mark pool, so the evening goes where the
  // marks are. The full pass is still here, second.
  const nAll = QUESTIONS.length, nFiltered = poolFor(null, null).length;
  const wp = weightedPool();
  h += `<div class="topic sweepcard"><div class="subs">
    <div class="subrow"><span class="sname"><b>Exam-weighted pass — ${wp.length} questions</b>
      <small>Every question from the 38-mark pool, plus Yendapally and the earlier Sikazwe material in the paper’s 38 : 8 : 4 proportion. Shuffled, each once.</small></span>
      <button id="sweepWeighted">Start</button></div>
    <div class="subrow"><span class="sname"><b>All ${nAll} questions, one pass</b>
      <small>Everything in the bank, shuffled, each asked once, nothing held back by scheduling</small></span>
      <button id="sweepAll" class="ghost">Start</button></div>
    ${nFiltered < nAll ? `<div class="subrow"><span class="sname"><b>All ${nFiltered} under the current filters</b>
      <small>The same straight pass, limited to what the chips above select</small></span>
      <button id="sweepFiltered" class="ghost">Start</button></div>` : ''}
  </div></div>`;

  for(const t of TOPICS){
    const pool = poolFor(t.id, null);
    if(!pool.length) continue;
    const m = masteryOf(pool);
    const pct = m.total ? Math.round(100*m.mastered/m.total) : 0;
    h += `<details class="topic"${t.open?' open':''}>
      <summary>
        <span class="tname">${esc(t.name)}<small>${esc(t.cite)}</small></span>
        ${profTag(t.prof)}
        <span class="meter"><i style="width:${pct}%"></i></span>
        <span class="counts">${m.mastered}/${m.total}</span>
      </summary>
      <div class="subs">`;

    for(const s of t.subs){
      const sp = poolFor(t.id, s.id);
      if(!sp.length) continue;
      const sm = masteryOf(sp);
      const spct = sm.total ? Math.round(100*sm.mastered/sm.total) : 0;
      const done = sm.total && sm.mastered === sm.total;
      h += `<div class="subrow">
        <span class="sname">${esc(s.name)}<small>${sp.length} questions · ${esc(s.cite)}</small></span>
        <span class="meter"><i style="width:${spct}%"></i></span>
        <button data-t="${t.id}" data-s="${s.id}" class="${done?'done':''}">${done?'Review':'Start'}</button>
      </div>`;
    }
    h += `<div class="subrow" style="border-top:1px solid var(--line-soft);margin-top:4px;padding-top:11px">
        <span class="sname"><b>Everything in ${esc(t.name)}</b><small>${pool.length} questions, mixed order</small></span>
        <button data-t="${t.id}" data-s="">Start</button>
      </div>`;
    h += `</div></details>`;
  }

  h += `<h3>Mixed drills</h3>
  <div class="topic"><div class="subs">
    <div class="subrow"><span class="sname"><b>Everything, adaptive</b>
      <small>Whole bank under the current filters — missed concepts first, and it stops when nothing is due</small></span>
      <button data-t="" data-s="">Start</button></div>
  </div></div>`;

  $('#v-topics').innerHTML = h;

  $('#v-topics').querySelectorAll('.chip').forEach(b => b.onclick = () => {
    FILTER[b.dataset.f] = b.dataset.v; renderTopics();
  });
  $('#v-topics').querySelectorAll('.subrow button[data-t]').forEach(b => b.onclick = () => {
    startQuiz(b.dataset.t || null, b.dataset.s || null);
  });
  const sa = document.getElementById('sweepAll');
  const sw = document.getElementById('sweepWeighted'); if(sw) sw.onclick = () => startSweep('weighted');
  if(sa) sa.onclick = () => startSweep('all');
  const sf = document.getElementById('sweepFiltered');
  if(sf) sf.onclick = () => startSweep('filtered');
}

/* ==========================================================================
   QUIZ RUNNER
   ========================================================================== */
let Q = null;     // {pool, label, current, order, answered, lastId, examMode}

function startQuiz(topicId, subId){
  const pool = poolFor(topicId, subId);
  if(!pool.length){ alert('No questions match those filters.'); return; }
  const t = TOPICS.find(x=>x.id===topicId);
  const s = t && t.subs.find(x=>x.id===subId);
  Q = {pool, label: s ? `${t.name} — ${s.name}` : (t ? t.name : 'Everything'),
       current:null, answered:0, lastId:null, examMode:false, picked:null, revealed:false};
  nextQuestion();
  show('quiz');
}

/* A straight sweep of the whole bank: every question asked once, in shuffled
   order, with no scheduling gate. The spaced-repetition runner is the better
   way to study, since it brings missed concepts back sooner and holds mastered
   ones, but it deliberately stops when nothing is due. When the whole set is
   examinable, seeing all of it once is its own requirement, and this is the
   mode for that. Answers still record, so Weak spots stays accurate. */
/* The pool for the exam-weighted pass: the whole 38-mark pool, and the other
   two pools sampled so the three sit in the paper's 38 : 8 : 4 ratio. Sampling
   takes one question per concept before any concept repeats, so the smaller
   pools are covered broadly rather than deeply. Deterministic per call only
   in size; the members are drawn fresh each time. */
function weightedPool(){
  const newP = QUESTIONS.filter(q=>q.prof==='Sikazwe' && q.tier==='new');
  const yenP = QUESTIONS.filter(q=>q.prof==='Yendapally');
  const oldP = QUESTIONS.filter(q=>q.prof==='Sikazwe' && q.tier==='old');
  const nYen = Math.min(yenP.length, Math.round(newP.length * 8/38));
  const nOld = Math.min(oldP.length, Math.round(newP.length * 4/38));
  return [...newP, ...drawN(yenP, nYen), ...drawN(oldP, nOld)];
}
function startSweep(scope){
  const pool = scope === 'filtered' ? poolFor(null, null)
             : scope === 'weighted' ? weightedPool()
             : QUESTIONS.slice();
  if(!pool.length){ alert('No questions match those filters.'); return; }
  Q = {pool,
       label: scope === 'filtered' ? 'Every question under these filters'
            : scope === 'weighted' ? 'Exam-weighted pass' : 'Every question',
       sweep: shuffle(pool.map(q => q.id)), i: 0,
       current:null, answered:0, lastId:null, examMode:false, picked:null, revealed:false};
  nextQuestion();
  show('quiz');
}

function nextQuestion(){
  let q;
  if(Q.sweep){
    // walk the fixed queue rather than asking the scheduler what is due
    q = null;
    while(Q.i < Q.sweep.length && !q) q = byId(Q.sweep[Q.i++]);
  }else{
    q = pickNext(Q.pool, Q.lastId);
  }
  Q.current = q; Q.picked = null; Q.revealed = false; Q.startedAt = Date.now();
  if(q) Q.order = shuffle(q.options.map((o,i)=>i));
  renderQuiz();
}

/* Material that came from the lecture audio rather than a slide is marked
   wherever a citation is shown, in the quiz and in the exam review alike. */
const srcFlag = q => q.source==='transcript' ? '<span class="srcflag">from lecture audio</span>'
                   : q.source==='both'       ? '<span class="srcflag">slides and lecture audio</span>' : '';
function renderQuiz(){
  const el = $('#v-quiz');
  if(!Q){ el.innerHTML = `<div class="empty">Choose a topic to begin.</div>`; return; }
  if(!Q.current && Q.sweep){
    el.innerHTML = `<div class="empty">
      <p><b>That is every question in this set — all ${Q.sweep.length} of them.</b></p>
      <p style="margin:10px 0 16px">Everything you answered is recorded, so Weak spots now
        reflects the whole bank and the adaptive runner will bring the missed concepts back first.</p>
      <p style="display:flex;gap:9px;flex-wrap:wrap;justify-content:center">
        <button class="btn" id="goGaps">See weak spots</button>
        <button class="btn ghost" id="goAgain">Sweep again, reshuffled</button>
        <button class="btn ghost" onclick="show('topics')">Back to topics</button>
      </p></div>`;
    document.getElementById('goGaps').onclick = () => show('gaps');
    document.getElementById('goAgain').onclick = () => startSweep(
      Q.label === 'Every question' ? 'all' : Q.label === 'Exam-weighted pass' ? 'weighted' : 'filtered');
    return;
  }
  if(!Q.current){
    const t = TOPICS.find(x=>x.name===String(Q.label).split(' — ')[0]);
    const wider = t ? poolFor(t.id, null).length : 0;
    el.innerHTML = `<div class="empty">
      <p><b>You have worked through everything available in this set.</b></p>
      <p style="margin:10px 0 16px">${Q.pool.length === 1
        ? 'This subtopic currently holds one question, so there is nothing further to draw from here.'
        : 'Every concept here has been answered and is scheduled to return later.'}</p>
      <p style="display:flex;gap:9px;flex-wrap:wrap;justify-content:center">
        ${t && wider > Q.pool.length
          ? `<button class="btn" id="goWide">Continue with all of ${esc(t.name)} (${wider})</button>` : ''}
        <button class="btn${t && wider > Q.pool.length ? ' ghost' : ''}" id="goAll">Continue with everything</button>
        <button class="btn ghost" onclick="show('topics')">Back to topics</button>
      </p></div>`;
    const gw = document.getElementById('goWide');
    if (gw) gw.onclick = () => startQuiz(t.id, null);
    document.getElementById('goAll').onclick = () => startQuiz(null, null);
    return;
  }
  const q = Q.current, s = DB.concepts[q.concept];
  const totalC = conceptsIn(Q.pool).length;
  const left   = remainingIn(Q.pool);
  const pctDone = totalC ? Math.round(100*(totalC-left)/totalC) : 0;
  const seenBefore = s && s.seen > 0;
  const missedBefore = s && s.wrong > 0 && s.box === 0;

  let h = `<div class="qcard"><div class="qhead">
    ${profTag(q.prof)}
    <span>${esc(Q.label)}</span>
    <span class="spacer"></span>
    ${missedBefore ? '<span style="color:var(--bad)">missed before</span>' :
      seenBefore   ? '<span>review</span>' : '<span>new</span>'}
  </div>
  <div class="qprog">
    <span>${Q.sweep ? `question ${Q.i} of ${Q.sweep.length}` : `${Q.answered} answered`}</span>
    <span class="pbar"><i style="width:${Q.sweep ? Math.round(100*Q.i/Q.sweep.length) : pctDone}%"></i></span>
    <span>${Q.sweep ? `${Q.sweep.length - Q.i} to go` : `${left} concept${left===1?'':'s'} to go`}</span>
  </div>
  <div class="qbody">
    <p class="stem">${esc(q.stem)}</p>`;

  if(q.img && IMAGES[q.img]) h += `<img class="qimg" src="${IMAGES[q.img]}" alt="Reaction scheme for this question">`;
  // A structure a question asks you to name belongs above the options, where
  // a slide crop would go. FG holds it as drawn SVG rather than a picture.
  if(q.fg) h += fgShow(q.fg);

  const multi = isMulti(q);
  const picks = multi ? (Q.picked || []) : null;
  if(multi) h += `<p class="sata">Select all that apply, then check. Marked right only when the whole set matches.</p>`;

  Q.order.forEach((oi,n)=>{
    const o = q.options[oi];
    let cls = 'opt' + (multi ? ' multi' : '');
    const chosen = multi ? picks.includes(oi) : (oi === Q.picked);
    if(Q.revealed){
      if(chosen) cls += o.correct ? ' pick-ok' : ' pick-bad';
      else if(o.correct)  cls += ' reveal-ok';
    }else if(multi && chosen){
      cls += ' on';
    }
    h += `<button class="${cls}" data-o="${oi}"${Q.revealed?' disabled':''} aria-pressed="${chosen}">
      <span class="k">${multi ? (chosen ? '\u2611' : '\u2610') : LETTERS[n]}</span><span>${esc(o.t)}</span></button>`;
  });

  if(Q.revealed){
    // one gloss per term per question, shared between the options and the concept block
    const seen = new Set();
    const self = [teachText(q.teach), ...q.options.map(o=>o.why||'')].join(' ');
    let ok, verdictLine;
    if(multi){
      ok = gradeMulti(q, picks);
      const want = correctSet(q);
      const missedOnes = want.filter(i => !picks.includes(i)).length;
      const extraOnes  = picks.filter(i => !want.includes(i)).length;
      verdictLine = ok ? `\u2713 Correct \u2014 all ${want.length} identified`
        : `\u2717 Not correct \u2014 ${missedOnes ? missedOnes + ' correct option' + (missedOnes>1?'s':'') + ' left out' : ''}${
            missedOnes && extraOnes ? ', ' : ''}${extraOnes ? extraOnes + ' wrong option' + (extraOnes>1?'s':'') + ' included' : ''}`;
    }else{
      ok = q.options[Q.picked].correct;
      verdictLine = ok ? '\u2713 Correct'
        : `\u2717 Not correct \u2014 the answer is ${LETTERS[Q.order.indexOf(q.options.findIndex(o=>o.correct))]}`;
    }
    h += `<div class="why">
      <p class="verdict ${ok?'ok':'bad'}">${verdictLine}</p>`;
    Q.order.forEach((oi,n)=>{
      const o = q.options[oi];
      const chosen = multi ? picks.includes(oi) : (oi === Q.picked);
      h += `<div class="wrow">
        <span class="mark ${o.correct?'y':'n'}">${o.correct?'\u2713':'\u2717'}</span>
        <span class="wtxt"><b>${LETTERS[n]}. ${esc(o.t)}</b>${multi && chosen ? ' <i class="youpicked">you selected this</i>' : ''} \u2014 ${glossify(esc(o.why), seen, self)}</span>
        ${optFig(o.t)}</div>`;
    });
    if(q.teach) h += `<div class="teach"><h4>The concept behind this</h4>${
        q.svg ? `<div class="tdiag">${q.svg}</div>` : ''}${
        q.teachImg && IMAGES[q.teachImg] ? `<img class="qimg tdimg" src="${IMAGES[q.teachImg]}" alt="Figure from the lecture slide">` : ''}${
        cmpStrip(q, 'The structures side by side')}${renderTeach(q.teach, seen, self)}</div>`;
    if(q.note) h += `<p class="prose" style="margin:13px 0 0;font-size:14.5px">${esc(q.note)}</p>`;
    h += `<div class="cite">${q.quote ? `<span class="quote">\u201c${esc(q.quote)}\u201d</span>` : ''}${
        srcFlag(q)}${esc(q.cite)}</div>`;
    h += `</div>`;
  }
  h += `</div><div class="qfoot">`;
  if(!Q.revealed){
    if(multi) h += `<button class="btn" id="btnCheck"${picks.length ? '' : ' disabled'}>Check answer</button>
      <span style="font-size:13px;color:var(--text-dim)">${picks.length} selected</span>`;
    else h += `<span style="font-size:13px;color:var(--text-dim)">Pick an answer.</span>`;
  }else{
    const wasRight = multi ? gradeMulti(q, picks) : q.options[Q.picked].correct;
    h += `<button class="btn" id="btnNext">Next question</button>`;
    if(wasRight && !Q.guessedLogged)
      h += `<button class="btn amber" id="btnGuess">I guessed that one</button>`;
    h += `<button class="btn ghost" onclick="show('topics')">Change topic</button>`;
  }
  h += `</div></div>`;
  el.innerHTML = h;

  el.querySelectorAll('.opt').forEach(b => b.onclick = () => multi ? toggleOption(+b.dataset.o) : answer(+b.dataset.o));
  const bc = $('#btnCheck'); if(bc) bc.onclick = submitMulti;
  const bn = $('#btnNext'); if(bn) bn.onclick = () => { Q.answered++; Q.lastId = Q.current.id; nextQuestion(); };
  const bg = $('#btnGuess'); if(bg) bg.onclick = () => {
    markGuessed(Q.current);
    Q.guessedLogged = true;
    bg.textContent = 'Marked as a guess';
    bg.disabled = true;
  };
}

function answer(oi){
  if(Q.revealed) return;
  Q.picked = oi; Q.revealed = true; Q.guessedLogged = false;
  record(Q.current, Q.current.options[oi].correct ? 'correct' : 'wrong', oi, Date.now() - (Q.startedAt||Date.now()));
  renderQuiz();
}
function toggleOption(oi){
  if(Q.revealed) return;
  const p = Q.picked || [];
  Q.picked = p.includes(oi) ? p.filter(x => x !== oi) : [...p, oi];
  renderQuiz();
}
function submitMulti(){
  if(Q.revealed || !Q.picked || !Q.picked.length) return;
  Q.revealed = true; Q.guessedLogged = false;
  const picks = Q.picked.slice().sort((a,b)=>a-b);
  record(Q.current, gradeMulti(Q.current, picks) ? 'correct' : 'wrong', picks, Date.now() - (Q.startedAt||Date.now()));
  renderQuiz();
}

/* ==========================================================================
   WEAK SPOTS
   ========================================================================== */
function renderGaps(){
  const el = $('#v-gaps');
  const tot = DB.answers.length;
  if(!tot){
    el.innerHTML = `<h2>Weak spots</h2>
      <div class="empty">Answer some questions and this fills in with what to study next,
      your accuracy by topic weighted by what each topic is worth on the paper, and every
      question you have missed.</div>`;
    return;
  }
  const right = DB.answers.filter(a=>a.result==='correct').length;
  const guess = DB.answers.filter(a=>a.result==='guessed').length;
  const wrong = DB.answers.filter(a=>a.result==='wrong').length;
  const m = masteryOf(QUESTIONS);

  let h = `<h2>Weak spots</h2>
  <p class="sub">Every answer you have logged, weighted by what it is worth on the paper.</p>
  <div class="stat">
    <div><b>${tot}</b><span>answered</span></div>
    <div><b style="color:var(--ok)">${Math.round(100*right/tot)}%</b><span>correct</span></div>
    <div><b style="color:var(--bad)">${wrong}</b><span>missed</span></div>
    <div><b style="color:var(--warn)">${guess}</b><span>guessed</span></div>
    <div><b>${m.mastered}</b><span>of ${m.total} concepts mastered</span></div>
  </div>`;

  /* ---- What to do next ------------------------------------------------
     Three pools, ranked by marks. For each: concepts never seen, concepts
     missed or guessed and not yet recovered. The 38-mark pool leads, since
     an unseen concept there is worth ten times one in the 4-mark pool. */
  const pools = [
    {key:'Sikazwe|new',   name:'Sikazwe, lectures 13–15', marks:38, filter:q=>q.prof==='Sikazwe'&&q.tier==='new'},
    {key:'Yendapally|old',name:'Yendapally',                   marks:8,  filter:q=>q.prof==='Yendapally'},
    {key:'Sikazwe|old',   name:'Sikazwe, earlier lectures',    marks:4,  filter:q=>q.prof==='Sikazwe'&&q.tier==='old'},
  ];
  h += `<h3>What to do next</h3><div class="nextgrid">`;
  for(const pl of pools){
    const pool = QUESTIONS.filter(pl.filter);
    const cs = conceptsIn(pool);
    const unseen = cs.filter(c => !DB.concepts[c] || !DB.concepts[c].seen);
    const open   = cs.filter(c => { const st = DB.concepts[c]; return st && st.seen && st.box === 0; });
    const done   = cs.filter(c => { const st = DB.concepts[c]; return st && st.box >= MASTER_BOX; });
    h += `<div class="nextcard">
      <div class="nexthead"><b>${esc(pl.name)}</b><span>${pl.marks} of 50 marks · ${cs.length} concepts</span></div>
      <div class="nextrow"><span>${unseen.length} not yet seen</span>${unseen.length
        ? `<button class="btn small" data-next="unseen" data-pool="${pl.key}">Start these</button>` : '<i>none</i>'}</div>
      <div class="nextrow"><span>${open.length} missed or guessed, still open</span>${open.length
        ? `<button class="btn small amber" data-next="open" data-pool="${pl.key}">Redrill</button>` : '<i>none</i>'}</div>
      <div class="nextrow"><span>${done.length} mastered</span><i>${cs.length ? Math.round(100*done.length/cs.length) : 0}%</i></div>
    </div>`;
  }
  h += `</div>`;

  /* ---- Which kind of question is failing ---------------------------------
     Every question is classed by what it asks the student to do. A miss on a
     recall item and a miss on a case item call for different repairs (reread
     the slide, or work the reasoning again), so the split is shown before the
     topic table, and each topic row carries its own split. */
  const bySkill = {};
  SKILLS.forEach(([k]) => bySkill[k] = {n:0, r:0, w:0, g:0, atRisk:0});
  for(const a of DB.answers){
    const q = byId(a.qid); if(!q) continue;
    const b = bySkill[skillOf(q)];
    b.n++; if(a.result==='correct') b.r++; else if(a.result==='wrong') b.w++; else b.g++;
    b.atRisk += a.result==='correct' ? 0 : (a.result==='wrong' ? 1 : 0.5) * markWeight(q);
  }
  h += `<h3>Which kind of question is failing</h3>
  <p class="sub">Recall is the fact itself. Tell apart is choosing between things with similar wording. Apply is a patient or drug scenario. Read is a structure or reaction scheme.</p>
  <table class="gap"><thead><tr><th>Kind</th><th>Seen</th><th>Missed</th><th>Guessed</th><th>Marks at risk</th><th style="width:30%">Accuracy</th></tr></thead><tbody>`;
  for(const [k, label] of SKILLS){
    const b = bySkill[k]; if(!b.n) continue;
    const pct = Math.round(100*b.r/b.n);
    const col = pct>=80 ? 'var(--ok)' : pct>=60 ? 'var(--warn)' : 'var(--bad)';
    h += `<tr><td>${esc(label)}</td><td>${b.n}</td><td${b.w?' style="color:var(--bad);font-weight:600"':''}>${b.w}</td>
      <td${b.g?' style="color:var(--warn)"':''}>${b.g}</td><td${b.atRisk>=0.5?' style="font-weight:600"':''}>${b.atRisk.toFixed(1)}</td>
      <td><div class="bar"><i style="width:${pct}%;background:${col}"></i></div><span style="font-size:12px;color:var(--text-dim)">${pct}%</span></td></tr>`;
  }
  h += `</tbody></table>`;

  /* ---- Accuracy by topic, ordered by marks at risk -------------------
     A miss in a 137-question pool that supplies 38 marks costs 38/137 of a
     mark; a miss in the 129-question pool that supplies 4 costs 4/129. Sorting
     by that, rather than by the raw count, puts the topic that is actually
     costing marks at the top even when it has fewer questions to miss. */
  const rows = [];
  for(const t of TOPICS){
    const qs = QUESTIONS.filter(q=>q.topic===t.id);
    const ids = new Map(qs.map(q=>[q.id,q]));
    const as  = DB.answers.filter(a=>ids.has(a.qid));
    if(!as.length) continue;
    const r = as.filter(a=>a.result==='correct').length;
    const w = as.filter(a=>a.result==='wrong').length;
    const g = as.filter(a=>a.result==='guessed').length;
    const atRisk = as.reduce((acc,a)=> acc + (a.result==='correct' ? 0 : (a.result==='wrong' ? 1 : 0.5) * markWeight(ids.get(a.qid))), 0);
    // the same answers split by kind, for the line under the topic name
    const sk = {};
    for(const a of as){ const k = skillOf(ids.get(a.qid)); (sk[k] ||= {n:0,r:0}).n++; if(a.result==='correct') sk[k].r++; }
    rows.push({t, n:as.length, r, w, g, pct: Math.round(100*r/as.length), atRisk, sk});
  }
  rows.sort((a,b)=> b.atRisk - a.atRisk || a.pct - b.pct);

  /* ---- Weakest topics on a comparable footing ------------------------------
     Raw accuracy favours the topic answered least. Each topic with three or
     more answers is compared with the accuracy of its own pool (the 38-, 8-
     or 4-mark pool), and the gap in percentage points is what ranks it. The
     kind of question missed most inside that topic is named beside it. */
  const poolAcc = {};
  for(const a of DB.answers){ const q = byId(a.qid); if(!q) continue;
    const k = poolKey(q); (poolAcc[k] ||= {n:0,r:0}).n++; if(a.result==='correct') poolAcc[k].r++; }
  const weakest = rows.filter(r => r.n >= 3).map(r => {
    const pk = poolKey(QUESTIONS.find(q=>q.topic===r.t.id));
    const pa = poolAcc[pk] ? Math.round(100*poolAcc[pk].r/poolAcc[pk].n) : r.pct;
    let worst = null;
    for(const [sk, label] of SKILLS){ const s = r.sk[sk]; if(!s || s.n < 2) continue;
      const p = Math.round(100*s.r/s.n); if(!worst || p < worst.p) worst = {label, p, n:s.n}; }
    return {r, gap: pa - r.pct, pa, worst};
  }).filter(x => x.gap > 0).sort((a,b) => b.gap - a.gap).slice(0, 5);
  if(weakest.length){
    h += `<h3>Weakest topics, on a comparable footing</h3>
    <p class="sub">Topics with three or more answers, ranked by how far they sit below the accuracy of their own pool. The kind of question missed most in that topic is named beside it.</p>
    <table class="gap"><thead><tr><th>Topic</th><th>Yours</th><th>Pool</th><th>Gap</th><th>Weakest kind</th></tr></thead><tbody>`;
    for(const x of weakest){
      h += `<tr><td>${esc(x.r.t.name)}</td><td>${x.r.pct}%</td><td>${x.pa}%</td><td style="color:var(--bad);font-weight:600">&minus;${x.gap}</td>
        <td>${x.worst ? `${esc(x.worst.label)} (${x.worst.p}% of ${x.worst.n})` : '<i>too few of any one kind</i>'}</td></tr>`;
    }
    h += `</tbody></table>`;
  }

  h += `<h3>Where you are losing marks</h3>
  <p class="sub">Marks at risk = each miss weighted by what one question in that pool is worth on the paper (a guess counts half).</p>
  <table class="gap"><thead><tr>
    <th>Topic</th><th>Seen</th><th>Missed</th><th>Guessed</th><th>Marks at risk</th><th style="width:30%">Accuracy</th>
  </tr></thead><tbody>`;
  for(const r of rows){
    const col = r.pct>=80 ? 'var(--ok)' : r.pct>=60 ? 'var(--warn)' : 'var(--bad)';
    h += `<tr>
      <td>${esc(r.t.name)}<br><span style="font-size:11.5px;color:var(--text-dim)">${r.t.prof}</span><br>
          <span style="font-size:11.5px;color:var(--text-dim)">${SKILLS.filter(([k]) => r.sk[k]).map(([k,label]) => `${SKILL_SHORT[k]} ${r.sk[k].r}/${r.sk[k].n}`).join(' &middot; ')}</span></td>
      <td>${r.n}</td>
      <td${r.w?' style="color:var(--bad);font-weight:600"':''}>${r.w}</td>
      <td${r.g?' style="color:var(--warn)"':''}>${r.g}</td>
      <td${r.atRisk>=0.5?' style="font-weight:600"':''}>${r.atRisk.toFixed(1)}</td>
      <td><div class="bar"><i style="width:${r.pct}%;background:${col}"></i></div>
          <span style="font-size:12px;color:var(--text-dim)">${r.pct}%</span></td>
    </tr>`;
  }
  h += `</tbody></table>`;

  /* ---- Confusions -------------------------------------------------------
     Which wrong option was picked, grouped. A pair that recurs is a specific
     misunderstanding with a name, and the atlas or the concept block for that
     pair is what to read. Only answers logged with `picked` count. */
  const pairs = {};
  for(const a of DB.answers){
    if(a.result !== 'wrong' || a.picked === undefined || a.picked === null) continue;
    const q = byId(a.qid); if(!q) continue;
    const right = q.options.filter(o=>o.correct).map(o=>o.t).join(' + ');
    const pickedIdx = Array.isArray(a.picked) ? a.picked : [a.picked];
    const wrongPicked = pickedIdx.filter(i => q.options[i] && !q.options[i].correct).map(i => q.options[i].t);
    for(const wp of wrongPicked){
      const k = right + '\u0000' + wp;
      (pairs[k] ||= {right, wrong:wp, n:0, qids:new Set(), topic:q.topic}).n++;
      pairs[k].qids.add(q.id);
    }
  }
  const plist = Object.values(pairs).sort((a,b)=>b.n-a.n).slice(0,12);
  if(plist.length){
    h += `<h3>What you keep choosing instead</h3>
    <p class="sub">The wrong option you picked, against the right one. A pair that appears more than once is a confusion worth naming and reading up on.</p>
    <table class="gap"><thead><tr><th>You picked</th><th>The answer was</th><th>Times</th><th>Topic</th></tr></thead><tbody>`;
    for(const pr of plist){
      const t = TOPICS.find(x=>x.id===pr.topic);
      h += `<tr><td style="color:var(--bad)">${esc(pr.wrong)}</td><td style="color:var(--ok)">${esc(pr.right)}</td>
        <td${pr.n>1?' style="font-weight:600"':''}>${pr.n}</td><td>${t?esc(t.name):''}</td></tr>`;
    }
    h += `</tbody></table>`;
  }

  /* ---- Every missed question -------------------------------------------- */
  const missedIds = [...new Set(DB.answers.filter(a=>a.result==='wrong').map(a=>a.qid))];
  h += `<h3>Every question you have missed (${missedIds.length})</h3>`;
  if(!missedIds.length){
    h += `<div class="empty">Nothing missed yet.</div>`;
  }else{
    h += `<p class="sub"><button class="btn" id="drillMissed">Drill these ${missedIds.length} now</button></p>`;
    for(const id of missedIds.slice().reverse()){
      const q = byId(id); if(!q) continue;
      const s = DB.concepts[q.concept] || {};
      const correctTxt = q.options.filter(o=>o.correct).map(o=>o.t).join(' · ');
      const last = DB.answers.slice().reverse().find(a=>a.qid===id && a.result==='wrong');
      const pickedTxt = last && last.picked !== undefined
        ? (Array.isArray(last.picked) ? last.picked : [last.picked]).map(i=>q.options[i] ? q.options[i].t : '').filter(Boolean).join(' · ')
        : '';
      h += `<div class="missq">
        <div class="mstem">${esc(q.stem)}</div>
        <div class="mmeta" style="color:var(--ok);margin-bottom:4px">Answer: ${esc(correctTxt)}</div>
        ${pickedTxt ? `<div class="mmeta" style="color:var(--bad);margin-bottom:4px">You picked: ${esc(pickedTxt)}</div>` : ''}
        <div class="mmeta">${esc(q.cite)} · missed ${s.wrong||1}× · ${s.box>=MASTER_BOX?'now mastered':'still in review'}</div>
      </div>`;
    }
  }
  el.innerHTML = h;

  el.querySelectorAll('[data-next]').forEach(b => b.onclick = () => {
    const pl = pools.find(x=>x.key===b.dataset.pool);
    const pool = QUESTIONS.filter(pl.filter);
    const want = b.dataset.next === 'unseen'
      ? pool.filter(q => !DB.concepts[q.concept] || !DB.concepts[q.concept].seen)
      : pool.filter(q => { const st = DB.concepts[q.concept]; return st && st.seen && st.box === 0; });
    if(!want.length) return;
    Q = {pool:want, label:(b.dataset.next==='unseen' ? 'Not yet seen — ' : 'Redrill — ') + pl.name,
         sweep: shuffle(want.map(q=>q.id)), i:0,
         current:null, answered:0, lastId:null, examMode:false, picked:null, revealed:false};
    nextQuestion(); show('quiz');
  });
  const d = $('#drillMissed');
  if(d) d.onclick = () => {
    const pool = QUESTIONS.filter(q => missedIds.includes(q.id) ||
      missedIds.some(id => byId(id) && byId(id).concept === q.concept));
    Q = {pool, label:'Missed concepts', current:null, answered:0, lastId:null, picked:null, revealed:false};
    nextQuestion(); show('quiz');
  };
}

/* ==========================================================================
   EXAM SIMULATION — 50 questions at the real 8 / 4 / 38 blueprint, 75 minutes
   ========================================================================== */
let EX = null;
function renderExam(){
  const el = $('#v-exam');
  if(EX && EX.running){ renderExamQ(); return; }
  if(EX && EX.done){ renderExamResult(); return; }
  const nMulti = QUESTIONS.filter(isMulti).length;
  el.innerHTML = `<h2>Exam simulation</h2>
  <p class="sub">50 questions drawn at the real blueprint — 8 Yendapally, 4 Sikazwe older,
  38 Sikazwe new — with a 75-minute clock. The paper mixes single-answer and select-all items, so
  this draw does too: about ${EXAM_SATA} of the 50 are select-all, marked all-or-nothing.
  No explanations until you finish, same as the real thing.</p>
  <div class="note"><b>This does not feed your spaced-repetition history until you submit.</b>
  Finish the paper, then every answer is logged at once so your weak spots stay accurate.</div>
  <p><button class="btn" id="startExam">Start the 75-minute paper</button></p>`;
  $('#startExam').onclick = beginExam;
}
/* A question marked dupOf:'x' tests the same fact as question x, so a paper
   never carries both: taking either one blocks the other. */
function drawN(pool, n, blocked){
  const picked = [], used = blocked || new Set(), byConcept = {};
  const take = q => { picked.push(q); used.add(q.id); if(q.dupOf) used.add(q.dupOf); };
  const free = q => !used.has(q.id) && !(q.dupOf && used.has(q.dupOf));
  shuffle(pool.slice()).forEach(q => { (byConcept[q.concept] ||= []).push(q); });
  const concepts = shuffle(Object.keys(byConcept));
  for(const c of concepts){                       // one per concept first, for spread
    if(picked.length >= n) break;
    const q = byConcept[c].find(free);
    if(q) take(q);
  }
  for(const q of shuffle(pool.slice())){          // top up if the bank is short on concepts
    if(picked.length >= n) break;
    if(free(q)) take(q);
  }
  return picked.slice(0,n);
}
/* How many of the 50 are select-all. The exam is described as a mix of
   multiple choice and select-all without a stated split, so the draw aims for
   this many, taken in proportion to each pool's share of the paper, and falls
   back to whatever the bank holds if a pool has fewer. */
const EXAM_SATA = 8;

/* Draw n from a pool with a target number of select-all items in it. Select-all
   questions are drawn first so they are never crowded out, then single-answer
   questions fill the rest, one concept each before any concept repeats. */
function drawMixed(pool, n, nSata){
  const used = new Set();
  const sata = drawN(pool.filter(isMulti), Math.min(nSata, n), used);
  const rest = drawN(pool.filter(q => !isMulti(q)), n - sata.length, used);
  return [...sata, ...rest];
}
function beginExam(){
  // lowYield items (slide asides never polled or listed for review) stay out of the paper
  const examQ = QUESTIONS.filter(q => !q.lowYield);
  const yenP = examQ.filter(q=>q.prof==='Yendapally');
  const oldP = examQ.filter(q=>q.prof==='Sikazwe' && q.tier==='old');
  const newP = examQ.filter(q=>q.prof==='Sikazwe' && q.tier==='new');
  // select-all items spread across the pools in the paper's 38 : 8 : 4 ratio
  const sNew = Math.round(EXAM_SATA * 38/50), sYen = Math.round(EXAM_SATA * 8/50);
  const sOld = Math.max(0, EXAM_SATA - sNew - sYen);
  const yen = drawMixed(yenP, 8, sYen);
  const old = drawMixed(oldP, 4, sOld);
  const nw  = drawMixed(newP, 38, sNew);
  const qs  = shuffle([...yen, ...old, ...nw]);
  EX = {qs, i:0, picks:qs.map(q => isMulti(q) ? [] : null), running:true, done:false,
        ends: Date.now() + 75*60000, orders: qs.map(q=>shuffle(q.options.map((o,k)=>k)))};
  clearInterval(EX.timer);
  EX.timer = setInterval(()=>{
    if(!EX || !EX.running) return clearInterval(EX.timer);
    if(Date.now() >= EX.ends){ finishExam(); return; }
    const c = document.getElementById('exClock');
    if(c){ const l = EX.ends - Date.now();
      c.textContent = fmt(l); c.classList.toggle('low', l < 5*60000); }
  }, 1000);
  renderExamQ();
}
const fmt = ms => { const s = Math.max(0, Math.round(ms/1000));
  return String(Math.floor(s/60)).padStart(2,'0') + ':' + String(s%60).padStart(2,'0'); };

function renderExamQ(){
  const el = $('#v-exam'), q = EX.qs[EX.i], order = EX.orders[EX.i];
  const answered = EX.picks.filter(p => Array.isArray(p) ? p.length > 0 : p !== null).length;
  const multi = isMulti(q);
  let h = `<div class="examhead">
    <span class="clock" id="exClock">${fmt(EX.ends-Date.now())}</span>
    <span class="prog">Question ${EX.i+1} of ${EX.qs.length} · ${answered} answered</span>
  </div>
  <div class="qcard"><div class="qhead">${profTag(q.prof)}${multi ? '<span class="tag sata">select all that apply</span>' : ''}<span class="spacer"></span>
    <span>no feedback until you submit</span></div>
  <div class="qbody"><p class="stem">${esc(q.stem)}</p>`;
  if(q.img && IMAGES[q.img]) h += `<img class="qimg" src="${IMAGES[q.img]}" alt="Reaction scheme">`;
  if(q.fg) h += fgShow(q.fg);
  order.forEach((oi,n)=>{
    const sel = multi ? EX.picks[EX.i].includes(oi) : EX.picks[EX.i] === oi;
    h += `<button class="opt${multi?' multi':''}${sel?(multi?' on':' pick-ok'):''}" data-o="${oi}" aria-pressed="${sel}">
      <span class="k">${multi ? (sel ? '\u2611' : '\u2610') : LETTERS[n]}</span><span>${esc(q.options[oi].t)}</span></button>`;
  });
  h += `</div><div class="qfoot">
    <button class="btn ghost" id="exPrev"${EX.i===0?' disabled':''}>Back</button>
    <button class="btn" id="exNext">${EX.i===EX.qs.length-1?'Review':'Next'}</button>
    <span class="spacer" style="flex:1"></span>
    <button class="btn ghost" id="exEnd">Submit paper</button>
  </div></div>`;
  el.innerHTML = h;
  el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
    const oi = +b.dataset.o;
    if(multi){ const p = EX.picks[EX.i]; EX.picks[EX.i] = p.includes(oi) ? p.filter(x=>x!==oi) : [...p, oi]; }
    else EX.picks[EX.i] = oi;
    renderExamQ(); });
  $('#exPrev').onclick = ()=>{ if(EX.i>0){EX.i--; renderExamQ();} };
  $('#exNext').onclick = ()=>{ if(EX.i<EX.qs.length-1){EX.i++; renderExamQ();} else finishExam(); };
  $('#exEnd').onclick  = ()=>{ if(confirm('Submit the paper and see your score?')) finishExam(); };
}
/* One place decides whether an exam answer was right, for both grading and the
   review page: a select-all item is right only when the whole set matches. */
function examRight(q, p){
  if(isMulti(q)) return Array.isArray(p) && p.length > 0 && gradeMulti(q, p);
  return p !== null && p !== undefined && q.options[p].correct;
}
const examBlank = (q, p) => isMulti(q) ? !(Array.isArray(p) && p.length) : (p === null || p === undefined);
function finishExam(){
  clearInterval(EX.timer);
  EX.running = false; EX.done = true;
  EX.qs.forEach((q,i)=>{
    const p = EX.picks[i];
    const picked = isMulti(q) ? (p || []).slice().sort((a,b)=>a-b) : p;
    record(q, examRight(q, p) ? 'correct' : 'wrong', picked);
  });
  renderExamResult();
}
function renderExamResult(){
  const right = EX.qs.filter((q,i)=> examRight(q, EX.picks[i])).length;
  const blank = EX.qs.filter((q,i)=> examBlank(q, EX.picks[i])).length;
  const pct = Math.round(100*right/EX.qs.length);
  let h = `<h2>Exam simulation — ${right} / ${EX.qs.length} (${pct}%)</h2>
  <p class="sub">${blank ? blank+' left blank, scored as incorrect. ' : ''}All 50 are now in your history,
  so anything you missed is back in active review.</p>
  <p><button class="btn" id="exAgain">New paper</button>
     <button class="btn ghost" onclick="show('gaps')">See weak spots</button></p>
  <h3>Every question, with the reasoning</h3>`;
  EX.qs.forEach((q,i)=>{
    const p = EX.picks[i], ok = examRight(q, p), blankQ = examBlank(q, p), multi = isMulti(q);
    const chosen = oi => multi ? (p || []).includes(oi) : oi === p;
    h += `<div class="qcard" style="margin-bottom:12px"><div class="qhead">
      ${profTag(q.prof)}<span>Q${i+1}</span>${multi ? '<span class="tag sata">select all</span>' : ''}<span class="spacer"></span>
      <span style="color:${ok?'var(--ok)':'var(--bad)'}">${ok?'correct':(blankQ?'blank':'missed')}</span>
      </div><div class="qbody"><p class="stem" style="font-size:15.5px">${esc(q.stem)}</p>`;
    if(q.img && IMAGES[q.img]) h += `<img class="qimg" src="${IMAGES[q.img]}" alt="Reaction scheme">`;
    if(q.fg) h += fgShow(q.fg);
    EX.orders[i].forEach((oi,n)=>{
      const o = q.options[oi];
      h += `<div class="wrow"><span class="mark ${o.correct?'y':'n'}">${o.correct?'\u2713':'\u2717'}</span>
        <span class="wtxt"><b>${LETTERS[n]}. ${esc(o.t)}</b>${chosen(oi)?' &nbsp;<i>(you picked this)</i>':''} \u2014 ${esc(o.why)}</span>
        ${optFig(o.t)}</div>`;
    });
    if(q.teach) h += `<div class="teach"><h4>The concept behind this</h4>${
        q.svg ? `<div class="tdiag">${q.svg}</div>` : ''}${
        q.teachImg && IMAGES[q.teachImg] ? `<img class="qimg tdimg" src="${IMAGES[q.teachImg]}" alt="Figure from the lecture slide">` : ''}${
        cmpStrip(q, 'The structures side by side')}${renderTeach(q.teach)}</div>`;
    h += `<div class="cite">${q.quote ? `<span class="quote">\u201c${esc(q.quote)}\u201d</span>` : ''}${srcFlag(q)}${esc(q.cite)}</div></div></div>`;
  });
  $('#v-exam').innerHTML = h;
  $('#exAgain').onclick = ()=>{ EX=null; renderExam(); };
}

/* ==========================================================================
   REFERENCE
   ========================================================================== */
/* The reference text carries {{fig:key|caption}} tokens rather than the base64
   itself, so reference.js stays readable and a figure is stored once in
   IMAGES. A token naming a key that is not in the bank is dropped rather than
   rendered as a broken image. */
const ENT = {'&mdash;':'—','&ndash;':'–','&nbsp;':' ','&rarr;':'→',
             '&amp;':'&','&lt;':'<','&gt;':'>','&deg;':'°','&pi;':'π',
             '&minus;':'−','&le;':'≤','&ge;':'≥',
             /* the atlas adds these */
             '&beta;':'β','&alpha;':'α','&gamma;':'γ','&equiv;':'≡',
             '&ldquo;':'“','&rdquo;':'”','&rsquo;':'’',
             '&lsquo;':'‘','&hellip;':'…','&times;':'×'};
/* Reference text is authored as HTML, so an entity has to be decoded before it
   is re-escaped for an attribute or a caption, or it reads out literally.
   Numeric entities are decoded too, since the atlas writes &#8801; for a
   triple bond. */
const deEnt = t => String(t)
  .replace(/&[a-z]+;/gi, e => ENT[e] !== undefined ? ENT[e] : e)
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));

function refFigures(html){
  return html.replace(/\{\{fig:([a-z0-9_]+)\|([^}]*)\}\}/gi, (_, key, cap) => {
    if(!IMAGES[key]) return '';
    const c = esc(deEnt(cap));
    return `<figure class="reffig"><img src="${IMAGES[key]}" alt="${c}">` +
           `<figcaption>${c}</figcaption></figure>`;
  });
}

/* ==========================================================================
   FUNCTIONAL GROUP ATLAS
   ==========================================================================
   Every group drawn at the same scale, with confusable ones side by side and
   the atom that separates them shaded. Structures come from atlas.js, which
   renders them from atom-and-bond data rather than storing pictures, so they
   stay sharp at any size and cost almost nothing in file size.

   "Hide names" turns the page into a recall test: the drawing stays, the name
   and the tell disappear, and clicking a structure reveals just that one.
   ========================================================================== */
let ATLAS_BUILT = false;

function renderAtlas(){
  const el = $('#v-atlas');
  if(ATLAS_BUILT) return;

  const count = ATLAS.boards.reduce((n,b)=>n+b.sections.reduce((m,s)=>m+s.items.length,0),0);
  let h = `<h2>Functional group atlas</h2>
  <p class="sub">${count} groups, drawn to the same scale. The ones that get confused sit next to
  each other and the atom that separates them is shaded. Read a row left to right, then hide the
  names and go along it again.</p>
  <div class="atbar">
    <input id="atq" type="search" placeholder="Find a group\u2026" aria-label="Find a functional group">
    <button class="chip" id="atHide" aria-pressed="false">Hide names</button>
    <button class="chip hide" id="atShow">Reveal all</button>
    <span class="spacer"></span>
    <span style="font-size:12px;color:var(--text-dim)" id="atCount"></span>
  </div>`;

  for(const b of ATLAS.boards){
    h += `<section class="atboard" id="at-${b.id}"><h3>${b.title}</h3>
      <p class="bintro">${b.intro}</p>`;
    for(const sec of b.sections){
      h += `<div class="atsub">${esc(sec.label)}</div><div class="atgrid">`;
      for(const it of sec.items){
        const svg = ATLAS.FG[it.plain] || '';
        const hay = (it.plain + ' ' + it.t + ' ' + (it.e||'')).replace(/<[^>]+>/g,'').toLowerCase();
        h += `<article class="attile" data-find="${esc(hay)}">
          <div class="atfig">${svg}</div>
          <div class="atname">${it.n}</div>
          <p class="attell">${it.t}</p>
          ${it.e ? `<p class="ateg">${esc(it.e)}</p>` : ''}
        </article>`;
      }
      h += `</div>`;
    }
    if(b.note) h += `<p class="atnote">${b.note}</p>`;
    h += `</section>`;
  }
  h += `<p class="sub" style="margin-top:26px">A bare line end is a carbon with three hidden
  hydrogens and a plain vertex is a carbon with two. A line end carrying a letter is that atom
  instead, not a carbon \u2014 different drawings entirely, and the cheapest point to lose.</p>`;

  el.innerHTML = h;
  ATLAS_BUILT = true;

  const tiles = [...el.querySelectorAll('.attile')];
  const q = el.querySelector('#atq'), hide = el.querySelector('#atHide'),
        showAll = el.querySelector('#atShow'), count$ = el.querySelector('#atCount');

  const recount = () => {
    const live = tiles.filter(t => !t.hidden).length;
    count$.textContent = live === tiles.length ? `${tiles.length} groups` : `${live} of ${tiles.length}`;
  };
  recount();

  q.oninput = () => {
    const v = q.value.trim().toLowerCase();
    tiles.forEach(t => t.hidden = v && t.dataset.find.indexOf(v) === -1);
    el.querySelectorAll('.atboard').forEach(b => {
      b.querySelectorAll('.atgrid').forEach(g => {
        const any = [...g.children].some(c => !c.hidden);
        g.hidden = !any;
        if(g.previousElementSibling) g.previousElementSibling.hidden = !any;
      });
      const live = [...b.querySelectorAll('.attile')].some(t => !t.hidden);
      b.querySelectorAll('h3, .bintro, .atnote').forEach(x => x.hidden = !live);
    });
    recount();
  };

  hide.onclick = () => {
    const on = !el.classList.contains('namesoff');
    el.classList.toggle('namesoff', on);
    hide.setAttribute('aria-pressed', on ? 'true' : 'false');
    hide.textContent = on ? 'Names hidden' : 'Hide names';
    showAll.classList.toggle('hide', !on);
    if(!on) tiles.forEach(t => t.classList.remove('shown'));
  };
  showAll.onclick = () => tiles.forEach(t => t.classList.add('shown'));
  tiles.forEach(t => t.querySelector('.atfig').onclick = () => {
    if(el.classList.contains('namesoff')) t.classList.toggle('shown');
  });
}

function renderDoc(el, html, prefix){
  // a jump list, built from the section headings that are actually present
  // headings are authored as HTML, so entities are decoded before the label is
  // re-escaped for the link; otherwise a chip reads "&mdash;" literally
  const heads = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)]
    .map(m => deEnt(m[1].replace(/<[^>]+>/g, '')).trim());
  let i = 0;
  const body = html.replace(/<h3([^>]*)>/g, (m, attrs) => `<h3 id="${prefix}-${i++}"${attrs}>`);
  // the jump list folds away so it does not sit between the reader and the
  // tables while scrolling; it opens on tap and closes again after a jump
  const nav = heads.length
    ? `<details class="refnav-wrap"><summary>Jump to a section</summary><nav class="refnav">${heads.map((h, n) =>
        `<a href="#${prefix}-${n}">${esc(h)}</a>`).join('')}</nav></details>`
    : '';
  el.innerHTML = body.replace('</p>', '</p>' + nav);
  // anchor links inside a scrolling panel need handling rather than a page jump
  el.querySelectorAll('.refnav a').forEach(a => a.onclick = e => {
    e.preventDefault();
    const t = el.querySelector(a.getAttribute('href'));
    const d = el.querySelector('.refnav-wrap'); if (d) d.open = false;
    if (t) t.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
}
function renderRef(){ renderDoc($('#v-ref'), refFigures(REFERENCE_HTML), 'ref'); }
function renderTell(){ renderDoc($('#v-tell'), refFigures(TELL_HTML), 'tell'); }
function renderGuide(){ renderDoc($('#v-guide'), refFigures(GUIDE_HTML), 'guide'); }

/* ==========================================================================
   SETTINGS
   ========================================================================== */
function renderSettings(){
  const mode = DB.settings.mode || 'cram';
  $('#v-settings').innerHTML = `<h2>Settings</h2>
  <p class="sub">Progress is stored in this browser only, under the name “${esc(PROFILE)}”.</p>

  <h3>Review schedule</h3>
  <div class="filters">
    <div class="frow">
      <button class="chip" data-m="cram"  aria-pressed="${mode==='cram'}">Exam cram</button>
      <button class="chip" data-m="long"  aria-pressed="${mode==='long'}">Long term</button>
      <button class="chip" data-m="all"   aria-pressed="${mode==='all'}">Ask everything</button>
    </div>
    <p style="font-size:13.5px;color:var(--text-dim);margin:4px 0 0">
      <b>Exam cram</b> spaces a correct concept by how many questions you answer after it
      (8, 20, 45, 90…), so everything can still come back before Monday.
      <b>Long term</b> uses real days (1, 3, 7, 14, 30, 60) — switch to this after the exam.
      <b>Ask everything</b> ignores scheduling and keeps serving questions, still worst-first.
    </p>
  </div>

  <h3>Move your progress between devices</h3>
  <div class="filters">
    <div class="frow">
      <button class="btn" id="btnExport">Download my progress</button>
      <button class="btn ghost" id="btnImport">Load a progress file</button>
      <input type="file" id="fileIn" accept="application/json" class="hide">
    </div>
    <p style="font-size:13.5px;color:var(--text-dim);margin:4px 0 0">
      Storage does not sync between your phone and your laptop. Export on one, import on the other.
    </p>
  </div>

  <h3>Start over</h3>
  <div class="filters">
    <div class="frow"><button class="btn ghost" id="btnReset"
      style="color:var(--bad);border-color:#E9B8B4">Erase my history</button></div>
    <p style="font-size:13.5px;color:var(--text-dim);margin:4px 0 0">
      Clears every answer and schedule for “${esc(PROFILE)}”. Other people's profiles are untouched.
    </p>
  </div>

  <div class="note" style="margin-top:20px">
    <b>Sharing this with classmates.</b> Each person's history lives in their own browser on their own
    device, so nobody can see anyone else's. On a shared computer, use the Switch button at the top
    right to keep profiles apart. Private/incognito windows and “clear site data” erase progress.
  </div>`;

  $('#v-settings').querySelectorAll('.chip').forEach(b=>b.onclick=()=>{
    DB.settings.mode = b.dataset.m; save(); renderSettings();
  });
  $('#btnExport').onclick = ()=>{
    const blob = new Blob([JSON.stringify({profile:PROFILE, db:DB}, null, 1)], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `phar4342-progress-${PROFILE.replace(/\W+/g,'_')}.json`;
    a.click(); URL.revokeObjectURL(a.href);
  };
  $('#btnImport').onclick = ()=> $('#fileIn').click();
  $('#fileIn').onchange = e=>{
    const f = e.target.files[0]; if(!f) return;
    const r = new FileReader();
    r.onload = ()=>{
      try{
        const j = JSON.parse(r.result);
        if(!j.db || !j.db.concepts) throw new Error('not a progress file');
        DB = Object.assign(BLANK(), j.db); save();
        alert('Progress loaded.'); renderSettings();
      }catch(err){ alert('That file could not be read as a progress export.'); }
    };
    r.readAsText(f);
  };
  $('#btnReset').onclick = ()=>{
    if(confirm(`Erase all quiz history for "${PROFILE}"? This cannot be undone.`)){
      DB = BLANK(); save(); alert('History erased.'); renderSettings();
    }
  };
}

/* "Ask everything" mode short-circuits the due check */
const _isDue = isDue;
isDue = function(s){ return (DB.settings.mode === 'all') ? true : _isDue(s); };

/* ==========================================================================
   BOOT
   ========================================================================== */
document.querySelectorAll('#nav button').forEach(b => b.onclick = () => show(b.dataset.v));
document.getElementById('btnWho').onclick = () => { askProfile(true); show(VIEW); };
askProfile(false);
show('topics');
