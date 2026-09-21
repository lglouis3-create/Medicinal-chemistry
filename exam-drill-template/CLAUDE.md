# Working in this repo

This is an exam-drill source tree built with the `exam-drill-builder` skill.
Read `README.md` for the layout and `course.js` for the course; read the
course's Claude Project doc `claude/drill-app-state.md` for the running state
(what has been ingested, verified slide facts, conflicts, delivery status) and
update it at the end of every session.

Standing rules for every question, table and guide written here:

- Every number, name and claim comes from a slide (cite the deck file and slide)
  or the lecture transcript (mark it "(T)" and set `source`). If it cannot be
  pointed at, it is not written; no placeholder figures.
- When two sources disagree, state both and which one an exam written from
  the lectures would key.
- Stems ask the subject, in the professor's own formats from `STYLE.md`; never
  "what does the slide say". Options short and parallel; the correct one is not
  the longest; every option has a `why`; every question a `skill` from
  `course.js`.
- No metaphors, no study advice, no sentence about the drill itself.
- Build and run every check before delivering; never report a check that did
  not run as passed.
- Tokens live only in `.git/config`; grep the tree before packaging anything.
- The site is shared with classmates: personal mnemonics stay out of the
  shared build unless asked for.

Checks: `python3 build.py && node test.js && node style_check.js && node
render_test.js && python3 cite_check.py && python3 browser_test.py`.
