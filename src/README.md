# PHAR 4342 Final Drill — build sources

Single-file offline quiz app. `python3 build.py` assembles everything into
`PHAR4342_Final_Drill.html`.

## Files
- `build.py`       assembles shell + data + views into the single HTML file
- `shell.html`     CSS, markup, and the spaced-repetition engine
- `views.js`       all seven UI views (topics, quiz, weak spots, exam sim, atlas, reference, settings)
- `q1_cyp.js` … `q8_atlas.js`  the question bank, one file per topic group
- `atlas.js`      the functional group atlas: skeletal-structure renderer + board data
- `q6_variants.js` alternate wordings, used when a missed concept comes back
- `diagrams.js`    drawn SVG diagrams (DIA.*)
- `rings.json`     heterocyclic ring SVGs (RING.*)
- `images.json`    base64 figures cropped from the lecture slides
- `reference.js`   the reference tab content
- `gen_atlas_q.py` writes `q8_atlas.js` from `atlas.js` — regenerate, never hand-edit

### Figure harvesting
- `harvest.py`     crops figures out of a lecture PDF and encodes them for `images.json`
- `cyp_images_spec.json`  which slide of lecture 13 each CYP figure comes from
- `attach_cyp.py`  merges those figures into `images.json` and attaches them to questions
- `add_cyp_q.py`   adds the two lecture-13 questions and the cyp-e1 conflict note
- `yen_images_spec.json`  which slide of which Yendapally deck each figure comes from
- `harvest_yen.py` runs `harvest.py` across the five Yendapally decks in one pass
- `attach_yen.py`  merges those figures in and attaches them; adds `pc-9` and `pc-10`
- `yen2_images_spec.json` / `harvest_yen2.py` / `attach_yen2.py`  the same pass for the
  Distribution and Drug-discovery decks, which gave `admet` its first figures
- `yen3_images_spec.json` / `harvest_yen3.py` / `attach_yen3.py`  the functional-group
  and Stereochemistry decks: 34 figures across 35 questions, `attach_yen3.py`
  locating each id across all three question files rather than being told where it lives
- `mkimg.py`       the older cropper; superseded by `harvest.py` (see below)

## Explanation format
A question is in the full format when it carries per-option `why` text saying where
each wrong answer does belong, a `teach` concept block, a `quote` giving the
professor's exact wording, and a `cite` naming file and slide. `style_check.js`
scans only questions that have `teach`, so adding a concept block to a terse
question also brings its option text under the banned-phrasing rules for the
first time.

NOTE: `teachImg` renders inside the concept block (views.js), so a figure on a
question with no `teach` never displays. That affected 41 questions; rebuilding
lectures 14 and 15 fixed 36, and the last 5 — `p1-1`, `p2-3`, `p2-6`, `p2-8`,
`v-p2-1b` — were fixed when `browser_test.py` began asserting it. `p1-1` lost
its figure instead of gaining a concept block, because `tbl_ph2_a` is a Phase 2
cofactor table and that question asks about Phase 1 CYP oxidations.

Status: 277 questions, 166 images, **all 277 in the full format** — every one
carries a concept block and cites a slide. What remains is depth rather than
coverage: `explain_check.js` still reports 249 questions where at least one
wrong option does not name the misunderstanding that leads there, and 70 option
explanations under 110 characters.

## Checks
`build.py` now syntax-checks every JavaScript source with `node --check` before
assembling, and checks the assembled script again before replacing the output.
A stray comma or bracket therefore stops the build with the file and line named,
and the last good HTML is left untouched rather than overwritten with something
that loads to a blank screen.

`browser_test.py` opens the built file in Chromium, answers a question, reveals
the explanation, confirms every embedded image decodes, and visits all six views.
It catches faults the node checks cannot see, since those stub out the DOM.

It also answers every question that carries a `teachImg` and confirms the figure
appears in the answered view. An earlier version counted whatever images happened
to be on screen and passed at zero, which is how five questions kept figures that
never displayed. Question and image counts are read from the sources rather than
written into the file, so adding questions does not mean editing this test.

    python3 browser_test.py   # run after the three node checks

