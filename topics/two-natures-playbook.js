/* Tactical Debate Playbook: “Does the two-natures doctrine make sense?” — 2026-11-24.
   New card christianity/trinity/two-natures. Steelman taken from the YouTube video
   “Bible EXPLICITLY Teaches Two Natures in Jesus Christ” (D. Nak, 20:41): Phil 2:6–7 morphē = nature
   (Chrysostom, Cyril, Justinian), homoiōma = nature (Gregory Nazianzen to Cledonius, Chrysostom Hom. 7 on Phil),
   John 1:14 “dwelt in us” (Cyril), Psalm 19:5 bridegroom + giant (Augustine, Ambrose), and the
   union-in-distinction analogies (Trinity, marriage Mark 10:8). Each is answered, then the logical angles
   (predicates, two wills, created/uncreated, the Christians' own split over Chalcedon). Links to the
   “qua” and “Jesus slept” cards. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const P=(node,props)=>Object.assign(node,props);
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const VID='https://www.youtube.com/watch?v=gTY0QWw9rT8';
const CR={credit:'Burhān · steelman from “Bible EXPLICITLY Teaches Two Natures in Jesus Christ” (YouTube, 20:41)',link:VID};

const Q={
 php26:{by:'Philippians 2:6–7',en:'Who, being in the form (morphē) of God, thought it not robbery to be equal with God: but made himself of no reputation, and took upon him the form of a servant, and was made in the likeness (homoiōma) of men.',ref:'Philippians 2:6–7 (KJV)'},
 php29:{by:'Philippians 2:9–11',en:'Wherefore God also hath highly exalted him, and given him a name which is above every name… and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.',ref:'Philippians 2:9–11 (KJV)'},
 rom83:{by:'Romans 8:3',en:'…God sending his own Son in the likeness (homoiōma) of sinful flesh, and for sin, condemned sin in the flesh.',ref:'Romans 8:3 (KJV)'},
 jn114:{by:'John 1:14',en:'And the Word was made flesh, and dwelt among us (eskēnōsen en hēmin)…',ref:'John 1:14 (KJV)'},
 ps194:{by:'Psalm 19:4–5',en:'In them hath he set a tabernacle for the sun, which is as a bridegroom coming out of his chamber, and rejoiceth as a strong man to run a race.',ref:'Psalm 19:4–5 (KJV)'},
 mk108:{by:'Mark 10:8',en:'And they twain shall be one flesh: so then they are no more twain, but one flesh.',ref:'Mark 10:8 (KJV)'},
 jn173:{by:'John 17:3',en:'And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.',ref:'John 17:3 (KJV)'},
 num23:{by:'Numbers 23:19',en:'God is not a man, that he should lie; neither the son of man, that he should repent.',ref:'Numbers 23:19 (KJV)'},
 q359:{by:'Qurʾān 3:59',ar:'إِنَّ مَثَلَ عِيسَىٰ عِندَ اللَّهِ كَمَثَلِ آدَمَ ۖ خَلَقَهُ مِن تُرَابٍ ثُمَّ قَالَ لَهُ كُن فَيَكُونُ',en:'The example of Jesus with Allah is like that of Adam: He created him from dust, then said to him “Be”, and he was.',ref:'Qurʾān 3:59'},
 q4171:{by:'Qurʾān 4:171',ar:'إِنَّمَا الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ رَسُولُ اللَّهِ وَكَلِمَتُهُ أَلْقَاهَا إِلَىٰ مَرْيَمَ وَرُوحٌ مِّنْهُ ۖ … وَلَا تَقُولُوا ثَلَاثَةٌ',en:'The Messiah, Jesus son of Mary, was only a messenger of Allah and His word which He directed to Mary and a spirit from Him… and do not say “three”.',ref:'Qurʾān 4:171'},
 q575:{by:'Qurʾān 5:75',ar:'مَّا الْمَسِيحُ ابْنُ مَرْيَمَ إِلَّا رَسُولٌ … كَانَا يَأْكُلَانِ الطَّعَامَ',en:'The Messiah, son of Mary, was nothing but a messenger… they both used to eat food.',ref:'Qurʾān 5:75'},
 q1930:{by:'Qurʾān 19:30',ar:'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',en:'He said: “Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet.”',ref:'Qurʾān 19:30'},
 cyril:{by:'Cyril of Alexandria, the formula he defended against Nestorius',en:'Mia physis tou Theou Logou sesarkōmenē: one incarnate nature of God the Word.',ref:'Cyril, Letters to Succensus; formula taken from the Apollinarian “Ad Jovianum”, circulated under Athanasius’ name'},
 boeth:{by:'Boethius, Contra Eutychen 3',en:'A person is an individual substance of a rational nature.',ref:'Boethius, Contra Eutychen et Nestorium 3; Aquinas, ST I q.29 a.1'},
 lk2242:{by:'Luke 22:42',en:'Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done.',ref:'Luke 22:42 (KJV)'}
};

/* ---------- Biblical claims from the video ---------- */
const morphe=P(N(CR,
 '“Form” (morphē) in Philippians 2 means nature: Chrysostom says “the form of a servant means man by nature, so the form of God means God by nature”; Cyril says Christ is “in the form of God and in the form of a servant”. Basic arithmetic: two natures. Emperor Justinian reads it the same way.',
 'Look at what the argument rests on. Paul never says “nature” (physis) or “two”. The equation morphē = physis comes from fourth- and fifth-century fathers reading Paul through their own debates. The video says so itself: Paul “as he is exegeted by the saints”. And its first witness is an emperor, Justinian, who enforced Chalcedon by law a century after the council.',
 'Morphē is not physis, and the arithmetic is the fathers’, not Paul’s',
 ['01 · Paul had the word physis and used it (Romans 2:14; Galatians 4:8, “by nature are no gods”). In Philippians 2 he doesn’t.','02 · Many New Testament scholars read Philippians 2:6–8 as an Adam contrast: Adam, made in God’s image, grasped at equality with God; Christ did not grasp (J. D. G. Dunn, Christology in the Making, 1980). On that reading “form of God” says nothing about a second, divine nature.','03 · Read the next verses: “God also hath highly exalted him and given him a name… to the glory of God the Father” (2:9–11). The one exalted and given a name is distinct from the God who exalts and gives it.','04 · Galatians 4:8 even uses physis to say what is not God by nature.'],
 ['Philippians 2:6–11','Romans 2:14; Galatians 4:8','J. D. G. Dunn, Christology in the Making (1980)','Justinian, Edict on the Orthodox Faith (551)'],[],
 {quotes:[Q.php26,Q.php29]}),
 {optWho:'Their proof text 1',optLabel:'“Form of God / form of a servant = two natures (Phil 2:6–7)”'});

