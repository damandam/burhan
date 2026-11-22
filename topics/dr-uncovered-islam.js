/* Deenresponds Uncovered Islam & Creed Channels — 2026-11-22.
   Integrates 9 channels across 2 new Tactical Debate Playbook cards and 5 add() enrichments,
   referencing all 14 shots/dr-new-*.webp and shots/dr-creed-*.webp scans. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('dr-uncovered-islam: no card',key); };

const DR=(sub,id)=>({credit:'Deenresponds · '+sub,link:'https://discord.com/channels/1328402309297733662/'+id});
const S=(src,cap)=>({src:'shots/'+src,cap});

/* ============================================================================
   1. NEW Tactical Playbook card: islam/hadith/law/fly-wing-hadith
      From fly_hadith (1365071494924861451)
   ============================================================================ */
const FLY=DR('#fly-hadith','1365071494924861451');

const flyBranchPollination=P(N(
  FLY,
  'Saying the Prophet gave non-revealed worldly opinions just relies on a weak or isolated story about pollinating date palms.',
  'Far from an isolated report, the date-palm pollination principle is narrated through multiple Companion chains—ʿĀʾisha, Anas, Mūsā b. Ṭalḥa, and Rāfiʿ b. Khadīj—in Ṣaḥīḥ Muslim and parallel collections. Classical ḥadīth scholars also inspect weak side-variants honestly (such as Jābir’s route via Mujālid b. Saʿīd), leaving the core distinction completely intact.',
  'Multiple Companion chains for the pollination principle',
  [
    '01 · Four primary Companion routes: The narration on date-palm pollination traces back independently through ʿĀʾisha, Anas, Mūsā b. Ṭalḥa, and Rāfiʿ b. Khadīj in Ṣaḥīḥ Muslim’s Kitāb al-Faḍāʾil.',
    '02 · Rāfiʿ b. Khadīj via Abū l-Najāshī: Narrated through Rāfiʿ’s freed slave Abū l-Najāshī (ʿAṭāʾ b. Ṣuhayb) via ʿIkrima b. ʿAmmār (documented in Sharḥ Ṣaḥīḥ Ibn Ḥibbān al-Rājiḥī, p. 17), the Prophet ﷺ distinguishes binding religious commands from worldly personal remarks.',
    '03 · Abū Qatāda’s parallel wording: Al-Jāmiʿ al-Kabīr (p. 583) records a distinct incident—about oversleeping for prayer alongside a water-pouring miracle—carrying the same rule that worldly matters belong to the people while religious matters belong to the Prophet ﷺ.',
    '04 · Honest isnād critique of Jābir’s variant: While al-Baḥr al-Zakhkhār (3/154) also mentions Jābir b. ʿAbd Allāh and Yāsir b. ʿAmr, al-Ṭaḥāwī (Sharḥ Mushkil al-Āthār 4/425) traces Jābir’s chain through Mujālid b. Saʿīd, who is graded weak in Tahdhīb al-Tahdhīb (10/41)—showing rigorous isnād filtering does not undermine the sound routes.'
  ],
  ['Ṣaḥīḥ Muslim, Kitāb al-Faḍāʾil (Pollination Ḥadīth)','Sharḥ Ṣaḥīḥ Ibn Ḥibbān al-Rājiḥī, p. 17','al-Jāmiʿ al-Kabīr, p. 583','al-Baḥr al-Zakhkhār 3/154','al-Ṭaḥāwī, Sharḥ Mushkil al-Āthār 4/425','Tahdhīb al-Tahdhīb 10/41'],
  [],
  {
    facts:[
      ['4 Sound Routes','ʿĀʾisha, Anas, Mūsā b. Ṭalḥa, Rāfiʿ'],
      ['Rāfiʿ’s Chain','Abū l-Najāshī ʿAṭāʾ b. Ṣuhayb'],
      ['Abū Qatāda','Parallel rule in al-Jāmiʿ al-Kabīr'],
      ['Jābir Variant','Critiqued via Mujālid b. Saʿīd (ḍaʿīf)']
    ],
    quotes:[
      {by:'Abū Qatāda report (al-Jāmiʿ al-Kabīr)',en:'What do you say if it is a matter of your worldly affairs? Then that is yours; if religious, mine.',ref:'al-Jāmiʿ al-Kabīr, p. 583'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'That human-opinion distinction rests on one weak or isolated story about date palms!',
  theyWho:'Watch out · if they say',
  who:'Show the 4 Companion chains & isnād critique'
});

const flyBranchTibb=P(N(
  FLY,
  'If medical ḥadīths aren’t binding revelation, you’re admitting the Prophet’s medical advice can simply be dismissed alongside camel urine.',
  'Classifying prophetic medicine (al-ṭibb) under human custom and worldly ijtihād is an established Sunni scholarly position—not an ad-hoc modern retreat. It explains why both the fly-wing report and the camel-urine episode stand apart from universal Qurʾānic directives (such as honey in Q 16:69).',
  'Prophetic medicine (al-ṭibb) vs. legislative revelation',
  [
    '01 · Shared category with the camel-urine report: Both the fly-wing narration and the camel-urine narration fall under prophetic medicinal statements (al-ṭibb), not articles of creed or universal Sharīʿah ritual.',
    '02 · Non-authoritative worldly origin: A respected body of Muslim scholarship holds that prophetic medical guidance reflects personal opinion, 7th-century Arabian practice, or empirical ijtihād rather than divine waḥy.',
    '03 · Methodological consistency: Because binding revelation pertains to religion and salvation while worldly techniques remain open to human experience, critics cannot turn culturally situated remedies into an error of Islamic theology.'
  ],
  ['@Daraqutni, The Hadith of the Fly — An Analysis (Medium)','@Daraqutni, Prophetic Speech, Tafsir and The Pollination Hadith Pt. 1 (Medium)','Deenresponds #fly-hadith & #camel-urine'],
  [],
  {
    facts:[
      ['Category','Al-Ṭibb (Prophetic medicine)'],
      ['Paired Report','Linked with camel-urine ḥadīth'],
      ['Scholarly View','Personal opinion, custom, or ijtihād'],
      ['Creed Impact','Non-obligatory in Sharīʿah law']
    ]
  }
),{
  optWho:'Or widen the lens · if they say',
  optLabel:'Admitting medical ḥadīths reflect local human opinion concedes that prophetic medicine is flawed!',
  theyWho:'Or widen the lens · if they say',
  who:'Frame al-ṭibb as worldly ijtihād'
});

card('islam/hadith/law/fly-wing-hadith',{
  title:'The Fly-Wing Ḥadīth & Prophetic Medicine (al-Ṭibb)',
  k:'Prophetic Medicine · Worldly Ijtihād · Pollination',
  blurb:'Why classical Muslim scholarship distinguishes divine revelation from non-authoritative medical opinions and customs.',
  claim:'The fly-wing ḥadīth proves Islam binds Muslims to unscientific medical dogma as divine revelation.',
  tree:P(N(
    FLY,
    'The fly-wing ḥadīth commands dipping a housefly into a drink because one wing carries disease and the other carries its cure—proving Islam teaches bad science as divine revelation.',
    'A respected strand of Sunni scholarship explicitly distinguishes binding religious revelation (waḥy) from the Prophet’s ﷺ worldly and medicinal remarks (al-ṭibb), treating reports like the fly wing and camel urine as non-authoritative personal opinion, local custom, or worldly ijtihād—grounded in the Prophet’s ﷺ own rule across multiple Companion chains of the date-palm pollination ḥadīth.',
    'Prophetic medicine, worldly opinion & the pollination isnād',
    [
      '01 · Connection to the al-ṭibb corpus: Just like the camel-urine report, the fly-wing narration belongs to prophetic medicinal statements rather than core theology or universal religious law.',
      '02 · Non-authoritative origin in scholarship: A considerable portion of Muslim scholars classify prophetic medical advice as personal opinion, cultural custom, or worldly ijtihād—never claiming every remedy was dictated by divine revelation.',
      '03 · Explicit prophetic distinction in Ṣaḥīḥ Muslim: Through multiple chains (ʿĀʾisha, Anas, Mūsā b. Ṭalḥa, and Rāfiʿ b. Khadīj via Abū l-Najāshī), the Prophet ﷺ instructed Muslims to obey what he commands in religion while recognizing he is merely human in worldly opinions.',
      '04 · Rigorous isnād awareness: Detailed takhrīj of the pollination corpus even isolates weak routes like Jābir’s via Mujālid b. Saʿīd (Tahdhīb al-Tahdhīb 10/41), demonstrating disciplined source criticism rather than blind literalism.'
    ],
    ['@Daraqutni, The Hadith of the Fly — An Analysis (Medium)','@Daraqutni, Prophetic Speech, Tafsir and The Pollination Hadith Pt. 1 (Medium)','Ṣaḥīḥ Muslim (Pollination Ḥadīth)','Sharḥ Ṣaḥīḥ Ibn Ḥibbān al-Rājiḥī, p. 17','al-Ṭaḥāwī, Sharḥ Mushkil al-Āthār 4/425'],
    [flyBranchPollination,flyBranchTibb],
    {
      facts:[
        ['Classification','Al-Ṭibb (worldly medicine)'],
        ['Scholarly Rule','Personal opinion / custom ≠ waḥy'],
        ['Anchor Text','Date-palm pollination ḥadīth'],
        ['Sound Chains','ʿĀʾisha, Anas, Mūsā b. Ṭalḥa, Rāfiʿ']
      ],
      quotes:[
        {by:'Prophet Muḥammad ﷺ (via Rāfiʿ b. Khadīj)',en:'When I tell you something about your religion, take it; when from worldly matters, I am human.',ref:'Ṣaḥīḥ Muslim / Sharḥ Ibn Ḥibbān al-Rājiḥī, p. 17'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Religious Revelation (Waḥy)',
          items:[
            'Matters of creed, worship, and moral law',
            'Binding and protected from error in transmission',
            'Explicitly separated by the Prophet ﷺ (“take it”)'
          ]
        },
        right:{
          title:'Worldly & Medicinal Remarks (Al-Ṭibb)',
          items:[
            'Personal opinion, Arabian custom, or worldly ijtihād',
            'Includes fly-wing, camel-urine, and date-pollination advice',
            'Open to empirical revision without harming prophetic truth'
          ]
        }
      },
      shots:[
        S('dr-new-fly-hadith-1.webp','Deenresponds #fly-hadith: housefly illustration accompanying the analysis of the fly-wing narration as part of al-ṭibb.'),
        S('dr-new-fly-hadith-2.webp','Deenresponds #fly-hadith: detailed isnād analysis of the date-palm pollination ḥadīth (ʿĀʾisha, Anas, Mūsā b. Ṭalḥa, Rāfiʿ b. Khadīj, Abū Qatāda, and critique of Jābir’s weak route).')
      ]
    }
  ),{
    who:'Separate waḥy from worldly al-ṭibb',
    forkTitle:'Two follow-up angles they push',
    forkSub:'Verify the pollination isnād chains or address the broader al-ṭibb category'
  }),
  sum:'Classical Muslim scholarship treats prophetic medical statements like the fly-wing report as non-binding worldly custom or personal ijtihād—distinct from divine revelation as proven across multiple sound chains of the pollination ḥadīth.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: islam/creed/attributes/allah-hands-limbs-parts
      Combines allah_parts (1356430236199289086), allah_limbs (1357649953186512896),
      and allah_hands (1357950584723865673)
   ============================================================================ */
const CREED_PARTS=DR('#allah-parts & #allah-hands','1356430236199289086');
const CREED_LIMBS=DR('#allah-limbs','1357649953186512896');
const CREED_HANDS=DR('#allah-hands','1357950584723865673');

const creedBranchParts=P(N(
  CREED_PARTS,
  'If Allah truly possesses a Face and Hands distinct from one another, philosophical mereology proves He is composed of parts!',
  'Mereological parthood requires ontological priority, temporal succession, or separability—where a component can exist without the whole or be detached like a table leg, clay before a statue, or a brick from a house. Allah’s revealed Attributes of Essence (ṣifāt dhātiyyah khabariyyah) are eternal alongside His essence and can never cease or separate, so calling them “parts” commits a category error.',
  'Mereology, ontological priority & inseparable eternal attributes',
  [
    '01 · Definition of ontological parthood: Formally, x is an essential part of whole Q when x is ontologically prior—x can obtain without Q while Q cannot obtain without x (e.g., clay prior to a clay statue, or a leg constituting a table).',
    '02 · Separability and composition: As everyday mereology illustrates (a mug’s handle, a house’s brick, or cake halves), parts can be separated from a composite whole or sequentially assembled over time.',
    '03 · Eternal Attributes of Essence (Dhātiyyah Khabariyyah): Unlike human hands or faces that are separable bodily portions, Allah’s Hand, Face, and Eye are eternal Attributes known via revealed khabar—Allah has always been and will always be described with them, ruling out prior assembly or detachment.',
    '04 · Maʿnawiyyah vs. Khabariyyah distinction: Ibn al-ʿUthaymīn (Commentary on al-ʿAqīdah al-Wāsiṭiyyah, p. 153) clarifies that while reason grasps Life, Knowledge, and Power (maʿnawiyyah), revealed attributes like Hand and Face are known strictly by khabar yet share the exact same inseparability—never “portions or parts.”'
  ],
  ['Stanford Encyclopedia of Philosophy, “Mereology” §1','Ibn Taymiyyah on parthood','Shaykh Ibn al-ʿUthaymīn, Commentary on the Introductory Notes (p. 153)'],
  [],
  {
    facts:[
      ['Mereology Test','Parts imply priority & separability'],
      ['Table / Clay Analogy','Parts precede or build the whole'],
      ['Dhātiyyah Khabariyyah','Eternal & inseparable from Essence'],
      ['Ibn al-ʿUthaymīn','Explicitly denies “portions or parts”']
    ],
    quotes:[
      {by:'Ibn al-ʿUthaymīn (Commentary, p. 153)',en:'We do not say they are portions or parts... because parts and portions can be separated from the whole.',ref:'Commentary on the Introductory Notes, p. 153'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'If Allah has a Face and Hands, philosophical mereology proves He is made of parts!',
  theyWho:'Watch out · if they say',
  who:'Refute parthood via mereology & eternity'
});

const creedBranchLimbs=P(N(
  CREED_LIMBS,
  'Affirming real Hands and Face for Allah automatically means attributing physical body parts and biological limbs (jawāriḥ) to God.',
  'Affirming the reality of an attribute named in revelation never entails affirming creaturely limbs or bodily organs (jawāriḥ). Linguistic overlap in names (e.g., human knowledge vs. divine knowledge, or human hand vs. Allah’s Hand) affirms true meaning without shared modality (kayfiyyah) or physical anatomy.',
  'Why revealed attributes never entail bodily limbs (jawāriḥ)',
  [
    '01 · Nominal overlap without physical likeness: Just as affirming Allah’s Hearing, Seeing, and Knowledge does not mean eardrums, retinas, or neurons, affirming His Hand and Face does not mean bones, flesh, or anatomical limbs.',
    '02 · Categorical rejection of jawāriḥ and tarkīb: Classical Atharī theology explicitly denies that Allah has limbs (jawāriḥ), bodily members (aʿḍāʾ), or spatial composition, affirming only what Allah revealed about Himself.',
    '03 · Qurʾānic safeguard (Q 42.11): Every affirmation of divine attributes operates under the absolute boundary “There is nothing like unto Him”—blocking both bodily anthropomorphism and philosophical denial.'
  ],
  ['Deenresponds, “Does Allah have Body Parts? (Debunked)”','Qurʾān 42:11'],
  [],
  {
    facts:[
      ['Jawāriḥ (Limbs)','Categorically rejected in Sunni creed'],
      ['Shared Naming','Real meaning ≠ shared physical modality'],
      ['Anchor Verse','Q 42:11 (“nothing like unto Him”)'],
      ['Bilā Kayf','Affirm reality, deny creaturely form']
    ]
  }
),{
  optWho:'Or press the limb charge · if they say',
  optLabel:'Saying Allah literally has Hands means He has physical body parts and limbs like a creature!',
  theyWho:'Or press the limb charge · if they say',
  who:'Distinguish attributes from physical limbs'
});

const creedBranchHands=P(N(
  CREED_HANDS,
  'To avoid anthropomorphism, Muslims should just interpret Allah’s Hands in Qurʾān 38:75 metaphorically as His power.',
  'Imām Ibn Khuzaymah (d. 311 AH) refutes that Jahmī reinterpretation on both Arabic grammar and Qurʾānic logic: in Arabic, power is ayd (أَيْد), not yad (يَد); and since Allah created Iblīs, mosquitoes, and ants with His power too, reducing “created with My Two Hands” (Q 38:75) to “power” destroys Allah’s argument honoring Adam over Iblīs.',
  'Imām Ibn Khuzaymah (d. 311 AH) on yad vs. ayd & Q 38.75',
  [
    '01 · Arabic distinction between yad and ayd: In Kitāb al-Tawḥīd (1/199), Ibn Khuzaymah exposes the Jahmī claim that “hand” means “power” as a linguistic distortion—power in Arabic is ayd, not yad, and anyone confusing them needs elementary instruction before debating theology.',
    '02 · Creation of heavens vs. Adam: Allah tells us He created the heavens with power/might (bi-aydin, Q 51:47), distinct from specifying Adam’s unique creation with His Two Hands (bi-yadayya, Q 38:75).',
    '03 · Logical collapse on Q 38.75: Allah asked Iblīs what prevented him from prostrating to “what I created with My Own Two Hands.” Yet Allah equally created Iblīs, mosquitoes, ants, and all creatures by His power—so reading yad as power strips the rebuke of all meaning.'
  ],
  ['Imām Ibn Khuzaymah (d. 311 AH), Kitāb al-Tawḥīd wa-Ithbāt Ṣifāt al-Rabb ʿAzza wa-Jall, 1/199','Qurʾān 38:75; 51:47'],
  [],
  {
    facts:[
      ['Scholar','Imām Ibn Khuzaymah (d. 311 AH)'],
      ['Arabic Grammar','Power = ayd, Hand = yad'],
      ['Q 38:75 Proof','Honors Adam uniquely over Iblīs'],
      ['Reductio ad Absurdum','Mosquitoes & Iblīs also made by power']
    ],
    quotes:[
      {by:'Ibn Khuzaymah (Kitāb al-Tawḥīd 1/199)',en:'This is a distortion of the Arabic language; the Arabic term for power is ayd, not yad.',ref:'Kitāb al-Tawḥīd 1/199'}
    ]
  }
),{
  optWho:'Or push Jahmī taʾwīl · if they say',
  optLabel:'Why not simply interpret Allah’s Hands in the Qurʾān as a metaphor for His power?',
  theyWho:'Or push Jahmī taʾwīl · if they say',
  who:'Cite Ibn Khuzaymah on yad vs. ayd'
});

card('islam/creed/attributes/allah-hands-limbs-parts',{
  title:'Allah’s Attributes vs. Parts, Limbs & Anthropomorphism',
  k:'Atharī Creed · Bilā Kayf · Ibn Khuzaymah',
  blurb:'How Sunni creed affirms Allah’s Hands and Face bilā kayf while rejecting parts (ajzāʾ), limbs (jawāriḥ), composition, and Jahmī distortion.',
  claim:'Affirming Allah’s Hands and Face forces Muslims into corporeal anthropomorphism—or else they must reduce Hands to mere power.',
  tree:P(N(
    CREED_PARTS,
    'If Islam says Allah has Hands and a Face, then either Allah is composed of body parts and limbs like a creature, or else “Hand” is merely a metaphor for power.',
    'Sunni Atharī creed rejects both false horns—corporeal anthropomorphism (tashbīh) and figurative negation (taʿṭīl). It affirms every revealed Attribute (Hand, Face, Eye) literally as befits Allah’s majesty without asking how (bilā kayf), while categorically denying physical parts (ajzāʾ), limbs (jawāriḥ), and composition (tarkīb): eternal Attributes of Essence neither precede Allah nor separate from Him, and Arabic grammar plus Qurʾān 38:75 forbid reducing yad (Hand) to ayd (power).',
    'The Atharī middle path: affirmation without parts or taʾwīl',
    [
      '01 · Rejecting both tashbīh and taʿṭīl: Sunni theology neither likens Allah’s attributes to created limbs (tashbīh) nor explains revealed texts away as mere metaphors (taʿṭīl), holding fast to “There is nothing like unto Him” (Q 42:11).',
      '02 · Why revealed attributes are not “parts”: In mereology, parts are ontologically prior, assembled sequentially, or separable from a whole (like a leg from a table or brick from a house). Eternal Attributes of Essence (ṣifāt dhātiyyah khabariyyah) can never cease or detach from Allah.',
      '03 · No bodily limbs (jawāriḥ): Affirming real attributes conveyed by revelation (khabar) carries no biological or spatial anatomy; shared naming does not entail shared creaturely modality.',
      '04 · Linguistic refutation of “Hand = Power”: Imām Ibn Khuzaymah (d. 311 AH) proves in Kitāb al-Tawḥīd (1/199) that power is ayd while Hand is yad, and if yad meant power in Q 38:75, Adam would hold no distinction over Iblīs, ants, or mosquitoes.'
    ],
    ['Ibn al-ʿUthaymīn, Commentary on the Introductory Notes (p. 153)','Imām Ibn Khuzaymah (d. 311 AH), Kitāb al-Tawḥīd 1/199','Ibn Taymiyyah on parthood','Stanford Encyclopedia of Philosophy, “Mereology” §1','Qurʾān 38:75; 42:11; 51:47'],
    [creedBranchParts,creedBranchLimbs,creedBranchHands],
    {
      facts:[
        ['Creedal Balance','Rejects both tashbīh & taʿṭīl'],
        ['Mereology','No priority, succession, or separation'],
        ['Ibn al-ʿUthaymīn','Dhātiyyah khabariyyah ≠ portions/parts'],
        ['Ibn Khuzaymah','Arabic yad (Hand) ≠ ayd (power)']
      ],
      quotes:[
        {by:'Ibn al-ʿUthaymīn (p. 153)',en:'Attributes such as the Hand and Face are eternal with Allah; we do not say they are portions or parts.',ref:'Commentary on the Introductory Notes, p. 153'},
        {by:'Ibn Khuzaymah (1/199)',en:'Whoever cannot differentiate between yad and ayd is in greater need of education than engaging in debate.',ref:'Kitāb al-Tawḥīd wa-Ithbāt Ṣifāt al-Rabb, 1/199'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Created Parts & Limbs (Rejected)',
          items:[
            'Ontologically prior to or assembled into a whole (mereology)',
            'Separable or capable of ceasing (brick from house, handle from mug)',
            'Physical organs/limbs (jawāriḥ) sharing creaturely modality',
            'Or else denied altogether by Jahmī taʾwīl (yad = power)'
          ]
        },
        right:{
          title:'Allah’s Revealed Attributes (Affirmed)',
          items:[
            'Eternal ṣifāt dhātiyyah khabariyyah co-eternal with His Essence',
            'Inseparable and unceasing; zero composition (tarkīb)',
            'Affirmed literally bilā kayf under Q 42:11',
            'Linguistically distinct: Q 38:75 honors Adam with bi-yadayya'
          ]
        }
      },
      shots:[
        S('dr-creed-allah-parts-1.webp','Deenresponds #allah-parts: Stanford Encyclopedia of Philosophy (“Mereology” §1) distinguishing material/separable notions of parthood from eternal divine attributes.'),
        S('dr-creed-allah-parts-2.webp','Deenresponds #allah-parts: Ibn al-ʿUthaymīn’s Commentary (p. 153) explaining dhātiyyah khabariyyah attributes and why they are never portions or parts.'),
        S('dr-creed-allah-hands-1.webp','Deenresponds #allah-hands: original Arabic page of Imām Ibn Khuzaymah’s Kitāb al-Tawḥīd (p. 199) refuting Jahmī interpretation of Allah’s Hands.'),
        S('dr-creed-allah-hands-2.webp','Deenresponds #allah-hands: English translation of Ibn Khuzaymah (Kitāb al-Tawḥīd 1/199) distinguishing yad from ayd and analyzing Q 38:75.')
      ]
    }
  ),{
    who:'Hold the Atharī middle path',
    forkTitle:'Three follow-up traps they spring',
    forkSub:'Refute philosophical parthood, bodily limbs, or Jahmī “power” taʾwīl'
  }),
  sum:'Sunni Atharī creed affirms Allah’s revealed attributes like Hands and Face bilā kayf without parts, composition, or bodily limbs—refuting mereological parthood via eternal inseparability and refuting “Hand = power” via Ibn Khuzaymah’s linguistic proof on Q 38:75.'
});

/* ============================================================================
   B. 5 add() ENRICHMENTS ON EXISTING TOPICS KEYS
   ============================================================================ */

/* 1. islam/hadith/unseen/tailbone-coccyx-hadith — coccyx (1366847031506632724) */
const DR_COCCYX=DR('#coccyx','1366847031506632724');
add('islam/hadith/unseen/tailbone-coccyx-hadith',P(N(
  DR_COCCYX,
  'The coccyx ḥadīth is simply plagiarized from the Talmudic luz-bone legend and contradicts the Qurʾān’s description of human creation.',
  'Shared eschatological motifs with rabbinic lore do not prove plagiarism: Islam acknowledges that rabbinic collections preserve genuine oral traditions from Israelite prophets alongside later redactions. Crucially, the rabbis themselves disagreed whether the luz bone sat at the top or bottom of the spine, the ḥadīth operates as a polemic against deniers of resurrection rather than copying rabbinic literalism, and textual comparison of Muslim 2955a vs. 2955b highlights scholarly debate over the variant clause “from it he was created.”',
  'Rabbinic luz-bone divergence, polemical function & Muslim 2955a/b textual variance',
  [
    '01 · Rabbis disagreed on location & midrashic redactions: Parallel rabbinic traditions about the “luz” bone show internal midrashic redactions and an unresolved rabbinic debate over whether the bone stood at the top or bottom of the spine (with most rabbis placing it at the top, unlike ʿajb al-dhanab).',
    '02 · Oral prophetic remnants, not plagiarism: Islamic epistemology does not claim the Talmud is pure forgery; it contains authentic oral wisdom from earlier prophets and sages, while the prophetic report functions as a corrective polemic against those who deny bodily resurrection.',
    '03 · Textual variance in Ṣaḥīḥ Muslim 2955a vs. 2955b: Comparing Muslim 2955a (al-Aʿmash route) and 2955b (al-Aʿraj route) shows the phrase “and from it he was created” (minhu khuliqa) appears in 2955b yet is absent in 2955a—leading scholars to examine whether it refers to Adam’s ṣulb or diverges from Qurʾānic terminology (nuṭfah / ṣulb, never al-dhanab).'
  ],
  ['Ṣaḥīḥ Muslim 2955a & 2955b','Rabbinic Midrash (Luz bone traditions)','Deenresponds #coccyx'],
  [],
  {
    facts:[
      ['Luz Debate','Most rabbis placed luz at spine’s top'],
      ['Midrash Context','Polemic answering resurrection deniers'],
      ['Muslim 2955a vs b','“From it he was created” absent in 2955a'],
      ['Qurʾānic Terms','Uses nuṭfah / ṣulb, never al-dhanab']
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Rabbinic Luz Tradition',
        items:[
          'Contains multiple midrashic redactions',
          'Rabbis debated top vs. bottom of spinal column (majority: top)',
          'Part of polemic defending bodily resurrection'
        ]
      },
      right:{
        title:'Ḥadīth Textual Variance (Muslim 2955)',
        items:[
          'Muslim 2955a (al-Aʿmash) omits “from it he was created”',
          'Muslim 2955b (al-Aʿraj) includes minhu khuliqa',
          'Corrective framing; distinct from Qurʾān’s nuṭfah / ṣulb wording'
        ]
      }
    },
    shots:[
      S('dr-new-coccyx-1.webp','Deenresponds #coccyx: Yaza’s analysis comparing rabbinic luz-bone debates, corrective narrative framing, and Muslim 2955a vs. 2955b (“minhu khuliqa”).'),
      S('dr-new-coccyx-2.webp','Deenresponds #coccyx: close-up of the Muslim 2955a/2955b textual comparison and Qurʾānic terminology discussion.')
    ]
  }
),{
  optWho:'Or press the Talmud & variance angle · if they say',
  optLabel:'The coccyx ḥadīth just copies the Jewish luz-bone legend and clashes with Qurʾānic creation terms!',
  theyWho:'Or press the Talmud & variance angle · if they say',
  who:'Show luz-bone divergence & Muslim 2955a/b'
}));

/* 2. islam/quran/d-ia-alleged-contradictions/heaven-or-earth-created-first — earth_heavens (1366847540154204260) */
const DR_EH=DR('#earth-heavens','1366847540154204260');
add('islam/quran/d-ia-alleged-contradictions/heaven-or-earth-created-first',P(N(
  DR_EH,
  'Appealing to thumma and classical grammar to reconcile heaven-and-earth creation order is just modern apologetic wordplay.',
  'Contemporary Qurʾānic linguists ground this exact grammatical analysis in towering classical tafsīr authorities: Dr. Sohaib Saeed’s detailed study of Ibn ʿĀshūr (al-Taḥrīr wa-l-Tanwīr) and Abū Ḥayyān al-Andalusī (al-Baḥr al-Muḥīṭ) demonstrates how classical Arabic syntax of thumma interacts naturally with empirical knowledge in traditional exegesis.',
  'Dr. Sohaib Saeed on Ibn ʿĀshūr, thumma & empirical tafsīr',
  [
    '01 · Linguistic examination of thumma: Dr. Sohaib Saeed addresses the heaven-vs-earth objection directly through classical Arabic grammar, analyzing how Ibn ʿĀshūr handles the discourse range of thumma.',
    '02 · Empirical knowledge inside classical tafsīr: Drawing on Ibn ʿĀshūr’s methodological framework, Saeed shows how classical exegetes responsibly integrate empirical reality with rigorous lexical and syntactic limits rather than forcing literalist misreadings.',
    '03 · Abū Ḥayyān al-Andalusī’s corroboration: Abū Ḥayyān’s grammatical commentary (al-Baḥr al-Muḥīṭ) remains an essential classical anchor proving that non-chronological discourse-ordering readings of thumma predate modern science.'
  ],
  ['Dr. Sohaib Saeed, “Ibn Ashur, Thumma (ثم), and Science in Tafsir” (YouTube)','Ibn ʿĀshūr, al-Taḥrīr wa-l-Tanwīr','Abū Ḥayyān al-Andalusī, al-Baḥr al-Muḥīṭ'],
  [],
  {
    facts:[
      ['Linguist','Dr. Sohaib Saeed (Tafsīr scholar)'],
      ['Key Exegete','Ibn ʿĀshūr on thumma & empirical data'],
      ['Classical Anchor','Abū Ḥayyān al-Andalusī’s grammar'],
      ['Takeaway','Syntax precedes modern apologetics']
    ]
  }
),{
  optWho:'Or consult Ibn ʿĀshūr & syntax · if they say',
  optLabel:'Your thumma explanation is just modern apologetics trying to rescue a contradiction!',
  theyWho:'Or consult Ibn ʿĀshūr & syntax · if they say',
  who:'Cite Dr. Sohaib Saeed & Ibn ʿĀshūr'
}));

/* 3. islam/general/d-av-sonstiges-islam-1/c-sonne-geht-im-quellen-meer-unter — muddy_spring (1366711828071317514) */
const DR_MUD=DR('#muddy-spring','1366711828071317514');
add('islam/general/d-av-sonstiges-islam-1/c-sonne-geht-im-quellen-meer-unter',P(N(
  DR_MUD,
  'Abū Dāwūd 4002 has trustworthy narrators in its chain, so you cannot dismiss the sun setting in a warm spring as a fabrication.',
  'In ḥadīth criticism, trustworthy narrators do not protect a solitary wording that contradicts all parallel chains from the same teacher. Mapping all five routes branching from Ibrāhīm al-Taymī ← his father ← Abū Dharr (al-Aʿmash, Mūsā, Hārūn, Yūnus, and al-Ḥakam) reveals that every parallel strand lacks the warm-spring clause—leaving Abū Dāwūd 4002’s lone line as a clear conflation with Q 18:86.',
  'Five-branch isnād map from Abū Dharr & Abū ʿAwāna / Muslim evidence',
  [
    '01 · Five students from Ibrāhīm al-Taymī: Tracing the common link back to Abū Dharr shows the transmission splitting across al-Aʿmash, Mūsā, Hārūn, Yūnus, and al-Ḥakam.',
    '02 · Four entire families omit the spring: Every narration transmitted through al-Aʿmash (including Abū ʿAwāna’s Mustakhraj #323 and Ṣaḥīḥ Muslim 159b), Mūsā, Hārūn, and Yūnus states only that the sun prostrates beneath the Throne—with zero mention of warm water.',
    '03 · Why trustworthy narrators don’t save Abū Dāwūd 4002: Only one isolated route through al-Ḥakam includes the spring clause; because it disagrees with every sister chain, ḥadīth methodology classifies that lone addition as fabricated/shādhdh—likely a narrator’s confusion with Qurʾān 18:86.'
  ],
  ['Abū ʿAwāna, al-Mustakhraj #323 (via al-Aʿmash)','Ṣaḥīḥ Muslim 159b','Sunan Abū Dāwūd 4002','Qurʾān 18:86'],
  [],
  {
    facts:[
      ['Root Narrator','Abū Dharr ← Ibrāhīm al-Taymī'],
      ['Clean Routes','al-Aʿmash, Mūsā, Hārūn, Yūnus'],
      ['Primary Witnesses','Abū ʿAwāna #323; Muslim 159b'],
      ['Lone Anomaly','1 route via al-Ḥakam (Abū Dāwūd 4002)']
    ],
    shots:[
      S('dr-new-muddy-spring-1.webp','Deenresponds #muddy-spring: Abū ʿAwāna’s Mustakhraj #323 (via al-Aʿmash ← Abū Dharr) showing the sun prostrating beneath the Throne with no mention of a spring.'),
      S('dr-new-muddy-spring-2.webp','Deenresponds #muddy-spring: Ṣaḥīḥ Muslim 159b confirming the standard Abū Dharr wording without the warm-spring insertion.')
    ]
  }
),{
  optWho:'Or press the Abū Dāwūd 4002 chain · if they say',
  optLabel:'Abū Dāwūd 4002 has trustworthy narrators, so you can’t claim the warm-spring clause is fabricated!',
  theyWho:'Or press the Abū Dāwūd 4002 chain · if they say',
  who:'Map all 5 parallel routes from Abū Dharr'
}));

/* 4. islam/quran/science-errors/bones-then-flesh-23-14 — embryology (1366915237919461478) */
const DR_EMB=DR('#embryology','1366915237919461478');
add('islam/quran/science-errors/bones-then-flesh-23-14',P(N(
  DR_EMB,
  'Medical textbooks disprove Qurʾān 23:14 because bone formation happens much later, and the Qurʾān merely borrowed Galenic or Talmudic embryology.',
  'Medical reference literature (NCBI StatPearls, “Embryology, Bone Ossification”) confirms osteogenesis begins early—around weeks 6 to 7 of embryonic development via intramembranous and endochondral ossification—while comprehensive historical-linguistic research refutes both Galenic and Talmudic borrowing claims.',
  'NCBI osteogenesis timeline & full Galenic / Talmudic intertext rebuttal',
  [
    '01 · Early embryonic osteogenesis (NCBI StatPearls): Bone formation (ossification/osteogenesis) initiates between weeks 6 and 7 of embryonic life through intramembranous and endochondral pathways, harmonizing with structural skeletal models preceding mature muscular clothing (fa-kasawnā al-ʿiẓāma laḥman, Q 23:14).',
    '02 · Lexical & hermeneutical foundations: Detailed lexical study of classic Arabic sources establishes the Qurʾān’s primary hermeneutic principle on natural phenomena, avoiding anachronistic projection of modern technical jargon.',
    '03 · Rebutting Galenic & Judaic dependency myths: Systematic historical analysis tests 7th-century Arabian medicine, Alexandrian Galenic curricula, and Judaic intertexts (40-day liquid claims, gender timing, male-bones/female-flesh)—demonstrating why Talmudic transmission into early Meccan revelation fails historically alongside ICMA testing of the 40-vs-120-day ḥadīth corpus.'
  ],
  ['NCBI StatPearls, “Embryology, Bone Ossification” (NBK539718)','Qurʾān 23:14','Yaza, Embryology Research Paper (Deenresponds)','Saamady, “Embryology and Islam - Part 1” (YouTube)'],
  [],
  {
    facts:[
      ['NCBI NBK539718','Osteogenesis begins weeks 6–7'],
      ['Ossification Types','Intramembranous & endochondral'],
      ['Q 23:14 Wording','Fa-kasawnā al-ʿiẓāma laḥman'],
      ['Intertext Audit','Tests Galenic & Talmudic claims + ICMA']
    ],
    shots:[
      S('dr-new-embryology-1.webp','Deenresponds #embryology: Table of Contents of Yaza’s 46+ page embryology paper covering Arabic lexicon, Galenic curricula, Judaic intertexts, and 40-vs-120-day ICMA analysis.'),
      S('dr-new-embryology-2.webp','Deenresponds #embryology: Qurʾān 23:14 highlighting “fa-kasawnā al-ʿiẓāma laḥman” (then clothed the bones with flesh).')
    ]
  }
),{
  optWho:'Or press clinical ossification & borrowing · if they say',
  optLabel:'Clinical embryology disproves early bone formation, and Qurʾān 23:14 just copies Galen or the Talmud!',
  theyWho:'Or press clinical ossification & borrowing · if they say',
  who:'Cite NCBI osteogenesis & intertext study'
}));

/* 5. islam/general/d-av-sonstiges-islam-2/c-kamel-urin — camel_urine (1365071728338010204) */
const DR_CAM=DR('#camel-urine','1365071728338010204');
add('islam/general/d-av-sonstiges-islam-2/c-kamel-urin',P(N(
  DR_CAM,
  'If the Prophet prescribed camel urine, either Islam is stuck endorsing an unsafe remedy as timeless divine revelation or else his prophethood fails.',
  'That dilemma ignores both historical context and the Prophet’s ﷺ own rule separating revelation from personal opinion. Even when the report is taken at face value, the sick men recovered using an established pre-Islamic Arabian remedy (no one faults 7th-century medicine for lacking MRI or antibiotics); more importantly, Ṣaḥīḥ Muslim 2362 proves personal worldly advice is not revelation—standing in sharp contrast to Qurʾān 16:68–69’s explicit revelation regarding honey.',
  'Historical context, Muslim 2362 (personal opinion) & Q 16.68–69 (honey)',
  [
    '01 · Factual efficacy & historical anachronism: Within the narrative itself, drinking camel milk and urine cured the travelers’ illness; faulting 7th-century Arabia for employing available local remedies instead of modern antibiotics or MRI scans is sheer chronological arrogance.',
    '02 · Revelation vs. personal opinion (Ṣaḥīḥ Muslim 2362): In Rāfiʿ b. Khadīj’s date-palm grafting ḥadīth, when the Prophet’s ﷺ non-revealed advice led to smaller yields, he explicitly clarified that religious commands must be followed while personal worldly opinions reflect his humanity—so localized medical advice carries no universal divine mandate.',
    '03 · Contrast with revealed Qurʾānic medicine (Q 16.68–69): Unlike personal medical opinion, Allah explicitly reveals in the Qurʾān that honey holds “healing for people” (shifāʾun lil-nās)—corroborated by honey’s indefinite shelf-life (intact in millennia-old Egyptian vessels) and modern clinical findings (Mayo Clinic evidence for coughs, wound care, and gastrointestinal/neurological/cardiovascular benefits).',
    '04 · Pre-Islamic cultural backdrop & idrāj: Even alongside scholarly arguments that the urine phrase is an idrāj addition, camel-urine therapy existed in Arabia prior to Islam as a regional cultural practice rather than an Islamic invention.'
  ],
  ['Ṣaḥīḥ Muslim 2362 (Rāfiʿ b. Khadīj — Grafting Ḥadīth)','Qurʾān 16:68–69 (Honey)','Mayo Clinic, “Honey” Drug & Supplement Monograph','Deenresponds #camel-urine & #fly-hadith'],
  [],
  {
    facts:[
      ['Muslim 2362','Personal opinion ≠ divine revelation'],
      ['Historical Context','Pre-Islamic Arabian medical practice'],
      ['Q 16:68–69','Revealed healing in honey (shifāʾ)'],
      ['Clinical Note','Mayo Clinic cites cough & wound benefits']
    ],
    quotes:[
      {by:'Prophet Muḥammad ﷺ (Ṣaḥīḥ Muslim 2362)',en:'When I command you about a thing out of my personal opinion, keep in mind I am human.',ref:'Ṣaḥīḥ Muslim 2362'},
      {by:'Qurʾān 16:69',en:'There emerges from their bellies a drink, varying in colors, in which there is healing for people.',ref:'Qurʾān 16:69'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Personal Worldly Opinion (Muslim 2362)',
        items:[
          'Camel urine was an existing pre-Islamic Arabian remedy',
          'Prophet ﷺ explicitly said personal opinions are human, not waḥy',
          'No proof of universal obligation; may also involve idrāj'
        ]
      },
      right:{
        title:'Explicit Divine Revelation (Q 16:68–69)',
        items:[
          'Qurʾān directly declares honey holds “healing for people”',
          'Honey does not spoil across millennia (ancient Egyptian pots)',
          'Modern research (Mayo Clinic) confirms therapeutic uses'
        ]
      }
    },
    shots:[
      S('dr-new-camel-urine-1.webp','Deenresponds #camel-urine: Ṣaḥīḥ Muslim 2362 (Rāfiʿ b. Khadīj) highlighting the Prophet’s ﷺ distinction between religious commands and personal human opinion.'),
      S('dr-new-camel-urine-2.webp','Deenresponds #camel-urine: Qurʾān 16:68–69 highlighting “in which there is healing for people” regarding honey as revealed medicine.')
    ]
  }
),{
  optWho:'Or distinguish opinion from revelation · if they say',
  optLabel:'If the Prophet recommended camel urine, Islam forces Muslims to defend primitive medicine as revelation!',
  theyWho:'Or distinguish opinion from revelation · if they say',
  who:'Contrast Muslim 2362 with Q 16.69 (honey)'
}));

})();