Run the build FIRST. All three `node` checks read the built file at
`/mnt/user-data/outputs/PHAR4342_Final_Drill.html`, so on a fresh checkout they
fail with ENOENT until `build.py` has written it.

    python3 build.py      # writes the single HTML file
    node test.js          # question integrity + 8 engine rules incl. the no-loop rule
    node style_check.js   # banned phrasing, stem wording, citation coverage
    node render_test.js   # smoke-test every view renders

## Source decks
`harvest.py` reads a lecture PDF directly, so the per-lecture `deck_<name>/`
image folders are no longer needed:

    python3 harvest.py MCMet-9.15.2026.pdf work/                         # survey
    python3 harvest.py MCMet-9.15.2026.pdf work/ spec.json out.json      # encode

The survey lists which pages carry a figure and which are text only. `mkimg.py`
cut a fixed 196 px off the top of each slide before trimming, which clipped
tables and wide reaction schemes whenever the title ran to two lines.
`harvest.py` instead removes the title and bullet text by character height
(pdfplumber reports it per character: in these decks titles run 36–80 pt,
bullets 20–32 pt, and table cells and figure labels 8–18 pt) and takes the
bounding box of whatever ink is left. That works whether the figure sits below
the bullets, beside them, or fills the slide as a table, and no crop is a fixed
fraction of the page.

Two details the decks force:
- The footer band is taken from each page's own footer where the text can be
  read, falling back to the deck-wide median. Some slides draw the footer as
  graphics rather than text, and the median keeps one high outlier from
  clipping real content elsewhere (slide 32's last two entries sit below the
  minimum footer position found in the deck).
- `mode: "below_title"` in the spec takes everything under the title instead of
  masking body text, for slides whose content *is* body text — slide 32's
  inducer and inhibitor lists, for instance.

IMPORTANT: where two exports of the same lecture exist, check which one carries
the chemical structures before harvesting; the other export drops the structure
layer on many slides. Lecture 13 (9.15) has a single export. Lectures 9.16 and
9.17 each have two.

### The Yendapally decks are annotated exports
The five decks under `yen/` carry handwriting, highlighting and margin notes on
top of the printed slide — they are marked-up copies, not the clean originals.
Two consequences:

- The detector returns close to the whole content area rather than a tight figure
  box, because the ink spans the slide. That is the right result here, since the
  annotation is part of what the crop shows, but it means the crops are wider
  than the lecture-13 ones. `harvest_yen.py` therefore raises `MAX_W` to 980 and
  quality to 70 so structures and table cells stay readable; the lecture-13
  figures keep the 820/66 the earlier harvest was run at.
- pdfplumber reads the handwriting as text at 4–13 pt, well under `BODY_PT`, so
  it is never mistaken for a bullet. The type sizes themselves match the Sikazwe
  template — titles 36–44 pt, bullets 22–28 pt, figure labels 18–20 pt — so
  `BODY_PT = 19.0` needed no change, measured across all four decks. The
  Distribution, Absorption II, Drug-discovery and two metabolism decks added later
  are annotated the same way and behave the same.

One caveat the threshold does create: text at 20.2 pt is classified as body and
masked, which is right for figure labels but wrong for a slide whose content is a
20.2 pt table (the π-fragment table on Prop 3 slide 15). Those slides use
`mode: "below_title"`, which is why most of the table and bullet-list keys carry it.

Still without slide figures: `dmfound` (14, lecture 10) and the nine `admet`
questions citing ADMET Absorption I. Both decks are on hand under `yen/`; the
questions have not been matched to slides yet.

## Explanation quality (added 09/20)

`explain_check.js` scores every question on four measures read off the text:

    node explain_check.js            # worst 30, ranked by severity x exam weight
    LIMIT=80 node explain_check.js   # more
    node explain_check.js tox        # one topic or pool

- **narration** — a sentence about the question or about learning it, where a
  sentence about the chemistry belongs.
- **thin** — an option whose `why` is under 110 characters, too short to say
  more than that the option is wrong.
- **undiagnosed** — a wrong option whose `why` says what is true instead but
  never names the misunderstanding that leads someone to pick it.