const homoioma=P(N(CR,
 '“Made in the likeness (homoiōma) of men” means he truly had human nature: Gregory Nazianzen (to Cledonius) and Chrysostom (“the likeness of a man is another man”) say likeness = nature. So Paul gives one nature in “form of God” and the other in “likeness of men”.',
 'Paul uses the same word elsewhere, and it can’t mean “nature” there: God sent His Son “in the likeness (homoiōma) of sinful flesh” (Romans 8:3). If likeness = nature, Christ had a sinful nature, which every Christian denies. So homoiōma means resemblance, not “second nature”. That’s exactly why Gregory had to fight heretics who read it as mere appearance: the word itself is ambiguous, and the dogma is decided by the fathers, not by Paul.',
 'Homoiōma in Romans 8:3 breaks the equation',
 ['01 · Same author, same word: Philippians 2:7 en homoiōmati anthrōpōn; Romans 8:3 en homoiōmati sarkos hamartias.','02 · If “likeness” forces “nature” in one verse, it forces “sinful nature” in the other.','03 · The video’s fallback (“even in the worst case, it still refers to the person Christ, so he’s in two natures”) assumes the conclusion: that the person in the form of God and the man are one subject with two natures. That’s the point under dispute.'],
 ['Philippians 2:7','Romans 8:3','Gregory Nazianzen, Letter 101 to Cledonius','John Chrysostom, Homily 7 on Philippians'],[],
 {quotes:[Q.rom83,Q.php26]}),
 {optWho:'Their proof text 2',optLabel:'“Likeness of men = human nature”'});

