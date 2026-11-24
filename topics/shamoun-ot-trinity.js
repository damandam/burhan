/* Sam Shamoun, “Trinity in the Old Testament” (10-part YouTube series, ~26 h) — steelmanned and answered. 2026-11-24.
   Transcripts pulled from the playlist PLRnp-GXoCkBcjIPMH2R38vDbAJ4X4pqdp (auto-captions). New folder
   christianity/trinity/ot-trinity/shamoun-series: one explainer of HOW he links the texts (his chain), then one card per
   link, each with his strongest form first, then the answer, then the “weakest link”. Existing OT-Trinity cards
   (Angel of the LORD, Isaiah 63, Gen 1:26, Gen 18, Daniel 7, Divine council) are mounted into the folder. */
(()=>{
const PL='https://www.youtube.com/playlist?list=PLRnp-GXoCkBcjIPMH2R38vDbAJ4X4pqdp';
const VID=(n,id)=>({credit:'Steelman: Sam Shamoun, “Trinity in the Old Testament” pt. '+n+' (YouTube) · answer: Burhān',link:'https://www.youtube.com/watch?v='+id});
const V1=VID(1,'OI9mrezaWP8'),V4=VID(4,'ATOdxE4eRqE'),V5=VID(5,'y2c-TfNFqFg'),V7=VID(7,'d8rEJKor1X4'),V8=VID(8,'smrYQFxlXH4'),V9=VID(9,'N43qPeiKCVM'),V10=VID(10,'iFWtJqZmkWs');
const BR=(cr,they,we,h,p,src,quotes,label,next)=>({they,we,more:Object.assign({h,p:p||[],src:src||[],quotes:quotes||[]},cr),next:next||[],optWho:'Watch out · if he says',optLabel:label||they});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:{they:o.they,we:o.we,more:Object.assign({h:o.h,p:o.p||[],src:o.src||[],quotes:o.quotes||[],facts:o.facts},o.cr),next:o.next||[]},sum:o.sum}});
const K=(ref,en)=>({by:ref,en,ref:ref+' (KJV)'});
const S='christianity/trinity/ot-trinity/shamoun-series';

topic(S.split('/'),{title:"Sam Shamoun’s “Trinity in the Old Testament”, answered",k:"10-part series · steelman & rebuttal",blurb:"His chain of texts link by link, at its strongest, and where each link breaks."});

