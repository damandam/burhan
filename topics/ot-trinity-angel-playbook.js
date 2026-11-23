/* Trinity in the Old Testament & Flagship Angel of the LORD Playbook — 2026-11-23.
   1. Creates category folder christianity/trinity/ot-trinity ("Trinity in the Old Testament").
   2. Rebuilds Angel of the LORD (Mal'akh YHWH) into a 14-node Flagship Tactical Debate Playbook
      integrating Deenresponds #angel-of-the-lord, #exodus-23, and all 6 PDFs from
      ~/Downloads/angel of the lord (Paul D. Wegner / Gateway Seminary 2025, Stephen L. White /
      Tyndale Bulletin, Heinrich Vogel, OTGodheadLanguage, Bible Authenticity, BibleProject) + 6 scans.
   3. Builds new Tactical Playbook divine-council-two-powers-ugarit from OTGodheadLanguage.pdf.
   4. Upgrades OT Trinity cards with verbatim verse quotes on every node & cross-mounts all 12
      overlapping OT Trinity / Messianic cards into christianity/trinity/ot-trinity/. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const P=(node,props)=>Object.assign(node,props);
const S=(src,cap)=>({src:'shots/'+src,cap});
const DR=(sub,id)=>({credit:'Deenresponds · '+sub,link:'https://discord.com/channels/1328402309297733662/'+id});
const AOTL_CR={credit:'Deenresponds · #angel-of-the-lord · #exodus-23 · Gateway Seminary (Paul D. Wegner, 2025) · Tyndale Bulletin (Stephen L. White) · Heinrich Vogel',link:'https://discord.com/channels/1328402309297733662/1368282845348368384'};

/* 1. Dedicated Category Folder: Trinity in the Old Testament */
topic(['christianity','trinity','ot-trinity'],{
  title:'Trinity in the Old Testament',
  k:'Old Testament',
  blurb:'The Angel of the LORD, “Let Us make man” (Gen 1:26), Abraham’s three visitors (Gen 18), Isaiah 48:16 & 63, the Ugaritic “Divine Council,” and OT proof-texts tested against Hebrew grammar and context.'
});

/* Helper to mount a card in BOTH christianity/trinity/ot-trinity/<slug> AND christianity/trinity/<slug> */
const dualCard=(slug,o)=>{
  const payload={title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}};
  topic(['christianity','trinity','ot-trinity',slug],payload);
  topic(['christianity','trinity',slug],payload);
};

/* ============================================================================
   FLAGSHIP 14-NODE PLAYBOOK: ANGEL OF THE LORD (MAL'AKH YHWH)
   ============================================================================ */

