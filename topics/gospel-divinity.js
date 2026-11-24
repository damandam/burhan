/* Jesus’ divinity, gospel by gospel — 2026-11-24.
   New folder christianity/jesus/by-gospel with Mark · Matthew · Luke · John. Each holds the “divinity claims”
   made from that Gospel: 18 new debate cards (forgiving sins, Lord of the Sabbath, calming the storm, egō eimi
   on the water, the trial, “beloved Son”, Matt 28:19, 28:18/11:27, 18:20, Luke 1:35, 1:43, John 1:18, 5:18, 14:9,
   17:5, 5:23, “came down from heaven”, 14:28) plus the existing cards mounted in (window.MOUNTS, applied in
   index.html after MOVES, so one card shows in both places). */
(()=>{
const CR={credit:'Burhān · gospel-by-gospel guide (Bible text, standard Christian arguments, replies)'};
const BR=(they,we,h,p,src,quotes,label)=>({they,we,more:Object.assign({h,p:p||[],src:src||[],quotes:quotes||[]},CR),next:[],optWho:'Watch out · if they say',optLabel:label||they});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:{they:o.they,we:o.we,more:Object.assign({h:o.h,p:o.p||[],src:o.src||[],quotes:o.quotes||[],facts:o.facts},CR),next:o.next||[]},sum:o.sum}});
const V=(ref,en)=>({by:ref,en,ref:ref+' (KJV)'});
const VQ=(ref,ar,en)=>({by:'Qurʾān '+ref,ar,en,ref:'Qurʾān '+ref});
const G='christianity/jesus/by-gospel';

topic(G.split('/'),{title:"Jesus’ divinity, gospel by gospel",k:"Proof-texts by book",blurb:"Mark, Matthew, Luke and John: every passage used to make Jesus God, and the answer."});
topic((G+'/mark').split('/'),{title:"Mark",k:"Earliest Gospel · c. 70",blurb:"No virgin birth, no pre-existence, no “I and the Father are one”. What Mark’s divinity claims really say."});
topic((G+'/matthew').split('/'),{title:"Matthew",k:"c. 80–90",blurb:"Immanuel, worship, “all authority”, the Trinitarian formula and Jesus’ presence."});
topic((G+'/luke').split('/'),{title:"Luke",k:"c. 80–90",blurb:"“Son of God” from the conception, “mother of my Lord”, and the parallels from Mark."});
topic((G+'/john').split('/'),{title:"John",k:"Latest Gospel · c. 90–110",blurb:"Where nearly all the strong texts are: John 1:1, 1:18, 5:18, 8:58, 10:30, 14:9, 17:5, 20:28."});

/* ======================= MARK ======================= */
card(G+'/mark/forgives-sins',{title:"Mark 2:5–12: Jesus forgives sins",k:"Mark 2 · Matt 9 · Luke 5",blurb:"“Who can forgive sins but God only?”",
 claim:"Only God can forgive sins; Jesus forgave the paralytic’s sins; so Jesus is God.",
 they:"The scribes said it themselves: “Who can forgive sins but God only?” (Mark 2:7). Jesus forgave sins, so he claimed to be God.",
 we:"That’s the scribes’ objection, not Jesus’ claim. His answer is: “that ye may know that the Son of man hath power on earth to forgive sins” (2:10): power he was given, as a man. Matthew spells out how the crowd understood it: “they glorified God, which had given such power unto men” (Matt 9:8).",
 h:"Authority given to men",
 p:["01 · Son of man (Aramaic bar enash) means a human being; the point is that a man on earth was given this authority.","02 · Matthew 9:8: the crowd praised God for giving such power “unto men”, plural.","03 · Jesus passes the same authority on: “Whose soever sins ye remit, they are remitted unto them” (John 20:23). The disciples aren’t God.","04 · Prophets announced God’s forgiveness too: Nathan to David, “The LORD also hath put away thy sin” (2 Samuel 12:13)."],
 src:["Mark 2:5–12","Matthew 9:2–8","Luke 5:20–26","John 20:23","2 Samuel 12:13"],
 quotes:[V('Mark 2:10','But that ye may know that the Son of man hath power on earth to forgive sins…'),V('Matthew 9:8','But when the multitudes saw it, they marvelled, and glorified God, which had given such power unto men.'),V('John 20:23','Whose soever sins ye remit, they are remitted unto them; and whose soever sins ye retain, they are retained.')],
 next:[BR("He also read their hearts (Mark 2:8), which only God can do.","God reveals hidden things to prophets: Elisha knew what the Syrian king said in his bedchamber (2 Kings 6:12), and Peter knew Ananias’ secret (Acts 5:3). See the card “Mark 2: Jesus reads hearts”.","Prophets are shown hidden things",[],["2 Kings 6:12","Acts 5:3"],[],"“He read their hearts”")],
 sum:"He forgave by authority given to a man (2:10), the crowds praised God for giving it “unto men” (Matt 9:8), and he gave the same authority to his disciples (John 20:23)."});

