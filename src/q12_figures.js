/* ==========================================================================
   QUESTIONS BUILT ON HARVESTED SLIDE FIGURES THAT HAD NO QUESTION
   ==========================================================================
   Eight figures were cropped from Lectures 14 and 15 and never attached to a
   question. Each question here is the point the figure makes, with the figure
   shown in the concept block after the answer.
   ========================================================================== */
QUESTIONS.push(

/* ═══════════ LECTURE 14 — functional groups and metabolism ═══════════ */
{id:'fg-22', prof:'Sikazwe', tier:'new', topic:'fgdm', sub:'oh', concept:'tertiary-alcohol-fate',
 tags:['reasoning','structure'], source:'slide',
 stem:'A drug carries a tertiary alcohol. Which Phase 1 fate does it have, and what route is left for that hydroxyl?',
 options:[
  {t:'Phase 1 oxidation leaves it unchanged, because the carbinol carbon has no hydrogen to lose; Phase 2 can still conjugate the hydroxyl as a sulfate or a glucuronide', correct:true,
   why:'Lecture 14 slide 22 draws the three classes. A primary alcohol goes to the aldehyde and on to the acid, a secondary alcohol to the ketone, and the tertiary alcohol is crossed out and marked unchanged. Oxidation of an alcohol removes the hydrogen on the carbon bearing the oxygen, and a tertiary carbinol carbon carries three carbons and no hydrogen. The right-hand panel shows the Phase 2 routes that remain: sulfation and glucuronidation of R-OH.'},
  {t:'It is oxidised to a ketone, like a secondary alcohol', correct:false,
   why:'The ketone is the secondary alcohol\'s product, made by removing the one hydrogen on its carbinol carbon. A tertiary carbinol carbon has no hydrogen, so no carbonyl can form without breaking a carbon-carbon bond, which alcohol dehydrogenase does not do.'},
  {t:'It is oxidised to an aldehyde and then a carboxylic acid', correct:false,
   why:'That is the primary alcohol sequence on the top line of slide 22. A primary carbinol carbon has two hydrogens, which is why it can be oxidised twice.'},
  {t:'It cannot be metabolised at all and is excreted unchanged', correct:false,
   why:'Phase 1 leaves it unchanged; Phase 2 does not. The slide\'s heading says primary, secondary and tertiary hydroxyls can undergo phases 1 and 2 metabolism, and the right-hand panel shows the sulfate and glucuronide that a tertiary hydroxyl can still form.'}],
 teach:[
  {h:'Count the hydrogens on the carbinol carbon',
   t:'Oxidation of an alcohol is loss of the hydrogen on the carbon that carries the oxygen. Two hydrogens, primary: aldehyde, then acid. One hydrogen, secondary: ketone, and it stops there. No hydrogen, tertiary: no oxidation. Slide 22 draws exactly this, with the tertiary case crossed out.'},
  {h:'Phase 2 does not need that hydrogen',
   t:'Sulfotransferase and UDP-glucuronosyltransferase attack through the oxygen, not the carbon, so a tertiary hydroxyl is as good a substrate as any other. That is the right-hand panel of the slide: R-OH to R-O-sulfate or R-O-glucuronide, and it is why a tertiary alcohol still counts as a metabolic handle.'}],
 teachImg:'fgm_hydroxy',
 cite:'Lecture #14 (MCMet-9_16_2026.pdf) slide 22',
 quote:'Hydroxy (OH): 1o, 2o, 3o can undergo phases 1 and 2 metabolism'},

{id:'fg-23', prof:'Sikazwe', tier:'new', topic:'fgdm', sub:'hc', concept:'benzene-arene-oxide',
 tags:['mechanism','reasoning'], source:'slide',
 stem:'Benzene is oxidised by CYP2E1 to an arene oxide. What becomes of that arene oxide?',
 options:[
  {t:'It rearranges without an enzyme to phenol, which CYP2E1 oxidises again to hydroquinone, or epoxide hydrolase opens it to catechol', correct:true,
   why:'Lecture 14 slide 7 draws both branches from the arene oxide. Upward: a non-enzymatic rearrangement gives phenol, and a second CYP2E1 oxidation gives hydroquinone. Downward: epoxide hydrolase adds water and gives catechol, the 1,2-diol. The epoxide is the branch point, and which product forms depends on whether it rearranges or is hydrolysed first.'},
  {t:'It is glucuronidated directly', correct:false,
   why:'UDP-glucuronosyltransferase needs a nucleophilic handle, an -OH, -CO2H, -NH2 or -SH. An arene oxide has none; only after it has become phenol, hydroquinone or catechol is there a hydroxyl to conjugate.'},
  {t:'It is reduced back to benzene', correct:false,
   why:'No reductase on the slide, or in Lecture 11, removes an epoxide oxygen. The epoxide is opened, by rearrangement or by water, and the oxygen stays in the product as a hydroxyl.'},
  {t:'It is hydrolysed by carboxylesterase', correct:false,
   why:'Carboxylesterase needs an acyl group, a carbonyl carbon with a heteroatom beside it. An arene oxide has no carbonyl. The hydrolase that opens epoxides is epoxide hydrolase, which is what the slide names.'}],
 teach:[
  {h:'One epoxide, three phenols',
   t:'Slide 7 draws benzene to the arene oxide under CYP2E1, then two exits. The non-enzymatic rearrangement gives phenol; CYP2E1 hydroxylates phenol again to hydroquinone, the 1,4-diol. Epoxide hydrolase gives catechol, the 1,2-diol, because water adds across the epoxide and both oxygens end up on adjacent carbons. Aromatic hydrocarbons are otherwise stable, so this is the route by which a benzene ring is metabolised at all.'},
  {h:'Why the same enzymes appear in the toxicity lecture',
   t:'CYP2E1 is the isoform that bioactivates benzene on Lecture 13 slide 37, and an epoxide is the first toxicophore category on Lecture 15 slide 30. The arene oxide is an electrophile while it lasts; rearrangement and epoxide hydrolase are what remove it, and Lecture 15 slide 60 lists epoxide hydrolase among the enzyme defenses for that reason.'}],
 teachImg:'fgm_aromatic',
 cite:'Lecture #14 (MCMet-9_16_2026.pdf) slide 7; CYP2E1 substrates Lecture #13 (MCMet-9_15_2026.pdf) slide 37; epoxide defense Lecture #15 (MCMet-9_17_2026.pdf) slide 60',
 quote:'Aromatic HCs: Benzene can be biotransformed to….'},

{id:'fg-24', prof:'Sikazwe', tier:'new', topic:'fgdm', sub:'ester', concept:'phosphate-ester-hydrolysis',
 tags:['enzyme','reaction-id'], source:'slide',
 stem:'Prednisolone phosphate is given intravenously and prednisolone appears in the plasma. Which enzyme releases it, and what is the other product?',
 options:[
  {t:'A phosphatase hydrolyses the phosphate ester, giving prednisolone and phosphoric acid', correct:true,
   why:'Lecture 14 slide 27: phosphate esters undergo phosphatase hydrolysis. The general line reads R-O-PO3H2 to R-OH plus phosphoric acid, and the worked pair is prednisolone phosphate to prednisolone. Fosphenytoin, the phosphate prodrug of phenytoin, is listed under others on the same slide.'},
  {t:'A carboxylesterase hydrolyses it, giving prednisolone and acetic acid', correct:false,
   why:'Carboxylesterases take carboxylic acid esters, carbonates, carbamates and amides, all built on a carbonyl carbon. A phosphate ester is built on phosphorus, and the slide assigns it to phosphatases.'},
  {t:'A sulfatase hydrolyses it, giving prednisolone and sulfuric acid', correct:false,
   why:'Sulfatase is the enzyme for sulfate esters, R-O-SO3H, on slide 28. The prednisolone ester is a phosphate, so the leaving acid is phosphoric acid and the enzyme is a phosphatase.'},
  {t:'A CYP O-dealkylates it, giving prednisolone and formaldehyde', correct:false,
   why:'O-dealkylation, slide 17, removes a methyl or ethyl carbon from an ether oxygen and releases the carbon as an aldehyde. There is no alkyl group on this oxygen to remove; the phosphorus leaves by hydrolysis, not by oxidation.'}],
 teach:[
  {h:'Two hydrolyses on two slides',
   t:'Slide 27 pairs phosphate esters with phosphatases; slide 28 pairs sulfate esters with sulfatases. Both add water across the ester bond and both return the free hydroxyl, and the difference between them is which inorganic acid leaves. Neither uses carboxylesterase, because neither ester has a carbonyl.'},
  {h:'What the phosphate is for',
   t:'A phosphate makes a molecule far more water soluble, which is the reason prednisolone phosphate and fosphenytoin exist: a drug that will not dissolve well enough to inject is given as the phosphate and the phosphatases in the body remove it. Dr. Yendapally\'s Absorption II deck gives the fosphenytoin numbers on its Prodrugs slides; this slide gives the enzyme.'}],
 teachImg:'fgm_phosphate',
 cite:'Lecture #14 (MCMet-9_16_2026.pdf) slide 27; sulfatase slide 28; O-dealkylation slide 17',
 quote:'Phosphates: Phosphate esters undergo phosphatase hydrolysis · Others: Fosphenytoin (prodrug), ATP, DNA, etc.'},

{id:'fg-25', prof:'Sikazwe', tier:'new', topic:'fgdm', sub:'ester', concept:'sulfate-ester-hydrolysis',
 tags:['enzyme','reaction-id'], source:'slide',
 stem:'Estrone sulfate circulates in plasma and estrone is released from it in tissue. Which enzyme does that, and which enzyme made the sulfate in the first place?',
 options:[
  {t:'A sulfatase hydrolyses the sulfate ester to estrone and sulfuric acid; a sulfotransferase, using PAPS, made it', correct:true,
   why:'Lecture 14 slide 28: sulfate esters undergo sulfatase hydrolysis, and the worked pair is estrone sulfate to estrone. The reverse direction is the Phase 2 sulfation of slide 29, sulfotransferase with PAPS as the cofactor. The two enzymes run the same bond in opposite directions.'},
  {t:'A sulfotransferase hydrolyses it', correct:false,
   why:'Sulfotransferase attaches a sulfate, taking it from PAPS and putting it onto an -OH. Hydrolysis removes one, and that is the sulfatase on slide 28.'},
  {t:'A carboxylesterase hydrolyses it', correct:false,
   why:'The sulfate ester has no carbonyl for a carboxylesterase to attack; the ester is on sulfur. Slide 28 assigns it to sulfatases.'},
  {t:'A phosphatase hydrolyses it', correct:false,
   why:'Phosphatases take phosphate esters, R-O-PO3H2, on slide 27. A sulfate, R-O-SO3H, is the next slide and the next enzyme.'}],
 teach:[
  {h:'Sulfation and desulfation',
   t:'Slide 29 lists sulfotransferases, with PAPS, as the Phase 2 enzyme that makes a sulfate from an -OH. Slide 28 shows the hydrolysis that takes it off again: R-O-SO3H to R-OH and sulfuric acid, by a sulfatase. Estrone sulfate is the example, and a sulfate conjugate that can be hydrolysed back is a reservoir of the parent rather than only an elimination product.'},
  {h:'Telling the four hydrolases apart',
   t:'Name the atom the oxygen is bonded to. A carbonyl carbon: carboxylesterase, for esters, amides, carbamates and carbonates. A phosphorus: phosphatase. A sulfur with three oxygens: sulfatase. A strained three-membered ring: epoxide hydrolase. Slides 14 to 16, 20, 27 and 28 cover the four.'}],
 teachImg:'fgm_sulfate',
 cite:'Lecture #14 (MCMet-9_16_2026.pdf) slide 28; sulfotransferase slide 29; phosphatase slide 27',
 quote:'Sulfates: Sulfate esters undergo Sulfatase hydrolysis'},

{id:'fg-26', prof:'Sikazwe', tier:'new', topic:'fgdm', sub:'hetero', concept:'quinone-nqo1',
 tags:['enzyme','reasoning'], source:'slide',
 stem:'Which enzyme metabolises quinones, what does it make from deoxynyboquinone, and how does the amount of that enzyme vary between patients and tissues?',
 options:[
  {t:'NADPH quinone oxidoreductase-1 (NQO1) reduces the quinone to a hydroquinone, inactive for deoxynyboquinone; NQO1 is inducible and polymorphic, and overexpressed in many cancers', correct:true,
   why:'Lecture 14 slide 26 names NQO1, notes that it is overexpressed in many cancers, draws deoxynyboquinone going to its hydroquinone metabolite marked inactive, and adds that NQO1 is inducible and polymorphic. A quinone is two carbonyls in a ring; reduction puts a hydrogen on each oxygen and restores the aromatic diol.'},
  {t:'Xanthine oxidase oxidises the quinone to uric acid', correct:false,
   why:'Xanthine oxidase is the purine enzyme on slide 24, oxidising purines to uric acid and inhibited by allopurinol. A quinone is not a purine, and the quinone reaction on slide 26 is a reduction, not an oxidation.'},
  {t:'Epoxide hydrolase opens the quinone ring to a diol', correct:false,
   why:'Epoxide hydrolase adds water to a three-membered epoxide ring, slide 20. A quinone has no epoxide; the diol it becomes, the hydroquinone, is made by reduction of the two carbonyls, not by hydrolysis.'},
  {t:'Dihydropyrimidine dehydrogenase deactivates it', correct:false,
   why:'Dihydropyrimidine dehydrogenase is the pyrimidine enzyme on slide 25, the one that inactivates more than 80 percent of 5-fluorouracil. It acts on the pyrimidine ring, not on a quinone.'}],
 teach:[
  {h:'The third heterocycle enzyme',
   t:'Slides 24 to 26 give one enzyme for each ring family: xanthine oxidase for purines, dihydropyrimidine dehydrogenase for pyrimidines, NQO1 for quinones. The first two oxidise; NQO1 reduces, taking the quinone to the hydroquinone. For deoxynyboquinone that reduction is an inactivation, which is the example the slide draws.'},
  {h:'Why inducible, polymorphic and overexpressed matter',
   t:'An inducible enzyme means the amount can rise with exposure. A polymorphic one means patients differ in how much active enzyme they carry, the same problem as CYP2D6 or NAT2. Overexpression in many cancers means a tumour may carry more NQO1 than the tissue around it, which is a difference in metabolism between the tumour and the patient.'}],
 teachImg:'fgm_quinone',
 cite:'Lecture #14 (MCMet-9_16_2026.pdf) slide 26; purines slide 24; pyrimidines slide 25',
 quote:'Quinones: NADPH Quinone Oxidoreductase-1 (NQO1, overexpressed in many cancers) metabolizes quinones · NQO1 is inducible and polymorphic'},

/* ═══════════ LECTURE 15 — toxicity mechanisms and organ toxicity ═══════════ */
{id:'tx-31', prof:'Sikazwe', tier:'new', topic:'tox', sub:'mech', concept:'aldehyde-electrophile-abacavir',
 tags:['case','mechanism'], source:'slide',
 stem:'Abacavir carries a primary alcohol that alcohol dehydrogenase oxidises. Why does that ordinary Phase 1 step produce a toxic species?',
 options:[
  {t:'The product is an aldehyde, an electrophilic carbonyl that protein nucleophiles attack to form covalent adducts', correct:true,
   why:'Lecture 15 slide 36 files aldehydes under existing or bioactivated electrophilic carbonyls and draws the two rows: a generic alcohol oxidised to an aldehyde that a protein nucleophile attacks, and abacavir oxidised by ADH to its aldehyde, which goes on to protein covalent adducts. The carbonyl carbon is electron-poor, and a thiol or amine on a protein adds to it.'},
  {t:'The product is a free radical', correct:false,
   why:'An aldehyde is an electrophile, the second toxicophore category on slide 30, not a radical, the fourth. Alcohol dehydrogenase transfers a hydride; it makes no unpaired electron.'},
  {t:'Alcohol dehydrogenase makes an epoxide', correct:false,
   why:'Epoxides come from CYP oxidation of a double bond, slide 33. Alcohol dehydrogenase oxidises a carbinol carbon to a carbonyl and makes no ring.'},
  {t:'The alcohol itself is the toxicophore and the oxidation removes it', correct:false,
   why:'The alcohol is a nucleophile, not an electrophile, and the slide places the hazard after the oxidation, at the aldehyde. Removing the hydroxyl by oxidation is what creates the reactive species rather than what removes it.'}],
 teach:[
  {h:'An aldehyde is a carbonyl with nothing to protect it',
   t:'A ketone has two carbons on the carbonyl and an ester has an oxygen feeding electron density in; an aldehyde has one carbon and one hydrogen, so the carbonyl carbon is the most exposed electrophile of the carbonyl family. Slide 36 puts it in the electrophilic carbonyl category for that reason, whether the aldehyde is present in the drug or made from an alcohol by ADH.'},
  {h:'Where the aldehyde goes when the defense works',
   t:'Aldehyde dehydrogenase oxidises the aldehyde to the carboxylic acid, Lecture 11 slide 23, and an acid is not an electrophile. The abacavir adduct forms when the aldehyde meets a protein before ALDH reaches it, which is the same race between bioactivation and removal as the carbamazepine epoxide on slide 33.'}],
 teachImg:'tx_aldehyde_abacavir',
 cite:'Lecture #15 (MCMet-9_17_2026.pdf) slide 36; categories slide 30; ALDH Lecture #11 (MCMet-9_10_26.pdf) slide 23',
 quote:'Existing or bioactivated electrophilic carbonyls – Example: Aldehydes'},

{id:'tx-32', prof:'Sikazwe', tier:'new', topic:'tox', sub:'extra', concept:'sulfamethoxazole-dermal',
 tags:['case','mechanism'], source:'slide',
 stem:'Sulfamethoxazole causes skin hypersensitivity in some patients. What is the hapten, and what does it bind?',
 options:[
  {t:'The nitroso metabolite, formed by CYP oxidation of the aromatic amine or by autoxidation, which binds protein thiols to make the immunogenic adduct', correct:true,
   why:'Lecture 15 slide 58: CYP metabolism leads to nitroso haptens which trigger an immune response. The figure draws sulfamethoxazole to nitroso-SMO, labelled hapten, by CYPs or autoxidation, and the nitroso group then bonds to a protein thiol to give the SMO-thiol protein adducts. The adduct, not the drug, is what the immune system recognises.'},
  {t:'The N-acetylated metabolite made by N-acetyltransferase', correct:false,
   why:'N-acetylation of the aromatic amine, Lecture 11 slide 53, is the Phase 2 route that takes the amine out of play; an acetylated amine cannot be oxidised to the nitroso. It is the safe branch, not the hapten.'},
  {t:'An acyl glucuronide of the sulfonamide', correct:false,
   why:'Sulfamethoxazole has no carboxylic acid to form an acyl glucuronide, and no glucuronide appears on slide 58. The reactive group is the nitroso on the aromatic amine.'},
  {t:'A free radical on the isoxazole ring', correct:false,
   why:'No radical is drawn. The mechanism is a hapten, the last of the toxicophore categories on slide 30: a small molecule that becomes immunogenic once it is covalently attached to a protein.'}],
 teach:[
  {h:'From aromatic amine to hapten',
   t:'The aromatic amine of sulfamethoxazole is N-oxidised, by a CYP or by autoxidation, to the nitroso compound; slide 48 names the hydroxylamine as the intermediate on the same path for nitrofurantoin. A nitroso group is electrophilic at nitrogen, and a cysteine thiol on a protein adds to it. The protein now carries a foreign group, and slide 58 records the result as the antibiotic hypersensitivity: the immune response is to the adduct.'},
  {h:'The same chemistry in two lectures',
   t:'Lecture 15 slide 42 defines hapten-protein immunogens with ethanol and urushiol; slide 58 applies it to skin. Nitrofurantoin on slide 48 runs through the same nitroso and hydroxylamine intermediates and forms protein adducts in the liver. One functional group class, an aromatic amine or nitro group, and one mechanism, with the organ set by where the reactive species is made.'}],
 teachImg:'tx_dermal',
 cite:'Lecture #15 (MCMet-9_17_2026.pdf) slide 58; organ list slide 51; haptens slide 42; nitrofurantoin slide 48',
 quote:'Dermal toxicity: Sulfamethoxazole (antibiotic hypersensitivity) · CYP metabolism leads to nitroso haptens which trigger an immune response'},

{id:'tx-33', prof:'Sikazwe', tier:'new', topic:'tox', sub:'extra', concept:'mptp-mao-b',
 tags:['case','mechanism'], source:'slide',
 stem:'MPTP, the designer-drug example of neurotoxicity, produces Parkinson\'s symptoms. What is the mechanism?',
 options:[
  {t:'Monoamine oxidase B oxidises MPTP to MPP+, which kills the dopamine neurons of the nigrostriatal pathway', correct:true,
   why:'Lecture 15 slide 56: MPTP induces Parkinson\'s symptoms due to neurotoxic MPP+, 1-methyl-4-phenylpyridinium, formed via MAO-B. The figure draws the tetrahydropyridine oxidised to the pyridinium, then nigrostriatal dopamine neuronal death and the symptoms. The toxic species is a metabolite, made by the brain\'s own enzyme.'},
  {t:'A CYP makes an epoxide that binds neuronal DNA', correct:false,
   why:'No epoxide and no CYP appear on slide 56. The oxidation is by monoamine oxidase B, a non-CYP oxidase from Lecture 11 slide 24, and the product is a charged pyridinium, not an epoxide.'},
  {t:'MPTP blocks dopamine receptors directly and the block outlasts the drug', correct:false,
   why:'The symptoms come from the loss of the neurons that make dopamine, not from receptor blockade. Slide 56 attributes them to neuronal death caused by MPP+.'},
  {t:'N-acetyltransferase acetylates the ring nitrogen to a toxic amide', correct:false,
   why:'MPTP is a tertiary amine in a ring; N-acetyltransferase takes primary amines and sulfonamides, Lecture 11 slide 53. The slide names MAO-B, and the product is an oxidised, aromatised pyridinium.'}],
 teach:[
  {h:'What MAO-B does to the ring',
   t:'MPTP is a 1-methyl-4-phenyl-tetrahydropyridine, a partly saturated ring with one double bond. Monoamine oxidase B oxidises it, and the ring becomes the fully aromatic N-methylpyridinium, MPP+, carrying a permanent positive charge on the nitrogen. Slide 56 draws the two structures side by side: the same carbons, one ring made aromatic and charged by the oxidation.'},
  {h:'Why a metabolite is the neurotoxin',
   t:'Slide 51 lists neurons among the extrahepatic targets, and MPTP is the example because the parent is not the toxic species. MAO-B makes MPP+, and MPP+ is what kills the nigrostriatal dopamine neurons. The lesson is the one that runs through the lecture: the organ that carries the activating enzyme is the organ that is injured.'}],
 teachImg:'tx_neuro',
 cite:'Lecture #15 (MCMet-9_17_2026.pdf) slide 56; organ list slide 51; MAO Lecture #11 (MCMet-9_10_26.pdf) slide 24',
 quote:'Neurotoxicity: "Designer Drugs" e.g., MPTP · Induces Parkinson\'s symptoms due to neurotoxic MPP+ (1-methyl-4-phenylpyridinium) via MAO-B'}
);
