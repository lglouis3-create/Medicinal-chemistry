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

## 2026-11-05 08:50 UTC: kit-update run (scheduled task "Kit update run", KIT_DESIGN.md §12)

- Preflight: the kit and all four course repositories attached; `git fetch`,
  `git push --dry-run` to `updater-access-test` and `gh api .../actions/runs?per_page=1`
  answered for each; Python 3.13.18, Node v22.23.4 and Chromium start.
- Pin `kit:{core:'e827671'}` is behind kit `main` 8ec7125. The preview of 2026-11-04
  (91b5920) had no reply from Louis; this preview replaces it. Kit pull requests since
  91b5920: #32, #45, #46, #47, #48, #51 (Import, one writing tab per profile, per-tab
  last-save records, storage use in Settings, history kept when a save is refused, no
  silent history cut). No update goes live without Louis's reply.
- This course's copies of the pinned core files matched e827671 exactly before the copy.
  New core on branch `kit/update-8ec7125` (c44ba69); `ns` and every question file unchanged.
- Old progress in the new page (scratch Playwright test, Chromium, same origin, service
  workers blocked): 5 answers saved by the live build (e827671) loaded in the new build
  as the same 5 answers, profile `me`, no read-only wall, a sixth answer saved; one new
  storage key, `phar4342final:writer:me`; no page errors.
- `python3 build.py --preview`: 479 questions, `preview/index.html` 6.99 MB.
- `run_checks.sh` on that branch: 27 PASS, 0 FAIL, 2 NOT RUN (`stepper_test.js`: no
  step-through figures in DIA; `cite_check.py`: no lecture PDFs under decks/ or src/),
  1 REPORT (`explain_check.js`: 363 of 479). New: `import_test.js` 273,
  `storage_use_test.js` 43, `cap_test.js` 18; `history_test.js` 94 (28 before).
  WebKit (Safari): NOT RUN here.
- `LIMIT=1000 node explain_check.js` on the live build and on the update: identical
  listings (816 lines each).
- Kit "Kit checks" run 41975821787 for 8ec7125: 13 of 13 jobs success, including
  "Chromium · medicinal-chemistry" and "WebKit · template"; no WebKit job runs this
  course.
- Exam today (America/Chicago 2026-11-05)? No: the one exam, Exam 4, was Mon 9/21.
- Preview at https://lglouis3-create.github.io/Medicinal-chemistry/preview/; the live
  page is unchanged. "approve updates for Medicinal-chemistry" makes it live.

## 2026-11-05 13:16 UTC: kit update live (core e827671 → 8ec7125)

- Louis approved in the "Kit updater" session after testing the preview on his device,
  including saving, second-tab takeover and Import: "Approve updates for
  Medicinal-chemistry using the preview built from kit 8ec7125 on branch
  kit/update-8ec7125."
- Before the commit: `main` was d61e5b0 (the preview he tested, pin 8ec7125) and
  `kit/update-8ec7125` was c44ba69, one commit ahead of `main`'s parent line, pin 8ec7125.
- Commit 0e456c6 "kit update: core e827671 → 8ec7125" on `main`: `src/` from c44ba69,
  root page rebuilt, `preview/` removed, pin in `CLAUDE.md` updated. No `CHANGELOG.md`
  bullet added. The live page differs from the tested preview only in the preview
  banner (removed), the manifest link (added) and `preview:false` (diff, timestamps
  masked).
- `run_checks.sh` before the commit: 27 PASS, 0 FAIL, 2 NOT RUN (`stepper_test.js`,
  `cite_check.py`), 1 REPORT (`explain_check.js`: 363 of 479). WebKit (Safari): NOT RUN
  here.
- Token grep before the commit: none found.
- "pages build and deployment" for 0e456c6: completed, success (run 42034138003,
  2026-11-05T13:15:50Z). The live page was not opened from this session.

## 2026-11-06: kit update e827671 → 8ec7125 complete (Louis's device check)

- Louis, in the "Kit updater" session: "The live Medicinal-chemistry site works on my
  device, and progress saves after reloading." He asked for this update to be marked
  complete.
- The check applies to the live site built by commit 0e456c6 ("kit update: core
  e827671 → 8ec7125"); the final commit on `main` is 0b55d5e (the log entry of that
  update), whose "pages build and deployment" run 42034302760 completed with success
  on 2026-11-05T13:16:52Z. Pin: `kit:{core:'8ec7125'}`; no `preview/` folder.
- Status: complete. Later kit updates follow the preview-and-approval process (the
  "Kit update run" instructions of 2026-11-03 and kit `skill/SKILL.md` Mode 7): a
  preview at `/preview/`, a summary to Louis, and the live page changed only after his
  "approve updates for Medicinal-chemistry".

