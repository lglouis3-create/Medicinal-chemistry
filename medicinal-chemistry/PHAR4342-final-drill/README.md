# PHAR 4342 — Cumulative Final Drill

An offline quiz app for the PHAR 4342 Medicinal Chemistry cumulative final
(Exam 4). One HTML file, no server, no network: open it in a browser and it
runs, including from a phone.

Open **`PHAR4342_Final_Drill.html`**.

## What is in it

**479 questions** across 13 topics, every one carrying a worked explanation for
each answer choice, a concept block, a citation naming the deck file and the
slide it came from, and a skill tag (recall, tell apart, apply, read a figure,
calculate). 48 are select-all-that-apply items, marked all-or-nothing, because
the paper mixes single-answer and select-all questions; 89 are tell-apart items
written from the Tell apart tables; 2 are typed numeric answers with worked
steps and 1 is a matching table.

| view | what it is for |
|---|---|
| Topics | pick a topic, take the exam-weighted pass, or one straight pass through all 479 |
| Quiz | spaced repetition with "I guessed" and "not sure" buttons — missed concepts return sooner, mastered ones are held; cram, weekly or semester pace |
| Weak spots | what to do next per pool, marks at risk by topic, weakest skill, right-but-slow items, calculation misses by kind, and the wrong options you keep choosing |
| Exam sim | a 50-question paper drawn to the real blueprint, 8 of them select-all, timed at 1:15; the paper survives a reload and can be submitted in part |
| Atlas | 86 functional group structures, with a Hide names recall mode |
| Guides | one guide per objective of lectures 13–15, in bullets, verified against the slides and transcripts |
| Tell apart | the confusable pairs of lectures 13–15: what separates them and where the slide says so |
| Reference | the course's tables and figures in one place |
| Settings | profile, pace, progress export/import, and exports of the bank (Markdown, JSON) and of each reading tab |

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

The single file is assembled from the sources in `src/`. `course.js` is the
course manifest (title, lectures with their exam and module, the exam
blueprint, the skill taxonomy, the pace); everything else in the engine reads
it. `exam-drill-template/` at the repo root is the same engine with empty content, for the
next course.

    cd src
    python3 build.py

`build.py` syntax-checks every source before assembling and checks the
assembled script before replacing the output, so a stray comma stops the build
instead of shipping a file that loads to a blank screen.

The atlas questions are generated, not hand-written. After changing `atlas.js`
or the generator:

    python3 gen_atlas_q.py > q8_atlas.js && python3 build.py

## Checks

Build first — the node checks read the built page.

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
`Final-Review.pdf` and `Ex4-Prep-Work`. A new lecture is brought in with
`src/ingest.py`, which turns a deck and its transcript into the slide dump,
the picture-slide list, the harvest skeleton, the transcript cues and a
question skeleton with the citations filled in. Every question cites the slide it came
from, by number where the deck was paged through and by the slide's own title
where only extracted text was available. Material taken from lecture audio
rather than a slide is marked as such, because auto-captions garble drug names
and numbers.
