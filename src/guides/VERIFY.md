# Adversarial verification of the objective guides

The fragments obj1.html … obj8.html in this folder are study guides a pharmacy
student will read tomorrow morning before a cumulative final. Your job is to
find errors in them. Do not confirm; disprove. An error that would cost a mark
matters more than one that would not.

## Sources (the only ones that count)

- `L13_slides.txt`, `L14_slides.txt`, `L15_slides.txt`: printed slide text,
  delimited `===== L14 SLIDE 29 =====`. Garbled or note-like lines are the
  student's handwriting over the slide, not the lecturer's text.
- For picture slides, render the page and look at it:
  `pdftoppm -f N -l N -r 110 -png -singlefile /home/claude/drill/PHAR4342-drill-src/DECK.pdf /tmp/pgN`
  then Read /tmp/pgN.png. Decks: MCMet-9.15.2026.pdf (L13), MCMet-9.16.2026.pdf
  (L14), MCMet-9.17.2026.pdf (L15). Page N = slide N.
- Transcripts in the Claude Project (Projects tool, project_read):
  "Intro to Med Chem - 09_15 Lecture.txt", "Intro to Med Chem - 09_16 - Lecture .txt",
  "Intro to Med Chem - 09_17.txt". A statement marked (T) must be in the
  transcript with that meaning; quoted strings marked (T) must be verbatim.

## What to check, in every sentence

1. Every number (percentage, half-life, dose, count, slide number): is it on
   the cited slide, or in the transcript when marked (T)?
2. Every drug, enzyme, isoform, transporter and cofactor name: on the slide?
3. Every "slide N" citation: does slide N actually carry that content? (A
   citation to the wrong slide is a CITATION error.)
4. Every (T) claim: does the transcript say it, with that meaning?
5. Any statement with no source at all that is not plain reasoning from a
   sourced fact: UNSUPPORTED.
6. Any stated answer to a poll, practice or TRUE/FALSE item: is it right per
   the slides/transcript?
7. Style violations of these rules: figurative language (metaphor, simile),
   study advice ("make sure", "remember to"), sentences about the writing or
   about how it was produced.

Do NOT flag: British -ise spelling; the professor's American spelling inside
quotes; "mother carbon"; layout or length; a claim that is standard
pharmacology AND on the slide.

## Report format

One entry per problem, most severe first:

    objN — <WRONG FACT | UNSUPPORTED | CITATION | WRONG ANSWER | STYLE>
    Text: "<exact quote from the fragment>"
    Source: <deck> slide <N> says: "<exact quote>"  (or: transcript says "…" / not found in any source)
    Fix: <the corrected sentence, ready to paste, or "delete">

Then: how many sentences/claims you examined per fragment, which slides you
rendered, and which transcript you read. Do not edit any file except your own
report path.
