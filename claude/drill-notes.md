# PHAR 4342 Final Drill: notes for the exam-drill-builder review

Written 2026-10-30 from the repository at `03a314d`, the four `claude/` docs in
the Medicinal Chemistry Claude Project, `src/README.md`, and one Claude Code
session. "SKILL.md" means `exam-drill-builder/SKILL.md` as synced to this
session (245 lines); line numbers refer to that copy. Anything marked *from
session memory, unverified* has no file or commit to point to.

Repository: `lglouis3-create/medicinal-chemistry`. Live at
`https://lglouis3-create.github.io/Medicinal-chemistry/` (GitHub Pages from
`main`).

**This supersedes the version merged as `03a314d` (PR #2).** That version was
written by a session with no Claude Project access, and said so. It reported
the course state doc as not found, and reported `course.js`, the template,
`ingest.py` and `STYLE.md` as absent. All four exist. The session that wrote
them could not see them, so it read their absence from the GitHub repo as
SKILL.md being wrong about this course. The opposite is the case: SKILL.md
describes work that was done and never pushed. §7 is new and carries the
consequence. Sections unaffected by Project access are kept as that version had
them.

## 0. The published repo is 92 questions behind the recorded state

| | questions | images | select-all |
|---|---|---|---|
| Published repo at `03a314d` | 387 | 189 | not counted here |
| `claude/drill-app-state.md`, 09/21 | 479 | 189 | 48 |

Repo side, verified this session from a clone: `node src/style_check.js` prints
"387 of 387" with a located citation (369 by slide number, 18 by slide title,
72 questions carrying a diagram); `src/images.json` holds 189 keys;
`node src/test.js` prints "All checks passed".

Project side, `claude/drill-app-state.md` (created 2026-09-21) records 479
questions, 189 images, 48 select-all, and pools Sikazwe|new 266, Sikazwe|old
135, Yendapally|old 78.

The 09/21 round is the gap: `q14_tell.js` (89 tell-apart questions),
`q15_types.js` (numeric and matching items), `course.js`, `ingest.py` and
`exam-drill-template/`. None of those paths exist in the repo at `03a314d`
(checked by `find`). `claude/drill-app-state.md` gives the reason: "Push from
the session is refused by the git proxy ('not in this session's authorized
repository set'), so Louis uploads through github.com on his iPad." The upload
carried the build; it did not carry the 09/21 sources.

The four `claude/` docs in the Project disagree with each other on counts,
because each was written at a different point and only one says so:

| doc | created | questions |
|---|---|---|
| `claude/drill-explanation-standard.md` | 2026-09-20 15:24Z | 277 |
| `claude/drill-checks.md` | 2026-09-20 15:44Z | 277 |
| `claude/drill-atlas.md` | 2026-09-20 18:22Z | 337 |
| `claude/drill-app-state.md` | 2026-09-21 23:16Z | 479 |

`claude/drill-atlas.md` opens by superseding the counts in
`claude/drill-app-state.md`, which was true when written and is now backwards:
the state doc was updated a day later. Nothing names the current build.

## 1. What this drill does that the template and SKILL.md did not provide

The template could not be compared against from the repository:
`exam-drill-template/` is not in it at any commit on `main` (checked at
`9103bc6`, `048d34a` and `03a314d`). `claude/drill-app-state.md` records that it
was built on 09/21 — engine plus stubs (`atlas.js`, `diagrams.js`,
`images.json`, `reference.js`, `tell.js`, `guide.js`), a `course.js` template,
`q1_topics.js` with 7 sample items, `STYLE.md`, `README.md`, `CLAUDE.md`,
`.gitignore` — and that its build passes test, style and render, with the
browser test passing on 4 named skips and `cite_check` NOT RUN for want of
decks. It exists only in a session workspace and a local clone, neither of which
survives. The comparison below is against SKILL.md alone.

Built before this session (sources: `src/README.md`, and the Project docs where
named):

- **Functional group atlas, as a tab and as questions.** `src/atlas.js` holds a
  skeletal-structure renderer and 11 boards (84 groups on 86 tiles);
  `src/gen_atlas_q.py` generates 45 "name the group" questions into
  `src/q8_atlas.js`, drawing distractors from the same board
  (`src/README.md:267-333`). SKILL.md treats the atlas as an on/off flag with
  stubs (`SKILL.md:83`, `SKILL.md:111`). `claude/drill-atlas.md` adds that
  `random.seed(4342)` makes rebuilds byte-identical, and records a leak the
  split closed: `render(m, label)` put the group name in the SVG `aria-label`,
  which is right for the atlas tab and wrong for a question asking the reader to
  name the group, so `atlas.js` now builds `FG` (named) and `FGQ` (neutral)
  with a browser assertion guarding it. SKILL.md has no rule about a figure
  carrying its own answer in an accessibility attribute.
- **Structures drawn side by side in explanations** (`claude/drill-atlas.md`):
  `fgShow` above the options at 240 px, `optFig` beside each option's
  explanation, `cmpStrip` a labelled row inside the concept block with the
  answer first and marked; automatic when every option is an atlas group,
  explicit via `cmp: [...]`. A group discussed but not drawn is left out rather
  than faked. Not in SKILL.md.
- **Atlas provenance.** `src/atlas.js:4` and `src/README.md:269` say it was
  ported from Louis's Functional Group Atlas artifact
  (`claude.ai/artifact/Qx3Zq6gMVACWS17UBnJiTi`), the same URL
  `claude/drill-atlas.md` names. An atlas with the same board and tile counts
  and the same heteroatom palette tokens (`--at-o` … `--wash`, now in
  `src/shell.html`) was built on 2026-08-25 in `lglouis3-create/Heb-pharmacy-guide`,
  commit `01b9f43`, file `medicinal-chemistry/functional-group-atlas.html`, on
  branch `claude/medicinal-chemistry-review-welcc4`. That the drill's atlas
  descends from it is *from session memory, unverified*.
- **Per-profile progress and a storage shim.** `claude/drill-checks.md` gives
  the fault in full: `shell.html` read `localStorage` at the top level of the
  script, and an opaque origin, a private window or blocked site data makes that
  read throw a SecurityError while the script is still evaluating, so the page
  loads blank with no visible error. All storage now goes through an `LS` shim
  that probes once and falls back to an in-memory object; the header then reads
  "(progress not saved)". Not in SKILL.md.
- **A full single pass** over the bank with no scheduling gate
  (`src/README.md:253-265`). Not in SKILL.md.
- **A coverage check against the documents that define the exam**,
  `Final-Review.pdf` and `Ex4-Prep-Work`, reporting thin topics as well as empty
  ones: `src/coverage_check.py` (`src/README.md:362-392`). Not in SKILL.md's
  check list (`SKILL.md:150-157`). `claude/drill-atlas.md` records what it
  caught: three thin Yendapally topics the blueprint names — drug discovery
  sources and uses, structure–activity relationship, and Absorption II
  drug–drug interactions, the last with no chelation, adsorption, motility or
  prodrug content — closed by the 15 questions in `src/q9_gaps.js`.
- **Citation by slide title** for decks that come back from a Claude Project as
  text with no page boundaries; `style_check.js` counts a quoted title as a
  located citation (`src/README.md:394-401`). 18 of the 387 rely on it
  (verified this session).
- **Select-all items spread across the three pools** in the paper's 38:8:4
  ratio (`EXAM_SATA` at `src/views.js:952`). SKILL.md specifies a select-all
  count per exam (`SKILL.md:76`), not a spread across pools.
- **A written explanation standard**, `claude/drill-explanation-standard.md`,
  set 09/20 from Louis's review of the tetrazole question `dd-4`: the concept
  block opens on chemistry rather than on the question; a long block splits into
  named `{h, t}` sections rendered by `renderTeach()` while option explanations
  stay prose; a named category is defined in the course's terms and then shown
  to be met; each wrong option names the misunderstanding, sorted as chemistry
  error, recall slip, near miss or wrong frame; technical terms carry a
  definition at first use, inline or from a 33-term `GLOSS` table in `views.js`
  that adds one per question and skips questions that already define it.
  SKILL.md asks for a `why` on every option that says "why it is right or what
  error picking it reveals" (`SKILL.md:131`) but carries no taxonomy of errors,
  no sectioned-`teach` form, and no glossing mechanism.

Added in this session's predecessor (PR #1, `048d34a`):

- **Service worker** (`sw.js`, `ed38dbd`): opens offline after one visit,
  network-first, falls back to the saved copy when offline or slower than 3.5 s,
  offers a reload when a newer page arrives, never reloads by itself. The cache
  is named `phar4342-drill-*` and cleanup deletes only that prefix, because
  `lglouis3-create.github.io` serves other sites from the same origin and Cache
  Storage is shared per origin. Tested by `src/sw_test.py` (20/20).
- **Pages entry point** (`4a32dad`): `src/build.py` writes the app to the
  repository root as `index.html` (`src/build.py:23`, `OUTPUT_NAME`);
  `PHAR4342_Final_Drill.html` becomes a redirect; `.nojekyll` added.
- **Install to home screen** (`4a32dad`): `manifest.json`, icons, head tags in
  `src/shell.html`.
- **WebP images** (`4a32dad`): see problem 3.

## 2. Problems hit and how each was fixed

1. **The Pages root showed the README instead of the drill.** There was no
   `index.html` and no `.nojekyll`, so Jekyll rendered `README.md` as the index
   (seen in Louis's screenshot, 2026-10-30; *from session memory, unverified*).
   Fixed in `4a32dad`. Before seeing the screenshot, Claude predicted a 404 at
   the root. That was wrong, and it is worth knowing when writing the publishing
   step.
2. **Build output and every check pointed at a sandbox path.** `src/build.py`
   wrote to `/mnt/user-data/outputs/PHAR4342_Final_Drill.html`, and `test.js`,
   `render_test.js`, `style_check.js`, `explain_check.js`, `cite_check.py`,
   `coverage_check.py` and `browser_test.py` read from it, so no check ran on a
   clone. Fixed in `4a32dad`: each resolves `../index.html` relative to its own
   file. Verified this session — `node style_check.js` and `node test.js` both
   run from a fresh clone with no arguments.
3. **The page was 8.82 MB, 86.4% of it inline JPEG** (189 slide crops,
   5.71 MB). Re-encoded as WebP at quality 80, dimensions unchanged (1000 px
   crops shown at 620–760 CSS px, already under retina density): 6.55 MB on
   disk, 5.41 MB to 4.34 MB gzipped. `src/harvest.py`, `src/harvest_mask.py` and
   `src/mkimg.py` now emit WebP at `QUALITY = 80`. Commit `4a32dad`.
4. **A dupOf pair could share an exam paper.** `beginExam` drew the three pools
   with a separate blocked set each, so `ad-7` (Yendapally) and `df-6` (earlier
   Sikazwe) could both be drawn, on about 1 paper in 300. `test.js` failed about
   2 runs in 40 on the page at `9103bc6`. Fixed in `ed38dbd`: one set is shared
   (`src/views.js:973-979`). `src/test.js` now draws 500 papers and forces every
   pair in both directions. The forced check failed 10/10 against the old page;
   the suite then failed 0 of 40 runs.
5. **`cite_check.py` could not run.** `pdfplumber` was missing, and the system
   `cryptography` package lacked its `_cffi_backend`. It ran in a virtualenv
   against the 18 decks from Louis's Drive (Intro Med Chem › Slides › Exam 1–4),
   renamed to the spellings in `src/cite_check.py` `ALIASES`/`BARE_MAP`: 902
   references, every slide exists. Environment only, no commit; how to run it is
   documented in `README.md` (`ed38dbd`). The decks are not committed.
6. **`browser_test.py` could not launch Chromium.** The latest pip Playwright
   wanted `chromium_headless_shell-1248`; the environment ships `chromium-1194`.
   `playwright==1.56.0` matched. Environment only, no commit; *from session
   memory, unverified*.
7. **`sw_test.py` scored 19/20 on its first run.** The test opened the Quiz tab
   with no topic chosen ("Choose a topic to begin."). Fixed before `ed38dbd`;
   *from session memory, unverified*.

Three earlier faults are recorded in `claude/drill-checks.md` and belong here,
because the pattern is the point and SKILL.md carries only its conclusion:

8. **The figure check counted whatever was on screen and passed at zero**, which
   let five questions keep figures that never displayed.
9. **`render_test.js` scanned for the literal string "NaN" across the whole
   page**, base64 payloads included. Past 132 images a payload contained it by
   chance, so the check began failing on image data rather than on anything the
   app produced. It now strips data URLs first.
10. **`cite_check.py` reported "every checked slide number exists" when run
    where the decks were absent** — a pass over zero references. It now reports
    NOT RUN and why. `claude/drill-explanation-standard.md` states the rule
    drawn from these: "A check that cannot fail is not a check, and a check that
    fires on data it was never meant to read is not a check either."

## 3. SKILL.md steps that were wrong, missing, or skipped here

**Correction to PR #2.** That version listed `SKILL.md:13`, `69-97`, `155`,
`159`, `160` and `16-18` as wrong for this repository. They are right about the
course and wrong about the published repo, which is stale (§0). Moving them:

- `SKILL.md:16` (`exam-drill-template/` at the repo root) and `SKILL.md:17-18`
  (reference implementation at `medicinal-chemistry/PHAR4342-final-drill/`)
  describe the 09/21 local clone layout recorded in
  `claude/drill-app-state.md`, not the published repo, where the sources are
  `src/` at the root and the build is `index.html`. The paths are not wrong;
  they were never pushed.
- `SKILL.md:13`, `69-97` (`course.js`): the manifest exists as of 09/21 —
  id/title/short/ns/output/atlas/professors, 20 mapped lectures, exams with
  pools, `activeExam`, `skills`, `paceDefault` — injected by `build.py` at
  `/*__COURSE__*/`. Not in the repo. In the published build the same settings
  are hard-coded: storage namespace `src/shell.html:399`; exam date
  `src/views.js:371`; select-all count `src/views.js:952`; pool sizes 8/4/38
  `src/views.js:977-979`; 75-minute timer `src/views.js:982`.
- `SKILL.md:159` (every check reads the output path from `course.js`): done on
  09/21 per `claude/drill-app-state.md`, which also records `test.js` made
  data-driven, `cite_check.py` deriving deck spellings from the files on disk,
  `explain_check.js` taking pool weights from the manifest, and
  `browser_test.py` reporting `skip` rather than pass for checks a bank cannot
  exercise. The repo's copies resolve `../index.html` instead (problem 2).

Still wrong, or still open:

- `SKILL.md:160`: a check that cannot run should report NOT RUN.
  `src/cite_check.py:16` imports `pdfplumber` at module level, so a missing
  package crashes with `ModuleNotFoundError` instead. Its NOT RUN path covers
  only missing decks. Verified at `03a314d`.
- `SKILL.md:155`: `cite_check.py` looks in `yen/` and the working directory
  (`src/cite_check.py:18`), not `decks/`.
- `SKILL.md:209`: "upload the same-named HTML over the old one". Since
  `4a32dad` the build writes `index.html` into the repository root, which is
  what Pages serves. `claude/drill-app-state.md` still carries the old
  instruction and the old live URL ending in `PHAR4342_Final_Drill.html`.
- `SKILL.md:234-236` tells a session whose push is refused to deliver a bundle
  and zip with upload steps. That is what happened on 09/21, and 92 questions
  did not arrive. The step has no way to confirm the upload landed, and nothing
  in the skill compares the published build against the state doc.

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
- The storage shim (§1), and a rule against reading `localStorage` at the top
  level of the script.
- The error taxonomy and sectioned `teach` of
  `claude/drill-explanation-standard.md` (§1).
- A rule that a figure must not carry its own answer in an `aria-label` (§1).
- A state doc whose counts can be checked against a build. Four docs disagree
  (§0) and `claude/drill-atlas.md` supersedes a doc that was later updated past
  it. SKILL.md:62-63 says to read the state doc first and update it at the end
  of every session; it does not say to date or reconcile it.

Skipped in this session's predecessor:

- Read and update `claude/drill-app-state.md` (`SKILL.md:58-63`, `176`, `190`):
  that session had no Claude Project access. The file exists (§6). This session
  read it; it is not updated here, because Louis asked that no other file
  change, and it lives in the Project rather than the repo.
- `STYLE.md` (`SKILL.md:108`, `169`): none in the repository at `03a314d`. It
  exists for this course — `claude/drill-app-state.md` records four reviewers
  reading the whole bank against it on 09/20, and a `STYLE.md` template in
  `exam-drill-template/`.
- `ingest.py` (`SKILL.md:178`): not in the repository. It exists as of 09/21,
  tested on L15 (66 slides, 13 picture slides), per `claude/drill-app-state.md`.
  No lecture was ingested in either session.
- Zip delivery (`SKILL.md:188-189`, `235`): not needed, since the push
  succeeded.

## 4. Decisions Louis made

In Louis's words, from the PR #1 session (2026-10-30; *from session memory,
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
- "I want this chat to only be medicinal access." Claude deleted its local clone
  of the pharmacology repository.
- "Merge it automatically always." This led to PR #1 being merged as `048d34a`.
  Claude added its own condition: stop and ask if a check fails or a change
  touches answer keys. That condition is Claude's, not Louis's.

Recorded in the repository and the Project from earlier sessions:

- Phrasing Louis rejected: "study meta-commentary, metaphor, and appeals to the
  deck" (`src/style_check.js:1`), with a list of "metaphor or jargon Louis
  flagged" (`src/style_check.js:17`).
- Atlas text that pointed at the layout or the lecturer was rewritten as "the
  vague references Louis rejected", and board titles keep "Louis's own framing"
  (`src/README.md:325-333`).
- Louis's three Quizlet sets were checked card by card, and the gaps became
  `src/q13_quizlet.js` (`src/README.md:535-562`).
- Option explanations stay prose rather than taking headings —
  `claude/drill-explanation-standard.md` records this as "Louis's own judgement,
  and it is right."
- Acronym hooks were dropped from the guides per an earlier decision of Louis's,
  plain tell-apart lines kept (`claude/drill-app-state.md`, 09/21).
- The enzyme and cofactor hook maps to BTS member names, and the phase 2
  target-group rule "was written to sit on top of it without new words"
  (`claude/drill-app-state.md`). SKILL.md:239-240 keeps personal mnemonics out
  of a shared build unless asked; this one is in it.
- On the exam/module map for the older lectures, which Claude inferred from the
  course order: "mostly, I will correct it" (`claude/drill-app-state.md`).
  Corrections had not arrived as of 09/21.
- Nightly ingest "is to be requested by phrase, per course, for future courses
  only" (`claude/drill-app-state.md`). The course has ended; no scheduled task
  exists for it.

## 5. Planned but not done

- **Push the 09/21 round** — `q14_tell.js`, `q15_types.js`, `course.js`,
  `ingest.py`, `exam-drill-template/`, the generalized checks. Built and
  committed locally (`claude/drill-app-state.md` names local commits through
  `2ebfade`), never on GitHub. The local clone and
  `PHAR4342-medchem.bundle` were in a session workspace that no longer exists;
  whether Louis still holds the bundle is unverified.
- **Correct the exam/module map for the older lectures** (above).
- **Port the course-agnostic features of
  `Intro-Pharmacology-/exam1-drill/notes/ENGINE_UPGRADES.md` into
  `exam-drill-template/`, update its README, and list SKILL.md changes**
  (requested 2026-10-30). Not done: the template is not in this repo, and Louis
  then limited that chat to the medicinal chemistry material. *From session
  memory, unverified.*
- **Protect `main`** (restrict deletions, block force pushes): recommended, not
  applied. On 2026-10-30, `gh api …/rulesets` returned `[]` and `…/branches/main`
  reported `protected: false`.
- **Record the auto-merge rule in a `CLAUDE.md`** so future sessions follow it:
  offered, not written. There is no `CLAUDE.md` at `03a314d`.
- **Check the live site from a session:** the PR #1 session's proxy blocked
  `github.io`. The Pages run for `048d34a` reported `completed success` through
  the GitHub API. Install and offline behaviour have not been tested on a real
  phone.
- **Counts disagree across the repo's own files.** `README.md:22,26` says 386
  questions and 189 images; `src/README.md:49` says 277 questions and 166
  images; `src/README.md:255` says 322. The build at `03a314d` has 387
  (`style_check.js`) and 189 (`src/images.json`), both verified this session.
- **`src/README.md:3-4` is stale.** It still says the build writes
  `PHAR4342_Final_Drill.html`. Left unedited: this commit changes no other file.
- **Twelve sources named in `src/README.md` are not in the repository:**
  `add_cyp_q.py`, `attach_cyp.py`, `attach_yen.py`, `attach_yen2.py`,
  `attach_yen3.py`, `harvest_yen.py`, `harvest_yen2.py`, `harvest_yen3.py`,
  `cyp_images_spec.json`, `yen_images_spec.json`, `yen2_images_spec.json`,
  `yen3_images_spec.json`. They are also not in `PHAR4342-drill-src.zip`
  (21 files) in Louis's Drive (Intro to Med Transcripts › Final Exam).
- **Still without slide figures,** as of `src/README.md:138-140`: `dmfound` 14
  and nine `admet` questions. Current status unverified.
- **`explain_check.js` findings are open.** The three docs give three numbers at
  three bank sizes: 226 wrong options with no diagnosis at 277 questions
  (`claude/drill-explanation-standard.md`), 286 at 337
  (`claude/drill-atlas.md`), 286 at an unstated size
  (`src/README.md:468-470`). `claude/drill-atlas.md` adds that this measures
  "completeness against a standard, not defects. The detector over-reports."
- **Four chemistry errors were found by adversarial review after every automated
  check passed** (`claude/drill-atlas.md`): tertiary alcohols' resistance to
  oxidation attributed to steric crowding rather than to no hydrogen on the
  carbon holding the OH; proguanil given as a guanidine when it is a biguanide;
  furosemide's acidity attributed to its sulfonamide when at body pH it is the
  carboxylic acid; "one nitrogen in a fused 6/6 is quinoline" ignoring
  isoquinoline. The doc's conclusion: the checks "do not verify chemistry."
  Whether a later round re-ran that review is unverified.
- **One course conflict flagged rather than resolved** (`claude/drill-atlas.md`):
  FG deck slide 24 runs an arrow along ethanol, 2-propanol and t-butanol
  annotated *more water soluble* to *more oily*; all three are miscible, and the
  four-carbon isomers run the other way. The course order stays as the keyed
  answer and the three alcohol questions carry a `note`.
- **The Exam 1 study tools** (active recall drill `a658772`, functional group
  atlas `01b9f43`) are on branch `claude/medicinal-chemistry-review-welcc4` in
  `lglouis3-create/Heb-pharmacy-guide` and were never merged to its `main`.
- **Branch `claude/pages-perf` was not deleted** after merging PR #1.

## 6. This course's state doc

**Found.** `claude/drill-app-state.md` in the Medicinal Chemistry Claude
Project, created 2026-09-21, where `SKILL.md:58-63` says it should be. Three
more sit beside it:

| path (Claude Project) | created | what it holds |
|---|---|---|
| `claude/drill-app-state.md` | 2026-09-21 | bank counts, delivery status, the 09/21 and 09/20 rounds, wording review, verified slide facts, five course conflicts, Yendapally's percent-ionization method, ClogP π values, build and check order |
| `claude/drill-atlas.md` | 2026-09-20 | atlas tab and generated questions, side-by-side structures, coverage against the exam scope, the four chemistry errors, the alcohol-gradient conflict, GitHub push refusal |
| `claude/drill-checks.md` | 2026-09-20 | what each check proves and cannot, three silently-passing checks, the load-time `localStorage` crash, citation coverage |
| `claude/drill-explanation-standard.md` | 2026-09-20 | the five requirements a question's explanation owes the reader, the error taxonomy, `GLOSS`, how `explain_check.js` scores |

PR #2 reported this as not found, correctly for what that session could reach:
not in the repository (no `claude/` directory before `f9369c8`), and not in the
Drive folders "Intro to Med Transcripts" or "Intro Med Chem" or their
first-level subfolders, where a title search for "drill", "state" and "claude"
returned only `PHAR4342-drill-src.zip`, which contains no state doc. The docs
are in the Claude Project, which that session could not open.

## 7. What this means for the skill review

Stated as findings, not recommendations.

1. **SKILL.md was judged against a stale artifact.** Six of the "wrong for this
   repository" entries in PR #2 describe a repo that is one round behind the
   course. A reviewer acting on that version would remove `course.js`, the
   template and `ingest.py` from the skill — the opposite of what the course
   did.
2. **The skill's own delivery step is where the work was lost.** `SKILL.md:234-236`
   handles a refused push by handing over a bundle and a zip. On 09/21 that
   produced an upload of the build without the sources, and nothing in the
   skill detects the divergence afterwards. The state doc records the refusal
   and the workaround; no step compares what is published against what the state
   doc claims.
3. **Four state docs exist where SKILL.md describes one**, and their counts
   contradict each other in an order that cannot be read off their own text
   (§0). `SKILL.md:60-63` names a single `claude/drill-app-state.md`.
4. **Reading the Project is not optional for this skill and is not guaranteed.**
   Both of the last two sessions ran without Project access —
   `claude/drill-atlas.md` records the 09/20 session's GitHub 403, and PR #2
   records no Project access. `SKILL.md:38-39` and `SKILL.md:176` tell a session
   to check the Project first; neither says what to do when it cannot, and the
   failure is silent in the output.
5. **The checks do not verify chemistry, and the skill does not say so.**
   `SKILL.md:150-163` lists the checks as the gate. `claude/drill-atlas.md`
   records four chemistry errors that passed every one of them and were found
   only by adversarial review. Mode 4 (`SKILL.md:212-218`) is that review, but
   nothing marks it as the only step that can catch this class.
