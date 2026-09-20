/* ==========================================================================
   SCOPE GAPS — Yendapally topics the blueprint names and the bank was thin on
   ==========================================================================
   Final-Review.pdf lists ten Yendapally topics as the guide for the 8
   Yendapally questions on the paper. Three of them had one or two questions
   each before this file: drug discovery sources and uses, structure-activity
   relationship, and Absorption II drug-drug interactions. coverage_check.py
   is what found them.

   Citations here name the slide by its own title rather than by number. The
   three decks these come from are project files, and a project file is
   returned as extracted text with no page boundaries, so a slide number taken
   from it would not be something that had actually been checked. The titles
   are quoted exactly as the slides carry them.
   ========================================================================== */
QUESTIONS.push(

/* ═══════════ DRUG DISCOVERY — SOURCES AND USES ═══════════ */
{id:'dd-10', prof:'Yendapally', tier:'old', topic:'disc', sub:'sources', concept:'dd-plant-digoxin',
 tags:['recall','source'], source:'slide',
 stem:'Digoxin comes from the foxglove plant. What is its chemical class and what is it used to treat?',
 options:[
  {t:'Steroid glycoside, used in congestive heart failure', correct:true,
   why:'Digoxin is a steroid nucleus carrying sugar residues, which is what glycoside names, and it is a positive inotropic agent, meaning it increases the force of cardiac contraction. That is why it is used in congestive heart failure. The deck asks for four things about every drug it discusses — source, chemical class, therapeutic class and mechanism — so answering with only one of them leaves most of the question unanswered.'},
  {t:'Alkaloid, used as an antiarrhythmic', correct:false,
   why:'Alkaloid and antiarrhythmic together describe quinidine, which comes from cinchona bark rather than foxglove. Both drugs act on the heart, and that shared therapeutic area is what makes them easy to swap. Separating them means going back to the source: foxglove leaves give digoxin, cinchona bark gives quinidine and quinine.'},
  {t:'Opioid alkaloid, used as an analgesic', correct:false,
   why:'That is morphine, from the capsules of the opium poppy. Morphine and digoxin sit in different chemical classes entirely: morphine is an opioid alkaloid, digoxin a steroid carrying sugar residues. Reading the chemical class rather than the plant source separates them here.'},
  {t:'Quinoline alkaloid, used as an anticancer agent', correct:false,
   why:'That is camptothecin, from the bark and stem of the camptotheca tree. It shares the alkaloid class with quinidine and morphine but is named more specifically for the quinoline ring it carries. Nothing in digoxin is a quinoline, and nothing in it is anticancer.'}],
 teach:[
  {h:'The four plant drugs and what each one is',
   t:'Digoxin is a steroid glycoside from the leaves of foxglove, used in congestive heart failure as a positive inotropic agent. Quinidine and quinine are alkaloids from the bark of the cinchona tree; quinidine is a class I antiarrhythmic and quinine is an antimalarial, and the two are stereoisomers of each other. Morphine is an opioid alkaloid from the capsules of the opium poppy, used as an opiate analgesic. Camptothecin is a quinoline alkaloid from the bark and stem of the camptotheca tree, used as an anticancer agent.'},
  {h:'What the deck asks for about each drug',
   t:'Four things are asked about every drug in this material: where it came from, its chemical class, its therapeutic class and its mechanism of action. A question naming any one of the four can ask for any of the others, so a question naming the source can ask for the mechanism, and one naming the class can ask for the use.'},
  {h:'Alkaloid is a chemical class, not a source',
   t:'Three of the four plant drugs here are labelled alkaloids and they differ in therapeutic use entirely, so the class alone never settles which drug is meant. Digoxin is the one that is not: it is a steroid glycoside.'}],
 cite:'082026_Drugdiscovery.pdf, "Natural Products: Plants" and "Digoxin(Natural Products: Plants)"'},

{id:'dd-11', prof:'Yendapally', tier:'old', topic:'disc', sub:'sources', concept:'dd-mammalian-pathways',
 tags:['recall','source'], source:'slide',
 stem:'Which of these drugs is NOT based on a mammalian biochemical pathway?',
 options:[
  {t:'Quinine', correct:true,
   why:'Quinine is an alkaloid taken from the bark of the cinchona tree, so its source is a plant, not a mammalian pathway. The other three replace or copy something a mammal already makes. This question appears on the slide itself in exactly this form, with quinine as the exception.'},
  {t:'Epinephrine', correct:false,
   why:'Epinephrine, also called adrenaline, is a sympathomimetic amine isolated from the adrenal gland and used in anaphylactic shock, cardiac failure and glaucoma. It is a mammalian product being given back as a drug, which is the definition of this category. Picking it means reading the question as asking which drug is natural rather than which one does not come from a mammalian pathway.'},
  {t:'Insulin', correct:false,
   why:'Insulin replaces what the islet cells of the pancreas normally produce, and it is given in type I diabetes for exactly that reason. Replacement of a hormone the body makes is the clearest case in this category, not an exception to it.'},
  {t:'Levothyroxine', correct:false,
   why:'Levothyroxine replaces thyroid hormone in hypothyroid patients, so it belongs in the same category as insulin and epinephrine. It sits alongside insulin, epinephrine and erythropoietin, a renal glycoprotein that stimulates red blood cell production, as the four drugs in this group.'}],
 teach:[
  {h:'How the sources slide is divided',
   t:'Natural products divide into plants, micro organisms, compounds based on mammalian biochemical pathways, and other sources. Synthetic products are listed separately from natural products altogether. Deciding which heading a drug belongs under is a question about where the molecule came from, not about what it treats.'},
  {h:'What the mammalian-pathway group has in common',
   t:'Epinephrine from the adrenal gland, erythropoietin as a renal glycoprotein that stimulates red blood cell production, insulin replacing what the pancreatic islet cells make, and levothyroxine as thyroid hormone replacement are all molecules a mammal already makes, given as drugs. Every one of them is a replacement or a copy rather than something foreign.'}],
 cite:'082026_Drugdiscovery.pdf, "Natural Products: Biochemicals"'},

{id:'dd-12', prof:'Yendapally', tier:'old', topic:'disc', sub:'approach', concept:'dd-approaches-list',
 tags:['recall','list'], source:'slide',
 stem:'Which set correctly lists the approaches used for discovering drugs?',
 options:[
  {t:'Without a lead molecule, based on natural products, random screening, rational drug design, drug metabolism studies, and observation of side effects', correct:true,
   why:'These are the six the deck lists, and each carries its own example: penicillin and chlordiazepoxide for discovery without a lead, aspirin for natural products, prontosil for random screening, zanamivir and oseltamivir for rational design, sulfanilamide and fexofenadine for metabolism studies, and the phenothiazines and sildenafil for side-effect observation. Each approach is identified by its example rather than by its name, because the names overlap and the examples do not.'},
  {t:'Phase 1, Phase 2, Phase 3 and Phase 4 clinical testing', correct:false,
   why:'Those are the stages a drug passes through once a candidate already exists, not ways of finding one. The two sit at opposite ends of the same deck: approaches are how a molecule is found, clinical phases are how it is tested afterwards. Picking this means answering a question about discovery with the development process.'},
  {t:'In vitro screening, in vivo screening and preclinical testing', correct:false,
   why:'In vitro means in a controlled environment outside a living organism, such as cell culture, and in vivo means in a whole living organism, such as an animal study. Both describe where testing happens, which is preclinical research, not a strategy for finding a new molecule.'},
  {t:'Chemical synthesis, natural products and molecular modeling', correct:false,
   why:'These three are listed in the deck as the opening stage of the discovery and development process, ahead of preclinical testing, clinical testing and marketing. They name where compounds come from rather than the six strategies, and rational drug design is the approach that molecular modeling actually serves.'}],
 teach:[
  {h:'The six approaches, each with the example attached',
   t:'Drugs discovered without a lead molecule: penicillin and chlordiazepoxide. Drugs based on natural products: aspirin, traced from willow bark through salicin and salicylic acid to acetylsalicylic acid. Random screening: prontosil. Rational drug design: zanamivir and oseltamivir, designed with computer assistance against neuraminidase. Drug metabolism studies: sulfanilamide, found as the active metabolite of prontosil, and fexofenadine, the carboxylic acid metabolite of terfenadine. Observation of side effects: the phenothiazine antipsychotics and sildenafil.'},
  {h:'Prontosil belongs to two approaches at once',
   t:'Prontosil was found by random screening, and the compound that actually does the work was found by metabolism studies. Prontosil is a red azo dye that was active against streptococcal infection in mice but inactive in a test tube, which marks it as a prodrug. Reductive liver metabolism cleaves it to sulfanilamide, and sulfanilamide is the antibacterial. A question naming prontosil is usually asking about random screening; one naming sulfanilamide is asking about metabolism studies.'},
  {h:'The development process is separate from all six',
   t:'Discovery and development runs chemical synthesis or natural products or molecular modeling, then preclinical testing, then clinical testing, then marketing. An Investigational New Drug application is filed with the Food and Drug Administration (FDA) before human testing, and a New Drug Application or Biological License Application is filed after Phase 3. Phase 4 begins once the drug is approved to market.'}],
 cite:'082026_Drugdiscovery.pdf, "Drug Discovery: Approaches" and "Overview of Drug Discovery"'},

{id:'dd-13', prof:'Yendapally', tier:'old', topic:'disc', sub:'approach', concept:'dd-metabolism-studies',
 tags:['recall','reasoning'], source:'slide',
 stem:'Which drug was discovered through drug metabolism studies?',
 options:[
  {t:'Sulfanilamide', correct:true,
   why:'Trefouel and Bovet showed that the urine of animals treated with prontosil was active in a test tube, although prontosil itself was not. Fractionating that urine identified p-aminobenzene sulfonamide, or sulfanilamide, formed by reductive liver metabolism of prontosil. The active drug was found by looking at what the body made from the compound, which is what this approach means. Fexofenadine is the other example, being the carboxylic acid metabolite of terfenadine.'},
  {t:'Prontosil', correct:false,
   why:'Prontosil was found by random screening, when Gerhard Domagk tested a red azo dye against streptococcal infections in mice. It is the starting compound rather than the product: screening found prontosil, and metabolism of prontosil found sulfanilamide. Prontosil is inactive in a test tube, so it cannot be the agent that does the antibacterial work.'},
  {t:'Oseltamivir', correct:false,
   why:'Oseltamivir came from rational drug design, built with computer assistance to inhibit the neuraminidase enzyme of influenza virus. It happens to be a prodrug as well, and that shared prodrug property with prontosil is what makes it a tempting answer, but being a prodrug is not the same as having been discovered by studying metabolism.'},
  {t:'Quinine', correct:false,
   why:'Quinine is an alkaloid taken from cinchona bark. Natural products is indeed one of the six approaches, so quinine belongs to that one — but nothing about quinine was found by studying a metabolite, which is what this question asks for. Reading the question as which drug is natural rather than which was found through metabolism is what produces this answer.'}],
 teach:[
  {h:'What the approach means',
   t:'A compound is given, its metabolites are isolated, and one of them turns out to be the active or the safer agent. The parent compound is then set aside in favour of its own metabolite.'},
  {h:'The two examples, and why each metabolite was better',
   t:'Sulfanilamide is the active metabolite of prontosil: prontosil works in a living animal and not in a test tube, because the reduction that releases sulfanilamide happens in the body and not in a test tube. Fexofenadine is the carboxylic acid metabolite of terfenadine, and it was developed because terfenadine was associated with cardiac arrhythmias while its metabolite was not.'},
  {h:'How sulfanilamide works once it is released',
   t:'Sulfonamides inhibit dihydropteroate synthase, the enzyme bacteria need to build folic acid, by competing at the active site with p-aminobenzoic acid (PABA). The only difference between the two molecules is that PABA carries a carboxyl group where sulfanilamide carries a sulfonamide, which is close enough for the enzyme to accept it. The slide is titled for the point it rests on: bacteria carry out their own folic acid synthesis, which is what makes that pathway available as a target.'}],
 cite:'082026_Drugdiscovery.pdf, "DM Studies: Discovery of sulfanilamide" and "Drug Metabolism Studies: Terfenadine vs Fexofenadine"'},

{id:'dd-14', prof:'Yendapally', tier:'old', topic:'disc', sub:'approach', concept:'dd-side-effects',
 tags:['recall','reasoning'], source:'slide',
 stem:'Sildenafil was developed for angina and approved for something else entirely. Which discovery approach does that illustrate, and what is the other example given for it?',
 options:[
  {t:'Observation of side effects; the phenothiazine antipsychotics are the other example', correct:true,
   why:'Pfizer began sildenafil in 1989 as an angina treatment. Clinical trials showed no effect on angina, but an erection was noted as a side effect in healthy volunteers, and that observation led to the new drug application in 1997 and approval in 1998 for erectile dysfunction. The phenothiazines followed the same route. Slide 40 traces the antihistamine chain from diphenhydramine, the first class, through the ethylenediamines to the phenothiazine promethazine, which was a good antihistamine and a strong sedative; that sedation led to chlorpromazine and the antipsychotic class.'},
  {t:'Rational drug design; zanamivir is the other example', correct:false,
   why:'Rational design starts from knowledge of the target and builds a molecule to fit it, as with zanamivir and oseltamivir against neuraminidase. Sildenafil was not designed for the use it ended up with, so nothing about its approval was planned from the target. Both approaches produce a drug with a known mechanism, and that shared endpoint is what makes them easy to confuse; the difference is whether the use was intended from the start.'},
  {t:'Random screening; prontosil is the other example', correct:false,
   why:'Random screening tests many structures against a biological action when no lead is known, which is how prontosil was found. Sildenafil was not screened blindly; it was a known compound in trials for a known indication, and the new use came from watching what else it did. Picking this means treating any unplanned discovery as random, when the deck separates unplanned screening from unplanned observation.'},
  {t:'Drugs discovered without a lead molecule; penicillin is the other example', correct:false,
   why:'That category covers a compound found with no prior molecule to work from, such as penicillin from a contaminated petri dish or chlordiazepoxide from a series of quinazoline N-oxides. Sildenafil had a lead and a target; what changed was the indication.'}],
 teach:[
  {h:'What the approach means',
   t:'A side effect seen in a patient or an animal model points to a use nobody was looking for, and that use can open a whole series of compounds behind it.'},
  {h:'The two examples',
   t:'Slide 40 draws the antihistamine chain: benzodioxanes, then the ethanolamines with diphenhydramine as the first class of antihistamines, then the ethylenediamines, then the phenothiazine promethazine. Promethazine was a good antihistamine and a strong sedative, and that sedation is what led to chlorpromazine and the antipsychotics. Sildenafil citrate was begun by Pfizer in 1989 for angina, showed no effect on angina in trials, and was approved in 1998 as the first oral treatment for erectile dysfunction. It is also used in pulmonary arterial hypertension. Its chemical class is pyrazolo-pyrimidine and it works by inhibiting phosphodiesterase 5, which relaxes smooth muscle.'}],
 cite:'082026_Drugdiscovery.pdf, "Observation of Side Effects", the two "(Contd.)" slides that follow, and "Observation of Side Effects: Sildenafil citrate"'},

{id:'dd-15', prof:'Yendapally', tier:'old', topic:'disc', sub:'sources', concept:'dd-biologics',
 tags:['recall','compare'], source:'slide',
 stem:'What distinguishes a biologic from a small-molecule drug?',
 options:[
  {t:'A biologic is large and structurally complex, made in or derived from living systems, harder to characterise fully, often heat-sensitive, and usually given by injection or infusion', correct:true,
   why:'Every one of those follows from the molecule being built by a living system rather than by chemical synthesis. Size and complexity make full characterisation difficult, protein structure makes it heat-sensitive and makes contamination control critical, and the route is injection or infusion rather than oral. Adalimumab, insulin and vaccines are the examples given.'},
  {t:'A biologic is any drug obtained from a natural source rather than made synthetically', correct:false,
   why:'Natural source and biologic are different categories, which is why morphine and digoxin are natural products and not biologics. The FDA definition turns on what the substance is made of — sugars, proteins, nucleic acids, complex combinations of these, or living cells and tissues — and on being produced in a living system, not merely on being found in nature.'},
  {t:'A biologic has a well-defined, reproducible structure and is generally more stable', correct:false,
   why:'Those two properties belong to small molecules, so this reverses the comparison. Aspirin and the sulfonamides have structures that are known exactly and can be made the same way every time; a biologic made in a living system cannot be fully characterised in that way.'},
  {t:'A biologic is a large molecule that is always a monoclonal antibody', correct:false,
   why:'Monoclonal antibodies such as adalimumab are one kind of biologic among several. Therapeutic proteins like insulin, vaccines such as influenza, blood products such as coagulation factors, and cell and gene therapies are all listed alongside them. Taking the most familiar example for the whole category is what produces this answer.'}],
 teach:[
  {h:'How the FDA defines a biologic',
   t:'A biologic is composed of sugars, proteins, or nucleic acids, or complex combinations of these, or may be a living entity such as cells and tissues. The examples given are monoclonal antibodies (adalimumab), therapeutic proteins (insulin), vaccines (influenza), blood products (coagulation factors), and cell and gene therapies.'},
  {h:'The five points of comparison',
   t:'Size and structure: biologics are usually large and structurally complex, small molecules are small with a well-defined structure. Production: biologics are made in or derived from living systems, small molecules usually by chemical synthesis. Characterisation: biologics are more difficult to characterise fully, small molecules are generally known and reproducible. Stability: biologics are often heat-sensitive and contamination control is critical, small molecules are generally more stable. Administration: biologics are commonly injected or infused, small molecules often suit oral dosage forms.'}],
 cite:'082026_Drugdiscovery.pdf, "Biologics vs. Small-Molecule Drugs"'},

/* ═══════════ STRUCTURE–ACTIVITY RELATIONSHIP ═══════════ */
{id:'sar-1', prof:'Yendapally', tier:'old', topic:'disc', sub:'sar', concept:'sar-brown-fraser',
 tags:['recall','reasoning'], source:'slide',
 stem:'Brown and Fraser carried out the first structure–activity relationship studies in 1869. What change did they make, and what conclusion follows from their work?',
 options:[
  {t:'They converted tertiary amines to quaternary ammonium compounds and found muscle relaxation; the conclusion is that molecular structure influences biological activity', correct:true,
   why:'Converting a tertiary amine to a quaternary ammonium compound produced muscle relaxants, which supported the hypothesis that this one change is what gives muscle relaxation. The conclusion the deck draws is deliberately the broader one: molecular structure influences biological activity. That broader statement is what survives, because the narrower one about quaternary ammonium turns out to be false.'},
  {t:'They converted tertiary amines to quaternary ammonium compounds and concluded that all quaternary ammonium compounds are muscle relaxants', correct:false,
   why:'The first half is right and the conclusion is the one the deck explicitly rejects. Acetylcholine is a quaternary ammonium compound and it activates muscle contraction rather than relaxing it, so one counter-example disproves the general claim. This option is the trap the slide is built around, and picking it means carrying the hypothesis forward instead of the conclusion.'},
  {t:'They replaced one functional group with another of similar size and electron distribution, establishing bioisosterism', correct:false,
   why:'That describes bioisosterism, which is a different topic in this course with its own deck. Structure–activity relationship is the broader idea that systematic changes to a molecule change its activity; bioisosterism is one particular kind of change, chosen so that activity is retained. Every bioisosteric substitution is an SAR experiment, but not every SAR experiment is bioisosteric.'},
  {t:'They screened a series of random structures for biological activity and found tubocurarine', correct:false,
   why:'Random screening is a discovery approach from the drug discovery deck, illustrated there by prontosil. Brown and Fraser did the opposite of random: they made one deliberate, systematic change and watched what it did to the activity. Tubocurarine is a neuromuscular blocking agent that appears in this deck as an example of a muscle relaxant, not as a screening result.'}],
 teach:[
  {h:'What a structure–activity relationship study is',
   t:'Molecules are modified systematically by altering their functional groups, and the effect of each modification on biological activity is measured. The word systematic is what separates it from screening: one thing is changed at a time so that the change can be held responsible for the result.'},
  {h:'What Brown and Fraser actually showed',
   t:'Their 1869 work converted tertiary amines to quaternary ammonium compounds and produced muscle relaxants, which supported the hypothesis that the change from a tertiary to a quaternary amine is what confers muscle relaxation. Tubocurarine is the example given, a neuromuscular blocking agent that relaxes muscle.'},
  {h:'Why the narrow conclusion fails',
   t:'It is not true that all quaternary ammonium compounds are muscle relaxants. Acetylcholine is a quaternary ammonium compound and it is the neurotransmitter that activates muscle contraction. What survives is the general statement that molecular structure influences biological activity.'}],
 cite:'082426_IntroductiontoSAR.pdf, "Early SAR" and "Conclusions: Early SAR"'},

{id:'sar-2', prof:'Yendapally', tier:'old', topic:'disc', sub:'sar', concept:'sar-agonist-antagonist',
 tags:['definition','compare'], source:'slide',
 stem:'What separates an agonist from an antagonist at a receptor?',
 options:[
  {t:'Both have affinity for the receptor; only the agonist produces a biological response', correct:true,
   why:'Affinity means the molecule interacts with the receptor, and both do that. Efficacy, also called intrinsic activity, means it produces a biological response once bound, and only the agonist has it. An antagonist that had no affinity could not occupy the receptor at all and so could not block anything, which is why affinity is what the two share rather than what separates them.'},
  {t:'The agonist has affinity and the antagonist does not', correct:false,
   why:'An antagonist has to bind in order to block, so it must have affinity. Removing its affinity would remove its action entirely. This answer comes from treating affinity and efficacy as one property instead of two, which is the distinction the definition is built on.'},
  {t:'The agonist is larger than the antagonist', correct:false,
   why:'The comparison runs the other way, and it is a tendency rather than a rule: molecules that block the effects of natural neurotransmitters are generally larger than the native compound. Acetylcholine is the smaller agonist and tubocurarine the larger antagonist. Picking this reverses a size comparison that is in any case not what defines the two terms.'},
  {t:'The agonist binds covalently and the antagonist binds reversibly', correct:false,
   why:'Bond type belongs to the drug–receptor interactions material and does not define agonist or antagonist. Most agonists bind through reversible interactions, and some antagonists bind irreversibly. Phenoxybenzamine is the covalent example in the drug-receptor interactions material, and it is an irreversible antagonist, which is the opposite of what this option claims.'}],
 teach:[
  {h:'Two properties, not one',
   t:'Affinity is whether the molecule interacts with the receptor. Efficacy, also called intrinsic activity, is whether it produces a biological response once it is there. An agonist has both. An antagonist has affinity and no efficacy, so it occupies the receptor without doing anything, and in occupying it keeps the natural agonist out.'},
  {h:'The pair this deck uses',
   t:'Acetylcholine is the agonist: a neurotransmitter and activator of muscle contraction, and the smaller of the two molecules. Tubocurarine is the antagonist: a neuromuscular blocking agent that causes muscle relaxation by keeping acetylcholine off its receptors, and the larger molecule. The general observation is that antagonists of a natural neurotransmitter tend to be larger than the neurotransmitter itself.'}],
 cite:'082426_IntroductiontoSAR.pdf, "Agonists and Antagonists" and "Selectivity of Drug Action and Drug Receptors"'},

{id:'sar-3', prof:'Yendapally', tier:'old', topic:'disc', sub:'sar', concept:'antagonist-size-observation',
 tags:['reasoning','structure'], source:'slide',
 stem:'Tubocurarine blocks the receptors that acetylcholine activates. Which generalisation about antagonists does the pair illustrate?',
 options:[
  {t:'Molecules that block a natural neurotransmitter, the antagonists, are generally larger than the native compound', correct:true,
   why:'The slide labels acetylcholine the smaller molecule and tubocurarine the larger one, and states the rule under them: antagonists that block the effects of natural neurotransmitters generally are larger in size than the native compound. The extra bulk lets the blocker occupy the site without producing the response.'},
  {t:'Antagonists carry a quaternary nitrogen and agonists do not', correct:false,
   why:'Both molecules carry quaternary ammonium nitrogen. That shared group is what the Brown and Fraser conclusion on the slide before turns on: it is not true that all quaternary ammonium compounds are muscle relaxants, because acetylcholine has the group and contracts muscle.'},
  {t:'The blocker and the transmitter act at different receptors', correct:false,
   why:'The slide draws tubocurarine blocking acetylcholine receptors. An antagonist has to bind the same site as the transmitter it opposes; two drugs at different receptors could not compete.'},
  {t:'The blocker has no affinity for the receptor', correct:false,
   why:'Blocking requires binding. Tubocurarine binds the receptor and produces no response, which is what an antagonist is; a molecule with no affinity would not reach the receptor and could not block anything.'}],
 teach:[
  {h:'What the selectivity slide shows',
   t:'Acetylcholine, the neurotransmitter, is drawn as the smaller molecule and labelled muscle contraction; tubocurarine is drawn as the larger molecule, labelled muscle relaxation, blocking the acetylcholine receptors. The rule printed beneath is the examinable line: antagonists generally are larger in size than the native compound.'},
  {h:'How it follows from the Brown and Fraser slides',
   t:'Brown and Fraser found that converting tertiary amines to quaternary ammonium compounds gave muscle relaxants, and the tempting conclusion was that the quaternary group causes relaxation. Acetylcholine disproves it: same group, opposite effect. What survives is that structure as a whole decides activity, and the size comparison on the selectivity slide is the first concrete instance of that: the same charged nitrogen in a small molecule activates, in a large one blocks.'}],
 teachImg:'sar_selectivity',
 cite:'082426_IntroductiontoSAR.pdf, "Selectivity of Drug Action and Drug Receptors"; "Conclusions: Early SAR"',
 quote:'Molecules that block the effects of natural neurotransmitters (antagonists) generally are larger in size than the native compound'},

/* ═══════════ ABSORPTION II — DRUG–DRUG INTERACTIONS ═══════════ */
{id:'ab2-1', prof:'Yendapally', tier:'old', topic:'admet', sub:'ddi', concept:'ab2-four-mechanisms',
 tags:['list','recall'], source:'slide',
 stem:'By which four mechanisms can another substance change the oral absorption of a drug?',
 options:[
  {t:'By presenting a large surface area the drug adsorbs onto, by forming chelates with metal ions, by altering gastrointestinal motility, and by affecting transport proteins in the gastrointestinal tract', correct:true,
   why:'Each of the four acts before the drug has crossed the gut wall: a surface the drug adsorbs onto (activated charcoal is the deliberate use), a metal ion that chelates it (iron and antacids), a change in how long it stays in contact with the absorbing surface (motility), and a change in the transporters that move it across or pump it back (P-glycoprotein). That is what makes them absorption interactions rather than metabolic ones.'},
  {t:'Enzyme induction, enzyme inhibition, polymorphism and protein displacement', correct:false,
   why:'Induction and inhibition change how fast a drug is metabolised once it is in the body, and polymorphism is an inherited difference in the enzyme. All three belong to metabolism rather than absorption. Protein displacement changes distribution. None of the four alters how much drug crosses the gut wall in the first place, which is what an absorption interaction does.'},
  {t:'Changes in urinary pH, glomerular filtration rate, tubular secretion and reabsorption', correct:false,
   why:'These are elimination mechanisms, acting at the kidney after the drug has already been absorbed and distributed. Urinary pH changing how much drug is reabsorbed is pH trapping, which belongs to the elimination lecture. Picking this means answering about the wrong end of the drug\'s journey.'},
  {t:'First-pass metabolism, hepatic extraction, biliary excretion and enterohepatic recycling', correct:false,
   why:'First-pass metabolism does lower the amount of drug reaching the circulation, which is what makes this tempting, but it happens in the gut wall and liver after absorption rather than interfering with absorption itself. Biliary excretion and enterohepatic recycling come later still. The four absorption mechanisms all act on how much drug gets across the gut wall, not on what happens to it once it is in the circulation.'}],
 teach:[
  {h:'The four mechanisms',
   t:'Adsorption onto a large surface area leaves less free drug available to be absorbed; activated charcoal is used deliberately for this in some poisonings, and the bile acid sequestering resins do it as an unwanted effect. Chelation with metal ions has the same result, and the quinolone and tetracycline antibacterials are the drugs at risk. Altered gastrointestinal motility changes how long the drug stays in contact with the absorbing surface, and the deck records the effect on absorption as variable. Effects on transport proteins are variable as well, and P-glycoprotein is the example.'},
  {h:'The transporter example runs in both directions',
   t:'Digoxin is a substrate for the P-glycoprotein efflux pump. Verapamil inhibits intestinal P-glycoprotein, so less digoxin is pumped back into the gut and blood levels rise. Rifampin induces intestinal P-glycoprotein expression, so more is pumped back and blood levels fall. Same drug, same transporter, opposite directions.'}],
 cite:'090426_ADMETAbsorption_II.pdf, "Oral Route of Drug Administration" (the Drug–Drug Interactions slide) and "Key Concepts"'},

{id:'ab2-2', prof:'Yendapally', tier:'old', topic:'admet', sub:'ddi', concept:'ab2-quinolone-chelation',
 tags:['structure','reasoning'], source:'slide',
 stem:'A patient takes ciprofloxacin with an antacid and the antibacterial fails. Which groups on the quinolone are responsible, and what does the chelate do?',
 options:[
  {t:'The 3-carboxylic acid and the 4-keto groups; the chelate lowers solubility and reduces absorption', correct:true,
   why:'Those two groups sit next to each other on the quinolone and together they hold a metal ion between them. Quinolones chelate polyvalent metal ions — calcium, magnesium, zinc, iron and aluminium — and the resulting complex is less soluble, so less free drug is available to be absorbed. The timing rule follows from it: agents containing polyvalent metals should be given at least 4 hours before or 2 hours after the quinolone, so the two are never dissolving together.'},
  {t:'The fluorine and the piperazine ring; the chelate is absorbed and then fails to reach the target', correct:false,
   why:'The fluorine and the piperazine are part of the quinolone structure, but the chelation site the deck names is the 3-carboxylic acid and 4-keto pair, two oxygens held at the spacing that lets one metal ion bridge them. The second half is wrong in a more important way: the chelate is not absorbed at all. The interaction removes drug from absorption rather than letting it in and disabling it afterwards.'},
  {t:'The tertiary amine; the chelate increases gastric pH and destroys the drug', correct:false,
   why:'Raising gastric pH is something antacids do, which is what makes this plausible, but it is not the mechanism given here. The deck attributes the loss to chelation and reduced solubility, not to acid neutralisation or to the drug being destroyed. Picking this substitutes a general fact about antacids for the specific mechanism.'},
  {t:'The aromatic ring; the chelate is adsorbed onto the antacid surface', correct:false,
   why:'Adsorption is a different mechanism in the same list, and its examples are activated charcoal and the bile acid resins, not antacids. Adsorption is drug sticking to a surface; chelation is drug binding a metal ion through specific groups. Both reduce the free drug available, and that shared result is what makes them easy to swap.'}],
 teach:[
  {h:'Where the chelate forms',
   t:'Chelation occurs between the metal and the 3-carboxylic acid and 4-keto groups of the quinolone. Quinolones chelate polyvalent metal ions including calcium, magnesium, zinc, iron and aluminium, which lowers solubility and reduces absorption.'},
  {h:'Which products supply the metal',
   t:'Iron preparations, antacids containing calcium, magnesium or aluminium salts, and multivitamin or over-the-counter supplements containing zinc, calcium, magnesium or aluminium salts.'},
  {h:'The tetracyclines do the same thing, with a different clock',
   t:'The acidic functions of the tetracyclines form salts by chelation with iron, calcium, magnesium and aluminium ions. When both must be given, the ions should be given 1 hour before or 2 hours after the tetracycline, where the quinolone rule is 4 hours before or 2 hours after.'},
  {h:'Why tetracyclines stain teeth',
   t:'Bone and teeth are calcium-rich, so tetracyclines accumulate in them in proportion to the amount given and the duration of treatment while those structures are forming. Tetracyclines are yellow, and in advanced cases the discoloration is permanent and the teeth turn brown. This is why tetracyclines are normally avoided in children aged 6 to 12, while the permanent teeth are forming.'}],
 cite:'090426_ADMETAbsorption_II.pdf, "Oral Route of Drug Administration (Contd.): 5" and "Tetracyclines: Chelation"'},

{id:'ab2-3', prof:'Yendapally', tier:'old', topic:'admet', sub:'ddi', concept:'ab2-motility',
 tags:['compare','recall'], source:'slide',
 stem:'Loperamide and bisacodyl both change drug absorption by altering gastrointestinal motility. How does each one act?',
 options:[
  {t:'Loperamide inhibits peristalsis and prolongs intestinal transit time; bisacodyl stimulates peristalsis by directly irritating intestinal smooth muscle', correct:true,
   why:'They act in opposite directions on the same variable. The deck describes the effect on absorption as variable rather than fixed, and the deck records it that way rather than assigning one direction. Naming which way each drug pushes transit is what the question asks for.'},
  {t:'Both slow transit, so both increase the absorption of any co-administered drug', correct:false,
   why:'Bisacodyl is a laxative and speeds transit rather than slowing it, so the first half is wrong for one of the two. The word any in the second half is wrong as well: the deck calls the effect of motility changes variable, so no single direction can be claimed for every drug.'},
  {t:'Loperamide adsorbs the drug onto its surface; bisacodyl chelates metal ions', correct:false,
   why:'Adsorption and chelation are two of the other three mechanisms in the same list, with their own examples — activated charcoal and the resins for adsorption, iron and antacids for chelation. Neither describes what these two drugs do. Picking this means matching drugs to the wrong entry in a four-item list.'},
  {t:'Both affect P-glycoprotein in the gut wall', correct:false,
   why:'That is the fourth mechanism, and its examples are digoxin with verapamil and rifampin. Loperamide does appear elsewhere in this course as a P-glycoprotein substrate at the blood–brain barrier, which is what makes this tempting, but here it is listed under motility and the mechanism asked about is its effect on peristalsis.'}],
 teach:[
  {h:'The two directions',
   t:'Loperamide inhibits peristalsis and prolongs transit time in the intestine. Bisacodyl stimulates peristalsis by directly irritating the smooth muscle of the intestine.'},
  {h:'Why the effect on absorption is called variable',
   t:'Transit time sets how long a drug stays in contact with the absorbing surface, so changing it changes absorption. The deck records the result as variable rather than giving it a single direction, so the examinable point is which way each drug moves transit, not what that does to any particular drug.'}],
 cite:'090426_ADMETAbsorption_II.pdf, "Oral Route of Drug Administration (Contd.): 8"'},

{id:'ab2-4', prof:'Yendapally', tier:'old', topic:'admet', sub:'ddi', concept:'ab2-cholestyramine',
 tags:['reasoning','predict'], source:'slide',
 stem:'Cholestyramine given with furosemide decreases the effect of the diuretic. By what mechanism does cholestyramine hinder absorption?',
 options:[
  {t:'It adsorbs the drug onto its surface, leaving less free drug available for absorption', correct:true,
   why:'Cholestyramine and colestipol are bile acid sequestering resins, and a resin presents a large surface that other drugs stick to. Drug held on that surface is not free to cross the gut wall, so less of it is absorbed and the diuretic effect falls. This is the first of the four absorption interaction mechanisms, the same one that makes activated charcoal useful in poisoning.'},
  {t:'It absorbs the drug', correct:false,
   why:'Adsorption and absorption differ by one letter and describe different things. Adsorption is a molecule sticking to the outside of a surface; absorption is a molecule passing into something. The resin holds furosemide on its surface and is not itself absorbed, so the drug never enters the bloodstream. This is the answer the wording of the slide is designed to catch.'},
  {t:'It forms chelates with the drug', correct:false,
   why:'Chelation needs a metal ion held between donor groups, which is how quinolones and tetracyclines are lost to iron and antacids. Cholestyramine supplies a surface rather than a metal ion, and furosemide is not being chelated. Both mechanisms reduce the free drug available, and that shared result is what makes them easy to interchange.'},
  {t:'It induces an efflux transporter', correct:false,
   why:'Transporter effects are the fourth mechanism, with rifampin inducing intestinal P-glycoprotein as the example. A resin acting in the gut lumen does not change transporter expression. Picking this means reaching for the mechanism that most often explains lost drug elsewhere in the course.'}],
 teach:[
  {h:'What the resins are for and what they cost',
   t:'Cholestyramine and colestipol are bile acid sequestering resins, given to bind bile acids. Their surface binds other drugs too, so a drug taken at the same time is held and not absorbed. The worked example is a loop diuretic such as furosemide, whose effect decreases.'},
  {h:'Adsorption is not absorption',
   t:'Adsorption is a molecule adhering to the surface of another material. Absorption is a molecule passing into a material or across a membrane. The whole interaction depends on the first: drug adsorbed onto the resin is drug that never gets absorbed.'},
  {h:'The deliberate use of the same mechanism',
   t:'Activated charcoal is used in the emergency treatment of some poisonings for exactly this reason. Its very large surface area adsorbs the poison in the gut, so less of it is free to be absorbed. The same property that creates the unwanted resin interaction is what makes charcoal useful.'}],
 cite:'090426_ADMETAbsorption_II.pdf, "Oral Route of Drug Administration (Contd.)" and "Oral Route of Drug Administration (Contd.): 2"'},

{id:'ab2-5', prof:'Yendapally', tier:'old', topic:'admet', sub:'prodrug', concept:'ab2-prodrug-def',
 tags:['definition','list'], source:'slide',
 stem:'What is a prodrug, and for what purposes are prodrugs made in this material?',
 options:[
  {t:'A compound inactive in vitro that is converted to the active drug in vivo; made for improved lipophilicity or permeability, carrier-mediated absorption, longer duration of action, better parenteral administration, and better ophthalmic delivery', correct:true,
   why:'The definition turns on where the activity appears: nothing in a test tube, activity in a living system, because the conversion needs an enzyme or a chemical change that only happens in the body. The five purposes each have a worked example: enalapril, valacyclovir, haloperidol decanoate, fosphenytoin, and dipivefrin. Prodrugs are 5 to 7 percent of known drugs and a larger share of new ones.'},
  {t:'A drug that is active as given and is then inactivated by metabolism', correct:false,
   why:'That describes the ordinary case, where metabolism ends a drug\'s action. A prodrug is the reverse: metabolism starts it. The two are opposite consequences of metabolism, and this reversal is the most common way the term is misused.'},
  {t:'A metabolite of a known drug that is developed as a drug in its own right', correct:false,
   why:'That is drug discovery through metabolism studies, which gave sulfanilamide from prontosil and fexofenadine from terfenadine. The overlap is real — prontosil is itself a prodrug — but the categories differ: a prodrug is a compound designed or found to be converted into the active agent, while a metabolite-derived drug is the product being developed instead of the parent.'},
  {t:'A compound that is active both in vitro and in vivo but is better absorbed', correct:false,
   why:'Being active in a test tube is exactly what a prodrug is not. Better absorption is often the reason a prodrug is made, so the second half describes a real purpose, but a compound already active as given is simply a well-absorbed drug and needs no conversion.'}],
 teach:[
  {h:'The definition',
   t:'A prodrug is a pharmacologically inactive compound in vitro that is converted to an active compound in vivo by a metabolic biotransformation. It undergoes an enzymatic or chemical transformation in the body to release the active parent drug. Prodrugs are currently 5 to 7 percent of known drugs and a larger percentage of new drugs.'},
  {h:'The five purposes, each with its example',
   t:'Improved lipophilicity or permeability: enalapril, the ethyl ester of enalaprilat, raising log P from 1.17 to 1.77 and oral bioavailability from 30 to 40 percent up to 50 to 70 percent; oseltamivir ethyl ester is the second case, taking a poorly lipophilic zwitterionic amino acid from under 5 percent oral bioavailability to about 80 percent. Carrier-mediated absorption: valacyclovir, the valine ester of acyclovir, transported by the peptide transporter PepT1 and raising oral bioavailability from 15 to 21 percent up to 54 percent. Longer duration: haloperidol decanoate, log P 7.3 against 3.49, taken up by fatty tissue and given intramuscularly once a month. Parenteral administration: the phosphate ester of phenytoin, soluble at 142 mg/mL against about 15 mg/mL for phenytoin sodium, and that 15 mg/mL only at a solution pH above 11, rapidly absorbed by the intramuscular route and converted by phosphatases with a conversion half-life of 8 to 15 minutes. Ophthalmic delivery: dipivefrin, the dipivalic acid diester of adrenaline, 600-fold more lipophilic and crossing the human cornea 17 times faster.'},
  {h:'All five are esters, and one is not cleaved by an esterase',
   t:'Every one of these five is an ester: an ethyl ester for enalapril and oseltamivir, a valine ester for valacyclovir, a decanoate ester for haloperidol, a phosphate ester for phenytoin and a dipivalic acid diester for dipivefrin. An ester is a way to change a molecule\'s solubility or lipophilicity while being confident the change will be undone in the body. The deck names the converting enzyme for three of them: esterases for oseltamivir and dipivefrin, and phosphatases for fosphenytoin, with a conversion half-life of 8 to 15 minutes. For enalapril, valacyclovir and haloperidol decanoate it records the conversion without naming the enzyme.'}],
 cite:'090426_ADMETAbsorption_II.pdf, "Prodrugs: 1" and "Key Concepts: 2"'},

{id:'ab2-6', prof:'Yendapally', tier:'old', topic:'admet', sub:'prodrug', concept:'ab2-prodrug-match',
 tags:['reasoning','compare'], source:'slide',
 stem:'Haloperidol decanoate is given intramuscularly once a month, while haloperidol is taken orally two or three times a day. What accounts for the difference?',
 options:[
  {t:'The decanoate ester raises log P from 3.49 to 7.3, so the drug is taken up by fatty tissue and released slowly over time', correct:true,
   why:'A decanoate is a ten-carbon chain, and adding that much hydrocarbon raises lipophilicity sharply. The more lipophilic ester is taken up by fatty tissue and released from it only slowly, which is what turns two or three doses a day into one a month. The purpose here is duration, not absorption.'},
  {t:'The ester is more water-soluble, so it is absorbed faster from the muscle', correct:false,
   why:'The direction is backwards. A ten-carbon chain makes the molecule less water-soluble, and the point is slow release rather than fast absorption. Improved water solubility for injection is a real prodrug purpose in this material, but the example for it is fosphenytoin, whose phosphate ester dissolves at 142 mg/mL.'},
  {t:'The ester is transported by a peptide transporter, so more of it gets in', correct:false,
   why:'Carrier-mediated absorption is another of the five purposes, and its example is valacyclovir, the valine ester of acyclovir carried by PepT1. A peptide transporter recognises an amino acid ester, not a ten-carbon fatty acid, and in any case an intramuscular injection does not need a gut transporter.'},
  {t:'The ester resists metabolism, so the drug is cleared more slowly', correct:false,
   why:'The ester is designed to be cleaved, not to resist cleavage — without cleavage no haloperidol would be released at all. What is slow here is release from fatty tissue, not clearance of the active drug. Confusing a slow-release depot with a slowly metabolised drug is the error.'}],
 teach:[
  {h:'How a depot ester works',
   t:'Haloperidol has log P 3.49 and an oral dose of 0.5 to 5 mg two or three times daily. Haloperidol decanoate has log P 7.3, is administered intramuscularly once a month, is taken up by the fatty tissues, and is slowly released over time. The deck records the release as slow and does not name the enzyme that performs it, unlike oseltamivir and dipivefrin, where it names esterases.'},
  {h:'Telling the five purposes apart by what the added group does',
   t:'A long hydrocarbon chain added to make the molecule sit in fat means duration. A phosphate added to make it dissolve means parenteral administration. An amino acid ester added so a transporter will recognise it means carrier-mediated absorption. A small ester added to raise log P modestly means oral permeability. A bulky lipophilic diester on an eye drug means corneal penetration. Reading what the attached group does tells which purpose is being served.'}],
 cite:'090426_ADMETAbsorption_II.pdf, "Prodrugs (Contd.): 4"'},

/* ═══════════ THE SLIDE-49 CASE — Sikazwe, Lecture 10 ═══════════ */
{id:'df-14', prof:'Sikazwe', tier:'old', topic:'dmfound', sub:'ddi', concept:'induction-plot-case',
 tags:['case','predict'], source:'slide', img:'dm_triazolam_plot_clean',
 stem:'Two single-dose triazolam concentration curves are shown, X and T. One was recorded after several days of rifampin. Which plot is triazolam given with rifampin?',
 options:[
  {t:'Plot T, the low curve peaking near 0.3 ng/mL', correct:true,
   why:'Rifampin induces CYP3A4, and after several days of pretreatment the extra enzyme is already present when the triazolam dose is given. More enzyme clears the dose faster, so less reaches the blood and the whole curve sits roughly ten times lower: about 0.3 ng/mL at the peak against about 2.5 ng/mL without rifampin. That is plot T.'},
  {t:'Plot X, the high curve peaking near 2.5 ng/mL', correct:false,
   why:'Plot X is triazolam on its own. Picking it means reading induction as raising the drug level, which is what inhibition does. An inducer makes more enzyme, and more enzyme means less drug in the blood, not more.'},
  {t:'Neither; rifampin would shift the peak later without changing its height', correct:false,
   why:'Induction changes how much drug survives, not when it arrives. Both curves peak at about the same time, one to two hours, because absorption is unchanged; what differs is how much is left after first-pass and systemic clearance by the induced enzyme.'},
  {t:'Both curves would be the same, since a single dose is too short for induction', correct:false,
   why:'The single dose is the triazolam. The rifampin was given for days beforehand, which is the time induction needs. By the time the test dose arrives, the enzyme is already up, so the effect shows on the very first triazolam dose.'}],
 teach:[
  {h:'What the figure shows',
   t:'A single oral dose of triazolam, followed for ten hours, with and without rifampin pretreatment. Plot X, no rifampin, peaks at about 2.5 ng/mL. Plot T, with rifampin, peaks at about 0.3 ng/mL and stays lower throughout. Same dose, same timing, about a tenfold drop in exposure.'},
  {h:'Why it takes days to set up and shows on the first dose',
   t:'Induction works through gene transcription: the cell makes more enzyme protein, and that accumulates over days. Once it has accumulated, every substrate dose meets more enzyme. So the inducer needs time, but the effect on the substrate is immediate once the enzyme is there. The reverse holds when the inducer stops: the extra enzyme is degraded over days, and the substrate level climbs back.'},
  {h:'The exam form of this slide',
   t:'Slide 49 is captioned as a case, asks which plot is triazolam with rifampin, and carries the note NTK, will present a case like this. The answer is T. An inhibitor would produce the opposite figure, with the co-administered curve sitting above the control.'}],
 teachImg:'dm_triazolam_rifampin',
 cite:'Lecture #10 (MCMet-9_4_26-9_9_26.pdf) slide 49',
 quote:'Case: What plot (X or T) indicates Triazolam\'s serum levels when co-administrated with Rifampin?'}
);