card(G+'/mark/lord-of-the-sabbath',{title:"Mark 2:27–28: “Lord of the Sabbath”",k:"Mark 2:28",blurb:"God made the Sabbath, so its Lord must be God?",
 claim:"God instituted the Sabbath; Jesus calls himself Lord of the Sabbath; so he is God.",
 they:"Only the one who made the Sabbath can be its Lord. Jesus says “the Son of man is Lord also of the sabbath”.",
 we:"Read the verse before: “The sabbath was made for man, and not man for the sabbath. Therefore the Son of man is Lord also of the sabbath” (2:27–28). The “therefore” makes it about humanity: because the Sabbath serves man, the Son of man has authority over how it’s kept. His proof is David, a man, eating the shewbread (2:25–26).",
 h:"A human argument, with human examples",
 p:["01 · His examples are David and his men (Mark 2:25–26) and the priests who work on the Sabbath and are blameless (Matthew 12:5). None is God.","02 · A prophet ruling on how the law is kept doesn’t make him the lawgiver."],
 src:["Mark 2:23–28","Matthew 12:1–8"],
 quotes:[V('Mark 2:27–28','And he said unto them, The sabbath was made for man, and not man for the sabbath: therefore the Son of man is Lord also of the sabbath.')],
 sum:"The “therefore” ties his lordship over the Sabbath to the Sabbath being made for man, argued from David and the priests."});

card(G+'/mark/calms-the-storm',{title:"Mark 4:39–41: Jesus calms the storm",k:"Mark 4 · Matt 8 · Luke 8",blurb:"Only YHWH stills the sea (Psalm 107:29)?",
 claim:"Psalm 107:29 says God calms the storm; Jesus calmed the storm; so Jesus is God.",
 they:"“He maketh the storm a calm” (Psalm 107:29). Jesus rebuked the wind and the sea obeyed. The disciples asked “What manner of man is this?”",
 we:"God works miracles through prophets: “Moses stretched out his hand over the sea; and the LORD caused the sea to go back” (Exodus 14:21); Elijah struck the Jordan and it parted (2 Kings 2:8). And Jesus himself tells his disciples they can do the same by faith: say to a mountain “be thou cast into the sea” and it will happen (Mark 11:23).",
 h:"Miracles by faith, as with Moses and Elijah",
 p:["01 · Right after the storm Jesus asks them “how is it that ye have no faith?” (4:40): the miracle is an act of faith in God.","02 · The question “What manner of man is this?” (Matthew 8:27) is about an extraordinary man.","03 · Even in this very scene he had just been asleep in the stern (4:38). See “God never sleeps, but Jesus slept”."],
 src:["Mark 4:35–41","Matthew 8:23–27","Exodus 14:21","2 Kings 2:8","Mark 11:22–23"],
 quotes:[V('Exodus 14:21','And Moses stretched out his hand over the sea; and the LORD caused the sea to go back by a strong east wind all that night.'),V('Mark 11:23','Whosoever shall say unto this mountain, Be thou removed, and be thou cast into the sea; and shall not doubt in his heart… he shall have whatsoever he saith.'),V('Mark 4:38','And he was in the hinder part of the ship, asleep on a pillow.')],
 sum:"God parted the sea through Moses and the Jordan through Elijah; Jesus said faith can throw a mountain into the sea. And he’d just been asleep in the boat."});

