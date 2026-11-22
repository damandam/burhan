/* Deenresponds Batch 8 Qurʾān, History & Creed Channels — 2026-11-22.
   Integrates 11 channels (including dhul_qarnayn_1 + dhul_qarnayn_2 merged) across
   6 new Tactical Debate Playbook cards and 4 add() enrichments, attaching all 15 shots/dr8-*.webp scans. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('dr-batch8-quran: no card',key); };

const DR=(sub,id)=>({credit:'Deenresponds · '+sub,link:'https://discord.com/channels/1328402309297733662/'+id});
const S=(src,cap)=>({src:'shots/'+src,cap});

/* ============================================================================
   1. NEW Tactical Playbook card: islam/quran/history/ad-and-thamud-archaeology
      From ad_thamud (1368220314789613578)
   ============================================================================ */
const AT=DR('#ad-and-thamud','1368220314789613578');

const atTrapA=P(N(
  AT,
  'Even if Q 29:38 only says masākin, a ḥadīth in Musnad Aḥmad shows the Prophet ﷺ mistook Nabataean tombs at al-Ḥijr for Thamūd’s houses.',
  'Checking the Arabic lexicography and ḥadīth chains collapses both prongs of that claim. Masākin denotes an inhabited region rather than standing roofs, and the Musnad Aḥmad wording about entering Thamūd’s houses has a weak chain—while the Ṣaḥīḥayn state only that the Prophet ﷺ passed the land of al-Ḥijr.',
  'Lexical sense of masākin & weak Musnad Aḥmad chain',
  [
    '01 · Meaning of masākin in Q 29.38: In classical Arabic lexicography—citing Nashwān al-Ḥimyarī (d. 573 AH) in Shams al-ʿUlūm—masākin means settled territory or dwelling-land whether buildings remain standing or not, just as masājid refers to earth upon which one prostrates.',
    '02 · Weak chain in Musnad Aḥmad: The narration via Muḥammad ibn Abī Kabshah al-Anmārī claiming Companions rushed into the houses of al-Ḥijr is graded weak (ḍaʿīf) by Shuʿayb al-Arnaʾūṭ (Musnad Aḥmad, 29/559) due to Muḥammad ibn Abī Kabshah, contested evaluations of Ismāʿīl ibn Awsaṭ, and al-Masʿūdī’s late-life mixing.',
    '03 · What the Ṣaḥīḥayn actually report: Bukhārī and Muslim record the Prophet ﷺ passing through the territory of al-Ḥijr en route to Tabūk without equating late Nabataean rock-cut tombs with all residential architecture of Thamūd.'
  ],
  ['Qurʾān 29:38; 15:82','Nashwān al-Ḥimyarī, Shams al-ʿUlūm','Musnad Aḥmad (ed. al-Arnaʾūṭ, 29/559)'],
  [],
  {
    facts:[
      ['Shams al-ʿUlūm','Masākin = settlement land, not roofs'],
      ['Musnad Aḥmad 29/559','Al-Arnaʾūṭ grades “entering” report ḍaʿīf'],
      ['Ṣaḥīḥayn','Locate al-Ḥijr region along Tabūk route'],
      ['Madāʾin Ṣāliḥ','Nabataean tombs do not exhaust Thamūd']
    ],
    quotes:[
      {by:'Nashwān al-Ḥimyarī (d. 573 AH)',en:'Al-maskan is a place of settlement, residence, and habitation.',ref:'Shams al-ʿUlūm (via dr8-ad-thamud-2)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'A ḥadīth proves the Prophet ﷺ mistook Nabataean tombs at Madāʾin Ṣāliḥ for Thamūd’s carved houses!',
  theyWho:'Watch out · if they say',
  who:'Cite Shams al-ʿUlūm & al-Arnaʾūṭ'
});

const atTrapB=P(N(
  AT,
  'Late Arabian inscriptions mention ʿĀd and Thamūd centuries after Abraham, contradicting the Qurʾān’s claim that they were destroyed long before.',
  'Both classical Qurʾānic exegetes and Arab historians explicitly distinguish an earlier destroyed generation (ʿĀd al-Ūlā, Q 53:50) from later surviving descendants (ʿĀd al-Ākhirah)—with the exact same two-stage pattern recorded for Thamūd.',
  'ʿĀd al-Ūlā vs. ʿĀd al-Ākhirah & later Thamūd inscriptions',
  [
    '01 · The Qurʾān’s own distinction in Q 53.50: Surah al-Najm specifically identifies “the first ʿĀd” (ʿĀd al-Ūlā), which classical commentators explain implies a subsequent surviving branch—ʿĀd al-Ākhirah—descended from the believers spared with Prophet Hūd.',
    '02 · Arab historians on two Thamūds: Early Arab historiography records the same twofold division for Thamūd, explaining why later Thamūdic tribes and inscriptions (such as the OCIANA epigraphic attestation) appear long after the ancient punishment.',
    '03 · Ancestral prestige & Qurʾānic rhetoric: By recounting the fate of the ancient ancestors whose memory and lineage the later tribes prized—much like later empires claiming descent from ancient Rome—the Qurʾān delivers a direct moral warning to their successors.'
  ],
  ['Qurʾān 53:50','Classical Tafsīr (ʿĀd al-Ūlā / al-Ākhirah)','OCIANA Epigraphic Database (OSU)'],
  [],
  {
    facts:[
      ['Q 53:50','Explicitly specifies “the first ʿĀd”'],
      ['Two Generations','ʿĀd al-Ūlā (ancient) & ʿĀd al-Ākhirah (descendants)'],
      ['Thamūd Parallel','Later Thamūd tribes attested in epigraphy'],
      ['Historical Fit','Later inscriptions match successor tribes']
    ],
    quotes:[
      {by:'Qurʾān 53:50',en:'And that He destroyed the first ʿĀd.',ref:'Surah al-Najm 53:50'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Late Arabian inscriptions mention ʿĀd and Thamūd centuries too late for the Qurʾān’s timeline!',
  theyWho:'Watch out · if they say',
  who:'Distinguish ʿĀd al-Ūlā & al-Ākhirah'
});

card('islam/quran/history/ad-and-thamud-archaeology',{
  title:'ʿĀd, Thamūd & Madāʾin Ṣāliḥ Archaeology',
  k:'Q 15:82 · 29:38 · 53:50',
  blurb:'Why Nabataean tombs at Madāʾin Ṣāliḥ, a weak Musnad Aḥmad report, and late inscriptions fail to indict the Qurʾān.',
  claim:'The Qurʾān and ḥadīth mistakenly identify 1st-century BCE Nabataean burial tombs at Madāʾin Ṣāliḥ as the ancient rock-carved homes of Thamūd.',
  tree:P(N(
    AT,
    'Archaeology proves the rock carvings at Madāʾin Ṣāliḥ are late Nabataean tombs, not ancient houses of Thamūd—so the Qurʾān and ḥadīth got it wrong.',
    'That argument rests on a misreading of Q 29:38, a weak chain in Musnad Aḥmad, and ignorance of the two-generation history of ʿĀd and Thamūd. Neither the Qurʾān nor the Ṣaḥīḥayn equate Nabataean burial façades with Thamūd’s original dwellings, while Q 53:50 and Arab historians explicitly differentiate the ancient destroyed tribes from later descendant groups attested in inscriptions.',
    'Lexical, isnād & two-tribe refutation of the Madāʾin Ṣāliḥ claim',
    [
      '01 · Q 29.38 speaks of settled territory, not Nabataean facades: As Nashwān al-Ḥimyarī’s Shams al-ʿUlūm notes, masākin denotes an inhabited region or territory regardless of whether original roofs survive—so Q 29:38 never asks the Companions to inspect Nabataean tomb interiors.',
      '02 · The “entering their houses” report is weak: Shuʿayb al-Arnaʾūṭ grades the Musnad Aḥmad narration mentioning Companions entering the dwellings of al-Ḥijr as ḍaʿīf due to Muḥammad ibn Abī Kabshah and transmission defects; the Ṣaḥīḥayn record only passing the land of al-Ḥijr.',
      '03 · Earlier vs. later ʿĀd and Thamūd: Classical commentators on Q 53:50 (“the first ʿĀd”) and Arab historians note both ʿĀd and Thamūd had an ancient destroyed branch and later descendant tribes—explaining how later Thamūdic and ʿĀdī inscriptions (e.g. OCIANA) persisted without contradicting ancient destruction.',
      '04 · Shared geography across eras: A later people (the Nabataeans) carving monumental tombs along the trade route in the historical land of al-Ḥijr neither erases earlier Thamūdic habitation nor creates any conflict with Q 15:82.'
    ],
    ['Qurʾān 15:82; 29:38; 53:50','Shams al-ʿUlūm (Nashwān al-Ḥimyarī)','Musnad Aḥmad 29/559 (al-Arnaʾūṭ)','OCIANA Epigraphy'],
    [atTrapA,atTrapB],
    {
      facts:[
        ['Masākin (Q 29:38)','Denotes inhabited territory, not roofs'],
        ['Musnad Aḥmad','“Entering dwellings” narration is ḍaʿīf'],
        ['Q 53:50','Distinguishes ʿĀd al-Ūlā from ʿĀd al-Ākhirah'],
        ['Thamūd Inscriptions','Reflect later successor tribes in al-Ḥijr']
      ],
      quotes:[
        {by:'Arabic Refutation Treatise',en:'The Qurʾān does not state that the Companions saw the built houses of Thamūd.',ref:'Al-Mabḥath al-Rābiʿ (dr8-ad-thamud-1)'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Assumption',
          items:[
            'Reads masākin in Q 29:38 strictly as intact residential roofs',
            'Treats a weak Musnad Aḥmad narration as Ṣaḥīḥayn evidence',
            'Assumes Nabataean tombs are the sole structures ever in al-Ḥijr',
            'Conflates ancient ʿĀd/Thamūd with later successor tribes'
          ]
        },
        right:{
          title:'Lexical, Isnād & Historical Record',
          items:[
            'Shams al-ʿUlūm: masākin means settled land/territory',
            'Al-Arnaʾūṭ grades the “entering dwellings” isnād as ḍaʿīf',
            'Ṣaḥīḥayn only identify the land of al-Ḥijr on the Tabūk march',
            'Q 53:50 & Arab historians distinguish first vs. later tribes'
          ]
        }
      },
      shots:[
        S('dr8-ad-thamud-1.webp','Arabic monograph (Al-Mabḥath al-Rābiʿ: Madāʾin Ṣāliḥ wa-Masākin Thamūd) listing the six missionary premises and opening the rebuttal.'),
        S('dr8-ad-thamud-2.webp','Lexical proof from Shams al-ʿUlūm on masākin and Shuʿayb al-Arnaʾūṭ’s grading of the Musnad Aḥmad Muḥammad ibn Abī Kabshah narration as ḍaʿīf.')
      ]
    }
  ),{
    who:'Dismantle wording, chain & timeline',
    forkTitle:'Two follow-up angles they press',
    forkSub:'Expose the weak Musnad Aḥmad report or explain late inscriptions'
  }),
  sum:'Q 29:38 refers to settled territory (masākin), the Musnad Aḥmad “entering houses” wording is graded ḍaʿīf by al-Arnaʾūṭ, and Q 53:50 plus Arab historiography distinguish ancient destroyed tribes from later descendant groups.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: islam/proofs/no-more-khosrau-prophecy
      From no_more_khosrau (1368220620000722984)
   ============================================================================ */
const KH=DR('#no-more-khosrau','1368220620000722984');

const khTrapA=P(N(
  KH,
  'How can 629 CE prove Heraclius dropped the title Caesar? Earlier diplomas still called him Kaisar!',
  'Chancellery documents confirm the exact turning point in 629 CE. Diplomas from 612 and 620 CE preserved the old Latin-derived formula Autokrator Kaisar Augustus—then in 629 CE Heraclius abruptly replaced the entire old title stack with the Greek formula pistos en Christo basileus.',
  'Documented 629 CE Byzantine chancellery title shift',
  [
    '01 · Pre-629 diplomas (612 & 620 CE): Official imperial protocols in 612 and 620 CE reproduced Justinian’s multi-title formula opening with Autokrator Kaisar Flavios Herakleios and closing with Augustus, with the 619 subscription still written in Latin.',
    '02 · The 629 CE break: Immediately after Persia’s collapse, a 629 CE diploma for Heraclius and his son Constantine abandoned the complex old sequence for the simple Greek royal title pistoi en Christo basileis.',
    '03 · Modern Byzantine scholarship: Both Irfan Shahîd (Byzantion 51, 1981) and L’origine des titres impériaux à Byzance (pp. 12–13) verify that basileus became the supreme legal imperial title replacing Autokrator, Caesar, and Augustus.'
  ],
  ['L’origine des titres impériaux à Byzance (pp. 12–13, Zenodo 2090495)','Irfan Shahîd, Byzantion 51 (1981), pp. 288–296'],
  [],
  {
    facts:[
      ['612 & 620 CE','Used Autokrator Kaisar Augustus'],
      ['629 CE Edict','Replaced old titles with Basileus'],
      ['Irfan Shahîd','Byzantion 51 confirms 629 Hellenization'],
      ['Prophecy Fit','No supreme imperial “Caesar” after Heraclius']
    ],
    quotes:[
      {by:'Oxford Dictionary of Byzantium (Basileus)',en:'Encouraged Herakleios to replace the traditional title autokrator with pistos en Christo basileus in an edict issued in 629.',ref:'Entry: Basileus (dr8-khosrau-1)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Byzantine diplomas under Heraclius still used Caesar—prove the title really changed!',
  theyWho:'Watch out · if they say',
  who:'Show 612 vs. 629 CE diplomas'
});

const khTrapB=P(N(
  KH,
  'Even if the protocol changed to Basileus, later Byzantine emperors still existed—so doesn’t the prophecy fail?',
  'Two classical explanations also leave zero contradiction. Classical commentators understood the prophecy geographically—reassuring Quraysh that no future Khosrau or Caesar would ever again dominate Greater Syria and Iraq—while syntactically idhā halaka links extinction to violent assassination (fulfilled in Khosrau II’s murder, whereas Heraclius died naturally).',
  'Classical Syria/Iraq scope & conditional grammar',
  [
    '01 · Classical geographic scope (Syria & Iraq): Quraysh feared Persian and Byzantine emperors blocking their trade caravans. Classical scholars explain the ḥadīth foretold that after the Prophet’s ﷺ lifetime neither a Khosrau nor a Caesar would ever regain control over Iraq and Greater Syria—a prediction fulfilled permanently.',
    '02 · Conditional rendering (idhā halaka): Read conditionally—“if Khosrau is killed, no Khosrau after him; if Caesar is killed, no Caesar after him”—the condition held for Khosrau II (assassinated in 628, ending Sasanian imperial power), whereas Heraclius died of illness rather than assassination.',
    '03 · Triple convergence: Whether read via the 629 CE abolition of the Caesar protocol, permanent loss of Syria and Iraq, or conditional syntax, Bukhārī 3619 stands vindicated by history.'
  ],
  ['Ṣaḥīḥ al-Bukhārī 3619','Classical ḥadīth commentaries on Syria & Iraq sovereignty'],
  [],
  {
    facts:[
      ['Caravan Context','Quraysh feared imperial trade blockades'],
      ['Syria & Iraq','Neither empire ever reclaimed them'],
      ['Khosrau II','Assassinated 628 CE; dynasty collapsed'],
      ['Heraclius','Died naturally 641 CE after losing Syria']
    ],
    quotes:[
      {by:'Ṣaḥīḥ al-Bukhārī 3619',en:'When Khosrau perishes, there will be no Khosrau after him; and when Caesar perishes, there will be no Caesar after him.',ref:'Bukhārī 3619'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Even with a new Greek title, Byzantine emperors still ruled in Constantinople after Heraclius!',
  theyWho:'Watch out · if they say',
  who:'Give classical Syria/Iraq & conditional answers'
});

card('islam/proofs/no-more-khosrau-prophecy',{
  title:'“No More Khosrau, No More Caesar” (Bukhārī 3619)',
  k:'Prophecy · Bukhārī 3619',
  blurb:'Heraclius’s 629 CE abolition of the Caesar/Autokrator title for Basileus, plus the classical Syria/Iraq scope.',
  claim:'Bukhārī 3619 failed because Byzantine emperors continued ruling for centuries after Heraclius.',
  tree:P(N(
    KH,
    'The Prophet ﷺ predicted no Caesar would arise after Caesar—yet Byzantine emperors kept ruling after Heraclius, falsifying the prophecy.',
    'Historical records actually confirm a remarkable fulfillment across three complementary dimensions. In 629 CE—during the Prophet’s ﷺ own lifetime—Heraclius formally abolished the old Latin imperial titulature (Autokrator Kaisar Augustus) in favor of the Greek title Basileus, while classical scholars also noted that no Khosrau or Caesar ever ruled Syria and Iraq again.',
    'The 629 CE Basileus reform & classical Syria/Iraq scope',
    [
      '01 · Heraclius’s 629 CE title replacement: Byzantine chancellery diplomas from 612 and 620 CE still used Autokrator Kaisar, but in 629 CE Heraclius issued an edict replacing the old imperial titles—including Caesar—with pistos en Christo basileus (Irfan Shahîd, Byzantion 51; L’origine des titres impériaux, pp. 12–13).',
      '02 · Classical Syria & Iraq sovereignty view: Classical commentators explain the prophecy reassured Quraysh regarding caravan routes—neither a Persian Khosrau nor a Roman Caesar would ever again hold Greater Syria and Iraq.',
      '03 · Conditional syntax (murder vs. natural death): A third grammatical reading renders idhā halaka conditionally regarding violent overthrow/killing—fulfilled when Khosrau II was assassinated and Persia fell, while Heraclius was never assassinated and died naturally.',
      '04 · Unlikely coincidence: An unlettered Arabian prophet predicting the permanent end of two superpower dynasties in the Near East—just as Byzantium abandoned its centuries-old Caesar protocol in 629 CE—is a striking historical convergence.'
    ],
    ['Ṣaḥīḥ al-Bukhārī 3619','Byzantion 51 (1981), pp. 288–296','L’origine des titres impériaux à Byzance, pp. 12–13'],
    [khTrapA,khTrapB],
    {
      facts:[
        ['Bukhārī 3619','No Khosrau or Caesar after them'],
        ['629 CE Reform','Heraclius replaces Kaisar with Basileus'],
        ['Near East Loss','Syria, Iraq & Egypt lost permanently'],
        ['Sasanian Fall','Khosrau II murdered; empire fell']
      ],
      quotes:[
        {by:'L’origine des titres impériaux (pp. 12–13)',en:'For the first time… the word basileus becomes the legal title of the emperor… encompassing all the old ones.',ref:'Zenodo 2090495, pp. 12–13'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'612–620 CE Byzantine Protocol',
          items:[
            'Issued in Latin chancellery tradition (619 subscription in Latin)',
            'Full string: Autokrator Kaisar Flavios Herakleios… Augustus',
            'Retained traditional Roman imperial title Caesar'
          ]
        },
        right:{
          title:'629 CE Reform & Classical Scope',
          items:[
            'Edict of 629 CE adopts Greek pistos en Christo basileus',
            'Abolishes Autokrator, Caesar & Augustus in main imperial formula',
            'Neither Khosrau nor Caesar ever again held Iraq or Greater Syria'
          ]
        }
      },
      shots:[
        S('dr8-khosrau-1.webp','Byzantine encyclopedia entry on BASILEUS highlighting how Herakleios replaced traditional Roman titles with pistos en Christo basileus in a 629 CE edict (citing I. Shahîd, Byzantion 51).')
      ]
    }
  ),{
    who:'Show 629 CE Basileus shift & classical scope',
    forkTitle:'Two follow-up challenges',
    forkSub:'Prove the 629 CE diploma shift or answer the later-emperors objection'
  }),
  sum:'In 629 CE Heraclius replaced the official imperial title Caesar/Autokrator with Greek Basileus, and neither a Khosrau nor a Caesar ever again ruled Greater Syria and Iraq.'
});

/* ============================================================================
   3. NEW Tactical Playbook card: islam/quran/history/talut-gideon-river-test
      From talut_error (1421476011299700736)
   ============================================================================ */
const TL=DR('talut-“error”','1421476011299700736');

const tlTrapA=P(N(
  TL,
  'Even if the Bible compares Gideon and Saul, the Qurʾān still clumsily transferred Gideon’s river test onto Saul by mistake!',
  'Accidental confusion cannot explain systematic literary symmetry. Walid Saleh and Nevin Reda show the Qurʾān deliberately inverts the Hebrew Bible’s Gideon–Saul typology across multiple structural markers—including renaming Saul “Ṭālūt” as a sanitizing pun—demonstrating intimate literary mastery rather than ignorance.',
  'Walid Saleh & Nevin Reda on deliberate typological inversion',
  [
    '01 · Systematic intratextual inversion (Walid Saleh): In his landmark paper on Ṭālūt, Walid Saleh demonstrates that the Qurʾān systematically reverses the Deuteronomist’s negative portrait of Saul by transferring Gideon’s obedience test onto Ṭālūt—something impossible through accidental conflation.',
    '02 · Sanitizing pun in the name Ṭālūt (Nevin Reda, AJISS): Nevin Reda’s analysis highlights that even the name Ṭālūt (from Arabic ṭūl, stature/height, echoing 1 Samuel 9:2 and rhyming with Jālūt) is an intentional literary pun rehabilitating Israel’s first king.',
    '03 · Prophet-king portrait: Unlike 1 Samuel’s rejected, tragic Saul, Q 2:246–251 frames Ṭālūt positively alongside David as a righteous, divinely vindicated leader testing his army’s loyalty.'
  ],
  ['Walid Saleh, “King Saul (Ṭālūt) in the Qurʾān and Post-Qurʾānic Literature”','Nevin Reda (AJISS / Brill 2586)','Past, Present, Future: Saving Saul from the Deuteronomist, p. 269'],
  [],
  {
    facts:[
      ['Walid Saleh','Proves deliberate intratextual inversion'],
      ['Nevin Reda (AJISS)','Ṭālūt = deliberate sanitizing pun on height'],
      ['Biblical Link','Judges 7 & 1 Samuel already pair Gideon/Saul'],
      ['Q 2.246–251','Presents Ṭālūt as righteous leader']
    ],
    quotes:[
      {by:'Hebrew Bible Typology Summary',en:'The stories of Gideon and Saul are presented as parallel, typological narratives that serve to contrast the two leaders.',ref:'dr8-talut-1'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Even if Gideon and Saul are compared in the Bible, assigning the river test to Saul is still a mistake!',
  theyWho:'Watch out · if they say',
  who:'Show systematic inversion & punning'
});

card('islam/quran/history/talut-gideon-river-test',{
  title:'Ṭālūt & the River Test: Confusion with Gideon? (Q 2:249)',
  k:'Q 2:246–251 · Typology',
  blurb:'Biblical Gideon–Saul typology, Walid Saleh on deliberate Qurʾānic inversion, and Nevin Reda on the punning name Ṭālūt.',
  claim:'Qurʾān 2:249 mistakenly attributes Gideon’s river-drinking troop test (Judges 7) to King Saul (Ṭālūt).',
  tree:P(N(
    TL,
    'The Qurʾān confused Gideon with King Saul by putting Judges 7’s river-drinking test into the story of Ṭālūt (Saul).',
    'Academic Qurʾānic and biblical scholarship shows the exact opposite: Judges and 1 Samuel already construct an intentional literary typology pairing Gideon and Saul, and the Qurʾān systematically inverts that typology to rehabilitate Ṭālūt—even crafting the punning name Ṭālūt intentionally.',
    'Intentional Gideon–Saul typology & Qurʾānic inversion',
    [
      '01 · Pre-existing Biblical Gideon–Saul typology: Biblical scholars (e.g. Rhetoric of the Book of Judges; “Saving Saul from the Deuteronomist”, Past, Present, Future, p. 269) demonstrate that Judges and 1 Samuel intentionally pair Gideon (ideal, humble, obedient) against Saul (flawed, disobedient) across five parallel traits.',
      '02 · Deliberate Qurʾānic inversion (Walid Saleh): Walid Saleh shows that Q 2:246–251 does not blunder into mixing two actors; rather, it systematically inverts the Deuteronomistic polemic against Saul, assigning him Gideon’s faithfulness test to portray him as an upright, divinely chosen ruler.',
      '03 · The sanitizing pun “Ṭālūt” (Nevin Reda): As Nevin Reda notes (AJISS), the Arabic name Ṭālūt plays on ṭūl (height/stature, recalling 1 Samuel 9:2) while rhyming with Jālūt (Goliath), serving a deliberate literary and theological rehabilitation.',
      '04 · Coherent theological shift: Because the Qurʾān executes this inversion consistently across every structural element of the narrative—treating Ṭālūt like a righteous prophet-king akin to David—random memory confusion is ruled out.'
    ],
    ['Qurʾān 2:246–251','Judges 7; 1 Samuel 9–15','Walid Saleh (King Saul / Ṭālūt)','Nevin Reda (AJISS); Brill 2586; Rhetoric of Judges'],
    [tlTrapA],
    {
      facts:[
        ['Judges vs. 1 Sam','Intentional Gideon–Saul literary pairing'],
        ['Walid Saleh','Systematic intratextual inversion of Saul'],
        ['Nevin Reda','Ṭālūt is a deliberate sanitizing pun'],
        ['Q 2:247–251','Rehabilitates Saul as faithful commander']
      ],
      quotes:[
        {by:'Qurʾān 2:249',en:'Indeed, Allah will test you with a river.',ref:'Surah al-Baqarah 2:249'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Hebrew Bible (Gideon vs. Saul)',
          items:[
            'Gideon: humble, obedient, trusts God, passes river test (Judges 7)',
            'Saul: starts humble, turns proud/disobedient, rejected (1 Sam 15)',
            'Deuteronomistic contrast favors Gideon over Saul'
          ]
        },
        right:{
          title:'Qurʾān 2.246–251 (Rehabilitated Ṭālūt)',
          items:[
            'Systematically reverses Deuteronomist’s negative portrait of Saul',
            'Punning name Ṭālūt highlights stature while sanitizing his image',
            'Ṭālūt leads the obedient river test and bridges directly to David'
          ]
        }
      },
      shots:[
        S('dr8-talut-1.webp','Typological comparison chart mapping Gideon (ideal leader) vs. Saul (flawed leader) in the Hebrew Bible across humility, obedience, faith, fear, and leadership.'),
        S('dr8-talut-2.webp','Second frame of the Gideon–Saul typological comparison leading into the Qurʾān’s deliberate inversion of the motif in King Ṭālūt.')
      ]
    }
  ),{
    who:'Cite Biblical typology & Walid Saleh',
    forkTitle:'If they insist it was accidental',
    forkSub:'Press the systematic inversion and literary punning in Ṭālūt'
  }),
  sum:'Judges and 1 Samuel already pair Gideon and Saul typologically, and Walid Saleh and Nevin Reda show Q 2:246–251 systematically inverts that typology—even via the punning name Ṭālūt—to rehabilitate Israel’s first king.'
});

/* ============================================================================
   4. NEW Tactical Playbook card: islam/quran/history/joseph-and-knives-12-31
      From joseph_knives (1421475839136235663)
   ============================================================================ */
const JK=DR('joseph-and-knives','1421475839136235663');

const jkTrapA=P(N(
  JK,
  'Wait—didn’t James Kugel trace the banquet-and-knives story through earlier Jewish Midrash Tanḥūmā stages before the Qurʾān?',
  'Joseph Witztum directly critiques Kugel’s reconstruction: those Jewish parallels are late sources, and none of them have Joseph already declared innocent before the banquet—the exact plot problem Q 12:31–35 uniquely resolves.',
  'Witztum’s critique of Kugel & distinctive Qurʾānic plot',
  [
    '01 · Late dating of Jewish parallels (Witztum n. 102): Witztum explicitly notes that the Jewish parallels adduced by Kugel (In Potiphar’s House, pp. 28–65)—including Midrash Tanḥūmā—come from late Jewish sources whose pre-Islamic dating cannot be assumed.',
    '02 · Unique Qurʾānic narrative necessity: In Q 12:25–29, Joseph’s innocence is already proven by the torn shirt; the banquet (v. 31) is structurally required to explain why an exonerated man is still sent to prison (v. 35)—a tension absent from all Jewish parallels.',
    '03 · Post-Islamic tafsīr & midrash cross-pollination: Specific flourishes like citrons (etrogim) and the name Zulaikha are absent from the Qurʾān and surface in late tafsīr (e.g. Muqātil b. Sulaymān, d. 767 CE) and redacted Tanḥūmā editions—pointing to post-Islamic elaboration rather than Qurʾānic borrowing.'
  ],
  ['Joseph Witztum (note 102, p. 213)','James Kugel, In Potiphar’s House, pp. 28–65','Midrash Tanḥūmā (Buber vs. standard editions)','Muqātil b. Sulaymān, Tafsīr'],
  [],
  {
    facts:[
      ['Witztum n. 102','Parallels are in late Jewish sources'],
      ['Q 12:28 vs. 35','Only Qurʾān declares Joseph innocent first'],
      ['No Citrons/Name','Qurʾān omits “etrog” and “Zulaikha”'],
      ['Tanḥūmā Redaction','Manuscript variations show late editing']
    ],
    quotes:[
      {by:'Joseph Witztum (p. 213, n. 102)',en:'In none of the parallel Jewish sources is Joseph previously declared to be innocent.',ref:'dr8-joseph-knives-1'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'James Kugel showed the Qurʾān is just a later stage of Jewish midrash like Tanḥūmā!',
  theyWho:'Watch out · if they say',
  who:'Cite Witztum n. 102 & late Tanḥūmā'
});

card('islam/quran/history/joseph-and-knives-12-31',{
  title:'Joseph, the Noblewomen & Knives: Copied from Midrash? (Q 12:31)',
  k:'Q 12:31 · Midrash Tanḥūmā',
  blurb:'Late dating of Midrash Tanḥūmā, post-Islamic tafsīr details (Zulaikha/citrons), and Witztum’s critique of Kugel.',
  claim:'Qurʾān 12:31’s scene of women cutting their hands with knives upon seeing Joseph was plagiarized from Midrash Tanḥūmā.',
  tree:P(N(
    JK,
    'The Qurʾān borrowed the story of Egyptian women cutting their hands with knives (12:31) from Jewish Midrash Tanḥūmā.',
    'That borrowing claim fails on chronology, textual criticism, and literary structure. As Joseph Witztum notes, the Jewish parallels (such as Midrash Tanḥūmā) are late, redacted texts—likely post-Islamic in those expansions—whereas the Qurʾān omits later midrashic/tafsīr details like citrons and “Zulaikha” while using the banquet to solve a plot tension unique to Surah Yūsuf.',
    'Chronology, redaction & Witztum’s critique of Kugel',
    [
      '01 · Late & redacted Jewish sources: Midrash Tanḥūmā exhibits textual variation (compare the Buber edition) and late redaction; details such as Potiphar’s wife being named Zulaikha or serving citrons (etrogim) appear in post-Islamic Jewish works and tafsīr (e.g. Muqātil b. Sulaymān), not in the Qurʾān itself.',
      '02 · Post-Islamic Jewish–Muslim exchange: Just as Muslim storytellers (e.g. narrations via Wahb ibn Munabbih) absorbed biblical/Christian lore, post-Islamic Jewish midrashists frequently elaborated stories in response to Muslim curiosity and Qurʾānic motifs—reversing the claimed direction of borrowing.',
      '03 · Distinct Qurʾānic function (Witztum vs. Kugel): On p. 213 (n. 102), Witztum faults Kugel for missing why Q 12:31 exists: unlike any Jewish parallel, Q 12 already declared Joseph innocent, so the women’s reaction explains why he still enters prison (Q 12:35).',
      '04 · Oral tradition & Aramaic claims: Even if an authentic oral motif circulated earlier, shared memory is not confusion—and late Aramaic poems (“imitation Aramaic”) provide no solid pre-Islamic proof.'
    ],
    ['Qurʾān 12:30–35','Joseph Witztum (p. 213, nn. 102–103)','Midrash Tanḥūmā (Buber edition)','Jewish Encyclopedia: Aramaic Language'],
    [jkTrapA],
    {
      facts:[
        ['Late Midrash','Tanḥūmā & parallels post-date or show late redaction'],
        ['Absent in Q 12.31','No “Zulaikha” and no “citrons (etrogim)”'],
        ['Witztum n. 102','Only Qurʾān explains imprisoning an innocent man'],
        ['Oral / Aramaic','Shared oral tradition ≠ plagiarism']
      ],
      quotes:[
        {by:'Joseph Witztum (p. 213, n. 102)',en:'Kugel compares the Quranic scene to several parallels in late Jewish sources.',ref:'dr8-joseph-knives-1'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Qurʾān 12.30–35 (Tight Narrative)',
          items:[
            'Joseph already proven innocent via the torn shirt (v. 28)',
            'Banquet uses generic fruit/food and knives—no citrons, no “Zulaikha”',
            'Resolves plot tension: why an innocent man is imprisoned (v. 35)'
          ]
        },
        right:{
          title:'Late Midrash & Post-Islamic Tafsīr',
          items:[
            'Midrash Tanḥūmā varies across editions (e.g. Buber) & shows redaction',
            'Adds citrons (etrogim) and later name Zulaikha (also in Muqātil)',
            'Lacks the prior exoneration of Joseph before the banquet'
          ]
        }
      },
      shots:[
        S('dr8-joseph-knives-1.webp','Page 213 (notes 102–103) from Joseph Witztum critiquing James Kugel and highlighting that only the Qurʾān declares Joseph innocent before the banquet.'),
        S('dr8-joseph-knives-2.webp','Scholarly excerpt comparing Muqātil b. Sulaymān’s citron/Zulaikha report with Midrash Tanḥūmā and asking whether Tanḥūmā actually predates Islam.')
      ]
    }
  ),{
    who:'Expose late midrash & Witztum’s point',
    forkTitle:'If they appeal to James Kugel',
    forkSub:'Show Witztum’s rebuttal and the missing prior exoneration'
  }),
  sum:'Midrash Tanḥūmā’s banquet parallels are late and redacted—adding post-Islamic details like citrons and Zulaikha absent from Q 12:31—while Witztum notes only the Qurʾān uses the scene to explain imprisoning an already-exonerated Joseph.'
});

/* ============================================================================
   5. NEW Tactical Playbook card: islam/creed/ibn-taymiyyah-misquotations
      From ibn_taymiya_misquotes (1427283650667348153)
   ============================================================================ */
const IT=DR('#ibn-taymiya-misquotations','1427283650667348153');

const itTrapA=P(N(
  IT,
  'Ibn Taymiyyah either taught the Gospels contain zero revelation—or else on Majmūʿ al-Fatāwā 13:103 he said the Torah and Gospel are uncorrupted!',
  'Both caricatures collapse when you read the whole page and his student Ibn al-Qayyim. On p. 103 Ibn Taymiyyah merely lists Qurʾānic verses before categorizing four views on p. 104—and Ibn al-Qayyim explicitly identifies Ibn Taymiyyah with the middle view that additions and minor verbal corruptions occurred.',
  'Four categories in Majmūʿ al-Fatāwā 13.103–105 & Ibn al-Qayyim',
  [
    '01 · Ibn al-Qayyim’s direct testimony (Ighāthat al-Lahfān, p. 656): Ibn al-Qayyim states that a third group took the middle path—holding that additions and minor verbal alterations occurred while most remained as revealed—and names “our Shaykh [Ibn Taymiyyah] in al-Jawāb al-Ṣaḥīḥ” as holding this exact position, citing the interpolation of “Isaac” into the sacrifice command.',
    '02 · True parts vs. false parts—not “zero waḥy”: Pointing out errors or interpolations in the Gospels does not mean Ibn Taymiyyah considered the entire Gospel devoid of revelation; rather, he affirmed preserved truths mixed with limited human alterations.',
    '03 · Four positions, not two (Majmūʿ al-Fatāwā 13.103–105): Polemicists (like John Fountain) quote p. 103 where Ibn Taymiyyah cites Qurʾānic verses about the Torah and Gospel, ignoring p. 104 where he explicitly lays out four distinct scholarly categories.'
  ],
  ['Ibn al-Qayyim, Ighāthat al-Lahfān, p. 656','Ibn Taymiyyah, Majmūʿ al-Fatāwā 13:103–105','Ibn Taymiyyah, al-Jawāb al-Ṣaḥīḥ'],
  [],
  {
    facts:[
      ['Ighāthat al-Lahfān 656','Names Ibn Taymiyyah’s “middle path”'],
      ['Concrete Example','Cites “Isaac” interpolated in Torah'],
      ['Majmūʿ 13:103–105','Lists 4 scholarly categories, not 2'],
      ['Mixed Corpus','Preserved truths + limited corruption']
    ],
    quotes:[
      {by:'Ibn al-Qayyim (Ighāthat al-Lahfān, p. 656)',en:'Additions were made to it and minor wordings were altered, yet most of it remains as it was revealed.',ref:'Ighāthat al-Lahfān, p. 656 (dr8-taymiya-1)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Majmūʿ al-Fatāwā 13:103 proves Ibn Taymiyyah believed the Bible is preserved—or else has zero revelation!',
  theyWho:'Watch out · if they say',
  who:'Show p. 104’s 4 categories & Ibn al-Qayyim'
});

card('islam/creed/ibn-taymiyyah-misquotations',{
  title:'Did Ibn Taymiyyah Affirm a Preserved Bible? (Misquotations Refuted)',
  k:'Taḥrīf · Ibn Taymiyyah',
  blurb:'Ibn al-Qayyim (Ighāthat al-Lahfān p. 656) and Majmūʿ al-Fatāwā 13:103–105 refute both “100% preserved” and “zero waḥy” caricatures.',
  claim:'Ibn Taymiyyah taught either that the Torah and Gospel remain completely uncorrupted or that the Gospels contain no revelation at all.',
  tree:P(N(
    IT,
    'Christian apologists cite Ibn Taymiyyah (Majmūʿ al-Fatāwā 13:103) to claim he believed the Bible is preserved—or flip it to say he thought the Gospels contain no revelation.',
    'Primary Arabic texts expose both claims as misreadings. Ibn al-Qayyim explicitly records in Ighāthat al-Lahfān (p. 656) that his teacher Ibn Taymiyyah held the “middle path”: the Torah and Gospel suffered additions and minor verbal alterations (such as inserting “Isaac” into Genesis 22), while retaining much of their original content—and in Majmūʿ al-Fatāwā 13:103–105 he maps four distinct categories, not two.',
    'Ibn al-Qayyim p. 656 & Majmūʿ al-Fatāwā 13.103–105',
    [
      '01 · Ibn al-Qayyim settles Ibn Taymiyyah’s view (p. 656): In Ighāthat al-Lahfān, Ibn al-Qayyim identifies Ibn Taymiyyah (citing al-Jawāb al-Ṣaḥīḥ) with the third “middle” group—explicitly affirming additions and minor verbal changes occurred in the scriptures, exemplified by inserting “Isaac” into the sacrifice command.',
      '02 · Neither “completely preserved” nor “alternate Gospel”: Misquoting Ibn Taymiyyah’s critique of Gospel errors as saying the Gospels contain zero waḥy misses his actual stance: previous scriptures preserve genuine truths alongside human corruption and additions.',
      '03 · Reading Majmūʿ al-Fatāwā 13.103 in context: Page 103 merely gathers Qurʾānic verses mentioning the Torah and Gospel (e.g. Q 5:43–47, 5:66, 5:68) before p. 104 introduces four separate scholarly views on textual vs. semantic corruption.',
      '04 · Consistent Atharī nuance: Affirming minor verbal taḥrīf alongside broader preservation of legal/monotheistic core aligns directly with Qurʾānic references to both remaining guidance and deliberate scribal tampering.'
    ],
    ['Ibn al-Qayyim, Ighāthat al-Lahfān, p. 656','Ibn Taymiyyah, Majmūʿ al-Fatāwā 13:103–105','Ibn Taymiyyah, al-Jawāb al-Ṣaḥīḥ'],
    [itTrapA],
    {
      facts:[
        ['Ibn al-Qayyim 656','Explicitly attributes “middle path” to Ibn Taymiyyah'],
        ['Majmūʿ 13:104','Outlines 4 views, not 2'],
        ['Verbal Alteration','Cites “Isaac” added in Genesis sacrifice'],
        ['Balanced Verdict','Mixed corpus: true parts + corruptions']
      ],
      quotes:[
        {by:'Ibn al-Qayyim (Ighāthat al-Lahfān, p. 656)',en:'Among those who chose this view is our Shaykh in his book al-Jawāb al-Ṣaḥīḥ.',ref:'Ighāthat al-Lahfān, p. 656'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemicist Caricatures (John Fountain)',
          items:[
            'Stops reading at Majmūʿ al-Fatāwā 13:103 (verse list)',
            'Reduces Ibn Taymiyyah’s taxonomy from 4 categories to 2',
            'Confuses criticizing Gospel errors with denying all waḥy in them'
          ]
        },
        right:{
          title:'Actual Primary Sources',
          items:[
            'Ighāthat al-Lahfān p. 656: middle path (additions + minor verbal change)',
            'Majmūʿ 13:104–105 systematically presents 4 distinct categories',
            'Affirms both preserved truth and real textual interpolations (e.g. Isaac)'
          ]
        }
      },
      shots:[
        S('dr8-taymiya-1.webp','Ibn al-Qayyim, Ighāthat al-Lahfān (p. 656), highlighted paragraph attributing the middle view (additions and minor verbal alteration) to Ibn Taymiyyah in al-Jawāb al-Ṣaḥīḥ.'),
        S('dr8-taymiya-2.webp','Ibn Taymiyyah, Majmūʿ al-Fatāwā (vol. 13, p. 103), listing Qurʾānic verses on the Torah and Gospel right before presenting the four scholarly categories on p. 104.')
      ]
    }
  ),{
    who:'Show p. 656 & Majmūʿ 13:103–105',
    forkTitle:'If they press either extreme',
    forkSub:'Expose the cut-off quotation at p. 103 and Ibn al-Qayyim’s testimony'
  }),
  sum:'Ibn al-Qayyim (Ighāthat al-Lahfān, p. 656) confirms Ibn Taymiyyah held that the Torah and Gospel underwent additions and minor verbal corruption while retaining preserved parts, and Majmūʿ al-Fatāwā 13:104 lists four categories—refuting both polemical extremes.'
});

/* ============================================================================
   6. NEW Tactical Playbook card: islam/quran/d-ia-alleged-contradictions/zakariya-muteness-sign
      From zakariya_punished (1424883656048119858)
   ============================================================================ */
const ZK=DR('#zakariya-not-being-punished','1424883656048119858');

const zkTrapA=P(N(
  ZK,
  'Isn’t the Qurʾān just misunderstanding Luke 1:20, where Gabriel punishes Zechariah with muteness for disbelieving?',
  'Not misunderstanding—deliberately correcting Luke’s Pauline theology. Luke framed Zechariah’s silence as a punitive symbol of a skeptical Old Covenant contrasted with Mary’s New Covenant faith, whereas the Qurʾān clears a righteous prophet of unbelief and presents the three-day silence he requested as an āyah (confirming sign).',
  'Deliberate correction of Luke’s Pauline covenant typology',
  [
    '01 · Luke’s Pauline Old-vs-New Covenant framing: In Luke 1, the parallel annunciations of John and Jesus serve a Pauline theological contrast: Zechariah represents the doubting Old Covenant (struck mute in punishment), while Mary represents the faithful New Covenant.',
    '02 · Qurʾānic rehabilitation of Zakariyyā: In Q 3:38–41 and Q 19:7–10, Zakariyyā asks the exact same natural question as Mary (“How can I have a son…?”) without unbelief—and receives a three-day silence he himself requested as a confirming sign (āyah), not a rebuke.',
    '03 · Consistent prophetic ethics: By stripping away Luke’s punitive contrast, the Qurʾān corrects both the primary Gospel narrative and later homiletic/commentary traditions while upholding prophetic innocence.'
  ],
  ['Qurʾān 3:38–41; 19:7–10','Luke 1:18–38'],
  [],
  {
    facts:[
      ['Luke 1 Framework','Contrasts “Old Covenant” doubt vs. “New” faith'],
      ['Q 3:41 & 19:10','Zakariyyā asks for an āyah (sign)'],
      ['Prophetic Honor','Both Zakariyyā & Mary treated as faithful'],
      ['Theological Shift','Corrects Pauline polemic in Luke’s narrative']
    ],
    quotes:[
      {by:'Qurʾān 19:10',en:'Your sign is that you will not speak to the people for three nights, [being] sound.',ref:'Surah Maryam 19:10'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The Qurʾān simply misread Luke 1:20, where Zechariah is punished for unbelief!',
  theyWho:'Watch out · if they say',
  who:'Expose Luke’s Pauline covenant contrast'
});

card('islam/quran/d-ia-alleged-contradictions/zakariya-muteness-sign',{
  title:'Why Wasn’t Zakariyyā Punished with Muteness? (Q 3:41; 19:10 vs. Luke 1:20)',
  k:'Q 3:41 · 19:10 · Luke 1',
  blurb:'Why the Qurʾān presents Zakariyyā’s three-day silence as a requested sign (āyah), correcting Luke’s Pauline Old-vs-New Covenant contrast.',
  claim:'Qurʾān 3:41 and 19:10 mistakenly turn Zechariah’s punishment for unbelief (Luke 1:20) into a requested sign.',
  tree:P(N(
    ZK,
    'In Luke 1:20, Zechariah is punished with muteness for doubting the angel—so the Qurʾān got the story wrong by turning it into a sign he asked for.',
    'Far from an error, this is a textbook case of the Qurʾān deliberately correcting a biblical narrative and its homiletic framework. Luke contrasts John’s and Jesus’s annunciations within a Pauline Old-vs-New Covenant polemic—casting Zechariah as skeptical Old Covenant and Mary as faithful New Covenant—whereas the Qurʾān clears Zakariyyā of unbelief and makes his three-day silence the confirming sign (āyah) he asked for.',
    'Qurʾānic correction of Luke’s Pauline annunciation contrast',
    [
      '01 · Luke’s Pauline covenant typology: Biblical scholarship recognizes that Luke 1 intentionally pairs the annunciations of John and Jesus to contrast the Old Covenant (Zechariah’s alleged unbelief and punitive muteness) against the New Covenant (Mary’s receptive faith).',
      '02 · Parallel questions, equal prophetic honor: In the Qurʾān, both Zakariyyā (Q 3:40; 19:8) and Mary (Q 3:47; 19:20) express natural human wonder at miraculous births without rejecting God’s power—making a punitive silencing for “unbelief” coherent with Luke’s polemic, not with Islamic prophetology.',
      '03 · A requested sign (āyah) in worship: In Q 3:41 and 19:10, Zakariyyā asks, “My Lord, appoint for me a sign,” and is told he will not speak to people for three days/nights while glorifying Allah morning and evening—turning an alleged punishment into a devotional sign.',
      '04 · Correcting primary texts & homilies: Just as in other prophetic narratives, the Qurʾān knowingly revises Luke’s text and the later Christian homiletic/commentary tradition built upon it.'
    ],
    ['Qurʾān 3:38–41; 19:7–10','Luke 1:18–38'],
    [zkTrapA],
    {
      facts:[
        ['Luke 1.18–20','Frames Zechariah via Pauline Old/New contrast'],
        ['Q 3.41 / 19.10','Three-day silence is a requested āyah (sign)'],
        ['Zakariyyā & Mary','Both ask natural questions; neither punished'],
        ['Textual Correction','Revises Luke & homiletic commentary traditions']
      ],
      quotes:[
        {by:'Qurʾān 3:41',en:'Your sign is that you will not speak to the people for three days except by gesture.',ref:'Surah Āl ʿImrān 3:41'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Luke 1 (Pauline Old/New Contrast)',
          items:[
            'John’s annunciation represents the Old Covenant',
            'Zechariah’s question is treated as culpable unbelief (v. 20)',
            'Contrasted with Mary representing the faithful New Covenant'
          ]
        },
        right:{
          title:'Qurʾān 3.41 & 19.10 (Confirming Sign)',
          items:[
            'Removes Pauline Old-vs-New Covenant polemic',
            'Zakariyyā and Mary both remain faithful, honored servants',
            'Silence is a requested āyah paired with glorifying Allah'
          ]
        }
      }
    }
  ),{
    who:'Show correction of Luke’s Pauline contrast',
    forkTitle:'If they call it a Qurʾānic mistake',
    forkSub:'Highlight Luke’s covenantal contrast between Zechariah and Mary'
  }),
  sum:'Qurʾān 3:41 and 19:10 deliberately correct Luke 1’s Pauline Old-vs-New Covenant contrast—clearing a righteous prophet of culpable unbelief and making his three-day silence a requested confirming sign (āyah).'
});

/* ============================================================================
   B1. add('islam/quran/d-ia-quran-surahs/t-surah-5116-refers-to-the-trinity', ...)
       From quran_5_116 (1368220564308627466)
   ============================================================================ */
const Q5116=DR('#quran-5-116','1368220564308627466');
add('islam/quran/d-ia-quran-surahs/t-surah-5116-refers-to-the-trinity',P(N(
  Q5116,
  'Beyond tiny fringe sects like the Collyridians, no mainstream Christians of the Prophet’s ﷺ era or early Church treated Mary as a divine or triadic power.',
  'Historical evidence overturns that objection twice over. During the 7th-century Byzantine–Persian war, Emperor Heraclius elevated Mary into a quasi-divine patron and goddess of war (replacing the Roman goddess Nike), deploying her icons in battle as an invincible guarantee—and earlier 1st–2nd century Sethian Gnostics explicitly formulated a Father–Mother–Son trinity in Nag Hammadi texts.',
  'Byzantine imperial Mariology under Heraclius & Sethian Father–Mother–Son trinity',
  [
    '01 · Byzantine war Mariology under Heraclius: During the existential crisis against Persia, Byzantine imperial propaganda under Heraclius transformed Mary into a quasi-divine war-patron replacing the Roman goddess Nike—carrying her icon or statue into battle with the belief that allegiance to her guaranteed invincibility and victory (linking directly to Q 5:17 and 5:116).',
    '02 · Skewing official dogma in practice: Even when out of step with formal conciliar formulas, treating Mary as a semi-divine protector capable of granting victory or defeat was a real, empire-wide phenomenon in the Prophet’s ﷺ own lifetime that the Qurʾān directly rebukes.',
    '03 · Earliest patristic triad (Sethian Trinity, 1st–2nd c.): Long before Nicaea, early Gnostic texts from the Nag Hammadi Library—such as The Tripartite Tractate and The Apocryphon of John (discussed by scholar Dr. David Litwa)—explicitly attest a triadic godhead of Father, Mother, and Son.'
  ],
  ['Qurʾān 5:17, 116','Byzantine Mariology under Heraclius (Surah al-Māʾidah study, p. 203)','Nag Hammadi Library: Tripartite Tractate & Apocryphon of John','Dr. M. David Litwa (Sethian Trinity)'],
  [],
  {
    facts:[
      ['Heraclius Era','Mary treated as war-patron replacing Nike'],
      ['Q 5:17 Link','Denies Jesus or Mary can shield from God'],
      ['Sethian Triad','1st–2nd c. Father–Mother–Son trinity'],
      ['Nag Hammadi','Tripartite Tractate & Apocryphon of John']
    ],
    quotes:[
      {by:'Surah al-Māʾidah Study (on Q 5:17, 116)',en:'During his reign Mary was virtually turned into a goddess of war.',ref:'dr8-q5116-2'},
      {by:'Qurʾān 5:17',en:'Who then has the power to prevent God… from destroying Christ, son of Mary, and his mother?',ref:'Surah al-Māʾidah 5:17 (dr8-q5116-1)'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Byzantine Political Mariology (7th c.)',
        items:[
          'Heraclius deployed Marian icons/statues in battle vs. Persia',
          'Mary treated as war-patron replacing Roman goddess Nike',
          'Directly addressed by Q 5:17 & 5:116 (“gods besides Allah”)'
        ]
      },
      right:{
        title:'Early Sethian Triad (1st–2nd c.)',
        items:[
          'Earliest attested Christian-era triad: Father, Mother, Son',
          'Preserved in Nag Hammadi Tripartite Tractate & Apocryphon of John',
          'Shows Marian/Mother-figure elevation wasn’t merely invented by Islam'
        ]
      }
    },
    shots:[
      S('dr8-q5116-1.webp','Academic commentary on Surah al-Māʾidah (p. 203, “Criticism of the political Mariology of Byzantium”) showing Q 5:17 strips Jesus and Mary of independent protective power.'),
      S('dr8-q5116-2.webp','Highlighted excerpt detailing how Emperor Heraclius elevated Mary into a quasi-divine goddess of war whose allegiance guaranteed battlefield invincibility.')
    ]
  }
),{
  optWho:'Pivot to imperial history · if they say',
  optLabel:'Only obscure fringe groups ever elevated Mary—never mainstream 7th-century Byzantium or early triads!',
  theyWho:'Pivot to imperial history · if they say',
  who:'Cite Heraclius’s war Mariology & Sethians'
}));

/* ============================================================================
   B2. add('islam/general/d-av-sonstiges-islam-2/c-maria-schwester-harun-aaron-imran', ...)
       From mary_sister_aaron (1368220659372527776)
   ============================================================================ */
const MSA=DR('#mary-sister-of-aaron','1368220659372527776');
add('islam/general/d-av-sonstiges-islam-2/c-maria-schwester-harun-aaron-imran',P(N(
  MSA,
  'Even with Muslim 2135, calling Mary “sister of Aaron” in Q 19:28 still looks like an anachronistic confusion with Miriam from Numbers 26:59.',
  'Then the Gospel of Luke convicts itself by the exact same standard. In Luke 1:5, Elizabeth—who lived over a millennium after Moses and Aaron—is explicitly called “of the daughters of Aaron,” proving that Semitic idiom routinely titles pious Israelites after an ancestral figure.',
  'Luke 1.5 double standard vs. Numbers 26.59 & Q 19.28',
  [
    '01 · The Luke 1.5 parallel: Luke 1:5 introduces Zechariah’s wife Elizabeth (Mary’s kinswoman in Luke 1:36) as a “daughter of Aaron” (ex thygaterōn Aarōn). Nobody accuses Luke of thinking Aaron lived in the 1st century BCE or was Elizabeth’s biological father.',
    '02 · Exposing the double standard on Numbers 26.59: Critics quote Numbers 26:59 (“To Amram she bore Aaron, Moses and their sister Miriam”) against Q 19:28 and Q 66:12, yet accept non-literal ancestral titles (“daughter of Aaron”, “son of David”) throughout the New Testament.',
    '03 · Consistent Semitic honorific: Combined with the Prophet’s ﷺ explicit answer in Ṣaḥīḥ Muslim 2135, Mary’s people appealing to her pious Aaronite/temple lineage (“Your father was not an indecent man…”) fits normal Hebrew-Aramaic and Arabic kinship usage.'
  ],
  ['Qurʾān 19:28; 66:12','Luke 1:5, 36','Numbers 26:59','Ṣaḥīḥ Muslim 2135','PonderingIslam (2019) & @jordanacademia0'],
  [],
  {
    facts:[
      ['Luke 1:5','Calls Elizabeth “of the daughters of Aaron”'],
      ['Numbers 26:59','Names Amram, Aaron, Moses & Miriam'],
      ['Q 19:28 Context','Rebukes her via moral/priestly ancestry'],
      ['Double Standard','Biblical kinship titles read idiomatically']
    ],
    quotes:[
      {by:'Qurʾān 19:28',en:'O sister of Aaron! Your father was not an indecent man, nor was your mother unchaste.',ref:'Surah Maryam 19:28 (dr8-mary-aaron-1)'},
      {by:'Numbers 26:59 (NIV)',en:'To Amram she bore Aaron, Moses and their sister Miriam.',ref:'Numbers 26:59 (dr8-mary-aaron-2)'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Bible (Luke 1:5 & Semitic Idiom)',
        items:[
          'Elizabeth (1st c. BCE) called “of the daughters of Aaron” (Luke 1:5)',
          'Jesus repeatedly called “Son of David” a millennium after David',
          'Universally read as ancestral/priestly lineage, not biological error'
        ]
      },
      right:{
        title:'Qurʾān 19:28 (“O Sister of Aaron”)',
        items:[
          'Explained by the Prophet ﷺ to Najrān monks (Muslim 2135)',
          'Appeals to Mary’s pious Aaronite heritage in Q 19:28',
          'Rejecting idiom here while accepting Luke 1:5 is a double standard'
        ]
      }
    },
    shots:[
      S('dr8-mary-aaron-1.webp','Qurʾān 19:28 (“O sister of Aaron! Your father was not an indecent man, nor was your mother unchaste”) showing the moral-lineage rebuke context.'),
      S('dr8-mary-aaron-2.webp','Numbers 26:59 (NIV) highlighted (“Aaron, Moses and their sister Miriam”), the passage critics cite while overlooking Luke 1:5’s “daughter of Aaron” idiom.')
    ]
  }
),{
  optWho:'Turn the tables · if they say',
  optLabel:'Numbers 26:59 proves Q 19:28 confused Jesus’s mother with Moses’s sister Miriam!',
  theyWho:'Turn the tables · if they say',
  who:'Spring the Luke 1:5 double standard'
}));

/* ============================================================================
   B3. add('islam/quran/history/dhul-qarnayn-wall', ...)
       Combining dhul_qarnayn_1 (1471176546160082954) + dhul_qarnayn_2 (1377585352843202641)
   ============================================================================ */
const DQ=DR('#dhul-qarnayn-1 / #dhul-qarnayn-2','1471176546160082954');
add('islam/quran/history/dhul-qarnayn-wall',P(N(
  DQ,
  'Even if the Syriac Neshānā differs, the three journeys—sunset spring, sun-exposed people, and barrier—still prove the Qurʾān drew on Alexander legends.',
  'Comparing the exact ancient geographic sources proves the reverse: on all three journeys, the Qurʾān aligns exclusively with Roman Latin encyclopedists (Pliny the Elder and Pomponius Mela)—who never mention Alexander visiting these sites—while systematically diverging from every Greek/Alexander source (Strabo, Arrian, Plutarch) and the Syriac Neshānā itself.',
  'Pliny & Pomponius Mela vs. Alexander traditions across all three journeys',
  [
    '01 · Libyan Sun Spring (Q 18.86): Pliny (Nat. Hist. ii. 103) and Pomponius Mela (i. 8) document the Siwa spring’s 24-hour thermal cycle—Mela explicitly confirming it steams at sundown and Pliny capturing both qirāʾāt senses (murky/warm), with zero mention of Alexander; by contrast, Greek sources placing Alexander at Siwa center on his pagan prayer to the sun-god Ammon, which Q 18 replaces with punishing kufr.',
    '02 · Indian Gymnosophists (Q 18.90): Only Pliny the Elder specifies the Gymnosophists standing naked and exposed to the sun without shelter (matching Q 18:90’s “no shield/cover”), whereas Pliny never claims Alexander visited them.',
    '03 · Caucasian Polyglossia (Q 18.93): Only Strabo and Pliny describe Caucasian linguistic diversity, and Pliny alone stresses needing dozens of interpreters—matching Q 18:93 (“scarcely understand speech”) without linking Alexander to the Caucasus.',
    '04 · Collapse of the imaginary Syriac intermediary: The Siwa sun spring vanished from Christian, Jewish, and Syriac literature centuries before Islam, and the Syriac Neshānā gets these details wrong—proving the Qurʾān did not borrow from the Neshānā or any Alexander-based tradition.'
  ],
  ['Pliny the Elder, Naturalis Historia ii. 103 (plus Gymnosophists & Caucasus)','Pomponius Mela, De Chorographia i. 8','Silius Italicus iii. 669; Ovid Met. xv. 309; Lucretius vi. 848','History of the Life and Reign of Alexander, p. 396 (Mr. Good on Lucretius)','Academia.edu: Did the Qurʾān borrow from the Syriac Legend of Alexander?'],
  [],
  {
    facts:[
      ['Latin Sources','Pliny & Mela omit Alexander’s visits'],
      ['Siwa Spring','Steams at sundown (Mela); absent in Neshānā'],
      ['Q 18:90 / 93','Matches Pliny on sun-exposure & interpreters'],
      ['Ammon Omitted','Replaces pagan prayer with punishing kufr']
    ],
    quotes:[
      {by:'History of the Life and Reign of Alexander (p. 396)',en:'Of the existence of this curious fountain there can be no doubt… described by Pliny, ii. 103; and Pomponius Mela, i. 8.',ref:'Google Books, p. 396'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Greek Alexander / Syriac Neshānā',
        items:[
          'Ties Alexander to Siwa via pagan prayer to sun-god Ammon',
          'Strabo omits Pliny’s detail on dozens of Caucasian interpreters',
          'Neshānā lacks the Latin geographic specifics and errs on details'
        ]
      },
      right:{
        title:'Qurʾān 18.86–98 & Latin Geographers',
        items:[
          'Matches Pliny & Mela (who never mention Alexander at these sites)',
          'Mela confirms Siwa spring steams at sundown; Pliny fits both qirāʾāt',
          'Pliny alone notes naked sun-exposed ascetics & Caucasian interpreters'
        ]
      }
    }
  }
),{
  optWho:'Pivot to Classical geography · if they say',
  optLabel:'Even without the Neshānā, the three journeys still trace back to Alexander legends!',
  theyWho:'Pivot to Classical geography · if they say',
  who:'Show Pliny & Mela omit Alexander'
}));

/* ============================================================================
   B4. add('christianity/jesus/d-dr-jesus-never-said-ahmed', ...)
       From ahmed_argument (1471176641672904969)
   ============================================================================ */
const AH8=DR('#ahmed-argument','1471176641672904969');
add('christianity/jesus/d-dr-jesus-never-said-ahmed',P(N(
  AH8,
  'Wait—claiming Paráklētos came from Periklytós fails because zero Greek manuscripts ever read Periklytós!',
  'You do not need a manuscript change from paráklētos to periklytós at all. Classical Greek phonology confirms that klētós and kleitós (“praised”) already merged in pronunciation, while the prefix para- carries the attested Hellenistic/LXX/NT sense of “in excess / surpassing”—giving paráklētos itself the exact semantic force of “praised in excess” (Aḥmad).',
  'Greek klētós/kleitós merger & para- meaning “in excess”',
  [
    '01 · Phonetic merger of klētós and kleitós (Dr. Elizabeth Dawes): In The Pronunciation of Greek (p. 35), British classical scholar Elizabeth Dawes proves that from the late 3rd century BCE onward η, ει, and ι converged in sound—explicitly listing κλητός (klētós) and κλειτός (kleitós, “praised/renowned”) as interchangeable in classical times.',
    '02 · Prefix para- meaning “in excess” (Hellenistic & LXX/NT): Professor Despina Chila-Markopoulou (pp. 179–192) confirms para- carried the sense of “excess” since Hellenistic Greek (e.g. parageráō), echoed in classical pareudokiméō (“to surpass in fame”)—mirroring the comparative morphology of Arabic Aḥmad (“more/surpassingly praised”).',
    '03 · Septuagint & New Testament lexical confirmation: Septuagint authorities Cécile Dogniez and Marguerite Harl (BA 5:330) affirm para- denotes “excess” in LXX verbs like parorgízō, paroxýnō, and parathermaínō, while Abbott-Smith’s Manual Greek Lexicon of the New Testament (p. 336) defines para- in NT parorgízō as “above measure.”'
  ],
  ['Elizabeth Dawes, The Pronunciation of Greek, p. 35','Despina Chila-Markopoulou, “Grammaticalisation and Lexicalisation”, pp. 179–192','C. Dogniez & M. Harl, La Bible d’Alexandrie (BA 5:330), p. 36','Abbott-Smith, Manual Greek Lexicon of the NT, p. 336'],
  [],
  {
    facts:[
      ['Elizabeth Dawes p. 35','η and ει merged: κλητός ↔ κλειτός'],
      ['Para- Sense','Means “in excess / above measure”'],
      ['Dogniez & Harl','Confirm LXX excess sense (BA 5:330)'],
      ['Pareudokiméō','“To surpass in fame” = Aḥmad parallel']
    ],
    quotes:[
      {by:'C. Dogniez & M. Harl (BA 5:330)',en:'The prefix παρα- in front of verbs like παραπικραίνω, παροργίζω and παροξύνω indicates “transgression” or “excess”.',ref:'Lexical Dependence (dr8-ahmed-2)'}
    ],
    visual:{
      kind:'steps',
      items:[
        ['1. Second Element (-klētos / -kleitos)','Dawes (p. 35): η = ει from 3rd c. BCE made klētós and kleitós (“praised”) phonetically interchangeable.'],
        ['2. Prefix (para- = “in excess”)','Chila-Markopoulou, Dogniez & Harl, and Abbott-Smith (p. 336) attest para- as “excess / above measure.”'],
        ['3. Combined Meaning (“Praised in Excess”)','Para- + klētos/kleitos mirrors Arabic Aḥmad (“more praised”) without requiring any MS emendation.']
      ]
    },
    shots:[
      S('dr8-ahmed-1.webp','Dr. Elizabeth Dawes, The Pronunciation of Greek (p. 35), documenting the phonetic/orthographic interchange between κλητός (klētós) and κλειτός (kleitós) from the 3rd century BCE.'),
      S('dr8-ahmed-2.webp','Footnote 68 citing Septuagint scholars Cécile Dogniez and Marguerite Harl (BA 5:330) confirming that the Greek prefix παρα- indicates “excess” in compound verbs.')
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'No Greek manuscript reads periklytós instead of paráklētos—so the Aḥmad link fails!',
  theyWho:'Watch out · if they say',
  who:'Show para- + klētós/kleitós itself means Aḥmad'
}));

})();
