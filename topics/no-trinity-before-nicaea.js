/* No Trinity before Nicaea — Multi-source Tactical Debate Playbook (christianity/church/no-trinity-before-nicaea)
   Sources:
     - DawahWise 5h42m livestream (https://www.youtube.com/watch?v=WJ_q8owKJKA):
       The Muslim Orthodox (Libyano) & Deen Responds presentation + Q&A + 7 HD slides (yt-nicaea-*.webp)
     - Islamic Apologetics (#church-fathers): tertullian, theophilus, origen, hippolytus, lactantius
     - Deenresponds: #what-is-the-trinity, #holy-spirit, #tatian, #athenagoras, #novation,
       #eusebius, #clement-alex, #dionysius-alex, #ebionites
     - Cross-attachments: t-clement-of-rome, t-origen-of-alexandria, t-hippolytus-of-rome,
       t-lucius-cæcilius-firmianus-lactantius, d-dr-mark-10-18 */
(()=>{
const AV=(n,link)=>({credit:'Averroes · #'+n+' (translated from German)',link});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);

const IA=(sub)=>({
  credit:'Islamic Apologetics · #church-fathers › '+sub,
  link:'https://discord.com/channels/1514269918978248796/1514489843357454447'
});
const DR=(ch,id)=>({
  credit:'Deenresponds · #'+ch,
  link:'https://discord.com/channels/1328402309297733662/'+id
});
const DW_URL='https://www.youtube.com/watch?v=WJ_q8owKJKA';

/* ──────────────────────────────────────────────────────────────────────────
   ANGLE A: 1st & early 2nd century: Clement of Rome, Ignatius, Irenaeus & the Ebionites
   ────────────────────────────────────────────────────────────────────────── */
const trapA1=P(N(
  DR('ebionites','1368233209938055178'),
  'Ignatius literally calls Jesus ‘our God’ around 108 CE, Clement uses triadic formulas in 1 Clement 46 & 58, and Irenaeus only meant Jesus’s human nature didn’t know the Hour!',
  'Three fatal mistakes in one reply: “God” (theos) in biblical and early patristic Greek is an equivocal title applied subordinately to judges, Moses, and angels; mentioning three items in a triadic list never proves co-equality or one essence; and Irenaeus explicitly argued that “even the very Son of God” lacked knowledge — while splitting Christ’s knowing divine mind from an ignorant human mind was condemned centuries later as the Agnoetae / Nestorian heresy.',
  'Disarming the Ignatius, triadic-formula & “two natures” rescues',
  [
    'Equivocation on theos (God): In Scripture, Israel’s judges are called “gods” (Psalm 82:6), Moses is made “god to Pharaoh” (Exodus 7:1), and Satan is called “the god of this age” (2 Corinthians 4:4). Calling Jesus “god” never proves co-equality with the Supreme God — and Ignatius explicitly orders believers to submit “as Jesus Christ was to the Father” (Magnesians 13) while calling him Son “according to the will and power of God” (Smyrnaeans 1).',
    'Triadic mention ≠ Trinity: 1 Clement 46:6 asks, “Have we not one God and one Christ and one Spirit of grace?” — explicitly distinguishing the “one God” (the Father) from “one Christ” (the Messiah)! Likewise, 1 Timothy 5:21 swears before “God and Christ Jesus and the elect angels” without making angels part of a Trinity.',
    'Why the “human nature” dodge fails Irenaeus (AH 2.28.6): Irenaeus’s whole point against the Valentinians is that “even the very Son of God” did not know the Hour — if he merely meant an ordinary human body didn’t know, his argument would prove nothing. Moreover, asserting that Jesus was ignorant in his human nature was formally condemned as the Agnoetae heresy (c. 599 CE) because Catholic and Eastern Orthodox dogma treat it as Nestorianism.'
  ],
  ['Psalm 82:6; Exodus 7:1; 2 Corinthians 4:4; 1 Timothy 5:21','Ignatius, Magnesians 13; Smyrnaeans 1','1 Clement 46:6','Irenaeus, Against Heresies 2.28.6',DW_URL],
  [],
  {
    facts:[
      ['Term “God”','Equivocal in Bible & Fathers'],
      ['1 Clement 46.6','“One God” vs. “one Christ”'],
      ['Ignatius','Son “according to the will of God”'],
      ['Irenaeus 2.28.6','“Human ignorance” = Agnoetae heresy']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Ignatius calls Jesus our God, Clement uses triadic formulas (1 Clem 46 & 58), and Irenaeus only meant Jesus’s human nature!',
  theyWho:'Watch out · if they say',
  who:'Counter & close the trap'
});

const angleA=P(N(
  DR('ebionites','1368233209938055178'),
  null,
  'Start closest to Jesus and the apostles — in the 1st and early 2nd centuries. Clement of Rome (c. 96 CE), the Jewish-Christian Ebionites, Ignatius of Antioch, and Irenaeus of Lyon (who sat under Polycarp, purportedly John’s disciple) all reserve “the only true God” strictly for the Father and depict Jesus as subordinate in knowledge, goodness, and ontology.',
  '1st & early 2nd century: Clement, Ebionites, Ignatius & Irenaeus',
  [
    'Clement of Rome (1 Clement 59.3, c. 96 CE): In the earliest surviving Christian letter outside the New Testament, Clement prays directly to the Father as “Creator and Overseer of every spirit… that we may know Thee, who alone abidest Highest” and asks that all nations know “that Thou art God alone, and Jesus Christ is Thy Son [or servant, pais].” Never once in all of 1 Clement is Jesus called God.',
    'Clement’s Unitarian Genesis 1.26 & Inspiring Philosophy’s concession: Clement is the first writer to comment on Genesis 1:26 (“Let us make man in our image”), yet he consistently uses singular pronouns (“He, His”) for the Creator alone with zero mention of a pre-existent Son or Spirit. Even prominent Christian apologist Inspiring Philosophy admits 1 Clement does not explicitly teach Trinitarian theology.',
    'The Ebionites (1st-century Jewish Christians): Attested by Irenaeus, Origen, Tertullian, and Eusebius, this early Jewish-Christian movement traced its spiritual lineage to James the brother of Jesus (called the leader/successor in Jerusalem by Clement of Alexandria) and maintained strict monotheism without Jesus’s pre-existent deity.',
    'Ignatius of Antioch (Smyrnaeans 1 & Magnesians 13, d. c. 108 CE): Grounds Christ’s divine sonship in the Father’s volition — “Son of God according to the will and power of God” (katà thélēma kaì dýnamin theoû), the exact volitional formula later exploited by Arius — and treats Christ as subject to the Father.',
    'Irenaeus on John 17.3 (Against Heresies 4.1.2): Declares that the Father alone is “truly God” (as opposed to those merely termed gods verbo tenus), warning that if Jesus had taught his disciples to call anyone else God in the same sense, Jesus would have been “a misleading and invidious” teacher and “the author and teacher of such transgression.”',
    'Irenaeus on Mark 10.18, 13.32 & Theophanies (AH 2.28; Dem 45): Cites Mark 10:18 as “One is good, my Father in heaven” (matching Anchor Yale Bible scholar Joel Marcus on Mark 10:18 as an allusion to the Jewish Shema establishing an “infinite qualitative distinction” between God and humanity), uses Mark 13:32 + John 14:28 to prove “the Father excels in knowledge” over the Son, and argues in Demonstrations 45 that the transcendent Father could not stand in a small place on earth to speak with Abraham — whereas the Son could.'
  ],
  ['1 Clement 46:6; 59:3','Irenaeus, Against Heresies 2.28.6–8; 4.1.2; Demonstrations 45','Joel Marcus, Mark 8–16 (Anchor Yale Bible, on Mark 10:18)','Ignatius, Smyrnaeans 1; Magnesians 13',DW_URL],
  [trapA1],
  {
    facts:[
      ['1 Clement (c. 96)','Never calls Jesus “God”'],
      ['Ebionites','Lineage from James; strict monotheists'],
      ['Irenaeus AH 4.1.2','Father alone is “truly God”'],
      ['Irenaeus AH 2.28.8','Father excels Son in knowledge']
    ],
    quotes:[
      {by:'Clement of Rome (c. 96 CE)',en:'…The Creator and Overseer of every spirit; who multipliest the nations upon earth, and hast chosen out from all men those that love Thee through Jesus Christ, Thy beloved Son, through whom Thou didst instruct us, didst sanctify us, didst honor us.',ref:'1 Clement 59:3'},
      {by:'Irenaeus of Lyon (c. 180 CE)',en:'Now to whom is it not clear, that if the Lord had known many fathers and gods, He would not have taught His disciples to know [only] one God, and to call Him alone Father? But He did the rather distinguish those who by word merely (verbo tenus) are termed gods, from Him who is truly God… Jesus, therefore, will be to them the author and teacher of such transgression.',ref:'Against Heresies, Book IV, Chapter 1, §2'},
      {by:'Joel Marcus (Mark 8–16)',en:'The specific way in which the Markan Jesus alludes to the Shema, however, has proved troubling to Christians down through the centuries: “Why do you call me good? There is nobody good except One, that is, God” (10:18). There could be no more dramatic illustration of what Karl Barth, echoing Kierkegaard, has called “the infinite qualitative distinction” between God and humanity.',ref:'Anchor Yale Bible: Mark 8–16, on Mark 10:18'},
      {by:'Irenaeus of Lyon',en:'It was not He [the Father of all] that came and stood in a very small place and spake with Abraham, but the Word of God, who was ever with mankind…',ref:'Demonstration of the Apostolic Preaching, §45'}
    ],
    shots:[
      {src:'shots/yt-nicaea-clement.webp',cap:'DawahWise slide — Clement of Rome (1st century), 1 Clement 59:3: prayer to the Father as “Creator and Overseer of every spirit” who acts “through Jesus Christ, Thy beloved Son.”'},
      {src:'shots/yt-nicaea-irenaeus2.webp',cap:'DawahWise slide — Irenaeus of Lyon (2nd century), Against Heresies IV.1.2: only the Father is “truly God”; calling others God in the same sense would make Jesus “the author and teacher of such transgression.”'},
      {src:'shots/yt-nicaea-irenaeus.webp',cap:'DawahWise slide — Joel Marcus (Mark 8–16, Anchor Yale Bible): Mark 10:18 alludes to the Jewish Shema, expressing the “infinite qualitative distinction” between the one good God and humanity.'}
    ]
  }
),{
  optWho:'Angle',
  optLabel:'1st & early 2nd century: Clement of Rome, Ignatius, Irenaeus & the Ebionites',
  who:'Line A · Step 1',
  forkTitle:'Watch out · likely counter-moves',
  forkSub:'If they cite Ignatius calling Jesus God, Clement’s triadic phrases, or the “two natures” dodge, counter and close the trap'
});

/* ──────────────────────────────────────────────────────────────────────────
   ANGLE B: 2nd-century Greek Apologists: Justin Martyr, Theophilus, Tatian & Athenagoras
   ────────────────────────────────────────────────────────────────────────── */
const trapB1=P(N(
  IA('Theophilus of Antioch'),
  'Theophilus of Antioch literally uses the Greek word ‘Trinity’ (Trias) in To Autolycus 2.15 around 180 CE — proving the Trinity already existed!',
  'That is the classic word-concept fallacy. In To Autolycus 2.15, Theophilus’s “Triad” (triados) is “God, His Word, and His Wisdom” — NOT three co-equal, co-eternal divine Persons — and seven chapters later (2.22) he explicitly states “at first God was alone, and the Word in Him” before emitting the Word for creation!',
  'Why Theophilus’s “Trias” refutes Nicene Trinitarianism',
  [
    'What Trias means in To Autolycus 2.15: Theophilus likens the three days of creation before the sun and moon to “types of the Triad [triados], of God, and His Word, and His Wisdom” — identifying the third element as God’s Wisdom (Sophia), not the Holy Spirit as a co-equal hypostasis, and treating Word and Wisdom as God’s own faculties.',
    'Refuted by To Autolycus 2.22 & 1.4: Seven chapters later (2.22), Theophilus writes that “at first God was alone, and the Word in Him” (residing in His heart as mind/thought before being begotten for creation), and in 1.4 he restricts eternity without beginning exclusively to the unbegotten God. No Nicene Trinitarian can say the Father ever existed alone.',
    'Athenagoras confirms the same pattern (Plea 10): Like Theophilus and Tertullian, Athenagoras places the Logos pre-existing only “in Himself” (within the Father) before coming forth to order creation — a created personhood rather than eternal personal generation.'
  ],
  ['Theophilus of Antioch, To Autolycus 1.4; 2.15; 2.22','Athenagoras, A Plea for the Christians 10'],
  [],
  {
    facts:[
      ['To Autolycus 2.15','Trias = God, His Word, His Wisdom'],
      ['To Autolycus 2.22','“At first God was alone”'],
      ['Athenagoras 10','Son pre-existed only “in Himself”'],
      ['Fallacy','Shared word ≠ Nicene doctrine']
    ],
    shots:[
      {src:'shots/nicaea-dr-athenagoras-1.webp',cap:'Athenagoras, A Plea for the Christians Ch. 10 (Deenresponds #athenagoras): reserving “uncreated, eternal, invisible, impassible” for the one God who created through “His Logos.”'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Theophilus of Antioch literally uses the Greek word Trias (‘Trinity’) in To Autolycus 2.15 around 180 CE!',
  theyWho:'Watch out · if they say',
  who:'Counter & close the trap'
});

const stepB2=P(N(
  DR('athenagoras','1366947819394437120'),
  null,
  'Move immediately from Justin Martyr to his disciple Tatian, Athenagoras of Athens, and Theophilus of Antioch (c. 160–185 CE). All three explicitly teach the “Two-Stage Logos” theory: originally the Father existed completely alone with His Word/Reason inside Him, and only begat the Son as a distinct entity by an act of will when creating the universe.',
  'Two-Stage Logos Apologists: Theophilus, Tatian & Athenagoras',
  [
    'Theophilus of Antioch (To Autolycus 2.22, c. 180 CE): Providing the earliest surviving commentary that explicitly names the Gospel of John, Theophilus interprets John 1:1 to mean “at first God was alone, and the Word in Him,” residing in God’s heart as internal Reason before God begat Him as “first-born of all creation” to walk in Paradise — because the Father “cannot be contained” in a place (1 Kings 8:27), whereas the Word can be sent and contained in a place!',
    'Theophilus on unbegottenness (To Autolycus 1.4): Explicitly makes unbegottenness the ground of having no beginning and being immutable: “And He is without beginning, because He is unbegotten; and He is unchangeable, because He is immortal.”',
    'Tatian the Assyrian (Oration to the Greeks 5; J. N. D. Kelly p. 101): Justin Martyr’s own student declares that the Lord of the universe “was alone” before creation, holding Logos-power within Himself until “by His simple will the Logos springs forth… and becomes the first-begotten work of the Father.” As patristic scholar J. N. D. Kelly documents (Early Christian Doctrines, p. 101), the Logos was not yet “the Son” until begotten for creation.',
    'Athenagoras of Athens (A Plea for the Christians 10): Confesses “one God, uncreated, eternal, invisible, impassible, incomprehensible, illimitable,” who created all things “through His Logos” — explaining that the Son pre-existed only internally “in Himself” within the Father before coming forth as the first product for creation, contradicting eternal personal generation.'
  ],
  ['Theophilus of Antioch, To Autolycus 1.4; 2.22','1 Kings 8:27','Tatian, Oration to the Greeks 5','J. N. D. Kelly, Early Christian Doctrines (p. 101)','Athenagoras, A Plea for the Christians 10'],
  [trapB1],
  {
    credit:'Islamic Apologetics · #church-fathers (Theophilus) · Deenresponds · #tatian & #athenagoras',
    facts:[
      ['Theophilus 2.22','Earliest named John 1:1 commentary'],
      ['Tatian, Oration 5','Logos “springs forth” by Father’s will'],
      ['Athenagoras 10','Son pre-existed “in Himself”'],
      ['Kelly (p. 101)','Not yet “Son” before creation']
    ],
    visual:{
      kind:'steps',
      items:[
        ['Stage 1 — Father Alone','Originally God existed completely alone; the Logos/Reason was merely an impersonal attribute or power inside the Father’s own mind/heart.'],
        ['Stage 2 — Begotten for Creation','By a free act of will just before creating the world, God uttered/emitted the Logos as a distinct, subordinate Lord (“first-born work of the Father”).'],
        ['Nicene Verdict — Heretical','Denying eternal personal existence and co-equality/immutability places Theophilus, Tatian, and Athenagoras flatly outside Nicene orthodoxy.']
      ]
    },
    quotes:[
      {by:'Theophilus of Antioch (c. 180 CE)',en:'John says, “In the beginning was the Word, and the Word was with God,” showing that at first God was alone, and the Word in Him… The Word, then, being God, and being naturally produced from God, whenever the Father of the universe wills, He sends Him to any place; and He, coming, is both heard and seen, being sent by Him, and is found in a place.',ref:'To Autolycus, Book II, Chapter 22'},
      {by:'Theophilus of Antioch',en:'And He is without beginning, because He is unbegotten; and He is unchangeable, because He is immortal.',ref:'To Autolycus, Book I, Chapter 4'},
      {by:'Tatian the Assyrian (student of Justin)',en:'For the Lord of the universe, who is Himself the necessary ground (hypostasis) of all being, inasmuch as no creature was yet in existence, was alone… And by His simple will the Logos springs forth; and the Logos, not coming forth in vain, becomes the first-begotten work of the Father.',ref:'Oration to the Greeks, Chapter 5'}
    ],
    shots:[
      {src:'shots/yt-nicaea-theophilus.webp',cap:'DawahWise slide — Theophilus of Antioch, To Autolycus Book II Ch. 22: earliest named commentary on John 1:1 explicitly states “at first God was alone, and the Word in Him.”'},
      {src:'shots/nicaea-theophilus-1.webp',cap:'Iconographical portrait accompanying Islamic Apologetics #church-fathers › Theophilus of Antioch.'},
      {src:'shots/nicaea-theophilus-2.webp',cap:'Theophilus, To Autolycus Book I Ch. 4 (IA #church-fathers): “And He is without beginning, because He is unbegotten; and He is unchangeable, because He is immortal.”'},
      {src:'shots/nicaea-dr-tatian-1.webp',cap:'Tatian, Oration to the Greeks Ch. 5 (Deenresponds #tatian): “the Lord of the universe… was alone… by His simple will the Logos springs forth… becomes the first-begotten work of the Father.”'},
      {src:'shots/nicaea-dr-tatian-2.webp',cap:'J. N. D. Kelly, Early Christian Doctrines, Revised Edition (Deenresponds #tatian, p. 101): confirming Tatian held the Logos was not yet “the Son” before being begotten for creation.'},
      {src:'shots/nicaea-dr-athenagoras-2.webp',cap:'Athenagoras, A Plea for the Christians Ch. 10 (Deenresponds #athenagoras): Father alone is uncreated, eternal, invisible, impassible, and illimitable.'}
    ]
  }
),{
  who:'Line B · Step 2',
  forkTitle:'Watch out · likely counter-moves',
  forkSub:'If they invoke Theophilus’s use of the Greek word Trias in 180 CE, dismantle the word fallacy'
});

const angleB=P(N(
  DR('tatian','1366947306242572478'),
  null,
  'Press the 2nd-century Greek Apologists — starting with St. Justin Martyr (c. 100–165 CE), a canonized saint whom Catholics and Orthodox revere and invoke in prayer. Justin explicitly calls the Son “another God” (heteros theos) numerically distinct from and subordinate to the Creator, and proves the pre-incarnate Son is created, mutable, composite, and ontologically inferior.',
  'Justin Martyr: “another God”, created, mutable & subordinate',
  [
    'Another God subordinate to the Maker (Dialogue with Trypho 50 & 56): Trypho asks Justin to prove there is “another God besides the Maker of all things.” Justin replies in Chapter 56 that he will persuade him “that there is said to be another God and Lord, who is subject to the Maker of all things” (heteros theos — another of a different kind), numerically two Gods united only in will, not in essence.',
    'God alone is unbegotten & incorruptible (Dialogue 5 & First Apology 14): Justin declares verbatim: “God alone is unbegotten and incorruptible, and therefore He is God, but all other things after Him are created and corruptible.” In First Apology 14 he explicitly identifies “the only unbegotten God” as the Father (“follow the only unbegotten God through His Son”) — meaning the Son is created and mutable/corruptible!',
    'Pre-incarnate ontological inferiority (Dialogue 127 & 114): Explaining Old Testament theophanies before the incarnation, Justin insists “you must not imagine that the unbegotten God Himself came down or went up” because the ineffable Father cannot be confined to a spot or appear “on the smallest portion of the earth” (Ch. 127), nor have “hands and feet and fingers and a soul like a composite being” (Ch. 114) — proving the pre-incarnate Logos was composite and localizable, not a mere “difference in role.”',
    'Created Wisdom & Mark 10.18 (Dialogue 129 & 101): In Chapter 129 Justin cites Proverbs 8:22 LXX (“The Lord created [ektisen] me as the beginning of His ways”) for the Son; in Chapter 101 (and First Apology 16) he renders Mark 10:18 as “Why do you call me good? One is good, my Father in heaven.”',
    'Conservative scholarly concession (Michael Bird): Even evangelical scholar Michael Bird (quoted in Inspiring Philosophy’s own video) concedes: “What [Dan McClellan] gets right is Justin’s terminology, his use of scripture, his strong subordination means he is definitely not Nicene in the technical sense. And Justin tends to think of the Holy Spirit as more of a prophetic empowerment than the divine person.”'
  ],
  ['Justin Martyr, Dialogue with Trypho 5, 50, 56, 101, 114, 127, 129','Justin Martyr, First Apology 13, 14, 16','Michael Bird (via Inspiring Philosophy)',DW_URL],
  [stepB2],
  {
    facts:[
      ['Status','Canonized Saint (c. 100–165 CE)'],
      ['Dialogue 56','“Another God” (heteros theos)'],
      ['Dialogue 5 & 129','Everything after Father is created'],
      ['Michael Bird','“Definitely not Nicene”']
    ],
    quotes:[
      {by:'Justin Martyr (Dialogue with Trypho 56)',en:'I shall attempt to persuade you, since you have understood the Scriptures of truth, that there is said to be another God and Lord subject to the Maker of all things, who is also called an Angel…',ref:'Dialogue with Trypho, Chapter 56 (cf. Ch. 50)'},
      {by:'Justin Martyr (Dialogue with Trypho 5)',en:'For those things which exist after God, or shall at any time exist, these have the nature of decay, and are such as may be blotted out and cease to exist; for God alone is unbegotten and incorruptible, and therefore He is God, but all other things after Him are created and corruptible.',ref:'Dialogue with Trypho, Chapter 5'},
      {by:'Justin Martyr (Dialogue with Trypho 127)',en:'You must not imagine that the unbegotten God Himself came down or went up from any place. For the ineffable Father and Lord of all neither has come to any place… How, then, could He talk with any one, or be seen by any one, or appear on the smallest portion of the earth?',ref:'Dialogue with Trypho, Chapter 127 (cf. Ch. 114)'},
      {by:'Dr. Michael Bird (cited by Inspiring Philosophy)',en:'What he gets right is Justin’s terminology, his use of scripture, his strong subordination means he is definitely not Nicene in the technical sense. And Justin tends to think of the Holy Spirit as more of a prophetic empowerment than the divine person.',ref:'Michael Bird on Justin Martyr'}
    ],
    shots:[
      {src:'shots/yt-nicaea-justin1.webp',cap:'DawahWise slide — Justin Martyr, Dialogue with Trypho Ch. 50: Trypho challenges Justin to prove “there is another God besides the Maker of all things.”'},
      {src:'shots/yt-nicaea-justin2.webp',cap:'DawahWise slide — Justin Martyr, Dialogue with Trypho Ch. 127: the unbegotten Father cannot move or appear “on the smallest portion of the earth,” proving the pre-incarnate Logos is ontologically inferior (slide heading says “being unbegotten” by slip for being begotten / not unbegotten).'}
    ]
  }
),{
  optWho:'Angle',
  optLabel:'2nd-century Greek Apologists: Justin Martyr, Theophilus, Tatian & Athenagoras',
  who:'Line B · Step 1'
});

/* ──────────────────────────────────────────────────────────────────────────
   ANGLE C: 3rd-century giants: Tertullian, Origen, Hippolytus, Novatian, Clement of Alex., Dionysius & Lactantius
   ────────────────────────────────────────────────────────────────────────── */
const trapC1=P(N(
  IA('Tertullian'),
  'Tertullian literally coined the Latin term Trinitas and taught ‘three Persons, one substance’ around 200 CE — proving the Trinity existed before Nicaea!',
  'Tertullian’s Trinitas is fatal to modern Trinitarianism, not to Islam! He explicitly denied co-eternality (“there was a time when neither sin existed with Him, nor the Son”) and co-equality (“the Father is the entire substance, but the Son is a derivation and portion of the whole”) — the very doctrines Athanasius later anathematized as Arian heresy.',
  'Exposing the Tertullian “Trinitas” word-concept trap',
  [
    'Portion vs. whole substance (Against Praxeas 9 & 14): By “one substance,” Tertullian does NOT mean the undivided Nicene ousia wholly possessed by each Person; he treats God’s substance quantitatively like the sun and a tempered ray, declaring the Father “the entire substance” (tota substantia) and the Son “a derivation and portion of the whole” (portio totius).',
    'Athanasius condemns Tertullian’s model (Against the Arians 3.30): Tertullian taught the Son was temporally generated by the Father’s will for creation (Against Hermogenes 3). Athanasius explicitly rules in Against the Arians 3.30 that anyone holding the Son came into being by an act of will is saying “the Son was not and was created out of nothing” — placing Tertullian under Nicene anathema!',
    'Majority Christian backlash (Against Praxeas 3): Far from reflecting universal apostolic faith, Tertullian himself reports that “the simple… who always constitute the majority of believers, are startled at the dispensation (of the Three in One)… They are constantly throwing out against us that we are preachers of two gods and three gods.”'
  ],
  ['Tertullian, Against Praxeas 3, 9, 14','Tertullian, Against Hermogenes 3','Athanasius, Discourses Against the Arians 3.30',DW_URL],
  [],
  {
    facts:[
      ['Against Hermogenes 3','“A time when… not the Son”'],
      ['Against Praxeas 9','Son = “portion of the whole”'],
      ['Against Praxeas 3','Majority called it 2–3 gods'],
      ['Athanasius 3.30','Temporal will-generation = Arian']
    ],
    shots:[
      {src:'shots/nicaea-tertullian-1.webp',cap:'Portrait of Tertullian of Carthage (c. 160–225 CE) from Islamic Apologetics #church-fathers.'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Tertullian literally coined the Latin word Trinitas and wrote ‘three Persons, one substance’ around 200 CE!',
  theyWho:'Watch out · if they say',
  who:'Counter & close the trap'
});

const trapC2=P(N(
  DR('dionysius-alex','1365461113801543811'),
  'Origen taught eternal generation, Novatian literally titled his book On the Trinity, and Athanasius proved the Arians slandered Dionysius of Alexandria!',
  'Every one of those rescues collapses on its own primary text: eternal generation without co-equality still fails the Trinity test (Origen called the Son a secondary theos and forbade praying to him), Novatian Ch. 4 explicitly makes the begotten Son inferior and mutable, and Athanasius himself admitted in writing that Dionysius called the Son “a creature and made”!',
  'Dismantling the Origen, Novatian & Dionysius rescues',
  [
    'Origen lacks co-equality: Co-eternality alone does not make a Trinitarian. Origen explicitly used John 17:3 to call the Father alone “the God” (autotheos) and On Prayer (via Mark 10:18) to forbid praying to the Son — while Rufinus admitted editing De Principiis to remove Origen’s anti-Trinitarian statements.',
    'Novatian’s title vs. his text (On the Trinity Ch. 4): Despite the later treatise title, Novatian explicitly states that “Him alone [the Father] the Lord rightly declares good” and teaches that “whatever is begotten undergoes change” (immutability belongs to the unbegotten Father alone).',
    'Athanasius’s confession on Dionysius (Opinion of Dionysius §4): Although Athanasius begins by calling the Arian appeal a “slander,” in §4 he concedes the quotation is completely authentic: “Yes, he wrote it, and we too admit that his letter runs thus” — pleading only that readers look at Dionysius’s other letters as well.'
  ],
  ['Origen, Commentary on John 2.2; On Prayer','Novatian, On the Trinity 4','Athanasius, On the Opinion of Dionysius 1 & 4'],
  [],
  {
    facts:[
      ['Origen','Co-eternal ≠ co-equal'],
      ['Novatian Ch. 4','Begotten = undergoes change'],
      ['Dionysius','Athanasius: “Yes, he wrote it”'],
      ['Rufinus','Admitted editing Origen’s works']
    ],
    shots:[
      {src:'shots/nicaea-dr-novation-1.webp',cap:'Novatian, On the Trinity Ch. 4 (Deenresponds #novation): “Him alone the Lord rightly declares good” — reserving absolute goodness and immutability to the Father.'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Origen taught eternal generation, Novatian wrote On the Trinity, and Athanasius refuted the Arian appeal to Dionysius!',
  theyWho:'Watch out · if they say',
  who:'Counter & close the trap'
});

const stepC2=P(N(
  DR('dionysius-alex','1365461113801543811'),
  null,
  'Turn to the Greek East and the early 4th century right up to Nicaea: Clement of Alexandria, Origen, Bishop Dionysius of Alexandria, Lactantius (Constantine’s own advisor), and historian Eusebius of Caesarea all teach hierarchical subordination — and Athanasius himself had to confess that Dionysius called the Son “a creature and made, in essence alien from the Father.”',
  'Eastern & late pre-Nicene giants: Clement, Origen, Dionysius, Lactantius & Eusebius',
  [
    'Clement of Alexandria (Paedagogus 1.8–9; Stromata 4 & 6): Identifies “the God of all” strictly as the “only one good, just Creator, and the Son in the Father,” operating within a middle-Platonic hierarchy where the Logos serves as the supreme Father’s creative and pedagogical instrument rather than a co-equal hypostasis.',
    'Origen of Alexandria (Comm. on John 2.2; On Prayer; Rufinus): Even while affirming the Son’s eternal generation, Origen flatly rejects co-equality in essence, authority, and rank: he uses John 17:3 to contrast the Father as “the God” (ho theos / autotheos) with the Son as derived theos, cites Mark 10:18 to forbid praying to the Son, and had his Latin translator Rufinus openly confess in the Preface to De Principiis (and cf. 1.2.6) that he deleted or altered any statement of Origen that contradicted later Trinitarian orthodoxy!',
    'Dionysius of Alexandria (Athanasius, On the Opinion of Dionysius 1 & 4): The Arians directly cited Bishop Dionysius (3rd c. Bishop of Alexandria), and Athanasius had to admit the quote was genuine: “They say then that in a letter the blessed Dionysius has said, ‘that the Son of God is a creature and made, and not His own by nature, but in essence alien from the Father, just as the husbandman is from the vine, or the ship-builder from the boat, for that being a creature He was not before He came to be.’ Yes, he wrote it, and we too admit that his letter runs thus.”',
    'Lactantius (Divine Institutes 4.6–8, 29; c. 250–325 CE): Even Constantine’s own Latin tutor on the very eve of Nicaea still taught Tertullian-style Logos-subordinationism: the Father alone is the supreme unbegotten God (summus Deus), while the Son is a second, derivative being of lower ontological rank — structurally in the same neighborhood Nicaea condemned in Arius.',
    'Eusebius of Caesarea (325 CE): Even the great church historian himself reluctantly signed Nicaea’s creed under imperial pressure, then immediately returned home and preached subordinationist / Arian-leaning theology!'
  ],
  ['Clement of Alexandria, Paedagogus 1.8–9; Stromata 4 & 6','Origen, Commentary on John 2.2; On Prayer; Rufinus Preface to De Principiis','Athanasius, On the Opinion of Dionysius 1 & 4','Lactantius, Divine Institutes 4.6–8, 29',DW_URL],
  [trapC1,trapC2],
  {
    credit:'Islamic Apologetics · #church-fathers (Origen, Lactantius) · Deenresponds · #clement-alex, #dionysius-alex & #eusebius',
    facts:[
      ['Origen','Father = autotheos; no prayer to Son'],
      ['Rufinus Preface','Censored Origen’s anti-Trinity lines'],
      ['Dionysius','Called Son “a creature and made”'],
      ['Lactantius (d. 325)','Son = “second, derivative being”']
    ],
    quotes:[
      {by:'Athanasius (quoting Dionysius of Alexandria)',en:'They say then that in a letter the blessed Dionysius has said, “that the Son of God is a creature and made, and not His own by nature, but in essence alien from the Father, just as the husbandman is from the vine, or the ship-builder from the boat, for that being a creature He was not before He came to be.” Yes, he wrote it, and we too admit that his letter runs thus.',ref:'On the Opinion of Dionysius, §4'},
      {by:'Rufinus of Aquileia (Preface to Origen’s De Principiis)',en:'If, therefore, we have found anywhere in his writings any statement opposed to that view, which elsewhere in his works he had himself piously laid down regarding the Trinity, we have either omitted it, as being corrupt, and not the composition of Origen, or we have brought it forward agreeably to the rule which we frequently find affirmed by himself.',ref:'Preface to De Principiis'}
    ],
    shots:[
      {src:'shots/nicaea-dr-clement-alex-1.webp',cap:'Clement of Alexandria, Paedagogus Book 1 Ch. 8 (Deenresponds #clement-alex): “So that it is veritably clear that the God of all is only one good, just Creator, and the Son in the Father.”'},
      {src:'shots/nicaea-dr-clement-alex-2.webp',cap:'Clement of Alexandria, Paedagogus Book 1 Ch. 9 heading (Deenresponds #clement-alex): “That It is the Prerogative of the Same Power to Be Beneficent and to Punish Justly. Also the Manner of the Instruction of the Logos.”'},
      {src:'shots/nicaea-origen-1.webp',cap:'Engraved portrait of Origen of Alexandria (c. 185–254 CE) from Islamic Apologetics #church-fathers.'},
      {src:'shots/nicaea-dr-dionysius-alex-1.webp',cap:'Athanasius, On the Opinion of Dionysius §1 (Deenresponds #dionysius-alex): attempting to dismiss the Arian appeal to 3rd-century Bishop Dionysius as “a slander.”'},
      {src:'shots/nicaea-dr-dionysius-alex-2.webp',cap:'Athanasius, On the Opinion of Dionysius §4 (Deenresponds #dionysius-alex): forced to confess Dionysius actually wrote “the Son of God is a creature and made… in essence alien from the Father” — “Yes, he wrote it.”'},
      {src:'shots/nicaea-lactantius-2.webp',cap:'Fresco portrait of Lactantius (c. 250–325 CE) from Islamic Apologetics #church-fathers (Christian advisor to Constantine who still placed the Son in a lower ontological rank).'}
    ]
  }
),{
  who:'Line C · Step 2',
  forkTitle:'Watch out · likely counter-moves',
  forkSub:'If they point to Tertullian coining “Trinitas”, Novatian’s title, or Athanasius defending Dionysius, spring the trap'
});

const angleC=P(N(
  IA('Tertullian · Hippolytus'),
  null,
  'Move to the 3rd-century Western giants — Tertullian of Carthage (who coined Latin Trinitas), Hippolytus of Rome, and Novatian (who wrote the first Latin treatise On the Trinity). Every single one denies co-equality or co-eternality, and Tertullian candidly admits the majority of believers accused his new “Trinitas” of preaching two or three gods!',
  '3rd-century West: Tertullian, Hippolytus & Novatian',
  [
    'Tertullian denies co-eternality (Against Hermogenes 3): Explains that God was not always Father or Judge because “there was, however, a time when neither sin existed with Him, nor the Son” — pure Two-Stage Logos theology where the Word inside God only became “Son” in time.',
    'Tertullian denies co-equality (Against Praxeas 9 & 14): Explicitly writes in Ch. 9: “For the Father is the entire substance, but the Son is a derivation and portion of the whole, as He Himself acknowledges, ‘My Father is greater than I.’” In Ch. 14 he argues the Father is invisible “in the fullness of His majesty” while the Son is visible “by reason of the dispensation of His derived existence” — like a tempered ray compared to the whole sun! He also affirms Jesus literally did not know the Hour (Mark 13:32) and links Mark 10:18 with Matthew 5:45 (Against Marcion) to reserve “only good God” for the Father.',
    'Majority of believers rejected “Trinitas” (Against Praxeas 3): Tertullian testifies that “the simple… who always constitute the majority of believers, are startled at the dispensation (of the Three in One)… They are constantly throwing out against us that we are preachers of two gods and three gods, while they take to themselves pre-eminently the credit of being worshippers of the One God.”',
    'Hippolytus of Rome (Against Noetus 10–11; Refutation 5.2): Teaches Two-Stage Logos — “God, subsisting alone, and having nothing contemporaneous with Himself… When He willed, and as He willed, He manifested His Word” — and quotes Mark 10:18 to affirm that only the Father in heaven is good.',
    'Novatian of Rome (On the Trinity Ch. 4, c. 250 CE): Even in the first Latin work titled “On the Trinity,” Novatian explicitly applies Mark 10:18 to the Father alone (“Him alone the Lord rightly declares good”) and teaches, like Justin Martyr, that “whatever is begotten undergoes change.”'
  ],
  ['Tertullian, Against Praxeas 3, 9, 14; Against Hermogenes 3; Against Marcion 4','Hippolytus, Against Noetus 10–11; Refutation 5.2','Novatian, On the Trinity 4',DW_URL],
  [stepC2],
  {
    credit:'Islamic Apologetics · #church-fathers (Tertullian, Hippolytus) · Deenresponds · #novation',
    facts:[
      ['Tertullian','Son = “portion of the whole”'],
      ['Praxeas 3','Majority cried “two & three gods”'],
      ['Hippolytus','“Nothing contemporaneous with God”'],
      ['Novatian Ch. 4','Begotten = mutable; Father alone good']
    ],
    quotes:[
      {by:'Tertullian (Against Praxeas 9)',en:'For the Father is the entire substance, but the Son is a derivation and portion of the whole, as He Himself acknowledges: “My Father is greater than I.”',ref:'Against Praxeas, Chapter 9'},
      {by:'Tertullian (Against Hermogenes 3)',en:'For He could not have been the Father previous to the Son, nor a Judge previous to sin. There was, however, a time when neither sin existed with Him, nor the Son.',ref:'Against Hermogenes, Chapter 3'},
      {by:'Tertullian (Against Praxeas 3)',en:'The simple, indeed, (I will not call them unwise and unlearned,) who always constitute the majority of believers, are startled at the dispensation (of the Three in One)… They are constantly throwing out against us that we are preachers of two gods and three gods.',ref:'Against Praxeas, Chapter 3'},
      {by:'Hippolytus of Rome (c. 170–235 CE)',en:'God, subsisting alone, and having nothing contemporaneous with Himself, determined to create the world… For us, then, it is sufficient simply to know that there was nothing contemporaneous with God. Beside Him there was nothing.',ref:'Against the Heresy of One Noetus 10–11'}
    ],
    shots:[
      {src:'shots/yt-nicaea-tertullian.webp',cap:'DawahWise slide — Tertullian, Against Praxeas Ch. 14: Father is invisible “in the fullness of His majesty,” while the Son is visible “by reason of the dispensation of His derived existence” (a lesser, ray-like portion).'},
      {src:'shots/nicaea-tertullian-2.webp',cap:'High-resolution portrait engraving of Tertullian of Carthage (IA #church-fathers).'},
      {src:'shots/nicaea-tertullian-3.webp',cap:'Tertullian, Against Praxeas Ch. 3 (IA #church-fathers): admitting “the majority of believers” are startled by his Three-in-One dispensation and accuse him of preaching “two gods and three gods.”'},
      {src:'shots/nicaea-hippolytus-1.webp',cap:'Icon of Hippolytus of Rome (IA #church-fathers): taught Two-Stage Logos (“nothing contemporaneous with Himself”) and that only the Father is good.'},
      {src:'shots/nicaea-dr-novation-2.webp',cap:'Novatian, On the Trinity Ch. 4 (Deenresponds #novation): “Moreover, He is Good, Always the Same, Immutable, One and Only, Infinite… Him alone the Lord rightly declares good.”'}
    ]
  }
),{
  optWho:'Angle',
  optLabel:'3rd-century giants: Tertullian, Origen, Hippolytus, Novatian, Clement of Alex., Dionysius & Lactantius',
  who:'Line C · Step 1'
});

/* ──────────────────────────────────────────────────────────────────────────
   ANGLE D: The Holy Spirit, Nicaea 325 & Constantinople 381: how the Trinity was actually assembled
   ────────────────────────────────────────────────────────────────────────── */
const trapD1=P(N(
  DR('holy-spirit','1366947771424313364'),
  'The Bible itself already proves the Holy Spirit is God — Acts 5:3–4 says lying to the Spirit is lying to God, and Acts 20:28 says the Spirit oversees the church of God ‘which He bought with His own blood’!',
  'Both proof-texts collapse on contact! In Acts 5:3–4, lying to God’s Spirit-empowered apostle is lying to the God who sent him (just as lying to Elisha or rejecting Paul’s Spirit-given command is rejecting God). And reading Acts 20:28 as “the Holy Spirit bought the church with His own blood” turns the Holy Spirit into the one who bled on the cross — straight Modalism!',
  'Refuting Acts 5:3–4 and Acts 20:28 on the Spirit’s deity',
  [
    'Acts 5.3–4 (agency, not hypostasis): When Ananias lies to Peter, who speaks under prophetic guidance, he lies to God who gave the Spirit — exactly as 1 Thessalonians 4:8 says whoever rejects apostolic teaching “rejects not man, but God, who gives His Holy Spirit to you,” or 2 Kings 5:26 where Gehazi lies to Elisha’s prophetic spirit. Neither makes a gift or spirit a third divine Person.',
    'Acts 20.28 modalism trap: In Acts 20:28 the grammatical subject is “the Holy Spirit [who] has made you overseers.” If “bought with His own blood” refers to that subject, the Holy Spirit shed blood on the cross (confusing the Spirit with Jesus!). Moreover, early manuscripts vary (“church of the Lord [kyriou]”), and even the text with “God” means God purchased the church via His Christ — not a triune Spirit.',
    'Gregory of Nazianzus’s 379 CE knockout: If Acts 5 or 20:28 clearly taught a co-equal third Person of the Trinity, St. Gregory of Nazianzus could never have admitted in 379 CE that “esteemed elders” in the Church still protested: “Scripture is not clear” and “What is this God you have brought out of nowhere?”'
  ],
  ['Acts 5:3–4; 20:28','1 Thessalonians 4:8; 2 Kings 5:26','Gregory of Nazianzus, Oration 31.5 (379 CE)',DW_URL],
  [],
  {
    facts:[
      ['Acts 5.3–4','Prophetic agency (cf. 1 Thess 4:8)'],
      ['Acts 20.28','Spirit having blood = Modalism'],
      ['MSS Variant','“Church of the Lord” vs. “God”'],
      ['Gregory (379 CE)','“Scripture is not clear”']
    ],
    shots:[
      {src:'shots/nicaea-dr-holy-spirit-1.webp',cap:'Athenagoras, A Plea for the Christians Ch. 10 (Deenresponds #holy-spirit): describing the prophetic Holy Spirit as “an effluence of God, flowing from Him, and returning back again like a beam of the sun.”'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Acts 5:3–4 (lying to the Spirit = lying to God) and Acts 20:28 already prove the Holy Spirit is God!',
  theyWho:'Watch out · if they say',
  who:'Counter & close the trap'
});

const stepD2=P(N(
  DR('what-is-trinity','1368249737354022973'),
  null,
  'Finish by exposing how Nicaea 325 and Constantinople 381 actually assembled the doctrine — and contrast four centuries of shifting imperial councils with the Qurʾān’s unbroken, crystal-clear tawḥīd from day one.',
  'Nicaea 325 vs. Constantinople 381 — and the Qurʾānic contrast',
  [
    'Antioch (268 CE) condemned homoousios before Nicaea (325 CE) imposed it: Nearly sixty years before Nicaea, orthodox bishops at the Synod of Antioch (led by Malchion) condemned Paul of Samosata and explicitly rejected the term homoousios (“of one substance”). Yet at Nicaea in 325 CE, Emperor Constantine pressured the bishops into adopting that very rejected word — and bishops like Eusebius signed under duress before returning to subordinationist teaching.',
    'Not “Find Islam before Nicaea”: When apologists deflect with “Show me Islam before Muhammad!”, clarify the argument: Muslims are not claiming Justin or Irenaeus were Muslims. We are running an internal abductive critique — if Jesus taught Nicene Trinitarianism, then the first 300 years of his followers and canonized saints would not have unanimously denied co-equality, co-eternality, or the Spirit’s deity.',
    'Pure, unchanged tawḥīd from day one (Q 112 & Q 4.171): Unlike the Trinity — hammered out across 325 and 381 CE through political coercion and shifting Greek philosophy — the Qurʾān preached absolute monotheism from the very first Meccan sūrahs and explicitly corrected Christian excesses in al-Nisāʾ 4:171, affirming Jesus as Messenger, created Word (“Be!”), and a spirit from Allah while commanding: “Do not say ‘Three.’”'
  ],
  ['Synod of Antioch (268 CE)','Council of Nicaea (325 CE)','Council of Constantinople (381 CE)','Qurʾān 4:171; 112:1–4',DW_URL],
  [],
  {
    facts:[
      ['Antioch 268 CE','Homoousios rejected as heresy'],
      ['Nicaea 325 CE','Homoousios forced by Constantine'],
      ['Constantinople 381','Spirit elevated 56 years later'],
      ['Islam (Day 1)','Explicit tawḥīd (Q 4:171 & 112)']
    ],
    doc:{
      ref:'Qurʾān · al-Nisāʾ 4:171',
      ar:'إِنَّمَا الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ رَسُولُ اللَّهِ وَكَلِمَتُهُ أَلْقَاهَا إِلَىٰ مَرْيَمَ وَرُوحٌ مِّنْهُ ۖ فَآمِنُوا بِاللَّهِ وَرُسُلِهِ ۖ وَلَا تَقُولُوا ثَلَاثَةٌ ۚ انتَهُوا خَيْرًا لَّكُمْ ۚ إِنَّمَا اللَّهُ إِلَـٰهٌ وَاحِدٌ',
      en:'“The Messiah, Jesus son of Mary, was only a Messenger of Allah and His word which He directed to Mary and a spirit from Him. So believe in Allah and His messengers, and do not say, ‘Three.’ Desist — it is better for you. Indeed, Allah is but one God.”'
    },
    visual:{
      kind:'compare',
      left:{
        title:'Conciliar Assembly (1st–4th c.)',
        items:[
          '1st–3rd c.: Subordinationism & Two-Stage Logos',
          '268 CE: Homoousios condemned at Antioch',
          '325 CE: Homoousios imposed; Spirit left undefined',
          '381 CE: Holy Spirit finally elevated to complete Trinity'
        ]
      },
      right:{
        title:'Qurʾānic Tawḥīd (Unbroken)',
        items:[
          'Day one: Absolute oneness of Allah (al-Ikhlāṣ 112)',
          'Explicit rejection of “Three” (al-Nisāʾ 4:171)',
          'Jesus honoured as Prophet, Word (“Be!”), and Spirit from Him',
          'Zero conciliar revisions across 1,400+ years'
        ]
      }
    }
  }
),{
  who:'Line D · Step 2 (Historical & Islamic conclusion)'
});

const angleD=P(N(
  DR('holy-spirit','1366947771424313364'),
  null,
  'Drop the fatal third-Person knockout: even if a Christian stretches every quote about the Son, there was ZERO pre-381 CE belief in a co-equal, uncreated Holy Spirit. Early Fathers treated the Spirit as a prophetic power, an effluence, or a creature made through the Son; Nicaea 325 didn’t even call the Spirit God; and in 379 CE Gregory of Nazianzus admitted the Church was still completely divided!',
  'The Holy Spirit before 381 CE: power, effluence, or creature',
  [
    'Justin Martyr & Athenagoras (power / effluence): Even conservative scholar Michael Bird notes Justin treats the Spirit as “prophetic empowerment” rather than a divine person. Athenagoras (Plea for the Christians 10) calls the Spirit operating in the prophets “an effluence of God, flowing from Him, and returning back again like a beam of the sun.”',
    'Origen & Tatian (confused or created): Tatian’s writings leave the Spirit’s status unclear; Origen (Commentary on John 2.10) treats the Holy Spirit as the highest being made through the Word — a view later orthodoxy condemned as Pneumatomachian heresy.',
    'Nicaea 325 CE’s glaring silence: The original Nicene Creed of 325 CE defined the Son’s relation to the Father in detail and added anathemas against Arius, then ended the entire theological section with four bare words: “And in the Holy Spirit” — zero claim that the Spirit is God, Lord, co-equal, or to be worshipped!',
    'Gregory of Nazianzus in 379 CE (Oration 31.5): Just two years before the Council of Constantinople (381 CE) formally elevated the Spirit, Cappadocian Father Gregory of Nazianzus admitted publicly that respected church elders still held wildly contradictory views: some called the Spirit an impersonal energy, some a creature, some God, some were agnostic, and others objected: “What is this God you have brought out of nowhere? Scripture is not clear!”'
  ],
  ['Athenagoras, A Plea for the Christians 10','Origen, Commentary on John 2.10','Creed of Nicaea (325 CE)','Gregory of Nazianzus, Oration 31.5 (379 CE)',DW_URL],
  [trapD1,stepD2],
  {
    facts:[
      ['Athenagoras 10','Spirit = “effluence… like a sunbeam”'],
      ['Nicaea 325 CE','Only says “And in the Holy Spirit”'],
      ['Gregory (379 CE)','Elders divided: power, creature, or God'],
      ['Constantinople 381','Spirit’s deity finally canonized']
    ],
    quotes:[
      {by:'Athenagoras of Athens (c. 177 CE)',en:'The Holy Spirit Himself also, which operates in the prophets, we assert to be an effluence of God, flowing from Him, and returning back again like a beam of the sun.',ref:'A Plea for the Christians, Chapter 10'},
      {by:'St. Gregory of Nazianzus (379 CE)',en:'Of the wise men among us, some have conceived of Him [the Holy Spirit] as an activity, some as a creature, some as God; and some have been uncertain which to call Him, out of reverence for Scripture, as they say, because it does not make any clear statement either way.',ref:'Fifth Theological Oration (Oration 31.5)'}
    ],
    shots:[
      {src:'shots/nicaea-dr-holy-spirit-2.webp',cap:'Athenagoras, A Plea for the Christians Ch. 10 (Deenresponds #holy-spirit): “The Holy Spirit Himself also, which operates in the prophets, we assert to be an effluence of God, flowing from Him, and returning back again like a beam of the sun.”'}
    ]
  }
),{
  optWho:'Angle',
  optLabel:'The Holy Spirit, Nicaea 325 & Constantinople 381: how the Trinity was actually assembled',
  who:'Line D · Step 1',
  forkTitle:'Watch out · or press to the conclusion',
  forkSub:'Counter biblical Spirit proof-texts or jump straight to the Nicaea 325 / Constantinople 381 & Islamic conclusion'
});

/* ──────────────────────────────────────────────────────────────────────────
   SPINE: Step 01 (Opening move) → Step 02 (Timeline) → 4-way Tactical Fork
   ────────────────────────────────────────────────────────────────────────── */
const step02=P(N(
  DR('what-is-trinity','1368249737354022973'),
  null,
  'With the definition locked, lay out the documented four-stage timeline and press the abductive argument: if Nicene Trinitarianism is the indispensable core of Christianity (“Trinity or nothing”), why did not a single orthodox writer in the first three centuries hold co-equality, co-eternality, and a divine Spirit?',
  'Lock in the historical timeline & the abductive argument',
  [
    'The abductive test: Nearly all mainstream Christians treat Nicene Trinitarianism as essential for salvation. Yet if Jesus and the Apostles taught it, it is historically inexplicable that the very Fathers closest to the Apostles — including canonized saints — uniformly taught unitarian monotheism or ontological subordinationism for three straight centuries.',
    'Stage 1 (1st century CE): Strict Jewish-Christian monotheism and Father-alone supremacy — Clement of Rome distinguishes “one God” from “one Christ” (never calling Jesus God), and the Ebionites trace their monotheism to James the brother of Jesus.',
    'Stage 2 (2nd–3rd centuries CE): Two-Stage Logos & Subordinationism — Justin Martyr, Tatian, Athenagoras, Theophilus, Irenaeus, Tertullian, Hippolytus, Clement of Alexandria, Origen, Novatian, Dionysius of Alexandria, and Lactantius all subordinate the Son (and treat the Spirit as a power, effluence, or creature).',
    'Stage 3 (325 CE, Nicaea) & Stage 4 (381 CE, Constantinople): Emperor Constantine forced homoousios through at Nicaea — the exact term orthodox bishops had condemned at Antioch in 268 CE! Even then, Nicaea left the Holy Spirit completely undefined until Constantinople 381 CE.'
  ],
  ['Deenresponds · #what-is-the-trinity','Synod of Antioch (268 CE)','Council of Nicaea (325 CE)','Council of Constantinople (381 CE)',DW_URL],
  [angleA,angleB,angleC,angleD],
  {
    facts:[
      ['1st c. CE','Father = “God alone” (1 Clem 59)'],
      ['2nd–3rd c. CE','Universal subordination / Two-Stage Logos'],
      ['325 CE Nicaea','Homoousios forced; Spirit undefined'],
      ['381 CE Council','Spirit elevated → Trinity completed']
    ],
    visual:{
      kind:'steps',
      items:[
        ['1st Century — Jewish Monotheism','1 Clement distinguishes “one God” (the Father alone) from “one Christ”; Ebionites preserve strict monotheism under James’s lineage.'],
        ['2nd–3rd Centuries — Subordinationist Logos','Apologists and Western/Eastern Fathers call the Son a lesser/derived God, begotten in time for creation, and deny his omniscience or equality.'],
        ['325 CE — Nicaea Under Constantine','Adopts homoousios (previously condemned at Antioch in 268 CE) to settle Arianism, yet says only “and in the Holy Spirit.”'],
        ['381 CE — Constantinople Completes the Trinity','Fifty-six years after Nicaea — after Gregory of Nazianzus admits elders are still divided in 379 CE — the Spirit is formally elevated.']
      ]
    }
  }
),{
  who:'Lock in the historical timeline',
  forkTitle:'4 tactical lines of attack',
  forkSub:'Pick any era or theological weak spot to lead the argument — each includes Watch-out traps'
});

const step01=P(N(
  DR('what-is-trinity','1368249737354022973'),
  'The Trinity was always the faith of the Church — the early Church Fathers from the 1st to 3rd centuries were Trinitarians.',
  'Before testing a single Church Father, define what the Trinity actually is: three distinct Persons (Father, Son, Holy Spirit) who are co-equal in power, knowledge, and nature, co-eternal, and one undivided essence (homoousios). Anyone who violates co-equality, co-eternality, or personal distinction is a heretic by Nicene standards — not a Trinitarian.',
  'Opening move: lock the definition before citing any Father',
  [
    'The three non-negotiable criteria (Deenresponds #what-is-the-trinity): (1) Personal distinction — Father, Son, and Spirit are not identical; (2) Co-eternality — none came into distinct existence at a point in time; (3) Co-equality — identical divine nature, power, omniscience, and glory.',
    'The consistency rule: Today’s Trinitarians classify anyone who violates even ONE of these three pillars as a non-Trinitarian heretic (such as Arians or Modalists). You cannot lower the bar for the early Church Fathers just to rescue historical continuity — if violating co-equality or co-eternality still counts as “Trinitarian,” then Arians and Modalists would count as Trinitarians too!',
    'High Christology ≠ Trinitarianism: Showing that a 2nd-century writer called Jesus “God” (theos), “Logos,” or “Creator” proves nothing by itself — Arians and subordinationists also gave Jesus exalted titles while insisting the Father alone is the supreme, unbegotten God.',
    'Even Christian scholarship agrees: Mainstream patristics and scholars like Michael Bird (quoted by Inspiring Philosophy) admit pre-Nicene Fathers like Justin Martyr were “definitely not Nicene in the technical sense.”'
  ],
  ['Deenresponds · #what-is-the-trinity','Nicene-Constantinopolitan Creed (325 / 381 CE)','Michael Bird (via Inspiring Philosophy)',DW_URL],
  [step02],
  {
    facts:[
      ['Three Pillars','Distinct, co-eternal, co-equal'],
      ['Failure Rule','Violate one pillar = non-Trinitarian'],
      ['Common Trap','High Christology ≠ Nicene Trinity'],
      ['Double Standard','Don’t exempt Fathers from heresy test']
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Nicene/Constantinopolitan Trinity (325/381)',
        items:[
          'Father, Son & Holy Spirit share one undivided essence (homoousios)',
          'All three Persons are strictly co-eternal (no beginning of Sonship)',
          'Strictly co-equal in omniscience, immutability, invisibility & glory',
          'Holy Spirit is fully God, worshipped and glorified equally'
        ]
      },
      right:{
        title:'Pre-Nicene Reality (1st–3rd c.)',
        items:[
          'Father alone called “the only true God” / “unbegotten God”',
          'Two-Stage Logos: Father existed alone, begat Son for creation',
          'Son subordinated in knowledge (Mark 13:32), goodness (Mark 10:18) & rank',
          'Spirit treated as prophetic power, effluence, or creature made via Son'
        ]
      }
    },
    quotes:[
      {by:'Deenresponds (#what-is-the-trinity)',en:'It doesn’t matter if they have elements of trinitarianism: if they violate the co-equality, or eternality, or the distinction between the persons, then they cannot be a trinitarian. A person who violates these three things today Trinitarians would classify as heretics and non-trinitarians, so let’s not have a different standard for the early church.',ref:'Deenresponds · #what-is-the-trinity'}
    ]
  }
),{
  who:'Opening move'
});

card('christianity/church/no-trinity-before-nicaea',{
  title:'No Trinity before Nicaea',
  k:'Patristics · Tactical Playbook',
  blurb:'Why zero 1st–3rd century Church Fathers taught the Nicene Trinity — Clement, Irenaeus, Justin, Theophilus, Tertullian, Origen, the Spirit & 325/381.',
  claim:'The Trinity was always the faith of the Church — the early Church Fathers from the 1st to 3rd centuries were Trinitarians.',
  tree:step01,
  sum:'Locking in the Nicene definition exposes an unbroken three-century consensus against co-equality and co-eternality — from Clement of Rome and Irenaeus to Justin Martyr, Two-Stage Logos apologists, Tertullian, Origen, Dionysius, and an undefined Holy Spirit until Constantinople 381 CE — leaving the Trinity as a 4th-century conciliar synthesis in stark contrast to Islam’s unchanged tawḥīd.'
});

/* ──────────────────────────────────────────────────────────────────────────
   CROSS-ATTACH NEWLY HARVESTED SCANS TO EXISTING 0-SHOT CARDS (ZERO DUPLICATES)
   ────────────────────────────────────────────────────────────────────────── */
(function(){
  function attachShots(targetKey, shots){
    let found=null;
    const fallbacks=[targetKey];
    if(targetKey==='christianity/jesus/proof-texts/d-dr-mark-10-18'){
      fallbacks.push('christianity/jesus/d-dr-mark-10-18');
    }
    for(const key of fallbacks){
      for(let i=window.TOPICS.length-1;i>=0;i--){
        const t=window.TOPICS[i], k=t.path.join('/');
        if(k===key){ found=t.node; break; }
        if(key.startsWith(k+'/')&&t.node&&t.node.children){
          const c=t.node.children[key.slice(k.length+1)];
          if(c){ found=c; break; }
        }
      }
      if(found) break;
    }
    const tree=found&&found.article&&found.article.tree;
    if(!tree||!tree.more){
      console.warn('no-trinity-before-nicaea: attachShots target not found ->', targetKey);
      return;
    }
    const existing=new Set((tree.more.shots||[]).map(s=>typeof s==='string'?s:s.src));
    const toAdd=shots.filter(s=>!existing.has(s.src));
    if(toAdd.length) tree.more.shots=(tree.more.shots||[]).concat(toAdd);
  }

  attachShots('christianity/church/d-ia-church-fathers/t-clement-of-rome',[
    {src:'shots/yt-nicaea-clement.webp',cap:'DawahWise slide — Clement of Rome (1st century), 1 Clement 59:3: prayer to the Father alone as “Creator and Overseer of every spirit” who acts “through Jesus Christ, Thy beloved Son.”'}
  ]);

  attachShots('christianity/church/d-ia-church-fathers/t-origen-of-alexandria',[
    {src:'shots/nicaea-origen-1.webp',cap:'Engraved portrait of Origen of Alexandria (c. 185–254 CE) from Islamic Apologetics #church-fathers (detail).'},
    {src:'shots/nicaea-origen-2.webp',cap:'Portrait of Origen of Alexandria (Islamic Apologetics #church-fathers).'}
  ]);

  attachShots('christianity/church/d-ia-church-fathers/t-hippolytus-of-rome',[
    {src:'shots/nicaea-hippolytus-1.webp',cap:'Icon of Hippolytus of Rome (c. 170–235 CE) from Islamic Apologetics #church-fathers (high-res).'},
    {src:'shots/nicaea-hippolytus-2.webp',cap:'Icon of Hippolytus of Rome (Islamic Apologetics #church-fathers).'}
  ]);

  attachShots('christianity/church/d-ia-church-fathers/t-lucius-cæcilius-firmianus-lactantius',[
    {src:'shots/nicaea-lactantius-1.webp',cap:'Fresco portrait of Lactantius (c. 250–325 CE) from Islamic Apologetics #church-fathers.'},
    {src:'shots/nicaea-lactantius-2.webp',cap:'Fresco portrait of Lactantius (Islamic Apologetics #church-fathers, higher resolution).'}
  ]);

  attachShots('christianity/jesus/proof-texts/d-dr-mark-10-18',[
    {src:'shots/yt-nicaea-irenaeus.webp',cap:'DawahWise slide — Joel Marcus (Mark 8–16, Anchor Yale Bible): Mark 10:18 alludes to the Jewish Shema, illustrating the “infinite qualitative distinction” between the one good God and humanity.'}
  ]);
})();
})();