card(G+'/mark/walks-on-water-ego-eimi',{title:"Mark 6:48–50: walking on water and “I am” (egō eimi)",k:"Mark 6 · Matt 14 · John 6",blurb:"The divine name on the sea?",
 claim:"Only God treads on the sea (Job 9:8), and Jesus said “egō eimi”, the divine “I AM” of Exodus 3:14.",
 they:"Job 9:8 says God alone “treadeth upon the waves of the sea”. Jesus walked on the sea and said “egō eimi”: I AM.",
 we:"“Egō eimi” is ordinary Greek for “it’s me”. The terrified disciples thought they were seeing a ghost (6:49); he says “Be of good cheer: it is I; be not afraid.” The man born blind says exactly the same words, “egō eimi”, “I am he” (John 9:9). And Peter walked on the water too (Matthew 14:29).",
 h:"“It is I” and Peter on the water",
 p:["01 · Exodus 3:14 in the Greek Septuagint is “egō eimi ho ōn” (I am the one who is); the divine name is “ho ōn”, not plain “egō eimi”.","02 · Peter walking on the water at Jesus’ word shows a miracle given by God, not a divine attribute (Matthew 14:28–29).","03 · Matthew’s ending “they worshipped him… thou art the Son of God” (14:33) uses proskyneō; see “The disciples bowed to Jesus”."],
 src:["Mark 6:45–52","Matthew 14:22–33","John 9:9","Exodus 3:14 (LXX)","Job 9:8"],
 quotes:[V('Mark 6:50','Be of good cheer: it is I (egō eimi); be not afraid.'),V('John 9:9','Some said, This is he: others said, He is like him: but he said, I am he (egō eimi).'),V('Matthew 14:29','And when Peter was come down out of the ship, he walked on the water, to go to Jesus.')],
 sum:"“Egō eimi” is “it’s me” (the healed blind man says it too), and Peter also walked on water."});

card(G+'/mark/trial-son-of-man-clouds',{title:"Mark 14:61–64: “I am… the Son of man coming with the clouds”",k:"Mark 14 · Matt 26 · Luke 22",blurb:"The high priest calls it blasphemy.",
 claim:"At his trial Jesus claimed to be the divine Son of Man of Daniel 7, and the high priest condemned him for blasphemy: so he claimed to be God.",
 they:"Asked “Art thou the Christ, the Son of the Blessed?”, Jesus said “I am: and ye shall see the Son of man sitting on the right hand of power, and coming in the clouds of heaven.” The high priest tore his clothes: blasphemy.",
 we:"“Christ” and “Son of the Blessed” are messianic titles (Psalm 2). Sitting “on the right hand of power” means sitting beside God, not being Him: “The LORD said unto my lord, Sit thou at my right hand” (Psalm 110:1). In Daniel 7:13 the one like a son of man is brought before the Ancient of Days and given dominion (7:14): two figures, one giving and one receiving.",
 h:"Right hand of God = next to God",
 p:["01 · Luke’s version: “Hereafter shall the Son of man sit on the right hand of the power of God” (22:69). Of God.","02 · The trial was built on false witnesses whose testimony didn’t agree (Mark 14:56).","03 · When accused of blasphemy elsewhere, Jesus’ own defence is that Scripture calls humans “gods” (John 10:33–36; Psalm 82:6). See also the Daniel 7 card."],
 src:["Mark 14:55–64","Luke 22:69","Psalm 110:1","Daniel 7:13–14","John 10:33–36"],
 quotes:[V('Psalm 110:1','The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool.'),V('Daniel 7:13–14','…one like the Son of man came with the clouds of heaven, and came to the Ancient of days… And there was given him dominion, and glory, and a kingdom.'),V('Luke 22:69','Hereafter shall the Son of man sit on the right hand of the power of God.')],
 sum:"He claims to be the Messiah who will sit at God’s right hand and receive dominion from the Ancient of Days: beside God, given by God."});

card(G+'/mark/beloved-son-son-of-god',{title:"Mark 1:11 & 15:39: “my beloved Son”, “the Son of God”",k:"Son of God title",blurb:"Does “Son of God” mean God the Son?",
 claim:"The Father calls Jesus “my beloved Son” and the centurion confesses “Truly this man was the Son of God”: Jesus is the divine Son.",
 they:"At the baptism God says “Thou art my beloved Son” (1:11), and at the cross the centurion says “Truly this man was the Son of God” (15:39).",
 we:"In the Bible “son of God” is a title for those close to God, never a claim to be God: Israel is “my son, even my firstborn” (Exodus 4:22); the king hears “Thou art my Son; this day have I begotten thee” (Psalm 2:7); Adam is “the son of God” (Luke 3:38); peacemakers will be “called the children of God” (Matthew 5:9).",
 h:"A title of closeness",
 p:["01 · The baptism voice quotes Psalm 2:7, the coronation psalm of Israel’s king.","02 · Luke reports the centurion’s words as “Certainly this was a righteous man” (Luke 23:47).","03 · Mark’s centurion says “this man”: the confession is about a man."],
 src:["Mark 1:11; 15:39","Luke 23:47","Exodus 4:22","Psalm 2:7","Luke 3:38","Matthew 5:9"],
 quotes:[V('Mark 15:39','Truly this man was the Son of God.'),V('Luke 23:47','Certainly this was a righteous man.'),V('Exodus 4:22','Thus saith the LORD, Israel is my son, even my firstborn.')],
 sum:"“Son of God” is used for Israel, kings, Adam and peacemakers; Luke even renders the centurion’s confession as “a righteous man”."});

