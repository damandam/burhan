/* Tactical Debate Playbook: “God never sleeps — Jesus slept” — 2026-11-24.
   New card christianity/trinity/jesus-slept, built from Noel’s debate notes (conversation with another chatbot):
   the sleep syllogism with verses, “natures don’t sleep — persons do”, the qua/transitivity move, De Morgan on
   “unconscious”, person = rational agent, the two-monitor (two-minds) model and its two bugs, the three exits
   (redefine sleep / kenosis / mystery), and every steelman counter (Morris, Pawl, Boethius, Leo’s Tome,
   communicatio idiomatum, anaesthesia, hypostasis-as-owner, Psalm 44:23) with the answer to each. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const P=(node,props)=>Object.assign(node,props);
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const CR={credit:'Burhān · debate notes (Noel) · steelman of Chalcedonian & analytic Christology'};

const Q={
 ps121:{by:'Psalm 121:3–4',en:'He will not suffer thy foot to be moved: he that keepeth thee will not slumber. Behold, he that keepeth Israel shall neither slumber nor sleep.',ref:'Psalm 121:3–4 (KJV)'},
 isa40:{by:'Isaiah 40:28',en:'Hast thou not known? hast thou not heard, that the everlasting God, the LORD, the Creator of the ends of the earth, fainteth not, neither is weary?',ref:'Isaiah 40:28 (KJV)'},
 mk438:{by:'Mark 4:38',en:'And he was in the hinder part of the ship, asleep on a pillow: and they awake him, and say unto him, Master, carest thou not that we perish?',ref:'Mark 4:38 (KJV); cf. Matthew 8:24; Luke 8:23'},
 jn46:{by:'John 4:6',en:'Jesus therefore, being wearied with his journey, sat thus on the well.',ref:'John 4:6 (KJV)'},
 q2255:{by:'Qurʾān 2:255 (Āyat al-Kursī)',ar:'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',en:'Allah: there is no god except Him, the Ever-Living, the Sustainer of all. Neither drowsiness nor sleep overtakes Him.',ref:'Qurʾān 2:255'},
 q575:{by:'Qurʾān 5:75',ar:'مَّا الْمَسِيحُ ابْنُ مَرْيَمَ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ وَأُمُّهُ صِدِّيقَةٌ ۖ كَانَا يَأْكُلَانِ الطَّعَامَ',en:'The Messiah, son of Mary, was nothing but a messenger; messengers passed away before him. His mother was a woman of truth. They both used to eat food.',ref:'Qurʾān 5:75'},
 q2558:{by:'Qurʾān 25:58',ar:'وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ',en:'And rely upon the Ever-Living who does not die.',ref:'Qurʾān 25:58'},
 q5038:{by:'Qurʾān 50:38',ar:'وَلَقَدْ خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ وَمَا مَسَّنَا مِن لُّغُوبٍ',en:'We created the heavens and the earth and what is between them in six days, and no weariness touched Us.',ref:'Qurʾān 50:38'},
 m179:{by:'Ṣaḥīḥ Muslim 179 (Abū Mūsā al-Ashʿarī)',ar:'إِنَّ اللَّهَ عَزَّ وَجَلَّ لَا يَنَامُ وَلَا يَنْبَغِي لَهُ أَنْ يَنَامَ',en:'Indeed Allah, Mighty and Majestic, does not sleep, and it does not befit Him to sleep.',ref:'Muslim 179'},
 heb13:{by:'Hebrews 1:3',en:'…upholding all things by the word of his power…',ref:'Hebrews 1:3 (KJV); cf. Colossians 1:17 “by him all things consist”'},
 mal36:{by:'Malachi 3:6',en:'For I am the LORD, I change not.',ref:'Malachi 3:6 (KJV); cf. Hebrews 13:8'},
 num23:{by:'Numbers 23:19',en:'God is not a man, that he should lie; neither the son of man, that he should repent.',ref:'Numbers 23:19 (KJV); cf. Hosea 11:9 “for I am God, and not man”'},
 ps4423:{by:'Psalm 44:23',en:'Awake, why sleepest thou, O Lord? arise, cast us not off for ever.',ref:'Psalm 44:23 (KJV); cf. Psalm 78:65'},
 mk1332:{by:'Mark 13:32',en:'But of that day and that hour knoweth no man, no, not the angels which are in heaven, neither the Son, but the Father.',ref:'Mark 13:32 (KJV)'},
 lk2242:{by:'Luke 22:42',en:'Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done.',ref:'Luke 22:42 (KJV)'},
 boeth:{by:'Boethius, Contra Eutychen et Nestorium 3 (the classical Christian definition of “person”)',en:'Persona est naturae rationalis individua substantia: a person is an individual substance of a rational nature.',ref:'Boethius, Contra Eutychen 3 (c. 512 CE); adopted by Aquinas, ST I q.29 a.1'},
 leo:{by:'Leo I, Tome to Flavian (449), endorsed at Chalcedon',en:'Each form does what is proper to it, in communion with the other: the Word performing what belongs to the Word, and the flesh carrying out what belongs to the flesh.',ref:'Leo, Tomus ad Flavianum 4'},
 php27:{by:'Philippians 2:6–7',en:'Who, being in the form of God, thought it not robbery to be equal with God: but made himself of no reputation (ekenōsen, “emptied himself”), and took upon him the form of a servant…',ref:'Philippians 2:6–7 (KJV)'}
};

/* ---------- Watch-out traps ---------- */
const trapPsalm=P(N(CR,
 'The Old Testament also says God sleeps: “Awake, why sleepest thou, O Lord?” (Psalm 44:23; 78:65). So sleep language for God is fine.',
 'Those are laments in poetry: the psalmist feels abandoned and cries out as if God were asleep. The same Psalter answers him literally: “he that keepeth Israel shall neither slumber nor sleep” (121:4). And you can’t have it both ways: if God’s “sleep” in Psalm 44 is a figure of speech, Jesus’ sleep in Mark 4:38 is not. He was in the stern, on a cushion, and they had to wake him.',
 'A poetic complaint is not a literal state',
 ['01 · Psalm 44 is a national lament; the “sleep” is how it feels to the sufferer, not a claim about God.','02 · Psalm 121 is didactic and explicit: the Keeper of Israel neither slumbers nor sleeps.','03 · Mark 4:38 is narrative, with physical detail (stern, cushion, waking him): the Gospel means real sleep.'],
 ['Psalm 44:23; 78:65; 121:4','Mark 4:38'],[],
 {quotes:[Q.ps4423,Q.ps121,Q.mk438]}),
 {optWho:'Watch out · if they say',optLabel:'“The Psalms say God sleeps too”'});