- **no gloss available** — a weighty term used in the bank that views.js's
  `GLOSS` table does not carry, so it reaches the page undefined.

`dd-4` is the worked example of the standard: read it before rewriting others.

### Term glosses
`views.js` carries a `GLOSS` table, and `glossify()` adds each term's short
definition once per question at its first appearance, across the option
explanations and the concept block together. A question that already defines a
term in its own prose is left alone, which is what each entry's `skip` pattern
detects, so a hand-written gloss is never doubled. Adding a term means adding
one row to that table rather than editing any question.


## Concept blocks can be sectioned

`teach` is either a plain string or a list of `{h, t}` sections:

    teach:[{h:'The mechanism', t:'...'},
           {h:'Classical against non-classical', t:'...'}]

`renderTeach()` in views.js handles both, so no existing question had to change.
Use sections when a concept block covers genuinely separate things — the
mechanism, the category it belongs to, what it connects to — so the reader can
scan the headings and pick. `dd-4` is the worked example. Option explanations
stay as prose; they answer one question each and headings would only add noise.

`style_check.js` and `explain_check.js` both flatten a sectioned block before
scanning, so the phrasing rules apply either way.

## The reference tab

`reference.js` is plain HTML, expanded by `renderRef()` in views.js, which adds
two things at render time:

- a jump list built from the `<h3>` headings actually present, so adding a
  section adds its link automatically;
- `{{fig:key|caption}}` tokens expanded against `IMAGES`, so a figure is stored
  once and the reference text stays readable. A token naming a key that is not
  in the bank is dropped rather than left as a broken image.

Headings and captions are authored as HTML, so `deEnt()` decodes entities before
the text is re-escaped for a link label or a caption. Without it a chip reads
"Percent ionization &mdash; the form used in this course" literally.
`browser_test.py` asserts that no raw entity reaches the reader.

A note on `render_test.js`: its NaN and "undefined" checks now strip base64 data
URLs first. With 166 embedded images the payload contains every short letter
sequence by chance, so the checks were firing on image data rather than on
anything the app produced.


## Two checks added 09/20 (second pass)

`cite_check.py` reads the page count of every deck under `yen/` and confirms
that each slide number cited anywhere in the bank — in `cite`, `teach`, `note`
or an option's `why` — exists in the deck it names. A citation drifts silently,
because the sentence stays plausible and only the number is wrong, so reading
does not catch it. It also lists decks named in citations that are not on hand,
which is the honest way to report what could not be checked.

    python3 cite_check.py

`explain_check.js` gained a **vague reference** measure. "Two errors cancel into
a third" and "carboxylate and tetrazole meet that description exactly" both make
the reader look backwards and guess the referent, and a wrong guess is invisible.
The fix is always to restate the referent where it is used, never to delete the
sentence.

## Storage can be denied, and the app now survives it

`shell.html` read `localStorage` at the top level of the script. Opening this
file from disk can give the page an opaque origin, and a private window or
blocked site data does the same; in those cases the read throws a SecurityError
while the script is still evaluating, which killed the whole app and left a
blank page. All storage now goes through an `LS` shim that probes once and falls
back to an in-memory object, so the drill runs for the session and only the
saving of progress is lost. The header shows "(progress not saved)" when that
happens. `browser_test.py` loads the page with `localStorage` rigged to throw
and asserts the drill still answers a question.

`browser_test.py` also now answers **every question in the bank** through the
real renderer and checks each one produces its full option list, an explanation
panel, one explanation row per option, and a citation. A fault in a single
question's data only shows up when that question is the one on screen.


## Every question now has a concept block

The 41 that had none — dmfound 13, paths 23, fgs 4, plus 2 variants and
`v-df-3b` — were written from their cited slides in `add_teach.py`. Every one of
the questions now carries `teach`, and every one cites a slide.

Adding a concept block brings that question's option text under `style_check.js`
for the first time, which surfaced three pre-existing phrases ("quenched",
"quench", "is the point"). Expect that on any future batch.

## The full sweep