const john114=P(N(CR,
 'John 1:14: “the Word became flesh and dwelt in us” (en hēmin). Cyril explains: “flesh” means the whole human nature, and “in us” means he dwelt in our nature as a temple, not merely among us by relationship.',
 'Almost every translation renders eskēnōsen en hēmin “dwelt among us”: skēnoō is to pitch a tent, the tabernacle image of God’s presence among Israel. “In our nature” is Cyril’s theology, not John’s grammar. And notice Cyril’s own picture: the divine nature “making an indwelling in the temple” of the human nature. An indweller and the house he lives in are two things. That’s precisely the Nestorian model Cyril was fighting.',
 '“Among us”, and a temple isn’t its occupant',
 ['01 · Skēnē = tent; the verse echoes God’s dwelling (Shekinah) in the tabernacle. In Islam too, Allah’s word comes to people through a messenger without the messenger being God (4:171).','02 · The same John: “this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent” (17:3).'],
 ['John 1:14; 17:3','Cyril of Alexandria, Scholia on the Incarnation'],[],
 {quotes:[Q.jn114,Q.jn173,Q.q4171]}),
 {optWho:'Their proof text 3',optLabel:'“John 1:14: he dwelt in our nature”'});

const psalm19=P(N(CR,
 'Psalm 19:5 prophesied the two natures: “as a bridegroom coming out of his chamber” (his humanity) “and as a strong man (giant) to run a race” (his divinity). Augustine calls it his “twofold substance”; Ambrose says he is “of double form and twin nature”.',
 'Read the verse before it: “In them hath he set a tabernacle for the sun, which is as a bridegroom…” (19:4–5). The bridegroom and the strong man are similes for the sun rising and running its course. It’s an allegory laid on top of a nature psalm. If this is the Bible “explicitly” teaching two natures, the case is weak.',
 'The bridegroom is the sun',
 ['01 · Psalm 19:1–6 is about the heavens and the sun; 19:7–14 about the Torah.','02 · An allegory can illustrate a doctrine you already hold; it can’t prove it. That’s why the video has to say “the fathers understand”.'],
 ['Psalm 19:1–6','Augustine, Tractates on John','Ambrose, De Incarnatione'],[],
 {quotes:[Q.ps194]}),
 {optWho:'Their proof text 4',optLabel:'“Psalm 19:5: bridegroom + giant = two natures”'});

/* ---------- Coherence ---------- */
const trinityAnalogy=P(N(CR,
 'Union and distinction aren’t opposites. The Trinity is three persons united in one essence; likewise the two natures are united in one person. If you attack this, you attack the Trinity, and then your religion is Islam, not Christianity.',
 'That defends one disputed doctrine with another disputed doctrine: circular. And the analogy cuts the wrong way. In the Trinity, “one” is the nature and “three” are the persons. In Christ, “one” is the person and “two” are the natures. They’re mirror images, and each needs its own defence. As for “then your religion is Islam”: yes, that’s the point. One God and a human messenger is the coherent option.',
 'Explaining a mystery by a mystery',
 ['01 · Union with distinction is fine for parts (a body with organs) or relations (a team). The problem isn’t union; it’s contradictory predicates on one subject: created and uncreated, mortal and immortal, sleeping and never sleeping.','02 · Nobody objects that “three are united”. The objection is that one subject is both X and not-X. See Angle B.'],
 ['Qurʾān 4:171'],[],
 {quotes:[Q.q4171]}),
 {optWho:'Watch out · if they say',optLabel:'“Union and distinction work in the Trinity too”'});

const marriage=P(N(CR,
 'Marriage: “they twain shall be one flesh” (Mark 10:8), yet husband and wife remain two. So two can be one without ceasing to be two.',
 'Exactly: in marriage the two stay two persons. Two persons united in one flesh is the Nestorian picture of Christ (a divine person and a human person in moral union), which the Council of Ephesus condemned in 431. The analogy proves the opposite of what the video needs.',
 'Marriage = two persons. That’s Nestorius’ model',
 ['01 · Married people are “one” by relationship, not one subject. Nobody says “the couple” has one consciousness.','02 · Chalcedon needs one subject, not one relationship. The marriage analogy only gives a relationship.'],
 ['Mark 10:8','Council of Ephesus (431)'],[],
 {quotes:[Q.mk108]}),
 {optWho:'Watch out · if they say',optLabel:'“Two become one flesh in marriage”'});

