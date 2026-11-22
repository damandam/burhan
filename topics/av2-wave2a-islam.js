/* Averroes 2 Wave 2A (Islam, Hadith, Qurʾān, History & 1 Crucifixion enrichment) — 2026-11-22.
   Translates and synthesizes 7 German Averroes 2 channels into 6 new Tactical Debate Playbook
   cards and 1 add() enrichment on christianity/cross. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('av2-wave2a-islam: no card',key); };

const AV2=(sub,id)=>({credit:'Averroes 2 · '+sub,link:'https://discord.com/channels/1295033866385358860/'+id});

/* ============================================================================
   1. NEW Tactical Playbook card: islam/hadith/unseen/monkeys-stoning-bukhari
      From affe_steinigung (1330181797685891112)
   ============================================================================ */
const AS=AV2('#affe-steinigung','1330181797685891112');

const asTrapA=P(N(
  AS,
  'Even if it is not from the Prophet, how could a narrator in Ṣaḥīḥ al-Bukhārī know that monkeys committed adultery and were stoned?',
  'Classical and modern scholars—including Ibn Qutayba, Ibn ʿAbd al-Barr, and al-Albānī—pointed out that the narrator was a child in pre-Islamic times projecting human moral categories onto animal aggression, and al-Albānī graded the stone-throwing addition munkar (rejected).',
  'Ibn Qutayba, Ibn ʿAbd al-Barr & al-Albānī on anthropomorphic projection',
  [
    '01 · Anthropomorphic projection (Ibn Qutayba): ʿAmr b. Maymūn could not speak the “language” of monkeys, could not know whether a female monkey was “married,” and could not verify whether primate aggression was punishment for “adultery.” As Ibn Qutayba noted, animals cannot explain themselves, and anyone watching them mate cannot know whether it was “adultery.”',
    '02 · Classical rejection (Ibn ʿAbd al-Barr): Ibn Qutayba cites Ḥāfiẓ Ibn ʿAbd al-Barr noting that several scholars rejected this story as unsound and not reliably established.',
    '03 · Al-Albānī’s munkar grading & longer version: Shaykh Muḥammad Nāṣir al-Dīn al-Albānī graded this athar munkar (rejected) and pointed to a longer version showing ʿAmr b. Maymūn was a child at the time who merely observed primate behavior and interpreted it through his pre-Islamic cultural lens without participating.'
  ],
  ['Ṣaḥīḥ al-Bukhārī 3849','Ibn Qutayba (citing animal non-accountability & Ibn ʿAbd al-Barr)','Muḥammad Nāṣir al-Dīn al-Albānī (grading the athar munkar)'],
  [],
  {
    facts:[
      ['Ibn Qutayba','Observers cannot know if monkeys are “married”'],
      ['Ibn ʿAbd al-Barr','Scholars rejected the tale as unsound'],
      ['Al-Albānī','Graded munkar; longer version shows he was a child'],
      ['Pre-Islamic Lens','Cultural projection onto primate aggression']
    ],
    quotes:[
      {by:'Ibn Qutayba',en:'Monkeys cannot give an account of themselves, and whoever sees them mating does not know whether it was adultery or not.',ref:'Cited on Bukhārī 3849'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Even as a narrator report, claiming monkeys committed adultery and were stoned is absurd!',
  theyWho:'Watch out · if they say',
  who:'Cite Ibn Qutayba, Ibn ʿAbd al-Barr & al-Albānī'
});

const asTrapB=P(N(
  AS,
  'Unlike Islamic texts, Christian Church Fathers never transmitted bizarre pre-modern folk beliefs about animals or spirits.',
  'St. Augustine himself in The City of God (Book XV, Ch. 23) defended widespread popular reports that forest spirits called Silvani, Pans, and Incubi frequently lusted after women and had sexual intercourse with them.',
  'Turn the tables · St. Augustine on Silvani, Pans & Incubi (City of God XV.23)',
  [
    '01 · Augustine’s endorsement of popular Incubus reports (De Civitate Dei XV.23): While discussing Genesis 6.1–4, Augustine states that even if the “sons of God” were not angels, it is a very widespread rumor confirmed by many trustworthy witnesses that Silvani and Pans—commonly called Incubi—often behaved indecently toward women and consummated union with them.',
    '02 · The double standard exposed: In Bukhārī 3849, an ordinary pre-Islamic observer’s childhood memory is recorded solely as a biographical note—not as doctrine—whereas a foundational Doctor of the Church treated pagan folklore about lustful forest-demons mating with women as credible testimony.'
  ],
  ['Augustine of Hippo, De Civitate Dei (The City of God), Book XV, Ch. 23','Genesis 6:1–4'],
  [],
  {
    facts:[
      ['Author','St. Augustine of Hippo'],
      ['Work','De Civitate Dei (City of God), Book XV, Ch. 23'],
      ['Claim','Silvani & Pans (Incubi) mate with human women'],
      ['Contrast','Bukhārī 3849 is a non-binding pre-Islamic athar']
    ],
    quotes:[
      {by:'Augustine of Hippo (De Civitate Dei XV.23)',en:'Silvani and Pans, commonly called Incubi, have often behaved improperly toward women and desired and achieved intercourse with them.',ref:'De Civitate Dei XV.23'}
    ]
  }
),{
  optWho:'Turn the tables · if they say',
  optLabel:'Christian tradition would never record such pre-modern folklore!',
  theyWho:'Turn the tables · if they say',
  who:'Cite Augustine on Incubi (City of God XV.23)'
});

card('islam/hadith/unseen/monkeys-stoning-bukhari',{
  title:'Monkeys stoning an adulterer in Bukhārī 3849: prophetic hadith or pre-Islamic memory?',
  k:'Bukhārī 3849 · Mawqūf / Athar · Pre-Islamic Jāhiliyyah',
  blurb:'Not a prophetic ḥadīth: a non-binding pre-Islamic childhood observation by the mukhaḍram tābiʿī ʿAmr b. Maymūn, critiqued by Ibn Qutayba and al-Albānī.',
  claim:'Ṣaḥīḥ al-Bukhārī 3849 teaches as Islamic doctrine that monkeys practice sharia marriage and stoning for adultery.',
  tree:P(N(
    AS,
    'Ṣaḥīḥ al-Bukhārī 3849 records monkeys stoning a female monkey for adultery—proving Islamic scripture teaches absurd animal sharia.',
    'Bukhārī 3849 is not a prophetic ḥadīth at all, nor even a Companion report: it is a non-binding personal anecdote (athar) from the pre-Islamic Age of Ignorance (Jāhiliyyah) told by the tābiʿī ʿAmr b. Maymūn, who never met the Prophet ﷺ. Al-Bukhārī included it solely in his biographical chapter on Jāhiliyyah to prove ʿAmr lived before Islam—and classical scholars like Ibn Qutayba and Ibn ʿAbd al-Barr explicitly dismissed his childhood interpretation of primate behavior.',
    'Why Bukhārī 3849 is a non-binding pre-Islamic biographical athar, not Islamic teaching',
    [
      '01 · Not from the Prophet ﷺ or any Companion (Athar / Mukhaḍram): The speaker is ʿAmr b. Maymūn, a tābiʿī (Successor) who lived during the pre-Islamic period and accepted Islam during the Prophet’s lifetime but never met him or narrated from him. Biographical works classify him as a mukhaḍram (al-ʿIrāqī in al-Taqrīb; al-Dhahabī, Siyar Aʿlām al-Nubalāʾ 4/158; Ibn Ḥajar, al-Iṣābah 3/118). Because it is a personal athar, Muslims are under zero obligation to accept his interpretation.',
      '02 · Why al-Bukhārī included it: Imām al-Bukhārī did not place this report in any chapter of creed, law, or prophetic sunnah. He cited it purely as a historical marker in the chapter on the Days of Jāhiliyyah to show that ʿAmr b. Maymūn witnessed the pre-Islamic era.',
      '03 · Classical & modern critique (Ibn Qutayba, Ibn ʿAbd al-Barr & al-Albānī): Ibn Qutayba noted that animals cannot explain their acts and a human observer cannot know if monkeys are “married” or committing “adultery,” citing Ibn ʿAbd al-Barr that scholars rejected the story. Al-Albānī graded the report munkar and noted a longer version showing ʿAmr was merely a child projecting human morality onto primate fighting.'
    ],
    ['Ṣaḥīḥ al-Bukhārī 3849','al-Dhahabī, Siyar Aʿlām al-Nubalāʾ 4/158','Ibn Ḥajar, al-Iṣābah 3/118; al-ʿIrāqī, al-Taqrīb','Ibn Qutayba & Ibn ʿAbd al-Barr','al-Albānī (munkar grading)'],
    [asTrapA,asTrapB],
    {
      facts:[
        ['Genre','Non-binding athar, NOT a prophetic ḥadīth'],
        ['Narrator','ʿAmr b. Maymūn (mukhaḍram tābiʿī, never met Prophet)'],
        ['Bukhārī’s Goal','Biographical proof he lived in pre-Islamic times'],
        ['Scholarly Verdict','Critiqued by Ibn Qutayba; graded munkar by al-Albānī']
      ],
      quotes:[
        {by:'Ḥāfiẓ al-ʿIrāqī (al-Taqrīb)',en:'ʿAmr b. Maymūn: a well-known mukhaḍram [lived in Jāhiliyyah and Islam without meeting the Prophet].',ref:'Siyar Aʿlām al-Nubalāʾ 4/158; al-Iṣābah 3/118'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Distortion',
          items:[
            'Presents Bukhārī 3849 as a teaching of Prophet Muḥammad ﷺ',
            'Treats a pre-Islamic childhood memory as binding Islamic creed',
            'Ignores classical critique by Ibn Qutayba & Ibn ʿAbd al-Barr'
          ]
        },
        right:{
          title:'Hadith Science Reality',
          items:[
            'Personal athar of ʿAmr b. Maymūn from pre-Islamic Jāhiliyyah',
            'Cited by al-Bukhārī only to date the narrator’s pre-Islamic life',
            'Ibn Qutayba & al-Albānī reject his anthropomorphic interpretation'
          ]
        }
      }
    }
  ),{
    who:'Show it is a pre-Islamic athar, not a prophetic hadith',
    forkTitle:'Two follow-up moves',
    forkSub:'Detail the scholarly critique or turn the tables with Augustine on Incubi'
  }),
  sum:'Ṣaḥīḥ al-Bukhārī 3849 is neither a prophetic ḥadīth nor a Companion teaching, but a non-binding pre-Islamic childhood observation by the mukhaḍram narrator ʿAmr b. Maymūn that classical scholars like Ibn Qutayba and modern critics like al-Albānī dismissed as anthropomorphic projection.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: islam/hadith/law/killing-geckos-hadith
      From gecko_toeten (1330804745040039977)
   ============================================================================ */
const GT=AV2('#gecko-töten','1330804745040039977');

const gtTrapA=P(N(
  GT,
  'The authentic hadiths still say the gecko blew on Abraham’s fire—proving Islam punishes modern geckos for an ancient ancestor’s sin!',
  'Both classical and contemporary hadith critics prove the “blowing on Abraham’s fire” clause is not established from the Prophet ﷺ: it rests on the isolated addition (tafarrud) of ʿUbaydullāh b. Mūsā and the unknown narrator Sāʾiba, and was rejected by al-Jāḥiẓ, al-Dāraquṭnī, al-Albānī, and Dr. Khālid al-Ḥāyak.',
  'Sanad & Matn refutation of the “Abraham’s fire” addition',
  [
    '01 · Sāʾiba’s obscurity (al-Dhahabī & al-Albānī): In Silsilat al-Aḥādīth al-Ṣaḥīḥah (no. 1581), al-Albānī notes the chain via Sāʾiba (freedwoman of al-Fākih b. al-Mughīra) is weak (ḍaʿīf) in itself because only Nāfiʿ narrated from her, making her majhūla (unknown), refuting al-Būṣīrī’s claim in al-Zawāʾid (2/194).',
    '02 · Isolated addition (tafarrud) of ʿUbaydullāh b. Mūsā (Ibn Ḥajar, Aḥmad & al-Dhahabī): Ibn Ḥajar notes in Fatḥ al-Bārī (6/354) that ʿUbaydullāh b. Mūsā alone added “and it used to blow on Ibrāhīm” from Ibn Jurayj. Neither Bukhārī nor Muslim included this clause in their Ṣaḥīḥs with his wording as marfūʿ proof; Imām Aḥmad said ʿUbaydullāh “mixed things up and narrated bad hadiths,” and al-Dhahabī (Mīzān al-Iʿtidāl) noted his extreme Shiism.',
    '03 · Al-Dāraquṭnī & ʿĀʾisha’s explicit denial (al-ʿIlal 14/121): Al-Dāraquṭnī ruled the attribution an error (wahm) of ʿAbd al-Raḥmān b. Isḥāq, establishing that the authentic wording via that chain is simply: “The Prophet ﷺ said: ‘The gecko is a fuwaysiq,’ and ʿĀʾisha said: ‘I did not hear the Prophet ﷺ command killing it.’” (also in Ṣaḥīḥ Muslim).',
    '04 · Contemporary specialists & IslamWeb Fatwa 421237: Dr. Khālid al-Ḥāyak (al-Fajr alladhī Bazagh) and Dr. Ḥākim al-Muṭayrī proved no prophetic report on the gecko blowing on Abraham’s fire is authentic—classifying all such variants as defective (maʿlūla), rejected (munkar), and akin to Isrāʾīliyyāt folklore (echoed by Muḥammad b. al-Azraq al-Anjarī and IslamWeb Fatwa 421237).'
  ],
  ['Ibn Ḥajar, Fatḥ al-Bārī 6/354','al-Dāraquṭnī, al-ʿIlal 14/121','al-Albānī, Silsilat al-Aḥādīth al-Ṣaḥīḥah 1581; al-Dhahabī, Mīzān al-Iʿtidāl','Dr. Khālid al-Ḥāyak, al-Fajr alladhī Bazagh; Dr. Ḥākim al-Muṭayrī','IslamWeb Fatwa 421237; Muḥammad b. al-Azraq al-Anjarī'],
  [],
  {
    facts:[
      ['Sāʾiba','Majhūla (unknown); only Nāfiʿ narrated from her'],
      ['ʿUbaydullāh b. Mūsā','Sole narrator (tafarrud) of the Abraham fire clause'],
      ['Al-Dāraquṭnī (14/121)','Error of ʿAbd al-Raḥmān b. Isḥāq; ʿĀʾisha denied hearing it'],
      ['Dr. Khālid al-Ḥāyak','All Abraham-fire variants are munkar & Isrāʾīliyyāt']
    ],
    quotes:[
      {by:'Dr. Khālid al-Ḥāyak (al-Fajr alladhī Bazagh)',en:'No hadith is authentic stating that the gecko blew fire upon Abraham—all such narrations are defective and munkar!',ref:'al-Fajr alladhī Bazagh'},
      {by:'IslamWeb (Fatwa 421237)',en:'The narration of the gecko blowing on the fire against Abraham most likely cannot be established as marfūʿ to the Prophet ﷺ.',ref:'IslamWeb Fatwa 421237'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The hadith says geckos must be killed because an ancient gecko blew on Abraham’s fire!',
  theyWho:'Watch out · if they say',
  who:'Show the Abraham-fire clause is munkar'
});

const gtTrapB=P(N(
  GT,
  'Wait—why would classical rational criticism or Qurʾānic principles matter if a story appears in hadith books?',
  'From the 3rd-century polymath al-Jāḥiẓ (d. 255/869) in Kitāb al-Ḥayawān to modern scholars, Muslim critics used Qurʾānic justice (Q 6:164) and physical reality to expose the Abraham-fire interpolation while affirming al-Nawawī’s practical pest-control ruling.',
  'Al-Jāḥiẓ’s 9th-century critique, Q 6.164 & al-Nawawī’s pest-control ruling',
  [
    '01 · Qurʾānic justice (Q 6.164) & al-Jāḥiẓ (Kitāb al-Ḥayawān): Already in the 3rd century AH (d. 255/869), al-Jāḥiẓ critiqued the Abraham-fire tale in Kitāb al-Ḥayawān: animals are not legally accountable (ghayr mukallafa), do not reproduce by “sharing a religion,” and under Q 6.164 (“No soul bears the burden of another”), today’s geckos cannot be punished for an ancestor’s act.',
    '02 · Physical impossibility: Critics also point out that a tiny, fragile gecko could never approach a roaring catapult-bonfire to blow on it without being incinerated instantly by the radiant heat and flying sparks.',
    '03 · The authentic pest-control rationale (al-Nawawī, Sharḥ Ṣaḥīḥ Muslim 7/404): Imām al-Nawawī explains that the Prophet ﷺ called the household gecko fuwaysiq (“little pest/transgressor”) by analogy with the five harmful pests (al-fawāsiq al-khams—like scorpions, rats, and rabid dogs) because it diverges from harmless creatures through increased harm and contamination (confirmed by IslamWeb Fatwa 204067).'
  ],
  ['Qurʾān 6:164','al-Jāḥiẓ (d. 255/869), Kitāb al-Ḥayawān','al-Nawawī, Sharḥ Ṣaḥīḥ Muslim 7/404','IslamWeb Fatwa 204067'],
  [],
  {
    facts:[
      ['Qurʾān 6:164','“No soul bears the burden of another”'],
      ['Al-Jāḥiẓ (d. 255 AH)','Critiqued the tale in Kitāb al-Ḥayawān'],
      ['Al-Nawawī (7/404)','Fuwaysiq = harmful household pest like rats & scorpions'],
      ['Physics','A fragile gecko would burn near a massive bonfire']
    ],
    quotes:[
      {by:'Imām al-Nawawī (Sharḥ Ṣaḥīḥ Muslim 7/404)',en:'It is named fuwaysiq because it parallels the five pests killed in sacred and profane territory due to increased harm.',ref:'Sharḥ Ṣaḥīḥ Muslim 7/404'}
    ]
  }
),{
  optWho:'Follow up · if they ask',
  optLabel:'Then why did the Prophet command killing household geckos at all?',
  theyWho:'Follow up · if they ask',
  who:'Cite al-Jāḥiẓ, Q 6:164 & al-Nawawī on pest control'
});

card('islam/hadith/law/killing-geckos-hadith',{
  title:'Killing geckos (wazagh): household pest control vs. the unauthentic “Abraham’s fire” tale',
  k:'Ḥadīth Criticism · Pest Control · Isrāʾīliyyāt',
  blurb:'Separating authentic pest-control reports (Bukhārī 3307; Muslim 2237–2240) from the munkar “blowing on Abraham’s fire” interpolation (Ibn Ḥajar, al-Dāraquṭnī, al-Albānī, al-Jāḥiẓ, al-Ḥāyak).',
  claim:'Islam commands killing geckos as cosmic revenge because an ancient gecko blew on Abraham’s fire.',
  tree:P(N(
    GT,
    'Muḥammad ordered Muslims to kill geckos for good deeds because a gecko blew on Abraham’s fire—a superstitious myth that violates Q 6:164!',
    'Hadith scholars draw a sharp line between two categories: the authentic prophetic ruling classifying the toxic household gecko (wazagh) as a harmful pest (fuwaysiq, alongside rats and scorpions, per al-Nawawī 7/404), and the unauthentic “blowing on Abraham’s fire” justification, which classical and contemporary critics (al-Jāḥiẓ, al-Dāraquṭnī, Ibn Ḥajar, al-Albānī, Dr. Khālid al-Ḥāyak, and IslamWeb Fatwa 421237) exposed as an isolated narrator error (munkar) akin to Isrāʾīliyyāt.',
    'Two distinct categories: authentic pest control vs. the munkar Abraham-fire addition',
    [
      '01 · The authentic core — household pest control (Bukhārī 3307; Muslim 2237–2240; al-Nawawī 7/404): The Prophet ﷺ permitted/ordered killing household geckos (via Umm Sharīk) and rewarded a quick single-strike kill (100 ḥasanāt, discouraging torture), naming the gecko fuwaysiq (“little harmful pest”). As Imām al-Nawawī (Sharḥ Muslim 7/404) and IslamWeb (Fatwa 204067) explain, this groups it with harmful pests like scorpions, rats, and rabid dogs.',
      '02 · Sanad defects of the “Abraham’s fire” clause (Ibn Ḥajar, al-Dāraquṭnī & al-Albānī): The claim that geckos blew on Abraham’s fire is not proven marfūʿ from the Prophet ﷺ (IslamWeb Fatwa 421237; Dr. Ḥākim al-Muṭayrī). Al-Albānī (al-Ṣaḥīḥah 1581) showed Sāʾiba is unknown (majhūla); Ibn Ḥajar (Fatḥ al-Bārī 6/354) noted ʿUbaydullāh b. Mūsā (criticized by Aḥmad for mixing up hadiths) was alone in adding the clause to Ibn Jurayj’s report; and al-Dāraquṭnī (al-ʿIlal 14/121) flagged ʿAbd al-Raḥmān b. Isḥāq’s error while preserving ʿĀʾisha’s statement in Muslim: “I did not hear him command killing it.”',
      '03 · Matn & Qurʾānic critique (Q 6.164; al-Jāḥiẓ; Dr. Khālid al-Ḥāyak): Already in the 9th century, al-Jāḥiẓ (Kitāb al-Ḥayawān) rejected punishing non-accountable animals for an ancestor’s deed, which contradicts Q 6.164 (“No soul bears the burden of another”) and physical reality. Dr. Khālid al-Ḥāyak (al-Fajr alladhī Bazagh) demonstrated that every Abraham-fire narration is defective (maʿlūla), munkar, and resembles Isrāʾīliyyāt legends.'
    ],
    ['Ṣaḥīḥ al-Bukhārī 3307; Ṣaḥīḥ Muslim 2237–2240','al-Nawawī, Sharḥ Ṣaḥīḥ Muslim 7/404','Ibn Ḥajar, Fatḥ al-Bārī 6/354; al-Dāraquṭnī, al-ʿIlal 14/121','al-Albānī, al-Ṣaḥīḥah 1581; al-Jāḥiẓ, Kitāb al-Ḥayawān','Dr. Khālid al-Ḥāyak, al-Fajr alladhī Bazagh; IslamWeb Fatwas 421237 & 204067'],
    [gtTrapA,gtTrapB],
    {
      facts:[
        ['Authentic Core','Household pest control (fuwaysiq, like rats/scorpions)'],
        ['Abraham Clause','Not established from the Prophet ﷺ (Fatwa 421237)'],
        ['Key Sanad Flaws','Unknown Sāʾiba + isolated addition of ʿUbaydullāh b. Mūsā'],
        ['Matn Critics','Al-Jāḥiẓ (d. 255 AH), al-Dāraquṭnī, al-Albānī & al-Ḥāyak']
      ],
      quotes:[
        {by:'ʿĀʾisha bint Abī Bakr (Ṣaḥīḥ Muslim / al-Dāraquṭnī, al-ʿIlal 14/121)',en:'The Prophet ﷺ said: “The gecko is a fuwaysiq,” and I did not hear him command killing it.',ref:'al-Dāraquṭnī, al-ʿIlal 14/121'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Criticized Abraham-Fire Additions',
          items:[
            'Rests on unknown narrator Sāʾiba (al-Albānī, al-Ṣaḥīḥah 1581)',
            'Isolated addition (tafarrud) by ʿUbaydullāh b. Mūsā (Fatḥ 6/354)',
            'Graded munkar / Isrāʾīliyyāt by al-Ḥāyak; violates Q 6:164 (al-Jāḥiẓ)'
          ]
        },
        right:{
          title:'Authentic Prophetic Ruling',
          items:[
            'Labels household wazagh a fuwaysiq (harmful pest, Muslim 2239)',
            'Al-Nawawī (7/404): hygienic pest control alongside rats & scorpions',
            '100 ḥasanāt on first strike encourages swift, painless removal'
          ]
        }
      }
    }
  ),{
    who:'Separate authentic pest control from the munkar fire story',
    forkTitle:'Two follow-up angles',
    forkSub:'Drill into the isnād defects or the Qurʾānic & al-Jāḥiẓ rational critique'
  }),
  sum:'While authentic hadiths classify the household gecko (wazagh) as a harmful pest (fuwaysiq) for hygienic removal alongside rats and scorpions (al-Nawawī 7/404), hadith critics from al-Jāḥiẓ and al-Dāraquṭnī to al-Albānī and Dr. Khālid al-Ḥāyak reject the “blowing on Abraham’s fire” story as a defective narrator interpolation.'
});

/* ============================================================================
   3. NEW Tactical Playbook card: islam/hadith/unseen/beardless-youth-hadith
      From bartloser_junge (1335995864878940191)
   ============================================================================ */
const BJ=AV2('#bartloser-junge','1335995864878940191');

const bjTrapA=P(N(
  BJ,
  'Even if it isn’t in Bukhārī or Muslim, it still appears in classical collections like Ibn Shāhīn and Abū Mūsā!',
  'Classical compilers of gharīb (rare/isolated) works like Ibn Shāhīn’s al-Afrād recorded anomalous chains precisely to document and expose their defects—and the masters of hadith science unanimously threw this report out as baseless and fabricated.',
  'Why presence in al-Afrād means anomaly, not authenticity',
  [
    '01 · What al-Afrād books are: Works like Ibn Shāhīn’s al-Afrād and Abū Mūsā al-Madīnī’s compilations via Aḥmad b. Isḥāq collect odd, uncorroborated reports to catalog narrator errors—never to endorse them as authentic sunnah.',
    '02 · Unanimous dismissal across centuries: Classical authorities Ibn al-Ṣalāḥ (“weak and baseless”) and Ibn al-Qaṭṭān al-Fāsī (“weak”), followed by modern hadith master al-Albānī (“fabricated/forged”), all ruled the narration completely inadmissible as evidence.'
  ],
  ['Ibn Shāhīn, al-Afrād; Abū Mūsā, al-Tarhīb (via Aḥmad b. Isḥāq)','Ibn al-Ṣalāḥ (grading: weak and baseless)','Ibn al-Qaṭṭān al-Fāsī (grading: weak)','Muḥammad Nāṣir al-Dīn al-Albānī (grading: mawḍūʿ / fabricated)'],
  [],
  {
    facts:[
      ['Source Genre','Al-Afrād catalogs isolated narrator anomalies'],
      ['Ibn al-Ṣalāḥ','“Weak and baseless” (ḍaʿīf lā aṣla lahu)'],
      ['Ibn al-Qaṭṭān','Graded weak (ḍaʿīf)'],
      ['Al-Albānī','Graded fabricated/forged (mawḍūʿ)']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'It still appears in classical books by Ibn Shāhīn and Abū Mūsā!',
  theyWho:'Watch out · if they say',
  who:'Explain al-Afrād & cite the fabrication rulings'
});

card('islam/hadith/unseen/beardless-youth-hadith',{
  title:'The “beardless youth” and David fabrication: unanimous rejection by hadith masters',
  k:'Fabricated Ḥadīth (Mawḍūʿ) · Isnād Criticism',
  blurb:'Unanimously rejected as baseless and forged by Ibn al-Ṣalāḥ, Ibn al-Qaṭṭān, and al-Albānī.',
  claim:'An Islamic narration claims the Prophet seated a handsome youth behind him out of fear of temptation like David.',
  tree:P(N(
    BJ,
    'A hadith says a delegation brought a handsome beardless youth and Muḥammad seated him behind his back, saying, “I fear what happened to my brother David!”',
    'This report is a documented fabrication (mawḍūʿ) that does not exist in any of the six canonical Sunni hadith collections. Appearing only in marginal collections of isolated oddities (Ibn Shāhīn’s al-Afrād and Abū Mūsā’s al-Tarhīb via Aḥmad b. Isḥāq), it was explicitly condemned as “weak and baseless” by Ibn al-Ṣalāḥ, “weak” by Ibn al-Qaṭṭān, and “fabricated/forged” by al-Albānī.',
    'Text, marginal chains & unanimous scholarly condemnation',
    [
      '01 · The alleged report & its marginal provenance: The story claims a delegation arrived with an attractive youth whom the Prophet ﷺ seated behind himself while citing “what happened to my brother David.” It is absent from all canonical collections, transmitted only via Aḥmad b. Isḥāq in Ibn Shāhīn’s al-Afrād and Abū Mūsā’s al-Tarhīb.',
      '02 · Classical & modern verdicts (Ibn al-Ṣalāḥ, Ibn al-Qaṭṭān & al-Albānī): Imām Ibn al-Ṣalāḥ ruled it “weak and baseless,” Ibn al-Qaṭṭān graded it “weak,” and Shaykh al-Albānī classified it as outright “fabricated/forged” (mawḍūʿ).',
      '03 · Theological & evidentiary invalidity: In addition to its forged chain, the report imports the biblical David-Bathsheba temptation trope rejected by Sunni prophetic infallibility (ʿiṣmah) and is universally barred from use as evidence.'
    ],
    ['Ibn Shāhīn, al-Afrād; Abū Mūsā, al-Tarhīb (via Aḥmad b. Isḥāq)','Ibn al-Ṣalāḥ','Ibn al-Qaṭṭān al-Fāsī','Muḥammad Nāṣir al-Dīn al-Albānī'],
    [bjTrapA],
    {
      facts:[
        ['Canonical Status','Absent from Bukhārī, Muslim & all Six Books'],
        ['Ibn al-Ṣalāḥ','“Weak and baseless”'],
        ['Ibn al-Qaṭṭān','“Weak”'],
        ['Al-Albānī','“Fabricated / Forged” (mawḍūʿ)']
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Citation',
          items:[
            'Presents an uncanonical oddity as authentic Islamic tradition',
            'Conceals that it comes from Ibn Shāhīn’s book of anomalies (al-Afrād)',
            'Omits unanimous rejection by hadith critics'
          ]
        },
        right:{
          title:'Hadith Science Verdict',
          items:[
            'Ibn al-Ṣalāḥ: “Weak and baseless”',
            'Ibn al-Qaṭṭān: “Weak”',
            'Al-Albānī: “Fabricated / Forged” — zero evidentiary value'
          ]
        }
      }
    }
  ),{
    who:'Cite Ibn al-Ṣalāḥ, Ibn al-Qaṭṭān & al-Albānī',
    forkTitle:'If they press on the source books',
    forkSub:'Explain why appearing in al-Afrād proves it is an isolated anomaly'
  }),
  sum:'The narration about seating a handsome youth behind the Prophet ﷺ is absent from all canonical collections and was condemned as “weak and baseless” by Ibn al-Ṣalāḥ, “weak” by Ibn al-Qaṭṭān, and “fabricated/forged” by al-Albānī.'
});

/* ============================================================================
   4. NEW Tactical Playbook card: islam/morality/war/umar-library-of-alexandria-myth
      From umar_alexandria (1340065306147557386)
   ============================================================================ */
const UA=AV2('#umar-ra-verbrennt-alexandria-bücher-biblothek','1340065306147557386');

const uaTrapA=P(N(
  UA,
  'Then who actually destroyed the Great Library of Alexandria if not Caliph ʿUmar in 642 CE?',
  'Historians document that the Great Library was destroyed centuries before Islam—first by Julius Caesar in 48 BCE, then by Roman Emperor Aurelian in 273 CE, and finally the Serapeum daughter library by Christians under Emperor Theodosius I in 391 CE.',
  'Three pre-Islamic destructions (48 BCE, 273 CE & 391 CE) vs. Muslim book preservation',
  [
    '01 · 48 BCE — Julius Caesar: Caesar’s fire in the Alexandrian harbor destroyed the royal collection during his civil war campaign.',
    '02 · 273 CE — Emperor Aurelian: Roman imperial forces leveled the Brucheion royal quarter where the main museum and library complex stood.',
    '03 · 391 CE — Christians under Theodosius I: By decree of Emperor Theodosius I (enforced by Patriarch Theophilus), Christians demolished the Serapeum temple and its remaining daughter collection 250 years before a single Muslim soldier entered Egypt.',
    '04 · Documented early Muslim policy: Far from burning books, the Prophet ﷺ commanded, “Treat the inhabitants [of Egypt] well,” and early Muslim rule protected churches, synagogues, and religious texts while fostering the world’s largest libraries.'
  ],
  ['Alfred J. Butler, The Arab Conquest of Egypt (1902)','Bernard Lewis; Diana Delia; Philip K. Hitti; Bertrand Russell'],
  [],
  {
    facts:[
      ['48 BCE','Burned by Julius Caesar during the Alexandrian War'],
      ['273 CE','Royal quarter destroyed by Roman Emperor Aurelian'],
      ['391 CE','Serapeum destroyed by Christians under Theodosius I'],
      ['642 CE','No Great Library existed when Muslims arrived']
    ],
    quotes:[
      {by:'Bertrand Russell',en:'Christian propaganda invented stories of Muslim intolerance, but these are completely false.',ref:'Cited on Alexandria myth'},
      {by:'Philip K. Hitti',en:'A story that makes good fiction but bad history.',ref:'History of the Arabs'}
    ]
  }
),{
  optWho:'Turn the tables · if they ask',
  optLabel:'If Caliph ʿUmar didn’t burn the Library of Alexandria, who destroyed it?',
  theyWho:'Turn the tables · if they ask',
  who:'Cite Caesar (48 BCE), Aurelian (273 CE) & Christians (391 CE)'
});

card('islam/morality/war/umar-library-of-alexandria-myth',{
  title:'Did Caliph ʿUmar burn the Library of Alexandria in 642 CE?',
  k:'History · Library of Alexandria · Western Historians',
  blurb:'Debunking the 13th-century legend fabricated 600 years after 642 CE—refuted by Alfred J. Butler, Bernard Lewis, Philip K. Hitti, Diana Delia, and Bertrand Russell.',
  claim:'Caliph ʿUmar ordered the Great Library of Alexandria burned in 642 CE to heat the city’s bathhouses for six months.',
  tree:P(N(
    UA,
    'When Muslims conquered Egypt in 642 CE, Caliph ʿUmar burned the Great Library of Alexandria, saying books that agree with the Qurʾān are superfluous and those that disagree are harmful!',
    'Modern secular and non-Muslim historians—including Alfred J. Butler, Bernard Lewis, Philip K. Hitti, Diana Delia, and Bertrand Russell—unanimously reject this story as a 13th-century fabrication written nearly 600 years after 642 CE. No contemporary Christian, Coptic, or Byzantine chronicle mentions it, the alleged interlocutor John Philoponus (“the Grammarian”) died a century before the conquest, and the Great Library had already been destroyed by Julius Caesar (48 BCE), Aurelian (273 CE), and Christians under Theodosius I (391 CE).',
    'The 600-year source gap, chronological impossibility & historian consensus',
    [
      '01 · Nearly 600 years of total silence: The conquest of Alexandria occurred in 642 CE, yet no contemporary 7th-century Christian, Coptic, Jewish, or Muslim witness (such as John of Nikiû) mentions any library burning. The legend first surfaces almost six centuries later in 13th-century works by ʿAbd al-Laṭīf al-Baghdādī (13th c.), Ibn al-Qifṭī (1172–1248), and Abū al-Faraj Bar Hebraeus (1226–1286).',
      '02 · Chronological & logistical impossibilities (Bernard Lewis & Alfred J. Butler): The story claims the general ʿAmr b. al-ʿĀṣ debated “John the Grammarian” (John Philoponus) over the books—Wait: John Philoponus lived a full century earlier (c. 490–570 CE)! Furthermore, fueling 4,000 bathhouses for six months with vellum/papyrus scrolls is logistically absurd and violates Islamic legal protection of non-Muslim scripture and scholarship.',
      '03 · Verdict of Western historians (Butler, Lewis, Hitti, Delia & Russell): Alfred J. Butler declared the tale “totally without historical foundation”; Philip K. Hitti called it “a story that makes good fiction, but bad history”; Diana Delia noted multiple fatal flaws in the late tradition; and Bertrand Russell observed that Christian propaganda invented tales of early Muslim intolerance that are completely false.'
    ],
    ['ʿAbd al-Laṭīf al-Baghdādī; Ibn al-Qifṭī (1172–1248); Bar Hebraeus (1226–1286)','Alfred J. Butler, The Arab Conquest of Egypt (1902)','Bernard Lewis; Philip K. Hitti; Diana Delia; Bertrand Russell'],
    [uaTrapA],
    {
      facts:[
        ['Source Gap','550+ years between 642 CE and first mention (13th c.)'],
        ['Anachronism','John Philoponus died ~70 years before 642 CE'],
        ['Alfred J. Butler','“Totally without historical foundation”'],
        ['Actual Destruction','48 BCE (Caesar), 273 CE (Aurelian), 391 CE (Theodosius)']
      ],
      quotes:[
        {by:'Alfred J. Butler (The Arab Conquest of Egypt)',en:'The story of the burning of the library by ʿUmar is totally without historical foundation.',ref:'The Arab Conquest of Egypt (1902)'},
        {by:'Philip K. Hitti (History of the Arabs)',en:'A story that makes good fiction, but bad history.',ref:'History of the Arabs'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['48 BCE · Julius Caesar','Roman harbor fire destroys the Royal Alexandrian collection.'],
          ['273 CE · Emperor Aurelian','Imperial troops level Alexandria’s Brucheion royal museum quarter.'],
          ['391 CE · Christians under Theodosius I','Patriarch Theophilus demolishes the Serapeum daughter library 250 years before Islam.'],
          ['642 CE · Arab Conquest of Egypt','Zero contemporary Christian or Coptic sources report any library or book burning.'],
          ['13th Century · Late Folklore','Nearly 600 years later, Ibn al-Qifṭī & Bar Hebraeus record the anachronistic legend.']
        ]
      }
    }
  ),{
    who:'Expose the 600-year gap & cite Butler, Lewis & Hitti',
    forkTitle:'Follow-up question',
    forkSub:'Show who actually destroyed the Library of Alexandria before Islam'
  }),
  sum:'The claim that Caliph ʿUmar burned the Library of Alexandria in 642 CE is dismissed by modern historians (Butler, Lewis, Hitti, Delia, Russell) as a 13th-century fiction invented 600 years after the conquest—centuries after the library had already been destroyed by Caesar (48 BCE), Aurelian (273 CE), and Christians under Theodosius I (391 CE).'
});

/* ============================================================================
   5. NEW Tactical Playbook card: islam/quran/science-errors/pure-milk-16-66
      From milch_bauch_kuh (1383779599346962534)
   ============================================================================ */
const MB=AV2('#milch-bauch-kuh-rein','1383779599346962534');

const mbTrapA=P(N(
  MB,
  'Raw milk contains bacteria, so calling milk “pure” (khāliṣan) in Q 16:66 is still scientifically false!',
  'In context, Q 16:66 defines “pure” (khāliṣan) in direct contrast to the two adjacent substances it just named—“between digested waste (farth) and blood (dam)”—meaning uncontaminated by fecal matter or blood despite originating from their shared physiological pathway, not sterile in a laboratory petri dish.',
  'Why khāliṣan (“pure”) means free of chyme and blood, not laboratory-sterile',
  [
    '01 · Contextual definition of khāliṣan: The verse states: “from what is in their bellies, from between digested content (farth) and blood (dam), pure milk (labanan khāliṣan), pleasant to those who drink it.” Here khāliṣan grammatically qualifies the milk’s separation from chyme and blood.',
    '02 · Marvel of physiological filtration: Even though mammary glands draw nutrients directly from the bloodstream—which itself absorbed them from the intestinal tract alongside waste—the resulting milk emerges white, palatable, and free of both blood and digestive waste.'
  ],
  ['Qurʾān 16:66'],
  [],
  {
    facts:[
      ['Arabic Term','Laban khāliṣ — pure/unmixed milk'],
      ['Immediate Contrast','Unmixed with farth (chyme/waste) or dam (blood)'],
      ['Next Clause','Sāʾighan li-l-shāribīn (“pleasant to drinkers”)'],
      ['Critics’ Fallacy','Conflates separation from blood/waste with lab sterility']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Raw milk has bacteria in it, so calling it “pure” is scientifically wrong!',
  theyWho:'Watch out · if they say',
  who:'Show “pure” means unmixed with waste and blood'
});

card('islam/quran/science-errors/pure-milk-16-66',{
  title:'Milk “from between chyme and blood” in Qurʾān 16:66: anatomical error or digestive physiology?',
  k:'Qurʾān 16:66 · Physiology · Arabic Semantics',
  blurb:'Why “from what is in their bellies, between digested food (farth) and blood (dam)” accurately describes nutrient absorption from the digestive tract into the bloodstream to supply the mammary glands.',
  claim:'Qurʾān 16:66 falsely claims cow’s milk comes directly out of the belly between feces and blood rather than from mammary glands.',
  tree:P(N(
    MB,
    'Qurʾān 16:66 says milk comes from cattle bellies “between feces and blood” and calls it “pure”—ignoring that milk comes from mammary glands (udders) and contains bacteria!',
    'Qurʾān 16:66 does not say milk is stored in the stomach; it says “from what is in their bellies (mimmā fī buṭūnihi), from between digested content (farth) and blood (dam), pure milk.” In ruminant physiology, digested nutrients in the multi-chambered stomach/intestines pass from the gut chyme (farth) into the bloodstream (dam), which transports those exact precursors to the mammary glands to synthesize milk free of both waste and blood.',
    'Arabic phrasing (mimmā fī buṭūnihi) & the three-stage physiology of lactation',
    [
      '01 · “From what is in their bellies” (Q 16.66): The verse uses the partitive mimmā fī buṭūnihi (“from the contents of their bellies/interiors”)—not “stored inside the stomach”—and elsewhere uses the plural buṭūnihā (Q 23.21), matching the multi-chambered ruminant digestive system central to lactation.',
      '02 · The physiological sequence (farth → dam → laban): First, forage, water, and minerals are broken down in the stomach chambers and small intestine into chyme (farth). Second, nutrients are absorbed across the intestinal wall directly into the circulatory system (dam / blood). Third, the bloodstream delivers these nutrients to the mammary glands (udder), which synthesize milk. Thus milk literally originates from the interface between digested gut content and blood.',
      '03 · Meaning of “pure” (khāliṣan) in 7th-century Arabia: Rather than guessing ancient myths, Q 16.66 pinpoints the nutrient-to-blood pathway and calls the milk “pure” (khāliṣan) because, despite passing through the digestive and circulatory systems, it emerges completely free of fecal waste and blood, pleasant to drink.'
    ],
    ['Qurʾān 16:66; 23:21','Ruminant digestive & lactation physiology'],
    [mbTrapA],
    {
      facts:[
        ['Qurʾān 16:66','“From what is in their bellies” (nutrient origin)'],
        ['Stage 1 · Farth','Digested chyme in the ruminant gut'],
        ['Stage 2 · Dam','Nutrients absorbed into the bloodstream'],
        ['Stage 3 · Khāliṣ','Mammary glands produce milk free of waste & blood']
      ],
      quotes:[
        {by:'Qurʾān 16:66',en:'We give you to drink from what is in their bellies—from between digested content and blood—pure milk, pleasant to those who drink it.',ref:'Qurʾān 16:66'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['1. Ruminant Digestion (Buṭūn / Farth)','Forage and water are broken down in the stomach chambers and intestine into chyme (farth).'],
          ['2. Bloodstream Absorption (Dam)','Villi in the small intestine absorb nutrients from the chyme directly into the blood circulation.'],
          ['3. Mammary Synthesis (Laban Khāliṣ)','Blood transports those nutrients to the udder’s mammary glands, producing pure milk free of waste and blood.']
        ]
      }
    }
  ),{
    who:'Trace the gut-to-blood-to-udder pathway in Q 16:66',
    forkTitle:'If they pivot to bacteria in raw milk',
    forkSub:'Explain what khāliṣan (“pure”) contrasts with in the verse'
  }),
  sum:'Qurʾān 16:66 accurately states that milk originates “from the contents of their bellies, between digested chyme (farth) and blood (dam)”—describing how nutrients absorbed from the digestive tract into the bloodstream supply the mammary glands to produce milk unmixed with waste or blood.'
});

/* ============================================================================
   6. NEW Tactical Playbook card: islam/quran/science-errors/two-seas-barrier-55-19
      From wasser_barriere (1383827549259301020)
   ============================================================================ */
const WB=AV2('#wasser-vermischen-barriere','1383827549259301020');

const wbTrapA=P(N(
  WB,
  'Wait—don’t many modern Muslim apologists claim Q 55:19–20 is a scientific miracle about estuaries where fresh and salt water don’t mix?',
  'Even if some modern popularizers point to haloclines in estuaries, Dawkins committed a methodological failure by ignoring classical tafsīr altogether: for over a millennium, foundational exegetes like al-Ṭabarī (22/40) and Ibn Kathīr (7/470) defined the primary meaning of barzakh as geographical land barriers separating major seas.',
  'Exposing Dawkins’s strawman & the primacy of classical tafsīr',
  [
    '01 · Methodological laziness: Any serious critique of a Qurʾānic verse must consult classical exegesis (tafsīr). By skipping al-Ṭabarī and Ibn Kathīr to attack a modern pop-science strawman with a glass of water, Dawkins refuted his own caricature rather than the Qurʾānic text.',
    '02 · No mention of estuaries in Q 55.19–20: The verses in Sūrat al-Raḥmān speak of “the two seas” (al-baḥrayn) and a divine barrier (barzakh) maintaining their distinct ecological boundaries—primarily landmass barriers like the Arabian Peninsula or isthmuses, as al-Ṭabarī and Ibn Kathīr explicitly state.'
  ],
  ['Qurʾān 55:19–22','al-Ṭabarī, Jāmiʿ al-Bayān (Tafsīr al-Ṭabarī) 22/40','Ibn Kathīr, Tafsīr al-Qurʾān al-ʿAẓīm 7/470','Mohammed Hijab (critique of Richard Dawkins)'],
  [],
  {
    facts:[
      ['Dawkins’s Fallacy','Skipped classical tafsīr to attack a pop-science strawman'],
      ['Tafsīr al-Ṭabarī 22/40','God separated the seas with land so they do not flood together'],
      ['Tafsīr Ibn Kathīr 7/470','Barzakh = God-created barriers like mountains & isthmuses'],
      ['Textual Scope','Q 55:19–20 never claims two glasses of water cannot mix']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Modern Muslim websites say Q 55:19–20 is about estuary water not mixing chemically!',
  theyWho:'Watch out · if they say',
  who:'Contrast pop-science claims with al-Ṭabarī & Ibn Kathīr'
});

card('islam/quran/science-errors/two-seas-barrier-55-19',{
  title:'The barrier (barzakh) between the two seas in Qurʾān 55:19–20: refuting Richard Dawkins',
  k:'Qurʾān 55:19–20 · Classical Tafsīr · Barzakh',
  blurb:'How al-Ṭabarī (22/40) and Ibn Kathīr (7/470) define barzakh as geographical landmasses separating seas—exposing Richard Dawkins’s kitchen-cup strawman (Mohammed Hijab).',
  claim:'Qurʾān 55:19–20 falsely claims fresh and salt water never mix, which any simple home experiment disproves.',
  tree:P(N(
    WB,
    'As Richard Dawkins pointed out, Qurʾān 55:19–20 claims fresh and salt water have a barrier and cannot mix—which you can disprove at home with a glass of tap water and salt water!',
    'As Mohammed Hijab demonstrated, Richard Dawkins never checked a single classical Qurʾānic commentary (tafsīr) and attacked a strawman. In classical exegesis—led by Imām al-Ṭabarī (22/40) and Ibn Kathīr (7/470)—the “barrier” (barzakh) between the seas in Q 55:19–20 refers primarily to geographical landmasses, mountains, and isthmuses (such as the Arabian Peninsula separating the Red Sea and Persian Gulf, or continents dividing oceans) by which God keeps major bodies of water in their distinct basins.',
    'Classical tafsīr on barzakh (al-Ṭabarī 22/40 & Ibn Kathīr 7/470) vs. Dawkins’s cup experiment',
    [
      '01 · What classical tafsīr actually says (al-Ṭabarī 22/40 & Ibn Kathīr 7/470): Commenting on Q 55.19–20 (“He released the two seas, meeting side by side; between them is a barrier [barzakh] they do not overrun”), Imām al-Ṭabarī states: “God separated the seas with land so that they do not flow into one another” (Tafsīr al-Ṭabarī 22/40). Ibn Kathīr likewise explains: “What is meant are the barriers created by God, such as mountains and isthmuses/land-bridges” (Tafsīr Ibn Kathīr 7/470).',
      '02 · Geographical order, not a kitchen chemistry claim: The passage in Sūrat al-Raḥmān (55.19–22) highlights God’s creative majesty in ordering the earth’s marine habitats and boundaries—not claiming that two cups of water poured together cannot dissolve.',
      '03 · Dawkins’s double methodological failure (Mohammed Hijab): First, Dawkins failed basic academic diligence by ignoring foundational tafsīr literature. Second, he confused popular modern estuary-miracle videos with the primary classical meaning of barzakh—which remains geographical separation by land even if secondary halocline boundaries exist where waters meet.'
    ],
    ['Qurʾān 55:19–22','al-Ṭabarī, Jāmiʿ al-Bayān (Tafsīr al-Ṭabarī) 22/40','Ibn Kathīr, Tafsīr al-Qurʾān al-ʿAẓīm 7/470','Mohammed Hijab (rebuttal to Richard Dawkins)'],
    [wbTrapA],
    {
      facts:[
        ['Qurʾān 55:20','Barzakh = barrier preventing seas from overrunning'],
        ['Al-Ṭabarī (22/40)','“God separated the seas with land”'],
        ['Ibn Kathīr (7/470)','“Barriers created by God like mountains & isthmuses”'],
        ['Dawkins’s Error','Attacked a cup-mixing strawman without reading tafsīr']
      ],
      quotes:[
        {by:'Imām al-Ṭabarī (Tafsīr al-Ṭabarī 22/40)',en:'God separated the seas with land so that they do not flow into one another.',ref:'Tafsīr al-Ṭabarī 22/40'},
        {by:'Ibn Kathīr (Tafsīr Ibn Kathīr 7/470)',en:'What is meant are the barriers created by God, such as mountains and isthmuses.',ref:'Tafsīr Ibn Kathīr 7/470'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Richard Dawkins’s Strawman',
          items:[
            'Assumes Q 55:19–20 denies chemical mixing in a cup',
            'Consults zero classical tafsīr works',
            'Reads estuaries into a verse that never mentions river mouths'
          ]
        },
        right:{
          title:'Classical Tafsīr (al-Ṭabarī & Ibn Kathīr)',
          items:[
            'Barzakh = terrestrial barriers (isthmuses, peninsulas, continents)',
            'Al-Ṭabarī 22/40: God divided the seas with land',
            'Ibn Kathīr 7/470: Mountains and land-bridges keep basins distinct'
          ]
        }
      }
    }
  ),{
    who:'Cite al-Ṭabarī (22/40) & Ibn Kathīr (7/470) on barzakh',
    forkTitle:'If they bring up modern estuary claims',
    forkSub:'Show why classical geographical exegesis remains primary'
  }),
  sum:'Richard Dawkins’s claim that Qurʾān 55:19–20 denies water mixing collapses against classical exegesis, where al-Ṭabarī (22/40) and Ibn Kathīr (7/470) define the barrier (barzakh) between the seas as geographical landmasses and isthmuses separating marine basins.'
});

/* ============================================================================
   7. ENRICHMENT (add): christianity/cross
      From allah_taeuscht_kreuzigung (1383390557069508689)
   ============================================================================ */
const ATK=AV2('#allah-täuscht-jesu-kreuzigung','1383390557069508689');
add('christianity/cross',P(N(
  ATK,
  'Under Qurʾān 4:157 (“it was made to appear so to them”), Allah deliberately deceived the witnesses at the cross and tricked billions into becoming Christians!',
  'Qurʾān 4:157 uses the passive shubbiha lahum (“it was made obscure/uncertain to them”) without attributing deception to Allah. Classical scholars hold two distinct views—either a willing disciple volunteered to take Jesus’s likeness to foil his executioners (Ibn ʿAbbās, al-Ṭabarī) or human confusion and rumors snowballed without divine alteration (Ibn Ḥazm)—and neither justifies deifying a human prophet any more than the miraculous survival and global triumph of Islam would make Muḥammad ﷺ God.',
  'Two classical views on shubbiha lahum (al-Ṭabarī vs. Ibn Ḥazm) & why rescuing a prophet is not “deception”',
  [
    '01 · Two classical explanations of Q 4.157 (Ibn ʿAbbās/al-Ṭabarī vs. Ibn Ḥazm): The Qurʾān leaves the exact mechanism open, and scholars hold two main views without strict consensus (ijmāʿ). First, the classical substitution view (Ibn ʿAbbās, al-Ṭabarī): Jesus asked his disciples who would volunteer to take his place and be with him in Paradise; a young man volunteered, received Jesus’s likeness, and Jesus was raised to heaven, foiling the plotters (Q 3.54). Second, the human-confusion view (Ibn Ḥazm): the passive shubbiha lahum simply describes human error, intrigue, and rumors among the crowd without Allah altering anyone’s face, preserving the reliability of sensory perception.',
    '02 · Why confusion was permitted — testing Tawḥīd vs. Shirk: In the second view, the confusion resulted from human intrigue; in both views, rescuing Jesus exposed the conspirators (Q 3.54) and served as a spiritual test separating rigorous truth-seekers from followers of rumor and emotion. Even early groups who thought Jesus died (such as Ebionite Jewish Christians) still recognized him strictly as a human prophet—proving a crucifixion event never forced anyone to worship a man as God.',
    '03 · Turning the tables on the Christian premise: Christians ask why Allah allowed historical events that people misinterpreted. Yet by that logic, why did God allow Islam to become the fastest-growing faith, the Qurʾān to remain preserved, and Muḥammad ﷺ to become the best-documented figure of antiquity? Just as those realities do not make Muḥammad ﷺ God, rescuing Jesus from the cross never justified turning a prophet into God—and Jesus’s return will settle the truth.'
  ],
  ['Qurʾān 3:54; 4:157','Ibn ʿAbbās & al-Ṭabarī, Jāmiʿ al-Bayān (on Q 4:157)','Ibn Ḥazm, al-Fiṣal fī al-Milal wa-l-Ahwāʾ wa-l-Niḥal'],
  [],
  {
    facts:[
      ['View 1 · Al-Ṭabarī','A willing disciple volunteered to take Jesus’s likeness'],
      ['View 2 · Ibn Ḥazm','Human confusion & intrigue without altering perception'],
      ['Ebionite Precedent','Early Jewish Christians never deified Jesus over the cross'],
      ['Tawḥīd Test','No historical event ever justifies worshipping a human prophet']
    ],
    quotes:[
      {by:'Qurʾān 4:157',en:'And they did not kill him, nor did they crucify him; but it was made to appear so to them (shubbiha lahum).',ref:'Qurʾān 4:157'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'View 1 · Voluntary Substitution (Ibn ʿAbbās & al-Ṭabarī)',
        items:[
          'Jesus asked which disciple would volunteer for Paradise',
          'A young disciple willingly took his likeness to foil the plotters (Q 3:54)',
          'Rescuing a prophet from assassins does not command worshipping him'
        ]
      },
      right:{
        title:'View 2 · Human Confusion & Rumor (Ibn Ḥazm)',
        items:[
          'Passive shubbiha lahum describes crowd confusion and human intrigue',
          'Avoids any divine alteration of human sensory perception',
          'Places full responsibility on rumour-followers who abandoned Tawḥīd'
        ]
      }
    }
  }
),{
  optWho:'Or counter the “Allah deceived Christians” charge · if they say',
  optLabel:'If Q 4:157 says it was made to appear so, didn’t Allah deceive people into Christianity?',
  theyWho:'Or counter the “Allah deceived Christians” charge · if they say',
  who:'Cite al-Ṭabarī vs. Ibn Ḥazm & the Tawḥīd test'
}));

})();
