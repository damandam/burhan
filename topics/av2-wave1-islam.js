/* Averroes 2 Wave 1 (Islam, Hadith, Qurʾān, Creed & 1 Jesus enrichment) — 2026-11-22.
   Translates and synthesizes 11 German Averroes 2 channels into 10 new Tactical Debate Playbook
   cards and 1 add() enrichment on christianity/jesus/d-dr-jesus-is-the-word-and-spirit-of-allah. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('av2-wave1-islam: no card',key); };

const AV2=(sub,id)=>({credit:'Averroes 2 · '+sub,link:'https://discord.com/channels/1295033866385358860/'+id});

/* ============================================================================
   1. NEW Tactical Playbook card: islam/morality/women/woman-created-from-rib
      From frau_rippe (1313303688126660730)
   ============================================================================ */
const WR=AV2('#frau-rippe','1313303688126660730');

const wrTrapA=P(N(
  WR,
  'Calling women “crooked” like a rib still demeans women as morally flawed or inferior to men.',
  'The ḥadīth explicitly addresses husbands and forbids trying to “straighten” a woman—proving “crooked” describes a distinct, complementary nature rather than a moral flaw. Just as a rib’s curvature is its structural purpose and beauty, trying to force a woman into male temperament breaks her.',
  'Why forbidding “straightening” refutes the inferiority reading',
  [
    '01 · Addressed to men, not criticizing women: If “crooked” meant morally bad, the Prophet ﷺ would have told men to straighten it. Instead, he commands the exact opposite—do not try to straighten her, or you will break her, and enjoy/treat her kindly as she is.',
    '02 · Relative perception vs. innate design: Straightness and curvature depend on vantage point—a street looks curved from an upper window yet straight when walked upon. Men judge female temperament “bent” only because it differs from their own, not because it is defective.',
    '03 · Parable of the eagle in Mufīd al-Ṭālibīn: An old woman pitied a king’s eagle for its hooked beak and curved talons and trimmed them straight—crippling the bird. Its curvature was its nature and beauty, a warning against “foolish compassion” that ruins what it tries to alter.',
    '04 · Modern psychological parallel (Dr. Jonathan Brown): In his lecture on this narration, Jonathan Brown compares the ḥadīth to Men Are from Mars, Women Are from Venus—advising husbands to adjust their expectations and accept sex differences rather than trying to reshape their wives.'
  ],
  ['Ṣaḥīḥ al-Bukhārī 3331, 5186','Ṣaḥīḥ Muslim 1468','Mufīd al-Ṭālibīn (eagle parable)','Dr. Jonathan Brown, Lecture on the Rib Ḥadīth'],
  [],
  {
    facts:[
      ['Audience','Command addressed strictly to husbands'],
      ['Core Rule','“If you straighten it, you break it”'],
      ['Parable','Mufīd al-Ṭālibīn: trimming the eagle’s beak'],
      ['Modern Note','Jonathan Brown: embrace sex differences']
    ],
    quotes:[
      {by:'Prophet Muḥammad ﷺ (Ṣaḥīḥ Muslim 1468)',en:'The woman is like a rib; if you try to straighten her, you will break her.',ref:'Ṣaḥīḥ Muslim 1468'},
      {by:'Prophet Muḥammad ﷺ (Ṣaḥīḥ al-Bukhārī 5186)',en:'So I enjoin you to treat women well.',ref:'Ṣaḥīḥ al-Bukhārī 5186'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Calling women “crooked” like a rib still demeans them as defective or morally inferior!',
  theyWho:'Watch out · if they say',
  who:'Show why straightening is forbidden'
});

const wrTrapB=P(N(
  WR,
  'Either Islam teaches a literal rib-creation myth, or the metaphorical reading is just a modern apologetic dodge.',
  'Classical Sunni scholarship preserved both a literal reading (complementing the simile) and a well-attested metaphorical reading grounded in Arabic grammar and early Companions—hundreds of years before modern apologetics existed.',
  'Classical literal vs. metaphorical readings (Ibn Ḥajar, Abū Ḥayyān & Abū Dharr)',
  [
    '01 · The literal reading & Ibn Ḥajar’s synthesis: Proponents cite Q 4.1 (“created from it its mate”), the wording “created from a rib” (khuliqna min ḍilaʿ), and Companion reports from Ibn ʿAbbās that Eve was formed from Adam’s rib while he slept (Fatḥ al-Bārī 9/253). Ibn Ḥajar notes both views harmonize: the simile of a woman’s bent nature builds on that origin.',
    '02 · Five metaphorical arguments (Abū Ḥayyān, al-Baḥr al-Muḥīṭ 3/494): Other authentic chains read “like a rib” (ka-l-ḍilaʿ) and speak of all women rather than Eve; in Q 4.1, minhā (“from it”) can denote humanity as a kind; and “created from a rib” parallels Q 21.37 (“Man was created of haste”), naming an innate trait rather than raw material.',
    '03 · Early Companion precedent (Ibn Qutayba & Ibn al-Jawzī): Ibn Qutayba (ʿUyūn al-Akhbār 4/77) and Muftī Taqī ʿUthmānī (Takmilat Fatḥ al-Mulhim 1/136) cite classical poetry using the same motif. Crucially, Ibn al-Jawzī (Akhbār al-Nisāʾ, p. 127) attributes those verses to the Companion Abū Dharr al-Ghifārī—proving a close Companion read the image figuratively.'
  ],
  ['Qurʾān 4:1; 21:37','Ibn Ḥajar, Fatḥ al-Bārī (Beirut 1379 AH, 9/253)','Abū Ḥayyān al-Andalusī, al-Baḥr al-Muḥīṭ (3/494)','Ibn Qutayba, ʿUyūn al-Akhbār (4/77)','Ibn al-Jawzī, Akhbār al-Nisāʾ (p. 127); Taqī ʿUthmānī (1/136)'],
  [],
  {
    facts:[
      ['Ibn Ḥajar (9/253)','Literal creation & simile do not conflict'],
      ['Abū Ḥayyān (3/494)','Compares “from a rib” to Q 21:37 (“of haste”)'],
      ['Abū Dharr','Early Companion used the rib motif poetically'],
      ['Not Modern','Both readings predate modernity by centuries']
    ],
    quotes:[
      {by:'Ibn Ḥajar al-ʿAsqalānī (Fatḥ al-Bārī 9/253)',en:'These reports do not contradict the ḥadīth comparing woman to a rib; rather, the similarity derives from them.',ref:'Fatḥ al-Bārī 9/253'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Literal rib-creation is unscientific, and calling it a metaphor is just modern apologetics!',
  theyWho:'Watch out · if they say',
  who:'Cite Ibn Ḥajar, Abū Ḥayyān & Abū Dharr'
});

card('islam/morality/women/woman-created-from-rib',{
  title:'“Created from a rib”: literal vs. metaphor (Bukhārī 5186)',
  k:'Ḥadīth · Gender differences · Tafsīr',
  blurb:'Command addressed to husbands: curvature is strength, the Mufīd al-Ṭālibīn eagle parable, Ibn Ḥajar, Abū Ḥayyān & Abū Dharr.',
  claim:'Islam degrades women as “crooked” and defective by teaching they were created from a crooked rib.',
  tree:P(N(
    WR,
    'Muḥammad said women were created from a crooked rib—proving Islam views women as inherently flawed and bent.',
    'The ḥadīth is a pastoral command to husbands to treat women gently by respecting their distinct created nature. Calling the rib “crooked” is neither an insult nor a defect: the Prophet ﷺ explicitly forbids trying to “straighten” it—and classical scholars already articulated both literal and figurative readings grounded in Qurʾānic idiom (Q 21:37).',
    'Pastoral command to husbands, the eagle parable & classical exegesis',
    [
      '01 · Full wording & pastoral goal (Bukhārī 5186; Muslim 1468): The narration opens and closes with “I enjoin you to treat women kindly.” The Prophet ﷺ warns men that attempting to force women into male uniformity will “break” them, whereas accepting their distinct nature preserves harmony.',
      '02 · Curvature as design, not defect (Mufīd al-Ṭālibīn): Just as a ribcage protects the heart precisely by curving—and an old woman crippled a king’s eagle by trimming its naturally hooked beak and talons—a woman’s distinct temperament is integral to her beauty and role.',
      '03 · Classical literal & figurative harmony (Ibn Ḥajar; Abū Ḥayyān): While Ibn Ḥajar (Fatḥ al-Bārī 9/253) notes Companion narrations on Eve’s creation harmonize with the simile, Abū Ḥayyān (al-Baḥr al-Muḥīṭ 3/494) explains “created from a rib” parallels Q 21.37 (“created of haste”), describing innate disposition rather than literal flaw—supported by Abū Dharr’s poetic usage (Ibn al-Jawzī, Akhbār al-Nisāʾ 127).'
    ],
    ['Ṣaḥīḥ al-Bukhārī 3331, 5186; Muslim 1468','Qurʾān 4:1; 21:37','Ibn Ḥajar, Fatḥ al-Bārī 9/253','Abū Ḥayyān, al-Baḥr al-Muḥīṭ 3/494','Ibn al-Jawzī, Akhbār al-Nisāʾ 127; Mufīd al-Ṭālibīn'],
    [wrTrapA,wrTrapB],
    {
      facts:[
        ['Key Command','“Treat women kindly” opens & closes it'],
        ['Prohibition','Never try to “straighten” her nature'],
        ['Qurʾānic Idiom','Parallel to Q 21:37 (“created of haste”)'],
        ['Classical Roots','Ibn Ḥajar, Abū Ḥayyān & Abū Dharr']
      ],
      quotes:[
        {by:'Prophet Muḥammad ﷺ (Ṣaḥīḥ al-Bukhārī 5186)',en:'Treat women kindly, for they were created from a rib… if you try to straighten it, you will break it.',ref:'Ṣaḥīḥ al-Bukhārī 5186'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Misreading',
          items:[
            'Reduces “crooked” to moral inferiority',
            'Ignores the explicit ban on “straightening”',
            'Treats metaphorical exegesis as a modern invention'
          ]
        },
        right:{
          title:'Text & Classical Exegesis',
          items:[
            'Addressed to husbands to cultivate patience & kindness',
            'Curve = natural design & beauty (Mufīd al-Ṭālibīn eagle)',
            'Abū Ḥayyān & Abū Dharr confirm classical figurative usage'
          ]
        }
      }
    }
  ),{
    who:'Reframe the simile & cite classical tafsīr',
    forkTitle:'Two follow-up claims they make',
    forkSub:'Counter the inferiority claim or the literal-vs-metaphor false dilemma'
  }),
  sum:'The rib ḥadīth commands husbands to honor women’s distinct nature without forcing them to change, while classical scholars like Ibn Ḥajar and Abū Ḥayyān already harmonized its literal and figurative dimensions.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: islam/morality/women/women-as-rulers-hadith
      From frauen_herrscher (1305539420690317393)
   ============================================================================ */
const FH=AV2('#frauen-herrscher','1305539420690317393');

const fhTrapA=P(N(
  FH,
  'Even if restricted to politics, the ḥadīth proves Islam bars women from leadership, public authority, and reliable testimony.',
  'Islamic Scripture and early caliphal practice decisively refute that claim: the Qurʾān praises the Queen of Sheba’s wise governance (27:23–44), the Prophet ﷺ preferred a Black enslaved woman’s testimony over a man’s (Bukhārī 5104), and Caliph ʿUmar appointed Samrāʾ bint Nahīk as chief market inspector.',
  'Female authority & testimony in Qurʾān, Sunnah & Caliphate—plus chain scrutiny',
  [
    '01 · Queen of Sheba in Qurʾān 27.23–44: The Qurʾān portrays Bilqīs ruling on a mighty throne with prudence, consultation, and statesmanship—traits that lead her to recognize truth and embrace Islam.',
    '02 · Testimony & civic policing (Bukhārī 5104; al-Muʿjam al-Kabīr 785): In Ṣaḥīḥ al-Bukhārī 5104, the Prophet ﷺ accepted a Black enslaved woman’s testimony over a man’s. Under Caliph ʿUmar, Samrāʾ bint Nahīk (a Companion) patrolled the markets with a whip as chief muḥtasiba, enjoining good and forbidding wrong (al-Ṭabarānī 785, graded jayyid by al-Albānī; Ibn ʿAbd al-Barr, al-Istīʿāb 4/1863).',
    '03 · Isnād scrutiny on auxiliary chains: While al-Bukhārī accepted al-Ḥasan al-Baṣrī’s transmission from Abū Bakra, scholars debated whether al-Ḥasan heard everything directly from him—and all four auxiliary chains carry defects: ʿAbd al-Raḥmān b. Jawshan (little known per Aḥmad & Abū Ḥātim), ʿUmar b. al-Hujnaʿ via Shiite narrator al-ʿAbbās al-Shibāmī (listed by al-ʿUqaylī in al-Ḍuʿafāʾ 4/201 with an anomalous Paradise ending), and Abū al-Munhal al-Bakrāwī (unknown in no. 3685).'
  ],
  ['Qurʾān 27:23–44','Ṣaḥīḥ al-Bukhārī 5104','al-Ṭabarānī, al-Muʿjam al-Kabīr 785 (Jayyid)','Ibn ʿAbd al-Barr, al-Istīʿāb 4/1863','al-ʿUqaylī, al-Ḍuʿafāʾ 4/201'],
  [],
  {
    facts:[
      ['Qurʾān 27:23–44','Queen of Sheba praised for wise rule'],
      ['Bukhārī 5104','Woman’s testimony accepted over man’s'],
      ['Samrāʾ bint Nahīk','Appointed market authority by ʿUmar'],
      ['Auxiliary Chains','Ibn Jawshan, Ibn al-Hujnaʿ & al-Bakrāwī weak']
    ],
    quotes:[
      {by:'Ibn ʿAbd al-Barr (al-Istīʿāb 4/1863)',en:'Samrāʾ bint Nahīk used to patrol the markets and enjoin good and forbid wrong.',ref:'al-Istīʿāb 4/1863; al-Muʿjam al-Kabīr 785'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Islam bars women from public authority, leadership roles, and even credible testimony!',
  theyWho:'Watch out · if they say',
  who:'Cite Bilqīs, Samrāʾ & isnād analysis'
});

const fhTrapB=P(N(
  FH,
  'Unlike Islam, Christianity and the Bible endorse full equality and never bar women from leadership or authority.',
  'The New Testament, Old Testament, and Aquinas teach far stricter subordination: 1 Timothy 2:11–12 explicitly forbids women from teaching or holding authority over men, Ephesians 5:22–24 requires wives to submit in everything, Isaiah 3:12 treats female rule as a sign of national collapse, and Thomas Aquinas bars women from spiritual or public rule.',
  'Turn the tables · Bible & Aquinas on female authority',
  [
    '01 · 1 Timothy 2.11–12 & Ephesians 5.22–24: Paul commands women to learn in quietness and full submission, forbidding any woman to teach or exercise authority over a man, and commands wives to submit to husbands “in everything” just as the Church submits to Christ.',
    '02 · Isaiah 3.12 (also in Qumran Isaiah scroll): “Youths oppress my people, women rule over them.” Classical Christian exegesis (e.g., Pulpit Commentary, citing Herodotus 8.88 and Virgil’s Aeneid) explains “children” and “women” here symbolize weak, fickle, and unfit leadership.',
    '03 · Thomas Aquinas (Summa Theologiae Suppl. Q19 a4 ad 4): Citing 1 Timothy 2:11, Titus 2:5, and Aristotle (Ethics VIII / Politics), Aquinas rules that because women stand in a state of subjection, they cannot hold spiritual jurisdiction or public governance—allowing only limited domestic oversight over other women.'
  ],
  ['1 Timothy 2:11–12; Ephesians 5:22–24; Titus 2:5','Isaiah 3:12 (MT & Qumran 1QIsaᵃ); Pulpit Commentary','Thomas Aquinas, Summa Theologiae Suppl. Q19 a4 ad 4'],
  [],
  {
    facts:[
      ['1 Tim 2:11–12','Forbids women teaching or having authority'],
      ['Eph 5:22–24','Wives must submit “in everything”'],
      ['Isaiah 3:12','Female rule depicted as national decay'],
      ['Aquinas ST Q19','Woman in subjection; barred from public rule']
    ],
    quotes:[
      {by:'1 Timothy 2:12 (NIV)',en:'I do not permit a woman to teach or to assume authority over a man; she must be quiet.',ref:'1 Timothy 2:12'},
      {by:'Isaiah 3:12',en:'My people—their oppressors are children, and women rule over them.',ref:'Isaiah 3:12'}
    ]
  }
),{
  optWho:'Turn the tables · if they say',
  optLabel:'Christianity and the Bible never restricted women from authority or governance!',
  theyWho:'Turn the tables · if they say',
  who:'Quote 1 Tim 2:12, Isa 3:12 & Aquinas'
});

card('islam/morality/women/women-as-rulers-hadith',{
  title:'“A people who appoint a woman will not succeed” (Bukhārī 4425)',
  k:'Ḥadīth · Political leadership · Tu quoque',
  blurb:'Sasanian wartime context (Kisrā’s daughter Būrān), Bilqīs (27:23–44), Samrāʾ bint Nahīk, chain scrutiny & Aquinas/1 Tim 2:12.',
  claim:'Islam declares any society led by a woman doomed to fail, stripping women of competence and civic authority.',
  tree:P(N(
    FH,
    'The Prophet said a nation ruled by a woman will never succeed—so Islam considers women unfit for leadership.',
    'Contextually, the report was a specific comment on the Sasanian Empire collapsing amid wartime succession by crowning Kisrā’s daughter Būrān—and jurists restricted its scope strictly to supreme head-of-state/military command, never ordinary leadership or public office. Meanwhile, the Qurʾān praises Queen Bilqīs (27:23–44), ʿUmar appointed Samrāʾ bint Nahīk over Medina’s markets, and Christian Scripture + Aquinas enforce far broader female subjection.',
    'Sasanian wartime context, Islamic counter-examples & Biblical parallel',
    [
      '01 · Specific wartime succession occasion: When Emperor Kisrā died and Persians enthroned his daughter Būrān during an existential war, the Prophet ﷺ commented on that regime’s impending collapse. Jurists note this applies at most to supreme caliphal/commander-in-chief office—not management, scholarship, or civil administration.',
      '02 · Qurʾānic & Prophetic counter-evidence: Qurʾān 27.23–44 celebrates the Queen of Sheba’s prudent rule; Bukhārī 5104 prefers a Black enslaved woman’s testimony over a man’s; and ʿUmar appointed Samrāʾ bint Nahīk as chief market inspector (al-Muʿjam al-Kabīr 785, Jayyid; al-Istīʿāb 4/1863).',
      '03 · Chain & Bible comparison: While Bukhārī accepts al-Ḥasan al-Baṣrī’s link to Abū Bakra, auxiliary chains (Ibn Jawshan, ʿUmar b. al-Hujnaʿ in al-ʿUqaylī’s al-Ḍuʿafāʾ 4/201, Abū al-Munhal al-Bakrāwī) are weak—and Christian critics face 1 Tim 2.11–12, Eph 5.22–24, Isa 3.12, and Thomas Aquinas barring women from public rule.'
    ],
    ['Ṣaḥīḥ al-Bukhārī 4425, 5104, 7099','Qurʾān 27:23–44','al-Muʿjam al-Kabīr 785; al-Istīʿāb 4/1863','al-ʿUqaylī, al-Ḍuʿafāʾ 4/201','1 Tim 2:11–12; Isa 3:12; Aquinas ST Suppl. Q19 a4'],
    [fhTrapA,fhTrapB],
    {
      facts:[
        ['Historical Trigger','Sasanian succession of Kisrā’s daughter Būrān'],
        ['Fiqh Scope','Supreme head of state / military only'],
        ['Counter-Proofs','Queen Bilqīs (27:23) & Samrāʾ bint Nahīk'],
        ['Bible Counter','1 Tim 2:12; Isa 3:12; Aquinas ST Q19']
      ],
      quotes:[
        {by:'Abū Bakra (Ṣaḥīḥ al-Bukhārī 4425)',en:'When Kisrā died… they appointed his daughter Būrān. The Prophet ﷺ said: A people will not succeed who entrust their affairs to a woman.',ref:'Ṣaḥīḥ al-Bukhārī 4425'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Caricature',
          items:[
            'Erases the Persian succession crisis (Būrān)',
            'Extends supreme-caliphate ruling to every female role',
            'Ignores Bilqīs, Samrāʾ bint Nahīk & Bukhārī 5104'
          ]
        },
        right:{
          title:'Full Evidence & Tu Quoque',
          items:[
            'Commented on Sasanian collapse; jurists limit scope',
            'Women held market policing & judicial testimony priority',
            '1 Tim 2:12 & Aquinas ban women from teaching/ruling men'
          ]
        }
      }
    }
  ),{
    who:'Contextualize Būrān & flip the standard',
    forkTitle:'Two follow-up moves',
    forkSub:'Show women in Islamic authority or turn to 1 Timothy 2:12 and Aquinas'
  }),
  sum:'The “female ruler” remark addressed Sasanian wartime collapse under Būrān and supreme headship—while Islam honors Queen Bilqīs and Samrāʾ bint Nahīk, unlike 1 Timothy 2:12 and Aquinas’s blanket ban on female authority.'
});

/* ============================================================================
   3. NEW Tactical Playbook card: islam/morality/women/bad-omen-in-women-hadith
      From frauen_unglueck (1306404484234346506)
   ============================================================================ */
const FU=AV2('#frauen-unglück','1306404484234346506');

const fuTrapA=P(N(
  FU,
  'Even if ʿĀʾisha objected, Ṣaḥīḥ al-Bukhārī still preserves the wording that bad omen is in the house, the woman, and the horse.',
  'Other authentic chains phrase it conditionally—“If bad omen existed in anything, it would be in…”—a rhetorical negation of superstition, while Saʿd b. Abī Waqqāṣ’s ḥadīth and classical commentaries (al-Khaṭṭābī, al-Zurqānī) explain the term refers strictly to observable harm from a wicked spouse, bad home, or unruly mount—never a mystical omen.',
  'Conditional phrasing (in kāna), Saʿd’s ḥadīth & classical sharḥ',
  [
    '01 · Conditional refutation (in kāna al-shuʾm): Authentic variants state “If bad omen were in anything, it would be in these three”—signaling that superstitious omens have no reality, matching the Prophet’s praise of the 70,000 who enter Paradise without reckoning because they reject omens (Muslim 220).',
    '02 · Saʿd b. Abī Waqqāṣ clarifies the exact meaning: The Prophet ﷺ contrasted “three sources of happiness—a righteous wife, a good house, a good mount” with “three sources of misery—a bad wife, a bad house, a bad mount.” “Misfortune” means practical, moral harm (infidelity, hostility, structural danger), not magic or divination.',
    '03 · Classical sharḥ (al-Khaṭṭābī & al-Zurqānī 4/604): Imām al-Khaṭṭābī explains house, wife, and mount are simply the three constant companions of life where trouble is acutely felt; Islam compassionately permits leaving an unsuitable house or marriage. al-Zurqānī (Sharḥ al-Muwaṭṭaʾ 4/604) states it is unlawful to attribute mystical bad luck to any woman, echoing Muslim 1467 (“the best enjoyment of this world is a righteous wife”).'
  ],
  ['Ṣaḥīḥ Muslim 220, 1467','Saʿd b. Abī Waqqāṣ ḥadīth (Ibn Ḥibbān / Aḥmad)','al-Khaṭṭābī, Maʿālim al-Sunan','al-Zurqānī, Sharḥ al-Muwaṭṭaʾ 4/604'],
  [],
  {
    facts:[
      ['In kāna','Conditional wording negates superstition'],
      ['Saʿd’s Ḥadīth','“Bad wife” = moral harm, not magic'],
      ['al-Zurqānī 4/604','Unlawful to ascribe bad luck to a woman'],
      ['Muslim 1467','Righteous wife = best worldly blessing']
    ],
    quotes:[
      {by:'Prophet Muḥammad ﷺ (Ṣaḥīḥ Muslim 1467)',en:'The world is a passing enjoyment, and the best enjoyment in this world is a righteous wife.',ref:'Ṣaḥīḥ Muslim 1467'},
      {by:'al-Zurqānī (Sharḥ al-Muwaṭṭaʾ 4/604)',en:'It is not permissible to ascribe bad omen to a woman or to any other person.',ref:'Sharḥ al-Muwaṭṭaʾ 4/604'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Regardless of ʿĀʾisha, Bukhārī still says bad omen is in the house, the woman, and the horse!',
  theyWho:'Watch out · if they say',
  who:'Show in kāna, Saʿd & classical sharḥ'
});

const fuTrapB=P(N(
  FU,
  'The Bible never personifies evil or misfortune through a woman the way critics allege against ḥadīth.',
  'In Zechariah 5:7–8, Scripture literally depicts a woman sitting inside an ephah measuring basket, explicitly identifies her as “Wickedness” (lawlessness), and seals her down with a heavy lead cover.',
  'Turn the tables · Zechariah 5.7–8 personifies Wickedness as a woman',
  [
    '01 · Zechariah 5.7–8 text: An angel lifts a lead lid to reveal a woman sitting inside the measuring basket and declares, “This is Wickedness,” before thrusting her back down and slamming the lead weight over the opening.',
    '02 · Symbolic vs. literal standards: Christian commentators rightly explain that Zechariah uses the woman inside the basket as a metaphor for sin and lawlessness being confined and banished—proving how hypocritical it is to deny Islamic texts the exact same contextual and idiomatic reading.'
  ],
  ['Zechariah 5:7–8'],
  [],
  {
    facts:[
      ['Zechariah 5:7–8','Woman in basket called “Wickedness”'],
      ['Lead Cover','Sealed inside the ephah measuring basket'],
      ['Double Standard','Bible gets metaphor; ḥadīth gets literalism']
    ],
    quotes:[
      {by:'Zechariah 5:7–8 (ESV)',en:'And behold, a woman was sitting in the basket! And he said, “This is Wickedness.”',ref:'Zechariah 5:7–8'}
    ]
  }
),{
  optWho:'Turn the tables · if they say',
  optLabel:'The Bible never equates a woman with evil or bad omen like that!',
  theyWho:'Turn the tables · if they say',
  who:'Cite Zechariah 5:7–8'
});

card('islam/morality/women/bad-omen-in-women-hadith',{
  title:'“Bad omen is in three: house, woman, horse” — ʿĀʾisha & Sharḥ',
  k:'Ḥadīth · ʿĀʾisha’s critique · Sharḥ',
  blurb:'ʿĀʾisha’s rebuttal (Jāhiliyya/Jewish quote), Abū Hurayra’s denial (Aḥmad), in kāna, al-Khaṭṭābī, al-Zurqānī & Zechariah 5:7–8.',
  claim:'Islam teaches that women are inherently carriers of bad omens and misfortune.',
  tree:P(N(
    FU,
    'A famous ḥadīth says bad omen lies in three things: the house, the woman, and the horse—proving Islam views women as cursed omens.',
    'That polemic collapses on three independent levels: (1) ʿĀʾisha (and a report of Abū Hurayra in Aḥmad) explicitly testified that the Prophet ﷺ was quoting—and condemning—the superstitious saying of the Jāhiliyya/Jews, not endorsing it; (2) the conditional wording “if omen existed” negates superstition; and (3) classical commentators (al-Khaṭṭābī, al-Zurqānī) and Saʿd’s ḥadīth show “misfortune” means ordinary harm from a bad spouse/home/mount, while Muslim 1467 names the righteous wife the finest blessing on earth.',
    'ʿĀʾisha’s correction, Abū Hurayra’s denial & classical sharḥ',
    [
      '01 · ʿĀʾisha’s rebuttal (Abū Ḥassān & al-Ṭayālisī ← Makḥūl): When two men of Banū ʿĀmir quoted Abū Hurayra’s report, ʿĀʾisha swore by the Revealer of the Furqān that the Prophet ﷺ never endorsed it—he only quoted what “the people of Ignorance used to say,” citing Q 57.22. In al-Ṭayālisī’s version (graded good by al-Albānī as corroboration), she notes Abū Hurayra heard only the tail end of “May Allah curse the Jews who say bad omen is in…”',
      '02 · Abū Hurayra’s own denial (Musnad Aḥmad via Abū Maʿshar): Asked if he heard the Prophet ﷺ say bad omen is in those three, Abū Hurayra replied that he would not attribute to the Prophet ﷺ what he never said—affirming instead good optimism (faʾl) and forbidding superstitious omens (Muslim 220).',
      '03 · Classical sharḥ & Zechariah 5.7–8 counter: Conditional chains (“if omen existed”), Saʿd b. Abī Waqqāṣ (“bad wife / bad house / bad mount”), al-Khaṭṭābī, and al-Zurqānī (4/604) prove Islam outlaws superstitious blame of women—unlike Zechariah 5.7–8, which literally labels a woman in a basket “Wickedness.”'
    ],
    ['Qurʾān 57:22','Abū Dāwūd al-Ṭayālisī; Musnad Aḥmad (Abū Maʿshar)','Ṣaḥīḥ Muslim 220, 1467','al-Khaṭṭābī; al-Zurqānī, Sharḥ al-Muwaṭṭaʾ 4/604','Zechariah 5:7–8'],
    [fuTrapA,fuTrapB],
    {
      facts:[
        ['ʿĀʾisha’s Critique','Prophet only quoted Jāhiliyya / Jewish claim'],
        ['Musnad Aḥmad','Abū Hurayra denies endorsing the saying'],
        ['Saʿd & al-Zurqānī','Practical harm ≠ mystical omen'],
        ['Bible Counter','Zechariah 5:7–8 calls a woman “Wickedness”']
      ],
      quotes:[
        {by:'ʿĀʾisha (via Qatāda ← Abū Ḥassān)',en:'By Him who sent down the Furqān upon Muḥammad, the Messenger of Allah ﷺ never said that.',ref:'Cited in Averroes 2 #frauen-unglück'},
        {by:'Abū Hurayra (Musnad Aḥmad)',en:'Then I would be attributing to the Prophet ﷺ what he did not say.',ref:'Musnad Aḥmad (via Abū Maʿshar)'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['1. Truncated Hearing','ʿĀʾisha explains the Prophet ﷺ was quoting and refuting pre-Islamic/Jewish superstition (Q 57:22).'],
          ['2. Conditional Negation','“If bad omen were in anything…” rejects superstition outright alongside Muslim 220.'],
          ['3. Practical Meaning','Saʿd’s ḥadīth & al-Khaṭṭābī define shuʾm as lived misery from bad character or unsafe housing—never innate female evil.']
        ]
      }
    }
  ),{
    who:'Present ʿĀʾisha’s rebuttal & classical sharḥ',
    forkTitle:'Two follow-up angles',
    forkSub:'Handle the Bukhārī wording or flip the charge onto Zechariah 5:7–8'
  }),
  sum:'ʿĀʾisha and Musnad Aḥmad clarify the Prophet ﷺ was condemning superstition, while conditional chains, Saʿd’s ḥadīth, and classical commentators (al-Khaṭṭābī, al-Zurqānī) forbid treating women as mystical bad omens.'
});

/* ============================================================================
   4. NEW Tactical Playbook card: islam/morality/women/wifes-right-to-intimacy
      From frau_recht_sex (1315772896571953252)
   ============================================================================ */
const FRS=AV2('#frau-recht-auf-sex','1315772896571953252');

const frsTrapA=P(N(
  FRS,
  'Some jurists say a husband only has to be intimate with his wife once every four months, leaving wives neglected.',
  'Ibn Taymiyya explicitly rejected any four-month cap as an error: a husband is religiously obligated to satisfy his wife’s sexual needs consistently—as al-Ghazālī recommends every four nights or more often as needed—to guard her chastity and happiness.',
  'Ibn Taymiyya & al-Ghazālī reject the four-month cap',
  [
    '01 · Ibn Taymiyya (al-Ikhtiyārāt al-Fiqhiyya, p. 246): States explicitly that it is obligatory (wājib) on the husband to have intercourse with his wife in a measure that satisfies her—so long as it does not harm his body or livelihood—and affirms this obligation is NOT limited to four months.',
    '02 · Imām al-Ghazālī (Iḥyāʾ ʿUlūm al-Dīn): Advises intimacy every four nights, increasing or adjusting frequency according to the wife’s need so she remains chaste and free of longing, because enabling his wife to preserve her chastity is an obligation on the husband.',
    '03 · Sinful neglect: Prolonged, unjustified refusal of intimacy by a husband is sinful before Allah because it violates an explicit marital right (ḥaqq al-zawja) established by the Prophet ﷺ.'
  ],
  ['Ibn Taymiyya, al-Ikhtiyārāt al-Fiqhiyya, p. 246','al-Ghazālī, Iḥyāʾ ʿUlūm al-Dīn'],
  [],
  {
    facts:[
      ['Ibn Taymiyya','Obligatory to satisfy her; NO 4-month cap'],
      ['al-Ghazālī','Suggests every 4 nights or more per her need'],
      ['Chastity Duty','Husband must guard wife’s inner & outer chastity'],
      ['Accountability','Unjustified withholding is a sin before Allah']
    ],
    quotes:[
      {by:'Ibn Taymiyya (al-Ikhtiyārāt al-Fiqhiyya, p. 246)',en:'It is obligatory for the husband to have intercourse with his wife to an extent that satisfies her… not limited to four months.',ref:'al-Ikhtiyārāt al-Fiqhiyya, p. 246'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Classical fiqh caps a wife’s right to intimacy at once every four months!',
  theyWho:'Watch out · if they say',
  who:'Cite Ibn Taymiyya & al-Ghazālī'
});

const frsTrapB=P(N(
  FRS,
  'Even if intercourse is required, Islamic law only treats women as passive vessels and ignores female pleasure.',
  'Classical fiqh says the exact opposite: Ibn Qudāma explicitly rules that foreplay (mulāʿaba) before intercourse is recommended so the wife’s desire is awakened and she enjoys intimacy just as much as her husband—and Bukhārī 1867 rebuked an overly ascetic husband even for neglecting his wife’s grooming and attention.',
  'Ibn Qudāma on female pleasure & Salmān’s rebuke in Bukhārī 1867',
  [
    '01 · Ibn Qudāma on foreplay & mutual enjoyment (al-Mughnī 7/300–304): After affirming intercourse is an obligation on the husband absent valid excuse, Ibn Qudāma explicitly recommends foreplay beforehand to arouse her desire “so that she enjoys intercourse just as he does.”',
    '02 · Ḥanafī consensus (Ibn ʿĀbidīn & al-Kāsānī): Ibn ʿĀbidīn (Radd al-Muḥtār 3/4) defines marriage’s legal effect as mutual sexual delight for both spouses, and al-Kāsānī (Badāʾiʿ al-Ṣanāʾiʿ 2/331) confirms jurists require regular marital intimacy.',
    '03 · Salmān & Abū al-Dardāʾ (Ṣaḥīḥ al-Bukhārī 1867): Seeing Umm al-Dardāʾ dressed shabbily because her husband fasted all day and prayed all night, Salmān compelled Abū al-Dardāʾ to eat and sleep, declaring “Your wife has a right over you”—and the Prophet ﷺ endorsed Salmān’s judgment.'
  ],
  ['Ibn Qudāma, al-Mughnī 7/300–304','Ibn ʿĀbidīn, Radd al-Muḥtār 3/4','al-Kāsānī, Badāʾiʿ al-Ṣanāʾiʿ 2/331','Ṣaḥīḥ al-Bukhārī 1867'],
  [],
  {
    facts:[
      ['al-Mughnī 7/300','Foreplay recommended so wife enjoys equally'],
      ['Radd al-Muḥtār 3/4','Mutual sexual pleasure for each spouse'],
      ['Badāʾiʿ 2/331','Husband obligated to maintain intimacy'],
      ['Bukhārī 1867','Prophet ﷺ confirms “Salmān spoke the truth”']
    ],
    quotes:[
      {by:'Ibn Qudāma (al-Mughnī 7/300–304)',en:'It is recommended that he engage in foreplay with his wife beforehand to awaken her desire, so she enjoys it as he does.',ref:'al-Mughnī 7/300–304'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Islamic law ignores a woman’s own pleasure and treats intimacy as purely for the husband!',
  theyWho:'Watch out · if they say',
  who:'Cite Ibn Qudāma & Bukhārī 1867'
});

card('islam/morality/women/wifes-right-to-intimacy',{
  title:'A wife’s legal right to intimacy & pleasure in Islam',
  k:'Fiqh · Marital rights · Bukhārī 1867',
  blurb:'Bukhārī 4765/1874 & 1867 (“your wife has a right over you”), Ibn ʿĀbidīn, al-Kāsānī, Ibn Taymiyya, al-Ghazālī & Ibn Qudāma.',
  claim:'Islamic marriage only protects the husband’s sexual rights while denying the wife any right to intimacy or fulfillment.',
  tree:P(N(
    FRS,
    'In Islam, only the husband has sexual rights over his wife—a woman has no right to demand intimacy or pleasure.',
    'The exact reverse is documented in Ṣaḥīḥ al-Bukhārī and all classical schools of law: the Prophet ﷺ rebuked Companions who neglected their wives through excessive fasting and night prayer—“your wife has a right over you” (Bukhārī 1867, 1874, 4765)—and jurists from Ibn ʿĀbidīn and al-Kāsānī to al-Ghazālī, Ibn Taymiyya, and Ibn Qudāma made satisfying the wife’s sexual needs and pleasure a binding religious duty.',
    'Prophetic rulings & classical fiqh on the wife’s sexual rights',
    [
      '01 · ʿAbdullāh b. ʿAmr’s wife’s complaint (Ṣaḥīḥ al-Bukhārī 4765 & 1874): When ʿAbdullāh’s father learned his daughter-in-law had been left untouched in bed due to her husband’s nonstop fasting and vigil, he reported it to the Prophet ﷺ—who commanded ʿAbdullāh to moderate his worship because “your wife has a right over you.”',
      '02 · Abū al-Dardāʾ & Salmān (Ṣaḥīḥ al-Bukhārī 1867): When Umm al-Dardāʾ stopped adorning herself because her husband neglected marital life for asceticism, Salmān made Abū al-Dardāʾ break his voluntary fast and sleep—teaching “Your wife has a right over you”—which the Prophet ﷺ explicitly approved.',
      '03 · Classical legal consensus (Ḥanafī, Shāfiʿī & Ḥanbalī): Ibn ʿĀbidīn (Radd al-Muḥtār 3/4), al-Kāsānī (Badāʾiʿ 2/331), Ibn Taymiyya (Ikhtiyārāt 246), al-Ghazālī (Iḥyāʾ), and Ibn Qudāma (al-Mughnī 7/300–304) declare regular intimacy and foreplay for the wife’s equal enjoyment an obligation whose neglect is sinful.'
    ],
    ['Ṣaḥīḥ al-Bukhārī 1867, 1874, 4765','Ibn ʿĀbidīn, Radd al-Muḥtār 3/4','al-Kāsānī, Badāʾiʿ al-Ṣanāʾiʿ 2/331','Ibn Taymiyya, al-Ikhtiyārāt al-Fiqhiyya 246','al-Ghazālī, Iḥyāʾ; Ibn Qudāma, al-Mughnī 7/300–304'],
    [frsTrapA,frsTrapB],
    {
      facts:[
        ['Bukhārī 4765/1874','Worship cannot override a wife’s bed rights'],
        ['Bukhārī 1867','“Your wife has a right over you”'],
        ['Ibn Taymiyya 246','Must satisfy her; no 4-month limit'],
        ['al-Mughnī 7/300','Recommends foreplay for her equal pleasure']
      ],
      quotes:[
        {by:'Prophet Muḥammad ﷺ (Ṣaḥīḥ al-Bukhārī 4765 / 1874)',en:'Fast and break your fast, pray and sleep, for your body has a right over you… and your wife has a right over you.',ref:'Ṣaḥīḥ al-Bukhārī 4765, 1874'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Anti-Islamic Stereotype',
          items:[
            'Claims intimacy is solely a husband’s unilateral privilege',
            'Assumes female sexual desire is ignored in sharīʿa',
            'Cites an imaginary 4-month waiting rule as the norm'
          ]
        },
        right:{
          title:'Sunnah & Classical Fiqh',
          items:[
            'Prophet ﷺ forbade neglecting wives even for prayer & fasting',
            'Ibn Qudāma mandates intimacy & recommends foreplay for her joy',
            'Ibn Taymiyya & al-Ghazālī require fulfilling her regularly'
          ]
        }
      }
    }
  ),{
    who:'Cite the Sunnah & four-school fiqh',
    forkTitle:'Two follow-up claims they try',
    forkSub:'Refute the 4-month limit myth or prove Islamic law values female pleasure'
  }),
  sum:'Ṣaḥīḥ al-Bukhārī (1867, 1874, 4765) and classical jurists (Ibn ʿĀbidīn, al-Kāsānī, al-Ghazālī, Ibn Taymiyya, Ibn Qudāma) make regular intimacy and foreplay for the wife’s equal fulfillment a binding marital right.'
});

/* ============================================================================
   5. NEW Tactical Playbook card: islam/quran/d-ia-quran-surahs/immortal-youths-in-paradise
      From kinder_paradies_diener (1307617193659334797)
   ============================================================================ */
const KP=AV2('#kinder-paradies-diener','1307617193659334797');

const kpTrapA=P(N(
  KP,
  'Didn’t al-Albānī authenticate the ḥadīth (al-Ṣaḥīḥa 1468) saying the children of polytheists serve the people of Paradise?',
  'When all five chains behind that narration (cited in al-Silsila al-Ṣaḥīḥa 3/452, no. 1468) are examined individually, every single route is disconnected (mursal) and relies on severely criticized or mudallis narrators—leaving the attribution unestablished.',
  'Five-chain isnād breakdown of the “polytheists’ children” report',
  [
    '01 · Chain 1 (Ibn Manda, al-Maʿrifa 1/261/2): Mursal via Ibrāhīm b. Mukhtār ← Ibn Isḥāq ← Yazīd b. Abī Ḥabīb ← Sinān b. Saʿd ← Abū Mālik. Though al-ʿIjlī and Ibn Maʿīn praised Sinān, al-Nasāʾī called him munkar al-ḥadīth; al-Jūzjānī, Ibn Saʿd, al-Dāraquṭnī, and al-Dhahabī declared him weak/unreliable, al-ʿUqaylī notes Aḥmad rejected his confused reports, and Ibn Ḥajar (Taqrīb 118; Tahdhīb 2/277) noted weak memory.',
    '02 · Chains 2 & 3 (Abū Nuʿaym, Ḥilya 6/308 & Abū Yaʿlā 1011–1012): Both are mursal from Anas b. Mālik through Yazīd al-Raqāshī (via al-Rabīʿ b. Ṣubayḥ or al-Aʿmash, also in al-Ṭabarānī al-Awsaṭ). Classical rijāl manuals unanimously grade Yazīd al-Raqāshī weak and abandoned (matrūk), and al-Aʿmash is a known mudallis.',
    '03 · Chains 4 & 5 (al-Bazzār 232; al-Ṭabarānī al-Kabīr & al-Awsaṭ): Chain 4 runs through Mubārak b. Faḍāla (weak, mudallis) ← ʿAlī b. Zayd (criticized as weak/Rāfiḍī) ← Anas (mursal). Chain 5 runs through ʿAbbād b. Manṣūr (weak, mudallis) ← Abū Rajāʾ ← Samura b. Jundab (mursal). Five weak, broken chains cannot establish a creed claim.'
  ],
  ['al-Albānī, al-Silsila al-Ṣaḥīḥa 3/452 (no. 1468)','Ibn Manda, al-Maʿrifa 1/261/2; Abū Nuʿaym, Ḥilya 6/308','Abū Yaʿlā 1011–1012; al-Bazzār 232; al-Ṭabarānī','Ibn Ḥajar, Tahdhīb al-Tahdhīb & Taqrīb; al-Dhahabī, al-Kāshif & Dīwān al-Ḍuʿafāʾ','al-ʿUqaylī, al-Ḍuʿafāʾ 2/119; al-Dāraquṭnī, al-Ḍuʿafāʾ wa-l-Matrūkīn 295'],
  [],
  {
    facts:[
      ['All 5 Chains','Disconnected (mursal) at the Companion level'],
      ['Chain 1 (Sinān)','Rejected by Aḥmad, al-Nasāʾī & al-Dhahabī'],
      ['Chains 2–3','Yazīd al-Raqāshī (weak) & al-Aʿmash (tadlīs)'],
      ['Chains 4–5','Mubārak, ʿAlī b. Zayd & ʿAbbād b. Manṣūr weak']
    ],
    quotes:[
      {by:'Ibn Ḥajar al-ʿAsqalānī (on Sinān b. Saʿd)',en:'Truthful, but weak in memory.',ref:'Taqrīb al-Tahdhīb, p. 118'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Al-Albānī graded the ḥadīth ṣaḥīḥ (no. 1468) that polytheists’ children are turned into servants!',
  theyWho:'Watch out · if they say',
  who:'Dissect all 5 mursal/weak chains'
});

const kpTrapB=P(N(
  KP,
  'Why does the Qurʾān describe them as “immortal youths” like scattered pearls (Q 56:17, 76:19) and commentators mention earrings?',
  'Ibn Kathīr notes the “earrings” gloss rests on no authentic ḥadīth and describes their faces as luminous—not eroticized—while men in Paradise also wear silk, gold, and pearls (Q 22:23; 35:33). Their service is joyful hospitality (carrying cups and fruit), not sensual exploitation.',
  'Refuting sensualized readings (Ibn Kathīr, Ibn al-Qayyim & Abū ʿUbayda)',
  [
    '01 · Earrings & “radiant faces” (Ibn Kathīr): Ibn Kathīr clarifies that interpreting mukhalladūn as wearing earrings lacks any authentic ḥadīth basis, and his Arabic wording praises their luminous/radiant countenances—a standard sign of paradisiacal purity, never eroticism.',
    '02 · Pure hospitality & male jewelry in Paradise: Serving “scattered like pearls” (Q 76.19) depicts attendants moving briskly everywhere with cups, food, and flowers. Nor is jewelry effeminate in Paradise—believing men themselves wear bracelets of gold and pearls (Q 22.23; 35.33).',
    '03 · Origin & eternal youth (Ibn al-Qayyim; Abū ʿUbayda & al-Farrāʾ): Ibn al-Qayyim confirms they are created directly for Paradise (like ḥūr al-ʿīn), not earthly children; Abū ʿUbayda and al-Farrāʾ explain mukhalladūn idiomatically means ageless—neither graying nor losing teeth.'
  ],
  ['Qurʾān 22:23; 35:33; 56:17; 76:19','Tafsīr Ibn Kathīr (on Q 56:17 & 76:19)','Ibn al-Qayyim, Ḥādī al-Arwāḥ (via Majmūʿ 4/312 notes)','Abū ʿUbayda & al-Farrāʾ'],
  [],
  {
    facts:[
      ['Ibn Kathīr','Earrings gloss has zero ṣaḥīḥ ḥadīth support'],
      ['Q 22:23 & 35:33','Men in Paradise also wear pearls & gold'],
      ['Hospitality','Circulating with drinks, food & flowers'],
      ['Abū ʿUbayda','Mukhalladūn = never aging or graying']
    ],
    quotes:[
      {by:'Abū ʿUbayda & al-Farrāʾ',en:'Eternally young means that they do not age and do not change.',ref:'Cited alongside Ibn al-Qayyim'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Their description as “scattered pearls” and “earrings” in Q 76:19 carries creepy sensual undertones!',
  theyWho:'Watch out · if they say',
  who:'Expose the non-ḥadīth gloss & Q 22:23'
});

card('islam/quran/d-ia-quran-surahs/immortal-youths-in-paradise',{
  title:'Who are the “immortal youths” (wildān mukhalladūn) in Paradise?',
  k:'Qurʾān 56:17 · 76:19 · Ibn Taymiyya',
  blurb:'Created specifically for Paradise (Majmūʿ 4/312; Ibn al-Qayyim), earthly children enter aged 33, 5 weak mursal chains refuting polytheist-child servitude.',
  claim:'The Qurʾān’s wildān mukhalladūn are enslaved children of disbelievers—or carry pederastic undertones.',
  tree:P(N(
    KP,
    'Qurʾān 56:17 and 76:19 describe eternal boys serving in Paradise—meaning either disbelievers’ children are enslaved or pederasty is implied.',
    'Both smears are baseless. Shaykh al-Islām Ibn Taymiyya (Majmūʿ al-Fatāwā 4/312) and Ibn al-Qayyim affirm that claims identifying the wildān mukhalladūn as earthly children (of believers or disbelievers) have zero foundation: they are a distinct paradisiacal creation, whereas human children entering Paradise are raised in the perfected adult stature of Ādam (33 years old, 60 cubits tall). Meanwhile, all five chains claiming polytheists’ children serve believers are mursal and weak, and Ibn Kathīr confirms there is zero erotic connotation.',
    'Distinct creation, 33-year-old human stature & 5-chain refutation',
    [
      '01 · Ibn Taymiyya & Ibn al-Qayyim (Majmūʿ al-Fatāwā 4/312): Asked whether these youths are believers’ or unbelievers’ children, Ibn Taymiyya answered that such claims have no basis—they are beings created specifically for Paradise, while earthly human children enter Paradise in Ādam’s full stature (33 years old, 60 cubits tall). Ibn al-Qayyim endorsed this view.',
      '02 · Pure hospitality & linguistics (Ibn Kathīr & Abū ʿUbayda): Abū ʿUbayda and al-Farrāʾ define mukhalladūn as ageless permanence. Ibn Kathīr notes the “earrings” gloss has no authentic ḥadīth, “radiant faces” signifies luminous purity, service means hospitality (cups, food, flowers), and jewelry is worn by men too in Paradise (Q 22.23; 35.33).',
      '03 · All 5 chains of the “idolaters’ children” report fail: Even though al-Albānī listed it in al-Silsila al-Ṣaḥīḥa (3/452, no. 1468), all five routes (via Sinān b. Saʿd, Yazīd al-Raqāshī, al-Aʿmash, Mubārak b. Faḍāla/ʿAlī b. Zayd, and ʿAbbād b. Manṣūr) are mursal and marred by weak or mudallis transmitters.'
    ],
    ['Qurʾān 56:17; 76:19; 22:23; 35:33','Ibn Taymiyya, Majmūʿ al-Fatāwā 4/312','Ibn al-Qayyim; Ibn Kathīr; Abū ʿUbayda & al-Farrāʾ','al-Silsila al-Ṣaḥīḥa 1468 (5-chain critique)'],
    [kpTrapA,kpTrapB],
    {
      facts:[
        ['Majmūʿ 4/312','Created for Paradise; not earthly children'],
        ['Human Children','Enter Paradise aged 33, 60 cubits tall'],
        ['5-Chain Audit','All 5 routes are mursal & weak/mudallis'],
        ['Zero Eroticism','Hospitality only; Q 22:23 men wear pearls']
      ],
      quotes:[
        {by:'Ibn Taymiyya (Majmūʿ al-Fatāwā 4/312)',en:'The youths who circulate in Paradise were created for Paradise; they are not the children of the people of this world.',ref:'Majmūʿ al-Fatāwā 4/312'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Distortion',
          items:[
            'Claims they are enslaved children of disbelievers',
            'Relies on 5 weak mursal chains uncritically',
            'Reads pearls/radiance as sensual rather than hospitality'
          ]
        },
        right:{
          title:'Theological & Isnād Reality',
          items:[
            'Ibn Taymiyya & Ibn al-Qayyim: distinct paradisiacal creation',
            'Earthly children enter aged 33 in Ādam’s full form',
            'All 5 servitude chains fail rijāl scrutiny (Sinān, al-Raqāshī, etc.)'
          ]
        }
      }
    }
  ),{
    who:'Cite Ibn Taymiyya & audit all 5 chains',
    forkTitle:'Two follow-up claims they make',
    forkSub:'Audit al-Albānī 1468’s five chains or dismantle the “scattered pearls” insinuation'
  }),
  sum:'Ibn Taymiyya (Majmūʿ 4/312) and Ibn al-Qayyim confirm the wildān mukhalladūn are a distinct creation—not earthly children—while all five chains claiming polytheists’ children serve believers are mursal and weak.'
});

/* ============================================================================
   6. NEW Tactical Playbook card: islam/hadith/unseen/satan-passes-wind-adhan
      From satan_furzt (1319348835868217364)
   ============================================================================ */
const SF=AV2('#satan-furzt','1319348835868217364');

const sfTrapA=P(N(
  SF,
  'The Arabic word ḍurāṭ only means passing intestinal gas—saying it is an idiom or anger is a modern excuse!',
  'Classical Arabic lexicons—including Edward Lane’s Arabic-English Lexicon (p. 1786)—document multiple non-intestinal senses of ḍ-r-ṭ (thin hair/beards, contempt/scorn as in a report from ʿAlī, and proverbial flight in terror). Just like “bank” in English, context decides whether ḍurāṭ is literal or proverbial.',
  'Lexical range of ḍ-r-ṭ, Lane’s Lexicon (p. 1786) & the ʿAlī narration',
  [
    '01 · Multi-sense Arabic root ḍ-r-ṭ: In classical usage, ḍaraṭa/ḍurāṭ applies beyond bodily gas to escaping/fleeing, hair thinning or loss (aḍraṭ = thin-bearded man; ḍarṭāʾ = thin-eyebrowed woman), relief/release, and treating someone with scorn or contempt (as in a narration from ʿAlī b. Abī Ṭālib).',
    '02 · Lane’s Arabic-English Lexicon (p. 1786): Explicitly records proverbial uses of ḍ-r-ṭ (“in a proverb”)—confirming classical Arabs used the phrase idiomatically for fleeing in utter disgrace and panic, just as English says someone “soiled themselves and bolted” without literal intent.',
    '03 · Context decides meaning: Just as “bank” means either a riverbank or a financial institution depending on context, classical scholars weighed idiom and anger alongside literal panic.'
  ],
  ['Edward W. Lane, Arabic-English Lexicon, p. 1786 (s.v. ḍ-r-ṭ)','Narration of ʿAlī b. Abī Ṭālib (contempt/rage usage)'],
  [],
  {
    facts:[
      ['Lane p. 1786','Explicitly marks expressions as “in a proverb”'],
      ['ʿAlī Report','Used for scorn/contempt & angry departure'],
      ['Morphology','Aḍraṭ (thin beard) / ḍarṭāʾ (thin brows)'],
      ['Analogy','Like English “soiled himself and bolted”']
    ],
    quotes:[
      {by:'Lane’s Arabic-English Lexicon (p. 1786)',en:'Explicitly notes proverbial and idiomatic usages under the root ḍ-r-ṭ.',ref:'Arabic-English Lexicon, p. 1786'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Ḍurāṭ in Arabic can only ever mean literal flatulence—claiming idiom is a modern cop-out!',
  theyWho:'Watch out · if they say',
  who:'Show Lane’s Lexicon & lexical senses'
});

const sfTrapB=P(N(
  SF,
  'Didn’t Ibn Ḥajar take it literally, which makes Satan’s reaction sound crude and undignified?',
  'Even on Ibn Ḥajar’s literal view, the point is the exact opposite of comedy: it depicts Satan’s humiliating terror at the proclamation of tawḥīd—comparable to a terrified person losing bodily control—while two other major scholarly views read it as proverbial flight or enraged retreat (Mawdūdī).',
  'Three classical & modern scholarly positions compared',
  [
    '01 · Position 1 — Literal terror before tawḥīd (Ibn Ḥajar): Ibn Ḥajar explains that even if taken literally, it illustrates Satan’s extreme dread upon hearing the call to Allah’s Oneness—just as overwhelming fear causes loss of control, underscoring Satan’s utter humiliation rather than dignity.',
    '02 · Position 2 — Classical Arabic proverb (Majority & Lane p. 1786): Many scholars read the phrase figuratively: Satan flees in panicked, humiliating defeat when the adhān sounds.',
    '03 · Position 3 — Fleeing in rage/contempt (Abū l-Aʿlā Mawdūdī): Citing the narration of ʿAlī where ḍaraṭa signifies angry/contemptuous departure, Mawdūdī interprets Satan’s reaction as storming away in fury at the adhān, while regarding the proverbial-idiom reading as equally strong.'
  ],
  ['Ibn Ḥajar al-ʿAsqalānī, Fatḥ al-Bārī (on Bukhārī 608)','Abū l-Aʿlā Mawdūdī (Tafsīr / Ḥadīth commentary)','Lane’s Arabic-English Lexicon, p. 1786'],
  [],
  {
    facts:[
      ['Ibn Ḥajar','Literal = extreme panic at hearing tawḥīd'],
      ['Proverb View','Lane p. 1786: figurative panicked flight'],
      ['Mawdūdī','Storming off in rage, or proverbial idiom'],
      ['Shared Point','All 3 show Satan’s total defeat by adhān']
    ],
    quotes:[
      {by:'Ṣaḥīḥ al-Bukhārī 608 / Muslim 389',en:'When the call to prayer is pronounced, Satan turns his back and flees… so that he may not hear the call.',ref:'Ṣaḥīḥ al-Bukhārī 608'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Even Ibn Ḥajar takes it literally—why would a religious text describe Satan breaking wind?',
  theyWho:'Watch out · if they say',
  who:'Present all 3 scholarly readings'
});

card('islam/hadith/unseen/satan-passes-wind-adhan',{
  title:'“Satan flees breaking wind at the adhān” (Bukhārī 608)',
  k:'Ḥadīth · Arabic idiom · 3 scholarly views',
  blurb:'Lane’s Lexicon p. 1786 (“in a proverb”), ʿAlī report (scorn/rage), Ibn Ḥajar (terror at tawḥīd) & Mawdūdī.',
  claim:'A ṣaḥīḥ ḥadīth childishly claims Satan literally farts when he hears the call to prayer.',
  tree:P(N(
    SF,
    'Bukhārī 608 says Satan farts loudly whenever the adhān is called—that sounds absurd and crude.',
    'The Arabic root ḍ-r-ṭ has a wide lexical range—from thin hair and contempt (in a report from ʿAlī) to proverbial panicked flight (documented in Lane’s Lexicon, p. 1786). Classical and modern scholars offer three solid readings: (1) figurative proverb for fleeing in panicked defeat (Lane/majority), (2) fleeing in fury/scorn (Mawdūdī), or (3) Ibn Ḥajar’s literal view depicting Satan’s humiliating terror at the declaration of tawḥīd.',
    'Lexical range of ḍ-r-ṭ & three scholarly interpretations',
    [
      '01 · Context-dependent root ḍ-r-ṭ: Just as English “bank” means riverbank or financial institution, ḍaraṭa/ḍurāṭ denotes escaping, hair thinning (aḍraṭ/ḍarṭāʾ), release, scorn/contempt (narration of ʿAlī), or proverbial terror.',
      '02 · Position 1 & 2 (Idiom vs. Terror): Lane’s Arabic-English Lexicon (p. 1786) explicitly classifies idiomatic ḍ-r-ṭ expressions as proverbs—equivalent to saying someone panicked and bolted in disgrace—while Ibn Ḥajar notes even a literal reading symbolizes Satan’s extreme fear before tawḥīd.',
      '03 · Position 3 (Enraged departure — Mawdūdī): Drawing on ʿAlī’s narration where ḍaraṭa means departing angrily/contemptuously, Abū l-Aʿlā Mawdūdī explained Satan storms off in fury at the adhān, while considering the proverbial-idiom view equally strong.'
    ],
    ['Ṣaḥīḥ al-Bukhārī 608; Ṣaḥīḥ Muslim 389','Lane’s Arabic-English Lexicon, p. 1786','Ibn Ḥajar, Fatḥ al-Bārī; Mawdūdī; Narration of ʿAlī'],
    [sfTrapA,sfTrapB],
    {
      facts:[
        ['Lexical Range','Fleeing, hair loss, contempt, or flatulence'],
        ['Lane p. 1786','Explicitly attested “in a proverb”'],
        ['Ibn Ḥajar','Depicts Satan’s terror at tawḥīd'],
        ['Mawdūdī','Leaving in rage/scorn or proverbial idiom']
      ],
      quotes:[
        {by:'Ṣaḥīḥ Muslim 389 (Abū Hurayra)',en:'When the call to prayer is made, Satan takes to his heels… so that he does not hear the adhān.',ref:'Ṣaḥīḥ Muslim 389'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['1. Lexical Breadth','Arabic ḍ-r-ṭ covers fleeing, hair-thinning (aḍraṭ), contempt (ʿAlī), and proverbial panic.'],
          ['2. Proverbial Idiom (Lane p. 1786)','Like “soiling oneself in terror and bolting,” it portrays humiliating retreat, not comic relief.'],
          ['3. Ibn Ḥajar & Mawdūdī','Either literal terror before tawḥīd (Ibn Ḥajar) or furious departure (Mawdūdī)—both highlight Satan’s defeat.']
        ]
      }
    }
  ),{
    who:'Lay out the lexical range & 3 scholarly views',
    forkTitle:'Two follow-up pushes they make',
    forkSub:'Defend the Arabic lexicography or contrast all three scholarly positions'
  }),
  sum:'Far from crude comedy, Bukhārī 608 uses ḍurāṭ—documented in Lane’s Lexicon (p. 1786) as a proverb for panicked flight, read by Mawdūdī as enraged retreat, and by Ibn Ḥajar as humiliating terror at tawḥīd.'
});

/* ============================================================================
   7. NEW Tactical Playbook card: islam/morality/marriage/aisha-lord-hastens-desires
      From aisha_offenbart_schneller (1323018827696443505)
   ============================================================================ */
const AS=AV2('#aisha-sagt-allah-offenbart-schneller','1323018827696443505');

const asTrapA=P(N(
  AS,
  'Saying “your Lord hastens to fulfill your desires” (hawā) clearly shows ʿĀʾisha was sarcastically exposing fabricated revelations!',
  'Every piece of internal evidence refutes that spin: ʿĀʾisha herself narrated this ḥadīth, openly swore after her Ifk acquittal she would thank none but Allah, playfully dropped the Prophet’s name (“Lord of Abraham”) only when teasingly jealous (Bukhārī 5228), and al-Nawawī, al-Qāḍī ʿIyāḍ, Ibn Ḥajar, and Ibn Baṭṭāl confirm hawā here means contentment/approval, not carnal lust.',
  'ʿĀʾisha’s own faith, “Lord of Abraham” (Bukhārī 5228) & semantics of hawā',
  [
    '01 · Why “your Lord” was playful marital jealousy (Bukhārī 5228): The Prophet ﷺ once told ʿĀʾisha he knew when she was pleased (“by the Lord of Muḥammad”) vs. upset (“by the Lord of Abraham”), and she laughed: “Yes, I leave out nothing except your name.” Ibn Baṭṭāl (Sharḥ al-Bukhārī 7/333) notes the Prophet ﷺ tolerated wives’ natural jealousy with forbearance.',
    '02 · ʿĀʾisha herself transmitted it & refused to thank anyone but Allah: If ʿĀʾisha suspected fraud, she would never have transmitted the ḥadīth as part of the Sunnah—and when acquitted in the Ifk slander revelation, she refused her mother’s urging to thank the Prophet ﷺ, saying she would thank Allah alone (Bukhārī 4750), proving her absolute certainty that Allah sent the Qurʾān.',
    '03 · Neutral meaning of hawā (al-Nawawī 10/49; al-Qāḍī ʿIyāḍ; Ibn Ḥajar): Hawā means inclination or preference—neutral in itself (as in Badr: “the Messenger inclined toward Abū Bakr’s view”) and only blameworthy when qualified “without guidance from Allah” (Q 28.50). al-Nawawī (Sharḥ Muslim 10/49), al-Qāḍī ʿIyāḍ, and Ibn Ḥajar confirm it signifies divine latitude, love, and approval—not worldly lust.'
  ],
  ['Ṣaḥīḥ al-Bukhārī 4750, 4788, 5228','Qurʾān 28:50','al-Nawawī, Sharḥ Ṣaḥīḥ Muslim 10/49','Ibn Baṭṭāl, Sharḥ Ṣaḥīḥ al-Bukhārī 7/333','al-Qāḍī ʿIyāḍ & Ibn Ḥajar'],
  [],
  {
    facts:[
      ['Bukhārī 5228','“Lord of Abraham” = playful jealousy only'],
      ['Ifk Acquittal','Refused to thank anyone except Allah'],
      ['Hawā Meaning','Neutral preference; bad only sans guidance (28:50)'],
      ['al-Nawawī 10/49','Allah grants ease & latitude, not carnal lust']
    ],
    quotes:[
      {by:'ʿĀʾisha (Ṣaḥīḥ al-Bukhārī 5228)',en:'Yes, by Allah, O Messenger of Allah, I leave out nothing except your name.',ref:'Ṣaḥīḥ al-Bukhārī 5228'},
      {by:'Imām al-Nawawī (Sharḥ Muslim 10/49)',en:'It means that Allah makes matters easy for the Prophet ﷺ and grants him latitude in his affairs.',ref:'Sharḥ Ṣaḥīḥ Muslim 10/49'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Saying “your Lord” and “hastens to your desires” proves ʿĀʾisha mocked his revelations as self-serving!',
  theyWho:'Watch out · if they say',
  who:'Show Bukhārī 5228, Ifk & hawā'
});

const asTrapB=P(N(
  AS,
  'If she was a righteous prophet’s wife, she wouldn’t react emotionally toward revelation—and the Qurʾān wouldn’t give him special privileges!',
  'First, the Prophet ﷺ never even used the Q 33:50–51 exemptions (Ibn ʿAbbās & ʿĀʾisha testify he neither married a woman without mahr nor favored one wife’s nights), while Allah rebuked him in five sūras (Ibn al-Qayyim). Second, in Exodus 32:19–22 Moses shattered God’s own stone tablets in anger without committing blasphemy!',
  'Turn the tables · Restraint in Q 33.51, 5 Qurʾānic rebukes & Exodus 32.19–22',
  [
    '01 · He declined both exemptions (Ibn ʿAbbās; ʿUrwa ← ʿĀʾisha): Ibn ʿAbbās reported (graded ḥasan by Ibn Ḥajar) that no wife ever consummated marriage with him by offering herself without mahr (the Maymūna report is weak), and ʿĀʾisha herself testified he visited all wives daily without favoring one over another in time.',
    '02 · Five Qurʾānic rebukes & swollen feet (Badāʾiʿ al-Fawāʾid 4/7): Ibn al-Qayyim notes a self-serving fabricator would neither stand praying until his feet swelled nor write divine reprimands against himself in five sūras (al-Anfāl, al-Tawba, al-Aḥzāb, al-Taḥrīm, and ʿAbasa).',
    '03 · Bible parallel (Exodus 32.19–22): When Moses saw the golden calf, he grew furious and smashed the tablets of the Ten Commandments at the foot of the mountain. Emotional outbursts by devout believers (or even Moses) never prove disbelief in God.'
  ],
  ['Qurʾān 33:50–51; Sūras 8, 9, 33, 66, 80','Ibn ʿAbbās (graded ḥasan by Ibn Ḥajar); ʿUrwa ← ʿĀʾisha','Ibn al-Qayyim, Badāʾiʿ al-Fawāʾid 4/7','Exodus 32:19–22'],
  [],
  {
    facts:[
      ['Zero Exploitation','Never took a mahr-free offer; divided time fairly'],
      ['Badāʾiʿ 4/7','Allah rebuked the Prophet in 5 sūras'],
      ['Ascetic Devotion','Prayed nights until his feet swelled'],
      ['Exodus 32:19–22','Moses smashed God’s tablets in anger']
    ],
    quotes:[
      {by:'ʿĀʾisha (via ʿUrwa)',en:'The Messenger of Allah ﷺ did not prefer any one of us over another in dividing his stay among us.',ref:'Averroes 2 #aisha-sagt-allah-offenbart-schneller'},
      {by:'Ibn al-Qayyim (Badāʾiʿ al-Fawāʾid 4/7)',en:'Allah rebuked His Prophet in five places in the Qurʾān: al-Anfāl, al-Tawba, al-Aḥzāb, al-Taḥrīm, and ʿAbasa.',ref:'Badāʾiʿ al-Fawāʾid 4/7'}
    ]
  }
),{
  optWho:'Turn the tables · if they say',
  optLabel:'A true believer would never speak emotionally about revelation—and the Qurʾān just pampered him!',
  theyWho:'Turn the tables · if they say',
  who:'Show 5 rebukes & Moses in Exod 32'
});

card('islam/morality/marriage/aisha-lord-hastens-desires',{
  title:'ʿĀʾisha’s “Your Lord hastens to fulfill your desires” (Bukhārī 4788)',
  k:'Ḥadīth · Q 33:51 · Ibn al-Qayyim',
  blurb:'Unclaimed exemptions (Ibn ʿAbbās/ʿĀʾisha), 5 Qurʾānic rebukes (Badāʾiʿ 4/7), “Lord of Abraham” (5228), hawā semantics & Exodus 32:19.',
  claim:'Even ʿĀʾisha noticed Muḥammad was inventing convenient revelations whenever she said, “I see your Lord hastens to fulfill your desires.”',
  tree:P(N(
    AS,
    'When Qurʾān 33:51 was revealed, ʿĀʾisha sarcastically told Muḥammad, “I see your Lord hastens to fulfill your desires”—exposing him as the author!',
    'That misreads both marital banter and Arabic semantics. ʿĀʾisha herself narrated this ḥadīth, swore after the Ifk acquittal she would thank none but Allah, and used “your Lord / Lord of Abraham” only in affectionate jealousy (Bukhārī 5228). Moreover, the Prophet ﷺ never took advantage of Q 33:50–51’s exemptions, was rebuked by Allah in five sūras (Ibn al-Qayyim, Badāʾiʿ 4/7), and al-Nawawī confirms hawā here means divine latitude and contentment, not carnal lust.',
    'Playful marital jealousy, Prophet’s restraint & semantics of hawā',
    [
      '01 · Exemptions he never even used (Q 33.50–51): The verses permitted accepting a mahr-free marriage offer and flexible night-rotation. Yet Ibn ʿAbbās reports (graded ḥasan by Ibn Ḥajar) he never married a woman who offered herself, and ʿĀʾisha testifies he divided his nights equitably and visited every wife nearly daily.',
      '02 · Proof against self-authored revelation: He fasted and prayed at night until his feet swelled, and Ibn al-Qayyim (Badāʾiʿ al-Fawāʾid 4/7) notes Allah rebuked him in five sūras (8, 9, 33, 66, 80). ʿĀʾisha herself refused to thank him instead of Allah after the Ifk revelation and transmitted Bukhārī 4788—impossible if she doubted prophethood.',
      '03 · “Your Lord,” hawā & Exodus 32.19–22: Bukhārī 5228 shows ʿĀʾisha teased him by omitting his name when upset; al-Nawawī (10/49), al-Qāḍī ʿIyāḍ, Ibn Ḥajar, and Ibn Baṭṭāl (7/333) confirm hawā means divine ease/approval—and if emotion equals unbelief, what of Moses shattering God’s tablets in Exodus 32.19–22?'
    ],
    ['Ṣaḥīḥ al-Bukhārī 4750, 4788, 5228; Muslim 1464','Qurʾān 28:50; 33:50–51','Ibn al-Qayyim, Badāʾiʿ al-Fawāʾid 4/7','al-Nawawī, Sharḥ Muslim 10/49; Ibn Baṭṭāl 7/333','Exodus 32:19–22'],
    [asTrapA,asTrapB],
    {
      facts:[
        ['Bukhārī 5228','Omitting his name = playful jealousy, not doubt'],
        ['Self-Restraint','Kept equal visits; took zero mahr-free offers'],
        ['Badāʾiʿ 4/7','Rebuked by Allah in 5 different sūras'],
        ['Hawā (10/49)','Means divine ease & love, not lust']
      ],
      quotes:[
        {by:'Prophet Muḥammad ﷺ (Ṣaḥīḥ al-Bukhārī 5228)',en:'When you are pleased with me you say, “No, by the Lord of Muḥammad,” and when angry, “No, by the Lord of Abraham.”',ref:'Ṣaḥīḥ al-Bukhārī 5228'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Reading',
          items:[
            'Turns playful jealousy into skepticism of revelation',
            'Translates hawā narrowly as “carnal lust”',
            'Assumes Q 33:50–51 was exploited for personal indulgence'
          ]
        },
        right:{
          title:'Historical & Linguistic Facts',
          items:[
            'ʿĀʾisha narrated it herself & thanked Allah alone in Ifk',
            'al-Nawawī, ʿIyāḍ & Ibn Ḥajar: hawā = ease & approval (cf. 28:50)',
            'Declined exemptions; rebuked in 5 sūras (Badāʾiʿ 4/7)'
          ]
        }
      }
    }
  ),{
    who:'Explain the banter, restraint & hawā',
    forkTitle:'Two follow-up angles',
    forkSub:'Defuse the “sarcasm” claim or compare the 5 Qurʾānic rebukes & Exodus 32'
  }),
  sum:'ʿĀʾisha’s remark reflects tolerated marital banter (cf. Bukhārī 5228) and Allah’s latitude (hawā, al-Nawawī 10/49)—not doubt—since she narrated it herself, refused to thank anyone but Allah in Ifk, and the Prophet ﷺ never exploited Q 33:50–51.'
});

/* ============================================================================
   8. NEW Tactical Playbook card: islam/prophet/abrahams-three-lies-hadith
      From abraham_luege (1322549858661433396)
   ============================================================================ */
const AL=AV2('#abraham-lüge','1322549858661433396');

const alTrapA=P(N(
  AL,
  'The ḥadīth literally uses the word “lied” (kadhaba)—so Islam admits Prophet Abraham was a liar!',
  'As Ibn ʿAqīl explains (quoted by Ibn Ḥajar), reason requires messengers to be completely trustworthy in conveying revelation; therefore “lied” in this ḥadīth refers to tawriya (double-meaning statements that appear like falsehood from a hostile listener’s perspective), not bare sinful deception.',
  'Ibn ʿAqīl & Ibn Ḥajar on prophetic trustworthiness and tawriya',
  [
    '01 · Rational necessity of prophetic truthfulness (Ibn ʿAqīl): Reason demands a messenger be trustworthy and reliable so people can trust what he conveys from Allah; attributing actual deceit to a prophet would destroy the foundation of revelation.',
    '02 · Listener-perspective “lies” (tawriya): What Ibrāhīm spoke sounded like a lie to onlookers unaware of his true referent—yet each phrase carried a truthful, defensible meaning.',
    '03 · All three statements unpacked: (a) “I am ill” (Q 37.89)—heartsick at idolatry (or physically unwell) to avoid polytheistic festivals; (b) “The largest idol did it” (Q 21.63)—biting rhetorical irony inviting them to ask the silent statue; (c) “She is my sister”—literally his sister in Islam/faith to save Sarah from a tyrant.'
  ],
  ['Ṣaḥīḥ al-Bukhārī 3357; Ṣaḥīḥ Muslim 2371','Ibn Ḥajar, Fatḥ al-Bārī (quoting Ibn ʿAqīl)','Qurʾān 21:63; 37:89'],
  [],
  {
    facts:[
      ['Ibn ʿAqīl','Messengers must be utterly trustworthy'],
      ['Tawriya','True in intent; appears false only to onlookers'],
      ['“I am ill”','Heartsick at idolatry to avoid pagan rite'],
      ['“My sister”','True in faith (“sister in Islam”) under duress']
    ],
    quotes:[
      {by:'Prophet Ibrāhīm (Ṣaḥīḥ al-Bukhārī 3357)',en:'Say to him that you are my sister, for indeed you are my sister in Islam.',ref:'Ṣaḥīḥ al-Bukhārī 3357'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The ḥadīth literally says Abraham “lied” three times—you can’t explain away the word kadhaba!',
  theyWho:'Watch out · if they say',
  who:'Cite Ibn ʿAqīl on tawriya & ʿiṣma'
});

const alTrapB=P(N(
  AL,
  'If those three statements were lawful, why does the Intercession ḥadīth say Abraham will fear mentioning them on Judgment Day?',
  'Ibn ʿAqīl explains that out of awe before Allah’s majesty on the Day of Judgment, Ibrāhīm’s lofty prophetic station makes him humble even over equivocations that merely resembled lies—even though legally choosing the lesser evil (to avert idolatry or tyranny) is not blameworthy and can be obligatory.',
  'Prophetic scrupulousness (waraʿ) vs. the lesser-of-two-evils rule',
  [
    '01 · Lofty station & awe on Judgment Day: Out of extreme reverence on the Day of Resurrection, Ibrāhīm feels bashful even about equivocal statements that looked like lies to others—despite having acted solely for Allah’s sake and to protect his wife.',
    '02 · Choosing the lesser of two evils: Participating in pagan worship or letting a tyrant violate Sarah’s honor and life would be far greater evils; speaking an ambiguity (“I am ill,” “my sister in Islam”) to prevent idolatry or coercion is morally praiseworthy, even obligatory.',
    '03 · Not blameworthy falsehood: Calling these acts “lies” in broad Arabic usage does not classify them as sins; moral law permits—and sometimes mandates—strategic ambiguity to repel grave harm.'
  ],
  ['Ibn Ḥajar, Fatḥ al-Bārī (quoting Ibn ʿAqīl)','Ṣaḥīḥ al-Bukhārī 3357; Ṣaḥīḥ Muslim 2371'],
  [],
  {
    facts:[
      ['Judgment Day Fear','Stemming from awe & high rank, not sin'],
      ['Lesser Evil','Avoided pagan festival & tyrant’s seizure'],
      ['Moral Rule','Preventing shirk & tyranny can be obligatory']
    ],
    quotes:[
      {by:'Ibn ʿAqīl (via Ibn Ḥajar, Fatḥ al-Bārī)',en:'Explicit misstatement in such situations is permitted and may even be obligatory to avert the greater evil.',ref:'Fatḥ al-Bārī (Ibn ʿAqīl commentary)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'If Abraham wasn’t guilty of lying, why is he afraid of those three lies on the Day of Judgment?',
  theyWho:'Watch out · if they say',
  who:'Explain waraʿ & lesser-evil ethics'
});

card('islam/prophet/abrahams-three-lies-hadith',{
  title:'Did Prophet Ibrāhīm tell three “lies”? (Bukhārī 3357)',
  k:'Ḥadīth · Tawriya · Ibn ʿAqīl',
  blurb:'Ibn ʿAqīl (via Ibn Ḥajar): prophetic trustworthiness, tawriya in “I am ill / largest idol / sister in Islam,” Judgment-Day awe & lesser-evil ethics.',
  claim:'Bukhārī and Muslim teach that Prophet Abraham sinned by lying three times.',
  tree:P(N(
    AL,
    'Ṣaḥīḥ al-Bukhārī and Muslim state that Abraham lied three times—contradicting Islamic claims of prophetic sinlessness.',
    'The three statements in Bukhārī 3357 / Muslim 2371 were strategic double-meanings (tawriya) and rhetorical irony—not sinful deceit. As Ibn ʿAqīl explains in Fatḥ al-Bārī, reason forbids attributing real falsehood to a messenger; they appeared as lies only from the listeners’ surface viewpoint, while in reality averting idolatry and coercion as the lesser of two evils.',
    'Strategic double-meaning (tawriya), Ibn ʿAqīl & lesser-evil ethics',
    [
      '01 · The three occasions (Bukhārī 3357; Muslim 2371): Two were strictly for Allah’s sake—“I am ill” (Q 37.89) and “Rather, this largest idol did it” (Q 21.63)—and the third was telling a tyrant Sarah was his “sister,” clarifying to Sarah: “you are my sister in Islam.”',
      '02 · Ibn ʿAqīl’s rational rule (quoted by Ibn Ḥajar): A prophet must be utterly reliable so people can trust divine revelation; hence “lies” here means statements that appear false to an uncomprehending hearer while remaining true in higher intent (spiritual illness at shirk, ironical reductio against silent idols, sisterhood in faith).',
      '03 · Why not blameworthy: Choosing the lesser evil to avoid idolatrous festivals or save life and honor from a tyrant is praiseworthy and even obligatory—and Ibrāhīm’s fear on Judgment Day reflects his exalted humility before Allah, not moral guilt.'
    ],
    ['Ṣaḥīḥ al-Bukhārī 3357; Ṣaḥīḥ Muslim 2371','Qurʾān 21:63; 37:89','Ibn Ḥajar, Fatḥ al-Bārī (quoting Ibn ʿAqīl)'],
    [alTrapA,alTrapB],
    {
      facts:[
        ['Two for Allah','“I am ill” & “the largest idol did it”'],
        ['Third Occasion','“Sister in Islam” under tyrant threat'],
        ['Ibn ʿAqīl','Listener perception ≠ prophetic falsehood'],
        ['Ethical Rule','Averting shirk/tyranny = lesser-evil duty']
      ],
      quotes:[
        {by:'Abū Hurayra (Ṣaḥīḥ al-Bukhārī 3357)',en:'Ibrāhīm only “lied” on three occasions: two for the sake of Allah… and one regarding Sarah.',ref:'Ṣaḥīḥ al-Bukhārī 3357'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['1. “I am ill” (Q 37:89)','Heartsick at their idolatry (or unwell)—avoiding participation in pagan worship.'],
          ['2. “The largest idol did it” (Q 21:63)','Sharp irony (“ask them, if they can speak!”) exposing mute statues.'],
          ['3. “My sister” (Bukhārī 3357)','Literally “my sister in Islam,” protecting Sarah from a ruthless tyrant.']
        ]
      }
    }
  ),{
    who:'Explain tawriya & Ibn ʿAqīl’s rule',
    forkTitle:'Two follow-up challenges',
    forkSub:'Address the word kadhaba directly or explain Abraham’s Judgment-Day humility'
  }),
  sum:'As Ibn ʿAqīl explains in Fatḥ al-Bārī, Ibrāhīm’s three statements were truthful tawriya and irony used to avoid idolatry and tyranny—appearing as “lies” only to hostile onlookers, never violating prophetic trustworthiness.'
});

/* ============================================================================
   9. NEW Tactical Playbook card: islam/creed/attributes/did-the-prophet-see-allah
      From prophet_allah_gesehen (1329028479714463805)
   ============================================================================ */
const PA=AV2('#hat-der-prophet-saw-allah-gesehen','1329028479714463805');

const paTrapA=P(N(
  PA,
  'ʿĀʾisha says anyone claiming Muḥammad saw Allah is a liar (Bukhārī), yet Ibn ʿAbbās says he saw Him twice (Muslim 258)—so the Companions contradict each other!',
  'Ibn Taymiyya and Ibn al-Qayyim (Ijtimāʿ al-Juyūsh al-Islāmiyya 1/12) resolve the apparent tension completely: ʿĀʾisha and Abū Dharr (Muslim 261) denied ocular sight with physical eyes, whereas Ibn ʿAbbās affirmed spiritual “vision of the heart”—so both spoke the truth on different levels.',
  'Ibn Taymiyya & Ibn al-Qayyim harmonize ʿĀʾisha and Ibn ʿAbbās',
  [
    '01 · Ibn Taymiyya’s synthesis: There is zero contradiction between ʿĀʾisha and Ibn ʿAbbās—ʿĀʾisha denied physical sight with the eyes (citing Q 6.103), while Ibn ʿAbbās affirmed inner vision “with the heart” (bi-fuʾādihi).',
    '02 · Companion consensus (Ibn al-Qayyim, Ijtimāʿ al-Juyūsh 1/12): Citing ʿUthmān b. Saʿīd al-Dārimī, Ibn al-Qayyim reports consensus among the Companions that the Prophet ﷺ did not see Allah with his physical eyes during the Miʿrāj—noting even Ibn ʿAbbās never claimed ocular sight, and Abū Dharr’s ḥadīth (“He is veiled by Light,” Muslim 261) confirms no physical sight occurred.',
    '03 · Salaf consensus & Q 17.1: No mortal sees Allah with physical eyes in this world; clear ocular vision of Allah is promised to believers in the Hereafter (like seeing the sun or full moon), and Q 17.1 (al-Isrāʾ) mentions no physical sight of Allah.'
  ],
  ['Ṣaḥīḥ al-Bukhārī 3234, 4855, 7380 (6832); Aḥmad 24227','Ṣaḥīḥ Muslim 258, 261','Ibn al-Qayyim, Ijtimāʿ al-Juyūsh al-Islāmiyya 1/12 (citing al-Dārimī)','Ibn Taymiyya; Qurʾān 6:103; 17:1'],
  [],
  {
    facts:[
      ['ʿĀʾisha & Abū Dharr','No ocular sight with physical eyes (Q 6:103)'],
      ['Ibn ʿAbbās (258)','Vision “with his heart,” not physical eyes'],
      ['al-Dārimī / Qayyim','Companion consensus against ocular sight'],
      ['Hereafter Promise','Believers see Allah clearly on Judgment Day']
    ],
    quotes:[
      {by:'Abū Dharr (Ṣaḥīḥ Muslim 261)',en:'I asked: Did you see your Lord? He replied: Light—how could I see Him?',ref:'Ṣaḥīḥ Muslim 261'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'ʿĀʾisha and Ibn ʿAbbās flatly contradict each other on whether Muḥammad saw Allah!',
  theyWho:'Watch out · if they say',
  who:'Show eye-sight vs. heart-vision harmony'
});

const paTrapB=P(N(
  PA,
  'Doesn’t Qurʾān 53:11–12 (“The heart did not lie about what it saw”) prove he saw Allah directly?',
  'Notice the verse itself names “the heart” (al-fuʾād)—supporting Ibn ʿAbbās’s reading of heart-vision rather than physical eyes—while major exegetes such as Ibn ʿĀshūr and Tafsīr al-Ṭanṭāwī explain the vision in Sūrat al-Najm refers to seeing Angel Gabriel in his true form.',
  'Exegesis of Qurʾān 53.11–12 (heart-vision vs. Gabriel)',
  [
    '01 · The wording of Q 53.11–12: “The heart did not lie about what it saw.” Far from describing ocular sight of God, the text explicitly emphasizes inner perception of the heart—matching Ibn ʿAbbās’s statement in Ṣaḥīḥ Muslim 258.',
    '02 · Gabriel reading (Ibn ʿĀshūr & Tafsīr al-Ṭanṭāwī): Commentators including Ibn ʿĀshūr and Muḥammad Sayyid Ṭanṭāwī explain that the figure seen on the high horizon and near Sidrat al-Muntahā in Q 53.11–18 is Angel Gabriel (Jibrīl), matching ʿĀʾisha’s explicit explanation in Bukhārī.'
  ],
  ['Qurʾān 53:11–18','Ṣaḥīḥ Muslim 258; Ṣaḥīḥ al-Bukhārī 3234, 4855','Tafsīr Ibn ʿĀshūr; Tafsīr al-Ṭanṭāwī'],
  [],
  {
    facts:[
      ['Q 53:11','Specifically mentions “the heart” (al-fuʾād)'],
      ['Ibn ʿAbbās','Inner vision of the heart, not ocular'],
      ['Ibn ʿĀshūr/Ṭanṭāwī','Refers to seeing Angel Gabriel in his true form']
    ],
    quotes:[
      {by:'ʿĀʾisha (Ṣaḥīḥ al-Bukhārī 7380 / 6832)',en:'Whoever tells you that Muḥammad saw his Lord is lying; Allah says: Vision perceives Him not.',ref:'Ṣaḥīḥ al-Bukhārī (Kitāb al-Tawḥīd)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Qurʾān 53:11–12 proves the Prophet directly saw Allah during his heavenly ascent!',
  theyWho:'Watch out · if they say',
  who:'Show Q 53:11 (“heart”) & Gabriel tafsīr'
});

card('islam/creed/attributes/did-the-prophet-see-allah',{
  title:'Did the Prophet ﷺ see Allah during the Miʿrāj?',
  k:'ʿAqīda · Ruʾyat Allāh · Bukhārī & Muslim',
  blurb:'ʿĀʾisha (6:103), Abū Dharr (Muslim 261 “veil of Light”), Ibn ʿAbbās (“with his heart”, 258), Ibn Taymiyya, Ibn al-Qayyim & Ibn ʿĀshūr.',
  claim:'Islam contradicts itself because some traditions deny anyone can see Allah while others say Muḥammad saw Him on the Miʿrāj.',
  tree:P(N(
    PA,
    'ʿĀʾisha says nobody can see Allah (citing Q 6:103), yet Ibn ʿAbbās says Muḥammad saw Allah twice—a clear Islamic contradiction.',
    'There is no contradiction: classical scholars (Ibn Taymiyya; Ibn al-Qayyim, Ijtimāʿ al-Juyūsh 1/12) and the Salaf agree that no human sees Allah with physical eyes in this worldly life—as confirmed by ʿĀʾisha (Bukhārī 7380/4855/3234; Aḥmad 24227), Abū Dharr (Muslim 261: “veiled by Light”), Q 6:103, and Q 17:1—whereas Ibn ʿAbbās (Muslim 258) spoke of spiritual “vision of the heart” (and Ibn ʿĀshūr/al-Ṭanṭāwī refer Q 53:11–12 to Gabriel).',
    'Ocular sight (denied) vs. vision of the heart & Hereafter promise',
    [
      '01 · Ocular sight denied by ʿĀʾisha & Abū Dharr: ʿĀʾisha cited Q 6.103 (“Vision perceives Him not,” Bukhārī 3234, 4855, 7380 / 6832; Aḥmad 24227), and when Abū Dharr asked the Prophet ﷺ directly if he saw his Lord, he answered: “Light—how could I see Him?” (Muslim 261).',
      '02 · Harmonizing Ibn ʿAbbās (Muslim 258): Ibn ʿAbbās interpreted Q 53.11–12 as seeing “with his heart” (or, per Ibn ʿĀshūr and al-Ṭanṭāwī, seeing Angel Gabriel). Ibn Taymiyya and Ibn al-Qayyim (Ijtimāʿ al-Juyūsh 1/12, citing al-Dārimī) prove Companion consensus denied physical ocular sight.',
      '03 · Salaf consensus on worldly vs. Hereafter vision: No one sees Allah physically in this world (Q 17.1 omits any ocular vision of Allah), while believers are promised clear ocular vision of Allah on the Day of Resurrection (as clear as the sun or moon).'
    ],
    ['Qurʾān 6:103; 17:1; 53:11–12','Ṣaḥīḥ al-Bukhārī 3234, 4855, 7380 (6832); Aḥmad 24227','Ṣaḥīḥ Muslim 258, 261','Ibn al-Qayyim, Ijtimāʿ al-Juyūsh 1/12; Ibn Taymiyya','Tafsīr al-Ṭanṭāwī & Ibn ʿĀshūr'],
    [paTrapA,paTrapB],
    {
      facts:[
        ['Bukhārī 7380','ʿĀʾisha cites Q 6:103 against physical sight'],
        ['Muslim 261','Prophet ﷺ: “Light—how could I see Him?”'],
        ['Muslim 258','Ibn ʿAbbās: vision “with the heart” only'],
        ['Salaf Consensus','Ocular sight reserved for Day of Judgment']
      ],
      quotes:[
        {by:'Prophet Muḥammad ﷺ (Ṣaḥīḥ Muslim 261)',en:'He is veiled by Light; how could I see Him?',ref:'Ṣaḥīḥ Muslim 261'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Physical Ocular Sight (al-Baṣar)',
          items:[
            'Explicitly denied by ʿĀʾisha (Bukhārī 7380) & Q 6:103',
            'Ruled out by Abū Dharr’s ḥadīth (Muslim 261: “Light”)',
            'Rejected in this world by Companion & Salaf consensus'
          ]
        },
        right:{
          title:'Heart Vision & Hereafter Sight',
          items:[
            'Ibn ʿAbbās (Muslim 258): spiritual “vision of the heart”',
            'Ibn ʿĀshūr & al-Ṭanṭāwī: Q 53:11–12 refers to Gabriel',
            'Ocular sight of Allah promised in Paradise on Judgment Day'
          ]
        }
      }
    }
  ),{
    who:'Distinguish ocular sight from heart-vision',
    forkTitle:'Two follow-up objections',
    forkSub:'Harmonize ʿĀʾisha with Ibn ʿAbbās or clarify Qurʾān 53:11–12'
  }),
  sum:'ʿĀʾisha, Abū Dharr (Muslim 261), and Salaf consensus reject physical ocular sight of Allah in this world (Q 6:103), harmonizing cleanly with Ibn ʿAbbās’s “vision of the heart” (Muslim 258) and reserving ocular sight for the Hereafter.'
});

/* ============================================================================
   10. NEW Tactical Playbook card: islam/creed/attributes/calling-god-father-vs-yhwh
       From gott_vater_yhwh (1315053410109620335)
   ============================================================================ */
const GV=AV2('#gott-vater-nennen-yahwe-yhwe','1315053410109620335');

const gvTrapA=P(N(
  GV,
  '1 John 2:22–23 calls anyone who denies “the Father and the Son” an antichrist—and Abraham or OT metaphors aside, Muslims still refuse to call Allah Father!',
  'Sam Shamoun confuses denying an identity with rejecting a vocabulary title: 1 John 2:22–23 condemns denying Jesus is the Messiah, not avoiding the word “Father.” Shamoun’s own standard proves this—he calls Unitarians, Jehovah’s Witnesses, and Mormons “antichrists” even though they all call God “Father”!',
  '1 John 2.22–23 identity vs. title, tawqīfī names & OT/NT metaphors',
  [
    '01 · Shamoun’s self-refutation on 1 John 2.22–23: The verse defines the antichrist as one who denies Jesus is the Christ/Messiah and rejects the Father-Son identity. Yet Shamoun labels Jehovah’s Witnesses, Mormons, and Unitarians “antichrists” even though they call God “Father”—proving his real test is Nicene homoousios, not the title “Father.”',
    '02 · Tawqīfī naming vs. semantic metaphor: Islam forbids inventing divine names Allah did not reveal for Himself (Abraham and Hosea never called God “Father” either—were they not prophets?). Semantically, Islam affirms God as Creator, Sustainer, and Compassionate Lord (Deut 32.6; al-Rāzī & Ibn Kathīr note Allah is more merciful than a mother), while rejecting ontological father-son generation.',
    '03 · OT vs. NT metaphor shift: In the OT, “Father” is relatively rare and collective for Israel—Creator/Potter (Deut 32.6; Isa 64.8; Mal 2.10), Redeemer (Isa 63.16; Jer 31.9; Ps 103.13), and Discipliner (Prov 3.12). Only the NT widens and individualizes it (Matt 6.26–32; 7.9–11; Acts 17.28–29; Eph 3.14–15).'
  ],
  ['1 John 2:22–23','Deut 32:6; Isa 63:16; 64:8; Jer 31:9; Mal 2:10; Ps 103:13; Prov 3:12','Matt 6:26–32; 7:9–11; Acts 17:28–29; Eph 3:14–15','Tafsīr al-Rāzī & Ibn Kathīr'],
  [],
  {
    facts:[
      ['1 John 2:22','Concerns Messiahship, not the word “Father”'],
      ['Unitarians/JWs','Use “Father” yet Shamoun still excludes them'],
      ['OT Metaphor','Creator/Potter/Redeemer of Israel (Deut 32:6)'],
      ['al-Rāzī/Kathīr','Allah’s care exceeds a mother’s mercy']
    ],
    quotes:[
      {by:'Deuteronomy 32:6',en:'Is He not your Father, who created you, who made you and established you?',ref:'Deuteronomy 32:6'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'1 John 2:22–23 labels Muslims antichrists for refusing to call God “Father”!',
  theyWho:'Watch out · if they say',
  who:'Expose Shamoun’s title/identity confusion'
});

const gvTrapB=P(N(
  GV,
  'God would never prohibit a true descriptive title just because pagans misused it—and why is YHWH missing from the Qurʾān too?',
  'The Bible itself did the exact same thing with “Baal”: even though Isaiah 54:5 calls God Israel’s “husband/baʿal,” Hosea 2:16 explicitly forbids calling God Baʿalī because of pagan idolatry (confirmed by Jerome, Benson, and Ellicott), and scribes even altered David’s son Beeliada (1 Chr 14:7) to Eliada (2 Sam 5:16; 1 Chr 3:8)! Meanwhile, YHWH never appears in Esther or the entire New Testament either.',
  'Turn the tables · Hosea 2.16 bans “Baal,” Beeliada → Eliada & missing YHWH',
  [
    '01 · God abrogated “Baal” due to idolatry (Isaiah 54.5 vs. Hosea 2.16): Hebrew baʿal meant “owner, master, husband” (used for God in Isa 54.5). Yet in Hosea 2.16 [17], God forbids calling Him Baʿalī and commands Īshī (“my Husband”). Church Father Jerome (Commentary on Hosea 2.16), Benson, and Ellicott explain the title was dropped because idolatry polluted it—the exact reason Islam avoids “Father.”',
    '02 · Scribal edit “Beeliada” → “Eliada” (1 Chr 14.7 vs. 2 Sam 5.16): David’s son was originally named Beeliada (Bəʿelyādāʿ, “Baal knows”), which scribes deliberately changed to Eliada (“El/God knows”) in 2 Sam 5:16 and 1 Chr 3:8 to avoid the tainted Baal element.',
    '03 · “YHWH is missing from the Qurʾān”: Neither the Book of Esther nor the entire New Testament ever writes YHWH! And if Christians say “Hallelujah” preserves “Yah” (= YHWH), then Qurʾānic prophetic names (Yaḥyā, Zakariyyā, Ilyās) preserve the exact same Semitic theophoric root.'
  ],
  ['Isaiah 54:5; Hosea 2:16 (17)','Jerome, Commentary on Hosea 2:16; Benson & Ellicott Commentaries','1 Chronicles 14:7 vs. 2 Samuel 5:16 & 1 Chronicles 3:8','Book of Esther & New Testament (absence of YHWH)'],
  [],
  {
    facts:[
      ['Isa 54:5 vs. Hos 2:16','God once called “Baʿal,” then forbade it'],
      ['Jerome (Hos 2:16)','Polluted by idolatry → replace with Īshī'],
      ['1 Chr 14:7 → 3:8','Scribes changed Beeliada to Eliada'],
      ['YHWH Omission','Also absent in Esther & the entire NT']
    ],
    quotes:[
      {by:'Jerome (Commentary on Hosea 2:16)',en:'The name [Baal] was defiled by idolatry and therefore should no longer be used for God.',ref:'Commentary on Hosea 2:16'}
    ]
  }
),{
  optWho:'Turn the tables · if they say',
  optLabel:'God wouldn’t drop a title because of pagan misuse—plus the Qurʾān never even mentions YHWH!',
  theyWho:'Turn the tables · if they say',
  who:'Cite Hosea 2:16, Jerome & Beeliada'
});

card('islam/creed/attributes/calling-god-father-vs-yhwh',{
  title:'Why Islam doesn’t call Allah “Father” (or use YHWH) — & the Baal parallel',
  k:'ʿAqīda · 1 John 2:22 · Hosea 2:16',
  blurb:'Shamoun’s 1 John 2:22 fallacy, tawqīfī names vs. metaphor (Deut 32:6, al-Rāzī), Jerome on Hosea 2:16 (“Baal”), Beeliada → Eliada & YHWH in Esther/NT.',
  claim:'Refusing to call Allah “Father” proves Islam rejects the God of Abraham (1 John 2:22–23), and omitting YHWH proves discontinuity.',
  tree:P(N(
    GV,
    'Muslims deny the Father and the Son—making them antichrists under 1 John 2:22–23—and the Qurʾān never calls God Father or YHWH!',
    'Islam affirms the reality behind metaphorical “Father” (Creator, Sustainer, Compassionate Lord—as in Deut 32:6, al-Rāzī, and Ibn Kathīr) while rejecting ontological Trinitarian generation and declining to innovate unrevealed names. Crucially, the Bible itself abrogated valid divine titles like “Baal” (Isa 54:5 → Hosea 2:16; Jerome on Hosea) and altered “Beeliada” to “Eliada” (1 Chr 14:7 vs. 3:8) once idolatry tainted them—and neither Esther nor the New Testament ever writes YHWH!',
    'Identity vs. title, Biblical metaphors & why God dropped “Baal”',
    [
      '01 · 1 John 2.22–23 & Shamoun’s self-contradiction: The epistle targets denying Jesus is the Messiah, not avoiding the English/Arabic title “Father” (Shamoun still calls Unitarians and JWs “antichrists” despite using “Father”). Muslims affirm Jesus is the Messiah (al-Masīḥ) and God’s compassionate care (al-Rāzī; Ibn Kathīr), while Abraham and Hosea never called God “Father” either.',
      '02 · OT collective metaphor vs. NT shift: OT “Father” denotes Creator/Redeemer of Israel (Deut 32.6; Isa 63.16; 64.8; Jer 31.9; Mal 2.10; Ps 103.13; Prov 3.12), while the NT universalizes/individualizes it (Matt 6.26–32; Acts 17.28–29; Eph 3.14–15). Islam affirms the Creator/Sustainer sense, rejecting biological/eternal sonship.',
      '03 · Biblical precedent for tainted titles (Jerome on Hosea 2.16): Although Hebrew baʿal meant “husband/master” (Isa 54.5), God banned Baʿalī in Hosea 2.16 due to pagan associations (Jerome, Benson, Ellicott), and scribes changed Beeliada (1 Chr 14.7) to Eliada (2 Sam 5.16; 1 Chr 3.8). Likewise, YHWH is absent from Esther and the entire NT, while Qurʾānic prophetic names preserve the same Yah root.'
    ],
    ['1 John 2:22–23; Deut 32:6; Isa 54:5; 63:16; 64:8; Hos 2:16','1 Chr 14:7 vs. 2 Sam 5:16 & 1 Chr 3:8','Jerome, Commentary on Hosea 2:16; Benson & Ellicott','Tafsīr al-Rāzī & Ibn Kathīr'],
    [gvTrapA,gvTrapB],
    {
      facts:[
        ['Identity ≠ Title','Muslims affirm Messiahship & divine care'],
        ['Hosea 2:16','God banned “Baʿalī” due to pagan misuse'],
        ['Beeliada → Eliada','Scribes scrubbed Baal from David’s son'],
        ['Missing YHWH','Absent from Esther & the entire NT too']
      ],
      quotes:[
        {by:'Hosea 2:16 (ESV)',en:'In that day, declares the Lord, you will call me “My Husband,” and no longer will you call me “My Baal.”',ref:'Hosea 2:16'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Polemical Double Standard',
          items:[
            'Claims avoiding “Father” makes Muslims antichrists (1 John 2:22)',
            'Ignores Unitarians/JWs who say “Father” yet are rejected',
            'Attacks Qurʾān for lacking YHWH while ignoring Esther & the NT'
          ]
        },
        right:{
          title:'Biblical & Patristic Precedent',
          items:[
            'Isa 54:5 → Hos 2:16: God forbade “Baʿalī” once idolized (Jerome)',
            '1 Chr 14:7 → 3:8: Beeliada edited to Eliada for the same reason',
            'Esther & the entire NT never use YHWH; Islam honors Creator-care'
          ]
        }
      }
    }
  ),{
    who:'Separate identity from title & cite Hosea 2:16',
    forkTitle:'Two follow-up moves',
    forkSub:'Expose the 1 John 2:22 fallacy or turn the tables with Baal & YHWH'
  }),
  sum:'Islam affirms God’s metaphorical fatherly care (Creator/Sustainer) while rejecting Trinitarian generation and unrevealed names—mirroring how God forbade “Baʿalī” in Hosea 2:16 (Jerome) and scribes changed Beeliada to Eliada once idolatry corrupted the term.'
});

/* ============================================================================
   11. ENRICHMENT (add): christianity/jesus/d-dr-jesus-is-the-word-and-spirit-of-allah
       From jesus_wort_geist (1315043520519606302)
   ============================================================================ */
const JWG=AV2('#jesus-wort-gottes-und-geist-gottes','1315043520519606302');
add('christianity/jesus/d-dr-jesus-is-the-word-and-spirit-of-allah',P(N(
  JWG,
  'Even in the New Testament, calling Jesus “the Word” means John’s pre-existent divine Logos—so the Qurʾān’s Kalimatullāh echoes Christian deity!',
  'Even within Christianity, the Synoptic Gospels (Matthew, Mark, Luke) do not use John’s pre-existent Logos theology—Luke 1:38 (“Let it be to me according to your word”) uses “word” for God’s powerful creative decree, matching Q 3:45/3:59/4:171 and Ṣaḥīḥ Muslim 28a, while classical tafsīr (Ibn Kathīr, al-Qurṭubī, al-Baghawī) and Q 45:13 (“all from Him”) confirm “Word” and “Spirit” are created honors, never divine essence.',
  'Synoptic “Word” (Luke 1.38), Classical Tafsīr & Q 45.13 (“from Him”)',
  [
    '01 · Synoptic “Word” vs. John’s Logos (Luke 1.38 & Ṣaḥīḥ Muslim 28a): Unlike John 1’s pre-existent hypostasis, the Synoptics treat God’s “word” in the Old Testament sense as His creative command and promise. When Mary says in Luke 1.38, “Let it be to me according to your word,” she submits to God’s creative decree—mirroring Q 3.59 (“Kun!”) and Ṣaḥīḥ Muslim 28a (“His word which He conveyed to Maryam”).',
    '02 · Classical tafsīr meanings (Ibn Kathīr, al-Qurṭubī & al-Baghawī): On Q 3.45 and 4.171, Ibn Kathīr explains “Word” signifies creation by Allah’s command “Be!” without a father; al-Baghawī emphasizes direct divine agency beyond natural reproduction; and al-Qurṭubī adds both the “glad tidings” (message delivered by Gabriel) and an honorific title marking Jesus’s unique status—like Khālid b. al-Walīd being titled “Sword of Allah.”',
    '03 · “From Him” (minhu) in Q 45.13 & anti-deification context: Qurʾān 45.13 declares Allah subjected everything in the heavens and earth, “all from Him (minhu)”—proving “from Him” denotes created origin and honor, never a part of God’s essence, especially inside Q 4.171 which explicitly rebukes Christians for deifying Jesus.'
  ],
  ['Luke 1:38 (Synoptics vs. John 1)','Qurʾān 3:45, 3:59; 4:171; 45:13','Ṣaḥīḥ Muslim 28a','Tafsīr Ibn Kathīr, al-Qurṭubī & al-Baghawī'],
  [],
  {
    facts:[
      ['Luke 1:38','Synoptic “word” = God’s creative decree, not John 1'],
      ['Tafsīr al-Qurṭubī','“Glad tidings” via Gabriel & honorific title'],
      ['Tafsīr al-Baghawī','Highlights fatherless creation by command'],
      ['Qurʾān 45:13','Everything in creation is “from Him” (minhu)']
    ],
    quotes:[
      {by:'Luke 1:38 (Mary)',en:'Let it be to me according to your word.',ref:'Luke 1:38 (cf. Ṣaḥīḥ Muslim 28a)'},
      {by:'Qurʾān 45:13',en:'And He has subjected to you whatever is in the heavens and whatever is on the earth—all from Him.',ref:'Qurʾān 45:13'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Johannine Logos Claim',
        items:[
          'Imports John 1’s pre-existent Logos back into Q 4:171',
          'Treats “from Him” (minhu) as sharing divine substance',
          'Ignores Synoptic usage of “word” as creative decree'
        ]
      },
      right:{
        title:'Synoptics, Tafsīr & Q 45:13',
        items:[
          'Luke 1:38 matches Islamic view: God’s creative command & promise',
          'Ibn Kathīr, al-Qurṭubī & al-Baghawī: Kun! + glad tidings + honor title',
          'Q 45:13 proves all creation is “from Him” (like “Sword of Allah”)'
        ]
      }
    }
  }
),{
  optWho:'Or compare Synoptics & classical tafsīr · if they say',
  optLabel:'Calling Jesus “the Word” echoes Christian Logos theology of a pre-existent divine person!',
  theyWho:'Or compare Synoptics & classical tafsīr · if they say',
  who:'Cite Luke 1:38, Tafsīr & Q 45:13'
}));

})();