const trapCommunicatio=P(N(CR,
 'By the communicatio idiomatum we may say “God slept”, just as the councils say “God was born” and Cyril says “the Word suffered impassibly”.',
 'That is a rule about how to speak, not a solution. It lets you attach a human predicate to the divine person. Good: then the divine person slept. Now say what that means. Either he was unconscious, and a God who loses consciousness isn’t the God of Psalm 121, or he wasn’t, and “he slept” is just a label on someone fully awake. “Suffered impassibly” is the same contradiction in a single phrase.',
 'Communication of idioms moves the problem, it doesn’t remove it',
 ['01 · The rule (Aquinas, ST III q.16) says: what is true of either nature may be said of the one person.','02 · So the one person, the Son, slept, and the one person, the Son, never sleeps. Same subject, same time, contradictory predicates.','03 · Every way of keeping both brings back one of the two heresies: the person really slept (he stopped being divinely conscious), or he only seemed to (Docetism).'],
 ['Aquinas, Summa Theologiae III q.16 a.4–5','Cyril of Alexandria, Third Letter to Nestorius'],[]),
 {optWho:'Watch out · if they say',optLabel:'“Communicatio idiomatum: we can say ‘God slept’”'});

const trapPawl=P(N(CR,
 'Timothy Pawl (In Defense of Conciliar Christology, 2016): “Christ slept” is true if he has a nature that sleeps; “Christ never sleeps” is true if he has a nature that doesn’t. So both are true and there’s no contradiction.',
 'This is the strongest analytic defence, and it works only by changing what “sleeps” means. On these truth-conditions “X slept” no longer means X was asleep; it means X owns something that was asleep. Then the Son “slept” while he himself was fully awake the entire time. That’s exactly the “pretending” you were trying to avoid. And by the same rule, “Jesus did not know the Hour” and “Jesus knew the Hour” are both true (Mark 13:32). The words have stopped saying anything.',
 'Reduplicative truth-conditions redefine the verb',
 ['01 · Pawl’s move: a predicate applies to Christ in virtue of a nature he has. He accepts that “passible” and “impassible” are both true of Christ.','02 · Ordinary meaning: “Peter slept” means Peter was not conscious for a while. Pawl’s meaning: Peter has a nature that slept. Those aren’t the same claim.','03 · Leibniz’s law (indiscernibility of identicals) doesn’t care about vocabulary: if Jesus was really asleep and God was never asleep, Jesus ≠ God; if “asleep” is redefined so that both hold, Jesus was never really asleep.'],
 ['T. Pawl, In Defense of Conciliar Christology (OUP 2016)','Mark 13:32'],[],
 {quotes:[Q.mk1332]}),
 {optWho:'Watch out · if they say',optLabel:'“Pawl: true in virtue of a nature, so no contradiction”'});