const cyrilTrap=P(N(CR,
 'Cyril of Alexandria, the great anti-Nestorian father, taught two natures.',
 'Cyril’s signature formula is the opposite: “one incarnate nature of God the Word” (mia physis…). The Oriental Orthodox (Copts, Syriacs, Armenians, Ethiopians) still reject Chalcedon on Cyril’s authority. The formula itself came from an Apollinarian text passed off under Athanasius’ name. So the same father is quoted by both sides, and the churches split over him in 451 and never reunited.',
 'Christians quote Cyril for one nature and for two',
 ['01 · Chalcedon’s key change: “in two natures” (en dyo physesin) instead of Cyril-friendly “from two natures” (ek dyo).','02 · After 451 the empire enforced Chalcedon (the video’s first witness is Emperor Justinian); millions of Christians in Egypt and Syria refused it.','03 · If the Bible were “explicit”, why did the best-read bishops of the 5th century split into two communions over it?'],
 ['Cyril, Letters to Succensus','Council of Chalcedon (451)','Ps.-Athanasius (Apollinaris), Ad Jovianum'],[],
 {quotes:[Q.cyril]}),
 {optWho:'Watch out · if they say',optLabel:'“Cyril taught two natures”'});

const angA=P(N(CR,
 'So the Bible explicitly teaches two natures (Philippians 2, John 1:14, Psalm 19).',
 'None of these texts says “two natures”. Each needs a later father to supply the doctrine: morphē = physis (Chrysostom), homoiōma = physis (Gregory), “in us” = in our nature (Cyril), bridegroom = humanity (Augustine). Take away the patristic gloss and the texts say: Christ didn’t grasp at equality with God, was made like men, dwelt among us, and was exalted by God.',
 'Angle A · The proof texts need the fathers to say it',
 ['01 · “Explicit” would look like “Christ has two natures, divine and human”. No verse says it.','02 · The Bible does say, explicitly: “God is not a man” (Numbers 23:19).'],
 ['Philippians 2:6–11','John 1:14','Psalm 19:4–5','Numbers 23:19'],
 [morphe,homoioma,john114,psalm19,cyrilTrap],
 {quotes:[Q.num23]}),
 {optWho:'Angle A',optLabel:'“The Bible explicitly teaches two natures”'});

const angB=P(N(CR,
 'Fine: one person, two natures. Where is the contradiction?',
 'In the predicates. Each nature supplies a property, and both attach to the one person. Uncreated (God) and created (man). Immortal and died. Omniscient and didn’t know the Hour (Mark 13:32). Never sleeps and slept (Mark 4:38). Same subject, same time, F and not-F. Every way out either makes one side unreal (“qua”, Pawl) or makes two subjects.',
 'Angle B · Contradictory predicates on one subject',
 ['01 · Leibniz’s law: if the Son is identical to the man Jesus, whatever is true of one is true of the other.','02 · See the cards “Fully God and fully man? Why the qua answer breaks” and “God never sleeps, but Jesus slept”, which work through every reply in detail.'],
 ['Mark 4:38; 13:32','Jc Beall, The Contradictory Christ (OUP 2021)'],
 [trinityAnalogy,marriage],
 {facts:[['Created','and uncreated'],['Mortal','and immortal'],['Ignorant of the Hour','and omniscient'],['Slept','and never sleeps']]}),
 {optWho:'Angle B',optLabel:'“Where is the contradiction?”'});

const angC=P(N(CR,
 'Two natures don’t mean two persons: the human nature is the Son’s, not someone else’s.',
 'The Church’s own definition of person is “an individual substance of a rational nature” (Boethius, adopted by Aquinas). Christ’s human nature is individual and rational; it has its own mind and its own will (Constantinople III, 681). It fears death and prays “not my will, but thine” (Luke 22:42). By their own definition that is a person. So either two persons (Nestorius) or no real human mind (Apollinaris). Chalcedon wants both natures complete and only one person, and its own terms don’t allow it.',
 'Angle C · Two wills, two minds, and Boethius',
 ['01 · An-hypostasia (“the human nature never existed on its own”) describes its history, not what it is: a thinking, willing individual.','02 · A will that can ask for something other than God’s will is an agent.'],
 ['Boethius, Contra Eutychen 3','Third Council of Constantinople (681)','Luke 22:42'],[],
 {quotes:[Q.boeth,Q.lk2242]}),
 {optWho:'Angle C',optLabel:'“Two natures, but one person”'});

