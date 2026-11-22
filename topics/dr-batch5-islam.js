/* Deenresponds Batch 5 Islam & Hadith Channels — 2026-11-22.
   Integrates 9 channels across 6 new Tactical Debate Playbook cards and 3 add() enrichments,
   referencing all 14 shots/dr5-*.webp scans. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('dr-batch5-islam: no card',key); };

const DR=(sub,id)=>({credit:'Deenresponds · '+sub,link:'https://discord.com/channels/1328402309297733662/'+id});
const S=(src,cap)=>({src:'shots/'+src,cap});

/* ============================================================================
   1. NEW Tactical Playbook card: islam/hadith/unseen/dominant-liquid-resemblance
      From dominant_liquid (1359276379832717433)
   ============================================================================ */
const DL=DR('#dominant-liquid','1359276379832717433');

const dlBranchVolume=P(N(
  DL,
  'The ḥadīth literally claims whichever fluid has greater physical volume determines who the child resembles—and female fluid often exceeds male volume.',
  'Reading “dominance” as literal liquid volume misconstrues the text. In Ṣaḥīḥ Muslim, the Prophet ﷺ explicitly states conception occurs from a single drop, proving volume is irrelevant—while comparing variant chains reveals wording shifts between sabaqa, ʿalā, and ghalaba.',
  'Single-drop conception & matn variants (sabaqa, ʿalā, ghalaba)',
  [
    '01 · Volume ruled out by Ṣaḥīḥ Muslim: Because authentic narrations in Ṣaḥīḥ Muslim state conception can take place from a single drop, literal fluid volume plays no role—especially since female fluids routinely exceed male seminal volume.',
    '02 · Textual variants across narrations: Gathering all chains exposes matn variations between sabaqa (“preceded”), ʿalā (“rose above”), and ghalaba (“prevailed over”), showing why single-narration literalism fails.',
    '03 · Applying classical tarjīḥ and taʾwīl: Once all variant texts are laid side by side, scholars weigh the strongest attested wording (tarjīḥ) or interpret the idiom (taʾwīl) consistently with established biological reality.'
  ],
  ['Ṣaḥīḥ Muslim (Single-drop conception)','@abu_ishaaq, Matn variants analysis (X thread)','Islam & Science Substack — Hadith & Genetics'],
  [],
  {
    facts:[
      ['Ṣaḥīḥ Muslim','Conception occurs from a single drop'],
      ['Matn Variants','sabaqa / ʿalā / ghalaba'],
      ['Biological Fact','Fluid volume is irrelevant'],
      ['Uṣūl Tool','Tarjīḥ & Taʾwīl across full corpus']
    ],
    quotes:[
      {by:'Ṣaḥīḥ Muslim (Conception)',en:'Not from all of the fluid is the child created.',ref:'Ṣaḥīḥ Muslim 1438'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The ḥadīth literally claims whichever fluid has greater volume determines the child’s resemblance!',
  theyWho:'Watch out · if they say',
  who:'Show single-drop ḥadīth & matn variants'
});

const dlBranchTraits=P(N(
  DL,
  'Seventh-century Arabs knew nothing about dominant or recessive inheritance, so the ḥadīth can only mean naive fluid-mixing.',
  'Millennia of selective animal breeding gave ancient societies—including 7th-century Arabs—a sharp empirical grasp of dominant and recessive traits, reflected directly in the ḥadīth of the dark-brown camel. Meanwhile, claiming the Prophet ﷺ merely quoted Jewish beliefs is weaker given the rabbinic-questions texts.',
  'Empirical trait inheritance & evaluating the rabbinic-quote route',
  [
    '01 · Selective breeding in 7th-century Arabia: Generations of breeding horses and camels taught Arabs that pairing dark-coated parents tends to yield darker offspring and that hidden ancestral traits can resurface.',
    '02 · The red/dark-brown camel ḥadīth: When a man doubted his dark-colored newborn because both parents were light, the Prophet ﷺ asked whether an ancestral camel had that trait—demonstrating familiarity with latent heredity.',
    '03 · Caution on the “quoting Jewish lore” reply: Some apologists argue the Prophet ﷺ was merely repeating contemporary Jewish ideas without endorsing them, yet the wording of the rabbinic-questions reports makes that route weak without rigorous matn scrutiny.'
  ],
  ['Ḥadīth of the dark-brown camel (Ṣaḥīḥ al-Bukhārī & Muslim)','Deenresponds #dominant-liquid analysis','Islam & Science Substack — Hadith & Genetics'],
  [],
  {
    facts:[
      ['Animal Breeding','Horses & camels bred for traits'],
      ['Recessive Traits','Illustrated in dark-camel ḥadīth'],
      ['Caveat','“Quoting Jewish lore” route is weak'],
      ['Takeaway','Practical heredity ≠ modern genomics']
    ]
  }
),{
  optWho:'Or press history · if they say',
  optLabel:'Seventh-century Arabs had no concept of dominant or recessive traits at all!',
  theyWho:'Or press history · if they say',
  who:'Cite camel breeding & the dark-camel ḥadīth'
});

card('islam/hadith/unseen/dominant-liquid-resemblance',{
  title:'Dominant Fluid & Child Resemblance Ḥadīth',
  k:'Uṣūl al-Ḥadīth · Matn Variants · Heredity',
  blurb:'Why classical ḥadīth methodology—tarjīḥ, jamʿ, taʾwīl, tawaqquf—plus single-drop conception and empirical breeding refute literal-volume readings.',
  claim:'The ḥadīth about male and female fluids “prevailing” teaches unscientific ancient fluid-volume biology.',
  tree:P(N(
    DL,
    'The ḥadīth claiming a child resembles whichever parent’s fluid “prevails” teaches false ancient biology about semen volume.',
    'Classical Islamic scholars forbid isolating a single narration from its full corpus of chains (isnād) and variant wordings (matn). Gathering the parallel reports uncovers key shifts between sabaqa, ʿalā, and ghalaba; Ṣaḥīḥ Muslim explicitly rules out liquid volume by tying conception to a single drop; and 7th-century Arabian breeding traditions already recognized inherited and resurgent traits.',
    'Four-step ḥadīth methodology & biological context',
    [
      '01 · Gather every isnād and matn first: Before judging any narration against science or reason, scholars collect all chains and variant wordings to spot subtle textual defects or lexical shifts.',
      '02 · Four classical tools (Tarjīḥ, Jamʿ, Taʾwīl, Tawaqquf): With the corpus assembled, scholars weigh the best-attested text (tarjīḥ), harmonize apparent tensions (jamʿ), interpret non-literal phrasing (taʾwīl), or suspend judgment (tawaqquf).',
      '03 · Volume is explicitly excluded: A narration in Ṣaḥīḥ Muslim confirms conception occurs from a single drop, meaning “prevailing” cannot refer to fluid quantity—especially since female secretions regularly exceed male fluid volume.',
      '04 · Pre-modern awareness of inheritance: Millennia of horse and camel domestication gave Arabs practical insight into inherited and recessive traits, as illustrated in the Prophet’s ﷺ exchange over an ancestral camel coat color.'
    ],
    ['Islam & Science Substack — Hadith & Genetics','@abu_ishaaq, Matn variants analysis (X)','Ṣaḥīḥ Muslim 1438','Ḥadīth of the dark-brown camel'],
    [dlBranchVolume,dlBranchTraits],
    {
      who:'Opening move',
      forkTitle:'2 ways critics misread the resemblance ḥadīth',
      forkSub:'Pick one to dismantle literal fluid volume or ancient-ignorance assumptions',
      facts:[
        ['Corpus First','Assemble all isnāds & matn variants'],
        ['Text Variants','sabaqa vs. ʿalā vs. ghalaba'],
        ['Ṣaḥīḥ Muslim','Conception from a single drop'],
        ['4 Methods','Tarjīḥ · Jamʿ · Taʾwīl · Tawaqquf']
      ],
      visual:{
        kind:'steps',
        items:[
          ['A · Tarjīḥ (Prioritization)','Select the best-attested wording across variant mutūn (e.g., sabaqa / ʿalā / ghalaba).'],
          ['B · Jamʿ (Reconciliation)','Harmonize reports through an overarching principle encompassing all sound chains.'],
          ['C · Taʾwīl (Contextual Interpretation)','Apply a sound non-surface reading when literalism clashes with established proof.'],
          ['D · Tawaqquf (Suspension)','Suspend definitive judgment where variant evidence remains inconclusive.']
        ]
      }
    }
  ),{
    who:'Opening move',
    forkTitle:'2 ways critics misread the resemblance ḥadīth',
    forkSub:'Pick one to dismantle literal fluid volume or ancient-ignorance assumptions'
  }),
  sum:'Assembling all isnāds and matn variants (sabaqa/ʿalā/ghalaba), Ṣaḥīḥ Muslim’s single-drop conception rule, and Arabian breeding awareness show “dominance” never meant liquid volume.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: islam/hadith/law/no-contagion-hadith
      From no_contagion (1366842943809261578)
   ============================================================================ */
const NC=DR('#no-contagious-disease','1366842943809261578');

const ncBranchSelfContradict=P(N(
  NC,
  'Saying “there is no contagion” and “flee from a leper” in the exact same ḥadīth just shows the Prophet contradicted himself.',
  'An immediate self-contradiction inside a single two-line sentence proves the phrase “no contagion” (lā ʿadwā) was never denying physical disease transmission. The Muwaṭṭaʾ report and the Bedouin’s mangy-camel dialogue show it denies pagan autonomous causation while affirming real contagion by Allah’s leave.',
  'Internal logic, the Muwaṭṭaʾ report & the Bedouin’s camel',
  [
    '01 · One sentence cannot refute itself blindly: Pairing “there is no ʿadwā” with “flee from a leper as you flee from a lion” signals that lā ʿadwā targets pre-Islamic superstition, not observable infection.',
    '02 · The Muwaṭṭaʾ makes harm explicit: In Mālik’s Muwaṭṭaʾ, the Prophet ﷺ repeats “no contagion” and immediately forbids mixing sick livestock with healthy livestock—explaining, “It is harmful (innahu adhā).”',
    '03 · Who infected the first camel: When a Bedouin objected that one mangy camel infects an entire healthy herd, the Prophet ﷺ did not deny the spread; he asked, “Then who conveyed the disease to the first one?”—pointing to Allah as First Cause.'
  ],
  ['Ṣaḥīḥ al-Bukhārī & Muslim (Abū Hurayra)','Muwaṭṭaʾ Mālik (Bukayr b. al-Ashajj ← Ibn ʿAṭiyya ← Abū Hurayra)'],
  [],
  {
    facts:[
      ['Muwaṭṭaʾ Mālik','Sick livestock barred from healthy (“It is harmful”)'],
      ['Bedouin Reply','“Who conveyed disease to the first one?”'],
      ['Target of Denial','Pagan autonomous contagion, not biology'],
      ['Leprosy Clause','“Flee from a leper as from a lion”']
    ],
    quotes:[
      {by:'Muwaṭṭaʾ Mālik (Abū Hurayra)',en:'The possessor of sick livestock must not stop with healthy livestock… It is harmful.',ref:'Muwaṭṭaʾ Mālik'},
      {by:'Prophet Muḥammad ﷺ (Bedouin dialogue)',en:'Then who conveyed the disease to the first one?',ref:'Ṣaḥīḥ al-Bukhārī & Muslim'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Saying no contagion and flee from a leper in one ḥadīth is just an internal contradiction!',
  theyWho:'Watch out · if they say',
  who:'Show Muwaṭṭaʾ (“It is harmful”) & camel reply'
});

const ncBranchQuarantine=P(N(
  NC,
  'Even if he noticed leprosy, the Prophet never laid down real public-health separation or quarantine rules.',
  'Multiple explicit narrations prescribe both livestock separation and human plague quarantine: sick herds must not be mixed with healthy ones, and travelers are strictly forbidden from entering or leaving a plague-stricken region.',
  'Explicit quarantine & separation rules in sound ḥadīths',
  [
    '01 · Plague quarantine rule: The Prophet ﷺ commanded that if plague breaks out in a land, outsiders must not enter it, and residents inside must not leave it—the core principle of containment quarantine.',
    '02 · General isolation principle: Narrated by Abū Bakr b. Abī Shayba (via ʿAlī b. Mushir ← Muḥammad b. ʿAmr ← Abū Salama ← Abū Hurayra), the Prophet ﷺ ruled, “The sick should not be brought to the healthy.”',
    '03 · Applicable across species: Whether applied to camels in the pasture or human epidemics, the legal maxim rests squarely on preventing observable transmission of harm.'
  ],
  ['Ṣaḥīḥ al-Bukhārī & Muslim (Plague Quarantine)','Muṣannaf Ibn Abī Shayba / Sunan (Abū Salama ← Abū Hurayra)'],
  [],
  {
    facts:[
      ['Plague Rule','Do not enter or exit a plague-hit land'],
      ['Ibn Abī Shayba','“The sick must not be put with the healthy”'],
      ['Transmission','Explicitly recognized across humans & herds'],
      ['Verdict','Early quarantine precedent']
    ],
    quotes:[
      {by:'Prophet Muḥammad ﷺ (Plague Quarantine)',en:'If you hear of plague in a land, do not enter it; if in it, do not leave.',ref:'Ṣaḥīḥ al-Bukhārī & Muslim'}
    ]
  }
),{
  optWho:'Or press public health · if they say',
  optLabel:'He never gave clear quarantine or isolation rules against infectious spread!',
  theyWho:'Or press public health · if they say',
  who:'Cite the plague quarantine & sick-from-healthy rule'
});

card('islam/hadith/law/no-contagion-hadith',{
  title:'“There Is No Contagion” (Lā ʿAdwā) & Quarantine',
  k:'Prophetic Medicine · Causation · Quarantine',
  blurb:'How the Muwaṭṭaʾ, the Bedouin’s camel dialogue, and plague quarantine prove lā ʿadwā rejects pagan superstition—not infectious disease.',
  claim:'The Prophet ﷺ denied contagious disease exists, contradicting basic biology.',
  tree:P(N(
    NC,
    'A famous ḥadīth quotes the Prophet saying there is no contagion—proving Islam denies infectious disease.',
    'Reading “no contagion” as a denial of physical infection collapses inside the very same report, which commands fleeing a leper like a lion. Across parallel chains in Mālik’s Muwaṭṭaʾ, the Bedouin’s mangy-camel exchange, and the plague-quarantine commands, the Prophet ﷺ repeatedly affirms contagious transmission while rejecting the pagan belief that disease spreads independently of Allah.',
    'Full corpus reading of lā ʿadwā & infectious transmission',
    [
      '01 · Built-in contextual clue: The very narration cited by critics pairs “no contagion, no bad omen, no hāmah, no ṣafar” with the urgent command, “flee from a leper as you would flee from a lion”—ruling out a flat denial of infection.',
      '02 · Muwaṭṭaʾ Mālik clarification: In the parallel Muwaṭṭaʾ version, right after denying pagan ʿadwā, the Prophet ﷺ bars sick livestock from mixing with healthy herds because “it is harmful” (innahu adhā).',
      '03 · First-cause theology with the Bedouin: When asked why one mangy camel infects an entire healthy herd, the Prophet ﷺ affirmed the observable chain by asking, “Then who conveyed the disease to the first one?”',
      '04 · Explicit quarantine legislation: Additional sound reports command keeping the sick away from the healthy and prohibiting anyone from entering or fleeing a plague-stricken land.'
    ],
    ['Ṣaḥīḥ al-Bukhārī & Muslim (Leper, Camel, Plague)','Muwaṭṭaʾ Mālik (Abū Hurayra)','Abū Bakr b. Abī Shayba (Lā yūridu l-mumriḍu ʿalā l-muṣiḥḥ)'],
    [ncBranchSelfContradict,ncBranchQuarantine],
    {
      who:'Opening move',
      forkTitle:'2 follow-up objections on lā ʿadwā',
      forkSub:'Choose whether they allege an internal contradiction or deny prophetic quarantine',
      facts:[
        ['Same Ḥadīth','“Flee from a leper as from a lion”'],
        ['Muwaṭṭaʾ Mālik','Sick herds barred from healthy (“It is harmful”)'],
        ['Camel Question','“Who conveyed disease to the first one?”'],
        ['Quarantine','No entry into or exit from plague zones']
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Misreading',
          items:[
            'Isolates three words: “no contagion” (lā ʿadwā)',
            'Ignores “flee from a leper” in the same sentence',
            'Omits Muwaṭṭaʾ’s “It is harmful” and plague quarantine'
          ]
        },
        right:{
          title:'Full Prophetic Corpus',
          items:[
            'Rejects pagan belief in autonomous, godless omens/contagion',
            'Affirms physical transmission (“who infected the first one?”)',
            'Enforces herd separation and strict plague lockdown'
          ]
        }
      },
      shots:[
        S('dr5-contagion-1.webp','Deenresponds #no-contagious-disease: microbial/viral pathogens illustrating infectious transmission.'),
        S('dr5-contagion-2.webp','Deenresponds #no-contagious-disease: Muwaṭṭaʾ Mālik narration (Abū Hurayra) barring sick livestock from healthy because “It is harmful.”')
      ]
    }
  ),{
    who:'Opening move',
    forkTitle:'2 follow-up objections on lā ʿadwā',
    forkSub:'Choose whether they allege an internal contradiction or deny prophetic quarantine'
  }),
  sum:'Far from denying infection, the Muwaṭṭaʾ (“It is harmful”), the mangy-camel reply, leprosy avoidance, and plague lockdowns reject pagan autonomous causation while enforcing practical quarantine.'
});

/* ============================================================================
   3. NEW Tactical Playbook card: islam/quran/science-errors/seven-heavens-and-seven-earths
      From seven_heavens (1366711984258551858) + dr5-7heavens-1..3.webp
   ============================================================================ */
const SH=DR('#on-the-7-heavens-and-7-earths','1366711984258551858');

const shBranchSee=P(N(
  SH,
  'Qurʾān 71:15 asks “Did you not see how Allah created seven heavens one upon another?”—yet telescopes don’t see seven domes stacked in the sky!',
  'Classical exegetes never restricted “see” (taraw) or “seven heavens” to seven visible glass domes. Across tafsīr, “seven heavens” encompasses the seven classical celestial bodies (Ibn ʿĀshūr) or planetary circuits, the Arabic hyperbole of abundance (sabʿ), and material realms where only the first heaven is visible while six lie beyond human perception.',
  'Exegetical models of “seeing” the seven heavens (Q 71.15)',
  [
    '01 · Seven celestial bodies or circuits: Exegetes including Ibn ʿĀshūr read the “seven heavens” as the seven classical celestial bodies visible to pre-telescopic observers—Sun, Moon, Mercury, Venus, Mars, Jupiter, and Saturn (plus Earth in some listings, with Galileo later resolving Saturn’s features in 1610)—or as planetary orbits/circuits.',
    '02 · First heaven visible, six unseen: Many ʿulamāʾ hold that all observable galaxies and stars lie inside the first (lowest) heaven, while the remaining six material realms sit beyond human perception (with some earlier scholars differing on whether luminaries like the Sun sit higher).',
    '03 · Arabic hyperbole of seven: Classical Arabic linguistics also uses the number “seven” idiomatically as emphasis for multiplicity/abundance rather than a strict arithmetic cap—consistent with reports indicating far more than seven realms.'
  ],
  ['Qurʾān 17:44; 71:15; 65:12','Ibn ʿĀshūr (Tafsīr al-Taḥrīr wa-l-Tanwīr)','Deenresponds #on-the-7-heavens-and-7-earths'],
  [],
  {
    facts:[
      ['Ibn ʿĀshūr','7 classical celestial bodies / circuits'],
      ['Unseen Realms','All visible cosmos in the 1st heaven'],
      ['Arabic Idiom','“Seven” as hyperbole for abundance'],
      ['Symbolic View','Sufi literal-plus-spiritual layers']
    ],
    quotes:[
      {by:'Qurʾān — Sūrat Nūḥ',en:'Did you not see how Allah has created seven heavens one upon another?',ref:'Q 71:15'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Qurʾān 71:15 says humans can see seven stacked heavens, yet astronomy shows no seven domes!',
  theyWho:'Watch out · if they say',
  who:'Lay out Ibn ʿĀshūr, unseen realms & hyperbole'
});

const shBranchWeakAnd6512=P(N(
  SH,
  'Islamic tradition literally says the seven heavens are colored stone/metal layers—just ancient Mesopotamian sky myth—and Q 65:12 posits seven flat earths!',
  'Reports naming and coloring the seven heavens (green emerald, silver, gold, etc.) are explicitly graded weak (ḍaʿīf) by ḥadīth critics (e.g., IslamWeb fatwa 111984), reflecting ancient Near Eastern imagery rather than authentic revelation. Meanwhile, classical scholars debate whether heavenly barriers are impenetrable (Q 55:33) or traversable (Q 17:1; 53:11–18), and Q 65:12’s “like them, the earth” does not lock Islam into flat-earth domes.',
  'Weak colored-sky āthār, barriers & Q 65.12',
  [
    '01 · Colored-heavens reports are weak (ḍaʿīf): The view tying seven heavens to seven changing sky colors relies on weak āthār (found mainly in some Shīʿī exegesis). Both IslamWeb (fatwa 111984) and Hadith.inoor.ir (316156) confirm the unreliability of reports naming/coloring the seven heavens, noting continuity with ancient Mesopotamian layered-sky depictions.',
    '02 · Debate over boundaries between heavens: Scholars differ on whether the separations are impassable barriers (citing Q 55:33) or traversable (citing Q 17:1 and 53:11–18), and whether they resemble solid “walls” (like ice on a lake) or intangible, ethereal boundaries.',
    '03 · Qurʾān 65.12 (“and, like them, the earth”): The verse pairs seven heavens with “like them, the earth” (wa-mina l-arḍi mithlahunna) to highlight Allah’s all-encompassing decree and power—leaving open material, atmospheric/geological, or abundance readings without endorsing ancient flat-earth mythology.'
  ],
  ['IslamWeb Fatwa 111984 (Weakness of colored-heavens ḥadīth)','Hadith.inoor.ir 316156','Qurʾān 55:33; 17:1; 53:11–18; 65:12','Ancient Mesopotamian cosmic floor iconography (Sippar tablet)'],
  [],
  {
    facts:[
      ['Sky-Color Āthār','Graded weak (IslamWeb 111984)'],
      ['Ancient Parallel','Mesopotamian colored sky floors'],
      ['Barriers Debate','Q 55:33 vs. Q 17:1 & 53:11–18'],
      ['Q 65:12 Purpose','Displays divine power & decree']
    ],
    quotes:[
      {by:'Qurʾān — Sūrat al-Ṭalāq',en:'Allah created seven heavens, and, like them, the earth. His commandment descends among them.',ref:'Q 65:12'}
    ]
  }
),{
  optWho:'Or press weak āthār & 65:12 · if they say',
  optLabel:'Traditional reports describe seven colored stone heavens like Mesopotamian myth, and Q 65:12 claims seven earths!',
  theyWho:'Or press weak āthār & 65:12 · if they say',
  who:'Expose weak āthār (IslamWeb 111984) & Q 65:12'
});

card('islam/quran/science-errors/seven-heavens-and-seven-earths',{
  title:'Seven Heavens (71:15; 17:44) & Seven Earths (65:12)',
  k:'Tafsīr Pluralism · Cosmology · Ḍaʿīf Āthār',
  blurb:'Six major exegetical readings of “seven heavens”—from Ibn ʿĀshūr’s celestial bodies and unseen realms to Arabic hyperbole—plus why colored-sky reports are weak.',
  claim:'The Qurʾān copies ancient seven-tiered solid sky domes and seven flat earths.',
  tree:P(N(
    SH,
    'The Qurʾān teaches outdated ancient cosmology by speaking of seven visible stacked heavens (71:15; 17:44) and seven earths (65:12).',
    'Classical Islamic exegesis never treated “seven heavens” as a single rigid solid-dome dogma. Mufassirūn documented at least six distinct frameworks—from Ibn ʿĀshūr’s celestial bodies and planetary circuits to unseen material realms beyond the first heaven, Sufi symbolism, and the Arabic hyperbole of abundance—while explicitly grading the “seven colored skies” narrations weak (ḍaʿīf).',
    'Six classical interpretations of the seven heavens & Q 65.12',
    [
      '01 · Key verses in tension for literalists: Q 17:44 states the seven heavens and earth glorify Allah, Q 71:15 asks “Did you not see how Allah created seven heavens one upon another?”, and Q 65:12 pairs seven heavens with “like them, the earth” as proof of divine knowledge and power.',
      '02 · Material & astronomical readings: Some exegetes (like Ibn ʿĀshūr) linked them to the seven classical celestial bodies or planetary circuits; others placed the entire observable universe within the first heaven and the other six beyond human perception.',
      '03 · Linguistic & spiritual readings: Sufi commentators read them spiritually (or with dual literal-symbolic layers), while Arabic grammarians note “seven” often operates as hyperbole for vastness rather than a literal ceiling of seven.',
      '04 · Rejecting weak sky-color reports: Narrations claiming seven differently colored sky layers (paralleling ancient Mesopotamian stone-floor cosmology) are weak (ḍaʿīf) per IslamWeb Fatwa 111984 and cannot be forced onto the Qurʾān.'
    ],
    ['Qurʾān 17:44; 71:15; 65:12; 55:33; 17:1; 53:11–18','Ibn ʿĀshūr (Tafsīr)','IslamWeb Fatwa 111984; Hadith.inoor.ir 316156','Deenresponds #on-the-7-heavens-and-7-earths'],
    [shBranchSee,shBranchWeakAnd6512],
    {
      who:'Opening move',
      forkTitle:'2 ways critics attack the seven heavens & earths',
      forkSub:'Pick one to answer Q 71:15 (“Did you not see…”) or weak colored-sky reports & Q 65:12',
      facts:[
        ['Verses','Q 17:44 · Q 71:15 · Q 65:12'],
        ['6 Views','Bodies · Circuits · Unseen · Sufi · Hyperbole · Colors'],
        ['Weak View','7 sky colors = ḍaʿīf āthār'],
        ['1st Heaven','Contains all visible stars & cosmos']
      ],
      visual:{
        kind:'steps',
        items:[
          ['1–2 · Celestial Bodies / Circuits','Classical 7 luminaries/planets (Ibn ʿĀshūr) or planetary orbits visible in the sky.'],
          ['3 · Material Unseen Realms','Observable cosmos sits inside Heaven 1; Heavens 2–7 lie beyond perception (Q 55:33 vs. 17:1).'],
          ['4–5 · Spiritual & Hyperbolic','Sufi spiritual layering, or Arabic idiom using “seven” to signify vast abundance.'],
          ['6 · Sky Colors (Rejected/Weak)','Shīʿī/weak āthār echoing Mesopotamian colored sky floors; graded ḍaʿīf (IslamWeb 111984).']
        ]
      },
      shots:[
        S('dr5-7heavens-1.webp','Deenresponds #on-the-7-heavens-and-7-earths (Yaza): Qurʾān 17:44, 71:15, and 65:12 Arabic & English framing atmospheric/mantle questions.'),
        S('dr5-7heavens-2.webp','Deenresponds #on-the-7-heavens-and-7-earths (Yaza): full summary of the 6 classical views, IslamWeb 111984 on weak colored-heavens reports, and Mesopotamian diagrams.'),
        S('dr5-7heavens-3.webp','Deenresponds #on-the-7-heavens-and-7-earths (Yaza): detailed view of the 6 interpretations and ancient Near Eastern cosmic-floor comparison.')
      ]
    }
  ),{
    who:'Opening move',
    forkTitle:'2 ways critics attack the seven heavens & earths',
    forkSub:'Pick one to answer Q 71:15 (“Did you not see…”) or weak colored-sky reports & Q 65:12'
  }),
  sum:'Classical tafsīr offered multiple coherent models for “seven heavens”—astronomical, unseen-material, spiritual, and hyperbolic—while explicitly grading colored-dome reports as weak (ḍaʿīf).'
});

/* ============================================================================
   4. NEW Tactical Playbook card: islam/quran/science-errors/five-keys-of-the-unseen
      From five_keys (1366915151315468309)
   ============================================================================ */
const FK=DR('#the-5-keys-which-no-one-knows','1366915151315468309');

const fkBranchWeather=P(N(
  FK,
  'Weather satellites, Doppler radar, and radiosondes predict rain days in advance—proving Q 31:34 wrong that only Allah knows when rain falls!',
  'Empirical forecasting is probabilistic observation of existing atmospheric conditions, not knowledge of the unseen (ghayb). As al-Nasafī (d. 710 AH) defined it, ghayb is what lacks sensory proof; satellites measure present clouds and pressure, and Ibn Kathīr notes angels and chosen creatures are informed once Allah commands the rain.',
  'Ghayb al-Muṭlaq vs. probabilistic weather measurement',
  [
    '01 · Al-Nasafī’s definition of ghayb (d. 710 AH): The classical Ḥanafī scholar al-Nasafī defines ghayb as “that upon which there is no proof/indicator” (mā lam yaqum ʿalayhi dalīl). Anything measured via satellites, radar, or senses is by definition outside ghayb.',
    '02 · Probability vs. absolute certainty: Observing dark clouds or barometric data yields statistical likelihood—never infallible certainty over when, where, or whether Allah wills rain to fall (mirroring Q 18:23–24, “if Allah wills”).',
    '03 · Relative vs. absolute unseen: A natural process hidden from one person is relative ghayb (ghayb al-nisbī), whereas absolute ghayb (ghayb al-muṭlaq) belongs strictly to Allah—and Ibn Kathīr explains that once Allah commands rain, the entrusted angels and those He wills come to know it.'
  ],
  ['Abū l-Barakāt al-Nasafī (d. 710 AH), Definition of Ghayb','Ibn Kathīr, Tafsīr on Q 31:34','Qurʾān 18:23–24; 7:187'],
  [],
  {
    facts:[
      ['al-Nasafī (d. 710 AH)','Ghayb = what has no sensory proof'],
      ['Weather Tech','Probabilistic data ≠ absolute decree'],
      ['Ghayb al-Muṭlaq','Absolute unseen vs. relative unseen'],
      ['Ibn Kathīr','Angels know once Allah commands rain']
    ],
    quotes:[
      {by:'Abū l-Barakāt al-Nasafī (d. 710 AH)',en:'And the unseen (ghayb) is that upon which there is no proof.',ref:'Tafsīr al-Nasafī'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Weather satellites and radar accurately forecast rain—so rain isn’t known only to Allah!',
  theyWho:'Watch out · if they say',
  who:'Distinguish sensory data from ghayb al-muṭlaq'
});

const fkBranchWomb=P(N(
  FK,
  'Ultrasound and DNA testing reveal a baby’s sex in the womb, refuting Q 31:34’s claim that only Allah knows what is in the wombs!',
  'First, ultrasound detects physical anatomy already formed—sensory observation, not ghayb. Second, Q 31:34 says “what is in the wombs” (mā fī l-arḥām), not merely biological sex: classical scholars like Ibn Kathīr note this covers whether the fetus will be blessed or doomed (shaqī or saʿīd), its nature, and livelihood—and even sex is shared with angels once decreed.',
  '“What is in the wombs” beyond fetal sex & Ibn Kathīr',
  [
    '01 · Not limited to biological sex: The phrase mā fī l-arḥām (“what is in the wombs”) is far broader than chromosomal sex; scholars explain it includes the child’s temperament, lifespan, sustenance, and ultimate spiritual felicity or misery.',
    '02 · Ibn Kathīr on decreed knowledge: Ibn Kathīr explicitly distinguishes Allah’s knowledge of the Hour (unknown to every prophet or angel per Q 7:187) from His decrees regarding the womb—once Allah decrees male or female, blessed or doomed, the entrusted angels and whom He wills learn of it.',
    '03 · Observation is not foreknowledge of decree: Scanning an already-developing fetus with ultrasound is empirical embryology, part of the observable world Allah permitted humanity to study, not pre-decree ghayb.'
  ],
  ['Ibn Kathīr, Tafsīr on Q 31:34','Qurʾān 31:34; 7:187'],
  [],
  {
    facts:[
      ['Arabic Phrase','Mā fī l-arḥām (“what is in the wombs”)'],
      ['Scope','Includes destiny (shaqī/saʿīd) & livelihood'],
      ['Ultrasound','Measures formed anatomy, not decree'],
      ['Ibn Kathīr','Shared with angels once Allah decrees']
    ],
    quotes:[
      {by:'Ibn Kathīr (Tafsīr on Q 31:34)',en:'None knows them except Allah, unless He informs them; the Hour is unknown to any prophet or angel.',ref:'Tafsīr Ibn Kathīr, Q 31:34'}
    ]
  }
),{
  optWho:'Or press embryology · if they say',
  optLabel:'Ultrasound scans tell parents the baby’s sex in the womb—contradicting Q 31:34!',
  theyWho:'Or press embryology · if they say',
  who:'Show Q 31:34’s wider scope & Ibn Kathīr'
});

card('islam/quran/science-errors/five-keys-of-the-unseen',{
  title:'The Five Keys of the Unseen (Q 31:34): Rain & Wombs',
  k:'Epistemology · Ghayb · Ibn Kathīr',
  blurb:'Why weather forecasts and ultrasound measure observable physical data (relative knowledge), whereas Q 31:34 addresses absolute unseen decree (ghayb al-muṭlaq).',
  claim:'Modern meteorology and ultrasound falsify Qurʾān 31:34’s claim that only Allah knows rain and what is in the wombs.',
  tree:P(N(
    FK,
    'Qurʾān 31:34 claims only Allah knows when it rains and what is in the wombs—yet weather forecasts and ultrasounds know both.',
    'Connecting Q 31:34 to Q 6:59 via Ibn ʿAbbās shows the verse defines the “five keys of the unseen” (mafātiḥ al-ghayb). As al-Nasafī (d. 710 AH) and Ibn Kathīr explain, ghayb refers to what lies beyond empirical proof—not atmospheric measurements or medical imaging—and Allah’s exclusive sovereignty over decrees never prevents Him from sharing observable patterns or informing angels once He commands.',
    'Ghayb al-Muṭlaq vs. sensory observation in Q 31.34',
    [
      '01 · Five keys of the unseen (Q 6.59 & Ibn ʿAbbās): Explaining “With Him are the keys of the unseen” (Q 6:59), Ibn ʿAbbās identified those five keys explicitly as the five matters in Q 31:34—the Hour, rain, what is in wombs, tomorrow’s earnings, and place of death.',
      '02 · What counts as ghayb (al-Nasafī): Classical theology defines ghayb as matters lacking sensory or empirical proof. Meteorological satellites and ultrasound operate purely within the observable five-sense domain, never touching absolute ghayb.',
      '03 · Absolute vs. relative unseen: Statistical weather modeling and embryology reflect relative knowledge (ghayb al-nisbī) unlocked by studying Allah’s natural laws—entirely distinct from ghayb al-muṭlaq, which remains with Allah until He wills to reveal or decree it.',
      '04 · Ibn Kathīr’s crucial distinction: Unlike the Hour (hidden from all prophets and angels, Q 7:187), once Allah commands rain or decrees a child’s traits and destiny, He informs the entrusted angels and whoever among creation He wills.'
    ],
    ['Qurʾān 31:34; 6:59; 7:187; 18:23–24','Ibn ʿAbbās (on Q 6:59)','Abū l-Barakāt al-Nasafī (d. 710 AH)','Ibn Kathīr (Tafsīr on Q 31:34)'],
    [fkBranchWeather,fkBranchWomb],
    {
      who:'Opening move',
      forkTitle:'2 empirical challenges to Q 31:34',
      forkSub:'Pick one to tackle weather forecasting or prenatal ultrasound',
      facts:[
        ['Link','Q 6:59 + Ibn ʿAbbās = Q 31:34'],
        ['al-Nasafī','Ghayb = beyond sensory proof'],
        ['Distinction','Ghayb al-Muṭlaq vs. Ghayb al-Nisbī'],
        ['Ibn Kathīr','Allah shares decreed info as He wills']
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Empirical Observation (Not Ghayb)',
          items:[
            'Satellites, radar & buoys measure existing clouds/pressure',
            'Produces probabilistic forecasts, never certainty',
            'Ultrasound images already-formed fetal anatomy'
          ]
        },
        right:{
          title:'Ghayb al-Muṭlaq (Q 31:34)',
          items:[
            'Unseen decree lacking prior sensory proof (al-Nasafī)',
            'Includes the Hour, final destiny (shaqī/saʿīd), tomorrow & death',
            'Known to angels/creatures only after Allah commands (Ibn Kathīr)'
          ]
        }
      },
      shots:[
        S('dr5-5keys-1.webp','Deenresponds #the-5-keys-which-no-one-knows: NOAA global weather observation network (satellites, aircraft, radiosondes, radar, ocean buoys) illustrating sensory data collection.'),
        S('dr5-5keys-2.webp','Deenresponds #the-5-keys-which-no-one-knows: full-resolution meteorological sensing diagram contrasting empirical measurement with ghayb al-muṭlaq.')
      ]
    }
  ),{
    who:'Opening move',
    forkTitle:'2 empirical challenges to Q 31:34',
    forkSub:'Pick one to tackle weather forecasting or prenatal ultrasound'
  }),
  sum:'Because ghayb is what lies beyond sensory proof (al-Nasafī) and Allah shares decreed processes as He wills (Ibn Kathīr), probabilistic weather radar and ultrasound never touch Q 31:34’s five keys.'
});

/* ============================================================================
   5. NEW Tactical Playbook card: islam/quran/science-errors/sun-orbit-and-destination
      From sun_orbit (1366915287626285216)
   ============================================================================ */
const SO=DR('#sun-orbit-and-destination','1366915287626285216');

const soBranchRelativity=P(N(
  SO,
  'Saying the sun moves across the sky is pre-scientific geocentrism—science proved the Earth orbits the sun, not the other way around!',
  'Describing sunrise, sunset, or solar transit across the sky uses the human phenomenological perspective—the exact way astronomers and everyday speakers still say “the sun rises.” Moreover, modern physics (special relativity) affirms there is no privileged cosmic center, and early Muslims already held diverse views on the sun’s path long before Hubble.',
  'Phenomenological speech, reference frames & pre-Hubble tafsīr',
  [
    '01 · Anthropocentric / phenomenological language: The Qurʾān addresses human observers on Earth, pointing to the sun traveling visibly across our sky from one horizon to another as an immediately observable sign.',
    '02 · Ontological mechanics vs. lived perception: Discovering Earth’s heliocentric orbit requires mathematical calculation—and special relativity notes there is no absolute stationary center anywhere in the cosmos—so everyday observational language remains both natural and valid.',
    '03 · Multiplicity of early Islamic readings: Long before the Hubble telescope or modern galactic-orbit readings, classical Muslims offered multiple interpretations of the sun’s course and resting place (mustaqarr), never tying faith to a single pre-modern model.'
  ],
  ['Deenresponds #sun-orbit-and-destination','Qurʾān 3:190'],
  [],
  {
    facts:[
      ['Perspective','Phenomenological / human observer'],
      ['Modern Physics','No absolute stationary center (relativity)'],
      ['Pre-Hubble Tafsīr','Diverse classical views of mustaqarr'],
      ['Purpose','Prompt reflection on visible signs']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Saying the sun travels is geocentric error—Earth orbits the sun, not the sun around Earth!',
  theyWho:'Watch out · if they say',
  who:'Explain phenomenological speech & relativity'
});

const soBranchIzutsu=P(N(
  SO,
  'Why wouldn’t an omniscient book give exact relativistic astrophysics instead of talking in simple observational terms?',
  'As comparative religious scholar Toshihiko Izutsu (2002) observed, the Qurʾān’s pedagogical core is teaching humanity to perceive ordinary, everyday natural phenomena around them as divine signs (āyāt) evoking gratitude (Q 3:190)—accessible to every generation, not just modern astrophysicists.',
  'Toshihiko Izutsu (2002) on āyāt & gratitude',
  [
    '01 · Ordinary nature as āyāt (Izutsu, 2002): Izutsu emphasizes that the first step toward faith in Qurʾānic teaching is learning to view common natural phenomena observed around us as manifestations of divine goodness (āyāt), calling forth thankfulness.',
    '02 · Universal accessibility (Q 3.190): By inviting “people of wisdom” to ponder the creation of heavens and earth and the alternation of night and day, the Qurʾān grounds spiritual reflection in signs visible to every human eye in every century.'
  ],
  ['Toshihiko Izutsu (2002), God and Man in the Qur’an','Qurʾān 3:190'],
  [],
  {
    facts:[
      ['Scholar','Toshihiko Izutsu (2002)'],
      ['Core Concept','Common phenomena as divine āyāt'],
      ['Verse','Qurʾān 3:190 (night & day alternation)'],
      ['Goal','Exhortation to reflection & gratitude']
    ],
    quotes:[
      {by:'Toshihiko Izutsu (2002)',en:'Man should learn to understand the seemingly quite ordinary and common natural phenomena… as so many “signs” (āyāt) of God.',ref:'Izutsu, 2002'},
      {by:'Qurʾān — Sūrat Āl ʿImrān',en:'In the creation of the heavens and the earth, and in the alternation of night and day, are signs for people of wisdom.',ref:'Q 3:190'}
    ]
  }
),{
  optWho:'Or press revelation’s style · if they say',
  optLabel:'Why didn’t the Qurʾān describe modern orbital astrophysics instead of everyday sky appearances?',
  theyWho:'Or press revelation’s style · if they say',
  who:'Cite Toshihiko Izutsu on āyāt & Q 3:190'
});

card('islam/quran/science-errors/sun-orbit-and-destination',{
  title:'The Sun’s Course & Destination: Phenomenology vs. Geocentrism',
  k:'Phenomenology · Izutsu · Reference Frames',
  blurb:'Why describing the sun’s motion from a human observer’s viewpoint is phenomenological sign-language (Izutsu, Q 3:190), compatible with relativity and pre-Hubble tafsīr.',
  claim:'Qurʾānic verses about the sun running its course endorse false pre-scientific geocentrism.',
  tree:P(N(
    SO,
    'The Qurʾān describes the sun moving toward a destination, which reflects primitive geocentrism rather than modern astronomy.',
    'The Qurʾān speaks from the phenomenological (anthropocentric) perspective of a human observer on Earth—just as modern people speak of sunrise and sunset—inviting gratitude over visible natural signs (āyāt), as Toshihiko Izutsu (2002) highlighted. Early Muslims also held diverse interpretations of the sun’s destination long before Hubble, and modern relativity itself discards any absolute cosmic center.',
    'Phenomenological observation, relativity & Izutsu’s āyāt framework',
    [
      '01 · Pre-Hubble interpretive diversity: Early Muslim exegetes already offered multiple ways of understanding the sun’s motion and destination well before the Hubble telescope and galactic spiral-orbit interpretations existed.',
      '02 · Phenomenological observer perspective: When the sun crosses the sky from east to west relative to us, saying “it moves” is accurate phenomenological speech—the way humans naturally describe lived perception.',
      '03 · Ontological simplicity vs. mathematical abstraction: Establishing Earth’s orbit requires rigorous calculation (and special relativity denies any single fixed cosmic center), whereas the Qurʾān calls everyone to reflect on what they directly witness.',
      '04 · Izutsu on signs (āyāt) and gratitude: Scholar Toshihiko Izutsu (2002) explains that the Qurʾān’s aim is transforming ordinary observed nature—like the alternation of night and day (Q 3:190)—into recognized gifts and signs of God.'
    ],
    ['Toshihiko Izutsu (2002)','Qurʾān 3:190','Deenresponds #sun-orbit-and-destination'],
    [soBranchRelativity,soBranchIzutsu],
    {
      who:'Opening move',
      forkTitle:'2 ways critics press the sun-movement objection',
      forkSub:'Pick one to address reference frames or why scripture uses phenomenological language',
      facts:[
        ['Language Mode','Phenomenological / anthropocentric'],
        ['Physics Note','Special relativity has no fixed center'],
        ['Scholar','Toshihiko Izutsu (2002) on āyāt'],
        ['Key Verse','Q 3:190 (alternation of night & day)']
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Ontological / Abstract Mechanics',
          items:[
            'Requires mathematical modeling across frames',
            'Special relativity: no absolute center point anywhere',
            'Specialized physics vocabulary not aimed at moral signs'
          ]
        },
        right:{
          title:'Qurʾānic Phenomenological Lens',
          items:[
            'Speaks from human observer perspective on Earth',
            'Turns ordinary sky motion into accessible āyāt (Izutsu)',
            'Calls “people of wisdom” to reflection & gratitude (Q 3:190)'
          ]
        }
      },
      shots:[
        S('dr5-sun-orbit-1.webp','Deenresponds #sun-orbit-and-destination: excerpt from Toshihiko Izutsu (2002) on recognizing ordinary natural phenomena as divine āyāt (signs) and gifts.'),
        S('dr5-sun-orbit-2.webp','Deenresponds #sun-orbit-and-destination: full-width screenshot of the Izutsu (2002) passage grounding the Qurʾān’s phenomenological perspective.')
      ]
    }
  ),{
    who:'Opening move',
    forkTitle:'2 ways critics press the sun-movement objection',
    forkSub:'Pick one to address reference frames or why scripture uses phenomenological language'
  }),
  sum:'Describing the sun’s visible transit uses natural phenomenological speech to point humans toward divine signs (Izutsu, Q 3:190), while relativity itself denies any absolute cosmic center.'
});

/* ============================================================================
   6. NEW Tactical Playbook card: islam/quran/history/david-and-chainmail
      From david_chainmail (1366948284568047676)
   ============================================================================ */
const DM=DR('#david-and-chainmail','1366948284568047676');

const dmBranchScale=P(N(
  DM,
  'The Qurʾān specifies chain mail for David, and chain mail wasn’t invented until the Celts around the 4th–3rd century BCE!',
  'First, the Qurʾān never narrows Q 34:11 exclusively to Celtic ring-mail: sābighāt (“full coats of armor”) and al-sard (“precision-aligned links/elements”) fit both chain mail and scale armor—and scale armor actually demands tighter alignment and is attested in Egypt and Persia centuries before 1000 BCE. Second, “invented in the 4th c. BCE” only means our oldest surviving physical fragments date there.',
  'Qurʾānic terms (sābighāt, al-sard) & pre-Davidic scale armor',
  [
    '01 · Broad, technically exact Arabic (Q 34.11): Sābighāt denotes full-body armor coats, and al-sard denotes joined or linked components—covering interlinked rings or overlapping metal scales equally well. Scale armor in fact requires greater alignment precision (“align the links precisely”).',
    '02 · Scale armor 400+ years before David: Depictions in the Tomb of Kenamun under Amenhotep II (1436–1411 BCE) and bronze scale pieces at Amenhotep III’s palace prove scale armor existed centuries before David’s biblical era (~1000 BCE).',
    '03 · Pre-Islamic Persian attestation & mail evolution: Herodotus and the Avesta (5th c. BCE) attest Persian scale armor (Encyclopaedia Iranica, UCL, Met Museum), and historians note mail evolved from older scale armor—with Etruscan 4th-century BCE and Slovakian/Romanian 3rd-century BCE finds predating Celtic-only claims.'
  ],
  ['Qurʾān 34:10–11','Encyclopaedia Iranica (Armor ii)','Met Museum (Bronze Scale Armor); UCL Blog (Achaemenid Scale Armor)','Herodotus; Avesta','Wikipedia — Mail Armour (Horný Jatov, Ciumești, Etruscan)'],
  [],
  {
    facts:[
      ['Q 34:11 Terms','sābighāt (full coats) · al-sard (links/parts)'],
      ['1436–1411 BCE','Egyptian scale armor (Tomb of Kenamun)'],
      ['Amenhotep III','Excavated bronze scale armor pieces'],
      ['Mail Finds','4th c. BCE Etruscan · 3rd c. BCE Carpathian']
    ],
    quotes:[
      {by:'Qurʾān — Sūrat Sabaʾ',en:'Make full coats of armor and align the links precisely.',ref:'Q 34:11'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Chain mail was invented in the 4th–3rd century BCE, centuries after King David!',
  theyWho:'Watch out · if they say',
  who:'Show sābighāt/al-sard & 15th-c. BCE scale armor'
});

const dmBranchLogicBible=P(N(
  DM,
  'Even if scale armor existed, attributing advanced iron mail to David ca. 1000 BCE is still an anachronism—and you can’t prove chain mail existed then!',
  'Archaeology’s “earliest surviving specimen” marks a preservation floor, not an absolute invention ceiling—especially for simple interlocking metalwork taught by divine inspiration (Q 34:10–11). Worse for Christian critics, 1 Samuel 17:5 literally describes a bronze coat of mail in David’s very duel with Goliath, and Biblical chronology (~1000 BCE) isn’t even binding on Muslims.',
  'Preservation floor fallacy, Biblical timeline & 1 Samuel 17.5',
  [
    '01 · What “invented around X” actually means: Dating mail to the 4th–3rd century BCE simply reflects our oldest surviving burial artifacts (Horný Jatov, Ciumești, Etruria). Unlike a 20th-century nuclear reactor, linked metal armor is technologically plausible earlier—particularly when Q 34:10 explicitly credits divine softening of iron and instruction to Dāwūd.',
    '02 · Biblical chronology is not binding: The ~1000 BCE date for David derives from Biblical chronologies rather than Qurʾānic revelation, though the archaeological and lexical case already stands on its own.',
    '03 · Biblical tu quoque (1 Samuel 17.5 & 17.38): Christian polemicists pressing this anachronism ignore that 1 Samuel 17:5 (RSV) attributes a 5,000-shekel bronze “coat of mail” to Goliath in his battle with David (and Saul outfits David in armor in 17:38)—meaning the Bible faces the identical charge.'
  ],
  ['1 Samuel 17:5, 38 (RSV)','Qurʾān 34:10–11','Deenresponds #david-and-chainmail'],
  [],
  {
    facts:[
      ['Logic Error','Oldest find ≠ earliest possible use'],
      ['Q 34:10','Iron softened & craft taught to Dāwūd'],
      ['1 Sam 17:5 (RSV)','Coat of mail (5,000 shekels bronze)'],
      ['Chronology','~1000 BCE date is Biblical, not Qurʾānic']
    ],
    quotes:[
      {by:'1 Samuel 17:5 (RSV)',en:'He had a helmet of bronze on his head, and he was armed with a coat of mail.',ref:'1 Samuel 17:5'}
    ]
  }
),{
  optWho:'Or press chronology & the Bible · if they say',
  optLabel:'You have no physical proof of chain mail from 1000 BCE—so the Qurʾān committed an anachronism!',
  theyWho:'Or press chronology & the Bible · if they say',
  who:'Expose oldest-find fallacy & cite 1 Samuel 17:5'
});

card('islam/quran/history/david-and-chainmail',{
  title:'Prophet Dāwūd (David) & Coats of Armor (Q 34:10–11)',
  k:'History · Sābighāt & Al-Sard · Scale vs. Mail',
  blurb:'Why Q 34:11’s sābighāt and al-sard cover both scale armor (attested in 15th-c. BCE Egypt) and mail, why “oldest surviving find” isn’t an impossibility proof, and 1 Samuel 17:5.',
  claim:'Qurʾān 34:10–11 commits a historical anachronism by crediting David (~1000 BCE) with chain mail invented in the 4th–3rd century BCE.',
  tree:P(N(
    DM,
    'Qurʾān 34:10–11 says God taught David to make chain mail—an anachronism because chain mail wasn’t invented until the 4th or 3rd century BCE.',
    'The anachronism claim fails on four fronts: (1) Qurʾān 34:11 uses broad, exact terms—sābighāt (full armor coats) and al-sard (aligned/interlocked parts)—encompassing scale armor, which demands even tighter alignment and existed in Egypt by 1436–1411 BCE; (2) archaeology’s oldest surviving mail (4th–3rd c. BCE) isn’t proof against earlier use, especially via divine instruction; (3) the ~1000 BCE date is Biblical; and (4) 1 Samuel 17:5 itself describes a “coat of mail” in David’s era.',
    'Lexical scope, ancient scale armor & 1 Samuel 17.5',
    [
      '01 · Broad Qurʾānic terminology (Q 34.10–11): Allah softened iron for Dāwūd and instructed him to craft sābighāt (complete coats of armor) and align al-sard (joined/linked pieces)—terms equally fitting interlinked chain mail and overlapping scale armor.',
      '02 · Scale armor centuries before David: Tomb paintings of Kenamun (1436–1411 BCE) and bronze scales from Amenhotep III’s palace confirm scale armor in Egypt over 400 years before David’s biblical timeframe, alongside Persian evidence in Herodotus and the Avesta.',
      '03 · Oldest artifact vs. invention ceiling: Surviving mail from 4th-century BCE Etruria and 3rd-century BCE Slovakia/Romania marks the earliest preserved examples—not proof earlier metalworkers (or a divinely taught prophet) lacked interlocking armor.',
      '04 · Biblical parallel (1 Samuel 17.5): Any Christian critic raising this objection must first answer 1 Samuel 17:5 (RSV), which explicitly describes a bronze “coat of mail” in David’s own lifetime.'
    ],
    ['Qurʾān 34:10–11','1 Samuel 17:5, 38 (RSV)','Encyclopaedia Iranica (Armor ii)','Met Museum & UCL Scale Armor sources','Wikipedia — Mail Armour'],
    [dmBranchScale,dmBranchLogicBible],
    {
      who:'Opening move',
      forkTitle:'2 ways critics press the armor anachronism',
      forkSub:'Pick one to compare scale vs. chain mail or refute the preservation-floor fallacy & cite 1 Sam 17:5',
      facts:[
        ['Q 34:10–11','Sābighāt & al-sard fit scale or mail'],
        ['1436–1411 BCE','Egyptian scale armor predates David'],
        ['Oldest Mail','4th c. BCE Etruscan · 3rd c. BCE Carpathian'],
        ['Bible Parallel','1 Samuel 17:5 mentions “coat of mail”']
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Chain Mail (Interlinked Rings)',
          items:[
            'Flexible mesh conforming easily to body contours',
            'Oldest surviving finds: 4th c. BCE Etruria; 3rd c. BCE Slovakia/Romania',
            'Evolved from earlier scale armor tradition'
          ]
        },
        right:{
          title:'Scale Armor (Overlapping Plates)',
          items:[
            'Requires tighter precision & alignment (matches al-sard)',
            'Attested 1436–1411 BCE in Egypt (Kenamun, Amenhotep III)',
            'Documented in Persia (Herodotus, Avesta, Met Museum)'
          ]
        }
      },
      shots:[
        S('dr5-david-mail-1.webp','Deenresponds #david-and-chainmail: Wikipedia History excerpt on 4th-century BCE Etruscan mail, 3rd-century BCE Horný Jatov & Ciumești finds, and earlier scale armour.'),
        S('dr5-david-mail-2.webp','Deenresponds #david-and-chainmail: visual comparison of interlinked chain mail (left) versus overlapping scale armor (right).')
      ]
    }
  ),{
    who:'Opening move',
    forkTitle:'2 ways critics press the armor anachronism',
    forkSub:'Pick one to compare scale vs. chain mail or refute the preservation-floor fallacy & cite 1 Sam 17:5'
  }),
  sum:'Q 34:11’s sābighāt and al-sard encompass scale armor (attested 400+ years before David in Egypt), oldest-known mail finds don’t preclude earlier use, and 1 Samuel 17:5 itself mentions a coat of mail.'
});

/* ============================================================================
   B. 3 add() ENRICHMENTS on existing TOPICS keys
   ============================================================================ */

/* 1. islam/quran/science-errors/mountains-as-pegs — mountains_eq (1366915038241230898) */
const MEQ=DR('#mountains-dont-prevent-earthquakes','1366915038241230898');
add('islam/quran/science-errors/mountains-as-pegs',P(N(
  MEQ,
  'Qurʾān 16:15 says Allah placed firm mountains so the earth wouldn’t shake with you (an tamīda bikum)—yet earthquakes happen constantly in mountainous regions!',
  'This objection forces a single disputed reading onto Q 16:15. Grammatically, mountains in 16:15–16 are conjoined (maʿṭūf) to rivers, roads, and landmarks—which is why Sufyān al-Thawrī explained “lest it sway with you” as “so you do not go astray (taḍilla)” without Arabia’s enduring mountain landmarks. Moreover, the Thamūd lived in mountains yet perished by earthquake, proving the Qurʾān never meant mountains eliminate quakes.',
  'Q 16.15 landmarks (Sufyān al-Thawrī), Thamūd & isostasy',
  [
    '01 · Grammatical continuity in Q 16.15–16: Rivers, paths, and landmarks are grammatically conjoined (maʿṭūf) to the verb alqā (“He cast”) alongside rawāsī (mountains). Naming temporary terrain markers while omitting Arabia’s tribal-named mountain landmarks would break the anthropocentric logic—confirming Sufyān al-Thawrī’s gloss: “so you do not go astray (taḍilla).”',
    '02 · Early tafsīr & Isrāʾīliyyāt caution: Reports (e.g., via Qatāda) saying Earth was smooth until mountains anchored it trace largely to Isrāʾīliyyāt seven-day creation lore rather than the Prophet ﷺ, and literal exegetes themselves split between stabilizing local walkable ground (arḍ) versus the whole planet.',
    '03 · Geology (isostasy) & tawaqquf: While isostasy and some seismic studies explore how mountain roots reduce local ground motion, other findings suggest stress redirection can trigger earthquakes elsewhere—making tawaqquf (suspending judgment on global seismic prevention) the prudent scholarly stance.',
    '04 · Internal Qurʾānic proof (Thamūd) & resilience: The Qurʾān describes Thamūd—who carved homes into mountains—being struck by an earthquake as punishment, proving mountains weren’t meant to abolish earthquakes. Contemporary exegetes also note 16:15 highlights mountains’ sturdiness under human habitation and travel alongside water, vegetation, stone, and shelter.'
  ],
  ['Qurʾān 16:15–16 (Sufyān al-Thawrī)','Thamūd narratives in the Qurʾān','Geological isostasy & seismic-redirection studies','Deenresponds #mountains-dont-prevent-earthquakes'],
  [],
  {
    facts:[
      ['Sufyān al-Thawrī','“An tamīda” = lest you go astray (taḍilla)'],
      ['Grammar (Maʿṭūf)','Shares “cast” verb with rivers, roads & signs'],
      ['Internal Check','Mountain-dwelling Thamūd hit by earthquake'],
      ['Geology Stance','Isostasy vs. stress shift → tawaqquf']
    ],
    quotes:[
      {by:'Sufyān al-Thawrī (on Q 16:15)',en:'He cast firm mountains lest it sway with you—meaning: so that you do not go astray with it.',ref:'Tafsīr on Q 16:15'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Why Global Quake-Prevention Fails Textually',
        items:[
          'Early smooth-earth stories trace largely to Isrāʾīliyyāt',
          'Mountain-carving Thamūd were punished by an earthquake',
          'Isostasy & stress redirection yield mixed seismic data (tawaqquf)'
        ]
      },
      right:{
        title:'Coherent Anthropocentric & Tafsīr Readings',
        items:[
          'Sufyān al-Thawrī: landmarks so travelers don’t get lost (16:15–16)',
          'Maʿṭūf grammar links mountains with rivers, roads & signs',
          'Sturdy terrain resisting wear while giving water, stone & shelter'
        ]
      }
    }
  }
),{
  optWho:'Watch out · if they pivot to Q 16:15',
  optLabel:'Mountains don’t prevent earthquakes—so Q 16:15 saying mountains stop the earth shaking is false!',
  theyWho:'Watch out · if they pivot to Q 16:15',
  who:'Show Sufyān al-Thawrī, Thamūd & isostasy'
}));

/* 2. atheism/d-ia-atheist-arguments-1/t-evolution — evolution (1365072491768188991) */
const EV=DR('#evolution','1365072491768188991');
add('atheism/d-ia-atheist-arguments-1/t-evolution',P(N(
  EV,
  'Even if naturalism struggles to ground human reason, genetics and common descent still disprove Adam and Eve (nafs wāḥida in Q 4:1)!',
  'Distinguishing genealogical from genetic ancestry resolves the tension cleanly under Adamic Exceptionalism. As scholarly responses (incorporating S. Joshua Swamidass’s work) explain, affirming a single de novo ancestral couple (Adam and Ḥawwāʾ) for all humans in Q 4:1 does not inherently negate possible intermixing—so all humans today can trace universal genealogical lineage to Adam and Eve without them being our exclusive genetic ancestors.',
  'Adamic Exceptionalism, Q 4.1 & genealogical vs. genetic ancestry',
  [
    '01 · Steelmanning the Objection (Nafs Wāḥida): Critics and traditional literalists argue Q 4:1 (“single soul”) ties both soul and body strictly to a de novo Adam created in Eden and Ḥawwāʾ from his rib, leaving zero room for biological inputs.',
    '02 · Affirming lineage vs. negating other inputs: Textual analysis (Section 5.3.4) stresses that Q 4:1 affirms a universal lineage culminating in Adam and Eve without explicitly ruling out descendants intermarrying or interacting with other beings—leaving the verse factually true as long as every living human traces lineage to Adam and Eve.',
    '03 · Swamidass’s genealogical/genetic distinction: Biologist S. Joshua Swamidass demonstrates that a de novo couple can become universal genealogical ancestors of all humans rapidly even when genetic data reflects broader common ancestry—making Adam and Eve universal without requiring exclusive genetic ancestry.',
    '04 · Wider critique of naturalistic evolution: Alongside Adamic Exceptionalism, the channel references work on the limits of naturalistic grand evolutionary narratives and abiogenesis.'
  ],
  ['Qurʾān 4:1 (Nafs Wāḥida)','S. Joshua Swamidass, Genealogical vs. Genetic Ancestry','Islam & Science Substack — Islamic Models of Human Origin (5-part series)','Deenresponds #evolution (Sec. 5.3.4)'],
  [],
  {
    facts:[
      ['Key Distinction','Genealogical ≠ exclusive genetic ancestry'],
      ['Scholar Cited','S. Joshua Swamidass (de novo couple model)'],
      ['Qurʾān 4:1','Affirms Adamic lineage; doesn’t bar inputs'],
      ['Status Today','No exclusively non-Adamic human lineage']
    ],
    quotes:[
      {by:'Adamic Exceptionalism Analysis (Sec. 5.3.4)',en:'As long as all subsequent humans on Earth trace their lineage back to Adam and Eve, the verse remains factually accurate.',ref:'Deenresponds #evolution, Fig. 5.3.4'}
    ],
    shots:[
      S('dr5-evolution-1.webp','Deenresponds #evolution (Section 5.3.4): distinguishing affirming Adamic lineage in Q 4:1 from negating outside inputs, citing Joshua Swamidass on genealogical vs. genetic ancestry.')
    ]
  }
),{
  optWho:'If they pivot to human origins',
  optLabel:'Even if naturalism struggles with reason, common-descent genetics disproves Adam and Eve (Q 4:1)!',
  theyWho:'If they pivot to human origins',
  who:'Distinguish genealogical vs. genetic ancestry'
}));

/* 3. islam/hadith/others/ajwa-dates-black-seed — ajwa_dates (1366914974600921280) */
const AJ=DR('#ajwa-dates-hadith','1366914974600921280');
add('islam/hadith/others/ajwa-dates-black-seed',P(N(
  AJ,
  'The ʿAjwa-date report and similar ḥadīths read like unconditional magic guarantees—if you eat seven dates or recite certain words, nothing can ever harm you!',
  'Across the wider ḥadīth corpus—including protections via duʿāʾ (Muslim 2708a), al-Muʿawwidhatayn (Tirmidhī 3575), Bismillāh (Abū Dāwūd 5088), visiting the sick (3106), and cupping (3861)—apparent “guarantees” operate under the foundational Islamic axiom “If Allah wills” (lā ḥawla wa-lā quwwata illā billāh). Sunan Ibn Mājah 3529 and Riyāḍ al-Ṣāliḥīn 901 prove this explicitly.',
  'The “If Allah Wills” axiom across the wider ḥadīth corpus',
  [
    '01 · Parallel “guaranteed protection” reports: ʿAjwa dates sit inside a whole genre—seeking refuge in Allah’s words (Ṣaḥīḥ Muslim 2708a), reciting Ikhlāṣ and Muʿawwidhatayn thrice (Tirmidhī 3575: “suffice you against everything”), Abū Dāwūd 5088, 3106 (sevenfold healing duʿāʾ), and 3861 (cupping on the 17th/19th/21st).',
    '02 · Sunan Ibn Mājah 3529 disproves mechanical magic: Despite Tirmidhī 3575’s sweeping wording, ʿĀʾisha reports in Sunan Ibn Mājah 3529 that when the Prophet’s ﷺ pain grew severe, she recited al-Muʿawwidhat and wiped him “hoping for its blessing”—showing outcomes aren’t automatic.',
    '03 · Riyāḍ al-Ṣāliḥīn 901 vs. Bukhārī 3009: Though the Prophet’s ﷺ saliva instantly healed ʿAlī’s eye at Khaybar (Bukhārī 3009), Riyāḍ al-Ṣāliḥīn 901 explicitly qualifies healing saliva with “by the permission of our Lord”—showing shifāʾ never resides intrinsically in matter, only in Allah’s permission.',
    '04 · Four outcomes & Qadar (Tirmidhī 2065): Adherence yields partial relief, full cure, no change (by decree), or blocked duʿāʾ due to physical/spiritual impurity. As Tirmidhī 2065 confirms, treatments and ruqyah are part of Allah’s decree—without negating aspirin’s biochemistry or natural science.'
  ],
  ['@Daraqutni, The Hadith of Ajwa Dates — An Analysis (Medium)','Ṣaḥīḥ Muslim 2708a; Ṣaḥīḥ al-Bukhārī 3009','Jāmiʿ al-Tirmidhī 2065, 3575','Sunan Abī Dāwūd 3106, 3861, 5088','Sunan Ibn Mājah 3529; Riyāḍ al-Ṣāliḥīn 901'],
  [],
  {
    facts:[
      ['Corpus Context','Muslim 2708a · Tirmidhī 3575 · Abū Dāwūd 5088/3106/3861'],
      ['Ibn Mājah 3529','ʿĀʾisha hoped for blessing (not automatic)'],
      ['Riyāḍ 901','“May our sick be healed by our Lord’s permission”'],
      ['Tirmidhī 2065','Treatments & ruqyah are part of Allah’s decree']
    ],
    quotes:[
      {by:'Prophet Muḥammad ﷺ (Jāmiʿ al-Tirmidhī 2065)',en:'They are from Allah’s Decree.',ref:'Jāmiʿ al-Tirmidhī 2065'},
      {by:'Riyāḍ al-Ṣāliḥīn 901',en:'With the saliva of some of us, may our sick be healed by the permission of our Lord.',ref:'Riyāḍ al-Ṣāliḥīn 901'}
    ],
    visual:{
      kind:'steps',
      items:[
        ['Ring 1 · Islamic Medicine','Broadest corpus; no physical agent (even aspirin) heals intrinsically without Allah’s leave.'],
        ['Ring 2 · Prescribed Treatment','Prophetic remedies, ruqyah & duʿāʾ operate within Allah’s decree (Tirmidhī 2065).'],
        ['Ring 3 · “Guaranteed” Texts','Muslim 2708a, Tirmidhī 3575, Abū Dāwūd 5088—read under “If Allah wills” (Ibn Mājah 3529).'],
        ['Ring 4 · ʿAjwa Date Report','Sub-case yielding partial relief, full cure, decree-bound patience, or blocked acceptance.']
      ]
    },
    shots:[
      S('dr5-ajwa-1.webp','Deenresponds #ajwa-dates-hadith: concentric corpus diagram nesting the ʿAjwa date report inside prescribed treatments and the overarching axiom “If Allah Wills.”'),
      S('dr5-ajwa-2.webp','Deenresponds #ajwa-dates-hadith: full-resolution Venn diagram mapping Islamic medicine, prescribed remedies, “guaranteed” protection reports, and ʿAjwa dates.')
    ]
  }
),{
  optWho:'Or press “guaranteed cure” ḥadīths · if they say',
  optLabel:'Even beyond chemistry, Islamic texts literally promise unconditional guarantees for dates, cupping, and formulas!',
  theyWho:'Or press “guaranteed cure” ḥadīths · if they say',
  who:'Show Ibn Mājah 3529, Riyāḍ 901 & Tirmidhī 2065'
}));

})();