/* ---------- 0. How he links it ---------- */
cur.ex(S+'/how-he-links-it',{title:"How Shamoun builds the case: the chain",k:"Overview",blurb:"Eight links from Genesis to Nicaea, and the one that breaks first.",
 intro:"Over ten livestreams (about 26 hours) Sam Shamoun builds one cumulative argument. Each link is meant to feed the next: if the Angel of YHWH is YHWH yet distinct, and the NT says no one has seen the Father, then the YHWH who was seen must be the Son. Then Isaiah 63 adds the Spirit, and the Fathers and Nicaea confirm it. Here is the chain in its strongest form; each link has its own card with the answer.",
 visual:{kind:'steps',items:[
  ["1 · Angel = YHWH, yet distinct","Gen 16, 22, 31, 48; Ex 3; Judg 6, 13; Zech 3"],
  ["2 · My name is in him","Ex 23:20–23"],
  ["3 · The angel is God’s Face","Ex 33:2, 14–15"],
  ["4 · Isaiah 63: three persons","Angel of his presence + Holy Spirit + YHWH"],
  ["5 · No one has seen the Father","John 1:18; 6:46 → the seen YHWH is the Son"],
  ["6 · NT puts Jesus in the OT","Jude 5; 1 Cor 10:4, 9; Heb 11:26; John 12:41"],
  ["7 · The Son appears","Dan 3:25 · Josh 5:13–15 · Jacob (Gen 32; Hos 12) · Zech 2–3"],
  ["8 · Fathers & Nicaea","Justin, “63 Fathers”; Ehrman: Nicaea wasn’t forced"]]},
 cards:[
  {h:"His method",short:"Distinct-yet-one, built up from many texts.",p:["Shamoun’s core rule: when a figure is called YHWH and also distinguished from YHWH, you have two persons sharing one essence (“distinct and inseparable”).","Then he chains texts by shared words: angel → face → presence → “angel of his presence” → Spirit; and NT texts are used to name the OT figure as the Son."],more:{credit:V5.credit,link:PL}},
  {h:"Where it breaks first",short:"Link 3 contradicts Link 2, and Link 5 contradicts his own Link 8.",p:["Exodus 33 sends the angel because God will not go (33:2–3), then promises “my face shall go” when God relents (33:14). The angel and the Face are alternatives, not the same thing.","He argues “the Father is never seen, so the seen YHWH is the Son”, yet in the same series he says the Father appeared visibly in the cloud at the Transfiguration and admits the Fathers disagreed (Justin vs Augustine)."],more:{credit:V4.credit,link:V4.link}},
  {h:"The NT’s own answer",short:"Hebrews 1–2 and Acts 7 call the Sinai figure an angel and contrast the Son with all angels.",p:["“Unto which of the angels said he at any time, Thou art my Son?” (Hebrews 1:5). If the Son were the Angel of YHWH, the answer would be: that one.","Stephen: Moses was sent “by the hand of the angel which appeared to him in the bush” (Acts 7:35); the law was given “by the disposition of angels” (7:53; Galatians 3:19; Hebrews 2:2)."],more:{src:["Hebrews 1:5, 13; 2:2","Acts 7:30–38, 53","Galatians 3:19"]}},
  {h:"Where the series is",short:"Parts and main texts.",p:["Pt 1–3: plural texts (Gen 1:2, 1:26, 3:22), Genesis 16, 18, 22, 28–32, 48, Isaac typology (Heb 11:17).","Pt 4–6: Exodus 3, 23, 24, 33; Isaiah 63; Jude 5; 1 Cor 10; Heb 11; Joshua 5.","Pt 7: Bart Ehrman on Nicaea. Pt 8–10: Judges 6 and 13, Numbers 22, Zechariah 1–4, Daniel 3 and 7, Revelation 19."],more:{link:PL}}
 ],
 sum:"A chain is as strong as its weakest link: Exodus 33 separates the angel from God’s Face, Hebrews 1 separates the Son from every angel, and Shamoun himself concedes the Father can be seen.",
 credit:'Steelman: Sam Shamoun, “Trinity in the Old Testament” (10 parts) · answer: Burhān',link:PL});

/* ---------- Link 2: Exodus 23 ---------- */
card(S+'/exodus-23-my-name-is-in-him',{cr:V5,title:"Exodus 23:20–23: “my name is in him”",k:"Link 2",blurb:"An angel who can refuse to pardon sins and bears God’s name.",
 claim:"The angel of Exodus 23 bears YHWH’s own name, can pardon or refuse to pardon sin, and must be obeyed like God: he is a divine person distinct from the Father.",
 they:"Steelman: “Behold, I send an Angel before thee… beware of him, obey his voice, provoke him not; for he will not pardon your transgressions: for my name is in him” (23:20–21). Only God forgives sin; God’s name is His very being; the rabbis were so troubled by this verse that they invented Metatron. So the angel shares God’s nature.",
 we:"Read every clause: God sends him (an agent), he keeps the people “in the way” (a guide), obedience to him is obedience to God (“if thou shalt indeed obey his voice, and do all that I speak”, 23:22: the words are God’s). “My name is in him” means he carries God’s authority, as God puts His name in the Temple (Deuteronomy 12:5; 1 Kings 8:29). A building that bears God’s name isn’t God.",
 h:"Authority of the sender, not the sender’s essence",
 p:["01 · “He will not pardon” isn’t a claim to forgive: it warns that he will execute God’s judgment rather than overlook rebellion, as the destroying angel does (2 Samuel 24:16).","02 · The rabbis weren’t forced into a second god. The Talmud answers exactly this verse: “do not exchange Me for him”: you may not treat the angel as God (Sanhedrin 38b). That’s the opposite of Shamoun’s conclusion.","03 · Exodus 32:34 and 33:2–3: the angel is God’s substitute when He will not go Himself. See Link 3."],
 src:["Exodus 23:20–23; 32:34","Deuteronomy 12:5; 1 Kings 8:29","2 Samuel 24:16","Babylonian Talmud, Sanhedrin 38b"],
 quotes:[K('Exodus 23:22','But if thou shalt indeed obey his voice, and do all that I speak…'),K('Deuteronomy 12:5','…the place which the LORD your God shall choose out of all your tribes to put his name there…')],
 next:[BR(V5,"God’s name is His essence, so whoever has it is God.","Then the Temple is God, because God put His name there (1 Kings 8:29), and so is Israel, “called by my name” (2 Chronicles 7:14). In Hebrew usage the name in someone or something marks God’s ownership and authority.","The name marks ownership",[],["1 Kings 8:29","2 Chronicles 7:14"],[],"“The name is the essence”")],
 sum:"An agent sent by God, speaking God’s words, carrying God’s name as the Temple does; the Talmud reads it as “don’t exchange Me for him”."});