/* --- ANGLE A: HEBREW GRAMMAR, LXX & SHALIAH AGENCY --- */
const aotlTrapA1=P(N(
  AOTL_CR,
  'In Genesis 16:13 Hagar says to the Angel of the LORD, “You are a God of seeing,” and in Genesis 22:12 the Angel says to Abraham, “you have not withheld your son from Me”—proving the Angel is God Himself.',
  'In biblical agency (shaliaḥ), an emissary delivers the King’s message verbatim in the first person without an introductory formula—just as human prophets do in Isaiah 41:8–14, Micah 6:9–11, and Deuteronomy 29:2–6—and Hagar honors the Sender who saw her affliction through His messenger.',
  'First-person ambassadorial speech in Genesis 16.13, Genesis 22.12 & the Prophets',
  [
    '01 · Prophets speak in the first person as God without being God: As Prof. Paul D. Wegner (Gateway Seminary, 2025) demonstrates, biblical prophets routinely speak in the first person singular as God without first saying “Thus says the LORD.” In Deuteronomy 29:2–6 Moses says to Israel, “I have led you forty years in the wilderness… that you may know that I am the LORD your God,” and in Isaiah 41:8–10 Isaiah speaks directly as “I am your God” before v. 14 adds “declares the LORD.” Nobody concludes Moses or Isaiah is a person of the Trinity.',
    '02 · Matthew 8.5–9 vs. Luke 7.3–8 proves biblical agency (shaliaḥ): In Matthew 8:5–9, the Roman centurion personally comes and speaks to Jesus in the first person. In Luke 7:3–8, we learn the centurion never left his house—he sent elders and friends to deliver his message in the first person (“say the word, and let my servant be healed”). Because the messenger represents the sender (shaliaḥ), Matthew attributes the messengers’ speech directly to the sender.',
    '03 · Genesis 16.11 and 22.15 distinguish the Angel from YHWH: Two verses before Hagar’s exclamation, the Angel himself says in Genesis 16:11, “The LORD (YHWH) has listened to your affliction”—speaking of YHWH in the third person! Likewise in Genesis 22:15–16, the Angel calls from heaven a second time and says, “By Myself I have sworn, declares the LORD (neum-YHWH)”—using the classic prophetic messenger formula.'
  ],
  ['Genesis 16:7–13','Genesis 22:11–16','Deuteronomy 29:2–6','Isaiah 41:8–14','Matthew 8:5–9','Luke 7:3–8'],
  [],
  {
    facts:[
      ['Gen 16:11','Angel refers to YHWH in 3rd person: “YHWH has heard”'],
      ['Gen 22:16','Angel uses prophetic formula: “declares the LORD”'],
      ['Deut 29:2–6','Moses speaks in 1st person: “I am the LORD your God”'],
      ['Matt 8 / Luke 7','Centurion’s messengers credited as the centurion himself']
    ],
    quotes:[
      {by:'Genesis 16:11, 13',en:'And the angel of the LORD said to her… “Because the LORD has listened to your affliction.” … So she called the name of the LORD who spoke to her, “You are a God of seeing.”',ref:'Genesis 16:11, 13'},
      {by:'Genesis 22:12, 15–16',en:'He said, “Do not lay your hand on the boy… for now I know that you fear God, seeing you have not withheld your son, your only son, from me.” And the angel of the LORD called to Abraham a second time from heaven and said, “By myself I have sworn, declares the LORD…”',ref:'Genesis 22:12, 15–16'},
      {by:'Deuteronomy 29:2, 5–6 (Moses speaking)',en:'And Moses summoned all Israel and said to them: “…I have led you forty years in the wilderness. Your clothes have not worn out on you… that you may know that I am the LORD your God.”',ref:'Deuteronomy 29:2, 5–6'},
      {by:'Luke 7:6–7 (vs. Matthew 8:5–8)',en:'the centurion sent friends, saying to him, “Lord, do not trouble yourself… But say the word, and let my servant be healed.”',ref:'Luke 7:6–7'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'In Genesis 16:13 Hagar calls the Angel “God” and in Genesis 22:12 he says “from Me”'
});

const aotlTrapA2=P(N(
  AOTL_CR,
  'In Exodus 3:2–6 the Angel of the LORD appears in the Burning Bush, and verse 6 says “I am the God of your father, the God of Abraham”—so the Angel in the bush is the pre-incarnate Jesus.',
  'Three biblical texts crush that claim: Acts 7:30–35 explicitly identifies the Burning Bush figure as a created angel sent by God, Exodus 33:18–20 proves Moses had still never seen God’s face long after the bush, and Qurʾān 20:11–14 restores the pure monotheistic account.',
  'The Burning Bush: Exodus 3.2–6 vs. Acts 7.30–35, Exodus 33.18–20 & Qurʾān 20.11–14',
  [
    '01 · Acts 7.30, 35, 38 explicitly calls him “an angel”: In the New Testament, Stephen states that “an angel (aggelos) appeared to him in the wilderness of Mount Sinai, in a flame of fire in a bush” (Acts 7:30) and that God sent Moses “by the hand of the angel who appeared to him in the bush” (Acts 7:35). As Prof. Paul D. Wegner notes, the New Testament itself explains the Burning Bush figure as a commissioned angel, never as Jesus.',
    '02 · Exodus 33.18–20 refutes a Christophany at the bush: Thirty chapters after the Burning Bush, Moses begs God in Exodus 33:18, “Please show me Your glory,” and God answers in v. 20, “You cannot see My face, for man shall not see Me and live.” As Wegner asks: if Moses had already seen Christ in the Angel of the LORD at the Burning Bush—and Jesus says “whoever has seen me has seen the Father” (John 14:9)—why had Moses still never seen God?',
    '03 · Stephen L. White’s literary euphemism & Qurʾān 20.11–14: In Tyndale Bulletin (50.2, 1999), Stephen L. White demonstrates that inserting “angel of the LORD” in Exodus 3:2 is a theological euphemism to safeguard YHWH’s transcendence while God speaks from the fire—matching Qurʾān 20:11–14: “Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for My remembrance.”'
  ],
  ['Exodus 3:2–6','Exodus 33:18–20','Acts 7:30–38','Qurʾān 20:11–14','Stephen L. White, Tyndale Bulletin 50.2 (1999)'],
  [],
  {
    facts:[
      ['Acts 7:30, 35','NT identifies the bush figure as “an angel” (aggelos)'],
      ['Exod 33:18–20','Moses still had not seen God long after Exod 3'],
      ['White (1999)','“Angel of the LORD” functions as transcendence euphemism'],
      ['Q 20:11–14','Allah Himself speaks directly to Moses at the fire']
    ],
    quotes:[
      {by:'Exodus 3:2, 6',en:'And the angel of the LORD appeared to him in a flame of fire out of the midst of a bush… And he said, “I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob.”',ref:'Exodus 3:2, 6'},
      {by:'Acts 7:30, 35',en:'Now when forty years had passed, an angel appeared to him in the wilderness of Mount Sinai, in a flame of fire in a bush… This Moses… God sent as both ruler and redeemer by the hand of the angel who appeared to him in the bush.',ref:'Acts 7:30, 35'},
      {by:'Exodus 33:18, 20',en:'Moses said, “Please show me your glory.” … But,” he said, “you cannot see my face, for man shall not see me and live.”',ref:'Exodus 33:18, 20'},
      {by:'Qurʾān 20:14',ar:'إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي',en:'Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for My remembrance.',ref:'Qurʾān 20:14'}
    ],
    shots:[S('aotl-lopez-messenger-euphemism.jpg','Stephen L. White (Tyndale Bulletin 50.2, 1999): “Angel of the LORD: Messenger or Euphemism?”')]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'In Exodus 3:2–6 the Angel in the Burning Bush says “I am the God of Abraham”'
});

const aotlAngleA=P(N(
  AOTL_CR,
  null,
  'Start with Hebrew grammar and Near Eastern agency: the Hebrew construct chain malʾakh YHWH (“messenger of YHWH”) can be indefinite (“an angel of the LORD”), the Septuagint translates it 24 out of 34 times WITHOUT the definite article (angelos Kyriou), and under the biblical law of agency (shaliaḥ) an ambassador speaks in the first person on behalf of the King who sent him.',
  'Angle A: Hebrew Construct Grammar, the Septuagint (24/34 Anarthrous) & Shaliaḥ Agency',
  [
    '01 · Hebrew construct grammar & the Septuagint (24/34 without “the”): As Senior OT Professor Paul D. Wegner (Gateway Seminary, 2025) proves using Gesenius-Kautzsch-Cowley (GKC §127.3, p. 412) and Joüon-Muraoka (§139ac), because the proper name YHWH cannot take a definite article, the construct chain malʾakh YHWH does not require a definite article on “angel”—just like “a virgin of Israel” (Deut 22:19) or “a man of Benjamin” (1 Sam 4:12). Confirming this, the Jewish translators of the Greek Septuagint (LXX) rendered malʾakh YHWH 24 out of 34 times without the definite article (angelos Kyriou = “an angel of the Lord”)!',
    '02 · The OT vs. NT parallel table demolishes Christophany: In the New Testament, the exact same Greek phrase angelos Kyriou (“an angel of the Lord”) occurs 11 times without the article and once with it, performing the exact same three functions as in the OT: proclaiming divine messages (Matt 1:20; 2:13, 19; Acts 8:26), punishing disobedience (Acts 12:23), and performing miracles (John 5:4; Acts 5:19; 12:7). No scholar claims the angel who struck Herod in Acts 12:23 or freed Peter in Acts 12:7 was Jesus!',
    '03 · Samuel Ficker (TLOT) & Bruce Waltke on Representation / Agency (shaliaḥ): Quoting Samuel Ficker (Theological Lexicon of the Old Testament 2:668–671), S. A. Meier, René López, and Bruce Waltke (An Old Testament Theology, p. 602 n. 34), Wegner concludes that the Representation Theory best explains every passage: in the ancient Near East, a herald or messenger (malʾakh, whether human as in Hag 1:13 / Mal 2:7 or angelic) speaks in the first person for his Sender without being identical to his Sender.'
  ],
  ['Paul D. Wegner, Gateway Seminary (2025)','GKC §127.3 p. 412; Joüon §139ac','Samuel Ficker, TLOT 2:668–671','Bruce Waltke, An Old Testament Theology p. 602 n. 34','Haggai 1:13; Malachi 2:7; 3:1'],
  [aotlTrapA1,aotlTrapA2],
  {
    facts:[
      ['LXX Greek','24 of 34 times translated WITHOUT “the” (an angel)'],
      ['GKC §127.3','Proper noun construct chain allows indefinite “an angel”'],
      ['Malʾakh meaning','Used for human prophets (Hag 1:13), priests (Mal 2:7) & angels'],
      ['Wegner (2025)','Evangelical OT professor rejects Christophany for Agency']
    ],
    quotes:[
      {by:'Haggai 1:13 (human prophet called malʾakh YHWH)',en:'Then Haggai, the messenger of the LORD (malʾakh YHWH), spoke to the people with the LORD’s message, “I am with you, declares the LORD.”',ref:'Haggai 1:13'},
      {by:'Malachi 2:7 (human priest called malʾakh YHWH)',en:'For the lips of a priest should guard knowledge, and people should seek instruction from his mouth, for he is the messenger of the LORD of hosts (malʾakh YHWH ṣəḇāʾōṯ).',ref:'Malachi 2:7'},
      {by:'Acts 12:7, 23 (NT angelos Kyriou = created angel)',en:'And behold, an angel of the Lord stood next to him, and a light shone in the cell… Immediately an angel of the Lord struck him down, because he did not give God the glory.',ref:'Acts 12:7, 23'},
      {by:'Prof. Paul D. Wegner (Gateway Seminary, 2025)',en:'Christ is clearly said to be superior to the angels in Hebrews 1:4–14 and thus picturing Jesus as an angel is at least confusing and at worst blasphemous.',ref:'Who is the Angel of the LORD?, Gateway Seminary (2025)'}
    ],
    visual:{
      type:'compare',
      title:'Prof. Paul D. Wegner’s OT vs. NT “Angel of the Lord” Parallel Table',
      left:{label:'OT malʾakh YHWH (24/34 anarthrous in LXX)',items:[
        'Proclaims divine message: Gen 16:9–11; 22:11–18; Exod 3:2',
        'Punishes disobedience: Num 22:22–35; Judg 5:23; 1 Chr 21:12–30',
        'Performs miracles: Judg 6:21; 13:19–20'
      ]},
      right:{label:'NT angelos Kyriou (always a created angel)',items:[
        'Proclaims divine message: Matt 1:20; 2:13, 19; Acts 8:26',
        'Punishes disobedience: Acts 12:23 (strikes King Herod)',
        'Performs miracles: John 5:4; Acts 5:19; 12:7 (frees Peter)'
      ]}
    },
    shots:[
      S('aotl-gateway-seminary-aotl.jpg','Prof. Paul D. Wegner (Gateway Seminary, Dec 2025): “Who is the Angel of the LORD?”'),
      S('aotl-who-is-aotl.jpg','Carissa Quinn (BibleProject): “Who Is the Angel of the Lord?”')
    ]
  }
),{
  optWho:'Angle A · Hebrew grammar, LXX & Shaliaḥ agency',
  optLabel:'24/34 LXX occurrences say “an angel of the Lord,” and biblical emissaries speak in the 1st person',
  forkTitle:'Watch out · common Christian counter-claims on Genesis 16, 22 & Exodus 3',
  forkSub:'Tap the verse they raise next to dismantle it with the exact biblical text.'
});

/* --- ANGLE B: EXODUS 23:20-21, JUDGES 6 & 13, JOSHUA 5 --- */
const aotlTrapB1=P(N(
  AOTL_CR,
  'In Judges 13:22 Manoah cries out, “We shall surely die, because we have seen God (Elohim)!”—proving the Angel who ascended in the flame was God Himself.',
  'Read six verses earlier (Judges 13:16): when Manoah offers to prepare a burnt offering, the Angel of the LORD explicitly refuses it and commands, “If you prepare a burnt offering, you must offer it to the LORD (YHWH)”—proving he is a creature who cannot receive divine sacrifice!',
  'Judges 13.16 vs. 13.22: The Angel Refuses Sacrifice & Directs Worship to YHWH Alone',
  [
    '01 · Judges 13.16 is fatal to the pre-incarnate Jesus theory: In Judges 13:16, the Angel of the LORD tells Manoah: “Though you detain me, I will not eat of your food. But if you prepare a burnt offering, you must offer it to the LORD (YHWH).” Even Prof. Paul D. Wegner admits this verse is a major argument against Christophany: if the Angel were God the Son, he could never forbid offering the sacrifice to himself and redirect it to YHWH as someone else!',
    '02 · Why Manoah called him elohim in v. 22: The narrator immediately explains in Judges 13:16b–21 that Manoah only realized after the figure ascended in the flame that “he was the angel of the LORD.” In Hebrew, heavenly beings are called elohim (Ps 8:5; 1 Sam 28:13), and seeing a heavenly messenger provoked fear of death (cf. Dan 8:17; 10:7–11; Luke 1:12, 29).',
    '03 · John 1.18 and 1 John 4.12 settle it: Both John 1:18 and 1 John 4:12 state categorically, “No one has ever seen God at any time.” Therefore, what Manoah and his wife saw in daylight was a created angel of YHWH, not Almighty God.'
  ],
  ['Judges 13:15–22','John 1:18','1 John 4:12','1 Samuel 28:13','Daniel 8:17; 10:7–11'],
  [],
  {
    facts:[
      ['Judg 13:16','Angel refuses sacrifice: “offer it to YHWH!”'],
      ['Judg 13:21','Narrator concludes: Manoah knew he was malʾakh YHWH'],
      ['1 Sam 28:13','Hebrew elohim used for spirits/heavenly beings'],
      ['John 1:18','“No one has ever seen God at any time”']
    ],
    quotes:[
      {by:'Judges 13:16 (The Angel refuses sacrifice)',en:'And the angel of the LORD said to Manoah, “If you detain me, I will not eat of your food. But if you prepare a burnt offering, then offer it to the LORD.” (For Manoah did not know that he was the angel of the LORD.)',ref:'Judges 13:16'},
      {by:'Judges 13:21–22',en:'Then Manoah knew that he was the angel of the LORD. And Manoah said to his wife, “We shall surely die, for we have seen God (elohim).”',ref:'Judges 13:21–22'},
      {by:'John 1:18',en:'No one has ever seen God; the only God, who is at the Father’s side, he has made him known.',ref:'John 1:18'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'In Judges 13:22 Manoah says “We have seen God!” after the Angel ascends in the flame'
});

const aotlTrapB2=P(N(
  AOTL_CR,
  'In Genesis 48:15–16 Jacob prays, “The God who has been my shepherd all my life long… the Angel who has redeemed me from all evil, bless the boys”—equating God with the Angel.',
  'Jacob invokes God alongside His commissioned guardian angel (Genesis 24:7, 40; Psalm 34:7; Acts 12:11)—just as 1 Timothy 5:21 charges Timothy “in the presence of God and of Christ Jesus and of the elect angels” without turning the elect angels into members of the Godhead.',
  'Genesis 48.15–16, Genesis 24.7 & 1 Timothy 5.21: God and His Guardian Angel',
  [
    '01 · Abraham and Jacob repeatedly speak of God sending His guardian angel: In Genesis 24:7 and 24:40, Abraham tells his servant: “The LORD, the God of heaven… will send His angel before you.” Likewise in Psalm 34:7, “The angel of the LORD encamps around those who fear Him, and delivers them,” and in Acts 12:11 Peter says, “Now I am sure that the Lord has sent His angel and rescued me.”',
    '02 · Invoking God together with created agents does not make the agent God: In 1 Timothy 5:21 Paul solemnly charges Timothy “in the presence of God and of Christ Jesus and of the elect angels,” and in 1 Chronicles 29:20 the assembly bows to “the LORD and the king.” Pairing God with His angelic deliverer in Jacob’s patriarchal blessing honors the angel’s protective ministry under God’s command.',
    '03 · Hosea 12.3–4 distinguishes Jacob’s wrestling angel from YHWH of Hosts: When Hosea 12:4 recalls Jacob wrestling at Peniel (Gen 32:24–30), it states: “He strove with an angel (malʾakh) and prevailed; he wept and sought his favor.”'
  ],
  ['Genesis 48:15–16','Genesis 24:7, 40','Hosea 12:3–4','Psalm 34:7','Acts 12:11','1 Timothy 5:21'],
  [],
  {
    facts:[
      ['Gen 24:7, 40','“The LORD, the God of heaven… will send His angel”'],
      ['Ps 34:7','“The angel of the LORD encamps… and delivers them”'],
      ['Acts 12:11','“The Lord has sent His angel and rescued me”'],
      ['1 Tim 5:21','Paul invokes “God, Christ Jesus, and the elect angels”']
    ],
    quotes:[
      {by:'Genesis 48:15–16',en:'The God before whom my fathers Abraham and Isaac walked, the God who has been my shepherd all my life long to this day, the angel who has redeemed me from all evil, bless the boys…',ref:'Genesis 48:15–16'},
      {by:'Genesis 24:7',en:'The LORD, the God of heaven, who took me from my father’s house… will send his angel before you.',ref:'Genesis 24:7'},
      {by:'Hosea 12:4',en:'He strove with an angel and prevailed; he wept and sought his favor.',ref:'Hosea 12:4'},
      {by:'Acts 12:11',en:'When Peter came to himself, he said, “Now I am sure that the Lord has sent his angel and rescued me from the hand of Herod…”',ref:'Acts 12:11'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'In Genesis 48:15–16 Jacob parallels “the God who fed me” with “the Angel who redeemed me”'
});

const aotlAngleB=P(N(
  AOTL_CR,
  null,
  'Examine Exodus 23:20–21 (“Behold, I send an Angel before you… he will not pardon your transgressions, for My name is in him”): in Luke 7:27 Jesus applies the exact opener of Exodus 23:20 to John the Baptist, “My name is in him” denotes delegated royal authority (like Deuteronomy 18:18–19 and Esther 8:8), and “he will not pardon” means the angel has no leniency to let rebellion slide.',
  'Angle B: Exodus 23.20–21 (“My Name Is in Him”), Judges 6 & 13, and Joshua 5.13–15',
  [
    '01 · Luke 7.27 applies Exodus 23.20 to John the Baptist: In Exodus 23:20 God says, “Behold, I send an angel/messenger (malʾakh) before you to guard you on the way.” In Matthew 11:10, Mark 1:2, and Luke 7:27, Jesus applies that exact wording (“Behold, I send My messenger [ton aggelon mou] before your face, who will prepare your way”) to John the Baptist—a human prophet!',
    '02 · What “he will not pardon your transgressions” actually means: Trinitarians argue that since only God forgives sins (Mark 2:7), the angel’s ability to withhold pardon proves he is God. First, withholding indulgence is the opposite of forgiving: if a school principal warns students, “Obey the substitute teacher; he will not pardon your misbehavior,” it means the agent is strictly bound to enforce the law without leniency! Second, in John 20:23 Jesus grants the human disciples delegated authority to forgive or retain sins (“If you forgive the sins of any, they are forgiven them; if you withhold forgiveness from any, it is withheld”)—which did not turn the twelve apostles into Yahweh.',
    '03 · “For My name is in him” = delegated authority, not divine essence: Throughout Scripture, acting or speaking “in the name of the LORD / the king” means carrying the Sender’s royal seal and authority (Deut 18:18–19: “he shall speak to them all that I command him; and whoever will not listen to My words that he shall speak in My name, I Myself will require it of him”; Esther 3:12; 8:8). Even Jerusalem has YHWH’s name placed in it (1 Kgs 11:36; Jer 33:16).'
  ],
  ['Exodus 23:20–23','Luke 7:27; Mark 1:2','Deuteronomy 18:18–19','John 20:23','Esther 3:12; 8:8','1 Kings 11:36'],
  [aotlTrapB1,aotlTrapB2],
  {
    facts:[
      ['Exod 23:20 // Luke 7:27','Jesus applies Exod 23:20 to John the Baptist'],
      ['John 20:23','Apostles also given delegated power to retain/forgive'],
      ['Deut 18:18–19','Prophet speaks “in My name” with binding accountability'],
      ['1 Kgs 11:36','God also puts “My name” in the city of Jerusalem']
    ],
    quotes:[
      {by:'Exodus 23:20–21',en:'Behold, I send an angel before you to guard you on the way and to bring you to the place that I have prepared. Pay careful attention to him and obey his voice; do not rebel against him, for he will not pardon your transgression, for my name is in him.',ref:'Exodus 23:20–21'},
      {by:'Luke 7:27 (applying Exod 23:20 / Mal 3:1 to John the Baptist)',en:'This is he of whom it is written, “Behold, I send my messenger (aggelon) before your face, who will prepare your way before you.”',ref:'Luke 7:27'},
      {by:'Deuteronomy 18:19',en:'And whoever will not listen to my words that he shall speak in my name, I myself will require it of him.',ref:'Deuteronomy 18:19'},
      {by:'John 20:23 (delegated authority to human disciples)',en:'If you forgive the sins of any, they are forgiven them; if you withhold forgiveness from any, it is withheld.',ref:'John 20:23'}
    ]
  }
),{
  optWho:'Angle B · Exodus 23:20–21, Judges 6 & 13, and Joshua 5',
  optLabel:'Exodus 23:20–21 (“My name is in him”) is delegated authority—and Judges 13:16 refuses sacrifice',
  forkTitle:'Watch out · common Christian counter-claims on Judges 13:22 & Genesis 48:15–16',
  forkSub:'Tap the objection they raise next to dismantle it.'
});

/* --- ANGLE C: NEW TESTAMENT & PATRISTIC REFUTATION --- */
const aotlTrapC1=P(N(
  AOTL_CR,
  'Jude 5 says, “Jesus, who saved a people out of the land of Egypt, afterward destroyed those who did not believe”—proving Jesus was the Angel of the LORD in the Exodus.',
  'In the majority of Greek manuscripts and standard translations (KJV, NKJV, NIV, RSV, NASB95), Jude 5 reads “the Lord (ho Kyrios) saved a people out of Egypt”—and even if someone reads Iēsous, in Greek Iēsous is also the name of Joshua (Hebrews 4:8; Acts 7:45) and contradicts Hebrews 1:1–2 & 2:2–3.',
  'Jude 5 Textual Variant (Kyrios vs. Iēsous) & Hebrews 2.2–3',
  [
    '01 · The textual variant in Jude 5 (Kyrios vs. Iēsous): Standard translations (KJV, NKJV, RSV, NRSV, NIV, NASB95) render Jude 5 as “the Lord saved a people out of the land of Egypt.” The variant Iēsous in some Alexandrian witnesses either arose from transcriptional confusion of nomina sacra (KC vs. IC) or referred typologically to Joshua (Greek Iēsous, as in Acts 7:45 and Hebrews 4:8).',
    '02 · Hebrews 2.2–3 explicitly attributes the Exodus / Sinai word to angels, contrasted with the Lord Jesus: Hebrews 2:2–3 draws a sharp contrast between “the message declared by angels (di’ aggelōn)” in the Exodus/Sinai dispensation and the salvation “declared at first by the Lord [Jesus]” in the first century. If Jesus had been the angel of the Exodus, Hebrews 2:2–3’s entire contrast would collapse.',
    '03 · 1 Corinthians 10.9 also reads “Christ” / “Lord” typologically: When Paul says in 1 Corinthians 10:4, “the Rock was Christ,” nobody concludes Jesus was literally a block of limestone in the Sinai desert; it is typology, not ontological identity with the Angel of the LORD.'
  ],
  ['Jude 5','Hebrews 2:2–3','Hebrews 4:8; Acts 7:45','1 Corinthians 10:4'],
  [],
  {
    facts:[
      ['Jude 5 (KJV/NIV/RSV)','Reads “the Lord saved a people out of Egypt”'],
      ['Heb 4:8; Acts 7:45','Greek Iēsous also translates Joshua'],
      ['Heb 2:2–3','Contrasts OT word “declared by angels” with Jesus'],
      ['1 Cor 10:4','“The Rock was Christ” is typology, not literal identity']
    ],
    quotes:[
      {by:'Jude 5 (NKJV / RSV)',en:'But I want to remind you, though you once knew this, that the Lord, having saved the people out of the land of Egypt, afterward destroyed those who did not believe.',ref:'Jude 5'},
      {by:'Hebrews 2:2–3 (contrasting OT angels with Jesus)',en:'For since the message declared by angels proved to be reliable, and every transgression or disobedience received a just retribution, how shall we escape if we neglect such a great salvation? It was declared at first by the Lord…',ref:'Hebrews 2:2–3'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Jude 5 says “Jesus saved a people out of the land of Egypt”'
});

const aotlTrapC2=P(N(
  AOTL_CR,
  'In Daniel 3:25 King Nebuchadnezzar looks into the fiery furnace and sees a fourth man whose appearance is “like the Son of God”—proving a pre-incarnate appearance of Jesus.',
  'Read the Aramaic and three verses later (Daniel 3:28): the Aramaic phrase bar-ʾĕlāhîn has no definite articles and means “a son of the gods” (spoken by a polytheistic Babylonian king!), and in Daniel 3:28 Nebuchadnezzar himself explains who that figure was: “Blessed be the God of Shadrach, Meshach, and Abednego, who has sent His angel (malʾăkhēh) and delivered His servants!”',
  'Daniel 3.25 vs. 3.28: Aramaic bar-ʾĕlāhîn (“a son of the gods”) Explained as “His Angel”',
  [
    '01 · Aramaic bar-ʾĕlāhîn = “a son of the gods” (indefinite plural): As Prof. Paul D. Wegner (Gateway Seminary, 2025) points out, the KJV translation “the Son of God” in Daniel 3:25 is grammatically false. The Aramaic bar-ʾĕlāhîn has no definite article and uses the plural ʾĕlāhîn (“gods”). Modern Christian translations (ESV, NIV, NASB, NRSV, NET) all translate it “a son of the gods”—because pagan King Nebuchadnezzar knew nothing of Nicene Trinitarianism!',
    '02 · Daniel 3.28 gives the Bible’s own definition—“His angel”: Three verses later, in Daniel 3:28, Nebuchadnezzar himself identifies the fourth figure in the furnace: “Blessed be the God of Shadrach, Meshach, and Abednego, who has sent His angel (malʾăkhēh) and delivered His servants, who trusted in Him!”',
    '03 · Parallel in Daniel 6.22: When Daniel is rescued from the lions’ den, he gives the exact same explanation in Daniel 6:22: “My God sent His angel (malʾăkhēh) and shut the lions’ mouths.” In biblical Hebrew and Aramaic, “sons of God / gods” (bənê hā-ʾĕlōhîm, Job 1:6; 38:7) is a standard idiom for created angels.'
  ],
  ['Daniel 3:25, 28','Daniel 6:22','Job 1:6; 38:7','Paul D. Wegner, Gateway Seminary (2025)'],
  [],
  {
    facts:[
      ['Dan 3:25 Aramaic','bar-ʾĕlāhîn = “a son of the gods” (ESV/NIV/NASB)'],
      ['Dan 3:28','Nebuchadnezzar calls him “His angel” (malʾăkhēh)'],
      ['Dan 6:22','“My God sent His angel and shut the lions’ mouths”'],
      ['Job 1:6; 38:7','Created angels are called “sons of God”']
    ],
    quotes:[
      {by:'Daniel 3:25 (ESV)',en:'He answered and said, “But I see four men unbound, walking in the midst of the fire, and they are not hurt; and the appearance of the fourth is like a son of the gods.”',ref:'Daniel 3:25'},
      {by:'Daniel 3:28 (Nebuchadnezzar identifies him as God’s angel)',en:'Nebuchadnezzar answered and said, “Blessed be the God of Shadrach, Meshach, and Abednego, who has sent his angel and delivered his servants, who trusted in him…”',ref:'Daniel 3:28'},
      {by:'Daniel 6:22',en:'My God sent his angel and shut the lions’ mouths, and they have not harmed me.',ref:'Daniel 6:22'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Daniel 3:25 says the fourth man in the fiery furnace looked like “the Son of God”'
});

const aotlAngleC=P(N(
  AOTL_CR,
  null,
  'The New Testament itself closes the door on identifying Jesus as the OT Angel of the LORD: Hebrews 1:1–14 & 2:2–5 categorically separates the Son from all angels, Matthew 1:20 and Luke 2:9 show “the/an angel of the Lord” appearing while Jesus is in Mary’s womb or a baby in the manger, W. G. MacDonald notes that pre-incarnate fleshly appearances destroy John 1:14, and Augustine, Jerome, and Gregory the Great rejected Christophany.',
  'Angle C: Hebrews 1–2, Matthew 1.20 / Luke 2.9, W. G. MacDonald & Augustine/Jerome',
  [
    '01 · Hebrews 1.1–14 and 2.2–5 forbid turning Jesus into an angel: Hebrews 1:1–2 states that in the Old Testament God spoke to the fathers “by the prophets,” and ONLY “in these last days has He spoken to us by a Son.” Hebrews 1:5, 13–14 then asks: “For to which of the angels did God ever say, ‘You are My Son’?... Are they not all ministering spirits?” As Prof. Paul D. Wegner concludes: “Christ is clearly said to be superior to the angels in Hebrews 1:4–14 and thus picturing Jesus as an angel is at least confusing and at worst blasphemous.”',
    '02 · The Angel of the Lord appears while Jesus is in the womb and in the manger (Matt 1.20; 2.13; Luke 1.11; 2.9): In Matthew 1:20–24, “an angel of the Lord” (aggelos Kyriou) appears to Joseph while Jesus is an unborn child inside Mary’s womb! In Luke 2:9–11, “an angel of the Lord” appears to the shepherds to announce that Jesus has just been born in Bethlehem! In Matthew 2:13, “an angel of the Lord” tells Joseph to take the infant Jesus to Egypt! Clearly, “the/an angel of the Lord” is NOT Jesus.',
    '03 · W. G. MacDonald on John 1.14 & Heinrich Vogel on Augustine, Jerome, and Gregory the Great: As W. G. MacDonald (“Christology and ‘The Angel of the Lord’”) argues—cited by Wegner—if Jesus had already taken on flesh repeatedly in the OT (eating Abraham’s veal in Gen 18 and wrestling Jacob in Gen 32), then John 1:14 (“the Word became flesh”) and Galatians 4:4 (“born of a woman”) lose their meaning and validate Docetism. And as Heinrich Vogel’s monograph documents, St. Augustine (De Trinitate II–III), St. Jerome, and Pope Gregory the Great all rejected the view that the OT Angel of the LORD was Christ in person, holding instead that he was a created angel through whom God spoke!'
  ],
  ['Hebrews 1:1–14; 2:2–5','Matthew 1:20–24; 2:13, 19','Luke 1:11; 2:9–11','W. G. MacDonald, Christology and the Angel of the Lord','Heinrich Vogel, The Angel of the Lord (Augustine, Jerome, Gregory)'],
  [aotlTrapC1,aotlTrapC2],
  {
    facts:[
      ['Heb 1:1–2, 5','God spoke by a Son only “in these last days,” not as an OT angel'],
      ['Matt 1:20; Luke 2:9','Angel of the Lord appears while Jesus is in womb/manger'],
      ['MacDonald (1975)','OT fleshly appearances empty John 1:14 & aid Docetism'],
      ['Augustine & Jerome','Held the OT Angel of the LORD was a created angel']
    ],
    quotes:[
      {by:'Hebrews 1:1–2, 5',en:'Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son… For to which of the angels did God ever say, “You are my Son, today I have begotten you”?',ref:'Hebrews 1:1–2, 5'},
      {by:'Matthew 2:13 (Angel of the Lord distinct from infant Jesus)',en:'Now when they had departed, behold, an angel of the Lord appeared to Joseph in a dream and said, “Rise, take the child and his mother, and flee to Egypt…”',ref:'Matthew 2:13'},
      {by:'Luke 2:9–11 (Angel of the Lord announces newborn Jesus)',en:'And an angel of the Lord appeared to them, and the glory of the Lord shone around them… “For unto you is born this day in the city of David a Savior, who is Christ the Lord.”',ref:'Luke 2:9, 11'},
      {by:'Heinrich Vogel (The Angel of the Lord)',en:'On this identification the church fathers, commentators, interpreters, theologians, and dogmaticians have had various opinions. Some have regarded all these passages as mere references to created angels.',ref:'Heinrich Vogel, The Angel of the Lord, p. 1'}
    ],
    shots:[
      S('aotl-vogel-angel.jpg','Heinrich Vogel: “The Angel of the Lord” — survey of NT occurrences and patristic disagreement (Augustine, Jerome, Gregory).'),
      S('aotl-isnt-angel-hes-jesus.jpg','Bible Authenticity: “‘The Angel of the LORD’ Isn’t An Angel, He’s Jesus?” — refuting Trinitarian proof-texts.')
    ]
  }
),{
  optWho:'Angle C · New Testament & Patristic Refutation',
  optLabel:'Hebrews 1–2, Matthew 1:20 / Luke 2:9, and Augustine & Jerome refute the Jesus-as-Angel theory',
  forkTitle:'Watch out · common Christian counter-claims on Jude 5 & Daniel 3:25',
  forkSub:'Tap the proof-text they raise next to dismantle it.'
});

/* --- ANGLE D: ZECHARIAH 1 & 3, 2 SAMUEL 24 & THE UGARITIC DIVINE COUNCIL --- */
const aotlTrapD1=P(N(
  AOTL_CR,
  'In Zechariah 3:4 the Angel of the LORD says to Joshua the high priest, “Behold, I have taken your iniquity away from you”—and since only God can forgive sins (Mark 2:7), the Angel of the LORD must be God.',
  'Turn to Isaiah 6:6–7: one of the six-winged seraphim flies to Isaiah with a burning coal, touches his lips, and declares the exact same Hebrew words—“Behold, this has touched your lips; your guilt is taken away, and your sin atoned for!” Did that seraph become the fourth person of the Trinity?',
  'Zechariah 3.4 vs. Isaiah 6.6–7: An Angelic Herald Declaring God’s Forgiveness',
  [
    '01 · Isaiah 6.6–7 uses the exact same declaration by a created seraph: In Isaiah 6:6–7, one of the seraphim takes a live coal from the altar, touches Isaiah’s mouth, and says: “Your iniquity is taken away (sār ʿăwōnekā), and your sin is purged.” In both Isaiah 6:7 and Zechariah 3:4, a heavenly messenger announces and enacts God’s cleansing decree on God’s behalf.',
    '02 · In Zechariah 3.2 the Angel says “The LORD rebuke you, O Satan!”—not “I rebuke you”: Two verses earlier (Zech 3:2), the Angel of the LORD does not rebuke Satan by his own intrinsic deity; instead he invokes YHWH as a higher authority: “The LORD (YHWH) rebuke you, O Satan! The LORD who has chosen Jerusalem rebuke you!” In Jude 9, that exact sentence (“The Lord rebuke you!”) is spoken by Michael the archangel!',
    '03 · In Zechariah 3.7–8 the Angel delivers a prophetic oracle about the future servant “the Branch”: Immediately after cleansing Joshua, the Angel says in Zechariah 3:7–8: “Thus says the LORD of hosts… Behold, I will bring My servant the Branch.” Even under Christian typology where “My servant the Branch” is the future Messiah, the Angel speaking about “My servant the Branch” is distinct from him!'
  ],
  ['Zechariah 3:1–8','Isaiah 6:6–7','Jude 9'],
  [],
  {
    facts:[
      ['Isa 6:6–7','A created seraph declares: “Your iniquity is taken away!”'],
      ['Zech 3:2 // Jude 9','Angel says “The LORD rebuke you!”—just like Archangel Michael'],
      ['Zech 3:7–8','Angel uses messenger formula: “Thus says the LORD of hosts”'],
      ['Zech 3:8','Messiah (“My servant the Branch”) is a future figure, not the Angel']
    ],
    quotes:[
      {by:'Zechariah 3:2, 4',en:'And the LORD [the angel of the LORD in Syriac/context of v. 1] said to Satan, “The LORD rebuke you, O Satan!” … And the angel said to those who were standing before him, “Remove the filthy garments from him.” And to him he said, “Behold, I have taken your iniquity away from you…”',ref:'Zechariah 3:2, 4'},
      {by:'Isaiah 6:6–7 (A created seraph declares the exact same cleansing)',en:'Then one of the seraphim flew to me, having in his hand a burning coal… And he touched my mouth and said: “Behold, this has touched your lips; your guilt is taken away, and your sin atoned for.”',ref:'Isaiah 6:6–7'},
      {by:'Jude 9 (Archangel Michael uses the exact phrase of Zech 3:2)',en:'But when the archangel Michael, contending with the devil, was disputing about the body of Moses, he did not presume to pronounce a blasphemous judgment, but said, “The Lord rebuke you.”',ref:'Jude 9'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'In Zechariah 3:4 the Angel of the LORD says “I have removed your iniquity from you”'
});

const aotlAngleD=P(N(
  AOTL_CR,
  null,
  'Lock in the passages where the Angel of the LORD and YHWH interact as two completely separate beings of unequal rank—Zechariah 1:12–13 (where the Angel prays to YHWH and asks Him a question) and 2 Samuel 24:16 / 1 Chronicles 21:15, 27 (where YHWH commands the Angel to stop and sheathe his sword)—and expose the pagan Ugaritic root of the “Divine Council / Two Powers” fallback.',
  'Angle D: Zechariah 1.12–13, 2 Samuel 24.16 & the Ugaritic “Divine Council” Admission',
  [
    '01 · Zechariah 1.12–13—The Angel of the LORD prays to YHWH and lacks omniscience: In Zechariah 1:12, the Angel of the LORD addresses Almighty God in prayer: “O LORD of hosts, how long will You have no mercy on Jerusalem and the cities of Judah, against which You have been angry these seventy years?” In v. 13, “the LORD answered gracious and comforting words to the angel.” An angel begging YHWH to tell him “how long?” is neither omniscient nor co-equal with YHWH.',
    '02 · 2 Samuel 24.16 & 1 Chronicles 21.15, 27—YHWH commands the Angel of the LORD to stop: When the pestilence strikes Israel, “the angel stretched out his hand toward Jerusalem to destroy it, the LORD relented from the calamity and said to the angel who was working destruction among the people, ‘It is enough; now relax your hand!’” And in 1 Chronicles 21:27, “the LORD commanded the angel, and he put his sword back into its sheath.” As Prof. Wegner notes, the Angel of the LORD is clearly a commissioned subordinate executing YHWH’s orders.',
    '03 · Exposing the “OT Godhead / Ugaritic Divine Council” fallback (OTGodheadLanguage.pdf): When modern Trinitarian apologists retreat to Michael Heiser’s “Divine Council / Two Powers in Heaven” model, their own resource paper (Old Testament Godhead Language, p. 1) openly admits that this “binitarian” council model is derived from the polytheistic Canaanite pantheon of Ugarit—where the high god El and his wife Asherah rule over 70 “sons of El” with Baal as a co-regent! Importing Canaanite Baal-and-El polytheism to rescue the Trinity violates the first commandment of the Torah (Deut 4:35, 39; 6:4; 32:39).'
  ],
  ['Zechariah 1:12–13','2 Samuel 24:16','1 Chronicles 21:15, 27','OTGodheadLanguage.pdf, p. 1','Deuteronomy 4:35, 39; 32:39'],
  [aotlTrapD1],
  {
    facts:[
      ['Zech 1:12–13','Angel prays to YHWH: “O LORD of hosts, how long?”'],
      ['2 Sam 24:16','YHWH orders the Angel: “It is enough; relax your hand!”'],
      ['1 Chr 21:27','“The LORD commanded the angel, and he sheathed his sword”'],
      ['OTGodheadLanguage','Admits “binitarian council” is modeled on Ugarit’s El & Baal']
    ],
    quotes:[
      {by:'Zechariah 1:12–13 (The Angel prays to YHWH of Hosts)',en:'Then the angel of the LORD said, “O LORD of hosts, how long will you have no mercy on Jerusalem and the cities of Judah, against which you have been angry these seventy years?” And the LORD answered gracious and comforting words to the angel…',ref:'Zechariah 1:12–13'},
      {by:'2 Samuel 24:16 (YHWH commands the Angel to stop)',en:'And when the angel stretched out his hand toward Jerusalem to destroy it, the LORD relented from the calamity and said to the angel who was working destruction among the people, “It is enough; now stay your hand.”',ref:'2 Samuel 24:16'},
      {by:'1 Chronicles 21:27',en:'Then the LORD commanded the angel, and he put his sword back into its sheath.',ref:'1 Chronicles 21:27'},
      {by:'Old Testament Godhead Language (p. 1)',en:'The closest parallel to Israel’s (and therefore the OT’s) conception of the assembly of the heavenly host under the authority of Yahweh is the divine council of Ugarit… El and his wife Athirat (Asherah)… Baal, served as the co-regent of El.',ref:'OTGodheadLanguage.pdf, p. 1'}
    ],
    shots:[S('aotl-ot-godhead-language.jpg','Old Testament Godhead Language (p. 1): Admitting the “binitarian” Divine Council model parallels Ugarit’s El, Asherah, and co-regent Baal.')]
  }
),{
  optWho:'Angle D · Zechariah 1 & 3, 2 Samuel 24 & the Ugaritic Divine Council',
  optLabel:'In Zechariah 1:12 the Angel prays to YHWH, in 2 Samuel 24:16 YHWH orders him to stop, and “Two Powers” is Ugaritic polytheism',
  forkTitle:'Watch out · common Christian counter-claim on Zechariah 3:4',
  forkSub:'Tap the counter-claim below to crush it with Isaiah 6:6–7.'
});

/* --- STEP 02 & ROOT OF ANGEL OF THE LORD PLAYBOOK --- */
const aotlStep02=P(N(
  AOTL_CR,
  null,
  'Before they cherry-pick Genesis 16 or Exodus 3, lock in four undisputed biblical facts that make the “Angel = Jesus” equation impossible: (1) in Zechariah 1:12 the Angel prays to YHWH; (2) in 2 Samuel 24:16 YHWH commands the Angel to stop; (3) in Judges 13:16 the Angel refuses a burnt offering and tells Manoah to offer it to YHWH; and (4) in Matthew 1:20, 2:13 and Luke 2:9 the Angel of the Lord appears while Jesus is an unborn child or newborn baby!',
  'Lock in the Four Biblical Contradictions of the “Angel = Jesus” Theory',
  [
    '01 · Fact 1—The Angel prays to YHWH (Zechariah 1.12–13): In Zechariah 1:12, the Angel of the LORD pleads with Almighty God: “O LORD of hosts, how long will You have no mercy on Jerusalem?” If the Angel were the omniscient God Himself, he would not ask YHWH how long His wrath will last.',
    '02 · Fact 2—YHWH gives orders to the Angel (2 Samuel 24.16; 1 Chronicles 21.15, 27): During the plague on Jerusalem, YHWH orders the Angel of the LORD, “It is enough; now stay your hand!” and “the LORD commanded the angel, and he put his sword back into its sheath.”',
    '03 · Fact 3—The Angel refuses sacrifice (Judges 13.16): When Manoah wants to offer a burnt offering, the Angel of the LORD refuses and says, “If you prepare a burnt offering, then offer it to the LORD (YHWH)!”',
    '04 · Fact 4—The Angel of the Lord is active while Jesus is in Mary’s womb and manger (Matt 1.20; 2.13; Luke 2.9): The exact same Greek title angelos Kyriou appears to Joseph while Jesus is a fetus in Mary’s womb (Matt 1:20), to the shepherds on the night Jesus is born as a baby (Luke 2:9), and to Joseph telling him to carry the infant Jesus to Egypt (Matt 2:13)!'
  ],
  ['Zechariah 1:12–13','2 Samuel 24:16; 1 Chronicles 21:27','Judges 13:16','Matthew 1:20; 2:13','Luke 2:9–11'],
  [aotlAngleA,aotlAngleB,aotlAngleC,aotlAngleD],
  {
    facts:[
      ['Zech 1:12','Angel prays to YHWH: “O LORD of hosts, how long?”'],
      ['2 Sam 24:16','YHWH commands the Angel: “Stay your hand!”'],
      ['Judg 13:16','Angel refuses burnt offering: “Offer it to YHWH!”'],
      ['Matt 1:20; 2:13','Angel of the Lord appears while Jesus is in womb/infancy']
    ],
    quotes:[
      {by:'Zechariah 1:12',en:'Then the angel of the LORD said, “O LORD of hosts, how long will you have no mercy on Jerusalem and the cities of Judah, against which you have been angry these seventy years?”',ref:'Zechariah 1:12'},
      {by:'Judges 13:16',en:'And the angel of the LORD said to Manoah, “If you detain me, I will not eat of your food. But if you prepare a burnt offering, then offer it to the LORD.”',ref:'Judges 13:16'},
      {by:'2 Samuel 24:16',en:'the LORD relented from the calamity and said to the angel who was working destruction among the people, “It is enough; now stay your hand.”',ref:'2 Samuel 24:16'},
      {by:'Matthew 2:13',en:'behold, an angel of the Lord appeared to Joseph in a dream and said, “Rise, take the child and his mother, and flee to Egypt…”',ref:'Matthew 2:13'}
    ],
    visual:{
      type:'steps',
      title:'The 4-Step Trap That Collapses “Angel of the LORD = Jesus”',
      items:[
        'Step 1 (Zech 1:12; 2 Sam 24:16): The Angel prays to YHWH and obeys YHWH’s command to sheathe his sword.',
        'Step 2 (Judg 13:16): The Angel refuses Manoah’s burnt offering and directs sacrifice to YHWH alone.',
        'Step 3 (LXX + Shaliaḥ): 24/34 LXX occurrences read “an angel of the Lord,” speaking in 1st person as God’s envoy.',
        'Step 4 (Matt 1:20; 2:13; Heb 1:1–5): The Angel appears while Jesus is in the womb/manger, and Hebrews 1 denies the Son is an angel.'
      ]
    }
  }
),{
  who:'Lock in the biblical contradiction · 02',
  forkTitle:'Four tactical angles to dismantle every Angel of the LORD argument',
  forkSub:'Choose the angle that matches their proof-text or drive through all four in sequence.'
});

const aotlRoot=P(N(
  AOTL_CR,
  'In the Old Testament, the “Angel of the LORD” (malʾakh YHWH) speaks as God, bears God’s name (Exodus 23:21), and receives homage—proving the Angel of the LORD is the pre-incarnate Jesus and the second person of the Trinity.',
  'Both Hebrew grammar and the New Testament refute that claim—as even Senior Evangelical OT Professor Paul D. Wegner (Gateway Seminary, 2025) concludes. In Hebrew, malʾakh simply means “messenger,” the Septuagint translates malʾakh YHWH 24 out of 34 times WITHOUT “the” as “an angel of the Lord” (angelos Kyriou), and under the biblical law of agency (shaliaḥ) a commissioned messenger speaks in the first person on behalf of the King who sent him without being that King.',
  'Why the “Angel of the LORD” Is a Commissioned Messenger (Shaliaḥ), Not a Pre-Incarnate Jesus',
  [
    '01 · Even Evangelical Old Testament scholarship rejects the Christophany view (Prof. Paul D. Wegner, Gateway Seminary, 2025): Surveying all 56 Old Testament occurrences of malʾakh YHWH, Senior Distinguished OT Professor Paul D. Wegner (alongside Bruce Waltke, Samuel Ficker in TLOT, S. A. Meier, and René López) rejects the “pre-incarnate Christ” theory and demonstrates that the figure is a created angel carrying a special commission from God (Representation / Agency Theory).',
    '02 · Hebrew construct grammar & 24/34 Septuagint translations without “the”: Because the proper name YHWH cannot take a definite article, the Hebrew construct chain malʾakh YHWH can be indefinite (“an angel of the LORD,” GKC §127.3, p. 412; Joüon §139ac)—which is why the ancient Jewish translators of the Septuagint (LXX) translated it 24 out of 34 times WITHOUT the definite article (angelos Kyriou = “an angel of the Lord”), the exact same phrase used in the NT for created angels (Matt 1:20; 2:13; Luke 1:11; 2:9; Acts 12:7, 23)!',
    '03 · Biblical agency (shaliaḥ) & Stephen L. White’s transcendence euphemism: Under the Semitic law of agency (shaliaḥ, “a man’s emissary is as himself”), a herald delivers his Sender’s message verbatim in the first person (just as Moses does in Deut 29:2–6, Isaiah in Isa 41:8–14, and the centurion’s messengers in Matt 8:5–9 vs. Luke 7:3–8), or the text uses “angel of the LORD” as a literary euphemism to safeguard YHWH’s transcendence (Stephen L. White, Tyndale Bulletin 50.2, 1999)—never to teach a second co-equal divine person.'
  ],
  ['Paul D. Wegner, Who is the Angel of the LORD? (Gateway Seminary, 2025)','Stephen L. White, Tyndale Bulletin 50.2 (1999)','Heinrich Vogel, The Angel of the Lord','GKC §127.3; Samuel Ficker, TLOT 2:668–671','Acts 7:30–38; Hebrews 1:1–14'],
  [aotlStep02],
  {
    facts:[
      ['OT occurrences','56× in OT; LXX renders 24/34 WITHOUT “the” (an angel)'],
      ['Shaliaḥ principle','Emissary speaks in 1st person on behalf of the Sender'],
      ['Acts 7:30, 35, 38','NT explicitly calls the Burning Bush figure “an angel”'],
      ['Hebrews 1:1–5','“To which of the angels did God ever say, You are My Son?”']
    ],
    quotes:[
      {by:'Hebrews 1:1–2, 5, 14',en:'Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son… For to which of the angels did God ever say, “You are my Son”?... Are they not all ministering spirits sent out to serve…?',ref:'Hebrews 1:1–2, 5, 14'},
      {by:'Acts 7:30, 35 (Stephen on Exodus 3:2)',en:'Now when forty years had passed, an angel appeared to him in the wilderness of Mount Sinai, in a flame of fire in a bush… God sent [Moses] as both ruler and redeemer by the hand of the angel who appeared to him in the bush.',ref:'Acts 7:30, 35'},
      {by:'Prof. Paul D. Wegner (Gateway Seminary, Dec 2025)',en:'There are also several NT passages that explain the angel of the LORD as being merely an angel (Acts 7:30, 35, 38), and it seems odd that God would use that term for his Son given what is said about angels in Hebrews 1:4–12.',ref:'Who is the Angel of the LORD?, Gateway Seminary (2025)'},
      {by:'Samuel Ficker (Theological Lexicon of the Old Testament 2:671)',en:'The difficulty that Yahweh and his malʾāk are sometimes identified no longer exists when one considers that malʾāk can generally be identified with his employer.',ref:'TLOT 2:671 (cited by Wegner, 2025)'}
    ],
    visual:{
      type:'compare',
      title:'Trinitarian Christophany Claim vs. Biblical & Scholarly Reality',
      left:{label:'Trinitarian Claim (“Angel = Jesus”)',items:[
        'Assumes malʾakh YHWH is always definite (“THE Angel”)',
        'Confuses 1st-person envoy speech (shaliaḥ) with deity',
        'Contradicts Zech 1:12, Judg 13:16, Matt 1:20 & Heb 1:1–14'
      ]},
      right:{label:'Biblical & Scholarly Reality (Wegner / Ficker / White)',items:[
        'LXX translates 24/34 times without article (“AN angel of the Lord”)',
        'Prophets & envoys speak in 1st person for God (Deut 29:5–6; Isa 41:8–14)',
        'Acts 7:30–38 & Heb 1:1–14 confirm he is a created ministering angel'
      ]}
    },
    shots:[
      S('aotl-gateway-seminary-aotl.jpg','Prof. Paul D. Wegner (Gateway Seminary, 2025): “Who is the Angel of the LORD?” — rejecting Christophany for Representation/Agency.'),
      S('aotl-vogel-angel.jpg','Heinrich Vogel: “The Angel of the Lord” — survey of OT/NT occurrences & patristic commentators.'),
      S('aotl-lopez-messenger-euphemism.jpg','Stephen L. White (Tyndale Bulletin 50.2, 1999): “Angel of the LORD: Messenger or Euphemism?”'),
      S('aotl-isnt-angel-hes-jesus.jpg','Bible Authenticity: “‘The Angel of the LORD’ Isn’t An Angel, He’s Jesus?”'),
      S('aotl-who-is-aotl.jpg','Carissa Quinn (BibleProject): “Who Is the Angel of the Lord?”'),
      S('aotl-ot-godhead-language.jpg','Old Testament Godhead Language: Ugaritic Divine Council background.')
    ]
  }
),{
  who:'Opening move · 01'
});

dualCard('angel-of-the-lord',{
  title:'Angel of the LORD (Malʾakh YHWH): Pre-Incarnate Jesus?',
  k:'Flagship Playbook',
  blurb:'Why Hebrew construct grammar (24/34 anarthrous in LXX), shaliaḥ agency, Zech 1:12, Judg 13:16, Acts 7:30–38, Heb 1:1–14, and Evangelical OT scholarship (Paul D. Wegner, 2025) refute the Christophany theory.',
  claim:'The “Angel of the LORD” in the Old Testament speaks as God and bears God’s name, proving he is the pre-incarnate Jesus.',
  tree:aotlRoot,
  sum:'Hebrew construct grammar (24/34 LXX occurrences without “the”), Near Eastern shaliaḥ agency, the Angel’s prayer to YHWH (Zech 1:12) and refusal of sacrifice (Judg 13:16), NT appearances during Jesus’s infancy (Matt 1:20; 2:13; Luke 2:9), and Hebrews 1:1–14 prove the Angel of the LORD is a commissioned angel, never a second person of a Trinity.'
});

/* ============================================================================
   2. NEW PLAYBOOK CARD: THE "DIVINE COUNCIL" & "TWO POWERS" ARGUMENT (UGARIT)
   ============================================================================ */
const UGAR_CR={credit:'Old Testament Godhead Language (OTGodheadLanguage.pdf) · Deenresponds · #angel-of-the-lord',link:'https://discord.com/channels/1328402309297733662/1368282845348368384'};

const ugarTrap1=P(N(
  UGAR_CR,
  'Psalm 82:1 says “God (Elohim) stands in the divine council; in the midst of the gods (elohim) He holds judgment,” and Deuteronomy 32:8–9 (DSS/LXX) says the Most High (Elyon) divided the nations according to the “sons of God” while YHWH’s portion was Jacob—proving a plural Godhead in the Old Testament.',
  'Read Psalm 82:6–7 and Deuteronomy 32:39 in the very same chapters: Psalm 82:7 tells those “gods” (elohim) that “you shall die like men, and fall like any prince” (mortal angelic or human rulers, never co-eternal Persons of a Trinity!), and Deuteronomy 32:39 declares in the same song: “See now that I, even I, am He, and there is no god (elohim) beside Me!”',
  'Psalm 82.6–7 & Deuteronomy 32.39 Crush the “Divine Council” Godhead Claim',
  [
    '01 · Psalm 82.6–7 condemns the council members to die like mortal men: In Psalm 82:6–7, God passes sentence on the unjust elohim of the assembly: “I said, ‘You are gods (elohim), sons of the Most High, all of you; nevertheless, like men you shall die, and fall like any prince!’” Furthermore, in John 10:34–35 Jesus himself defines Psalm 82:6’s “gods” as “those to whom the word of God came” (created human judges/prophets), not co-eternal Trinitarian hypostases!',
    '02 · Deuteronomy 32.39 (in the exact same Song of Moses as 32.8–9) excludes any second divine power: Even if one reads “sons of God” (angels) in the Dead Sea Scrolls fragment 4QDeutj of Deuteronomy 32:8, thirty verses later in the exact same poem (Deut 32:39) YHWH proclaims: “See now that I, even I, am He, and there is no god beside Me; I kill and I make alive!” YHWH is not a subordinate son of “El/Elyon”—in Genesis 14:22 Abraham identifies “the LORD (YHWH), God Most High (El Elyon), Possessor of heaven and earth” as one and the same singular Creator.',
    '03 · Why the Ugaritic parallel is a fatal self-own for Trinitarians: As OTGodheadLanguage.pdf (pp. 1–2) openly concedes, Ugaritic religion was a polytheistic pantheon where the aged high god El and his consort Asherah sat over 70 royal “sons of El,” with the storm-god Baal serving as El’s co-regent! Arguing that Christian binitarianism/Trinitarianism is the continuation of Ugaritic El-and-Baal co-regency concedes that the Trinity is structurally homologous to Canaanite polytheism—the very religion the Torah and Prophets waged war against!'
  ],
  ['Psalm 82:1, 6–7','John 10:34–35','Deuteronomy 32:8–9, 39','Genesis 14:22','OTGodheadLanguage.pdf, pp. 1–3'],
  [],
  {
    facts:[
      ['Psalm 82:7','The council elohim are told: “like men you shall die!”'],
      ['John 10:34–35','Jesus defines Ps 82:6 “gods” as recipients of God’s word'],
      ['Deut 32:39','Same song declares: “There is no god beside Me!”'],
      ['Gen 14:22','YHWH Himself is El Elyon (“God Most High”)']
    ],
    quotes:[
      {by:'Psalm 82:1, 6–7',en:'God has taken his place in the divine council; in the midst of the gods he holds judgment… I said, “You are gods, sons of the Most High, all of you; nevertheless, like men you shall die, and fall like any prince.”',ref:'Psalm 82:1, 6–7'},
      {by:'Deuteronomy 32:39 (in the same Song of Moses as 32:8–9)',en:'See now that I, even I, am he, and there is no god beside me; I kill and I make alive; I wound and I heal; and there is none that can deliver out of my hand.',ref:'Deuteronomy 32:39'},
      {by:'John 10:34–35 (Jesus’s own exegesis of Psalm 82:6)',en:'Jesus answered them, “Is it not written in your Law, ‘I said, you are gods’? If he called them gods to whom the word of God came—and Scripture cannot be broken…”',ref:'John 10:34–35'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Psalm 82:1 and Deuteronomy 32:8–9 show a Divine Council of multiple elohim / sons of God'
});

const ugarTrap2=P(N(
  UGAR_CR,
  'Genesis 19:24 says, “Then the LORD rained on Sodom and Gomorrah sulfur and fire from the LORD out of heaven”—showing two YHWHs, one on earth and one in heaven (“Two Powers in Heaven”).',
  'That is standard classical Hebrew noun repetition for stylistic emphasis—identical to Genesis 19:24’s parallels in 1 Kings 8:1 (“Solomon assembled the elders… to King Solomon”), Genesis 16:15–16 (“Abram bore a son… to Abram”), and Exodus 24:1 (“God said to Moses, Come up to the LORD”)—and Genesis 19:13 explicitly states it was the two created angels on earth who said, “The LORD has sent us to destroy it!”',
  'Genesis 19.24 vs. 19.13: Classical Hebrew Noun Repetition, Not “Two YHWHs”',
  [
    '01 · Genesis 19.13 tells us who was on earth in Sodom—two created angels sent by YHWH: Eleven verses before Genesis 19:24, the two visitors in Sodom say to Lot in Genesis 19:13: “For we are about to destroy this place, because the outcry against its people has become great before the LORD, and the LORD has sent us to destroy it.” There was no “second YHWH” standing in Sodom—only the two angels whom YHWH sent!',
    '02 · Hebrew repeats proper nouns where English uses a pronoun (“from Himself”): As Hebrew grammarians (Gesenius-Kautzsch-Cowley; Ibn Ezra; Radak; Rashi) document, Biblical Hebrew frequently repeats the subject’s proper name instead of a reflexive pronoun: e.g., 1 Kings 8:1 (“Then Solomon assembled the elders of Israel… to King Solomon in Jerusalem”—not two King Solomons!), Genesis 4:23 (“Lamech said to his wives: hear my voice, you wives of Lamech”—not two Lamechs!), and 1 Samuel 3:21 (“The LORD revealed Himself to Samuel at Shiloh by the word of the LORD”).',
    '03 · Rabbinic Judaism condemned “Two Powers in Heaven” (Shtei Reshuyot) as the arch-heresy of the minim: Far from being “orthodox Israelite theology,” the rabbinic sages (m. Sanhedrin 4:5; b. Hagigah 15a; Mekhilta de-Rabbi Ishmael on Exod 20:2) cited Deuteronomy 32:39 and Isaiah 44:6 to condemn the “Two Powers in Heaven” (shtei reshuyot ba-shamayim) doctrine as polytheistic heresy!'
  ],
  ['Genesis 19:1, 13, 24','1 Kings 8:1','Genesis 4:23; 1 Samuel 3:21','Isaiah 44:6; Deuteronomy 32:39'],
  [],
  {
    facts:[
      ['Gen 19:1, 13','Visitors in Sodom are two angels: “the LORD has sent us”'],
      ['1 Kgs 8:1','“Solomon assembled… to King Solomon” (1 Solomon, not 2!)'],
      ['1 Sam 3:21','“The LORD appeared… by the word of the LORD” (Hebrew idiom)'],
      ['Isa 44:6','“Beside Me there is no God”—crushes “Two Powers”']
    ],
    quotes:[
      {by:'Genesis 19:13 (The agents on earth in Sodom are two sent angels)',en:'For we are about to destroy this place, because the outcry against its people has become great before the LORD, and the LORD has sent us to destroy it.',ref:'Genesis 19:13'},
      {by:'Genesis 19:24',en:'Then the LORD rained on Sodom and Gomorrah sulfur and fire from the LORD out of heaven.',ref:'Genesis 19:24'},
      {by:'1 Kings 8:1 (Exact same Hebrew noun repetition—only one Solomon!)',en:'Then Solomon assembled the elders of Israel and all the heads of the tribes… before King Solomon in Jerusalem.',ref:'1 Kings 8:1'},
      {by:'Isaiah 44:6',en:'Thus says the LORD, the King of Israel and his Redeemer, the LORD of hosts: “I am the first and I am the last; besides me there is no god.”',ref:'Isaiah 44:6'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Genesis 19:24 says “the LORD rained fire from the LORD out of heaven” (two YHWHs)'
});

const ugarRoot=P(N(
  UGAR_CR,
  'Following scholars like Michael Heiser, the Old Testament teaches a “Divine Council” and “binitarian Godhead language” (“Two Powers in Heaven”) where Yahweh shares divine rule with a second Yahweh-figure (the Angel of the LORD / Word / Son of Man)—laying the foundation for the New Testament Trinity.',
  'Their own scholarly dossier (Old Testament Godhead Language, pp. 1–2) gives away the game in its opening paragraph: it explicitly admits that this “binitarian Godhead / Divine Council” model is patterned on the polytheistic Canaanite pantheon of Ugarit, where the high god El and his wife Asherah ruled over 70 “sons of El” with the storm-god Baal as El’s co-regent! When the Torah and Prophets speak in their own voice (Deuteronomy 4:35, 39; 6:4; 32:39; Isaiah 44:6, 24; 45:5), they repudiate Canaanite co-regency and affirm strict unitarian monotheism.',
  'Exposing the Ugaritic El-and-Baal Root of the “OT Godhead / Two Powers” Argument',
  [
    '01 · The devastating admission on page 1 of OTGodheadLanguage.pdf: To explain how the Old Testament could supposedly contain a “binitarian (two persons) Godhead,” the paper states: “The closest parallel to Israel’s (and therefore the OT’s) conception of the assembly of the heavenly host under the authority of Yahweh is the divine council of Ugarit… In the top tier dwelled El and his wife Athirat (Asherah). The second tier was the domain of their royal family (‘sons of El’; ‘princes’). One member of this second tier, Baal, served as the co-regent of El; despite Baal being under El’s authority, worshipers gave him the title ‘most high.’”',
    '02 · Why the Ugaritic “El + Baal co-regent” model destroys Nicene Trinitarianism on two fronts: First, appealing to Canaanite El-and-Baal mythology to justify a “second divine person alongside God” admits that binitarianism/Trinitarianism is structurally a reversion to the very Canaanite polytheism against which Elijah and the Hebrew prophets fought! Second, even in the Ugaritic/Divine Council model, the second figure is subordinate to the High God (“under El’s authority”) and created angels (malʾakhim) occupy the lowest servant tier—contradicting Nicene co-equality.',
    '03 · Explicit Old Testament monotheism crushes “binitarian co-regency”: Over and over, the Hebrew Bible rules out any co-regent deity alongside YHWH: “To you it was shown, that you might know that the LORD is God; there is no other besides Him” (Deut 4:35); “I am the LORD, who made all things, who alone stretched out the heavens, who spread out the earth by Myself (mē-ʾittî)” (Isa 44:24).'
  ],
  ['OTGodheadLanguage.pdf, pp. 1–4','Deuteronomy 4:35, 39; 6:4; 32:39','Isaiah 44:6, 24; 45:5–7','Psalm 82:1–7','Genesis 19:13, 24'],
  [ugarTrap1,ugarTrap2],
  {
    facts:[
      ['OTGodheadLanguage p. 1','Models “OT Godhead” on Ugarit’s El, Asherah & co-regent Baal'],
      ['Ugarit Tier 4','Classifies malʾakhim (angels/messengers) as lowest servant tier'],
      ['Deut 4:35; 32:39','“The LORD is God; there is no other besides Him”'],
      ['Isa 44:24','YHWH created all things “alone… by Myself” (no co-regent!)']
    ],
    quotes:[
      {by:'Old Testament Godhead Language (p. 1 — verbatim admission)',en:'The closest parallel to Israel’s (and therefore the OT’s) conception of the assembly of the heavenly host under the authority of Yahweh is the divine council of Ugarit.In the top tier dwelled El and his wife Athirat (Asherah)… Baal, served as the co-regent of El.',ref:'OTGodheadLanguage.pdf, p. 1'},
      {by:'Deuteronomy 4:35',en:'To you it was shown, that you might know that the LORD is God; there is no other besides him.',ref:'Deuteronomy 4:35'},
      {by:'Isaiah 44:24 (YHWH created alone, with no co-regent)',en:'Thus says the LORD, your Redeemer, who formed you from the womb: “I am the LORD, who made all things, who alone stretched out the heavens, who spread out the earth by myself…”',ref:'Isaiah 44:24'},
      {by:'Isaiah 45:5',en:'I am the LORD, and there is no other, besides me there is no God.',ref:'Isaiah 45:5'}
    ],
    visual:{
      type:'compare',
      title:'Ugaritic “Two Powers” Model vs. Torah & Prophetic Monotheism',
      left:{label:'Ugaritic / “Two Powers” Model (OTGodheadLanguage.pdf)',items:[
        'Tier 1: High god El & consort Asherah',
        'Tier 2: 70 “sons of El” with storm-god Baal as co-regent',
        'Tier 3/4: Craftsman deities & malʾakhim (messenger servants)'
      ]},
      right:{label:'Biblical & Qurʾānic Monotheism (Tawḥīd)',items:[
        'Deut 4:35; 32:39: “There is no god beside Me” (zero co-regents)',
        'Isa 44:24: YHWH created heaven and earth “alone, by Myself”',
        'Ps 82:6–7; John 10:34–35: Council “elohim” are mortal creatures'
      ]}
    },
    shots:[S('aotl-ot-godhead-language.jpg','Old Testament Godhead Language (p. 1): Explicit admission that the “binitarian” Divine Council model is patterned on Ugarit’s El, Asherah, and co-regent Baal.')]
  }
),{
  who:'Opening move · 01',
  forkTitle:'Watch out · common “Divine Council” & “Two Powers” proof-texts',
  forkSub:'Tap the passage they cite next to dismantle it with the exact biblical text.'
});

dualCard('divine-council-two-powers-ugarit',{
  title:'The “Divine Council” & “Two Powers” Argument: Ugarit’s El & Baal vs. Monotheism',
  k:'Old Testament',
  blurb:'How the “OT Godhead / Two Powers in Heaven” argument admits its model is Ugaritic El-and-Baal polytheism, and why Psalm 82:7, Deut 32:39, Gen 19:13, and Isa 44:24 refute it.',
  claim:'The Old Testament teaches a “binitarian Godhead” and “Two Powers in Heaven” through the Divine Council (Psalm 82; Deut 32:8–9; Gen 19:24).',
  tree:ugarRoot,
  sum:'The “Old Testament Godhead / Divine Council” paper openly admits its binitarian co-regency model parallels the polytheistic Canaanite pantheon of El, Asherah, and Baal—whereas Psalm 82:7 (“you shall die like men”), Genesis 19:13 (“the LORD sent us”), Deuteronomy 32:39, and Isaiah 44:24 affirm strict unitarian monotheism.'
});

/* ============================================================================
   3. ENSURE VERBATIM VERSE QUOTES ON ALL OT TRINITY CARDS & CROSS-MOUNT
      ALL 12 OVERLAPPING OT TRINITY / MESSIANIC CARDS INTO ot-trinity/
   ============================================================================ */
const findTopicNode=key=>{
  for(let i=TOPICS.length-1;i>=0;i--){
    const t=TOPICS[i], k=t.path.join('/');
    if(k===key && t.node && t.node.article) return t.node;
    if(key.startsWith(k+'/') && t.node && t.node.children){
      const c=t.node.children[key.slice(k.length+1)];
      if(c && c.article) return c;
    }
  }
  return null;
};

const addQuotesToTree=(node,rootQuotes,branchQuotes)=>{
  if(!node||!node.article||!node.article.tree) return;
  const t=node.article.tree;
  t.more=t.more||{};
  if(rootQuotes&&rootQuotes.length) t.more.quotes=rootQuotes;
  (t.next||[]).forEach((b,idx)=>{
    b.more=b.more||{};
    if(branchQuotes&&branchQuotes[idx]&&branchQuotes[idx].length) b.more.quotes=branchQuotes[idx];
  });
};

/* Enrich Genesis 1:26 with full verbatim verse quotes on root & branches */
const g126=findTopicNode('christianity/trinity/genesis-1-26-let-us-make');
addQuotesToTree(g126,[
  {by:'Genesis 1:26–27 (Plural speech followed immediately by singular verb wayyiḇrā)',en:'Then God said, “Let us make man in our image, after our likeness…” So God created (wayyiḇrā, singular) man in his own image, in the image of God he created him (bārāʾ ʾōṯō, singular).',ref:'Genesis 1:26–27'},
  {by:'Isaiah 44:24 (God created all things alone, by Himself)',en:'Thus says the LORD, your Redeemer, who formed you from the womb: “I am the LORD, who made all things, who alone stretched out the heavens, who spread out the earth by myself (mē-ʾittî)…”',ref:'Isaiah 44:24'},
  {by:'Isaiah 6:8 (God addressing the angelic court: “Who will go for us?”)',en:'And I heard the voice of the Lord saying, “Whom shall I send, and who will go for us?”',ref:'Isaiah 6:8'}
],[
  [
    {by:'Daniel 2:36 (Daniel uses royal/editorial “we” for himself alone)',en:'This was the dream. Now we will tell the king its interpretation.',ref:'Daniel 2:36'},
    {by:'Ezra 4:18 (King Artaxerxes uses royal “us”)',en:'The letter that you sent to us has been plainly read before me.',ref:'Ezra 4:18'},
    {by:'Qurʾān 15:9 (Majestic plural “We” in Semitic royal speech)',ar:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',en:'Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian.',ref:'Qurʾān 15:9'}
  ],
  [
    {by:'Genesis 1:27 (Three singular verbs and singular pronouns)',en:'So God created man in his own image, in the image of God he created him; male and female he created them.',ref:'Genesis 1:27'},
    {by:'1 Corinthians 11:7 (Man as the image and glory of God)',en:'For a man ought not to cover his head, since he is the image and glory of God.',ref:'1 Corinthians 11:7'},
    {by:'Isaiah 44:24',en:'I am the LORD, who made all things, who alone stretched out the heavens, who spread out the earth by myself.',ref:'Isaiah 44:24'}
  ]
]);

/* Enrich Genesis 18 with full verbatim verse quotes on root & branches */
const g18=findTopicNode('christianity/trinity/genesis-18-three-visitors');
addQuotesToTree(g18,[
  {by:'Genesis 18:1–2 (YHWH appears by sending three men)',en:'And the LORD appeared to him by the oaks of Mamre, as he sat at the door of his tent in the heat of the day. He lifted up his eyes and looked, and behold, three men were standing in front of him.',ref:'Genesis 18:1–2'},
  {by:'Genesis 18:22 & 19:1 (The men are explicitly identified as angels)',en:'So the men turned from there and went toward Sodom, but Abraham still stood before the LORD… The two angels came to Sodom in the evening.',ref:'Genesis 18:22; 19:1'},
  {by:'Hebrews 13:2 (NT identifies Abraham’s visitors as angels, not the Trinity)',en:'Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.',ref:'Hebrews 13:2'},
  {by:'Exodus 33:20 & John 1:18',en:'“You cannot see my face, for man shall not see me and live.” … No one has ever seen God at any time.',ref:'Exodus 33:20; John 1:18'}
],[
  [
    {by:'Exodus 33:20',en:'But,” he said, “you cannot see my face, for man shall not see me and live.”',ref:'Exodus 33:20'},
    {by:'John 1:18 & 1 Timothy 6:16',en:'No one has ever seen God… whom no man has seen or can see.',ref:'John 1:18; 1 Timothy 6:16'},
    {by:'Numbers 23:19',en:'God is not man, that he should lie, or a son of man, that he should change his mind.',ref:'Numbers 23:19'}
  ],
  [
    {by:'Genesis 18:22',en:'So the men turned from there and went toward Sodom, but Abraham still stood before the LORD.',ref:'Genesis 18:22'},
    {by:'Genesis 19:1, 13 (Two angels sent by the LORD)',en:'The two angels came to Sodom in the evening… “and the LORD has sent us to destroy it.”',ref:'Genesis 19:1, 13'}
  ]
]);

/* Enrich Isaiah 48:16 with full verbatim verse quotes on root & branches */
const i48=findTopicNode('christianity/trinity/isaiah-48-16-trinity');
addQuotesToTree(i48,[
  {by:'Isaiah 48:16 (ESV — “and His Spirit” as second object or co-sender of the prophet)',en:'Draw near to me, hear this: from the beginning I have not spoken in secret, from the time it came to be I have been there. And now the Lord GOD has sent me, and his Spirit.',ref:'Isaiah 48:16'},
  {by:'Isaiah 48:12 (The Divine Speaker is strictly singular)',en:'Listen to me, O Jacob, and Israel, whom I called! I am he; I am the first, and I am the last.',ref:'Isaiah 48:12'},
  {by:'Isaiah 45:5 (Same unit of Isaiah 40–48)',en:'I am the LORD, and there is no other, besides me there is no God.',ref:'Isaiah 45:5'}
],[
  [
    {by:'Isaiah 48:16 (RSV / NRSV — Spirit is the second direct object sent with the prophet)',en:'And now the Lord GOD has sent me and his Spirit.',ref:'Isaiah 48:16 (RSV)'},
    {by:'Isaiah 61:1 (The prophet Isaiah anointed with God’s Spirit and sent)',en:'The Spirit of the Lord GOD is upon me, because the LORD has anointed me to bring good news to the poor; he has sent me to bind up the brokenhearted…',ref:'Isaiah 61:1'}
  ],
  [
    {by:'Deuteronomy 29:2, 5–6 (Unannounced speaker shift from Moses to God)',en:'And Moses summoned all Israel and said to them: “…I have led you forty years in the wilderness… that you may know that I am the LORD your God.”',ref:'Deuteronomy 29:2, 5–6'},
    {by:'Zechariah 2:8–9 (The sent prophet speaks right after YHWH)',en:'For thus said the LORD of hosts… “And you shall know that the LORD of hosts has sent me.”',ref:'Zechariah 2:8–9'}
  ]
]);

/* Enrich Isaiah 63 with full verbatim verse quotes on root & branches */
const i63=findTopicNode('christianity/trinity/isaiah-63-holy-spirit');
addQuotesToTree(i63,[
  {by:'Isaiah 63:9–11',en:'In all their affliction he was afflicted, and the angel of his presence saved them… But they rebelled and grieved his Holy Spirit… Then he remembered the days of old, of Moses and his people. Where is he who brought them up out of the sea with the shepherds of his flock? Where is he who put in the midst of them his Holy Spirit?',ref:'Isaiah 63:9–11'},
  {by:'Isaiah 63:16 (The Father alone is YHWH and Redeemer)',en:'For you are our Father, though Abraham does not know us, and Israel does not acknowledge us; you, O LORD, are our Father, our Redeemer from of old is your name.',ref:'Isaiah 63:16'},
  {by:'Exodus 33:14 & Numbers 20:16',en:'And he said, “My presence will go with you, and I will give you rest.” … “when we cried to the LORD, he heard our voice and sent an angel and brought us out of Egypt.”',ref:'Exodus 33:14; Numbers 20:16'}
],[
  [
    {by:'Numbers 20:16 (Moses defines the Exodus deliverer as a sent angel)',en:'And when we cried to the LORD, he heard our voice and sent an angel and brought us out of Egypt.',ref:'Numbers 20:16'},
    {by:'Haggai 1:13 (Prophet called malʾakh YHWH)',en:'Then Haggai, the messenger of the LORD, spoke to the people with the LORD’s message.',ref:'Haggai 1:13'}
  ],
  [
    {by:'Psalm 51:11 (King David prays for God’s “Holy Spirit” in the OT)',en:'Cast me not away from your presence, and take not your Holy Spirit from me.',ref:'Psalm 51:11'},
    {by:'Isaiah 66:2 (Reductio ad absurdum: God, His Hand, and His Spirit)',en:'All these things my hand has made, and so all these things came to be, declares the LORD. But this is the one to whom I will look: he who is humble and contrite in spirit…',ref:'Isaiah 66:2'},
    {by:'Isaiah 55:12 (Poetic personification in Isaiah)',en:'the mountains and the hills before you shall break forth into singing, and all the trees of the field shall clap their hands.',ref:'Isaiah 55:12'}
  ]
]);

/* Cross-mount overlapping OT Trinity & Messianic cards into christianity/trinity/ot-trinity/
   while ALSO keeping them in their existing folders so overlap works in both categories! */
const crossMountList=[
  ['christianity/trinity/genesis-1-26-let-us-make','genesis-1-26-let-us-make'],
  ['christianity/trinity/genesis-18-three-visitors','genesis-18-three-visitors'],
  ['christianity/trinity/isaiah-48-16-trinity','isaiah-48-16-trinity'],
  ['christianity/trinity/isaiah-63-holy-spirit','isaiah-63-holy-spirit'],
  ['christianity/islam-vs/prophecies/son-of-man-daniel-7-gospels','son-of-man-daniel-7-gospels'],
  ['christianity/islam-vs/d-dr-isaiah-9','isaiah-9-6-mighty-god'],
  ['christianity/jesus/d-dr-matthew','isaiah-7-14-immanuel'],
  ['christianity/jesus/proof-texts/psalm-22-pierced-hands-and-feet','psalm-22-pierced-hands-and-feet'],
  ['christianity/jesus/proof-texts/zechariah-12-10-pierced','zechariah-12-10-pierced'],
  ['christianity/jesus/proof-texts/genesis-3-15-protoevangelium','genesis-3-15-protoevangelium']
];

for(const [origKey,slug] of crossMountList){
  const n=findTopicNode(origKey);
  if(n) topic(['christianity','trinity','ot-trinity',slug],JSON.parse(JSON.stringify(n)));
  else console.warn('ot-trinity-angel-playbook: missing crossMount source',origKey);
}

})();