/* ======================= MATTHEW ======================= */
card(G+'/matthew/baptismal-formula-28-19',{title:"Matthew 28:19: “in the name of the Father, and of the Son, and of the Holy Ghost”",k:"The Trinitarian formula",blurb:"The only triadic formula in the Gospels.",
 claim:"Jesus commanded baptism in one name of Father, Son and Spirit: the Trinity from his own mouth.",
 they:"“Baptizing them in the name (singular) of the Father, and of the Son, and of the Holy Ghost” (28:19). One name, three persons: the Trinity.",
 we:"Three things listed together isn’t three persons who are one God. Paul says Israel “were all baptized unto Moses” (1 Corinthians 10:2) without making Moses God. And the apostles never baptize with this formula in Acts: always “in the name of Jesus Christ” (Acts 2:38; 8:16; 10:48; 19:5).",
 h:"A list isn’t an ontology, and Acts never uses it",
 p:["01 · 1 Timothy 5:21: “I charge thee before God, and the Lord Jesus Christ, and the elect angels”: three named together, the third is angels.","02 · Eusebius of Caesarea, before Nicaea, repeatedly quotes the verse as “Go and make disciples of all nations in my name” (e.g. Demonstratio Evangelica 3.6). F. C. Conybeare (1901) argued the triadic form is later.","03 · Honest steelman: every surviving manuscript of Matthew has the triadic form, and the Didache (7.1, early 2nd c.) uses it. Even so, it names three without saying they are one God, and Acts shows the earliest practice."],
 src:["Matthew 28:19","Acts 2:38; 8:16; 10:48; 19:5","1 Corinthians 10:2","1 Timothy 5:21","Eusebius, Demonstratio Evangelica 3.6","Didache 7.1","F. C. Conybeare, ZNW 2 (1901)"],
 quotes:[V('Matthew 28:19','Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.'),V('Acts 2:38','Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins.'),V('1 Corinthians 10:2','And were all baptized unto Moses in the cloud and in the sea.')],
 sum:"Naming three isn’t declaring three-in-one (1 Tim 5:21 names God, Christ and angels); Acts always baptizes in Jesus’ name, and Eusebius quotes “in my name”."});

card(G+'/matthew/all-authority-given-28-18',{title:"Matthew 28:18 & 11:27: “All power is given unto me”",k:"Given authority",blurb:"Omnipotence, or authority received?",
 claim:"Jesus has all authority in heaven and earth and the Father has delivered all things to him: only God has all power.",
 they:"“All power is given unto me in heaven and in earth” (28:18); “All things are delivered unto me of my Father” (11:27). That’s omnipotence.",
 we:"Read the verbs: given, delivered. God can’t be given power; He has it. Someone who receives authority depends on the one who gives it. That’s exactly Daniel 7:14, where dominion “was given” to the son of man by the Ancient of Days. See the card “Received authority”.",
 h:"Received ≠ intrinsic",
 p:["01 · Matthew 9:8: God “had given such power unto men”.","02 · Matthew 20:23: “to sit on my right hand… is not mine to give, but it shall be given to them for whom it is prepared of my Father.” Limits on his authority.","03 · John 5:30: “I can of mine own self do nothing.”"],
 src:["Matthew 28:18; 11:27; 20:23; 9:8","Daniel 7:14","John 5:30"],
 quotes:[V('Matthew 28:18','All power is given unto me in heaven and in earth.'),V('Matthew 20:23','…but to sit on my right hand, and on my left, is not mine to give, but it shall be given to them for whom it is prepared of my Father.')],
 sum:"Power that is “given” and “delivered” by the Father is received authority, with limits Jesus himself names (Matt 20:23)."});