/* ---------- Link 3: Exodus 33 ---------- */
card(S+'/exodus-33-angel-is-gods-face',{cr:V5,title:"Exodus 33: “the angel is God’s Face”",k:"Link 3",blurb:"Distinct (he goes ahead) yet inseparable (he is the Face)?",
 claim:"In Exodus 33 the angel goes ahead while YHWH stays behind (distinct), and the angel is God’s Face/Presence (one in essence). God’s Face is uncreated, so the angel is uncreated: a second divine person.",
 they:"Steelman: 33:2 “I will send an angel before thee”; 33:14 “My presence (panim, face) shall go with thee”. Same chapter, same job: so the angel is the Face of God. The Face is uncreated, so the angel is God, yet he goes while YHWH stays: distinct and inseparable.",
 we:"Read the chapter in order. 33:2–3: “I will send an angel before thee… for I will not go up in the midst of thee.” The angel is sent instead of God. The people mourn (33:4); Moses intercedes (33:12–13); God relents: “My presence (panai) shall go” (33:14), and Moses: “If thy presence go not with me, carry us not up hence” (33:15). The angel was the downgrade; the Face is the reversal. Equating them erases the whole drama of the chapter.",
 h:"The text contrasts the angel with God’s Face",
 p:["01 · “Panim shall go” is a Hebrew idiom for going in person: Hushai advises Absalom “that thou go to battle in thine own person (paneka)” (2 Samuel 17:11). So “my face shall go” = I Myself will go, not a second person.","02 · If the Face were the angel, Moses’ plea in 33:15 would be pointless: the angel had already been promised in 33:2.","03 · Shamoun needs the angel to be both the replacement for God and God Himself. The chapter only allows one."],
 src:["Exodus 33:1–17","2 Samuel 17:11"],
 quotes:[K('Exodus 33:2–3','And I will send an angel before thee… for I will not go up in the midst of thee; for thou art a stiffnecked people.'),K('Exodus 33:14–15','And he said, My presence shall go with thee, and I will give thee rest. And he said unto him, If thy presence go not with me, carry us not up hence.'),K('2 Samuel 17:11','…and that thou go to battle in thine own person.')],
 next:[BR(V5,"Then Isaiah 63:9 settles it: “the angel of his presence saved them”.","The Hebrew text of Isaiah 63:9 has a well-known reading problem, and the Jewish translators of the Septuagint read it: “not an elder nor an angel, but he himself saved them” (LXX). Many modern versions follow that sense. On the LXX reading the verse denies that an angel saved them. See the Isaiah 63 card.","The Septuagint reads Isaiah 63:9 against him",[],["Isaiah 63:9 (MT and LXX)"],[{by:'Isaiah 63:9 (Septuagint)',en:'…not an elder nor an angel, but the Lord himself saved them (ou presbys oude angelos, all’ autos kyrios esōsen autous).',ref:'Isaiah 63:9 LXX'}],"“Isaiah 63:9: the angel of his presence”")],
 sum:"Exodus 33 sends the angel because God won’t go, then restores God’s own Face (“in person”, 2 Sam 17:11) as the answer to Moses’ plea: they are alternatives, not one being."});

