/* Deenresponds Batch 8B: Islamic Dilemma, Prophetic Authority & Biblical Text — 2026-11-22.
   Integrates 11 Deenresponds channels (server 1328402309297733662) across
   6 new Tactical Debate Playbook cards and 5 add() enrichments
   (4 debate-tree branches + 1 explainer card), referencing all 20 shots/dr8-*.webp scans. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('dr-batch8-dilemma: no card',key); };

const DR=(sub,id)=>({credit:'Deenresponds · '+sub,link:'https://discord.com/channels/1328402309297733662/'+id});
const S=(src,cap)=>({src:'shots/'+src,cap});

/* ============================================================================
   1. NEW Tactical Playbook card: islam/quran/d-ia-quran-surahs/quran-3-7-muhkam-mutashabih
   ============================================================================ */
const Q37=DR('#quran-3-7','1398538228562399232');

const q37TrapA=P(N(
  Q37,
  'Calling verses mutashābih means the Qurʾān’s core creed and laws are vague and unknowable.',
  'Al-Ṭabarī explicitly restricts opacity only to hidden particulars—such as exact eschatological dates or unseen divine mysteries—while affirming that everything required for belief and practice has been clearly explained either in the Qurʾān itself or through the Prophet ﷺ.',
  'Creed and law remain unambiguous under al-Ṭabarī’s rule',
  [
    '01 · Muḥkam as the decisive foundation: In al-Ṭabarī’s analysis of Q 3.7, muḥkam verses are completely clear and decisive in both meaning and legal application, anchoring creed and practice.',
    '02 · Scope of mutashābih limits: Only specific unseen aspects—like exact timings or divine secrets withheld from creation—remain beyond independent human reach.',
    '03 · Prophetic clarification (Sunnah): Every essential point of faith and action needed by believers is clarified either directly by clear Qurʾānic wording or by the Messenger’s ﷺ explanation.'
  ],
  ['Qurʾān 3:7','Tafsīr al-Ṭabarī on Q 3:7'],
  [],
  {
    facts:[
      ['Muḥkamāt','Clear and decisive in meaning and ruling'],
      ['Mutashābihāt','Unseen details (dates, divine secrets) only'],
      ['Essential Creed','Fully clarified via Qurʾān and Sunnah'],
      ['Authority','Imām al-Ṭabarī (Jāmiʿ al-Bayān)']
    ],
    quotes:[
      {by:'Imām al-Ṭabarī (synthesizing Q 3:7)',en:'All of the Qurʾān was revealed as guidance and clarification.',ref:'Tafsīr al-Ṭabarī on 3:7'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'If parts of the Qurʾān are mutashābih, then Muslims cannot even be sure of their own creed and laws!',
  theyWho:'Watch out · if they say',
  who:'Show al-Ṭabarī’s distinction'
});

const q37TrapB=P(N(
  Q37,
  'Why would God reveal verses with multiple meanings or unknown details if humans cannot exhaust them?',
  'Al-Ṭabarī answers that nothing in the Qurʾān lacks benefit: even mutashābih passages fulfill vital spiritual and pedagogical functions—humbly bounding human intellect, testing submission, and rewarding disciplined reflection anchored in the clear muḥkam verses.',
  'Why mutashābih verses still serve guidance and clarification',
  [
    '01 · Nothing superfluous in revelation: Al-Ṭabarī rejects the idea of pointless verses, concluding that the Qurʾān contains nothing humans do not need.',
    '02 · Functional benefit of mutashābihāt: Even where a passage permits multiple readings or withholds a specific detail, it remains purposeful—inviting humility before Allah’s knowledge and disciplined study.',
    '03 · Extracting sound meaning: Rather than blocking understanding, mutashābih verses are interpreted through the clear muḥkam framework so believers benefit without speculative distortion.'
  ],
  ['Qurʾān 3:7','Tafsīr al-Ṭabarī on Q 3:7'],
  [],
  {
    facts:[
      ['Al-Ṭabarī’s Verdict','No verse in the Qurʾān lacks benefit'],
      ['Purpose','Tests humility and rewards sound reflection'],
      ['Method','Anchor mutashābih readings in muḥkam'],
      ['Result','Guidance and clarification throughout']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'If God withholds certain meanings, those Qurʾānic verses serve no practical purpose for readers!',
  theyWho:'Watch out · if they say',
  who:'Explain the purposeful function'
});

card('islam/quran/d-ia-quran-surahs/quran-3-7-muhkam-mutashabih',{
  title:'Qurʾān 3:7: Muḥkam & Mutashābih Verses',
  k:'Tafsīr · Hermeneutics',
  blurb:'Al-Ṭabarī’s conclusion on how clear decisive verses (muḥkamāt) and ambiguous/allegorical verses (mutashābihāt) both serve guidance.',
  claim:'Qurʾān 3:7 admits the Qurʾān contains unintelligible or useless passages whose meaning nobody—or only an elite—can know.',
  tree:P(N(
    Q37,
    'Qurʾān 3:7 concedes that parts of the Qurʾān are ambiguous and useless for human guidance.',
    'Imām al-Ṭabarī’s commentary on Qurʾān 3:7 refutes that caricature: the entire Qurʾān was revealed as guidance and clarification (bayān), containing nothing humans do not need. Muḥkam verses are clear and decisive in meaning and ruling, while mutashābih verses—though carrying multiple nuances or withholding hidden particulars like exact dates—still fulfill a beneficial purpose while every essential of faith and practice remains unmistakably clear.',
    'Al-Ṭabarī on extracting benefit from mutashābih verses',
    [
      '01 · Whole-Qurʾān guidance principle: Al-Ṭabarī concludes that the stronger scholarly view affirms the entire Qurʾān came down as guidance and clarification, with nothing redundant.',
      '02 · Clear vs. multifaceted categories: Muḥkam denotes verses decisive in sense and legal application; mutashābih covers expressions with multiple valid facets or unseen particulars.',
      '03 · Bounded unknowns, clear essentials: Unknown aspects are confined to specific divine secrets (such as exact future timings), whereas everything needed for creed and worship is fully plain via the Qurʾān and Prophet ﷺ.'
    ],
    ['Qurʾān 3:7','Tafsīr al-Ṭabarī on Q 3:7'],
    [q37TrapA,q37TrapB],
    {
      facts:[
        ['Verse','Qurʾān 3:7 (Āl ʿImrān)'],
        ['Exegete','Imām al-Ṭabarī'],
        ['Muḥkam','Decisive in meaning & ruling'],
        ['Mutashābih','Purposeful; essentials remain clear']
      ],
      quotes:[
        {by:'Qurʾān 3:7 (abridged)',en:'In it are verses that are precise—they are the foundation of the Book—and others unspecific.',ref:'Qurʾān 3:7'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Muḥkam (Decisive Foundation)',
          items:[
            'Clear and unequivocal in wording and intent',
            'Directly establishes core creed and legal obligations',
            'Anchors the interpretation of all other passages'
          ]
        },
        right:{
          title:'Mutashābih (Multifaceted / Unseen)',
          items:[
            'Only unseen specifics (e.g., exact dates) belong to Allah alone',
            'Carries spiritual benefit and invites humble reflection',
            'Never contradicts or obscures essential beliefs or rulings'
          ]
        }
      }
    }
  ),{
    who:'Cite al-Ṭabarī on Q 3:7',
    forkTitle:'Two ways critics press Qurʾān 3:7',
    forkSub:'Defuse claims of doctrinal vagueness or pointless verses'
  }),
  sum:'Al-Ṭabarī concludes on Qurʾān 3:7 that every verse serves guidance and clarification, confining unseen aspects to specific divine secrets while leaving all essentials of creed and practice unmistakable.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: christianity/islam-vs/dilemma/quran-3-78-scripture-distortion
   ============================================================================ */
const Q378=DR('#3-78','1466986348240965696');

const q378TrapA=P(N(
  Q378,
  'Ibn ʿAbbās and Wahb ibn Munabbih both said nobody can remove a letter from the Tawrāh and Injīl!',
  'Read the very next sentence that polemicists cut off: Wahb was contrasting Allah’s eternal Books preserved with Him against humanly altered manuscripts and translations. Ibn Kathīr explicitly clarifies that if Wahb meant the books in the hands of the People of the Book today, there is zero doubt they were altered, distorted, added to, and deleted from.',
  'Exposing the mid-sentence crop at “Then,” in Ibn Kathīr',
  [
    '01 · The cropped word “Then,”: Apologetic slides (such as IP’s presentation) cut Ibn Kathīr’s commentary on Q 3.78 immediately after the word “Then,”—hiding Ibn Kathīr’s own explanation.',
    '02 · Ibn Kathīr’s explicit distinction (preserved vs. earthly copies): Ibn Kathīr explains that only Allah’s Books kept with Him remain completely unchanged, whereas the scriptures in circulation among the People of the Book have undeniably suffered alteration, distortion, additions, and deletions.',
    '03 · Corrupted translations and false attribution: Ibn Kathīr specifically warns that Arabic renderings of those scriptures contain heavy errors, additions, deletions, and gross miscomprehension.'
  ],
  ['Qurʾān 3:78','Tafsīr Ibn Kathīr on Q 3:78','Ibn Abī Ḥātim'],
  [],
  {
    facts:[
      ['Crop Point','Slide cuts off right at “Then,”'],
      ['Books with Allah','Unchanged and eternally preserved'],
      ['Books in Circulation','Altered, distorted, added to & deleted'],
      ['Arabic Versions','Marked by major errors & deletions']
    ],
    quotes:[
      {by:'Ibn Kathīr (Tafsīr on Q 3:78)',en:'There is no doubt that they altered, distorted, added to and deleted from them.',ref:'Tafsīr Ibn Kathīr 3:78'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Ibn Kathīr quotes Ibn ʿAbbās and Wahb ibn Munabbih saying no letter was removed from the Torah or Gospel!',
  theyWho:'Watch out · if they say',
  who:'Show the omitted paragraph after “Then,”'
});

const q378TrapB=P(N(
  Q378,
  'Even Ibn ʿAbbās in al-Bukhārī limits distortion to oral misinterpretation, never textual forgery.',
  'Qurʾān 3:78 itself links vocal twisting with false attribution (“this is from Allah, while it is not from Allah”), and Ibn Kathīr quotes Wahb noting people misled others using books they authored themselves—matching Qurʾān 2:79’s condemnation of scribes who write texts with their own hands and attribute them to God.',
  'Oral distortion, self-authored books & Ibn Kathīr’s synthesis',
  [
    '01 · Preserved original vs. humanly substituted texts: Ibn ʿAbbās stresses that no creature can erase Allah’s own revealed words from His Book, yet people distort apparent meanings and fabricate additions.',
    '02 · Wahb’s warning on self-written books: Even the portion polemicists quote admits people misguided others by relying on books they wrote themselves alongside addition and false interpretation.',
    '03 · Qurʾān 3.78 and 2.79 together: Read alongside Q 2.79, claiming “This is from Allah” for humanly composed or altered writings directly refutes the notion that the Qurʾān vouches for uncorrupted biblical manuscripts.'
  ],
  ['Qurʾān 3:78; 2:79','Ṣaḥīḥ al-Bukhārī (Ibn ʿAbbās report)','Tafsīr Ibn Kathīr on Q 3:78'],
  [],
  {
    facts:[
      ['Ibn ʿAbbās','Cannot erase Allah’s eternal words; alter meanings'],
      ['Wahb b. Munabbih','Misguided others with self-written books'],
      ['Qurʾān 3:78','Claiming human words are “from Allah”'],
      ['Cross-Ref','Qurʾān 2:79 (writing with own hands)']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Al-Bukhārī’s report from Ibn ʿAbbās proves distortion only meant misreading the words, not changing the text!',
  theyWho:'Watch out · if they say',
  who:'Cite self-written books & Q 2:79'
});

card('christianity/islam-vs/dilemma/quran-3-78-scripture-distortion',{
  title:'Qurʾān 3:78: Did Ibn Kathīr Affirm Biblical Preservation?',
  k:'Islamic Dilemma · Quote-Mine',
  blurb:'Exposing how apologetic slides crop Ibn Kathīr’s Tafsīr on 3:78 right at “Then,” to conceal his explicit verdict on textual alteration.',
  claim:'In his Tafsīr on Qurʾān 3:78, Ibn Kathīr cites Ibn ʿAbbās and Wahb ibn Munabbih to prove that the Torah and Gospel were never textually altered.',
  tree:P(N(
    Q378,
    'Ibn Kathīr’s commentary on Qurʾān 3:78 admits no letter of the Torah and Gospel was ever removed.',
    'That claim relies on a blatant mid-sentence crop. Apologetic presentations cut Ibn Kathīr off right at the word “Then,”—omitting the very next lines where Ibn Kathīr clarifies that if Wahb meant the scriptures in the hands of the People of the Book, they were indisputably altered, distorted, added to, and deleted from, whereas only Allah’s Books kept with Him remain untouched.',
    'Exposing the omitted half of Ibn Kathīr on Q 3.78',
    [
      '01 · What polemicists display: Slides quote Ibn Kathīr citing Ibn ʿAbbās and Wahb ibn Munabbih up to “relying on books that they wrote themselves. Then,” and abruptly stop.',
      '02 · What the omitted continuation states: Immediately afterward, Ibn Kathīr draws a sharp boundary: the books currently in the hands of the People of the Book definitely suffered alteration, distortion, additions, and deletions.',
      '03 · Defect-ridden translations and eternal preservation: Ibn Kathīr adds that Arabic versions of those scriptures suffer from severe errors, additions, deletions, and miscomprehension—concluding that only the Books of Allah preserved with Him have never changed.'
    ],
    ['Qurʾān 3:78','Tafsīr Ibn Kathīr on Q 3:78','Ibn Abī Ḥātim'],
    [q378TrapA,q378TrapB],
    {
      facts:[
        ['Verse','Qurʾān 3:78 (Āl ʿImrān)'],
        ['Quote-Mine','Stops mid-sentence right at “Then,”'],
        ['Circulating Texts','Altered, added to & deleted from'],
        ['Books with Allah','Unchanged and preserved with Him']
      ],
      quotes:[
        {by:'Ibn Kathīr (Tafsīr on Q 3:78)',en:'If Wahb meant the Books of Allah that He has with Him, then indeed, these Books are preserved and were never changed.',ref:'Tafsīr Ibn Kathīr 3:78'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Cropped Apologetic Slide',
          items:[
            'Quotes Wahb: “no letter in them was removed”',
            'Cuts off Ibn Kathīr mid-paragraph right at “Then,”',
            'Hides Ibn Kathīr’s immediate rebuttal of earthly preservation'
          ]
        },
        right:{
          title:'Full Tafsīr Ibn Kathīr (Q 3:78)',
          items:[
            'Books in People of the Book’s hands: altered, added to & deleted',
            'Arabic translations: tremendous error & misinterpretation',
            'Only Allah’s Books kept with Him remain wholly unchanged'
          ]
        }
      },
      shots:[
        S('dr8-q378-1.webp','Deenresponds #3-78: apologetic slide cropping Ibn Kathīr’s Tafsīr on Qurʾān 3:78 mid-sentence right at the word “Then,”.'),
        S('dr8-q378-2.webp','Deenresponds #3-78: the omitted continuation of Ibn Kathīr on Q 3:78 affirming earthly copies were altered, added to, and deleted from.')
      ]
    }
  ),{
    who:'Expose the mid-sentence crop',
    forkTitle:'Two follow-ups on Qurʾān 3:78',
    forkSub:'Show the omitted continuation or dismantle the oral-only claim'
  }),
  sum:'Apologetic slides on Qurʾān 3:78 crop Ibn Kathīr mid-sentence at “Then,” to conceal his explicit conclusion that circulating scriptures were altered, added to, and deleted from while only Allah’s Books with Him remain unchanged.'
});

/* ============================================================================
   3. NEW Tactical Playbook card: islam/prophet/prophet-lawgiving-authority
   ============================================================================ */
const CLAW=DR('#the-prophet-changes-laws','1466978908829384744');

const clawTrapA=P(N(
  CLAW,
  'A genuine prophet cannot alter or cancel dietary and ritual rules previously commanded in the Torah.',
  'Both the Qurʾān and the Christian New Testament teach the exact opposite. In Qurʾān 3:50 Jesus announces he was sent to make lawful some of what had been forbidden to Israel; and in the New Testament itself (Mark 7:19; Acts 10:9–15; Colossians 2:16), Christians hold that Jesus and his apostles set aside Mosaic food and Sabbath laws.',
  'Jesus and the New Testament also abrogate Mosaic restrictions',
  [
    '01 · Jesus’s mandate in Qurʾān 3.50: Jesus explicitly declares he confirms the Torah yet comes “to make lawful for you some of what was forbidden to you,” proving prophetic lawgiving includes updating earlier rules.',
    '02 · New Testament abrogation of Torah food laws: Christians themselves cite Mark 7.19 (“declared all foods clean”) and Peter’s vision in Acts 10.13–15 to justify eating meats forbidden in Leviticus 11.',
    '03 · Burden-lifting consistency: Condemning Muḥammad ﷺ for legislating lawful and unlawful matters while praising Jesus and Paul for setting aside the Mosaic law applies an obvious double standard.'
  ],
  ['Qurʾān 7:157; 3:50','Mark 7:19','Acts 10:9–15','Leviticus 11'],
  [],
  {
    facts:[
      ['Qurʾān 3:50','Jesus legalized things formerly forbidden'],
      ['Mark 7:19','NT claims Jesus declared all foods clean'],
      ['Acts 10:15','Peter told not to call Torah-impure clean'],
      ['Double Standard','Christians accept NT abrogation of Torah']
    ],
    quotes:[
      {by:'Qurʾān 3:50 (Jesus speaking)',en:'And to make lawful for you some of what was forbidden to you.',ref:'Qurʾān 3:50'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'A true prophet would never change Mosaic dietary laws or permit what the Torah forbade!',
  theyWho:'Watch out · if they say',
  who:'Cite Q 3:50, Mark 7:19 & Acts 10'
});

const clawTrapB=P(N(
  CLAW,
  'The Torah and Gospel never describe a future prophet who lifts burdens and legislates new rulings.',
  'Qurʾān 7:157 expressly links that prophetic role to earlier scripture—identifying the unlettered Prophet described in their Torah and Gospel as the one who permits what is pure (ṭayyibāt), forbids what is impure (khabāʾith), and removes the heavy shackles laid upon earlier nations. Even Isaiah 42’s Servant brings a new law/teaching (tōrāh) awaited by the coastlands.',
  'Biblical precedent for a burden-lifting lawgiver (Q 7.157 & Isa 42)',
  [
    '01 · Scriptural sign in Qurʾān 7.157: Rather than hiding his legislative role, the Qurʾān highlights permitting pure things, forbidding impurities, and lifting heavy burdens as the unmistakable mark of the Prophet foretold in the Torah and Gospel.',
    '02 · Earlier penalties vs. final mercy: Heavy restrictions (such as strict Sabbath forfeitures or extra dietary bans in Q 4.160 and 6.146) were disciplinary shackles imposed for earlier transgressions, which the final Messenger ﷺ came to relieve.',
    '03 · Isaiah 42.4 parallel: Biblical prophecy itself speaks of the Gentile-reaching Servant for whose “law” (tōrāh) the distant coastlands wait—fitting a universal prophetic lawgiver.'
  ],
  ['Qurʾān 7:157; 4:160; 6:146','Isaiah 42:1–4'],
  [],
  {
    facts:[
      ['Qurʾān 7:157','Foretold in Torah & Gospel; lifts shackles'],
      ['Qurʾān 6:146','Earlier bans were disciplinary burdens'],
      ['Isaiah 42:4','Coastlands await the Servant’s law (tōrāh)'],
      ['Consistency','Universal law replaces local burdens']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Nothing in earlier scripture anticipates a prophet replacing Mosaic restrictions with new rulings!',
  theyWho:'Watch out · if they say',
  who:'Point to Q 7:157 & Isaiah 42:4'
});

card('islam/prophet/prophet-lawgiving-authority',{
  title:'Prophetic Lawgiving: Why the Prophet ﷺ Relieves & Legislates Laws',
  k:'Prophethood · Qurʾān 7:157',
  blurb:'Qurʾān 7:157 links the unlettered Prophet foretold in the Torah and Gospel directly to permitting what is pure, forbidding impurities, and lifting earlier burdens.',
  claim:'Because Muḥammad ﷺ altered earlier Mosaic dietary and legal rulings, he violated eternal divine law and cannot be a genuine prophet.',
  tree:P(N(
    CLAW,
    'A true prophet only repeats previous laws—changing earlier rulings proves Muḥammad ﷺ was not from God.',
    'Qurʾān 7:157 refutes that objection head-on: the very unlettered Messenger whose description was recorded in the Torah and the Gospel is commissioned to enjoin right, forbid wrong, make lawful what is pure (ṭayyibāt), prohibit what is impure (khabāʾith), and relieve believers of the heavy burdens and shackles that bound earlier communities.',
    'Qurʾān 7.157: prophetic authority to permit, forbid & lift burdens',
    [
      '01 · Paired proof in Qurʾān 7.157: The verse places two realities side by side—his description written in their Torah and Gospel, and his divine mandate to permit good things, forbid impure things, and remove earlier legal shackles.',
      '02 · Lawgiving belongs to God through His Messengers: Prohibiting or permitting specific foods and practices is never arbitrary human tampering when legislated by revelation (cf. Q 3.50 for Jesus).',
      '03 · Christian inconsistency: Since Christians themselves accept that Jesus and the New Testament set aside Mosaic dietary and ritual laws (Mark 7.19; Acts 10.15), objecting to prophetic abrogation in Islam is self-contradictory.'
    ],
    ['Qurʾān 7:157; 3:50; 6:146','Mark 7:19','Acts 10:15'],
    [clawTrapA,clawTrapB],
    {
      facts:[
        ['Key Verse','Qurʾān 7:157 (al-Aʿrāf)'],
        ['Scriptural Witness','Described in their Torah and Gospel'],
        ['Mandate','Permits pure; forbids impure; lifts burdens'],
        ['NT Parallel','Christians already accept Torah abrogation']
      ],
      quotes:[
        {by:'Qurʾān 7:157',en:'Permits for them what is lawful and forbids to them what is impure, and relieves them from their burdens…',ref:'Qurʾān 7:157'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['1. Earlier Shackles (Q 6:146)','Specific Mosaic bans functioned as disciplinary burdens on Israel.'],
          ['2. Prophetic Precedent (Q 3:50)','Jesus confirmed the Torah yet lawfully lifted part of what was forbidden.'],
          ['3. Final Mandate (Q 7:157)','The unlettered Prophet foretold in Torah & Gospel relieves those burdens globally.'],
          ['4. Christian Consistency','Appealing to Mark 7:19 or Acts 10 bars Christians from rejecting abrogation.']
        ]
      },
      shots:[
        S('dr8-changelaw-1.webp','Deenresponds #the-prophet-changes-laws: Qurʾān 7:157 highlighting the Prophet’s ﷺ description in the Torah and Gospel alongside his authority to permit, forbid, and lift burdens.'),
        S('dr8-changelaw-2.webp','Deenresponds #the-prophet-changes-laws: companion scan of Qurʾān 7:157 highlighting the unlettered Prophet’s legislative mandate.')
      ]
    }
  ),{
    who:'Cite Qurʾān 7:157 & Jesus’s precedent',
    forkTitle:'Two ways critics challenge prophetic lawgiving',
    forkSub:'Turn New Testament abrogation or cite scriptural precedent'
  }),
  sum:'Qurʾān 7:157 defines permitting the pure, forbidding the impure, and lifting earlier burdens as the exact mandate of the Prophet ﷺ foretold in the Torah and Gospel—matching earlier prophetic abrogation accepted by Christians themselves.'
});

/* ============================================================================
   4. NEW Tactical Playbook card: christianity/jesus/wine-and-jesus-intoxicants
   ============================================================================ */
const WINE=DR('#wine-and-jesus','1358744600470229083');

const wineTrapA=P(N(
  WINE,
  'Even Najm al-Dīn al-Ṭūfī admitted Jesus drank wine—so Islam contradicts itself by forbidding alcohol!',
  'Islamic law recognizes progressive legislation across prophetic eras: intoxicants were permitted in earlier Sharīʿas and gradually prohibited in the final Qurʾānic revelation (2:219; 4:43; 5:90–91). Far more damaging for Christians, al-Ṭūfī cited Genesis 49:10–12 specifically to prove Jesus was a human king, prophet, and priest—never God or the Son of God.',
  'How al-Ṭūfī’s Genesis 49 argument actually refutes Christ’s divinity',
  [
    '01 · Progressive Sharīʿa rulings: Just as Sabbath rules and certain meats differed between Moses, Jesus (Q 3.50), and Muḥammad ﷺ, wine’s permissibility in earlier dispensations poses zero contradiction to Islam’s final prohibition (Q 5.90–91).',
    '02 · Context of al-Ṭūfī’s Genesis commentary (p. 519, §§595–596): Commenting on Jacob’s prophecy over Judah (Gen 49.10–12—“his eyes shall be red from wine”), al-Ṭūfī accepts donkey-riding and wine-drinking as Messiah-attributes of Jesus.',
    '03 · Al-Ṭūfī’s anti-Trinitarian conclusion: Al-Ṭūfī immediately turns that very passage against Christians: Jacob foretold Christ as a king, prophet, and priest—had he been God or God’s son, Jacob would never have omitted it at his solemn glorification.'
  ],
  ['Najm al-Dīn al-Ṭūfī, Critical Commentary on Genesis p. 519 (§§595–596)','Genesis 49:10–12','Qurʾān 2:219; 4:43; 5:90–91'],
  [],
  {
    facts:[
      ['Author','Najm al-Dīn al-Ṭūfī (d. 716/1316)'],
      ['Passage','Genesis 49:10–12 commentary (p. 519)'],
      ['Sharīʿa Principle','Earlier laws ≠ final Qurʾānic prohibition'],
      ['Al-Ṭūfī’s Aim','Proves Jesus was prophet/king, not deity']
    ],
    quotes:[
      {by:'Najm al-Dīn al-Ṭūfī (Genesis Commentary §596)',en:'Had he been a god or the son of a god, he would not have declined to explain this.',ref:'Critical Commentary on Genesis, p. 519'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Your own scholar al-Ṭūfī conceded Jesus drank wine—so Islam’s alcohol ban contradicts Jesus!',
  theyWho:'Watch out · if they say',
  who:'Show al-Ṭūfī’s actual point on Gen 49'
});

const wineTrapB=P(N(
  WINE,
  'The Bible glorifies wine and proves alcohol consumption is spiritually harmless.',
  'The Bible itself condemns wine’s dangers—calling it a “mocker” that leads astray (Proverbs 20:1) and linking drunkenness to ruin and incestuous shame among patriarchs (Noah in Genesis 9:21; Lot in Genesis 19:32–36)—whereas Islam’s comprehensive ban removes addiction and intoxication at the root.',
  'Biblical warnings and drunken scandals vs. Qurʾānic protection',
  [
    '01 · Biblical drunkenness scandals: Genesis 9.21–25 narrates Noah getting drunk and uncovered, and Genesis 19.32–36 depicts Lot’s daughters getting him intoxicated to commit incest—demonstrating the Bible’s own grim depiction of alcohol’s harm.',
    '02 · Biblical warnings against wine: Proverbs 20.1 warns that wine is a mocker and strong drink a brawler, while Proverbs 23.29–35 catalogues woe, strife, and hallucinations.',
    '03 · Moral clarity of Islam: Qurʾān 5.90–91 prohibits intoxicants as Satan’s handiwork that breeds enmity and distracts from prayer—protecting reason and family life far more coherently.'
  ],
  ['Genesis 9:21–25; 19:32–36','Proverbs 20:1; 23:29–35','Qurʾān 5:90–91'],
  [],
  {
    facts:[
      ['Genesis 9 & 19','Noah & Lot disgraced while drunk on wine'],
      ['Proverbs 20:1','“Wine is a mocker, strong drink a brawler”'],
      ['Qurʾān 5:90–91','Prohibits intoxicants to guard intellect'],
      ['Moral Contrast','Total abstinence vs. ambiguous tolerance']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Wine is a biblical blessing throughout Scripture—Islam’s total prohibition is unnatural!',
  theyWho:'Watch out · if they say',
  who:'Cite Gen 9, Gen 19 & Proverbs 20'
});

card('christianity/jesus/wine-and-jesus-intoxicants',{
  title:'Jesus, Wine & Al-Ṭūfī on Genesis 49',
  k:'Prophetic Laws · Intoxicants',
  blurb:'Why Najm al-Dīn al-Ṭūfī’s Genesis 49:10–12 commentary attributing wine-drinking to Jesus refutes Trinitarian Christology rather than contradicting Islam.',
  claim:'Because Jesus drank wine—a fact even Muslim polemicist al-Ṭūfī conceded—Islam’s ban on alcohol contradicts the example of the Messiah.',
  tree:P(N(
    WINE,
    'Jesus drank wine in the Gospels and even Muslim scholar al-Ṭūfī admitted it—so Islam’s wine ban fails.',
    'Nothing in Islamic theology requires earlier prophets’ temporary dietary permissions to remain valid after the final revelation (Qurʾān 5:90–91). Crucially, in the very passage critics cite—Najm al-Dīn al-Ṭūfī’s commentary on Genesis 49:10–12 (p. 519, §§595–596)—al-Ṭūfī highlights Judah’s prophecy of a Messiah who rides a donkey and drinks wine precisely to prove Jesus was a human king, prophet, and priest rather than God or God’s son.',
    'Progressive legislation & al-Ṭūfī’s anti-Trinitarian use of Gen 49',
    [
      '01 · Varying legal dispensations across prophets: Islam affirms one unchanging creed across all messengers while recognizing that Allah updated specific dietary and ritual laws over time—culminating in the gradual Qurʾānic prohibition of intoxicants (Q 2.219; 4.43; 5.90–91).',
      '02 · What al-Ṭūfī actually wrote (Genesis Commentary §§595–596): Quoting Jacob’s blessing on Judah (“his eyes shall be red from wine”), al-Ṭūfī lists riding a donkey and drinking wine as signs identifying Jesus as the awaited Messiah.',
      '03 · The boomerang against Christianity: Al-Ṭūfī argues that Jacob explicitly foretold a human king, prophet, and priest—and would never have withheld Jesus’s supposed divinity on that supreme prophetic occasion had Jesus been God.'
    ],
    ['Najm al-Dīn al-Ṭūfī, Critical Commentary on Genesis p. 519 (§§595–596)','Genesis 49:10–12','Qurʾān 2:219; 4:43; 5:90–91'],
    [wineTrapA,wineTrapB],
    {
      facts:[
        ['Source Quoted','al-Ṭūfī on Genesis 49:10–12 (p. 519)'],
        ['Prophetic Laws','Alcohol banned gradually in final Sharīʿa'],
        ['Christological Point','Gen 49 names king, prophet, priest—not God'],
        ['Biblical Contrast','Proverbs 20:1 & Gen 9/19 expose wine’s harm']
      ],
      quotes:[
        {by:'Genesis 49:11–12 (cited by al-Ṭūfī §595)',en:'His eyes shall be red from wine, and his teeth whiter than milk.',ref:'Genesis 49:12'},
        {by:'Najm al-Dīn al-Ṭūfī (§596)',en:'These are his attributes… he rode a donkey, and drank wine.',ref:'Critical Commentary on Genesis, p. 519'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'What Critics Claim from al-Ṭūfī',
          items:[
            'Cherry-picks “drank wine” from Genesis Commentary §596',
            'Assumes all earlier prophetic dispensations bind Muslims',
            'Ignores al-Ṭūfī’s anti-Trinitarian thesis on the same page'
          ]
        },
        right:{
          title:'What al-Ṭūfī & Islam Actually Teach',
          items:[
            'Sharīʿa rulings evolved until final ban (Q 5:90–91)',
            'Gen 49 proves Jesus was foretold as human king, prophet & priest',
            'Silence on deity in Gen 49 refutes Christian Christology'
          ]
        }
      },
      shots:[
        S('dr8-wine-1.webp','Deenresponds #wine-and-jesus: social-media scan quoting Najm al-Dīn al-Ṭūfī’s Critical Commentary on Genesis (p. 519, §§595–596) on Genesis 49:10–12.'),
        S('dr8-wine-2.webp','Deenresponds #wine-and-jesus: full scan of al-Ṭūfī’s Genesis 49 commentary linking Jesus’s attributes to king, prophet, and priest rather than deity.')
      ]
    }
  ),{
    who:'Turn al-Ṭūfī’s passage back',
    forkTitle:'Two ways critics raise wine and Jesus',
    forkSub:'Expose the context of al-Ṭūfī or contrast biblical wine scandals'
  }),
  sum:'Alcohol was gradually outlawed only in the final Qurʾānic Sharīʿa (5:90–91), and al-Ṭūfī’s Genesis 49 commentary cites Jesus’s wine-drinking specifically to argue Jacob foretold a human king, prophet, and priest rather than God.'
});

/* ============================================================================
   5. NEW Tactical Playbook card: christianity/bible/contradictions/david-and-goliath-who-killed-him
   ============================================================================ */
const DGOL=DR('#david-and-goliath','1368288047749136567');

const dgolTrapA=P(N(
  DGOL,
  'The Goliath in 2 Samuel 21:19 was a different giant in a later battle—or “the brother of” belongs there as 1 Chronicles 20:5 explains.',
  'Every concrete detail proves both texts speak of the same Goliath, and English Bibles like the NIV and KJV literally insert “the brother of” into 2 Samuel 21:19 without any Hebrew basis—a tampering the NIV’s own footnote confesses.',
  'Four shared identifiers & modern translation insertion in 2 Sam 21.19',
  [
    '01 · Not just two Philistine battles: Israel and the Philistines fought numerous wars (Socoh, Michmash, Valley of Elah), so “again they were at war” does not narrow the conflict to two unique giants.',
    '02 · Same city & identical rare weapon: Both passages identify Goliath as “the Gittite” (from Gath) and describe his spear shaft with the exact rare simile “like a weaver’s beam”—while 2 Samuel 21.19 gives no backstory because readers already know him.',
    '03 · Later revision & translation manipulation: Written 100–300 years later, 1 Chronicles 20.5 alters the verse to “the brother of Goliath.” Translations such as the KJV and NIV import “the brother of” directly into 2 Samuel 21.19, though the Hebrew Masoretic text lacks it (admitted by RSV, interlinears, and the NIV footnote).'
  ],
  ['1 Samuel 17:4–7, 48–51','2 Samuel 21:19 (Hebrew vs. NIV/KJV)','1 Chronicles 20:5'],
  [],
  {
    facts:[
      ['Same City','Both Goliaths are from Gath (“the Gittite”)'],
      ['Same Spear','“Like a weaver’s beam” in both accounts'],
      ['1 Chron 20:5','Written 100–300 years later; revises conflict'],
      ['NIV Footnote','Admits Hebrew lacks “the brother of”']
    ],
    quotes:[
      {by:'NIV Footnote on 2 Samuel 21:19',en:'See 1 Chron. 20:5; Hebrew does not have the brother of.',ref:'2 Samuel 21:19 (NIV)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'2 Samuel 21:19 refers to a second Goliath—or means Goliath’s brother just like 1 Chronicles 20:5!',
  theyWho:'Watch out · if they say',
  who:'Expose the NIV/KJV insertion'
});

const dgolTrapB=P(N(
  DGOL,
  'Aside from Elhanan, the 1 Samuel 17 David-and-Goliath story itself is completely unified and consistent.',
  'Even inside 1 Samuel 16–17, two incompatible traditions were stitched together: in 16:19–22 and 17:38–39 Saul knows David by name, makes him his armor-bearer, and arms him—yet minutes later in 17:55–58 Saul asks Abner and David himself who this youth and his father are!',
  'Saul’s sudden amnesia inside 1 Samuel 16–17',
  [
    '01 · Saul knows David intimately (1 Sam 16.19–22 & 17.38–39): Saul requests David son of Jesse by name, loves him deeply, appoints him his armor-bearer, and personally outfits him in his royal armor before the duel.',
    '02 · Sudden total amnesia (1 Sam 17.55–58): Right as David walks out to face Goliath and returns with his head, Saul twice demands to know whose son the young man is—as if neither Saul nor commander Abner had ever met David or heard of Jesse.',
    '03 · Composite contradiction: Combining conflicting traditions in Samuel produces both an internal memory contradiction within 1 Samuel 16–17 and a hero-attribution contradiction against 2 Samuel 21.19.'
  ],
  ['1 Samuel 16:19–22','1 Samuel 17:38–39, 55–58'],
  [],
  {
    facts:[
      ['1 Sam 16:19–22','Saul summons David son of Jesse; loves him'],
      ['1 Sam 17:38–39','Saul dresses David in his own armor'],
      ['1 Sam 17:55–58','Saul asks Abner & David whose son he is'],
      ['Conclusion','Two conflicting editorial sources merged']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'1 Samuel 17 is a unified, eyewitness historical record of how David killed Goliath!',
  theyWho:'Watch out · if they say',
  who:'Show Saul’s amnesia in 1 Sam 17:55–58'
});

card('christianity/bible/contradictions/david-and-goliath-who-killed-him',{
  title:'Who Killed Goliath: David or Elhanan?',
  k:'Biblical Contradictions · Samuel vs. Chronicles',
  blurb:'1 Samuel 17:48–51 credits David, Hebrew 2 Samuel 21:19 credits Elhanan, 1 Chronicles 20:5 inserts “brother of,” and Saul forgets who David is in 1 Sam 17:55–58.',
  claim:'The Bible’s account of David and Goliath contains zero historical contradictions or scribal harmonizations.',
  tree:P(N(
    DGOL,
    '1 Samuel 17, 2 Samuel 21, and 1 Chronicles 20 all tell the exact same consistent history of David killing Goliath.',
    'The Hebrew Bible directly contradicts itself on who slew Goliath. 1 Samuel 17:48–51 attributes Goliath’s death to David, whereas the unedited Hebrew of 2 Samuel 21:19 explicitly says Elhanan killed Goliath the Gittite (with the exact same Gath origin and “weaver’s beam” spear). Centuries later, 1 Chronicles 20:5 revised the text to “the brother of Goliath”—and translations like the NIV and KJV smuggle “the brother of” back into 2 Samuel 21:19 despite its absence from Hebrew.',
    'David vs. Elhanan, 1 Chronicles revision & Saul’s amnesia',
    [
      '01 · Direct conflict (1 Sam 17.48–51 vs. 2 Sam 21.19): 1 Samuel 17 credits David with slaying Goliath by sling-stone and sword, while Hebrew 2 Samuel 21.19 states Elhanan son of Jair the Bethlehemite killed Goliath the Gittite.',
      '02 · Chronicler’s harmonization & translation tampering: 1 Chronicles 20.5 (composed 100–300 years later) changes the victim to “Lahmi the brother of Goliath”; KJV and NIV import “the brother of” into 2 Samuel 21.19 even though the NIV footnote admits the Hebrew lacks it.',
      '03 · Internal contradiction in 1 Samuel 16–17: Even within Samuel’s own chapters, Saul makes David his armor-bearer and arms him (16.19–22; 17.38–39), yet immediately asks Abner and David whose son David is (17.55–58).'
    ],
    ['1 Samuel 16:19–22; 17:38–58','2 Samuel 21:19 (Hebrew / RSV / NIV)','1 Chronicles 20:5'],
    [dgolTrapA,dgolTrapB],
    {
      facts:[
        ['1 Sam 17:48–51','David kills Goliath the Gittite'],
        ['2 Sam 21:19 (Heb)','Elhanan kills Goliath the Gittite'],
        ['1 Chron 20:5','Later revision adds “brother of”'],
        ['1 Sam 17:55–58','Saul suddenly forgets David’s identity']
      ],
      quotes:[
        {by:'NIV Footnote on 2 Samuel 21:19',en:'See 1 Chron. 20:5; Hebrew does not have the brother of.',ref:'2 Samuel 21:19 (NIV)'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'2 Samuel 21:19 (Original Hebrew / RSV)',
          items:[
            'Elhanan son of Jair slew Goliath the Gittite',
            'Zero mention of “brother of” in the Hebrew text',
            'Same hometown (Gath) & rare spear (“weaver’s beam”)'
          ]
        },
        right:{
          title:'Later Harmonization (1 Chron 20:5 / NIV)',
          items:[
            '1 Chronicles (100–300 yrs later) inserts “Lahmi the brother of”',
            'NIV & KJV retroactively inject “the brother of” into 2 Sam 21:19',
            'NIV footnote openly admits Hebrew lacks those words'
          ]
        }
      },
      shots:[
        S('dr8-david-gol-1.webp','Deenresponds #david-and-goliath: NIV 2 Samuel 21:19 highlighting the inserted phrase “the brother of” and its footnote admitting the Hebrew does not contain it.'),
        S('dr8-david-gol-2.webp','Deenresponds #david-and-goliath: companion scan of the NIV 2 Samuel 21:19 textual footnote confessing the harmonized addition.')
      ]
    }
  ),{
    who:'Compare Hebrew 2 Sam 21:19 & 1 Chron 20:5',
    forkTitle:'Two apologetic defenses to dismantle',
    forkSub:'Counter the “different giant / brother” excuse or show Saul’s amnesia'
  }),
  sum:'Hebrew 2 Samuel 21:19 attributes Goliath’s killing to Elhanan rather than David, forcing 1 Chronicles 20:5 and modern translations (NIV/KJV) into un-Hebrew harmonizations while 1 Samuel 17:55–58 even contradicts chapter 16 on whether Saul knew David.'
});

/* ============================================================================
   6. NEW Tactical Playbook card: christianity/bible/prophecies-in-q-source
   ============================================================================ */
const PQ=DR('#prophecies-in-q','1363408669529870446');

const pqTrapA=P(N(
  PQ,
  'John the Baptist’s “one to come” in Q 3:16b–17 was indisputably Jesus—and “Holy Spirit” proves Trinitarian divinity.',
  'Read the Critical Edition of Q itself: the word “holy” appears in double brackets ([[holy]]), marking scholarly uncertainty over whether later Gospel editors inserted it! Moreover, Jesus received water baptism *from* John rather than surpassing him in fiery winnowing judgment—fitting a mighty coming lawgiver and judge.',
  'Textual brackets on “[[holy]]” & Jesus’s baptism by John',
  [
    '01 · Double brackets in Q 3.16b: In The Sayings Gospel Q in English (p. 125), “[[holy]]” is bracketed as textually uncertain, raising the likelihood that the original saying spoke of wind/spirit and fire—vivid prophetic imagery of judgment rather than a Trinitarian Person.',
    '02 · Reversal in the Gospels: In Q 3.16b–17, John contrasts his humble water baptism with the mightier coming figure whose sandals he is unfit to remove and whose winnowing fork clears the threshing floor.',
    '03 · Fit with final prophetic reckoning: Rather than a suffering sacrifice baptized by John, Q 3.17 pictures a triumphant executive figure dividing wheat from chaff—paralleling the final Prophet ﷺ.'
  ],
  ['The Sayings Gospel Q in English, Q 3:16b–17 (p. 125)','Matthew 3:11–12 // Luke 3:16–17'],
  [],
  {
    facts:[
      ['Q 3:16b Text','“[[holy]]” marked uncertain in Critical Q'],
      ['Contrast','Water baptism vs. mighty coming judge'],
      ['Q 3:17 Imagery','Winnowing pitchfork clearing threshing floor'],
      ['Mismatch','Jesus submitted to John’s water baptism']
    ],
    quotes:[
      {by:'Sayings Gospel Q 3:16b (p. 125)',en:'The one to come after me is more powerful than I, whose sandals I am not fit to [[take off]].',ref:'Q 3:16b'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'John’s “mightier one” baptizing with the Holy Spirit can only refer to the divine Son Jesus!',
  theyWho:'Watch out · if they say',
  who:'Show the [[holy]] bracket & judgment motif'
});

const pqTrapB=P(N(
  PQ,
  'Children of Abraham from rocks in Q 3:7–9 is just a metaphor for Gentile Christians, not Arabs or Ishmael.',
  'Notice the double movement of Q 3:7–9: John explicitly strips away complacent reliance on biological Israelite ancestry (“We have Abraham as forefather!”), warns that God can raise Abraham’s heirs “right out of these rocks,” and places the ax at the root of every fruitless tree—leaving no excuse to dismiss an Ishmaelite/Arabian renewal.',
  'Stripping ethnic Israelite monopoly in Q 3.7–9',
  [
    '01 · Ethnic privilege revoked (Q 3.8): John commands the crowds to bear fruit worthy of repentance and warns them not to boast, “We have Abraham as forefather!”',
    '02 · Children of Abraham from rocks: Declaring that God can produce children for Abraham out of desert stones shatters the assumption that prophetic succession belongs exclusively inside Judah.',
    '03 · Ax at the root (Q 3.9): Any tree failing to yield healthy fruit faces excision—matching the transfer of covenant stewardship to Abraham’s Ishmaelite branch.'
  ],
  ['The Sayings Gospel Q in English, Q 3:7–9','Matthew 3:7–10 // Luke 3:7–9'],
  [],
  {
    facts:[
      ['Q 3:8 Warning','Do not boast “We have Abraham as forefather”'],
      ['Abrahamic Heirs','God can raise them “out of these rocks”'],
      ['Q 3:9 Verdict','Ax already lies at the root of fruitless trees'],
      ['Historical Scope','Breaks Judean monopoly on Abraham’s line']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Q 3:7–9 only means Gentile Christians in Rome—not a prophetic shift to Arabia!',
  theyWho:'Watch out · if they say',
  who:'Press the anti-exclusivity logic of Q 3:8'
});

card('christianity/bible/prophecies-in-q-source',{
  title:'Prophecies in the Sayings Gospel Q (Q 3:7–9, 16b–17)',
  k:'Q Source · John the Baptist',
  blurb:'Examining Q 3:7–9 and Q 3:16b–17 (The Sayings Gospel Q in English): revoking ethnic Abrahamic monopoly and foretelling a mightier coming judge.',
  claim:'Even the earliest reconstructed layer of Gospel sayings (Q) strictly predicts a divine Trinitarian Messiah confined to Christian orthodoxy.',
  tree:P(N(
    PQ,
    'The earliest sayings source behind Matthew and Luke (Q) contains only standard Trinitarian expectations fulfilled uniquely by Jesus.',
    'In the critical reconstruction of Q (The Sayings Gospel Q in English, Q 3:7–9 and 3:16b–17, p. 125)—the earliest pre-Gospel sayings layer accepted by New Testament scholars—John the Baptist strips away Israelite ancestral privilege (“We have Abraham as forefather!”), warns that God can raise Abraham’s children from rocks while the ax strikes fruitless trees, and foretells a “more powerful” coming figure (with “[[holy]]” marked textually uncertain) who clears the threshing floor in decisive judgment.',
    'Q 3.7–9 & Q 3.16b–17 in The Sayings Gospel Q',
    [
      '01 · Earliest recoverable layer (Q Source): Critical scholarship isolates Q as the shared sayings collection behind Matthew and Luke—predating later canonical Gospel redactions and Christological expansions.',
      '02 · Q 3.7–9 (Abrahamic privilege broken): John rebukes crowds relying on “Abraham as forefather,” declaring God can raise Abrahamic children “right out of these rocks” and placing an ax at the root of fruitless trees.',
      '03 · Q 3.16b–17 (The mightier coming one, p. 125): John foretells one “more powerful than I” whose sandals he is unfit to take off, who brings decisive judgment—gathering wheat and burning chaff—while “[[holy]]” before Spirit stands in brackets as uncertain.'
    ],
    ['The Sayings Gospel Q in English, Q 3:7–9; 3:16b–17 (p. 125)','Matthew 3:7–12 // Luke 3:7–9, 16–17'],
    [pqTrapA,pqTrapB],
    {
      facts:[
        ['Source','The Sayings Gospel Q in English (p. 125)'],
        ['Q 3:8','God can raise Abraham’s children from rocks'],
        ['Q 3:9','Ax at root of every fruitless tree'],
        ['Q 3:16b–17','Mightier coming figure; “[[holy]]” bracketed']
      ],
      quotes:[
        {by:'Sayings Gospel Q 3:8',en:'God can produce children for Abraham right out of these rocks!',ref:'Q 3:8'},
        {by:'Sayings Gospel Q 3:17 (p. 125)',en:'He will clear his threshing floor and gather the wheat into his granary.',ref:'Q 3:17'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['1. Pre-Gospel Layer (Q)','Isolates early sayings traditions prior to later Gospel theological framing.'],
          ['2. Ancestry Challenged (Q 3:8)','Strips exclusive Abrahamic boasting; God raises new heirs from stones.'],
          ['3. Judgment Announced (Q 3:9)','Ax lies at the root; fruitless leadership faces removal.'],
          ['4. Mightier Successor (Q 3:16b–17)','One more powerful arrives with decisive winnowing judgment; “[[holy]]” is bracketed.']
        ]
      },
      shots:[
        S('dr8-proph-q-1.webp','Deenresponds #prophecies-in-q: scan of Q 3:7–9 from The Sayings Gospel Q in English highlighting the warning against Abrahamic exclusivity and the ax at the root.'),
        S('dr8-proph-q-2.webp','Deenresponds #prophecies-in-q: scan of Q 3:16b–17 (p. 125) showing John’s prophecy of the “more powerful” coming figure with “[[holy]]” in critical brackets.')
      ]
    }
  ),{
    who:'Examine Q 3:7–9 & 3:16b–17',
    forkTitle:'Two ways apologists read Q 3',
    forkSub:'Press the [[holy]] textual brackets or the Q 3:8 exclusivity rebuke'
  }),
  sum:'In the critical reconstruction of Q (3:7–9; 3:16b–17), John the Baptist explicitly breaks ethnic Abrahamic monopoly and foretells a mightier coming judge—while “[[holy]]” is critically bracketed as an uncertain later Gospel expansion.'
});

/* ============================================================================
   B.1 add('christianity/islam-vs/d-dr-islamic-dilemma', ...) — torah_dilemma
   ============================================================================ */
const TORD=DR('#torah','1381903178773303418');
add('christianity/islam-vs/d-dr-islamic-dilemma',P(N(
  TORD,
  'Unlike the Torah and Jewish tradition, Islam uniquely teaches fighting, dying as a martyr, and performing deeds to earn Paradise.',
  'Deuterocanonical Scripture accepted by Catholic and Orthodox Christians (1 Maccabees 2; 2 Maccabees 7) and classical Talmudic exegesis (Kiddushin 30b; Bava Batra 10a) directly affirm both martyrdom for eternal life and earning merit for the World to Come—exposing the double standard behind that polemic.',
  'Martyrdom & merit for eternal life in Maccabees and Talmud',
  [
    '01 · Martyrdom for eternal life (2 Maccabees 7): Accepted in Catholic and Orthodox canons, 2 Maccabees 7 glorifies the mother and seven sons who willingly endure lethal torture for Torah fidelity in explicit hope of bodily resurrection to everlasting life.',
    '02 · Armed zeal for the covenant (1 Maccabees 2): Mattathias and the Maccabean fighters wage war out of covenantal zeal for the Torah and are praised for rescuing the law against pagan oppression.',
    '03 · Talmudic hermeneutics & reward (Kiddushin 30b & Bava Batra 10a): Kiddushin 30b illustrates rabbinic verbal analogy linking Exodus 20.12 and Leviticus 19.3 with Proverbs 3.9, while Bava Batra 10a links Proverbs 21.21 and Proverbs 8.35 (“finds life”) to show righteous charity and obedience earn eternal life and honor.'
  ],
  ['1 Maccabees 2','2 Maccabees 7','Babylonian Talmud, Kiddushin 30b (Exod 20:12; Lev 19:3; Prov 3:9)','Babylonian Talmud, Bava Batra 10a (Prov 21:21; 8:35)'],
  [],
  {
    facts:[
      ['2 Maccabees 7','Martyrs die for resurrection & eternal life'],
      ['1 Maccabees 2','Praised armed zeal defending the Torah'],
      ['Kiddushin 30b','Equates honoring parents & honoring God'],
      ['Bava Batra 10a','Charity & mercy earn “life” and “honor”']
    ],
    quotes:[
      {by:'Babylonian Talmud, Bava Batra 10a',en:'He who pursues charity and mercy, finds life (Proverbs 21:21).',ref:'Bava Batra 10a (citing Prov 21:21)'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Christian Polemic Against Islam',
        items:[
          'Claims biblical faith rejects dying in battle for Heaven',
          'Mocks doing righteous deeds to earn reward in Paradise',
          'Ignores Deuterocanonical & Jewish hermeneutical texts'
        ]
      },
      right:{
        title:'Maccabees & Talmudic Record',
        items:[
          '2 Maccabees 7: martyrs die in faith of everlasting life',
          '1 Maccabees 2: armed struggle praised as Torah zeal',
          'Bava Batra 10a: charity & mercy merit “life” and “honor”'
        ]
      }
    },
    shots:[
      S('dr8-torah-1.webp','Deenresponds #torah: Sefaria scan of Talmud Kiddushin 30b alongside Proverbs 3:7–10 illustrating rabbinic verbal analogy equating commands.'),
      S('dr8-torah-2.webp','Deenresponds #torah: Sefaria scan of Talmud Bava Batra 10a citing Proverbs 21:21 and 8:35 on pursuing charity and mercy to find life and honor.')
    ]
  }
),{
  optWho:'Turn the tables on Torah & Maccabees · if they say',
  optLabel:'Biblical tradition never teaches martyrdom in war or righteous merit to gain Paradise—only Islam does!',
  theyWho:'Turn the tables on Torah & Maccabees · if they say',
  who:'Cite 1–2 Maccabees & Talmud'
}));

/* ============================================================================
   B.2 add('islam/general/d-av-sonstiges-islam-2/c-paulus-islamischer-prophet', ...) — paul_not_muslim
   ============================================================================ */
const PNM=DR('#refuting-paul-was-a-muslim','1366948322073378919');
add('islam/general/d-av-sonstiges-islam-2/c-paulus-islamischer-prophet',P(N(
  PNM,
  'Early Muslim exegetes like Ibn Isḥāq and al-Ṭabarī, plus Ibn Kathīr, identified the Three Messengers of Qurʾān 36:13–29 as Paul, Peter, and John at Antioch.',
  'Those speculative harmonizations are non-binding Isrāʾīliyyāt—and the primary chain names Shuʿayb al-Jubāʾī, whom al-Dhahabī (quoting al-Azdī in Mīzān al-Iʿtidāl 2/278) brands an abandoned narrator. Meanwhile, Ibn Kathīr explicitly rejects the Paul-at-Antioch identification as “very weak” in al-Bidāya wa-l-Nihāya 2/11 because the Qurʾānic town rejected the messengers and was destroyed (36:14–15, 29), whereas Antioch accepted Christianity and survived.',
  'Al-Dhahabī’s jarḥ on Shuʿayb al-Jubāʾī & Ibn Kathīr’s al-Bidāya rejection',
  [
    '01 · Non-binding conjecture vs. Qurʾān and Sunnah: Harmonizing an unnamed Qurʾānic town with Christian history carries zero doctrinal authority when unsupported by revelation or authentic Prophetic report.',
    '02 · Discredited narrator (Mīzān al-Iʿtidāl 2/278): The Paul-Peter-John report traces back to Shuʿayb al-Jubāʾī—who drew from Isrāʾīliyyāt and is graded by al-Dhahabī (citing al-Azdī, entry #3731) as an abandoned narrator (akhbārī matrūk)—alongside Ibn Isḥāq’s disconnected chains.',
    '03 · Irreconcilable discrepancies (Q 36.14–15, 29 vs. Antioch): The Qurʾānic citizens accused the messengers of lying and were wiped out by a single blast (ṣayḥa), whereas New Testament Antioch embraced Christianity as a major patriarchate and was never destroyed.',
    '04 · Ibn Kathīr’s own refutation (Tafsīr 36.13, 29 & al-Bidāya 2/11): Ibn Kathīr records the majority names Ṣādiq, Ṣadūq, and Shalūm, notes the plain text means messengers sent by Allah (not by Jesus), and brands Shuʿayb al-Jubāʾī’s Paul report “very weak.”'
  ],
  ['Qurʾān 36:13–29','al-Dhahabī, Mīzān al-Iʿtidāl 2/278 (#3731)','Tafsīr Ibn Kathīr on Q 36:13, 29','Ibn Kathīr, al-Bidāya wa-l-Nihāya 2/11'],
  [],
  {
    facts:[
      ['Shuʿayb al-Jubāʾī','Abandoned narrator (al-Dhahabī 2/278)'],
      ['Majority Names','Ṣādiq, Ṣadūq & Shalūm (not Paul)'],
      ['Qurʾān 36:15, 29','Town rejected & destroyed vs. Antioch'],
      ['al-Bidāya 2/11','Ibn Kathīr calls Paul report “very weak”']
    ],
    quotes:[
      {by:'al-Dhahabī (Mīzān al-Iʿtidāl 2/278)',en:'Shuʿayb al-Jubāʾī, an abandoned narrator of reports, as stated by al-Azdī.',ref:'Mīzān al-Iʿtidāl 2/278 (#3731)'},
      {by:'Ibn Kathīr (al-Bidāya 2/11)',en:'This statement is very weak; because… the people of Antioch were the first city to believe in Christ.',ref:'al-Bidāya wa-l-Nihāya 2/11'}
    ],
    shots:[
      S('dr8-paul-muslim-1.webp','Deenresponds #refuting-paul-was-a-muslim: scan of al-Dhahabī’s Mīzān al-Iʿtidāl (2/278, #3731) marking Shuʿayb al-Jubāʾī as an abandoned narrator (akhbārī matrūk).'),
      S('dr8-paul-muslim-2.webp','Deenresponds #refuting-paul-was-a-muslim: Qurʾān 36:14–15 showing the townsfolk explicitly rejected the messengers (“You are only telling lies”), contrasting with Antioch’s conversion.')
    ]
  }
),{
  optWho:'Or press the rijāl & al-Bidāya proof · if they say',
  optLabel:'Classical historians and tafsīr transmitters explicitly named Paul, Peter, and John in Antioch—you cannot ignore them!',
  theyWho:'Or press the rijāl & al-Bidāya proof · if they say',
  who:'Cite al-Dhahabī 2/278 & al-Bidāya 2/11'
}));

/* ============================================================================
   B.3 add('christianity/bible/pericope-adulterae', ...) — pericope_adulterae
   ============================================================================ */
const PER=DR('#pericope-adulterae-john-753-811','1366712990635659275');
add('christianity/bible/pericope-adulterae',P(N(
  PER,
  'Apologists like Mike Licona claim many scholars still consider the Pericope Adulterae an authentic original story of Jesus.',
  'That misleads Christian audiences: the overwhelming consensus of New Testament textual critics—including Bruce Metzger, Bart Ehrman, and Philip Comfort—classifies John 7:53–8:11 as a late non-Johannine interpolation absent from every early Greek witness and wandering across four different Gospel locations in later manuscripts.',
  'Bruce Metzger, Bart Ehrman & Philip Comfort’s critical apparatus',
  [
    '01 · Consensus against Licona’s spin: Mainstream biblical scholars recognize the Pericope Adulterae as inauthentic to John’s Gospel, confirmed by Bruce Metzger’s Textual Commentary (4th ed.) and Bart Ehrman’s textual criticism.',
    '02 · Philip Comfort’s apparatus (NA27 / UBS4): Comfort notes the passage stands inside double square brackets in NA27 and UBS4, omitted by P39vid, P66, P75, Sinaiticus, Vaticanus, Avid, Cvid, L, N, T, W, Δ, Θ, Ψ, Syriac, Coptic, Diatessaron, Origen, Chrysostom, Cyril, Tertullian, and Cyprian.',
    '03 · Wandering insertion & non-Johannine style: Later scribes dropped the story into different places—f1 after John 21.25, f13 after Luke 21.38, 1333c after Luke 24.53, 225 after John 7.36, and E/Λ with critical asterisks—matching its alien vocabulary and syntax.'
  ],
  ['Philip W. Comfort, New Testament Text and Translation Commentary (on John 7:53–8:11)','Bruce M. Metzger, Textual Commentary on the Greek New Testament (4th ed.)','Bart D. Ehrman'],
  [],
  {
    facts:[
      ['Critical Texts','Double-bracketed in NA27 & UBS4'],
      ['Early MSS','Absent from P66, P75, א, B, L, W'],
      ['Relocations','Placed at John 21:25, Luke 21:38 & 24:53'],
      ['Scholars','Metzger, Ehrman & Comfort confirm late addition']
    ],
    quotes:[
      {by:'Bruce M. Metzger (4th ed.)',en:'It appears in a variety of places, suggesting that it was inserted into the text at a later time.',ref:'Textual Commentary on the Greek NT'}
    ],
    shots:[
      S('dr8-pericope-1.webp','Deenresponds #pericope-adulterae: cover of Philip W. Comfort’s New Testament Text and Translation Commentary.'),
      S('dr8-pericope-2.webp','Deenresponds #pericope-adulterae: Comfort’s critical apparatus on John 7:53–8:11 detailing massive early omissions and four wandering placements across later manuscripts.')
    ]
  }
),{
  optWho:'Or press textual apparatus · if they say',
  optLabel:'Apologists like Mike Licona say many scholars think the Pericope Adulterae is authentic!',
  theyWho:'Or press textual apparatus · if they say',
  who:'Cite Comfort, Metzger & Ehrman'
}));

/* ============================================================================
   B.4 add('christianity/jesus/d-ia-messianic-prophecies/t-isaiah-53-islamic-prophecy', ...) — isaiah_53
   ============================================================================ */
const I53=DR('#isaiah-53','1368597669370396842');
add('christianity/jesus/d-ia-messianic-prophecies/t-isaiah-53-islamic-prophecy',P(N(
  I53,
  'Isaiah 53 clearly prophecies a suffering, sin-atoning Messiah—any Jewish or historical reading is forced.',
  'As Bart Ehrman highlights in Jesus, Interrupted (p. 229), the word “Messiah” never occurs in Isaiah 53 or Psalm 22, and no pre-Christian Jews anticipated a Messiah dying for others’ sins. Rather, the Servant Songs point to collective Israel or a prophetic sufferer like Jeremiah—matching Deutero-Isaiah’s exilic setting and Jeremiah’s exact imagery—while Scripture elsewhere forbids innocent vicarious atonement.',
  'Bart Ehrman (Jesus, Interrupted p. 229), Jeremiah & collective Israel',
  [
    '01 · Complete absence of “Messiah” (Ehrman, p. 229): Neither Isaiah 53 nor Psalm 22 ever mentions the Messiah; pre-Christian Jewish messianic hopes rooted in 1 Samuel 7.14–16 expected an anointed Davidic king, never a crucified sin-offering.',
    '02 · Collective Israel & the Jeremiah correlation: Collective singularity identifies the Servant as Israel’s witnesses, while the Jewish Study Bible notes a strong correlation with Jeremiah—matching Deutero-Isaiah’s era and Jeremiah’s motifs of being formed in the womb, led like a lamb to slaughter, and cut off from the land of the living (Jer 11.19).',
    '03 · Authorship & atonement contradictions: Deutero-Isaiah’s anonymous composition, lack of messianic title, and explicit Old Testament prohibitions against punishing the innocent for others’ sins (Deut 24.16; Ezek 18.20) overturn later Pauline/Gospel reinterpretation.'
  ],
  ['Bart D. Ehrman, Jesus, Interrupted (p. 229)','Jewish Study Bible (on Jeremiah correlation)','Jeremiah 1:5; 11:19','1 Samuel 7:14–16'],
  [],
  {
    facts:[
      ['Bart Ehrman p. 229','“Messiah” never appears in Isa 53 or Ps 22'],
      ['Pre-Christian Jews','Zero expectation of a dying-for-sins Messiah'],
      ['Jeremiah Match','Lamb to slaughter & cut off (Jer 11:19)'],
      ['Collective Israel','Servant Songs identify Israel as witnesses']
    ],
    quotes:[
      {by:'Bart D. Ehrman (Jesus, Interrupted, p. 229)',en:'Before Christianity there were no Jews that we know of who anticipated a Messiah who would suffer and die for the sins of others.',ref:'Jesus, Interrupted, p. 229'}
    ],
    shots:[
      S('dr8-isa53-1.webp','Deenresponds #isaiah-53: cover of Bart D. Ehrman’s Jesus, Interrupted: Revealing the Hidden Contradictions in the Bible.'),
      S('dr8-isa53-2.webp','Deenresponds #isaiah-53: page 229 of Ehrman’s Jesus, Interrupted noting “Messiah” never appears in Isaiah 53 and pre-Christian Judaism never expected a sin-atoning dying Messiah.')
    ]
  }
),{
  optWho:'Or cite Bart Ehrman & Jeremiah · if they say',
  optLabel:'Isaiah 53 unmistakably predicts a crucified Messiah—only stubbornness denies it!',
  theyWho:'Or cite Bart Ehrman & Jeremiah · if they say',
  who:'Cite Ehrman p. 229, Jeremiah & Israel'
}));

/* ============================================================================
   B.5 add('christianity/islam-vs/d-dr-deuteronomy-33-2', ...) — where_is_paran (explainer!)
   ============================================================================ */
const PAR=DR('#where-is-paran','1358690774941696101');
add('christianity/islam-vs/d-dr-deuteronomy-33-2',N(
  PAR,
  'Paran in Genesis 21:21 and Deuteronomy 33:2 has nothing to do with Mecca or Zamzam—those are strictly Islamic inventions.',
  'Classical Jewish Bible commentators themselves explicitly linked Hagar and Ishmael’s Arabian well and wilderness tradition to Mecca’s Well of Zamzam and the annual Ḥajj—most remarkably Rabbenu Bachye ben Asher on Genesis 16:14 and Rabbi Saadiah Gaon on the road to Shur.',
  'Rabbi Bachye ben Asher & Saadiah Gaon: Beer-lahai-roi is the Well of Zamzam',
  [
    '01 · Rabbi Bachye ben Asher on Genesis 16.14 (p. 60): In his Midrash Rabbenu Bachye al Chamisha Chumshe Torah (Bereshit–Shemot, Jerusalem, p. 60), Rabbenu Bachye explains the name Be’er Lahai Roi by noting that the Ishmaelites held annual festivities—the Ḥajj—at that well, adding explicitly that “it is still in existence and is called the well of Zamzam.”',
    '02 · Corroboration by Rabbi Saadiah ben Yosef Gaon: Tenth-century Jewish sage Saadiah Gaon similarly connected the biblical road to Shur and Beer-lahai-roi in Hagar’s Ishmael narrative (Gen 16.7, 14) with the Arabian well tradition leading into the Ḥijāz.',
    '03 · Geographical anchor for Deuteronomy 33.2: Since Genesis 21.21 places Ishmael in the Wilderness of Paran and medieval rabbinic authorities identify Ishmael’s sacred well with Zamzam in Mecca, connecting Mount Paran in Deuteronomy 33.2 with the Ḥijāz rests on authentic Jewish geographical memory, not Muslim fabrication.'
  ],
  ['Rabbenu Bachye bar Asher, Commentary on Genesis 16:14 (Jerusalem ed., p. 60)','Rabbi Saadiah ben Yosef Gaon (on Genesis 16 & the Road to Shur)','Genesis 16:7, 14; 21:21; Deuteronomy 33:2'],
  [],
  {
    facts:[
      ['Rabbi Bachye','13th–14th c. Torah commentator (Gen 16:14)'],
      ['Be’er Lahai Roi','Explicitly identified as “the well of Zamzam”'],
      ['Annual Ḥajj','Notes Ishmaelites held annual Hajj at the well'],
      ['Saadiah Gaon','Links road to Shur & Ishmael to Zamzam']
    ],
    quotes:[
      {by:'Rabbi Bachye ben Asher (on Gen 16:14, p. 60)',en:'The Ishmaelites held annual festivities, the Hajj at this well. It is still in existence and is called the well of Zamzam.',ref:'Midrash Rabbenu Bachye, Bereshit, p. 60'}
    ],
    shots:[
      S('dr8-paran-1.webp','Deenresponds #where-is-paran: Rabbi Bachye ben Asher’s commentary on Genesis 16:14 (p. 60) identifying Be’er Lahai Roi with the Well of Zamzam and the Ishmaelites’ annual Ḥajj.'),
      S('dr8-paran-2.webp','Deenresponds #where-is-paran: companion scan of Rabbenu Bachye bar Asher on Genesis 16:14 linking Ishmael’s well directly to Zamzam.')
    ]
  }
));

})();
