# PHAR 4342 Final Drill: notes for the exam-drill-builder review

Written 2026-10-30 from one Claude Code session, the repository at `048d34a`,
and `src/README.md` (the build log kept by the earlier sessions that wrote the
bank). "SKILL.md" means the exam-drill-builder skill as synced to that session;
line numbers refer to that copy. Anything marked *from session memory,
unverified* has no file or commit to point to.

Repository: `lglouis3-create/Medicinal-chemistry`. Live at
`https://lglouis3-create.github.io/Medicinal-chemistry/` (GitHub Pages from
`main`). Commits from this session: `4a32dad`, `ed38dbd`, merged as `048d34a`
(PR #1). Everything before `4a32dad` (latest `9103bc6`, 2026-09-20) came from
earlier sessions and uploads.

## 1. What this drill does that the template and SKILL.md did not provide

The template could not be compared against: `exam-drill-template/` does not
exist in this repository at any commit on `main` (checked at `9103bc6` and
`048d34a`). The comparison below is against SKILL.md alone.

Built before this session (source: `src/README.md`):

- **Functional group atlas, as a tab and as questions.** `src/atlas.js` holds a
  skeletal-structure renderer and 11 boards (84 groups on 86 tiles);
  `src/gen_atlas_q.py` generates 45 "name the group" questions into
  `src/q8_atlas.js`, drawing distractors from the same board
  (`src/README.md:267-333`). SKILL.md treats the atlas as an on/off flag with
  stubs (`SKILL.md:82`, `SKILL.md:111`). Why the course needed it:
  `src/README.md:389-390` ("the atlas work and the Ex4 prep sheet both point at
  functional groups"). Louis asked for drawn structures because "I have a hard
  time remembering and distinguishing them" (2026-08-25, asked of a separate
  Exam 1 atlas; *from session memory, unverified*).
- **Atlas provenance.** `src/atlas.js:4` and `src/README.md:269` say it was
  ported from Louis's Functional Group Atlas artifact
  (`claude.ai/artifact/Qx3Zq6gMVACWS17UBnJiTi`). An atlas with the same board
  and tile counts and the same heteroatom palette tokens (`--at-o` … `--wash`,
  now in `src/shell.html`) was built on 2026-08-25 in
  `lglouis3-create/Heb-pharmacy-guide`, commit `01b9f43`, file
  `medicinal-chemistry/functional-group-atlas.html`, on branch
  `claude/medicinal-chemistry-review-welcc4`. That the drill's atlas descends
  from it is *from session memory, unverified*; the artifact URLs differ.
- **Per-profile progress and a storage shim** that keeps the drill running when
  `localStorage` throws (`README.md`, "Progress is stored per profile";
  `src/README.md:225-241`). Not in SKILL.md.
- **A full single pass** over the bank with no scheduling gate
  (`src/README.md:253-265`). Not in SKILL.md.
- **A coverage check against the documents that define the exam**,
  `Final-Review.pdf` and `Ex4-Prep-Work`, reporting thin topics as well as empty
  ones: `src/coverage_check.py` (`src/README.md:362-392`). Not in SKILL.md's
  check list (`SKILL.md:150-163`).
- **Citation by slide title** for decks that come back from a Claude Project
  as text with no page boundaries; `style_check.js` counts a quoted title as a
  located citation (`src/README.md:394-401`).
- **Select-all items spread across the three pools** in the paper's 38:8:4
  ratio (`EXAM_SATA` at `src/views.js:952`; `src/README.md`, Review round).
  SKILL.md specifies a select-all count per exam, not a spread across pools
  (`SKILL.md:77`).

Added in this session:

- **Service worker** (`sw.js`, `ed38dbd`): opens offline after one visit,
  fetches the page network-first, falls back to the saved copy when offline or
  slower than 3.5 s, offers a reload when a newer page arrives, never reloads by
  itself. The cache is named `phar4342-drill-*` and cleanup deletes only that
  prefix, because `lglouis3-create.github.io` serves other sites from the same
  origin and Cache Storage is shared per origin. Tested by `src/sw_test.py`
  (20/20), which serves the repository the way Pages does. Why: Louis asked
  for it (2026-10-30; *from session memory, unverified*).
- **Pages entry point** (`4a32dad`): `src/build.py` writes the app to the
  repository root as `index.html`; `PHAR4342_Final_Drill.html` becomes a
  redirect; `.nojekyll` added. Why: see problem 1.
- **Install to home screen** (`4a32dad`): `manifest.json`, icons, and the
  matching head tags in `src/shell.html`.
- **WebP images** (`4a32dad`): see problem 3.

## 2. Problems hit and how each was fixed

1. **The Pages root showed the README instead of the drill.** There was no
   `index.html` and no `.nojekyll`, so Jekyll rendered `README.md` as the
   index (seen in Louis's screenshot, 2026-10-30; *from session memory,
   unverified*). Fixed in `4a32dad` (entry point above). Before seeing the
   screenshot, Claude predicted a 404 at the root. That was wrong, and it is
   worth knowing when writing the publishing step.
2. **Build output and every check pointed at a sandbox path.** `src/build.py`
   wrote to `/mnt/user-data/outputs/PHAR4342_Final_Drill.html`, and
   `test.js`, `render_test.js`, `style_check.js`, `explain_check.js`,
   `cite_check.py`, `coverage_check.py` and `browser_test.py` read from it, so
   no check ran on a clone. Fixed in `4a32dad`: each resolves `../index.html`
   relative to its own file.
3. **The page was 8.82 MB, 86.4% of it inline JPEG** (189 slide crops,
   5.71 MB). Re-encoded as WebP at quality 80, with dimensions unchanged
   (1000 px crops shown at 620–760 CSS px, already under retina density): 6.55 MB
   on disk, 5.41 MB to 4.34 MB gzipped. `src/harvest.py`, `src/harvest_mask.py`
   and `src/mkimg.py` now emit WebP at `QUALITY = 80`. Commit `4a32dad`.
4. **A dupOf pair could share an exam paper.** `beginExam` drew the three
   pools with a separate blocked set each, so `ad-7` (Yendapally) and `df-6`
   (earlier Sikazwe) could both be drawn, on about 1 paper in 300. `test.js`
   failed about 2 runs in 40 on the page at `9103bc6`. Fixed in `ed38dbd`: one
   set is shared (`src/views.js:973-979`). `src/test.js` now draws 500 papers
   and forces every pair in both directions. The forced check failed 10/10
   against the old page; the suite then failed 0 of 40 runs.
5. **`cite_check.py` could not run.** `pdfplumber` was missing, and the system
   `cryptography` package lacked its `_cffi_backend`. It ran in a virtualenv
   against the 18 decks from Louis's Drive (Intro Med Chem › Slides › Exam 1–4),
   renamed to the spellings in `src/cite_check.py` `ALIASES`/`BARE_MAP`: 902
   references, every slide exists. Environment only, no commit; how to run it is
   documented in `README.md` (`ed38dbd`). The decks are not committed.
6. **`browser_test.py` could not launch Chromium.** The latest pip Playwright
   wanted `chromium_headless_shell-1248`; the environment ships
   `chromium-1194`. `playwright==1.56.0` matched. Environment only, no commit;
   *from session memory, unverified*.
7. **`sw_test.py` scored 19/20 on its first run.** The test opened the Quiz tab
   with no topic chosen ("Choose a topic to begin."). The test was fixed before
   commit `ed38dbd`; *from session memory, unverified*.

## 3. SKILL.md steps that were wrong, missing, or skipped here

Wrong for this repository:

- `SKILL.md:16`: the template at `exam-drill-template/` does not exist (§1).
- `SKILL.md:17-18`: the reference implementation is not at
  `medicinal-chemistry/PHAR4342-final-drill/`. It is `src/` at the repository
  root, built to `index.html` (to `PHAR4342_Final_Drill.html` before `4a32dad`).
- `SKILL.md:13`, `SKILL.md:69-97`: there is no `course.js`. Course settings are
  hard-coded: storage namespace `src/shell.html:399`; exam date
  `src/views.js:371`; select-all count `src/views.js:952`; pool sizes 8/4/38
  `src/views.js:977-979`; 75-minute timer `src/views.js:982`.
- `SKILL.md:159`: checks did not read the output path from `course.js`; they
  hard-coded a sandbox path (problem 2).
- `SKILL.md:160`: a check that cannot run should report NOT RUN.
  `src/cite_check.py:16` imports `pdfplumber` at module level, so a missing
  package crashes with `ModuleNotFoundError` instead. Its NOT RUN path covers
  only missing decks.
- `SKILL.md:155`: `cite_check.py` looks in `yen/` and the working directory
  (`src/cite_check.py:18`), not `decks/`.
- `SKILL.md:209`: "upload the same-named HTML over the old one". Since
  `4a32dad` the build writes `index.html` into the repository root, which is
  what Pages serves.

Missing from SKILL.md:

- A Pages entry point: `index.html` at the published root, and `.nojekyll`
  (problem 1). SKILL.md says the drill is published on GitHub Pages
  (`SKILL.md:12`) but has no step for it.
- Image format and quality for `images.json` (`SKILL.md:104-105` names the
  harvester only). JPEG made the images 86% of this page (problem 3).
- `coverage_check.py` and `sw_test.py` in the check list (`SKILL.md:150-157`).
- Offline behaviour, and the shared-origin rule for caches (§1, `sw.js`).
- Exam pools drawn with one blocked set (problem 4), so that `dupOf`
  (`SKILL.md:145-147`) holds across pools.

Skipped in this session:

- Read and update `claude/drill-app-state.md` (`SKILL.md:58-63`, `176`, `190`):
  the session had no Claude Project access, and the file is not in this
  repository or the two Drive folders searched (§6).
- `STYLE.md` (`SKILL.md:108`, `169`): there is none in the repository at
  `048d34a`. Whether one exists in the Project is unverified.
- `ingest.py` (`SKILL.md:178`): not in the repository. No lecture was ingested
  in this session.
- Zip delivery (`SKILL.md:188-189`, `235`): not needed, since the push
  succeeded.

## 4. Decisions Louis made

In Louis's words, from this session (2026-10-30; *from session memory,
unverified* unless a commit is given):