The topics view now opens with **All 322 questions, one pass**: shuffled, each
asked once, no scheduling gate. The adaptive runner is the better way to study
because it brings missed concepts back sooner and holds mastered ones, but it
deliberately stops when nothing is due — and when the whole course is
examinable, seeing all of it once is its own requirement.

`startSweep(scope)` builds a fixed shuffled queue of question ids and
`nextQuestion()` walks it instead of asking the scheduler. Answers still record,
so Weak spots stays accurate. `browser_test.py` walks the whole queue and
asserts it serves every question exactly once and ends on its own panel.


## The functional group atlas (added 09/20)

Louis's Functional Group Atlas artifact
(`claude.ai/artifact/Qx3Zq6gMVACWS17UBnJiTi`) is now part of the drill in two
places.

**As a tab.** `atlas.js` carries the artifact's skeletal-structure renderer and
its eleven boards across unchanged; only the artifact's page-building code was
left behind, because the drill supplies its own views. `renderAtlas()` lays the
boards out with a search box, a **Hide names** toggle and per-tile reveal, so the
same page serves as a reference to read and as a recall drill to test against.
84 groups render across 86 tiles — two groups appear on two boards each — with
no render failures.

**As questions.** `gen_atlas_q.py` writes 45 "name the functional group shown
below" questions into `q8_atlas.js`. The generator takes the structure, the
distinguishing feature and the drug examples from the atlas, and takes the three
wrong options from the same atlas section, so every distractor is a group that
is actually confused with the answer rather than an unrelated one. Two pieces
are hand-written in the generator rather than derived: the concept block for
each of the 19 sections, and `PAIRS`, which holds the confusions sharp enough to
deserve a diagnosis of their own (imidazole against pyrazole, nitro against
nitrile, azetidine against β-lactam, and 40 more).

Every slide number in those citations was read off `MCFGs8_1718_26.pdf` page by
page and is cited by the slide's own title, so `cite_check.py` can verify it.
Nothing is cited to a slide that was not checked.

### Two faults found while wiring it in

`render(m, label)` puts the group's name into the SVG's `aria-label`. That is
right for the atlas, where a screen reader should say what the structure is, and
wrong for a question that asks the reader to name it — the answer would sit in
the accessibility tree and in the page source. `atlas.js` now builds two maps:
`FG` with the name, used by the atlas tab, and `FGQ` with
`aria-label="Chemical structure to identify"`, used by the three question render
sites. `browser_test.py` asserts no drawing names the group it is asking about.

`browser_test.py` compared the page's question count against a hard-coded list
of source files, so `q8_atlas.js` would have gone uncounted and the check would
have failed against a stale number. The list is now a glob.

### Regenerating

    python3 gen_atlas_q.py > q8_atlas.js && python3 build.py

`random.seed(4342)` fixes the shuffle, so a rebuild without source changes
produces an identical file. Editing `q8_atlas.js` by hand loses the change on
the next regeneration; edit `gen_atlas_q.py` or `atlas.js` instead.

### Structures are scaled before they go on a question

Atlas tiles are drawn small enough to fit dozens on a screen — natural sizes run
from 59 px across (aziridine) to 166 px (dibenzazepine). A question shows one
structure and the reader has to count atoms in it, so `fgShow()` scales each to
a common 240 px on its larger dimension, with the multiplier capped so a wide
tricyclic does not overrun the card.

### What the atlas text lost

