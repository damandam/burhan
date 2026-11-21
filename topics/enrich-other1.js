/* Enrichment block 2 (Hinduism & Atheism) — 2026-11-21.
   Rebuilds all 3 Hinduism cards (previously 291–388c stubs vs up to 10,011c in Discord) and 6 Atheism cards
   (previously 340–521c stubs with missing verdicts) using 100% of their Discord arguments & primary texts. */
(()=>{
const IA=(n,id)=>({credit:'Islamic Apologetics · #'+n,link:'https://discord.com/channels/1514269918978248796/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

/* ==================== HINDUISM ==================== */

/* 1. Gods fighting each other (291c → full primary Purāṇa & Brāhmaṇa dossier) */
const GF=IA('gods-fighting-each-other','1530161197452628039');
card('other/hinduism/d-ia-gods-fighting-each-other',{
 title:"Gods fighting each other",k:"Tawḥīd · Purāṇas & Brāhmaṇas",blurb:"Brahmā vs Śiva, Viṣṇu vs Śiva, and Viṣṇu beheaded by ants: contradictory supremacy myths.",
 claim:"Hinduism's deities are harmonious aspects of one supreme reality, not rival limited beings.",
 tree:N(GF,
  "Brahmā, Viṣṇu and Śiva aren't competing gods — they are harmonious aspects of the one Supreme.",
  "Hindu scriptures themselves repeatedly depict them fighting, losing, fleeing in fear, getting deluded, and even beheading one another — with rival Purāṇas giving contradictory accounts of who defeated whom. The Qurʾān's point holds: “Had there been gods besides Allah, both heavens and earth would have been ruined” (21:22).",
  "Brahmā vs Śiva: why Śiva cut off Brahmā's fifth head",
  ["All the Purāṇas agree Śiva severed Brahmā's fifth head, yet they contradict each other on the cause:",
   "Varāha Purāṇa 97.1–7: Rudra (Śiva), created by Brahmā and seated on his shoulder, grew angry when Brahmā's fifth head addressed him as “Kapālin” and clipped off the fifth head with his left thumbnail — and the head stuck to his hand.",
   "Kūrma Purāṇa 2.31.1–32: Śiva and Brahmā argued over who was more powerful, and Śiva, enraged by Brahmā's arrogance, chopped off his head.",
   "Śiva Purāṇa 2.2.19.43–45: confrontation triggered after Brahmā cast a lustful gaze on Śiva's wife resulting in an emission of semen. Śiva Purāṇa 7.1.30.19: Śiva cut off the fifth head because Brahmā stubbornly kept calling him “O son.”"],
  ["Varāha Purāṇa 97.1–7","Kūrma Purāṇa 2.31.1–32","Śiva Purāṇa 2.2.19.43–45; 7.1.30.19","Qurʾān 21:22"],
  [
   N(GF,"What about Viṣṇu and Śiva — don't they agree on who is supreme?",
    "No: Vaiṣṇava and Śaiva texts tell opposite stories. In Skanda Purāṇa, Viṣṇu/Kṛṣṇa's discus defeats Śiva and makes him flee in terror; in Śiva Purāṇa, Śiva as a bull kills Viṣṇu's sons, catches his weapons, and gores a deluded, shattered Viṣṇu.",
    "Viṣṇu vs Śiva: contradictory defeats",
    ["Skanda Purāṇa 2.2.12.17–18, 45–57: King Kāśīrāja propitiated Śiva to defeat Kṛṣṇa on behalf of Pauṇḍraka. Kṛṣṇa sent his Sudarśana discus, which beheaded Kāśīrāja and burned his army and Varanasi to ashes. Furious, Śiva rushed forward on his bull and fired his Pāśupata missile — which turned lustreless against Viṣṇu's own boon. Terrified, Śiva fled to Ekāmrakavana seeking refuge and eulogised Viṣṇu.",
     "Śiva Purāṇa 3.23.3–12: conversely, Śiva in the form of a bull (Vṛṣabha) attacked Viṣṇu's sons, kicked them with his hooves and tore them with his horns until they died. When Viṣṇu attacked with divine arrows and missiles, Śiva caught every weapon, leaped up, kicked the “deluded” Viṣṇu and gored him with his horns until Viṣṇu was “exhausted and utterly shattered.”"],
    ["Skanda Purāṇa 2.2.12.17–18, 45–57","Śiva Purāṇa 3.23.3–12"]),
   N(GF,"Are those just later Purāṇic stories?",
    "Even the Vedic Śatapatha Brāhmaṇa — echoed by the Devī Bhāgavatam Purāṇa — depicts Viṣṇu unable to control his pride and getting accidentally beheaded when the other gods bribe white ants to gnaw his bowstring.",
    "Viṣṇu beheaded by white ants",
    ["Śatapatha Brāhmaṇa 14.1.1.6–9: “Viṣṇu was unable to control that love of glory of his.” Resting his head on the tip of his strung bow, the other gods dared not attack him directly, so they bribed white ants (vamrī / upadīkā) with eternal access to food and desert water to gnaw the bowstring. When it snapped, the bow sprang apart and cut off Viṣṇu's head.",
     "Devī Bhāgavatam Purāṇa 1.5.23–36: Brahmā orders the vamrī insect to gnaw the bowstring to wake Viṣṇu; the string snaps with a terrifying sound, the universe trembles, the sun sets, Viṣṇu's crowned head vanishes without a trace, and Brahmā and Mahādeva weep aloud in grief over his headless corpse."],
    ["Śatapatha Brāhmaṇa 14.1.1.6–9","Devī Bhāgavatam Purāṇa 1.5.23–36"])
  ],
  {quote:{ar:"لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللَّهُ لَفَسَدَتَا",en:"“Had there been within the heavens and earth gods besides Allah, both would have been ruined.” — al-Anbiyāʾ 21:22"}}),
 sum:"Primary Hindu scriptures — from the Vedic Śatapatha Brāhmaṇa to the Varāha, Kūrma, Skanda, Śiva and Devī Bhāgavatam Purāṇas — portray rival, proud, fearful and mutually violent deities, directly contradicting divine perfection and unity."});

/* 2. Caste system vs Islamic governance (379c → full 3-branch debate) */
const CS=IA('caste-system-vs-islamic-governance','1546832223188033537');
card('other/hinduism/d-ia-caste-system-vs-islamic-governance',{
 title:"Caste vs Islamic equality",k:"Ethics · Governance",blurb:"Birth-based caste in the Upaniṣads vs false comparisons to the Caliphate or dhimmīs.",
 claim:"Hindu varṇa is purely merit-based — and Islam has its own caste system anyway with Quraysh leadership and dhimmīs.",
 tree:N(CS,
  "Hinduism never taught a birth-based caste system — varṇa is only about personal qualities and occupation.",
  "Primary Hindu scriptures explicitly tie caste directly to birth. Chāndogya Upaniṣad 5.10.7 links good conduct to rebirth as a Brāhmaṇa, Kṣatriya, or Vaiśya, and evil conduct to rebirth as “a dog, or a hog, or a Caṇḍāla (outcaste).” Selective appeals to merit-based verses ignore — and contradict — the explicit birth-based texts.",
  "Birth-based caste in Hindu scripture",
  ["Modern Hindu apologists frequently claim varṇa merely reflects profession (e.g., a merchant is a Vaiśya) and deny birth-based caste belongs to Hinduism.",
   "Chāndogya Upaniṣad 5.10.7 directly refutes that denial: “Those whose conduct has been good will quickly attain some good birth, the birth of a Brāhmaṇa, or a Kṣatriya, or a Vaiśya. But those whose conduct has been evil will quickly attain an evil birth, the birth of a dog, or a hog, or a Caṇḍāla.”",
   "Citing passages that speak of qualities without reconciling explicit birth-based texts (including severe punishments prescribed for Śūdras teaching dharma to upper castes, documented at hinduscript.com) only highlights internal contradictions within Hindu texts."],
  ["Chāndogya Upaniṣad 5.10.7","https://hinduscript.com/caste-system-in-hinduism/#41_Punishment_for_a_Shudra_who_Teaches_Dharma_to_the_Upper_Castes"],
  [
   N(CS,"Doesn't Islam have a caste system too — the ḥadīth say the Caliph must be from Quraysh (Muslim 1818a, 1820)?",
    "False equivalence. The Caliphate is a single political office, not a hereditary social hierarchy assigning every citizen's occupation, marriage circle, dignity, and legal rank at birth.",
    "Political office vs hereditary social caste",
    ["Citing Sahih Muslim 1818a and 1820 ignores both the broader context of Caliphate narrations and the fundamental difference between a political institution and a caste system.",
     "In Islam, a ruler being from Quraysh does not create birth-assigned social classes: non-Quraysh — including freed slaves like Zayd ibn Ḥāritha, Bilāl, and countless non-Arab scholars and commanders — held the highest religious, military, and civic honours.",
     "A caste system, by contrast, divides society hereditarily across status, occupation, marriage, worship, and daily social treatment from birth."],
    ["Muslim 1818a, 1820","Qurʾān 49:13"]),
   N(CS,"What about dhimmīs (non-Muslims) in Islamic states — isn't that a caste?",
    "No. Dhimmī status is a religious-legal covenant (which anyone changes freely by belief, never fixed by bloodline) guaranteeing protection of life, property, and worship — nothing like hereditary caste oppression.",
    "Covenant status vs bloodline caste",
    ["Dhimmī status is based on creed and legal jurisdiction within an Islamic polity, not birth or bloodline, and entails distinct legal protections and religious autonomy (see Call to Monotheism: “The Status of Non-Muslims in the Islamic State”).",
     "Unlike the caste system — where a person's birth permanently fixes social dignity, marriageability, and occupation — Islam declares superiority belongs solely to piety (taqwā, 49:13)."],
    ["https://www.call-to-monotheism.com/the_status_of_non_muslims_in_the_islamic_state","Qurʾān 49:13"])
  ]),
 sum:"Chāndogya Upaniṣad 5.10.7 explicitly ties caste to birth alongside dogs and hogs; comparing hereditary caste to Quraysh political leadership or dhimmī legal covenants is a false equivalence."});

/* 3. Karma vs Qadar (388c → rich visual compare explainer) */
cur.ex('other/hinduism/d-ia-karma-vs-qadar',{
 title:"Karma vs Qadar",k:"Theology · Comparison",blurb:"Why Allah's decree (qadar) is fundamentally different from impersonal karma.",
 intro:"Many people assume karma is just another word for Islamic qadar because both affirm moral accountability. Once you examine how suffering, wealth, and forgiveness work, the two worldviews are fundamentally opposed.",
 visual:{kind:'compare',
  left:{title:"Qadar (Islam)",items:[
   {h:"Life is a test",sub:"Hardship and wealth are trials, never automatic moral scorecards (2:155, 57:22).",p:["A poor person or grieving parent is not being punished for hidden sins, and a wealthy tyrant is not morally righteous."]},
   {h:"A Merciful Judge",sub:"Allah is personal and forgives every sin upon sincere repentance (39:53).",p:["Forgiveness can wipe a slate clean without mechanical payback."]},
   {h:"Ultimate justice in the Hereafter",sub:"Accountability is settled fully on the Day of Judgement, not through rebirth.",p:["Allah may punish in this world, forgive upon repentance, or defer judgement to the Hereafter."]}
  ]},
  right:{title:"Karma (Hinduism)",items:[
   {h:"Mechanical payback",sub:"“Do good and good returns; do bad and bad returns” as cosmic law.",p:["Treats suffering and social station as earned repayment for prior deeds."]},
   {h:"Impersonal cause and effect",sub:"An automatic ledger with no personal Judge pardoning out of mercy.",p:["Because karma is impersonal, genuine forgiveness cannot cancel its debt."]},
   {h:"Reincarnation cycle",sub:"Requires repeated earthly rebirths to work off accumulated deeds.",p:["Generates the problem of suffering infants or outcastes blamed on unremembered past lives."]}
  ]}},
 cards:[
  ["Hardship is a test, not karma","Qurʾān 2:155 and 57:22.",["“We will surely test you with fear, hunger, loss of wealth, lives, and crops. But give good news to those who are patient” (2:155). “No disaster happens on earth or to yourselves except that it was written before We made it happen” (57:22). If a newborn dies shortly after birth, Muslims never ask “Whose karma was it?” — we trust Allah's perfect wisdom."]],
  ["Wealth and poverty are both trials","Neither proves moral worth.",["In Islam, a rich person is not automatically good and a poor person is not automatically bad. Both prosperity and poverty are tests from Allah — dismantling the fatalism that blames the suffering or poor for their condition."]],
  ["Personal mercy vs impersonal law","Qurʾān 39:53.",["Karma operates as an impersonal law of cause and effect. Islam teaches that Allah is the Living, Personal Judge who forgives all sins when a servant sincerely repents: “Do not despair of Allah's mercy. Indeed, Allah forgives all sins” (39:53)."]],
  ["Why evil isn't always punished immediately","This world is not the final courtroom.",["Islam does not claim every wicked person receives payback in this life. Allah may discipline them now, forgive them if they turn back in sincere repentance, or defer full justice to the Day of Judgement (see also Islamic Discourse: Reincarnation — An Islamic Critique)."]]
 ],
 evidence:[{ar:"قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",en:"“Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins.”",ref:"al-Zumar 39:53"}],
 sum:"Karma is an impersonal ledger of automatic payback; qadar is the wise decree of a Personal, Merciful Judge who tests humanity in this life, forgives sincere repentance, and delivers perfect justice in the Hereafter.",
 credit:"Islamic Apologetics · #karma-vs-qadar",
 link:"https://discord.com/channels/1514269918978248796/1521773507376054352"});

/* ==================== ATHEISM ==================== */
const AFG=IA('arguments-for-god','1514404863285395656');
const AAO=IA('atheist-arguments-1','1549150963980304414');

/* 4. Arguments for God: Logical Absolutes + Modal Necessity */
card('atheism/d-ia-arguments-for-god/t-arguments-for-god',{
 title:"Logical absolutes & necessary existence",k:"Philosophy · Logic",blurb:"Two deductive proofs: why universal laws of logic require a transcendent mind, and why God's existence is necessary.",
 claim:"There are no rigorous deductive arguments showing God must exist.",
 tree:N(AFG,
  "Logic is just human convention — you can't deduce God from logic.",
  "Logical absolutes (identity, non-contradiction, excluded middle) are conceptual — concepts exist only in minds — yet they hold universally and objectively even if no human minds existed. Therefore they must be grounded in a transcendent Mind: God.",
  "Deductive Proof 1: The Argument from Logical Absolutes",
  ["P1: Logical absolutes exist.",
   "P2: Logical absolutes are conceptual (not physical objects made of atoms).",
   "P3: Concepts exist only in a mind (they are mental realities).",
   "P4: Logical absolutes would still hold even if human minds did not exist.",
   "P5: Therefore, logical absolutes are transcendent (independent of human minds).",
   "P6: Since logical absolutes are both transcendent and conceptual, they must exist in a transcendent Mind.",
   "P7: This transcendent Mind is what we recognise as God."],
  ["Islamic Apologetics · #arguments-for-god › Arguments for God"],
  [
   N(AFG,"Even if God is possible, why would He have to exist necessarily?",
    "By definition, a maximal/eternal God can neither begin to exist nor cease to exist — which means His existence is either impossible or necessary. Since the concept of God is not self-contradictory, His existence cannot be impossible; therefore He exists necessarily.",
    "Deductive Proof 2: The Modal Necessity Syllogism",
    ["1. Either God exists or God does not exist.",
     "2. God can neither come into existence nor go out of existence.",
     "3. If God exists, He cannot cease to exist → therefore if God exists, He exists necessarily.",
     "4. If God does not exist, He cannot come into existence → therefore if God does not exist, His existence is impossible.",
     "5. Therefore, God's existence is either necessary or impossible.",
     "6. However, God's existence is only impossible if the concept of God is self-contradictory.",
     "7. The concept of God is not self-contradictory → therefore God's existence is not impossible.",
     "8. Therefore, God's existence is necessary."],
    ["Islamic Apologetics · #arguments-for-god"])
  ]),
 sum:"Objective, mind-independent laws of logic point to a transcendent Mind, and a non-contradictory eternal Being cannot be merely contingent — He must exist necessarily."});

/* 5. Matter to consciousness (403c → full 2-branch debate with Stone 1/2) */
card('atheism/d-ia-arguments-for-god/t-matter-to-consciousness',{
 title:"From matter to consciousness",k:"Philosophy of Mind",blurb:"Why entirely unconscious matter cannot generate subjective awareness — the Stone 1 / Stone 2 argument.",
 claim:"Cosmological arguments only give an impersonal First Cause — consciousness just emerged from blind physical matter.",
 tree:N(AFG,
  "Even if the universe has a First Cause, why assume it is conscious? Unconscious matter could have caused the universe and later produced human minds.",
  "Many classical arguments leap straight from a First Cause to a personal God without proving consciousness. This syllogism closes that gap directly: an entirely unconscious entity possesses no subjective awareness or intentionality to pass on, yet conscious beings empirically exist — so the fundamental cause must itself be conscious.",
  "The Consciousness Syllogism",
  ["Premise 1: The fundamental cause of the physical universe is either conscious (a mind) or entirely unconscious (blind matter/energy).",
   "Premise 2: An entirely unconscious entity cannot produce subjective conscious awareness purely from itself, since unconscious matter possesses neither intentionality nor subjective experience to give.",
   "Premise 3: Empirically, conscious beings (humans and animals with first-person awareness) exist in the universe.",
   "Premise 4 (from P2 & P3): Consciousness cannot have originated from a purely unconscious physical cause.",
   "Conclusion: Therefore, the fundamental cause of the universe must itself be conscious — without any unsubstantiated leap."],
  ["Islamic Apologetics · #arguments-for-god › Matter to consciousness"],
  [
   N(AFG,"Couldn't evolution and brain complexity just produce consciousness from unconscious matter?",
    "Complex biological and computational processes work completely fine without any inner experience — immune cells fight disease, plants track sunlight, and computers/AI process data with zero consciousness. Rearranging unconscious parts never explains why subjective experience exists at all.",
    "Why complexity doesn't bridge the gap (Stone 1 → Stone 2)",
    ["Complexity ≠ consciousness: white blood cells defend the body unconsciously, plants bend toward sunlight via phototropism unconsciously, and modern computers/AI generate complex output while remaining completely unconscious.",
     "The Stone 1 → Stone 2 thought experiment: imagine Stone 1 — an ordinary unconscious rock. Suppose Stone 1 splits and produces Stone 2, and miraculously Stone 2 begins questioning its existence, feeling boredom, sadness, and anger (subjective experience). How could Stone 2 acquire subjective consciousness purely from an originator (Stone 1) that utterly lacks it? Adding more stones or neurons only rearranges unconscious matter."],
    ["Islamic Apologetics · #arguments-for-god › Matter to consciousness"])
  ]),
 sum:"Complex computation and biology need no inner awareness (cells, plants, AI); purely unconscious matter cannot generate subjective experience (Stone 1 → Stone 2), so the First Cause must be conscious."});

/* 6. Evolution undermines atheistic epistemology (333c → full 3-branch debate) */
card('atheism/d-ia-atheist-arguments-1/t-evolution',{
 title:"Evolution undermines atheism's reasoning",k:"Epistemology · EAAN",blurb:"Senses optimised for survival aren't optimised for truth — the pickaxe analogy and hyper-scepticism.",
 claim:"Evolutionary naturalism gives us a fully rational basis to trust our minds and reject God.",
 tree:N(AAO,
  "We don't need God to trust our senses and reason — evolution gave us reliable brains.",
  "Under atheistic evolution, our senses and faculties were selected strictly for survival, not for discovering truth. Trusting survival-shaped senses to find metaphysical truth is like using a pickaxe to hammer nails: it might occasionally work, but you have no rational basis to trust it.",
  "Survival ≠ Truth (the pickaxe analogy)",
  ["This argument hits atheists and deists alike (anyone denying God designed us with reliable truth-seeking faculties).",
   "Evolution optimises organisms for survival and reproduction — not for truth. Using senses designed for survival to discover truth is like using a pickaxe to drive nails into wood: occasionally a nail goes in, mostly it fails, and you cannot rationally trust it to work.",
   "Similarly, under blind evolution, we have no way to know whether our senses and reasoning are giving us truth or merely survival-useful illusions."],
  ["Islamic Apologetics · #atheist-arguments-1 › Evolution"],
  [
   N(AAO,"Doesn't survival require true beliefs, so evolution automatically selects for truth?",
    "No. Natural selection cares only about survival — even when a false belief protects you better than a true one.",
    "Adaptive false beliefs",
    ["Evolutionary psychologists themselves explain why humans see faces or shadowy figures in the dark when nobody is there: in dangerous night forests, a brain wired to produce false positives (false beliefs) avoids predators and survives better than a purely accurate one.",
     "Since false beliefs frequently aid survival, natural selection has no obligation to track truth."],
    ["Islamic Apologetics · #atheist-arguments-1 › Evolution"]),
   N(AAO,"What if survival and truth-finding do eventually converge?",
    "Even granting they converge someday, what proves they have converged right now — rather than 10 million years from now? Atheistic evolution collapses into hyper-scepticism, whereas theism gives a reason to trust human intellect (ʿaql).",
    "The convergence problem & the theistic ground",
    ["Even if someone grants that survival and truth-finding converge at some point, they still have to prove convergence has already happened today and won't require another 10 million years of evolution. Until then, they cannot trust their own senses or arguments — pushing naturalism into self-defeating hyper-scepticism.",
     "Theists, by contrast, have a principled ground to trust human faculties: Allah created humanity to be morally and intellectually tested — to recognise Him and His revelation — which requires granting us sound intellect (ʿaql) capable of grasping truth."],
    ["Islamic Apologetics · #atheist-arguments-1 › Evolution"])
  ]),
 sum:"Blind evolution selects for survival (even via adaptive false beliefs), not truth — collapsing naturalism into self-defeating scepticism, whereas theism explains why human intellect (ʿaql) is designed to recognise truth."});

/* 7–9. Enrich the 3 PDF/video arguments-for-god explainers with proper verdicts & structured cards */
cur.ex('atheism/d-ia-arguments-for-god/t-psychological-harmony',{
 title:"Psychological harmony",k:"Philosophy · Consciousness",blurb:"Why our inner feelings (pain, joy, aversion) align systematically with bodily harm and flourishing.",
 intro:"Why does physical injury feel painful and push us to avoid harm, rather than feeling pleasant or unrelated? Under blind materialism, mental qualia have no reason to align coherently with physical survival.",
 visual:{kind:'steps',items:[
  {h:"Two distinct realities",sub:"Physical neural states vs subjective felt experience (pain, pleasure, fear).",p:["Conscious feelings are distinct from physical firing patterns."]},
  {h:"Systematic alignment",sub:"Harmful events consistently pair with aversive pain; beneficial ones with pleasure.",p:["Countless arbitrary pairings were physically conceivable under naturalism."]},
  {h:"Best explanation",sub:"Intentional design by a wise Creator explains the harmony directly.",p:["A Mind designed both the physical body and its conscious feedback."]}
 ]},
 cards:[
  ["The core problem for naturalism","Why do conscious feelings match bodily needs?",["If consciousness is a mere accidental by-product of blind physical processes, there is no necessity for damaging the body to feel excruciatingly bad or for nourishment to feel good. Yet human psychology displays intricate, systematic harmony between subjective states and physical welfare."]],
  ["Source PDF & debate video","CUTPHAv2-2.pdf + TikTok debate.",["The channel attaches CUTPHAv2-2.pdf (239 KB, shared by The general Mike & Ṣayyām ibn ʿIrfān) and a live debate video demonstrating the argument against atheists (youtu.be/JXyhRz1GcnQ). PDF to extract into full cards."]]
 ],
 sum:"The systematic alignment between subjective conscious feelings (pain, pleasure, aversion) and physical flourishing is deeply improbable under blind naturalism, pointing directly to intentional design.",
 credit:"Islamic Apologetics · #arguments-for-god › Psychological harmony",
 link:"https://discord.com/channels/1514269918978248796/1514404863285395656"});

cur.ex('atheism/d-ia-arguments-for-god/t-god-design-and-fine-tuning',{
 title:"Design and fine-tuning",k:"Cosmology · Teleology",blurb:"Why the finely calibrated constants of physics point to intentional design rather than chance.",
 intro:"Modern physics has uncovered that the fundamental constants and initial conditions of the universe sit within razor-thin life-permitting ranges — where tiny deviations would prevent stars, chemistry, or life from ever forming.",
 visual:{kind:'steps',items:[
  {h:"Razor-thin constants",sub:"Gravity, strong/weak nuclear forces, cosmological constant & initial entropy.",p:["Miniscule shifts collapse the universe or prevent atoms and stars from forming."]},
  {h:"Chance fails",sub:"A single blind roll against astronomically tiny odds is not an explanation.",p:["Appealing to an unobservable multiverse still requires a fine-tuned universe-generator."]},
  {h:"Intentional design",sub:"A knowing, powerful Creator best accounts for calibrated order.",p:["Purposeful calibration is routinely explained by intelligence, not blind coincidence."]}
 ]},
 cards:[
  ["Teleological inference","Order and calibration point to a Planner.",["When independent physical parameters must simultaneously fall within minuscule windows for stable chemistry and life to exist, intentional design dramatically outperforms bare chance."]],
  ["Source document in channel","God_Design_and_Fine_Tuning.pdf (207 KB).",["The channel attaches God_Design_and_Fine_Tuning.pdf covering the full constants, multiverse objections, and Islamic teleological framing (to extract into full cards)."]]
 ],
 sum:"The life-permitting calibration of physical constants and initial conditions defies bare chance and unverified multiverse appeals, pointing powerfully to a Wise Designer.",
 credit:"Islamic Apologetics · #arguments-for-god › God, Design, and Fine Tuning",
 link:"https://discord.com/channels/1514269918978248796/1514404863285395656"});

card('atheism/d-ia-arguments-for-god/t-argument-from-the-default',{
 title:"The argument from the default (Fiṭra & Epistemology)",k:"Epistemology · Fiṭra",blurb:"Why belief in a Creator is the rational baseline rather than an unproven add-on.",
 claim:"Atheism is the neutral default position; only theists carry a burden of proof.",
 tree:N(AFG,
  "Atheism is just the neutral default — the burden of proof lies entirely on believers.",
  "Rejecting a Creator for a contingent, ordered, finely calibrated cosmos is not a “neutral” stance — it is a massive metaphysical claim that everything exists without ultimate explanation. Both innate human disposition (fiṭra) and the principle of sufficient reason make belief in a Necessary Creator the rational baseline.",
  "Why atheism isn't a neutral default",
  ["Treating atheism as “lack of belief” does not escape the burden of explaining why a contingent, ordered universe exists at all rather than nothing.",
   "In Islamic theology, human beings are created upon fiṭra (innate recognition of a Creator and moral truth), corroborated by rational inference from contingency and design.",
   "Note: the channel attaches Argument_From_Default.pdf (scans by Ṣayyām ibn ʿIrfān — to extract into full proof points)."],
  ["Islamic Apologetics · #arguments-for-god › Argument from the default (Argument_From_Default.pdf)"]),
 sum:"Treating a contingent, ordered universe as brute and unexplained is not a neutral default; innate fiṭra and rational causation make a Necessary Creator the true baseline."});
})();
