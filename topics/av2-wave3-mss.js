/* Averroes 2 Wave 3 (1st- and 2nd-Century AH Qurʾānic Manuscripts & Paleography) — 2026-11-22.
   Translates and synthesizes 29 German Averroes 2 channels into 7 comprehensive Tactical Debate Playbook
   cards under islam/quran/preservation/. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('av2-wave3-mss: no card',key); };

const AV2=(sub,id)=>({credit:'Averroes 2 · '+sub,link:'https://discord.com/channels/1295033866385358860/'+id});

/* ============================================================================
   1. NEW Tactical Playbook card: islam/quran/preservation/hijazi-orthography-and-codex-parisino
      Combines: orthographie_mss (1390052161911656569), parisino_petropolitanus (1390070741503840397),
      codex_arabe_328c (1391425721842270399), codex_arabe_330 (1391426024469954571),
      codex_arabe_331 (1391122851633041538), codex_arabe_6140a (1391428272201404617)
   ============================================================================ */
const ORTH=AV2('#orthographie-früher-mansukripte · #parisino-codex · #codex-arabe-328c','1390070741503840397');
const ORTH_PERF=AV2('#orthographie-früher-mansukripte','1390052161911656569');
const ORTH_328C=AV2('#codex-arabe-328c · #codex-arabe-331','1391425721842270399');
const ORTH_330=AV2('#codex-arabe-330 · #codex-arabe-6140a','1391426024469954571');