/* ---------- Link 5: no one has seen the Father ---------- */
card(S+'/no-one-has-seen-the-father',{cr:V4,title:"“No one has seen the Father, so the YHWH who was seen is the Son” (John 1:18; 6:46)",k:"Link 5",blurb:"Moses, the elders and Isaiah saw God, but no one has seen the Father.",
 claim:"The OT says people saw YHWH (Exodus 24:10; Isaiah 6:1); John says no one has seen the Father (John 1:18; 6:46). So the YHWH who was seen is the Son, and John 12:41 says Isaiah saw Jesus’ glory.",
 they:"Steelman: “They saw the God of Israel” (Exodus 24:10); “I saw also the Lord sitting upon a throne” (Isaiah 6:1). But “No man hath seen God at any time” (John 1:18), “not that any man hath seen the Father” (6:46). Both are true only if the visible YHWH is the Son. John confirms: “These things said Esaias, when he saw his glory” (12:41).",
 we:"The argument needs the premise “the Father never appears in any visible form”. Shamoun himself rejects it: in the series he insists the Father appeared visibly in the bright cloud at the Transfiguration and spoke (Matthew 17:5), and he concedes the Fathers disagreed: Justin said the Father never appears; Augustine allowed the Father, Son or Spirit to be represented and held the theophanies were worked through created angels (De Trinitate II–III). Once the Father can appear in a cloud, “the seen YHWH must be the Son” collapses.",
 h:"His own premise is one he denies",
 p:["01 · The OT itself qualifies these sightings: “Thou canst not see my face: for there shall no man see me, and live” (Exodus 33:20), said by YHWH. If the Son is YHWH, no one saw the Son either. The Septuagint renders Exodus 24:10 “they saw the place where the God of Israel stood”.","02 · Isaiah 6 is a vision (“I saw… in the year that king Uzziah died”), and John 12:41 sits right after John quotes Isaiah 53 (12:38): Isaiah foresaw the Messiah’s glory, as Abraham “rejoiced to see my day” (John 8:56).","03 · Judges 13:22: “We shall surely die, because we have seen God”, said after seeing an angel (13:21). Seeing God’s messenger is spoken of as seeing God."],
 src:["Exodus 24:10 (MT & LXX); 33:20","Isaiah 6:1","John 1:18; 6:46; 8:56; 12:38–41","Matthew 17:5","Judges 13:21–22","Augustine, De Trinitate II–III","Justin Martyr, Dialogue 56–60"],
 quotes:[K('Exodus 33:20','And he said, Thou canst not see my face: for there shall no man see me, and live.'),K('Judges 13:22','And Manoah said unto his wife, We shall surely die, because we have seen God.'),K('John 8:56','Your father Abraham rejoiced to see my day: and he saw it, and was glad.')],
 next:[BR(V4,"Augustine and Justin both believed in the Trinity, so the disagreement doesn’t matter.","It matters for this argument. If Augustine is right that the theophanies were mediated by angels, then the Angel of YHWH isn’t the Son at all, and Link 1 to Link 7 lose their ground. Shamoun treats it as “agree to disagree”, but his whole chain stands on Justin’s side.","Augustine undercuts the chain",[],["Augustine, De Trinitate III.11"],[],"“The Fathers just disagreed”")],
 sum:"The chain needs “the Father is never seen”, which Shamoun himself denies (the Transfiguration cloud); Exodus 33:20 makes the seen figures mediated, and Augustine says angels."});

