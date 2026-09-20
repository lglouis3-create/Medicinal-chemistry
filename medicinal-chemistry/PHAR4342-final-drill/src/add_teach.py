#!/usr/bin/env python3
"""Give every remaining question a concept block.

41 questions carried option explanations but no `teach`, all in the Sikazwe old
pool: dmfound 13, paths 23 (plus 2 variants), fgs 4, and v-df-3b. Each block
below is written from the cited slide, read this session out of
MCMet-9_4_26-9_9_26.pdf (Lecture #10), MCMet-9_10_26.pdf (Lecture #11) and
MCMet-9_16_2026.pdf (Lecture #14).

The block is inserted immediately before the question's `cite` line, matching
where the rest of the bank keeps it.
"""
import re, sys

FILES = ["q4_paths.js", "q6_variants.js", "q7_fgs.js"]

TEACH = {
# ---------- DM foundations (Lecture #10) ----------
"df-1": "Every word of the definition does work. Enzyme-catalysed rules out spontaneous chemical breakdown, which happens to some drugs in solution but is not metabolism. Substrates being drugs or non-drugs means the same enzymes act on endogenous molecules as well, which is why dopamine and sumatriptan appear side by side as substrates of one enzyme. And a change in chemical structure is the result, which separates metabolism from elimination: metabolism alters the molecule, elimination removes it. A drug can be eliminated without ever being metabolised, and several are.",

"df-2": "The defence is a change in solubility. A lipophilic molecule crosses membranes easily in both directions, so the kidney filters it and the tubule reabsorbs it, and the drug circulates instead of leaving. Metabolism adds or exposes polar groups in Phase 1, then attaches a large polar conjugate in Phase 2, and the product is water-soluble enough to stay in the tubular fluid or to be carried into bile. Two qualifications come with it: not every metabolite is more hydrophilic than its parent, and not every metabolite is harmless, since some are active and some are reactive.",

"df-3": "The two phases are named for the chemistry their enzymes do, not for an order they run in. Phase 1 enzymes are oxygenases: cytochrome P450, flavin-containing monooxygenase, monoamine oxidase, alcohol and aldehyde dehydrogenase, the aldo-keto reductases, carboxylesterase and epoxide hydrolase. They insert oxygen, remove hydrogen, add electrons or add water, and the result is a functional group that was either absent or masked. Phase 2 enzymes are transferases: the glucuronosyltransferases, sulfotransferases, glutathione S-transferases, N-acetyltransferases, methyltransferases and acyl synthetases. Each moves a group from a cofactor onto a functional group that is already present, which is why a drug carrying a suitable group can go straight to Phase 2.",

"df-4": "Four patterns are listed, and only the first is the familiar one. A parent drug can go through Phase 1 to a Phase 1 metabolite and then through Phase 2; a Phase 1 metabolite can undergo a second Phase 1 reaction; a parent drug can go directly to a Phase 2 metabolite; and a Phase 2 metabolite can undergo a Phase 1 reaction afterwards. The numbering of the phases describes two kinds of chemistry, so any sequence of them is possible, and the sequence a given drug takes depends only on which functional groups it carries and which it acquires.",

"df-5": "Broad substrate activity is the first of the listed enzyme characteristics, and the clinical consequence follows from it directly. One enzyme accepting many unrelated molecules means two drugs prescribed for unrelated reasons can compete at the same active site, so an interaction needs no chemical similarity between the drugs at all. Dopamine and sumatriptan are the paired example. The other characteristics compound it: multiple families and subfamilies, polymorphism producing rapid through poor metaboliser phenotypes, a cytoprotective role, constitutive expression, and inducibility. Broad specificity makes interactions common; inducibility and polymorphism make their size vary between patients.",

"df-6": "The distinction is geographic. Pre-systemic metabolism happens between swallowing and the systemic circulation, in the gut wall and then in the liver by way of the portal vein, which is the first-pass effect. Systemic metabolism happens after the drug has reached the circulation and been distributed. The practical consequence is that an oral dose and an intravenous dose of the same drug can produce very different exposures, because only the oral route passes the liver before reaching the rest of the body, and intestinal CYP3A4 removes some of the dose before the liver sees it.",

"df-7": "Three cellular compartments hold the enzymes, and the compartment tracks the enzyme family. Microsomal means the endoplasmic reticulum, where the cytochrome P450 enzymes and the glucuronosyltransferases sit as membrane-bound proteins. The cytosol is where the sulfotransferases and glutathione S-transferases float free. The mitochondria hold monoamine oxidase and some other oxidases. The nucleus is where induction is triggered, since a drug that induces an enzyme does so by increasing transcription, but no metabolic reaction is carried out there.",

"df-8": "Metabolism has more than one outcome, and the possibilities are not all favourable. A drug can be inactivated, which is the expected result. An inactive prodrug can be activated. An active drug can be converted to another active metabolite. And a drug can be bioactivated to a reactive species that damages the cell that made it. The same enzyme can produce different outcomes for different substrates, so the consequence is a property of the drug and the reaction rather than of the enzyme.",

"df-9": "A prodrug is designed around the enzyme that will convert it, and the two examples take different routes. Enalapril is an ester prodrug: carboxylesterase hydrolyses the ester to release enalaprilat, the active diacid, and the ester exists because the acid itself is absorbed poorly. Azo prodrugs are cleaved by bacterial azo-reductases in the intestine, splitting the nitrogen-nitrogen double bond to give two amines, and in the named case both halves are active, one an antibiotic and one an anti-inflammatory. Site matters as much as chemistry in the second case, since the enzyme belongs to the gut flora and the release therefore happens in the colon.",

"df-10": "Reactive metabolites are the reason several drugs carry a black box warning or were withdrawn, and the lists are kept separate for a reason. One list holds drugs withdrawn because of reactive metabolites. A second holds drugs never approved in the United States for the same reason. A third holds drugs that remain in use with hepatotoxicity precautions, acetaminophen, carbamazepine and clozapine among them. The third list is the clinically important one, because those drugs are still prescribed and the risk is managed by dose limits and monitoring rather than by removal.",

"df-11": "Induction changes how much enzyme is present, so it takes time and then persists. A drug that induces acts on transcription, so more enzyme protein accumulates over days rather than the effect appearing with the first dose, and the extra enzyme decays over days after the inducer stops. While it is present, a substrate of that enzyme is cleared faster and its serum concentration falls. Triazolam with rifampin is the worked case, and the shape of the curve is what identifies it: the level drops gradually as the enzyme builds up, rather than changing at once as an inhibitor would make it.",

"df-12": "The list of drugs involved in serious interactions is worth reading as a set of categories rather than as names. Cyclosporin and phenytoin are there for a narrow therapeutic index, so a modest change in clearance crosses into toxicity or loss of effect. Erythromycin, fluconazole and itraconazole are strong inhibitors. Rifampin is the strong inducer. The protease inhibitors, the SSRIs and the HMG-CoA reductase inhibitors appear because they combine a common indication with a CYP dependence. Theophylline combines a narrow index with CYP1A2 metabolism, which is why smoking status changes its dose.",

"df-13": "Acetaminophen with ethanol is a CYP2E1 interaction, and chronic use is what makes it dangerous rather than a single drink. Ethanol induces CYP2E1, so more of an acetaminophen dose goes down the route that produces N-acetyl-p-benzoquinone imine. Chronic alcohol use also depletes glutathione, which is the defence against that metabolite. Both changes move in the same direction, so a dose that would be safe produces more reactive metabolite and less of what neutralises it, and liver toxicity follows at doses below the usual threshold.",

# ---------- Phase 1 pathways (Lecture #11) ----------
"p1-2": "Allylic hydroxylation is named for where the carbon sits rather than for what it becomes. A carbon adjacent to a carbon-carbon double bond is allylic, and cytochrome P450 hydroxylates it in preference to an ordinary saturated carbon because the radical formed at that position is stabilised by the neighbouring double bond. The product is an alcohol, exactly as in plain aliphatic hydroxylation; the label changes because the position does. Finding a double bond in a structure is therefore the clue that the carbons on either side of it are likely oxidation sites.",

"p1-3": "A benzylic carbon is the carbon directly attached to an aromatic ring, and only that one. The carbon one position further along is not benzylic. Cytochrome P450 hydroxylates it readily for the same reason it favours the allylic position: the adjacent ring stabilises the intermediate. Tolbutamide is the worked example, where the methyl group on the ring is hydroxylated. Distinguishing benzylic from aromatic hydroxylation is a matter of which atom takes the oxygen, the side-chain carbon or a carbon of the ring itself.",

"p1-4": "Aromatic hydroxylation puts the hydroxyl directly onto a carbon of the ring rather than onto a side chain. Estradiol is the worked example, and it also shows that one drug usually gives more than one metabolite, since the hydroxyl can be introduced at more than one ring position. A phenol appearing where a plain benzene ring was is the signature of the reaction, and it matters downstream because a phenol is a substrate for glucuronidation and sulfation, so an aromatic hydroxylation often creates the handle a Phase 2 enzyme then uses.",

"p1-5": "N-dealkylation looks like a group being removed, and the naming follows the heteroatom that loses it. Cytochrome P450 oxidises the carbon next to the nitrogen, and that carbon then leaves as an aldehyde, so a secondary amine appears where a tertiary one was and formaldehyde is released when the group removed was a methyl. The oxygen is inserted at a carbon even though the reaction is named for the nitrogen, which is why N-, O- and S-dealkylation are one reaction type with three labels: the difference is only which heteroatom the departing alkyl group was attached to.",

"p1-6": "S-dealkylation removes an alkyl group from a sulfur, by the same route as its nitrogen and oxygen counterparts: the carbon adjacent to the heteroatom is oxidised and departs, leaving a free thiol where a thioether was. Reading the reaction from the structure means finding which heteroatom lost a substituent, so a thiol appearing in a metabolite where a sulfur-carbon bond used to be identifies the reaction without needing the enzyme to be named.",

"p1-7": "Codeine to morphine is an O-demethylation, and it is the case where the reaction decides whether the drug works. The methyl group on codeine's phenolic oxygen is removed by CYP2D6, giving morphine, and morphine is the species with meaningful analgesic activity. A poor metaboliser produces little morphine and reports no relief; an ultrarapid metaboliser produces a great deal and can reach respiratory depression from a standard dose. The whole clinical picture follows from one methyl group and the enzyme that removes it.",

"p1-8": "Ethanol is cleared in two oxidation steps by two different enzymes, and the order cannot be swapped. Alcohol dehydrogenase oxidises the primary alcohol to an aldehyde. Aldehyde dehydrogenase then oxidises that aldehyde to a carboxylic acid. Each step removes hydrogen and raises the oxidation state of the same carbon, so the pair reads as one ladder: alcohol, aldehyde, acid. Naming the enzyme from a structure means asking which rung the starting material sits on, since the substrate of the second enzyme is the product of the first.",

"p1-9": "Disulfiram works by stopping the second step rather than the first. It inhibits aldehyde dehydrogenase, so ethanol is still oxidised to acetaldehyde by alcohol dehydrogenase but the acetaldehyde is not cleared onward to acetic acid. Acetaldehyde accumulates, and the flushing, nausea and headache that follow are the deterrent the drug is prescribed for. Pyrazole inhibits the same enzyme. The design point is that blocking a middle step of a pathway causes the intermediate to build up, which is a different kind of effect from blocking the first step.",

"p1-10": "Monoamine oxidase oxidises an amine to an aldehyde, and its substrates are largely neurotransmitters rather than foreign compounds. The two isoforms divide by preference: MAO-A handles serotonin, MAO-B handles phenethylamines. That division is why MAO inhibitors carry the interactions they do, since blocking the enzyme leaves dietary amines such as tyramine unmetabolised and free to act. The reaction itself is an oxidative deamination, so the nitrogen leaves and a carbonyl appears where the amine carbon was.",

"p1-11": "Flavin-containing monooxygenase handles nitrogen and sulfur, and the products are named by the heteroatom that receives the oxygen. Tertiary amines and amides give N-oxides. Sulfur gives sulfoxides and then sulfones. Three major isoforms are known. What separates it from cytochrome P450 is that it is not affected by the inducers and inhibitors that act on the P450 system, so a drug cleared mainly by FMO escapes a whole class of interaction. Cytochrome P450 can also carry out N-oxidation, so the product alone does not always identify the enzyme.",

"p1-12": "Aldo-keto reductase runs the reduction that alcohol dehydrogenase runs in reverse, converting aldehydes and ketones to alcohols. The clinical example is doxorubicin, whose ketone is reduced to the secondary alcohol doxorubicinol, and the alcohol is the species responsible for the cardiotoxicity. Metabolism here neither inactivates the drug nor prepares it for elimination but creates the toxicity, which is why reduction reactions cannot be assumed to be detoxifying.",

"p1-13": "Azo reduction splits a nitrogen-nitrogen double bond and yields two amines, one from each side. The enzymes belong to the intestinal microbiota rather than to the liver, so the reaction happens in the colon and depends on gut flora being present. Prontosil and sulfasalazine are the cases where this activates the drug, since neither parent is active until the azo bond is cleaved. A metabolite pair that together account for the whole parent structure, each carrying a new amine, identifies the reaction.",

"p1-14": "Nitro reduction converts a nitro group to a primary amine, passing through nitroso and hydroxylamine intermediates on the way. The intermediates matter beyond bookkeeping, because a hydroxylamine is itself reactive and is one of the structural alerts in the toxicity material. So the same reduction that detoxifies by finishing at an amine can cause harm if it stalls at the middle. Recognising it from a structure is a matter of seeing an -NO2 in the parent and an -NH2 in the metabolite at the same position.",

"p1-15": "Carboxylesterase hydrolyses four functional groups, and all four share the same carbonyl carbon with two substituents, so the products follow from what is attached. An ester gives a carboxylic acid and an alcohol. An amide gives a carboxylic acid and an amine. A carbamate gives an alcohol and an amine, losing carbon dioxide. A carbonate gives two alcohols, also losing carbon dioxide. Counting the heteroatoms on the carbonyl carbon and naming which ones they are gives the products without any further rule.",

"p1-16": "Procaine is the worked hydrolysis, and its short duration is the point. The ester bond is cleaved by esterases in plasma and tissue to give para-aminobenzoic acid and diethylaminoethanol, neither of which is a local anaesthetic, so the drug's action ends as soon as hydrolysis occurs. An ester in a drug is therefore a design decision about duration as much as a functional group, and replacing it with an amide, as in lidocaine, gives a molecule that survives plasma esterases and lasts longer.",

"p1-17": "Epoxide hydrolase adds water across an epoxide and opens the three-membered ring, giving a molecule with two adjacent hydroxyl groups. The reaction is a detoxification, because the epoxide carbon is electrophilic and will otherwise be attacked by nucleophiles on protein and DNA. It is also saturable, and that is the limitation that matters clinically: at a high enough exposure the epoxide is produced faster than the enzyme can open it, and the surplus is left for glutathione S-transferase or for whatever macromolecule it reaches first.",

"p2-1": "Glucuronidation is the widest Phase 2 route and the one to check first. UDP-glucuronosyltransferase is microsomal, its cofactor is UDP-glucuronic acid, and it accepts alcohols, carboxylic acids, aromatic amines and thiols. Bilirubin is its endogenous substrate, which is why a newborn with low UGT activity becomes jaundiced. The conjugate is recognisable from its structure: a six-carbon sugar carrying a carboxyl group, so the metabolite is both much larger than the parent and ionised at physiological pH, which is what makes it eliminable.",

"p2-2": "Glutathione conjugation is the defence against electrophilic carbon, and its two target types are specific. Glutathione S-transferase acts on carbons bearing a halogen and on the carbons of an epoxide, both of which are electron-poor and open to attack. The cofactor is glutathione itself, a tripeptide whose cysteine sulfhydryl does the attacking. The conjugate is identified by the tripeptide appearing in the metabolite, often abbreviated as GS- or -SG, and the conjugate is later trimmed by peptidases and acetylated to the mercapturic acid that leaves in urine.",

"p2-4": "N-acetylation moves an acetyl group from acetyl coenzyme A onto a nitrogen, and it is the Phase 2 route that does not increase polarity. Its targets are primary amines, both alkyl and aryl, and sulfonamide nitrogens. NAT2 is polymorphic, splitting patients into slow and fast acetylators, which changes exposure to isoniazid, hydralazine and the sulfonamides. Because the acetamide product is often less water-soluble than the parent amine, this is the conjugation that can precipitate in the renal tubule, so it is the exception to the rule that Phase 2 makes elimination easier.",

"p2-5": "Amino acid conjugation attaches a whole amino acid, usually glycine or glutamine, to a carboxylic acid. The mechanism has an extra step the other conjugations lack: acetyl coenzyme A first activates the carboxyl group, and only then does acyl synthetase join the amino acid to it. Three cofactors are therefore listed rather than one. Benzoic acid conjugated with glycine to give hippuric acid is the classical case. Recognising it means finding an amide bond in the metabolite whose nitrogen side is a recognisable amino acid.",

"p2-7": "Tamoxifen needs two enzymes in sequence, and the second one is where the variation lies. CYP3A4 performs the N-demethylation and CYP2D6 the hydroxylation, and only the product of both, endoxifen, has the activity the treatment depends on. A patient who is a CYP2D6 poor metaboliser, or who takes a CYP2D6 inhibitor such as a selective serotonin reuptake inhibitor, makes less endoxifen from the same dose. The concentration of the parent drug in that patient is unremarkable, which is what makes the interaction easy to miss: the failure is in a metabolite that is not usually measured.",

# ---------- functional groups ----------
"fgg-1": "An ester and an amide differ by one atom on the carbonyl carbon, and everything else follows from it. The ester carries an oxygen, so hydrolysis gives a carboxylic acid and an alcohol. The amide carries a nitrogen, so hydrolysis gives a carboxylic acid and an amine. The amide is also the more stable of the two, because the nitrogen lone pair delocalises into the carbonyl and strengthens the carbon-nitrogen bond, which is why procaine with its ester is short-acting while lidocaine with its amide is not. Reading the atom attached to the carbonyl carbon therefore predicts both the products and the rough stability.",

"fgg-2": "Amines are classified by how many carbons are on the nitrogen, not by how many carbons the molecule has. A primary amine carries one, a secondary two, a tertiary three, and a quaternary ammonium four, which leaves the nitrogen permanently charged. The class determines which reactions apply: primary amines are the targets for N-acetylation, tertiary amines and amides form N-oxides under flavin-containing monooxygenase, and a quaternary nitrogen cannot be neutralised at any pH, so it does not cross into the central nervous system by passive diffusion. Counting substituents on the nitrogen is therefore the first step in predicting a nitrogen-containing drug's fate.",

"fgg-3": "Sulfur appears in several oxidation states and each has its own enzyme. A thiol can be methylated by a methyltransferase using S-adenosylmethionine, glucuronidated by UDP-glucuronosyltransferase, or oxidised by flavin-containing monooxygenase. A thioether can be S-dealkylated by cytochrome P450 or oxidised through the sulfoxide to the sulfone. The oxidation ladder runs sulfide to sulfoxide to sulfone, adding one oxygen at each step, so naming the metabolite is a matter of counting oxygens on the sulfur. Sulfur is also where dimercaprol's activity lies, which is why methylating its thiols removes the drug's ability to bind metals.",

"fgg-4": "A functional group predicts its own metabolic route, which is what makes structure reading the whole skill. A hydroxyl invites glucuronidation, sulfation or methylation. A carboxylic acid invites glucuronidation or amino acid conjugation. A primary amine invites acetylation. An epoxide or a halogen-bearing carbon invites glutathione conjugation. An ester or amide invites carboxylesterase. Working from the structure rather than from a memorised list of drugs means a drug never seen before can still be placed, because the groups it carries are the same groups the course has already assigned to enzymes.",

# ---------- variants ----------
"v-p1-15b": "Carboxylesterase takes four substrates, and they differ only in what sits on the carbonyl carbon beside the carbon skeleton. One oxygen makes an ester, which hydrolyses to an acid and an alcohol. One nitrogen makes an amide, giving an acid and an amine. One of each makes a carbamate, giving an alcohol and an amine with loss of carbon dioxide. Two oxygens make a carbonate, giving two alcohols and again losing carbon dioxide. Identifying the group therefore means counting and naming the heteroatoms on that one carbon, and the products follow without a separate rule for each.",

"v-p1-8b": "Two enzymes run the ethanol ladder in a fixed order. Alcohol dehydrogenase takes a primary alcohol to an aldehyde; aldehyde dehydrogenase takes that aldehyde to a carboxylic acid. Both are oxidations of the same carbon, each removing hydrogen and raising the oxidation state one step. The order cannot reverse, since the second enzyme's substrate is the first enzyme's product, and that dependency is what disulfiram exploits: inhibiting the second step leaves the intermediate aldehyde to accumulate.",

"v-df-3b": "Phase 1 and Phase 2 name two kinds of chemistry rather than two stages in a fixed order. Phase 1 enzymes are oxygenases and related enzymes that insert oxygen, remove hydrogen, add electrons or add water, and the result is a functional group that was absent or masked. Phase 2 enzymes are transferases that move a group from a cofactor onto a functional group already present. Because the second only needs a suitable group and does not care where it came from, a drug that already carries a hydroxyl or a carboxyl can go straight to conjugation, and a Phase 2 metabolite can afterwards undergo a Phase 1 reaction.",
}