const orthTrapA=P(N(
  ORTH_PERF,
  'Arabic script had no diacritical dots or long vowels until al-Ḥajjāj ibn Yūsuf (d. 714 CE) invented them—so any dotted Qurʾān manuscript must be late, and early unpointed codices were unreadable.',
  'The bilingual Greek-Arabic papyrus PERF 558—securely synchronized to 25–26 April 643 CE (22 AH)—already contains diacritical dots on six consonants (ج، خ، ذ، ز، ش، ن), long vowels (ā, ī, ū), and alif maqṣūra. Alan Jones showed that dots existed two generations before al-Ḥajjāj, and early Qurʾānic scribes omitted them by deliberate formal choice, not ignorance.',
  'Why PERF 558 (22 AH / 643 CE) refutes the late-diacritics hypothesis (Alan Jones)',
  [
    '01 · Synchronized bilingual dating (22 AH / April 643 CE): Issued in Ihnās (Herakleopolis, Egypt) as a receipt for 65 sheep requisitioned by Muslim troops, PERF 558 bears both an Islamic date (22 AH) and a Byzantine date (30 Pharmouthi, Indiction Year 1), fixing it to 25–26 April 643 CE—the oldest complete dated Arabic document.',
    '02 · Early diacritical dots & long vowels: The Arabic text already dots six letters (jīm, khāʾ, dhāl, zāy, shīn, nūn) and writes long vowels (ā, ī, ū) alongside alif maqṣūra—demolishing the standard Orientalist theory that al-Ḥajjāj ibn Yūsuf (d. 714 CE) introduced these features.',
    '03 · Deliberate formal style in early Qurʾāns: Because full pointing was already available in 22 AH administrative papyri, the sparse pointing in 1st-century Ḥijāzī Qurʾāns reflects a deliberate, elevated liturgical register designed to accommodate canonical readings—forcing an earlier re-evaluation of dotted Qurʾān manuscripts.'
  ],
  ['Alan Jones, "The Dotting of a Script and the Dating of an Era: The Strange Neglect of PERF 558" (Islamic Culture, 1998)','Papyrus PERF 558 (Erzherzog Rainer Collection, Vienna, dated 22 AH / 25–26 April 643 CE)'],
  [],
  {
    facts:[
      ['Document','Papyrus PERF 558 (Greek & Arabic receipt)'],
      ['Exact Date','22 AH / 25–26 April 643 CE (Ihnās, Egypt)'],
      ['Dotted Letters','ج، خ، ذ، ز، ش، ن plus long vowels & alif maqṣūra'],
      ['Impact','Dots predated al-Ḥajjāj (d. 714) by 70+ years']
    ],
    quotes:[
      {by:'Alan Jones (on Papyrus PERF 558)',en:'Diacritical dots, long vowels, and stylistic maturity existed in dated Arabic writing by 22 AH / 643 CE—at least two generations earlier than commonly claimed.',ref:'Study on PERF 558'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Diacritical dots and long vowels were only invented under al-Ḥajjāj (d. 714 CE), so early Arabic script was too defective to preserve the Qurʾān!',
  theyWho:'Watch out · if they say',
  who:'Cite Papyrus PERF 558 (22 AH / 643 CE) & Alan Jones'
});

const orthTrapB=P(N(
  ORTH_328C,
  'The Birmingham leaves (Mingana 1572a) are just two isolated pages, and Codex Parisino-Petropolitanus has spelling variations and a different reading—proving the early Qurʾān was fragmented and unstable.',
  'Alba Fedeli (2011) proved that Birmingham Mingana 1572a (C14-dated 568–645 CE at 95.4%) belongs to the exact same 18-folio Ḥijāzī codex as BnF Arabe 328c (~8.3% of the Qurʾān). Meanwhile, Codex Parisino-Petropolitanus (98 folios, ~46% of the Qurʾān) and Codex Arabe 331 (88 folios, ~28.5%, C14 652–694 CE at 89.3%) preserve the standard ʿUthmānic text, with Parisino-Petropolitanus reflecting the canonical Syrian reading (qirāʾa) of Ibn ʿĀmir.',
  'Codex Arabe 328c + Birmingham 1572a, Parisino-Petropolitanus & Arabe 331',
  [
    '01 · Codex Arabe 328c + Birmingham Mingana 1572a (~8.3% of the Qurʾān): Identified by Alba Fedeli (2011) as a single 18-folio parchment codex (33.3 × 24.5 cm, 23–25 lines/page, brown ink, Ḥijāzī script, 4–6 dots at verse ends, colored palm-leaf/mesh sūra bands): 16 folios in Paris (BnF Arabe 328c: Q 10.35–11.110 on fols. 1r–7v; Q 20.99–23.27 on fols. 8r–16v) and 2 folios in Birmingham (Mingana 1572a: Q 18.17–31 and Q 19.91–20.40). Oxford radiocarbon testing (2015) dated the parchment to 568–645 CE (95.4% probability).',
    '02 · Codex Parisino-Petropolitanus (~46% of the Qurʾān, 98 folios): Dated by François Déroche to the 3rd quarter of the 7th century CE (2nd half of the 1st century AH; Sergio Noja Noseda: 1st century AH). Measuring 33 × 24 cm (written area 30 × 20.5 cm) and copied by five scribes in slender, right-leaning Ḥijāzī script with red dotted alifs every 5 verses, its 98 surviving folios (out of ~210–220) cover parts of Sūras 2–72 across Paris (BnF Arabe 328a & 328b), St. Petersburg (NLR Marcel 18/1), the Vatican (BAV), and London (Khalili Collection). Yasin Dutton demonstrated that its minor orthographic variants (e.g., omitting wāw in Q 2.191) simply reflect the canonical Syrian qirāʾa of Ibn ʿĀmir.',
    '03 · Codex Arabe 331 (~28.5% of the Qurʾān, 88 folios): Originally dated to the late 8th century, radiocarbon testing placed this large unornamented Ḥijāzī codex (41.3 × 34.8 cm, brown ink, oblique verse strokes, abjad numerals in circles every 10th verse) in 652–763 CE (95.4%), with an 89.3% probability of 652–694 CE (spanning ʿUthmān, ʿAlī, and early Umayyads) vs. only 6.1% for 747–763 CE. Its 88 folios (covering Sūras 2, 4, 6, 7, 8, etc.) are split between Paris (BnF, 56 fols.), St. Petersburg (NLR, 26 fols.), Leiden (2 fols.), Chicago Oriental Institute (2 fols.), UPenn Museum (1 fol.), and Nabécor Enchères (1 fol.).'
  ],
  ['François Déroche, La transmission écrite du Coran dans les débuts de l’islam: Le codex Parisino-petropolitanus (2009)','Yasin Dutton, "An Early Muṣḥaf According to the Reading of Ibn ʿĀmir" (Journal of Qur’anic Studies 3, 2001)','Alba Fedeli, "The Provenance of the Manuscript Mingana Islamic Arabic 1572" (Manuscripta Orientalia 17, 2011)','Sergio Noja Noseda, Sources de la transmission manuscrite du texte coranique (1998)'],
  [],
  {
    facts:[
      ['Arabe 328c + 1572a','18 fols. (~8.3% Qurʾān), Oxford C14: 568–645 CE (95.4%)'],
      ['Parisino-Petrop.','98 fols. (~46% Qurʾān, Sūras 2–72), 3rd qtr 7th c. CE'],
      ['Yasin Dutton','Follows canonical Syrian reading of Ibn ʿĀmir (e.g. Q 2.191)'],
      ['Codex Arabe 331','88 fols. (~28.5% Qurʾān), C14: 652–694 CE (89.3% prob.)']
    ],
    quotes:[
      {by:'Yasin Dutton (on Codex Parisino-Petropolitanus)',en:'Its orthographic features and minor variants match the canonical Syrian reading (qirāʾa) of Ibn ʿĀmir rather than any non-ʿUthmānic text.',ref:'Journal of Qur’anic Studies 3 (2001)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The Birmingham folio is just two pages, and Codex Parisino-Petropolitanus has variants that depart from today’s Qurʾān!',
  theyWho:'Watch out · if they say',
  who:'Show how Arabe 328c, Parisino-Petropolitanus & Arabe 331 interlock'
});

const orthTrapC=P(N(
  ORTH_330,
  'Outside a couple of famous showpiece codices, we lack wider 1st-century Ḥijāzī witnesses across different regions.',
  'Additional 1st-century AH Ḥijāzī codices like Codex Arabe 330g (43 folios covering ~21% of the Qurʾān across five collections) and the Syrian-origin Codex Arabe 6140a (10 folios covering portions of seven sūras across Istanbul, Paris, and Cambridge) confirm the same unadorned, standardized ʿUthmānic text across Egypt and Syria.',
  'Codex Arabe 330g (~21% of the Qurʾān) and Codex Arabe 6140a (Syrian Ḥijāzī witness)',
  [
    '01 · Codex Arabe 330g (~21% of the Qurʾān, 43 folios): Dated to the 1st century AH (~622–719 CE), this plain, unornamented Ḥijāzī parchment codex (35.5 × 28.5 cm) preserves ~21% of the Qurʾānic text across 43 folios distributed among five institutions: Bibliothèque Nationale, Paris (20 fols.), National Library of Russia, St. Petersburg (12 fols.), Rennes Enchères private collection (6 fols.), Chester Beatty Library, Dublin (4 fols.), and Beit al-Qurʾān, Manama, Bahrain (1 fol.).',
    '02 · Codex Arabe 6140a (10 folios, Syrian 1st-century AH witness): A 1st-century AH (7th–early 8th century CE) Ḥijāzī parchment manuscript (22–25 lines per page) of probable Syrian (Damascus) provenance. Its 10 surviving folios preserve sections from seven sūras (Sūras 7, 8, 9, 27, 28, 30, and 31—under 5% of the total text) divided across collections in Istanbul, Paris, and Cambridge.'
  ],
  ['François Déroche, Catalogue des manuscrits arabes: Les manuscrits du Coran (Bibliothèque Nationale, Paris, 1983)','Corpus Coranicum & Islamic Awareness Database (Codex Arabe 330g & Codex Arabe 6140a)'],
  [],
  {
    facts:[
      ['Codex Arabe 330g','43 fols. (~21% Qurʾān), 35.5 × 28.5 cm, 1st c. AH'],
      ['330g Locations','Paris (20), St. Petersburg (12), Rennes (6), Dublin (4), Bahrain (1)'],
      ['Codex Arabe 6140a','10 fols. (Sūras 7–9, 27–28, 30–31), 22–25 lines/page'],
      ['6140a Provenance','Syrian (Damascus) origin; held in Istanbul, Paris & Cambridge']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Those are just isolated Egyptian finds; we don’t have broader 1st-century Ḥijāzī manuscripts confirming the same text!',
  theyWho:'Watch out · if they say',
  who:'Cite Codex Arabe 330g (43 fols.) & Syrian Codex Arabe 6140a'
});

card('islam/quran/preservation/hijazi-orthography-and-codex-parisino',{
  title:'1st-Century AH Ḥijāzī Orthography, PERF 558 & the Parisino-Petropolitanus Group',
  k:'Paleography · PERF 558 · BnF Arabe 328a–c, 330g, 331, 6140a',
  blurb:'Papyrus PERF 558 (22 AH / 643 CE), Codex Parisino-Petropolitanus (~46% Qurʾān), Arabe 328c + Birmingham 1572a (C14 568–645 CE), Arabe 331 (C14 652–694 CE), Arabe 330g (~21%) & Arabe 6140a.',
  claim:'Early Arabic script lacked dots and vowels until the 8th century, and 1st-century Qurʾān fragments are too tiny and divergent to prove early textual stability.',
  tree:P(N(
    ORTH,
    'Early Arabic script was too defective to record the Qurʾān reliably until al-Ḥajjāj added dots in the 8th century, and surviving 7th-century fragments cover only tiny scraps of text.',
    'Dated bilingual papyrus PERF 558 proves Arabic already had diacritical dots and long vowels by 22 AH (April 643 CE), while the 1st-century AH Ḥijāzī codices from Fusṭāṭ and Syria—led by Codex Parisino-Petropolitanus (98 folios, ~46% of the Qurʾān), Codex Arabe 331 (88 folios, ~28.5%, C14 652–694 CE), Codex Arabe 330g (43 folios, ~21%), and Codex Arabe 328c + Birmingham Mingana 1572a (18 folios, ~8.3%, C14 568–645 CE)—jointly preserve massive overlapping portions of the standard ʿUthmānic text.',
    'How PERF 558 and the 1st-century Ḥijāzī BnF Arabe codices establish 7th-century textual stability',
    [
      '01 · PERF 558 proves pre-ʿUthmānic diacritics & vowels (22 AH / 25–26 April 643 CE): As Alan Jones demonstrated, this bilingual Greek-Arabic sheep-requisition receipt from Ihnās, Egypt, already dots six consonants (ج، خ، ذ، ز، ش، ن) and writes long vowels (ā, ī, ū) and alif maqṣūra—proving al-Ḥajjāj ibn Yūsuf (d. 714 CE) did not invent pointing and that early Qurʾānic scribes used sparse pointing as a deliberate formal convention.',
      '02 · Codex Parisino-Petropolitanus (98 folios, ~46% of the Qurʾān): Preserved in the ʿAmr ibn al-ʿĀṣ Mosque in Fusṭāṭ before being split between Paris (BnF Arabe 328a–b), St. Petersburg (Marcel 18/1), the Vatican, and London (Khalili), this 33 × 24 cm Ḥijāzī parchment codex (dated by Déroche to the 3rd quarter of the 7th century CE; written by 5 hands with red 5-verse alif markers) covers Sūras 2–72 and follows the canonical Syrian reading of Ibn ʿĀmir (Yasin Dutton).',
      '03 · Radiocarbon-anchored sister codices (Arabe 328c + Mingana 1572a & Arabe 331): Alba Fedeli (2011) reunited 16 folios of BnF Arabe 328c with 2 folios of Birmingham Mingana 1572a (18 folios total, ~8.3% of the Qurʾān, covering parts of Sūras 10–11 and 18–23; Oxford C14: 568–645 CE at 95.4%). Likewise, Codex Arabe 331 (88 folios across Paris, St. Petersburg, Leiden, Chicago, UPenn, and Nabécor; 41.3 × 34.8 cm, ~28.5% of the Qurʾān) radiocarbon-dates to 652–694 CE with 89.3% probability (95.4% overall: 652–763 CE).',
      '04 · Supporting 1st-century Ḥijāzī codices (Arabe 330g & Arabe 6140a): Codex Arabe 330g preserves 43 folios (~21% of the Qurʾān, 35.5 × 28.5 cm) across Paris (20), St. Petersburg (12), Rennes (6), Dublin (4), and Bahrain (1), while the Syrian-origin Codex Arabe 6140a preserves 10 folios (22–25 lines/page, parts of Sūras 7–9, 27–28, 30–31) across Istanbul, Paris, and Cambridge.'
    ],
    ['Alan Jones, Study on Papyrus PERF 558 (22 AH / 643 CE)','François Déroche, Le codex Parisino-petropolitanus (2009)','Yasin Dutton, Journal of Qur’anic Studies 3 (2001)','Alba Fedeli, Manuscripta Orientalia 17 (2011)','Oxford Radiocarbon Accelerator Unit (2015) & Corpus Coranicum'],
    [orthTrapA,orthTrapB,orthTrapC],
    {
      facts:[
        ['PERF 558','Dated 22 AH / April 643 CE with 6 dotted consonants & long vowels'],
        ['Parisino-Petrop.','98 fols. (~46% Qurʾān, Sūras 2–72), 3rd quarter 7th c. CE'],
        ['Arabe 328c + 1572a','18 fols. (~8.3% Qurʾān), Oxford C14: 568–645 CE (95.4%)'],
        ['Arabe 331 & 330g','88 fols. (~28.5%, C14 652–694 CE) + 43 fols. (~21% Qurʾān)']
      ],
      quotes:[
        {by:'Alan Jones (on Papyrus PERF 558)',en:'PERF 558 revolutionizes our understanding of early Arabic script: diacritical dots and vowels existed by 22 AH / 643 CE.',ref:'Study on PERF 558'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Revisionist Claim',
          items:[
            'Assumes Arabic lacked dots & vowels until al-Ḥajjāj (d. 714 CE)',
            'Dismisses 7th-century Qurʾāns as tiny, isolated fragments',
            'Treats orthographic variants as proof of textual chaos'
          ]
        },
        right:{
          title:'1st-Century Manuscript Evidence',
          items:[
            'PERF 558 (22 AH / 643 CE) already uses consonant dots & long vowels',
            'Parisino-Petropolitanus (46%), Arabe 331 (28.5%) & 330g (21%) span the Qurʾān',
            'Variants match canonical readings like Ibn ʿĀmir (Yasin Dutton)'
          ]
        }
      }
    }
  ),{
    who:'Present PERF 558 & the 1st-century Ḥijāzī codices',
    forkTitle:'Three follow-up objections they raise',
    forkSub:'Refute the late-diacritics myth, unpack Birmingham/Parisino variants, or cite Arabe 330g & 6140a'
  }),
  sum:'Papyrus PERF 558 proves Arabic consonant dotting and long vowels existed by 22 AH / 643 CE, while five 1st-century AH Ḥijāzī codices led by Parisino-Petropolitanus (~46%), Arabe 331 (~28.5%), Arabe 330g (~21%), and Arabe 328c + Mingana 1572a (~8.3%) confirm the early stability of the ʿUthmānic text.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: islam/quran/preservation/sanaa-palimpsest-and-mingana-palimpsest
      Combines: sanaa_1 (1390069617421975582), sanaa_2 (1391117538741456968),
      mingana_palimpsest (1391437784627019857)
   ============================================================================ */
const SAN=AV2('#sana-manuskirpt · #sana-manuskript-2 · #mingana-palimpsest','1390069617421975582');
const SAN_1=AV2('#sana-manuskirpt','1390069617421975582');
const SAN_2=AV2('#sana-manuskript-2','1391117538741456968');
const SAN_MING=AV2('#mingana-palimpsest','1391437784627019857');

const sanTrapA=P(N(
  SAN_1,
  'The lower text (scriptio inferior) of the Ṣanʿāʾ I palimpsest differs from today’s Qurʾān—proving the Qurʾān was still being rewritten and invented after Muḥammad!',
  'Radiocarbon analyses date the Ṣanʿāʾ I parchment to 606–649 CE (95.4% probability, 2019)—right in the lifetime of the Prophet’s Companions. Its lower text (scriptio inferior) exhibits Companion-codex variants matching early Islamic reports about Ibn Masʿūd’s pre-ʿUthmānic text, while its upper text (scriptio superior) was washed and overwritten with the standard ʿUthmānic text across 81 surviving folios (~41% of the Qurʾān). Far from disproving Islamic history, Ṣanʿāʾ I physically confirms the classical Muslim account of ʿUthmānic standardization.',
  'Why the Ṣanʿāʾ I palimpsest confirms Companion codices and ʿUthmānic standardization',
  [
    '01 · Radiocarbon dating to the Companions’ era (606–649 CE): Discovered in 1972 in the Great Mosque of Ṣanʿāʾ (Yemen), the parchment yielded a 68% C14 range of 614–656 CE (95% range: 578–669 CE), while newer 2019 radiocarbon analyses date it to 606–649 CE with 95.4% probability—placing the manuscript directly in the era of the Companions.',
    '02 · 81 folios covering ~41% of the Qurʾān: Both the erased lower text (scriptio inferior) and the rewritten upper text (scriptio superior) contain roughly 41% of the Qurʾān across 81 extant folios.',
    '03 · Empirical confirmation of pre-ʿUthmānic Companion variants: Whereas the upper text reproduces the standard ʿUthmānic rasm, the lower text preserves non-canonical variants that correspond to early Islamic reports of Companion codices such as that of ʿAbd Allāh ibn Masʿūd—proving both that the core Qurʾānic revelation already existed before 650 CE and that ʿUthmān’s standardization replaced Companion copies exactly as Islamic tradition records.'
  ],
  ['Behnam Sadeghi & Mohsen Goudarzi, "Ṣanʿāʾ 1 and the Origins of the Qurʾān" (Der Islam 87, 2012)','Corpus Coranicum Radiocarbon Analysis (2019: 606–649 CE at 95.4%)','Islamic Awareness, "Codex Ṣanʿāʾ I — A Qurʾānic Manuscript From 1st Century Hijra"'],
  [],
  {
    facts:[
      ['Discovery & Scope','1972 Great Mosque of Ṣanʿāʾ; 81 folios (~41% of Qurʾān)'],
      ['C14 Dating (2019)','606–649 CE (95.4% prob.); earlier C14: 614–656 CE (68%)'],
      ['Lower Text','Pre-ʿUthmānic variants matching Companion codices (Ibn Masʿūd)'],
      ['Upper Text','Standard ʿUthmānic Qurʾān overwritten in the 1st c. AH']
    ],
    quotes:[
      {by:'Summary on Codex Ṣanʿāʾ I',en:'The lower script preserves pre-ʿUthmānic variants matching Companion reports like Ibn Masʿūd, while the upper script conforms to the standard ʿUthmānic Qurʾān.',ref:'Codex Ṣanʿāʾ I Analysis'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The lower text of the Ṣanʿāʾ palimpsest has variants, proving the Qurʾān was still changing in the 7th century!',
  theyWho:'Watch out · if they say',
  who:'Show how Ṣanʿāʾ I (606–649 CE) validates the ʿUthmānic standardization account'
});

const sanTrapB=P(N(
  SAN_2,
  'What if the standard ʿUthmānic text in Yemen only appeared much later, after the palimpsest was erased?',
  'A second 1st-century AH manuscript from the very same mosque—Codex Ṣanʿāʾ DAM 01-29.1, studied by Alba Fedeli, Gerd-R. Puin, Hans-Caspar Graf von Bothmer, and Christian Robin—was radiocarbon-dated by ETH Zürich (Corpus Coranicum, 2019) to 633–665 CE and preserves ~22% of the standard ʿUthmānic Qurʾān in unvocalized Ḥijāzī script.',
  'Codex Ṣanʿāʾ DAM 01-29.1: ~22% of the ʿUthmānic Qurʾān C14-dated to 633–665 CE',
  [
    '01 · ETH Zürich / Corpus Coranicum C14 dating (633–665 CE): Radiocarbon tests on Codex Ṣanʿāʾ DAM 01-29.1 yielded 638–669 CE (95.4%) for Folios 7/8 and 615–660 CE (95.4%; Lyon 68%: 603–662 CE) for Folio 13, giving a combined 1st-century AH date of 633–665 CE.',
    '02 · ~22% of the Qurʾān across 29 sūras: Written in Ḥijāzī script by at least two scribal hands without vowel signs, DAM 01-29.1 covers roughly 22% of the Qurʾān across Sūras 2–8, 14–17, 19–22, 33–34, 36–37, 39–40, 42–53, 69–74, and 80–89.',
    '03 · Studied by leading Western specialists: Examined by Alba Fedeli, Gerd-R. Puin, Hans-Caspar Graf von Bothmer, and Christian Robin, DAM 01-29.1 proves that the standard ʿUthmānic text was already circulating in Yemen during the mid-7th century CE.'
  ],
  ['ETH Zürich & Corpus Coranicum Radiocarbon Study (2019)','Alba Fedeli, Gerd-R. Puin, Hans-Caspar Graf von Bothmer & Christian Robin (Studies on DAM 01-29.1)'],
  [],
  {
    facts:[
      ['Shelfmark','Codex Ṣanʿāʾ DAM 01-29.1 (Great Mosque of Ṣanʿāʾ)'],
      ['ETH Zürich C14','633–665 CE (Fol. 7/8: 638–669 CE; Fol. 13: 615–660 CE at 95.4%)'],
      ['Coverage','~22% of the Qurʾān across Sūras 2–89 (Ḥijāzī, ≥2 scribes)'],
      ['Researchers','Alba Fedeli, Gerd-R. Puin, von Bothmer, Christian Robin']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Maybe the standard ʿUthmānic text only reached Yemen much later than the Ṣanʿāʾ palimpsest!',
  theyWho:'Watch out · if they say',
  who:'Cite Codex Ṣanʿāʾ DAM 01-29.1 (~22% Qurʾān, C14 633–665 CE)'
});

const sanTrapC=P(N(
  SAN_MING,
  'Were any other early Ḥijāzī Qurʾān manuscripts recycled as palimpsests, and do they support an early 1st-century AH text?',
  'The Mingana-Lewis Palimpsest (Cambridge Or. 1287) preserves leaves from three early Ḥijāzī Qurʾān manuscripts (Qurʾān A, B, and C, covering 15 sūras or ~8–12% of the Qurʾān) that were later overwritten with Christian Arabic homilies. Agnes Smith Lewis (1902) dated its earliest layer before ʿUthmān (pre-650 CE), and Alain George (2011) classified Qurʾān A among the earliest surviving Qurʾānic fragments from the opening decades of the 1st century AH (~620–650 CE).',
  'The Mingana-Lewis Palimpsest (Qurʾān A, B, C): ~8–12% of the Qurʾān from ~620–650 CE',
  [
    '01 · Scholarly dating from pre-650 CE to early 1st century AH: Mrs. Agnes Smith Lewis (1902) dated the undertext prior to Caliph ʿUthmān (before 650 CE); Dr. Alphonse Mingana (1914) suggested the early 8th century CE; and modern codicologist Alain George (2011) identified Qurʾān A—distinguished by an unusually steep Ḥijāzī letter slant of up to 45°—as one of the earliest Qurʾānic fragments, potentially from the first decades of the 1st century AH (~620–650 CE).',
    '02 · 15 sūras (~8–12% of the Qurʾān) across three Ḥijāzī codices: Before being overwritten with Christian Arabic homilies, the palimpsest leaves preserved portions of three Qurʾānic manuscripts (Qurʾān A, B, and C) spanning 15 of the 114 sūras: Q 7.139–168; Q 9.18–79; Q 11.20–39; Q 13.18–43; Q 14.1–8; Q 15.85–99; Q 16.1–128; Q 17.1–57; Q 24.17–29; Q 28.41–51; Q 29.17–30; Q 40.78–85; Q 41.1–20; Q 44.38–59; and Q 45.1–20.',
    '03 · Modern UV recovery (1936–2009): Misplaced after World War I and returned to Cambridge University Library in 1936, the palimpsest was digitized under ultraviolet light in 2009 by Alba Fedeli and Cambridge researchers for full legibility.'
  ],
  ['Agnes Smith Lewis, Apocrypha Syriaca: The Protevangelium Jacobi and Transitus Mariae, With Texts from the Septuagint, the Corân, etc. (1902)','Alphonse Mingana & Agnes Smith Lewis, Leaves from Three Ancient Qurâns, Possibly Pre-ʿOthmânic (1914)','Alain George, "Le palimpseste Lewis-Mingana de Cambridge, témoin ancien de l’histoire du Coran" (CRAI, 2011)'],
  [],
  {
    facts:[
      ['Manuscript','Mingana-Lewis Palimpsest (3 codices: Qurʾān A, B, C)'],
      ['Alain George (2011)','Dates Qurʾān A (45°-slanted Ḥijāzī) to ~620–650 CE'],
      ['Coverage','15 sūras (~8–12% of the Qurʾān), incl. all of Sūra 16.1–128'],
      ['Recovery','Returned to Cambridge 1936; UV-digitized in 2009']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Is Ṣanʿāʾ I the only early Qurʾānic palimpsest ever found?',
  theyWho:'Watch out · if they say',
  who:'Cite the Mingana-Lewis Palimpsest (15 sūras, ~8–12% Qurʾān, ~620–650 CE)'
});

card('islam/quran/preservation/sanaa-palimpsest-and-mingana-palimpsest',{
  title:'The Ṣanʿāʾ Palimpsest (DAM 01-27.1), Ṣanʿāʾ DAM 01-29.1 & the Mingana-Lewis Palimpsest',
  k:'Palimpsests · Ṣanʿāʾ I (606–649 CE) · DAM 01-29.1 (633–665 CE) · Mingana-Lewis',
  blurb:'Codex Ṣanʿāʾ I (81 fols., ~41% Qurʾān, C14 606–649 CE), Codex Ṣanʿāʾ DAM 01-29.1 (~22% Qurʾān, C14 633–665 CE) & the Mingana-Lewis Palimpsest (15 sūras, ~8–12% Qurʾān, ~620–650 CE).',
  claim:'The Ṣanʿāʾ palimpsest proves the Qurʾān was still evolving in the late 7th century and disproves the Islamic narrative of ʿUthmānic preservation.',
  tree:P(N(
    SAN,
    'The Ṣanʿāʾ palimpsest contains an erased lower text that differs from today’s Qurʾān—proving the Islamic account of preservation is false.',
    'Far from undermining Islamic history, the Ṣanʿāʾ I palimpsest (81 folios, ~41% of the Qurʾān, C14-dated to 606–649 CE at 95.4%) provides direct physical proof of the classical Muslim account: its lower text preserves pre-ʿUthmānic Companion variants (matching reports of Ibn Masʿūd’s codex), while its upper text was overwritten with the standard ʿUthmānic Qurʾān. Alongside sister manuscript Ṣanʿāʾ DAM 01-29.1 (~22% of the Qurʾān, C14 633–665 CE) and the Mingana-Lewis Palimpsest (15 sūras, ~8–12% of the Qurʾān, Qurʾān A dated ~620–650 CE by Alain George), these mid-7th-century witnesses confirm early ʿUthmānic standardization.',
    'How Ṣanʿāʾ I, Ṣanʿāʾ DAM 01-29.1, and the Mingana-Lewis Palimpsest corroborate 1st-century standardization',
    [
      '01 · Codex Ṣanʿāʾ I (81 folios, ~41% of the Qurʾān, C14 606–649 CE): Discovered in the Great Mosque of Ṣanʿāʾ in 1972, its parchment dates to 614–656 CE (68%) / 578–669 CE (95%), refined in 2019 to 606–649 CE (95.4%). Its scriptio inferior exhibits Companion-type variants matching early Islamic reports of Ibn Masʿūd’s text, while its scriptio superior reproduces the standard ʿUthmānic Qurʾān—empirically confirming both pre-ʿUthmānic Companion codices and ʿUthmānic unification.',
      '02 · Codex Ṣanʿāʾ DAM 01-29.1 (~22% of the Qurʾān, C14 633–665 CE): Also found in the Great Mosque of Ṣanʿāʾ and studied by Alba Fedeli, Gerd-R. Puin, von Bothmer, and Christian Robin, this unvocalized Ḥijāzī codex (at least two scribes) was radiocarbon-dated by ETH Zürich (Corpus Coranicum, 2019) to 633–665 CE (Fol. 7/8: 638–669 CE at 95.4%; Fol. 13: 615–660 CE at 95.4%) and preserves ~22% of the standard Qurʾān across Sūras 2–8, 14–17, 19–22, 33–34, 36–37, 39–40, 42–53, 69–74, and 80–89.',
      '03 · The Mingana-Lewis Palimpsest (15 sūras, ~8–12% of the Qurʾān): Overwritten with Christian Arabic homilies and UV-digitized at Cambridge in 2009, its three Ḥijāzī Qurʾān undertexts (Qurʾān A, B, C) preserve 15 sūras (Q 7.139–168; 9.18–79; 11.20–39; 13.18–43; 14.1–8; 15.85–99; 16.1–128; 17.1–57; 24.17–29; 28.41–51; 29.17–30; 40.78–85; 41.1–20; 44.38–59; 45.1–20). Agnes Smith Lewis (1902) and Alain George (2011) place Qurʾān A (with its 45° letter tilt) in the opening decades of the 1st century AH (~620–650 CE).'
    ],
    ['Behnam Sadeghi & Mohsen Goudarzi, Der Islam 87 (2012)','ETH Zürich & Corpus Coranicum Radiocarbon Studies (2019)','Alain George, CRAI (2011)','Agnes Smith Lewis (1902) & Alphonse Mingana (1914)'],
    [sanTrapA,sanTrapB,sanTrapC],
    {
      facts:[
        ['Ṣanʿāʾ I (81 fols.)','~41% Qurʾān; 2019 C14: 606–649 CE (95.4% probability)'],
        ['Lower vs. Upper','Lower = Companion variants (Ibn Masʿūd); Upper = ʿUthmānic'],
        ['Ṣanʿāʾ DAM 01-29.1','~22% Qurʾān (Sūras 2–89); ETH Zürich C14: 633–665 CE'],
        ['Mingana Palimpsest','15 sūras (~8–12% Qurʾān); Qurʾān A dated ~620–650 CE']
      ],
      quotes:[
        {by:'Alain George (on the Mingana-Lewis Palimpsest, 2011)',en:'Qurʾān A ranks among the earliest surviving Qurʾānic fragments, dating from the opening decades of the 1st century AH (ca. 620–650 CE).',ref:'CRAI (2011)'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Codex Ṣanʿāʾ I (DAM 01-27.1)',
          items:[
            '81 folios (~41% of the Qurʾān), C14: 606–649 CE (95.4%)',
            'Lower text: pre-ʿUthmānic Companion variants (Ibn Masʿūd type)',
            'Upper text: washed & overwritten with the standard ʿUthmānic text'
          ]
        },
        right:{
          title:'DAM 01-29.1 & Mingana-Lewis',
          items:[
            'DAM 01-29.1: ~22% of the Qurʾān (29 sūras), ETH C14: 633–665 CE',
            'Mingana-Lewis: 15 sūras (~8–12% of Qurʾān) across Qurʾān A, B & C',
            'Qurʾān A (45° Ḥijāzī slant) dated ca. 620–650 CE by Alain George'
          ]
        }
      }
    }
  ),{
    who:'Synthesize Ṣanʿāʾ I, DAM 01-29.1 & the Mingana-Lewis Palimpsest',
    forkTitle:'Three follow-up claims they make',
    forkSub:'Explain the Ṣanʿāʾ I lower text, cite DAM 01-29.1 (633–665 CE), or present the Mingana-Lewis Palimpsest'
  }),
  sum:'Radiocarbon-dated to 606–649 CE and 633–665 CE, Codex Ṣanʿāʾ I (~41% of the Qurʾān) and DAM 01-29.1 (~22%)—together with the Mingana-Lewis Palimpsest (~8–12%, ca. 620–650 CE)—physically confirm both the existence of early Companion transcripts and mid-7th-century ʿUthmānic standardization.'
});

/* ============================================================================
   3. NEW Tactical Playbook card: islam/quran/preservation/codex-tubingen-and-early-papyri
      Combines: codex_tuebingen (1390073319147044935), a_perg_2 (1392143936688226375),
      p_michaelides_32 (1392144192473399356), codex_auctionalis (1391437264638443632)
   ============================================================================ */
const TUB=AV2('#codex-tübingen · #a-perg-2 · #p-michaélidès-no-32 · #codex-auctionalis','1390073319147044935');
const TUB_MS=AV2('#codex-tübingen','1390073319147044935');
const TUB_PAP=AV2('#p-michaélidès-no-32 · #a-perg-2','1392144192473399356');
const TUB_AUC=AV2('#codex-auctionalis','1391437264638443632');

const tubTrapA=P(N(
  TUB_MS,
  'Isn’t the Tübingen manuscript (M a VI 165) a late Abbasid copy whose script was merely guessed to be early?',
  'Three separate folios of Codex Tübingen M a VI 165 were radiocarbon-tested at 95.4% probability—Folio 23 (637–690 CE at 94.8%), Folio 28 (611–669 CE), and Folio 37 (655–718 CE at 75.3%)—yielding a combined peak probability of 649–675 CE. Across 77 compact parchment folios (19.5 × 15.3 cm, Déroche B1a Ḥijāzī script), it preserves a continuous 26.2% block of the Qurʾān from Q 17.35 to Q 36.57 matching today’s wording.',
  'Codex Tübingen M a VI 165: 26.2% of the Qurʾān (Q 17.35–36.57) C14-dated to 649–675 CE',
  [
    '01 · Multi-folio radiocarbon precision (649–675 CE combined): Collected in 19th-century Damascus by Prussian consul Johann Gottfried Wetzstein and housed at Tübingen University Library, M a VI 165 underwent three C14 tests (95.4% confidence): Folio 23 = 637–690 CE (94.8%); Folio 28 = 611–669 CE; Folio 37 = 655–718 CE (75.3%), pinpointing production to 649–675 CE (2nd half of the 1st century AH).',
    '02 · 77 continuous folios covering 26.2% of the Qurʾān: Measuring 19.5 × 15.3 cm (a compact, portable format with 18–21 lines per page), the 77 parchment leaves preserve over a quarter of the Qurʾān continuously from Sūrat al-Isrāʾ (Q 17.35) to Sūrat Yā-Sīn (Q 36.57).',
    '03 · Ḥijāzī B1a script & textual continuity: Written in tall, slender, right-slanting Ḥijāzī script (Déroche class B1a) with original consonant dotting, red circles every 10th verse, and dotted triangles at sūra endings (with sūra headings and red/black vocalization dots added later), its wording agrees with today’s Qurʾān apart from standard early Ḥijāzī defective alif spellings.'
  ],
  ['Corpus Coranicum & University of Tübingen Radiocarbon Analysis (2014: 649–675 CE)','Max Weisweiler, Verzeichnis der arabischen Handschriften der Universitätsbibliothek Tübingen (1930)','François Déroche, Classification B1a Ḥijāzī Script'],
  [],
  {
    facts:[
      ['Shelfmark','Tübingen University Library Codex M a VI 165'],
      ['Multi-Folio C14','Combined 649–675 CE (Fols. 23, 28 & 37 tested at 95.4%)'],
      ['Continuous Text','77 fols. (19.5 × 15.3 cm) = 26.2% of Qurʾān (Q 17.35–36.57)'],
      ['Script Features','Ḥijāzī B1a, consonant dots, red circles every 10th verse']
    ],
    quotes:[
      {by:'Codex Tübingen M a VI 165 Summary',en:'Covering 26.2% of the Qurʾān continuously from Q 17.35 to Q 36.57 and radiocarbon-dated to 649–675 CE, M a VI 165 confirms 7th-century textual continuity.',ref:'Corpus Coranicum / Tübingen Analysis'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'How do we know the Tübingen manuscript wasn’t written centuries later in the Abbasid era?',
  theyWho:'Watch out · if they say',
  who:'Cite the 3-folio C14 results (649–675 CE) & 26.2% continuous coverage'
});

const tubTrapB=P(N(
  TUB_PAP,
  'All these manuscripts are large mosque parchments—where are the everyday 1st-century papyri or smaller personal copies?',
  'Alongside portable codices like Tübingen M a VI 165 (19.5 × 15.3 cm), we possess the rare 1st-century AH pocket-sized papyrus P. Michaélidès No. 32 (14.8 × 5.9 cm, dated ~20–100 AH by Adolf Grohmann and Beatrice Gruendler), preserving 71 verses (~1.1% of the Qurʾān: Q 54.11–38, 54.45–55, and Q 55.1–32), as well as Vienna parchment A Perg. 2 (~20–100 AH, dated by H. Loebenstein, Alba Fedeli, and Gruendler), preserving 19 verses of Sūrat al-Qaṣaṣ (Q 28.61–73, 75–80).',
  '1st-century AH papyrus P. Michaélidès No. 32 and Vienna parchment A Perg. 2',
  [
    '01 · P. Michaélidès No. 32 (1st-century AH papyrus, 71 verses / ~1.1% of the Qurʾān): Dated by Adolf Grohmann (1958) and cited by Beatrice Gruendler (1993) to the 1st century AH (~20–100 AH), this rare Qurʾānic papyrus measures just 14.8 × 5.9 cm. Written in Ḥijāzī script with fine brown ink and pearl-line sūra dividers, it preserves 71 verses across Sūrat al-Qamar (Q 54.11–38 and 54.45–55 = 39 verses) and Sūrat al-Raḥmān (Q 55.1–32 = 32 verses).',
    '02 · Vienna A Perg. 2 (1st-century AH parchment, 19 verses / ~0.3% of the Qurʾān): Housed in the Austrian National Library (Vienna) and dated to the 1st century AH (~20–100 AH / 640–720 CE) by Helene Loebenstein (1982), Beatrice Gruendler (1993), and Alba Fedeli (2005), this thin yellowish non-palimpsest parchment leaf in brown-ink Ḥijāzī script (with severe ink corrosion on the hair side and traces of a second unidentified leaf) preserves 19 verses of Sūrat al-Qaṣaṣ: Q 28.61–73 on the recto and Q 28.75–80 on the verso.'
  ],
  ['Adolf Grohmann, "The Problem of Dating Early Qurʾāns" (Der Islam 33, 1958 — P. Michaélidès No. 32)','Helene Loebenstein, Koranfragmente auf Pergament aus der Papyrussammlung der Österreichischen Nationalbibliothek (1982 — A Perg. 2)','Beatrice Gruendler, The Development of the Arabic Scripts (1993); Alba Fedeli (2005)'],
  [],
  {
    facts:[
      ['P. Michaélidès 32','Rare 1st-c. AH papyrus (14.8 × 5.9 cm), Grohmann (1958)'],
      ['Papyrus Coverage','71 verses (~1.1% Qurʾān): Q 54.11–38, 45–55 & Q 55.1–32'],
      ['Vienna A Perg. 2','1st-c. AH parchment (~640–720 CE), Loebenstein & Fedeli'],
      ['A Perg. 2 Coverage','19 verses (~0.3% Qurʾān): Sūrat al-Qaṣaṣ Q 28.61–73, 75–80']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Do any 1st-century Qurʾānic papyri or pocket-sized personal fragments survive?',
  theyWho:'Watch out · if they say',
  who:'Cite papyrus P. Michaélidès No. 32 & Vienna A Perg. 2'
});

const tubTrapC=P(N(
  TUB_AUC,
  'What about the 1st-century Ḥijāzī leaves sold through modern auction houses—do they preserve the same sūra text?',
  'Reconstructed by scholars under the name "Codex Auctionalis," five 1st-century AH Ḥijāzī parchment folios sold through Sotheby’s and Christie’s (22–23 lines/folio, sepia ink, dotted verse markers, later red sūra headings and vocalization) preserve passages from seven sūras (Q 6.141–158; 7.169–194; 9.48–71; 38.76–88; 39.1–21; 40.66–85; 41.1–10) matching the standard text.',
  'Codex Auctionalis: 5 dispersed 1st-century AH Ḥijāzī folios spanning 7 sūras',
  [
    '01 · Date, script & auction provenance: Named "Codex Auctionalis" because its 5 surviving folios were auctioned individually at Sotheby’s and Christie’s into private collections, this 1st-century AH (late 7th / early 8th century CE) parchment manuscript is written in sepia-ink Ḥijāzī script at 22–23 lines per folio, with dotted verse markers and later red sūra headings and red vocalization signs.',
    '02 · Exact verse coverage across 7 sūras (<3% of the Qurʾān): The five leaves preserve Q 6.141–158, Q 7.169–194, Q 9.48–71, Q 38.76–88, Q 39.1–21, Q 40.66–85, and Q 41.1–10—confirming both the internal verse text and the contiguous transitions from Sūra 6 to 7, Sūra 38 to 39, and Sūra 40 to 41.'
  ],
  ['Islamic Awareness, "Codex Auctionalis — A Qurʾānic Manuscript From 1st Century Hijra"','Sotheby’s & Christie’s Islamic Manuscript Catalogues'],
  [],
  {
    facts:[
      ['Name & Date','Codex Auctionalis; 1st c. AH (late 7th / early 8th c. CE)'],
      ['Layout & Script','5 parchment folios, 22–23 lines/page, sepia Ḥijāzī script'],
      ['Sūras Covered','Q 6.141–158; 7.169–194; 9.48–71; 38.76–88; 39.1–21; 40.66–85; 41.1–10'],
      ['Key Transitions','Preserves consecutive boundaries: Sūras 6→7, 38→39 & 40→41']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'What do the dispersed 1st-century Ḥijāzī folios in private auction collections show?',
  theyWho:'Watch out · if they say',
  who:'Detail Codex Auctionalis (5 folios across Sūras 6–7, 9 & 38–41)'
});

card('islam/quran/preservation/codex-tubingen-and-early-papyri',{
  title:'Codex Tübingen (M a VI 165), Papyrus P. Michaélidès 32, A Perg. 2 & Codex Auctionalis',
  k:'C14 Dating (649–675 CE) · Tübingen M a VI 165 · Early Papyri',
  blurb:'Codex Tübingen M a VI 165 (77 fols., 26.2% Qurʾān, C14 649–675 CE), papyrus P. Michaélidès No. 32 (71 verses), Vienna A Perg. 2 (19 verses) & Codex Auctionalis (5 fols., 7 sūras).',
  claim:'We lack portable 1st-century Qurʾān codices or early papyri that continuously preserve large blocks of the middle and later sūras.',
  tree:P(N(
    TUB,
    'Surviving 7th-century fragments don’t give us continuous portable codices or papyrus witnesses for the middle and later sections of the Qurʾān.',
    'Codex Tübingen M a VI 165—a compact, portable 77-folio Ḥijāzī manuscript (19.5 × 15.3 cm) radiocarbon-dated across three separate leaves to 649–675 CE—continuously preserves 26.2% of the Qurʾān from Sūrat al-Isrāʾ (Q 17.35) to Sūrat Yā-Sīn (Q 36.57). Complemented by the pocket-sized 1st-century AH papyrus P. Michaélidès No. 32 (14.8 × 5.9 cm; 71 verses of Sūras 54–55), Vienna parchment A Perg. 2 (19 verses of Sūra 28), and the 5-folio Codex Auctionalis (spanning Sūras 6–7, 9, and 38–41), these witnesses lock in the 1st-century text across both parchment and papyrus.',
    'Continuous mid-7th-century coverage in Codex Tübingen M a VI 165 and 1st-century papyrus/parchment witnesses',
    [
      '01 · Codex Tübingen M a VI 165 (77 folios, 26.2% of the Qurʾān, C14 649–675 CE): Acquired in Damascus by Johann Gottfried Wetzstein, this portable 19.5 × 15.3 cm parchment codex (18–21 lines/page, Déroche B1a Ḥijāzī script with consonant dots, red 10-verse circles, and dotted-triangle sūra dividers) was C14-tested on Folio 23 (637–690 CE, 94.8%), Folio 28 (611–669 CE), and Folio 37 (655–718 CE, 75.3%) for a combined date of 649–675 CE, covering Q 17.35–36.57 continuously.',
      '02 · Papyrus P. Michaélidès No. 32 (71 verses, ~1.1% of the Qurʾān, ~20–100 AH): Dated by Adolf Grohmann (1958) and Beatrice Gruendler (1993) to the 1st century AH, this rare 14.8 × 5.9 cm papyrus in fine brown-ink Ḥijāzī script with pearl-line sūra dividers preserves Q 54.11–38, Q 54.45–55, and Q 55.1–32.',
      '03 · Vienna A Perg. 2 (19 verses, ~0.3% of the Qurʾān, ~20–100 AH): Dated by Helene Loebenstein (1982), Beatrice Gruendler (1993), and Alba Fedeli (2005) to ca. 640–720 CE, this yellowish parchment leaf in brown-ink Ḥijāzī script preserves Sūrat al-Qaṣaṣ Q 28.61–73 (recto) and Q 28.75–80 (verso).',
      '04 · Codex Auctionalis (5 folios across 7 sūras, 1st century AH): Written in sepia Ḥijāzī script (22–23 lines/folio) and dispersed across Sotheby’s and Christie’s auctions, its 5 leaves cover Q 6.141–158, Q 7.169–194, Q 9.48–71, Q 38.76–88, Q 39.1–21, Q 40.66–85, and Q 41.1–10.'
    ],
    ['Corpus Coranicum / Tübingen C14 Report (2014)','Adolf Grohmann, Der Islam 33 (1958)','Helene Loebenstein (1982); Beatrice Gruendler (1993); Alba Fedeli (2005)','Islamic Awareness Manuscript Database'],
    [tubTrapA,tubTrapB,tubTrapC],
    {
      facts:[
        ['Codex Tübingen','77 fols. (26.2% Qurʾān: Q 17.35–36.57), C14: 649–675 CE'],
        ['P. Michaélidès 32','1st-c. AH papyrus (14.8 × 5.9 cm): 71 vv. in Sūras 54–55'],
        ['Vienna A Perg. 2','1st-c. AH parchment (~640–720 CE): 19 vv. in Sūra 28'],
        ['Codex Auctionalis','5 sepia Ḥijāzī folios across Sūras 6–7, 9 & 38–41']
      ],
      quotes:[
        {by:'Adolf Grohmann & Beatrice Gruendler (on P. Michaélidès No. 32)',en:'A rare 1st-century AH Qurʾānic papyrus (14.8 × 5.9 cm) in Ḥijāzī script with pearl-line sūra dividers separating Sūras 54 and 55.',ref:'Der Islam 33 (1958) / Gruendler (1993)'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['Codex Tübingen M a VI 165','77 parchment folios (19.5 × 15.3 cm), 3-folio C14 date 649–675 CE, continuous Q 17.35–36.57 (26.2% of Qurʾān)'],
          ['Papyrus P. Michaélidès No. 32','Pocket papyrus (14.8 × 5.9 cm), ~20–100 AH (Grohmann 1958), 71 verses across Q 54.11–38, 45–55 & Q 55.1–32 (~1.1%)'],
          ['Vienna A Perg. 2','Thin yellowish parchment, ~20–100 AH (Loebenstein 1982 / Fedeli 2005), 19 verses of Q 28.61–73 & 75–80 (~0.3%)'],
          ['Codex Auctionalis','5 sepia Ḥijāzī folios (22–23 lines/page), 1st c. AH, covering Q 6.141–158, 7.169–194, 9.48–71, 38.76–39.21 & 40.66–41.10']
        ]
      }
    }
  ),{
    who:'Deploy Codex Tübingen (649–675 CE) & the 1st-century papyrus/parchment witnesses',
    forkTitle:'Three follow-up questions they ask',
    forkSub:'Verify Tübingen’s multi-folio C14 date, show early papyrus P. Michaélidès 32, or detail Codex Auctionalis'
  }),
  sum:'Radiocarbon-dated across three folios to 649–675 CE, Codex Tübingen M a VI 165 preserves 26.2% of the Qurʾān continuously (Q 17.35–36.57), while 1st-century AH papyrus P. Michaélidès No. 32, Vienna A Perg. 2, and Codex Auctionalis confirm the same text across portable papyrus and parchment formats.'
});

/* ============================================================================
   4. NEW Tactical Playbook card: islam/quran/preservation/umayyad-codices-damascus-fustat
      Combines: umayyad_ms (1391118235394379896), umayyad_damascus (1391118596457107486),
      umayyad_fragment (1391437995646910504), umayyad_fustat (1391119420512010290),
      codex_is_1615 (1391427272103428237), codex_qaf_47 (1391427519978274958)
   ============================================================================ */
const UMA=AV2('#umaydeen-manuskript · #umayyad-damascus · #codex-is-1615-i · #codex-ms-qāf-47','1391118235394379896');
const UMA_C14=AV2('#codex-is-1615-i · #codex-ms-qāf-47','1391427272103428237');
const UMA_MON=AV2('#umaydeen-manuskript · #umayyad-damascus','1391118235394379896');
const UMA_FUS=AV2('#umayyad-codex-faustas · #umayyad-fragment','1391119420512010290');

const umaTrapA=P(N(
  UMA_C14,
  'Aren’t the Egyptian Ḥijāzī codices outside the Paris collection undated late copies?',
  'Two major Egyptian Ḥijāzī codices tested by ETH Zürich under the Corpus Coranicum project yielded remarkably early 7th-century radiocarbon dates: Codex Is. 1615 I ("Codex Amrensis 9", 47 folios across Dublin, Doha, and Houston covering Sūras 6, 7, 9, 13–16, and 28–48) dated to 591–643 CE (95.4% confidence), and Codex Ms. Qāf 47 (36 folios across Cairo and Berlin covering ~16% of the Qurʾān) dated to 606–652 CE (95% probability).',
  'ETH Zürich / Corpus Coranicum C14 dates for Codex Is. 1615 I (591–643 CE) & Ms. Qāf 47 (606–652 CE)',
  [
    '01 · Codex Is. 1615 I / "Codex Amrensis 9" (47 folios, C14 591–643 CE at 95.4%): Radiocarbon-dated by ETH Zürich (Corpus Coranicum) to 591–643 CE (95.4% confidence), this 1st-century AH Egyptian Ḥijāzī vellum manuscript (35.5 × 27.5 cm, 17–26 lines/folio, brown ink) comprises 47 surviving leaves covering parts of Sūras 6, 7, 9, 13–16, and 28–48, divided between the Chester Beatty Library in Dublin (32 fols., Sir Alfred Chester Beatty Collection), the Museum of Islamic Art in Doha (14 fols.), and a Houston private collection (1 fol.).',
    '02 · Codex Ms. Qāf 47 (~16% of the Qurʾān, 36 folios, C14 606–652 CE at 95%): First published scientifically in 1905 and radiocarbon-dated under Corpus Coranicum to 606–652 CE (95% probability), this unvocalized Ḥijāzī parchment codex (18 lines/page, oval-dot verse markers) preserves ~16% of the Qurʾān across 36 folios: 29 folios in Dār al-Kutub al-Miṣriyya, Cairo (26.2 × 39.3 cm) and 7 folios in the Staatsbibliothek zu Berlin (Ms. Or. Fol. 4313, 26.0 × 35.0 cm).'
  ],
  ['ETH Zürich & Corpus Coranicum Radiocarbon Project (Codex Is. 1615 I & Ms. Qāf 47)','Bernhard Moritz, Arabic Palaeography: A Collection of Arabic Texts from the First Century of the Hidjra (Cairo, 1905 — Ms. Qāf 47)','Éléonore Cellard, Publication of Codex Amrensis 9 (Is. 1615 I)'],
  [],
  {
    facts:[
      ['Codex Is. 1615 I','47 fols. ("Codex Amrensis 9"), ETH C14: 591–643 CE (95.4%)'],
      ['Is. 1615 I Locations','Dublin Chester Beatty (32), Doha MIA (14), Houston (1)'],
      ['Codex Ms. Qāf 47','36 fols. (~16% Qurʾān), Corpus Coranicum C14: 606–652 CE (95%)'],
      ['Qāf 47 Locations','Cairo Dār al-Kutub (29 fols.) & Berlin Ms. Or. Fol. 4313 (7 fols.)']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Do other Egyptian Ḥijāzī codices in Dublin, Cairo, and Berlin have early radiocarbon dates?',
  theyWho:'Watch out · if they say',
  who:'Cite Codex Is. 1615 I (C14 591–643 CE) & Codex Ms. Qāf 47 (C14 606–652 CE)'
});

const umaTrapB=P(N(
  UMA_MON,
  'Revisionists claim the Umayyads under ʿAbd al-Malik and al-Walīd invented or radically altered the Qurʾān around 700 CE—what do official Umayyad imperial codices actually show?',
  'The flagship imperial codices of the Umayyad era—the Great Umayyad Qurʾān of Ṣanʿāʾ (DAM 20-33.1, 51 × 47 cm, C14-dated 657–690 CE at 95%, produced ca. 710–715 CE under Caliph al-Walīd) and the Umayyad Codex of Damascus (TIEM ŞE 321, 78 folios covering ~20–40% of the Qurʾān, dated post-72 AH / ca. 691–720 CE by Déroche)—preserve the exact same ʿUthmānic text already attested in the pre-Umayyad Ḥijāzī codices, merely adding monumental Kufic calligraphy and architectural illumination matching the Dome of the Rock and the Damascus Umayyad Mosque.',
  'The Great Umayyad Qurʾān (DAM 20-33.1) and the Umayyad Codex of Damascus (TIEM ŞE 321)',
  [
    '01 · Codex Ṣanʿāʾ DAM 20-33.1 — The "Great Umayyad Qurʾān" (C14 657–690 CE; art-historical ca. 710–715 CE): Discovered in the Great Mosque of Ṣanʿāʾ and studied by Hans-Caspar Graf von Bothmer, Gerd-R. Puin, Jonathan Bloom, and Sheila Blair, this monumental volume (51 × 47 cm; ~25 surviving folios out of ~520 original leaves, spanning Sūras 1, 2, 56, 67, 69, 79, and 114) is the earliest known Kufic Qurʾān and the only known illustrated Qurʾān manuscript featuring full-page architectural paintings of Umayyad mosque types and paradise gardens (commissioned in Syria, likely under Caliph al-Walīd). Its parchment C14-dates to 657–690 CE (95% confidence).',
    '02 · The Umayyad Codex of Damascus (TIEM ŞE 321, 78 folios, ~20–40% of the Qurʾān): Dated by François Déroche to after 72 AH (691–692 CE) toward the end of the 1st century AH (ca. 710–720 CE), based on its 10-bifolio quire structure, Kufic / late-Ḥijāzī script (vertical alif and lām shafts), and decorative non-text sūra headbands that match the mosaics of the Dome of the Rock in Jerusalem and the Umayyad Mosque of Damascus. Its 78 folios (24 × 19.5 cm) cover 20–40% of the Qurʾān.'
  ],
  ['Hans-Caspar Graf von Bothmer, "Architekturbilder im Koran: Eine Prachthandschrift der Umayyadenzeit aus dem Yemen" (Pantheon 45, 1987 — DAM 20-33.1)','François Déroche, Qur’ans of the Umayyads: A First Overview (2014 — TIEM ŞE 321 & DAM 20-33.1)'],
  [],
  {
    facts:[
      ['Great Umayyad Qurʾān','Ṣanʿāʾ DAM 20-33.1 (51 × 47 cm), C14: 657–690 CE (95%)'],
      ['Unique Illumination','Earliest Kufic Qurʾān; full-page Umayyad mosque paintings (~25/520 fols.)'],
      ['Damascus TIEM ŞE 321','78 fols. (24 × 19.5 cm, ~20–40% Qurʾān), Déroche: ca. 691–720 CE'],
      ['Dome of the Rock Link','10-bifolio quires & mosaic motifs matching Jerusalem & Damascus']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'What do the official Umayyad imperial Qurʾāns from the time of ʿAbd al-Malik and al-Walīd look like?',
  theyWho:'Watch out · if they say',
  who:'Present the Great Umayyad Qurʾān (DAM 20-33.1) & Damascus Codex (TIEM ŞE 321)'
});

const umaTrapC=P(N(
  UMA_FUS,
  'Did al-Ḥajjāj’s orthographic reforms rewrite the Qurʾān, or do surviving Umayyad codices from Fusṭāṭ and Iraq simply show minor spelling standardization?',
  'The Umayyad Codex of Fusṭāṭ (Codex Marcel 13, 73 folios covering ~30% of the Qurʾān in St. Petersburg and Paris) exemplifies the minor orthographic standardization disseminated under al-Ḥajjāj—without altering a single sūra or doctrine. Meanwhile, the giant 1st-century AH Umayyad Fragment studied by Yasin Dutton (2007; 3 folios across London, Baghdad, and Hartford Seminary, Oxford C14 644–675 CE at 68.3%) preserves Sūra 74 (vv. 1–27, 34–56) and Sūra 11 (vv. 73–95) in right-leaning Kufic.',
  'The Umayyad Codex of Fusṭāṭ (Marcel 13, ~30% Qurʾān) and Dutton’s Umayyad Fragment (C14 644–675 CE)',
  [
    '01 · Umayyad Codex of Fusṭāṭ / Codex Marcel 13 (73 folios, ~30% of the Qurʾān): Originally preserved in the ʿAmr ibn al-ʿĀṣ Mosque in Fusṭāṭ and acquired in the 19th century by French expedition members (now divided between the National Library of Russia, St. Petersburg, and the Bibliothèque Nationale, Paris), this 1st-century AH (7th-century CE) codex measures ~37 × 31 cm with 25 lines per page, partially illuminated sūra headings, and Kufic / late-Ḥijāzī script resembling the Umayyad Codex of Damascus. Scholars recognize it as an early witness to the standardized orthography promoted under al-Ḥajjāj.',
    '02 · Yasin Dutton’s Umayyad Fragment (3 folios, Oxford C14 644–675 CE): Dated paleographically by Yasin Dutton (2007) to the 2nd half of the 1st century AH, Oxford University radiocarbon testing yielded 647–685 CE (26–66 AH, 68.2% on INTCAL98) and 644–675 CE (25–56 AH, 68.3% on INTCAL04; 95% range: 609–694 CE). Reconstructed from three massive folios (~48 × 54 cm, 25 lines/page, right-slanting unvocalized Kufic with sparse consonant dots and square 10-verse rosettes) held in London, Baghdad, and Hartford Seminary (plus a 2004 Sotheby’s leaf), it preserves Sūrat al-Muddaththir (Q 74.1–27, 34–56) and Sūrat Hūd (Q 11.73–95; <1% of the Qurʾān).'
  ],
  ['François Déroche, Qur’ans of the Umayyads (2014 — Codex Marcel 13)','Yasin Dutton, "An Umayyad Fragment of the Qur’an and Its Dating" (Journal of Qur’anic Studies 9, 2007)'],
  [],
  {
    facts:[
      ['Fusṭāṭ Marcel 13','73 fols. (~30% Qurʾān, 37 × 31 cm, 25 lines/page) in NLR & BnF'],
      ['Orthographic Witness','Shows minor spelling standardization under al-Ḥajjāj, same text'],
      ['Dutton Umayyad Frag.','3 giant fols. (~48 × 54 cm): London, Baghdad & Hartford Seminary'],
      ['Oxford C14 (Dutton)','644–675 CE (68.3% INTCAL04) / 609–694 CE overall; Q 74 & Q 11']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Didn’t al-Ḥajjāj’s Umayyad reforms alter the Qurʾānic text in Egypt and Iraq?',
  theyWho:'Watch out · if they say',
  who:'Cite the Umayyad Codex of Fusṭāṭ (Marcel 13) & Dutton’s C14-dated Umayyad Fragment'
});

card('islam/quran/preservation/umayyad-codices-damascus-fustat',{
  title:'Early Egyptian C14 Codices (Is. 1615 I, Ms. Qāf 47) & the Monumental Umayyad Qurʾāns',
  k:'Codex Is. 1615 I (591–643 CE) · Ms. Qāf 47 (606–652 CE) · DAM 20-33.1 · Marcel 13',
  blurb:'Codex Is. 1615 I (47 fols., C14 591–643 CE), Codex Ms. Qāf 47 (~16% Qurʾān, C14 606–652 CE), Great Umayyad Qurʾān DAM 20-33.1 (C14 657–690 CE), Damascus TIEM ŞE 321 (~20–40%), Fusṭāṭ Marcel 13 (~30%) & Dutton’s Umayyad Fragment (C14 644–675 CE).',
  claim:'The Qurʾān was only composed or standardized during the Umayyad caliphate around 700 CE under ʿAbd al-Malik and al-Ḥajjāj.',
  tree:P(N(
    UMA,
    'The Qurʾān was actually standardized—or even invented—by Umayyad caliphs like ʿAbd al-Malik and his governor al-Ḥajjāj at the end of the 7th century.',
    'Pre-Umayyad radiocarbon-dated Ḥijāzī codices like Codex Is. 1615 I ("Codex Amrensis 9", 47 folios, ETH Zürich C14: 591–643 CE at 95.4%) and Codex Ms. Qāf 47 (36 folios, ~16% of the Qurʾān, C14: 606–652 CE at 95%) prove the ʿUthmānic text already existed decades before the Marwānid Umayyads. When monumental Umayyad codices were commissioned—such as the Great Umayyad Qurʾān (Ṣanʿāʾ DAM 20-33.1, C14 657–690 CE, ca. 710–715 CE), the Umayyad Codex of Damascus (TIEM ŞE 321, 78 folios, ~20–40%), the Umayyad Codex of Fusṭāṭ (Marcel 13, 73 folios, ~30%), and Dutton’s Umayyad Fragment (Oxford C14 644–675 CE)—they transmitted the very same Qurʾān in grand Kufic layout and Dome-of-the-Rock illumination.',
    'From pre-Umayyad C14 codices (Is. 1615 I & Ms. Qāf 47) to imperial Umayyad manuscripts',
    [
      '01 · Pre-Umayyad C14 anchors — Codex Is. 1615 I (591–643 CE) & Ms. Qāf 47 (606–652 CE): Tested by ETH Zürich / Corpus Coranicum, Codex Is. 1615 I ("Codex Amrensis 9", 47 vellum folios, 35.5 × 27.5 cm, covering Sūras 6, 7, 9, 13–16, 28–48 across Dublin Chester Beatty [32], Doha [14], and Houston [1]) dates to 591–643 CE (95.4%). Codex Ms. Qāf 47 (36 parchment folios, 18 lines/page, ~16% of the Qurʾān across Cairo Dār al-Kutub [29] and Berlin Ms. Or. Fol. 4313 [7]) dates to 606–652 CE (95%).',
      '02 · The Great Umayyad Qurʾān (Ṣanʿāʾ DAM 20-33.1) & Damascus Codex (TIEM ŞE 321): DAM 20-33.1 (51 × 47 cm, ~25 of ~520 folios extant across Sūras 1, 2, 56, 67, 69, 79, 114; C14 657–690 CE at 95%; made ca. 710–715 CE under al-Walīd) is the earliest Kufic Qurʾān and features full-page Umayyad mosque paintings (von Bothmer, Puin, Bloom, Blair). TIEM ŞE 321 (78 folios, 24 × 19.5 cm, ~20–40% of the Qurʾān, dated post-72 AH / ca. 691–720 CE by Déroche) exhibits 10-bifolio quires and ornament matching the Dome of the Rock and Damascus Mosque mosaics.',
      '03 · Umayyad Codex of Fusṭāṭ (Marcel 13, ~30% of the Qurʾān) & Dutton’s Umayyad Fragment (C14 644–675 CE): Marcel 13 (73 folios, 37 × 31 cm, 25 lines/page in St. Petersburg and Paris) reflects minor al-Ḥajjāj-era spelling regularization of the same text, while Yasin Dutton’s 3-folio Umayyad Fragment (~48 × 54 cm, London/Baghdad/Hartford, covering Q 74.1–27, 34–56 and Q 11.73–95) C14-dates at Oxford to 644–675 CE (68.3% INTCAL04) / 609–694 CE.'
    ],
    ['ETH Zürich / Corpus Coranicum Radiocarbon Studies','François Déroche, Qur’ans of the Umayyads (2014)','Hans-Caspar Graf von Bothmer, Pantheon 45 (1987)','Yasin Dutton, Journal of Qur’anic Studies 9 (2007)'],
    [umaTrapA,umaTrapB,umaTrapC],
    {
      facts:[
        ['Codex Is. 1615 I','47 fols. (Dublin/Doha/Houston), ETH C14: 591–643 CE (95.4%)'],
        ['Codex Ms. Qāf 47','36 fols. (~16% Qurʾān, Cairo/Berlin), C14: 606–652 CE (95%)'],
        ['Ṣanʿāʾ DAM 20-33.1','Great Umayyad Qurʾān (51 × 47 cm), C14: 657–690 CE, ca. 710–715 CE'],
        ['TIEM ŞE 321 & Marcel 13','Damascus (78 fols., ~20–40%) & Fusṭāṭ (73 fols., ~30% Qurʾān)']
      ],
      quotes:[
        {by:'François Déroche (on Umayyad Codices TIEM ŞE 321 & Marcel 13)',en:'Their script, 10-bifolio quire construction, and decorative headbands correlate directly with the mosaics of the Dome of the Rock and the Umayyad Mosque of Damascus.',ref:'Qur’ans of the Umayyads (2014)'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Pre-Umayyad Ḥijāzī Anchors',
          items:[
            'Codex Is. 1615 I ("Amrensis 9", 47 fols.): ETH C14 591–643 CE (95.4%)',
            'Codex Ms. Qāf 47 (36 fols., ~16% Qurʾān): C14 606–652 CE (95%)',
            'Unadorned Ḥijāzī script preserving the standard ʿUthmānic text'
          ]
        },
        right:{
          title:'Imperial Umayyad Codices',
          items:[
            'Great Umayyad Qurʾān DAM 20-33.1 (C14 657–690 CE; ca. 710–715 CE)',
            'Damascus TIEM ŞE 321 (78 fols., ~20–40%) & Fusṭāṭ Marcel 13 (73 fols., ~30%)',
            'Dutton’s Giant Fragment (48 × 54 cm, Oxford C14 644–675 CE on Q 11 & 74)'
          ]
        }
      }
    }
  ),{
    who:'Compare pre-Umayyad C14 codices with imperial Umayyad Qurʾāns',
    forkTitle:'Three follow-up challenges they raise',
    forkSub:'Cite ETH Zürich C14 dates (Is. 1615 I & Qāf 47), inspect DAM 20-33.1 & TIEM ŞE 321, or examine Marcel 13 & Dutton’s Fragment'
  }),
  sum:'ETH Zürich radiocarbon dates for Codex Is. 1615 I (591–643 CE) and Ms. Qāf 47 (606–652 CE) prove the ʿUthmānic text predated the Umayyads, while imperial Umayyad codices like DAM 20-33.1, Damascus TIEM ŞE 321 (~20–40%), and Fusṭāṭ Marcel 13 (~30%) show that Umayyad patronage merely elevated calligraphy and orthography without altering the text.'
});

/* ============================================================================
   5. NEW Tactical Playbook card: islam/quran/preservation/st-petersburg-marcel-codices
      Combines: quran_st_petersburg (1390060801632636959, Codex E-20 / Katta-Langar),
      codex_marcel_5 (1391422696310571188), codex_marcel_16 (1391423309090127912),
      codex_marcel_18 (1391423554028834957), codex_marcel_19 (1391425062594412724)
   ============================================================================ */
const MAR=AV2('#codex-marcel-5 · #codex-marcel-16 · #codex-marcel-18 · #codex-marcel-19 · #quran-st-petersburg','1391422696310571188');
const MAR_5_17=AV2('#codex-marcel-5 · #codex-marcel-16','1391422696310571188');
const MAR_18_19=AV2('#codex-marcel-18 · #codex-marcel-19','1391423554028834957');
const MAR_E20=AV2('#quran-st-petersburg','1390060801632636959');

const marTrapA=P(N(
  MAR_5_17,
  'Aren’t the Marcel manuscripts in St. Petersburg just undated fragments from later centuries?',
  'Radiocarbon testing on Codex Marcel 5 (~15–20% of the Qurʾān) places it between 652 and 763 CE (95.4%), with an 89.3% probability that it was produced between 652 and 694 CE—during the reigns of ʿUthmān (d. 656), ʿAlī (d. 661), and the early Umayyads—and only a 6.1% chance of 747–763 CE. Alongside it, Codex Marcel 17 (late 1st century AH / ca. 670–700 CE) preserves ~14.7% of the Qurʾān in long continuous passages across Sūras 2–6 in early unpointed Ḥijāzī script.',
  'Codex Marcel 5 (C14 652–694 CE at 89.3%) and Codex Marcel 17 (~14.7% of the Qurʾān, Sūras 2–6)',
  [
    '01 · Codex Marcel 5 (~15–20% of the Qurʾān, C14 652–694 CE at 89.3% probability): Radiocarbon-dated to 652–763 CE at 95.4% overall confidence, its probability distribution overwhelmingly favors 652–694 CE (89.3% probability—spanning the second and third Muslim generations under ʿUthmān, ʿAlī, and the early Umayyads) over 747–763 CE (just 6.1%). Estimated by verse count and folio distribution, Marcel 5 contains 15–20% of the entire Qurʾān.',
    '02 · Codex Marcel 17 (channel #codex-marcel-16; ~14.7% of the Qurʾān, ca. 670–700 CE): Dated to the end of the 1st century AH (ca. 670–700 CE) and written in very early, right-slanted unpointed Ḥijāzī calligraphy, Marcel 17 preserves roughly 14.7% of the Qurʾān in long, continuous blocks spanning Sūras 2 through 6.'
  ],
  ['Corpus Coranicum Radiocarbon Analysis (Codex Marcel 5: 652–694 CE at 89.3%)','François Déroche, Studies on the Marcel Collection (National Library of Russia, St. Petersburg)'],
  [],
  {
    facts:[
      ['Codex Marcel 5','~15–20% of Qurʾān; C14: 652–694 CE (89.3% prob.) / 652–763 CE (95.4%)'],
      ['Historical Window','89.3% sub-range spans ʿUthmān (d. 656), ʿAlī (d. 661) & early Umayyads'],
      ['Codex Marcel 17','~14.7% of Qurʾān (late 1st c. AH / ca. 670–700 CE)'],
      ['Marcel 17 Text','Long continuous passages of Sūras 2–6 in unpointed Ḥijāzī']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Are the Marcel manuscripts in St. Petersburg actually radiocarbon-dated to the 1st century AH?',
  theyWho:'Watch out · if they say',
  who:'Cite Codex Marcel 5 (89.3% prob. 652–694 CE) & Codex Marcel 17 (~14.7% Qurʾān)'
});

const marTrapB=P(N(
  MAR_18_19,
  'Do other 1st-century Ḥijāzī codices in the Marcel collection cover the middle sūras of the Qurʾān?',
  'Yes: Codex Marcel 18/2 (23 folios across St. Petersburg and Paris BnF Arabe 328d, ca. 650–700 CE) preserves ~9.5% of the Qurʾān from Q 25.72 to Q 43.17 in Déroche B1a Ḥijāzī script, while Codex Marcel 19 (15 folios across St. Petersburg and Paris BnF Arabe 328f, ca. 650–700 CE) preserves ~6.8% of the Qurʾān across Sūras 18–19, 23–26, and 28 in Déroche Ḥijāzī I script.',
  'Codex Marcel 18/2 (~9.5% of the Qurʾān, Sūras 25–43) & Codex Marcel 19 (~6.8%, Sūras 18–28)',
  [
    '01 · Codex Marcel 18/2 (23 folios, ~9.5% of the Qurʾān, 1st century AH / ca. 650–700 CE): Divided between the National Library of Russia in St. Petersburg (20 fols.) and the Bibliothèque Nationale in Paris (3 fols., Arabe 328d), this 32.5 × 25 cm parchment codex (23–26 lines/page, black ink, visible lead-point margin ruling, partial diacritical dots, oval-dot verse markers, Déroche B1a Ḥijāzī script) preserves long passages from Sūra 25.72 to Sūra 43.17 (~9.5% of the Qurʾān).',
    '02 · Codex Marcel 19 (15 folios, ~6.8% of the Qurʾān, 1st century AH / ca. 650–700 CE): Divided between St. Petersburg (13 fols.) and Paris (2 fols., Arabe 328f), this 29.1 × 21.0 cm parchment codex (20 lines/page, pale brown ink, Déroche "Ḥijāzī I" script, partial oblique diacritical dots, verse endings marked by three horizontal rows of two oval dots each, banner sūra dividers, no vowel signs) preserves ~6.8% of the Qurʾān, including Q 18.29–110, Q 19.1–98, Q 23.75–118, Q 24.1–64, Q 25.1–77, Q 26.1–51, and Q 28.10–32.'
  ],
  ['François Déroche, Classification of Ḥijāzī I & B1a Scripts','Islamic Awareness, "Codex Marcel 18/2" & "Codex Marcel 19"'],
  [],
  {
    facts:[
      ['Codex Marcel 18/2','23 fols. (20 St. Petersburg + 3 Paris Arabe 328d) = ~9.5% Qurʾān'],
      ['Marcel 18/2 Range','Q 25.72–43.17 (32.5 × 25 cm, Déroche B1a Ḥijāzī, ca. 650–700 CE)'],
      ['Codex Marcel 19','15 fols. (13 St. Petersburg + 2 Paris Arabe 328f) = ~6.8% Qurʾān'],
      ['Marcel 19 Range','Q 18.29–110, 19.1–98, 23.75–26.51, 28.10–32 (Ḥijāzī I, ca. 650–700 CE)']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'What about the middle sūras of the Qurʾān in the St. Petersburg Marcel collection?',
  theyWho:'Watch out · if they say',
  who:'Detail Codex Marcel 18/2 (~9.5% Qurʾān) & Codex Marcel 19 (~6.8% Qurʾān)'
});

const marTrapC=P(N(
  MAR_E20,
  'Wait—isn’t the famous St. Petersburg / Katta-Langar "ʿUthmān Qurʾān" actually from the late 8th century rather than ʿUthmān’s lifetime?',
  'Muslim and Western paleographers (Efim Rezvan and François Déroche) openly distinguish between 1st-century AH Ḥijāzī codices (like Marcel 5, 17, 18/2, and 19) and the St. Petersburg / Katta-Langar Codex (Institute of Oriental Studies E-20, 97 folios covering ~40% of the Qurʾān), which dates paleographically to the last quarter of the 8th century CE (2nd century AH; C14 781–995 CE at 68.3%). Far from being an embarrassment, its 97 folios across St. Petersburg and Uzbekistan demonstrate the seamless transition from late Ḥijāzī to early Abbasid Kufic and the rapid trans-regional spread of the standardized text from Syria to Central Asia.',
  'The St. Petersburg / Katta-Langar Qurʾān (Codex E-20, 97 folios, ~40% of the Qurʾān, late 8th c. CE)',
  [
    '01 · 97 folios (~40% of the Qurʾān) across Russia & Uzbekistan: The main body of 81 folios is housed at the Institute of Oriental Studies in St. Petersburg (purchased in 1936 from an elderly woman who likely took it from the library of 19th-century Tripolitanian Arab-Christian scholar Prof. Irinei Nofal, pointing to Syrian provenance), while 16 sister folios survive in Uzbekistan: 12 in Katta-Langar, 2 in Bukhara (Ibn Sīnā Library), 1 in Tashkent (Bīrūnī Institute), and 1 in the Muslim Board Library (Tashkent).',
    '02 · Paleographic & radiocarbon dating (Efim Rezvan & François Déroche): Both Efim Rezvan and François Déroche assign the codex to the last quarter of the 8th century CE (2nd century AH), consistent with its 68.3% radiocarbon range of 781–995 CE—confirming that its popular "ʿUthmān" label is a pious legend shared by several monumental codices.',
    '03 · Transitional late-Ḥijāzī script & illumination by two scribes: Copied by two hands—Scribe A (less uniform, 23–31 lines/page) and Scribe B (more regular, 21–26 lines/page)—in late Ḥijāzī transitioning to early Abbasid Kufic, it features consonant dots (e.g., differentiating ت and ث), golden "d"-shaped markers every 5th verse, decorative rosettes every 10th verse, and red/green illuminated sūra dividers.'
  ],
  ['Efim A. Rezvan, The Qurʾān of ʿUthmān (St. Petersburg, Katta-Langar, Bukhara, Tashkent) (2004)','François Déroche, Paleographic Assessment of St. Petersburg Codex E-20','Islamic Awareness, "The St. Petersburg / Katta-Langar Qurʾān"'],
  [],
  {
    facts:[
      ['Total Scope','97 fols. (~40% Qurʾān): 81 St. Petersburg + 12 Katta-Langar + 4 Bukhara/Tashkent'],
      ['Rezvan & Déroche','Dated to last quarter of 8th c. CE (2nd c. AH; C14: 781–995 CE at 68.3%)'],
      ['Two Scribes','Scribe A (23–31 lines/page) & Scribe B (21–26 lines/page), late Ḥijāzī/Kufic'],
      ['Provenance','Syria (via Prof. Irinei Nofal of Tripoli) → Central Asia → St. Petersburg (1936)']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Isn’t the St. Petersburg "ʿUthmān Qurʾān" (Katta-Langar) actually from the late 8th century?',
  theyWho:'Watch out · if they say',
  who:'Distinguish 2nd-c. AH Codex E-20 (~40% Qurʾān) from the 1st-c. AH Marcel codices'
});

card('islam/quran/preservation/st-petersburg-marcel-codices',{
  title:'The St. Petersburg Marcel Codices (Marcel 5, 17, 18/2, 19) & the Katta-Langar Codex (E-20)',
  k:'National Library of Russia · Marcel 5 (C14 652–694 CE) · Marcel 17, 18/2, 19 · Katta-Langar',
  blurb:'1st-century AH Ḥijāzī codices Marcel 5 (~15–20% Qurʾān, C14 652–694 CE at 89.3%), Marcel 17 (~14.7%), Marcel 18/2 (~9.5%) & Marcel 19 (~6.8%), plus 2nd-century AH St. Petersburg / Katta-Langar Codex E-20 (97 fols., ~40%).',
  claim:'The Qurʾānic manuscripts in St. Petersburg are late 8th- or 9th-century copies falsely attributed to ʿUthmān.',
  tree:P(N(
    MAR,
    'The famous St. Petersburg Qurʾān dates to the late 8th century, proving Russia’s early Qurʾānic manuscripts are much later than the 1st century AH.',
    'Critics conflate two different collections in St. Petersburg: while the 97-folio St. Petersburg / Katta-Langar Codex (Institute of Oriental Studies E-20, ~40% of the Qurʾān) is a late-8th-century transitional late-Ḥijāzī/Kufic witness (Efim Rezvan; François Déroche), the National Library of Russia also houses the 1st-century AH Fusṭāṭ Ḥijāzī codices collected by Jean-Joseph Marcel—including Codex Marcel 5 (~15–20% of the Qurʾān, C14-dated to 652–694 CE with 89.3% probability), Codex Marcel 17 (~14.7%, Sūras 2–6, ca. 670–700 CE), Codex Marcel 18/2 (23 folios, ~9.5%, Q 25.72–43.17, ca. 650–700 CE), and Codex Marcel 19 (15 folios, ~6.8%, Sūras 18–28, ca. 650–700 CE).',
    'Four 1st-century AH Ḥijāzī Marcel codices (~46–51% combined coverage) plus the 8th-century Katta-Langar Codex',
    [
      '01 · Codex Marcel 5 (~15–20% of the Qurʾān, C14 652–694 CE at 89.3%): Radiocarbon analysis places Marcel 5 in 652–763 CE (95.4%), with 89.3% of that probability concentrated in 652–694 CE—the era of ʿUthmān (d. 656), ʿAlī (d. 661), and the early Umayyads (vs. 6.1% for 747–763 CE).',
      '02 · Codex Marcel 17 (~14.7% of the Qurʾān, ca. 670–700 CE): Written in early, right-slanted unpointed Ḥijāzī script from the late 1st century AH, Marcel 17 preserves long, continuous blocks across Sūras 2–6.',
      '03 · Codex Marcel 18/2 (~9.5%, 23 folios) & Codex Marcel 19 (~6.8%, 15 folios): Both dated to the 1st century AH (ca. 650–700 CE). Marcel 18/2 (20 fols. in St. Petersburg + 3 fols. in Paris BnF Arabe 328d; 32.5 × 25 cm, Déroche B1a Ḥijāzī, black ink, lead-point margin lines) covers Q 25.72–43.17. Marcel 19 (13 fols. in St. Petersburg + 2 fols. in Paris BnF Arabe 328f; 29.1 × 21.0 cm, Déroche Ḥijāzī I, pale brown ink, 3×2 oval-dot verse markers) covers Q 18.29–110, 19.1–98, 23.75–118, 24.1–64, 25.1–77, 26.1–51, and 28.10–32.',
      '04 · The St. Petersburg / Katta-Langar Qurʾān (97 folios, ~40% of the Qurʾān, late 8th c. CE): Housed at the Institute of Oriental Studies in St. Petersburg (81 fols., ex-library of Prof. Irinei Nofal) and in Uzbekistan (12 fols. Katta-Langar, 2 Bukhara, 2 Tashkent), this two-scribe codex (dated by Efim Rezvan and Déroche to the last quarter of the 8th century CE; C14 781–995 CE at 68.3%) shows the spread of the standardized text from Syria into Central Asia.'
    ],
    ['Corpus Coranicum C14 Report (Codex Marcel 5)','François Déroche, La transmission écrite du Coran & Marcel Collection Studies','Efim A. Rezvan, The Qurʾān of ʿUthmān (St. Petersburg, Katta-Langar, Bukhara, Tashkent) (2004)'],
    [marTrapA,marTrapB,marTrapC],
    {
      facts:[
        ['Codex Marcel 5','~15–20% Qurʾān; C14: 652–694 CE (89.3% prob.) / 652–763 CE (95.4%)'],
        ['Codex Marcel 17','~14.7% Qurʾān (Sūras 2–6 continuous), ca. 670–700 CE (unpointed Ḥijāzī)'],
        ['Marcel 18/2 & 19','23 fols. (~9.5%, Q 25–43) & 15 fols. (~6.8%, Q 18–28), ca. 650–700 CE'],
        ['Katta-Langar / E-20','97 fols. (~40% Qurʾān, St. Petersburg & Uzbekistan), late 8th c. CE']
      ],
      quotes:[
        {by:'Efim Rezvan & François Déroche (on the St. Petersburg / Katta-Langar Codex)',en:'Its 97 late-8th-century folios (~40% of the Qurʾān) attest to early trans-regional standardization from Syria to Central Asia.',ref:'Rezvan (2004) / Islamic Awareness'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'1st-Century AH Marcel Codices (NLR)',
          items:[
            'Marcel 5: ~15–20% of Qurʾān, C14 652–694 CE (89.3% probability)',
            'Marcel 17: ~14.7% of Qurʾān (Sūras 2–6), ca. 670–700 CE Ḥijāzī',
            'Marcel 18/2 (~9.5%, Q 25–43) & Marcel 19 (~6.8%, Q 18–28), ca. 650–700 CE'
          ]
        },
        right:{
          title:'2nd-Century AH Katta-Langar Codex (IOS)',
          items:[
            '97 folios (~40% of Qurʾān): 81 St. Petersburg + 16 across Uzbekistan',
            'Transitional late-Ḥijāzī / early Abbasid Kufic by Two Scribes (A & B)',
            'Dated to late 8th c. CE (Rezvan & Déroche; C14 781–995 CE at 68.3%)'
          ]
        }
      }
    }
  ),{
    who:'Distinguish the 1st-century AH Marcel codices from the 8th-century Katta-Langar Codex',
    forkTitle:'Three follow-up questions they ask',
    forkSub:'Check Marcel 5’s C14 date & Marcel 17, inspect Marcel 18/2 & 19, or clarify the Katta-Langar Codex'
  }),
  sum:'St. Petersburg preserves both a cluster of 1st-century AH Ḥijāzī codices—Marcel 5 (~15–20%, C14 652–694 CE at 89.3%), Marcel 17 (~14.7%), Marcel 18/2 (~9.5%), and Marcel 19 (~6.8%)—and the late-8th-century Katta-Langar Codex (97 folios, ~40% of the Qurʾān across Russia and Uzbekistan).'
});

/* ============================================================================
   6. NEW Tactical Playbook card: islam/quran/preservation/codex-mashhad-and-ali-manuscript
      Combines: codex_mashhad (1390071613869002792) & ali_manuscript (1390066631018938519)
   ============================================================================ */
const MSH=AV2('#codex-masshad · #ali-ra-manuskript','1390071613869002792');
const MSH_1=AV2('#codex-masshad','1390071613869002792');
const MSH_ALI=AV2('#ali-ra-manuskript','1390066631018938519');

const mshTrapA=P(N(
  MSH_1,
  'Codex Mashhad originally had Ibn Masʿūd’s sūra order before someone scraped and rearranged it to match ʿUthmān’s order—doesn’t that prove the Qurʾān was altered?',
  'On the contrary, Codex Mashhad (Āstān-i Quds Library, Iran; preserving over 90% of the Qurʾān, C14-dated to 660–772 CE at 95.4% with peak 53.7% probability in 660–687 CE) provides two devastating proofs for Islamic tradition: first, its original Ḥijāzī layer physically confirms Muslim reports that Ibn Masʿūd arranged the sūras differently (e.g., Sūra 5 al-Māʾida followed directly by Sūra 7 al-Aʿrāf) and used variant sūra titles (like "al-Nabī" for Sūra 66 al-Taḥrīm); second, despite the different sūra sequence, the internal wording of the verses themselves is virtually identical to today’s Qurʾān!',
  'Why Codex Mashhad (>90% of the Qurʾān, C14 660–687 CE peak) proves verse stability across sūra orders',
  [
    '01 · Radiocarbon date & >90% coverage (Āstān-i Quds Library, Mashhad): Likely copied in the Ḥijāz (Medina?) in early thin, vertical Ḥijāzī script (with red alif markers every 5th verse and consonant dots) before travelling to Iraq and Khorasan, Codex Mashhad preserves over 90% of the Qurʾān. Radiocarbon testing places it in 660–772 CE (95.4%), with its highest probability (53.7%) in 660–687 CE (1st century AH; second phase 32.4%: 743–761 CE).',
    '02 · Physical proof of Ibn Masʿūd’s sūra sequence & sūra names: The original scriptio inferior did not follow the ʿUthmānic sūra sequence, but instead matched the sūra order reported in classical Islamic sources for the Companion ʿAbd Allāh ibn Masʿūd (for example, transitioning directly from Sūra 5 al-Māʾida to Sūra 7 al-Aʿrāf) and preserved archaic sūra titles such as "al-Nabī" instead of "al-Taḥrīm" for Sūra 66.',
    '03 · Identical verse wording despite later ʿUthmānic reordering: When a later Kufic scribe adapted the codex to the ʿUthmānic standard (scraping and overwriting sūra beginnings/endings and inserting new leaves so that Sūra 5 → Sūra 6 al-Anʿām → Sūra 7), the internal wording of the verses required no rewriting—proving that even codices with Ibn Masʿūd’s sūra order transmitted the same stable Qurʾānic text.'
  ],
  ['Morteza Karimi-Nia, Codex Mashhad (Āstān-i Quds Library MSS 18 & 4116) Study & Radiocarbon Analysis','Islamic Awareness, "Codex Mashhad — An Early Qurʾān in Ibn Masʿūd’s Arrangement of Sūras, 1st Century Hijra"'],
  [],
  {
    facts:[
      ['Coverage & Location','>90% of the Qurʾān; Āstān-i Quds Library, Mashhad (Iran)'],
      ['C14 Dating','660–772 CE (95.4%); peak 53.7% probability in 660–687 CE'],
      ['Original Sūra Order','Ibn Masʿūd’s sequence (e.g. Sūra 5 → Sūra 7; Sūra 66 titled "al-Nabī")'],
      ['Crucial Finding','Internal verse wording matches today’s Qurʾān despite sūra reordering']
    ],
    quotes:[
      {by:'Codex Mashhad Analysis (Morteza Karimi-Nia / Islamic Awareness)',en:'Despite originally following Ibn Masʿūd’s sūra sequence, the wording of the verses is virtually identical to today’s Qurʾān.',ref:'Codex Mashhad Study'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Codex Mashhad originally had Ibn Masʿūd’s sūra order before being scraped into ʿUthmān’s order!',
  theyWho:'Watch out · if they say',
  who:'Show how Codex Mashhad (>90% Qurʾān) proves identical verse wording across sūra orders'
});

const mshTrapB=P(N(
  MSH_ALI,
  'Muslims claim the Ṣanʿāʾ muṣḥaf was written by ʿAlī ibn Abī Ṭālib himself—isn’t that a fake attribution?',
  'Muslim scholars themselves debunked that late binding note: Dr. Tayyar Altıkulaç (who published the full facsimile edition in 2011), al-Akwaʿ, and Muhittin Serin pointed out that the attribution to ʿAlī rests solely on a modern note pasted inside the cover in 1395 AH / 1975 CE ("copied by the father of the two grandsons") and an unverified early-20th-century remark mentioning ʿAlī or Zayd ibn Thābit. Paleographically, the manuscript is a monumental Umayyad Kufic codex from the late 1st or early 2nd century AH (ca. 700–750 CE) that preserves 275 folios (~86% of the Qurʾān) in the exact modern sūra order with Abū al-Aswad al-Duʾalī’s red vowel dots.',
  'The Ṣanʿāʾ Muṣḥaf attributed to ʿAlī (275 folios, ~86% of the Qurʾān, late 1st / early 2nd c. AH)',
  [
    '01 · Scholarly dating vs. the 1975 binding note (Altıkulaç 2011): Preserved in al-Jāmiʿ al-Kabīr in Ṣanʿāʾ (Yemen) and published in facsimile by Tayyar Altıkulaç (2011), this codex carries no early colophon naming ʿAlī; that claim comes from a 1395 AH / 1975 CE flyleaf note. Altıkulaç dates its script and red-dot vocalization (the system of Abū al-Aswad al-Duʾalī, d. 69 AH) to the 2nd half of the 1st century AH, while al-Akwaʿ and Serin place it in the early 2nd century AH (ca. 700–750 CE, Umayyad period).',
    '02 · 275 folios preserving ~86% of the Qurʾān in modern sūra order: Measuring 34 × 36 cm in slightly backward-leaning Umayyad Kufic script, its 275 surviving leaves cover ~86% of the Qurʾān—including Q 2.144–286 (fols. 1b–15a), Āl ʿImrān (fols. 15b–29b, gap at vv. 60–64), al-Tawba 2–129 (fols. 85b–96a, with fols. 84–85 replaced later), al-Zukhruf (fols. 243a–246a), and al-Ḥujurāt (fols. 257b–259a)—with missing parts in Sūra 1, early Sūra 2, and Sūra 24.',
    '03 · Early vocalization & codicological markers: Red dots mark short vowels (after Abū al-Aswad al-Duʾalī), strokes mark consonant diacritics, 5–6 strokes mark verse endings, decorated circles mark every 10th verse, rectangles mark every 100th verse, and horizontal patterned bands separate the sūras.'
  ],
  ['Dr. Tayyar Altıkulaç, Al-Muṣḥaf al-Sharīf Attributed to ʿAlī b. Abī Ṭālib (The Copy of Ṣanʿāʾ) (IRCICA, 2011)','Islamic Awareness, "The ‘Qurʾān Of ʿAlī b. Abī Ṭālib’ (The Ṣanʿāʾ Muṣḥaf) From 1st / 2nd Century Hijra" (2012)'],
  [],
  {
    facts:[
      ['Location & Size','al-Jāmiʿ al-Kabīr, Ṣanʿāʾ; 275 fols. (34 × 36 cm) = ~86% of Qurʾān'],
      ['Scholarly Date','Late 1st / early 2nd c. AH (ca. 700–750 CE; Altıkulaç, al-Akwaʿ, Serin)'],
      ['Why Not ʿAlī’s Hand','Attribution came from a 1395 AH / 1975 CE binding note, not the MS'],
      ['Vocalization','Red vowel dots (Abū al-Aswad al-Duʾalī, d. 69 AH), 10- & 100-verse marks']
    ],
    quotes:[
      {by:'Dr. Tayyar Altıkulaç (2011 Facsimile Edition)',en:'The Ṣanʿāʾ Muṣḥaf preserves 86% of the Qurʾān from the late 1st or early 2nd century AH with red-dot vocalization.',ref:'IRCICA Facsimile Edition (2011)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'What about the Ṣanʿāʾ Qurʾān attributed to ʿAlī ibn Abī Ṭālib—isn’t that a forged relic?',
  theyWho:'Watch out · if they say',
  who:'Cite Altıkulaç’s 2011 edition of the Ṣanʿāʾ Muṣḥaf (275 fols., ~86% Qurʾān)'
});

card('islam/quran/preservation/codex-mashhad-and-ali-manuscripts',{
  title:'Codex Mashhad (>90% Qurʾān, Ibn Masʿūd Sūra Order) & the Ṣanʿāʾ "ʿAlī" Muṣḥaf (~86% Qurʾān)',
  k:'Codex Mashhad (C14 660–687 CE) · Ibn Masʿūd Order · Ṣanʿāʾ "ʿAlī" Muṣḥaf (275 fols.)',
  blurb:'Codex Mashhad (>90% Qurʾān, C14 peak 660–687 CE, originally in Ibn Masʿūd’s sūra sequence with identical verse wording) & the Ṣanʿāʾ Muṣḥaf attributed to ʿAlī (275 fols., ~86% Qurʾān, ca. 700–750 CE).',
  claim:'No nearly complete 1st-century Qurʾān manuscripts survive, and reports about Companion codices like Ibn Masʿūd’s were invented later.',
  tree:P(N(
    MSH,
    'All 1st-century Qurʾān manuscripts are small fragments, and stories about Companion codices like Ibn Masʿūd’s are unverified legends.',
    'Two massive 1st/early-2nd-century AH manuscripts refute both claims at once: Codex Mashhad (Āstān-i Quds Library, Iran; radiocarbon-dated to 660–772 CE at 95.4% with a 53.7% peak in 660–687 CE) preserves over 90% of the Qurʾān in early Ḥijāzī script and originally followed Ibn Masʿūd’s sūra sequence (e.g., Sūra 5 → Sūra 7) while transmitting the exact same internal verse wording as today’s Qurʾān; and the Ṣanʿāʾ Muṣḥaf attributed to ʿAlī (al-Jāmiʿ al-Kabīr, edited by Tayyar Altıkulaç in 2011; late 1st / early 2nd century AH, ca. 700–750 CE) preserves 275 folios (~86% of the Qurʾān) in the standard sūra sequence with Abū al-Aswad al-Duʾalī’s red vowel dots.',
    'Two near-complete early witnesses: Codex Mashhad (>90%) and the Ṣanʿāʾ "ʿAlī" Muṣḥaf (~86%)',
    [
      '01 · Codex Mashhad (>90% of the Qurʾān, C14 peak 660–687 CE at 53.7%): Housed in the Āstān-i Quds Library in Mashhad (Iran), this 1st-century AH Ḥijāzī codex (red alif every 5th verse, consonant dots, no vocalization) was C14-dated to 660–772 CE (95.4%: 53.7% in 660–687 CE; 32.4% in 743–761 CE). Its original layer physically proves that Ibn Masʿūd’s distinct sūra order (such as Sūra 5 al-Māʾida → Sūra 7 al-Aʿrāf) and sūra titles ("al-Nabī" for Sūra 66) existed, before a later Kufic hand scraped and re-ordered the sūra transitions to the ʿUthmānic sequence (Sūra 5 → 6 → 7)—while leaving the internal verse text intact because its wording already matched the standard Qurʾān.',
      '02 · The Ṣanʿāʾ Muṣḥaf attributed to ʿAlī (275 folios, ~86% of the Qurʾān, late 1st / early 2nd c. AH): Housed in the Great Mosque of Ṣanʿāʾ and published in facsimile by Dr. Tayyar Altıkulaç (2011), this 34 × 36 cm Umayyad Kufic manuscript (dated by Altıkulaç to the 2nd half of the 1st c. AH and by al-Akwaʿ & Serin to the 2nd c. AH / ca. 700–750 CE) preserves ~86% of the Qurʾān in modern sūra order with red vowel dots (system of Abū al-Aswad al-Duʾalī, d. 69 AH), 10-verse circles, and 100-verse rectangles—while Muslim scholarship transparently notes that its attribution to ʿAlī stems from a 1975 flyleaf note rather than the ancient manuscript.'
    ],
    ['Morteza Karimi-Nia, Codex Mashhad Study & Radiocarbon Analysis','Dr. Tayyar Altıkulaç, Al-Muṣḥaf al-Sharīf Attributed to ʿAlī b. Abī Ṭālib (The Copy of Ṣanʿāʾ) (2011)','Islamic Awareness (2012)'],
    [mshTrapA,mshTrapB],
    {
      facts:[
        ['Codex Mashhad','>90% of Qurʾān; C14 peak 660–687 CE (53.7%) / 660–772 CE (95.4%)'],
        ['Ibn Masʿūd Proof','Original layer had Sūra 5 → Sūra 7 & "al-Nabī" (Sūra 66), same verse text'],
        ['Ṣanʿāʾ "ʿAlī" Muṣḥaf','275 fols. (34 × 36 cm) = ~86% of Qurʾān, ca. 700–750 CE'],
        ['Altıkulaç (2011)','Debunks 1975 binding note; documents early red-dot vocalization']
      ],
      quotes:[
        {by:'Codex Mashhad Verdict',en:'Codex Mashhad physically proves that Ibn Masʿūd’s sūra order existed while confirming that the wording of the verses themselves remained stable.',ref:'Codex Mashhad Analysis'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Codex Mashhad (Āstān-i Quds)',
          items:[
            'Over 90% of the Qurʾān in 1st-century AH Ḥijāzī script',
            'C14-dated 660–772 CE (95.4%), peak 53.7% in 660–687 CE',
            'Original Ibn Masʿūd sūra sequence later adjusted to ʿUthmānic order; identical verse text'
          ]
        },
        right:{
          title:'Ṣanʿāʾ "ʿAlī" Muṣḥaf (Jāmiʿ al-Kabīr)',
          items:[
            '275 folios (~86% of the Qurʾān) in Umayyad Kufic (34 × 36 cm)',
            'Dated late 1st / early 2nd c. AH (ca. 700–750 CE) by Altıkulaç (2011)',
            'Standard sūra sequence with Abū al-Aswad al-Duʾalī’s red vowel dots'
          ]
        }
      }
    }
  ),{
    who:'Present Codex Mashhad (>90%) & the Ṣanʿāʾ "ʿAlī" Muṣḥaf (~86%)',
    forkTitle:'Two follow-up objections they raise',
    forkSub:'Explain Codex Mashhad’s sūra reordering or address the Ṣanʿāʾ "ʿAlī" attribution'
  }),
  sum:'Preserving over 90% and ~86% of the Qurʾān respectively, Codex Mashhad (C14 peak 660–687 CE) and the Ṣanʿāʾ Muṣḥaf edited by Altıkulaç (ca. 700–750 CE) confirm the stability of the Qurʾānic verse text even across manuscripts that originally carried Ibn Masʿūd’s sūra sequence.'
});

/* ============================================================================
   7. NEW Tactical Playbook card: islam/quran/preservation/uthmanic-codices-istanbul-tashkent-cairo
      Combines: uthman_istanbul (1390059255352131734), uthman_uzbekistan (1390057503399870656),
      uthman_cairo (1390061351644168263)
   ============================================================================ */
const UTH=AV2('#uthman-istanbul · #uthman-kairo · #ʿuthmān-usbekistan','1390059255352131734');
const UTH_IST=AV2('#uthman-istanbul','1390059255352131734');
const UTH_CAI=AV2('#uthman-kairo','1390061351644168263');
const UTH_TAS=AV2('#ʿuthmān-usbekistan','1390057503399870656');

const uthTrapA=P(N(
  UTH_IST,
  'The Topkapı Qurʾān in Istanbul is displayed as ʿUthmān’s personal copy, yet paleographers date it to the late 1st or early 2nd century AH—so Muslim claims about preservation are based on fake relics!',
  'Muslim scholars—led by Dr. Tayyar Altıkulaç, who published the critical edition of the Topkapı Muṣḥaf—openly state that it is not one of ʿUthmān’s original mid-7th-century codices, because its Kufic script, illuminated sūra rectangles, 5- and 10-verse rosettes, and red vowel dots follow the system of Abū al-Aswad al-Duʾalī (d. 688 CE). What makes the Topkapı Muṣḥaf (408 parchment folios, 41 × 46 cm, gifted in 1811 CE by Muḥammad ʿAlī Pasha of Egypt to Ottoman Sultan Maḥmūd II) monumental is that it preserves 99% of the entire Qurʾān (missing only 2 leaves) from the late 1st / early 2nd century AH.',
  'The Topkapı Palace Muṣḥaf (Istanbul): 408 folios preserving 99% of the Qurʾān from the late 1st / early 2nd c. AH',
  [
    '01 · 99% complete across 408 parchment folios (41 × 46 cm): Housed in the Sacred Relics Department of the Topkapı Palace Museum in Istanbul after being sent from Egypt by Mehmed Ali Pasha to Sultan Mahmud II in 1811 CE, the codex lacks only 2 folios out of 410 (preserving 99% of the Qurʾānic text in today’s exact sūra order, with fols. 1b–6b and 11a–11b written in a slightly different hand as possible later replacements).',
    '02 · Transparent paleographic dating (late 1st / early 2nd c. AH): Because it employs Kufic calligraphy, consonant diacritical strokes, decorated sūra bands, 5-/10-verse rosettes, 100-/200-verse markers, and red vowel dots (1 dot = short vowel, 2 dots = tanwīn) devised by Abū al-Aswad al-Duʾalī (d. 688 CE), scholars assign it to the Umayyad era (late 7th / early 8th century CE) rather than ʿUthmān’s lifetime (d. 656 CE).'
  ],
  ['Dr. Tayyar Altıkulaç, Al-Muṣḥaf al-Sharīf Attributed to ʿUthmān bin ʿAffān (The Copy at the Topkapı Palace Museum) (IRCICA, 2007)','Islamic Awareness, "The ‘ʿUthmān Muṣḥaf’ At The Topkapı Museum, Istanbul"'],
  [],
  {
    facts:[
      ['Location & Gift','Topkapı Palace, Istanbul; gifted 1811 by Mehmed Ali Pasha to Mahmud II'],
      ['Completeness','408 parchment fols. (41 × 46 cm) = 99% of the Qurʾān (only 2 fols. missing)'],
      ['Paleographic Date','Late 1st / early 2nd c. AH (late 7th / early 8th c. CE, Umayyad era)'],
      ['Vocalization','Red vowel dots (1 = vowel, 2 = tanwīn) after Abū al-Aswad al-Duʾalī (d. 688)']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The Topkapı Qurʾān in Istanbul isn’t actually ʿUthmān’s personal copy!',
  theyWho:'Watch out · if they say',
  who:'Show how the Topkapı Muṣḥaf preserves 99% of the Qurʾān from the late 1st / early 2nd c. AH'
});

const uthTrapB=P(N(
  UTH_CAI,
  'What about the Cairo al-Ḥusayn Mosque Qurʾān—isn’t that also falsely claimed to be ʿUthmān’s original?',
  'Leading Arab and Muslim specialists—Ṣalāḥ al-Dīn al-Munajjid, Dr. Tayyar Altıkulaç, and Dr. Suʿād Māhir—explicitly classify the Cairo al-Ḥusayn Mosque Muṣḥaf (now at the Central Library for Islamic Manuscripts at Masjid al-Sayyida Zaynab) as a late-1st / early-2nd-century AH Umayyad codex, with al-Munajjid identifying it as a copy commissioned under ʿAbd al-ʿAzīz ibn Marwān (Governor of Egypt, ca. 700 CE). Measuring 57 × 68 cm and weighing 80 kg across 1,087 parchment folios (missing only 4 leaves), it preserves 99% of the entire Qurʾān from ca. 700 CE.',
  'The Cairo al-Ḥusayn Mosque Muṣḥaf: 1,087 folios (80 kg) preserving 99% of the Qurʾān from ca. 700 CE',
  [
    '01 · Monumental physical scale (1,087 folios, 57 × 68 cm, 80 kg, 99% complete): One of the largest surviving ancient Qurʾān manuscripts in the world, it contains 1,087 parchment leaves (only 4 leaves missing = 99% of the Qurʾān; 12 lines/page, occasionally 8–10) in well-formed Kufic with sparse diacritics, oblique verse-end strokes, polychrome (blue/green/red) 10-verse medallions resembling the Samarqand codex, and rectangular sūra bands.',
    '02 · Documented history & expert Umayyad dating (ca. 700 CE): Traced from the Ayyubid Madrasa al-Fāḍiliyya (1200 CE) to the Mamluk Mausoleum of Sultan al-Ghūrī (1516 CE, where it was restored and later replacement leaves like fols. 43, 500, and 1086 were added), then to al-Ḥusayn Mosque (1887 CE) and Sayyida Zaynab Central Library. Ṣalāḥ al-Dīn al-Munajjid attributes it to Egypt’s governor ʿAbd al-ʿAzīz ibn Marwān (ca. 700 CE), and Tayyar Altıkulaç and Suʿād Māhir confirm its late-1st / early-2nd-century AH date.'
  ],
  ['Dr. Tayyar Altıkulaç, Al-Muṣḥaf al-Sharīf Attributed to ʿUthmān bin ʿAffān (The Copy at al-Mashhad al-Ḥusaynī in Cairo) (IRCICA, 2009)','Ṣalāḥ al-Dīn al-Munajjid, Dirāsāt fī Tārīkh al-Khaṭṭ al-ʿArabī (1972); Dr. Suʿād Māhir','Islamic Awareness, "The ‘ʿUthmān Muṣḥaf’ At Al-Ḥusayn Mosque, Cairo"'],
  [],
  {
    facts:[
      ['Scale & Weight','1,087 parchment fols. (57 × 68 cm, 80 kg) = 99% of the Qurʾān (4 fols. missing)'],
      ['Expert Dating','Late 1st / early 2nd c. AH (Altıkulaç, Suʿād Māhir)'],
      ['Al-Munajjid','Identifies it as the codex of ʿAbd al-ʿAzīz ibn Marwān (Egypt, ca. 700 CE)'],
      ['Provenance Chain','Madrasa al-Fāḍiliyya (1200) → Sultan al-Ghūrī (1516) → al-Ḥusayn Mosque (1887)']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'What is the real date and completeness of the giant Cairo al-Ḥusayn Mosque Qurʾān?',
  theyWho:'Watch out · if they say',
  who:'Cite al-Munajjid & Altıkulaç on the 1,087-folio Cairo Muṣḥaf (99% complete, ca. 700 CE)'
});

const uthTrapC=P(N(
  UTH_TAS,
  'And the Tashkent (Samarqand) "ʿUthmān Qurʾān" in Uzbekistan—when was it actually written and how much survives?',
  'The Tashkent (Samarqand) Kufic Muṣḥaf—housed at the Islamic Institute in Tashkent with dispersed leaves in Doha, New York, and Toronto—preserves ~378 of its original ~950 parchment pages (about one-third of the Qurʾān). While Oxford radiocarbon testing gave a 68% range of 640–765 CE (95%: 595–855 CE), paleographers like François Déroche date its monumental unpointed Kufic script to the early Abbasid reign of Caliph al-Mahdī (r. 775–785 CE). Thus, our carbon-dated 1st-century proof comes from the Ḥijāzī codices, while Topkapı (99%), Cairo (99%), and Tashkent (~33%) prove complete imperial transmission across the 1st and 2nd centuries AH.',
  'The Tashkent / Samarqand Muṣḥaf (~378 of ~950 pages, ~1/3 of the Qurʾān): Oxford C14 vs. Déroche paleography',
  [
    '01 · Oxford radiocarbon vs. Déroche’s paleographic dating: Oxford C14 testing on the Tashkent parchment yielded 640–765 CE (68% probability) and 595–855 CE (95% probability). On paleographic and art-historical grounds (comparing its large, geometric, unpointed and unvocalized Kufic lettering with dated inscriptions like the Dome of the Rock), François Déroche and other specialists assign its execution to the late 8th century under Abbasid Caliph al-Mahdī (r. 775–785 CE).',
    '02 · ~378 surviving pages (~1/3 of the Qurʾān): Originally comprising roughly 950 large parchment pages, about 378 pages survive today—primarily at the Islamic Institute in Tashkent (Uzbekistan), with individual leaves held in museums in Doha, New York, and Toronto.'
  ],
  ['François Déroche, Note on the Tashkent / Samarqand Muṣḥaf (Reign of Caliph al-Mahdī, 775–785 CE)','Oxford Radiocarbon Accelerator Unit (Tashkent Qurʾān: 640–765 CE at 68% / 595–855 CE at 95%)','Islamic Awareness, "The Samarqand (Tashkent) Muṣḥaf"'],
  [],
  {
    facts:[
      ['Location & Scope','Tashkent Islamic Institute (+ Doha, NY, Toronto): ~378 of ~950 pages (~1/3 Qurʾān)'],
      ['Oxford C14','640–765 CE (68% probability) / 595–855 CE (95% probability)'],
      ['Déroche Dating','Late 8th c. CE under Abbasid Caliph al-Mahdī (r. 775–785 CE)'],
      ['Script Style','Monumental angular Kufic without vowel marks or consonant dots']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Isn’t the Tashkent (Samarqand) Qurʾān from the late 8th century with only a third of the text left?',
  theyWho:'Watch out · if they say',
  who:'Give the exact Tashkent C14 (640–765 CE) & paleographic data (~378/950 pages)'
});

card('islam/quran/preservation/uthmanic-codices-istanbul-tashkent-cairo',{
  title:'The Monumental "ʿUthmānic" Codices of Istanbul (Topkapı), Cairo (al-Ḥusayn) & Tashkent (Samarqand)',
  k:'Topkapı Muṣḥaf (99%) · Cairo al-Ḥusayn (99%, 1,087 fols.) · Tashkent Samarqand (~33%)',
  blurb:'Why Muslim & Western scholars date Topkapı (408 fols., 99% Qurʾān) and Cairo al-Ḥusayn (1,087 fols., 80 kg, 99% Qurʾān) to the late 1st / early 2nd c. AH (ca. 700 CE) and Tashkent (~378 pages, C14 640–765 CE) to the 8th c. CE.',
  claim:'Because the famous "ʿUthmān Qurʾāns" in Istanbul, Cairo, and Tashkent were not personally written under ʿUthmān, Muslims have no complete early Qurʾāns.',
  tree:P(N(
    UTH,
    'The famous "ʿUthmān Qurʾāns" in Istanbul, Cairo, and Tashkent are not actual mid-7th-century originals from Caliph ʿUthmān—so early Qurʾānic preservation is a myth.',
    'Muslim scholarship itself led the scientific paleographic analysis of these codices (e.g., Dr. Tayyar Altıkulaç’s critical editions of Topkapı and Cairo, and Ṣalāḥ al-Dīn al-Munajjid’s attribution of the Cairo codex to Egyptian governor ʿAbd al-ʿAzīz ibn Marwān ca. 700 CE). While 1st-century AH textual proof already rests on dozens of carbon-dated Ḥijāzī manuscripts (such as Ṣanʿāʾ I, Arabe 328c/Birmingham, Is. 1615 I, Qāf 47, Tübingen, Parisino-Petropolitanus, and Mashhad), the Topkapı Palace Muṣḥaf (408 folios = 99% of the Qurʾān) and the Cairo al-Ḥusayn Muṣḥaf (1,087 folios, 80 kg = 99% of the Qurʾān) provide two virtually complete 99%-intact Kufic Qurʾāns from the late 1st / early 2nd century AH (late 7th / early 8th century CE), complemented by the Tashkent/Samarqand Muṣḥaf (~378 of ~950 pages, ~1/3 of the Qurʾān; Oxford C14 640–765 CE at 68%).',
    'How Topkapı (99%), Cairo al-Ḥusayn (99%), and Tashkent (~33%) anchor full-codex transmission',
    [
      '01 · The Topkapı Palace Muṣḥaf, Istanbul (408 folios, 41 × 46 cm, 99% of the Qurʾān): Gifted in 1811 CE by Mehmed Ali Pasha of Egypt to Ottoman Sultan Mahmud II, it is missing only 2 leaves out of 410. Its Kufic script, decorated sūra rectangles, 5-/10-verse rosettes, 100-/200-verse markers, and red vowel dots (1 dot = vowel, 2 dots = tanwīn, following Abū al-Aswad al-Duʾalī, d. 688 CE) date it to the late 1st / early 2nd century AH (Umayyad period).',
      '02 · The al-Ḥusayn Mosque Muṣḥaf, Cairo (1,087 folios, 57 × 68 cm, 80 kg, 99% of the Qurʾān): Missing only 4 leaves out of 1,091 (12 lines/page in Kufic with blue/green/red 10-verse medallions and rectangular sūra bands) and documented from the Ayyubid Madrasa al-Fāḍiliyya (1200 CE) and Mamluk Sultan al-Ghūrī’s mausoleum (1516 CE) to Sayyida Zaynab Central Library, it is dated by Tayyar Altıkulaç and Suʿād Māhir to the late 1st / early 2nd century AH, and identified by Ṣalāḥ al-Dīn al-Munajjid as the codex commissioned by ʿAbd al-ʿAzīz ibn Marwān (Governor of Egypt, ca. 700 CE).',
      '03 · The Tashkent / Samarqand Muṣḥaf, Uzbekistan (~378 of ~950 pages, ~1/3 of the Qurʾān): Housed at the Islamic Institute in Tashkent (with leaves in Doha, New York, and Toronto), its parchment yielded an Oxford C14 date of 640–765 CE (68%) / 595–855 CE (95%), while François Déroche dates its monumental unpointed Kufic script to the reign of Abbasid Caliph al-Mahdī (r. 775–785 CE).'
    ],
    ['Dr. Tayyar Altıkulaç, Critical Facsimile Editions of the Topkapı (2007) & Cairo al-Ḥusayn (2009) Muṣḥafs (IRCICA)','Ṣalāḥ al-Dīn al-Munajjid (1972); Dr. Suʿād Māhir; François Déroche','Oxford Radiocarbon Accelerator Unit (Tashkent Muṣḥaf)','Islamic Awareness Manuscript Studies'],
    [uthTrapA,uthTrapB,uthTrapC],
    {
      facts:[
        ['Topkapı (Istanbul)','408 fols. (41 × 46 cm) = 99% of Qurʾān; late 1st / early 2nd c. AH'],
        ['Al-Ḥusayn (Cairo)','1,087 fols. (57 × 68 cm, 80 kg) = 99% of Qurʾān; ca. 700 CE (al-Munajjid)'],
        ['Tashkent (Samarqand)','~378 of ~950 pages (~1/3 Qurʾān); C14 640–765 CE (68%), late 8th c. CE'],
        ['Scholarly Honesty','Muslim scholars (Altıkulaç, al-Munajjid) published their true Umayyad/Abbasid dates']
      ],
      quotes:[
        {by:'Ṣalāḥ al-Dīn al-Munajjid & Tayyar Altıkulaç (on the Cairo al-Ḥusayn Muṣḥaf)',en:'Dating to ca. 700 CE under ʿAbd al-ʿAzīz ibn Marwān, its 1,087 folios preserve 99% of the Qurʾānic text.',ref:'Altıkulaç (2009) / al-Munajjid'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['Topkapı Palace Muṣḥaf (Istanbul)','408 parchment folios (41 × 46 cm), 99% of the Qurʾān (only 2 leaves missing), red vowel dots after Abū al-Aswad al-Duʾalī (d. 688 CE), late 1st / early 2nd c. AH'],
          ['Al-Ḥusayn Mosque Muṣḥaf (Cairo)','1,087 parchment folios (57 × 68 cm, 80 kg), 99% of the Qurʾān (only 4 leaves missing), attributed by al-Munajjid to ʿAbd al-ʿAzīz ibn Marwān (Egypt, ca. 700 CE)'],
          ['Tashkent / Samarqand Muṣḥaf (Uzbekistan)','~378 surviving pages out of ~950 (~1/3 of the Qurʾān), Oxford C14 640–765 CE (68%), dated paleographically by Déroche to Caliph al-Mahdī (r. 775–785 CE)']
        ]
      }
    }
  ),{
    who:'Present the 99%-complete Topkapı & Cairo codices alongside Tashkent',
    forkTitle:'Three follow-up claims they make',
    forkSub:'Address the Topkapı Muṣḥaf, the 1,087-folio Cairo Muṣḥaf, or the Tashkent/Samarqand Muṣḥaf'
  }),
  sum:'While 1st-century AH carbon-dated Ḥijāzī codices establish the earliest text, the late-1st/early-2nd-century AH Topkapı Muṣḥaf (408 folios, 99% complete) and Cairo al-Ḥusayn Muṣḥaf (1,087 folios, 99% complete, ca. 700 CE)—together with the 8th-century Tashkent Muṣḥaf (~378 pages)—preserve virtually the entire Qurʾān in monumental Kufic script.'
});

})();
