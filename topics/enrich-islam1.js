/* Enrichment block 1 (Islam) — 2026-11-21.
   Rebuilds thin Round-3 Islam stubs with their full Discord arguments, branches, primary quotes & verdicts:
   - islam/general/d-ia-islamic-objections: t-did-allah-fail-to-protect-his-prophet, t-false-incarnation-analogies,
     t-did-allah-start-christianity, t-non-muslim-exorcisms
   - islam/hadith/d-ia-introduction-to-the-sciences-of-hadith (0 cards → 6 rich key-point cards)
   - christianity/islam-vs/d-ia-islamic-dilemma (Jarḥ wa al-Taʿdīl: ʿĀṣim, Muqātil, Shāfiʿī, Ibn Taymiyya)
     + add() al-Jurjānī 5:13 syntax & ʿAbdullāh ibn Salām Occam's razor → christianity/islam-vs/d-dr-the-islamic-dilemma
   - islam/morality/marriage/aisha/d-dr-aisha-would-wipe-semen-from-the-prophets-clothes
   - islam/creed/d-ia-swearing-by-other-than-allah
   Also patches missing verdicts (sum) on remaining NOSUM Islam cards without clobbering curated-media content. */
(()=>{
const IA=(n,id)=>({credit:'Islamic Apologetics · #'+n,link:'https://discord.com/channels/1514269918978248796/'+id});
const DR=(n,id)=>({credit:'Deenresponds · #'+n,link:'https://discord.com/channels/1328402309297733662/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('enrich-islam1: no card',key); };
const setSum=(key,sum)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(a){ if(!a.sum) a.sum=sum; return; } } };

const IO='islam/general/d-ia-islamic-objections/';
const IOC=IA('islamic-objections','1546510945633701980');

/* 1. Did Allah fail to protect His Prophet ﷺ? (5:67) */
card(IO+'t-did-allah-fail-to-protect-his-prophet',{
 title:"Did Allah fail to protect His Prophet ﷺ? (5:67)",k:"Qurʾān 5:67",blurb:"Uḥud, magic, Khaybar's poison — and what Allah actually promised.",
 claim:"Allah promised to protect His Prophet ﷺ from the people (5:67), yet he was wounded at Uḥud, affected by magic, and ate poisoned meat at Khaybar.",
 tree:N(IOC,
  "Allah promised “Allah will protect you from the people” (5:67), yet the ḥadīth say he was hurt at Uḥud, affected by magic, and harmed by poisoned meat at Khaybar.",
  "Allah promised protection from anything that would end his mission before it was delivered. His enemies tried to kill him to stop the message; Allah kept him safe until revelation was complete (“Today I have perfected your religion”, 5:3).",
  "What 5:67 actually promises",
  ["The strongest scholarly view (summarised from Aḥmad ibn ʿAbd al-ʿAzīz al-Qaṣīr, al-Aḥādīth al-Mushkilah al-Wāridah fī Tafsīr al-Qurʾān al-Karīm, pp. 137–149): Allah promised to protect the Prophet ﷺ from anything that would cut short his mission before its time.",
   "Scholars also note two supplementary points: (1) protection during the delivery of the message, ending once his duty was completed; (2) protection of the heart and faith (though the primary context of 5:67 is hostile harm from people)."],
  ["Qurʾān 5:67; 5:3","Aḥmad al-Qaṣīr, al-Aḥādīth al-Mushkilah pp. 137–149","https://islamicdiscourse.substack.com/p/did-allah-fail-to-protect-his-prophet"],
  [
   N(IOC,"What about his injuries at Uḥud?",
    "Most commentators and ḥadīth scholars give two answers: Uḥud happened before 5:67 was revealed, and the promise specifically covers being killed or prevented from delivering the message, not every battle wound.",
    "Uḥud and 5:67",
    ["Sūrat al-Māʾida is among the very last sūras revealed in Madīna, years after the Battle of Uḥud (3 AH).",
     "Even aside from chronology, the promise is protection against assassination and being silenced before conveying revelation — he survived Uḥud and continued his mission."],
    ["Qurʾān 5:67","Aḥmad al-Qaṣīr pp. 137–149"]),
   N(IOC,"What about the magic (siḥr) incident?",
    "It was a brief physical illness — something possible for prophets that never damages prophethood — and it affected only his body, never his heart, beliefs, mind, or delivery of revelation.",
    "Magic did not touch revelation",
    ["Prophets can experience ordinary physical ailments (like Prophet Ayyūb) without impairing their character or mission.",
     "The effect was limited to his limbs/body, not his intellect, creed, or preaching — the exact thing 5:67 guaranteed.",
     "Note: a few later voices claimed the siḥr narration is fabricated, but al-Qaṣīr notes that view is weak and should be rejected in favour of the authentic reports properly understood."],
    ["Bukhārī 5763","Aḥmad al-Qaṣīr pp. 137–149"]),
   N(IOC,"What about the poisoned sheep at Khaybar — didn't he die from it?",
    "No contradiction: (1) the promise lasted until his prophetic mission was complete (5:3); (2) it meant he would not be killed while overpowered in subjugation; (3) a third view holds the report attributing his death years later directly to the poison isn't decisive; and (4) dying as a martyr after completing his mission is the highest honour.",
    "Khaybar and martyrdom after 5:3",
    ["He survived Khaybar (7 AH) for over three more years, conquered Mecca, performed the Farewell Pilgrimage, and delivered the entire Qurʾān.",
     "Only after Allah revealed “Today I have perfected for you your religion” (5:3) did he pass away — attaining the rank of martyrdom (shahāda), the noblest death, with zero failure of the promise in 5:67."],
    ["Qurʾān 5:3; 5:67","Aḥmad al-Qaṣīr pp. 137–149"])
  ],
  {quote:{ar:"يَا أَيُّهَا الرَّسُولُ بَلِّغْ مَا أُنزِلَ إِلَيْكَ مِن رَّبِّكَ ۖ وَاللَّهُ يَعْصِمُكَ مِنَ النَّاسِ",en:"“O Messenger, convey that which has been revealed to you from your Lord… And Allah will protect you from the people.” — al-Māʾida 5:67"}}),
 sum:"5:67 promised protection from anything stopping his mission before completion: Uḥud predated it, the magic never touched revelation, and he passed away years after Khaybar only once 5:3 declared the religion complete."});

/* 2. False incarnation analogies */
card(IO+'t-false-incarnation-analogies',{
 title:"“Muslims believe in incarnation too”",k:"Theology · Attributes",blurb:"Why neither the uncreated Qurʾān nor its intercession resembles the Incarnation.",
 claim:"Muslims say the Qurʾān is uncreated yet printed on paper and will intercede like a person, so Muslims accept a kind of incarnation too.",
 tree:N(IOC,
  "Muslims say the Qurʾān is uncreated yet has created pages and ink — so if the Qurʾān has two natures, why reject the Incarnation of Jesus?",
  "Allah's Speech is an uncreated attribute, communicated through created paper, ink, and human voices. Writing the words on paper doesn't make the paper divine or put Allah's essence inside a book — whereas Christianity claims God's divine essence actually became a human being.",
  "Uncreated speech vs created medium",
  ["Allah possesses eternal attributes — Knowledge, Sight, Speech — belonging to His nature; He never exists without them, yet they are distinct from one another. Because Allah is uncreated, His Speech (the Qurʾān) is uncreated, originating from His eternal Knowledge (2:120, 2:145, 3:61) and becoming speech when He spoke it.",
   "The words of the Qurʾān as divine speech/information are uncreated. The paper, ink, and human vocal cords that carry them are created. Calling a written muṣḥaf “the Qurʾān” means it conveys that speech — copying it onto a page never turns paper into a divine being.",
   "In the Christian Incarnation, by contrast, God's divine nature is said to unite with and become a man. Muslims never claim Allah's attribute of Speech became paper and ink. The analogy completely fails."],
  ["Qurʾān 2:120, 2:145, 3:61","https://islamicdiscourse.substack.com/p/addressing-ill-informed-islamic-analogies"],
  [
   N(IOC,"Isn't that just saying Allah knew the Qurʾān eternally — like He knew all creation?",
    "No. Allah eternally knew all creation, yet creation is not His speech. What makes the Qurʾān uncreated speech is that its meanings come directly from Allah's Knowledge and Allah Himself uttered it.",
    "The “Bears eat honey” illustration",
    ["Imagine a person says “Bears eat honey.” Before speaking, the information existed in his knowledge; when uttered, it became his speech. Nobody claims a bear and honey were physically inside him because the sentence came from his knowledge.",
     "When humans speak, both the meanings (from created knowledge) and the utterance are created. The Qurʾān is unique: its meanings come directly from Allah's eternal Knowledge and Allah spoke it — uncreated in both meaning and speech."],
    ["Islamic Discourse: Addressing Ill-Informed Islamic Analogies"]),
   N(IOC,"What about ḥadīth saying the Qurʾān will come alive and intercede on Judgement Day?",
    "“Qurʾān” can refer to Allah's uncreated speech, the written muṣḥaf, or a believer's recitation. What intercedes is the recitation and its reward — just as fasting intercedes and death is brought as a ram, without any divine attribute becoming incarnate.",
    "Recitation, fasting and death embodied",
    ["The reports cited: “Recite the Qurʾān, for on the Day of Resurrection it will come as an intercessor for its companions (aṣḥāb)” (Muslim, Abū Umāma); Sūrat al-Mulk (30 verses) intercedes for its reader (Abū Dāwūd, Abū Hurayra); the Qurʾān comes “like a pale man” saying “I kept you awake at night…” (Ibn Mājah, Burayda).",
     "Calling them its aṣḥāb (“owners/companions”) points to what reciters practised and carried: their recitation and its reward.",
     "The companion ḥadīth proves it: “Fasting and the Qurʾān will intercede for the servant on the Day of Resurrection. Fasting will say: ‘I deprived him of food and desires by day,’ and the Qurʾān will say: ‘I deprived him of sleep by night’” (Aḥmad; al-Albānī: ṣaḥīḥ, Ṣaḥīḥ al-Jāmiʿ 3882).",
     "Fasting is a human deed, not a divine being. Likewise Allah brings death in the form of a black-and-white ram and has it slaughtered between Paradise and Hell (Bukhārī, Abū Saʿīd al-Khudrī). Allah embodying abstract deeds or states has nothing to do with an attribute of God incarnating in flesh."],
    ["Muslim 804","Abū Dāwūd 1400","Ibn Mājah 3781","Aḥmad / Ṣaḥīḥ al-Jāmiʿ 3882","Bukhārī 4730"])
  ]),
 sum:"Paper and human voices carry Allah's speech without becoming divine, and what intercedes on Judgement Day is the believer's recitation and reward (like fasting) — neither resembles God incarnating as a man."});

/* 3. Did Allah start Christianity? */
card(IO+'t-did-allah-start-christianity',{
 title:"Did Allah start Christianity?",k:"Crucifixion · 4:157",blurb:"Assuming someone was crucified never entails Trinity, incarnation or atonement.",
 claim:"If Allah made it appear that Jesus was crucified (4:157), then Allah is responsible for creating Christianity.",
 tree:N(IOC,
  "If Allah made it appear that Jesus was crucified, then Allah deceived people and started Christianity.",
  "That assumes believing Jesus died on a cross logically leads to the Trinity, the Incarnation, blood atonement, and abolishing the Mosaic Law. None of those follow at all — at most people would think a prophet was killed unjustly, like earlier prophets.",
  "Why the theological leap doesn't follow",
  ["Based on Bassam Zawadi, “Did Allah Start Christianity?”: even if someone thought Jesus died as a martyr, why would that entail that (1) he is God, (2) God is a Trinity, (3) his death transfers human sins, or (4) the Mosaic laws followed by prophets for centuries are now obsolete?",
   "None of those doctrines follow from a crucifixion. Many prophets before Jesus were persecuted and killed without anyone turning them into a triune god. Later Christian doctrines arose from human exaggeration, philosophical speculation, and innovation — responsibility lies with those who invented them."],
  ["Qurʾān 4:157","Bassam Zawadi: Did Allah Start Christianity?","https://islamicdiscourse.substack.com/p/did-allah-start-christianity"],
  [
   N(IOC,"Still, didn't the appearance set the whole chain of error in motion?",
    "Setting off a misunderstanding does not make you morally responsible for other people's wild, unwarranted choices — just as a prankster isn't responsible if his target chooses to wreck his car and abandon his family.",
    "The lottery prank analogy",
    ["Suppose someone pranks a man into thinking he won the lottery, and the man insults his family, leaves his wife, smashes his car, quits his job, and cuts off his friends. When he discovers it was a prank, is the prankster morally guilty of all those choices? No — the man chose them himself.",
     "Likewise, even if people wrongly believed Jesus was crucified, that never justified inventing the Trinity, inherited sin, vicarious atonement, or worshipping a prophet as God."],
    ["Bassam Zawadi","Call to Monotheism: Response to Nabeel Qureshi"]),
   N(IOC,"Doesn't that still leave God responsible for allowing confusion?",
    "Turn the tables: Christians believe Jesus was God incarnate, yet nowhere in the New Testament does he plainly say “I am God, worship me” — leaving centuries of Unitarians and early sects denying his divinity.",
    "Turn the tables on Christianity",
    ["By the critic's own standard, one could ask Christians: why didn't God make Jesus's divinity explicit and unmistakable in the Gospels? Why allow centuries of fierce disputes over the Trinity, incarnation, and salvation, with Biblical Unitarians still arguing from the text that he never claimed to be God?",
     "Christians answer that people remain responsible for rejecting the truth when sufficient evidence exists. Muslims give the exact same answer — the real issue isn't divine deception, but humans building massive unfounded dogmas onto an event."],
    ["https://www.call-to-monotheism.com/whose_religion_teaches_an_incompetent_messiah__group_of_disciples_and_god__a_response_to_nabeel_qureshi"])
  ]),
 sum:"Believing a prophet was killed never implies he is God, a Trinity, or an atonement sacrifice; humans invented those doctrines, and the exact same objection hits Christianity harder since Jesus never states “I am God, worship me.”"});

/* 4. Non-Muslim exorcisms */
card(IO+'t-non-muslim-exorcisms',{
 title:"How do Christian exorcisms work?",k:"Unseen · Dr. Bilal Philips",blurb:"Why jinn leave during shirk rituals, and what Justin Martyr admitted.",
 claim:"Christian exorcisms in Jesus's name seem to work — if Islam is true, how can non-Muslim exorcisms succeed?",
 tree:N(IOC,
  "Christians have cast out demons in Jesus's name for centuries. If Christianity is false, why do those exorcisms work?",
  "Based on Dr. Bilal Philips's doctoral dissertation (Exorcism in Islam, pp. 203–210): possessing jinn are evil devils whose ultimate goal is leading humans into shirk. When an exorcist invokes anyone besides Allah, the jinn leave voluntarily — putting on a show so the exorcist and witnesses stay convinced that worshipping Jesus or idols works.",
  "Why evil jinn leave during shirk rituals",
  ["Islam accepts the genuine exorcisms of Prophet Jesus (ʿalayhi al-salām) and his true disciples as part of the Mosaic/prophetic tradition — performed by the permission and in the name of God alone (not in Jesus's own name as later Gospels frame it).",
   "Modern exorcists who invoke Jesus, saints, or even Muḥammad ﷺ are classed with pagan exorcists who call on false gods or sorcery. Because possessing devils are wicked, leaving when shirk is performed achieves Satan's primary oath: misleading humans into associating partners with Allah.",
   "Qurʾān 7:16–17: Satan swore to sit in wait on Allah's straight path from front, back, right, and left. Qurʾān 15:39: “I will surely beautify the path of error for them on earth.” Qurʾān 38:82: “By Your might, I will surely mislead them all.”"],
  ["Dr. Bilal Philips, Exorcism in Islam pp. 203–210","Qurʾān 7:16–17; 15:39; 38:82"],
  [
   N(IOC,"Why do possessed people visibly react to crosses or holy water?",
    "The possessing spirit stages the reaction to trick the exorcist and onlookers into believing those objects and Christ's divinity have power over it — leaving a lasting impression that cements shirk.",
    "Staged reactions vs true ruqyah",
    ["Whether the exit is quick or theatrical, when there is an audience the jinn will put on a dramatic display to validate the exorcist's creed.",
     "In Islamic ruqyah, where Allah alone is called upon with no partners, the evil jinn are genuinely overpowered and driven out by the force of truth. In other cases, devils either leave willingly to promote shirk, or leave because drugs, electroshock, or physical abuse make the host's body unbearable."],
    ["Dr. Bilal Philips, Exorcism in Islam pp. 203–210"]),
   N(IOC,"Did early Christians themselves recognise exorcism in God's name alone?",
    "Yes — Justin Martyr (2nd century) explicitly admits to Trypho the Jew that exorcising demons in the name of “the God of Abraham, the God of Isaac, and the God of Jacob” works.",
    "Justin Martyr, Dialogue with Trypho 85",
    ["Justin Martyr (Dialogue with Trypho 85): “Though you exorcise any demon in the name of any of those who were amongst you — either kings, or righteous men, or prophets, or patriarchs — it will not be subject to you. But if any of you exorcise it in the name of the God of Abraham, and the God of Isaac, and the God of Jacob, it will perhaps be subject to you.”",
     "Philips notes this early testimony confirms that calling upon the one God alone was recognised as an effective method and became central even in early Christian exorcism by the start of the 4th century. True power comes from Allah alone, never from created beings or symbols."],
    ["Justin Martyr, Dialogue with Trypho 85","Dr. Bilal Philips, Exorcism in Islam pp. 203–210"])
  ]),
 sum:"Possessing devils leave voluntarily during shirk rituals to validate false worship (7:16–17, 15:39), whereas true power belongs to Allah alone — as even Justin Martyr acknowledged regarding the God of Abraham, Isaac, and Jacob."});

/* 5. How ḥadīth are checked — rebuild 0-card explainer into a rich 6-card explainer */
cur.ex('islam/hadith/d-ia-introduction-to-the-sciences-of-hadith',{
 title:"How ḥadīth are checked",k:"ʿUlūm al-Ḥadīth",blurb:"Isnād, matn, chain defects, rijāl and final grades — Shaykh Suhayb Hasan's primer.",
 intro:"Every ḥadīth has two parts: the chain of narrators (isnād) and the text (matn). Even a text that sounds wise or pious is not attributed to the Prophet ﷺ unless its chain passes strict historical and biographical verification.",
 visual:{kind:'steps',items:[
  {h:"Source",sub:"Marfūʿ (Prophet ﷺ), mawqūf (Companion) or maqṭūʿ (Successor).",p:["Scholars first identify who the statement actually stops at before attributing anything to the Prophet ﷺ."]},
  {h:"Chain",sub:"Connected or broken (mursal, munqaṭiʿ, muʿḍal), and how many routes (mutawātir vs āḥād).",p:["Every link between teacher and student must be verified for meeting and unbroken transmission."]},
  {h:"Narrators & Flaws",sub:"Integrity (ʿadl), precision (ḍābiṭ), plus hidden defects (shādhdh, munkar, mudraj, maʿlūl).",p:["Biographical dictionaries (rijāl) track every narrator's honesty, memory, teachers, and errors."]},
  {h:"Final Grade",sub:"Ṣaḥīḥ, ḥasan, ḍaʿīf or mawḍūʿ (fabricated).",p:["Only chains meeting all five conditions reach ṣaḥīḥ; severely weak or fabricated chains cannot be rescued."]}
 ]},
 cards:[
  ["Two parts: isnād and matn","A good-sounding text never substitutes for a reliable chain.",["Every ḥadīth consists of the isnād (chain of transmitters) and the matn (actual wording). Scholars examine both: an inspiring text with a broken or fabricated chain is rejected as a prophetic report."]],
  ["Classified by source","Marfūʿ, mawqūf, and maqṭūʿ.",["Marfūʿ: traced directly to the Prophet ﷺ. Mawqūf: stops at a Companion (Ṣaḥābī). Maqṭūʿ: stops at a Successor (Tābiʿī) or later scholar. Critics routinely confuse mawqūf/maqṭūʿ opinions with prophetic commands."]],
  ["Connected vs broken chains","Mursal, munqaṭiʿ, muʿḍal — and mutawātir vs āḥād.",["A chain must be continuous (muttaṣil). Breaks are classified precisely: mursal (a Successor skips the Companion), munqaṭiʿ (a missing link in the middle), and muʿḍal (two or more consecutive missing links). Scholars also count independent routes at each generation: mutawātir (mass-transmitted) vs āḥād (solitary/few chains)."]],
  ["Hidden defects (ʿilal)","Shādhdh, munkar, mudraj, muḍṭarib, maqlūb, maʿlūl.",["Even an outwardly clean chain is checked for subtle flaws: shādhdh (a reliable narrator contradicting stronger narrators), munkar (a weak narrator contradicting reliable ones), mudraj (a narrator's gloss interpolated into the text), muḍṭarib (conflicting versions), maqlūb (reversed names/clauses), and maʿlūl (hidden structural defect)."]],
  ["Grades & corroboration rules","Ṣaḥīḥ, ḥasan, ḍaʿīf, mawḍūʿ — and what can be strengthened.",["Final grades are ṣaḥīḥ (sound), ḥasan (good), ḍaʿīf (weak), and mawḍūʿ (fabricated). Multiple independent mildly weak chains can corroborate one another up to ḥasan li-ghayrihi, whereas severely weak or fabricated chains can never elevate each other."]],
  ["Rijāl & famous weak sayings","How the science filters out popular slogans.",["Through the science of rijāl (narrator biographies), scholars cross-checked tens of thousands of transmitters for truthfulness (ʿadāla) and memory precision (ḍabṭ). Shaykh Suhayb Hasan's appendix grades 26 widely quoted sayings — showing, for example, that “Seek knowledge even in China” is weak and “Love of one's homeland is part of faith” is fabricated."]]
 ],
 sum:"Ḥadīth criticism evaluates source, chain continuity, narrator integrity and hidden defects (ʿilal) — filtering out even popular pious sayings when their chains fail.",
 credit:"Islamic Apologetics · #introduction-to-the-sciences-of-hadith (Shaykh Suhayb Hasan)",
 link:"https://discord.com/channels/1514269918978248796/1549166358946783303"});

/* 6. Using a narrator weak in ḥadīth for tafsīr / qirāʾāt (Jarḥ wa al-Taʿdīl) + fold the 2 Islamic Dilemma proofs into the main Islamic Dilemma card */
const ID=IA('islamic-dilemma','1514367539126337668');
card('islam/general/d-ia-islamic-dilemma',{
 title:"Using a narrator weak in ḥadīth for tafsīr or qirāʾāt",k:"Jarḥ wa al-Taʿdīl",blurb:"Imām ʿĀṣim and Muqātil ibn Sulaymān: weakness in one discipline does not void authority in another.",
 claim:"Muslims cite Muqātil ibn Sulaymān's tafsīr while ḥadīth scholars called him weak — that's hypocritical cherry-picking.",
 tree:N(ID,
  "You cite Muqātil ibn Sulaymān in tafsīr even though ḥadīth critics rejected him as weak. Isn't that a double standard?",
  "In the science of Jarḥ wa al-Taʿdīl, a scholar can be weak in one discipline and an undisputed authority in another. Imām ʿĀṣim — the primary authority for the most widespread Qurʾān recitation on earth — was graded weak in ḥadīth memory, yet no one rejects his recitation.",
  "Discipline-specific grading: Imām ʿĀṣim & Muqātil",
  ["Imām ʿĀṣim (d. 127 AH) is the master transmitter of the most widely recited qirāʾa of the Qurʾān (Qirāʾat ʿĀṣim via Ḥafṣ), yet ḥadīth masters classified his ḥadīth memory as weak (ḍaʿīf). No scholar discards his Qurʾān recitation because of his ḥadīth grade.",
   "Muqātil ibn Sulaymān follows the exact same principle: he was dismissed in ḥadīth because he did not preserve chains (asānīd) precisely, yet he was recognised as a foundational pioneer of Qurʾānic exegesis (tafsīr).",
   "Imām Muḥammad ibn Idrīs al-Shāfiʿī stated explicitly: “People are entirely dependent upon Muqātil ibn Sulaymān for tafsīr” (al-Lālakāʾī, Sharḥ Uṣūl Iʿtiqād Ahl al-Sunna 3/412; al-Dhahabī, Siyar Aʿlām al-Nubalāʾ 7/203).",
   "Shaykh al-Islām Ibn Taymiyya: “Allah raised a people who were masters in tafsīr though they had weakness in ḥadīth, such as Muqātil ibn Sulaymān and al-Kalbī… Their opinions and explanations are cited and relied upon in the sciences of the Qurʾān, even if their transmissions of ḥadīth are set aside” (Muqaddimah fī Uṣūl al-Tafsīr, p. 34)."],
  ["al-Lālakāʾī, Sharḥ Uṣūl Iʿtiqād 3/412","al-Dhahabī, Siyar Aʿlām al-Nubalāʾ 7/203","Ibn Taymiyya, Muqaddimah fī Uṣūl al-Tafsīr 34"]),
 sum:"Jarḥ wa al-Taʿdīl grades competence by field: Imām ʿĀṣim is an undisputed master of qirāʾāt despite ḥadīth weakness, and al-Shāfiʿī and Ibn Taymiyya explicitly validate Muqātil's tafsīr while setting aside his ḥadīth chains."});

/* Fold the two missing Islamic Dilemma arguments from IA #islamic-dilemma into the main Islamic Dilemma map */
add('christianity/islam-vs/d-dr-islamic-dilemma',N(ID,
 "Qurʾān 5:13 (“yuḥarrifūna al-kalim ʿan mawāḍiʿihi”) only means misinterpreting words in speech, not physically altering manuscripts.",
 "Classical Arabic lexicons (including al-Jurjānī) and the syntax of 5:13 explicitly allow physical textual displacement: ʿan (“away from”) + mawāḍiʿ (“physical places/spots”) with the Form II verb yuḥarrifūna literally describes lifting words out of their tangible places on the page and substituting others.",
 "Al-Jurjānī & the spatial syntax of 5:13",
 ["In classical Arabic, the preposition ʿan (عَنْ, “away from”) paired with the plural noun mawāḍiʿ (مَوَاضِع, “physical positions/places”) operates in a concrete spatial framework of displacing an object from its designated spot.",
  "When the Form II transitive verb yuḥarrifūna (يُحَرِّفُونَ, “they alter/distort”) acts on al-kalim (الْكَلِمَ, “the words”), the construction naturally permits physical scribal manipulation of the words and letters of the Torah itself — not merely oral misinterpretation."],
 ["Qurʾān 5:13","al-Jurjānī"],
 [],{quote:{ar:"يُحَرِّفُونَ الْكَلِمَ عَن مَّوَاضِعِهِ",en:"“They distort/displace the words from their [proper] places.” — al-Māʾida 5:13"}}));

add('christianity/islam-vs/d-dr-islamic-dilemma',N(ID,
 "Early Muslims believed the 7th-century Hebrew and Greek biblical manuscripts were 100% verbatim intact.",
 "The conversion of ʿAbdullāh ibn Salām — Medina's Grand Rabbi (Bukhārī 3938) who possessed the Hebrew Torah (Bukhārī 7542) — refutes that by Occam's razor. His Hebrew Exodus 32 explicitly blamed Aaron for making the Golden Calf, whereas Qurʾān 20:85–88 declares Aaron innocent.",
 "ʿAbdullāh ibn Salām and Occam's razor",
 ["Premise 1: The “Islamic Dilemma” claims early Muslims held 7th-century biblical manuscripts to be 100% physically intact and verbatim uncorrupted (Option A).",
  "Premise 2: ʿAbdullāh ibn Salām — explicitly testified by Medina's Jews as their foremost scholar (Bukhārī 3938) — possessed a Hebrew Torah (Bukhārī 7542) that structurally contradicted foundational Qurʾānic history on well-known events, such as Exodus 32 naming Aaron as the builder of the Golden Calf versus Sūrat Ṭā-Hā 20:85–88 declaring Aaron innocent.",
  "Premise 3: By Occam's razor, a leading rabbi could not be ignorant of Exodus 32; he knew the contradiction directly.",
  "Premise 4: Yet he made a costly social defection to Islam — cognitively impossible if he thought his own verbatim-intact scripture was being falsified by a new prophet. Therefore early Islam never held Option A: it understood contemporary manuscripts as humanly altered (Option B), with the Qurʾān acting as the corrective criterion (muhaymin, 5:48)."],
 ["Bukhārī 3938, 7542","Exodus 32","Qurʾān 20:85–88; 5:48"]));

/* 7. ʿĀʾisha cleaning the Prophet's ﷺ garment */
card('islam/morality/marriage/aisha/d-dr-aisha-would-wipe-semen-from-the-prophets-clothes',{
 title:"ʿĀʾisha cleaning the Prophet's ﷺ garment",k:"Fiqh · Purification",blurb:"A normal marital duty narrated to teach jurists the ruling on ritual purity.",
 claim:"Reports of ʿĀʾisha washing or scraping semen from the Prophet's ﷺ clothes are crude and shameful.",
 tree:N(DR('aisha-would-wipe-semen-from-the-prophets-clothes','1368221703267680286'),
  "Why would ḥadīth record ʿĀʾisha wiping semen off the Prophet's ﷺ garment? Isn't that inappropriate?",
  "A wife helping clean her husband's garments is completely normal household care. Semen can get on clothing from a wet dream or residual drops after intimacy — and the report was preserved strictly so jurists would know the legal ruling on prayer purity.",
  "Why ʿĀʾisha narrated it",
  ["A married couple sharing household tasks — including washing garments — is ordinary family life, not something scandalous.",
   "The legal point: jurists needed to know whether semen (manī) is ritually impure (najis) like urine, or pure (ṭāhir) such that wiping/scraping dried traces suffices for praying in the garment without washing every trace invisible (the Shāfiʿī/Ḥanbalī ruling of purity vs Ḥanafī/Mālikī washing). That is why the Mother of the Believers taught the ummah the ruling openly."],
  ["Bukhārī 229–232","Muslim 288–290"]),
 sum:"Normal spousal laundry narrated openly by ʿĀʾisha to establish the fiqh ruling on ritual purity and praying in a cleaned garment."});

/* 8. Swearing by other than Allah */
cur.ex('islam/creed/d-ia-swearing-by-other-than-allah',{
 title:"Swearing by other than Allah",k:"Tawḥīd · Shirk",blurb:"Why oaths by created things are forbidden in both Sunni and classical Shīʿī sources.",
 intro:"In Islam, taking an oath (qasam) elevates the thing sworn by. Swearing by anything other than Allah — a prophet, the Kaʿba, a parent, or a saint — is forbidden as a form of minor shirk (or major shirk if one venerates it like Allah).",
 visual:{kind:'compare',
  left:{title:"Permitted oaths",items:[
   {h:"By Allah or His attributes",sub:"“By Allah”, “By the Lord of the Kaʿba”, “By Allah's might”.",p:["An oath may only be sworn by Allah Himself, His Names, or His Attributes."]}
  ]},
  right:{title:"Forbidden oaths",items:[
   {h:"By any created thing",sub:"Prophets, parents, the Kaʿba, imāms, honour or life.",p:["Sunan al-Tirmidhī 1535: “Whoever swears by other than Allah has committed disbelief or shirk.”"]}
  ]}},
 cards:[
  ["Sunan al-Tirmidhī 1535","Explicit prophetic prohibition.",["The Prophet ﷺ said: “Whoever swears by other than Allah has committed disbelief or shirk” (Sunan al-Tirmidhī 1535, graded ṣaḥīḥ). Scholars explain this as minor shirk unless the person believes the created thing holds divine greatness."]],
  ["Uṣūl min al-Kāfī (Vol. 7, Book 7, Ch. 4 & 14)","Even classical Shīʿī collections record the prohibition.",["The channel cites al-Kāfī Vol. 7, Book 7, Chapters 4 & 14 alongside Sunan al-Tirmidhī 1535 — showing the principle against swearing by other than Allah is documented across classical sources."]],
  ["Further study PDFs (in channel)","Two treatises on understanding shirk.",["The channel attaches Understanding Shirk.pdf (360 KB) and The Origins of Shirk by Shaykh al-Albānī (102 KB) for deeper reading (to extract later)."]]
 ],
 sum:"Oaths belong to Allah alone: swearing by any created thing is forbidden as shirk (Tirmidhī 1535; al-Kāfī 7/7).",
 credit:"Islamic Apologetics · #swearing-by-other-than-allah",
 link:"https://discord.com/channels/1514269918978248796/1545144857918439574"});

/* 9. Fill missing verdicts (sum) on remaining NOSUM Islam cards without clobbering their existing body */
setSum('islam/quran/d-ia-quranic-language/t-he',"Arabic has no gender-neutral singular pronoun: huwa (“He”) is the grammatical default for an ungendered being, while Allah explicitly states “Nothing is like unto Him” (42:11).");
setSum('islam/quran/d-ia-quranic-language/t-know',"“Until We know” means until Allah's eternal knowledge becomes manifest in lived reality so people are judged by deeds they actually performed, not that Allah learns something new.");
setSum('islam/hadith/d-dr-kill-all-dogs',"The temporary order addressed a specific rabies/aggressive-dog outbreak in Madīna and was later restricted; guarding, herding and hunting dogs remain lawful, and kindness to a thirsty dog brings forgiveness.");
setSum('islam/quran/d-dr-quran-verses-come-as-birds',"Sūras appearing like clouds or birds on Judgement Day represent the reward of reciting them, not the Qurʾān being a separate divine person.");
setSum('islam/hadith/d-dr-is-allah-time',"“I am Time (al-Dahr)” means Allah controls time and turns night and day — forbidding Arabs from cursing fate — not that Allah is identical to physical time.");
setSum('islam/hadith/d-dr-the-prophet-sitting-on-the-arsh',"Al-Maqām al-Maḥmūd (17:79) is the Station of Great Intercession; even the classical Atharī opinion about sitting beside the Throne is an honour granted by Allah, never divinity or shirk.");
setSum('islam/hadith/d-dr-jews-turned-into-rats',"The Prophet ﷺ initially wondered about a vanished Israelite group before receiving revelation clarifying that transformed peoples leave no offspring (Muslim 2663) — so rats are not transformed Jews.");
setSum('islam/quran/preservation/d-dr-goat-ate-verses',"The “goat ate the page” report is weak (Muḥammad ibn Isḥāq narrating ʿanʿana; contradicted by stronger chains), and the Qurʾān was preserved by mass memorisation, not a single loose sheet.");
setSum('islam/hadith/d-ia-contributed-refutations/t-sahi-h-al-bukha-ri-5038-forgetting-the-qur-an',"Bukhārī 5038 concerns a verse already revealed, taught and memorised by Companions — proving mass preservation rather than lost revelation; Ibn Ḥajar notes the ban on saying “I forgot” warns against worldly neglect.");
setSum('islam/quran/d-ia-quran-surahs/t-4-169-hell-is-not-eternal',"Mainstream Sunni creed affirms that Hell is eternal for disbelievers (4:169, 33:65, 72:23), while sinful believers are eventually brought out by Allah's mercy.");
})();
