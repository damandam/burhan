/* Block 6: AV1 (#hölle-schicksal) & IA Forums/Text Channels with 30 local WebP scans — 2026-11-22.
   Builds 1 new Tactical Debate Playbook card (Proverbs 16:4 & Qadar) and 7 add() enrichments
   (3 debate-tree branches + 4 explainer cards), attaching all 30 shots/*.webp scans. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('block6-ia-av-scans: no card',key); };

const IA=(sub,id)=>({credit:'Islamic Apologetics · '+sub,link:'https://discord.com/channels/1514269918978248796/'+id});
const AV=(sub,id)=>({credit:'Averroes · '+sub,link:'https://discord.com/channels/1275832106949283962/'+id});
const S=(src,cap)=>({src:'shots/'+src,cap});

/* ============================================================================
   A. NEW Tactical Playbook card: christianity/bible/proverbs-16-4-created-for-evil
   ============================================================================ */
const HS=AV('#hölle-schicksal (translated from German)','1275941359676821504');

const hsTrapA=P(N(
  HS,
  'Proverbs 16:4 just means God directs existing wicked people to judgment—He never decrees anyone for destruction!',
  'Even if you try to soften Proverbs 16:4, Paul removes that escape hatch in Romans 9:11–22: before Esau was born or had done good or bad, God hated him, hardened Pharaoh’s heart, and shaped “vessels of wrath prepared for destruction.” You cannot condemn Islamic qadar while defending Romans 9.',
  'Romans 9.11–22 & the Biblical potter-clay dilemma',
  [
    '01 · Pre-birth election in Romans 9.11–13: Paul explicitly writes that before Jacob and Esau were born or had done anything good or bad, God loved Jacob and hated Esau—making divine choice independent of human works.',
    '02 · Active hardening & vessels of wrath (Romans 9.17–22): Paul adds that God raised Pharaoh up to display His power, hardens whomever He wills, and prepares “vessels of wrath” for destruction while silencing objections (“Who are you, O man, to answer back to God?”).',
    '03 · Islamic justice remains explicit: By contrast, Allah declares in a ṣaḥīḥ ḥadīth qudsī (Muslim 2577), “O My servants, I have forbidden oppression for Myself,” and in Qurʾān 41:46 that He never wrongs His servants—punishing only those who knowingly choose sin and rejection.'
  ],
  ['Proverbs 16:4','Romans 9:11–22','Ṣaḥīḥ Muslim 2577','Qurʾān 41:46'],
  [],
  {
    facts:[
      ['Rom 9:11–13','Choice made before birth or works'],
      ['Rom 9:18, 22','Hardens at will; vessels of wrath'],
      ['Muslim 2577','Allah forbids oppression for Himself'],
      ['Q 41:46','Your Lord never wrongs His servants']
    ],
    quotes:[
      {by:'Romans 9:18 (ESV)',en:'So then he has mercy on whomever he wills, and he hardens whomever he wills.',ref:'Romans 9:18'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Proverbs 16:4 only means God turns existing wicked people to judgment—not that He decrees them for it!',
  theyWho:'Watch out · if they say',
  who:'Press Romans 9:11–22 & Muslim 2577'
});

const hsTrapB=P(N(
  HS,
  'If Allah knows everything beforehand and wills everything (qadar), how do Muslims still have real moral accountability?',
  'Foreknowledge and divine permission (mashīʾa) are not coercion (jabr). Allah knows what each person will freely choose, records it in the Preserved Tablet, and holds people accountable only after showing them the clear path (Q 76:3; 91:7–10) and giving them genuine choice (Q 18:29).',
  'Foreknowledge vs. coercion in Islamic theology',
  [
    '01 · Knowledge does not force choice: Knowing in advance what someone will freely pick—like a teacher knowing how students will answer—does not compel the student’s decision or strip away moral responsibility.',
    '02 · Guidance and choice in the Qurʾān (76.3 & 18.29): Allah states, “We guided him to the way, be he grateful or be he ungrateful” (76:3) and “Whoever wills—let him believe; and whoever wills—let him disbelieve” (18:29).',
    '03 · Balance between fatalism and denying qadar: Classical Sunnī creed rejects both Jabriyya (who claimed humans are forced puppets) and Qadariyya (who denied God’s foreknowledge), affirming that human choices are real, earned actions within God’s sovereignty (Bukhārī 4949).'
  ],
  ['Qurʾān 18:29; 76:3; 91:7–10','Ṣaḥīḥ al-Bukhārī 4949'],
  [],
  {
    facts:[
      ['Q 76:3','Path shown clearly; human is grateful or ungrateful'],
      ['Q 18:29','Whoever wills, believe or disbelieve'],
      ['Q 53:38','No bearer of burdens bears another’s burden'],
      ['Sunni Creed','Rejects fatalism (jabr) & denial of foreknowledge']
    ],
    quotes:[
      {by:'Qurʾān 41:46',en:'Whoever does righteousness—it is for his own soul; and whoever does evil—it is against it.',ref:'Sūrat Fuṣṣilat 41:46'}
    ]
  }
),{
  optWho:'Or clarify Islam · if they ask',
  optLabel:'If Allah knows and decrees everything (qadar), how can anyone truly choose faith or disbelief?',
  theyWho:'Or clarify Islam · if they ask',
  who:'Distinguish foreknowledge from coercion'
});

card('christianity/bible/proverbs-16-4-created-for-evil',{
  title:'Proverbs 16:4: “Even the wicked for the day of evil”',
  k:'Qadar · Predestination · Prov 16:4',
  blurb:'Answering attacks on Islamic qadar and Hell via Proverbs 16:4 and Romans 9:18–22.',
  claim:'Allah created some people purely for Hell, making Islamic qadar unjust—unlike the Christian God of pure love.',
  tree:P(N(
    HS,
    'Islamic predestination (qadar) means Allah creates people just to throw them into Hellfire—a cruel fatalism the God of the Bible would never teach.',
    'Check your own Bible first. Proverbs 16:4 says: “The LORD has made everything for its purpose, even the wicked for the day of trouble” (Lutherbibel 1912: “auch den Gottlosen für den bösen Tag”). Paul goes even further in Romans 9:18–22, writing that God hardens whomever He wills and prepares “vessels of wrath” for destruction. Meanwhile, Islam explicitly forbids attributing injustice to God (Q 4:40; 41:46) and ties Hell strictly to free moral rejection (Q 76:3; 18:29).',
    'Proverbs 16.4, Romans 9 & Islamic moral accountability',
    [
      '01 · Proverbs 16.4 in Lutherbibel 1912 & ESV: Proverbs 16:4 explicitly declares that the LORD made everything for its fixed purpose—including the wicked for the evil day—shattering the claim that divine decree over the fate of the wicked is an Islamic invention.',
      '02 · Romans 9.18–22 deepens the Biblical tension: Paul teaches that God has mercy on whom He wills, hardens whom He wills, and molds “vessels of wrath prepared for destruction” like clay on a potter’s wheel.',
      '03 · Islamic justice is absolute (Q 4.40 & 41.46): The Qurʾān insists Allah never commits even an atom’s weight of injustice (4:40) and never wrongs His servants (41:46); divine foreknowledge of human choices never equals creating innocent people merely to torture them.',
      '04 · Real agency & individual accountability (Q 76.3 & 53.38): Every person is shown the clear path to choose gratitude or ingratitude (76:3), bears only their own moral burden (53:38), and faces judgment solely for what they earned.'
    ],
    ['Proverbs 16:4 (Lutherbibel 1912 / ESV)','Romans 9:18–22','Qurʾān 4:40; 18:29; 41:46; 53:38; 76:3'],
    [hsTrapA,hsTrapB],
    {
      facts:[
        ['Prov 16:4','Wicked made for the day of trouble'],
        ['Rom 9:18–22','God hardens at will; vessels of wrath'],
        ['Q 4:40 / 41:46','Allah never wrongs by an atom’s weight'],
        ['Q 76:3 / 53:38','Free moral choice & personal accountability']
      ],
      quotes:[
        {by:'Proverbs 16:4 (Lutherbibel 1912, tr.)',en:'The LORD makes everything for a fixed purpose, even the godless for the evil day.',ref:'Proverbs 16:4'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Biblical texts critics overlook',
          items:[
            'Proverbs 16:4 — wicked made for the day of evil',
            'Romans 9:11–13 — Esau hated before birth or deeds',
            'Romans 9:18–22 — hardening & vessels of wrath for destruction',
            'Double standard: attacking qadar while ignoring their own canon'
          ]
        },
        right:{
          title:'Islamic balance (Qadar & Justice)',
          items:[
            'Allah forbids oppression for Himself (Muslim 2577)',
            'No soul is wronged even an atom’s weight (Q 4:40)',
            'Humans shown the way and choose freely (Q 76:3; 18:29)',
            'Foreknowledge records choice; it does not coerce sin'
          ]
        }
      },
      shots:[
        S('av-hoelle-1.webp','AV1 #hölle-schicksal: Proverbs 16:4 in Lutherbibel 1912 (“auch den Gottlosen für den bösen Tag”) answering Christian attacks on Islamic qadar and Hell.')
      ]
    }
  ),{
    who:'Turn Prov 16:4 & clarify qadar',
    forkTitle:'Two ways they reply on predestination',
    forkSub:'Softening Proverbs 16:4 or questioning human free will under qadar'
  }),
  sum:'Critics who attack Islamic qadar as cruel ignore Proverbs 16:4 and Romans 9:18–22 in their own Bible, whereas Islam pairs divine foreknowledge with real human choice and absolute divine justice (Q 41:46).'
});

/* ============================================================================
   B.1 add('islam/quran/d-ia-satanic-verses', ...) — ia_satanic_verses (tree)
   ============================================================================ */
const SAT=IA('#satanic-verses','1514980513260114161');
add('islam/quran/d-ia-satanic-verses',P(N(
  SAT,
  'Even with weak isnāds, the Satanic Verses story passes the criterion of embarrassment—why else would early Muslims report it unless it happened?',
  'Modern historians themselves dismantle that shortcut. In Before Orthodoxy (p. 301), Shahab Ahmed shows early Muslims did not find the report embarrassing at all—they cited it positively to explain Q 22:52 and God’s protection of revelation. Jonathan Brown (Muhammad, pp. 98–99) highlights the same methodological flaw using al-Wāqidī’s talking-idol report, and applying the “embarrassment” test blindly would also force Christians to authenticate the 2nd-century Infancy Gospel of Thomas where young Jesus curses children dead.',
  'Criterion of embarrassment refuted: Ahmed, Brown & Infancy Gospel of Thomas',
  [
    '01 · No embarrassment in early Muslim reception (Shahab Ahmed, p. 301): Ahmed concludes that Muslims of the first two centuries overwhelmingly saw the report as consistent with their theology of prophethood and divine safeguarding of the Qurʾān—removing the premise that Muslims “could not have invented it.”',
    '02 · Jonathan Brown on the Historical Critical Method (pp. 98–99): Brown warns that assuming an ancient story looks “bad” to its own narrators merely projects later orthodoxy backward; al-Wāqidī similarly narrated the idol al-ʿUzzā charging Khālid ibn al-Walīd as a living woman despite Qurʾān 21:58–67 denying idols can speak, proving unorthodox stories were still invented.',
    '03 · Christian tu quoque — Infancy Gospel of Thomas (Ehrman, pp. 127–128): Dated as early as ~125 CE, this early Christian text portrays five-year-old Jesus cursing Annas’s son to wither like a tree (3:2–3) and striking another boy dead for bumping his shoulder (4:1)—an account far more “embarrassing” to later orthodoxy yet universally rejected as unhistorical legend.',
    '04 · Self-defeating even if granted (Mark 3.23–26): Even hypothetically granting the tale leaves Satan revealing the verses, returning as Gabriel, and revoking them to uphold monotheism—meaning Satan casts out Satan, which Jesus himself rejects in Mark 3:23–26.'
  ],
  ['Shahab Ahmed, Before Orthodoxy (p. 301)','Jonathan A. C. Brown, Muhammad: A Very Short Introduction (pp. 98–99)','Bart D. Ehrman, Early Christian Writings Reader (pp. 127–128)','Infancy Gospel of Thomas 3–4','Mark 3:23–26'],
  [],
  {
    facts:[
      ['Shahab Ahmed p. 301','Early narrators saw zero embarrassment'],
      ['Jonathan Brown p. 99','Unorthodox ≠ historically authentic'],
      ['Infancy Thomas 3–4','Early “embarrassing” legend Christians reject'],
      ['Mark 3:23–26','Even if true, Satan casts out Satan']
    ],
    quotes:[
      {by:'Jonathan A. C. Brown',en:'We know the story is not historically reliable - someone made it up.',ref:'Muhammad: A Very Short Introduction, p. 99'},
      {by:'Infancy Gospel of Thomas 4:1 (tr. Ehrman)',en:'Jesus was aggravated and said to him, “You will go no further on your way.” And right away the child fell down and died.',ref:'Reader, p. 128'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Flawed “Embarrassment” Assumption',
        items:[
          'Assumes 1st–2nd century Muslims viewed the story as shameful',
          'Ignores why exegetes used it to illustrate Q 22:52 protection',
          'Fails on al-Wāqidī’s talking al-ʿUzzā idol report',
          'Would authenticate the Infancy Gospel of Thomas if applied consistently'
        ]
      },
      right:{
        title:'Historical & Textual Reality',
        items:[
          'Shahab Ahmed: early narrators saw it as standard, not embarrassing',
          'Jonathan Brown: later orthodoxy cannot dictate early invention motives',
          'Classical ḥadīth scholars: every chain is mursal or defective',
          'Theologically, Q 22:52 guarantees Allah nullifies any satanic cast'
        ]
      }
    },
    shots:[
      S('ia-satanic-1.webp','IA #satanic-verses: cover of Shahab Ahmed’s Before Orthodoxy: The Satanic Verses in Early Islam.'),
      S('ia-satanic-2.webp','IA #satanic-verses: Shahab Ahmed (Before Orthodoxy, p. 301) explaining why early Muslims saw the story positively, breaking the criterion of embarrassment.'),
      S('ia-satanic-3.webp','IA #satanic-verses: title page of Bart D. Ehrman’s The New Testament and Other Early Christian Writings: A Reader (OUP, 2004).'),
      S('ia-satanic-4.webp','IA #satanic-verses: Ehrman’s Reader (p. 127) introducing the 2nd-century Infancy Gospel of Thomas (~125 CE).'),
      S('ia-satanic-5.webp','IA #satanic-verses: Infancy Gospel of Thomas 3–4 (Ehrman, p. 128), showing young Jesus cursing and killing children—an embarrassing early text Christians rightly reject.'),
      S('ia-satanic-6.webp','IA #satanic-verses: Jonathan A. C. Brown (Muhammad: A Very Short Introduction, pp. 98–99) dismantling the Historical Critical Method argument on the Satanic Verses.')
    ]
  }
),{
  optWho:'Or press historiography · if they say',
  optLabel:'Even with weak chains, the Satanic Verses story passes the criterion of embarrassment—no Muslim would invent it!',
  theyWho:'Or press historiography · if they say',
  who:'Cite Ahmed, Brown & Infancy Thomas'
}));

/* ============================================================================
   B.2 add('islam/quran/d-ia-flat-earth', ...) — ia_flat_earth (tree)
   ============================================================================ */
const FLT=IA('#flat-earth','1514403126176649458');
add('islam/quran/d-ia-flat-earth',P(N(
  FLT,
  'Early Muslims and classical scholars had no concept of a spherical earth or round celestial orbits—they imagined a flat disk under a solid dome.',
  'Primary Arabic lexicography, early Islamic artifacts, and classical consensus scans prove the exact opposite. Ibn ʿAbbās authentically explained falak (Q 21:33) as spinning like a round spindle whorl, classical dictionaries define the root F-L-K as three-dimensional sphericity, and Ibn al-Munādī (d. 336 AH), Ibn Ḥazm (d. 456 AH), and Ibn Taymiyya (d. 728 AH) all recorded Muslim scholarly agreement on a spherical earth.',
  'Primary scans: Ibn ʿAbbās’s spindle whorls & classical spherical-earth consensus',
  [
    '01 · Two ṣaḥīḥ chains from Ibn ʿAbbās on Q 21.33 (falak): Both via Shuʿba from Muslim al-Baṭīn from Saʿīd ibn Jubayr report that Ibn ʿAbbās compared the movement of heavenly bodies in their falak to “the whorl of a spinning spindle”—and surviving early Islamic spindle whorls (640–900 AH) are three-dimensionally round.',
    '02 · Classical Arabic root F-L-K means spherical: Major lexicons such as Lisān al-ʿArab and al-Qāmūs al-Muḥīṭ document the idiom “tafallaka thadyu al-jāriyah” (the maiden’s breast became round and prominent), confirming F-L-K denotes three-dimensional roundness rather than a flat disk.',
    '03 · Ibn al-Munādī (256–336 AH) & Ibn Ḥazm (384–456 AH): Ibn al-Munādī affirmed scholarly agreement that the Earth with its land and sea is like a sphere, and Ibn Ḥazm declared that not a single qualified Muslim imam ever rejected the Earth’s sphericity—noting the Qurʾān and Sunnah align with it.',
    '04 · Ibn Taymiyya (661–728 AH) summarizes the consensus: Rejecting popular myths like the sky resting on Mount Qāf, Ibn Taymiyya affirmed the spheres are round and cited Ibn al-Munādī, Ibn Ḥazm, and Ibn al-Jawzī on the consensus of Muslim scholars.'
  ],
  ['Qurʾān 21:33','Tafsīr al-Ṭabarī 21:33','Lisān al-ʿArab & al-Qāmūs al-Muḥīṭ (F-L-K)','Ibn al-Munādī','Ibn Ḥazm, al-Faṣl fī al-Milal','Ibn Taymiyya, Majmūʿ al-Fatāwā'],
  [],
  {
    facts:[
      ['Ibn ʿAbbās (Ṣaḥīḥ)','Falak = round spindle whorl (Q 21:33)'],
      ['Root F-L-K','3D sphericity in classical Arabic lexicons'],
      ['Ibn al-Munādī (d. 336)','Agreed the Earth is like a sphere'],
      ['Ibn Ḥazm & Taymiyya','Explicit Muslim scholarly consensus']
    ],
    quotes:[
      {by:'Abū al-Ḥusayn ibn al-Munādī (d. 336 AH)',en:'They also agreed that the Earth, with all its movements on land and sea, is like a sphere.',ref:'Cited via Ibn Taymiyya'},
      {by:'Ibn Ḥazm (d. 456 AH)',en:'The evidence from the Qurʾān and Sunnah came about its sphericity.',ref:'al-Faṣl fī al-Milal'}
    ],
    visual:{
      kind:'steps',
      items:[
        ['1. Ibn ʿAbbās (d. 68 AH)','Explained Q 21:33 (falak) via round spinning spindle whorls across two ṣaḥīḥ chains.'],
        ['2. Ibn al-Munādī (256–336 AH)','Recorded early scholarly agreement that the Earth on land and sea is spherical.'],
        ['3. Ibn Ḥazm (384–456 AH)','Refuted claims of clerical denial, affirming Qurʾān and Sunnah accord with a spherical Earth.'],
        ['4. Ibn Taymiyya (661–728 AH)','Rejected Mount Qāf sky-dome myths and cited consensus from Ibn al-Munādī, Ibn Ḥazm, and Ibn al-Jawzī.']
      ]
    },
    shots:[
      S('ia-flatearth-1.webp','IA #flat-earth: early Islamic-era carved spindle whorls (640–900 AH), illustrating Ibn ʿAbbās’s round-whorl explanation of falak in Q 21:33.'),
      S('ia-flatearth-2.webp','IA #flat-earth: scan of Ibn Ḥazm (al-Faṣl) stating no qualified Muslim imam denied the Earth’s sphericity and Scripture accords with it.'),
      S('ia-flatearth-3.webp','IA #flat-earth: companion scan of Ibn Ḥazm’s passage confirming Qurʾānic and Sunnah compatibility with a spherical Earth.'),
      S('ia-flatearth-4.webp','IA #flat-earth: scan quoting Ibn al-Munādī (256–336 AH) on scholarly agreement that the Earth is like a sphere.'),
      S('ia-flatearth-5.webp','IA #flat-earth: companion scan of Ibn al-Munādī’s spherical-earth consensus statement.'),
      S('ia-flatearth-6.webp','IA #flat-earth: scan of Ibn Taymiyya rejecting Mount Qāf dome myths and citing Ibn al-Munādī, Ibn Ḥazm, and Ibn al-Jawzī on round-sphere consensus.')
    ]
  }
),{
  optWho:'Or inspect primary scans · if they say',
  optLabel:'Classical Muslim scholars and early lexicons assumed a flat earth under a solid dome!',
  theyWho:'Or inspect primary scans · if they say',
  who:'Show spindle whorls & consensus scans'
}));

/* ============================================================================
   B.3 add('islam/hadith/d-ia-preservation-of-hadith/t-nasa-prove-the-reliability-of-the-hadith', ...) — explainer
   ============================================================================ */
const NASA=IA('#preservation-of-hadith › NASA prove the reliability of the hadith','1565830447240581210');
add('islam/hadith/d-ia-preservation-of-hadith/t-nasa-prove-the-reliability-of-the-hadith',N(
  NASA,
  null,
  'Primary Arabic scans confirm both the exact Hijrī weekday of ʿUmar’s assassination (Wednesday, 4 nights left of Dhū al-Ḥijja 23 AH) and an eyewitness solar eclipse on that day—matching NASA’s historical solar-eclipse and lunar-phase records.',
  'Primary Arabic scans: Abū Nuʿaym 1/39 & al-Haythamī’s eclipse narration (#14475)',
  [
    '01 · Abū Nuʿaym’s exact calendar datum (Maʿrifat al-Ṣaḥāba 1.39): The Arabic text specifies “ʿUmar was killed on Wednesday, with four nights remaining of Dhū al-Ḥijja, in the year 23 AH”—preserving both day-of-week and exact lunar position.',
    '02 · Eyewitness solar eclipse on the day of ʿUmar’s death (Majmaʿ al-Zawāʾid #14475): ʿAbd al-Raḥmān ibn Yasār reported witnessing ʿUmar ibn al-Khaṭṭāb’s death and seeing the sun eclipsed that day—recorded by al-Ṭabarānī.',
    '03 · Verified by classical ḥadīth critics & NASA astronomy: Nūr al-Dīn al-Haythamī graded al-Ṭabarānī’s narrators trustworthy (rijāluhu thiqāt), al-Suyūṭī likewise authenticated it, and NASA astronomical tables independently confirm both the Wednesday date and the solar eclipse.'
  ],
  ['Abū Nuʿaym al-Iṣfahānī, Kitāb Maʿrifat al-Ṣaḥāba 1/39','al-Ṭabarānī via al-Haythamī, Majmaʿ al-Zawāʾid #14475','al-Suyūṭī'],
  [],
  {
    facts:[
      ['Maʿrifat al-Ṣaḥāba','Wednesday, 4 nights left of Dhū al-Ḥijja 23 AH'],
      ['Majmaʿ al-Zawāʾid #14475','Solar eclipse witnessed on ʿUmar’s death day'],
      ['Ḥadīth Grading','Trustworthy narrators (al-Haythamī & al-Suyūṭī)'],
      ['NASA Match','Confirms both lunar weekday & eclipse']
    ],
    quotes:[
      {by:'ʿAbd al-Raḥmān ibn Yasār (Majmaʿ al-Zawāʾid #14475)',en:'I witnessed the death of ʿUmar ibn al-Khaṭṭāb, and the sun was eclipsed on that day.',ref:'Reported by al-Ṭabarānī; narrators trustworthy'}
    ],
    shots:[
      S('ia-nasa-hadith-1.webp','IA #preservation-of-hadith: Arabic scan of Abū Nuʿaym (Maʿrifat al-Ṣaḥāba 1/39) dating ʿUmar’s assassination to Wednesday, four nights left in Dhū al-Ḥijja 23 AH.'),
      S('ia-nasa-hadith-2.webp','IA #preservation-of-hadith: companion Arabic scan crop of Abū Nuʿaym’s Wednesday-23 AH dating report.'),
      S('ia-nasa-hadith-3.webp','IA #preservation-of-hadith: Arabic scan of al-Haythamī’s Majmaʿ al-Zawāʾid #14475 recording ʿAbd al-Raḥmān ibn Yasār’s eclipse testimony (“rawāhu al-Ṭabarānī, wa-rijāluhu thiqāt”).')
    ]
  }
));

/* ============================================================================
   B.4 add('islam/hadith/d-ia-quranist-and-anti-hadith-claims/t-ah-a-di-th-came-200-years-after-the-prophet', ...) — tree
   ============================================================================ */
const H200=IA('#preservation-of-hadith › Were Hadith Written 200 Years After the Prophet ﷺ?','1523442198996324462');
add('islam/hadith/d-ia-quranist-and-anti-hadith-claims/t-ah-a-di-th-came-200-years-after-the-prophet',P(N(
  H200,
  'The Prophet never told anyone to write ḥadīth during his lifetime—everything remained strictly oral until rulers or scholars invented books 200 years later.',
  'The Prophet ﷺ explicitly commanded writing ḥadīth during his lifetime (Sunan Abī Dāwūd 2017 & 3646), multiple Companions kept written collections while he was alive, M. M. al-Aʿẓamī documented 52 Companion writers and 252 Tābiʿūn writers, and ʿUmar’s temporary hesitation over formal state codification (tadwīn) only prevented new converts from mixing ḥadīth pages with the Qurʾān.',
  'Prophetic commands to write, Aʿẓamī’s statistics & kitāba vs. tadwīn',
  [
    '01 · Explicit prophetic commands to write (Abū Dāwūd 2017 & 3646): After the Conquest of Mecca sermon, the Prophet ﷺ ordered, “Write it down for Abū Shāh” (2017); and when Quraysh questioned ʿAbdullāh ibn ʿAmr writing everything down, the Prophet ﷺ pointed to his mouth and told him to write because only truth comes from it (3646).',
    '02 · Prophetic-era manuscripts & Ibn ʿUmar’s box: Early sources document Kitāb al-Ṣadaqāt wa-l-Diyāt sent with ʿAmr ibn Ḥazm to Yemen, ʿAbdullāh ibn ʿAmr’s thousand-ḥadīth al-Ṣaḥīfa al-Ṣādiqah, books of Anas ibn Mālik and Saʿd ibn ʿUbādah, and ʿAbdullāh ibn ʿUmar pulling a written ḥadīth book from his box (graded by al-Albānī).',
    '03 · Quantified Companion-to-Tābiʿī transmission (M. M. al-Aʿẓamī): Research in Dirāsāt fī al-Ḥadīth al-Nabawī and Hady al-Qāṣid records 52 Companions who wrote ḥadīth in the Prophet’s lifetime, 1,018 Companions transmitting orally, 252 Tābiʿūn writers, 800 students narrating from Abū Hurayra, and Hammām ibn Munabbih’s extant Ṣaḥīfa (preserved in Damascus and Berlin manuscripts and inside Musnad Aḥmad).',
    '04 · Continuous writing (kitāba) vs. single-volume codification (tadwīn): First-century Tābiʿūn like Saʿīd ibn Jubayr, Mujāhid, ʿUrwa ibn al-Zubayr, Khālid ibn Maʿdān, Abū Qilāba, and al-Ḥasan al-Baṣrī all compiled books, culminating in Mālik’s Muwaṭṭaʾ; ʿUmar ibn al-Khaṭṭāb only paused an official single compendium so recent converts would anchor the Qurʾān first.'
  ],
  ['Sunan Abī Dāwūd 2017, 3646','al-Ṣaḥīfa al-Ṣādiqah & Ṣaḥīfat Hammām ibn Munabbih','M. M. al-Aʿẓamī, Dirāsāt fī al-Ḥadīth al-Nabawī','Muwaṭṭaʾ Imām Mālik'],
  [],
  {
    facts:[
      ['Abū Dāwūd 2017 / 3646','Prophet ﷺ ordered ḥadīth written'],
      ['52 Companions','Wrote ḥadīth in the Prophet’s lifetime'],
      ['252 Tābiʿūn','Documented Sunnah writers (al-Aʿẓamī)'],
      ['Kitāba ≠ Tadwīn','Writing never stopped; tadwīn = formal anthology']
    ],
    quotes:[
      {by:'Sunan Abī Dāwūd 3646',en:'Write, by Him in Whose hand my soul lies, only right comes out from it.',ref:'Abū Dāwūd 3646'}
    ],
    visual:{
      kind:'steps',
      items:[
        ['Prophetic Lifetime (1–11 AH)','52 Companions write ḥadīth (Abū Dāwūd 2017, 3646; ʿAmr ibn Ḥazm; al-Ṣaḥīfa al-Ṣādiqah).'],
        ['Early Followers (1st Century AH)','252 Tābiʿūn writers; Hammām ibn Munabbih’s Ṣaḥīfa survives in Damascus & Berlin MSS.'],
        ['Formal Tadwīn (~80–150 AH)','State-sponsored compilation and structured works like Mālik’s Muwaṭṭaʾ organize existing books.'],
        ['Canonical Six Books (3rd Century AH)','al-Bukhārī & Muslim critically sift pre-existing written and oral chains—never inventing from scratch.']
      ]
    },
    shots:[
      S('ia-hadith-200y-1.webp','IA #preservation-of-hadith: handbook p. 193 detailing Sunan Abī Dāwūd 2017 (Abū Shāh), 3646 (“Write…”), and Ibn ʿUmar’s written book.'),
      S('ia-hadith-200y-2.webp','IA #preservation-of-hadith: full scan of p. 193 showing prophetic-era commands to write and Abū Hurayra’s memorization discipline.'),
      S('ia-hadith-200y-3.webp','IA #preservation-of-hadith: handbook p. 194 listing prophetic-era books (al-Ṣaḥīfa al-Ṣādiqah, Anas, Saʿd ibn ʿUbādah), al-Aʿẓamī’s 52/252 stats, and Hammām’s Damascus/Berlin MSS.'),
      S('ia-hadith-200y-4.webp','IA #preservation-of-hadith: full scan of p. 194 documenting Companion-to-Tābiʿī written and oral transmission.'),
      S('ia-hadith-200y-5.webp','IA #preservation-of-hadith: handbook p. 195 listing 1st-century Tābiʿī books and explaining writing (kitāba) vs. formal codification (tadwīn) under ʿUmar.')
    ]
  }
),{
  optWho:'Or examine prophetic writing · if they say',
  optLabel:'The Prophet never ordered ḥadīth written down—books only began 200 years after his death!',
  theyWho:'Or examine prophetic writing · if they say',
  who:'Show Abū Dāwūd 2017, 3646 & Aʿẓamī stats'
}));

/* ============================================================================
   B.5 add('christianity/bible/d-ia-general-refutations/t-a-comprehensive-proving-hadith-are-reliable', ...) — explainer
   ============================================================================ */
const HREL=IA('#preservation-of-hadith › Proving the Hadith are reliable','1565380423414972517');
add('christianity/bible/d-ia-general-refutations/t-a-comprehensive-proving-hadith-are-reliable',N(
  HREL,
  null,
  'Alongside 4:80 and 59:7, Qurʾān 4:59 commands believers to “obey Allah and obey the Messenger” and refer every dispute back to Allah and His Messenger—making verifiable preservation of the Sunnah a non-negotiable Qurʾānic imperative.',
  'Qurʾān 4.59 mandate & the “Preservation Of Hadith” criteria',
  [
    '01 · Qurʾān 4.59 binds believers to the Messenger: Sūrat al-Nisāʾ 4:59 explicitly pairs obedience to Allah with obedience to the Messenger and commands referring all disagreements back to both—impossible if prophetic rulings were lost.',
    '02 · Applying Ehrman’s oral-tradition test symmetrically: While Bart Ehrman critiques Gospel reliability because no evidence shows Jesus’s disciples memorized his teachings verbatim through audited chains, Islamic tradition supplies explicit memorization, contemporary writing, and biographical isnād criticism.',
    '03 · Channel visual dossier: Attaches the three graphics from #preservation-of-hadith › Proving the Hadith are reliable framing the Qurʾānic command and oral-transmission benchmark.'
  ],
  ['Qurʾān 4:59; 4:80; 59:7','Bart Ehrman on Gospel oral transmission'],
  [],
  {
    facts:[
      ['Qurʾān 4:59','Refer disputes to Allah & His Messenger'],
      ['Qurʾān 59:7','Take whatever the Messenger gives you'],
      ['Oral Criterion','Memorization + audited chains vs. anonymous folklore']
    ],
    quotes:[
      {by:'Qurʾān 4:59',en:'O believers! Obey Allah and obey the Messenger and those in authority among you.',ref:'Sūrat al-Nisāʾ 4:59'}
    ],
    shots:[
      S('ia-hadith-rel-1.webp','IA #preservation-of-hadith: “Preservation Of Hadith” banner graphic from Proving the Hadith are reliable.'),
      S('ia-hadith-rel-2.webp','IA #preservation-of-hadith: companion “Preservation Of Hadith” title graphic introducing the oral-transmission proof.'),
      S('ia-hadith-rel-3.webp','IA #preservation-of-hadith: Qurʾān 4:59 Arabic and English text highlighting “Obey Allah and obey the Messenger” and “refer it to Allah and His Messenger.”')
    ]
  }
));

/* ============================================================================
   B.6 add('christianity/bible/d-ia-biblical-corruption/t-earliest-christians-believed-in-a-corrupted-torah', ...) — explainer
   ============================================================================ */
const OTC=IA('#biblical-corruption › Old Testament Corruption','1565558521771327548');
add('christianity/bible/d-ia-biblical-corruption/t-earliest-christians-believed-in-a-corrupted-torah',N(
  OTC,
  null,
  'The #biblical-corruption thread “Old Testament Corruption” pairs early Jewish-Christian testimony (Pseudo-Clementine Homilies 2.38 & 3.47) with SeerahDawah’s visual archive, confirming that belief in post-Mosaic alterations to the Torah predated Islam by centuries.',
  'SeerahDawah dossier on Old Testament textual corruption',
  [
    '01 · Pre-Islamic Christian attestation: Long before the Qurʾān, the Pseudo-Clementine Homilies argued that the Mosaic Law was written down after Moses and infiltrated by “false pericopes” contradicting God’s moral perfection.',
    '02 · Thread archive & creator graphics: Preserves the two SeerahDawah banner graphics from the #biblical-corruption › Old Testament Corruption post (1565558521771327548).'
  ],
  ['Pseudo-Clementine Homilies 2.38; 3.47','IA #biblical-corruption › Old Testament Corruption (SeerahDawah)'],
  [],
  {
    facts:[
      ['Thread','Old Testament Corruption (SeerahDawah)'],
      ['Witness','Pseudo-Clementine Homilies 2.38 & 3.47'],
      ['Key Point','Taḥrīf critique predates Islam by centuries']
    ],
    shots:[
      S('ia-ot-corrupt-1.webp','IA #biblical-corruption: SeerahDawah graphic from Old Testament Corruption (1565558521771327548).'),
      S('ia-ot-corrupt-2.webp','IA #biblical-corruption: companion SeerahDawah banner from Old Testament Corruption.')
    ]
  }
));

/* ============================================================================
   B.7 add('islam/morality/war/d-ia-islam-and-jihad-refuting-misconceptions', ...) — explainer
   ============================================================================ */
const JHD=IA('#refutation-library › Islam and jihad refuting misconceptions','1565371652605345963');
add('islam/morality/war',N(
  JHD,
  null,
  'Classical Islamic jurisprudence and Qurʾānic exegesis explicitly forbid targeting non-combatants: Ibn Qudāmah (al-Mughnī 13/180) bars killing women, children, the elderly, the permanently ill, monks, and peaceful farmers, while al-Ṭabarī (3/291) affirms Q 2:190 remains un-abrogated and prohibits attacking anyone who does not fight.',
  'Classical fiqh & tafsīr scans: al-Mughnī 13.180 & Tafsīr al-Ṭabarī 2.190',
  [
    '01 · Ibn Qudāmah on the sick & farmers (al-Mughnī 13.180): Ibn Qudāmah rules that chronically or terminally ill persons incapable of fighting must not be killed, and endorses ʿUmar ibn al-Khaṭṭāb’s command (“Fear Allah regarding the farmers who do not wage war against you”) along with al-Awzāʿī and Companion practice—classifying peaceful farmers with the elderly and monks.',
    '02 · ʿUmar ibn ʿAbd al-ʿAzīz on Qurʾān 2.190 (Tafsīr al-Ṭabarī 3.291): Writing to ʿAdī ibn Arṭaʾa, Caliph ʿUmar ibn ʿAbd al-ʿAzīz cited “Fight in the way of Allah those who fight you, and do not transgress” (2:190), explaining it forbids fighting non-combatants such as women, children, and monks.',
    '03 · Al-Ṭabarī rejects baseless abrogation (naskh) claims: Al-Ṭabarī judges ʿUmar ibn ʿAbd al-ʿAzīz’s position superior, stressing that claiming a verse is abrogated when it can remain operative—without decisive proof—is an arbitrary assertion (taḥakkum) anyone could make.',
    '04 · Defensive and treaty-oriented aim: Classical scholars confirm fighting is directed against active aggressors, not mere disbelief, with peace treaties as the intended goal rather than forced conversion.'
  ],
  ['Ibn Qudāmah, al-Mughnī 13/180 (Dār ʿĀlam al-Kutub)','Tafsīr al-Ṭabarī 3/291 on Q 2:190 (Dār Hajar)','al-Bayhaqī, al-Sunan al-Kubrā 9/91'],
  [],
  {
    facts:[
      ['al-Mughnī 13/180','Spares women, children, monks, sick & farmers'],
      ['ʿUmar I’s Order','Fear Allah regarding non-combatant farmers'],
      ['Tafsīr al-Ṭabarī 2:190','Do not fight those who do not fight you'],
      ['Naskh Verdict','Claiming 2:190 abrogated without proof = baseless']
    ],
    quotes:[
      {by:'ʿUmar ibn ʿAbd al-ʿAzīz (Tafsīr al-Ṭabarī 2:190)',en:'That is, do not fight those who do not fight you.',ref:'Tafsīr al-Ṭabarī 3/291'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Caricature: “Total war on all disbelievers”',
        items:[
          'Claims Q 2:190’s non-aggression limit was abrogated',
          'Pretends jurists allowed killing all male civilians',
          'Conflates active combatants with peaceful populations'
        ]
      },
      right:{
        title:'Classical Fiqh & Tafsīr Scans',
        items:[
          'al-Mughnī 13/180: spares women, children, elderly, monks, chronically ill & farmers',
          'ʿUmar I & Companions: spared peasant farmers during conquests',
          'al-Ṭabarī 2:190: rejects abrogation claim as arbitrary (taḥakkum)',
          'Fighting targets active hostility; goal is peace & treaties'
        ]
      }
    },
    shots:[
      S('ia-jihad-resp-1.webp','IA #refutation-library: Arabic scan of Ibn Qudāmah’s al-Mughnī (vol. 13, p. 180) sparing non-combatant sick persons and peaceful farmers.'),
      S('ia-jihad-resp-2.webp','IA #refutation-library: high-resolution scan of al-Mughnī 13/180 citing ʿUmar ibn al-Khaṭṭāb, al-Awzāʿī, al-Bayhaqī, and Saʿīd ibn Manṣūr.'),
      S('ia-jihad-resp-3.webp','IA #refutation-library: Arabic scan of Tafsīr al-Ṭabarī (vol. 3, p. 291) on Q 2:190 quoting ʿUmar ibn ʿAbd al-ʿAzīz and refuting baseless naskh claims.'),
      S('ia-jihad-resp-4.webp','IA #refutation-library: English translation graphic of Tafsīr al-Ṭabarī 2:190 affirming non-combatants (women, children, monks) may never be fought.')
    ]
  }
));

})();
