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

## 2026-11-01 (later): engine fixes, preview, slide check, citation fixes

- Kit pull requests #2 (old cache prefix) and #3 (core fixes found by this move, and no
  name prompt) merged after Louis said yes. This branch carries the core at 2c648fa
  (the #3 head; main is 47bf534 after the merge) with `files` in `course.js`;
  `cite_check.py`, `explain_check.js` and `harvest_mask.py` kept as the course had them.
- Course name set by Louis: "Intro to Medicinal Chemistry (P2 Fall 2026)".
- Preview published at `/preview/` (Louis approved) and updated with the fixes;
  "pages build and deployment" succeeded for 4cca02f and 341750d.
- `run_checks.sh` with the new core: 20 PASS, 0 FAIL, 2 NOT RUN (stepper_test.js: no
  step-through figures; cite_check.py: decks not in the tree), 1 REPORT.
- Slide check (`reviews/move-to-core/cite_check_2026-11-01.md`): decks downloaded from
  Drive into scratch, not committed. `cite_check.py` PASS (1,191 slide references, 20
  decks). The wider check found 9 wrong-lecture references and 4 claims the cited slide
  does not print; the Tell-apart row's two cut-offs are as written.
- Citation fixes Louis approved: the lecture named in `ta-20`, `ta-24` (2), `ta-25` (2),
  `ta-40`, `ta-47`, `cyp-i2` (2), `sa-cyp-3`, `sa-fa-5` (2) and the Guides' L14
  objective 2; the Guides' L13 objective 1 FMO source (L11 slides 26–27); the Tell-apart
  row's allele point marked (T). No answer key, stem or option text changed.
  `ta-58` and `ta-86` wait in `reviews/OPEN_QUESTIONS.md` Q5 and Q6.

## 2026-11-01 (later): live on the kit core

- Kit pull request #4 (course tables in `course.js` `tools`; Home Screen card as a closed
  section in Settings) merged after Louis said yes; kit `main` is ff7bd51, whose core is
  identical to c4da6c6, the core the preview ran. Pin set to ff7bd51.
- Louis approved the switch ("Yes merge and make it live"). `kit/move-to-core` merged
  `main`'s preview commits, removed `preview/`, rebuilt the root page and went to `main`.


## 2026-11-02 08:50 UTC: kit-update run (scheduled task "Kit update run", KIT_DESIGN.md §12.9)

- Preflight: the kit and all four course repositories attached; `git fetch`,
  `git push --dry-run` to `updater-access-test` and `gh api .../actions/runs?per_page=1`
  answered for each; Python 3.13.18, Node v22.23.4 and Chromium start.
- Pin `kit:{core:'ff7bd51'}` is behind kit `main` 2bbe395. Kit pull requests since the
  pin: #5 (core: a start-up fault can no longer cost saved progress), #6 (calculation
  features and core support: typed numbers, typed exam items, feature modules), #7 and
  #8 (records only), #9 (core: an exam with no question count, section points or time
  limit set). None is labelled `small-fix` and #5, #6 and #9 change the core, so the
  update waits for Louis.
- This course's copies of the pinned core files matched ff7bd51 exactly before the copy
  (0 of the core files differed). The new core is on branch `kit/update-2bbe395`
  (2482622), with `course.js` `kit:{core:'2bbe395'}`; `ns` (`phar4342final`) and every
  question file unchanged. No `features` are on for this course.
- `python3 build.py --preview`: 479 questions in 13 topics from 15 question files,
  `preview/index.html` 7,210,455 bytes (live `index.html` 7,195,775 bytes).
- `run_checks.sh` on that branch: 23 PASS, 0 FAIL, 2 NOT RUN (`stepper_test.js`: no
  step-through figures in DIA; `cite_check.py`: no lecture PDFs under decks/ or src/),
  1 REPORT (`explain_check.js`: 363 of 479 questions carry at least one explanation
  issue). New checks that ran: `startup_test.js` 77, `nullexam_test.js` 77.
- WebKit (Safari): NOT RUN; not installed in this container.
- Exam today (America/Chicago 2026-11-02)? No: the one exam, Exam 4, is Mon 9/21.
- Preview published at https://lglouis3-create.github.io/Medicinal-chemistry/preview/;
  the live page is unchanged. "approve updates for Medicinal-chemistry" makes it live.

## 2026-11-02 09:54 UTC: kit update live (core ff7bd51 → 2bbe395)

- Louis approved the preview in the "Kit updater" session ("Yrs do it", in reply to the
  request for "approve updates for Medicinal-chemistry").
- Commit e954e08 "kit update: core ff7bd51 → 2bbe395" on `main`: `src/` from branch
  `kit/update-2bbe395` (2482622), root page rebuilt with `python3 build.py`, `preview/`
  removed, the pin in `CLAUDE.md` updated. No `CHANGELOG.md` bullet was added, so the
  live page matches the approved preview.
- The live `index.html` differs from the approved `preview/index.html` only in the
  preview banner (removed), the manifest link (added), `preview:false` and the build
  stamp (diff of the two files, timestamps masked).
- `run_checks.sh` before the commit: 23 PASS, 0 FAIL, 2 NOT RUN (`stepper_test.js`: no
  step-through figures in DIA; `cite_check.py`: no lecture PDFs under decks/ or src/),
  1 REPORT (`explain_check.js`: 363 of 479 questions carry at least one explanation
  issue). WebKit (Safari): NOT RUN, not installed.
- Token grep before the commit: none found.
- "pages build and deployment" for e954e08: completed, success (run 41424293314,
  2026-11-02T09:53:59Z). The live page was not opened from this session.

## 2026-11-03 08:50 UTC: kit-update run (scheduled task "Kit update run", KIT_DESIGN.md §12)