const trapAnaesthesia=P(N(CR,
 'Personhood isn’t consciousness. Under anaesthesia or in dreamless sleep you have no conscious thought, yet you remain the same person. So a person can lack consciousness in one respect.',
 'Correct, and it proves our point. Under anaesthesia the whole of you is unconscious: one agent, dormant. That’s ¬C for the one subject. The Christian needs something different: one subject that is fully unconscious and fully conscious at the same moment. The anaesthesia case has one stream that switches off; the Incarnation, on their model, has two streams, one off and one on. That’s not one person sleeping; it’s a person awake next to a person asleep.',
 'One dormant agent ≠ one agent both awake and asleep',
 ['01 · Dreamless sleep: the subject is unconscious. That’s exactly what sleep means.','02 · If the Son was like that on the boat, the Son was unconscious, and the Keeper of Israel slumbered.','03 · If the Son was not like that, he wasn’t asleep the way you are asleep. Then Mark 4:38 describes only a body.'],
 ['Psalm 121:4','Mark 4:38'],[],
 {quotes:[Q.ps121]}),
 {optWho:'Watch out · if they say',optLabel:'“Under anaesthesia you’re still a person”'});

const trapHypostasis=P(N(CR,
 'The hypostasis isn’t a mind; it’s the concrete owner or “mode of existence” (tropos hyparxeōs) that has the natures. Mind, will and consciousness belong to the nature. So two minds don’t make two persons.',
 'Then strip away mind, will, consciousness and knowledge and say what is left. Critics call it a bare peg: a “who” with no thinking, no willing, no awareness of its own. A “who” that never knows or chooses anything isn’t a who. And it clashes with Christianity’s own classical definition: Boethius, adopted by Aquinas, defines a person as “an individual substance of a rational nature”. Jesus’ human nature is rational and individual. So by their own definition it’s a person.',
 'Boethius’ definition turns against the two-minds model',
 ['01 · Person = individual substance of a rational nature (Boethius; Aquinas ST I q.29 a.1).','02 · Christ’s human nature has its own intellect and will (Constantinople III, 681), fears death and prays “not my will but thine” (Luke 22:42).','03 · The reply “but it never existed on its own” (an-hypostasia) doesn’t change what it is: an individual rational nature that thinks and wills. The definition is about what something is, not about its history.'],
 ['Boethius, Contra Eutychen 3','Aquinas, ST I q.29 a.1; III q.2 a.2','Third Council of Constantinople (681)','Luke 22:42'],[],
 {quotes:[Q.boeth,Q.lk2242]}),
 {optWho:'Watch out · if they say',optLabel:'“The person is the owner, not the mind”'});

