/* ==========================================================================
   COURSE MANIFEST — everything that is specific to this course lives here.
   The engine (shell.html, views.js) reads COURSE and nothing else about the
   course. Fill this in first; the checks read it too.
   ==========================================================================
   id, title, short   names shown in the header and the page title
   output             file name of the built page (the site serves it under this name)
   atlas              true only when atlas.js carries drawn structures for an Atlas tab
   ns                 storage namespace: keep it the same for the whole course so
                      progress carries from Exam 1 through the final
   oldCachePrefix     optional, only for a drill that had its own service worker
                      before it moved onto the core: that worker's cache name
                      prefix (for example 'phar4342-drill-'); the core's worker
                      deletes those caches. It must end with '-'.
   professors         names exactly as the questions' `prof` field spells them
   lectures           one entry per deck: `deck` is the file name as the citations
                      spell it (dots in the stem become underscores), `exam` the
                      exam it is tested on, `module` the block the course groups
                      it under. Questions are labelled by the deck their `cite`
                      names, so every cite must name its deck.
   exams              blueprint per exam: questions, minutes, select-all count,
                      and the pools with their marks. A pool `filter` is an object
                      of field:value that a question must match; a value may be
                      an array meaning "one of". Pools' marks add up to `questions`.
                      `date` is the string shown in the header; add `when` (ISO)
                      and the page counts the days down to it.
                      Optional `blueprint`: use it only when the professor has
                      announced counts per topic. See the commented example.
   activeExam         which exam the simulator and the weighted pass follow
   skills             this course's taxonomy of what a question asks the student
                      to do; every question carries one `skill`; Weak spots groups
                      by it. Replace the defaults with the kinds this course
                      tests (a drug course: brand, generic, category, indication,
                      essential; a calculation course: setup, unit, algebra, …).
   paceDefault        review pace for a new profile: cram | weekly | semester
   scheduler          which scheduler picks the next question (core/README.md
                      "The scheduler"). model 'concept' (the default when the
                      field is absent): concepts are scheduled by box, and an
                      exam with a `when` shortens the day-clock gap for the
                      concepts its pools cover. preset:'calc' for a
                      calculation course: no two questions of one skill in a
                      row, and due questions of earlier lectures mixed in.
                      model 'fsrs': FSRS-7 per question (ts-fsrs, from the
                      kit's core/vendor/, which the build then inlines).
                      model 'concept-fsrs' (off by default): FSRS-7 per
                      concept with question rotation; it ships with
                      compare:true, which assigns each concept at random to
                      it or to 'concept' and logs which.
   kit                the kit commit this course's src/ engine was copied from
                      (exam-drill-kit core/); only Mode 7 changes it
   ==========================================================================
   PHAR 4342: the values below are the course manifest of the 09/21 round
   (restore/2026-09-21-round, 2ebfade), unchanged, with oldCachePrefix,
   scheduler and kit added when the course moved onto the kit core
   (2026-11-01). `ns` and `output` are what the live page on main used
   (src/shell.html `NS`, build.py `LEGACY_NAME` at 03a314d).
   ========================================================================== */