Five atlas tells pointed at the atlas layout or at the lecturer rather than at
the chemistry ("compare it against the azetidine beside it", "he told you to pay
attention to that", "one drug you already know"). Inside a question those become
the vague references Louis rejected, because the thing being pointed at is not
on the screen. They were rewritten in `atlas.js`, so the atlas tab and the
questions both carry the chemistry instead. The board titles and intros keep
Louis's own framing, since they are navigation rather than explanation.

## Side-by-side structures in explanations (added 09/20)

Describing a difference in words and drawing it are not the same thing. Two
rings that differ by one atom read as near-identical sentences and as obviously
different pictures, so wherever an explanation compares named groups the
structures are now drawn next to each other.

Three places show a structure:

- `fgShow(key)` — the question's own structure, above the options, scaled to
  240 px on its larger dimension.
- `optFig(name)` — a small structure beside each option's explanation, so the
  reader is not asked to hold four shapes in mind while reading about them.
- `cmpStrip(q)` — a labelled row of all the compared structures inside the
  concept block, correct answer first and marked.

`cmpNames(q)` decides what is compared: an explicit `cmp: ['Quinoline', …]`
field wins, and otherwise a question whose every option names an atlas group
compares its own options. A group discussed but not drawn in the atlas is left
out rather than faked, which is why a question mentioning quinolone shows
quinoline and does not invent a quinolone drawing.

`fgTell(key)` puts the group's distinguishing feature under each drawing, cut
to its first clause. `ATLAS.item(key)` was added to atlas.js to serve it, and
`deEnt` gained the entities the atlas uses (`&beta;`, `&equiv;`, curly quotes)
plus numeric entity decoding.

## Coverage against the exam scope (added 09/20)

`coverage_check.py` maps the bank against the two documents that actually
define this exam, read from the Claude project:

- `Final-Review.pdf` — the 50-question split, and ten named Yendapally topics
- `Ex4-Prep-Work 1.pdf` — six Sikazwe review areas and ten practice questions

Each scope entry carries the phrases that would have to appear somewhere in
its questions for the ask to be covered, so a topic with questions that never
touch what the practice question wants is reported as THIN rather than passing
on count alone.

**What it found.** Three Yendapally topics the blueprint names had one or two
questions each: drug discovery sources and uses, structure–activity
relationship, and Absorption II drug–drug interactions. The Absorption II deck
in particular was almost untouched — no chelation, no adsorption, no motility,
no prodrug purposes. `q9_gaps.js` holds the 15 questions written to close
those, and all ten Yendapally topics now carry at least four.

Two flags were the checker's fault rather than the bank's, and the patterns
were corrected after reading the questions: Vd "factors" matched on the word
tissue, and the SAR bucket wanted vocabulary the one existing question used
differently.

**The imbalance the checker also shows.** Sikazwe old holds 129 questions and
supplies 4 of the 50; Sikazwe new holds 137 and supplies 38. The functional
group topic is 81 questions inside that low-weight pool. That is deliberate —
the atlas work and the Ex4 prep sheet both point at functional groups — but
per exam question it is the least efficient material in the bank, and the
weighting chips at the top of the topics view are how to avoid it.

### Citations by slide title

The 15 gap questions cite the slide by its own title in quotes rather than by
number. Those three decks are project files, and a project file comes back as
extracted text with no page boundaries, so a slide number taken from one would
not be something that had actually been checked. `style_check.js` now counts a
quoted title as a located citation alongside a number, and reports the two
separately.

## Adversarial review, and what it found (09/20)

Two subagents re-checked the new material against the decks with instructions
to find errors rather than confirm the work. Both found real ones.

**In the 15 gap questions.** No wrong answer keys. Two wrong facts: the sources
slide lists four sub-bullets under natural products, not three, and all five of
the prodrug examples are esters rather than four — the real split is that four
are cleaved by esterases and fosphenytoin by phosphatases. Several claims were
true pharmacology the decks do not state (esterases releasing haloperidol from
its depot, the dissolution-rate account of why motility effects are "variable",
erythropoietin's use in kidney disease, which came from a handwritten
annotation rather than the printed slide). Those were cut or attributed. Three
cited slide titles were transcribed imprecisely and now match the decks.

**In the 45 atlas questions.** All 45 structures were re-derived from their
`m()` functions and every one draws the group its name claims — imidazole
versus pyrazole, pyrimidine versus pyrazine, purine's two nitrogen rings,
quinoline's nitrogen beside the fusion carbon, the β-lactam carbonyl inside the
four-ring. Four chemistry problems in the text:

- Tertiary alcohols were said to resist oxidation because of steric crowding.
  The actual reason is that the carbon holding the OH carries three carbons and
  no hydrogen left to remove, and "why can't a tertiary alcohol be oxidised" is
  an examinable question with that answer.
- Proguanil was listed as a guanidine example. It is a biguanide, which the
  atlas gives its own entry.
- Furosemide's acidity was attributed to its sulfonamide. Furosemide is a
  sulfonamide, but the group that makes it acidic at body pH is its carboxylic
  acid.
- "One nitrogen in a fused 6/6 makes it a quinoline" ignores isoquinoline. The
  position of the nitrogen relative to the fusion carbon is what decides it.

Also corrected: a sulfonamide was described as "a sulfone with a nitrogen on
one side", where a sulfone strictly needs carbon on both sides of the SO2; and
two sections handed the reader a discriminating rule that did not apply to
every member (the nitro/nitrile oxygen count does not separate azo, and "no P
means neither" is useless when P is present).

### One conflict was flagged rather than resolved

Slide 24 of the functional group deck runs an arrow along ethanol, 2-propanol
and t-butanol, annotated more water soluble at the primary end and more oily at
the tertiary end. For those three compounds the gradient does not exist —
all three are miscible with water — and comparing the four-carbon isomers runs
the other way, 1-butanol at about 73 g/L against t-butanol miscible, because
branching gives a more compact molecule.

The course order is what the exam will follow, so it stays as the answer. The
three alcohol questions carry a `note` stating the conflict and the measured
values, so the course answer and the real chemistry are both on the page. A
section in `gen_atlas_q.py` can now carry `note` for exactly this case.

## What the checks do and do not cover

`node test.js` · `node style_check.js` · `node render_test.js` ·
`node explain_check.js` · `python3 cite_check.py` · `python3 coverage_check.py`
· `python3 browser_test.py` — build first, the node checks read the built page.

Passing all of them does not mean the bank is error-free. They verify that it
parses, renders, runs in a browser, cites a located slide, avoids the rejected
phrasings, and covers the stated scope. They do not verify chemistry — that
took the two adversarial reviews above, and those found errors the automated
checks had passed clean.

`explain_check.js` reports 286 questions where at least one wrong option
describes what is true without naming the misunderstanding that leads someone
to it, and 70 option explanations under 110 characters. Those are completeness
measures against a standard, not defects: the explanations are correct, and
some of them stop at correct. The detector also over-reports, since it looks
for diagnostic phrasing and misses a diagnosis written some other way — its
vocabulary was widened once after reading the flagged text rather than assuming
the detector was right.

## Review round (09/20, Fable)

An independent review of the whole app, then the fixes. What changed:

- **Select-all items.** `q10_sata.js` and `q11_sata2.js` hold 29 questions with
  `multi:true` and two or more keyed options. The quiz renders them with
  toggles and a Check button, grades all-or-nothing through `gradeMulti()`, and
  the exam simulator draws `EXAM_SATA` (8) of them per paper, spread across the
  three pools in the 38:8:4 ratio (`drawMixed()` in views.js). `test.js` checks
  the shape of 20 fresh draws; `browser_test.py` drives a select-all item
  through toggles, partial and complete sets, the answer log and the exam.
- **Scheduler.** A guess now resets the concept's box to 0 (tier 4, ahead of
  never-seen material) instead of dropping it below new material. `record()`
  stores `picked` and `ms` on every log entry; `markGuessed()` rewrites the last
  entry. Weak spots reads them for the "What you keep choosing instead" table.
- **Rings.** The nine "name the ring" questions drew from `rings.json` in a
  field the pre-answer render never read, so the card was blank; they now draw
  from the atlas (`fg:`), and `rings.py` was corrected (double bonds on edges
  1–2 and 3–4 of a five-membered ring, never on the heteroatom edge). All 23
  atlas ring structures were re-derived and checked. `browser_test.py` now
  requires a visible figure before the answer on every stem that promises one.
- **Facts.** cyp-p1 keys the intermediate metaboliser as the normal phenotype,
  as the 09/15 and 09/16 lectures did, with the textbook conflict stated in a
  note; cyp-i7's slide 34 claim was corrected (omeprazole heads the CYP2C19
  column); tx-1, tx-3, v-tx-3b count five toxicophore bullets; tx-22, tx-10,
  dd-14, df-11, v-el-3b, p2-6, fg-4, fg-11, fg-16, p1-14 corrected as recorded
  in the review notes. Alcohol section of the atlas restored to the lecture's
  shielding explanation.
