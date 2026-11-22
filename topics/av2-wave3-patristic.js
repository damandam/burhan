/* Averroes 2 Wave 3 (Patristic & Scholastic Admissions: Augustine, Justin Martyr, Aquinas, Chrysostom, Jerome & Aphrahat) — 2026-11-22.
   Translates and synthesizes 9 German Averroes 2 dossiers (server 1295033866385358860)
   across 5 new Tactical Debate Playbook cards and 2 add() enrichments:
   1. NEW: christianity/church/augustine-church-authority-and-synoptics (#augustinus-glaubt-nicht-an-evangelium + #agustinus-gibt-zu-synoptische-evangelien-ist-nicht-über-jesus-göttlichkeit)
   2. NEW: christianity/church/justin-martyr-pagan-sons-of-jupiter (#heidentum-justin-sohn-gottes)
   3. NEW: christianity/trinity/aquinas-trinity-unprovable-by-reason (#triniät-beweisen-mit-vernunft-unmöglich)
   4. NEW: christianity/cross/aquinas-incarnation-not-necessary-for-forgiveness (#inkarnation-nicht-notwendig-aquinas-vergebung-anselm + #gott-kann-vergeben-ohne-opfer)
   5. NEW: christianity/church/john-chrysostom-christology-subordination (#johannes-chrytostomus-sagt-jesus-ist-nicht-gott)
   6. add(): christianity/islam-vs/dilemma/church-fathers-on-alteration (#abschreiber-ändern-bibel-verfälscht-hieronymous)
   7. add(): christianity/church/aphrahat-persian-sage-christology (#aphrahat-gott-und-anbetung-ist-titel-jesus) */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('av2-wave3-patristic: no card',key); };

const AV2=(sub,id)=>({credit:'Averroes 2 · '+sub,link:'https://discord.com/channels/1295033866385358860/'+id});

/* ============================================================================
   1. NEW Tactical Playbook card: christianity/church/augustine-church-authority-and-synoptics
   ============================================================================ */
const AUG_CH=AV2('#augustinus-glaubt-nicht-an-evangelium · #agustinus-gibt-zu-synoptische-evangelien-ist-nicht-über-jesus-göttlichkeit','1435738887661293669');