const trapFirstPerson=P(N(CR,
 'Think of one “I” having two streams of experience at once, like VR plus the real room, or (Morris) a divine mind with full access to a human mind that has no access back. One first-person perspective, two contents.',
 'Ask the one “I” a simple question on the boat: are you aware right now? If yes (through the divine stream), then you are not asleep; you are watching your body sleep. If no, then the divine stream isn’t yours. The VR case works because the one viewer is awake the whole time; the headset never makes the viewer unconscious. That’s the picture of someone pretending to sleep, not someone asleep.',
 'One viewer, two feeds = the viewer never sleeps',
 ['01 · Thomas Morris’ “asymmetric access” (The Logic of God Incarnate, 1986): divine mind sees all of the human mind; human mind can’t see the divine.','02 · Then who is the “I”? If it’s the one with full access, that “I” is never ignorant (Mark 13:32) and never asleep (Mark 4:38). The human stream is a live feed it watches.','03 · If instead the human stream has its own “I”, we have two subjects: Nestorianism.'],
 ['T. V. Morris, The Logic of God Incarnate (Cornell 1986)','R. Swinburne, The Christian God (OUP 1994)'],[]),
 {optWho:'Watch out · if they say',optLabel:'“One I, two streams (Morris / VR)”'});

const trapKenosis=P(N(CR,
 'Kenosis: the Son “emptied himself” (Philippians 2:7) and laid aside active omniscience and divine consciousness during his earthly life. So on the boat he was really, fully asleep.',
 'This is the most honest exit: it admits your De Morgan point. But the cost is fatal. If for 33 years the Son wasn’t omniscient, wasn’t conscious as God and didn’t uphold all things, then for 33 years he lacked what makes God God. Something that can stop being omniscient never was essentially omniscient. And who was “upholding all things by the word of his power” (Hebrews 1:3) while he slept? Chalcedon and Leo’s Tome reject it; Malachi 3:6 says “I change not”.',
 'Kenosis buys real sleep by giving up real divinity',
 ['01 · Philippians 2:7 says he took the form of a servant. Classical exegesis: by adding humanity, not by subtracting deity. That’s why Chalcedon has “without change”.','02 · Essential attributes can’t be switched off. A God who can stop being all-knowing is a being who happens to know everything sometimes.','03 · The Qurʾān’s point exactly: what is subject to sleep, tiredness and hunger is created (2:255; 5:75; 50:38).'],
 ['Philippians 2:6–7','Chalcedonian Definition (451): “without confusion, without change”','Hebrews 1:3; Colossians 1:17','Malachi 3:6; Hebrews 13:8'],[],
 {quotes:[Q.php27,Q.heb13,Q.mal36]}),
 {optWho:'Watch out · if they say',optLabel:'“Kenosis: he laid aside divine awareness”'});

const trapMystery=P(N(CR,
 'In the end it’s a mystery. We can’t model how one person has two natures, but that doesn’t make it a contradiction.',
 'A mystery is something we can’t fully understand. A contradiction is something that can’t be true. “One subject is, at the same time and in the same respect, conscious and not conscious” isn’t beyond reason; it’s against reason. Calling it a mystery doesn’t change the logical form. Christian thinkers themselves admit the Trinity can’t be shown by reason (Aquinas, ST I q.32 a.1); Islam’s creed, by contrast, contains no claim that God is both X and not-X.',
 'Mystery ≠ licence for contradiction',
 ['01 · Fine to say: we don’t know how Allah’s hearing works. Not fine: Allah both hears and doesn’t hear at the same time in the same respect.','02 · If one premise of a belief is a contradiction, everything follows from it (ex falso quodlibet). Nothing can then count against it, which is why it can’t be a revealed truth.','03 · Aquinas warns that trying to prove the Trinity by reason exposes the faith to the mockery of unbelievers (ST I q.32 a.1).'],
 ['Aquinas, Summa Theologiae I q.32 a.1'],[]),
 {optWho:'Watch out · if they say',optLabel:'“It’s a mystery, not a contradiction”'});