/* ---------- Link 6: Jude 5, 1 Cor 10, Heb 11 ---------- */
card(S+'/jude-5-and-1-corinthians-10',{cr:V4,title:"Jude 5, 1 Corinthians 10:4–9, Hebrews 11:26: “Jesus led Israel out of Egypt”",k:"Link 6",blurb:"Did the NT put the pre-incarnate Jesus in the wilderness?",
 claim:"The NT says Jesus saved Israel out of Egypt (Jude 5), the rock that followed them was Christ and they tempted Christ (1 Cor 10:4, 9), and Moses bore “the reproach of Christ” (Heb 11:26): the Son was YHWH of the Exodus.",
 they:"Steelman: Jude 5 in our best manuscripts reads “Jesus, having saved the people out of the land of Egypt, afterward destroyed them that believed not”. Paul: “that Rock was Christ… neither let us tempt Christ, as some of them also tempted” (1 Cor 10:4, 9). Hebrews: Moses esteemed “the reproach of Christ greater riches”. So the NT identifies the Exodus God with Jesus.",
 we:"Jude 5: the manuscripts split between “Lord” (Sinaiticus and most copies) and “Jesus” (Alexandrinus, Vaticanus). And Iēsous is also the Greek for Joshua, who brought Israel into the land: Hebrews 4:8 uses Iēsous for Joshua (KJV even prints “Jesus”). 1 Corinthians 10: Paul says himself these things were “examples” (typoi, 10:6, 11): a typology, like “this Agar is mount Sinai” (Galatians 4:25). A rock isn’t literally a person.",
 h:"Variants, Joshua, and typology",
 p:["01 · 1 Cor 10:9 also has a variant: “tempt Christ” vs “tempt the Lord”. Arguments resting on disputed readings are weak foundations for a doctrine.","02 · Hebrews 11:26 “the reproach of Christ” echoes Psalm 89:50–51, “the reproaches of thine anointed (mashiach)”: suffering for God’s anointed people and the promised Messiah, not meeting a pre-incarnate Jesus. The next verse says Moses endured “as seeing him who is invisible”, which confirms God is invisible.","03 · Hebrews 1:1–2: God spoke in the past “by the prophets” and only “in these last days” by a Son. Hebrews 2:2: the law was “spoken by angels”."],
 src:["Jude 5 (NA28 apparatus)","Hebrews 4:8; 1:1–2; 2:2; 11:26–27","1 Corinthians 10:1–11","Galatians 4:24–25","Psalm 89:50–51"],
 quotes:[K('Hebrews 4:8','For if Jesus (Iēsous = Joshua) had given them rest, then would he not afterward have spoken of another day.'),K('1 Corinthians 10:6','Now these things were our examples…'),K('Hebrews 1:1–2','God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, hath in these last days spoken unto us by his Son.')],
 sum:"Jude 5 is a split reading where Iēsous can be Joshua; Paul calls 1 Cor 10 “examples”; and Hebrews says God spoke by a Son only in the last days."});

/* ---------- Link 7a: Daniel 3 ---------- */
card(S+'/daniel-3-fourth-man',{cr:V9,title:"Daniel 3:25: the fourth man “like the Son of God”",k:"Link 7",blurb:"Jesus in the furnace?",
 claim:"The fourth man in the fire looked “like the Son of God”, and Nebuchadnezzar says God sent His angel: so the Angel is the Son of God, the pre-incarnate Jesus walking with his people in their trials.",
 they:"Steelman: “I see four men loose, walking in the midst of the fire… and the form of the fourth is like the Son of God” (3:25); “Blessed be the God… who hath sent his angel” (3:28). Son of God = the Angel = Jesus appearing in human form before the Incarnation.",
 we:"The words are a pagan king’s: the Aramaic is bar-elahin, “a son of the gods” (as most modern translations render it), the language of a polytheist. And the king explains it himself three verses later: God “hath sent his angel”. In the Hebrew Bible “sons of God” are angels (Job 1:6; 38:7). So the text says: an angel. Turning “an angel” into “the Son” needs Hebrews 1:5 to be false: “unto which of the angels said he at any time, Thou art my Son?”",
 h:"A son of the gods = an angel, in the king’s own words",
 p:["01 · Daniel’s angels are named and created: Gabriel (8:16; 9:21) and Michael “one of the chief princes” (10:13). Daniel 6:22: “My God hath sent his angel, and hath shut the lions’ mouths”. Same rescue formula, no one calls that Jesus.","02 · Shamoun’s devotional point (God walks with you through the fire) is fine. The Qurʾān tells of Ibrāhīm: “We said: O fire, be coolness and safety upon Ibrāhīm” (21:69). God saves without being in the fire."],
 src:["Daniel 3:25, 28; 6:22; 8:16; 10:13","Job 1:6; 38:7","Hebrews 1:5","Qurʾān 21:69"],
 quotes:[K('Daniel 3:28','Then Nebuchadnezzar spake, and said, Blessed be the God of Shadrach, Meshach, and Abednego, who hath sent his angel, and delivered his servants.'),K('Job 38:7','When the morning stars sang together, and all the sons of God shouted for joy?'),K('Hebrews 1:5','For unto which of the angels said he at any time, Thou art my Son, this day have I begotten thee?')],
 sum:"A pagan king saw “a son of the gods” and himself calls it God’s angel (3:28); in the OT sons of God are angels, and Hebrews 1:5 says no angel is the Son."});

