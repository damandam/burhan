/* Christianity › Trinity › “He learned from what he suffered”: the experiential-knowledge argument.
   Source: Noel's own argument (German, 27 Nov 2026), translated and hardened. Objections from the philosophy of mind
   (Jackson's Mary, Lewis/Nemirow ability hypothesis, phenomenal concepts), Christology (Aquinas, Chalcedon, T. V. Morris) and Hebrews. */
(()=>{
const {cr,N,card}=window.B;
const NOEL=cr('Noel · own argument (translated from German)');
const MIND=cr('Noel · own argument; Frank Jackson, “Epiphenomenal Qualia” (Philosophical Quarterly 32, 1982) and “What Mary Didn’t Know” (Journal of Philosophy 83, 1986)');

/* Q1, answer A */
const aNo=N(cr('Noel · own argument; Thomas Aquinas, Summa Theologiae I q. 14'),
 "No. God already knew everything perfectly, including what suffering feels like. The incarnation added nothing to his knowledge.",
 "Then Jesus learned nothing by living as a man, which contradicts Luke 2:52 and Hebrews 5:8. And the favourite Christian claim, “through Jesus God truly knows what our suffering feels like”, is empty: he knew it the same way without the incarnation.",
 "Answer A: nothing was gained",
 ["Luke 2:52: “Jesus increased in wisdom and in stature.” Hebrews 5:8: “he learned obedience through what he suffered.” Both say the Son gained something.",
  "Hebrews grounds his sympathy on his own experience: “because he himself has suffered when tempted, he is able to help those who are being tempted” (2:18); “we do not have a high priest who is unable to sympathise with our weaknesses, but one who in every respect has been tempted as we are” (4:15). If nothing was gained, “because he himself suffered” explains nothing.",
  "Steelman: Aquinas says God knows all things, including creatures and their states, perfectly through his own essence (ST I q. 14 a. 5–6). Fine, but then the incarnation is not needed for God to know human suffering, and the Hebrews argument loses its point.",
  "So answer A saves God's prior omniscience and throws away the Christian “God who knows our pain from the inside”."],
 ["Luke 2:52","Hebrews 2:17–18; 4:15; 5:8","Thomas Aquinas, ST I q. 14 a. 5–6"]);

/* Q1, answer B */
const aYes=N(cr('Noel · own argument; Malachi 3:6; James 1:17; Thomas Aquinas, Summa Theologiae I q. 9'),
 "Yes. The Son really gained experiential knowledge: what it is like to hunger, fear, suffer and die as a man.",
 "Then two things follow. Before the incarnation there was real knowledge the Son lacked, so he was not fully omniscient then and has really changed by learning. And now ask question 2: does the Father have it too?",
 "Answer B: the Son gained real knowledge",
 ["Before the year 0 the person of the Son did not know K, what human suffering feels like from the inside. Afterwards he did. Gaining knowledge is changing.",
  "Turn the tables · Their own scripture and theology say God does not change: “I the LORD do not change” (Malachi 3:6); “the Father of lights, with whom there is no variation or shadow due to change” (James 1:17); Aquinas: God is altogether immutable (ST I q. 9 a. 1).",
  "So the Son either changed (against immutability) or was not omniscient before (against his full deity). Next: does the Father have K (question 2)?"],
 ["Malachi 3:6","James 1:17","Thomas Aquinas, ST I q. 9 a. 1"]);

/* Q2, answer C */
const aFatherYes=N(cr('Noel · own argument; Tertullian, Against Praxeas'),
 "The Father has this experiential knowledge too.",
 "How can the Father know from the inside what human pain and death feel like without becoming man and suffering? Either the Father suffers too, which the Church condemned as patripassianism, or this knowledge never needed an incarnation, which is answer A again.",
 "Answer C: the Father has it as well",
 ["Experiential knowledge is knowledge from having the experience. If the Father has it, the Father had the experience: he hungered, feared and died. That is patripassianism, the view that the Father suffered, rejected by Tertullian (Against Praxeas) and the Church.",
  "If the Father has it without the experience, then experience was never needed for it, and the incarnation added nothing: back to answer A.",
  "Either way, the distinction “the Son became man, the Father did not” loses its point."],
 ["Tertullian, Against Praxeas 1, 29"]);

/* Q2, answer D */
const aFatherNo=N(NOEL,
 "Only the Son has it. The Father does not.",
 "Then the person of the Son has real knowledge the person of the Father lacks. The Son knows more than the Father in a real sense. That is not one identical omniscience, and not full equality of the persons in knowledge.",
 "Answer D: only the Son has it",
 ["Then the persons do not share one identical divine knowledge: the Son's knowledge contains K, the Father's does not.",
  "If being God requires complete knowledge, the Father now lacks something (and the Son lacked it before the year 0).",
  "Put together with Mark 13:32 (the Son does not know the Hour, which the Father knows), each person lacks something the other knows. See also the card “I am the Son”: the indexical-knowledge argument."],
 ["Mark 13:32"]);

/* excuse 1: propositional vs experiential */
const ex1=N(MIND,
 "Propositionally the Father knows everything. The Son only has an extra human way of experiencing it, not extra knowledge.",
 "Decide: is K more than nothing? If K is real knowledge, then the Son's knowledge is the Father's plus K, which is more. If K is nothing, the incarnation taught him nothing and Hebrews 5:8 is empty.",
 "Excuse 1: “same facts, new mode”",
 ["Jackson's Mary knows every physical fact about colour while living in a black-and-white room. When she first sees red, she learns something: what seeing red is like (Jackson 1982, 1986). That is the kind of knowledge Hebrews claims for Jesus: knowing suffering by suffering.",
  "The defender's best version: Mary learns no new fact, only a new way of grasping an old fact (a “phenomenal concept”). Apply it to the Trinity: then the Son has a way of grasping that the Father does not have. Having a different first-person way of grasping is having a different point of view, and two points of view are two minds.",
  "So the dilemma stays: if the new mode counts for anything (Hebrews says it makes him able to sympathise), the Son has something the Father lacks. If it counts for nothing, the incarnation added nothing.",
  "In simple terms: the Father has P, the Son has P plus K. If K is more than zero, P + K is more than P."],
 ["Jackson 1982; 1986","Hebrews 2:18; 5:8"],[],
 {visual:{kind:'compare',left:{title:'If K is real (K > 0)',items:['Son knows P + K','Father knows only P','→ unequal knowledge','→ the Son learned: God changed']},right:{title:'If K is nothing (K = 0)',items:['Experience adds nothing','“He learned” (Heb 5:8) means nothing','“Able to sympathise” (Heb 2:18) is empty','→ the incarnation taught God nothing']}}});

/* ability hypothesis */
const exAbility=N(cr('Noel · own argument; David Lewis, “What Experience Teaches” (1988); Laurence Nemirow'),
 "Knowing what something is like is not knowledge of facts at all, only an ability (to recognise, imagine, remember it). So nothing is missing from the Father's omniscience.",
 "Then the Son gained new abilities the Father does not have, and still changed. And Hebrews still says he “learned”. Renaming knowledge as “ability” does not remove the difference between the persons.",
 "Excuse: “it is only know-how”",
 ["Steelman: Lewis and Nemirow argue that Mary gains abilities (to imagine and recognise red), not new information.",
  "Even so, the Son now has an ability (to remember what his own hunger and pain were like) that the Father does not have and the Son did not have before. Omnipotence and omniscience are both supposed to be shared identically; now one person has a capacity the other lacks.",
  "And the Christian appeal to Hebrews 4:15 rests on exactly this: Jesus can sympathise because he went through it. That is the very thing the Father lacks."],
 ["Lewis 1988","Hebrews 4:15"]);

/* excuse 2: only the human nature learned */
const ex2=N(cr('Noel · own argument; Thomas Aquinas, Summa Theologiae III q. 12 a. 2; Council of Chalcedon (451)'),
 "Only the human nature of Jesus learned and has this knowledge, not the divine nature.",
 "A nature is not a subject. A nature does not feel pain or know what it is like; only a person does. Who is the “I” that has this knowledge? If it is the person of the Son, then the person of the Son gained it and the person of the Father lacks it. If it is a separate human mind, there are two knowing “I”s in Jesus.",
 "Excuse 2: “only the human nature”",
 ["Steelman: Aquinas teaches that Christ's human soul really advanced in acquired, experiential knowledge (ST III q. 12 a. 2), while his divine knowledge did not change.",
  "But Chalcedon insists on “one and the same Son”, one person in two natures. Natures do not know; persons know through them. So the one who learned is the person of the Son.",
  "Horn 1 · the person of the Son bears K (through his human nature): then the asymmetry with the Father stays, and the person of the Son has gained something new. The nature trick changes nothing.",
  "Horn 2 · a separate human mind bears K, not the Son: then there are two knowing subjects in Jesus, which is Nestorianism, condemned at Ephesus (431). And the Son himself still does not know what suffering is like."],
 ["Thomas Aquinas, ST III q. 12 a. 2","Council of Chalcedon (451)","Council of Ephesus (431)"]);

/* two minds */
const exTwoMinds=N(cr('Noel · own argument; Thomas V. Morris, The Logic of God Incarnate (1986)'),
 "Two-minds view: the Son's divine mind contains his human mind and has full access to it, but not the other way round.",
 "Whose divine mind? If the one divine mind is shared by all three persons, it contains the human pain, so the Father has it too (patripassianism). If the Son has his own divine mind, separate from the Father's, there are distinct divine minds, which is tritheism.",
 "Excuse: two minds in Christ",
 ["Steelman: Morris says the eternal divine mind of the Son contains the earthly human mind, so the Son knows from within what the man Jesus experiences.",
  "Horn 1 · one divine mind for all three persons: then the Father's mind also contains the human experiences of hunger and death. The Father suffers, which is patripassianism.",
  "Horn 2 · a divine mind proper to the Son: then Father and Son are distinct divine minds. Three divine minds are three gods.",
  "Either way the two-minds view does not keep both “one God” and “only the Son suffered”."],
 ["Morris 1986"]);

/* timeless eternity */
const exTimeless=N(NOEL,
 "God is outside time. There was no “before” the incarnation for the Son; he has it timelessly.",
 "Timelessness only removes the “before and after”. It does not remove the difference between the persons: timelessly the Son has K and the Father does not. And Luke 2:52 itself speaks of growth in time.",
 "Excuse: timeless eternity",
 ["Even if the Son has K “eternally”, the Father still does not have K. Answer D stands: unequal knowledge.",
  "Luke 2:52 uses the language of growth, “increased in wisdom”. Hebrews 5:8 uses the language of learning. A timeless possession of K does not fit “learned”.",
  "And if K is eternal in the Son, his divine knowledge always included human suffering, which brings back the question of whether the Father shares it (answer C)."],
 ["Luke 2:52","Hebrews 5:8"]);

/* tu quoque */
const exTuQuoque=N(cr('Noel · own argument; Qurʾān 42:11; 67:14; 112:2'),
 "Allah does not know what human suffering feels like either.",
 "In Islam, hunger, weakness, suffering and learning are creaturely deficiencies that do not belong to God at all, and he knows his creatures perfectly as their Creator. You, however, claim that one divine person really acquired this knowledge while another divine person lacks it.",
 "Why it does not hit Islam",
 ["“There is nothing like Him” (42:11). “Does He who created not know, while He is the Subtle, the Aware?” (67:14). “Allah, the Self-Sufficient” (aṣ-Ṣamad, 112:2): he needs nothing, gains nothing, and lacks nothing.",
  "Islam never claims God learns by experience. The Christian claims exactly that, for one divine person and not for the others.",
  "So the argument targets one claim only: several divine persons with one identical, unchanging, complete knowledge, one of whom learned."],
 ["Qurʾān 42:11; 67:14; 112:2"]);

card('christianity/trinity/experiential-knowledge',{
 title:"“He learned from what he suffered”: the experiential-knowledge argument",
 k:"Luke 2:52 · Hebrews 5:8 · Mary's room",
 blurb:"Through the incarnation the Son learned what human suffering feels like. Did the Father know it? Every answer breaks a pillar of the Trinity.",
 claim:"The Son is fully God, equal with the Father in knowledge, and through the incarnation God knows our suffering from the inside.",
 tree:N(NOEL,
  "Father and Son share one complete, unchanging divine knowledge. And through Jesus, God truly knows from experience what it is like to be human and to suffer.",
  "Both cannot be true. If the Son gained real experiential knowledge, he lacked it before and the Father lacks it now. If he gained nothing, the incarnation taught God nothing and Luke 2:52 and Hebrews 5:8 are empty.",
  "The argument and the four-question cross-examination",
  ["P1 · Biblical premise: through the incarnation Jesus gained real experiential knowledge, from the inside, of what it is like to hunger, laugh, fear, suffer and die as a man (Luke 2:52; Hebrews 4:15; 5:8).",
   "P2 · Subject premise (Chalcedon): natures do not feel or know; only a person is the subject of knowledge. So the person of the Son has K: “I know from my own experience what human life and suffering feel like.”",
   "P3 · Asymmetry premise: the Father did not become man and did not hunger or suffer as a man. So the person of the Father does not have K.",
   "P4 · Time premise: the person of the Son did not have K before the incarnation either; he gained it in time.",
   "Conclusion · Either the person of the Son has real knowledge the Father lacks to this day (and the Son himself lacked before the year 0), or Jesus' human experience added literally nothing to his knowledge.",
   "Cross-examination, in this order · Question 1: “Did the person of the Son gain real experiential knowledge through the incarnation, yes or no?” No → answer A (nothing gained). Yes → answer B (God changed), then Question 2: “Does the person of the Father have this knowledge too?” Yes → answer C (the Father suffered, or no incarnation was needed). No → answer D (the Son knows more than the Father).",
   "35-second debate version · “Luke 2:52 says Jesus grew in wisdom; Hebrews 5:8 says he learned from what he suffered. Who has that knowledge? Not an abstract nature: the person of the Son. Is it real knowledge, more than zero? If no, he learned nothing and ‘God knows our pain through Jesus’ is empty. If yes: does the Father have it too? If yes, the Father suffered or no incarnation was needed. If no, the Son knows something the Father does not, and something he himself did not know before the incarnation. Wherever you go: either the Son knows more than the Father and God learned, or Jesus gained no real experiential knowledge.”"],
  ["Luke 2:52","Hebrews 2:17–18; 4:15; 5:8","Council of Chalcedon (451)","Frank Jackson, “What Mary Didn’t Know” (1986)"],
  [aNo,aYes,aFatherYes,aFatherNo,ex1,exAbility,ex2,exTwoMinds,exTimeless,exTuQuoque],
  {visual:{kind:'steps',items:[
    ["Q1: Did the Son gain real experiential knowledge?","No → A: Luke 2:52 & Hebrews 5:8 empty, incarnation adds nothing"],
    ["Yes → B","He lacked it before: God changed (Malachi 3:6)"],
    ["Q2: Does the Father have it too?","Yes → C: the Father suffered, or no incarnation needed"],
    ["No → D","The Son knows more than the Father: no identical omniscience"],
    ["Excuse 1: “only a new mode”","K > 0 → P + K > P; K = 0 → nothing learned"],
    ["Excuse 2: “only the human nature”","Natures don't know; persons do → asymmetry, or two “I”s (Nestorianism)"]]},
   facts:[["Type","Four-way dilemma"],["Bible","Luke 2:52 · Hebrews 5:8"],["Philosophy","Jackson's Mary (qualia)"],["Every answer breaks","Omniscience, immutability or equality"]]}),
 sum:"If the Son learned what suffering feels like, he lacked it before and the Father lacks it now; if he learned nothing, Luke 2:52 and Hebrews 5:8 are empty."
});
})();