- **Duplicates and giveaways.** tx-6 now asks the adduct mechanism on slide 33
  instead of repeating tx-15's defense pair; sar-3 asks the antagonist-size
  observation instead of repeating sar-1; fg-17 keys the sulfotransferase row
  instead of the acyl-synthetase row that fg-14 and v-fg-14b already key. The
  tx-13 and tx-25 stems no longer contain their answers. Four question crops
  that printed their own answer (p1-2, p1-8, p1-12, p2-6) were re-cut with the
  labels masked by `harvest_mask.py`, which OCRs the crop, whites out the label
  words, and keeps the printed version under `<key>_labeled` for the concept
  block.
- **Citations.** Every citation names the deck file as well as the slide
  (`Lecture #13 (MCMet-9_15_2026.pdf) slide 32`), 100 were completed in one
  pass, and 18 gained the slide a claim was actually drawn from. Material that
  came from lecture audio is marked "from lecture audio"; a question drawing on
  both is marked "slides and lecture audio", in the quiz and in the exam review.
- **Unsupported claims trimmed**: p2-7 (concept block now about N-oxidation),
  ad-8 (the four factors written on Absorption I slide 4 in the 09/03 lecture),
  ad-6 (no saturation claim), fa-11, p1-11, ab2-1, ab2-2, ab2-5, ab2-6,
  v-st-3b, el-1, p2-14.