const trapTuQuoque=P(N(CR,
 'Muslims have the same problem: Allah has hands, “descends” in the last third of the night, and Muslims say His attributes are real but unlike ours. Why can’t we say Jesus’ sleep is real but unlike ours?',
 'Because Islam never predicates two contradictory states of Allah. Allah’s attributes are affirmed “as befits Him”, with no likeness (42:11); none of them is the negation of another. Sleep is explicitly negated of Allah, absolutely (2:255; Muslim 179). The Christian claim is different in kind: it affirms of the same subject the very state the Bible denies of God. Prophets in Islam sleep, eat and tire, and that’s no problem, because no Muslim says a prophet is God.',
 'Unknown modality ≠ contradiction',
 ['01 · “Allah descends” + “we don’t know how” = unknown mode, no contradiction.','02 · “The Son sleeps” + “the Son never sleeps” = same predicate affirmed and denied.','03 · The Qurʾān uses Jesus’ human needs as the proof itself: “they both used to eat food” (5:75).'],
 ['Qurʾān 42:11; 2:255; 5:75','Muslim 179'],[],
 {quotes:[Q.q2255,Q.m179,Q.q575]}),
 {optWho:'Watch out · if they say',optLabel:'“Muslims have the same problem with Allah’s attributes”'});

/* ---------- Angles ---------- */
const angA=P(N(CR,
 '“Jesus slept qua man, and was awake qua God.” Different respects, no contradiction.',
 'Run identity through it. Jesus-qua-man is Jesus. Jesus-qua-God is Jesus. By transitivity, Jesus-qua-man = Jesus-qua-God: the same subject. So “asleep qua man, awake qua God” either (a) qualifies only the predicate, and then the one subject was awake in the only sense that matters, so his sleep was play-acting (Docetism), or (b) splits the subject into two, one asleep and one awake (Nestorianism). There is no third option.',
 'Angle A · The qua move and transitivity',
 ['01 · “Qua” works when it picks out different parts: my foot is asleep, my brain is awake. That’s part/whole, and no one denies it.','02 · Sleep isn’t a property of a part. It’s a state of the subject: the who is unconscious.','03 · The early Church condemned both exits: Docetism (he only seemed human) and Nestorianism (two subjects in Christ, condemned at Ephesus 431). See also the card “Fully God and fully man? Why the qua answer breaks”.'],
 ['Council of Ephesus (431)','J. C. Beall, The Contradictory Christ (OUP 2021): a Christian logician concedes the qua move fails and accepts that Christ is a true contradiction'],
 [trapCommunicatio,trapPawl]),
 {optWho:'Angle A',optLabel:'“He slept qua man, not qua God”'});

const angB=P(N(CR,
 'He was unconscious in his human mind and conscious in his divine mind. Unconscious in one, conscious in the other: no clash.',
 'Take “unconscious” literally: no conscious awareness in that subject. Let Cd = divine consciousness, Ch = human consciousness. “Jesus is unconscious” = ¬(Cd ∨ Ch), which by De Morgan = ¬Cd ∧ ¬Ch. But Cd is true (God never sleeps). So “Jesus was unconscious” is false. To keep it, they must redefine sleep as just ¬Ch ∧ Cd. And that is not sleep: it’s a fully conscious subject whose body is resting.',
 'Angle B · De Morgan: ¬(Cd ∨ Ch) ⟺ ¬Cd ∧ ¬Ch',
 ['01 · A negative state (unconscious, ignorant, dead) about the whole subject negates every way that subject could have the positive state.','02 · Part/whole analogies fail: consciousness isn’t a spatial part. You can’t say part of “I” is totally unaware while another part of “I” is totally aware without making two I’s.','03 · Same logic for Mark 13:32: “the Son does not know the Hour” = ¬(Kd ∨ Kh) = ¬Kd ∧ ¬Kh. Yet Kd is supposed to be true.'],
 ['Mark 4:38; 13:32','Psalm 121:4'],
 [trapAnaesthesia],
 {facts:[['Unconscious','¬(Cd ∨ Ch)'],['De Morgan','¬Cd ∧ ¬Ch'],['Christian claim','Cd is always true'],['Result','“Jesus was unconscious” is false, or Cd fails']],quotes:[Q.mk438,Q.mk1332]}),
 {optWho:'Angle B',optLabel:'“Unconscious in one mind, conscious in the other”'});

