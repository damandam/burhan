/* Christianity › Trinity › “I am the Son”: the indexical-knowledge argument against the Trinity.
   Source: Noel's own argument (German, 27 Nov 2026), translated and hardened; objections and replies added from the
   philosophy of de se knowledge (Perry, Lewis, Grim, Nagasawa) and Catholic teaching (Lateran IV, Catechism, Aquinas). */
(()=>{
const {cr,N,card}=window.B;
const NOEL=cr('Noel · own argument (translated from German)');
const PHIL=cr('Noel · own argument; John Perry, “The Problem of the Essential Indexical” (Noûs 13, 1979); David Lewis, “Attitudes De Dicto and De Se” (Philosophical Review 88, 1979)');

/* ---- objections ---- */
const oSameProp=N(PHIL,
 "The Father knows exactly the same fact. He knows “the Son is the Son”. Saying it in the first person adds nothing.",
 "It adds exactly what the argument is about. Knowing “the Son is the Son” is not knowing “I am the Son”: someone can know the first and still not know which one he is. If the first-person truth is a different truth, the Father lacks it. If it is the same truth grasped from a different “I”, then the persons know through different first-person perspectives, which means three minds.",
 "De dicto is not de se",
 ["Perry's shopper follows a trail of spilled sugar round the supermarket, thinking “someone is making a mess”. He knows a true sentence about the shopper with the torn bag. He only stops when he realises “I am making a mess”. That new knowledge changes what he does, so it is real knowledge the third-person sentence did not give him (Perry 1979).",
  "David Lewis: first-person knowledge is self-ascribing a property, not just believing a proposition. Only the one who has the property can self-ascribe it truly (Lewis 1979).",
  "So the defender must pick: (a) “I am the Son” is a distinct truth: the Father cannot know it, so he does not know every divine truth (P1–P4 stand). Or (b) it is the same content under a different first-person mode: then the Son has a mode of knowing that the Father does not have. Distinct first-person perspectives are distinct centres of consciousness, and three centres of consciousness are three knowers (see the fork “They share one intellect”).",
  "Either way, “one identical divine knowledge” does not survive."],
 ["Perry 1979","Lewis 1979"]);

const oRestrict=N(cr('Noel · own argument; Patrick Grim, “Against Omniscience: The Case from Essential Indexicals” (Noûs 19, 1985); Yujin Nagasawa, “Divine Omniscience and Knowledge De Se” (International Journal for Philosophy of Religion 53, 2003)'),
 "Omniscience means knowing every truth that a perfect knower could know. No one can know someone else's “I”, so the Father lacks nothing. Otherwise God could not be omniscient either, because he cannot know “I am Noel”.",
 "That reply rescues the Father's omniscience by giving up the Trinity's shared knowledge. And the argument is not about human truths: it is about a divine truth, known eternally inside the Godhead, which one divine person has and another cannot have.",
 "Restricting omniscience splits the knowers",
 ["Steelman: philosophers have answered Grim's general argument by restricting omniscience to truths that are knowable by the knower, so that God not knowing “I am Noel” is no defect (Nagasawa 2003 surveys these replies).",
  "Fine for a unitarian God: there is one divine subject, and every divine first-person truth (“I am the LORD, and there is no other”, Isaiah 45:5) is known by him. No divine truth is left out.",
  "Not fine for the Trinity: “I am the Son” is not a creaturely truth outside God. It is a truth about the divine life, known eternally by a divine person. So inside the one God there is a divine truth the Father cannot know and a different one (“I am the Father”) the Son cannot know. The divine knowledge is not one identical act shared by all three; it is three sets of first-person knowledge.",
  "That is why P1 speaks of divine truths: the restriction defence works for human indexicals, and fails exactly where the Trinity needs it."],
 ["Grim 1985","Nagasawa 2003","Isaiah 45:5"]);

const oOneIntellect=N(cr('Noel · own argument; Thomas Aquinas, Summa Theologiae I q. 14; Lateran IV (1215); Catechism 253–254'),
 "The three persons have one intellect and one act of knowing. Whatever the Son knows, the Father knows in the same act.",
 "Then the one act contains “I am the Son” and “I am not the Son” at once. Either the Father, knowing in that act, knows himself to be the Son (false: modalism), or the act has three different “I”s inside it, which is three subjects.",
 "One intellect: the dilemma closes",
 ["Catholic teaching: one divine nature, one intellect and will; the persons are “really distinct” only by their relations (Lateran IV; Catechism 254). Aquinas treats God's knowledge as one act identical with his essence (ST I q. 14).",
  "Horn A · one subject of knowing: if there is only one knower in that act, there is one “I”. Three “I”s require three knowers. One knower with three names is modalism, which is one person (see the card “One person is enough”, Class C).",
  "Horn B · three subjects of knowing: if each person knows himself as “I” and not as the others, there are three centres of consciousness. Three conscious divine subjects each with their own knowledge is social Trinitarianism, which is three gods (Class B1).",
  "Horn C · “mystery”: then the doctrine asserts something it cannot state consistently. A claim with no fixed content proves nothing (see “The logic of the Trinity”)."],
 ["Thomas Aquinas, ST I q. 14 a. 4","Lateran IV (1215)","Catechism 253–254"],[],
 {visual:{kind:'compare',left:{title:'Same knowledge (one “I”)',items:['Father knows “I am the Son”','→ Father = Son','→ modalism (one person)']},right:{title:'Different knowledge (three “I”s)',items:['Each knows only his own “I am”','→ three knowers, three minds','→ tritheism, or no person is fully omniscient']}}});

const oPerichoresis=N(NOEL,
 "The persons indwell one another (perichoresis, John 14:10). The Father knows the Son from the inside.",
 "Indwelling does not make the Father the Son. However intimately the Father knows the Son, “I am the Son” is only true in the mouth of the one who is the Son.",
 "Perichoresis does not transfer an “I”",
 ["A mother can know her child more closely than anyone. She still cannot truly think “I am this child”. Closeness gives knowledge about someone, never his first-person identity.",
  "If perichoresis did let the Father truly think “I am the Son”, the Father would be the Son, and the persons would collapse into one (modalism).",
  "John 14:10 itself keeps the two apart: “I am in the Father, and the Father in me” has two subjects, “I” and “the Father”."],
 ["John 14:10"]);

const oIncarnation=N(NOEL,
 "The Son only says “I am the Son” in his human nature, as a man. In the divine nature there is no such difference.",
 "The Son's self-knowledge as Son is eternal: he is the Son before the incarnation and knows it. The Gospel of John has him speak of “the glory I had with you before the world existed”.",
 "Not a human-nature truth",
 ["Classical theology: the Son is eternally begotten, and the relation of sonship is what distinguishes him from the Father from eternity (Aquinas, ST I q. 28–30). So “I am the Son, not the Father” is true of him eternally, in the divine life, not first at Bethlehem.",
  "John 17:5: “glorify me in your own presence with the glory that I had with you before the world existed”: two subjects, “me” and “you”, before creation.",
  "Moving the indexical into the human nature also makes the human Jesus know something about his own identity that the divine knowledge does not contain, which is a second problem, not a solution."],
 ["John 17:5","Thomas Aquinas, ST I q. 28–30"]);

const oMystery=N(NOEL,
 "God is beyond human logic. Indexicals are a human category; you cannot apply them to the Trinity.",
 "Then nothing about the Trinity can be stated or defended either. The doctrine itself uses “I” and “you” for the persons. If logic does not apply, “three persons” and “one God” have no content.",
 "Logic holds in the unseen too",
 ["The Gospels make the persons speak to each other with “I” and “you” (John 17; Mark 1:11 “You are my beloved Son”). The indexicals come from their own scripture, not from us.",
  "Ibn Taymiyya: the first principles of reason, such as non-contradiction, hold for the unseen (ghayb) as for the seen world. Otherwise no statement about God, true or false, could be made.",
  "Appealing to mystery at the exact point where the contradiction appears is a retreat, not an answer (see “The logic of the Trinity”)."],
 ["John 17; Mark 1:11","Ibn Taymiyya, al-Radd ʿalā al-manṭiqiyyīn"]);

const oTuQuoque=N(NOEL,
 "Your own God has the same problem: there are first-person truths he cannot know either.",
 "No. A unitarian God is one subject. Every divine first-person truth is his own, so no divine truth lies outside his knowledge. The problem only arises when one God is said to contain several “I”s.",
 "Why the argument does not hit Islam",
 ["“Allah: there is no god but He, the Living, the Self-Subsisting… He knows what is before them and what is behind them” (2:255). One divine “I”, one divine knowledge.",
  "Creaturely first-person truths (“I am Noel”) are not divine truths, so the restriction defence (see that fork) works for the one God of Islam.",
  "The argument is aimed at one claim only: that several divine persons share one identical, complete divine knowledge."],
 ["Qurʾān 2:255; 112:1–4"]);

const oMark1332=N(cr('Noel · own argument; Mark 13:32'),
 "Fine, the persons know differently, but each is still fully God.",
 "Then their own Gospel finishes the argument from the other side. The Son does not know the Hour, which the Father knows (Mark 13:32). And the Father cannot know “I am the Son”. So each person lacks something the other knows: neither alone is omniscient.",
 "Turn the tables: Mark 13:32",
 ["Turn the tables · “But of that day or that hour no one knows, not even the angels in heaven, nor the Son, but only the Father” (Mark 13:32). Their scripture already admits a knowledge gap from Son to Father.",
  "The indexical argument adds the gap from Father to Son. Together: the Father lacks the Son's “I am the Son”, the Son lacks the Hour.",
  "If “fully God” requires being omniscient, and neither person knows everything the other knows, then neither person is fully God on his own. Only the combined three would know everything, which makes the persons parts of God (partialism)."],
 ["Mark 13:32; Matthew 24:36"]);

card('christianity/trinity/indexical-omniscience',{
 title:"“I am the Son”: the indexical-knowledge argument",
 k:"Omniscience · de se knowledge",
 blurb:"There is a divine truth only the Son can know. So the Father is not omniscient, or the persons do not share one divine mind.",
 claim:"Father, Son and Holy Spirit are one God, sharing one and the same complete divine knowledge.",
 tree:N(NOEL,
  "The three persons are one God with one divine intellect. Each person is omniscient and knows everything the others know.",
  "The Son knows a divine truth: “I am the Son, not the Father.” A first-person truth like that can only be known by the one it is about. So the Father cannot know it. Then either the Father is not omniscient, or Father and Son do not share one and the same divine knowledge. Either way the Trinity breaks.",
  "The argument, step by step",
  ["P1 · Perfect divine omniscience means knowing every divine truth, every truth that belongs to the divine life and is known in God.",
   "P2 · The Son knows the divine truth W: “I am the Son (and not the Father).” Classical theology says sonship is eternal, so W is true and known from eternity.",
   "P3 · First-person (indexical, de se) knowledge, “I am X”, can only be truly held by the subject who is X. Anyone else can know “the Son is the Son”, but not “I am the Son” (Perry; Lewis). The Father is not the Son, so the Father cannot know W.",
   "P4 · So there is at least one divine truth the Son knows and the Father, in principle, cannot know.",
   "Conclusion · Either the Father is not omniscient in the full sense, or Father and Son do not share one identical divine knowledge and consciousness. The first denies the Father's deity; the second gives three knowers, which is three gods. Either way the doctrine of one God in three co-equal persons collapses.",
   "The same holds for every pair: the Father knows “I am the Father”, the Spirit “I am the Spirit”. Three first-person truths, none shareable.",
   "Why it is hard to escape: every reply has to say either that the persons know the same thing (then they are one “I”: modalism) or that they know different things (then they are three minds: tritheism, or none is fully omniscient). The forks below go through each reply."],
  ["John Perry, “The Problem of the Essential Indexical”, Noûs 13 (1979)","David Lewis, “Attitudes De Dicto and De Se”, Philosophical Review 88 (1979)","Patrick Grim, “Against Omniscience: The Case from Essential Indexicals”, Noûs 19 (1985)","Lateran IV (1215); Catechism 253–254"],
  [oSameProp,oOneIntellect,oRestrict,oPerichoresis,oIncarnation,oMystery,oTuQuoque,oMark1332],
  {visual:{kind:'steps',items:[
    ["Omniscience = knowing every divine truth","P1"],
    ["The Son knows “I am the Son”","A divine truth, true from eternity (P2)"],
    ["Only the Son can know it","First-person knowledge belongs to its subject (P3)"],
    ["The Father cannot know it","A divine truth outside the Father's knowledge (P4)"],
    ["Same knowledge → one “I” → modalism","Different knowledge → three minds → tritheism"],
    ["The Trinity collapses either way","And Mark 13:32 adds the gap the other way round"]]},
   facts:[["Type","Dilemma (de se knowledge)"],["Key premise","P3: only X can know “I am X”"],["Their best reply","Same fact, different mode"],["Why it fails","Different mode = different mind"]]}),
 sum:"Only the Son can know “I am the Son”. So the persons do not share one complete divine knowledge: either the Father is not omniscient, or there are three minds."
});
})();