- **Figures.** Ten list slides cropped for the select-all concept blocks
  (`harvest_fable2.py`), two for the triazolam case (`harvest_fable.py`), and
  eight previously unused crops became questions of their own in
  `q12_figures.js` (tertiary alcohol fate, benzene arene oxide, phosphate and
  sulfate ester hydrolysis, NQO1, abacavir aldehyde, sulfamethoxazole hapten,
  MPTP). Three crops nothing referenced were dropped. `LETTERS` runs A–J so an
  eight-option item labels every row.

Status: 375 questions, 181 images, all in the full format. `test.js`,
`style_check.js`, `render_test.js`, `cite_check.py` (860 slide references),
`coverage_check.py` and `browser_test.py` all pass.

## Quizlet round (09/20)

Louis's three Quizlet sets (09.15, 09.16 and 09.17 lectures) were checked card
by card against the bank. Nearly every card was already covered; the gaps
became `q13_quizlet.js`: endobiotic CYP substrates (L13 s5), the CYP2D6
profile (s26) and the poor/ultrarapid population consequences (s40), the
lactone ring-opening (L14 s16), the three first-pass examples (s36), the
cyclosporin inducer case (s55), the induction consequences (s53), the DDI
outcome table (s65), the second inhibitor column (s60), the felodipine and
grapefruit-juice plot as a case with the plot as the question image (s66), and
the free-radical versus non-radical species (L15 s41). `harvest_quizlet.py`
cropped the slides for the concept blocks. tx-26 names the two amines Solvent
Red 1 gives; tx-23 gains the methyldiazonium step.

Two things the cards got wrong, for Louis's own set: card 6 of the 09.15 set
gives the CYP subfamily homology as more than 55%, where slide 19 prints more
than 50% (card 29 of the same set has it right); and the 09.17 set repeats
slide 23's label of cimetidine as a PPI, which it is not (it is an H2-receptor
antagonist), so that label is the slide's error.

Lecture 14 was re-uploaded with its structure layer intact and is installed as
`MCMet-9.16.2026.pdf` (the old copy is `.nofigs.pdf.bak`); the cache under
`work_MCMet-9_16_2026/` was rebuilt from it. Reading the Lecture 13 slide 34
tables closely: the right-hand table continues the CYP2C19 and CYP2C9 columns
(omeprazole heads 2C19; itraconazole, quinidine, paroxetine and ritonavir are in
the 2C9 continuation), so quinidine's second listing is 2C9, not 2D6.

Status: 386 questions, 188 images, 36 select-all. All seven checks pass.
