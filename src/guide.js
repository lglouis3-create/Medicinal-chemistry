const GUIDE_HTML = `
<h2>Objective guides &mdash; lectures 13, 14, 15</h2>
<p class="sub">One section per objective on the professor's own objectives slides: the words on the slides, the points in slide order with what he said in lecture marked (T), the pairs that get swapped and what separates them, his poll or practice item on that objective, and how he asks it. Every number is tied to a slide or to the lecture audio. Nothing here is scored.</p>
<section class="gobj" id="gobj-1">
<h3>Lecture 13 (MCMet-9_15_2026.pdf) &mdash; Objective 1 of 3: CYP characteristics, catalytic cycle and reactions</h3>
<div class="gbar"><span>OBJECTIVE (his slide 4)</span><b>Explain CYP characteristics, cat. cycle, &amp; reactions</b><i>slides 5&ndash;13</i></div>

<h4>Read this first &mdash; the words on these slides</h4>
<dl class="gwords">
<dt>CYP450 / CYP</dt><dd>Cytochrome P450, the &ldquo;Root Name&rdquo; (slide 8). (T) In print the CYP part is dropped: 2D6 and 1A2 are CYP isoforms.</dd>
<dt>Endobiotic</dt><dd>A chemical the body makes itself: cholesterol, steroids, bile acids, vitamin D, fatty acids, retinoic acid, arachidonic acid (slide 5).</dd>
<dt>Xenobiotic</dt><dd>A foreign chemical: drug molecules, chemical pollutants, pesticides (household vs. agricultural), dietary chemicals (slide 5).</dd>
<dt>Cyto / chrome</dt><dd>&ldquo;Cyto&rdquo; = cell bound; &ldquo;chrome&rdquo; = heme pigment (slide 8).</dd>
<dt>P450</dt><dd>The &ldquo;CYP + CO&rdquo; complex absorbs light at 450 nm (slides 8, 10); CO = carbon monoxide.</dd>
<dt>ER</dt><dd>Endoplasmic reticulum; CYPs are membrane-bound proteins there, in liver and other cells (slide 10).</dd>
<dt>Fe&ndash;cysteine catalytic site</dt><dd>Porphyrin iron bonded to a cysteine sulfur below and a water molecule above (slide 10 figure).</dd>
<dt>Family / subfamily / isoform / allele</dt><dd>CYP2D6*4: 2 = gene family, D = subfamily, 6 = isoform (isoenzyme) (slide 9); (T) *4, the highlighted star-number, is the allele, the gene variant of that enzyme.</dd>
<dt>Homology</dt><dd>Likeness of amino acid (AA) sequence: family &gt;40%, subfamily more (slide 9).</dd>
<dt>CYP450 reductase</dt><dd>Helper enzyme that carries electrons from NADPH to the CYP (slide 12).</dd>
<dt>NADPH</dt><dd>The electron (e<sup>&minus;</sup>) donor; it donates twice (slide 12).</dd>
<dt>Molecular oxygen (O<sub>2</sub>)</dt><dd>The fourth ingredient (slide 12); one O goes into R&ndash;OH, one into water (slide 11).</dd>
</dl>

<h4>The points, in slide order</h4>
<div class="gpt">
<h5>1. Why CYPs, part 1 (slide 5)</h5>
<ul>
<li>The endobiotic list on the left and the boxed xenobiotic list on the right (slide 5).</li>
<li>(T) Originally the enzymes &ldquo;were more aligned with processing the chemicals, natural chemicals that we have in our bodies&rdquo;.</li>
</ul>
</div>

<div class="gpt">
<h5>2. Why CYPs, part 2: the main drug-metabolising enzymes (slide 6)</h5>
<ul>
<li>The slide 6 pie: P450 74%, UGT (UDP-glucuronosyltransferase) 15%, esterase 9%, FMO (flavin-containing monooxygenase) 1%, NAT (N-acetyltransferase) 1%, MAO (monoamine oxidase) 1%.</li>
<li>(T) &ldquo;You&rsquo;re talking about close to 80%. Of the metabolism being handled by what? Cytochrome P450.&rdquo;</li>
<li>(T) UGTs are phase two.</li>
</ul>
</div>

{{fig:cyp_enzyme_share|Slide 6 pie &mdash; share of drug metabolism by enzyme: P450 74%, UGT 15%, esterase 9%, FMO, NAT and MAO 1% each}}

<div class="gpt">
<h5>3. Why CYPs, part 3: bioactivation (slide 7)</h5>
<ul>
<li>&ldquo;They play a big role in xenobiotic bioactivations (e.g., to carcinogens)&rdquo; (slide 7).</li>
<li>The slide 7 pie: P450 66%, SULT (sulfotransferase) 13%, AKR (aldo-keto reductase) 8%, NAT 7%, other 4%, COX (cyclooxygenase) 2%, FMO 1%.</li>
<li>(T) &ldquo;They are also bioactivating, leading to unwanted metabolites.&rdquo;</li>
</ul>
</div>

<div class="gpt">
<h5>4. Nomenclature, part 1: the name (slide 8)</h5>
<ul>
<li>Cyto (cell bound), chrome (heme pigment), P450 (a &ldquo;CYP + CO&rdquo; complex that absorbs light @ 450 nm) (slide 8).</li>
<li>CYP450 is the &ldquo;Root Name&rdquo; (slide 8).</li>
<li>The figure is an absorbance spectrum peaking at 450 nm (slide 8).</li>
<li>(T) The test: blow carbon monoxide over mashed liver cells and read the absorbance; a 450 nm peak means the enzyme is present in that fraction.</li>
<li>(T) &ldquo;Carbon monoxide is simply for identifying the enzyme.&rdquo;</li>
</ul>
</div>

<div class="gpt">
<h5>5. Nomenclature, part 2: reading CYP2D6*4 (slide 9)</h5>
<ul>
<li>CY = cytochrome, P = P450, 2 = gene family (&gt;40% homology), D = subfamily (&gt;55% homology), 6 = isoform/isoenzyme (&ldquo;structurally similar but different AA sequences&rdquo;), *4 = the highlighted allele (slide 9).</li>
<li>(T) Stop at the number: a family. Add the letter: a subfamily (3A is a subfamily, not a family). Add the next number: the isoform. Add the star: &ldquo;This is now pointing to the genetic variation. This is now the allele.&rdquo;</li>
<li>Two slides differ on the subfamily cut-off: slide 9 prints &gt;55%, slide 19 prints &gt;50%.</li>
<li>Both print &gt;40% for a family.</li>
<li>(T) The percentage will not be asked; &ldquo;Is it an allele? Is it an isoform?&rdquo; is the question.</li>
</ul>
</div>

{{fig:cyp_nomenclature|Slide 9 &mdash; CYP2D6*4 taken apart: cytochrome, P450, gene family (2), subfamily (D), isoform (6), allele (*4)}}

<div class="gpt">
<h5>6. Four physical characteristics (slide 10)</h5>
<ul>
<li>CYPs are in the ER (liver &amp; other cells) (slide 10).</li>
<li>CYPs are membrane-bound proteins (slide 10).</li>
<li>Porphyrin with Fe&ndash;cysteine catalytic site (slide 10).</li>
<li>CYP + CO complex absorbs light @ 450 nm (slide 10).</li>
<li>The figure is the Fe<sup>3+</sup> porphyrin with water above and cysteine below (slide 10).</li>
<li>(T) The drug binds at the iron and displaces the water; the resting iron is ferric, Fe<sup>3+</sup>, &ldquo;that&rsquo;s the starting point, very important, because for it to catalyze, that needs to change&rdquo;.</li>
<li>(T) The enzymes are &ldquo;predominantly in the endoplasmic reticulum&rdquo;, densest in liver; that lipophilic membrane environment is why substrates are lipophilic and metabolism moves them towards hydrophilic.</li>
</ul>
</div>

<div class="gpt">
<h5>7. The simplified catalytic cycle (slide 11)</h5>
<ul>
<li>A circle of iron states (tabulated under point 8) with the overall reaction beside it: R&ndash;H + O<sub>2</sub> &rarr; R&ndash;OH + H<sub>2</sub>O over CYP450, NADPH going to NADP (slide 11).</li>
<li>The line &ldquo;A new FG is inserted or unmasked&rdquo; (FG = functional group) (slide 11).</li>
<li>(T) &ldquo;it&rsquo;s not my expectation that you memorize this&rdquo;; the molecule binds, &ldquo;It picks up electrons, it picks up oxygen, molecular oxygen&rdquo;, the over-oxidised complex releases the product and the enzyme re-enters the cycle.</li>
</ul>
</div>

{{fig:cyp_catalytic_cycle|Slide 11 &mdash; the simplified catalytic cycle and the overall reaction R&ndash;H + O<sub>2</sub> &rarr; R&ndash;OH + H<sub>2</sub>O}}

<div class="gpt">
<h5>8. The four-step recap and the four ingredients (slide 12)</h5>
<ul>
<li>(T) A question on the cycle comes from this part, not the diagram: &ldquo;What are the actual ingredients that lead up to this oxidized products?&rdquo;</li>
<li>(T) &ldquo;Did I say you need carbon monoxide here? No.&rdquo;</li>
</ul>
</div>
<table class="reftab">
<tr><th>Step (slide 12, verbatim)</th><th>Iron state on the slide 11 diagram</th></tr>
<tr><td>1. Oxidized (Fe<sup>3+</sup>) P450 complexes the drug</td><td>Fe<sup>3+</sup> &rarr; Fe<sup>3+</sup>&ndash;substrate</td></tr>
<tr><td>2. NADPH donates an e<sup>&minus;</sup> (via CYP450 reductase) to reduce the initial complex</td><td>Fe<sup>2+</sup>&ndash;substrate, which then binds O<sub>2</sub>: Fe<sup>2+</sup>&ndash;O<sub>2</sub>&ndash;substrate</td></tr>
<tr><td>3. NADPH donates another e<sup>&minus;</sup> to reduce O<sub>2</sub> &amp; form an activated &ldquo;oxidized-CYP450 complex&rdquo;</td><td>Fe<sup>2+</sup>&ndash;O<sub>2</sub>*&ndash;substrate, then Fe<sup>3+</sup>&ndash;O&ndash;substrate after H<sub>2</sub>O leaves</td></tr>
<tr><td>4. Activated oxygen oxidizes the bound drug to form the product</td><td>Oxidised substrate released; enzyme returns to Fe<sup>3+</sup></td></tr>
</table>
<table class="reftab">
<tr><th>Reaction requirement (slide 12)</th><th>Role</th></tr>
<tr><td>CYP450</td><td>The enzyme itself; binds the drug at the heme iron (slide 10).</td></tr>
<tr><td>CYP450 Reductase</td><td>Delivers the electrons from NADPH (slide 12). (T) &ldquo;that&rsquo;s what starts this electron shuttle going&rdquo;.</td></tr>
<tr><td>NADPH (e<sup>&minus;</sup> donor)</td><td>Source of both electrons, steps 2 and 3 (slide 12).</td></tr>
<tr><td>Molecular Oxygen (O<sub>2</sub>)</td><td>Bound after the first reduction; supplies the inserted O (slide 11).</td></tr>
<tr><td>Carbon monoxide (CO)</td><td>Not a requirement. (T) &ldquo;Carbon monoxide is simply for identifying the enzyme.&rdquo;</td></tr>
</table>

<div class="gpt">
<h5>9. The oxidative mechanisms (slide 13)</h5>
<ul>
<li>A reaction table headed &ldquo;CYP oxidative mechanisms&rdquo;, one example per reaction (slide 13):</li>
</ul>
</div>
<table class="reftab">
<tr><th>Reaction (slide 13)</th><th>Example on the slide</th><th>What he said (T)</th></tr>
<tr><td>Aromatic hydroxylation</td><td>CH<sub>3</sub>CO&ndash;NH&ndash;C<sub>6</sub>H<sub>5</sub> &rarr; CH<sub>3</sub>CO&ndash;NH&ndash;C<sub>6</sub>H<sub>4</sub>&ndash;OH</td><td>(T) One of the oxidations to focus on.</td></tr>
<tr><td>Aliphatic hydroxylation</td><td>R&ndash;CH<sub>3</sub> &rarr; R&ndash;CH<sub>2</sub>&ndash;OH</td><td>(T) One of the oxidations to focus on.</td></tr>
<tr><td>Deamination</td><td>R&ndash;CH(NH<sub>2</sub>)&ndash;CH<sub>3</sub> &rarr; R&ndash;CO&ndash;CH<sub>3</sub> + NH<sub>3</sub></td><td>(T) Not covered in class; he will not ask it.</td></tr>
<tr><td>O-Dealkylation</td><td>R&ndash;O&ndash;CH<sub>3</sub> &rarr; R&ndash;OH + CH<sub>2</sub>O</td><td>(T) Removal of alkyl groups, methyls, from oxygen.</td></tr>
<tr><td>N-Dealkylation</td><td>R&ndash;N(CH<sub>3</sub>)<sub>2</sub> &rarr; R&ndash;NH&ndash;CH<sub>3</sub> + CH<sub>2</sub>O; R&ndash;NH&ndash;CH<sub>3</sub> &rarr; R&ndash;NH<sub>2</sub> + CH<sub>2</sub>O</td><td>(T) The same removal from nitrogen.</td></tr>
<tr><td>N-Oxidation</td><td>(CH<sub>3</sub>)<sub>3</sub>N &rarr; (CH<sub>3</sub>)<sub>3</sub>N&ndash;O</td><td>(T) CYP does it; FMO does it too.</td></tr>
<tr><td>Sulfoxidation</td><td>R&ndash;S&ndash;R&prime; &rarr; R&ndash;S(=O)&ndash;R&prime;</td><td>(T) CYP does it; FMO does it too.</td></tr>
</table>
<div class="gpt">
<ul>
<li>(T) &ldquo;I want you to focus on these oxidations&rdquo;; &ldquo;I can have questions like I had in the exam&rdquo;, a scheme with the reaction to be named.</li>
<li>Two CYP reactions absent from slide 13 are in the same lecture:</li>
<li>(T) An isolated alkene goes to an epoxide (&ldquo;P450 can give you these epoxides&rdquo;).</li>
<li>(T) CYPs remove halogens, a dehalogenation ending at a carboxylic acid.</li>
</ul>
</div>

{{fig:cyp_oxidative_reactions|Slide 13 &mdash; the seven CYP oxidative mechanisms, one scheme each}}

<div class="ghook"><b>Memory hook</b> The two easily swapped gases: CO identifies (CYP + CO absorbs at 450 nm, slides 8 and 10) and is never an ingredient; O<sub>2</sub> is the ingredient (slide 12) and never the identifier.</div>

<div class="gtell"><b>Tell apart</b><ul>
<li>Isoform vs allele: in CYP2D6*4 the 6 is the isoform, the star-number *4 is the allele (slide 9, point 5).</li>
<li>Family vs subfamily: stop at the number for the family (2), add the letter for the subfamily (D); 3A is a subfamily, not a family (point 5).</li>
<li>Fe<sup>3+</sup> vs Fe<sup>2+</sup>: the cycle starts at oxidised Fe<sup>3+</sup> complexing the drug; Fe<sup>2+</sup> appears only after NADPH&rsquo;s first electron (slide 12, point 8).</li>
<li>UGT vs CYP and FMO: UGTs are phase two, the separate slice on slide 6; CYP and FMO oxidise in phase 1 (points 2 and 9).</li>
<li>CYP vs FMO on N-oxidation and sulfoxidation: both do them (CYP: slide 13, point 9; FMO: L11 slides 26&ndash;27), so &ldquo;only CYP&rdquo; is false.</li>
<li>O-dealkylation vs N-dealkylation: the same alkyl removal, from oxygen or from nitrogen (slide 13, point 9).</li>
</ul></div>

<div class="gpoll"><b>Poll or practice item on this objective</b>
<ul>
<li>Prep sheet: &ldquo;True or False: CYPs also catalyze epoxidation, dealkylation and dehalogenation reactions.&rdquo;</li>
<li>Dealkylation: TRUE, O- and N-dealkylation are on slide 13.</li>
<li>(T) Epoxidation: TRUE, &ldquo;P450 can give you these epoxides&rdquo;.</li>
<li>(T) Dehalogenation: TRUE, CYPs remove halogens (all point 9).</li>
<li>Answer: TRUE.</li>
<li>His PollEv &ldquo;All enzymes below play a role in phase 1 biotransformations, EXCEPT:&rdquo; (Cyps / EH / MAO / UGTs / FMO) keys UGTs:</li>
<li>(T) &ldquo;UGTs are there for phase two&rdquo;, the separate slice on slide 6 (point 2).</li>
<li>CYP and FMO oxidise in phase 1 (point 9).</li>
<li>(T) Epoxide hydrolase (EH) and monoamine oxidase (MAO) are phase 1 too.</li>
</ul>
</div>

<div class="gask"><b>How he will ask it, and how to answer</b>
<ul><li>True/false on what CYPs do or need, as in the prep-sheet item above.</li><li>A list with one wrong member or two right ones: &ldquo;All enzymes below play a role in phase 1 biotransformations, EXCEPT:&rdquo; and &ldquo;Select TWO correct DME attributes/characteristics.&rdquo; (DME = drug-metabolising enzyme).</li><li>A scheme with the reaction to be named: &ldquo;Imipramine&rsquo;s indicated metabolism exemplifies..........&rdquo; with aromatic hydroxylation and heteroatom oxidation among the options.</li><li>A name to classify: (T) &ldquo;Is it an allele? Is it an isoform?&rdquo;, a subfamily or a family.</li></ul>
<ul><li>Step 1 &mdash; decide whether the stem is about identifying the enzyme (CO, 450 nm, slide 8) or running the reaction (the four ingredients, slide 12); CO belongs only to the first.</li><li>Step 2 &mdash; for a name, count positions: number = family, letter = subfamily, next number = isoform, star-number = allele (slide 9).</li><li>Step 3 &mdash; the usual trap is a swapped gas (CO for O<sub>2</sub>; CO<sub>2</sub> or carbonate for CO), a start at Fe<sup>2+</sup> (slide 12 starts at oxidised Fe<sup>3+</sup>), or UGT among phase one enzymes; &ldquo;only CYP does N- or S-oxidation&rdquo; is false. (T) FMO does both.</li></ul>
</div>
</section>

<section class="gobj" id="gobj-2">
<h3>Lecture 13 (MCMet-9_15_2026.pdf) &mdash; Objective 2 of 3: key families, isoforms and their impact on drug metabolism</h3>
<div class="gbar"><span>OBJECTIVE (his slide 4)</span><b>Identify key families/isoforms &amp; impact on DM</b><i>slides 14&ndash;37</i></div>

<h4>Read this first &mdash; the words on these slides</h4>
<dl class="gwords">
<dt>DM</dt><dd>Drug metabolism (slide 4); CYP = cytochrome P450.</dd>
<dt>Expression</dt><dd>How much of an isoform a tissue contains (liver, slide 14; small intestine, slide 15).</dd>
<dt>hCYP</dt><dd>Human CYP; slide 16 is the share of clinical drugs, not expression.</dd>
<dt>Family / subfamily</dt><dd>&gt;18 families (&gt;40% homology), &gt;40 subfamilies (&gt;50% homology), one supergene family (slide 19).</dd>
<dt>Substrate</dt><dd>A drug the isoform metabolises (slide 17 sample table).</dd>
<dt>Inducer</dt><dd>(T) Raises the amount of enzyme, so substrates are metabolised faster; the common ones are listed on slide 32. (T) Slow: protein must be expressed.</dd>
<dt>Inhibitor</dt><dd>(T) Blocks the enzyme, so substrate levels rise; the common ones are listed on slide 32. (T) Fast: direct binding.</dd>
<dt>Polymorphism</dt><dd>Genetic variation; phenotypes UM, EM, IM, PM (slide 26). (T) Ultra-rapid, extensive, intermediate, poor metaboliser.</dd>
<dt>First-pass effect</dt><dd>Metabolism before the systemic circulation, 3A4 &ldquo;Largely responsible&rdquo; (slide 30). (T) Pre-systemic metabolism.</dd>
<dt>PAHs</dt><dd>Polycyclic aromatic hydrocarbons (tobacco smoke), 1A2 inducers (slide 20).</dd>
<dt>Halogenated HCs</dt><dd>Halogenated hydrocarbons, 2E1 substrates (slide 28).</dd>
<dt>APAP</dt><dd>Acetaminophen; &ldquo;APAP(toxicity)&rdquo; is a 2E1 entry (slide 28).</dd>
<dt>GFJ</dt><dd>Grapefruit juice, a common 3A4 inhibitor (slides 32, 35).</dd>
</dl>

<h4>The points, in slide order</h4>
<div class="gpt">
<h5>1. Liver expression (slide 14)</h5>
<ul>
<li>(T) Most highly expressed isoform: 2E1, 21%.</li>
<li>(T) Most prevalent family: 2, 66% against 16% for family 3, &ldquo;we can do arithmetic, right? We can add&rdquo; (slide 14 pie).</li>
</ul>
</div>
<table class="reftab">
<tr><th>Isoform</th><th>% of liver CYP (slide 14 pie)</th><th>% of clinical drugs (slide 16 pie)</th></tr>
<tr><td>1A2</td><td>6</td><td>9</td></tr>
<tr><td>2A6</td><td>10</td><td>3</td></tr>
<tr><td>2A13</td><td>1</td><td>&ndash;</td></tr>
<tr><td>2B6</td><td>3</td><td>7</td></tr>
<tr><td>2C8</td><td>12</td><td>5</td></tr>
<tr><td>2C9</td><td>15</td><td>13</td></tr>
<tr><td>2C19</td><td>2</td><td>7</td></tr>
<tr><td>2D6</td><td>2</td><td>20</td></tr>
<tr><td>2E1</td><td>21 (largest slice)</td><td>3</td></tr>
<tr><td>2J2</td><td>&ndash;</td><td>3</td></tr>
<tr><td>3A4 (3A4/5 on slide 16)</td><td>11</td><td>30 (largest slice)</td></tr>
<tr><td>3A5 / 3A7</td><td>3 / 2</td><td>in 3A4/5 / &ndash;</td></tr>
<tr><td>4F / other</td><td>10 / 2</td><td>&ndash;</td></tr>
<tr><td>Family 2 total</td><td>10 + 1 + 3 + 12 + 15 + 2 + 2 + 21 = 66</td><td>3 + 7 + 5 + 13 + 7 + 20 + 3 + 3 = 61</td></tr>
<tr><td>Family 3 total</td><td>11 + 3 + 2 = 16</td><td>30</td></tr>
<tr><td>Family 1 total</td><td>6</td><td>9</td></tr>
</table>

{{fig:cyp_liver_share|Slide 14 pie &mdash; % CYP isoforms expressed by human liver; 2E1 is the largest slice at 21%, 3A4 is 11%}}

<div class="gpt">
<h5>2. Small-intestine expression (slide 15)</h5>
<ul>
<li>3A 82%, 2C9 14%, 2C19 2%, 2J2 1.4%, 2D6 0.7% (slide 15 pie).</li>
<li>(T) The absorption site, hence pre-systemic metabolism; 3A holds 3A4 and 3A5; grapefruit juice inhibits 3A4.</li>
</ul>
</div>

<div class="gpt">
<h5>3. Share of clinical drugs (slide 16)</h5>
<ul>
<li>(T) By isoform: 3A4, 30% (3A5 hides in the 3A4/5 slice).</li>
<li>(T) By family: 2, 61% (slide 16 pie).</li>
<li>(T) &ldquo;So read the question.&rdquo;</li>
</ul>
</div>

{{fig:cyp_drug_share|Slide 16 pie &mdash; % clinical drugs metabolised by hCYP isoforms; 3A4/5 30%, 2D6 20%, 2C9 13%}}

<div class="gpt">
<h5>4. Sample substrate table (slide 17)</h5>
<ul>
<li>Columns 1A2, 2B6, 2C8, 2C19, 2C9, 2D6, 2E1, 3A4,5,7.</li>
<li>(T) &ldquo;don&rsquo;t spend time trying to memorize these tables&rdquo;; three families, 1, 2 and 3, metabolise most drugs.</li>
<li>(T) At the subfamily level he answered 2C from this table, which gives 2C three columns ("2C. 2C 2C. Right?"); the slide 16 pie puts 3A4/5 (30%) above 2C8 + 2C9 + 2C19 (25%), so a stem showing the pie keys 3A and a stem built on slide 17 keys 2C.</li>
<li>Slides 21, 23, 25, 27, 29 and 31 are substrate pictures, title only.</li>
<li>(T) They come from Foye.</li>
</ul>
</div>

<div class="gpt">
<h5>5. Family attributes (slides 18&ndash;19)</h5>
<ul>
<li>Slide 18 is a title only.</li>
<li>Slide 19: a supergene family.</li>
<li>The 1, 2, 3 families metabolise 80% of clinical drugs, especially 1A2, 2A6, 2B6, 2C8, 2C9, 2C19, 2D6, 2E1, 3A4/3A5 (slide 19).</li>
<li>Slide 9 prints &gt;55% for subfamily.</li>
<li>(T) The percentage is not asked.</li>
</ul>
<table class="reftab">
<tr><th>Slide 19</th><th>Families</th><th>Subfamilies</th></tr>
<tr><td>How many</td><td>&gt;18</td><td>&gt;40</td></tr>
<tr><td>Homology</td><td>&gt;40%</td><td>&gt;50%</td></tr>
</table>
</div>

<div class="gpt">
<h5>6. CYP1: 1A2 (slides 20&ndash;21)</h5>
<ul>
<li>(T) Three things: key player of family 1, inducible, polymorphic; &ldquo;If you know those three pieces of information, you&rsquo;re good to go&rdquo;.</li>
<li>(T) &ldquo;Do you smoke?&rdquo; is asked because smoke induces CYPs, hence drug interactions.</li>
</ul>
</div>

<div class="gpt">
<h5>7. CYP2: 2B6 (slides 22&ndash;23)</h5>
<ul>
<li>CYP2 is the largest clinically relevant family (slide 22).</li>
<li>(T) Bupropion serves depression and smoking, and &ldquo;it&rsquo;s metabolized to similarly acting active metabolites&rdquo; by 2B6.</li>
</ul>
</div>

<div class="gpt">
<h5>8. CYP2: 2C9 and 2C19 (slides 24&ndash;25)</h5>
<ul>
<li>Both inducible, both polymorphic (slide 24).</li>
<li>(T) &ldquo;a quarter of the clinically relevant drugs are metabolized by 2C9 and 2C19&rdquo; (the slide 16 pie gives the pair 20%).</li>
</ul>
</div>

<div class="gpt">
<h5>9. CYP2: 2D6 and the four phenotypes (slides 26&ndash;27)</h5>
<ul>
<li>Minimal induction (slide 26).</li>
<li>UM, EM, IM, PM (slide 26).</li>
<li>Lots of DDIs (drug&ndash;drug interactions) due to low expression (slide 26).</li>
<li>Stereo-selectivity (slide 26).</li>
</ul>
<table class="reftab">
<tr><th>Phenotype (slide 26)</th><th>What he said</th></tr>
<tr><td>UM</td><td>(T) &ldquo;they&rsquo;re just born like that&rdquo;.</td></tr>
<tr><td>EM</td><td>(T) &ldquo;they behave like ultra rapid, but you get a lot more metabolites from this phenotype&rdquo;.</td></tr>
<tr><td>IM</td><td>(T) &ldquo;intermediate or normal metabolizer phenotype. That&rsquo;s where we want people to be.&rdquo;</td></tr>
<tr><td>PM</td><td>(T) &ldquo;the drug sits&rdquo;.</td></tr>
</table>
<ul>
<li>Conflict: these lectures (09/15, 09/16) call IM the normal phenotype.</li>
<li>The textbook convention is EM.</li>
<li>An exam written from these lectures keys IM.</li>
</ul>
</div>

<div class="gpt">
<h5>10. CYP2: 2E1 (slides 28&ndash;29)</h5>
<ul>
<li>Mainly for environmental chemicals (slide 28).</li>
<li>Key in the carcinogenicity/toxicity of halogenated HCs (slide 28).</li>
<li>(T) When ethanol is called an enzyme inducer, most of that is 2E1.</li>
<li>(T) APAP toxicity comes back to 2E1.</li>
</ul>
</div>

<div class="gpt">
<h5>11. CYP3: 3A4 (slides 30&ndash;31)</h5>
<ul>
<li>The largest clinically relevant isoform (slide 30).</li>
<li>1/3 of liver CYP isoforms (slide 30).</li>
<li>Metabolises 1/3 of drugs (slide 30).</li>
<li>Largely responsible for the 1st pass effect (slide 30).</li>
<li>Present in liver, intestine, lungs (slide 30).</li>
<li>Minor genetic factors (slide 30).</li>
<li>Induction/inhibition are big issues (slide 30).</li>
<li>(T) Its polymorphisms &ldquo;do not at present seem to be of high importance right now&rdquo;.</li>
<li>(T) Every drug is profiled for 3A4 and 2D6 at a minimum.</li>
</ul>
<table class="reftab">
<tr><th>Conflict</th><th>Slide 30</th><th>The pies</th></tr>
<tr><td>Share of liver CYP</td><td>one third</td><td>the slide 14 pie gives 3A4 11% (16% with 3A5 and 3A7), with 2E1 the largest slice</td></tr>
<tr><td>Share of drugs</td><td>1/3</td><td>agrees (30%)</td></tr>
<tr><td>Stem that keys it</td><td>A worded stem (&ldquo;one third&rdquo;, &ldquo;largest clinically relevant isoform&rdquo;, &ldquo;first pass&rdquo;) keys 3A4</td><td>A stem showing the slide 14 pie keys 2E1 as most expressed</td></tr>
</table>
</div>

<table class="reftab">
<tr><th>Isoform</th><th>Induced by</th><th>Polymorphic?</th><th>Share</th><th>Named substrates</th><th>Slide</th></tr>
<tr><td>1A2</td><td>PAHs (tobacco smoke), dioxins, omeprazole</td><td>Yes</td><td>6% of liver CYP, 9% of drugs (pies)</td><td>Aryl amines, heterocyclic compounds; caffeine, imipramine, haloperidol (slide 20); theophylline, clozapine, acetaminophen, (R)warfarin (slide 17)</td><td>20</td></tr>
<tr><td>2B6</td><td>&ldquo;several drugs&rdquo;</td><td>Yes (e.g. efavirenz)</td><td>3% of liver CYP, 7% of drugs (pies)</td><td>Bupropion, methadone, insecticides (slide 22); efavirenz, cyclophosphamide (slide 17)</td><td>22</td></tr>
<tr><td>2C9 / 2C19</td><td>&ldquo;Both are inducible&rdquo;</td><td>Both yes</td><td>25% of clinically important drugs (slide 24); 13% + 7% (slide 16 pie)</td><td>(S)-warfarin, tolbutamide, glipizide (2C9); phenytoin, (S)-mephenytoin (2C9/2C19) (slide 24); proton pump inhibitors incl. omeprazole, diazepam, R-warfarin (2C19); ibuprofen, glyburide, losartan, celecoxib (2C9) (slide 17)</td><td>24</td></tr>
<tr><td>2D6</td><td>Minimal induction</td><td>Yes: UM, EM, IM, PM</td><td>3% of liver CYP, 21% of drugs (slide 26); 2% and 20% (pies)</td><td>Codeine, venlafaxine (slide 26); tramadol, tamoxifen, paroxetine, beta blockers, amitriptyline, haloperidol (slide 17)</td><td>26</td></tr>
<tr><td>2E1</td><td>Ethanol, ketones</td><td>Yes</td><td>21% of liver CYP, 3% of drugs (pies)</td><td>Ethanol, APAP (toxicity), halogenated HCs (slide 28); anaesthetics enflurane, halothane, isoflurane, methoxyflurane, sevoflurane (slide 17)</td><td>28</td></tr>
<tr><td>3A4</td><td>Slide 32 inducer list; induction/inhibition &ldquo;big issues&rdquo;</td><td>Minor genetic factors, some individual variability</td><td>1/3 of liver CYP, 1/3 of drugs (slide 30); 11% and 30% (pies)</td><td>Erythromycin, cyclosporine, tacrolimus, benzodiazepines, HIV (human immunodeficiency virus) antivirals, antihistamines, calcium channel blockers, HMG CoA (3-hydroxy-3-methylglutaryl coenzyme A) reductase inhibitors (atorvastatin, lovastatin, simvastatin), estradiol, testosterone, caffeine, codeine (slide 17)</td><td>30</td></tr>
</table>

<div class="gpt">
<h5>12. Common inducers and inhibitors (slide 32)</h5>
<ul>
<li>Headed &ldquo;Many DIs due to induction/inhibition&rdquo; (DI = drug interaction).</li>
<li>The two lists below are in the slide's order.</li>
<li>(T) This is the table that must be remembered, azole antifungals and grapefruit juice being inhibitors.</li>
</ul>
</div>
<table class="reftab">
<tr><th>Common Inducers (slide 32)</th><th>Common Inhibitors (slide 32)</th></tr>
<tr><td>Barbiturates</td><td>Clarithromycin</td></tr>
<tr><td>Carbamazepine</td><td>Erythromycin</td></tr>
<tr><td>Phenytoin</td><td>Azole Antifungals: Ketoconazole, Itraconazole</td></tr>
<tr><td>Rifampin</td><td>Cimetidine</td></tr>
<tr><td>St Johns Wort</td><td>Protease inhibitors</td></tr>
<tr><td>Ethanol</td><td>Grape Fruit Juice</td></tr>
<tr><td>Tobacco</td><td>Quinidine</td></tr>
<tr><td>Nevirapine</td><td>Omeprazole</td></tr>
</table>

{{fig:cyp_ind_inh_lists|Slide 32 &mdash; the common inducer and common inhibitor lists as printed}}

<div class="gpt">
<h5>13. Other inducers and inhibitors (slides 33&ndash;34)</h5>
<ul>
<li>(T) &ldquo;you don&rsquo;t need to memorize this, it&rsquo;s just for your reference&rdquo;.</li>
<li>Omeprazole is on both sides:</li>
</ul>
<table class="reftab">
<tr><th>Omeprazole as inducer</th><th>Omeprazole as inhibitor</th></tr>
<tr><td>of 1A2 (slide 20)</td><td>on slide 32</td></tr>
<tr><td>of 1A1/2 and 3A4 (slide 33)</td><td>at the head of the CYP2C19 column on slide 34</td></tr>
</table>
<ul>
<li>Slide 17 puts omeprazole and R-warfarin under 2C19 and S-warfarin under 2C9: the slide basis for his warfarin&ndash;omeprazole bleeding case.</li>
</ul>
</div>
<table class="reftab">
<tr><th>Slide</th><th>Entry</th><th>What it prints</th></tr>
<tr><td>33 (drug against enzymes induced; bold italic = reported to cause drug&ndash;drug interaction)</td><td>Omeprazole</td><td>1A1/2, 3A4</td></tr>
<tr><td>33</td><td>Rifampin</td><td>2C8, 2C9, 2C19, 2D6, 3A4, 2B6</td></tr>
<tr><td>33</td><td>Cigarette smoke; charbroiled meats; polycyclic aromatic hydrocarbons</td><td>1A1/2</td></tr>
<tr><td>34 (columns CYP1A2, 2B6, 2C8, 2C19, 2C9, 2D6; a right-hand table continues 2C19 and 2C9)</td><td>Omeprazole</td><td>Heads the CYP2C19 column</td></tr>
<tr><td>34</td><td>Quinidine</td><td>In the CYP2C9 column of the right-hand table</td></tr>
</table>

{{fig:cyp_inducer_table|Slide 33 &mdash; other CYP450 inducers by isoform; omeprazole is listed against 1A1/2 and 3A4}}

<div class="gpt">
<h5>14. 3A4 and GFJ interactions (slide 35)</h5>
<ul>
<li>(T) &ldquo;we go with the yeses&rdquo;; not to be memorised.</li>
</ul>
</div>
<table class="reftab">
<tr><th>Y (interaction)</th><th>N</th><th>Marked ?</th></tr>
<tr><td>Calcium channel blockers amlodipine, felodipine, nifedipine, nimodipine, nisoldipine, nitrendipine, pranidipine; HMG-CoA reductase inhibitors atorvastatin, lovastatin, simvastatin; CNS (central nervous system) drugs buspirone, carbamazepine, diazepam, midazolam, triazolam; cyclosporine; methadone; sildenafil; saquinavir</td><td>Antiarrhythmics diltiazem, verapamil, quinidine; clarithromycin</td><td>Y?: cerivastatin, ebastine, loratidine, tacrolimus. N?: fluvastatin, pravastatin, indinavir, nelfinavir, ritonavir</td></tr>
</table>

<div class="gpt">
<h5>15. Bioactivation (slides 36&ndash;37)</h5>
<ul>
<li>Slide 36: two pies and the scheme procarcinogen &rarr; carcinogen &rarr; DNA-adduct &rarr; cancer (Chem. Res. Toxicol. 2012).</li>
<li>(T) &ldquo;We didn&rsquo;t even talk about 1A1&rdquo;, yet &ldquo;That isoform there leads the path.&rdquo;</li>
</ul>
</div>
<table class="reftab">
<tr><th>Slide 36, all enzymes</th><th>Slide 36, within the P450s</th></tr>
<tr><td>P450 66%, SULT (sulfotransferase) 13%, AKR (aldo-keto reductase) 8%, NAT (N-acetyltransferase) 7%, other 4%, COX (cyclooxygenase) 2%, FMO (flavin-containing monooxygenase) 1%</td><td>1A1 20%, 1A2 17%, 1B1 11%, 2E1 11%, 3A4 10%, 2A6 8%, other 23%</td></tr>
</table>
<table class="reftab">
<tr><th>CYP1A1 (slide 37)</th><th>CYP1A2</th><th>CYP2E1</th><th>CYP3A4</th></tr>
<tr><td>Benzo[a]pyrene; other PAHs</td><td>4-Aminobiphenyl; 2-naphthylamine; 2-aminofluorene; 2-acetylaminofluorene; 2-aminoanthracene; heteropolycyclic amines (2-aminoquinolines); aflatoxin B1; ipomeanol</td><td>Benzene; styrene; acrylonitrile; vinyl bromide; trichloroethylene; carbon tetrachloride; chloroform; methylene chloride; N-nitrosodimethylamine; 1,2-dichloropropane; ethyl carbamate</td><td>Aflatoxin B1; aflatoxin G1; estradiol; 6-aminochrysene; PAHs to dihydrodiols</td></tr>
</table>

<div class="ghook"><b>Memory hook</b> The isoform that breaks the pattern for induction is 2D6 (&ldquo;Minimal induction&rdquo;, slide 26); for polymorphism it is 3A4 (&ldquo;Minor genetic factors&rdquo;, slide 30); the others on slides 20&ndash;28 are both.</div>

<div class="gtell"><b>Tell apart</b><ul>
<li>Most expressed liver isoform vs isoform with most clinical drugs: 2E1 on the slide 14 pie (21%), 3A4 on the slide 16 pie (30%); the family is 2 on both (points 1 and 3).</li>
<li>Inducer vs inhibitor in an interaction stem: inducer &rarr; lower substrate level &rarr; less effect; inhibitor &rarr; higher level &rarr; exaggerated effect (slide 32 lists, point 12).</li>
<li>Omeprazole: an inducer on slides 20 and 33, an inhibitor on slides 32 and 34 (point 13).</li>
<li>Quinidine: a common inhibitor on slide 32, but N in the GFJ table on slide 35 (points 12 and 14).</li>
<li>IM vs EM as the normal phenotype: these lectures key IM, the textbook convention is EM (point 9).</li>
<li>&ldquo;One third of liver CYP&rdquo; vs the slide 14 pie: a worded stem keys 3A4, a stem showing the pie keys 2E1 (point 11).</li>
</ul></div>

<div class="gpoll"><b>Poll or practice item on this objective</b>
<ul>
<li>His slide-case item (Lecture 14 slide 65 table): &ldquo;Erythromycin inhibits Glyburide inactivation, the likely metabolic drug interaction of administering both drugs is........ A. Hyperglycemia B. Liver failure C. Hypertension D. Hypoglycemia&rdquo;.</li>
<li>Erythromycin: common inhibitor (point 12).</li>
<li>Glyburide: a 2C9 entry under &ldquo;Sulfonylureas:&rdquo; on slide 17 (point 4); inhibition raises its level.</li>
<li>A: FALSE, more hypoglycaemic agent lowers glucose.</li>
<li>B and C: FALSE, no slide links the pair to liver injury or blood pressure.</li>
<li>D: TRUE.</li>
<li>Answer: D.</li>
</ul>
</div>

<div class="gask"><b>How he will ask it, and how to answer</b>
<ul><li>A pie or table to read at a stated level. (T) His versions: most expressed liver isoform (2E1, slide 14); most prevalent family (2); isoform with most clinical drugs (3A4, slide 16).</li><li>An interaction consequence (the glyburide item) or an explain case: &ldquo;Intake of Omeprazole and Warfarin could lead to a bleeding event. Explain.&rdquo;</li><li>An attribute list: &ldquo;Select TWO correct DME attributes/characteristics.&rdquo; (DME = drug-metabolising enzyme) or an EXCEPT list on slide 32 or 37.</li></ul>
<ul><li>Step 1 &mdash; fix the level (isoform, subfamily, family) and the pie (slide 14 expression, slide 16 drugs); isoform answers differ, family is 2 in both.</li><li>Step 2 &mdash; for an interaction, classify the added drug from slide 32, find the substrate&rsquo;s isoform (slides 17&ndash;30), then: inducer &rarr; lower level &rarr; less effect; inhibitor &rarr; higher level &rarr; exaggerated effect.</li><li>Step 3 &mdash; traps: 3A4 as most expressed when the slide 14 pie is shown (2E1, 21%); 2D6 as inducible (slide 26); omeprazole judged from one list (inducer, slides 20, 33; inhibitor, slides 32, 34); quinidine, inhibitor on slide 32 but N on slide 35.</li></ul>
</div>
</section>

<section class="gobj" id="gobj-3">
<h3>Lecture 13 (MCMet-9_15_2026.pdf) &mdash; Objective 3 of 3: CYP polymorphisms and what they mean for a patient</h3>
<div class="gbar"><span>OBJECTIVE (his slide 4)</span><b>Discuss CYP polymorphisms &amp; DM implications</b><i>slides 38&ndash;59</i></div>

<h4>Read this first &mdash; the words on these slides</h4>
<dl class="gwords">
<dt>Genetic polymorphism</dt><dd>Inherited variation in how much working enzyme a person expresses; slides 20, 22, 24, 26 and 28 each flag it for their isoform.</dd>
<dt>Allele</dt><dd>The gene variant behind a polymorphism, written after a star: CYP2D6*4 (slide 9); (T) "not the isoform."</dd>
<dt>Phenotype</dt><dd>The metabolic behaviour the patient shows; slide 26 lists four for 2D6, in this order: UM; EM; IM; PM.</dd>
<dt>UM, ultra-rapid metaboliser</dt><dd>Subjects with CYP2D6 gene duplications (slide 40); (T) "they're just born like that."</dd>
<dt>EM, extensive metaboliser</dt><dd>(T) "they behave like ultra rapid, but you get a lot more metabolites"; fast here, not normal.</dd>
<dt>IM, intermediate metaboliser</dt><dd>The normal phenotype in this course; the middle row of slides 41&ndash;42 (point 1).</dd>
<dt>PM, poor metaboliser</dt><dd>Subjects with no CYP2D6 enzymes (slide 40); (T) "the drug sits."</dd>
<dt>Active drug and prodrug; exposure</dt><dd>Slide 41 starts from an active parent with an inactive metabolite, slide 42 from an inactive prodrug with an active metabolite; "exposure" is how much of a compound the body sees.</dd>
<dt>ODT</dt><dd>Tramadol's metabolite on slide 47, labelled "maj. active metabolite"; the letters are not expanded on the slide.</dd>
<dt>Endobiotic, xenobiotic</dt><dd>The body's own molecules (cholesterol, steroids, bile acids) against foreign ones (drug molecules, chemical pollutants, pesticides), the two lists on slide 5; the terms come back in the slide 49 TRUE/FALSE item.</dd>
<dt>Reduced-function allele</dt><dd>Slide 59's term for the 2C19 variant that leaves clopidogrel unactivated: the PM side.</dd>
</dl>

<h4>The points, in slide order</h4>
<div class="gpt">
<h5>1. Which phenotype is "normal" (slide 26, used from slide 38 on)</h5>
<ul>
<li>(T) "intermediate IM, right, is the normal metabolizer phenotype, intermediate or normal metabolizer phenotype. That's where we want people to be."</li>
<li>Repeated on 09/16: (T) "intermediate, which is like normal metabolizer."</li>
<li>The textbook (Foye, the reading on slide 3) uses EM as the normal phenotype; no slide in this deck says so.</li>
<li>An exam written from these lectures keys IM as normal and EM as fast.</li>
<li>(T) "we focus on two extremes."</li>
</ul>
</div>

<div class="gpt">
<h5>2. Three picture slides: table, frequencies, head-counts (slides 38&ndash;40)</h5>
<ul>
<li>Printed text is the title on each:</li>
</ul>
</div>
<table class="reftab">
<tr><th>Slide</th><th>The picture</th><th>What he said (T)</th></tr>
<tr><td>38, polymorphism table</td><td>Columns: enzyme, fraction of drug metabolism, substrates, major allelic variants, clinical effects, significance of the polymorphism.</td><td>"this is a very important table ... the most polymorphic isoforms that are clinically relevant, right, are going to be CYP2C9, 2C19 and 2D6. Please remember that." Effect column: "Drug dosage, drug efficacy, no response." 3A4, by contrast, has "minor genetic factors" (slide 30).</td></tr>
<tr><td>39, frequencies by ethnic group</td><td>PM frequencies for 1A2, 2C9, 2C19, 2D6 and two phase 2 enzymes, N-acetyltransferase 2 (NAT2) and thiopurine methyltransferase; UR (that slide's word for ultra-rapid) frequencies for 2D6.</td><td>Two rows read aloud: "ultra rapid metabolizer, Ethiopian. 20% of the population" for 2D6; 1% of Caucasians for thiopurine methylation, and "the 1%, it can translate to ... millions of people."</td></tr>
<tr><td>40, 2D6 head-counts</td><td>PMs: subjects with no CYP2D6 enzymes. UMs: subjects with CYP2D6 gene duplications. The slide's example prodrug is codeine, the 2D6 substrate of slide 26.</td><td>"20 to about 30 million people ... poor metabolizer phenotype ... too high drug levels at ordinary dose ... high risk for adverse reactions. And no response for certain drugs", since "a pro-drug that's required by activation ... is going to sit there in its inactive state." "15 to about 20 million. Ultra rapid ... no response to drugs at ordinary dosage."</td></tr>
</table>

<div class="gpt">
<h5>3. The grid: active drug or prodrug, UM or PM (slides 41&ndash;42, pictures)</h5>
<ul>
<li>Three rows per slide (increased-functionality, normal, reduced-functionality enzyme), each ending in an exposure.</li>
<li>(T) "one in the ultra rapid, let's say UM phenotype. And then one in the poor metabolizer phenotype", and of the middle row, "So this is the IM."</li>
</ul>
</div>
{{fig:cyp_active_drug_grid|Slide 41, active parent drug: the more enzyme, the less exposure to the active compound}}
{{fig:cyp_prodrug_grid|Slide 42, prodrug: the more enzyme, the more exposure to the active metabolite}}
<table class="reftab">
<tr><th>Phenotype</th><th>Active drug (slide 41)</th><th>Prodrug (slide 42)</th></tr>
<tr><td><b>UM</b> (increased-functionality enzyme; induction gives the same picture, slide 50)</td><td>Decreased exposure to the active parent, most of it turned into inactive metabolite. (T) "Quickly, they get that inactivated drug and you have to redose them." Outcome: under-treatment at the ordinary dose.</td><td>Increased exposure to the active metabolite, and early. (T) "We arrive at the active drug rapidly ... immediate and increased exposure to the active drug." Outcome: over-effect at the ordinary dose.</td></tr>
<tr><td><b>IM</b> (normal enzyme)</td><td>Anticipated exposure. (T) "a balanced picture ... some metabolism and some non-metabolism going on."</td><td>Anticipated exposure. (T) "proportionality."</td></tr>
<tr><td><b>PM</b> (reduced-functionality enzyme)</td><td>Increased exposure to the active parent. (T) "the drug sits ... side effects and even benefits, they come to the fore." Outcome: adverse drug reactions (ADRs) at the ordinary dose (slide 40).</td><td>Decreased exposure to the active metabolite; (T) the patient is "stuck" with the unmetabolised prodrug, "so decreased exposure." Outcome: no response (slide 40, codeine; slide 59, clopidogrel).</td></tr>
</table>

<div class="gpt">
<h5>4. "What do I know about CYPs?" (slides 43&ndash;44)</h5>
<ul>
<li>Slide 43 titles the practice set.</li>
<li>His answer to slide 44: (T) "The largest drug metabolizing enzyme family and within it, it has its own nomenclature ... the 3 families ... 1, 2, 3, and then within those there are isoforms."</li>
<li>The six study-aid headings (slide 60) give six lines:</li>
</ul>
</div>
<table class="reftab">
<tr><th>Heading (slide 60)</th><th>The line, from the deck</th></tr>
<tr><td>1. Nomenclature</td><td>Cyto (cell bound) + chrome (heme pigment) + P450, a CYP + CO complex absorbing light at 450 nm; CYP450 is the root name (slide 8). Family = first numeral, subfamily = letter, isoform = second numeral, allele = star number, as in CYP2D6*4 (slide 9, T).</td></tr>
<tr><td>2. Catalytic cycle components</td><td>CYP450, CYP450 reductase, NADPH as e<sup>&minus;</sup> donor, molecular O<sub>2</sub>; four steps from Fe<sup>3+</sup> complexing the drug to activated oxygen oxidising it (slide 12).</td></tr>
<tr><td>3. Expression</td><td>In the endoplasmic reticulum (ER), membrane-bound, a porphyrin with an Fe&ndash;cysteine catalytic site (slide 10); liver and small-intestine shares as pies (slides 14&ndash;15); 3A4 is 1/3 of liver CYP, present in liver, intestine and lungs, largely responsible for the 1st-pass effect (slide 30).</td></tr>
<tr><td>4. Families (CYPs 1, 2, 3)</td><td>&gt;18 families (&gt;40% homology), &gt;40 subfamilies (&gt;50% homology); families 1, 2, 3 metabolise 80% of clinical drugs (slide 19); 2C9 + 2C19 metabolise 25% (slide 24); 2D6 metabolises 21% of clinical drugs from 3% of liver CYP (slide 26); 3A4 metabolises 1/3 of drugs (slide 30).</td></tr>
<tr><td>5. Inducers/Inhibitors</td><td>1A2 induced by polycyclic aromatic hydrocarbons, PAHs (tobacco smoke), dioxins, omeprazole (slide 20); 2E1 by ethanol and ketones (slide 28); 2D6 shows minimal induction (slide 26); for 3A4 induction/inhibition are big issues, with the lists on slide 32 and the grapefruit juice (GFJ) table on slide 35.</td></tr>
<tr><td>6. Polymorphisms</td><td>1A2, 2B6, 2C9, 2C19, 2D6 and 2E1 are each flagged polymorphic (slides 20, 22, 24, 26, 28); the three that change dosing are 2C9, 2C19, 2D6 (slide 38, T); phenotypes UM, EM, IM, PM (slide 26); outcomes per the grid above.</td></tr>
</table>

<div class="gpt">
<h5>5. Polypharmacy (slide 45)</h5>
<ul>
<li>"In polypharmacy, it is preferable for a drug to be metabolically deactivated by several enzymes. Why?"</li>
<li>(T) "you're reducing drug-drug interactions, but you're also giving a chance, opportunity for drug to be ... inactivate just in case one of the metabolic pathways is ... shut down."</li>
<li>So: fewer drug-drug interactions (DDIs).</li>
<li>A reserve route when one enzyme is inhibited or absent, as in a PM.</li>
</ul>
</div>

<div class="gpt">
<h5>6. TRUE/FALSE, the profile is a PM phenotype (slide 46, picture)</h5>
<ul>
<li>A table headed Polymorphic enzyme, Decreased clearance, Adverse effects (overdosage), Reduced activation of coadministered prodrug, rows 2C9, 2C19, 2D6, 2A6.</li>
<li>TRUE: (T) "you see decreased drug clearance, reduced activation. That is a poor metabolizer phenotype."</li>
<li>Both headings are the PM row of the grid.</li>
<li>The 2D6 prodrug column holds tramadol and codeine.</li>
</ul>
</div>
{{fig:cyp_polymorphic_adr_table|Slide 46, the profile to classify: decreased clearance plus reduced prodrug activation reads as PM}}

<div class="gpt">
<h5>7. Tramadol to ODT under UM vs PM (slide 47)</h5>
<ul>
<li>The slide draws tramadol's aryl methyl ether becoming a phenol by 2D6 and calls ODT the major active metabolite.</li>
<li>So tramadol takes the prodrug row.</li>
<li>(T) "In ultra rapid metabolizer ... increased metabolite levels ... Poor metabolizer phenotypes ... those levels should be low."</li>
<li>The trap: (T) "Did I ask you about the parent drug?"</li>
<li>UM has less parent, PM more.</li>
</ul>
</div>
{{fig:cyp_tramadol_odt|Slide 47, tramadol to ODT by 2D6: a UM has more ODT and less tramadol, a PM the reverse}}

<div class="gpt">
<h5>8. Pollev-1 (slide 48, picture)</h5>
<ul>
<li>(T) The item read here was the Carla NAT2 question (poll box), set to "move you from thinking that these poor metabolizer phenotypes are only limited to CYPs ... you can have them in phase two enzymes as well."</li>
</ul>
</div>

<div class="gpt">
<h5>9. The three TRUE/FALSE items (slides 49&ndash;51)</h5>
<ul>
<li>(T) Added alongside: inhibition is faster than induction, "Induction, it takes time. The protein has to be expressed, whereas inhibition is going to be just binding to that receptor directly."</li>
</ul>
</div>
<table class="reftab">
<tr><th>Item (slide)</th><th>Answer</th><th>Reason</th></tr>
<tr><td>"Phases I &amp; II enzymes metabolize both endobiotics and xenobiotics." (49)</td><td>TRUE</td><td>(T) "phases 1 and 2 ... metabolize both ... It's not just CYPs that do that." (T) The endobiotic list he read from slide 5 (cholesterol, steroids, bile acids, vitamins, fatty acids) runs through the same enzymes as drugs.</td></tr>
<tr><td>"Enzyme induction is analogous to rapid metabolizer phenotype." (50)</td><td>TRUE</td><td>(T) "Enzyme induction means you are increasing the expression of that enzyme ... They lead to the same end result, more protein expression. It's just that one, we are born like that, the other one we are using ... an external stimuli." Induction is the UM row of the grid.</td></tr>
<tr><td>"Only phase I enzymes are inducible, can be inhibited, and exhibit polymorphism." (51)</td><td>FALSE</td><td>(T) "Both phases 1 and phase 2 can exhibit the same behavior. They can be induced, they can be inhibited, and they can exhibit ... genetic polymorphism." The NAT2 and thiopurine methyltransferase rows of slide 39 and Carla's NAT2 PM (slide 48) are the deck's phase 2 polymorphisms.</td></tr>
</table>

<div class="gpt">
<h5>10. Pollev-2 and Pollev-3 (slides 52&ndash;53, pictures)</h5>
<ul>
<li>Titles only.</li>
<li>(T) One he left, "you can answer this in your own free time"; the other, "Imipramine's indicated metabolism exemplifies", is benzylic carbon oxidation: "that carbon where you see the hydroxy group is directly attached to ... a benzene ring".</li>
</ul>
</div>

<div class="gpt">
<h5>11. Three phase 2 practice questions (slides 54&ndash;56)</h5>
<ul>
<li>Slide 54, diclofenac's metabolites: C, UGTs (UDP-glucuronosyl transferases).</li>
<li>(T) "this is an acyl glucuronide ... Why don't I choose [UDPGA, the cofactor]? It's a cofactor. That's not the enzyme."</li>
<li>Slide 55, electrophilic xenobiotic deactivation: E, GSTs (glutathione S-transferases).</li>
<li>(T) "GSTs go after ... electrophilic double bonds ... the epoxide ring ... these halogenated compounds."</li>
<li>Slide 56 (picture), the circled FGs: (T) circle by circle he named a methylating enzyme, STs (sulfotransferases) with UGTs, UGTs with amino-acid conjugation, GSTs, and UGTs with methyltransferases; a student added the amine's third route, N-acetylation, which Lecture 14 slide 30 prints (-NH<sub>2</sub>, N-acetyltransferases).</li>
<li>Which group takes which is Lecture 14 slides 29&ndash;30.</li>
</ul>
</div>

<div class="gpt">
<h5>12. Cases 1&ndash;3 (slides 57&ndash;59)</h5>
<ul>
<li>Each is one cell of the grid.</li>
<li>The third carries a conflict.</li>
</ul>
</div>
<table class="reftab">
<tr><th>Case (slide)</th><th>What the slide says</th><th>The metabolic reading</th></tr>
<tr><td>1. Meperidine (57)</td><td>Normeperidine, formed via 3A4/2B6, is half as potent an analgesic but approx. 3 times more potent as a convulsant; renal failure significantly increases its plasma t<sub>1/2</sub>; central nervous system (CNS) excitation tracks its plasma concentration; an end-stage renal disease patient on peritoneal dialysis had myoclonic contractions and a grand mal seizure.</td><td>(T) "That's the alteration of drug activity at play here. It's not similarly acting." The renal half is elimination (Lecture 15).</td></tr>
<tr><td>2. Clozapine (58)</td><td>A 1A2 &amp; 3A4 substrate. Rifampicin (inducer of 1A2 and 3A) plus isoniazid (general CYP inducer): psychotic exacerbation, lower serum clozapine, resolved by a higher dose. Ciprofloxacin (1A2 inhibitor) in place of rifampicin: level 60% above the previous stable level despite a lower dose; a fluoroquinolone 1A2 inhibitor gave an 80% increase.</td><td>(T) "rifampicin is an inducer of these same isoforms that are supposed to metabolize this ... similar to ... ultra rapid metabolizer phenotype. You also see symptom rebound." Inducer = UM cell for an active drug; inhibitor = PM cell, more exposure to the active parent.</td></tr>
<tr><td>3. Clopidogrel (59)</td><td>Requires transformation by 2C19 into an active metabolite; carriers of a reduced-function 2C19 allele have lower active-metabolite levels, diminished platelet inhibition, more major adverse cardiovascular events including stent thrombosis; the FDA black box warning recommends but does not mandate testing; about 3% (range 2&ndash;14%) are poor clopidogrel metabolisers, Asians more often than African Americans or Caucasians.</td><td>Prodrug-PM cell. (T) "requiring 2C19 for bioactivation to active drug ... and that failing." Conflict: he closed with "failing due to the 2C19 ... UM type"; the slide's reduced-function allele is the PM picture and slide 46 files reduced prodrug activation under PM, so an exam written from the slides keys PM.</td></tr>
</table>

<div class="ghook"><b>Memory hook</b> One rule fills the grid: more enzyme means more metabolite, so first ask what the metabolite is. Active drug, metabolite inactive: UM lowers effect, PM raises it. Prodrug, metabolite active: UM raises effect, PM lowers it. Induction sits with UM (slide 50). The three polymorphic isoforms all start with 2: 2C9, 2C19, 2D6.</div>

<div class="gtell"><b>Tell apart</b><ul>
<li>IM vs EM: in this course IM is the normal phenotype (the middle row of slides 41&ndash;42) and EM the fast one; the textbook uses EM as normal (point 1).</li>
<li>Active drug vs prodrug under the same phenotype: a UM lowers exposure to an active parent but raises exposure to a prodrug's active metabolite; a PM does the reverse (point 3 grid).</li>
<li>Parent vs metabolite in a stem: a UM has less parent and more metabolite, a PM more parent and less metabolite (point 7, tramadol).</li>
<li>Induction vs inhibition: induction is the UM row (slide 50) and takes time, the protein has to be expressed; inhibition is direct binding, the PM cell, more exposure to the active parent (points 9 and 12).</li>
<li>Reduced-function allele vs UM: the reduced-function 2C19 allele of slide 59 is the PM side, less active metabolite, no response (point 12).</li>
<li>A PM's metabolites: fewer, not elevated (poll item, point 3 PM row).</li>
<li>Phase 1 vs phase 2 polymorphism: NAT2 and thiopurine methyltransferase (slide 39) and Carla's NAT2 PM (slide 48) are phase 2, so "only phase I" is FALSE (slide 51, point 9).</li>
</ul></div>

<div class="gpoll"><b>Poll or practice item on this objective</b>
<ul>
<li>Pollev-1 (slide 48): "Carla is a NAT2 poor metabolizer phenotype. She has ingested a narrow therapeutic index drug "T" (a NAT2 substrate). What is the most likely drug "T" outcome?"</li>
<li>Elevated systemic "T" metabolites: FALSE, a PM makes fewer (point 3, PM row).</li>
<li>High adverse effects of drug "T": TRUE, an active drug in a PM means increased exposure, and the index is narrow (point 3).</li>
<li>Rapid metabolism of drug "T": FALSE, the UM row.</li>
<li>No drug "T" toxic effects at all: FALSE, (T) "If the drug is toxic, you'll see ... toxic effects."</li>
<li>None of the above: FALSE.</li>
<li>Answer: high adverse effects of drug "T"; (T) "less metabolism. Period."</li>
</ul>
</div>

<div class="gask"><b>How he will ask it, and how to answer</b>
<ul><li>TRUE/FALSE: "Only phase I enzymes are inducible, can be inhibited, and exhibit polymorphism" (slide 51).</li><li>A scenario with an abstract drug and a phenotype: "Carla is a NAT2 poor metabolizer phenotype ... What is the most likely drug "T" outcome?" (slide 48).</li><li>A scheme or profile plus a phenotype: "Given tramadol's biotransformation below, how would polymorphism (UM vs. PM) affect ODT levels?" (slide 47); a case ending "Explain" (slides 57&ndash;59).</li></ul>
<ul><li>Step 1 &mdash; find the phenotype word (PM, UM, induction, inhibition, reduced-function allele) and convert it to enzyme activity down or up.</li><li>Step 2 &mdash; decide whether the stem's drug is active as given or a prodrug, then whether it asks about the parent or the metabolite; (T) "Did I ask you about the parent drug?" The effect follows whichever species is active.</li><li>Step 3 &mdash; the traps: "elevated metabolites" for a PM (fewer, not more); a cofactor (UDPGA) offered as the enzyme (slide 54); "only phase I" or "same in all humans" absolutes, FALSE because NAT2 is a polymorphic phase 2 enzyme (slides 39, 48, 51).</li></ul>
</div>
</section>

<section class="gobj" id="gobj-4">
<h3>Lecture 14 (MCMet-9_16_2026.pdf) &mdash; Objective 1 of 2: what each functional group does under metabolism</h3>
<div class="gbar"><span>OBJECTIVE (his slide 4)</span><b>Illustrate select FG biotransformations</b><i>slides 5&ndash;31</i></div>

<h4>Read this first &mdash; the words on these slides</h4>
<dl class="gwords">
<dt>FG; CYP</dt><dd>Functional group (slides 5&ndash;30 are "FGs and DM-1" to "-26"); cytochrome P450, Lecture 13.</dd>
<dt>CE, carboxylesterase</dt><dd>The hydrolase named for amides (slide 8), carbonates (14), carbamates (15), esters (16); (T) amidases "are part of this overall group."</dd>
<dt>EH, epoxide hydrolase</dt><dd>Opens an epoxide to a diol (slides 6, 7, 20).</dd>
<dt>Oxidative deamination</dt><dd>A 1&deg; amine becoming an aldehyde (slide 10); (T) by "monoamine oxidase" (MAO).</dd>
<dt>N-, O-, S-dealkylation</dt><dd>Removal of a methyl or ethyl from nitrogen (slide 10), oxygen (17) or sulfur (19); slides 17 and 19 draw the methyl leaving as formaldehyde; (T) CYPs are doing that.</dd>
<dt>ALDH, AKR</dt><dd>Aldehyde dehydrogenases oxidise aldehydes to acids; aldo-keto reductases reduce carbonyls to alcohols (slide 12).</dd>
<dt>HHC</dt><dd>Halogenated hydrocarbon (HC), slide 21.</dd>
<dt>UGT, ST/SULT, NAT, MT, GST</dt><dd>The phase 2 enzymes of slides 29&ndash;30: UDP-glucuronosyl transferases, sulfotransferases, N-acetyltransferases, methyltransferases, glutathione S-transferases.</dd>
<dt>XO, DPD, NQO1</dt><dd>Xanthine oxidase, purines (slide 24); dihydropyrimidine dehydrogenase, pyrimidines (25); NADPH quinone oxidoreductase-1, quinones (26).</dd>
<dt>Acyl synthetases</dt><dd>The amino-acid conjugating enzymes for -CO<sub>2</sub>H, printed "Acylsynthatases" on slide 29 (a typo).</dd>
<dt>Phase 1, phase 2</dt><dd>Slide 31's split: oxidation, reduction, hydrolysis against glucuronidation, sulfation, AA (amino acid) conjugation, glutathione, acetylation, methylation.</dd>
</dl>

<h4>The points, in slide order</h4>
<div class="gpt">
<h5>1. The map, one row per group (slides 5&ndash;28)</h5>
<ul>
<li>Parenthesised compounds are drawn on that slide.</li>
</ul>
</div>
<table class="reftab">
<tr><th>Functional group</th><th>What it undergoes</th><th>Enzyme</th><th>Slide</th></tr>
<tr><td>Alkanes</td><td>Mostly metabolically stable in vivo, excreted unchanged; exceptions are CYP oxidations, (T) "mostly ... these omega oxidation types" on long chains.</td><td>CYP</td><td>5</td></tr>
<tr><td>Alkenes</td><td>Mostly stable, excreted unchanged; exceptions are CYP oxidation (epoxidation) followed by EH opening to a diol (MMB022, a synthetic cannabinoid).</td><td>CYP, then EH</td><td>6</td></tr>
<tr><td>Aromatic HCs</td><td>Benzene to arene oxide; the oxide rearranges non-enzymatically to phenol, hydroxylated again to hydroquinone; or EH opens the oxide to catechol.</td><td>2E1; EH</td><td>7</td></tr>
<tr><td>Amides</td><td>CE hydrolysis to acid + amine (a cyclic amide opens to an amino acid); more stable in vivo than esters. Slide 9: specific amidases; (T) the beta-lactam ring of antibiotics is hydrolysed by "a lactamase, a beta lactamase", not to be called a CE.</td><td>CE (amidases); beta-lactamase (T)</td><td>8&ndash;9</td></tr>
<tr><td>Amines</td><td>1&deg;: oxidative deamination to an aldehyde ((T) MAO, then ALDH to the acid). 2&deg; and 3&deg; N carrying methyl/ethyl: N-dealkylation, 3&deg; to 2&deg; to 1&deg; ((T) CYPs). Phase 2 as well (slide 11): (T) "MT metabolism ... UGT metabolism" and N-acetylation.</td><td>MAO (T); CYP; UGT, MT, NAT</td><td>10&ndash;11</td></tr>
<tr><td>Carbonyls</td><td>Aldehydes: oxidation to the acid or reduction to the 1&deg; alcohol; ketones: reduction to 2&deg; alcohols. (T) "if [the acid] is the product, then aldehyde dehydrogenase. If [the alcohol] is the product, then a keto reductase."</td><td>ALDH; AKR</td><td>12</td></tr>
<tr><td>Carboxylic acids</td><td>"A variety": beta-C-oxidation; amino-acid conjugation with glutamine or glycine; acyl glucuronide with glucuronic acid. (T) "let's not focus on [beta oxidation] for now. Let's focus on ... amino acid conjugation ... acyl synthetases ... Or you could have your UGTs ... acyl glucuronides."</td><td>Acyl synthetases; UGTs</td><td>13</td></tr>
<tr><td>Carbonates</td><td>CE hydrolysis with loss of CO<sub>2</sub>, leaving an alcohol (Molecule 427).</td><td>CE</td><td>14</td></tr>
<tr><td>Carbamates</td><td>CE hydrolysis "to give amines and ………" (the slide leaves the blank; the drawing loses CO<sub>2</sub> and gives an amine plus a phenol; irinotecan, spelt Irinotican there). (T) hydroxy plus amine.</td><td>CE</td><td>15</td></tr>
<tr><td>Esters</td><td>CE hydrolysis to acid + alcohol; a lactone (cyclic ester) opens to a hydroxy acid.</td><td>CE (esterases)</td><td>16</td></tr>
<tr><td>Ethers</td><td>O-dealkylation, mostly methyl and ethyl, exposing the OH (anisole to phenol + formaldehyde). (T) "rare instances of ethyl group ... even more rare instances of, say, isopropyl, butyl."</td><td>CYP (T)</td><td>17</td></tr>
<tr><td>Thioethers</td><td>S-oxidation to the sulfoxide, then to the sulfone as major product (methiocarb); S-dealkylation exposing SH (6-methylthiopurine to 6-thiopurine + formaldehyde).</td><td>FMO &amp; CYP450 (as printed); CYP</td><td>18&ndash;19</td></tr>
<tr><td>Epoxides</td><td>Hydrolysed to the diol; also conjugated by phase 2 GSTs to a hydroxy-SG adduct (styrene oxide; SG is glutathione attached through its sulfur).</td><td>EH; GST</td><td>20</td></tr>
<tr><td>Halogenated HCs</td><td>Very lipophilic, not readily metabolised to hydrophilic metabolites; long t<sub>1/2</sub> (half-life) raises the hepatotoxicity potential of some. Halothane to trifluoroacetyl chloride (initiator of halothane hepatitis) to trifluoroacetic acid; (T) a dehalogenation, "we arrive at an acid."</td><td>CYP450</td><td>21</td></tr>
<tr><td>Hydroxy</td><td>1&deg; to aldehyde to acid; 2&deg; to ketone; 3&deg; unchanged; phase 2 to sulfate or glucuronide. Phenolic OH: phase 2 glucuronidation and sulfation (APAP, (T) acetaminophen).</td><td>(T) ADH, ALDH; STs, UGTs</td><td>22&ndash;23</td></tr>
<tr><td>Purines</td><td>Oxidised to uric acid (6-mercaptopurine to 6-thiouric acid); the enzyme is inhibited by allopurinol (anti-gout).</td><td>XO</td><td>24</td></tr>
<tr><td>Pyrimidines</td><td>Deactivated by reduction of the ring double bond (5-FU, (T) 5-fluorouracil, to dihydrouracil to F-beta-alanine, as labelled); DPD is polymorphic, some patients deficient; &gt;80% of 5-FU is inactivated by DPD.</td><td>DPD</td><td>25</td></tr>
<tr><td>Quinones</td><td>Reduced to the hydroquinone (deoxynyboquinone, DNQ, to an inactive hydroquinone); NQO1 is overexpressed in many cancers, inducible and polymorphic.</td><td>NQO1</td><td>26</td></tr>
<tr><td>Phosphates</td><td>Phosphate esters hydrolysed to the alcohol + phosphoric acid (prednisolone phosphate to prednisolone); others: fosphenytoin (prodrug), ATP, DNA. (T) "the removal of ... that phosphate group to give you an alcohol. This implies that phosphatases are at play"; of fosphenytoin, "It's a pro-drug. So we can make water soluble ... pro-drugs."</td><td>Phosphatases</td><td>27</td></tr>
<tr><td>Sulfates</td><td>Sulfate esters hydrolysed to the alcohol (estrone sulfate to estrone); (T) the enzyme repeats the group's name, "very easy to remember."</td><td>Sulfatases</td><td>28</td></tr>
</table>

<div class="gpt">
<h5>2. The stable groups and benzene (slides 5&ndash;7)</h5>
<ul>
<li>Alkanes and alkenes both open "mostly metabolically stable in vivo and excreted unchanged".</li>
<li>The alkene exception is (T) "CYP450 can give you these epoxides ... Epoxide hydrolase can open this to give you a diol ... the GSTs can also open up", two enzymes because "the complement of [EH] is small, is saturable."</li>
<li>Benzene (slide 7): (T) "Most of the time we stop here [phenol]"; catechol means "the epoxide hydrolase came in."</li>
</ul>
</div>
{{fig:fgm_aromatic|Slide 7, benzene: 2E1 to arene oxide, then phenol and hydroquinone, or catechol via EH}}

<div class="gpt">
<h5>3. Four groups, one enzyme (slides 8&ndash;9, 14&ndash;16)</h5>
<ul>
<li>Amides, carbonates, carbamates and esters all go to CE.</li>
<li>Amides are "more stable in vivo than esters" (slide 8).</li>
<li>(T) "if you're starting with a carbonate, then you're losing carbon dioxide ... [carbamates] to give you hydroxy and amine ... even if it is a lactone, which is a cyclic ester."</li>
<li>Slide 9's specific amidase: (T) the beta-lactam ring of antibiotics, "don't call this a CE enzyme ... Call it a lactamase, a beta lactamase."</li>
</ul>
</div>

<div class="gpt">
<h5>4. Amines: which nitrogen, which reaction (slides 10&ndash;11)</h5>
<table class="reftab">
<tr><th>Which nitrogen</th><th>1&deg; amine</th><th>2&deg;/3&deg; N-methyl or N-ethyl amine</th></tr>
<tr><td>Slide 10 keys</td><td>oxidative deamination</td><td>N-dealkylation</td></tr>
<tr><td>An exam written from the slide keys</td><td>deamination to 1&deg;</td><td>3&deg; to 2&deg; to 1&deg; is CYP N-dealkylation</td></tr>
</table>
<ul>
<li>(T) He widened the first: a tertiary amine "also can give you this outcome [the aldehyde]. So don't look for simply plain NH<sub>2</sub>."</li>
</ul>
</div>
{{fig:fgm_amine|Slide 10, amines: 1&deg; deamination to the aldehyde, and N-dealkylation stepping 3&deg; to 2&deg; to 1&deg;}}



<div class="gpt">
<h5>5. Ethers, thioethers, epoxides, HHCs (slides 17&ndash;21)</h5>
<ul>
<li>O-dealkylation: (T) "you mostly see the methyl group being removed. You start seeing rare instances of ethyl group. And then even more rare instances of, say, isopropyl, butyl."</li>
<li>Sulfur: FMO &amp; CYP450 on both steps, (T) "a sulfoxide and then this same enzyme can complete the oxidation to give you a sulfone."</li>
<li>The epoxide has a phase 1 route and a phase 2 route, EH and GST (slide 20).</li>
<li>The HHC's hazard is its stability (slide 21).</li>
</ul>
</div>

<div class="gpt">
<h5>6. Hydroxy groups by degree (slides 22&ndash;23)</h5>
<ul>
<li>(T) "Primary alcohols ... alcohol dehydrogenase ... that aldehyde, and then ... aldehyde dehydrogenase to give you a carboxylic acid. Secondary alcohols can be metabolized to ketones ... Tertiary alcohols ... cannot undergo metabolism because ... this carbon can only be bonded to ... 4 things."</li>
<li>Phase 2: (T) "you primarily see sulfation and glucuronidation ... alcohol sticking out by itself, it won't undergo methylation".</li>
<li>Slide 23's phenol is APAP.</li>
</ul>
</div>
{{fig:fgm_hydroxy|Slide 22, hydroxy groups: 1&deg; to aldehyde to acid, 2&deg; to ketone, 3&deg; unchanged, phase 2 sulfate or glucuronide}}

<div class="gpt">
<h5>7. Purines, pyrimidines, quinones: one enzyme each (slides 24&ndash;26)</h5>
<table class="reftab">
<tr><th>Enzyme</th><th>Reaction</th><th>Note</th></tr>
<tr><td>XO, purine</td><td>Oxidises the purine, (T) "by inserting carbonyls".</td><td>Allopurinol blocks it.</td></tr>
<tr><td>DPD, pyrimidine</td><td>Reduces the pyrimidine, (T) "reduces it to a single bond".</td><td>With &gt;80% of 5-FU inactivated by DPD, (T) "in patients who are deficient ... outright toxicity from 5 fluorouracil ... they get genotyped."</td></tr>
<tr><td>NQO1, quinone</td><td>Reduces the quinone's two carbonyls to hydroxy groups.</td><td>Inducible, polymorphic, overexpressed in cancers (slide 26).</td></tr>
</table>
</div>
{{fig:fgm_pyrimidine|Slide 25, DPD reduces 5-FU to dihydrouracil and on to F-beta-alanine; more than 80% of the dose goes this way}}



<div class="gpt">
<h5>8. Which handle goes to which phase 2 enzyme (slides 29&ndash;30)</h5>
<ul>
<li>One table across two slides, as printed.</li>
<li>Slide 30 leaves the cofactor column unheaded.</li>
</ul>
</div>
<table class="reftab">
<tr><th>FGs</th><th>Enzyme</th><th>Co-factor(s)</th><th>Conjugates</th></tr>
<tr><td>-OH; -CO<sub>2</sub>H; -NH<sub>2</sub>; -SH</td><td>UDP-Glucuronosyl transferases (UGTs)</td><td>Uridine-5'-diphospho-D-glucuronic Acid (UDPGA)</td><td>Glucuronide</td></tr>
<tr><td>-OH</td><td>Sulfotransferases (STs/SULTs)</td><td>3'-Phosphoadenosine-5'-phosphosulfate (PAPS)</td><td>Sulfate</td></tr>
<tr><td>-CO<sub>2</sub>H</td><td>Acylsynthatases (as printed on slide 29; acyl synthetases)</td><td>Acetyl Co-A &amp; an Amino Acid (e.g., Glycine, Glutamine)</td><td>Amino Acid (Glycine/Glutamine)</td></tr>
<tr><td>R-X; Epoxide</td><td>Glutathione S-transferases</td><td>Glutathione (GSH)</td><td>Glutathione-S</td></tr>
<tr><td>-NH<sub>2</sub></td><td>N-Acetyltransferases</td><td>Acetyl Co-enzyme A</td><td>N-Acetylated</td></tr>
<tr><td>-OH; -NH<sub>2</sub>; -SH</td><td>Methyltransferases</td><td>S-Adenosyl methionine (SAM)</td><td>Methylated</td></tr>
</table>
<div class="gpt">
<ul>
<li>The rule the table encodes: UGTs take four handles (-OH, -CO<sub>2</sub>H, -NH<sub>2</sub>, -SH).</li>
<li>Methyltransferases three (-OH, -NH<sub>2</sub>, -SH).</li>
<li>Sulfotransferases only -OH.</li>
<li>N-acetyltransferases only -NH<sub>2</sub>.</li>
<li>Acyl synthetases only -CO<sub>2</sub>H.</li>
<li>GSTs take the opposite kind, R-X and epoxides, which are electrophiles, because glutathione is itself the nucleophile: its sulfur ends up on the electrophilic carbon (the SG adduct of slide 20).</li>
<li>(T) "What enzyme ... deactivates electrophilic carbons? It's glutathione S-transferases. What is its cofactor, glutathione."</li>
<li>On -OH under methyltransferases: (T) "like the catechol, this can be methylated, specialized enzyme ... most of the methylations occur primarily ... on amines and thiols".</li>
<li>The slide keeps -OH in the row, so a catechol in a stem is methylated, a plain alcohol sulfated or glucuronidated.</li>
<li>(T) "These two [acetylated and methylated] give you lipophilic metabolites ... All the others, phase 2, give you hydrophilic metabolites."</li>
</ul>
</div>

<div class="gpt">
<h5>9. Study aid (slide 31)</h5>
<table class="reftab">
<tr><th>Phase I (CYP &amp; Non-CYP)</th><th>Phase II</th></tr>
<tr><td>oxidation, reduction, hydrolysis</td><td>glucuronidation, sulfation, AA conjugation, glutathione, acetylation, methylation</td></tr>
</table>
<ul>
<li>(T) "if the question is, methylation is part of what phase in terms of metabolism, you should be able to tell me that."</li>
</ul>
</div>

<div class="ghook"><b>Memory hook</b> The enzyme carries the group's name, in slide order: amide, amidase (CE); ester, esterase (CE); epoxide, epoxide hydrolase; pyrimidine, dihydropyrimidine dehydrogenase; quinone, quinone oxidoreductase (NQO1); phosphate, phosphatase; sulfate, sulfatase. The one exception is the purine, whose enzyme is named for xanthine, xanthine oxidase (slide 24). The pairs that swap: XO oxidises (adds carbonyls, slide 24), DPD reduces (double bond to single, slide 25); a carbonate leaves only alcohols, a carbamate an amine as well (slides 14&ndash;15). The cofactor carries what ends up on the drug.</div>

<div class="gtell"><b>Tell apart</b><ul>
<li>Amidase (CE) vs beta-lactamase: the beta-lactam ring of antibiotics is opened by a lactamase, not to be called a CE (point 3).</li>
<li>1&deg; vs 3&deg; amine: slide 10 keys oxidative deamination (to the aldehyde) to 1&deg;; N-dealkylation stepping 3&deg; to 2&deg; to 1&deg; is CYP (point 4).</li>
<li>ALDH vs AKR on a carbonyl: acid product, aldehyde dehydrogenase; alcohol product, keto reductase (point 1, carbonyls).</li>
<li>Sulfotransferase vs sulfatase: STs add a sulfate to -OH with PAPS, phase 2 (point 8); sulfatases hydrolyse a sulfate ester back to the alcohol (point 1, sulfates).</li>
<li>Catechol vs plain alcohol under phase 2: the catechol is methylated; a plain alcohol is sulfated or glucuronidated, not methylated (point 8).</li>
<li>3&deg; alcohol vs 1&deg; and 2&deg;: the 3&deg; alcohol is unchanged (slide 22); 1&deg; goes to aldehyde then acid, 2&deg; to ketone (point 6).</li>
<li>Cofactor vs enzyme: UDPGA is the cofactor, UGT the enzyme (Lecture 13 slide 54); the cofactor names the conjugate (UDPGA glucuronide, PAPS sulfate, SAM methyl).</li>
<li>EH vs GST on an epoxide: EH opens it to the diol, phase 1; GST attaches glutathione as the SG adduct, phase 2 (slide 20, point 5).</li>
</ul></div>

<div class="gpoll"><b>Poll or practice item on this objective</b>
<ul>
<li>His PollEv item (the deck's Pollev-1, slide 40, is objective 2's): "From the answer list, only ________ are part of phase II reactions."</li>
<li>monoamine oxidations: FALSE, the 1&deg; amine deamination of slide 10 is phase 1 oxidation.</li>
<li>amide hydrolysis: FALSE, CE hydrolysis, phase 1 (slide 8).</li>
<li>N-acetylations: TRUE, the N-acetyltransferase row of slide 30.</li>
<li>ester hydrolysis: FALSE, CE hydrolysis, phase 1 (slide 16).</li>
<li>dehalogenations: FALSE, the CYP450 step of slide 21, phase 1.</li>
<li>Answer: N-acetylations.</li>
</ul>
</div>

<div class="gask"><b>How he will ask it, and how to answer</b>
<ul><li>A scheme with the enzyme blanked: "What two enzymes can facilitate the reaction below?" (epoxide, slide 20; sulfoxide, slide 18); "What enzyme is involved in the bioconversion below. What co-factor is involved?"</li><li>"What phase of metabolism is the reaction below? Name the enzyme and metabolic process."</li><li>"Identify all the phase II reactions the circled FGs can undergo."; "List all phase II enzyme co-factors?"</li></ul>
<ul><li>Step 1 &mdash; name the group in the box or circle before reading the options; for phosphate, sulfate, epoxide, purine, pyrimidine and quinone the group fixes the enzyme.</li><li>Step 2 &mdash; read what changed: a bond cut by water is hydrolysis, oxygen gained is oxidation, a double bond or carbonyl gone is reduction (phase 1); an added piece from the cofactor column is phase 2, and the cofactor names the conjugate (UDPGA glucuronide, PAPS sulfate, SAM methyl).</li><li>Step 3 &mdash; the traps: a cofactor listed as the enzyme (UDPGA for UGT, Lecture 13 slide 54); an oxidation or hydrolysis among phase 2 options; a 3&deg; alcohol offered as oxidisable (unchanged, slide 22); methylation of a plain alcohol (catechol only).</li></ul>
</div>
</section>

<section class="gobj" id="gobj-5">
<h3>Lecture 14 (MCMet-9_16_2026.pdf) &mdash; Objective 2 of 2: the factors that change how a drug is metabolised</h3>
<div class="gbar"><span>OBJECTIVE (his slide 4)</span><b>Explain factors influencing DM</b><i>slides 32&ndash;67</i></div>

<h4>Read this first &mdash; the words on these slides</h4>
<dl class="gwords">
<dt>Intrinsic factor</dt><dd>An inside-the-body factor in drug metabolism (DM): a property of the parent drug (PD) or of the patient's physiology (slides 32&ndash;33).</dd>
<dt>Extrinsic factor</dt><dd>Exposure to xenobiotics from outside; the key considerations are induction- and inhibition-related drug&ndash;drug interactions (DDIs) (slides 51&ndash;52).</dd>
<dt>DME, DME co-factor</dt><dd>Drug-metabolising enzyme and the co-substrate it consumes (UDPGA, PAPS, acetyl-CoA, glutathione, SAM: slides 29&ndash;30); both are physiological factors (slides 33, 41&ndash;42).</dd>
<dt>Pre-systemic (first-pass) metabolism</dt><dd>Metabolism of an oral (PO) dose in the gut and on the first pass through the liver; it diminishes PD bioavailability (slide 35).</dd>
<dt>ABC transporters</dt><dd>ATP Binding Cassette, mostly efflux: P-gp or MDR1 (Multi-Drug Resistance) and MRPs (MRP1&ndash;4) (slide 37).</dd>
<dt>SLC transporters</dt><dd>Solute Carrier influx/efflux: OATs (Organic Anion Transporters) and OCTs (Organic Cation Transporters) (slide 37).</dd>
<dt>Serum protein binding</dt><dd>Weak acids bind albumin, weak bases bind &alpha;-1 acid glycoprotein; only the free (unbound) drug is metabolised (slide 38).</dd>
<dt>Tissue binding</dt><dd>Reversible or covalent, non-specific binding to tissue proteins or lipids; raises total (free + bound) tissue concentration (slide 39).</dd>
<dt>Polypharmacy</dt><dd>Many drugs at once; an age factor (slide 44) and an elderly factor (slide 47).</dd>
<dt>Sexual dimorphism</dt><dd>Male&ndash;female difference in the DM of some drugs (slide 48, a figure; slide 67: "Gender (Sex hormones)").</dd>
<dt>Genetic polymorphism</dt><dd>Inherited DME variation within and across species; CYP2D6 phenotypes: poor (PM), intermediate (IM), ultra-rapid (UM) and extensive (EM) metabolisers (slide 49).</dd>
<dt>Enzyme induction</dt><dd>&uarr; enzyme levels (&uarr; mRNA translation) and activity, &darr; protein degradation; net &darr; drug blood levels and &darr; DOA (duration of action) (slide 53).</dd>
<dt>Enzyme inhibition</dt><dd>Reversible (lasts 2&ndash;3 days) or irreversible (enzyme complexed, must be regenerated); net &uarr; drug levels and DOA (slide 59). Mechanism-based (slide 63): (T) the enzyme itself makes the species that ties it up.</dd>
<dt>Tyramine</dt><dd>A dietary amine (smoked/aged/pickled meats, fish, sauerkraut, cheese) that releases epinephrine (Epi) and norepinephrine (Norepi); with a monoamine oxidase inhibitor (MAOI), hypertensive crisis (slide 61).</dd>
</dl>

<h4>The points, in slide order</h4>
<div class="gpt">
<h5>1. The split (slides 32&ndash;33, 51&ndash;52, 67)</h5>
<ul>
<li>Slide 33 divides intrinsic factors into parent-drug and physiological.</li>
<li>Slides 51&ndash;52 define extrinsic factors as xenobiotic exposure.</li>
<li>Slide 67 repeats the three groups.</li>
<li>Physicochemical (PC) properties carry an asterisk.</li>
<li>(T) "hold on to these 4 factors in terms of just the parent drug ... 1, the dose, 2, route, 3, absorption, 4, distribution."</li>
</ul>
</div>
<table class="reftab">
<tr><th>Group</th><th>Factors, as printed</th></tr>
<tr><td>Intrinsic &mdash; Parent Drug (PD) (slide 33)</td><td>Dose (overdosing); Route of Administration; Absorption; Distribution (protein or tissue binding); *Physicochemical (PC) properties</td></tr>
<tr><td>Intrinsic &mdash; Physiological (slide 33)</td><td>DME presence; DME co-factors; Disease; Age; Gender; Genetics</td></tr>
<tr><td>Extrinsic &mdash; exposure to xenobiotics (slides 51&ndash;52)</td><td>Drug molecules + non-contaminants: ethanol, tobacco smoke, charred foods, herbals, food preservatives, supplements; industrial chemicals or pollutants in air, food, diet, H<sub>2</sub>O, devices: herbicides, insecticides. Key considerations: enzyme induction and inhibition related DDIs</td></tr>
</table>

<div class="gpt">
<h5>2. Dose (slide 34)</h5>
<ul>
<li>Overdosing can overwhelm DME capacity, leading to toxicity.</li>
<li>Example: APAP (acetaminophen).</li>
<li>(T) "you shut down those pathways. And now the less important pathways for metabolism become prominent," giving "electrophilic intermediates" and "fulminant hepatotoxicity."</li>
<li>(T) Daily limit "3 to 4 g".</li>
</ul>
</div>

<div class="gpt">
<h5>3. Route (slide 35)</h5>
<ul>
<li>The oral (PO) route is susceptible to pre-systemic metabolism in (i) the gut (stomach, intestine mucosa and microbiome) and (ii) the first time the drug passes through the liver.</li>
<li>The overall impact is diminished PD bioavailability.</li>
</ul>
</div>

<div class="gpt">
<h5>4. Drugs with a significant first-pass effect (slide 36 figure)</h5>
<ul>
<li>Three labelled structures under one bullet, "Examples of Drugs with significant 1st pass effect".</li>
<li>Buccal is the slide's word, sublingual his; the slide's is keyed.</li>
</ul>
</div>
<table class="reftab">
<tr><th>Slide 36 figure</th><th>Isoproterenol</th><th>Lidocaine</th><th>Nitroglycerin</th></tr>
<tr><td>Enzymes</td><td>COMT (catechol-O-methyltransferase) and sulfation</td><td>CYPs and carboxylesterase (CE)</td><td>Glutathione S-transferase (GST)</td></tr>
<tr><td>Printed route note</td><td>&nbsp;</td><td>"PO ineffective"</td><td>"Bucal Admin."</td></tr>
<tr><td>Transcript</td><td>(T) "You can't give it orally."</td><td>(T) the CYPs "cleave those ethyl groups," CE "cleaves the amide," so it is injected</td><td>(T) "under the tongue ... You're bypassing the liver."</td></tr>
</table>
{{fig:fa_route|Slide 36 figure: isoproterenol (COMT/sulfation), lidocaine (CYPs/CE, PO ineffective) and nitroglycerin (GST, buccal administration)}}

<div class="gpt">
<h5>5. Absorption: transporters (slide 37)</h5>
<ul>
<li>ABC (mostly efflux): P-gp or MDR1, MRP1&ndash;4.</li>
<li>SLC influx/efflux: OATs, OCTs.</li>
<li>Induction or inhibition of transporters can affect the drug amounts reaching the liver for metabolism.</li>
<li>(T) "It doesn't matter whether these are P-gp or solute carrier ... they have a say in how much of these drugs get metabolised."</li>
</ul>
</div>

<div class="gpt">
<h5>6. Distribution (slides 38&ndash;40)</h5>
<ul>
<li>Slide 40 is PollEv-1, in the poll box.</li>
</ul>
</div>
<table class="reftab">
<tr><th>Distribution</th><th>Protein binding (slide 38)</th><th>Tissue binding (slide 39)</th></tr>
<tr><td>What binds</td><td>Weak acids bind albumin, weak bases bind &alpha;-1 acid glycoproteins</td><td>Reversible/covalent, non-specific binding to proteins or lipids</td></tr>
<tr><td>Effect</td><td>&darr; metabolism and increases drug t<sub>1/2</sub></td><td>Increases total drug concentration (free + bound) in the tissue</td></tr>
<tr><td>Examples</td><td>Warfarin, NSAIDs (non-steroidal anti-inflammatory drugs), sulfonamides</td><td>&nbsp;</td></tr>
<tr><td>What is metabolised</td><td>Only the free or unbound drug is available for metabolism</td><td>Only the free drug is metabolised</td></tr>
</table>

<div class="gpt">
<h5>7. DME presence and co-factors (slides 41&ndash;42, both pictures)</h5>
<ul>
<li>Slide 41 is a tissue expression table.</li>
<li>(T) The liver has "a lot of enzymes ... more so than in the GI tract ... kidney," while "skeletal muscle, lack of drug metabolising enzymes ... Otherwise, no metabolism occurs."</li>
<li>Slide 42 shows the phase II co-factors of slides 29&ndash;30.</li>
<li>(T) "If it is not there ... UGTs do not work."</li>
</ul>
</div>

<div class="gpt">
<h5>8. Disease (slide 43)</h5>
<ul>
<li>Table verbatim.</li>
<li>Notes on the slide: effects on DM are not always predictable.</li>
<li>Key if the drug must be metabolised by the liver before elimination.</li>
<li>(T) Liver disease: "Most of what we see is a decrease ... In some instances it might be the other way around."</li>
<li>(T) Thyroid: "you're also elevating enzyme levels."</li>
</ul>
</div>
<table class="reftab">
<tr><th>Diseases (slide 43)</th><th>Effect on DM</th></tr>
<tr><td>Liver disease</td><td>Decreased DME activity</td></tr>
<tr><td>Cardiac disease (blood flow)</td><td>Decreased DME activity due to reduced liver blood flow</td></tr>
<tr><td>Inflammation/Infections</td><td>Decreased DME activity</td></tr>
<tr><td>Thyroid disease (&uarr; protein synthesis in hyperthyroidism)</td><td>Elevated DME activity</td></tr>
</table>

<div class="gpt">
<h5>9. Age (slide 44)</h5>
<ul>
<li>DM is impacted by hepatic and extra-hepatic enzyme maturation, hepatic blood flow and filtration rates, liver weight, and polypharmacy.</li>
</ul>
</div>

<div class="gpt">
<h5>10. Fetus (slide 45)</h5>
<ul>
<li>(T) "3A7, not 3A4, 3A7."</li>
</ul>
</div>

<div class="gpt">
<h5>11. Neonates (slide 46)</h5>
<ul>
<li>(T) "will turn the babies gray ... this UGT complement is lacking."</li>
<li>The slide prints "Low CPY219 - avoid Omeprazole".</li>
<li>(T) he corrected it: "2C19. OK, so correct that, please."</li>
<li>Low CYP2C19 is keyed.</li>
</ul>
</div>

<div class="gpt">
<h5>12. Elderly (slide 47)</h5>
<ul>
<li>(T) "ramp up the dose as you go and then keep tracking them."</li>
</ul>
</div>
<table class="reftab">
<tr><th>Age group</th><th>Fetus (slide 45)</th><th>Neonates (slide 46)</th><th>Elderly (slide 47)</th></tr>
<tr><td>Enzymes</td><td>CYP450s form very early in gestation, followed by phase II; common DMEs CYP1A, CYP3A7 and SULTs</td><td>Low UGT (UGT1A1); low CYP2C19</td><td>Less metabolic activity (&darr; liver mass and ER, endoplasmic reticulum)</td></tr>
<tr><td>Other changes</td><td>Capacity is greater for phase I than phase II</td><td>&nbsp;</td><td>Changed body mass/composition; &darr; excretion (&darr; liver blood flow, &darr; renal filtration rates); polypharmacy</td></tr>
<tr><td>Consequence</td><td>Susceptible to toxicity from xenobiotics via the mother</td><td>Low conjugation of bilirubin (a hemoglobin metabolite) leads to jaundice or hyperbilirubinemia</td><td>Slow metabolism = toxicity susceptibility</td></tr>
<tr><td>Drug rule</td><td>&nbsp;</td><td>Avoid drugs requiring significant glucuronidation for elimination, e.g. chloramphenicol (gray baby syndrome); avoid omeprazole</td><td>"Start low &amp; go slow"</td></tr>
</table>

<div class="gpt">
<h5>13. Gender (slide 48)</h5>
<ul>
<li>A figure (dimorphism table), no bullet text.</li>
<li>(T) Causes: "growth hormones ... sex hormones ... genetics"; caffeine shows "ramped up metabolism in males more so than in females," dapsone "equal"; "This dimorphism you see is drug specific."</li>
</ul>
</div>

<div class="gpt">
<h5>14. Genetic polymorphisms (slide 49)</h5>
<ul>
<li>They dictate DM differences within and across species and influence enzyme activity and therapeutic efficacy.</li>
<li>Printed key polymorphic CYPs: 2A6, 2C9, 2C19, 2D6.</li>
<li>(T) "Please take out 2A6 here ... those are the ones I'm asking you to remember," so 2C9, 2C19 and 2D6 are keyed; 2A6 stays printed.</li>
<li>CYP2D6 phenotypes: PM, IM, UM, EM.</li>
<li>(T) IM is "like normal metabolizer".</li>
<li>The textbook convention makes EM normal.</li>
<li>An exam from these lectures keys IM = normal unless the stem defines EM as normal.</li>
</ul>
</div>

<div class="gpt">
<h5>15. Species (slide 50)</h5>
<ul>
<li>Cats have STs but lack UGTs, vice versa for pigs.</li>
<li>Humans have one CYP2D isoform (2D6) but rats have six.</li>
<li>(T) A glucuronidated drug "becomes a poison to the cats. Because it will accumulate."</li>
</ul>
</div>

<div class="gpt">
<h5>16. Extrinsic factors (slides 51&ndash;52)</h5>
<ul>
<li>In the split table.</li>
<li>(T) "exposure to ... inducing and inhibiting molecules. Case closed."</li>
</ul>
</div>

<div class="gpt">
<h5>17. Induction and inhibition, bullets verbatim (slides 53, 59)</h5>
<ul>
<li>(T) "The translation part especially gets ramped up ... what gets inhibited is the degradation part"; "Both must be substrates of the same enzyme"; "Look at these generality statements. That's what I would hone in to understand this."</li>
</ul>
</div>
<table class="reftab">
<tr><th>Enzyme Induction (slide 53)</th><th>Enzyme Inhibition (slide 59)</th></tr>
<tr><td>&uarr; Enzymatic levels (&uarr; mRNA translation) &amp; activity</td><td>Reversible inhibition (Competitive/non-Competitive)</td></tr>
<tr><td>&darr; Protein degradation</td><td>Reversible inhibition - lasts 2 - 3 days</td></tr>
<tr><td>CYPs, UDP-GT, GSTs &ndash; have inducible isoforms</td><td>Irreversible inhibition &ndash; substrate is bound for longer times: Drug/Intermediate/Metabolite complexation with enzyme; Requires time for enzyme to be regenerated</td></tr>
<tr><td>Inducer + Drug substrates for same enzyme = DIs: &darr; drug efficacy; &uarr; therapeutic effects of prodrugs; &uarr; toxicity (bioactivation to toxicity)</td><td>&nbsp;</td></tr>
<tr><td>Generally, induction &uarr; DME activity &amp; &darr; in drug blood levels plus &darr; DOA</td><td>Generally, inhibition &uarr; drug activity, &lt; metabolites, &uarr; drug levels plus &uarr; DOA</td></tr>
</table>

<div class="gpt">
<h5>18. The lists (slide 54 figure, slide 60 figure)</h5>
<ul>
<li>Both are pictures.</li>
<li>Slide 54 repeats the L13 slide 32 inducer list in a left column.</li>
<li>Slide 60 repeats the L13 inhibitor list minus Grape Fruit Juice.</li>
<li>Each adds names on the right.</li>
<li>Two drugs sit on more than one list across the decks.</li>
<li>Isoniazid is an inhibitor on slide 60 but L13 slide 58 calls it a general inducer of CYPs.</li>
<li>Omeprazole is an inhibitor here and on L13 slide 32, and an inducer of 1A2 (L13 slide 20) and of 1A1/2 and 3A4 (L13 slide 33).</li>
<li>A stem names the isoform, and the answer follows the list that names that isoform.</li>
<li>(T) "Take a hold of this and bank it, right? Carry this with you."</li>
<li>Conflict: ritonavir is printed as an inducer (slide 54 figure) while "Protease inhibitors" sit on both inhibitor lists (L13 slide 32, slide 60 figure).</li>
<li>An exam keys the class name as inhibitors and ritonavir, printed only on slide 54, as an inducer.</li>
</ul>
</div>
<table class="reftab">
<tr><th>Inducers of DMEs (slide 54 figure)</th><th>Inhibitors of DMEs (slide 60 figure)</th></tr>
<tr><td>L13 list: Barbiturates, Carbamazepine, Phenytoin, Rifampin, St Johns Wort, Nevirapine, Ethanol, Tobacco</td><td>Slide 60 left column: Clarithromycin, Erythromycin, Azole Antifungals (Ketoconazole, Itraconazole), Cimetidine, Protease inhibitors, Quinidine, Omeprazole (L13 slide 32 also lists Grape Fruit Juice)</td></tr>
<tr><td>Added: Nevirapine, Efavirenz, Ritonavir, Rifabutin</td><td>Added: Isoniazid, Ciprofloxacin, Diltiazem, Verapamil, Amiodarone, Fluoxetine</td></tr>
</table>
{{fig:fa_inducer_list|Slide 54 figure: inducers of DMEs, the Lecture 13 list plus nevirapine, efavirenz, ritonavir and rifabutin}}
{{fig:fa_inhibitor_list|Slide 60 figure: inhibitors of DMEs, the Lecture 13 list plus isoniazid, ciprofloxacin, diltiazem, verapamil, amiodarone and fluoxetine}}

<div class="gpt">
<h5>19. Inducer case: cyclosporin A (slide 55)</h5>
<ul>
<li>Cyclosporin A (CsA, an immunosuppressant used to prevent transplant rejection) is a substrate of 3A4.</li>
<li>Co-administration with 3A4 inducers can result in transplant failure.</li>
<li>Explain: the inducer raises 3A4 level and activity (slide 53).</li>
<li>More CsA is converted to inactive metabolites per unit time.</li>
<li>CsA blood level and DOA fall below the therapeutic range.</li>
<li>Immunosuppression is lost and the graft is rejected.</li>
<li>(T) "there's more of this metabolism happening ... inactivated cyclosporine. So, sub-therapy scenario is what happens here, transplant rejection."</li>
<li>Inducers to name: rifampin, carbamazepine, phenytoin, barbiturates, St Johns Wort (slide 54 figure).</li>
</ul>
</div>

<div class="gpt">
<h5>20. Dietary and industrial inducers (slides 56&ndash;58)</h5>
<ul>
<li>Indoles from cruciferous vegetables (sprouts, cabbage, broccoli, cauliflower) &uarr; CYP1A1 and 1A2 (slide 56).</li>
<li>Organosulfur compounds (e.g. garlic) &uarr; CYP1A, CYP3A plus some phase II enzymes (slide 56).</li>
<li>PAHs (polycyclic aromatic hydrocarbons; smoked/barbecued foods, cigarette smoke) &uarr; CYP1A1 and 1A2 (slide 57).</li>
<li>Dioxin and polychlorinated biphenyl (PCB) pollutants &uarr; multiple CYP and some UGT isoforms (slide 58).</li>
</ul>
</div>

<div class="gpt">
<h5>21. Inhibitor case: tyramine + MAOIs = hypertensive crisis (slide 61)</h5>
<ul>
<li>Tyramine promotes the release of the hypertensive monoamines Epi and Norepi.</li>
<li>&uarr; systemic tyramine, due to inhibition of its metabolic inactivation by MAOs, can precipitate a fatal hypertensive crisis.</li>
<li>(T) The "cheese crisis": "you want the monoamine oxidases to be left alone."</li>
<li>(T) He cited St. John's Wort, "over the counter," as an MAO inhibitor.</li>
<li>The printed lists (L13 slide 32, L14 slide 54 figure) file it as an inducer, which is what an exam keys.</li>
</ul>
</div>

<div class="gpt">
<h5>22. Dietary inhibitor: grapefruit juice (slides 62&ndash;64)</h5>
<ul>
<li>Grapefruit juice (GFJ) contains furocoumarins, which inhibit or &darr; CYP activity (slide 62).</li>
<li>Bergamottin and 6&prime;,7&prime;-dihydroxybergamottin are the most abundant furocoumarins in GFJ and are mechanism-based inhibitors of 3A4 (slide 63).</li>
<li>GFJ interferes with the metabolism of several drugs (slide 64, a list picture; the L13 slide 35 table marks felodipine "Y").</li>
<li>(T) The furocoumarin "double bond ... can undergo epoxidation ... 3A4 ... gets tied up with this. It forms an adduct ... this is called mechanism-based inhibition," "especially in the small intestine"; "a cup" is enough.</li>
</ul>
</div>

<div class="gpt">
<h5>23. Clinical DDI manifestations of DME inhibition (slide 65 figure)</h5>
<ul>
<li>A three-column picture; rows verbatim below.</li>
<li>(T) Coumadin (warfarin): "all of a sudden you start seeing a bleeding event ... too much of this drug lingering around"; glyburide: "too much of glyburide ... hypoglycemia"; cyclosporin: "excessive immunosuppression ... infections"; dextromethorphan: "too much of opioid ... CNS depression."</li>
</ul>
</div>
<table class="reftab">
<tr><th>Inhibitor (slide 65 figure)</th><th>Affected Drug</th><th>Potential Outcome</th></tr>
<tr><td>Metronidazole</td><td>Coumadin</td><td>Hemorrhage</td></tr>
<tr><td>Erythromycin</td><td>Glyburide</td><td>Hypoglycemia</td></tr>
<tr><td>Ketoconazole</td><td>Cyclosporin</td><td>Immunosuppression</td></tr>
<tr><td>Prozac &amp; Paxil</td><td>Dextromethorphan</td><td>CNS depression</td></tr>
</table>

<div class="gpt">
<h5>24. Q: the GFJ and felodipine plot (slide 66)</h5>
<ul>
<li>Felodipine's structure beside a "Single Dose Study" plot of plasma concentration (nmol/L) against hours, water versus grapefruit juice.</li>
<li>Read from the slide 66 plot: water peaks at about 2.5 nmol/L, GFJ at about 10&ndash;11 nmol/L, both at 2&ndash;3 h.</li>
<li>GFJ stays higher until both approach zero at 24 h.</li>
<li>So the time to peak is unchanged and only the height rises, about fourfold.</li>
<li>Explanation: felodipine is a GFJ-interacting 3A4 drug (L13 slide 35) taken by mouth.</li>
<li>With water most of the dose is lost to pre-systemic metabolism in the gut and first-pass liver (slide 35).</li>
<li>The furocoumarins are mechanism-based inhibitors of intestinal 3A4 (slide 63).</li>
<li>The pre-systemic loss is blocked.</li>
<li>Bioavailability, drug level and DOA rise as the slide 59 "Generally" line predicts.</li>
<li>(T) "you inhibit this pre-systemic metabolism in the gut, and you start seeing what? Higher levels of bioavailability increases."</li>
</ul>
</div>
{{fig:fa_gfj_felodipine|Slide 66 plot: single-dose felodipine plasma concentration with water (peak about 2.5 nmol/L) and with grapefruit juice (peak about 10 to 11 nmol/L at 2 to 3 h)}}

<div class="ghook"><b>Memory hook</b> From the "Generally" lines: induction sends parent-drug levels, DOA and efficacy &darr; (only prodrug effect and bioactivation toxicity go &uarr;); inhibition sends parent-drug levels, activity and DOA &uarr; and metabolites &darr;. Reversible inhibition has a time limit (2&ndash;3 days); irreversible lasts until new enzyme is made.</div>

<div class="gtell"><b>Tell apart</b>
<ul>
<li>Albumin vs &alpha;-1 acid glycoprotein: weak acids bind albumin, weak bases bind &alpha;-1 acid glycoprotein (slide 38).</li>
<li>CYP3A7 vs CYP3A4: the fetal isoform printed on slide 45 is 3A7.</li>
<li>IM vs EM as the normal phenotype: these lectures make IM normal, the textbook convention EM; an exam from these lectures keys IM unless the stem defines EM as normal (point 14).</li>
<li>Inducer list vs inhibitor list: ritonavir and St Johns Wort are printed as inducers (slide 54 figure); azoles, macrolides, cimetidine, quinidine, omeprazole are inhibitors (slide 60 figure).</li>
<li>Hyperthyroidism vs the other disease rows: the one row that raises DME activity (slide 43).</li>
<li>Buccal vs sublingual: buccal is the slide's word for nitroglycerin and is keyed (slide 36 figure).</li>
</ul>
</div>

<div class="gpoll"><b>Poll or practice item on this objective</b>
<ul>
<li>PollEv-1 (slide 40): "TRUE/FALSE: Plasma protein binding, dose, and route of drug administration can influence drug metabolism."</li>
<li>Plasma protein binding &mdash; TRUE by point 6 (slide 38).</li>
<li>Dose &mdash; TRUE by point 2 (slide 34).</li>
<li>Route of administration &mdash; TRUE by point 3 (slide 35).</li>
<li>Answer: TRUE.</li>
<li>(T) "this is true ... that is true. OK, just in case you're wondering."</li>
<li>His second item here is the slide 55 case (slide 55), "Co-administration of CsA with 3A4 inducers can result in transplant failure. Explain?", answered in point 19.</li>
</ul>
</div>

<div class="gask"><b>How he will ask it, and how to answer</b>
<ul><li>TRUE/FALSE on whether named factors influence DM, in the slide 40 form; anything on the slide 33 or slide 52 lists is TRUE.</li><li>Outcome multiple choice from a slide 65 row, in his prep-sheet words: "Erythromycin inhibits Glyburide inactivation, the likely metabolic drug interaction of administering both drugs is........ A. Hyperglycemia B. Liver failure C. Hypertension D. Hypoglycemia" (D).</li><li>"Explain?" cases: slide 55 (cyclosporin) and slide 66 ("Explain the inhibition plot below involving GFJ and Felodipine intake"), answered with the "Generally" line of slide 53 or 59 plus the enzyme (3A4) and the site (gut and first-pass liver).</li><li>Select-all from the slide 54 and slide 60 lists, and the neonate drugs of slide 46.</li></ul>
<ul><li>Step 1 &mdash; place the interacting agent on one list: inducer (slide 54 figure, slides 56&ndash;58) or inhibitor (slide 60 figure, GFJ, MAOI).</li><li>Then decide whether the affected drug is an active parent drug or a prodrug.</li><li>Step 2 &mdash; apply the "Generally" line: inducer + active drug = &darr; levels, &darr; DOA, &darr; efficacy (cyclosporin: transplant failure).</li><li>Inhibitor + active drug = &uarr; levels, &uarr; DOA, exaggerated action (glyburide: hypoglycemia; Coumadin: hemorrhage; dextromethorphan: CNS depression; cyclosporin: immunosuppression).</li><li>For a prodrug, induction &uarr; the therapeutic effect (slide 53).</li><li>Step 3 &mdash; the usual trap is the option in the opposite direction of the affected drug's own action (hyperglycemia for inhibited glyburide; hypertension belongs to tyramine/MAOI, not Coumadin).</li><li>Or the wrong list (ritonavir and St Johns Wort are printed as inducers; azoles, macrolides, cimetidine, quinidine, omeprazole are inhibitors).</li><li>Among the physiological factors the trap is hyperthyroidism, the one disease row that raises DME activity (slide 43).</li></ul>
</div>
</section>

<section class="gobj" id="gobj-6">
<h3>Lecture 15 (MCMet-9_17_2026.pdf) &mdash; Elimination objective 1 of 3: the routes of elimination</h3>
<div class="gbar"><span>OBJECTIVE (his slide 4)</span><b>Describe routes of drug elimination</b><i>slides 5&ndash;8, 16, 21&ndash;27</i></div>

<h4>Read this first &mdash; the words on these slides</h4>
<dl class="gwords">
<dt>Elimination</dt><dd>Slide 5: the irreversible physical removal of metabolised and un-metabolised xenobiotics from the body. (T) Excretion and clearance are narrower words; "Elimination is a broader term that covers those two."</dd>
<dt>Xenobiotic</dt><dd>A drug or any other compound foreign to the body; slide 5 eliminates both it and its metabolites.</dd>
<dt>Polar, free or unbound drug</dt><dd>Slide 7's renal molecule. (T) Polar means a log P (logarithm of the octanol&ndash;water partition coefficient) of "about 1 or less than 1"; unbound means not attached to plasma protein.</dd>
<dt>Tubular reabsorption</dt><dd>Slide 7: a non-polar drug in the urine passes from the renal tubule back into the circulation; phenytoin is the example.</dd>
<dt>Lipid-soluble drug</dt><dd>Slide 16's hepatic/bile/fecal molecule, one path from liver to bile to feces. (T) Lipophilic, a log P "Greater than one."</dd>
<dt>Glomerular filtration, active transport, passive diffusion</dt><dd>The mechanism words. Slide 7: renal is filtration plus active transport. Slide 16: hepatic is active transport. Slide 22: lungs is passive diffusion.</dd>
<dt>Intestinal elimination, PgP/MDR1 efflux</dt><dd>Slide 21: unabsorbed PO (per os, by mouth) parent drug and GI (gastrointestinal) or bile metabolites leave through the gut. P-glycoprotein (PgP), or MDR1 (multidrug-resistance protein 1), pumps drug from the gut wall back into the lumen.</dd>
<dt>Volatile or gaseous agent</dt><dd>Slide 22: what the lungs eliminate; inhaled anaesthetic agents.</dd>
<dt>"Not a major route"</dt><dd>The phrase slides 23&ndash;26 give breast milk, skin/sweat/oil, tears, hair and saliva.</dd>
<dt>PPI, H<sub>2</sub> antagonist</dt><dd>Proton pump inhibitor; histamine H<sub>2</sub>-receptor antagonist. Slide 23 calls cimetidine "a PPI"; it is an H<sub>2</sub> antagonist (a known slide error).</dd>
</dl>

<h4>The points, in slide order</h4>
<div class="gpt">
<h5>1. The definition (slide 5)</h5>
<ul>
<li>Verbatim: "Irreversible physical removal of metabolized &amp; un-metabolized xenobiotics from the body".</li>
<li>"Is essential no-matter the route of administration".</li>
<li>"Prevents xenobiotics &amp; metabolite accumulations".</li>
<li>"Is a key component of drug PK" (PK, pharmacokinetics).</li>
</ul>
</div>

<div class="gpt">
<h5>2. The ranking (slide 6)</h5>
<ul>
<li>Slide 6 prints two headings, Renal and Non-Renal.</li>
<li>Under Non-Renal it lists eight routes: Hepatic (via Bile), Intestinal, Lung, Mammary (Breast Milk), Skin (Sweat/Oil), Tears, Hair, Saliva.</li>
<li>The ranking within them is spoken.</li>
<li>(T) "the renal route or the kidney is the primary, the major" route of elimination.</li>
<li>(T) The non-renal routes are "the additional routes of elimination", and within them "hepatic via bile within the non-renal then becomes the major, the bigger guy, the bigger player there."</li>
<li>(T) After intestinal, lung, breast milk and skin: "Then tears, hair, and saliva... These are minor routes. A few drugs go out that way."</li>
<li>Fixed: renal first; hepatic/bile the major non-renal route; mammary, skin, tears, hair and saliva minor.</li>
</ul>
</div>

<div class="gpt">
<h5>3. Renal/urinary (slide 7)</h5>
<ul>
<li>Slide lines in table row 1.</li>
<li>Non-polar drugs "excreted here are subject to tubular reabsorption".</li>
<li>(T) "the non-polar drug phenytoin has a log P equal to about 2.5. When it's excreted there, it gets reabsorbed back. A portion, a good portion of it gets reabsorbed back."</li>
</ul>
</div>

<div class="gpt">
<h5>4. Renal examples (slide 8)</h5>
<ul>
<li>"Atenolol, Ampicillin, Vancomycin, etc."</li>
<li>(T) "vancomycin, very polar... these hydroxy groups"; "Some can be large size, but there's going to be a cap on that too" (the 60 kDa filtration limit, slide 11).</li>
</ul>
</div>

<div class="gpt">
<h5>5. Hepatic/bile/fecal (slide 16)</h5>
<ul>
<li>Slide lines in table row 2.</li>
<li>(T) "The active transport is pushing these things into" bile, which "deposits into the colon... and it gets out into fecal matter that way."</li>
</ul>
</div>

<div class="gpt">
<h5>6. Intestinal (slide 21)</h5>
<ul>
<li>Slide lines in table row 3.</li>
<li>(T) Three sources of drug in the lumen: "Things that are not absorbed"; drug metabolised in the gut wall, "Pre-systemic metabolism"; and "The biome metabolites" made by gut bacteria.</li>
<li>(T) Diltiazem, he says, "depends heavily on this."</li>
</ul>
</div>

<div class="gpt">
<h5>7. Lungs/exhalation (slide 22)</h5>
<ul>
<li>Slide lines in table row 4.</li>
<li>The slide 22 figure prints isoflurane 99%, sevoflurane 95% and halothane 70% exhaled unchanged.</li>
<li>(T) "isoflurane, 99%. The drug comes out this way, unmetabolized"; "halothane, 70% comes out this way"; and ethanol on a breathalyser: "Some of the ethanol is coming out this way too."</li>
</ul>
</div>

<div class="gpt">
<h5>8. Mammary/breast milk (slide 23)</h5>
<ul>
<li>"Not a major route but significant for passing drugs/metabolites to nursing infants".</li>
<li>"Topotecan (an anti-cancer)"; "Cimetidine (a PPI)".</li>
<li>The class label for cimetidine is wrong: it is an H<sub>2</sub> antagonist, and the transcript gives no class.</li>
<li>The transcript names both drugs as breast-milk examples and gives no class; slide 23's "PPI" label is the only class printed.</li>
<li>(T) "for the mammary route, you can have both lipophilic and... polar drugs transferring."</li>
</ul>
</div>

<div class="gpt">
<h5>9. Skin/sweat/oil and tears (slide 24)</h5>
<ul>
<li>Both "Not a maj. route" (table rows 6 and 7).</li>
<li>Sweat "may be used to monitor/test".</li>
<li>Tears "may be of concern to contact lens wearers (permanent staining)", and "Rifampin - causes orange-red coloration in tears."</li>
<li>(T) After the break he asked: "Both high log P value drugs and low log P value drugs can be eliminated that way. Is that true or false?"</li>
<li>The class answered false; his answer: "The skin will sweat what? Watery substances as well as what? Oily substances. True."</li>
</ul>
</div>

<div class="gpt">
<h5>10. Hair (slide 25)</h5>
<ul>
<li>"Not a maj. route of elimin. - useful for monitoring or testing."</li>
<li>(T) A hair test returns the nine-drug panel in table row 8: "90 days, the hair will return that."</li>
</ul>
</div>

<div class="gpt">
<h5>11. Saliva (slide 26)</h5>
<ul>
<li>"Saliva (mouth swabs) - Not a maj. route of elimin. - may be used to monitor/test".</li>
<li>"5-48 h post exposure".</li>
<li>The detection list is in table row 9 (THC is tetrahydrocannabinol; PCP is phencyclidine).</li>
<li>(T) "We also retain... certain compounds up to about 48 hours."</li>
</ul>
</div>

<div class="gpt">
<h5>12. Summary (slide 27)</h5>
<ul>
<li>"Routes of elimination"; "Factors affecting the routes of elimination".</li>
<li>(T) "Identify the routes of elimination, identify the types of molecules that actually can be eliminated by these routes, and then the factors that can affect elimination."</li>
</ul>
</div>

<table class="reftab">
<tr><th>Route (slide order)</th><th>What it carries</th><th>Mechanism</th><th>Examples</th><th>Slide</th></tr>
<tr><td>Renal/urinary &mdash; the major route (T)</td><td>Polar, free or unbound drugs and metabolites; (T) log P about 1 or lower. Non-polar drugs that get in (phenytoin) are subject to tubular reabsorption</td><td>Glomerular filtration &amp; active transport</td><td>Atenolol, ampicillin, vancomycin</td><td>7&ndash;8</td></tr>
<tr><td>Hepatic/bile/fecal &mdash; the major non-renal route (T)</td><td>Lipid-soluble drugs and metabolites; (T) log P greater than 1</td><td>Active transport into bile</td><td>Steroids (e.g. methylprednisone), digoxin, many anticancer agents</td><td>16</td></tr>
<tr><td>Intestinal</td><td>Unabsorbed PO parent drugs; GI and bile metabolites</td><td>Intestinal PgP/MDR1 efflux; GI metabolism</td><td>Diltiazem (75% efflux/GI metabolism + elim.); midazolam (&gt;40% GI metabolism &amp; elim.)</td><td>21</td></tr>
<tr><td>Lungs/exhalation</td><td>Volatile or gaseous agents</td><td>Passive diffusion</td><td>Inhaled anaesthetic agents; isoflurane 99%, sevoflurane 95%, halothane 70% exhaled unchanged (slide 22 figure); ethanol on a breathalyser</td><td>22</td></tr>
<tr><td>Mammary/breast milk</td><td>Not a major route; drugs/metabolites passed to nursing infants; (T) both lipophilic and polar drugs</td><td>Not stated on the slide</td><td>Topotecan (an anti-cancer); cimetidine (slide says "a PPI"; it is an H<sub>2</sub> antagonist)</td><td>23</td></tr>
<tr><td>Skin/sweat/oil</td><td>Not a major route; used to monitor/test; (T) sweat is watery and oily, so both low and high log P drugs leave this way</td><td>Not stated on the slide</td><td>None on the slide</td><td>24</td></tr>
<tr><td>Tears</td><td>Not a major route; concern for contact lens wearers (permanent staining)</td><td>Not stated on the slide</td><td>Rifampin: orange-red coloration in tears</td><td>24</td></tr>
<tr><td>Hair</td><td>Not a major route; monitoring or testing</td><td>Not stated on the slide</td><td>(T) hair test panel: marijuana, cocaine, opioids, amphetamines, ecstasy, PCP, hydromorphone, oxycodone, hydrocodone; 90 days</td><td>25</td></tr>
<tr><td>Saliva (mouth swabs)</td><td>Not a major route; monitor/test 5&ndash;48 h post exposure</td><td>Not stated on the slide</td><td>Detects ethanol, amphetamines, cocaine, benzodiazepines, barbiturates, THC, opioids, PCP (phencyclidine)</td><td>26</td></tr>
</table>

<div class="ghook"><b>Memory hook</b> The nine routes fall into 2 + 2 + 5. Two primary routes sorted by log P: Renal for polar (log P at or below about 1), Hepatic/bile/fecal for lipid-soluble (log P above 1). Two named by mechanism: Intestinal (efflux plus GI metabolism), Lungs (passive diffusion). Five the slides call "not a major route": Mammary, Skin/sweat/oil, Tears, Hair, Saliva; mammary is the infant-exposure route, tears is the contact-lens staining route (rifampin), and skin, hair and saliva are the monitoring or testing routes. Renal and hepatic are easily swapped on mechanism: "filtration" appears only on the renal slide; the hepatic slide says active transport alone.</div>

<div class="gtell"><b>Tell apart</b>
<ul>
<li>Elimination vs excretion or clearance: elimination is the broader term that covers the other two (words list).</li>
<li>Intestinal vs hepatic/bile/fecal, both ending in feces: intestinal is unabsorbed PO drug plus GI and bile metabolites, by PgP/MDR1 efflux and GI metabolism (slide 21); hepatic is lipid-soluble drug actively transported into bile (slide 16).</li>
<li>Hair vs saliva, both monitoring routes: hair returns 90 days (point 10); saliva 5&ndash;48 h post exposure (slide 26).</li>
<li>Topotecan vs cimetidine, the two breast-milk examples: topotecan is the anti-cancer; cimetidine is printed "a PPI" but is an H<sub>2</sub> antagonist (slide 23).</li>
</ul>
</div>

<div class="gpoll"><b>Poll or practice item on this objective</b>
<ul>
<li>Asked in class after the break (T): "Both high log P value drugs and low log P value drugs can be eliminated that way [sweat]. Is that true or false?"</li>
<li>The class said false.</li>
<li>TRUE, by point 9: "The skin will sweat watery substances as well as oily substances"; sweat is still not a major route.</li>
<li>Prep sheet: "Hydrophilic and lipophilic xenobiotics are respectively eliminated via ......... and ........."</li>
<li>By points 3 and 5: renal (urine) and hepatic/bile (feces).</li>
</ul>
</div>

<div class="gask"><b>How he will ask it, and how to answer</b>
<ul><li>TRUE/FALSE on one route, as in class: "Both high log P value drugs and low log P value drugs can be eliminated that way."</li><li>Short answer in prep-sheet words: "Hydrophilic and lipophilic xenobiotics are respectively eliminated via ......... and ........."; "Rank the routes of elimination from major to minor."</li><li>Conceptual multiple choice keyed to log P: (T) "I am going to be conceptual in my questions"; the prep sheet ends a metabolism chain with "The metabolite would be eliminated via what route?"</li></ul>
<ul><li>Step 1 &mdash; find the polarity word in the stem: polar, hydrophilic, unbound or low log P points to renal.</li><li>Lipophilic, lipid-soluble, high log P or steroid points to hepatic/bile/fecal.</li><li>Volatile or gaseous points to lungs.</li><li>Step 2 &mdash; if the stem gives a mechanism instead, match it: filtration is renal only.</li><li>Efflux or GI metabolism is intestinal.</li><li>Passive diffusion is lungs.</li><li>Active transport is hepatic (and renal tubular secretion).</li><li>Step 3 &mdash; the usual trap is reading "not a major route" as "cannot eliminate": sweat carries both high and low log P drugs.</li><li>Breast milk is "not major but significant".</li><li>Cimetidine is a breast-milk example even though its "PPI" label is wrong.</li></ul>
</div>
</section>

<section class="gobj" id="gobj-7">
<h3>Lecture 15 (MCMet-9_17_2026.pdf) &mdash; Elimination objectives 2 and 3 of 3: what changes renal and hepatic elimination; pH trapping and enterohepatic recycling</h3>
<div class="gbar"><span>OBJECTIVES (his slide 4)</span><b>Discuss factors affecting routes of elimination &amp; Explain "pH trapping" and "EH Recycling"</b><i>slides 9&ndash;15, 17&ndash;20</i></div>

<h4>Read this first &mdash; the words on these slides</h4>
<dl class="gwords">
<dt>CKD, hyperfiltration</dt><dd>Chronic kidney disease (slide 10 misprints it "CDK"), with hypertension and diabetes as risk factors. (T) He says a CKD kidney "won't filter drugs well", and attaches hyperfiltration, "too much filtration going on", to the hypertension and diabetes that cause it.</dd>
<dt>GFR</dt><dd>Glomerular filtration rate (slides 9, 11). Slide 11: inflammation of the glomerular capillaries may raise it. (T) It falls with age.</dd>
<dt>MW &lt;60 kDa, unbound</dt><dd>Slide 11: only low molecular weight (MW) molecules, under 60 kilodaltons (kDa), are filtered, and only unbound (free) drug.</dd>
<dt>Tubular reabsorption, back diffusion</dt><dd>Slides 9 and 12: the un-ionised drug returns from the renal tubule into the circulation "mostly via passive back diffusion"; the ionised drug stays in the urine.</dd>
<dt>Tubular secretion</dt><dd>Slide 13: active transporters move drug from the blood into the renal tubule. (T) "the reverse of this reabsorption."</dd>
<dt>OATP, MRP, OCT, MDR1, MATE</dt><dd>Slide 13's transporter families. Anions: OATP (organic anion transporting polypeptide) 1 and 3, MRP (multidrug resistance-associated protein) 2 and 4. Cations: OCT (organic cation transporter) 2, MDR1 (multidrug-resistance protein 1, P-glycoprotein), MATE (multidrug and toxin extrusion) 1 and 2K.</dd>
<dt>Ionisable FG</dt><dd>Ionisable functional group. Slide 14: the key requirement for any urinary pH effect. (T) Carboxylic acids and amines.</dd>
<dt>pH trapping, NaHCO<sub>3</sub></dt><dd>Slide 14: "a drug ionizes in urine &amp; cannot be reabsorbed - it is 'trapped' &amp; eliminated." NaHCO<sub>3</sub> is sodium bicarbonate, slide 15's agent for alkalinising urine.</dd>
<dt>Cholestasis; BCRP, P-gp</dt><dd>Slide 17: a biliary disease that "reduces bile flow &amp; toxicity can result". BCRP (breast cancer resistance protein), P-gp (P-glycoprotein), OATPs and MDR/MRP are slide 17's biliary transporters.</dd>
<dt>Enterohepatic recycling (EH recycling)</dt><dd>Slide 18: drugs excreted via bile into the intestine are reabsorbed ("recycling") before fecal elimination. EH on slide 4 means enterohepatic; on slide 60 of the same deck "EHs" are the enzymes that (T) "can deactivate epoxides."</dd>
<dt>PO charcoal, anion exchange resin</dt><dd>Slide 18: the two agents that disrupt recycling by trapping the drug in the GI (gastrointestinal) tract. PO means per os, by mouth.</dd>
<dt>Glucuronidase; DoA, t<sub>1/2</sub></dt><dd>(T) The intestinal enzyme that cleaves a glucuronide off, revealing the original drug; the slide 20 figure labels it &beta;-glucuronidase from the gut microbiota. DoA is duration of action, t<sub>1/2</sub> half-life (slide 19).</dd>
</dl>

<h4>The points, in slide order</h4>
<div class="gpt">
<h5>1. The five renal factors (slide 9)</h5>
<ul>
<li>"Kidney Disease; Glomerular Filtration Rate; Reabsorption or Back Diffusion of un-ionized drug; Active Tubular Secretion; Urinary pH."</li>
<li>(T) Urine pH matters because pH changes drug ionisation.</li>
</ul>
</div>
{{fig:el_renal_factors|Slide 9: the five factors affecting renal elimination, in the order the deck treats them}}

<div class="gpt">
<h5>2. Kidney disease (slide 10)</h5>
<ul>
<li>CKD, with hypertension and diabetes as risk factors.</li>
<li>"Dose adjustments may be required for: Cephalosporin antibiot. (Procainamide, Ceftazidime); Aminoglycoside antibiot. (Tobramycin, Amikacin)" (the slide prints procainamide under the cephalosporin heading).</li>
<li>(T) A CKD kidney "won't filter drugs well"; the risk factors act through hyperfiltration: hypertension "forces these filtration rates to be high. Diabetes does the same... We just want normal filtration."</li>
<li>(T) On the drug list: "am I asking you to remember this? No, I am going to be conceptual in my questions"; he can ask about log P values and how they relate to this.</li>
</ul>
</div>

<div class="gpt">
<h5>3. Glomerular filtration (slide 11)</h5>
<ul>
<li>"Low MW (&lt;60 kDa) are filtered".</li>
<li>"Unbound or free drugs are filtered".</li>
<li>"Inflammation of glomerular capillaries may &uarr; the Glomerular Filtration Rate (GFR)".</li>
<li>(T) A protein-bound drug or metabolite is "heavier than that... they won't filter well."</li>
<li>(T) He adds age: filtration "matures at some point, and then in old age declines".</li>
</ul>
</div>

<div class="gpt">
<h5>4. Tubular reabsorption (slide 12)</h5>
<ul>
<li>"The ionized drug is excreted in urine".</li>
<li>"The un-ionized drug is reabsorbed from the renal tubule back into circulation (mostly via passive back diffusion)".</li>
<li>(T) The process is "mostly passive... it doesn't require energy."</li>
<li>(T) The worked example, given with slide 7: "the non-polar drug phenytoin has a log P equal to about 2.5. When it's excreted there, it gets reabsorbed back. A portion, a good portion of it gets reabsorbed back."</li>
</ul>
</div>

<div class="gpt">
<h5>5. Tubular secretion (slide 13)</h5>
<ul>
<li>"Involves Active Transporters: Anions: OATP1 &amp; 3; MRP2 &amp; 4 (MRP = Multi-drug Resistance Assoc. Proteins). Cations: OCT2; MDR1; MATE1/MATE2K (MATE = Multi-drug and Toxin Extrusion)."</li>
<li>"Inhibitors/Inducers influence elimination. Example: Probenecid (inhibits renal OATPs &amp; slows Penicillin excretion)."</li>
<li>(T) Drugs still in the blood that are substrates are moved out: "these active transporters chuck them out into" the renal tubule.</li>
<li>(T) "Don't overcomplicate this. I'm just giving you different types of transporters that can be at play here"; the point is that inducers and inhibitors change secretion, as probenecid does for penicillin.</li>
</ul>
</div>
{{fig:el_tubular_transporters|Slide 13: tubular secretion transporters, anion carriers OATP1 and 3 and MRP2 and 4, cation carriers OCT2, MDR1 and MATE1/MATE2K, with probenecid as the inhibitor example}}

<div class="gpt">
<h5>6. Urinary pH and pH trapping (slide 14)</h5>
<ul>
<li>"Urine pH can alter elim. of ionizable drugs. Acidic urine: &darr; elim. of acidic drugs &amp; &uarr; elim. of basic drugs. Basic urine: &darr; elim. of basic drugs &amp; &uarr; elim. of acidic drugs."</li>
<li>"'pH Trapping' concept: a drug ionizes in urine &amp; cannot be reabsorbed - it is 'trapped' &amp; eliminated."</li>
<li>"Key: Drugs/metabolites must have ionizable FGs."</li>
<li>(T) "the pH of urine ranges from about 4 to about 8... if you move it and lock it into one pH, it will start affecting the excretion of certain drugs that are of the opposite pH."</li>
<li>(T) "acidify urine and throw in a basic drug. You're actually increasing [its] chances of being eliminated. Why? Because it's getting ionized."</li>
<li>(T) The concept: "A drug that reaches urine and ionizes there is... incapable of being reabsorbed back. It is trapped."</li>
</ul>
</div>
{{fig:el_urinary_ph|Slide 14: the urinary pH rules and the pH trapping concept}}

<table class="reftab">
<tr><th>Which way pH trapping goes (slide 14)</th><th>Acidic drug (carboxylic acid FG)</th><th>Basic drug (amine FG)</th></tr>
<tr><td>Acidic urine ((T) vinegar acidifies it)</td><td>Stays un-ionised, reabsorbed, elimination &darr;</td><td>Ionised, trapped, elimination &uarr;</td></tr>
<tr><td>Basic urine (NaHCO<sub>3</sub>, slide 15)</td><td>Ionised, trapped, elimination &uarr; (aspirin overdose)</td><td>Stays un-ionised, reabsorbed, elimination &darr;</td></tr>
<tr><td>Rule</td><td colspan="2">Urine pH opposite to the drug's character ionises it and traps it; urine pH matching the drug's character leaves it un-ionised and reabsorbable. A drug with no ionisable FG is unaffected (slide 14 "Key").</td></tr>
</table>

<div class="gpt">
<h5>7. pH trapping used therapeutically (slide 15)</h5>
<ul>
<li>"pH Trapping can be used therapeutically. Example: Aspirin overdose is treated by alkalizing urine with NaHCO<sub>3</sub>."</li>
<li>(T) The patient is injected with sodium bicarbonate to "force... the pH of urine to change"; "you've moved it to maybe 8 to 9"; most of the aspirin "is ionized and therefore, it cannot be reabsorbed back. It is trapped", and it is forced out in the urine.</li>
<li>(T) The reverse case, asked in class: "What if it is a basic drug?... you acidify urine. How do you acidify urine?... What is the commonest household acid that you have at home? Vinegar."</li>
</ul>
</div>

<div class="gpt">
<h5>8. Hepatic factors (slide 17)</h5>
<ul>
<li>"Bile - Intestinal &amp; Biliary diseases (e.g., cholestasis reduces bile flow &amp; toxicity can result)".</li>
<li>"Transporter proteins (OATPs, BCRP, P-gps, MDR/MRP) - involved in secretion of drugs &amp; metabolites."</li>
<li>(T) "Why intestinal? Because the bile is deposited" in the intestine; "why biliary, anything affecting how much" bile "is circulating is a problem"; with cholestasis, drugs are trapped and concentrate in the little bile present, "and toxicity can ensue from that."</li>
<li>(T) Impeding these transporters backs bile up, "and that leads to unwanted outcomes as well."</li>
</ul>
</div>

<div class="gpt">
<h5>9. Enterohepatic recycling defined and disrupted (slide 18)</h5>
<ul>
<li>"Drugs excreted via bile into the intestine undergo reabsorption ('recycling') prior to fecal elim."</li>
<li>"Can be clinically disrupted using PO charcoal or anion exchange resins to trap drugs in the GI tract for fecal elim."</li>
<li>(T) Bile itself is conserved, reabsorbed from the intestine and stored again; "Some of those drugs can recycle together with... that bile. And therefore, you're slowing down actually the elimination of that particular drug."</li>
<li>(T) Some travel as a metabolite and undergo metabolism in the gut "to give back the original drug and that original drug can also recycle."</li>
<li>(T) The way out: oral charcoal, which adsorbs the drug and promotes its fecal elimination.</li>
</ul>
</div>

<div class="gpt">
<h5>10. Examples (slide 19)</h5>
<ul>
<li>"Ezetimibe (Zetia), Isotretinoin, Morphine".</li>
<li>"Zetia undergoes repeated cycling - long DoA (t<sub>1/2</sub> = 22-24 h)".</li>
<li>(T) The Zetia cycle: it is metabolised "via UGTs" (uridine diphosphate-glucuronosyltransferases) to a glucuronide; "This glucuronide is polar enough to be excreted out in the kidneys, but the majority of it finds its way into bile"; in the small intestine glucuronidases cleave the glucuronide off, revealing the original drug; the parent "again goes systemic", and "because of this recycling, the duration of action is far improved."</li>
<li>(T) Asked about slide 19 at the end of class: "This is one mechanism that these drugs recycle through. That's the take home message"; "The question would be on a concept... Enterohepatic recycling. It's not the drug structure."</li>
</ul>
</div>

<div class="gpt">
<h5>11. More examples (slide 20 figure)</h5>
<ul>
<li>Slide 20 carries only the heading "Enterohepatic Recycling - Examples:" and a figure.</li>
<li>The figure: the glucuronides of diclofenac, indomethacin and ketoprofen are cleaved by &beta;-glucuronidase from the gut microbiota, releasing the parent drug for reabsorption.</li>
<li>(T) "Diclofenac can do the same. Indomethacin can do the same", each carrying a glucuronide that is cleaved to restart the cycle.</li>
<li>(T) Recycling does not require metabolism: "you can have drugs that do not actually undergo any metabolism that also recycle that way."</li>
</ul>
</div>
{{fig:el_ehr|Slides 18 to 20: enterohepatic recycling. Bile carries the drug or its glucuronide into the intestine, gut beta-glucuronidase cleaves the glucuronide of diclofenac, indomethacin or ketoprofen, and the parent drug is reabsorbed}}

<div class="ghook"><b>Memory hook</b> Reabsorption and secretion are easily swapped: reabsorption is passive, moves un-ionised drug from tubule to blood and lowers elimination; secretion is active, uses the slide 13 transporters, moves drug from blood to tubule and raises elimination. For the pH table the one rule is: opposite pH ionises and traps (acid drug in basic urine, base drug in acidic urine); same pH leaves the drug un-ionised and reabsorbable. For the hepatic side: bile out, gut glucuronidase cleaves, parent back in; charcoal or an anion exchange resin breaks the loop.</div>

<div class="gtell"><b>Tell apart</b>
<ul>
<li>pH trapping vs enterohepatic recycling: pH trapping is renal, the drug ionises in urine and cannot be reabsorbed (slide 14); enterohepatic recycling is biliary, the drug excreted in bile is reabsorbed from the intestine before fecal elimination (slide 18).</li>
<li>EH on slide 4 vs EHs on slide 60: enterohepatic on slide 4; the enzymes that deactivate epoxides on slide 60 (words list).</li>
<li>PO charcoal or anion exchange resin vs NaHCO<sub>3</sub>: charcoal or resin traps the drug in the GI tract to disrupt recycling (slide 18); NaHCO<sub>3</sub> alkalinises urine to trap aspirin (slide 15).</li>
<li>Anion vs cation carriers of tubular secretion: anions OATP1 and 3, MRP2 and 4; cations OCT2, MDR1, MATE1/MATE2K (slide 13).</li>
<li>CKD vs hyperfiltration: a CKD kidney does not filter drugs well; its risk factors, hypertension and diabetes, act through hyperfiltration (point 2).</li>
</ul>
</div>

<div class="gpoll"><b>Poll or practice item on this objective</b>
<ul>
<li>Prep sheet: "What is pH trapping? What is enterohepatic recycling?"</li>
<li>By point 6: a drug that ionises in urine cannot be reabsorbed, is trapped and is eliminated; it needs an ionisable FG (slide 14).</li>
<li>Used therapeutically by alkalinising urine with NaHCO<sub>3</sub> in aspirin overdose (slide 15).</li>
<li>By point 9: drugs excreted via bile into the intestine are reabsorbed ("recycled") before fecal elimination (slide 18).</li>
<li>Examples ezetimibe, isotretinoin, morphine (slide 19).</li>
<li>Disrupted by PO charcoal or anion exchange resins (slide 18).</li>
<li>Asked in class (T): "What if it is a basic drug? How do you treat that using this same concept?"</li>
<li>Acidify the urine (vinegar), by point 7.</li>
</ul>
</div>

<div class="gask"><b>How he will ask it, and how to answer</b>
<ul><li>Short answer in his prep-sheet words: "What is pH trapping? What is enterohepatic recycling?"</li><li>Conceptual multiple choice on urine pH and ionisation, one-sentence stem, short options: (T) "I am going to be conceptual in my questions"; a stem such as "Aspirin overdose is treated by..." keys alkalinising urine with NaHCO<sub>3</sub> (slide 15).</li><li>"All of the following... EXCEPT" or select-all on the factor list (slide 9), the filtration requirements (slide 11: &lt;60 kDa, unbound) or what disrupts enterohepatic recycling (slide 18).</li><li>TRUE/FALSE in the form of his PollEv item "Plasma protein binding, dose, and route of drug administration can influence drug metabolism": urinary pH, kidney disease, protein binding and transporter inhibitors all influence renal elimination.</li></ul>
<ul><li>Step 1 &mdash; classify the drug in the stem by its ionisable FG: carboxylic acid means acidic drug, amine means basic drug.</li><li>No ionisable FG means urine pH does nothing (slide 14 "Key").</li><li>Step 2 &mdash; read the urine pH direction and apply the opposite-pH rule: opposite pH ionises, traps and raises elimination.</li><li>Same pH leaves the drug un-ionised and reabsorbed, so elimination falls.</li><li>Check against the two lines on slide 14.</li><li>Step 3 &mdash; the traps: an option that reverses the direction (acidic urine "increases" elimination of an acidic drug).</li><li>For enterohepatic recycling, an option that stops at the glucuronide (gut glucuronidase cleaves it and the parent recycles, slides 19&ndash;20) or that offers urine alkalinisation as the disruptor (slide 18 says PO charcoal or anion exchange resins).</li><li>And reabsorption and secretion swapped (passive back diffusion versus active transporters).</li></ul>
</div>
</section>

<section class="gobj" id="gobj-8">
<h3>Lecture 15 (MCMet-9_17_2026.pdf) &mdash; Toxicity, four objectives: causes, mechanisms, organ toxicities, defense</h3>
<div class="gbar"><span>OBJECTIVE (his slide 28)</span><b>Identify causes of toxicity; illustrate metabolism toxicity mechanisms; discuss hepatic/extra-hepatic toxicities; describe toxicity defense approaches</b><i>slides 28&ndash;65</i></div>

<h4>Read this first &mdash; the words on these slides</h4>
<dl class="gwords">
<dt>Toxicophore</dt><dd>A toxic or potentially toxic functional group (FG), the first cause on slide 29. (T) "toxicopho, smallest unit that can lead to toxicity", against a pharmacophore, the smallest unit carrying drug activity.</dd>
<dt>On-target vs off-target toxicity</dt><dd>Slide 29 is titled "Causes of Drug On-/Off- Target Toxicity". (T) "Anything it does outside of that is off-target work."</dd>
<dt>Narrow TI drug</dt><dd>Narrow therapeutic index drug, under Dose on slide 29 and Pharmacodynamics on slide 47. (T) his example was lithium.</dd>
<dt>Electrophile, nucleophile, adduct</dt><dd>An electrophilic carbon is electron deficient because an electron-withdrawing group pulls electrons from it; a nucleophilic site on a protein or DNA adds to it, and that covalent product is the adduct. (T) "You have disrupted that protein from its natural state."</dd>
<dt>EH</dt><dd>Epoxide hydrolase, a deactivating enzyme on slide 60; (T) "EHS can deactivate epoxides."</dd>
<dt>GST</dt><dd>Glutathione S-transferase, paired with EH on slide 60; (T) "GSTs can help deactivate reactive halogenated carbons."</dd>
<dt>Hapten</dt><dd>Slide 42: a small molecule or FG forming a hapten&ndash;protein immunogen that triggers hepatic hypersensitivity.</dd>
<dt>ROS / RNS</dt><dd>Reactive oxygen and reactive nitrogen species, slide 41, grouped with non-radical oxidising species.</dd>
<dt>NAPQI</dt><dd>The phase I bioactivation product of acetaminophen (APAP) in overdose, slide 49.</dd>
<dt>hERG</dt><dd>The potassium channel whose inhibition slide 53 links to arrhythmias with terfenadine.</dd>
<dt>Aging</dt><dd>Slide 64: the organophosphate&ndash;cholinesterase complex turning permanent, after which 2-PAM cannot regenerate the enzyme.</dd>
</dl>

<h4>Objective 1 &mdash; identify causes of toxicity (slides 28&ndash;29)</h4>
<div class="gpt">
<h5>1. The objective slide is titled "TOXICITY Dose Matters" (slide 28)</h5>
<ul>
<li>Slide 65 repeats its four objectives as the summary.</li>
<li>(T) "So, dose, dose, dose, dose, very important" &mdash; he opened on dose, then went to narrow therapeutic index drugs.</li>
</ul>
</div>
<div class="gpt">
<h5>2. The six causes, exactly as slide 29 prints them</h5>
<ul>
<li>Toxicophores (toxic/potentially toxic FGs).</li>
<li>Dose (overdose, Narrow TI drugs, etc.).</li>
<li>Drug Interactions (polypharmacy, distribution related, etc.).</li>
<li>Low deactivating Enzyme capacity (genetics, inhibitors, etc.).</li>
<li>Idiosyncratic reactions (unpredictable toxicity).</li>
<li>Hypersensitivity &amp; Immune response related.</li>
<li>(T) on the fourth: where the patient lacks the deactivating enzyme, "in that particular patient, there's a concern for toxicity".</li>
</ul>
</div>
{{fig:tx_causes|Slide 29: the six causes of on- and off-target toxicity}}

<h4>Objective 2 &mdash; illustrate metabolism toxicity mechanisms (slides 30&ndash;44)</h4>
<div class="gpt">
<h5>3. The five toxicophore categories, exactly as slide 30 prints them</h5>
<ul>
<li>Electrophilic carbons.</li>
<li>Electrophilic carbonyls.</li>
<li>Electrophilic double bonds.</li>
<li>Free radicals (ROS/RNS included).</li>
<li>Others: Haptens, Azo, N-OH, etc.</li>
<li>The heading above them reads "Existing or Bioactivated Toxicophores in parent drug, intermediates or metabolites", the two states a toxicophore comes in.</li>
<li>Three of the five are electrophiles running one mechanism: a protein or DNA nucleophile adds to the electron-deficient centre and the adduct disables that molecule.</li>
<li>Radicals instead (T) "propagate more radicals that way, and they can cause reactions like polymerization".</li>
</ul>
</div>
{{fig:tx_mech_toxicophores|Slide 30: the five toxicophore categories in his order}}
<div class="gpt">
<h5>4. The mechanism examples, in slide order (slides 31&ndash;44)</h5>
<ul>
<li>Slides 31&ndash;37 end in the same adduct step and slide 38 names the intermediates.</li>
<li>39&ndash;41 are radical, 42&ndash;44 are the "Others" row of slide 30.</li>
</ul>
</div>
<table class="reftab">
<tr><th>Category</th><th>Existing or bioactivated</th><th>Example</th><th>What forms and what it attacks</th><th>Slide</th></tr>
<tr><td>Electrophilic carbons &mdash; halogenated carbons</td><td>Existing</td><td>Halothane</td><td>Figure shows a generic R-CH<sub>2</sub>-Cl reacting with a protein nucleophile to give R-CH<sub>2</sub>-Nuc-protein; halothane needs CYP450 first, giving an acyl chloride that acylates the protein nucleophile</td><td>31</td></tr>
<tr><td>Electrophilic carbons &mdash; allylic carbons</td><td>Existing</td><td>Tamoxifen (figure)</td><td>The allylic carbon is electron deficient because the adjacent double bond draws electrons away; CYP oxidation exposes a cation at that carbon, which the protein nucleophile attacks</td><td>32</td></tr>
<tr><td>Electrophilic carbons &mdash; epoxide carbons</td><td>Bioactivated</td><td>Carbamazepine (CBZ)</td><td>3A4 gives CBZ-10,11-epoxide; both epoxide carbons are electron deficient and take a protein nucleophile. The "??" printed at the end of the slide's arrow is answered by EH/GST</td><td>33</td></tr>
<tr><td>Electrophilic carbons &mdash; epoxide</td><td>Bioactivated</td><td>Aflatoxin B1 (AFB<sub>1</sub>), pro-carcinogen in moldy corn, peanuts, etc.</td><td>A fungal hepatocarcinogen; the epoxide (figure: 1A2/3A4, rate-limiting step) binds covalently to DNA</td><td>34</td></tr>
<tr><td>Electrophilic carbons &mdash; epoxide</td><td>Bioactivated</td><td>B[a]P (benzo[a]pyrene), pro-carcinogen in smoke, charred foods, etc.</td><td>Metabolised to BPDE, which covalently binds DNA (figure: B[a]P-7,8-epoxide, epoxide hydrolase, B[a]P-7,8-diol, CYP1, then the BPdG adduct)</td><td>35</td></tr>
<tr><td>Electrophilic carbonyls &mdash; aldehydes</td><td>Existing or bioactivated</td><td>Abacavir (ABC, anti-HIV)</td><td>Its primary alcohol is oxidised by alcohol dehydrogenase (ADH) to an aldehyde; the aldehyde carbonyl carbon takes the protein nucleophile, giving protein covalent adducts</td><td>36</td></tr>
<tr><td>Electrophilic double bond intermediates</td><td>Bioactivated</td><td>Tolcapone and diclofenac (figure)</td><td>Each is converted to an intermediate carrying two conjugated (his word: parallel) double bonds, and a nucleophile adds to the electron-deficient carbon of that system</td><td>37</td></tr>
<tr><td>Electrophilic double bond intermediates, named</td><td>Bioactivated</td><td>Quinone, quinonemethide, 3-alkylindole, iminoquinones (figure)</td><td>These four structure types are the named answers to what the slide-37 intermediates are; all present the same electron-deficient double-bond system</td><td>38</td></tr>
<tr><td>Free radicals</td><td>Bioactivated</td><td>Isoniazid (INH), anti-TB drug</td><td>Figure: TB catalase-peroxidase makes the isonicotinoyl radical, which inhibits mycobacterial DNA (the wanted effect); liver N-acetyltransferase (NAT) gives acetylhydrazine, which loses N<sub>2</sub> to an acetyl radical labelled host toxicity</td><td>39</td></tr>
<tr><td>Free radicals, teratogenic</td><td>Bioactivated</td><td>Phenytoin</td><td>Figure: phenytoin radical, then O<sub>2</sub><sup>&ndash;</sup> and HO<sup>.</sup>, then oxidative damage to DNA, protein and lipid, then teratogenesis</td><td>40</td></tr>
<tr><td>ROS/RNS oxidative stress</td><td>Both, and exogenous</td><td>Free radicals and non-free radicals</td><td>Figure lists ROS (superoxide anion, peroxyl, hydroxyl, alkoxyl, hydroperoxyl, lipid peroxyl), RNS (nitric oxide, nitrogen dioxide) and non-radical species (hydrogen peroxide, peroxynitrite, hypochlorous acid). (T) "am I going to ask you to memorize this? No"</td><td>41</td></tr>
<tr><td>Others &mdash; haptens</td><td>Bioactivated</td><td>Ethanol; urushiol (in poison ivy)</td><td>Figure: ADH gives acetaldehyde, 2E1 gives the ethoxy radical; each forms a hapten&ndash;protein immunogen, drawing anti-acetaldehyde and anti-hydroxyethyl antibodies, ending in hepatitis and cirrhosis</td><td>42</td></tr>
<tr><td>Others &mdash; azo</td><td>Bioactivated</td><td>Solvent Red 1, a banned food dye</td><td>Azo reduction to carcinogenic aromatic amines; the figure names 1-amino-2-naphthol and o-anisidine, with the arrow labelled skin azo-reduction</td><td>43</td></tr>
<tr><td>Others &mdash; N-OH</td><td>Bioactivated</td><td>Acetylaminofluorene (AAF)</td><td>N-hydroxylation gives N-OH AAF, then sulfation of that hydroxylamine leads to the carcinogen, which complexes with DNA</td><td>44</td></tr>
</table>
<div class="gpt">
<h5>5. Two places where the transcript adds to the slide</h5>
<ul>
<li>On slide 35 (T) the bay-region epoxide is the dangerous one, the other "is not as dangerous or harmful".</li>
<li>On slide 43 the figure labels the arrow skin azo-reduction, but (T) "let me not put skin. It could be GI, right, bacteria".</li>
<li>So the item keys the reaction, not the site.</li>
</ul>
</div>

<h4>Objective 3 &mdash; discuss hepatic and extra-hepatic toxicities (slides 45&ndash;58)</h4>
<div class="gpt">
<h5>6. Slide 45 is the divider, "Organ Toxicity (Hepatic vs. Extra-hepatic)"</h5>
<ul>
<li>Slide 46 carries the hepatic numbers.</li>
<li>Drug induced hepatotoxicity is the leading cause of liver injury.</li>
<li>&gt;600 drugs are hepatotoxic.</li>
<li>(T) "greater than 600 drugs, and this is old literature too."</li>
</ul>
</div>
<div class="gpt">
<h5>7. The risk factors for hepatotoxicity, exactly as slide 47 prints them</h5>
<ul>
<li>Genetics: polymorphisms (DME phenotypes &ndash; UM to PM).</li>
<li>Age: Elderly are vulnerable due to &darr; clearance/liver mass &amp; blood flow, poor diet, etc.</li>
<li>Gender: F&gt;&gt;M (Acetaminophen/Halothane/Diclofenac/Sulindac).</li>
<li>Alcohol use: Induces liver cirrhosis, GSH depletion.</li>
<li>Liver disease: HIV patients afflicted with hepatitis B or C.</li>
<li>Pharmacokinetics: SR-drugs, long-acting drugs, polypharmacy.</li>
<li>Pharmacodynamics: Overdose, narrow TI drugs.</li>
<li>Herbal remedies: Increase risk of inducing liver toxicity.</li>
<li>DME is a drug metabolising enzyme, UM ultra-rapid and PM poor metaboliser, GSH glutathione, SR sustained release.</li>
</ul>
</div>
<div class="gpt">
<h5>8. Nitrofurantoin, the first hepatic example (slide 48)</h5>
<ul>
<li>Its nitroso and hydroxylamine intermediates can form protein adducts.</li>
<li>(T) a "very useful molecule for UTIs" that still reaches a toxic outcome, and it carries toxicities beyond the hepatic one.</li>
</ul>
</div>
<div class="gpt">
<h5>9. APAP (slide 49)</h5>
<ul>
<li>Acetaminophen is safe at &lt; 4g/day and hepatotoxic at higher doses.</li>
</ul>
</div>
<table class="reftab">
<tr><th>APAP (slide 49)</th><th>Normal dose</th><th>Overdose</th></tr>
<tr><td>Metabolites</td><td>Forms sulfates and glucuronides as major metabolites</td><td>Exhausts the UGTs and STs (UDP-glucuronosyltransferases and sulfotransferases) and undergoes phase I bioactivation to NAPQI</td></tr>
<tr><td>Slide arrow</td><td>&nbsp;</td><td>Labelled 2E1/1A2/3A4, then NAPQI, then hepatic proteins</td></tr>
</table>
{{fig:tx_apap_slide|Slide 49: normal-dose conjugation against overdose bioactivation to NAPQI}}
<div class="gpt">
<h5>10. Nitrosamines (slide 50)</h5>
<ul>
<li>NDSRIs, nitrosamine drug substance related impurities: NDMA in ranitidine products, hepatotoxic and implicated in other cancers.</li>
<li>(T) NDMA reaches a reactive methyldiazonium intermediate and proteins take that methyl group; a colleague in industry "couldn't even proceed with filing With the FDA without showing that our drug Was nitrosamine free".</li>
</ul>
</div>
<div class="gpt">
<h5>11. The extra-hepatic sites, exactly as slide 51 lists them</h5>
<ul>
<li>Heart &ndash; Cardiotoxicity.</li>
<li>Blood &ndash; Hematotoxicity.</li>
<li>Lungs &ndash; Pulmonary toxicity.</li>
<li>Neurons &ndash; Neurotoxicity.</li>
<li>Genitourinary &ndash; Nephrotoxicity, Bladder, Genital.</li>
<li>Dermal &ndash; Skin hypersensitivity.</li>
<li>Slides 52&ndash;58 give the examples.</li>
</ul>
</div>
<table class="reftab">
<tr><th>Organ and toxicity</th><th>Drug</th><th>Mechanism as the slide states it</th><th>Slide</th></tr>
<tr><td>Heart, cardiotoxicity</td><td>Doxorubicin, an anticancer anthracycline</td><td>Due to increased mitochondrial Fe and ROS; induces congestive heart failure (CHF) in 2-3 days</td><td>52</td></tr>
<tr><td>Heart, cardiotoxicity</td><td>Terfenadine, an antihistamine</td><td>Due to hERG inhibition; parent drug accumulation gives off-target pharmacology, and interaction with hERG gives cardiac arrhythmias. (T) its metabolite fexofenadine has no hERG inhibition and is similarly acting, so the metabolite is the marketed drug</td><td>53</td></tr>
<tr><td>Blood, hematotoxicity</td><td>Clozapine, an antipsychotic</td><td>An imine covalently binds to neutrophils, giving agranulocytosis, that is leukopenia, a fall in white blood cells. The slide prints the word as "Agranulocytocytosis". (T) "Immediately you start a patient on clozapine, you are going to have to monitor their blood count"</td><td>54</td></tr>
<tr><td>Lungs, pulmonary toxicity</td><td>Amiodarone, an antiarrhythmic, cLogP=9</td><td>Drug and metabolite accumulation: excessive amiodarone and its des-ethyl metabolite in lung tissue</td><td>55</td></tr>
<tr><td>Neurons, neurotoxicity</td><td>MPTP (1-methyl-phenyl-1,2,5,6-tetrahydropyridine), a designer drug</td><td>Induces Parkinson's symptoms due to the neurotoxic MPP<sup>+</sup> (1-methyl-4-phenylpyridinium) formed via MAO-B</td><td>56</td></tr>
<tr><td>Genitourinary, nephrotoxicity</td><td>Ethylene glycol (EG)</td><td>A sweet, odour-less liquid metabolised by ADH and ALDH (aldehyde dehydrogenase) to toxic species; accidental and intentional poisonings, the slide citing 66 child deaths linked to cough syrup in Gambia. (T) the end product oxalic acid "comes with a nephrotoxic component" and blocks the kidneys</td><td>57</td></tr>
<tr><td>Dermal, skin hypersensitivity</td><td>Sulfamethoxazole, antibiotic hypersensitivity</td><td>CYP metabolism leads to nitroso haptens, which trigger an immune response</td><td>58</td></tr>
</table>
<div class="gpt">
<h5>12. One number to state both ways</h5>
<ul>
<li>Slide 55 prints amiodarone cLogP=9.</li>
<li>(T) "when I saw it, it was 9, it may be 7 to 9".</li>
<li>An exam from this deck keys 9, and keys why it matters: that cLogP accumulates both parent and des-ethyl metabolite in lung tissue.</li>
</ul>
</div>

<h4>Objective 4 &mdash; describe toxicity defense approaches (slides 59&ndash;65)</h4>
<div class="gpt">
<h5>13. Slide 59 is the divider, "Toxicity Defense &amp; Treatments"; slide 60 gives the enzyme defense</h5>
<ul>
<li>Electrophile deactivation by GSTs and EHs.</li>
<li>(T) assigns each enzyme its substrates: GSTs take halogenated carbons and some electrophilic double bonds, EHs take epoxides.</li>
<li>It is why dose decides the outcome &mdash; (T) "with too much dose, you can overwhelm that".</li>
</ul>
</div>
<div class="gpt">
<h5>14. Slide 61 is the second enzyme defense, oxidative stress defense by antioxidant enzymes</h5>
<ul>
<li>(T) with their substrates: catalase for hydrogen peroxide, glutathione peroxidase for lipid peroxides, glutathione reductase for disulfides, superoxide dismutase reducing superoxide anion to hydrogen peroxide, and cytochrome C.</li>
<li>(T) in Alzheimer's "the expression of these enzymes is low. So the brain is prone to ... Oxidative stress."</li>
</ul>
</div>
<div class="gpt">
<h5>15. The treatment list, exactly as slide 62 prints it</h5>
<ul>
<li>Antidotes to reverse or reduce toxicity.</li>
<li>Supportive care.</li>
<li>PO activated charcoal (within 1h of toxin ingestion).</li>
<li>Enhanced elimination (forced diuresis, ion trapping, dialysis, hemoperfusion, hemofiltration, exchange transfusion, etc.).</li>
<li>PO is per os, by mouth.</li>
<li>Ion trapping is the pH trapping of slides 14&ndash;15.</li>
<li>PO charcoal is the intervention that disrupts enterohepatic recycling on slide 18.</li>
</ul>
</div>
<div class="gpt">
<h5>16. The two named antidotes (slides 63&ndash;64)</h5>
<ul>
<li>2-PAM's two printed disadvantages: non-BBB penetrant, so it does not cross the blood-brain barrier, and it must be given before "aging", after which (T) the bond "can remain and become permanent".</li>
</ul>
</div>
<table class="reftab">
<tr><th>The two named antidotes</th><th>NAC</th><th>2-PAM</th></tr>
<tr><td>Name</td><td>N-acetylcysteine</td><td>Pralidoxime, an oxime</td></tr>
<tr><td>Antidote for</td><td>APAP toxicity</td><td>Organophosphate toxicity</td></tr>
<tr><td>Works by</td><td>Electrophile deactivation; (T) it is "the molecule that mimics glutathione", its nucleophilic site adding to NAPQI to give a water-soluble conjugate</td><td>Regenerates the cholinesterases AChE and BuChE (acetylcholinesterase and butyrylcholinesterase)</td></tr>
</table>
{{fig:tx_2pam|Slide 64: 2-PAM cleaving the organophosphate off the cholinesterase, before aging}}

<div class="ghook"><b>Memory hook</b> Of slide 30's five categories, the first three run one mechanism, nucleophile plus electrophile equals adduct; the fourth propagates; the fifth needs the immune system or a second enzymatic step. For the two extra-hepatic cases most easily swapped, the separating feature is which species is toxic: terfenadine as the accumulated parent at hERG (slide 53), clozapine as its imine metabolite binding neutrophils (slide 54). EH opens epoxides, GST takes halogenated carbons and double bonds (slide 60).</div>

<div class="gtell"><b>Tell apart</b>
<ul>
<li>Toxicophore vs pharmacophore: the smallest unit that can lead to toxicity against the smallest unit carrying drug activity (words list).</li>
<li>CYPs vs GSTs and EHs: the CYPs create the electrophiles (slides 31, 33, 37, 49); GSTs and EHs deactivate them (slide 60).</li>
<li>PO activated charcoal vs ion trapping, both on slide 62: charcoal within 1h of ingestion, the intervention that disrupts enterohepatic recycling (slide 18); ion trapping is the pH trapping of slides 14&ndash;15.</li>
<li>MPTP vs MPP<sup>+</sup>: MPTP is the designer drug; MPP<sup>+</sup>, formed via MAO-B, is the neurotoxic species (slides 52&ndash;58 table).</li>
<li>Terfenadine vs fexofenadine: the parent inhibits hERG; the metabolite fexofenadine has no hERG inhibition and is the marketed drug (slide 53 row).</li>
<li>Isoniazid's two radicals: the isonicotinoyl radical inhibits mycobacterial DNA, the wanted effect; the acetyl radical from acetylhydrazine is the host toxicity (slide 39).</li>
</ul>
</div>

<div class="gpoll"><b>Poll or practice item on this objective</b>
<ul>
<li>Slides 28&ndash;65 carry no PollEv item; from his prep sheet: "What enzyme family is essential for electrophilic xenobiotic deactivation? A. UGT B. STs C. NAT D. CYP E. GSTs".</li>
<li>A. UGT &mdash; FALSE, glucuronidation, not the deactivator of point 13.</li>
<li>B. STs &mdash; FALSE, sulfation, which on slide 49 saturates before NAPQI forms.</li>
<li>C. NAT &mdash; FALSE; on slide 39 liver NAT gives acetylhydrazine, which loses N<sub>2</sub> to the toxic acetyl radical.</li>
<li>D. CYP &mdash; FALSE, the CYPs generate these electrophiles (slides 31, 33, 37, 49).</li>
<li>E. GSTs &mdash; TRUE, slide 60, paired with EHs.</li>
<li>Answer: E.</li>
<li>His other prep-sheet item, "Identify the toxicophoric functionalities discussed in class", is answered by point 3.</li>
</ul>
</div>

<div class="gask"><b>How he will ask it, and how to answer</b>
<ul><li>Short-answer listing, in his prep-sheet words: "Identify the toxicophoric functionalities discussed in class." Give slide 30's five categories in order, one example each.</li><li>Single best answer on an enzyme family: "What enzyme family is essential for electrophilic xenobiotic deactivation?" &mdash; slide 60, GSTs, with EHs for epoxides.</li><li>An EXCEPT or select-two stem on one slide's list, the pattern of his PollEv items: options from the six causes of slide 29 or the eight risk factors of slide 47, one altered.</li><li>A scheme with no names, "What enzymes are implicated in the reaction below?" &mdash; likely slide 33, 36, 39 or 49; or a drug named with the organ and reactive species wanted, slides 52&ndash;58.</li></ul>
<ul><li>Step 1 &mdash; read whether the stem says parent drug or metabolite.</li><li>Slide 53 turns on the parent accumulating; slides 49, 54 and 56 on the metabolite.</li><li>Step 2 &mdash; name the electrophile class before the drug: epoxide (slides 33&ndash;35), aldehyde (36), double bond system (37&ndash;38, 49, 54), radical (39&ndash;41), hapten (42, 58).</li><li>Step 3 &mdash; check what the toxicity is measured against: dose for APAP (&lt; 4g/day, slide 49), time for doxorubicin (2-3 days, slide 52) and charcoal (within 1h, slide 62), lipophilicity for amiodarone (cLogP=9, slide 55).</li><li>Step 4 &mdash; the trap is answering CYP where the stem asks for deactivation: CYPs create these toxicophores (slides 31, 33, 37, 49), the deactivators are GSTs and EHs (slide 60).</li><li>The second trap is naming the site rather than the reaction on slide 43.</li></ul>
</div>
</section>
`;