card(G+'/matthew/present-where-two-or-three-18-20',{title:"Matthew 18:20 & 28:20: “There am I in the midst of them”",k:"Omnipresence?",blurb:"Present wherever believers gather.",
 claim:"Jesus is present wherever two or three gather and with the disciples always: omnipresence, a divine attribute.",
 they:"“Where two or three are gathered together in my name, there am I in the midst of them” (18:20); “I am with you alway” (28:20). Only God is everywhere.",
 we:"Paul says the same about himself: “absent in body, but present in spirit… when ye are gathered together, and my spirit” (1 Corinthians 5:3–4); “though I be absent in the flesh, yet am I with you in the spirit” (Colossians 2:5). Presence in spirit with a gathering is said of Paul, who isn’t God.",
 h:"Paul uses the same language of himself",
 p:["01 · The rabbis said the Shekhinah dwells among even two who sit and study Torah (Mishnah Avot 3:2, 3:6): the presence is God’s, among people gathered for His word.","02 · 28:20 is a promise of support to his messengers, like God to Moses and Joshua: “as I was with Moses, so I will be with thee” (Joshua 1:5)."],
 src:["Matthew 18:20; 28:20","1 Corinthians 5:3–4","Colossians 2:5","Mishnah Avot 3:2, 3:6","Joshua 1:5"],
 quotes:[V('1 Corinthians 5:3–4','For I verily, as absent in body, but present in spirit… when ye are gathered together, and my spirit…'),V('Colossians 2:5','For though I be absent in the flesh, yet am I with you in the spirit.')],
 sum:"Paul claims the same spiritual presence among gathered believers (1 Cor 5:3–4; Col 2:5); it signals support, not omnipresence."});

/* ======================= LUKE ======================= */
card(G+'/luke/son-of-god-by-conception-1-35',{title:"Luke 1:35: “therefore… shall be called the Son of God”",k:"Virgin birth",blurb:"Son of God because of the conception.",
 claim:"Luke shows Jesus’ divine sonship from his conception by the Holy Spirit.",
 they:"The angel says the Holy Ghost will come upon Mary, “therefore also that holy thing which shall be born of thee shall be called the Son of God” (1:35).",
 we:"Look at the “therefore”: Luke grounds the title in the miraculous conception, not in an eternal begetting before creation. And Luke ends Jesus’ genealogy with “Adam, which was the son of God” (3:38), who had neither father nor mother. The Qurʾān makes the same point: “The example of Jesus with Allah is like that of Adam: He created him from dust, then said to him ‘Be’, and he was” (3:59).",
 h:"Created by God’s word, like Adam",
 p:["01 · Mark and John have no virgin birth; Matthew and Luke tell it without saying it makes Jesus God.","02 · A miraculous creation points to God’s power, not to the creature’s divinity: Adam had less (no mother) and is not God.","03 · The Qurʾān affirms the virgin birth (19:20–21) and Jesus’ first words: “I am the servant of Allah” (19:30)."],
 src:["Luke 1:35; 3:38","Qurʾān 3:59; 19:20–30"],
 quotes:[V('Luke 1:35','…therefore also that holy thing which shall be born of thee shall be called the Son of God.'),V('Luke 3:38','…which was the son of Seth, which was the son of Adam, which was the son of God.'),VQ('3:59','إِنَّ مَثَلَ عِيسَىٰ عِندَ اللَّهِ كَمَثَلِ آدَمَ ۖ خَلَقَهُ مِن تُرَابٍ ثُمَّ قَالَ لَهُ كُن فَيَكُونُ','The example of Jesus with Allah is like that of Adam: He created him from dust, then said to him “Be”, and he was.')],
 sum:"Luke ties “Son of God” to the conception (“therefore”) and calls Adam “son of God” too; the Qurʾān draws the Adam parallel (3:59)."});

card(G+'/luke/mother-of-my-lord-1-43',{title:"Luke 1:43 & 2:11: “the mother of my Lord”, “Christ the Lord”",k:"Kyrios",blurb:"Elizabeth calls Mary the mother of her Lord.",
 claim:"Elizabeth calls Mary “the mother of my Lord” and the angels announce “Christ the Lord”: kyrios is God’s title, so Jesus is God and Mary the Mother of God.",
 they:"“Whence is this to me, that the mother of my Lord should come to me?” (1:43). “A Saviour, which is Christ the Lord” (2:11). Lord = YHWH in the Greek Old Testament.",
 we:"Kyrios means “lord, master” and is used of people all the time. “My Lord” here is the language of Psalm 110:1, “The LORD said unto my Lord (adoni)”: God speaking to the Messiah. Luke himself explains it in Acts: “God hath made that same Jesus… both Lord and Christ” (Acts 2:36). A Lord made by God isn’t God.",
 h:"Made Lord and Christ by God",
 p:["01 · In 2:11 “Christ the Lord” pairs the title with “Christ”, Messiah.","02 · See the card “Jesus is called ‘Lord’ (kyrios)”."],
 src:["Luke 1:43; 2:11","Psalm 110:1","Acts 2:36"],
 quotes:[V('Acts 2:36','…God hath made that same Jesus, whom ye have crucified, both Lord and Christ.'),V('Psalm 110:1','The LORD said unto my Lord, Sit thou at my right hand.')],
 sum:"“My Lord” is the Messiah of Psalm 110:1, and Luke says God “made” Jesus Lord and Christ (Acts 2:36)."});

