/* Christianity › Trinity › The modal-logic, Ockham and Ibn Taymiyya argument against the Trinity
   Source: Noel's own argument (German), v1 22 Nov 2026, hardened v2 23 Nov 2026, translated.
   Part I = hardened main argument, Part II = Ibn Taymiyya + exhaustive case split, Part III = defeaters, Part IV = debate matrix. */
(()=>{
const CR={credit:'Noel · own argument (translated from German)'};
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const IT=['Ibn Taymiyya, al-Radd ʿalā al-manṭiqiyyīn','Ibn Taymiyya, al-Jawāb al-ṣaḥīḥ li-man baddala dīn al-Masīḥ'];

/* ---------- Part II: the exhaustive case split (A / B1 / B2 / B3 / C) ---------- */
const classA=N(CR,
 "Each person is identical with the one divine essence, yet the persons are really distinct by their relations of origin (Thomas Aquinas).",
 "Then Father = God and Son = God, so Father = Son. Identity is transitive. Something really identical with God cannot stand in real opposition to something else that is really identical with the same God.",
 "Class A · Identity with the essence",
 ["Formally: P1 = G, P2 = G, but P1 ≠ P2. That breaks the transitivity of identity and Leibniz's law (whatever is identical shares every property). The Father is unbegotten, the Son is not, so they cannot both be identical with one and the same thing.",
  "Appealing to the “real opposition of relations of origin” does not help. If the relations are really identical with the essence, they are identical with each other. If they are not, we are in Class B.",
  "And: one intellect and one will means one conscious subject, so this falls into Class C (see below).",
  "Catholic teaching says exactly this: each person is “that reality, the divine substance, essence or nature” (Lateran IV), yet the persons are “really distinct from one another” (Catechism 254). See also the card “The logic of the Trinity”."],
 ["Thomas Aquinas, ST I q. 28 a. 3; q. 29 a. 4","Lateran IV (1215), ch. 2","Catechism 253–254"]);

const classB1=N(CR,
 "The persons are three centres of consciousness and will that share one divine nature (social Trinitarianism: Cornelius Plantinga Jr., Moltmann, Swinburne).",
 "Three concrete subjects, each with their own mind and will, are three gods. A shared nature exists only as a concept in the mind, like “human” shared by three men.",
 "Class B1 · Three instances of one nature",
 ["Ibn Taymiyya: universals (kulliyyāt) exist only in the mind (fī al-adhhān). Outside the mind there are only concrete, individual things (juzʾī muʿayyan). Three individuals never share numerically one external essence.",
  "So “one God” here means only one concept that three divine individuals fall under. That is tritheism with a philosophical label.",
  "Omnipotence: three wills can, at least possibly, conflict. Either one gives way (then the others are not omnipotent) or they are prevented from conflicting by something (then they depend on it). This is the Qurʾānic argument of mutual hindrance (tamānuʿ): “Had there been gods in them besides Allah, they would both have been ruined” (21:22).",
  "Aseity: each person limits the others' self-sufficiency."],
 [...IT,"Qurʾān 21:22; 23:91","Cornelius Plantinga Jr., “Social Trinity and Tritheism” (1989)"]);

const classB2=N(CR,
 "The persons are not identical with the essence. Like a statue and its bronze, they are constituted by the one nature plus a person-making property (Brower and Rea).",
 "Then God is composite: one shared “matter” plus three “forms”. Everything composite has a cause. And there is no reason why exactly three forms and not one or four.",
 "Class B2 · Material constitution",
 ["Composition breaks divine simplicity and aseity: omne compositum habet causam, every composite has a cause of its composition.",
  "Premise 5 (sufficient reason): why exactly three person-making properties? The model gives none. It is a brute fact.",
  "Premise 6 (Ockham): carrying the constitution of physical bodies (bronze and statue) over to an immaterial God is an ad hoc rescue, introduced only to save the doctrine."],
 ["Jeffrey Brower & Michael Rea, “Material Constitution and the Trinity”, Faith and Philosophy 22 (2005)"]);

const classB3=N(CR,
 "Identity is relative: they are the same God but different persons (Peter Geach, van Inwagen).",
 "Then counting rules are invented at will. With the same trick three men are “one man” and three wives “one wife”. Leibniz's law is the basis of all reasoning and cannot be switched off for one doctrine.",
 "Class B3 · Relative identity",
 ["Relative identity replaces “a is b” with “a is the same F as b”, where the F can be chosen freely.",
  "That allows anything: Peter, Paul and John are “the same human” and different persons. Nobody accepts that outside the Trinity, which shows it is ad hoc (Premise 6).",
  "Ibn Taymiyya: the basic laws of reason (badīhiyyāt), above all non-contradiction and the excluded middle, hold for the unseen (ghayb) as much as for the seen world (shahāda)."],
 ["Peter van Inwagen, “And Yet They Are Not Three Gods But One God” (1988)",...IT]);

const classC=N(CR,
 "There is only one divine intellect and one divine will. The persons are not three minds but three relations.",
 "Then before creation there is exactly one conscious subject. Relations do not think, speak or love. That is one person with three aspects: modalism, and in practice our one-person God.",
 "Class C · Only one subject",
 ["If numerically only one intellect and one will exist, there is only one “I”.",
  "Abstract relations cannot know, will or love, so they are not persons in any real sense.",
  "This is structural (simultaneous) modalism. It collapses back into unitarian monotheism, which is exactly our conclusion."],
 ["Thomas Aquinas, ST I q. 39 a. 2 (one intellect, one will in God)"]);

const caseSplit=N(CR,
 "Our model of the Trinity avoids your argument.",
 "There is no model left. By the law of excluded middle, every model of one essence (G) and several persons falls into exactly three classes. All three fail.",
 "Part II · Ibn Taymiyya and the exhaustive case split",
 ["The foundation (Ibn Taymiyya): universals and abstract essences exist only in the mind (fī al-adhhān), never outside it (fī al-khārij). Outside the mind there are only concrete individuals (juzʾī muʿayyan).",
  "Outside the mind, a thing's essence (dhāt), its reality (ḥaqīqa), its existence (wujūd) and its necessary attributes are one. Turning mental abstractions such as “the divine nature as such” or “subsistent relations” into real principles is a category mistake.",
  "The laws of reason hold for the unseen as for the seen. “One” (wāḥid) in the language of every people means one concrete individual with all its attributes, not a container for three subjects. Ambiguous technical terms (alfāẓ mujmala) such as “nature” and “person” must be unpacked before they are accepted.",
  "Immune to tu quoque: Ibn Taymiyya himself rejects the philosophers' attribute-less “absolute simplicity” (such a being exists only in the mind) and affirms many real, inseparable attributes in the one concrete God. So the argument hits the Trinity without damaging Islamic theology, while simplicity can still be used against Thomists on their own terms (ilzām).",
  "The case split: for any model with essence G and persons P1, P2…, either P = G or P ≠ G, and either P1 = P2 or P1 ≠ P2. That gives three classes:",
  "Class A: each person is identical with G, but the persons differ → breaks transitivity of identity.",
  "Class B: the persons are not identical with G → B1 three instances (tritheism), B2 constitution (composition, brute fact), B3 relative identity (arbitrary counting).",
  "Class C: only one subject → modalism, which is one person."],
 IT,
 [classA,classB1,classB2,classB3,classC],
 {visual:{kind:'steps',items:[
   ["Class A · P = G, persons differ","Thomism → contradicts transitivity of identity"],
   ["Class B1 · three instances","Social Trinity → three gods"],
   ["Class B2 · constitution","Brower–Rea → composite God, no reason for three"],
   ["Class B3 · relative identity","Geach / van Inwagen → arbitrary counting rules"],
   ["Class C · one subject","One intellect and will → modalism = one person"]
 ]},
 facts:[
   ["“You haven't proven ◇U infallibly.”","Justification ≠ infallibility; your scepticism protects 4 or 1000 persons too."],
   ["“A father needs a son, a triangle three sides.”","Begs the question. One side is not a triangle: the Father alone would be a part of God."],
   ["“Subsistent relations in one simple nature.”","F = G and S = G → F = S. One mind = modalism; three minds = tritheism."],
   ["“Brower–Rea constitution.”","Composite, no reason for n = 3, ad hoc."],
   ["“God is love / knows himself.”","Valentinian origin, Aquinas' own replies, regress to infinity."],
   ["“Eternal begetting keeps aseity.”","Eternity removes temporal, not ontological dependence."],
   ["“Reason fails, the Bible reveals it.”","Then reason favours unitarianism (Aquinas, Vatican I). John 17:3."]
 ]});

/* ---------- Part III: defeaters against Premises 3, 4 and 7 ---------- */
const dP7=N(CR,
 "A one-person God is impossible. God is necessarily triune, perhaps by a hidden nature we cannot see (like water = H₂O, Kripke).",
 "God is not a natural kind with a hidden microstructure. He is defined by transparent perfections. A one-person God has all of them without contradiction. And “maybe there is a hidden necessity” protects a quaternity or twelve persons just as well.",
 "Modal scepticism and the triangle",
 ["Unlike water, God is defined by conceptually transparent perfections (necessary existence, aseity, power, knowledge). If the one-person hypothesis fulfils them all and no defeater shows it impossible, belief in its possibility is justified (Premise 7).",
  "Quaternity reductio: whoever hides behind “there may be a hidden necessity for n = 3” protects n = 4 or n = 12 with exactly the same sentence.",
  "“Justification is not infallible truth” is true but irrelevant. A valid deduction from undefeated premises transfers justification to its conclusion (epistemic closure). Demanding infallibility confuses rationality with Cartesian certainty.",
  "The triangle analogy is an own goal: a straight line exists without two more lines. Only a triangle needs three sides, because it is a whole made of three parts (= partialism) and is defined as three-sided (= begging the question). God is not defined as “Father” or “triangle”.",
  "Saying “God is necessarily triune” only restates the Trinity and assumes what it has to prove. The burden is theirs (Premise 5).",
  "Turn the tables · Their own scripture speaks of God as one, in the singular: “I am the LORD, and there is no other; besides me there is no God” (Isaiah 45:5); “Hear, O Israel: the LORD our God, the LORD is one” (Deuteronomy 6:4)."],
 ["Saul Kripke, Naming and Necessity (1980)","Isaiah 45:5; Deuteronomy 6:4"]);

const dLove=N(CR,
 "God is love. Perfect love needs a beloved (the Son) and a co-beloved (the Spirit), so a one-person God is impossible (Richard of St. Victor, Swinburne, Craig).",
 "That argument comes from the Gnostics, Aquinas rejects it, and it does not stop at three. God loves himself first and most, and since he is the highest good, that self-love is the highest love.",
 "The love argument",
 ["Gnostic origin: “love is not love unless there is something loved” is the Valentinian cosmology as reported by Hippolytus (Refutation of All Heresies VI.29). Against it, Hippolytus himself sets the one God who existed alone, with nothing co-eternal (Refutation X.32).",
  "Turn the tables · Thomas Aquinas rejects this reasoning: companionship is needed for joy only by one who lacks perfect goodness (ST I q. 32 a. 1 ad 2). He teaches that God necessarily loves himself first and most (ST I q. 20 a. 1; love taken essentially, q. 37 a. 1). So on Thomas' own metaphysics a perfectly self-loving one-person God is coherent.",
  "Ordo amoris: self-love is selfish only in finite beings, because they are not the highest good. God is the highest good, so his self-love coincides with the highest love.",
  "Capacity versus exercise: perfect attributes (ṣifāt al-kamāl) such as mercy, forgiveness or love do not need an eternal object. Otherwise an eternally forgiving God would need an eternal sinner.",
  "Regress: if more relationships mean more selfless love (n(n−1)/2 pairs), the logic demands infinitely many persons, not three. And whoever needs another to be perfect loses aseity: Allah is aṣ-Ṣamad, the Self-Sufficient on whom all depend (112:2).",
  "Richard of St. Victor (De Trinitate III) stops at three without a reason, which is exactly the ad hoc step Premise 6 forbids."],
 ["Hippolytus, Refutatio VI.29; X.32","Thomas Aquinas, ST I q. 32 a. 1 ad 2; q. 20 a. 1; q. 37 a. 1","Richard of St. Victor, De Trinitate III","Qurʾān 85:14 (al-Wadūd); 112:2 (aṣ-Ṣamad)"]);

const dKnow=N(CR,
 "Self-knowledge separates the knower (the Father) from his inner Word (the Son) (Augustine, Aquinas).",
 "In a simple, immaterial intellect, knower, known and act of knowing are one. Acts are what a subject does, not new persons. Otherwise the Son's self-knowledge would produce a fourth person.",
 "The self-knowledge argument",
 ["Aristotle (De Anima III.4): in things without matter, the thinker and what is thought are the same. Avicenna (the Necessary Existent) and Maimonides (Guide of the Perplexed I.68) teach the same about God: intellect, intellecting and intelligible are one.",
  "Reifying acts: knowing and willing are acts of one subject. If knowing produced a person, power and mercy would too.",
  "Regress: the Son also knows himself perfectly. Why does his self-knowledge not generate a fourth person?",
  "Turn the tables · Augustine (De Trinitate XV.22–23) and Aquinas (ST I q. 32 a. 1 ad 2) both admit that this analogy is not a proof."],
 ["Aristotle, De Anima III.4 (430a)","Maimonides, Guide of the Perplexed I.68","Augustine, De Trinitate XV.22–23","Thomas Aquinas, ST I q. 32 a. 1 ad 2"]);

const dAseity=N(CR,
 "The nature is a se (from itself); only the person of the Son is ab alio (from another). Eternal begetting is no dependence.",
 "Eternity removes only temporal priority, not ontological dependence. If the Son receives his personal existence from the Father and not the reverse, he depends on him. And if person and nature are really identical, the same thing is both “from itself” and “from another”.",
 "Aseity redefined",
 ["Eternal does not mean independent: a beam of light eternally caused by a lamp would still depend on the lamp.",
  "The dependence is asymmetric: the Son is from the Father, the Father not from the Son. What depends on another is not self-sufficient, so not God in the full sense (Premise 1, aṣ-Ṣamad).",
  "In classical Thomism person and nature are really identical. Then one and the same reality is non ab alio and ab alio: contradictory predicates."],
 ["Nicene Creed: “begotten of the Father”","Thomas Aquinas, ST I q. 33 a. 4"]);

const dReveal=N(CR,
 "Reason is not enough. The Bible reveals the Trinity (Matthew 28:19, John 1:1).",
 "Then you concede the rational debate. Aquinas and Vatican I both say the Trinity cannot be proven by reason. Disputed verses do not override Ockham or Leibniz's law, and no revelation can turn a contradiction into a necessity.",
 "Retreat into revelation",
 ["Thomas Aquinas: the Trinity cannot be known by natural reason at all (ST I q. 32 a. 1), while the oneness of God can (ST I q. 11 a. 3). Vatican I (Dei Filius, ch. 4) calls it a mystery beyond reason.",
  "So on the level of reason, unitarian monotheism wins.",
  "The verses are disputed: John 17:3 calls the Father “the only true God”. For centuries Christians read these texts as Arian, subordinationist or modalist.",
  "Revelation cannot make a contradiction true: if the doctrine fails Leibniz's law, no verse repairs that."],
 ["Thomas Aquinas, ST I q. 32 a. 1; q. 11 a. 3","Vatican I, Dei Filius (1870), ch. 4","John 17:3; Matthew 28:19; John 1:1"]);

const dOckham=N(CR,
 "Ockham's razor is about theories, not about God. Simplicity does not decide what exists.",
 "Right, which is why the argument has two strands. The modal strand (P1, P7, IC1) is a strict proof without Ockham. Ockham and sufficient reason (P5, P6) only show that the Trinitarian has no reason to reject P7.",
 "Two strands, one conclusion",
 ["Strict strand: necessary being, possibility of one person, modus tollens. Deductive, without Ockham.",
  "Epistemic strand: sufficient reason and Ockham do not prove that only one person exists. They show that adding persons needs a reason, and none is given.",
  "So attacking Ockham does not save the Trinity. You still have to refute Premise 7."],
 ["Ockham, Summa logicae I.12"]);

topic(['christianity','trinity','modal-necessity'],{title:"One person is enough: the modal argument",k:"Modal logic · Ockham · Ibn Taymiyya",
blurb:"God exists necessarily, persons two and three do not. Every Trinity model and every defeater answered.",
article:{
claim:"God is necessarily three persons: Father, Son and Holy Spirit (Nicaea 325, Constantinople 381).",
tree:N(CR,
 "God is necessarily three persons. Father, Son and Spirit are each fully God.",
 "Whatever is God exists in every possible world. One person already has every divine attribute, and a world with exactly one divine person is possible. So the second and third persons can fail to exist. Something that can fail to exist is not God.",
 "Part I · The hardened argument",
 ["Premise 1 · The necessary being: anything that is God without qualification exists necessarily, in every possible world. A contingent being, whose non-existence is possible, is not God.",
  "Premise 2 · The ontological minimum: the smallest number of divine persons for a personal God to exist is exactly one. Fewer means no personal God.",
  "Premise 3 · One is sufficient: a single divine person is a sufficient condition (conditio per quam) for every defining attribute and act of God: necessary existence, aseity, omnipotence, omniscience, eternity, perfection, creating and sustaining the world, all without contradiction.",
  "Premise 4 · Asymmetry of subtraction: what can be thought away from the concept of the highest necessary being without destroying it is not conceptually necessary to it. God's oneness cannot be thought away without collapsing into polytheism. A second and third person and their relations of origin can be thought away completely without God lacking a single essential attribute. So the two views are not symmetric: one person is the complete minimal hypothesis (A), three persons are A plus an extra hypothesis (A + X).",
  "Premise 5 · Sufficient reason and burden of proof: nothing is without a reason (principium rationis sufficientis). Every positive claim needs an explicit reason and carries a burden of proof; lack of counter-evidence does not lift it. Whoever posits more persons than the minimum must give a sufficient reason why exactly that plurality is necessary.",
  "Premise 6 · Ockham's razor: plurality must not be posited without necessity (“pluralitas non est ponenda sine necessitate”); it is pointless to do with more what can be done with fewer (“frustra fit per plura quod potest fieri per pauciora”). A theory takes the fewest ontological commitments; extra assumptions that explain nothing new are ad hoc.",
  "Premise 7 · A one-person God is justifiably possible: unlike natural kinds with a hidden microstructure (water = H₂O), God is defined by conceptually transparent perfections. If the one-person hypothesis fulfils them completely and without contradiction, and no defeater shows it impossible, we are fully justified in holding that exactly one divine person is metaphysically possible (◇U).",
  "Interim conclusion 1 · The extra persons are contingent: if a one-person God is possible, there is a possible world with that one person and no second or third. Their non-existence is possible, so at most they exist contingently.",
  "Interim conclusion 2 · The Trinity is ad hoc: one person fulfils every divine function and no sufficient reason shows that exactly three are needed. Adding persons multiplies entities without necessity and falls to Ockham's razor.",
  "Main conclusion · By modus tollens: God exists necessarily (P1), persons two and three exist at most contingently (IC1), so neither can be God. By epistemic closure the justification of the undefeated premises carries over to the conclusion: it is rationally justified to reject a second and third divine person and to hold the Trinity metaphysically impossible. One-person monotheism remains as the only consistent, economical and conceptually complete view.",
  "Why the trap shuts: to escape, the Trinitarian must attack Premise 3, 4 or 7 with a valid defeater. Part II (the forks below) closes every alternative model, Part III answers every standard defeater."],
 ["Leibniz, Monadology §32 (principle of sufficient reason)","William of Ockham, Ordinatio I d. 30 q. 1; Summa logicae I.12","Modal logic S5: a necessary being exists in every possible world","Nicene-Constantinopolitan Creed (381)"],
 [caseSplit,dP7,dLove,dKnow,dAseity,dReveal,dOckham],
 {visual:{kind:'steps',items:[
   ["God exists necessarily","Whatever is God is in every possible world (P1)"],
   ["One person is enough","One person has every divine attribute (P2–P3)"],
   ["Three = one + extra","Persons 2 and 3 can be thought away; nothing is lost (P4)"],
   ["More needs a reason","Sufficient reason + Ockham: no plurality without necessity (P5–P6)"],
   ["A one-person God is possible","Transparent perfections, no defeater (P7)"],
   ["So persons 2 and 3 are contingent","There is a possible world without them (IC1)"],
   ["Contingent ≠ God","Modus tollens + epistemic closure: the Trinity fails"]
 ]},
 facts:[["Form","Modus tollens"],["Logic","Modal (S5)"],["Method","Ockham + sufficient reason"],["Offensive","Ibn Taymiyya + case split A/B/C"]]}),
sum:"God exists necessarily; one person suffices and is possible, so persons two and three are contingent and not God. Every Trinity model falls into class A, B or C, and each fails."
}});
})();
