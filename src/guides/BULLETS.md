# Guides: paragraph points → bullets

The fragments obj1.html … obj8.html were verified fact by fact last night.
The student read them and asked for one thought per bullet instead of
paragraphs, and side-by-side tables where two things are comparable. Rewrite
the LAYOUT only. Not one fact, number, slide citation, (T) mark or verbatim
quote may be added, dropped or changed. Every `{{fig:…}}` token stays where
it is. Every `<table class="reftab">` stays.

## What changes

1. Each point `<p class="prose"><b>N. Title (slide N).</b> text…</p>` becomes

```html
<div class="gpt">
<h5>N. Title (slide N)</h5>
<ul>
<li>one thought</li>
<li>the next thought</li>
<li>(T) &ldquo;a verbatim quote stays a verbatim quote, in its own bullet&rdquo;</li>
</ul>
</div>
```
   One thought per `<li>`: a fact, a number with its slide, a quote, a
   consequence. Split long sentences at "so", "and", "while", "which" when
   each half stands alone; never split inside a quotation. Keep the slide
   citation on the bullet that carries the fact.

2. Where a point compares two or three things (phase 1 vs phase 2, induction
   vs inhibition, renal vs biliary, PM vs UM, existing vs bioactivated,
   fetus vs neonate vs elderly), lay the comparison out as a two- or
   three-column `<table class="reftab">` with a header row, one row per
   attribute, and leave only the bullets that do not fit the table.

3. The words list (`<dl class="gwords">`) stays as it is.

4. The `ghook` box: keep it ONLY when its content is a structural pattern
   (a count such as 4-3-1-1-1, a physical distinction such as "CO identifies,
   O2 is the ingredient", a rule such as "the drug binds first, then the
   electrons one at a time"). Delete any letter acronym or sentence-initial
   mnemonic (C-R-N-O, G-S-A-G-A-M, "Uncle Sam …") and, in its place, put a
   `<div class="gtell"><b>Tell apart</b><ul>…</ul></div>` with one bullet per
   pair of easily swapped items and the one feature that separates them,
   drawn from the section's own points. If the box already has such a
   distinction, keep that part and drop only the acronym.

5. The `gpoll` and `gask` boxes: turn their prose into bullets (`<ul><li>`),
   one option judgement per bullet in the poll box; the two lists in the
   ask box stay two lists.

## Rules

- No new sentences except the connective words a bullet needs. No metaphors,
  no study advice.
- Forbidden in the fragment: backtick, `${`, `<h1`, `<h2`, `<script`,
  `<style`, raw `&`/`<`/`>` in text (use entities), any `<h3>` other than the
  section's own, any `<h4>` other than the two existing ones.
- Do not renumber points. Do not reorder.
- Word count may shrink by connectives only; if your rewrite is more than 10%
  shorter or longer than the original, something was dropped or added: find it.

Write the rewritten fragment to the same folder as `objN.bullets.html` (the
original stays untouched). Validate: parse as balanced HTML, forbidden
characters absent, the set of `{{fig:` keys identical, the set of numbers
"slide N" identical, the count of `(T)` marks identical. Report the
before/after word counts and which hook boxes you kept, replaced or deleted.
