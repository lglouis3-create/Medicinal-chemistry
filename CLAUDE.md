# PHAR 4342 Medicinal Chemistry drill: state for Claude

**State as of 2026-11-01, after the move onto the exam-drill-kit core was prepared
(branch `kit/move-to-core`, local only: not pushed, not live).** The live site is still
`main` at 03a314d until Louis approves the preview.

Site: https://lglouis3-create.github.io/Medicinal-chemistry/ (GitHub Pages from `main`,
repository root). Repository: `lglouis3-create/Medicinal-chemistry`. Course: PHAR 4342
PT I, Intro to Medicinal Chemistry, Fall 2026, cumulative final (Exam 4) on Mon 9/21,
9:00-10:15 am (`src/course.js`). The exam has passed; no later exam date is recorded.

## Read first

- The kit (`lglouis3-create/exam-drill-kit`): `KIT_DESIGN.md` §7 and §12,
  `skill/SKILL.md`, `core/README.md`, `COURSES.md` (the PHAR 4342 entry).
- `reviews/OPEN_QUESTIONS.md` (what waits for Louis) and the last entries of
  `reviews/LOG.md`.
- `src/README.md` (the build log of the sessions that wrote the bank, to 2026-09-21)
  and `src/CLAUDE.md` (rules for writing questions, tables and guides).
- `claude/drill-notes.md` (2026-10-30 notes for the kit review; its corrected version
  is on branch `claude/drill-notes-project-sources`, 3b87e8a, not merged).

## Counts

| | live (`main` 03a314d) | this branch (`kit/move-to-core`) |
|---|---|---|
| questions | 387 | 479 (all 387 live ids kept; 92 new) |
| select-all / numeric / matching | 36 / 0 / 0 | 48 / 2 / 1 |
| tell-apart questions (`q14_tell.js`) | 0 | 89 |
| concepts | 345 | 398 |
| topics | 13 | 13 |
| slide images (`src/images.json`) | 189 WebP | 189 WebP (same file) |
| atlas groups | 86 | 86 |
| page (`index.html`) | 6,876,844 bytes | 7,195,775 bytes |

Counts from the built pages (`QUESTIONS`, `IMAGES`) and `node test.js`, 2026-11-01.

## The engine and the kit pin

- Since this branch the engine is the kit core: every file of the kit's `core/` except
  `README.md`, plus `core/vendor/`, copied into `src/` from kit commit `9f2f2a4`
  (`course.js` `kit:{core:'9f2f2a4'}`). Only Mode 7 of the kit's skill changes the pin.
- The one course edit to a core file: `DATA_FILES` in `src/build.py` lists this
  course's 15 question files. A core update that copies `build.py` again must keep it.
- Course content: `src/course.js`, `src/q*.js`, `atlas.js`, `diagrams.js`,
  `glossary.js` (the GLOSS table, moved out of the old `views.js` unchanged),
  `links.js` (empty), `reference.js`, `tell.js`, `guide.js` with `src/guides/`,
  `images.json`, `icons/`, `CHANGELOG.md`, and the course tables at the top of
  `cite_check.py`, `harvest_mask.py` and `explain_check.js`.
- Storage namespace `ns: 'phar4342final'` and every question id are unchanged
  (KIT_DESIGN §7.4). The old service worker's caches (`phar4342-drill-v<n>`) are deleted
  by the core's worker (`oldCachePrefix: 'phar4342-drill-'`). Scheduler:
  `{model:'concept'}`. The old file name `PHAR4342_Final_Drill.html` stays as a
  redirect (`output`).
- Images stay WebP: the core's `harvest.py` and `harvest_mask.py` still write JPEG, so
  run `python3 src/reencode_webp.py` after either adds crops
  (`python3 src/reencode_webp.py --check` exits 1 if any crop is not WebP).

## Build, check, publish

    cd src
    export NODE_PATH=$(npm root -g)
    python3 build.py              # the live build: index.html and the files beside it, at the root
    python3 build.py --preview    # preview/index.html and preview/version.json only
    ./run_checks.sh               # builds, then every check, one line each