const angC=P(N(CR,
 'He has two minds and two wills, but he’s still one person.',
 'A person is a rational agent: something that thinks, knows and wills. Two complete rational minds, each with its own will (Constantinople III, 681), praying to each other in Gethsemane (“not my will but thine”), is two rational agents. And the Church’s own classical definition agrees: Boethius’ “individual substance of a rational nature” fits Christ’s human nature exactly.',
 'Angle C · Two minds + two wills = two agents',
 ['01 · Two wills: the human will shrinks from the cup, the divine will chooses it (Luke 22:42). If something can fear, ask and submit, it’s a subject.','02 · Square and triangle: being square excludes being triangular. Being unable to sleep excludes sleeping. These aren’t “distinct but compatible” like eyes and ears; they’re contradictory in the same category (conscious states of a subject).','03 · Answer to “the human mind is just an instrument the Son uses”: an instrument doesn’t think. A mind that thinks its own thoughts isn’t an instrument but an agent.'],
 ['Third Council of Constantinople (681): two natural wills','Luke 22:42','Boethius, Contra Eutychen 3'],
 [trapHypostasis],
 {quotes:[Q.lk2242,Q.boeth,Q.leo]}),
 {optWho:'Angle C',optLabel:'“Two minds, still one person”'});

const angD=P(N(CR,
 'Picture one user and two monitors: a divine screen that never switches off, and a human screen that goes black when he sleeps.',
 'Then ask: where is the user looking from? Bug 1 · if the user looks through the divine screen, the human screen is redundant; he never experiences sleep, he watches it. That’s play-acting (Docetism). Bug 2 · if the user sits in a chair in front of both screens, who is in the chair? A third thing behind the divine mind and the human mind, deciding what to feel: a homunculus. Now you have three, not one.',
 'Angle D · The two-monitor model and its two bugs',
 ['01 · Bug 1 (redundant screen): watching a live stream of sleep isn’t sleeping.','02 · Bug 2 (third chair): the “person” becomes a pilot behind two minds, an infinite regress.','03 · Orthodox theologians therefore drop the picture and call it a mystery (Angle E). And a monitor doesn’t think; a human mind does. If the second screen generates its own fears and prayers, it’s a second user.'],
 ['T. V. Morris, The Logic of God Incarnate','R. Swinburne, The Christian God'],
 [trapFirstPerson],
 {facts:[['Divine screen','always on, all-knowing'],['Human screen','black during sleep'],['Bug 1','user looks through divine screen → no real sleep'],['Bug 2','user in a third chair → homunculus']]}),
 {optWho:'Angle D',optLabel:'“Two monitors, one user”'});

const angE=P(N(CR,
 'So what’s left for the Christian?',
 'Three exits, and each costs something essential. Exit 1 · redefine sleep (¬Ch ∧ Cd): then the one person was awake throughout, so the sleep was only bodily. Exit 2 · kenosis: he really slept, but only because he stopped being divinely conscious, so for that time he lacked deity. Exit 3 · mystery: keep both and stop asking. The Islamic answer has no cost: Jesus was one human person, a prophet, who got tired and slept, and Allah never sleeps.',
 'Angle E · The three exits, and the one that costs nothing',
 ['01 · Exit 1 costs real humanity (Docetism by another name).','02 · Exit 2 costs real divinity (immutability, omniscience, Hebrews 1:3).','03 · Exit 3 costs coherence.','04 · The Qurʾān: “The Messiah, son of Mary, was nothing but a messenger… they both used to eat food” (5:75). A being with needs is a creature; the Ever-Living is untouched by drowsiness or sleep (2:255).'],
 ['Qurʾān 5:75; 2:255; 25:58','Muslim 179'],
 [trapKenosis,trapMystery,trapTuQuoque],
 {quotes:[Q.q575,Q.q2255,Q.q2558]}),
 {optWho:'Angle E',optLabel:'“What exits does the Christian have?”'});

