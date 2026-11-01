# Session log: PHAR 4342 drill

One entry per session or scheduled run, newest first.

## 2026-11-01: the move onto the exam-drill-kit core prepared (Mode 7, first move), not pushed

Louis chose the order of moves on 2026-11-01; this course is first. Work is on the local
branch `kit/move-to-core` from `origin/main` (03a314d). Nothing was pushed to any
repository or branch. The live site is unchanged.

**What was done**
- Content from `restore/2026-09-21-round` (baed236): 479 questions, of which all 387
  live ids are kept and 92 are new (`q14_tell.js` 89, `q15_types.js` 3); `course.js`;
  `tell.js`; `guide.js` and `src/guides/`; the 09/21 helper scripts. `main`'s later
  non-engine work kept: the 189 WebP images of 4a32dad (the 09/21 line holds the same
  189 JPEGs; `src/reencode_webp.py` re-encodes them to main's file byte for byte),
  `mkimg.py`, `coverage_check.py`, the icons, the notes.
- Question by question: 0 live ids missing; 387 shared ids differ, every one only by the
  `skill` field the 09/21 round added; 0 differ in stem, options, explanations,
  citation or keyed answer. Listed in `reviews/OPEN_QUESTIONS.md` Q1 (83 change their
  Weak spots group). Content outside the questions that differs: Q2.
- Engine: the kit core from kit commit `9f2f2a4` (core files identical to 998d96a),
  copied into `src/`; `course.js` pins `kit:{core:'9f2f2a4'}`, keeps `ns
  'phar4342final'` and `output 'PHAR4342_Final_Drill.html'`, adds `oldCachePrefix
  'phar4342-drill-'` and `scheduler {model:'concept'}`. Both values were read from
  `main`: `src/shell.html` and the built `index.html` (`const NS = 'phar4342final'`),
  `sw.js` (`const PREFIX = 'phar4342-drill-'`).
- Root build committed (`index.html` 7,195,775 bytes; the live one is 6,876,844).
  `build.py --preview` writes `preview/index.html` (7,196,003 bytes) and
  `preview/version.json`; not committed on this branch.
- Two comments that named the student in the shipped page source now say "the
  student" (`atlas.js`, `q13_quizlet.js`).

**Saved progress** (`reviews/move-to-core/progress_test.js`, Chromium, both builds served
at `/Medicinal-chemistry/` on one origin as Pages does): the live page built from
`origin/main` (byte for byte the committed `index.html`) was used through its screens:
12 quiz answers on CYP450 (right, wrong, select-all, "I guessed that one"), one more
select-all item, Settings → Long term, and an exam paper with 5 of 50 answered and
submitted (63 answers, 58 concepts). Its localStorage is in
`reviews/move-to-core/live-localStorage.json`. The new build at the same address in the
same browser: 30 of 30 checks passed: the core's worker replaced the old one by itself
and deleted `phar4342-drill-v1`; every live key, every concept's ten state fields, the
63-entry answer log, the counter, the creation time and the settings read back
unchanged; Long term reads as Semester (the same days); Weak spots shows the same right,
wrong, guessed and missed counts; a save by the new page keeps every old field; the
`/preview/` build copies the 3 live keys once, shows the same progress, keeps its own
answer, changes no live key and registers no worker. `preview_stage_test.js` (the
preview beside the unchanged live site and old worker): 10 of 10 passed. No converter
was needed: the core's `upgradeDB` reads the live save (no `v`) and adds only new fields.
The new answer history (`<ns>:log:<profile>`) starts empty; answers before the move stay
in the progress's own answer log.

**Checks** (`src/run_checks.sh`, `NODE_PATH=$(npm root -g)`, Chromium; output in
`reviews/move-to-core/run_checks.txt`): 14 PASS, 5 FAIL, 2 NOT RUN, 1 REPORT.
- FAIL `browser_test.js`: sideways scroll at 375 px on Guides (226 px), Tell apart (95 px),
  Reference (176 px). The live page and the 09/21 page measure the same
  (`overflow.js`); course content, waiting for Louis (OPEN_QUESTIONS Q3.3).
- FAIL `offline_test.js`: its list of other sites' caches includes `phar4342-drill-v1`,
  which this course's `oldCachePrefix` correctly deletes. Kit test defect.
- FAIL `oldcache_test.js`: it assumes `course.js` has no `oldCachePrefix`; this course
  has one, which overrides the test's. Kit test defect.
- FAIL `preview_test.js`: the live page's worker writes `<ns>:offline-ready` after the
  test's snapshot (a 7 MB page takes longer to save), and the key comparison depends on
  key order. Kit test defect.
  With the three fixes in `reviews/move-to-core/core_test_patches.diff` applied to a
  scratch copy only: `offline_test.js` 26 passed, `oldcache_test.js` 12 passed,
  `preview_test.js` 13 passed.
- FAIL `update_test.js` in this run: "with the tab left open, nothing is offered before
  15 minutes"; it passed in the two earlier full runs and 6 of 6 runs on its own today.
  Intermittent; cause not found (a fake clock against real waits on a large page is
  likely, not shown).
- NOT RUN `cite_check.py`: no deck PDFs here (and `pdfplumber` is not installed); the
  citations of the 92 new questions were not checked against the decks.
- NOT RUN `stepper_test.js`: the course has no step-through figures.
- REPORT `explain_check.js`: 363 of 479 questions carry at least one explanation issue.
- `test.js` 10 of 10 runs passed; `draw_test.js` 5 of 5.
- `scheduler_test.js` passes (109) only because `q1_cyp.js` is now `q1_topics.js`; the
  check adds its test topic to a file of that name.

**The course's former checks**
- `coverage_check.py` (kept, course scope): PASS by its printed result, "no holes found
  against the stated scope", 24 of 24 items ok, 479 questions; it exits 0 whatever it
  finds. Its page sandbox needed `document.addEventListener`.
- `test.js`, `render_test.js`, `style_check.js`, `explain_check.js` as on `main`: NOT
  applicable as they stand: on the new page each stops at load
  (`document.addEventListener is not a function` in their sandbox). The core's checks of
  the same names replace them and ran above.
- `browser_test.py` as on `main` (Python Playwright 1.63.0 in a scratch venv, Chromium
  1243): 58 ok, 3 FAIL, all from the test's own assumptions: its question-count pattern
  predates the `skill:` field (found 89 in the sources), and it reads `options` on the
  numeric and matching items. The 09/21 line's `browser_test.py`: 58 ok, then it stops
  (`LS is not defined`: the old engine's storage name).
- `sw_test.py` as on `main`: 14 of 20; the 6 failures check the old cache name
  `phar4342-drill-v1` and insert their deploy marker before the first `</body>`, which on
  the new page is inside a script string. Adapted to the core's cache name and the last
  `</body>` (scratch copy only): 20 of 20.
- WebKit (Safari): NOT RUN; not installed in this container.

**Skipped steps**
- Decks not downloaded; `cite_check.py` not run.
- The tell-apart row and the bullet-layout guides that differ from the live site were
  not re-checked against the slides.
- Export from the live page and Import into the new build were checked by reading the
  code only (the core accepts `{profile, db}`, the live page's export shape), not run.
- No push, no pull request, no Pages deploy.

**Needed kit core changes** (for the kit, not made here): the Settings footer question
count (551 for 479, counts `TOPICS` entries); `harvest.py` and `harvest_mask.py` still
write JPEG; `DATA_FILES` lives in `build.py`, so a core copy overwrites the course's
list; the three test defects above and `scheduler_test.js`'s fixed file name.