Release (kit `skill/SKILL.md` Mode 7, decision 6): build the preview, run every check,
show Louis the differences, make it live only after he approves, then delete
`preview/`. Bump nothing by hand: `build.py` writes `version.json` and the worker. Add
`CHANGELOG.md` bullets in the same commit as the change. After a push to `main`,
confirm the deploy from the "pages build and deployment" run:
`gh api 'repos/lglouis3-create/Medicinal-chemistry/actions/runs?head_sha=<sha>'`.
Grep the tree for GitHub tokens before every commit:
`grep -rIEn --exclude-dir=.git 'gh[p]_[A-Za-z0-9]{20,}|github_[p]at_' .` (the brackets keep
this line from matching itself).

## Rules from Louis for this course

From `claude/drill-notes.md` §4 (2026-10-30; most from session memory, unverified) and
the files named:
- "Merge it automatically always" (the course repo merges its own pull requests;
  Claude's own added condition: stop and ask if a check fails or a change touches
  answer keys).
- No study meta-commentary, no metaphor, no appeals to the deck
  (`src/style_check.js`); atlas board titles keep his own framing (`src/README.md`).
- "I want this chat to only be medicinal access": a session on this course works on this
  course's material only.
- From the kit (§7.4, §7.9, §12): question ids and `ns` never change; personal names
  and personal mnemonics stay out of the shared build (no decision to keep one is
  recorded for this course); a session never changes a question's text, answer or
  explanation without a source, and lists differences for Louis instead.
- Source order when sources disagree: none recorded for this course (the kit lists it
  as open); state both sources.

## Known issues

- Settings footer says 551 questions (the core counts `TOPICS` entries); needs a kit
  core fix. `reviews/OPEN_QUESTIONS.md` Q3.2.
- Sideways scroll at 375 px on Guides, Tell apart and Reference, the same on the live
  page; `browser_test.js` fails on it. Q3.3.
- Three core checks fail on this course for kit reasons (see `reviews/LOG.md`
  2026-11-01): `offline_test.js` (its "another site's cache" list contains
  `phar4342-drill-v1`), `oldcache_test.js` (it assumes a course without
  `oldCachePrefix`) and `preview_test.js` (a timing race with the live worker on a page
  this size, and an order-dependent key comparison). `update_test.js` failed once in
  three full runs and passed 6 of 6 runs alone on 2026-11-01; cause not found.
- `cite_check.py` has not been run on the 92 questions of the 09/21 round.

## History

- `main`: GitHub uploads of 2026-09-20 (`966c82e` to `9103bc6`, the same tree as the
  09/21 line's `67fe35c`), then `4a32dad` (Pages root, WebP, manifest), `ed38dbd`
  (service worker, one blocked set across exam pools), notes (`03a314d`).
- `restore/2026-09-21-round` (baed236): the 09/21 round recovered from Louis's bundle,
  which never reached `main` (`2ebfade`), and the template port (`baed236`, now in the
  kit). Split from `main` at `697ae8b`.
- `kit/move-to-core`: the 09/21 content plus `main`'s later non-engine work, on the kit
  core. Not pushed.

## Restore after a container restart

- Clone the repository; nothing outside it is needed to build. Python 3 with Pillow
  (only for `reencode_webp.py`), Node with Playwright and Chromium for the checks
  (`NODE_PATH=$(npm root -g)`; never run `playwright install`).
- Decks for `cite_check.py` (not committed): Louis's Google Drive, "Intro Med Chem"
  folder `1z_Pxdi0A6WyPPeMq6x0VMQfx9yE0X5AY`, subfolder "Slides"
  `1nSKq3jnV4hDRbMK4MP42KjOCEVxOvu6H` (Exam 1-4 decks); "Exam Reviews"
  `1CFjN_Q7EZXPRgR_edtC5ZSOHz1urYRyl`; syllabus
  `11X96cwuKvkIB55yBBMqOw4N8fUQrRN2D`; transcripts in "Intro to Med Transcripts"
  `1qVlkZXfHxG_7lWr7OJczgynDE8QvwzMz` (ids read 2026-11-01). Put the decks under
  `src/decks/`, named as the citations spell them (`cite_check.py` tables); the check
  also needs `pdfplumber`.
