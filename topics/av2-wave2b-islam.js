/* Averroes 2 Wave 2B (Islam, Qurʾān, Sīrah & Warfare) — 2026-11-22.
   Translates and synthesizes 7 German Averroes 2 channels into 5 new Tactical Debate Playbook
   cards and 2 add() enrichments. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('av2-wave2b-islam: no card',key); };

const AV2=(sub,id)=>({credit:'Averroes 2 · '+sub,link:'https://discord.com/channels/1295033866385358860/'+id});

/* ============================================================================
   1. NEW Tactical Playbook card: islam/quran/d-ia-quranic-language/foreign-words-clear-arabic
      From pures_arabisch (1406929401668440094)
   ============================================================================ */
const PA=AV2('#pures-arabisch-quran-arabisch','1406929401668440094');

const paTrapA=P(N(
  PA,
  'Arthur Jeffery identified around 275 words of non-Arabic origin in the Qurʾān, which disproves Q 16:103!',
  'Naturalized loanwords that entered Arabic from cognate Semitic or neighboring languages long before Islam are standard Arabic—just as Latin, French, or Greek loanwords like “school,” “window,” or “camera” do not make an English or German sentence any less clear or native.',
  'Naturalized loanwords in pre-Islamic Arabic (Arthur Jeffery & M. Mohar Ali)',
  [
    '01 · Pre-Islamic naturalization (Arthur Jeffery): The roughly 275 words of foreign etymology cataloged by Arthur Jeffery were borrowed from related Semitic tongues (Aramaic, Hebrew, Syriac) or neighboring cultures and fully integrated into standard Arabic grammar and vocabulary before the Qurʾān was revealed.',
    '02 · Expressive precision (M. Mohar Ali): As M. Mohar Ali notes, the Qurʾānic diction is supremely expressive; using established Arabic words that once had foreign roots does not diminish its status as ʿarabiyyun mubīn (“clear Arabic speech”).',
    '03 · Everyday linguistic analogy: Using words like “Fenster” (Latin fenestra), “Schule” (Latin schola), “Kamera” (Latin camera), “Büro” (French bureau), or “Computer” and “Restaurant” does not make a German or English text foreign or unclear.'
  ],
  ['Qurʾān 16:103','Arthur Jeffery, The Foreign Vocabulary of the Qurʾān','M. Mohar Ali, The Qurʾān and the Orientalists'],
  [],
  {
    facts:[
      ['Arthur Jeffery','~275 words naturalized before the Qurʾān'],
      ['Cognate Roots','Aramaic, Hebrew & Syriac Semitic neighbors'],
      ['M. Mohar Ali','Assimilated terms are standard clear Arabic'],
      ['Analogy','Like “school” or “window” in English/German']
    ],
    quotes:[
      {by:'Muhammad Asad (on Q 16:103)',en:'Arabic speech, clear [in itself] and clearly showing the truth [of its source].',ref:'The Message of the Qurʾān 16:103'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Arthur Jeffery found 275 foreign loanwords in the Qurʾān, disproving its Arabic claim!',
  theyWho:'Watch out · if they say',
  who:'Show how naturalized loanwords work in every language'
});

card('islam/quran/d-ia-quranic-language/foreign-words-clear-arabic',{
  title:'Foreign loanwords vs. “clear Arabic” (ʿarabiyyun mubīn, Q 16:103)',
  k:'Qurʾān 16:103 · Lexicology · Tafsīr',
  blurb:'Mubīn means “clear/manifest” (cf. Q 31:11), not “etymologically free of loanwords”; Ibn Kathīr, Asad, Mohar Ali & Arthur Jeffery.',
  claim:'The Qurʾān claims to be “pure Arabic” (16:103), yet it contains hundreds of foreign, non-Arabic words.',
  tree:P(N(
    PA,
    'Qurʾān 16:103 claims the book is “pure Arabic,” which is falsified by the many foreign words inside it.',
    'That objection rests on mistranslating ʿarabiyyun mubīn as “etymologically pure Arabic.” In Arabic, mubīn means “clear, lucid, and manifest” (as in Q 31:11, ḍalālin mubīn, “manifest error”)—contrasting the Qurʾān’s eloquent Arabic clarity against the broken tongue of the non-Arab whom Meccan critics accused of teaching the Prophet ﷺ.',
    'What ʿarabiyyun mubīn actually means (Ibn Kathīr, Q 31.11 & Asad)',
    [
      '01 · Context of Q 16.103 (Ibn Kathīr): Meccan pagans alleged that a foreigner (aʿjamī) was secretly teaching Muḥammad ﷺ. Verse 16.103 replies that the man they point to speaks a foreign/broken tongue, whereas the Qurʾān is ʿarabiyyun mubīn—clear, eloquent Arabic speech.',
      '02 · Semantic proof from Q 31.11 & Muhammad Asad: Throughout the Qurʾān, mubīn means “clear” or “manifest,” never “free of historical loanwords”—for example, Q 31.11 calls polytheism ḍalālin mubīn (“manifest error”). Muhammad Asad renders Q 16.103 as “Arabic speech, clear [in itself] and clearly showing the truth.”',
      '03 · Assimilated vocabulary (Jeffery & Mohar Ali): Words from cognate Semitic languages (Aramaic, Hebrew, Syriac) had already been arabized before Islam; their presence no more compromises clear Arabic than Latin-derived words like “school” or “camera” compromise clear English or German.'
    ],
    ['Qurʾān 16:103; 31:11','Tafsīr Ibn Kathīr on Q 16:103','Muhammad Asad, The Message of the Qurʾān (16:103)','M. Mohar Ali; Arthur Jeffery (~275 pre-Islamic loanwords)'],
    [paTrapA],
    {
      facts:[
        ['Arabic Term','ʿArabiyyun mubīn = “clear Arabic speech”'],
        ['Lexical Proof','Q 31:11 ḍalālin mubīn = “manifest error”'],
        ['Ibn Kathīr','Contrasts eloquent clarity with a foreign tongue'],
        ['Loanwords','Naturalized in Arabic long before Islam']
      ],
      quotes:[
        {by:'Qurʾān 16:103',en:'The tongue of the one they refer to is foreign, whereas this is clear Arabic speech (lisānun ʿarabiyyun mubīn).',ref:'Qurʾān 16:103'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Mistranslation',
          items:[
            'Renders mubīn as “etymologically pure / zero loanwords”',
            'Treats naturalized Semitic cognates as foreign corruption',
            'Ignores the Meccan accusation about a non-Arab teacher'
          ]
        },
        right:{
          title:'Lexical & Exegetical Reality',
          items:[
            'Mubīn = “clear, manifest” (cf. Q 31:11 ḍalālin mubīn)',
            'Ibn Kathīr & Asad: clear, eloquent Arabic expression',
            'Arabized pre-Islamic words function like “school” or “window”'
          ]
        }
      }
    }
  ),{
    who:'Clarify mubīn (Q 16:103 vs. 31:11) & cite Ibn Kathīr',
    forkTitle:'Follow-up objection on Arthur Jeffery’s list',
    forkSub:'Address the ~275 loanwords argument'
  }),
  sum:'In Q 16:103, ʿarabiyyun mubīn means “clear, eloquent Arabic speech” (Ibn Kathīr, Asad; cf. Q 31:11), not “etymologically devoid of naturalized pre-Islamic loanwords.”'
});

/* ============================================================================
   2. NEW Tactical Playbook card: islam/quran/d-ia-quran-surahs/sabbath-breakers-apes-2-65
      From affe_verwandlung (1408446952860811344)
   ============================================================================ */
const AVW=AV2('#affe-verwandlung-juden','1408446952860811344');

const avwTrapA=P(N(
  AVW,
  'Punishing Sabbath-breaking by turning people into apes is harsh and bizarre compared to the Bible!',
  'In the Torah, the penalty for deliberately breaking the Sabbath was immediate execution by stoning (Exodus 31:14–15; 35:2; Numbers 15:32–36)—and the Hebrew Bible itself depicts King Nebuchadnezzar physically transformed into a beast-like state eating grass with eagle-like hair and bird-like claws (Daniel 4:24–25, 31).',
  'Biblical Sabbath stoning (Num 15.32–36) & Nebuchadnezzar’s beast transformation (Dan 4.31)',
  [
    '01 · Torah death penalty for Sabbath violation (Exod 31.14–15; 35.2; Num 15.32–36): Exodus 31.14–15 and 35.2 decree that anyone who profanes or works on the Sabbath must be put to death. In Numbers 15.32–36, a man found gathering wood on the Sabbath is stoned to death by the entire congregation at God’s command.',
    '02 · Biblical beast-transformation parallel (Daniel 4.24–25, 31): When King Nebuchadnezzar rebelled in pride, God drove him from human society to live like an animal in the field and eat grass like cattle, until his body was drenched with dew, his hair grew like eagles’ feathers, and his nails became like birds’ claws.',
    '03 · Consistency across scriptures: A Christian or Jewish critic cannot mock divine punitive transformation or Sabbath judgment in Q 2.65 and 7.163–166 while affirming Numbers 15 and Daniel 4.'
  ],
  ['Exodus 31:14–15; 35:2','Numbers 15:32–36','Daniel 4:24–25, 31 (4:27–28, 33)'],
  [],
  {
    facts:[
      ['Exod 31:14–15; 35:2','Death penalty for working on the Sabbath'],
      ['Numbers 15:32–36','Man stoned to death for gathering wood'],
      ['Daniel 4:24–25, 31','Nebuchadnezzar eats grass with bird-like claws'],
      ['Double Standard','Bible has both Sabbath death & animal metamorphosis']
    ],
    quotes:[
      {by:'Numbers 15:35',en:'The man shall be put to death; all the congregation shall stone him with stones outside the camp.',ref:'Numbers 15:35'},
      {by:'Daniel 4:31 (4:33)',en:'He ate grass like cattle… until his hair grew as long as eagles’ feathers and his nails became like birds’ claws.',ref:'Daniel 4:31'}
    ]
  }
),{
  optWho:'Turn the tables · if they say',
  optLabel:'Turning Sabbath-breakers into apes is harsh and absurd compared to the Bible!',
  theyWho:'Turn the tables · if they say',
  who:'Cite Numbers 15:32–36 & Daniel 4:31'
});

card('islam/quran/d-ia-quran-surahs/sabbath-breakers-apes-2-65',{
  title:'Sabbath-breakers & “Be despised apes!” (Q 2:65; 7:163–166)',
  k:'Qurʾān 2:65 · 7:163–166 · Tafsīr & Bible',
  blurb:'Targeted only brazen Sabbath-violators while saving the admonishers; al-Ālūsī/Ṭanṭāwī on creative decree & symbolism, plus Numbers 15 & Daniel 4.',
  claim:'The Qurʾān attacks Jews by claiming God turned them into apes (Q 2:65; 7:163–166).',
  tree:P(N(
    AVW,
    'Qurʾān 2:65 and 7:163–166 dehumanize Jews by saying Allah turned them into despised apes.',
    'The passage is neither a racial slur nor a generalization about Jews: in Q 7:163–166, the community is divided into three groups, and Allah explicitly saves the righteous Jewish admonishers while punishing only the defiant coastal town-dwellers who brazenly violated their own Sabbath covenant—a judgment explained by al-Ālūsī and Ṭanṭāwī as an illustrative creative decree (or moral/symbolic transformation) and paralleled by Torah Sabbath-stoning (Num 15:35) and Nebuchadnezzar’s beast state (Dan 4:31).',
    'Three groups in Q 7.163–166, al-Ālūsī’s tafsīr & weak reports',
    [
      '01 · Righteous Jews saved, only defiant violators judged (Q 7.163–166): In the coastal town, one group of Jews openly defied the Sabbath ban to catch fish, a second group admonished them, and a third stayed silent. Allah explicitly rescued those who forbade evil and punished only the willful transgressors.',
      '02 · Creative command & symbolic/illustrative dimension (al-Ālūsī in Tafsīr Ṭanṭāwī): Al-Ālūsī explains that “Be despised apes!” is an existential creative command (amr takwīnī, like “Be! and it is”), not a legal command, adding that its purpose is illustration (tamthīl) and may also be understood symbolically—while peripheral tales about apes smelling clothes are weak (ḍaʿīf) due to an unnamed narrator (“from a man”) in the chain.',
      '03 · Biblical parallels (Exod 31.14–15; Num 15.32–36; Dan 4.24–31): In the Torah, deliberate Sabbath-breaking carried capital punishment by stoning (Numbers 15.32–36), and Daniel 4.31 depicts Nebuchadnezzar physically reduced to a grass-eating beast with eagle-like hair and bird claws.'
    ],
    ['Qurʾān 2:65; 7:163–166','Al-Ālūsī & Tafsīr Ṭanṭāwī on Q 2:65','Exodus 31:14–15; 35:2; Numbers 15:32–36','Daniel 4:24–25, 31'],
    [avwTrapA],
    {
      facts:[
        ['Scope in Q 7:165','Righteous Jewish admonishers were saved'],
        ['Al-Ālūsī / Ṭanṭāwī','Creative decree (takwīnī) & illustrative/symbolic'],
        ['Ḥadīth Note','Tale of apes smelling clothes is weak (majhūl)'],
        ['Biblical Parallel','Sabbath stoning (Num 15) & Dan 4 beast state']
      ],
      quotes:[
        {by:'Al-Ālūsī (cited in Tafsīr Ṭanṭāwī)',en:'The command in “We said” is a creative command, not a command of obligation… and the purpose is illustration.',ref:'Tafsīr al-Ālūsī / Tafsīr Ṭanṭāwī on Q 2:65'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Distortion',
          items:[
            'Claims the verse targets all Jews collectively',
            'Relies on weak (ḍaʿīf) folklore with anonymous narrators',
            'Forgets Torah Sabbath penalties & Daniel 4'
          ]
        },
        right:{
          title:'Qurʾānic Text & Tafsīr',
          items:[
            'Q 7:165: Allah rescued the righteous Jews who forbade evil',
            'Al-Ālūsī / Ṭanṭāwī: creative command & illustrative/symbolic force',
            'Num 15:35 stones Sabbath-breakers; Dan 4:31 turns a king beast-like'
          ]
        }
      }
    }
  ),{
    who:'Show the three groups in Q 7:163–166 & cite al-Ālūsī',
    forkTitle:'If they attack the punishment as harsh or bizarre',
    forkSub:'Turn the tables with Numbers 15:32–36 and Daniel 4:31'
  }),
  sum:'Qurʾān 2:65 and 7:163–166 judge only a specific town’s defiant Sabbath-breakers while praising and saving the righteous Jews who admonished them—paralleling the Torah’s capital Sabbath laws (Num 15:35) and Nebuchadnezzar’s beast transformation (Dan 4:31).'
});

/* ============================================================================
   3. NEW Tactical Playbook card: islam/morality/women/four-year-pregnancy-fiqh
      From vier_jahre_schwanger (1339429382707478688)
   ============================================================================ */
const VJS=AV2('#4-jahre-schwanger','1339429382707478688');

const vjsTrapA=P(N(
  VJS,
  'Why then was the Prophet ﷺ sometimes called “Son of ʿAbd al-Muṭṭalib,” and don’t sīrah books mention a four-year pregnancy?',
  'Calling someone the “son” of a grandfather or prominent ancestor is standard Semitic and Arabic idiom—identical to the New Testament calling Jesus “Son of David” or the Qurʾān calling Jacob the “father” of Joseph’s descendants—while isolated four-year pregnancy tales are unauthentic folklore rejected by medical reality and authentic ḥadīth.',
  'Semitic ancestral naming (“Son of ʿAbd al-Muṭṭalib” vs. “Son of David”) & weak reports',
  [
    '01 · Semitic & Arabic patronymic idiom: In classical Arabic, a grandson is routinely called the “son” of his grandfather when the grandfather raised him or was the clan’s famous patriarch. The Bible uses the exact same convention when calling Jesus “Son of David” (Matthew 1.1), and the Qurʾān uses “fathers” (ābāʾ) for grandfathers like Abraham, Isaac, and Jacob (Q 12.38).',
    '02 · Explicit prophetic testimony (Ṣaḥīḥ al-Bukhārī): The Prophet ﷺ affirmed his pure lineage from legitimate marriage, never illicit union—refuting Zakaria Boutros’s slanderous insinuation.',
    '03 · Weak folklore vs. biology: Scattered late compilations (like al-Sīra al-Ḥalabiyya) recorded every circulating tale regardless of grading; stories of a four-year gestation rest on weak, unverified chains and biological impossibility.'
  ],
  ['Ṣaḥīḥ al-Bukhārī (legitimate lineage)','Qurʾān 12:38 (ancestors called “fathers”)','Matthew 1:1 (“Jesus, Son of David”)'],
  [],
  {
    facts:[
      ['Arabic Idiom','Grandson called “son” of his grandfather'],
      ['Biblical Parallel','“Jesus, Son of David” (Matt 1:1)'],
      ['Qurʾānic Parallel','Q 12:38 calls grandfathers “fathers”'],
      ['4-Year Tales','Weak (ḍaʿīf) reports in late compilations']
    ],
    quotes:[
      {by:'Prophet Muḥammad ﷺ',en:'I was born from a legitimate marriage, not from an illicit relationship.',ref:'Attributed in Sīrah / Ḥadīth collections'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Why was he called “Son of ʿAbd al-Muṭṭalib,” and what about the four-year pregnancy reports?',
  theyWho:'Watch out · if they say',
  who:'Explain Semitic ancestral titles & weak sīrah folklore'
});

card('islam/morality/women/four-year-pregnancy-fiqh',{
  title:'Zakaria Boutros’s “Four-Year Pregnancy” & Ḥamza chronology fallacy',
  k:'Sīrah · Chronology · Lineage',
  blurb:'Ḥamza was born before ʿAbdullāh’s ransom vow and marriage to Āmina (Ibn Isḥāq, Ibn Kathīr, Ibn Saʿd), refuting Boutros’s timeline fabrication.',
  claim:'Zakaria Boutros claims Āmina was pregnant with Muḥammad ﷺ for four years after ʿAbdullāh died, because ʿAbdullāh married on the same day as ʿAbd al-Muṭṭalib yet Ḥamza was 2–4 years older than Muḥammad.',
  tree:P(N(
    VJS,
    'In Episode 3 of “In Essence,” Zakaria Boutros cites al-Sīra al-Ḥalabiyya and Ibn ʿAbd al-Barr’s al-Istīʿāb to argue that ʿAbdullāh and ʿAbd al-Muṭṭalib married on the same day, Ḥamza was born 2–4 years before Muḥammad ﷺ, and ʿAbdullāh died the year he married—meaning Āmina’s pregnancy lasted four years!',
    'Boutros’s entire syllogism collapses on a documented chronological falsification: Ḥamza was already born—and ʿAbd al-Muṭṭalib already had ten sons to fulfill his famous sacrifice vow over ʿAbdullāh—before ʿAbdullāh ever married Āmina, as established by Ibn Isḥāq, Ibn Saʿd, and Ibn Kathīr.',
    'How Ḥamza’s birth & ʿAbd al-Muṭṭalib’s ten-son vow refute Boutros’s timeline',
    [
      '01 · Ḥamza was born before ʿAbdullāh’s marriage (Ibn Isḥāq, Ibn Saʿd & Ibn Kathīr): Early biographical authorities agree that ʿAbd al-Muṭṭalib already had ten sons—including Ḥamza—before ʿAbdullāh married Āmina, which explains why Ḥamza was 2 to 4 years older than the Prophet ﷺ.',
      '02 · The ten-son vow & 100-camel ransom preceded the wedding: ʿAbd al-Muṭṭalib had vowed to sacrifice one son if Allah granted him ten sons to defend him. Only after ten sons were born did the lot fall on ʿAbdullāh, who was ransomed with 100 camels immediately prior to his marriage to Āmina.',
      '03 · Clear lineage & normal gestation: Because ʿAbdullāh married Āmina after the ten-son vow and died during her normal nine-month pregnancy, the genealogy Muḥammad ﷺ → ʿAbdullāh → ʿAbd al-Muṭṭalib is historically rock-solid, and Boutros’s “four-year pregnancy” deduction is a deliberate distortion.'
    ],
    ['Ibn Isḥāq, Sīrat Rasūl Allāh','Ibn Saʿd, al-Ṭabaqāt al-Kubrā','Ibn Kathīr, al-Bidāya wa-l-Nihāya','Cf. al-Sīra al-Ḥalabiyya & Ibn ʿAbd al-Barr, al-Istīʿāb (misused by Zakaria Boutros)'],
    [vjsTrapA],
    {
      facts:[
        ['Chronology Fix','Ḥamza was born BEFORE ʿAbdullāh married Āmina'],
        ['The 10-Son Vow','Required 10 existing sons before ʿAbdullāh’s ransom'],
        ['Historians','Confirmed by Ibn Isḥāq, Ibn Saʿd & Ibn Kathīr'],
        ['True Lineage','Muḥammad ﷺ → ʿAbdullāh → ʿAbd al-Muṭṭalib']
      ],
      visual:{
        kind:'steps',
        items:[
          ['1 · Ten Sons Born First','ʿAbd al-Muṭṭalib’s ten sons (including Ḥamza) are born, triggering his earlier vow to sacrifice one son.'],
          ['2 · Ransom of ʿAbdullāh','The lot falls on ʿAbdullāh, who is ransomed with 100 camels before his wedding.'],
          ['3 · Marriage to Āmina','ʿAbdullāh marries Āmina, conceives Muḥammad ﷺ, and passes away during her normal pregnancy—making Ḥamza naturally 2–4 years older.']
        ]
      }
    }
  ),{
    who:'Refute Boutros with the 10-son vow & Ḥamza’s birth timeline',
    forkTitle:'If they press the “Son of ʿAbd al-Muṭṭalib” title or weak reports',
    forkSub:'Show the Semitic naming idiom and dismiss unauthentic folklore'
  }),
  sum:'Ibn Isḥāq, Ibn Saʿd, and Ibn Kathīr confirm that ʿAbd al-Muṭṭalib already had ten sons (including Ḥamza) and ransomed ʿAbdullāh before ʿAbdullāh married Āmina—demolishing Zakaria Boutros’s “four-year pregnancy” chronology.'
});

/* ============================================================================
   4. NEW Tactical Playbook card: islam/morality/war/no-compulsion-in-religion-2-256
      From kein_zwang (1366084315221327962)
   ============================================================================ */
const KZ=AV2('#kein-zwang-zum-glauben','1366084315221327962');

const kzTrapA=P(N(
  KZ,
  'Even if individuals were released, Islamic law forbids open-ended peace treaties with non-Muslims!',
  'In Tafsīr al-Qurṭubī on Q 8:61, Imām Mālik explicitly rules that Muslims may conclude peace treaties with polytheists for one, two, or three years—or with no time limit at all.',
  'Imām Mālik on open-ended peace treaties (Tafsīr al-Qurṭubī 8.61)',
  [
    '01 · Imām Mālik’s ruling on Q 8.61 (Tafsīr al-Qurṭubī): Commenting on “And if they incline to peace, then incline to it” (Q 8.61), Imām Mālik states that it is permissible to contract a truce with idolaters for one, two, or three years, or without any time limit.',
    '02 · Harmony of Q 2.256 and 8.61: Neither belief nor perpetual war is forced upon peaceful non-Muslims; voluntary conviction (as with Thumāma ibn Uthāl) and durable peace treaties remain normative in classical Sunni jurisprudence.'
  ],
  ['Qurʾān 2:256; 8:61','Tafsīr al-Qurṭubī on Q 8:61 (citing Imām Mālik)'],
  [],
  {
    facts:[
      ['Qurʾān 8:61','“If they incline to peace, incline to it”'],
      ['Imām Mālik','Permits peace treaties with no time limit'],
      ['Source','Tafsīr al-Qurṭubī on Q 8:61'],
      ['Core Principle','Peace & voluntary faith over coercion']
    ],
    quotes:[
      {by:'Imām Mālik (in Tafsīr al-Qurṭubī 8:61)',en:'It is permissible to contract a peace treaty with the idolaters for one, two, or three years, or without any time limit.',ref:'Tafsīr al-Qurṭubī 8:61'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Islamic law still forbids permanent peace treaties with non-Muslims!',
  theyWho:'Watch out · if they say',
  who:'Cite Imām Mālik in Tafsīr al-Qurṭubī 8:61'
});

card('islam/morality/war/no-compulsion-in-religion-2-256',{
  title:'No compulsion in religion: Thumāma ibn Uthāl (Bukhārī 4372) & Imām Mālik',
  k:'Qurʾān 2:256 · Bukhārī 4372 · Tafsīr al-Qurṭubī 8:61',
  blurb:'The Prophet ﷺ freed captive chief Thumāma ibn Uthāl unconditionally without demanding conversion (Bukhārī 4372), and Imām Mālik permitted open-ended peace treaties.',
  claim:'Islam spreads by the sword and forces captives and non-Muslims to convert under threat of death.',
  tree:P(N(
    KZ,
    'In practice, Muhammad forced captives and idolaters to convert to Islam or die.',
    'Ṣaḥīḥ al-Bukhārī 4372 records the exact opposite: when Muslim cavalry captured the powerful Yamāma chieftain Thumāma ibn Uthāl—who openly admitted having killed Muslims—the Prophet ﷺ held him in the mosque for three days, never demanded that he convert, and released him unconditionally without ransom, whereupon Thumāma embraced Islam of his own free will.',
    'Unconditional release of Thumāma ibn Uthāl (Bukhārī 4372) & Imām Mālik on peace',
    [
      '01 · Three days of dialogue without coercion (Ṣaḥīḥ al-Bukhārī 4372): Narrated by Abū Hurayra, Thumāma ibn Uthāl of Banū Ḥanīfa was tied to a pillar of the Medina mosque. Each day for three days, the Prophet ﷺ asked, “What do you have to say, O Thumāma?” Thumāma replied that if killed, he had shed blood; if pardoned, he would be grateful; and if ransomed, he would pay whatever was asked.',
      '02 · Unconditional pardon & voluntary conversion: On the third day, the Prophet ﷺ simply ordered, “Release Thumāma!” without asking for conversion or ransom. Free to leave, Thumāma washed at a nearby date-palm grove, returned to the mosque on his own, pronounced the Shahāda, and declared that the Prophet’s face, religion, and city had become the most beloved on earth to him.',
      '03 · Open-ended peace treaties (Imām Mālik in Tafsīr al-Qurṭubī 8.61): Confirming that peaceful coexistence requires no forced conversion, Imām Mālik ruled under Q 8.61 that Muslims may conclude peace treaties with non-Muslims for one, two, or three years, or without any time limit.'
    ],
    ['Ṣaḥīḥ al-Bukhārī 4372','Qurʾān 2:256; 8:61','Tafsīr al-Qurṭubī on Q 8:61 (Imām Mālik)'],
    [kzTrapA],
    {
      facts:[
        ['Bukhārī 4372','Captive chief Thumāma freed with zero coercion'],
        ['No Ransom','Released unconditionally after three days'],
        ['Voluntary Faith','Washed in a palm grove & returned freely to convert'],
        ['Imām Mālik (8:61)','Permits peace treaties without any time limit']
      ],
      quotes:[
        {by:'Ṣaḥīḥ al-Bukhārī 4372 (Thumāma ibn Uthāl)',en:'By Allah, O Muḥammad, no religion was more hated to me than your religion, yet now your religion is the most beloved to me.',ref:'Ṣaḥīḥ al-Bukhārī 4372'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Forced-Conversion Myth',
          items:[
            'Claims captives were given “convert or die” ultimatums',
            'Asserts Q 2:256 was ignored in Medina’s military practice',
            'Assumes Islam prohibits indefinite peace treaties'
          ]
        },
        right:{
          title:'Prophetic Practice & Fiqh',
          items:[
            'Bukhārī 4372: Thumāma pardoned & freed with no demand to convert',
            'Converted voluntarily after walking free outside the mosque',
            'Imām Mālik (al-Qurṭubī 8:61): peace treaties allowed without time limit'
          ]
        }
      }
    }
  ),{
    who:'Cite Thumāma ibn Uthāl’s unconditional release (Bukhārī 4372)',
    forkTitle:'If they claim Islam forbids lasting peace treaties',
    forkSub:'Cite Imām Mālik in Tafsīr al-Qurṭubī 8:61'
  }),
  sum:'The Prophet’s unconditional release of captive chieftain Thumāma ibn Uthāl (Ṣaḥīḥ al-Bukhārī 4372) and Imām Mālik’s endorsement of open-ended peace treaties (Tafsīr al-Qurṭubī 8:61) prove Islam wins hearts through mercy rather than coercion.'
});

/* ============================================================================
   5. NEW Tactical Playbook card: islam/morality/war/quran-9-29-jizyah-context
      From sure_9_29 (1349455077030756422)
   ============================================================================ */
const S929=AV2('#sure-9-29','1349455077030756422');

const s929TrapA=P(N(
  S929,
  'Even so, Q 9:29 commands extracting jizya from all non-Muslims everywhere, even peaceful civilians!',
  'Ibn Ḥazm explicitly refutes that reading in al-Muḥallā (5/417): jizya is not taken from non-combatants like the sick or people who remain peacefully in their lands without killing Muslims; Q 9:29 commands fighting them until they pay jizya only when they fight Muslims.',
  'Ibn Ḥazm on Q 9.29 & non-combatant immunity (al-Muḥallā 5/417)',
  [
    '01 · Conditional upon hostility (Ibn Ḥazm, al-Muḥallā bi-l-Āthār 5/417): Answering those who cite Q 9.29 to tax or fight peaceful non-combatants, Ibn Ḥazm writes: “Yes, we were commanded to fight them when they fight us, until they pay the jizya.”',
    '02 · Exemptions for non-combatants & peaceful neighbors: Ibn Ḥazm emphasizes that jizya is not levied on those who do not fight—such as the sick or those who remain in their lands without killing a single Muslim.'
  ],
  ['Qurʾān 9:29','Ibn Ḥazm, al-Muḥallā bi-l-Āthār 5/417'],
  [],
  {
    facts:[
      ['Ibn Ḥazm','al-Muḥallā bi-l-Āthār 5/417'],
      ['Rule on Q 9:29','“Commanded to fight them when they fight us”'],
      ['Exemptions','The sick & peaceful people who kill no Muslims'],
      ['Scope','Defensive response to aggression, not blanket war']
    ],
    quotes:[
      {by:'Ibn Ḥazm (al-Muḥallā 5/417)',en:'If they cite 9:29, we say: Yes, we were commanded to fight them when they fight us, until they pay the jizya.',ref:'al-Muḥallā bi-l-Āthār 5/417'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Qurʾān 9:29 still commands fighting and taxing peaceful non-Muslims everywhere!',
  theyWho:'Watch out · if they say',
  who:'Cite Ibn Ḥazm (al-Muḥallā 5/417) on Q 9:29'
});

card('islam/morality/war/quran-9-29-jizyah-context',{
  title:'Qurʾān 9:29 in context: Tabūk, the executed envoy & Ibn Ḥazm',
  k:'Qurʾān 9:29 · Tabūk · Jizya',
  blurb:'Revealed for the Tabūk expedition (al-Ṭabarī) after Byzantine ally Shuraḥbīl al-Ghassānī beheaded the Prophet’s envoy al-Ḥārith ibn ʿUmayr (Ibn al-Qayyim); Ibn Ḥazm on non-combatants.',
  claim:'Qurʾān 9:29 commands Muslims to wage unprovoked war against Jews and Christians around the world until they pay jizya in humiliation.',
  tree:P(N(
    S929,
    'Qurʾān 9:29 orders Muslims to attack People of the Book everywhere simply for their beliefs until they pay jizya.',
    'Classical tafsīr and sīrah record that Q 9:29 was revealed specifically for the Tabūk campaign (30 AH / 630 CE) after Shuraḥbīl ibn ʿAmr al-Ghassānī—a vassal governor of the Byzantine Emperor—bound and beheaded the Prophet’s diplomatic envoy al-Ḥārith ibn ʿUmayr al-Azdī, an act of war under every code of international law, while Ibn Ḥazm confirms Q 9:29 applies only when they fight Muslims.',
    'Tabūk revelation context (al-Ṭabarī), murder of the envoy (Ibn al-Qayyim) & Ibn Ḥazm',
    [
      '01 · Occasion of revelation—the Tabūk expedition (Tafsīr al-Ṭabarī 9.29): Al-Ṭabarī transmits from the early exegete Mujāhid that Q 9.29 (“Fight those who do not believe in Allah and the Last Day…”) was revealed when the Prophet ﷺ and his Companions were commissioned for the expedition of Tabūk against the northern Byzantine-Ghassānid frontier.',
      '02 · Casus belli—assassination of the Prophet’s ambassador (Ibn al-Qayyim, Zād al-Maʿād 3/336; al-Mubārakfūrī, The Sealed Nectar p. 245): The Prophet ﷺ sent al-Ḥārith ibn ʿUmayr al-Azdī with a diplomatic letter to the ruler of Buṣrā in Syria. En route at al-Balqāʾ, the Byzantine-allied governor Shuraḥbīl ibn ʿAmr al-Ghassānī intercepted, bound, and beheaded him—the only ambassador of the Prophet ﷺ ever killed, constituting a flagrant violation of diplomatic immunity and an act of war.',
      '03 · Classical fiqh limit on Q 9.29 (Ibn Ḥazm, al-Muḥallā 5/417): Ibn Ḥazm states that jizya is never taken from non-combatants (such as the sick or those who remain peacefully in their lands without killing a single Muslim), explaining Q 9.29: “We were commanded to fight them when they fight us, until they pay the jizya.”'
    ],
    ['Tafsīr al-Ṭabarī on Q 9:29 (via Mujāhid)','Ibn al-Qayyim, Zād al-Maʿād (p. 336)','Ṣafī al-Raḥmān al-Mubārakfūrī, The Sealed Nectar (p. 245)','Ibn Ḥazm, al-Muḥallā bi-l-Āthār 5/417'],
    [s929TrapA],
    {
      facts:[
        ['Mujāhid / al-Ṭabarī','Q 9:29 revealed for the Tabūk campaign'],
        ['Casus Belli','Envoy al-Ḥārith ibn ʿUmayr bound & beheaded'],
        ['Perpetrator','Byzantine vassal Shuraḥbīl al-Ghassānī (Zād al-Maʿād)'],
        ['Ibn Ḥazm (5/417)','Applies only against those who fight Muslims']
      ],
      quotes:[
        {by:'Ibn al-Qayyim (Zād al-Maʿād p. 336)',en:'Never before had an ambassador of the Messenger of Allah ﷺ been killed except him… so he dispatched an expedition.',ref:'Zād al-Maʿād p. 336'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['1 · Diplomatic Mission','The Prophet ﷺ sends envoy al-Ḥārith ibn ʿUmayr al-Azdī with a letter to the ruler of Buṣrā.'],
          ['2 · Act of War','Byzantine ally Shuraḥbīl ibn ʿAmr al-Ghassānī intercepts, binds, and beheads the ambassador (Zād al-Maʿād 336).'],
          ['3 · Q 9:29 & Tabūk','Q 9:29 is revealed for the Tabūk expedition (al-Ṭabarī), targeting hostile belligerents rather than peaceful civilians (Ibn Ḥazm 5/417).']
        ]
      }
    }
  ),{
    who:'Show the Tabūk context (al-Ṭabarī), the slain envoy & Ibn Ḥazm',
    forkTitle:'If they claim Q 9:29 still targets peaceful non-combatants',
    forkSub:'Cite Ibn Ḥazm’s explicit restriction in al-Muḥallā 5/417'
  }),
  sum:'Qurʾān 9:29 was revealed for the Tabūk campaign (al-Ṭabarī) in response to the Byzantine-Ghassānid execution of the Prophet’s ambassador al-Ḥārith ibn ʿUmayr (Ibn al-Qayyim, Zād al-Maʿād 336), and applies strictly to active belligerents (Ibn Ḥazm, al-Muḥallā 5/417).'
});

/* ============================================================================
   6. ENRICHMENT (add): islam/general/d-av-sonstiges-islam-3/c-juden-am-ju-ngsten-tag-to-ten
      From toetet_alle_juden (1340060561911844948)
   ============================================================================ */
const TAJ=AV2('#tötet-alle-juden','1340060561911844948');
add('islam/general/d-av-sonstiges-islam-3/c-juden-am-ju-ngsten-tag-to-ten',P(N(
  TAJ,
  'What about the report in Ibn Isḥāq and Abū Dāwūd 2996 where the Prophet ﷺ allegedly said “Kill every Jew who falls into your power” and Muḥayyiṣa killed the merchant Ibn Sunayna?',
  'Alongside the end-times Dajjāl context of the eschatological ḥadīth, the historical Ibn Sunayna report in Abū Dāwūd 2996 is graded weak (ḍaʿīf) by al-Albānī due to two anonymous narrators in its chain, contradicts Q 60:8–9 and the Prophet’s documented treaty with Medina’s Jews the very next day, and was doubted even by non-Muslim historian Sir William Muir.',
  'The Ibn Sunayna report (Abū Dāwūd 2996): weak chain (al-Albānī), Q 60.8–9 & historical refutation',
  [
    '01 · Defective chain with anonymous narrators (al-Albānī, Cheragh Ali & Bashir Ahmad): Al-Albānī grades Abū Dāwūd 2996 weak (ḍaʿīf). Its isnād passes through two unknown (majhūl) links—an unnamed freedman of Banū Ḥāritha and an unknown daughter of Muḥayyiṣa—with no corroborating chains.',
    '02 · Direct contradiction with Qurʾān 60.8–9: Qurʾān 60.8–9 commands kindness and justice toward non-Muslims who do not fight believers over religion, making an indiscriminate order against peaceful merchants impossible.',
    '03 · Historical impossibility (Maulana Muhammad Ali, Bashir Ahmad & Sir William Muir): Had such a general order existed in Medina, more than a single isolated incident would have occurred, Jewish tribes would have protested, and the Prophet ﷺ would not have concluded a new treaty with the Jews the very next day. Even Orientalist critic Sir William Muir noted that the alleged order is strange and must be missing crucial qualifying conditions.'
  ],
  ['Sunan Abī Dāwūd 2996 (graded ḍaʿīf by al-Albānī)','Qurʾān 60:8–9','Cheragh Ali; Maulana Muhammad Ali; Bashir Ahmad M.A.','Sir William Muir, The Life of Mahomet'],
  [],
  {
    facts:[
      ['Ḥadīth Grading','Abū Dāwūd 2996 graded weak (ḍaʿīf) by al-Albānī'],
      ['Isnād Defect','Two anonymous narrators (freedman & daughter)'],
      ['Qurʾān 60:8–9','Commands justice & kindness to peaceful non-Muslims'],
      ['Historical Proof','New treaty signed with Jews the very next day']
    ],
    quotes:[
      {by:'Sir William Muir (non-Muslim historian)',en:'The order itself is strange, and must, one would suppose, have been accompanied by conditions or reservations not here apparent.',ref:'The Life of Mahomet'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Polemical Claim (Abū Dāwūd 2996)',
        items:[
          'Quotes Ibn Sunayna story as an authentic general command',
          'Ignores the two anonymous narrators in the chain',
          'Overlooks Medina’s ongoing treaties with Jewish merchants'
        ]
      },
      right:{
        title:'Ḥadīth & Historical Verdict',
        items:[
          'Graded ḍaʿīf by al-Albānī; broken chain via unknown freedman',
          'Violates Q 60:8–9 & prophetic practice; new treaty signed next day',
          'Even Sir William Muir admitted vital context/conditions are missing'
        ]
      }
    }
  }
),{
  optWho:'Watch out · if they shift from end-times to',
  optLabel:'What about Abū Dāwūd 2996 (“Kill every Jew in your power”) and the merchant Ibn Sunayna?',
  theyWho:'Watch out · if they shift from end-times to',
  who:'Expose the weak chain (al-Albānī) & historical impossibility'
}));

/* ============================================================================
   7. ENRICHMENT (add): islam/morality/war/sword-verse-abrogation
      From sure_9_5 (1349453774913277962)
   ============================================================================ */
const S95=AV2('#sure-9-5','1349453774913277962');
add('islam/morality/war/sword-verse-abrogation',P(N(
  S95,
  'Even if 9:5 didn’t formally abrogate 8:61, doesn’t 9:5 still command killing polytheists indiscriminately wherever they are found?',
  'Ten classical and modern authorities—al-Ṭabarī, al-Qurṭubī, Ibn Kathīr, al-Baghawī, al-Bayḍāwī, al-Suyūṭī, Ibn Taymiyya, Ibn al-Qayyim, Ibn Ḥajar, and Abdel Haleem—demonstrate that Q 9:1–13 targets only Meccan treaty-breakers who attacked first, while Q 9:4 honors faithful treaty partners, Q 9:6 mandates asylum and safe escort for any polytheist seeking protection, and prophetic law strictly forbids killing women, children, the elderly, or non-combatants.',
  'Classical consensus on Q 9.1–13: treaty-breakers only, asylum in 9.6 & non-combatant immunity',
  [
    '01 · Restricted to Meccan treaty-breakers (Ibn Kathīr, al-Ṭabarī, al-Baghawī, al-Bayḍāwī & al-Suyūṭī): On Q 9.4–13, Ibn Kathīr, al-Suyūṭī (al-Jalālayn), al-Baghawī, al-Bayḍāwī, and al-Ṭabarī explain that the Prophet ﷺ honored the Ḥudaybiyya treaty until Quraysh broke it by backing Banū Bakr against Khuzāʿa; Q 9.4 commands fulfilling treaties with polytheists who kept their word, and Q 9.13 identifies the target as those who broke their oaths and attacked first.',
    '02 · Mandatory asylum & defensive scope (al-Qurṭubī, Ibn Taymiyya, Ibn al-Qayyim & Ibn Ḥajar): Al-Qurṭubī (1/490–491) notes that even after 9.5, the Prophet ﷺ fought only active belligerents and forbade killing women and children (Ibn ʿUmar). Ibn Taymiyya (al-Nubuwwāt 1/140) and Ibn al-Qayyim (Hidāyat al-Ḥayārā pp. 25–27, 237) confirm the majority rule that Muslims fight only those who wage war and never coerce faith (Q 2.256), while Ibn Ḥajar (Fatḥ al-Bārī 6/517) forbids killing non-combatants or acts of terror.',
    '03 · Academic & modern scholarly confirmation (Bernard Lewis, al-Būṭī, Abdel Haleem & Faraz Khan): Dr. Muhammad Abdel Haleem (Understanding the Qurʾan pp. 65–66), Saʿīd Ramaḍān al-Būṭī (pp. 39–40), and Faraz Khan highlight that Q 9.6 immediately orders granting protection and safe passage to any polytheist who seeks it, and historian Bernard Lewis (Islam: The Religion and the People p. 151; The Crisis of Islam) affirms classical Islamic law never sanctions terrorism or killing women, children, and the aged.'
  ],
  ['Qurʾān 2:256; 9:1–13','Tafsīr al-Qurṭubī 1/490–491; al-Ṭabarī 9:6; Ibn Kathīr 9:7, 9:13','al-Baghawī 9:7; al-Bayḍāwī 9:4; al-Jalālayn 9:7, 9:13','Ibn Taymiyya, al-Nubuwwāt 1/140; Ibn al-Qayyim, Hidāyat al-Ḥayārā 25–27, 237; Ibn Ḥajar, Fatḥ al-Bārī 6/517','Bernard Lewis (p. 151); al-Būṭī (2004, pp. 39–40); M. Abdel Haleem (pp. 65–66); Faraz A. Khan'],
  [],
  {
    facts:[
      ['Q 9:4 & 9:13','Targets only oath-breakers who attacked first'],
      ['Q 9:6 Asylum','Commands safe escort for any polytheist seeking it'],
      ['Ibn Taymiyya & Qayyim','Fight only belligerents; no forced conversion'],
      ['Bernard Lewis & Ibn Ḥajar','Strict ban on terrorism & killing non-combatants']
    ],
    quotes:[
      {by:'Qurʾān 9:6',en:'And if any one of the polytheists seeks your protection, then grant him protection so that he may hear the words of Allah; then deliver him to his place of safety.',ref:'Qurʾān 9:6'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Out-of-Context Isolation (Q 9:5)',
        items:[
          'Cuts Q 9:5 out of Q 9:1–13 to allege indiscriminate war',
          'Omits Q 9:4 (honor faithful treaties) & Q 9:6 (grant asylum)',
          'Ignores Q 9:13 (“they broke their oaths… and attacked you first”)'
        ]
      },
      right:{
        title:'Ten Classical & Modern Exegetes',
        items:[
          'Al-Ṭabarī, Ibn Kathīr, al-Baghawī, al-Bayḍāwī, al-Suyūṭī: treaty-breakers only',
          'Al-Qurṭubī, Ibn Taymiyya, Ibn al-Qayyim, Ibn Ḥajar: defensive & no civilian harm',
          'Bernard Lewis, Abdel Haleem & al-Būṭī: Q 9:6 mandates safe passage & rejects terror'
        ]
      }
    }
  }
),{
  optWho:'Or cite the 10-scholar dossier on Q 9:1–13 · if they say',
  optLabel:'Even without abrogation, Q 9:5 still orders killing all polytheists indiscriminately!',
  theyWho:'Or cite the 10-scholar dossier on Q 9:1–13 · if they say',
  who:'Show the 10-scholar consensus on Q 9:1–13 & asylum in 9:6'
}));

})();
