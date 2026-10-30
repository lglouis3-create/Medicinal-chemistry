# PHAR 4342 — Cumulative Final Drill

An offline quiz app for the PHAR 4342 Medicinal Chemistry cumulative final
(Exam 4). One HTML file, no server, no network: open it in a browser and it
runs, including from a phone.

**Published at <https://lglouis3-create.github.io/medicinal-chemistry/>** — the
site root is the drill itself. The old `PHAR4342_Final_Drill.html` link still
works; it redirects.

On a phone, use the browser's **Add to Home Screen**: the drill then opens
full-screen like an app, and the browser keeps it cached between sessions.

To use it offline, save `index.html` and open it from your files. Everything —
all 386 questions and all 189 slide images — is inside that one file.

## What is in it

**386 questions** across 13 topics, every one carrying a worked explanation for
each answer choice, a concept block, and a citation naming the deck file and the
slide it came from. 36 are select-all-that-apply items, marked all-or-nothing,
because the paper mixes single-answer and select-all questions.

| view | what it is for |
|---|---|
| Topics | pick a topic, take the exam-weighted pass, or one straight pass through all 386 |
| Quiz | spaced repetition — missed concepts return sooner, mastered ones are held |
| Weak spots | what to do next per pool, marks at risk by topic, and the wrong options you keep choosing |
| Exam sim | a 50-question paper drawn to the real blueprint, about 8 of them select-all, timed at 1:15 |
| Atlas | 86 functional group structures, with a Hide names recall mode |
| Reference | the course's tables and figures in one place |

The exam blueprint is 50 questions: Dr. Yendapally 8, Dr. Sikazwe 42 (38 from
lectures 13–15, 4 from the earlier material). The exam simulator draws to that
split, spreads its select-all items across the three pools in the same 38:8:4
ratio, and the weighting chips on the topics view filter the quiz to match it.
A question marked "I guessed that one" is reset and comes back before anything
never seen, and the answer log keeps which option was picked, so Weak spots can
show the wrong answer you keep choosing against the right one.

Structures are drawn, not described. A question that asks you to name a group
shows it; after answering, the compared groups appear side by side with the
answer marked, and each option carries its own structure beside the
explanation.

## Progress is stored per profile

Answers are kept in the browser's local storage under a profile name, so two
people on one machine keep separate histories, and the app still runs when
storage is denied — it falls back to memory for that session.

## Building it

The single file is assembled from the sources in `src/`:

    cd src
    python3 build.py

The build writes into the repository root, which is what GitHub Pages serves:
`index.html` (the app) and `PHAR4342_Final_Drill.html` (a redirect to it, so
links shared before the rename keep working). Push those and Pages redeploys
within a few minutes; progress survives because question ids do not change.

`build.py` syntax-checks every source before assembling and checks the
assembled script before replacing the output, so a stray comma stops the build
instead of shipping a file that loads to a blank screen.

The atlas questions are generated, not hand-written. After changing `atlas.js`
or the generator:

    python3 gen_atlas_q.py > q8_atlas.js && python3 build.py

## Checks

Build first — every check reads `index.html` from the repository root, resolved
relative to the script, so they run on a fresh clone.

    node test.js            # bank integrity, blueprint coverage, the scheduler
    node style_check.js     # the phrasing rules, and that every citation is located
    node render_test.js     # every view renders
    node explain_check.js   # explanation quality, ranked by exam weight
    python3 cite_check.py   # every cited slide number exists in its deck
    python3 coverage_check.py   # the bank against the stated exam scope
    python3 browser_test.py # drives the real file in Chromium, select-all items included

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

## Page weight

The drill carries its 189 slide crops inline, so the page is large by design —
that is what makes it work with no network. The images are WebP at quality 80,
which holds slide text and the professor's handwritten annotations while
costing about 30% fewer bytes than the JPEGs used before. The page is 6.5 MB on
disk and about 4.3 MB over the wire once GitHub Pages compresses it.

If you add images, keep them WebP: `harvest.py`, `harvest_mask.py` and
`mkimg.py` all emit it, and `build.py` simply inlines whatever `images.json`
holds.