## 2026-11-06 08:50 UTC: kit-update run (scheduled task "Kit update run", KIT_DESIGN.md §12)

- Preflight: the kit and all five attached course repositories (the four in `COURSES.md`
  on kit `main` 62b886b, and DEENT, attached 2026-11-06 but not yet listed there);
  `git fetch`, `git push --dry-run` to `updater-access-test` and
  `gh api .../actions/runs?per_page=1` answered for each; Python 3.13.18, Node v22.23.4
  and Chromium start.
- Pin `kit:{core:'8ec7125'}` is behind kit `main` 62b886b (kit pull requests #55, #60).
  Core files changed: `storage_test.js` and `import_test.js` only (#55); the page code is
  unchanged. No update goes live without Louis's reply.
- This course's copies of the pinned core files matched 8ec7125 exactly before the copy.
  New core on branch `kit/update-62b886b` (4b15884); `ns` and every question file unchanged.
- `python3 build.py --preview`: 479 questions; the preview page differs from the live
  page only in the pin inside the embedded manifest, the build time and the preview marks
  (diff, timestamps masked).
- `run_checks.sh` on that branch: 27 PASS, 0 FAIL, 2 NOT RUN (`stepper_test.js`: no
  step-through figures in DIA; `cite_check.py`: no lecture PDFs under decks/ or src/),
  1 REPORT (`explain_check.js`: 363 of 479, the same count as the live build;
  `explain_check.js` and the question files are unchanged since 8ec7125, so the listing
  is the same). `storage_test.js` 31 checks (29 before). WebKit (Safari): NOT RUN here.
- Exam today (America/Chicago 2026-11-06)? No: the one exam, Exam 4, was Mon 9/21.
- Preview at https://lglouis3-create.github.io/Medicinal-chemistry/preview/; the live
  page is unchanged. "approve updates for Medicinal-chemistry" makes it live.

## 2026-11-07 08:47 UTC: kit-update run (scheduled task "Kit update run", KIT_DESIGN.md §12)

- Preflight: the kit and all five course repositories in `COURSES.md` on kit `main`
  0eeb13b (BDK, Basic-Pharmacokinetics-, DEENT, Intro-Pharmacology-, Medicinal-chemistry),
  each attached to the session; `git fetch`, `git push --dry-run` to
  `kit-updater-preflight-scratch` and `gh api .../actions/runs?per_page=1` answered for
  each; Python 3.13.18, Node v22.23.4 and Chromium 153.0.8010.12 start.
  `node coordinator/coord.js kitupdate --json` on kit `main`: DEENT paused, the other four
  active.
- Pin `kit:{core:'8ec7125'}` on `main` (410c99e, the commit Pages last deployed) is behind
  kit `main` 0eeb13b (kit pull requests #57, #65, #68, #50, #71, #69, #58, #67 merged since
  62b886b). The preview of 62b886b built on 2026-11-06 was not approved; this run replaces
  it. "Kit checks" on 0eeb13b: run 42327179077, completed, success.
- Core files changed since 8ec7125: `check_lib.js`, `ci_course.sh`, `import_test.js`,
  `run_checks.sh`, `scheduler_test.js`, `shell.html`, `storage_test.js`, `views.js`; new
  `ci_exclusions.sh`, `notruncase_test.js`, `ownership_test.js`, `record_modules_test.js`.
  Page code changed in `shell.html` and `views.js`: a running exam, quiz or targeted review
  stays with the profile it started in (#58); a tab's last save keeps every module's data
  through placement and recovery and is never removed to make room (#69); take-overs and the
  lock check after a profile switch wait for the real lock release (#71, #68). No update
  goes live without Louis's reply.
- This course's copies of the pinned core files matched 8ec7125 exactly before the copy.
  New core on branch `kit/update-0eeb13b`; `ns` and every question file unchanged.
- `python3 build.py --preview`: 479 questions, 189 images; the preview page differs from
  the live page in 187 lines (diff with timestamps masked): the preview note, the pin and
  build stamp in the embedded manifest, and the `views.js` changes above.
- `run_checks.sh` on that branch: 30 PASS, 0 FAIL, 2 NOT RUN (`stepper_test.js`: no
  step-through figures in DIA; `cite_check.py`: no lecture PDFs under decks/ or src/),
  1 REPORT (`explain_check.js`: 363 of 479, the same count as the live build), 0 NOT RUN
  cases. New checks: `notruncase_test.js` 42, `record_modules_test.js` 52,
  `ownership_test.js` 54. WebKit (Safari): NOT RUN here (Chromium only in this container).
- Exam today (America/Chicago 2026-11-07)? No: the one exam, Exam 4, was Mon 9/21.
- Preview at https://lglouis3-create.github.io/Medicinal-chemistry/preview/; the live
  page is unchanged. "approve updates for Medicinal-chemistry" makes it live.

## 2026-11-08: kit update 8ec7125 → 0eeb13b live, deploy confirmed

- Louis, in the "Kit updater" session, 2026-11-08: "Approve updates for medicinal
  chemistry", after the summary of the 2026-11-07 run and the preview at `/preview/`
  (main d15f20b).
- Commit db6da5b "kit update: core 8ec7125 → 0eeb13b" on `main`: `src/` from branch
  `kit/update-0eeb13b` (016ac02, the files the checks ran on: 30 PASS, 0 FAIL, 2 NOT RUN,
  1 REPORT), `python3 build.py` for the live `index.html` and `version.json`, `preview/`
  removed, the pin paragraph of `CLAUDE.md` updated. Pin: `kit:{core:'0eeb13b'}`. Question
  files, ids and `ns` unchanged; `sw.js` unchanged (its cache name changes only when the
  shape of what is cached changes).
- "pages build and deployment" for db6da5b: completed, success (run 42460750977,
  2026-11-08T07:56:01Z). The live page was not opened from this session (the Pages host
  is not reachable from the container).

## 2026-11-08 08:48 UTC: kit-update run (scheduled task "Kit update run", KIT_DESIGN.md §12)

- Preflight: the kit and all five course repositories in `COURSES.md` on kit `main`
  1bdc08e, each attached; `git fetch`, `git push --dry-run` and `gh api
  .../actions/runs?per_page=1` answered for each; Python 3.13.18, Node v22.23.4 and
  Chromium 153.0.8010.12 start. `coord.js kitupdate`: DEENT paused, the other four active.
- Pin `kit:{core:'0eeb13b'}` on `main` (21ccdae, deployed) against kit `main` 1bdc08e: the
  only kit change since 0eeb13b is pull request #74 (the coordination policy document);
  no file under `core/` or `features/` changed, so the course's core copies already match
  kit `main` byte for byte. The run first reported the course as current; Louis replied
  in the session that the pin should track kit `main`, so this preview was built.
- Branch `kit/update-1bdc08e`: `course.js` pin only; every other file unchanged.
- `python3 build.py --preview`: 479 questions, 189 images; the preview differs from the
  live page only in the preview note, the pin and the build stamp (6 lines, timestamps
  masked).
- `run_checks.sh`: 30 PASS, 0 FAIL, 2 NOT RUN (`stepper_test.js`: no step-through figures
  in DIA; `cite_check.py`: no lecture PDFs under decks/ or src/), 1 REPORT
  (`explain_check.js`: 363 of 479, as the live build), 0 NOT RUN cases. WebKit (Safari):
  NOT RUN here (Chromium only).
- Exam today (America/Chicago 2026-11-08)? No: the one exam, Exam 4, was Mon 9/21.
- Preview at https://lglouis3-create.github.io/Medicinal-chemistry/preview/; the live page
  is unchanged. "approve updates for Medicinal-chemistry" makes it live.

## 2026-11-08: kit update 0eeb13b → 1bdc08e live, deploy confirmed; course recorded as ended

- Louis, 2026-11-08, in the "Kit updater" session: standing authorization to prepare,
  validate and publish routine course updates without a per-update approval, and the
  instruction to finish this update if it qualifies as routine. It does: the change is the
  pin line in `course.js`; the course's core copies already matched kit `main` 1bdc08e.
- Verification before publishing: `main` was ed10308 (the preview commit) and branch
  `kit/update-1bdc08e` 78e531d as logged; the preview's pin read 1bdc08e; the live build
  from the branch's `src/` differs from the validated preview only in the preview note,
  the manifest link and the `preview` flag of BUILD (stamps masked).
- Commit 59c9a86 "kit update: core 0eeb13b → 1bdc08e" on `main`: `preview/` removed, the
  `CLAUDE.md` pin paragraph updated, and the course recorded as ended (Louis, 2026-11-08):
  no kit-update preview is built for a pin difference alone from now on; the course stays
  eligible for improvements that fit its material. Rollback: revert 59c9a86.
- "pages build and deployment" for 59c9a86: completed, success (run 42472429167,
  2026-11-08T10:41:53Z).
- Kit `main` has since moved to fa579cd (#62, #70, #72, #59, #73). Those are study-flow,
  exam-review and optional-topic changes to the core, assessed for this course under the
  maintenance policy, not applied here.