def main():
    srcs = {f: open(f, encoding="utf-8").read() for f in FILES}
    added, skipped = [], []
    for qid, text in TEACH.items():
        where = [f for f in FILES if ("{id:'%s'," % qid) in srcs[f]]
        if len(where) != 1:
            sys.exit(f"ERROR: {qid} found in {len(where)} files, expected 1")
        f = where[0]
        src = srcs[f]
        start = src.find("{id:'%s'," % qid)
        nxt = src.find("\n{id:'", start + 1)
        end = nxt if nxt != -1 else len(src)
        block = src[start:end]
        if re.search(r"\n teach:", block):
            skipped.append(qid)
            continue
        m = re.search(r"\n cite:'", block)
        if not m:
            sys.exit(f"ERROR: {qid} has no cite line to insert before")
        if "'" in text and "\\'" not in text:
            text = text.replace("'", "\\'")
        block = block[:m.start()] + f"\n teach:'{text}'," + block[m.start():]
        srcs[f] = src[:start] + block + src[end:]
        added.append(qid)

    for f, s in srcs.items():
        open(f, "w", encoding="utf-8").write(s)
    print(f"  concept blocks added: {len(added)}")
    if skipped:
        print(f"  already had one: {', '.join(skipped)}")


if __name__ == "__main__":
    main()
