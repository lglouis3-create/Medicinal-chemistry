/* ==========================================================================
   READ LINKS — which section of the reading tabs explains a question
   ==========================================================================
   Two things use this: the "Explain more" row under an answered question, and
   the Weak spots review plan, which groups what is not yet solid by the section
   that teaches it. Without any links the plan still works — it falls back to
   grouping by topic — so this file can start empty and grow.

   A link is [view, anchor, label]:
     view    'guide' | 'tell' | 'ref'
     anchor  the id of the <h3> (or <section>) in that tab. Give the heading an
             id in the content file (<h3 id="guide-receptors">) and name it
             here; ids written by hand stay put as sections are added, while the
             generated guide-0, guide-1 … shift whenever a section is inserted.
     label   what the button says, e.g. 'Guide 3: kinds of antagonists'

   Resolution order, first match wins:
     1. a question's own `read:[[view, anchor, label], …]`, if it carries one
     2. byKey — the first regex that matches the question's concept, sub, tags
        and functional-group key, joined and lower-cased
     3. bySub — by subtopic id
     4. byLecture — by lecture id from course.js

   PHAR 4342: no links written yet. Neither line of the course had this file
   before the move onto the kit core (2026-11-01), so the review plan groups by
   topic and no "Explain more" row shows until links are added here.
   ========================================================================== */
const READ_LINKS = {
  byKey: [],
  bySub: {},
  byLecture: {},
};