/* ======================= JOHN ======================= */
card(G+'/john/john-1-18-monogenes-theos',{title:"John 1:18: “the only begotten God”?",k:"Textual variant",blurb:"Monogenēs theos or monogenēs huios.",
 claim:"The oldest manuscripts of John 1:18 read “the only-begotten God”, so John calls Jesus God.",
 they:"P66, P75, Sinaiticus and Vaticanus read monogenēs theos, “the only begotten God, which is in the bosom of the Father”.",
 we:"Start with the first half of the same verse: “No man hath seen God at any time.” Jesus was seen by thousands. So the God no one has seen is not Jesus. And the manuscripts are divided: many read monogenēs huios, “the only begotten Son” (Alexandrinus and most later copies), which is what the KJV prints.",
 h:"The verse itself separates the unseen God from the one who makes Him known",
 p:["01 · Even with “theos”, the verse distinguishes him from God, “in the bosom of the Father”, and says he “declared” God: a revealer, not the One revealed.","02 · John repeats: “No man hath seen God at any time” (1 John 4:12); “whom no man hath seen, nor can see” (1 Timothy 6:16).","03 · An “only begotten god” next to God is two gods, which no Christian wants."],
 src:["John 1:18","1 John 4:12","1 Timothy 6:16","NA28 apparatus on John 1:18"],
 quotes:[V('John 1:18','No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him.'),V('1 Timothy 6:16','…whom no man hath seen, nor can see.')],
 sum:"“No man hath seen God”, yet Jesus was seen; the readings are split, and even “theos” stands beside the Father as the one who declares Him."});

card(G+'/john/john-5-18-equal-with-god',{title:"John 5:18: “making himself equal with God”",k:"John 5",blurb:"Who said it, and how does Jesus answer?",
 claim:"John says Jesus made himself equal with God by calling God his own Father.",
 they:"“The Jews sought the more to kill him, because he… said also that God was his Father, making himself equal with God” (5:18).",
 we:"That’s the reasoning of the people trying to kill him. Read his answer in the very next verse: “The Son can do nothing of himself, but what he seeth the Father do” (5:19), and “I can of mine own self do nothing” (5:30). Jesus rejects the charge of independent equality.",
 h:"His own reply denies it",
 p:["01 · Calling God “Father” is normal Jewish piety: “Have we not all one father? hath not one God created us?” (Malachi 2:10); Jesus teaches everyone to pray “Our Father” (Matthew 6:9).","02 · See “John’s audience keeps misunderstanding Jesus”."],
 src:["John 5:17–30","Malachi 2:10","Matthew 6:9"],
 quotes:[V('John 5:19','Verily, verily, I say unto you, The Son can do nothing of himself, but what he seeth the Father do.'),V('John 5:30','I can of mine own self do nothing: as I hear, I judge.')],
 sum:"The enemies’ charge is answered by Jesus himself: “the Son can do nothing of himself”."});

