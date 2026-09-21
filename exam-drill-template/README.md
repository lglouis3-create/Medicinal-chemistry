# Exam drill template

A single-file HTML study app built from plain source files: questions with
explanations, slide figures, a spaced-repetition scheduler with confidence
buttons, an exam simulator that follows the exam's blueprint and survives a
reload, weak-spot analytics by topic and by kind of thinking (with slow-but-right
items and, for calculations, the kind of miss), and three reading tabs
(objective guides, tell-apart tables, reference tables). Everything the student
needs is in one file that works offline and on a phone; progress stays in the
browser and can be exported and imported; the bank and the reading tabs can be
exported on their own.

The engine is course-agnostic. A course is `course.js` plus its own content
files. The reference implementation with a full bank is the PHAR 4342 drill
(github.com/lglouis3-create/Medicinal-chemistry).

## Start a course

1. Copy this folder into the new course's repo as `src/`.
2. Fill in `course.js`: names, storage namespace, professors, lectures (one per
   deck, with exam and module), the first exam's blueprint, the skill taxonomy
   this course tests, the pace.
3. Replace the samples in `q1_topics.js` with the course's TOPICS and its first
   questions. Add a question file per lecture (`q2_<lecture>.js` …) and list it
   in `DATA_FILES` in `build.py`.
4. Put the professor's own questions into `STYLE.md` as they appear.
5. Build and check:

       python3 build.py
       node test.js && node style_check.js && node render_test.js
       node explain_check.js            # a report, not a gate: ranks weak explanations
       python3 cite_check.py            # needs the decks (PDF) under decks/ or beside the sources
       python3 browser_test.py          # needs Chromium + Playwright

6. Commit; publish the built HTML (root of the repo) with GitHub Pages.

The output lands in `/mnt/user-data/outputs/<output from course.js>`; every
check reads that path from `course.js`. A check that cannot run on the bank on
hand says so — `skip` lines in the browser test, `NOT RUN` in the citation
check — and is never counted as passed.

## Add a lecture

    python3 ingest.py --deck Lecture07.pdf --transcript "Course - 10_03.txt" \
        --lecture L07 --label "Lecture 7: title (10/03)" --prof Professor --render

This writes `ingest/L07/`: the slide-by-slide text, the picture slides to look
at, a crop spec skeleton for `harvest.py`, the transcript's exam-emphasis
lines, the polls printed on the slides (for STYLE.md), and a question
skeleton with every citation already filled in. Write the questions into the
skeleton, rename it `q<N>_<lecture>.js`, add it to `build.py`, crop the
figures the questions need, build, run the checks, commit. When only the slide
text is on hand (a session reading the Claude Project, which returns text for
a PDF), pass `--slides-text <file>` instead of `--deck`.

## Question schema

```
{id, skill, prof, tier:'new'|'old', topic, sub, concept, tags, source:'slide'|'transcript'|'both',
 multi, lowYield, dupOf, type:'numeric'|'match',
 stem, img, options:[{t, correct, why}], teach, teachImg, note, quote, cite}
numeric: units, answer, tol, steps:[{k:'setup'|'unit'|'algebra'|'round', t, why}]
match:   left, right, pairs:[{l, r, why}]
```

Rules the checks enforce: one correct option (or `multi` with two or more and a
distractor, stem ending "Select all that apply."); a `why` on every option;
`cite` names the deck file and slide; `skill` from the course taxonomy;
`concept` shared by wordings of one idea; `dupOf` for two wordings of one fact;
`lowYield` for an aside that should stay off the exam paper; stems ask the
subject, never "what does the slide say"; options short and parallel, the
correct one never the longest; British or American spelling as the professor
uses it, consistently.

## Files

Engine (leave alone unless changing behaviour for every course): `shell.html`,
`views.js`, `build.py`, `test.js`, `style_check.js`, `render_test.js`,
`browser_test.py`, `harvest.py`, `harvest_mask.py`, `ingest.py`.

Engine with a course-specific table at the top: `cite_check.py` (deck
spellings a citation uses that cannot be derived from `course.js` and the
files on disk) and `explain_check.js` (the terms this course leans on that
should be glossed). Both run with the tables empty.

Content (per course): `course.js`, `q*.js`, `images.json`, `reference.js`,
`tell.js`, `guide.js`, `atlas.js` (stub unless the course draws structures),
`diagrams.js`, `STYLE.md`. Decks go under `decks/` (ignored by git).