/* ---------- Link 7b: Joshua 5 ---------- */
card(S+'/joshua-5-commander-of-the-army',{cr:V8,title:"Joshua 5:13–15: the commander of YHWH’s army",k:"Link 7",blurb:"Worship, holy ground, and sandals off.",
 claim:"Joshua worshipped the commander of YHWH’s army and was told to remove his sandals because the ground was holy, as at the burning bush: so he is YHWH, the pre-incarnate Son. Angels refuse worship (Revelation 22:8–9), he didn’t.",
 they:"Steelman: “Joshua fell on his face to the earth, and did worship… And the captain of the LORD’s host said unto Joshua, Loose thy shoe from off thy foot; for the place whereon thou standest is holy” (5:14–15). An angel would have refused, like in Revelation 22:9.",
 we:"He calls himself “captain of the host of the LORD” (5:14): a commander in YHWH’s army, not YHWH. Daniel names such a commander: Michael, “one of the chief princes” (10:13, 21). The verb (wayyishtachu) means to bow down; Abraham “bowed himself (wayyishtachu) to the people of the land” (Genesis 23:7), Abigail to David (1 Samuel 25:23). Ground becomes holy by God’s presence or purpose, as the Temple courts are holy, not because the speaker is God.",
 h:"A commander, a bow, and holy ground",
 p:["01 · Revelation 22:8–9 is a different act: John falls to worship, and the angel says “worship God”. That’s about religious worship; Joshua bowing to a heavenly commander is the ordinary honour given in the OT to superiors.","02 · Notice what follows: “the LORD said unto Joshua, See, I have given into thine hand Jericho” (6:2). YHWH speaks after the commander, in his own name."],
 src:["Joshua 5:13–6:2","Daniel 10:13, 21","Genesis 23:7","1 Samuel 25:23","Revelation 22:8–9"],
 quotes:[K('Joshua 5:14','And he said, Nay; but as captain of the host of the LORD am I now come.'),K('Genesis 23:7','And Abraham stood up, and bowed himself to the people of the land.')],
 sum:"A self-described captain of YHWH’s army, honoured with the same bow Abraham gave the Hittites; YHWH then speaks to Joshua in His own name (6:2)."});

/* ---------- Link 7c: Jacob ---------- */
card(S+'/jacob-wrestles-god-genesis-32',{cr:V8,title:"Jacob wrestles “God” (Genesis 32; Hosea 12; Genesis 48:15–16)",k:"Link 7",blurb:"“I have seen God face to face”.",
 claim:"Jacob wrestled a man and said “I have seen God face to face”; Hosea calls him the Angel; and Jacob blesses “the God which fed me… the Angel which redeemed me”: the Angel is God, the pre-incarnate Son.",
 they:"Steelman: “Jacob called the name of the place Peniel: for I have seen God face to face” (Gen 32:30). Hosea: “he had power with God: yea, he had power over the angel” (12:3–4). Genesis 48:15–16 puts God and the Angel in parallel, as one who redeems and blesses.",
 we:"Hosea supplies the identity: “he had power over the angel, and prevailed” (12:4). An angel, and Jacob beat him. If this were God the Son, a man out-wrestled God. Gideon says the same thing after meeting an angel: “I have seen an angel of the LORD face to face” (Judges 6:22); Manoah: “we have seen God” (13:22). “Seeing God face to face” is how people describe a direct encounter with His messenger.",
 h:"Hosea calls him an angel, and Jacob prevailed",
 p:["01 · Genesis 48:15–16 is Hebrew poetic parallelism: God who shepherded me, the angel who redeemed me, may he bless the boys. Paired lines don’t make two things one; Jacob invokes God and the angel God sent to protect him (Genesis 31:11–13; 28:12).","02 · “Redeem” (gāʾal) is used of human kinsmen (Ruth 4:4–6). It doesn’t require divinity."],
 src:["Genesis 32:24–30; 48:15–16; 31:11–13","Hosea 12:3–4","Judges 6:22; 13:22","Ruth 4:4–6"],
 quotes:[K('Hosea 12:4','Yea, he had power over the angel, and prevailed: he wept, and made supplication unto him.'),K('Judges 6:22','Alas, O Lord GOD! for because I have seen an angel of the LORD face to face.')],
 sum:"Hosea says Jacob prevailed over an angel; “face to face with God” is how Gideon and Manoah describe meeting an angel too."});