- Preflight: the kit and all four course repositories attached; `git fetch`,
  `git push --dry-run` to `updater-access-test` and `gh api .../actions/runs?per_page=1`
  answered for each; Python 3.13.18, Node v22.23.4 and Chromium start.
- Pin `kit:{core:'2bbe395'}` is behind kit `main` e827671. Under `skill/SKILL.md` Mode 7
  as of e827671 (decision 10, 2026-11-03), no update goes live without Louis's reply.
- This course's copies of the pinned core files matched 2bbe395 exactly before the copy.
  The 18 core files changed since 2bbe395 are checks, tests and check helpers; the page
  code (`views.js`, `shell.html`, `build.py`) is unchanged. New core on branch
  `kit/update-e827671` (00b331b), with `course.js` `kit:{core:'e827671'}`; `ns` and every
  question file unchanged.
- `python3 build.py --preview`: 479 questions; the preview page differs from the live
  page only in the build time, the pin inside the embedded manifest and the preview
  marks (banner, `preview:true`, no manifest link) (diff, timestamps masked).
- `run_checks.sh` on that branch: 24 PASS, 0 FAIL, 2 NOT RUN (`stepper_test.js`: no
  step-through figures in DIA; `cite_check.py`: no lecture PDFs under decks/ or src/),
  1 REPORT (`explain_check.js`: 363 of 479 questions carry at least one explanation
  issue). New check that ran: `style_check_test.js` 29. WebKit (Safari): NOT RUN, not
  installed.
- Exam today (America/Chicago 2026-11-03)? No: the one exam, Exam 4, was Mon 9/21.
- Preview at https://lglouis3-create.github.io/Medicinal-chemistry/preview/; the live
  page is unchanged. "approve updates for Medicinal-chemistry" makes it live.

## 2026-11-03 12:55 UTC: kit update live (core 2bbe395 → e827671)

- Louis approved in the "Kit updater" session after testing the preview on his device
  ("Then approve of the updates and continue forward"), asking first for two checks:
  - GitHub checks: this repository's only workflow is the Pages deploy and `main` has no
    branch protection, so it has no required checks of its own; the preview commit
    4ee665c deployed with success. The kit's "Kit checks" run 41599615956 for e827671
    passed all 9 jobs; its "Chromium · medicinal-chemistry" job (this course's `main` at
    07:56 UTC with the e827671 core copied in, the same content as branch commit 00b331b)
    printed 24 PASS, 0 FAIL, 2 NOT RUN, 1 REPORT. No check ran on 00b331b itself. The kit
    WebKit job ran on the template course, not on this course.
  - Explanation report: `LIMIT=1000 node explain_check.js` on the live build (4ee665c,
    core 2bbe395) and on the update (00b331b, core e827671): the two full listings are
    identical (816 lines each; 363 of 479 questions flagged in both).
- Commit 39edc49 "kit update: core 2bbe395 → e827671" on `main`: `src/` from branch
  `kit/update-e827671`, root page rebuilt, `preview/` removed, pin in `CLAUDE.md`
  updated. No `CHANGELOG.md` bullet added; the page matches the approved preview except
  the preview banner (removed), the manifest link (added) and `preview:false`.
- `run_checks.sh` before the commit: 24 PASS, 0 FAIL, 2 NOT RUN (`stepper_test.js`,
  `cite_check.py`), 1 REPORT (`explain_check.js`). WebKit (Safari): NOT RUN here.
- Token grep before the commit: none found.
- "pages build and deployment" for 39edc49: completed, success (run 41639659320,
  2026-11-03T12:55:02Z). The live page was not opened from this session.

## 2026-11-04 08:50 UTC: kit-update run (scheduled task "Kit update run", KIT_DESIGN.md §12)

- Preflight: the kit and all four course repositories attached; `git fetch`,
  `git push --dry-run` to `updater-access-test` and `gh api .../actions/runs?per_page=1`
  answered for each; Python 3.13.18, Node v22.23.4 and Chromium start.
- Pin `kit:{core:'e827671'}` is behind kit `main` 91b5920 (kit pull requests #39, #42,
  #43, #44). No update goes live without Louis's reply (the run's instructions of
  2026-11-03 and `skill/SKILL.md` Mode 7).
- This course's copies of the pinned core files matched e827671 exactly before the copy.
  Core files changed: `shell.html` and `views.js` (#39: a save still waiting on its
  150 ms timer is written when the page is hidden or closed), `storage_test.js`,
  `check_lib.js`, `ci_course.sh`. The saved data and its format, `ns` and every
  question file are unchanged. New core on branch `kit/update-91b5920` (504ae6e).
- `python3 build.py --preview`: 479 questions; the preview page differs from the live
  page in the #39 lines, the pin inside the embedded manifest and the preview marks
  (diff, timestamps masked).
- `run_checks.sh` on that branch: 24 PASS, 0 FAIL, 2 NOT RUN (`stepper_test.js`: no
  step-through figures in DIA; `cite_check.py`: no lecture PDFs under decks/ or src/),
  1 REPORT (`explain_check.js`: 363 of 479). `storage_test.js` 29 checks (24 before).
  WebKit (Safari): NOT RUN here.
- `LIMIT=1000 node explain_check.js` on the live build and on the update: identical
  listings (816 lines each).
- Kit "Kit checks" run 41672860821 for 91b5920: 13 of 13 jobs success, including
  "Chromium · medicinal-chemistry" (this course with that core copied in) and the WebKit
  template and module jobs; no WebKit job runs this course.
- Exam today (America/Chicago 2026-11-04)? No: the one exam, Exam 4, was Mon 9/21.
- Preview at https://lglouis3-create.github.io/Medicinal-chemistry/preview/; the live
  page is unchanged. "approve updates for Medicinal-chemistry" makes it live.
