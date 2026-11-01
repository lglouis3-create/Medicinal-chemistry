# PHAR 4342 — Cumulative Final Drill

An offline quiz app for the PHAR 4342 Medicinal Chemistry cumulative final
(Exam 4). One HTML file, no server, no network: open it in a browser and it
runs, including from a phone.

**Published at <https://lglouis3-create.github.io/Medicinal-chemistry/>** — the
site root is the drill itself. The old `PHAR4342_Final_Drill.html` link still
works; it redirects.

**It works offline.** After one visit to the site, the drill opens with no
connection. On a phone, use the browser's **Add to Home Screen** and it opens
full-screen like an app; on iPhone and iPad the drill shows the steps to carry
your progress into the Home Screen copy.

It never holds you on an old copy. Each time you open it with a connection, it
loads the current version. If the connection is slow, it shows the saved copy
straight away and offers a **Reload** if a newer version then arrives; a page
left open also offers it when a newer version is published. It never reloads by
itself, so an exam paper in progress is never cut off.

## What is in it

**479 questions** across 13 topics, every one carrying a worked explanation for
each answer choice, a concept block, a citation naming the deck file and the
slide it came from, and the skill it tests (recall, tell apart, apply, read a
structure or scheme, calculate). 48 are select-all-that-apply items, marked
all-or-nothing; 89 are tell-apart items written from the Tell apart tables; 2
are typed calculations with worked steps and 1 is a matching table.

| view | what it is for |
|---|---|
| Topics | pick a topic, take the exam-weighted pass, or one straight pass through all 479; what is new since your last visit |
| Quiz | spaced repetition with "Not sure", "I guessed that one" and "I was sure of that"; cram, weekly or semester pace |
| Weak spots | this session, what to review next, what to do next per pool, the kind of question failing, marks at risk, the wrong options you keep choosing |
| Exam sim | a 50-question paper drawn to the real blueprint, 8 of them select-all, timed at 1:15; it survives a reload and can be submitted in part |
| Atlas | 86 functional group structures, with a Hide names recall mode |
| Guides | one guide per objective of lectures 13–15, in bullets |
| Tell apart | the confusable pairs of lectures 13–15: what separates them and where the slide says so |
| Reference | the course's tables and figures in one place |
| Settings | profile, pace, progress export and import (with the answer history), exports of the bank and the reading tabs, the change log |

The exam blueprint is 50 questions: Dr. Yendapally 8, Dr. Sikazwe 42 (38 from
lectures 13–15, 4 from the earlier material). The exam simulator draws to that
split, spreads its select-all items across the three pools, and keeps two
wordings of one fact off the same paper, across pools too.

Structures are drawn, not described. A question that asks you to name a group
shows it; after answering, the compared groups appear side by side with the
answer marked, and each option carries its own structure beside the
explanation.

## Progress is stored per profile

Answers are kept in the browser's local storage under a profile name, so two
people on one machine keep separate histories. If the browser refuses to save,
the drill keeps your answers for the visit and says so once, pointing to
Settings → Export progress. Progress saved by the earlier version of this drill
(before 2026-11-01) is read as it is: the storage name and the question ids did
not change.

## Building it

The engine is the shared exam-drill-kit core (`lglouis3-create/exam-drill-kit`,
`core/`), copied into `src/` at the kit commit named in `src/course.js`
`kit.core`; the course's own content is `src/course.js` and the content files
listed in `src/README.md`.

    cd src
    python3 build.py              # index.html, the redirect, sw.js, manifest and icons at the root
    python3 build.py --preview    # preview/ only: the next version, tried at <site>/preview/

`build.py` syntax-checks every source before assembling and checks the
assembled script before replacing the output, so a stray comma stops the build
instead of shipping a file that loads to a blank screen.

The atlas questions are generated, not hand-written. After changing `atlas.js`
or the generator:

    python3 gen_atlas_q.py > q8_atlas.js && python3 build.py

## Checks

    cd src
    export NODE_PATH=$(npm root -g)
    ./run_checks.sh               # build, then every check, one line each

Each line is PASS, FAIL, NOT RUN (with the reason, never a pass) or REPORT.
`cite_check.py` needs the lecture deck PDFs, which are course material and are
not kept in this repository; they are in the course's Google Drive folder
(Intro Med Chem › Slides). Put them under `src/decks/`, named the way the
citations spell them. `python3 coverage_check.py` maps the bank against the two
documents that define the exam.

Passing all of them does not mean the content is right. They check that it
parses, renders, runs, cites a real slide and covers the stated scope. The
chemistry was checked separately, by review. `src/README.md` records what that
review found and what was changed.

## Sources

Built from the course's own material: the lecture decks, the lecture
transcripts, the poll questions, the practice problem answer key, the
functional group deck, and the two documents defining this exam —
`Final-Review.pdf` and `Ex4-Prep-Work`. Every question cites the slide it came
from, by number where the deck was paged through and by the slide's own title
where only extracted text was available. Material taken from lecture audio
rather than a slide is marked as such, because auto-captions garble drug names
and numbers.

## Offline: how the service worker behaves

`sw.js` sits beside `index.html`. It fetches the page network-first and keeps a
saved copy, falling back to it when the network is down or slower than 3.5
seconds. Its caches are named `phar4342final-v<n>`; this GitHub Pages address
also serves other sites and they share one cache store, so it only ever deletes
caches of exactly that form, plus the earlier version's `phar4342-drill-*`
caches.

## Page weight

The drill carries its 189 slide crops inline, so the page is large by design —
that is what makes it work with no network. The images are WebP at quality 80.
The page is 7.2 MB on disk. If you add images with `harvest.py` or
`harvest_mask.py` (which write JPEG), run `python3 src/reencode_webp.py`
afterwards so they are stored as WebP like the rest.