- "Yes whatever you think is the best for this site to improve its performance
  and functionality for the medicinal chemistry exam drill please." This led to
  `4a32dad`.
- "Yes add a service worker, if you would like to look in my google drive at
  this folder", with links to the Intro to Med Transcripts and Intro Med Chem
  folders. This led to `ed38dbd`.
- "I've settled on a caching design: always fetch the latest page when online,
  serve the saved copy when the network is slow or offline, and scope cache
  cleanup to this drill's own origin so the pharmacology site is unaffected."
  The pharmacology site shares the origin, so the code scopes cleanup by cache
  name instead (`sw.js`, `PREFIX`). Claude pointed this out in the session.
- "I want this chat to only be medicinal access." Claude deleted its local
  clone of the pharmacology repository.
- "Merge it automatically always." This led to PR #1 being merged as `048d34a`.
  Claude added its own condition: stop and ask if a check fails or a change
  touches answer keys. That condition is Claude's, not Louis's.

Recorded in the repository from earlier sessions:

- Phrasing Louis rejected: "study meta-commentary, metaphor, and appeals to the
  deck" (`src/style_check.js:1`), with a list of "metaphor or jargon Louis
  flagged" (`src/style_check.js:17`).
- Atlas text that pointed at the layout or the lecturer was rewritten as "the
  vague references Louis rejected", and board titles keep "Louis's own framing"
  (`src/README.md:325-333`).