/* ---------- Link 7d: Zechariah ---------- */
card(S+'/zechariah-2-3-yhwh-sent-me',{cr:V9,title:"Zechariah 2–3: “YHWH of hosts has sent me” and the angel who removes sin",k:"Link 7",blurb:"YHWH sent by YHWH? An angel who forgives?",
 claim:"In Zechariah 2:8–11 YHWH says “YHWH of hosts has sent me”, so YHWH sends YHWH; in 3:4 the Angel of YHWH takes away Joshua’s iniquity, which only God can do.",
 they:"Steelman: “For thus saith the LORD of hosts; After the glory hath he sent me… and ye shall know that the LORD of hosts hath sent me” (2:8–9). One YHWH sent by another. And the Angel says to Joshua: “I have caused thine iniquity to pass from thee” (3:4).",
 we:"“Ye shall know that the LORD of hosts hath sent me” is Zechariah’s own prophetic formula: he uses it of himself in 4:9 (“the hands of Zerubbabel… and thou shalt know that the LORD of hosts hath sent me unto you”) and in 6:15. It’s the messenger authenticating his message. And removing sin by God’s word is done by a seraph in Isaiah 6:7: “thine iniquity is taken away, and thy sin purged”, as God’s agent.",
 h:"The prophet’s formula and Isaiah’s seraph",
 p:["01 · In 3:2 the angel himself defers to God: “The LORD rebuke thee, O Satan”. Jude 9 says Michael used the same words, as an angel who “durst not bring against him a railing accusation”.","02 · 3:4–5: the angel gives orders to “those that stood before him”: a heavenly court scene with a presiding angel."],
 src:["Zechariah 2:8–11; 3:1–5; 4:9; 6:15","Isaiah 6:6–7","Jude 9"],
 quotes:[K('Zechariah 4:9','…and thou shalt know that the LORD of hosts hath sent me unto you.'),K('Isaiah 6:7','And he laid it upon my mouth, and said, Lo, this hath touched thy lips; and thine iniquity is taken away, and thy sin purged.'),K('Zechariah 3:2','And the LORD said unto Satan, The LORD rebuke thee, O Satan.')],
 sum:"“The LORD of hosts hath sent me” is the prophet’s own formula (4:9; 6:15), and a seraph removes sin in Isaiah 6:7: agency, not a second YHWH."});

/* ---------- Isaac typology ---------- */
card(S+'/isaac-typology-genesis-22',{cr:V4,title:"Genesis 22: Isaac, the “only begotten”, and the third day",k:"Typology",blurb:"Does a type prove a divine Son?",
 claim:"Isaac is the father’s monogenēs, beloved, offered on the third day and received back “in a figure” (Hebrews 11:17–19): the Father-Son relationship of the Trinity is foreshadowed in Genesis 22.",
 they:"Steelman: Hebrews 11:17 calls Isaac monogenēs, like Jesus in John 3:16; the sacrifice happens on the third day (Gen 22:4); Abraham received him back from the dead “in a figure” (Heb 11:19). The Trinity’s Father and Son are pictured here.",
 we:"A type compares two different things. Isaac is a man and not God, so the type points to a human son offered by his father. Hebrews itself says “in a figure” (en parabolē). And monogenēs for Isaac, who wasn’t Abraham’s only son (Ishmael was older), shows the word means “unique, special”, not “eternally begotten of the divine essence”.",
 h:"A figure points to a human son",
 p:["01 · Abraham’s faith, not Isaac’s nature, is the point of Hebrews 11:17–19.","02 · In Islam the same story shows submission (37:102–107): the son is ransomed “with a great sacrifice”."],
 src:["Genesis 22:1–14","Hebrews 11:17–19","Qurʾān 37:102–107"],
 quotes:[K('Hebrews 11:19','Accounting that God was able to raise him up, even from the dead; from whence also he received him in a figure.')],
 sum:"A type is a figure, and Isaac, the “monogenēs” who had an older brother, is a human son; it says nothing about a divine one."});

