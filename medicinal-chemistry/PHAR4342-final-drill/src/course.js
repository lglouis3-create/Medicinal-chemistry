/* ==========================================================================
   COURSE MANIFEST — everything that is specific to this course lives here.
   The engine (shell.html, views.js) reads COURSE and nothing else about the
   course, so a new course is a new copy of this file plus its own content.
   ==========================================================================
   Fields:
     id, title, short   names shown in the header and the page title
     output             file name of the built page
     atlas              true when atlas.js carries drawn structures for an Atlas tab
     ns                 storage namespace; keep it stable across exams so
                        progress carries through the semester
     professors         names as the questions' `prof` field spells them
     lectures           one entry per deck; `deck` is the file name as the
                        citations spell it (dots as underscores), `exam` the
                        exam it was tested on, `module` the block the course
                        groups it under. Questions are labelled by matching
                        the deck named in their `cite`.
     exams              blueprint per exam: questions, minutes, select-all
                        count, and the pools with their marks. A pool `filter`
                        is an object of field:value (a value may be an array)
                        that a question must match.
     activeExam         which exam the simulator and the weighted pass follow
     skills             the course's own taxonomy of what a question asks the
                        student to do; questions carry `skill`, Weak spots
                        groups by it
     paceDefault        review pace for a new profile: cram | weekly | semester
   ========================================================================== */
const COURSE = {
  id: 'phar4342',
  title: 'PHAR 4342 — Medicinal Chemistry',
  short: 'PHAR 4342',
  ns: 'phar4342final',
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
};