const COURSE = {
  id: 'phar4342',
  title: 'Intro to Medicinal Chemistry (P2 Fall 2026)',   // Louis, 2026-11-01
  short: 'Intro to Medicinal Chemistry (P2 Fall 2026)',
  ns: 'phar4342final',
  // the live page on main (03a314d) ran its own service worker, whose caches
  // are named phar4342-drill-v<n> (sw.js `PREFIX`); the core's worker deletes them
  oldCachePrefix: 'phar4342-drill-',
  // The data files, in build order (the kit's build.py reads this list; before
  // 2026-11-01 it lived inside build.py, where a core update would replace it).
  files: ['atlas.js', 'diagrams.js',
          'q1_topics.js', 'q2_fgdm.js', 'q3_elimtox.js', 'q4_paths.js',
          'q5_yendapally.js', 'q6_variants.js', 'q7_fgs.js',
          'q8_atlas.js', 'q9_gaps.js', 'q10_sata.js', 'q11_sata2.js',
          'q12_figures.js', 'q13_quizlet.js', 'q14_tell.js', 'q15_types.js'],
  output: 'PHAR4342_Final_Drill.html',   // the built file's name (the site serves it under this name)
  atlas: true,                           // this course has a functional-group atlas (atlas.js); a course without one sets false
  professors: ['Sikazwe', 'Yendapally'],

  lectures: [
    {id:'FG',  deck:'MCFGs8_1718_26.pdf',              label:'Functional groups (08/17–18)',        prof:'Sikazwe',    exam:1, module:'Functional groups'},
    {id:'ST',  deck:'081926_Stereochemistry.pdf',      label:'Stereochemistry (08/19)',               prof:'Yendapally', exam:1, module:'Stereochemistry'},
    {id:'DD',  deck:'082026_Drugdiscovery.pdf',        label:'Drug discovery (08/20)',                prof:'Yendapally', exam:1, module:'Drug discovery'},
    {id:'SAR', deck:'082426_IntroductiontoSAR.pdf',    label:'Introduction to SAR (08/24)',           prof:'Yendapally', exam:1, module:'SAR and drug–receptor interactions'},
    {id:'DR',  deck:'082426_DrugReceptorInteractions.pdf', label:'Drug–receptor interactions (08/24)', prof:'Yendapally', exam:1, module:'SAR and drug–receptor interactions'},
    {id:'AA',  deck:'082426_ReviewAminoacids.pdf',     label:'Amino acid review (08/24)',             prof:'Yendapally', exam:1, module:'SAR and drug–receptor interactions'},
    {id:'BI',  deck:'082626_Bioisosterism.pdf',        label:'Bioisosterism (08/26)',                 prof:'Yendapally', exam:1, module:'Bioisosterism'},
    {id:'PC1', deck:'082726_PhysicochemicalProp1.pdf', label:'Physicochemical properties 1 (08/27)',  prof:'Yendapally', exam:2, module:'Physicochemical properties'},
    {id:'PP',  deck:'082726_PracticeProblemAnswers.pdf', label:'Practice problem answers (08/27)',    prof:'Yendapally', exam:2, module:'Physicochemical properties'},
    {id:'PC2', deck:'090226_PhysicochemicalProp2.pdf', label:'Physicochemical properties 2 (09/02)',  prof:'Yendapally', exam:2, module:'Physicochemical properties'},
    {id:'PC3', deck:'090326_PhysicochemicalProp3.pdf', label:'Physicochemical properties 3 (09/03)',  prof:'Yendapally', exam:2, module:'Physicochemical properties'},
    {id:'AB1', deck:'090326_ADMETAbsorption_I.pdf',    label:'ADMET: absorption I (09/03)',           prof:'Yendapally', exam:3, module:'ADMET'},
    {id:'AB2', deck:'090426_ADMETAbsorption_II.pdf',   label:'ADMET: absorption II (09/04)',          prof:'Yendapally', exam:3, module:'ADMET'},
    {id:'DI',  deck:'090426_Distribution.pdf',         label:'ADMET: distribution (09/04)',           prof:'Yendapally', exam:3, module:'ADMET'},
    {id:'L10', deck:'MCMet-9_4_26-9_9_26.pdf',         label:'Lecture 10: drug metabolism (09/04–09/09)', prof:'Sikazwe', exam:3, module:'Drug metabolism'},
    {id:'L11', deck:'MCMet-9_10_26.pdf',               label:'Lecture 11: metabolism pathways (09/10)', prof:'Sikazwe',  exam:3, module:'Drug metabolism'},
    {id:'L13', deck:'MCMet-9_15_2026.pdf',             label:'Lecture 13: CYP450 (09/15)',            prof:'Sikazwe',    exam:4, module:'Drug metabolism'},
    {id:'L14', deck:'MCMet-9_16_2026.pdf',             label:'Lecture 14: functional groups and factors (09/16)', prof:'Sikazwe', exam:4, module:'Drug metabolism'},
    {id:'L15', deck:'MCMet-9_17_2026.pdf',             label:'Lecture 15: elimination and toxicity (09/17)', prof:'Sikazwe', exam:4, module:'Elimination and toxicity'},
    {id:'PREP', deck:'Ex4-Prep-Work.pdf',              label:'Exam 4 prep sheet',                     prof:'Sikazwe',    exam:4, module:'Drug metabolism'},
  ],

  exams: [
    {id:'final', name:'Exam 4 (cumulative final)', date:'Mon 9/21, 9:00–10:15 am',
     questions:50, minutes:75, sata:8,
     blurb:'8 Yendapally, 4 Sikazwe older, 38 Sikazwe new',
     pools:[
       {key:'Sikazwe|new',    name:'Sikazwe, lectures 13–15',  marks:38, filter:{prof:'Sikazwe', tier:'new'}},
       {key:'Yendapally|old', name:'Yendapally',                   marks:8,  filter:{prof:'Yendapally'}},
       {key:'Sikazwe|old',    name:'Sikazwe, earlier lectures',    marks:4,  filter:{prof:'Sikazwe', tier:'old'}},
     ]},
  ],
  activeExam: 'final',

  skills: [
    {id:'recall', label:'Recall the fact',            short:'Recall'},
    {id:'tell',   label:'Tell apart',                 short:'Tell apart'},
    {id:'apply',  label:'Apply to a case',            short:'Apply'},
    {id:'read',   label:'Read a structure or scheme', short:'Read'},
    {id:'calc',   label:'Calculate',                  short:'Calc'},
  ],

  paceDefault: 'cram',

  scheduler: {model:'concept'},

  // The course's tables for three core tools (kit core/README.md "Course tables"),
  // moved unchanged from the tops of this course's cite_check.py (ALIASES,
  // BARE_MAP), explain_check.js (WEIGHTY) and harvest_mask.py (SPEC).
  tools: {
    citeAliases: {
      'mcmet-9_4_26.pdf':        'MCMet-9_4_26-9_9_26.pdf',
      'mcmet9_4_26__9_9_26.pdf': 'MCMet-9_4_26-9_9_26.pdf',
      'ex4-prep-work.pdf': null,
    },
    citeBareMap: {
      'Absorption I': '090326_ADMETAbsorption_I.pdf', 'Absorption II': '090426_ADMETAbsorption_II.pdf',
      'Distribution': '090426_Distribution.pdf',
      'Stereochemistry': '081926_Stereochemistry.pdf',
      'Bioisosterism': '082626_Bioisosterism.pdf',
      'Physicochemical Properties 1': '082726_PhysicochemicalProp1.pdf',
      'Physicochemical Properties 2': null,
      'Physicochemical Properties 3': '090326_PhysicochemicalProp3.pdf',
      'Drug Discovery': '082026_Drugdiscovery.pdf',
      'Drug–Receptor Interactions': '082426_DrugReceptorInteractions.pdf',
      'Introduction to SAR': null,
      'Practice Problem Answers': '082726_PracticeProblemAnswers.pdf',
      'Functional group deck': 'MCFGs8_1718_26.pdf',
    },
    explainTerms: [
      ['deloc','delocalis|delocaliz'], ['nucl','nucleophil'], ['elec','electrophil'],
      ['zwit','zwitterion'], ['cbase','conjugate base'], ['cacid','conjugate acid'],
      ['enant','enantiomer'], ['diast','diastereomer'], ['racem','racemic|racemate'],
      ['efflux','efflux'], ['fpass','first-pass'], ['vd','volume of distribution'],
      ['ehc','enterohepatic'], ['toxo','toxicophor'], ['bioact','bioactivat'],
      ['sat','saturab'], ['free','free fraction'], ['pc','partition coefficient'],
      ['poly','polymorphis'], ['steric','steric'], ['val','valence|valency'],
      ['adduct','adduct'], ['prodrug','prodrug'], ['isoform','isoform'],
      ['cofac','cofactor|co-factor'],
      // no GLOSS entry yet — these are the ones the report should surface
      ['tautomer','tautomer'], ['resonance','resonance'], ['regio','regioselectiv'],
      ['hepext','hepatic extraction'], ['glomer','glomerul'], ['epimer','epimer'],
      ['induct','inductive effect'], ['chiral','chiral'],
    ],
    harvestMasks: [
      ['rx_allylic_pentazocine', ['Allylic OH metabolite']],
      ['rx_adh',                 ['ADH']],
      ['rx_akr',                 ['AKRs']],
      ['rx_gluc_sulf',           ['UGT', 'STs', 'Morphine 6-O-Glucuronide', 'Labetolol sulfate']],
    ],
  },
  kit: {core:'c4da6c6'},   // lglouis3-create/exam-drill-kit, head of pull request #4
};