const angD=P(N(CR,
 'What’s the alternative?',
 'The one the Qurʾān gives, with no paradox: Jesus is like Adam, created by Allah’s word “Be” (3:59); a messenger and a word and spirit from Allah, not a second god (4:171); someone who ate food (5:75); whose first words were “I am the servant of Allah” (19:30). One nature, one person, one God above him. Every verse the Christian has to split between two natures fits him directly.',
 'Angle D · One nature, one person, one God',
 ['01 · Hunger, sleep, ignorance of the Hour, praying to God, being exalted by God: all read straightforwardly of a human prophet.','02 · “God is not a man” (Numbers 23:19) and “Allah is not like anything” (42:11) both stay true.'],
 ['Qurʾān 3:59; 4:171; 5:75; 19:30; 42:11','Numbers 23:19'],[],
 {quotes:[Q.q359,Q.q4171,Q.q575,Q.q1930]}),
 {optWho:'Angle D',optLabel:'“What’s the alternative?”'});

card('christianity/trinity/two-natures',{title:"Does the two-natures doctrine make sense?",k:"Christology · Tactical Playbook",blurb:"Chalcedon’s “one person in two natures”: the best biblical case, and why it fails.",
 claim:"Christ is one person in two natures, fully God and fully man, without confusion, change, division or separation (Chalcedon, 451). Christians say the Bible explicitly teaches it in Philippians 2:6–7.",
 tree:{they:"The Bible explicitly teaches two natures: Christ is “in the form of God” and took “the form of a servant”, “made in the likeness of men” (Philippians 2:6–7). Form = nature, likeness = nature: two natures in one Christ, as the fathers and Chalcedon say.",
  we:"We take the strongest version of this case and test it. It fails twice. Biblically, no verse says “two natures”: every proof text needs a fourth- or fifth-century father to turn morphē, homoiōma, “in us” or a psalm about the sun into the doctrine. Logically, one subject ends up with contradictory properties, and the Church’s own definition of “person” makes the human nature a second person. And Christians themselves split over it in 451.",
  more:Object.assign({h:"What Chalcedon claims, and the steelman we test",p:[
    "Chalcedon (451): one and the same Christ, “acknowledged in two natures, without confusion, without change, without division, without separation”.",
    "The steelman (YouTube, “Bible EXPLICITLY Teaches Two Natures in Jesus Christ”): (1) morphē = nature, from Chrysostom and Cyril, and Justinian’s “he is in each form”; (2) homoiōma = nature, from Gregory Nazianzen to Cledonius and Chrysostom; (3) John 1:14 “dwelt in us” = in our nature, from Cyril; (4) Psalm 19:5 bridegroom + giant, from Augustine and Ambrose; (5) union with distinction, illustrated by the Trinity and by marriage (Mark 10:8).",
    "Answers: Angle A takes the proof texts one by one; Angle B the contradictory predicates; Angle C the two wills and the definition of “person”; Angle D the alternative."],
   src:["Chalcedonian Definition (451)","Philippians 2:6–11",VID],
   facts:[['Council','Chalcedon 451'],['Formula','one person, two natures'],['Main proof text','Philippians 2:6–7'],['Split','Oriental Orthodox reject it to this day']],
   quotes:[Q.php26]},CR),
  next:[angA,angB,angC,angD]},
 sum:"No verse says “two natures”; the doctrine comes from the fathers’ readings of morphē, homoiōma, John 1:14 and even a psalm about the sun. Logically it pins created and uncreated, sleeping and never sleeping on one subject, and by the Church’s own definition of “person” it yields two. The Qurʾān’s Jesus (3:59; 5:75; 19:30) needs no such paradox."});
})();