card(G+'/john/john-14-9-seen-the-father',{title:"John 14:9: “He that hath seen me hath seen the Father”",k:"John 14",blurb:"Seeing Jesus = seeing God?",
 claim:"Whoever has seen Jesus has seen the Father: Jesus is God visible.",
 they:"Philip asks to see the Father and Jesus says “he that hath seen me hath seen the Father” (14:9).",
 we:"He explains it in the next verse: “the words that I speak unto you I speak not of myself: but the Father that dwelleth in me, he doeth the works” (14:10). It’s the language of a perfect messenger: “he that seeth me, seeth him that sent me” (12:45); “he that receiveth me receiveth him that sent me” (13:20).",
 h:"The sent one shows the Sender",
 p:["01 · “No man hath seen God at any time” (John 1:18): literal seeing is excluded by John himself.","02 · The same rule applies to the disciples: “He that receiveth you receiveth me” (Matthew 10:40). No one concludes the disciples are Jesus."],
 src:["John 14:7–10; 12:44–45; 13:20; 1:18","Matthew 10:40"],
 quotes:[V('John 14:10','…the words that I speak unto you I speak not of myself: but the Father that dwelleth in me, he doeth the works.'),V('John 12:45','And he that seeth me seeth him that sent me.'),V('Matthew 10:40','He that receiveth you receiveth me, and he that receiveth me receiveth him that sent me.')],
 sum:"Seeing the messenger shows the One who sent him (12:45; 13:20); the works are the Father’s (14:10), and no one has seen God (1:18)."});

card(G+'/john/john-17-5-glory-before-the-world',{title:"John 17:5: “the glory which I had with thee before the world was”",k:"Pre-existence",blurb:"Did Jesus exist before creation?",
 claim:"Jesus had glory with the Father before the world existed: he pre-existed as God.",
 they:"“Glorify thou me with thine own self with the glory which I had with thee before the world was” (17:5).",
 we:"In the same prayer he says he has given that glory to the disciples: “the glory which thou gavest me I have given them” (17:22). Glory that was given and can be passed on is not divinity. And in Jewish and New Testament language, things God has decreed exist “before the foundation of the world”: Christ was “foreordained before the foundation of the world” (1 Peter 1:20); the Lamb “slain from the foundation of the world” (Revelation 13:8).",
 h:"Glory decreed, given and shared",
 p:["01 · Jeremiah: “Before I formed thee in the belly I knew thee… I ordained thee a prophet” (Jeremiah 1:5). Foreknown and appointed, not pre-existent as God.","02 · He asks for it: “glorify thou me”. God doesn’t pray to be given glory.","03 · “With thee” keeps him distinct from God."],
 src:["John 17:5, 22, 24","1 Peter 1:20","Revelation 13:8","Jeremiah 1:5"],
 quotes:[V('John 17:22','And the glory which thou gavest me I have given them.'),V('1 Peter 1:20','Who verily was foreordained before the foundation of the world, but was manifest in these last times for you.')],
 sum:"He prays to receive glory that was given to him and that he passes on to the disciples (17:22); “before the world” fits what God foreordained (1 Pet 1:20)."});

card(G+'/john/john-5-23-honour-the-son',{title:"John 5:23: “honour the Son, even as they honour the Father”",k:"Agency",blurb:"Equal honour = equal divinity?",
 claim:"All should honour the Son as they honour the Father: equal honour means he is God.",
 they:"“That all men should honour the Son, even as they honour the Father” (5:23). Only God receives such honour.",
 we:"Finish the sentence: “He that honoureth not the Son honoureth not the Father which hath sent him.” The reason is that he is sent. That’s the Jewish principle of agency: “a man’s agent is like himself” (Mishnah Berakhot 5:5). Dishonour the ambassador and you dishonour the king.",
 h:"Honour of the sent one",
 p:["01 · The verse before: “the Father… hath committed all judgment unto the Son” (5:22): committed, given.","02 · Matthew 10:40 applies the same chain to the disciples."],
 src:["John 5:22–23","Mishnah Berakhot 5:5","Matthew 10:40"],
 quotes:[V('John 5:23','That all men should honour the Son, even as they honour the Father. He that honoureth not the Son honoureth not the Father which hath sent him.')],
 sum:"The verse itself gives the reason, “the Father which hath sent him”: the honour due to an agent (Berakhot 5:5)."});

card(G+'/john/came-down-from-heaven',{title:"John 3:13 & 6:38: “I came down from heaven”",k:"Origin",blurb:"Coming from heaven = being God?",
 claim:"Jesus came down from heaven, so he existed in heaven before his birth as God.",
 they:"“I came down from heaven, not to do mine own will, but the will of him that sent me” (6:38); “he that came down from heaven, even the Son of man” (3:13).",
 we:"In John “from heaven” means “from God”, said of what God sends. John the Baptist is “a man sent from God” (1:6). Jesus calls himself the bread “which came down from heaven” (6:51), like the manna (Exodus 16:4). And he sends the disciples exactly as he was sent: “As thou hast sent me into the world, even so have I also sent them into the world” (17:18).",
 h:"Sent from God",
 p:["01 · 6:38 itself: he came to do the will of the one who sent him, not his own. God has no will above His own.","02 · “Every good gift… cometh down from the Father of lights” (James 1:17)."],
 src:["John 3:13; 6:38, 51; 1:6; 17:18","Exodus 16:4","James 1:17"],
 quotes:[V('John 6:38','For I came down from heaven, not to do mine own will, but the will of him that sent me.'),V('John 17:18','As thou hast sent me into the world, even so have I also sent them into the world.'),V('John 1:6','There was a man sent from God, whose name was John.')],
 sum:"“From heaven” means sent by God (John 1:6; 17:18); in 6:38 he comes to do another’s will."});