- Louis's three Quizlet sets were checked card by card, and the gaps became
  `src/q13_quizlet.js` (`src/README.md:535-562`).

## 5. Planned but not done

- **Port the course-agnostic features of
  `Intro-Pharmacology-/exam1-drill/notes/ENGINE_UPGRADES.md` into
  `exam-drill-template/`, update its README, and list SKILL.md changes**
  (requested 2026-10-30). Not done: the template does not exist, and Louis then
  limited this chat to the medicinal chemistry material. *From session memory,
  unverified.*
- **Protect `main`** (restrict deletions, block force pushes): recommended, not
  applied. On 2026-10-30, `gh api …/rulesets` returned `[]` and
  `…/branches/main` reported `protected: false`.
- **Record the auto-merge rule in a `CLAUDE.md`** so future sessions follow it:
  offered, not written. There is no `CLAUDE.md` at `048d34a`.
- **Check the live site from the session:** not possible, because the session's
  proxy blocks `github.io`. The Pages run for `048d34a` reported
  `completed success` through the GitHub API. Install and offline behaviour have
  not been tested on a real phone.
- **`src/README.md:3-4` is stale.** It still says the build writes
  `PHAR4342_Final_Drill.html`. Left unedited, because this commit changes no
  other file.
- **Counts disagree.** `README.md` and `src/README.md:562` say 386 questions
  and 188 images. The build at `048d34a` has 387 questions (`style_check.js`:
  "scanned 387") and 189 keys in `src/images.json`.
- **Twelve sources named in `src/README.md` are not in the repository:**
  `add_cyp_q.py`, `attach_cyp.py`, `attach_yen.py`, `attach_yen2.py`,
  `attach_yen3.py`, `harvest_yen.py`, `harvest_yen2.py`, `harvest_yen3.py`,
  `cyp_images_spec.json`, `yen_images_spec.json`, `yen2_images_spec.json`,
  `yen3_images_spec.json`. They are also not in
  `PHAR4342-drill-src.zip` (21 files) in Louis's Drive (Intro to Med
  Transcripts › Final Exam).
- **Still without slide figures,** as of `src/README.md:138-140`: `dmfound` 14
  and nine `admet` questions. Current status unverified.
- **`explain_check.js` findings are open:** 286 questions where a wrong option
  does not name the misunderstanding behind it (`src/README.md:468-470`).
- **The Exam 1 study tools** (active recall drill `a658772`, functional group
  atlas `01b9f43`) are on branch `claude/medicinal-chemistry-review-welcc4` in
  `lglouis3-create/Heb-pharmacy-guide` and were never merged to its `main`.
- **Branch `claude/pages-perf` was not deleted** after merging.

## 6. This course's state doc

Not found.

- Not in this repository: there is no `claude/` directory before this file, at
  `048d34a` or earlier.
- Not in Louis's Drive folders "Intro to Med Transcripts" and "Intro Med Chem"
  or their first-level subfolders. A title search for "drill", "state" and
  "claude" there returned only `PHAR4342-drill-src.zip`, which contains no
  state doc.
- SKILL.md places it in the course's Claude Project (`SKILL.md:58-63`).
  `src/GUIDE_BRIEF.md` refers to "the attached Claude Project" for the
  transcripts, so a Project existed for earlier builds. Whether it holds
  `claude/drill-app-state.md` is *unverified*: this session could not open
  Claude Projects.