const augTrapA=P(N(
  AUG_CH,
  'Augustine only meant that the Church historically introduced him to the Gospel—not that biblical authority depends on the Catholic hierarchy or that textual proof from the Gospel can be dismissed!',
  'Read the very next sentences in Contra Epistulam Manichaei 5.6: Augustine explicitly tells his opponent to “lay aside the Gospel” because even if someone produced an irrefutable proof from the Gospel text against Catholic teaching, Augustine says that would destroy the authority of the Catholics who commanded him to believe the Gospel—and therefore he would stop believing the Gospel itself!',
  'Contra Epistulam Manichaei 5.6: Augustine’s circular trap where Church dogma overrides the Gospel text',
  [
    '01 · “If you want to convince me, you must lay aside the Gospel” (Contra Ep. Man. 5.6): Addressing a rival citing the Gospel to prove a prophetic claim, Augustine refuses to debate from the biblical text alone, declaring that if his opponent clings to the Gospel, Augustine will cling to the Catholic bishops who commanded him to believe the Gospel and will refuse to believe the text’s challenger.',
    '02 · Even an irrefutable proof in the Gospel would make Augustine abandon the Gospel: Augustine goes further—he writes that if an opponent somehow found a clear, undeniable proof inside the Gospel itself contradicting Catholic dogma, that proof would weaken the authority of the Catholics through whom alone he received faith in the Gospel, “and the result would be that I could no longer believe the Gospel itself either!”',
    '03 · Fatal dilemma for both Protestants and Catholics: For Protestants who revere Augustine while preaching sola scriptura, Augustine openly subordinates the Bible to the Catholic Magisterium that canonized it at Hippo (393) and Carthage (397). For Catholics, Augustine exposes an unfalsifiable circularity—and begs the historical question of how earliest Christians before a centralized Catholic hierarchy could believe at all if faith in the Gospel depends entirely on institutional command.'
  ],
  ['Augustine of Hippo, Against the Fundamental Epistle of Manichaeus (Contra Epistulam Manichaei quam vocant Fundamenti), Ch. 5, §6','Councils of Hippo (393 CE) & Carthage (397 CE)'],
  [],
  {
    facts:[
      ['Work & Passage','Contra Epistulam Manichaei 5.6 (c. 397 CE)'],
      ['Augustine’s Rule','Believes the Gospel only on Catholic Church command'],
      ['Unfalsifiable Loop','Proof from the Gospel against Rome destroys the Gospel'],
      ['Sola Scriptura Impact','Canon rests on the very Church Protestants reject']
    ],
    quotes:[
      {by:'Augustine (Contra Epistulam Manichaei 5.6)',en:'For my part, I should not believe the Gospel except as moved by the authority of the Catholic Church.',ref:'Contra Epistulam Manichaei 5.6'},
      {by:'Augustine (Contra Epistulam Manichaei 5.6)',en:'If you find in the Gospel an undeniable proof… you weaken Catholic authority, and I could no longer believe the Gospel itself.',ref:'Contra Epistulam Manichaei 5.6'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Augustine only meant the Church was the historical witness that handed him the Bible—he never placed Church authority above the Gospel text!',
  theyWho:'Watch out · if they say',
  who:'Read the rest of Contra Epistulam Manichaei 5.6'
});

const augTrapB=P(N(
  AUG_CH,
  'Even if Augustine said the Synoptics focus on Christ’s kingship and priesthood, Matthew, Mark, and Luke still teach his eternal divine pre-existence just as clearly as John!',
  'In The Harmony of the Gospels (De Consensu Evangelistarum, Book 4, Ch. 10, §11), Augustine admits as a “universally recognized fact” (bekannte Tatsache) that the first three Evangelists—Matthew, Mark, and Luke—dealt primarily with the humanity of Jesus Christ (by which he is human king and priest) and left the assertion of his immutable divine pre-existence to the fourth Evangelist, John.',
  'De Consensu Evangelistarum 4.10.11: Why three full Gospels omit eternal divine pre-existence',
  [
    '01 · A “universally recognized fact” in the 5th-century Church (De Consensu 4.10.11): In Book IV, Chapter 10 (“On the Evangelist John and the Difference Between Him and the Other Three”), Augustine concedes that Matthew, Mark, and Luke occupied themselves mainly with Christ’s human nature, temporal genealogy, kingship, and priesthood.',
    '02 · The theological silence of the Synoptics: Neither Mark (the earliest Gospel, c. 70 CE), nor Matthew, nor Luke ever contains an “I Am” deity speech, a Logos incarnation prologue (John 1.1–14), or a claim by Jesus to have existed alongside the Father before creation (John 17.5).',
    '03 · Why did three inspired Evangelists write whole Gospels focused on humanity?: If believing that Jesus is co-eternal Almighty God were the prerequisite for Christian salvation, Matthew, Mark, and Luke could not have written independent Gospel accounts to three different Christian communities while restricting their portrait primarily to his human messianic office.'
  ],
  ['Augustine of Hippo, The Harmony of the Gospels (De Consensu Evangelistarum), Book IV, Ch. 10, §11','Averroes 2 · #agustinus-gibt-zu-synoptische-evangelien-ist-nicht-über-jesus-göttlichkeit'],
  [],
  {
    facts:[
      ['Source','Augustine, De Consensu Evangelistarum IV.10.11'],
      ['Matthew, Mark, Luke','Concerned primarily with Christ’s humanity'],
      ['Synoptic Offices','Messianic Kingship and Priesthood in human nature'],
      ['John Alone','Added late discourse on eternal pre-existence']
    ],
    quotes:[
      {by:'Augustine (Harmony of the Gospels IV.10.11)',en:'It is a generally recognized fact that the first three—Matthew, Mark, and Luke—occupied themselves chiefly with the humanity of our Lord Jesus Christ.',ref:'De Consensu Evangelistarum IV.10.11'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Matthew, Mark, and Luke teach Jesus’s eternal deity and pre-existence just as explicitly as the Gospel of John!',
  theyWho:'Watch out · if they say',
  who:'Cite Augustine’s De Consensu Evangelistarum 4.10.11'
});

card('christianity/church/augustine-church-authority-and-synoptics',{
  title:'Augustine’s Double Concession: Blind Submission to Church Authority & the Human Focus of the Synoptics',
  k:'Patristic Admissions · Canon Authority & Synoptic Christology',
  blurb:'Augustine’s admission in Contra Epistulam Manichaei 5.6 that he would reject the Gospel itself without Catholic authority, and in De Consensu Evangelistarum 4.10.11 that Matthew, Mark, and Luke focus on Jesus’s humanity.',
  claim:'The Gospel text is self-authenticating under Sola Scriptura, and all four canonical Gospels equally proclaim Jesus’s eternal deity.',
  tree:P(N(
    AUG_CH,
    'The New Testament Gospels are self-authenticating Scripture that every Christian believes on their own textual authority, and all four Evangelists equally proclaim Jesus as co-eternal God.',
    'Western Christianity’s most influential Church Father, Augustine of Hippo (354–430 CE), shatters both assumptions in his own writings: in Contra Epistulam Manichaei 5.6 he declares that he would not believe the Gospel at all without the command of the Catholic Church—even admitting that if someone proved a rival prophet from the Gospel text, he would abandon the Gospel rather than disobey Catholic bishops—and in De Consensu Evangelistarum 4.10.11 he concedes as a well-known fact that Matthew, Mark, and Luke dealt primarily with Jesus’s humanity rather than divine pre-existence!',
    'Augustine on the circular authority of the Gospel canon and the human Christology of Matthew, Mark, and Luke',
    [
      '01 · “I would not believe the Gospel except as moved by the Catholic Church” (Contra Epistulam Manichaei 5.6): Debating opponents who appealed directly to the Gospel text, Augustine confesses that the Gospel has no independent epistemic authority for him outside the decree of the Catholic Church.',
      '02 · Dogma trumps the biblical text itself (Contra Ep. Man. 5.6): Augustine explicitly tells his interlocutor to “lay aside the Gospel,” stating that if an opponent succeeded in finding an irrefutable proof in the Gospel text against Catholic teaching, it would weaken Catholic authority and cause Augustine to stop believing the Gospel itself—rendering any textual appeal to the Bible completely unfalsifiable.',
      '03 · The Protestant Sola Scriptura & early Church paradox: Protestants inherit their 27-book New Testament canon from the North African Catholic synods (Hippo 393, Carthage 397) dominated by Augustine, yet reject the very Catholic Magisterium Augustine says is the sole reason to believe the Gospel—while Augustine’s rule leaves unanswered how earliest Christians could believe the Gospel before an imperial Catholic hierarchy existed.',
      '04 · Matthew, Mark, and Luke focus on Jesus’s humanity (De Consensu Evangelistarum 4.10.11): In Book IV, Chapter 10 of his Harmony of the Gospels, Augustine admits it is “a generally recognized fact that the first three—namely Matthew, Mark, and Luke—occupied themselves chiefly with the humanity of our Lord Jesus Christ, through which he is both King and Priest,” leaving high claims of pre-existent divinity to the late Gospel of John.'
    ],
    ['Augustine of Hippo, Contra Epistulam Manichaei quam vocant Fundamenti, Ch. 5, §6','Augustine of Hippo, De Consensu Evangelistarum (The Harmony of the Gospels), Book IV, Ch. 10, §11','Averroes 2 · #augustinus-glaubt-nicht-an-evangelium & #agustinus-gibt-zu-synoptische-evangelien-ist-nicht-über-jesus-göttlichkeit'],
    [augTrapA,augTrapB],
    {
      facts:[
        ['Contra Ep. Man. 5.6','Would not believe the Gospel without Catholic authority'],
        ['Circular Dogma Trap','Proof in the Gospel against Rome makes him drop the Gospel'],
        ['De Consensu 4.10.11','Matthew, Mark & Luke focus chiefly on Christ’s humanity'],
        ['Synoptic Roles','Human Messianic King and Priest vs. John’s Logos']
      ],
      quotes:[
        {by:'Augustine (Contra Epistulam Manichaei 5.6)',en:'For my part, I should not believe the Gospel except as moved by the authority of the Catholic Church.',ref:'Contra Epistulam Manichaei 5.6'},
        {by:'Augustine (De Consensu Evangelistarum IV.10.11)',en:'The first three—namely Matthew, Mark, and Luke—occupied themselves chiefly with the humanity of our Lord Jesus Christ, by which he is both King and Priest.',ref:'Harmony of the Gospels IV.10.11'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Contra Epistulam Manichaei 5.6 (Canon Authority)',
          items:[
            'Gospel belief rests entirely on the command of the Catholic hierarchy',
            'Tells opponents to “lay aside the Gospel” in theological disputes',
            'Admits an undeniable proof in the Gospel against Catholic teaching would make him disbelieve the Gospel itself'
          ]
        },
        right:{
          title:'De Consensu Evangelistarum 4.10.11 (Synoptics vs. John)',
          items:[
            'Admits as a universally known fact that Matthew, Mark, and Luke focus chiefly on Jesus’s humanity',
            'Presents Jesus in the Synoptics through his human messianic offices of King and Priest',
            'Isolates eternal divine pre-existence to the fourth Gospel (John)'
          ]
        }
      }
    }
  ),{
    who:'Deploy Augustine’s two admissions on Canon & Synoptics',
    forkTitle:'Two apologetic escapes on Augustine',
    forkSub:'Expose the circularity of Contra Epistulam Manichaei 5.6 or the human Christology of the Synoptics in De Consensu 4.10.11'
  }),
  sum:'In Contra Epistulam Manichaei 5.6 and De Consensu Evangelistarum 4.10.11, Augustine of Hippo admits that faith in the Gospel rests on blind submission to Catholic Church authority (even over an irrefutable proof inside the Gospel text itself) and concedes that Matthew, Mark, and Luke occupied themselves chiefly with Jesus’s humanity rather than eternal deity.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: christianity/church/justin-martyr-pagan-sons-of-jupiter
   ============================================================================ */
const JUSTIN=AV2('#heidentum-justin-sohn-gottes','1493741441699024947');

const justinTrapA=P(N(
  JUSTIN,
  'Justin Martyr wasn’t saying Christianity copied paganism—he argued in Chapters 21 and 54 that wicked demons read the Old Testament prophecies in advance and invented counterfeit pagan myths to deceive mankind!',
  'Justin’s “pre-emptive demonic plagiarism” excuse (First Apology 21 & 54) actually concedes the entire historical point: first, it admits that virgin-born demigods, dying-and-rising sons of Zeus, and divine Logos figures already existed across Greco-Roman religion centuries before Jesus; second, the Old Testament verses Justin claims the demons read (like Genesis 49:10–11 or Isaiah 7:14) say nothing about a crucified, ascending Son of God—meaning the parallels come from the Greco-Roman world Justin lived in, not from Hebrew prophecies!',
  'Why Justin’s “demonic counterfeit in advance” theory in First Apology 21 & 54 collapses',
  [
    '01 · Justin admits the pagan myths predated Christianity (First Apology 21, 54): By arguing that evil demons heard the ancient Hebrew prophets and fabricated the stories of Perseus, Asclepius, Dionysus, Heracles, and Hermes beforehand, Justin confirms that these pagan “son of god” motifs were already established centuries before the New Testament was written.',
    '02 · The Hebrew Scriptures do not contain the pagan motifs Justin blames on demons: In Chapter 54, Justin claims demons invented Dionysus from Jacob’s blessing about tying a foal to a vine (Genesis 49.10–11), Asclepius from Isaiah 35.6 (“the lame shall leap”), and Perseus from Isaiah 7.14. None of those Hebrew texts describes a son of the supreme deity dying violently and ascending to Olympus—proving the template was natively Hellenistic.',
    '03 · Pitching Jesus to Roman Emperors as “nothing strange compared to your sons of Zeus” (Ch. 21): If the incarnation and virgin birth were radically unique biblical truths alien to pagan polytheism, a 2nd-century Christian philosopher would never plead for Roman tolerance by telling Emperor Antoninus Pius that Christian claims about Jesus are “nothing strange compared to those whom you esteem sons of Jupiter/Zeus.”'
  ],
  ['Justin Martyr, First Apology (Apologia Prima), Chs. 21–22, 54 (c. 150–155 CE)','Averroes 2 · #heidentum-justin-sohn-gottes'],
  [],
  {
    facts:[
      ['Justin’s Excuse (Ch. 54)','Demons read the OT and invented pagan myths first'],
      ['Historical Admission','Pagan “sons of Zeus” predated Christianity by centuries'],
      ['OT Mismatch','Gen 49:10 & Isa 35:6 do not mention dying/rising demigods'],
      ['Apologetic Strategy','Normalized Son-of-God dogma using Greco-Roman templates']
    ],
    quotes:[
      {by:'Justin Martyr (First Apology 21)',en:'When we say the Logos was produced without sexual union… we propound nothing different from what you believe regarding the sons of Jupiter.',ref:'First Apology 21'},
      {by:'Justin Martyr (First Apology 54)',en:'The myths which the poets have made… were uttered by the wicked demons to deceive and lead astray the human race.',ref:'First Apology 54'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Justin explained in Chapters 21 and 54 that wicked demons read Old Testament prophecies and pre-emptively forged those pagan myths!',
  theyWho:'Watch out · if they say',
  who:'Expose the collapse of Justin’s “demonic time-travel” excuse'
});

const justinTrapB=P(N(
  JUSTIN,
  'Modern scholars have debunked the “pagan copycat” myth—the New Testament comes purely from Second Temple Jewish monotheism, not Greco-Roman mythology!',
  'You are not arguing against a modern internet skeptic—you are arguing against Saint Justin Martyr (c. 150 CE), one of the earliest and most revered Greek Church Fathers! Writing directly to the Roman Emperor in his First Apology (Chs. 21–22), Justin himself draws a point-by-point equivalence table matching six core Christian doctrines about Jesus (Logos, virgin birth, healing miracles, violent death, resurrection, and ascension) to six Greco-Roman sons of Zeus (Hermes, Perseus, Asclepius, Dionysus/Heracles, and Bellerophon).',
  'First Apology 21–22: The parallels come straight from a 2nd-century Church Father, not modern skeptics',
  [
    '01 · Not a modern skeptical invention—it is 2nd-century patristic apologetics: Modern apologists routinely dismiss comparisons between Jesus, Perseus, Asclepius, Dionysus, and Hermes as “19th-century mythicist nonsense.” Yet the exact six-part comparison was formulated in 150–155 CE by Justin Martyr himself in Rome.',
    '02 · Justin’s verbatim one-to-one mapping in Chapter 22: Justin explicitly tells the Roman Senate and Emperor: (1) If we call him the Logos/Word of God, you call Hermes the interpreting Logos and teacher of all; (2) If we say he was born of a virgin without sexual union, let this be to you in common with Perseus (born of Danaë); (3) If we say he healed the lame, paralytic, and blind and raised the dead, this matches what you say of Asclepius; (4) If we say he was crucified, suffered, and ascended to heaven, this matches the suffering sons of Zeus (Dionysus torn apart, Heracles on the pyre, Asclepius struck by lightning, Bellerophon on Pegasus, and deified Caesars).',
    '03 · Why Jewish monotheism rejected it while Greco-Roman pagans understood it immediately: Within strict Jewish monotheism (and Islam), the idea that the Creator has begotten offspring or incarnated demigods is blasphemy; in the Greco-Roman world addressed by Justin, divine sonship, virgin birth, and apotheosis were standard mythological categories.'
  ],
  ['Justin Martyr, First Apology (Apologia Prima), Chs. 21–22 (c. 150–155 CE, BKV / Rauschen 1913)'],
  [],
  {
    facts:[
      ['Author & Audience','Justin Martyr to Emperor Antoninus Pius (c. 150–155 CE)'],
      ['Logos & Virgin Birth','Equated directly with Hermes and Perseus (son of Danaë)'],
      ['Miracles & Raising Dead','Equated directly with Asclepius the healer'],
      ['Suffering & Ascension','Equated with Dionysus, Heracles, Bellerophon & Caesars']
    ],
    quotes:[
      {by:'Justin Martyr (First Apology 22)',en:'If we even affirm that He was born of a virgin, accept this in common with what you accept of Perseus.',ref:'First Apology 22'},
      {by:'Justin Martyr (First Apology 22)',en:'When we say He healed the lame, the paralytic, and those born blind, we say things similar to those attributed to Asclepius.',ref:'First Apology 22'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Comparing Jesus to Perseus, Dionysus, or Asclepius is modern internet mythicism that serious historians reject!',
  theyWho:'Watch out · if they say',
  who:'Show that St. Justin Martyr himself wrote the 6-point table in 150 CE'
});

card('christianity/church/justin-martyr-pagan-sons-of-jupiter',{
  title:'Justin Martyr (First Apology 21–22): Equating Jesus with the Pagan Sons of Zeus',
  k:'Patristic Apologetics · Greco-Roman Parallels',
  blurb:'Justin Martyr’s First Apology (Chs. 21–22) defending Christian claims about Jesus’s virgin birth, Logos title, healings, passion, and ascension by equating them point-for-point with Perseus, Hermes, Asclepius, Dionysus, Heracles, and Bellerophon.',
  claim:'The Christian doctrine of the incarnate, dying-and-rising Son of God is entirely distinct from Greco-Roman pagan mythology.',
  tree:P(N(
    JUSTIN,
    'Christian belief in the incarnate, virgin-born, crucified and ascending Son of God has nothing in common with Greco-Roman pagan myths.',
    'In his First Apology (Chapters 21–22, written c. 150–155 CE to Roman Emperor Antoninus Pius), early Church Father Justin Martyr explicitly defends Christian claims about Jesus by telling the pagan emperors that Christianity teaches “nothing strange compared to those whom you esteem sons of Jupiter (Zeus)”—laying out in his own words a six-point equivalence between Jesus and Hermes (the Logos), Perseus (virgin birth from Danaë), Asclepius (healing the lame/blind, raising the dead, ascending), Dionysus and Heracles (violent suffering and death), and Bellerophon/deified emperors (ascension to heaven)!',
    'Justin Martyr’s 6-point pagan equivalence table in First Apology 21–22',
    [
      '01 · “We bring forward nothing strange compared to your sons of Zeus” (First Apology 21): Addressing the Roman Emperor and Senate directly, Justin argues that if Christians affirm the Logos was begotten without sexual union as Jesus Christ, they propose nothing unfamiliar to believers in the sons of Zeus.',
      '02 · Virgin birth = Perseus; Logos = Hermes (First Apology 21–22): In Chapter 22, Justin writes that calling Jesus the Word/Reason (Logos) of God matches pagan belief in Hermes as “the interpreting Logos and teacher of all,” and affirming that Jesus was born of a virgin without a human father is “in common with what you accept of Perseus” (born of Danaë).',
      '03 · Healing & raising the dead = Asclepius (First Apology 21–22): Justin states that when Christians say Jesus healed the lame, the paralytic, and those born blind and raised the dead, “we seem to say things similar to those said to have been done by Asclepius.”',
      '04 · Violent death & ascension to heaven = Dionysus, Heracles, Asclepius, Bellerophon & Caesars (First Apology 21–22): Justin equates Jesus’s crucifixion, violent suffering, and ascension into heaven with the suffering and deified sons of Zeus—Dionysus torn to pieces, Heracles burning himself on the pyre, Asclepius struck by a thunderbolt and ascending, Bellerophon rising on Pegasus, and deceased Roman emperors attested as ascending to heaven—before claiming in Chapters 21 and 54 that wicked demons pre-emptively forged these pagan myths after reading the Old Testament!'
    ],
    ['Justin Martyr, First Apology (Apologia Prima), Chs. 21–22, 54 (c. 150–155 CE; BKV / Gerhard Rauschen 1913)','Averroes 2 · #heidentum-justin-sohn-gottes'],
    [justinTrapA,justinTrapB],
    {
      facts:[
        ['First Apology 21','“Nothing strange compared to your sons of Zeus”'],
        ['Virgin Birth & Logos','Matched by Justin to Perseus (Danaë) and Hermes'],
        ['Miracles & Resurrection','Matched by Justin to Asclepius the healer'],
        ['Death & Ascension','Matched to Dionysus, Heracles & Bellerophon']
      ],
      quotes:[
        {by:'Justin Martyr (First Apology 21)',en:'When we say the Logos was begotten without sexual union, as Jesus Christ our teacher, we propose nothing strange compared with your sons of Zeus.',ref:'First Apology 21'},
        {by:'Justin Martyr (First Apology 22)',en:'If we say He was born of a virgin, accept this in common with Perseus; and healing the lame and blind is similar to Asclepius.',ref:'First Apology 22'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Christian Claim about Jesus (Justin, 1 Apol. 21–22)',
          items:[
            'Begotten without a human father from a virgin; Word/Logos of God',
            'Heals the lame, paralytic, and blind; raises the dead',
            'Suffers violent death (crucifixion) and ascends into heaven'
          ]
        },
        right:{
          title:'Pagan Counterpart Cited by Justin Martyr Himself',
          items:[
            'Perseus (born of Danaë without a man) & Hermes (“interpreting Logos and teacher of all”)',
            'Asclepius (divine physician, healer, raiser of the dead, struck by lightning and deified)',
            'Dionysus (torn apart), Heracles (burned on pyre), Bellerophon (on Pegasus) & deified Emperors'
          ]
        }
      }
    }
  ),{
    who:'Deploy Justin Martyr’s First Apology 21–22',
    forkTitle:'Two ways apologists react to Justin’s Zeus parallels',
    forkSub:'Dismantle Justin’s “pre-emptive demonic counterfeit” excuse (Ch. 54) or show that the 6-point table comes from a 2nd-century saint'
  }),
  sum:'In First Apology 21–22 (c. 150–155 CE), Church Father Justin Martyr explicitly defends Christian dogma before the Roman Emperor by equating Jesus’s virgin birth, Logos title, healing miracles, violent death, and ascension point-for-point with the pagan sons of Zeus—Perseus, Hermes, Asclepius, Dionysus, Heracles, and Bellerophon.'
});

/* ============================================================================
   3. NEW Tactical Playbook card: christianity/trinity/aquinas-trinity-unprovable-by-reason
   ============================================================================ */
const AQ_TRIN=AV2('#triniät-beweisen-mit-vernunft-unmöglich','1498322566173954099');

const aqTrinTrapA=P(N(
  AQ_TRIN,
  'Aquinas only said strict Aristotelian deduction can’t prove the Trinity—philosophical analogies like the human mind (memory, intellect, will) or Richard of St. Victor’s “God is love so He needs multiple Persons” still give rational proof!',
  'In Summa Theologiae I, q. 32, a. 1 (Objection 2 & Reply to Objection 2), Aquinas specifically examines and refutes both the “infinite good/love diffusing itself” argument (Richard of St. Victor / Bonaventure) and Augustine’s psychological analogy of the mind (intellect and will)—ruling that they are NOT rational proofs (demonstrationes) at all, but merely post-hoc illustrations (convenientia) that only work if you already assume Trinitarian faith!',
  'Summa Theologiae I, q. 32, a. 1 ad 2: Aquinas demolishes the “God is Love” and “Human Mind” Trinity proofs',
  [
    '01 · Aquinas explicitly lists the “God is Love / Self-Communicating Good” and “Mind” arguments in Objection 2: In Question 32, Article 1, Objection 2 cites both the argument that infinite goodness must communicate itself infinitely in divine persons and Augustine’s psychological model of the mind’s word and love.',
    '02 · Reply to Objection 2 — Both arguments fail as rational proofs: In his Reply to Objection 2 (ad 2), Aquinas demolishes both: first, God’s infinite goodness is already manifested externally by creating the universe out of nothing, and cannot prove an internal plurality of infinite Persons; second, human intellect and will do not constitute separate persons in us, so the psychological analogy cannot prove three distinct Persons in God.',
    '03 · Post-hoc illustrations (convenientia), never proof (demonstratio): Aquinas explains that there are two uses of reason: one to prove a principle (like proving in natural science that the earth is spherical), and another to show consistency after a hypothesis is already assumed without proving it is necessary. Treating Trinitarian analogies as actual rational proofs is a logical fallacy.'
  ],
  ['Thomas Aquinas, Summa Theologiae, Part I, Question 32, Article 1 (Obj. 2 & ad 2)','Averroes 2 · #triniät-beweisen-mit-vernunft-unmöglich'],
  [],
  {
    facts:[
      ['Target 1 (q. 32, a. 1 ad 2)','“God is Love / Infinite Good needs multiple Persons”'],
      ['Target 2 (q. 32, a. 1 ad 2)','Psychological analogy of human mind, word, and love'],
      ['Aquinas’s Verdict','Neither is a valid rational demonstration (demonstratio)'],
      ['Logical Status','Mere post-hoc illustration (convenientia) assuming faith']
    ],
    quotes:[
      {by:'Thomas Aquinas (Summa Theologiae I, q. 32, a. 1, Respondeo)',en:'It is impossible to attain to the knowledge of the Trinity of divine Persons by natural reason.',ref:'Summa Theologiae I, q. 32, a. 1'},
      {by:'Thomas Aquinas (Summa Theologiae I, q. 32, a. 1, ad 2)',en:'That in us the intellect and will are not distinct persons shows that the likeness is not complete, and therefore does not prove the point.',ref:'Summa Theologiae I, q. 32, a. 1 ad 2'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Even without strict proof, the “God is love so He needs three Persons” argument and the analogy of the human mind rationally demonstrate the Trinity!',
  theyWho:'Watch out · if they say',
  who:'Show how Aquinas refutes both in q. 32, a. 1 ad 2'
});

const aqTrinTrapB=P(N(
  AQ_TRIN,
  'Wait—doesn’t Aquinas say natural reason cannot prove ALL mysteries of God? So Islamic Tawhid is in the exact same boat as the Trinity!',
  'Exact opposite! In Summa Theologiae I, q. 2, a. 2–3, q. 11, a. 3, and directly inside q. 32, a. 1, Aquinas states that natural reason CAN strictly demonstrate from creation that God exists and that God is One in essence and power (strict monotheism / Tawhid), because all creatures proceed from the single creative power of the one God—whereas a Trinity of distinct Persons leaves zero causal proof in creation!',
  'Summa Theologiae I, q. 32, a. 1: Natural reason proves Tawhid (One God), never a Trinity of Persons',
  [
    '01 · Why natural reason proves One Creator (Tawhid): In q. 32, a. 1 (Respondeo), Aquinas explains that humans know God naturally by reasoning from effects (creation) to their First Cause. Because the creative power of God is one and common, natural reason can strictly prove the existence of God and the unity of the divine essence (that there is only One God).',
    '02 · Why creation never points to three Persons: Aquinas notes that because creation proceeds from the one indivisible divine power, reasoning from creation can only ever lead back to the unity of one Creator—never to a distinction of three co-eternal Persons.',
    '03 · Aquinas warns apologists about “the mockery of unbelievers” (derisus infidelium): Because natural reason proves divine unity (Tawhid) while failing completely to prove a Trinity, Aquinas warns that Christian apologists who try to prove the Trinity by reason actually harm Christianity in two ways: they degrade faith and expose Christianity to the derision of non-Christians (derisus infidelium), who see how weak their arguments are and conclude that Christians believe the Trinity on the basis of such fallacies!'
  ],
  ['Thomas Aquinas, Summa Theologiae, Part I, Question 32, Article 1 (Respondeo); cf. I, q. 2, a. 3 & q. 11, a. 3'],
  [],
  {
    facts:[
      ['Proved by Reason','God’s existence and the Unity of One Creator (Tawhid)'],
      ['Unprovable by Reason','The Trinity of three distinct divine Persons'],
      ['Causal Principle','Creation proceeds from one indivisible creative power'],
      ['Aquinas’s Warning','Rational Trinity proofs invite derisus infidelium (mockery)']
    ],
    quotes:[
      {by:'Thomas Aquinas (Summa Theologiae I, q. 32, a. 1)',en:'By natural reason we can know what belongs to the unity of the essence, but not what belongs to the distinction of the Persons.',ref:'Summa Theologiae I, q. 32, a. 1'},
      {by:'Thomas Aquinas (Summa Theologiae I, q. 32, a. 1)',en:'Whoever tries to prove the Trinity of Persons by natural reason derogates from faith… and exposes it to the derision of unbelievers.',ref:'Summa Theologiae I, q. 32, a. 1'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'If natural reason can’t prove the Trinity, then it can’t prove Islamic monotheism (Tawhid) either!',
  theyWho:'Watch out · if they say',
  who:'Show Aquinas proving One God by reason while warning of derisus infidelium'
});

card('christianity/trinity/aquinas-trinity-unprovable-by-reason',{
  title:'Thomas Aquinas (Summa Theologiae I, q. 32, a. 1): The Trinity Cannot Be Proved by Reason',
  k:'Scholastic Theology · Trinity vs. Natural Reason',
  blurb:'Aquinas’s ruling in Summa Theologiae I, q. 32, a. 1 that natural reason can prove One God (unity of essence) from creation, but can never prove the Trinity of Persons—and that apologists who try expose Christianity to the mockery of unbelievers.',
  claim:'The doctrine of the Trinity can be rationally demonstrated through philosophical arguments such as the nature of divine love or the structure of the human mind.',
  tree:P(N(
    AQ_TRIN,
    'Rational philosophy and arguments from perfect love or the human mind can prove that God must exist as a Trinity of three Persons.',
    'The greatest philosopher-theologian in Western Christian history, Saint Thomas Aquinas (1225–1274), explicitly refutes this claim in Summa Theologiae, Part I, Question 32, Article 1 (“Whether the Trinity of the Divine Persons can be known by natural reason?”): he rules unconditionally that “it is impossible to attain to the knowledge of the Trinity of divine Persons by natural reason,” demonstrates that natural reason from creation proves only the Unity of One God (Tawhid), refutes both the “infinite self-diffusing love/goodness” argument and the “human mind” analogy, and warns that apologists who try to prove the Trinity by reason expose Christianity to “the derision of unbelievers” (derisus infidelium)!',
    'Aquinas’s Summa Theologiae I, q. 32, a. 1 on the impossibility of proving the Trinity by reason',
    [
      '01 · Unconditional verdict — “Impossible by natural reason” (ST I, q. 32, a. 1, Respondeo): Aquinas states without qualification: “It is impossible to attain to the knowledge of the Trinity of divine Persons by natural reason.” One can only hold the Trinity if one already presupposes Christian revelation by faith.',
      '02 · Natural reason from creation proves One God (Tawhid), never three Persons: Aquinas explains that human reason knows God from His effects (creation) as First Cause. Because the creative power of God is one and indivisible across all creation, natural reason can demonstrate the existence and unity of the one divine essence (strict monotheism), but can never infer a distinction of three Persons.',
      '03 · Explicit refutation of the “God is Love / Self-Communicating Good” and “Human Mind” proofs (ad 2): In Reply to Objection 2, Aquinas dismantles the two favorite arguments of modern Trinitarian apologists—ruling that infinite goodness is already displayed in creation out of nothing, and that human intellect and will are not separate persons in us, so neither argument is a rational proof (demonstratio), only a post-hoc illustration (convenientia) for those who already believe.',
      '04 · The warning against the mockery of unbelievers (derisus infidelium): Aquinas warns that any Christian who tries to prove the Trinity by natural reason commits a double error—and specifically exposes Christianity to the ridicule of non-Christians (derisus infidelium), who immediately spot the philosophical weakness of such arguments and think Christians believe the Trinity on flimsy grounds!'
    ],
    ['Thomas Aquinas, Summa Theologiae, Part I, Question 32, Article 1 (Respondeo & ad 2)','Averroes 2 · #triniät-beweisen-mit-vernunft-unmöglich'],
    [aqTrinTrapA,aqTrinTrapB],
    {
      facts:[
        ['Source','Aquinas, Summa Theologiae I, q. 32, a. 1'],
        ['Natural Reason Proves','Only the existence and Unity of One God (Tawhid)'],
        ['Natural Reason Cannot Prove','The Trinity of three distinct divine Persons'],
        ['Aquinas’s Warning','Rational Trinity proofs cause derisus infidelium (mockery)']
      ],
      quotes:[
        {by:'Thomas Aquinas (Summa Theologiae I, q. 32, a. 1, Respondeo)',en:'It is impossible to attain to the knowledge of the Trinity of divine Persons by natural reason.',ref:'Summa Theologiae I, q. 32, a. 1'},
        {by:'Thomas Aquinas (Summa Theologiae I, q. 32, a. 1, Respondeo)',en:'Whoever tries to prove the Trinity of Persons by natural reason derogates from faith and exposes it to the derision of unbelievers.',ref:'Summa Theologiae I, q. 32, a. 1'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'What Natural Reason Can Prove (Aquinas, ST I, q. 32, a. 1)',
          items:[
            'Reasons from creation (effects) to the First Cause',
            'Proves that God exists and is strictly One in essence and creative power',
            'Aligns directly with the Quranic rational argument for Tawhid from creation'
          ]
        },
        right:{
          title:'What Natural Reason Cannot Prove (ST I, q. 32, a. 1)',
          items:[
            'Cannot prove a Trinity of three distinct divine Persons from creation',
            'Rejects “infinite self-giving love/goodness” and “human mind” as non-demonstrative (ad 2)',
            'Warns that apologists who try to prove the Trinity by reason invite the mockery of unbelievers'
          ]
        }
      }
    }
  ),{
    who:'Deploy Aquinas Summa Theologiae I, q. 32, a. 1',
    forkTitle:'Two apologetic replies to Aquinas on the Trinity',
    forkSub:'Refute the “God is love / human mind” analogies (q. 32, a. 1 ad 2) or show how Aquinas affirms rational proof for One God (Tawhid) alone'
  }),
  sum:'In Summa Theologiae I, q. 32, a. 1, Thomas Aquinas rules that natural reason from creation can prove only the existence and Unity of One God, never a Trinity of Persons—refuting the “God is love” and “human mind” proofs and warning that apologists who attempt rational proofs of the Trinity expose Christianity to the mockery of unbelievers.'
});

/* ============================================================================
   4. NEW Tactical Playbook card: christianity/cross/aquinas-incarnation-not-necessary-for-forgiveness
   ============================================================================ */
const AQ_CROSS=AV2('#inkarnation-nicht-notwendig-aquinas-vergebung-anselm · #gott-kann-vergeben-ohne-opfer','1498455322656768052');

const aqCrossTrapA=P(N(
  AQ_CROSS,
  'If God simply forgave sins without requiring blood satisfaction or the cross, He would violate His own infinite divine justice!',
  'In Summa Theologiae III, q. 46, a. 2 (Reply to Objection 3), Aquinas directly refutes that exact Anselmian objection! He explains that unlike a human court judge who is bound to punish offenses committed against a higher sovereign or the commonwealth, God is the supreme Ruler and has no superior—so just as a person can mercifully forgive an offense committed against himself without demanding any satisfaction and without committing any injustice, God can forgive sins directly out of pure mercy without any blood sacrifice and without violating His justice!',
  'Summa Theologiae III, q. 46, a. 2 ad 3: Why forgiving sin without blood sacrifice does NOT violate God’s justice',
  [
    '01 · Why a lower human judge cannot simply pardon (ST III, q. 46, a. 2 ad 3): Aquinas notes that a human judge in a courtroom cannot simply let a criminal go without punishment, because the human judge is tasked with punishing crimes committed against someone else (another victim, the king, or the state).',
    '02 · Why Almighty God is NOT bound like a lower magistrate: Aquinas immediately contrasts the human judge with God: “But God has no one higher than Himself, for He Himself is the supreme and common good of the whole universe.”',
    '03 · Forgiving an offense against Oneself without satisfaction is mercy, not injustice: Because sin is an offense against God’s own command, Aquinas rules: “If He forgives sin, which has the nature of a fault in that it is committed against Himself, He does wrong to no one; just as anyone among men who remits an offense committed against himself without satisfaction does not act unjustly, but mercifully.”',
    '04 · Direct scholastic validation of Quranic Tawbah: Every time a Christian polemicist claims that Allah in Islam is “unjust” for forgiving repentant sinners directly without a crucified God-man (al-Tawwāb al-Raḥīm), that polemicist is directly refuted by Saint Thomas Aquinas himself!'
  ],
  ['Thomas Aquinas, Summa Theologiae, Part III, Question 46, Article 2 (Reply to Objection 3)','Averroes 2 · #inkarnation-nicht-notwendig-aquinas-vergebung-anselm & #gott-kann-vergeben-ohne-opfer'],
  [],
  {
    facts:[
      ['Source','Aquinas, Summa Theologiae III, q. 46, a. 2 ad 3'],
      ['Lower Human Judge','Cannot pardon offenses against a higher sovereign'],
      ['Almighty God','Has no superior; sin is against Himself alone'],
      ['Aquinas’s Verdict','God forgiving without satisfaction is merciful, not unjust']
    ],
    quotes:[
      {by:'Thomas Aquinas (Summa Theologiae III, q. 46, a. 2, ad 3)',en:'God has no superior… If He forgives sin without satisfaction, He wrongs no one, acting mercifully and not unjustly.',ref:'Summa Theologiae III, q. 46, a. 2 ad 3'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'If God forgave sins directly without the blood sacrifice of the Cross, as in Islam, God would violate His own perfect justice!',
  theyWho:'Watch out · if they say',
  who:'Drop Aquinas ST III, q. 46, a. 2 ad 3 refuting the “unjust judge” claim'
});

const aqCrossTrapB=P(N(
  AQ_CROSS,
  'Wait—Aquinas still says in III, q. 1, a. 2 and q. 46, a. 3 that the Incarnation and Passion were the most “fitting” (conveniens) way, like a horse needed for a journey!',
  'Saying a horse makes a journey “more convenient” (ST III, q. 1, a. 2) proves the journey CAN be made without a horse! By conceding in III, q. 1, a. 2 and q. 46, a. 1–2 that neither the Incarnation nor the Crucifixion was absolutely necessary for human salvation—and citing Luke 1:37 (“with God nothing shall be impossible”) to prove God had other ways to save humanity—Aquinas destroys the core evangelical and Anselmian claim that without the shedding of divine blood God was powerless to forgive sin!',
  'Summa Theologiae III, q. 1, a. 2 & q. 46, a. 2: “Fittingness” (convenientia) vs. absolute necessity (Luke 1.37)',
  [
    '01 · Aquinas’s two definitions of “necessary” (ST III, q. 1, a. 2): Asking whether the Incarnation was necessary for the restoration of the human race, Aquinas distinguishes absolute necessity (like food for preserving human life, without which the end cannot exist at all) from mere convenience/fittingness (like a horse for a journey).',
    '02 · Not absolutely necessary — God could restore humanity in many other ways: Aquinas rules explicitly that in the first sense (absolute necessity), the Incarnation was NOT necessary for the restoration of human nature: “For God, by His omnipotent power, could have restored human nature in many other ways.”',
    '03 · Luke 1.37 against the absolute necessity of the Cross (ST III, q. 46, a. 2): In Question 46, Article 2 (“Whether there was any other possible way of human deliverance besides the Passion of Christ?”), Aquinas cites Luke 1.37 (“No word shall be impossible with God”) to prove that speaking simply and absolutely, it was completely possible for God to deliver humanity otherwise than by the Passion of Christ.',
    '04 · Fatal collapse of Anselm’s Cur Deus Homo & missionary polemics: Any apologist who claims God could not forgive sin without becoming a man and dying on a cross contradicts both Thomas Aquinas and Luke 1.37 simultaneously.'
  ],
  ['Thomas Aquinas, Summa Theologiae, Part III, Question 1, Article 2 & Question 46, Articles 1–3','Luke 1:37'],
  [],
  {
    facts:[
      ['ST III, q. 1, a. 2','God by His omnipotence could restore man in many other ways'],
      ['ST III, q. 46, a. 2','God could deliver humanity without the Passion of Christ'],
      ['Biblical Proof Cited','Luke 1:37 (“With God nothing shall be impossible”)'],
      ['Anselmian Collapse','Destroys “without the Cross God cannot forgive sin”']
    ],
    quotes:[
      {by:'Thomas Aquinas (Summa Theologiae III, q. 1, a. 2, Respondeo)',en:'God, by His omnipotent power, could have restored human nature in many other ways.',ref:'Summa Theologiae III, q. 1, a. 2'},
      {by:'Thomas Aquinas (Summa Theologiae III, q. 46, a. 2, Respondeo)',en:'It was possible for God to deliver mankind otherwise than by Christ’s Passion, because nothing is impossible with God (Luke 1:37).',ref:'Summa Theologiae III, q. 46, a. 2'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Aquinas still defended the Incarnation and Crucifixion as the most fitting and convenient way (like a horse for a journey)!',
  theyWho:'Watch out · if they say',
  who:'Show how III, q. 1, a. 2 & q. 46, a. 2 (Luke 1:37) destroy absolute necessity'
});

card('christianity/cross/aquinas-incarnation-not-necessary-for-forgiveness',{
  title:'Thomas Aquinas (ST III, q. 1, a. 2 & q. 46, a. 2): God Can Forgive Sins Without Incarnation or Sacrifice',
  k:'Atonement & Cross · Scholastic Refutation of Anselm',
  blurb:'Thomas Aquinas’s proof in Summa Theologiae III, q. 1, a. 2 and q. 46, a. 2 (citing Luke 1:37) that neither the Incarnation nor the Crucifixion was necessary for God to forgive sin—directly validating the Islamic concept of divine forgiveness.',
  claim:'Because of God’s infinite justice, God cannot simply forgive human sin out of mercy; an incarnate divine blood sacrifice on the Cross was the only possible way to reconcile humanity.',
  tree:P(N(
    AQ_CROSS,
    'Without the Incarnation and the blood sacrifice of Jesus on the Cross, a perfectly just God could never forgive human sins.',
    'Against Anselm of Canterbury’s claim that God could not forgive sin without the blood satisfaction of a God-man, the supreme doctor of Catholic theology, Saint Thomas Aquinas, proves the exact opposite in Summa Theologiae Part III, Question 1, Article 2 and Question 46, Article 2: citing Luke 1:37 (“with God nothing shall be impossible”), Aquinas rules that God by His omnipotence could have saved humanity and forgiven sins without the Incarnation and without the Passion of Christ, and proves in q. 46, a. 2 ad 3 that if God forgives sin directly without any blood satisfaction, He violates no justice at all, but acts purely in mercy—completely vindicating the Quranic doctrine of direct divine forgiveness (al-Tawwāb al-Raḥīm)!',
    'Aquinas’s Summa Theologiae III, q. 1, a. 2 & q. 46, a. 2 dismantling the absolute necessity of the Cross',
    [
      '01 · The Incarnation was NOT necessary for human salvation (ST III, q. 1, a. 2): Asked whether the Incarnation was necessary for the restoration of the human race, Aquinas explicitly denies its absolute necessity: “God, by His omnipotent power, could have restored human nature in many other ways.”',
      '02 · The Passion/Crucifixion was NOT necessary for human deliverance (ST III, q. 46, a. 2 & Luke 1.37): In Question 46, Article 2 (“Whether there was any other possible way of human deliverance besides the Passion of Christ?”), Aquinas answers affirmatively: “Speaking simply and absolutely, it was possible for God to deliver mankind otherwise than by the Passion of Christ, because no word shall be impossible with God (Luke 1.37).”',
      '03 · Direct forgiveness without satisfaction does NOT violate divine justice (ST III, q. 46, a. 2 ad 3): Refuting the popular missionary argument that “a just judge cannot forgive without punishment/blood payment,” Aquinas explains that unlike a lower human judge who answers to a higher law or sovereign, “God has no superior, but is Himself the supreme and common good of the whole universe.” Therefore, if God forgives sins committed against Himself without requiring any satisfaction, “He wrongs no one—just as a man who forgives an offense against himself without satisfaction acts not unjustly, but mercifully.”',
      '04 · Complete theological vindication of Islamic Tawbah (Quranic forgiveness): When Christian apologists attack Islam by claiming Allah cannot justly forgive repentant sinners directly without a crucifixion (innahu huwa al-Tawwāb al-Raḥīm), they contradict both Thomas Aquinas and Luke 1.37.'
    ],
    ['Thomas Aquinas, Summa Theologiae, Part III, Question 1, Article 2','Thomas Aquinas, Summa Theologiae, Part III, Question 46, Articles 1–3 (esp. a. 2 Respondeo & ad 3)','Luke 1:37','Averroes 2 · #inkarnation-nicht-notwendig-aquinas-vergebung-anselm & #gott-kann-vergeben-ohne-opfer'],
    [aqCrossTrapA,aqCrossTrapB],
    {
      facts:[
        ['ST III, q. 1, a. 2','Incarnation was not necessary; God had many other ways'],
        ['ST III, q. 46, a. 2','Passion was not necessary; “nothing is impossible with God” (Lk 1:37)'],
        ['ST III, q. 46, a. 2 ad 3','God has no superior; forgiving without satisfaction is merciful, not unjust'],
        ['Islamic Alignment','Validates direct divine forgiveness (al-Tawwāb al-Raḥīm)']
      ],
      quotes:[
        {by:'Thomas Aquinas (Summa Theologiae III, q. 46, a. 2, Respondeo)',en:'It was possible for God to deliver mankind otherwise than by the Passion of Christ, because no word shall be impossible with God (Luke 1:37).',ref:'Summa Theologiae III, q. 46, a. 2'},
        {by:'Thomas Aquinas (Summa Theologiae III, q. 46, a. 2, ad 3)',en:'God has no superior… If He forgives sin without satisfaction, He wrongs no one, acting mercifully rather than unjustly.',ref:'Summa Theologiae III, q. 46, a. 2 ad 3'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Anselmian / Evangelical Apologetics',
          items:[
            'Claims God’s infinite justice makes it impossible to forgive sin without a blood sacrifice',
            'Compares God to a courtroom magistrate bound by a higher law to extract payment',
            'Attacks Islamic forgiveness (Tawbah) as “unjust” for lacking a crucified God-man'
          ]
        },
        right:{
          title:'Thomas Aquinas (ST III, q. 1, a. 2 & q. 46, a. 2)',
          items:[
            'Cites Luke 1:37 to prove God could save humanity without the Incarnation or Passion',
            'Rules that God has no superior above Him—unlike a lower courtroom judge (q. 46, a. 2 ad 3)',
            'Proves that forgiving sin directly without satisfaction is pure mercy and violates no justice'
          ]
        }
      }
    }
  ),{
    who:'Deploy Aquinas ST III, q. 1, a. 2 & q. 46, a. 2',
    forkTitle:'Two apologetic defenses of mandatory blood atonement',
    forkSub:'Demolish the “unjust judge” objection (q. 46, a. 2 ad 3) or expose why “fittingness” (convenientia) concedes the Cross was never necessary'
  }),
  sum:'In Summa Theologiae III, q. 1, a. 2 and q. 46, a. 2 (citing Luke 1:37), Thomas Aquinas dismantles the claim that God could not forgive sin without the Incarnation and Crucifixion, ruling that because God has no superior, forgiving sins directly without blood satisfaction violates no justice and is pure omnipotent mercy.'
});

/* ============================================================================
   5. NEW Tactical Playbook card: christianity/church/john-chrysostom-christology-subordination
   ============================================================================ */
const CHRYS=AV2('#johannes-chrytostomus-sagt-jesus-ist-nicht-gott','1320496499985088592');

const chrysTrapA=P(N(
  CHRYS,
  'When Chrysostom talks in Homily 3 on Titus about God allowing the false belief that He is visible even though He is Spirit (John 4:24), he only means Old Testament angel appearances—not the Incarnation of God!',
  'Look closely at the principle Chrysostom lays down in Homily 3 on Titus: because “God is a Spirit” (John 4:24), any notion that God Himself is literally visible—alongside the notion that God truly desires blood sacrifices—is categorized by Chrysostom as a “false opinion” (falsche Meinung) that God merely tolerates out of divine condescension (synkatabasis) for human weakness, caring not for His own dignity so long as ignorant people are gradually guided!',
  'Homily 3 on Titus: Why calling God “visible” or “needing sacrifices” is a false opinion tolerated for human weakness',
  [
    '01 · Chrysostom’s core rule in Homily 3 on Titus (PG 62.679): Commenting on Titus 1.15–2.1, John Chrysostom explains how God repeatedly accommodates (synkatabainei) human ignorance—leading the Persian Magi/astrologers by a star, using cows pulling the Ark for the Philistines, and speaking through the diviner Balaam.',
    '02 · Both “God desires sacrifices” and “God is visible” are classed as false opinions: Chrysostom then makes a devastating statement: “God even permits false opinions, such as the notion that He desires sacrifices, or that He is visible, although He is a Spirit (John 4.24). In all this He is not concerned about His own dignity, but about the salvation of men.”',
    '03 · Devastating double impact on Incarnation and Blood Atonement: If believing that the invisible Spirit God (John 4.24) is visible and believing that God desires blood sacrifices are both “false opinions” tolerated only because of human crudeness, then the two pillars of Nicene-Anselmian Christianity—a visibly incarnate God and a God appeased by blood sacrifice—violate God’s spiritual reality as defined by Chrysostom himself!'
  ],
  ['John Chrysostom, Homily 3 on the Epistle to Titus (PG 62:679)','John 4:24','Averroes 2 · #johannes-chrytostomus-sagt-jesus-ist-nicht-gott'],
  [],
  {
    facts:[
      ['Source','John Chrysostom, Homily 3 on Titus'],
      ['Biblical Premise','God is a Spirit (John 4:24) and strictly invisible'],
      ['False Opinion 1','The notion that God is visible'],
      ['False Opinion 2','The notion that God desires blood sacrifices']
    ],
    quotes:[
      {by:'John Chrysostom (Homily 3 on Titus)',en:'God even allows false opinions, such as the notion that He desires sacrifices, or that He is visible, although He is a Spirit (John 4:24).',ref:'Homily 3 on Titus'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Chrysostom’s remark in Homily 3 on Titus only refers to Old Testament anthropomorphisms, not to whether God is visible or desires sacrifice!',
  theyWho:'Watch out · if they say',
  who:'Read Chrysostom’s universal rule from John 4:24 in Homily 3 on Titus'
});

const chrysTrapB=P(N(
  CHRYS,
  'Chrysostom was a staunch Nicene Trinitarian who defended Christ’s co-equality in his Homily 26 on 1 Corinthians 11:3 (“the head of Christ is God”)!',
  'Even in Homily 26 on 1 Corinthians 11:3 (“the head of every man is Christ, the head of a woman is man, and the head of Christ is God”), Chrysostom is forced to admit that if you take Paul’s analogy at face value, the Son is as subordinate to God as a man is to Christ—and can only escape Paul’s plain words by pleading that human language and the Father’s causality require treating God as Christ’s “Head” despite the obvious inequality built into Paul’s chain of authority!',
  '1 Corinthians 11.3 (“the head of Christ is God”) and Chrysostom’s struggle with Pauline subordination',
  [
    '01 · Paul’s explicit hierarchy in 1 Corinthians 11.3: Writing after the resurrection and ascension, Paul places the exalted Christ directly under God’s authority: “I want you to understand that the head of every man is Christ, the head of a wife is her husband, and the head of Christ is God” (1 Cor 11.3; cf. 1 Cor 3.23 “you are Christ’s, and Christ is God’s”; 1 Cor 15.28 “then the Son himself will also be subjected to Him”).',
    '02 · Chrysostom’s admission in Homily 26 on 1 Corinthians: In Homily 26 on 1 Corinthians, Chrysostom admits that heretics/subordinationists press 1 Cor 11.3 precisely because Paul uses the exact same word “head” (kephalē) for Christ’s rule over man and God’s rule over Christ—and concedes that “if we wish to accept the phrase ‘head’ in the full sense of rule and authority across the comparison, the Son would be as far removed from the Father as we are from Him.”',
    '03 · Why Chrysostom has to retreat to “divine condescension” (synkatabasis): Across his homilies (including Homily 3 on Titus and Homily 26 on 1 Corinthians), whenever biblical texts affirm God’s absolute invisibility as Spirit (John 4.24) or Christ’s subjection to God as his Head (1 Cor 11.3; 15.28), Nicene exegesis is forced to break the plain grammatical parallelism of Scripture.'
  ],
  ['John Chrysostom, Homily 26 on 1 Corinthians (on 1 Cor 11:3)','1 Corinthians 3:23; 11:3; 15:28','John Chrysostom, Homily 3 on Titus'],
  [],
  {
    facts:[
      ['1 Cor 11:3 Hierarchy','God → Christ → Man → Woman'],
      ['1 Cor 3:23 & 15:28','“Christ is God’s”; the Son himself subjected to God'],
      ['Chrysostom Hom. 26','Admits full parallelism makes the Son subordinate like man'],
      ['Exegetical Escape','Must break Paul’s parallel definition of “head” (kephalē)']
    ],
    quotes:[
      {by:'Apostle Paul (1 Corinthians 11:3)',en:'The head of every man is Christ, the head of a woman is man, and the head of Christ is God.',ref:'1 Corinthians 11:3'},
      {by:'John Chrysostom (Homily 3 on Titus)',en:'In all this He is not concerned about His own dignity, but about the salvation of men.',ref:'Homily 3 on Titus'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Chrysostom was a champion of Nicene orthodoxy who easily explained away subordination texts like 1 Corinthians 11:3!',
  theyWho:'Watch out · if they say',
  who:'Press 1 Cor 11:3, 15:28 & Chrysostom’s Homily 26 dilemma'
});

card('christianity/church/john-chrysostom-christology-subordination',{
  title:'John Chrysostom (Homily 3 on Titus & 1 Cor 11:3): God’s Invisibility, Sacrifices & Pauline Subordination',
  k:'Patristic Exegesis · Synkatabasis & Subordination',
  blurb:'John Chrysostom’s admission in Homily 3 on Titus that viewing God as visible (contra John 4:24) or desiring sacrifices is a “false opinion” tolerated for human weakness, alongside his struggle with Paul’s subordination of Christ in 1 Cor 11:3.',
  claim:'Patristic exegesis seamlessly harmonizes God’s spiritual invisibility (John 4:24) and Christ’s subjection to God (1 Cor 11:3) with incarnational blood-atonement orthodoxy.',
  tree:P(N(
    CHRYS,
    'The Church Fathers consistently taught that God’s visible incarnation and blood sacrifice represent absolute divine truth, and that 1 Corinthians 11:3 teaches co-equal Trinitarian persons.',
    'In Homily 3 on Titus, Golden-Mouthed Church Father John Chrysostom (c. 347–407 CE) makes a stunning patristic admission on divine condescension (synkatabasis): citing John 4:24 (“God is a Spirit”), he states that “God even permits false opinions, such as the notion that He desires sacrifices, or that He is visible, although He is a Spirit”—classifying both a visible God and a sacrifice-demanding God as false human opinions tolerated only out of accommodation, while in Homily 26 on 1 Corinthians 11:3 (“the head of Christ is God”) he admits that taking Paul’s hierarchy in its full parallel sense subordinates the Son to God just as man is subordinate to Christ!',
    'John Chrysostom’s Homily 3 on Titus (John 4.24) and the subordination hierarchy of 1 Corinthians 11.3',
    [
      '01 · God’s accommodation (synkatabasis) to human error (Homily 3 on Titus): Chrysostom illustrates how God repeatedly stoops down to human ignorance without endorsing human superstition—guiding pagan astrologers (the Magi) by a star, allowing the Ark to be drawn by cows, and working through Balaam.',
      '02 · “God even permits false opinions: that He desires sacrifices, or that He is visible, though He is a Spirit” (Homily 3 on Titus; John 4.24): Formulating his theological rule from Jesus’s words in John 4.24 (“God is a Spirit”), Chrysostom explicitly classifies two beliefs as “false opinions” (falsche Meinungen) that God merely tolerates for human salvation rather than His own dignity: (a) the belief that God desires blood sacrifices, and (b) the belief that God is visible!',
      '03 · Why Chrysostom’s rule undercuts Incarnation and Blood Atonement: Because God is eternally an invisible Spirit (John 4.24; 1 Tim 6.16 “whom no man has seen or can see”) who does not desire blood sacrifice (Hosea 6.6; Psalm 40.6), treating visibility and sacrificial blood as literal truths about God turns temporary pedagogical concessions into dogma.',
      '04 · The Pauline subordination chain in 1 Corinthians 11.3 & 15.28: In 1 Corinthians 11.3 (“the head of every man is Christ, the head of a woman is man, and the head of Christ is God”), Paul places the risen Christ under God as his Head—forcing Chrysostom in Homily 26 on 1 Corinthians to concede that if Paul’s term “head” (kephalē) carries the same sense of authority throughout the verse, the Son stands in the same subordinate distance below the Father as humans stand below Christ.'
    ],
    ['John Chrysostom, Homily 3 on the Epistle to Titus (PG 62:679)','John 4:24; 1 Timothy 6:16','1 Corinthians 11:3; 15:28 & John Chrysostom, Homily 26 on 1 Corinthians','Averroes 2 · #johannes-chrytostomus-sagt-jesus-ist-nicht-gott'],
    [chrysTrapA,chrysTrapB],
    {
      facts:[
        ['Homily 3 on Titus','God adapts (synkatabasis) to human ignorance like the Magi’s star'],
        ['False Opinion 1','Believing that God desires blood sacrifices'],
        ['False Opinion 2','Believing that God is visible, though He is a Spirit (Jn 4:24)'],
        ['1 Cor 11:3 Hierarchy','“The head of Christ is God” (Pauline subordination)']
      ],
      quotes:[
        {by:'John Chrysostom (Homily 3 on Titus)',en:'God Himself often adapts Himself, as with the astrologers whom He led by a star, the cows drawing the Ark, or Balaam.',ref:'Homily 3 on Titus'},
        {by:'John Chrysostom (Homily 3 on Titus)',en:'God even allows false opinions, such as that He desires sacrifices, or that He is visible, although He is a Spirit (John 4:24).',ref:'Homily 3 on Titus'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Chrysostom’s Rule in Homily 3 on Titus (John 4:24)',
          items:[
            'God is an invisible Spirit (John 4:24) who does not need sacrifices',
            'Thinking God desires sacrifices is a “false opinion” permitted for human weakness',
            'Thinking God is visible is likewise a “false opinion” tolerated out of condescension'
          ]
        },
        right:{
          title:'Paul’s Subordination Hierarchy (1 Cor 11:3; 15:28)',
          items:[
            '1 Cor 11:3: “The head of every man is Christ… and the head of Christ is God”',
            '1 Cor 3:23 & 15:28: “Christ is God’s” and the Son himself will be subjected to God',
            'Homily 26 on 1 Cor: Chrysostom admits full parallel “headship” subordinates the Son like man'
          ]
        }
      }
    }
  ),{
    who:'Deploy Chrysostom’s Homily 3 on Titus & 1 Cor 11:3',
    forkTitle:'Two apologetic escapes on Chrysostom',
    forkSub:'Press Homily 3 on Titus calling “visible God” and “sacrifices” false opinions (John 4:24), or press Paul’s hierarchy in 1 Cor 11:3'
  }),
  sum:'In Homily 3 on Titus, John Chrysostom explicitly states that believing God desires sacrifices or that God is visible—even though He is a Spirit (John 4:24)—are “false opinions” tolerated only out of accommodation to human weakness, while his Homily 26 on 1 Corinthians 11:3 exposes the strain of reconciling Nicene co-equality with Paul’s statement that “the head of Christ is God.”'
});

/* ============================================================================
   B1. add('christianity/islam-vs/dilemma/church-fathers-on-alteration', ...) — hieronymus_abschreiber
   ============================================================================ */
const HIER_ALT=AV2('#abschreiber-ändern-bibel-verfälscht-hieronymous','1488199158446821447');
add('christianity/islam-vs/dilemma/church-fathers-on-alteration',P(N(
  HIER_ALT,
  'Even if scribes made minor accidental slips of the pen, no Church Father ever claimed that copyists deliberately altered and deleted names inside the Gospel text to hide errors!',
  'In his Commentary on Matthew 13:35 (Fathers of the Church, Vol. 117) and Homily 11 on Psalm 77 (78), Saint Jerome—architect of the Latin Vulgate—explicitly documents a three-stage deliberate manipulation of Matthew 13:35 by Christian copyists: (1) Matthew originally wrote “by Asaph the prophet” (quoting Psalm 78:2, a Psalm of Asaph); (2) an ignorant early copyist did not recognize Asaph as a prophet, assumed it was a mistake, and deliberately changed the text to “by Isaiah the prophet” (still preserved in Codex Sinaiticus ℵ*, Θ, f1, f13!); and (3) later “prudent men” realized the quote is nowhere in Isaiah and deliberately deleted the prophet’s name altogether!',
  'Jerome’s Commentary on Matthew 13.35: A three-stage deliberate scribal manipulation of the Gospel text',
  [
    '01 · Jerome’s discovery across multiple Gospel manuscripts (Commentary on Matthew 13.35, FOTC Vol. 117): Commenting on Matthew 13.35 (“That it might be fulfilled which was spoken by the prophet: I will open my mouth in parables…”), Jerome notes that the quotation comes from Psalm 77 (Hebrew Psalm 78.2), yet states: “I have read in several manuscripts—and a careful reader might perhaps find it for himself—that instead of this passage which we have transmitted and which the Vulgate edition has as ‘by the prophet,’ in those manuscripts it is written: ‘by Isaiah the prophet.’”',
    '02 · Stage 1 to Stage 2 — The first copyist deliberately changed “Asaph” to “Isaiah”: Jerome reconstructs how the corruption began: “In my opinion it was originally published thus: ‘by Asaph the prophet.’ For the seventy-seventh Psalm, from which this testimony is taken, bears in its title the name of Asaph as prophet. And it seems that because the first copyist did not understand ‘Asaph,’ he thought it was an error of a scribe, and he changed the name to Isaiah, whose name was better known.”',
    '03 · Stage 3 — “Prudent men later removed it” to cover up the false Isaiah attribution: Jerome then confesses the second deliberate tampering with the Gospel manuscripts: “Because this text is not to be found in Isaiah at all, I think that it was later removed by prudent men (a prudentibus viris esse sublatum).”',
    '04 · Confirmed by modern textual criticism (Sinaiticus ℵ*, Porphyry & Vulgate Preface): Jerome’s testimony is corroborated by our oldest complete New Testament manuscript, Codex Sinaiticus (ℵ*, 4th c.), along with Codex Koridethi (Θ) and Family 1 / Family 13, which all explicitly read “through Isaiah the prophet” in Matthew 13.35 (a blunder mocked in antiquity by the pagan critic Porphyry)—alongside Jerome’s Preface to the Four Gospels (to Pope Damasus) and Epistle 71.5 lamenting how copyists harmonize Gospels and write “not what they find, but what they think is the meaning.”'
  ],
  ['Jerome, Commentary on Matthew 13:35 (Fathers of the Church, Vol. 117, trans. Thomas P. Scheck)','Jerome, Homily 11 on Psalm 77 (78); Preface to the Four Gospels (Ad Damasum); Epistle 71.5 (Ad Lucinium)','Codex Sinaiticus (ℵ*), Codex Koridethi (Θ), Family 1 & Family 13 on Matthew 13:35','Averroes 2 · #abschreiber-ändern-bibel-verfälscht-hieronymous'],
  [],
  {
    facts:[
      ['Passage','Matthew 13:35 quoting Psalm 78:2 (LXX Psalm 77:2 of Asaph)'],
      ['Stage 1 → 2 (Jerome)','Copyist didn’t know Asaph and changed it to “Isaiah” (in ℵ*, Θ)'],
      ['Stage 3 (Jerome)','“Prudent men later removed it” because it is not in Isaiah'],
      ['Implication','Two deliberate scribal interventions altering the Gospel text']
    ],
    quotes:[
      {by:'Jerome (Commentary on Matthew 13:35, FOTC Vol. 117)',en:'In several manuscripts it is written: through Isaiah the prophet. Because this is not found in Isaiah, I think prudent men later removed it.',ref:'Commentary on Matthew 2.13.35'},
      {by:'Jerome (Commentary on Matthew 13:35, FOTC Vol. 117)',en:'It originally read: through Asaph the prophet… because the first copyist did not understand Asaph, he changed the name to Isaiah.',ref:'Commentary on Matthew 2.13.35'}
    ],
    visual:{
      kind:'steps',
      items:[
        ['Stage 1 · Original Reading (Per Jerome)','Matthew 13:35 originally read “spoken by Asaph the prophet,” citing the superscription of Psalm 78 (LXX 77).'],
        ['Stage 2 · First Deliberate Alteration','An early copyist did not recognize “Asaph,” assumed it was a scribal error, and changed the Gospel text to “by Isaiah the prophet” (still preserved in Codex Sinaiticus ℵ*).'],
        ['Stage 3 · Second Deliberate Excision','Later “prudent men” noticed the quote is nowhere in Isaiah and deliberately deleted the prophet’s name completely, leaving only “by the prophet.”']
      ]
    }
  }
),{
  optWho:'Or press Jerome on Matthew 13:35 · if they say',
  optLabel:'Scribal variants in the Gospels were only accidental spelling slips—scribes never deliberately rewrote or deleted words to fix prophetic errors!',
  theyWho:'Or press Jerome on Matthew 13:35 · if they say',
  who:'Show Jerome’s 3-stage scribal manipulation of Matthew 13:35'
}));

/* ============================================================================
   B2. add('christianity/church/aphrahat-persian-sage-christology', ...) — aphrahat_titel_anbetung
   ============================================================================ */
const APHR_ADD=AV2('#aphrahat-gott-und-anbetung-ist-titel-jesus','1539880986278367294');
add('christianity/church/aphrahat-persian-sage-christology',P(N(
  APHR_ADD,
  'Even if Aphrahat compared Jesus’s titles to Moses and Solomon, calling Jesus “God” and offering him worship (sugda / proskynesis) still proves Christians gave Jesus divine worship reserved for the Creator—otherwise it would be shirk (idolatry)!',
  'Aphrahat’s Demonstration 17 (§3–5, §8) directly provides the patristic key to Quran 5:116 and the shirk debate: speaking in his own authoritative voice as a 4th-century Syriac Father (b. c. 270 CE), Aphrahat explicitly separates honorific titles and respectful prostration (taʿẓīm) from ontological deity and divine worship (ʿibādah)—testifying that “the Name of Divinity is given for the highest honor in the world, and with whomsoever God is well pleased, He applies it to him” (citing Moses called “God” to Pharaoh in Exodus 7:1, Israel called “My Firstborn,” and Solomon called “My son”), and proving in §8 that sugda (bowing) to Jesus is lawful human honor just like Daniel bowing before Nebuchadnezzar and Joseph bowing before Pharaoh!',
  'Demonstration 17 §3–5 & §8 applied to the Tawhid vs. Shirk and Taʿẓīm vs. ʿIbādah debate (Quran 5.116)',
  [
    '01 · Speaking in his own voice, not reporting an opponent’s view (Demonstration 17 §3–5): Born c. 270 CE in Persia, the first great Syriac Church Father does not merely concede a point for argument’s sake; he formulates his own affirmative Christology: “We call Him God, even as He surnamed Moses by His own Name” (Exodus 7.1).',
    '02 · The hammer sentence in §5 — Divinity as a bestowed honorific title: After stringing together Moses called “God” over Pharaoh (Exod 7.1), Israel called “My son, My firstborn” (Exod 4.22), and Solomon called God’s “son” (2 Sam 7.14), Aphrahat delivers his theological verdict: the Name of Godhead is “given for the highest honor in the world, and with whomsoever God is well pleased, He applies it to him”—defining “God” and “Son of God” as functional titles of honor rather than an ontological claim of essence (ousia).',
    '03 · Demonstration 17 §8 — Sugda (proskynesis) as human honor (taʿẓīm), not divine worship (ʿibādah): Defending why Christians bow (sugda) to Jesus without violating the First Commandment, Aphrahat points to Daniel bowing down before the pagan king Nebuchadnezzar and Joseph bowing down before Pharaoh—stating that sugda is an honor God permitted human beings to show to one another.',
    '04 · Direct patristic weapon for Quran 5.116 & Gospel worship debates: Whenever Trinitarian polemicists argue that Jesus receiving proskynesis in Matthew or being addressed with exalted titles proves he claimed to be worshipped as Almighty God alongside the Father (or challenge Quran 5.116 where Jesus denies telling people to worship him as a god besides Allah), Aphrahat’s Demonstration 17 proves that in ancient Semitic Christianity, both the title and the bowing were understood strictly as honorific reverence (taʿẓīm) toward God’s chosen Messiah, never co-equal worship (ʿibādah) of a second divine Person!'
  ],
  ['Aphrahat the Persian Sage (b. c. 270 CE), Demonstration 17 (Of Christ the Son of God), §3–5, §8','Exodus 4:22; 7:1; 2 Samuel 7:14','Quran 5:116 (Taʿẓīm vs. ʿIbādah)','Averroes 2 · #aphrahat-gott-und-anbetung-ist-titel-jesus'],
  [],
  {
    facts:[
      ['Aphrahat (b. c. 270 CE)','Earliest major Syriac Father speaking in his own voice'],
      ['Dem. 17 §3–5 Hammer Rule','Title “God” given “for the highest honor in the world” (like Moses, Ex 7:1)'],
      ['Dem. 17 §8 Prostration','Sugda to Jesus = Daniel before Nebuchadnezzar & Joseph before Pharaoh'],
      ['Islamic Distinction','Taʿẓīm (lawful honor to a prophet/king) vs. ʿIbādah (worship of Allah alone)']
    ],
    quotes:[
      {by:'Aphrahat the Persian Sage (Demonstration 17, §3 & §5)',en:'We call Him God, even as He surnamed Moses… The Name of Divinity is given for the highest honor in the world.',ref:'Demonstration 17 §3, §5'},
      {by:'Aphrahat the Persian Sage (Demonstration 17, §8)',en:'Daniel bowed down to Nebuchadnezzar and Joseph to Pharaoh… For God has given sugda (veneration) as an honor among the sons of men.',ref:'Demonstration 17 §8'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Taʿẓīm (Honorific Reverence — Aphrahat Dem. 17)',
        items:[
          'Title “God / Son of God” bestowed as an honorific by God’s pleasure (like Moses in Ex 7:1 & Solomon in 2 Sam 7:14)',
          'Bowing (sugda / proskynesis) rendered as human homage to kings and prophets (like Daniel to Nebuchadnezzar & Joseph to Pharaoh)',
          'Preserves strict Semitic monotheism and aligns with Jesus’s defense in Quran 5:116'
        ]
      },
      right:{
        title:'ʿIbādah (Ontological Worship — Later Nicene Dogma)',
        items:[
          'Treats “God / Son of God” as an ontological statement of co-equal divine essence (homoousios)',
          'Claims any proskynesis given to Jesus in the Gospels is supreme worship of Almighty God',
          'Directly contradicted by Aphrahat’s own 4th-century Syriac apologetic in Demonstration 17'
        ]
      }
    }
  }
),{
  optWho:'Or apply Aphrahat to the Shirk & Quran 5:116 debate · if they say',
  optLabel:'Giving Jesus the title “God” and bowing (proskynesis / sugda) to him in the Gospels proves he received supreme divine worship (ʿibādah), refuting Quran 5:116!',
  theyWho:'Or apply Aphrahat to the Shirk & Quran 5:116 debate · if they say',
  who:'Show how Dem. 17 §3–5 & §8 prove Taʿẓīm (honor) vs. ʿIbādah (worship)'
}));

})();