card(G+'/john/father-greater-14-28',{title:"John’s Jesus against his own divinity: 14:28, 20:17, 8:40",k:"Counter-evidence in John",blurb:"“My Father is greater than I”, “my God and your God”.",
 claim:"Even in John, the most “divine” Gospel, Jesus subordinates himself to God.",
 they:"John is the Gospel of Jesus’ divinity: 1:1, 8:58, 10:30, 20:28.",
 we:"John also has Jesus say: “my Father is greater than I” (14:28); “I ascend unto my Father, and your Father; and to my God, and your God” (20:17), after the resurrection; “a man that hath told you the truth, which I have heard of God” (8:40); and “this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent” (17:3).",
 h:"Jesus has a God",
 p:["01 · Someone who has a God is not God. He says it after the resurrection, so it can’t be blamed on a temporary “human state”.","02 · See the cards on John 17:3, John 1:1, 8:58, 10:30 and 20:28 in this folder."],
 src:["John 14:28; 20:17; 8:40; 17:3"],
 quotes:[V('John 14:28','…for my Father is greater than I.'),V('John 20:17','…I ascend unto my Father, and your Father; and to my God, and your God.'),V('John 8:40','…a man that hath told you the truth, which I have heard of God.')],
 sum:"In John, after the resurrection, Jesus still says “my God” (20:17), calls the Father greater (14:28) and himself a man (8:40)."});

/* ---------- mount existing cards (live paths, after MOVES) ---------- */
const M=(from,to,key)=>(window.MOUNTS=window.MOUNTS||[]).push({from,to:G+'/'+to,key});
const PT='christianity/jesus/proof-texts/', TR='christianity/trinity/', J='christianity/jesus/';
// Mark
M(PT+'d-dr-mark-1-1-3-debunked','mark'); M(PT+'d-dr-mark-2-only-god-searches-hearts','mark'); M(PT+'d-dr-mark','mark','daniel-7-son-of-man');
M(PT+'d-dr-jesus-is-called-lord-debunked','mark'); M(PT+'d-dr-mark-10-18','mark'); M(PT+'d-dr-mark-5-30','mark');
M(PT+'t-jesus-does-not-know-the-hour','mark'); M(J+'mark-6-5-jesus-could-not-do-miracles','mark'); M(J+'jesus-amazed-and-marveled','mark'); M(J+'jesus-baptism-sin-mark-1','mark');
// Matthew
M(PT+'d-dr-matthew','matthew','immanuel-1-23'); M(PT+'d-dr-disciples-worship-jesus-debunked','matthew'); M(PT+'d-ia-jesus-will-judge','matthew');
M(G+'/mark/forgives-sins','matthew'); M(G+'/mark/calms-the-storm','matthew'); M(G+'/mark/walks-on-water-ego-eimi','matthew'); M(G+'/mark/trial-son-of-man-clouds','matthew');
M(J+'jesus-amazed-and-marveled','matthew'); M(J+'end-times-prophecy','matthew');
// Luke
M(G+'/mark/forgives-sins','luke'); M(G+'/mark/calms-the-storm','luke'); M(G+'/mark/trial-son-of-man-clouds','luke');
M(PT+'d-dr-disciples-worship-jesus-debunked','luke'); M(PT+'d-dr-jesus-is-called-lord-debunked','luke'); M(PT+'d-dr-mark-10-18','luke');
// John
M(TR+'d-dr-john-1-1-debunked','john'); M(PT+'john-8-58-before-abraham-i-am','john'); M(PT+'john-10-30-i-and-the-father-are-one','john');
M(TR+'d-dr-john-20-28-debunked','john'); M(TR+'authority','john','received-authority'); M(TR+'d-dr-jesus-is-worshipped','john');
M(PT+'d-dr-jews-can-t-be-trusted-in-john','john'); M(TR+'d-dr-john-17-3','john');
})();