/* ---------- Opening ---------- */
const opening=P(N(CR,
 'Natures don’t sleep, persons do. Jesus’ human nature slept; his divine nature didn’t. No problem.',
 'Agreed: natures don’t act, persons act. That’s the classical rule (actiones sunt suppositorum). So the question is about the person: did the one person, the eternal Son, sleep? The Christian must say yes (he is the only person in Christ). But the eternal Son is God, and God “neither slumbers nor sleeps”. Same subject, same time: slept and never sleeps. Moving the predicate to a nature doesn’t help, because natures don’t sleep; you just said so.',
 'Opening move 01 · Natures don’t sleep, persons do. So who slept?',
 ['01 · Their own principle: actions and states belong to the person (Aquinas, ST III q.19 a.1: “actiones sunt suppositorum”).','02 · There is only one person in Christ, the divine Son (Chalcedon).','03 · So the divine Son slept. Psalm 121:4 says God never does. Either Psalm 121 is false, or the Son is not the God of Psalm 121.','04 · If they now say “the human nature slept”, they contradict the premise that natures don’t act. If they say “the person slept qua man”, go to Angle A.'],
 ['Aquinas, Summa Theologiae III q.19 a.1','Chalcedonian Definition (451)','Psalm 121:4','Mark 4:38'],
 [angA,angB,angC,angD,angE],
 {quotes:[Q.ps121,Q.mk438]}),
 {optWho:'Opening move 01',optLabel:'“Natures don’t sleep, persons do”'});

card('christianity/trinity/jesus-slept',{title:"God never sleeps, but Jesus slept",k:"Christology · Tactical Playbook",blurb:"Psalm 121:4 vs Mark 4:38: natures, persons, qua, De Morgan and two minds.",
 claim:"Jesus slept (Mark 4:38), but God never sleeps (Psalm 121:4; Isaiah 40:28; Qurʾān 2:255). So Jesus is not God, unless the Christian can explain how one person both slept and never sleeps.",
 tree:{they:"Jesus is fully God and fully man. He slept as a man, and as God he upheld the universe. Where’s the problem?",
  we:"The problem is Leibniz’s law: if A is identical to B, everything true of A is true of B. The Bible says God never sleeps (Psalm 121:4) and never grows weary (Isaiah 40:28). The Gospels say Jesus was weary (John 4:6) and slept so deeply that his disciples had to wake him in a storm (Mark 4:38). P1: God never sleeps. P2: Jesus slept. C: Jesus is not God. The Qurʾān makes the same argument: what needs food and sleep is a creature (5:75); “neither drowsiness nor sleep overtakes Him” (2:255).",
  more:Object.assign({h:"The sleep syllogism",p:[
    "P1 · God never sleeps or slumbers (Psalm 121:3–4), never faints or grows weary (Isaiah 40:28). In Islam the same: Āyat al-Kursī (2:255); “Allah does not sleep and it does not befit Him to sleep” (Muslim 179); “no weariness touched Us” (50:38).",
    "P2 · Jesus grew weary (John 4:6) and slept, physically, on a cushion in the stern, until woken (Mark 4:38; Matthew 8:24; Luke 8:23).",
    "C · By the indiscernibility of identicals, Jesus is not identical to God.",
    "The Christian has to deny P1 for Jesus, or reinterpret P2, or reinterpret “is”. Each reply is answered below, steelmanned as strongly as its best defenders put it."],
   src:["Psalm 121:3–4","Isaiah 40:28","John 4:6","Mark 4:38; Matthew 8:24; Luke 8:23","Qurʾān 2:255; 5:75; 50:38","Muslim 179"],
   facts:[['P1','God never sleeps (Ps 121:4; Q 2:255)'],['P2','Jesus slept (Mk 4:38)'],['Rule','Leibniz’s law: a = b → same properties'],['C','Jesus ≠ God']],
   quotes:[Q.ps121,Q.isa40,Q.mk438,Q.jn46,Q.q2255,Q.m179]},CR),
  next:[opening,trapPsalm]},
 sum:"One subject can’t both sleep and never sleep. Every Christian exit either makes the sleep unreal (qua, Pawl, two monitors), splits Christ into two (two agents), drops his deity (kenosis) or gives up on coherence (mystery). The Islamic answer has no cost: Jesus was a human prophet who slept, and Allah never sleeps."});
})();