/* ---------- Link 8: Fathers & Ehrman ---------- */
card(S+'/fathers-and-ehrman-on-nicaea',{cr:V7,title:"Justin’s “63 Fathers” and Bart Ehrman on Nicaea",k:"Link 8",blurb:"Nicaea wasn’t a close vote and Constantine didn’t force it.",
 claim:"Dozens of early Fathers (Justin first) identify the Angel of YHWH as the Son; and Bart Ehrman says Constantine didn’t force Nicaea, the vote wasn’t close, and everyone there believed Jesus was God. So the Trinity wasn’t invented in 325.",
 they:"Steelman: Shamoun posts “63 Church Father quotes on the Angel of the Lord” and plays Ehrman: “Constantine did not make the decision… everybody at the council knew he was God… it was not a close vote.”",
 we:"Both points prove less than he needs. Justin’s angel-Logos is “another God and Lord” beside the Father, “numerically distinct” (Dialogue 56, 128): a subordinate second god, the Middle-Platonist view later replaced by Nicaea and rejected by Augustine. And Ehrman’s actual thesis is the opposite of Shamoun’s: Jesus’ divinity developed over time, from early “exaltation” to later “incarnation” Christology (How Jesus Became God, 2014). At Nicaea everyone called Jesus divine, Arius included; the fight was whether the Son is created. That the question had to be voted on shows it wasn’t settled from the OT.",
 h:"Divine ≠ co-equal God, and Ehrman’s thesis",
 p:["01 · In Shamoun’s own clip Ehrman goes on: Constantine’s son Constantius embraced Arianism. In 359 the councils of Rimini and Seleucia adopted Arian-leaning creeds; Jerome: “the whole world groaned and was astonished to find itself Arian” (Dialogue against the Luciferians 19).","02 · A quote list from Fathers who held a subordinate Logos supports the subordinationist reading of the OT angel, which no Trinitarian accepts today.","03 · See the card “No Trinity before Nicaea”."],
 src:["Justin Martyr, Dialogue with Trypho 56, 128","B. D. Ehrman, How Jesus Became God (2014)","Jerome, Dialogue against the Luciferians 19","Councils of Rimini and Seleucia (359)"],
 quotes:[{by:'Justin Martyr, Dialogue 56',en:'…there is said to be another God and Lord subject to the Maker of all things.',ref:'Justin, Dialogue with Trypho 56'},{by:'Jerome, Dialogue against the Luciferians 19',en:'The whole world groaned, and was astonished to find itself Arian.',ref:'Jerome, Altercatio Luciferiani et Orthodoxi 19'}],
 sum:"Justin’s angel is a subordinate “other God”, not Nicene; Ehrman argues divinity developed, and after Nicaea the empire went Arian for decades."});

/* ---------- mount existing OT cards into the series ---------- */
const OT='christianity/trinity/ot-trinity/';
(window.MOUNTS=window.MOUNTS||[]).push(
 {from:OT+'angel-of-the-lord',to:S,key:'link-1-angel-of-the-lord'},
 {from:OT+'isaiah-63-holy-spirit',to:S,key:'link-4-isaiah-63'},
 {from:OT+'genesis-1-26-let-us-make',to:S,key:'plurals-genesis-1-26'},
 {from:OT+'genesis-18-three-visitors',to:S,key:'genesis-18'},
 {from:OT+'son-of-man-daniel-7-gospels',to:S,key:'daniel-7'},
 {from:OT+'divine-council-two-powers-ugarit',to:S,key:'two-powers'},
 {from:'christianity/church/no-trinity-before-nicaea',to:S,key:'no-trinity-before-nicaea'}
);
})();
