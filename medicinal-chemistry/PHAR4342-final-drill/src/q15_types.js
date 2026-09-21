/* ==========================================================================
   TYPED QUESTIONS — numeric answers and matching tables
   ==========================================================================
   Two kinds the option renderer cannot serve. A numeric item takes a typed
   number, grades it within `tol` of `answer`, then shows the worked solution
   line by line in the professor's own form; each line carries the kind of
   work it is (setup, unit, algebra, round) so a miss can be named. A matching
   item offers every right-hand value for every left-hand item and is right
   only when every pair is right. Neither kind is drawn onto the exam paper.
   Facts: Physicochemical Properties 1 slides 27 and 29 (rendered), Practice
   Problem Answers slides 1–5 (the 99.96% key), Lecture 14 slides 29–30.
   ========================================================================== */
QUESTIONS.push(
{id:'nm-1', type:'numeric', prof:'Yendapally', tier:'old', topic:'physchem', sub:'ionization', concept:'ionization-percent-acid',
 tags:['calculation'], skill:'calc', source:'slide',
 stem:'Amobarbital is an acidic drug with a pKa of 8.0. At pH 7.4, what percentage of the drug is in the unionized (acid) form?',
 units:'%', answer:80, tol:0.5,
 steps:[
  {k:'setup',   t:'pKa = pH + log([Unionized]/[Ionized])', why:'The acidic-drug form of the Henderson–Hasselbalch equation as slide 27 prints it: for an acid HA, the unionized form is the acid and the ionized form is its conjugate base A⁻.'},
  {k:'algebra', t:'log([Unionized]/[Ionized]) = pKa − pH = 8.0 − 7.4 = 0.6', why:'Subtracting pH from both sides isolates the log term. A positive value means the unionized form is the larger of the two at this pH.'},
  {k:'algebra', t:'[Unionized]/[Ionized] = 10^0.6 = 3.9811', why:'Undoing the log: the ratio of the two forms, carried unrounded.'},
  {k:'setup',   t:'% Unionized = [Unionized] / ([Unionized] + [Ionized]) × 100', why:'Slide 27: the fraction of all molecules that are in the acid form. With the ratio r = [U]/[I], this is r / (r + 1) × 100.'},
  {k:'algebra', t:'% Unionized = 3.9811 / (3.9811 + 1) × 100 = 79.9240 %', why:'Substituting the ratio. Units: a percentage of all amobarbital molecules.'},
  {k:'round',   t:'≈ 80 % unionized, so 20 % ionized (100 − 80)', why:'Slide 29 states the answer as 80% in the acid (unionized) form and 20% in the conjugate base (ionized) form.'}],
 teach:'An acidic drug is mostly unionized when the pH sits below its pKa, and the size of the gap sets how much: 0.6 units below the pKa gives a ratio of 10^0.6, about 4 to 1 in favour of the acid form. The same slide chain, 27 then 29, is the setup for every percent-ionised item Dr. Yendapally sets: write the equation in her form, isolate the log, undo it, then convert the ratio to a percentage.',
 cite:'Physicochemical Properties 1 (082726_PhysicochemicalProp1.pdf) slides 27, 29'},

{id:'nm-2', type:'numeric', prof:'Yendapally', tier:'old', topic:'physchem', sub:'ionization', concept:'ionization-percent-aspirin',
 tags:['calculation'], skill:'calc', source:'slide', dupOf:'pc-10',
 stem:'Aspirin is an acidic drug with a pKa of 3.5. At pH 7.0, what percentage of aspirin is in the ionized form?',
 units:'%', answer:99.96, tol:0.05,
 steps:[
  {k:'setup',   t:'pKa = pH + log([Unionized]/[Ionized])', why:'Slide 27, the acidic-drug form. Aspirin is a carboxylic acid, so the unionized form is the acid.'},
  {k:'algebra', t:'log([Unionized]/[Ionized]) = pKa − pH = 3.5 − 7.0 = −3.5', why:'A negative value: the ionized form dominates, as it should for an acid 3.5 units above its pKa.'},
  {k:'algebra', t:'[Unionized]/[Ionized] = 10^(−3.5) = 1 / 3162.2777', why:'Undoing the log; the answer key writes the ratio as 1/3162.27.'},
  {k:'setup',   t:'% Ionized = [Ionized] / ([Unionized] + [Ionized]) × 100', why:'Slide 27. With [Unionized] = 1 and [Ionized] = 3162.2777 in the same units, the fraction is 3162.2777 / 3163.2777.'},
  {k:'algebra', t:'% Ionized = 3162.2777 / 3163.2777 × 100 = 99.9684 %', why:'Substituting; the two concentrations share whatever unit was used, so the percentage is unitless.'},
  {k:'round',   t:'≈ 99.97 % ionized (the answer key prints 99.96 %)', why:'The key\'s 99.96 comes from truncating rather than rounding; either is accepted here within ±0.05.'}],
 note:'The practice answer key prints 99.96%. Carrying the arithmetic through unrounded gives 99.9684%, which rounds to 99.97%. The difference is where the digits were cut, not the method; the check accepts both.',
 teach:'Every percent-ionised problem in this course is the same four moves: the equation in her form, isolate the log, undo it to a ratio, convert the ratio to a percentage. The sign of pKa − pH tells you before any arithmetic which form will dominate: negative for an acid means ionised, positive means unionised.',
 cite:'Practice Problem Answers (082726_PracticeProblemAnswers.pdf) slides 1–5; setup in Physicochemical Properties 1 (082726_PhysicochemicalProp1.pdf) slide 27'},

{id:'mt-1', type:'match', prof:'Sikazwe', tier:'new', topic:'fgdm', sub:'p2map', concept:'match-enzyme-cofactor',
 tags:['cofactor','matching'], skill:'recall', source:'slide',
 stem:'Match each phase 2 enzyme to the cofactor it uses.',
 left:'Enzyme', right:'Cofactor',
 pairs:[
  {l:'UDP-glucuronosyltransferase (UGT)', r:'UDP-glucuronic acid (UDPGA)', why:'Slide 29: the glucuronide row.'},
  {l:'Sulfotransferase (ST / SULT)',      r:'PAPS (3\'-phosphoadenosine-5\'-phosphosulfate)', why:'Slide 29: the sulfate row.'},
  {l:'Acylsynthetase (amino acid conjugation)', r:'Acetyl-CoA plus an amino acid (glycine or glutamine)', why:'Slide 29: acetyl-CoA activates the acid, then the amino acid is joined.'},
  {l:'Glutathione S-transferase (GST)',   r:'Glutathione (GSH)', why:'Slide 30: glutathione is both cofactor and the nucleophile that attacks the electrophile.'},
  {l:'N-acetyltransferase (NAT)',         r:'Acetyl-CoA', why:'Slide 30: acetyl-CoA alone; the acetyl goes onto a nitrogen.'},
  {l:'Methyltransferase (MT)',            r:'S-adenosylmethionine (SAM)', why:'Slide 30: SAM is the methyl donor.'}],
 teach:'Two rows share acetyl-CoA: N-acetyltransferase uses it alone and puts the acetyl on an amine nitrogen; acylsynthetase uses it to activate the drug\'s carboxylic acid before an amino acid is attached. The other four cofactors are one to one with their enzymes, and each is named for what it carries onto the drug: a glucuronic acid, a sulfate, a glutathione, a methyl.',
 cite:'Lecture #14 (MCMet-9_16_2026.pdf) slides 29–30'}
);
