# PHAR 4342 Medicinal Chemistry drill: state for Claude

**State as of 2026-11-01: live on the exam-drill-kit core.** Louis approved the preview
and the switch on 2026-11-01; `kit/move-to-core` was merged into `main` and the preview
folder removed. Course name (Louis, 2026-11-01): "Intro to Medicinal Chemistry (P2 Fall
2026)".

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

| | before the move (`main` 03a314d) | live since 2026-11-01 |
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
  `README.md`, plus `core/vendor/`, copied into `src/` from kit `main` at `ff7bd51` (the
  merge of kit pull request #4; `course.js` `kit:{core:'ff7bd51'}`). Only Mode 7 of the
  kit's skill, or the nightly kit-update run under `KIT_DESIGN.md` §12.9, changes the
  pin.
- The question files are listed in `course.js` `files`, and this course's tables for
  `cite_check.py`, `explain_check.js` and `harvest_mask.py` are in `course.js` `tools`
  (moved unchanged from the tops of those files on 2026-11-01), so a core update can
  copy every core file without losing either.
- Course content: `src/course.js`, `src/q*.js`, `atlas.js`, `diagrams.js`,
  `glossary.js` (the GLOSS table, moved out of the old `views.js` unchanged),
  `links.js` (empty), `reference.js`, `tell.js`, `guide.js` with `src/guides/`,
  `images.json`, `icons/`, `CHANGELOG.md`; the course tables for three core tools are
  in `course.js` `tools`.
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

- `run_checks.sh` on 2026-11-01 with the 2c648fa core: 20 PASS, 0 FAIL, 2 NOT RUN
  (`stepper_test.js`: no step-through figures; `cite_check.py`: decks not in the tree),
  1 REPORT (`explain_check.js`). The footer count, the phone overflow and the test
  faults listed earlier are fixed in the kit core.
- The slide check of 2026-11-01 (`reviews/move-to-core/cite_check_2026-11-01.md`):
  citations fixed with Louis's approval; `ta-58` and `ta-86` wait in
  `reviews/OPEN_QUESTIONS.md` Q5 and Q6 (claims no slide prints); claims marked as
  from the lecture audio were not checked against transcripts.
- `cite_check.py` confirms only that a cited slide exists, and reads a slide number
  only when a deck is named before it in the same field; the wider check is in the
  report above.

## History

- `main`: GitHub uploads of 2026-09-20 (`966c82e` to `9103bc6`, the same tree as the
  09/21 line's `67fe35c`), then `4a32dad` (Pages root, WebP, manifest), `ed38dbd`
  (service worker, one blocked set across exam pools), notes (`03a314d`).
- `restore/2026-09-21-round` (baed236): the 09/21 round recovered from Louis's bundle,
  which never reached `main` (`2ebfade`), and the template port (`baed236`, now in the
  kit). Split from `main` at `697ae8b`.
- `kit/move-to-core`: the 09/21 content plus `main`'s later non-engine work, on the kit
  core; merged into `main` on 2026-11-01 when Louis approved the switch.

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
  `src/decks/`, named as the citations spell them (`course.js` `tools`); the check
  also needs `pdfplumber`.
