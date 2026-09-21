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
   activeExam         which exam the simulator and the weighted pass follow
   skills             this course's taxonomy of what a question asks the student
                      to do; every question carries one `skill`; Weak spots groups
                      by it. Replace the defaults with the kinds this course
                      tests (a drug course: brand, generic, category, indication,
                      essential; a calculation course: setup, unit, algebra, …).
   paceDefault        review pace for a new profile: cram | weekly | semester
   ========================================================================== */
const COURSE = {
  id: 'course-id',                       // e.g. 'phar4351'
  title: 'COURSE 0000 — Course name',
  short: 'COURSE 0000',
  ns: 'course-id-drill',
  output: 'COURSE0000_Drill.html',
  atlas: false,
  professors: ['Professor'],

  lectures: [
    {id:'L01', deck:'Lecture01.pdf', label:'Lecture 1: title (date)', prof:'Professor', exam:1, module:'Module 1'},
  ],

  exams: [
    {id:'exam1', name:'Exam 1', date:'',
     questions:4, minutes:10, sata:0,          // sample values for the sample bank; set the real blueprint
     blurb:'',
     pools:[
       {key:'all', name:'Lectures 1–4', marks:4, filter:{exam:1}},
     ]},
  ],
  activeExam: 'exam1',

  skills: [
    {id:'recall', label:'Recall the fact',            short:'Recall'},
    {id:'tell',   label:'Tell apart',                 short:'Tell apart'},
    {id:'apply',  label:'Apply to a case',            short:'Apply'},
    {id:'read',   label:'Read a figure or scheme',    short:'Read'},
    {id:'calc',   label:'Calculate',                  short:'Calc'},
  ],

  paceDefault: 'weekly',
};
