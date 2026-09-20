const REFERENCE_HTML = `
<h2>Reference</h2>
<p class="sub">The tables the questions keep coming back to. Nothing here is scored.</p>

<h3>Phase 2: group → enzyme → cofactor → conjugate</h3>
<table class="reftab"><thead><tr>
<th>Target group</th><th>Enzyme</th><th>Cofactor</th><th>Conjugate formed</th></tr></thead><tbody>
<tr><td>-OH, -CO<sub>2</sub>H, -NH<sub>2</sub>, -SH</td><td>UDP-glucuronosyltransferases (UGTs), microsomal</td><td>UDP-glucuronic acid (UDPGA)</td><td>Glucuronide</td></tr>
<tr><td>-OH (alkyl and aryl), aromatic amines</td><td>Sulfotransferases (STs / SULTs), cytosolic</td><td>PAPS</td><td>Sulfate</td></tr>
<tr><td>Electrophilic carbons: R-X, epoxides</td><td>Glutathione S-transferases (GSTs)</td><td>Glutathione (GSH)</td><td>Glutathione-S conjugate</td></tr>
<tr><td>Primary alkyl and aryl amines, sulfonamides</td><td>N-acetyltransferases (NAT1, NAT2)</td><td>Acetyl-CoA</td><td>N-acetylated product</td></tr>
<tr><td>-CO<sub>2</sub>H</td><td>Acyl synthetase</td><td>Acetyl-CoA + glycine or glutamine</td><td>Amino acid conjugate</td></tr>
<tr><td>-OH, -NH<sub>2</sub>, -SH</td><td>Methyltransferases (MTs)</td><td>S-adenosylmethionine (SAM)</td><td>Methylated product</td></tr>
</tbody></table>
<p class="sub">Lecture #11 slides 46–57; Lecture #14 slides 29–30. NAT2 is polymorphic: slow and fast acetylators.</p>

<h3>Phase 1 enzymes and what they do</h3>
<table class="reftab"><thead><tr><th>Enzyme</th><th>Reaction</th><th>Note</th></tr></thead><tbody>
<tr><td>CYP450</td><td>Aliphatic, allylic, benzylic and aromatic hydroxylation; N-, O-, S-dealkylation; dehalogenation; epoxidation</td><td>Needs CYP450 reductase, NADPH and molecular O<sub>2</sub></td></tr>
<tr><td>Alcohol dehydrogenase (ADH)</td><td>1° alcohol → aldehyde</td><td>First half of the ethanol pathway</td></tr>
<tr><td>Aldehyde dehydrogenase (ALDH)</td><td>Aldehyde → carboxylic acid</td><td>Inhibited by disulfiram and pyrazole</td></tr>
<tr><td>Monoamine oxidase (MAO)</td><td>Amine → aldehyde (oxidative deamination)</td><td>Tyramine + MAOI = hypertensive crisis</td></tr>
<tr><td>Flavin monooxygenase (FMO)</td><td>Oxidizes amines, amides and thiols</td><td>CYPs can also perform N-oxidation</td></tr>
<tr><td>Aldo-keto reductase (AKR)</td><td>Aldehyde or ketone → alcohol</td><td>Doxorubicin → cardiotoxic doxorubicinol</td></tr>
<tr><td>Azo-reductase</td><td>Azo (N=N) → two amines</td><td>Intestinal microbiota; activates sulfasalazine</td></tr>
<tr><td>Nitro-reductase</td><td>-NO<sub>2</sub> → -NH<sub>2</sub></td><td>Via nitroso and hydroxylamine intermediates</td></tr>
<tr><td>Carboxylesterase (CE)</td><td>Hydrolyzes esters, carbamates, amides and carbonates</td><td>Called amidase when acting on amides</td></tr>
<tr><td>Epoxide hydrolase (EH)</td><td>Epoxide → diol</td><td>Detoxifies, alongside GST</td></tr>
</tbody></table>

<h3>Hydrolysis products, by what sits on the carbonyl carbon</h3>
<table class="reftab"><thead><tr><th>Group</th><th>On the carbonyl carbon</th><th>Hydrolysis gives</th></tr></thead><tbody>
<tr><td>Ester</td><td>one O</td><td>carboxylic acid + alcohol</td></tr>
<tr><td>Amide</td><td>one N</td><td>carboxylic acid + amine</td></tr>
<tr><td>Carbamate</td><td>one O and one N</td><td>alcohol + amine (+ CO<sub>2</sub>)</td></tr>
<tr><td>Carbonate</td><td>two O</td><td>two alcohols (+ CO<sub>2</sub>)</td></tr>
</tbody></table>

<h3>CYP isoforms worth knowing cold</h3>
<table class="reftab"><thead><tr><th>Isoform</th><th>Character</th><th>Named substrates</th></tr></thead><tbody>
<tr><td>1A2</td><td>Aryl amines and heterocyclics; induced by PAHs (tobacco smoke), dioxins, omeprazole; polymorphic</td><td>Caffeine, imipramine, haloperidol</td></tr>
<tr><td>2C9 / 2C19</td><td>~25% of clinically important drugs; both inducible and polymorphic</td><td>(S)-warfarin, phenytoin, (S)-mephenytoin, tolbutamide, glipizide</td></tr>
<tr><td>2D6</td><td>Only ~3% of liver CYPs but ~21% of drugs; minimal induction; UM / EM / IM / PM phenotypes; stereoselective</td><td>Codeine, venlafaxine</td></tr>
<tr><td>2E1</td><td>Environmental chemicals; induced by ethanol and ketones; key in halogenated hydrocarbon toxicity</td><td>Ethanol, acetaminophen (toxicity), halogenated HCs</td></tr>
<tr><td>3A4</td><td>~1/3 of liver CYPs and ~1/3 of drugs; drives first-pass; in liver, intestine and lungs; induction and inhibition are major issues</td><td>Large substrate list; grapefruit juice interaction</td></tr>
</tbody></table>

<h3>Inducers and inhibitors</h3>
<table class="reftab"><thead><tr><th>Common inducers</th><th>Common inhibitors</th></tr></thead><tbody>
<tr><td>Barbiturates, carbamazepine, phenytoin, rifampin, St John's wort, ethanol, tobacco, nevirapine.
Dietary: cruciferous indoles, PAHs from smoked food. Industrial: dioxin, PCBs.</td>
<td>Clarithromycin, erythromycin, azole antifungals (ketoconazole, itraconazole), cimetidine, protease inhibitors, grapefruit juice, quinidine, omeprazole.</td></tr>
</tbody></table>
<p class="sub">Induction works by raising transcription, so it takes days. Inhibition acts on enzyme already present, so it is immediate.</p>

<h3>Direction of an interaction</h3>
<table class="reftab"><thead><tr><th></th><th>Active species is the parent drug</th><th>Active species is the metabolite (prodrug)</th></tr></thead><tbody>
<tr><td><b>Inhibition / poor metabolizer</b></td><td>More effect — warfarin, glyburide</td><td>Less effect — tramadol, clopidogrel</td></tr>
<tr><td><b>Induction / ultrarapid metabolizer</b></td><td>Less effect</td><td>More effect, risk of toxicity</td></tr>
</tbody></table>

<h3>Elimination</h3>
<table class="reftab"><thead><tr><th>Route</th><th>What leaves this way</th><th>Mechanism</th></tr></thead><tbody>
<tr><td>Renal / urinary — <b>major</b></td><td>Polar, free (unbound) drug and metabolites</td><td>Glomerular filtration + active transport</td></tr>
<tr><td>Hepatic / bile / fecal — largest non-renal</td><td>Lipid-soluble drugs and metabolites; steroids, digoxin, many anticancer agents</td><td>Active transport</td></tr>
<tr><td>Intestinal</td><td>Unabsorbed oral drug, GI and biliary metabolites</td><td>Efflux back into gut + GI metabolism</td></tr>
<tr><td>Lungs / exhalation</td><td>Volatile or gaseous agents; inhaled anesthetics</td><td>Passive diffusion</td></tr>
<tr><td>Milk, sweat, tears, hair, saliva — minor</td><td>Small amounts; used for monitoring and testing</td><td>Various; sweat carries both polar and lipophilic drug</td></tr>
</tbody></table>
<p class="sub">Glomerular filtration needs low molecular weight (&lt;60 kDa) and unbound drug. In the tubule, the ionized form is excreted and the un-ionized form is reabsorbed by passive back diffusion.</p>

<h3>pH trapping</h3>
<table class="reftab"><thead><tr><th>Urine</th><th>Acidic drug</th><th>Basic drug</th></tr></thead><tbody>
<tr><td>Acidified</td><td>Less ionized → reabsorbed → elimination falls</td><td>More ionized → trapped → elimination rises</td></tr>
<tr><td>Alkalinized</td><td>More ionized → trapped → elimination rises</td><td>Less ionized → reabsorbed → elimination falls</td></tr>
</tbody></table>
<p class="sub">Requirement: the drug or metabolite must have an ionizable functional group. Therapeutic example: aspirin overdose treated by alkalinizing urine with sodium bicarbonate.</p>

<h3>Toxicophores</h3>
<table class="reftab"><thead><tr><th>Category</th><th>What to look for</th><th>Example</th></tr></thead><tbody>
<tr><td>Electrophilic carbons (existing)</td><td>Carbon bearing a halogen; allylic carbon next to a C=C</td><td>Halothane</td></tr>
<tr><td>Electrophilic carbons (bioactivated)</td><td>Epoxide ring</td><td>Carbamazepine epoxide; aflatoxin B1; benzo[a]pyrene bay-region epoxide</td></tr>
<tr><td>Electrophilic carbonyls</td><td>Aldehyde</td><td>Acetaldehyde from ethanol</td></tr>
<tr><td>Electrophilic double bonds</td><td>Parallel conjugated double bonds</td><td>NAPQI from acetaminophen; diclofenac; clozapine metabolite</td></tr>
<tr><td>Free radicals</td><td>The dot notation; ROS and RNS</td><td>Isoniazid; phenytoin (teratogenic)</td></tr>
<tr><td>Others</td><td>Haptens, azo groups, N-hydroxy (hydroxylamine)</td><td>Acetaldehyde and ethoxy radical; Solvent Red; 2-acetylaminofluorene</td></tr>
</tbody></table>

<h3>Organ toxicity examples</h3>
<table class="reftab"><thead><tr><th>Organ</th><th>Drug</th><th>Mechanism</th></tr></thead><tbody>
<tr><td>Liver</td><td>Acetaminophen</td><td>Conjugation exhausted → CYP forms NAPQI → hepatic adducts</td></tr>
<tr><td>Liver</td><td>Nitrofurantoin</td><td>Nitroso and hydroxylamine intermediates</td></tr>
<tr><td>Heart</td><td>Doxorubicin</td><td>Radical species → reactive oxygen species</td></tr>
<tr><td>Heart</td><td>Terfenadine</td><td>hERG potassium channel inhibition by the parent drug</td></tr>
<tr><td>Blood</td><td>Clozapine</td><td>Reactive imine binds neutrophils → agranulocytosis</td></tr>
<tr><td>Lung</td><td>Amiodarone</td><td>Very high log P → drug and metabolite accumulate</td></tr>
<tr><td>Nerve</td><td>MPTP</td><td>Metabolite kills dopaminergic cells</td></tr>
<tr><td>Kidney</td><td>Ethylene glycol</td><td>ADH/ALDH → oxalic acid → calcium oxalate blocks nephrons</td></tr>
<tr><td>Skin</td><td>Sulfamethoxazole</td><td>Reactive species act as haptens → hypersensitivity</td></tr>
</tbody></table>

<h3>Defense and antidotes</h3>
<table class="reftab"><thead><tr><th>Threat</th><th>Defense or antidote</th></tr></thead><tbody>
<tr><td>Electrophiles (halogenated carbons, epoxides, double bonds)</td><td>GSTs and epoxide hydrolases</td></tr>
<tr><td>Superoxide anion</td><td>Superoxide dismutase → hydrogen peroxide</td></tr>
<tr><td>Hydrogen peroxide</td><td>Catalase</td></tr>
<tr><td>Lipid peroxides</td><td>Glutathione peroxidase</td></tr>
<tr><td>Disulfides</td><td>Glutathione reductase</td></tr>
<tr><td>Acetaminophen overdose</td><td>N-acetylcysteine — nucleophilic thiol mimics glutathione</td></tr>
<tr><td>Organophosphate poisoning</td><td>2-PAM (pralidoxime) — regenerates acetylcholinesterase, urgent before aging</td></tr>
<tr><td>Recently ingested toxin, enterohepatic recycling</td><td>Oral activated charcoal within about 1 hour</td></tr>
</tbody></table>

<h3>Transporters</h3>
<table class="reftab"><thead><tr><th></th><th>ABC</th><th>SLC</th></tr></thead><tbody>
<tr><td>Energy</td><td>Primary active, uses ATP</td><td>Secondary active, rides an existing gradient</td></tr>
<tr><td>Direction</td><td>Efflux</td><td>Mostly influx</td></tr>
<tr><td>Members</td><td>MDR1 (P-glycoprotein), MRP, BCRP</td><td>OATP, OAT, OCT, MCT, PEPT, nucleoside transporters</td></tr>
<tr><td>Effect on bioavailability</td><td>Lowers it; inhibiting the pump raises it</td><td>Raises it; exploited for delivery (valacyclovir via PEPT1)</td></tr>
</tbody></table>
<p class="sub">P-gp substrates: loperamide, digoxin, fexofenadine, paclitaxel. PEPT1 substrates: beta-lactams (cephalexin), ACE inhibitors (enalapril).</p>

<h3>Bond strengths at the receptor</h3>
<table class="reftab"><thead><tr><th>Interaction</th><th>Strength</th><th>Note</th></tr></thead><tbody>
<tr><td>Covalent</td><td>50–150 kcal/mol</td><td>Irreversible; phenoxybenzamine</td></tr>
<tr><td>Ionic</td><td>5–10 kcal/mol</td><td>Charged drug group with charged side chain</td></tr>
<tr><td>Hydrogen bond</td><td>2–5 kcal/mol</td><td>Needs a donor and an acceptor</td></tr>
<tr><td>Hydrophobic / van der Waals</td><td>0.5–1 kcal/mol</td><td>Weakest individually, numerous collectively</td></tr>
</tbody></table>

<h3>Acids, bases and neutral groups</h3>
<table class="reftab"><thead><tr><th>Character</th><th>Groups</th><th>What it means at pH 7.4</th></tr></thead><tbody>
<tr><td>Acidic</td><td>Carboxylic acid, phenol, sulfonamide, imide, thiol, enol</td><td>Donates a proton to give an anion; a low pKa means a strong acid</td></tr>
<tr><td>Basic</td><td>Aliphatic amine (1&deg;, 2&deg;, 3&deg;), amidine, guanidine; aryl amines are weakly basic</td><td>Accepts a proton to give a cation; a high pKa means a strong base</td></tr>
<tr><td>Neutral</td><td>Alcohol, ether, ester, amide, ketone, aldehyde, alkene, halide</td><td>Neither donates nor accepts at physiological pH, so ionization does not apply</td></tr>
<tr><td>Quaternary amine</td><td>N with four substituents</td><td>Permanently charged whatever the pH, so it cannot cross into the CNS passively</td></tr>
</tbody></table>
<p class="sub">Physicochemical Properties 1 (082726_PhysicochemicalProp1.pdf) slides 11&ndash;22; the pKa direction rule is on slide 18. Quaternary amine: functional group deck slide 43.</p>

<h3>Percent ionization &mdash; the form used in this course</h3>
<p class="sub">For an acid: <b>pKa = pH + log([Unionized] / [Ionized])</b>. Substitute, solve for the ratio, then convert the ratio to a percentage. A base uses the same equation with the ratio inverted.</p>
{{fig:pp_ionization_worked|Aspirin worked in full, 082726_PracticeProblemAnswers.pdf slide 2}}
<table class="reftab"><thead><tr><th>Drug</th><th>pKa</th><th>Ratio at pH 7.0</th><th>% ionized</th></tr></thead><tbody>
<tr><td>Aspirin</td><td>3.5</td><td>1 / 3162.27</td><td>99.96</td></tr>
<tr><td>Indomethacin</td><td>4.5</td><td>1 / 316.227</td><td>99.68</td></tr>
<tr><td>Ibuprofen</td><td>5.2</td><td>1 / 63.09</td><td>98.43</td></tr>
<tr><td>Phenobarbital</td><td>7.4</td><td>2.51 / 1</td><td>28.49</td></tr>
</tbody></table>
<p class="sub">082726_PracticeProblemAnswers.pdf slides 1&ndash;5. Phenobarbital's 28.49% comes from rounding 10<sup>0.4</sup> to 2.51 before the final division; carrying 2.5119 through gives 28.47%. Amobarbital, pKa 8.0, is the worked case in Prop 1 slides 29&ndash;30: 100% unionized at pH 2.0 and 80% unionized at pH 7.4.</p>

<h3>ClogP by fragment sum</h3>
{{fig:pp_pi_fragments|&pi; values by fragment, 090326_PhysicochemicalProp3.pdf slide 15}}
<p class="sub">Add one &pi; value per fragment. Ibuprofen on slide 16: six aliphatic carbons (+3.0) + one phenyl (+2.0) + one carboxyl (&minus;0.7) = <b>+4.3</b>. Count only carbons that are not already inside another fragment &mdash; the carboxyl carbon and the six aromatic carbons belong to their own fragments.</p>
<table class="reftab"><thead><tr><th>Drug pair</th><th>ClogP</th><th>Consequence</th></tr></thead><tbody>
<tr><td>Enalaprilat &rarr; enalapril (ethyl ester)</td><td>1.17 &rarr; 1.77</td><td>Oral bioavailability 30&ndash;40% &rarr; 50&ndash;70%</td></tr>
<tr><td>Haloperidol &rarr; haloperidol decanoate</td><td>3.49 &rarr; 7.3</td><td>Depot into fat; monthly intramuscular dosing</td></tr>
<tr><td>Atenolol vs propranolol</td><td>0.5 vs 2.65</td><td>Only propranolol crosses the blood&ndash;brain barrier (range 1.5&ndash;2.7, average 2.1)</td></tr>
</tbody></table>
<p class="sub">Physicochemical Properties 3 slides 15&ndash;23. Too hydrophilic gives poor membrane penetration; too lipophilic gives poor aqueous solubility and tissue accumulation.</p>

<h3>Distribution: volume and protein binding</h3>
{{fig:ad_vd_amiodarone|Amiodarone against chlorpropamide, 090426_Distribution.pdf slide 10}}
<p class="sub">V<sub>d</sub> is a hypothetical volume, not a physical one. A low V<sub>d</sub> means the drug stays in the vascular compartment; a high V<sub>d</sub> means it leaves the blood for tissue. Amiodarone 4620 L / 70 kg, highly lipophilic, taken up by fat, liver, lungs and skin, half-life 40&ndash;55 days. Chlorpropamide 6.8 L / 70 kg, half-life 36 hours.</p>
<table class="reftab"><thead><tr><th>Binding</th><th>Drugs</th><th>Note</th></tr></thead><tbody>
<tr><td>Least bound</td><td>Acetaminophen 10&ndash;25%; atenolol 6&ndash;16%</td><td>Little reservoir; free concentration tracks total</td></tr>
<tr><td>Moderate</td><td>Terbutaline 25%; zidovudine 25&ndash;38%</td><td></td></tr>
<tr><td>Highly bound</td><td>Furosemide 91&ndash;99%; phenytoin ~90%; ibuprofen &ge;90%</td><td>Displacement and low albumin both raise free drug</td></tr>
</tbody></table>
<p class="sub">090426_Distribution.pdf slides 20&ndash;26. Acidic drugs bind serum albumin. Binding is reversible and the bound drug is inert. In hypoalbuminemia the free concentration rises while the measured total can stay in range. Sequestration sites: fat, bone and teeth, the blood&ndash;brain barrier, and plasma protein (slides 16&ndash;18).</p>

<h3>Bioisosteres</h3>
<table class="reftab"><thead><tr><th>Class</th><th>Definition</th><th>Subcategories and examples</th></tr></thead><tbody>
<tr><td>Classical</td><td>Similar valence electron configurations and atom counts</td><td>Monovalent (F for H), divalent, trivalent, tetrasubstituted, ring equivalents. Ranitidine's furan &rarr; nizatidine's thiazole raised oral bioavailability from ~50% to ~90%. 5-fluorouracil replaces H with F.</td></tr>
<tr><td>Non-classical</td><td>Do <i>not</i> share valence electron configurations or atom counts, but may still show similar biological activity</td><td>Exchangeable groups: tetrazole for carboxylic acid (losartan); sulfonamide for isoproterenol's <i>m</i>-OH, matched on pKa and hydrogen bonding; sulfhydryl for carboxylic acid (captopril against enalapril and lisinopril). Rings against non-cyclic structures: the triptans.</td></tr>
</tbody></table>
{{fig:bi_tetrazole|Tetrazole for carboxylic acid, 082626_Bioisosterism.pdf slide 14}}
<p class="sub">082626_Bioisosterism.pdf slides 3&ndash;16. Burger's definition: near-equal molecular shapes and volumes, approximately the same electron distribution, similar physical properties, and related biological properties.</p>

<h3>Stereochemistry</h3>
{{fig:st_rs_worked|The R/S rule worked through, 081926_Stereochemistry.pdf slide 13}}
<table class="reftab"><thead><tr><th>Term</th><th>Definition</th><th>Note</th></tr></thead><tbody>
<tr><td>Chiral centre</td><td>An atom carrying four different groups; usually carbon in drugs</td><td>Slide 8</td></tr>
<tr><td>R / S</td><td>Rank the four groups by atomic number, view from the side opposite the lowest priority, then read 1&rarr;2&rarr;3: clockwise is R, counterclockwise is S</td><td>Slides 9&ndash;13. If the lowest priority points toward you, read the rotation and reverse it.</td></tr>
<tr><td>Enantiomers</td><td>Non-superimposable mirror images</td><td>Identical boiling point, melting point, density and refractive index; they differ in the direction of optical rotation and in interaction with other chiral systems, including receptors</td></tr>
<tr><td>Diastereomers</td><td>Non-superimposable, non-mirror-image stereoisomers</td><td>Two centres differing at one and matching at the other. Includes double-bond and ring cases.</td></tr>
<tr><td>Absolute configuration vs rotation</td><td>R/S is assigned from structure; (+) and (&minus;) are measured</td><td>Slides 17&ndash;18: knowing a compound is R does <i>not</i> tell you which way it rotates light</td></tr>
<tr><td>E / Z</td><td>Used instead of cis/trans when the double-bond carbons carry more than two different substituent types</td><td>Slides 22&ndash;25</td></tr>
</tbody></table>
<p class="sub">Easson&ndash;Stedman: activity differences between enantiomers follow from a three-point attachment to the receptor, which only one of the pair can make (slides 19&ndash;20).</p>

<h3>Heterocyclic rings by size and heteroatom</h3>
{{fig:fgd_ring_5_n|Five-sided, one N, MCFGs8_1718_26.pdf slide 76}}
{{fig:fgd_ring_5_2n|Five-sided, two N, slide 79}}
{{fig:fgd_ring_6_n|Six-sided, one N, slide 82}}
{{fig:fgd_ring_6_2n_1|Six-sided, two N, slide 83}}
<p class="sub">MCFGs8_1718_26.pdf slides 73&ndash;88. Saturated versus aromatic is the distinction the questions keep returning to: pyrrole against pyrrolidine, pyridine against piperidine, pyrazine against piperazine. The aromatic ring's nitrogen lone pair is tied up in the ring system, which is why it is far less basic than the saturated equivalent.</p>

<h3>Electron-donating and electron-withdrawing groups</h3>
{{fig:fgd_edg_ewg|EDGs against EWGs, MCFGs8_1718_26.pdf slide 94}}
<p class="sub">An electron-withdrawing group next to an acidic proton stabilises the anion left behind, so it lowers the pKa and strengthens the acid. An electron-donating group does the reverse. The same logic explains why an aryl amine is weakly basic: the ring draws the nitrogen's lone pair away, so it is less available to accept a proton.</p>

`;
