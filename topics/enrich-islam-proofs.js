/* Enrichment block (Islam Proofs, Prophecies, Manuscripts, Hadith & General) — 2026-11-21.
   Enriches all 15 cards from islam-rest.json using each entry's exact origKey:
   1. islam/quran/preservation/d-ia-quranic-manuscripts/t-codex-wetzstein-ii-1913
   2. christianity/bible/d-ia-general-refutations/t-a-comprehensive-proving-hadith-are-reliable
   3. islam/proofs/d-ia-prophecies-1/t-siege-of-baghdad-prophecy
   4. islam/proofs/d-ia-prophecies-1/t-prophecy-about-the-pharoah
   5. islam/proofs/d-ia-prophecies-1/t-bedouins-competing-in-construction
   6. islam/proofs/d-ia-prophecies-1/t-the-riskiest-prophecy-of-surah-masad
   7. islam/proofs/d-ia-prophecies-1/t-dhi-al-khalasa
   8. islam/proofs/d-ia-miracles
   9. islam/proofs/d-ia-proof-of-the-quran
   10. islam/proofs/d-ia-historical-proofs/t-the-prophet-and-his-people-are-prophesied
   11. islam/proofs/d-ia-historical-proofs/t-the-quranic-engagement-with-jewish-tradition
   12. islam/proofs/d-ia-historical-proofs/t-the-quranic-engagement-with-egyptian-hieroglyphics
   13. islam/proofs/d-ia-other-proofs
   14. islam/general/d-ia-response-library
   15. islam/general/reading-list */
(()=>{
const IA=(n,id)=>({credit:'Islamic Apologetics · #'+n,link:'https://discord.com/channels/1514269918978248796/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

/* 1. Codex Wetzstein II 1913 */
cur.ex('islam/quran/preservation/d-ia-quranic-manuscripts/t-codex-wetzstein-ii-1913',{
 title:"Codex Wetzstein II 1913",k:"Manuscripts · 1st Century AH",blurb:"216 surviving folios (85% of the Qurʾān) dated by Corpus Coranicum to 660–710 CE.",
 intro:"One of the earliest and most complete codices of the Qurʾān survives in Berlin as Codex Wetzstein II 1913. Published by Corpus Coranicum, it preserves roughly 85% of the entire Qurʾān from a period when Companions of the Prophet ﷺ were still alive.",
 visual:{kind:'steps',items:[
  ["Dating: 660–710 CE (39–91 AH)","Corpus Coranicum's primary published dating — within the first Islamic century.",
   ["Primary publication: Corpus Coranicum (who published the codex) dates it in their catalogue table to 660–710 CE (39–91 AH).",
    "Comparison with Islamic Awareness: Islamic Awareness mentions it may be 'early second century', whereas Corpus Coranicum's published 660–710 CE window provides the authoritative later scholarly catalogue estimate."],
   {facts:[["Catalogue","Codex Wetzstein II 1913"],["Date","660–710 CE (39–91 AH)"],["Authority","Corpus Coranicum"],["Era","1st Century AH"]]}],
  ["Surviving extent: 216 folios (~85%)","An extraordinary proportion of the Qurʾānic text preserved intact.",
   ["Surviving folios: 216 folios survive today, containing approximately 85% of the entire Qurʾān.",
    "Original codex size: According to Corpus Coranicum, the complete original manuscript would have comprised around 245–250 folios — a full muṣḥaf containing 100% of the Qurʾān."]],
  ["Historical overlap: living Companions","Copied during the lifetime of eyewitness Companions of the Prophet ﷺ.",
   ["Living witnesses: A dating of 660–710 CE places this full codex squarely in an era when surviving Companions (Ṣaḥāba) were still alive across the Muslim world.",
    "Preservation significance: Having 85% of a single first-century codex corroborates the standard ʿUthmānic text alongside parallel oral memorisation."]]
 ]},
 cards:[
  ["Corpus Coranicum dating: 660–710 CE","39–91 AH, placing it in the first Islamic century.",
   ["Published dating: Corpus Coranicum — the academic project that published Codex Wetzstein II 1913 — explicitly dates the manuscript in its catalogue record to 660–710 CE (39–91 AH).",
    "Comparing estimates: While Islamic Awareness notes an older estimate of 'early second century', Corpus Coranicum's published 660–710 CE assessment is the more reliable primary-publication dating."],
   {facts:[["Date Range","660–710 CE"],["Hijrī","39–91 AH"],["Publisher","Corpus Coranicum"]],src:["Corpus Coranicum · Codex Wetzstein II 1913","Islamic Awareness"]}],
  ["216 folios surviving (85% of a full codex)","Originally ~245–250 folios containing 100% of the Qurʾān.",
   ["Surviving text: The 216 surviving folios cover roughly 85% of the Qurʾān — making it one of the most complete early Qurʾānic codices extant.",
    "Full codex reconstruction: Corpus Coranicum estimates the complete original codex had 245–250 folios, meaning it originally held 100% of the Qurʾān in a single first-century volume."],
   {facts:[["Surviving Folios","216 (~85%)"],["Original Size","~245–250 folios (100%)"],["Status","Full early codex"]]}],
  ["Written while Companions still lived","Oral and written transmission overlapped directly.",
   ["Living Ṣaḥāba: At 39–91 AH (660–710 CE), Companions who heard the Qurʾān directly from the Prophet ﷺ were still alive.",
    "Check for more details: Consult Corpus Coranicum's folio-by-folio edition and the Discord thread for manuscript scans and comparative notes."],
   {src:["https://discord.com/channels/1514269918978248796/1547587402980139130"]}]
 ],
 sum:"Codex Wetzstein II 1913 preserves 216 folios (~85% of an original ~245–250 folio full codex) dated by Corpus Coranicum to 660–710 CE (39–91 AH), while Companions of the Prophet ﷺ were still alive.",
 credit:"Islamic Apologetics · #quranic-manuscripts › Codex Wetzstein II 1913",
 link:"https://discord.com/channels/1514269918978248796/1547587402980139130"});

/* 2. Why ḥadīth are reliable (EXACT origKey under christianity/bible/d-ia-general-refutations/) */
cur.ex('christianity/bible/d-ia-general-refutations/t-a-comprehensive-proving-hadith-are-reliable',{
 title:"Why ḥadīth are reliable",k:"Ḥadīth Sciences · Epistemology",blurb:"Qurʾānic mandate to preserve the Sunnah and why Bart Ehrman's critique of Gospel oral transmission highlights ḥadīth rigour.",
 intro:"Ḥadīth are a cornerstone of the Islamic faith, because the Qurʾān commands believers to obey the Messenger (4:80; 59:7). Setting the bar with Bart Ehrman's own historical standard for oral transmission exposes why critics dismiss ḥadīth only by ignoring how ḥadīth were actually transmitted and checked.",
 visual:{kind:'compare',
  left:{title:"Gospel oral transmission (Ehrman's critique)",items:[
   ["No evidence of verbatim memorisation","Bart Ehrman notes there is no evidence Jesus's disciples memorised and taught his sayings word-for-word.",
    ["Bart Ehrman's standard: In his work on Jesus and the Gospels, Bart Ehrman argues the Gospels are not accurate transmissions of Jesus's life for multiple reasons tied to oral transmission.",
     "Key deficit: Specifically, historians lack evidence that Jesus's disciples systematically memorised his teachings and transmitted them verbatim through controlled chains."]],
   ["Anonymous, unverified links","Oral stories circulated decades before written Gospels without named isnāds.",
    ["Transmission gap: Without named teacher-to-student chains or biographical verification of transmitters, claims about exact sayings cannot be tested link by link."]]
  ]},
  right:{title:"Islamic ḥadīth transmission",items:[
   ["Religious obligation to preserve","The Qurʾān commands obeying the Prophet ﷺ (4:80; 59:7), making preservation of the Sunnah mandatory.",
    ["Qurʾānic mandate: Sūrat al-Nisāʾ 4:80 and Sūrat al-Ḥashr (59:7) bind Muslims to follow prophetic authority, requiring rigorous preservation of prophetic words and rulings."]],
   ["Memorised & checked chain by chain","Every report was audited via named narrators (isnād) and biographical verification (rijāl).",
    ["Cross-reference: Every narration was inspected narrator by narrator for integrity, precision, and continuity (see Hadith › How ḥadīth are checked)."]]
  ]}},
 cards:[
  ["Qurʾānic foundation: 4:80 & Sūrat al-Ḥashr (59)","The Sunnah is a binding cornerstone of Islam.",
   ["Qurʾān 4:80 (Sūrat al-Nisāʾ): “Whoever obeys the Messenger has truly obeyed Allah. But whoever turns away, then We have not sent you [O Prophet] as a keeper over them.”",
    "Qurʾān 59 (Sūrat al-Ḥashr): Alongside 4:80, verses such as 59:7 (“And whatever the Messenger gives you, take it; and whatever he forbids you, refrain from it”) obligate Muslims to derive regulations and guidance from the authentic prophetic tradition."],
   {facts:[["Verses","Qurʾān 4:80; 59:7"],["Role","Cornerstone of Islamic law"],["Requirement","Preserve the Sunnah"]]}],
  ["Critics rely on presuppositions, not inspection","False assertions ignore the actual discipline of ḥadīth criticism.",
   ["The usual mistake: Many critics attack ḥadīth with sweeping assertions and anti-supernatural or anti-oral presuppositions without examining how ḥadīth authentication works.",
    "Double standard: Critics routinely assume all ancient oral transmission works like uncontrolled folklore, ignoring deliberate memorisation, written notebooks (ṣaḥīfāt), and cross-examination."]],
  ["Bart Ehrman's benchmark on oral transmission","Why the Gospels fail Ehrman's test — while ḥadīth meet it.",
   ["Bart Ehrman's argument: In his book on Jesus and the Gospels, Bart Ehrman explains that the Gospels do not provide an accurate transmission of Jesus's life for several reasons concerning oral transmission.",
    "The decisive criterion: Ehrman specifically points out that we have no evidence Jesus's disciples actually memorised his teachings and transmitted them verbatim.",
    "Why this proves ḥadīth reliability: By that very historical standard, Islamic tradition stands apart — Companions explicitly memorised, recorded, and taught prophetic words verbatim, and scholars built an entire science to verify every transmitter."],
   {facts:[["Scholar Cited","Bart Ehrman"],["Work","On Jesus and the Gospels"],["Criterion","Verbatim memorisation & chains"]]}],
  ["Verified chain by chain (isnād & rijāl)","Narrators tested for honesty, memory, and continuity.",
   ["Narrator-by-narrator auditing: Every ḥadīth was tested through its isnād (chain) and matn (text), evaluating each narrator's moral integrity (ʿadāla) and memory precision (ḍabṭ).",
    "Further reading: See Hadith › How ḥadīth are checked for the full breakdown of marfūʿ/mawqūf, mutawātir/āḥād, hidden defects (ʿilal), and grading."]]
 ],
 evidence:[
  ["Whoever obeys the Messenger has truly obeyed Allah. But whoever turns away, then We have not sent you [O Prophet] as a keeper over them.","al-Nisāʾ 4:80","مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ ۖ وَمَن تَوَلَّىٰ فَمَا أَرْسَلْنَاكَ عَلَيْهِمْ حَفِيظًا"],
  ["And whatever the Messenger gives you, take it; and whatever he forbids you, refrain from it.","al-Ḥashr 59:7","وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا"]
 ],
 sum:"Because the Qurʾān obligates obeying the Prophet ﷺ (4:80; 59:7), Muslims preserved his teachings with verbatim memorisation and chain-by-chain auditing — directly meeting the exact oral-transmission standard Bart Ehrman shows the Gospels lack.",
 credit:"Islamic Apologetics · #general-refutations › a comprehensive proving hadith are reliable",
 link:"https://discord.com/channels/1514269918978248796/1524626042432651314"});

/* 3. The fall of Baghdad */
cur.ex('islam/proofs/d-ia-prophecies-1/t-siege-of-baghdad-prophecy',{
 title:"The fall of Baghdad",k:"Prophecy · Historical",blurb:"Abū Dāwūd 4306 foretells a Muslim capital on the Tigris struck by broad-faced, small-eyed invaders.",
 intro:"A prophetic narration (Abū Dāwūd 4306) describes Muslims settling low-lying ground beside the Tigris River that becomes a major Muslim capital with a bridge — before being devastated by the descendants of Qanṭūrāʾ, a people with broad faces and small eyes. Many Muslim scholars identify this with the Mongol Sack of Baghdad in 1258 CE, over six centuries later.",
 visual:{kind:'compare',
  left:{title:"Foretold",items:[
   ["Low ground by the Tigris called al-Baṣrah, a bridged Muslim capital","Abū Dāwūd 4306: 'Some of my people will descend upon low-lying ground which they will call al-Baṣrah, beside a river called the Tigris, over which there will be a bridge. Its people will be numerous, and it will be one of the capital cities of the Muslims.'",
    ["Full prophetic text: “Some of my people will descend upon low lying ground which they will call al-Baṣrah, beside a river called the Tigris, over which there will be a bridge. Its people will be numerous, and it will be one of the capital cities of the Muslims. At the end of times, the descendants of Qanṭūrāʾ will come with broad faces and small eyes, descending on the bank of the river…”",
     "Three groups: The ḥadīth continues by describing how the inhabitants will divide into three groups: those who flee and perish, those who seek safety and perish, and those who remain to fight, becoming martyrs."]]
  ]},
  right:{title:"Fulfilled (1258 CE)",items:[
   ["The Mongols sacked Baghdad on the Tigris in 1258 CE","More than six centuries after the Prophet ﷺ, Hulagu's Mongol army devastated the Abbasid capital.",
    ["Baghdad on the Tigris: Founded in the Abbasid era, Baghdad became the premier capital of the Muslim world, built along the Tigris with bridges connecting its quarters — including the famed district/gate of Bāb al-Baṣrah.",
     "The invaders: The Mongols matched the description of the descendants of Qanṭūrāʾ with broad faces and small eyes, killing vast numbers and ending Baghdad's role as the political and intellectual centre of Islam."]]
  ]}},
 cards:[
  ["The ḥadīth text & the three groups","What Abū Dāwūd 4306 actually foretells.",
   ["Primary text (Abū Dāwūd 4306): The Prophet ﷺ said: “Some of my people will descend upon low lying ground which they will call al-Baṣrah, beside a river called the Tigris, over which there will be a bridge. Its people will be numerous, and it will be one of the capital cities of the Muslims. At the end of times, the descendants of Qanṭūrāʾ will come with broad faces and small eyes, descending on the bank of the river…”",
    "Fate of the inhabitants: The narration goes on to describe the city's population splitting into three groups: (1) those who flee and perish, (2) those who seek safety/surrender and perish, and (3) those who stand and fight, attaining martyrdom."],
   {facts:[["Source","Sunan Abū Dāwūd 4306"],["River","The Tigris"],["Gap","600+ years"]],quotes:[{by:"Prophet Muḥammad ﷺ",en:"Some of my people will descend upon low lying ground which they will call al-Baṣrah, beside a river called the Tigris, over which there will be a bridge. Its people will be numerous, and it will be one of the capital cities of the Muslims. At the end of times, the descendants of Qanṭūrāʾ will come with broad faces and small eyes, descending on the bank of the river…",ref:"Sunan Abū Dāwūd 4306"}]}],
  ["Why scholars connect it to Baghdad (Bāb al-Baṣrah)","Tigris, bridges, capital status, and the district name.",
   ["Abbasid capital: Baghdad was founded centuries after the Prophet ﷺ during the Abbasid period and grew into one of the largest cities in the world and the capital of the Islamic caliphate.",
    "Geography & bridges: Built directly along the Tigris River, Baghdad featured famous pontoon/arched bridges linking its eastern and western sides.",
    "Why 'al-Baṣrah' fits Baghdad: Scholars and researchers point to historical references to Bāb al-Baṣrah — a well-known district and gate of Baghdad — as explaining the narration's mention of al-Baṣrah (noting that Baṣra itself lies on the Shaṭṭ al-ʿArab rather than the Tigris proper)."]],
  ["The invaders: descendants of Qanṭūrāʾ (1258 CE)","Broad faces, small eyes, and the Mongol devastation.",
   ["Physical description: The narration specifies invaders from the descendants of Qanṭūrāʾ (Banū Qanṭūrāʾ) marked by broad faces and small eyes, camping on the riverbank.",
    "Mongol Sack of Baghdad (1258 CE): Many Muslim scholars identify these invaders with the Mongols, whose 1258 CE siege overwhelmed Baghdad, slaughtered massive numbers of inhabitants, and ended Baghdad's status as the political and intellectual centre of the Muslim world."],
   {facts:[["Invaders","Banū Qanṭūrāʾ (Mongols)"],["Event","Sack of Baghdad"],["Date","1258 CE"]]}],
  ["Five converging details & further sources","Why apologists cite it alongside historical scans.",
   ["Five combined details: Supporters point out that the narration combines five specific elements more than six centuries in advance: (1) a major Muslim capital, (2) situated on the Tigris River with a bridge, (3) a vast Muslim population, (4) an invasion by a broad-faced, small-eyed people, and (5) widespread destruction and death of its inhabitants.",
    "Additional study links: See Proving Islam ('Siege of Baghdad Prophecy') and classical source scans compiled by @صَيَّامُ بْنُ عِرْفَانَ."],
   {src:["https://www.provingislam.com/proofs/mongols-sack-of-baghdad","https://docs.google.com/presentation/d/1e6Q9IWA0vaIvf4Av6oUppsJJaFVjc5-LzM6IxmBIPD8/mobilepresent"]}],
  ["Honest caveat: chain grading & alternative readings","Use as supporting evidence, not the sole pillar.",
   ["Scholarly caution: The grading of Abū Dāwūd 4306's chain is discussed among ḥadīth critics, and commentators have also discussed alternative interpretations of certain details (such as whether it refers to Baṣra or Baghdad).",
    "Balanced presentation: Accordingly, present this narration honestly as striking supporting evidence alongside mass-authenticated prophecies rather than as the single primary proof."]]
 ],
 sum:"Abū Dāwūd 4306 remarkably converges on the 1258 CE Mongol sack of Baghdad (a bridged Muslim capital on the Tigris with a Bāb al-Baṣrah quarter, devastated by broad-faced, small-eyed invaders), though its chain grading is discussed so it serves best as supporting evidence.",
 credit:"Islamic Apologetics · #prophecies 1 › siege-of-baghdad-prophecy",
 link:"https://discord.com/channels/1514269918978248796/1520830222008582215"});

/* 4. Pharaoh's body preserved */
cur.ex('islam/proofs/d-ia-prophecies-1/t-prophecy-about-the-pharoah',{
 title:"Pharaoh's body preserved",k:"Prophecy · Qurʾān 10:92",blurb:"The Qurʾān states Pharaoh's body was saved as a sign for later generations — a detail absent from Exodus.",
 intro:"The Qurʾān records that as Pharaoh drowned, Allah promised to save his physical body as a sign for generations to come (Yūnus 10:92) — a detail the Bible does not contain, corroborated centuries later when New Kingdom royal mummies were uncovered.",
 visual:{kind:'compare',
  left:{title:"Foretold",items:[
   ["“So today We will save you in body, that you may be a sign for those after you.”","Yūnus 10:92",
    ["Qurʾān 10:92: Unlike accounts that mention only Pharaoh's drowning, Yūnus 10:92 explicitly declares that Pharaoh's physical corpse (bi-badanika) would be preserved as a visible sign for future generations."]]
  ]},
  right:{title:"Fulfilled",items:[
   ["Royal New Kingdom mummies uncovered (1881)","The mummies of New Kingdom pharaohs — including Ramses II, often identified as the Pharaoh of Mūsā — were discovered in 1881 and remain displayed today.",
    ["1881 discovery: Hidden in the Deir el-Bahari royal cache (TT320) and later the Valley of the Kings, New Kingdom royal mummies including Ramses II and Merneptah were rediscovered in the late 19th century and exhibited to the public worldwide."]]
  ]}},
 cards:[
  ["Not in the Bible","Exodus mentions the army drowning, never the preservation of Pharaoh's body.",
   ["Biblical contrast: Exodus 14–15 narrates the drowning of Pharaoh's chariots and army in the sea, yet says nothing about Pharaoh's corpse being recovered and preserved as a lasting sign for later peoples.",
    "Qurʾānic precision: Yūnus 10:92 uniquely specifies bi-badanika ('in your body') — distinguishing his preserved corpse from his departed soul and submerged power."],
   {facts:[["Verse","Yūnus 10:92"],["Biblical Parallel","Absent in Exodus"],["Phrase","Bi-badanika (in body)"]]}],
  ["Unknown in 7th-century Arabia","Royal mummies were sealed in tombs until 1881.",
   ["Historical isolation: By the 7th century CE, the New Kingdom royal mummies lay sealed inside concealed Egyptian tombs; neither Makkah nor contemporary scholars knew these pharaohs' physical bodies remained intact.",
    "Rediscovery: Only in 1881 (and subsequent excavations) were the New Kingdom royal mummies recovered and medically examined."],
   {facts:[["Discovery","1881 CE"],["Candidate","Ramses II (New Kingdom)"],["Visibility","Displayed in museums"]]}],
  ["Honest caveat & Ramses II discussion","Which pharaoh it was is debated, without weakening the textual point.",
   ["Debated identification: Historians and apologists debate which New Kingdom pharaoh ruled during the Exodus — many Muslims argue for Ramses II (see linked video addressing common objections), while others suggest Merneptah or an earlier ruler.",
    "Core point intact: Regardless of the exact regnal identification, the Qurʾān's explicit claim that the drowning Pharaoh's body was preserved as a sign for future generations aligns strikingly with the modern discovery and public display of New Kingdom royal mummies."],
   {src:["https://youtube.com/shorts/YUBTT-S5aPo"]}]
 ],
 evidence:[
  ["So today We will save you in body that you may be to those who succeed you a sign. And indeed, many among the people, of Our signs, are heedless.","Yūnus 10:92","فَالْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ لِتَكُونَ لِمَنْ خَلْفَكَ آيَةً ۚ وَإِنَّ كَثِيرًا مِّنَ النَّاسِ عَنْ آيَاتِنَا لَغَافِلُونَ"]
 ],
 sum:"Yūnus 10:92 explicitly foretells that Pharaoh's physical body would be preserved as a sign for later generations — an unexpected detail absent from Exodus and unknown in 7th-century Arabia until New Kingdom royal mummies like Ramses II were uncovered in 1881.",
 credit:"Islamic Apologetics · #prophecies 1 › Prophecy about the Pharoah",
 link:"https://discord.com/channels/1514269918978248796/1520830222008582215"});

/* 5. Barefoot shepherds building towers */
cur.ex('islam/proofs/d-ia-prophecies-1/t-bedouins-competing-in-construction',{
 title:"Barefoot shepherds building towers",k:"Prophecy · Ṣaḥīḥ Muslim 8a",blurb:"Bedouin Arabs went from desert tents to competing for the world's tallest skyscrapers in one generation.",
 intro:"In the famous Ḥadīth of Jibrīl (Ṣaḥīḥ Muslim 8a), the Prophet ﷺ named a specific sign of the Hour: “barefoot, naked, destitute shepherds competing in making tall buildings” — identifying them explicitly as the Arabs. Within a single generation, Bedouin tribes of Arabia went from desert tents to racing for the tallest towers on earth.",
 visual:{kind:'compare',
  left:{title:"Foretold",items:[
   ["Barefoot, destitute shepherds competing in tall buildings","Ṣaḥīḥ Muslim 8a: explicitly identified as 'The Arabs' (i.e., the desert Bedouins).",
    ["Full wording (Muslim 8a): “The Hour will not be established until you see the barefoot, naked, destitute shepherds competing in making tall buildings.” When one of the Companions asked who those people were, the Prophet ﷺ replied: “The Arabs.”"]]
  ]},
  right:{title:"Fulfilled (20th–21st Century)",items:[
   ["From tents to the world's tallest skyscrapers in one generation","Burj Khalifa (UAE) and Jeddah Tower (Saudi Arabia), commissioned by rulers of Bedouin tribal lineage.",
    ["Single-generation leap: From the poorest pastoralist communities of Arabia to commissioning the tallest structures in human history in direct competition for height."]]
  ]}},
 cards:[
  ["Three precise details in Ṣaḥīḥ Muslim 8a","Barefoot poor shepherds, explicitly Arabs, competing in height.",
   ["Exact wording (Ṣaḥīḥ Muslim 8a): “The Hour will not be established until you see the barefoot, naked, destitute shepherds competing in making tall buildings.” Someone from the Prophet's ﷺ Companions asked who those people were, and he replied: “The Arabs.”",
    "Who they were: Muslims in the 7th century immediately understood 'naked, barefoot, and destitute shepherds' to mean the Bedouins — the poorest, nomadic community in all of Arabia, not urban builders in Persia or Rome.",
    "Competing in height: The verb yataṭāwalūna specifically denotes competing with one another to build higher and taller, not merely constructing houses."],
   {facts:[["Source","Ṣaḥīḥ Muslim 8a"],["Group","Bedouin Arabs"],["Key Verb","Competing in height"]]}],
  ["The race for height: Burj Khalifa & Jeddah Tower","Direct Bedouin-lineage leadership behind the world's tallest towers.",
   ["Dubai (UAE) — Burj Khalifa: The tallest building in the world today is in Dubai, UAE, where the UAE ruling family (Al Nahyan / Al Maktoum) are of Bedouin tribal descent.",
    "Saudi Arabia — Jeddah Tower: Saudi Arabia is actively constructing the Jeddah Tower specifically to surpass the Burj Khalifa as the world's tallest skyscraper.",
    "Saudi Bedouin lineage: The Saudi royal family likewise has direct Bedouin ancestry. Crown Prince and Prime Minister Muhammad bin Salman has Bedouin heritage on both sides: his mother, Fahda bint Falah Al Hithlain, is the daughter of the chief of the Al Ajman tribe (a prominent Bedouin clan of the Arabian Peninsula), and his grandfather King Abdulaziz (Ibn Saud) married women from Bedouin tribes — such as Nuf bint Nawwaf and Fahda bint Asi al-Shuraim of the Shammar confederation — to secure tribal alliances."],
   {facts:[["Tallest","Burj Khalifa (Dubai)"],["Challenger","Jeddah Tower (KSA)"],["Tribes","Al Ajman & Shammar"]],src:["https://www.provingislam.com/proofs/bedouins-prophecy#cite_note-1"]}],
  ["Unforeseeable in the 7th century","Nomadic herdsmen had zero wealth, engineering, or reason to race in skyscrapers.",
   ["Historical improbability: In the 7th century, great empires like Byzantium and Sasanian Persia built stone monuments; Arabia was a resource-poor desert where Bedouin herdsmen lived in hair tents.",
    "Oil-era transformation: Only after modern oil discovery did those exact Bedouin-descended Arab polities transform within one lifetime from tents to competing for the tallest skyscrapers on earth."]]
 ],
 evidence:[
  ["The Hour will not be established until you see the barefoot, naked, destitute shepherds competing in making tall buildings. Someone from the Prophet's Companions asked who those people were, and he replied: ‘The Arabs.’","Ṣaḥīḥ Muslim 8a"]
 ],
 sum:"Ṣaḥīḥ Muslim 8a foretold that the poorest Bedouin shepherds among the Arabs would compete to build the tallest buildings — fulfilled in a single generation as Bedouin-descended rulers in the UAE and Saudi Arabia built the Burj Khalifa and Jeddah Tower.",
 credit:"Islamic Apologetics · #prophecies 1 › bedouins-competing-in-construction",
 link:"https://discord.com/channels/1514269918978248796/1520830222008582215"});

/* 6. Abū Lahab will die a disbeliever */
cur.ex('islam/proofs/d-ia-prophecies-1/t-the-riskiest-prophecy-of-surah-masad',{
 title:"Abū Lahab will die a disbeliever",k:"Prophecy · Sūrat al-Masad (111)",blurb:"A Meccan sūra declared Abū Lahab and his wife doomed to the Fire — giving him roughly a decade to falsify it with one sentence.",
 intro:"Revealed early in Makkah, Sūrat al-Masad (111) unconditionally condemned the Prophet's ﷺ own uncle Abū Lahab and his wife Umm Jamīl to the blazing Fire — locking in a falsifiable prediction that neither would ever embrace Islam.",
 visual:{kind:'compare',
  left:{title:"Foretold",items:[
   ["Abū Lahab and his wife will burn in a blazing Fire","Sūrat al-Masad (111:1–5): unconditionally declares both will die in disbelief and enter the Fire.",
    ["The full sūra (111:1–5): Explicitly names Abū Lahab and his wife as doomed to Hellfire, leaving zero room for future repentance or conversion."]]
  ]},
  right:{title:"Fulfilled (624 CE)",items:[
   ["Both died as disbelievers shortly after Badr","For roughly ten years Abū Lahab could have discredited Islam merely by uttering the shahāda — even hypocritically — yet never did.",
    ["Historical outcome: Following the Battle of Badr in 624 CE (2 AH), Abū Lahab died in disgrace and disbelief, and his wife Umm Jamīl likewise died a staunch disbeliever."]]
  ]}},
 cards:[
  ["The riskiest falsifiable prophecy","All Abū Lahab had to do was pretend to accept Islam.",
   ["Ten-year window: Revealed roughly ten years before Abū Lahab's death, Sūrat al-Masad was recited publicly in Makkah where Abū Lahab himself was one of Islam's fiercest and most strategic enemies.",
    "Effortless falsification: To shatter the Qurʾān's credibility in seconds, Abū Lahab didn't even need sincere faith — he only had to walk out and say 'I accept Islam' to create a glaring contradiction. He never once did, dying in disbelief shortly after Badr (624 CE)."],
   {facts:[["Sūra","al-Masad (111:1–5)"],["Window","~10 years"],["Death","624 CE (after Badr)"]],src:["https://youtu.be/-VjMiRDFQUY","https://youtube.com/shorts/j-iTxH1y5KY","https://youtube.com/shorts/Euruc6KLKEM"]}],
  ["His wife Umm Jamīl included too","Double falsifiability across two living enemies.",
   ["Double risk: Not only Abū Lahab, but also his wife Umm Jamīl ('the carrier of firewood', 111:4–5) is condemned unconditionally to the Fire.",
    "Fulfilled on both counts: Neither Abū Lahab nor Umm Jamīl ever accepted Islam, even nominally or tactically, despite watching Islam's growing strength."]],
  ["Complete text of Sūrat al-Masad (111:1–5)","All five verses in Arabic and English.",
   ["111:1–3: “May the hands of Abū Lahab be ruined, and ruined is he. His wealth will not avail him or that which he gained. He will [enter to] burn in a Fire of [blazing] flame.”",
    "111:4–5: “And his wife [as well] — the carrier of firewood. Around her neck is a rope of [twisted] fiber.”"]]
 ],
 evidence:[
  ["May the hands of Abū Lahab be ruined, and ruined is he. (1) His wealth will not avail him or that which he gained. (2) He will [enter to] burn in a Fire of [blazing] flame. (3) And his wife [as well] — the carrier of firewood. (4) Around her neck is a rope of [twisted] fiber. (5)","Sūrat al-Masad 111:1–5","تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝ مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ ۝ سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ ۝ وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ ۝ فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ"]
 ],
 sum:"Sūrat al-Masad staked the Qurʾān's truth on Abū Lahab and his wife dying in disbelief — giving a bitter enemy ten years to falsify it with a single feigned declaration of faith, which he never made before dying after Badr in 624 CE.",
 credit:"Islamic Apologetics · #prophecies 1 › The Riskiest prophecy of Surah Masad",
 link:"https://discord.com/channels/1514269918978248796/1520830222008582215"});

/* 7. The idol Dhū al-Khalaṣa returns */
cur.ex('islam/proofs/d-ia-prophecies-1/t-dhi-al-khalasa',{
 title:"The idol Dhū al-Khalaṣa returns",k:"Prophecy · Ṣaḥīḥ al-Bukhārī & Muslim",blurb:"An idol destroyed on the Prophet's ﷺ order was explicitly foretold to be worshipped again by women of Daws before the Hour.",
 intro:"Even after ordering the Arabian idol Dhū al-Khalaṣa destroyed in his own lifetime, the Prophet ﷺ foretold by name that women of the tribe of Daws would once again sway in ritual circumambulation around it before the Hour — a prediction fulfilled centuries later.",
 visual:{kind:'compare',
  left:{title:"Foretold",items:[
   ["“The Hour will not come until the buttocks of the women of Daws sway around Dhū al-Khalaṣa.”","Bukhārī 7116; Muslim 2906",
    ["Prophetic narration: Recorded in both Ṣaḥīḥ al-Bukhārī (7116) and Ṣaḥīḥ Muslim (2906), naming the specific idol (Dhū al-Khalaṣa), the specific tribe (Daws), and the specific idolatrous ritual."]]
  ]},
  right:{title:"Fulfilled",items:[
   ["Venerated again centuries later until destroyed before 1925","Local tribes revived veneration at the shrine of Dhū al-Khalaṣa centuries after Islam had eradicated paganism in Arabia, until its second destruction in the 1920s.",
    ["Historical recurrence: Against all early Islamic expectations, the site returned to idolatrous veneration and remained so until it was demolished again in the 1920s."]]
  ]}},
 cards:[
  ["Destroyed in his own lifetime (Bukhārī 3020)","Why predicting its return seemed unthinkable.",
   ["First destruction: The Prophet ﷺ dispatched Jarīr ibn ʿAbdillāh al-Bajalī, who demolished and burned the shrine of Dhū al-Khalaṣa (known as the 'Yemeni Kaʿba') during the Prophet's ﷺ lifetime (Ṣaḥīḥ al-Bukhārī 3020).",
    "Counter-intuitive prediction: As paganism collapsed across the Arabian Peninsula, predicting that a specific demolished idol would actually be revived and worshipped again ran completely counter to early Muslim triumphalism."],
   {facts:[["Destroyed By","Jarīr ibn ʿAbdillāh"],["Hadīth","Bukhārī 3020"],["Status","Muttafaqun ʿalayh"]]}],
  ["A remarkably specific three-part claim","Named idol, named tribe, and named ritual.",
   ["Three locked parameters: (1) The exact idol by name — Dhū al-Khalaṣa; (2) the exact Arab tribe by name — the women of Daws; and (3) the exact ritual — swaying as they circumambulate around it (Bukhārī 7116; Muslim 2906).",
    "Centuries-later fulfilment: Centuries after the rise of Islam, local tribes in southern Arabia resumed venerating the Dhū al-Khalaṣa shrine until it was destroyed again prior to 1925."],
   {facts:[["Idol","Dhū al-Khalaṣa"],["Tribe","Daws"],["Re-destroyed","Before 1925"]],src:["https://www.openislam.wiki/posts/prophecy-of-dhi-al-khalasa-idol-worshipped-again-in-history/","https://youtu.be/cQozFuC8UjU"]}]
 ],
 evidence:[
  ["The Hour will not be established until the buttocks of the women of Daws sway around Dhū al-Khalaṣa.","Ṣaḥīḥ al-Bukhārī 7116; Ṣaḥīḥ Muslim 2906"]
 ],
 sum:"Against every expectation after Jarīr ibn ʿAbdillāh destroyed Dhū al-Khalaṣa (Bukhārī 3020), the Prophet ﷺ named the idol, the tribe of Daws, and its ritual return (Bukhārī 7116; Muslim 2906) — fulfilled centuries later until its second demolition before 1925.",
 credit:"Islamic Apologetics · #prophecies 1 › Dhi al Khalasa",
 link:"https://discord.com/channels/1514269918978248796/1520830222008582215"});

/* 8. Miracles of the Prophet ﷺ */
cur.ex('islam/proofs/d-ia-miracles',{
 title:"Miracles of the Prophet ﷺ",k:"Dalāʾil al-Nubuwwa · Miracles",blurb:"Public, mass-witnessed physical miracles alongside the living miracle of the Qurʾān.",
 intro:"Besides the Qurʾān, the Prophet ﷺ was granted numerous public physical miracles witnessed by large gatherings and transmitted through multiple independent chains — including water flowing from his fingers, food multiplying for whole armies, and the splitting of the moon.",
 visual:{kind:'steps',items:[
  ["Public eyewitness signs","Water flowing from his fingers and food multiplying before hundreds.",
   ["Mass witnesses: Far from private claims, signs like water gushing from his fingers (Bukhārī 3576) and feeding the entire army at the Trench (Bukhārī 4101) occurred before large crowds of Companions."]],
  ["Cosmic sign: the moon split","Recorded in Qurʾān 54:1 and numerous ḥadīth reports.",
   ["Qurʾānic attestation: Sūrat al-Qamar 54:1 openly cites the splitting of the moon to contemporaries who witnessed the sky, with no contemporary denial recorded."]],
  ["The permanent miracle: the Qurʾān","Unmatched revelation preserved for every generation.",
   ["Enduring proof: While physical miracles are seen by eyewitnesses of one era, the Qurʾān remains an accessible, testable miracle for every subsequent age."]]
 ]},
 cards:[
  ["Water flowing from his fingers (Bukhārī 3576)","Witnessed by hundreds at once and mass-transmitted.",
   ["Public miracle: During a journey when companions had no water for ablution or drinking, the Prophet ﷺ placed his hand in a vessel and water gushed out from between his fingers until hundreds performed wuḍūʾ and drank (Ṣaḥīḥ al-Bukhārī 3576).",
    "Epistemic weight: Reported through multiple Companions (such as Anas ibn Mālik, Jābir, and Ibn Masʿūd), making fabrication in front of living crowds impossible."],
   {facts:[["Source","Ṣaḥīḥ al-Bukhārī 3576"],["Witnesses","Hundreds at once"],["Type","Mass-transmitted"]]}],
  ["Food multiplying at the Trench (Bukhārī 4101)","A small home meal fed the entire defending army.",
   ["Battle of the Trench: Jābir ibn ʿAbdillāh prepared a single lamb and a small measure of barley thinking it would feed only the Prophet ﷺ and a few guests; instead the Prophet ﷺ blessed it and invited the entire army digging the trench — roughly a thousand men — who all ate until full with food left over (Ṣaḥīḥ al-Bukhārī 4101)."],
   {facts:[["Source","Ṣaḥīḥ al-Bukhārī 4101"],["Context","Battle of the Trench"],["Scale","Entire army fed"]]}],
  ["The splitting of the moon (Qurʾān 54:1)","Mentioned in the Qurʾān and numerous ḥadīth.",
   ["Qurʾānic record: “The Hour has drawn near, and the moon has split” (al-Qamar 54:1) — revealed publicly in Makkah, challenging sceptical contemporaries who never countered by claiming it hadn't happened.",
    "Mutawātir reports: Preserved across multiple Companions' testimonies in the Ṣaḥīḥ collections."],
   {facts:[["Verse","al-Qamar 54:1"],["Transmission","Many independent chains"]]}],
  ["The greatest miracle: the Qurʾān","An enduring miracle open to every generation.",
   ["Living sign: Unlike past physical miracles whose evidence comes via testimony, the Qurʾān itself sits in our hands as a permanent, verifiable miracle.",
    "Further reading in channel: The Discord thread ('The miracles of the qur'an') includes the compendium PDF 300_Miracles_Of_The_Prophet (461.67 KB) cataloguing hundreds of prophetic miracles."],
   {src:["300_Miracles_Of_The_Prophet (1).pdf (Discord #miracles)"]}]
 ],
 evidence:[
  ["The Hour has come near, and the moon has split [in two].","al-Qamar 54:1","اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ"]
 ],
 sum:"The Prophet ﷺ performed public, multi-witness physical miracles — water from his fingers (Bukhārī 3576), multiplied food at the Trench (Bukhārī 4101), and the split moon (54:1) — crowned by the permanent miracle of the Qurʾān.",
 credit:"Islamic Apologetics · #miracles",
 link:"https://discord.com/channels/1514269918978248796/1523002097010737337"});

/* 9. The Qurʾān's challenge */
cur.ex('islam/proofs/d-ia-proof-of-the-quran',{
 title:"The Qurʾān's challenge",k:"Iʿjāz al-Qurʾān · Linguistic Miracle",blurb:"Produce a single chapter like it — a falsifiable challenge the finest Arab poets chose war over meeting.",
 intro:"The Qurʾān issues a public, falsifiable challenge to humanity to produce even a single chapter like it (2:23–24). The masters of Arabic eloquence in 7th-century Makkah — its bitterest enemies — risked wealth, lives, and war rather than simply producing three lines to match Sūrat al-Kawthar.",
 visual:{kind:'steps',items:[
  ["Step 1: Produce a book like it (17:88)","Even if humankind and jinn pooled their efforts, they could not match the whole Qurʾān.",
   ["Escalating challenge: The Qurʾān first declares that humans and jinn together could never produce anything like the entire Qurʾān (17:88)."]],
  ["Step 2: Ten fabricated chapters (11:13)","Reduced to just ten sūras — still unmet.",
   ["Lowered bar: Sūrat Hūd 11:13 challenges sceptics to bring even ten chapters like it, invented by themselves."]],
  ["Step 3: One single chapter (2:23–24)","Even a three-verse chapter like al-Kawthar (108) — plus the prediction they will never do it.",
   ["Minimum threshold: Sūrat al-Baqara 2:23–24 narrows the challenge to a single sūra — even Sūrat al-Kawthar, just three verses — and predicts outright: 'and you will never do so.'"]]
 ]},
 cards:[
  ["The challenge & its built-in prediction","Ten chapters (11:13), then one chapter (2:23–24).",
   ["The challenge: First ten chapters (11:13), then a single chapter (2:23), capped by an explicit prophecy in 2:24 that challengers 'will never do so' (wa-lan tafʿalū).",
    "Sapience Institute analysis ('Produce One Chapter Like It'): Informed by both Islamic and Western scholarship, this study highlights how even the Qurʾān's shortest chapter, Sūrat al-Kawthar (108), exhibits an extraordinary density of rhetorical devices, sound patterns, and literary features — packing maximal meaning into a unique structure."],
   {facts:[["Verses","11:13; 2:23–24"],["Shortest Sūra","al-Kawthar (108)"],["Prediction","“You will never do so”"]],src:["https://www.sapienceinstitute.org/produce-one-chapter-like-it/"]}],
  ["A unique literary form beyond poetry or prose","Neither shiʿr nor nathr — a category the Arabs couldn't classify.",
   ["Beyond Arabic genres: Arabic literature consisted of metered poetry (shiʿr) and prose (nathr, including rhymed soothsayer prose sajʿ). The Qurʾān broke into a completely distinct acoustic, syntactic, and rhetorical register that master poets could neither classify nor imitate.",
    "Dr. Bassam Saeh's research: In Miraculous Language of the Qur'an — Evidence of Divine Origin (attached as PDF in the channel), Dr. Bassam Saeh explains the foundational linguistic mechanics behind this inimitability."],
   {src:["Miraculous-Language-of-the-Quran.pdf (Dr. Bassam Saeh)","https://www.islamic-awareness.org/quran/science/scientists"]}],
  ["Delivered live by an unlettered man over 23 years","No drafts, no edits, never revised.",
   ["Spontaneous oral delivery: An unlettered Prophet ﷺ delivered the Qurʾān orally across 23 years in varied circumstances — in battle, travel, peace, and debate — without drafts, outlines, or later revision.",
    "Why non-Arabic speakers can grasp it too: Scholars and teachers (such as Arabic101, Nouman Ali Khan, and Shaykh Mohammad Elshinawy) break down specific verses, ring structures, and word-choice precision so non-Arab readers can appreciate the linguistic miracle."],
   {src:["https://youtu.be/TGuZMLhyRXg","https://youtu.be/5fyF-35naDE","https://youtu.be/abzZL_3Av2E","https://youtube.com/playlist?list=PL8YUzxKq21HCI1ztXiAu0ZWw5zQSH3W1O","https://youtube.com/playlist?list=PLI02lWFfzOcLWubP5l8djLcl45RaLBeJK","https://youtu.be/rJfWq9w2Hwo"]}]
 ],
 evidence:[
  ["And if you are in doubt about what We have sent down upon Our Servant, then produce a chapter the like thereof and call upon your witnesses other than Allah, if you should be truthful. But if you do not — and you will never be able to — then fear the Fire…","al-Baqara 2:23–24","وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ… فَإِن لَّمْ تَفْعَلُوا وَلَن تَفْعَلُوا"]
 ],
 sum:"The Qurʾān's challenge to produce even one chapter like al-Kawthar (2:23–24) — delivered unrevised over 23 years by an unlettered man in a unique literary form — defeated the most eloquent Arab enemies, who chose war over three lines of Arabic.",
 credit:"Islamic Apologetics · #proof-of-the-quran",
 link:"https://discord.com/channels/1514269918978248796/1520894559750721676"});

/* 10. A Roman emperor recognised him */
cur.ex('islam/proofs/d-ia-historical-proofs/t-the-prophet-and-his-people-are-prophesied',{
 title:"A Roman emperor recognised him",k:"Historical Proofs · Ṣaḥīḥ al-Bukhārī 7",blurb:"Heraclius cross-examined Abū Sufyān in Jerusalem and concluded the Prophet ﷺ would rule where his own feet stood.",
 intro:"When the Prophet's ﷺ letter reached the Byzantine Emperor Heraclius in Jerusalem, Heraclius summoned Quraysh's caravan — led by Abū Sufyān, still a staunch pagan enemy of Islam — and conducted a famous cross-examination that led the emperor to recognise Muḥammad ﷺ as the expected prophet.",
 visual:{kind:'compare',
  left:{title:"Heraclius's test (c. 628 CE)",items:[
   ["“If what you say is true, he will soon own the place beneath my feet.”","Ṣaḥīḥ al-Bukhārī 7",
    ["Cross-examination: Heraclius asked Abū Sufyān about Muḥammad's ﷺ lineage, truthfulness, followers, whether any turned back, and whether he betrayed treaties — concluding he bore every mark of a true prophet, refraining from conversion only out of fear for his throne."]]
  ]},
  right:{title:"Fulfilled within years",items:[
   ["Byzantine Syria became Muslim","Within roughly a decade of the letter, Muslim forces took Damascus and Jerusalem — literally the ground beneath Heraclius's feet.",
    ["Historical outcome: Just as Heraclius stated to his court in Syria/Jerusalem, Muslim rule soon replaced Byzantine authority across Greater Syria."]]
  ]}},
 cards:[
  ["“He will rule where my feet stand” (Bukhārī 7)","Testified by Abū Sufyān while he was still an enemy of Islam.",
   ["Hostile witness: Abū Sufyān ibn Ḥarb was actively hostile to the Prophet ﷺ at the time, yet admitted he refrained from lying to Heraclius only because he feared his Quraysh companions would call him a liar.",
    "Emperor's verdict: After hearing Abū Sufyān's answers, Heraclius declared: “I knew that he [a prophet] was going to appear, but I did not think he would be from among you. If what you say is true, he will very soon own this place beneath my two feet” (Ṣaḥīḥ al-Bukhārī 7). Within years, Syria became Muslim."],
   {facts:[["Source","Ṣaḥīḥ al-Bukhārī 7"],["Emperor","Heraclius"],["Witness","Abū Sufyān (pre-Islam)"]],quotes:[{by:"Emperor Heraclius (to Abū Sufyān)",en:"If what you say is true, he will very soon occupy this place beneath my two feet.",ref:"Ṣaḥīḥ al-Bukhārī 7"}]}],
  ["Historical evidence & Byzantine reception","Why Heraclius's reaction matters historically.",
   ["Diagnostic criteria: Heraclius's questions systematically ruled out false claimants — checking noble lineage, lifelong honesty ('neither lying to people nor to God'), growing following among the weak, absence of apostasy, and faithful keeping of covenants.",
    "Further video analysis: See the Discord thread's linked presentation examining historical evidence around the Roman emperor's recognition of the rise of Islam."],
   {src:["https://www.youtube.com/watch?v=sn87Rdy9-_s"]}]
 ],
 evidence:[
  ["If what you are saying is true, he will very soon occupy this place beneath my two feet; and I knew that he was going to appear, but I did not think that he would be from among you.","Ṣaḥīḥ al-Bukhārī 7 (Heraclius to Abū Sufyān)"]
 ],
 sum:"Cross-examining a still-hostile Abū Sufyān (Bukhārī 7), Emperor Heraclius recognised every sign of prophethood and predicted the Prophet ﷺ would soon rule the very ground beneath his feet — fulfilled within years when Syria became Muslim.",
 credit:"Islamic Apologetics · #historical-proofs › The prophet and his people are prophesied",
 link:"https://discord.com/channels/1514269918978248796/1565511070662135940"});

/* 11. The Qurʾān corrects Jewish tradition */
cur.ex('islam/proofs/d-ia-historical-proofs/t-the-quranic-engagement-with-jewish-tradition',{
 title:"The Qurʾān corrects Jewish tradition",k:"Historical Proofs · Midrash & PRE",blurb:"Corrective engagement with traditions like Pirkei de-Rabbi Eliezer builds a cumulative case against Makkan borrowing.",
 intro:"The Qurʾān engages with a multitude of Jewish traditions — including midrashic compilations such as Pirkei de-Rabbi Eliezer (PRE) — yet selectively confirms what is sound while correcting or discarding legendary embellishments. The more such engagements we document, the less plausible and less economical ordinary borrowing theories become.",
 visual:{kind:'compare',
  left:{title:"Borrowing hypothesis",items:[
   ["Assumes casual Makkan oral access","Claims an unlettered merchant in pagan Makkah picked up scattered Jewish stories.",
    ["Why it breaks down: Mere casual hearsay cannot explain precise, critical engagement across vast, specialised rabbinic corpora in Aramaic and Hebrew — especially when the Qurʾān systematically edits and corrects them."]]
  ]},
  right:{title:"Corrective engagement",items:[
   ["Retains truth & corrects errors","Like Pirkei de-Rabbi Eliezer comparisons ('Four Chapters, Corrective Engagement'), the Qurʾān acts as a criterion (muhaymin).",
    ["Cumulative probability: Every additional precise engagement makes explanations of how an unlettered Prophet ﷺ gained oral or textual access less contextually probable and less economical."]]
  ]}},
 cards:[
  ["Corrective engagement (Pirkei de-Rabbi Eliezer)","Confirming truth while filtering out midrashic additions.",
   ["Pirkei de-Rabbi Eliezer (PRE): A major Jewish midrashic compilation whose parallels and contrasts with the Qurʾān illustrate 'corrective engagement' across multiple chapters.",
    "Not passive copying: Where midrashic tradition adds legendary or theologically flawed details, the Qurʾān retains what is true and drops or corrects the rest — operating as a divine criterion rather than a passive echo."],
   {facts:[["Text","Pirkei de-Rabbi Eliezer (PRE)"],["Method","Corrective engagement"],["Genre","Jewish midrash"]]}],
  ["A cumulative case against ordinary access","Why borrowing models become less economical with every example.",
   ["Cumulative argument: The Qurʾān engages with a wide array of Jewish traditions across distinct genres and regions.",
    "Decreasing probability: The more examples of precise engagement that are documented, the less contextually probable — and the less economical — naturalistic explanations of how an unlettered man in 7th-century Makkah had oral or textual access to all of them become."],
   {facts:[["Argument Type","Cumulative probability"],["Setting","7th-century Makkah"],["Target","Oral/textual access claims"]]}]
 ],
 sum:"The Qurʾān's selective, corrective engagement with intricate Jewish midrashic traditions like Pirkei de-Rabbi Eliezer builds a cumulative case in which ordinary Makkan borrowing becomes progressively less probable and less economical.",
 credit:"Islamic Apologetics · #historical-proofs › the Quranic engagement with jewish tradition",
 link:"https://discord.com/channels/1514269918978248796/1565511070662135940"});

/* 12. The Qurʾān and ancient Egypt */
cur.ex('islam/proofs/d-ia-historical-proofs/t-the-quranic-engagement-with-egyptian-hieroglyphics',{
 title:"The Qurʾān and ancient Egypt",k:"Historical Proofs · Ancient Egypt",blurb:"A ~250-year extinction gap before revelation, the Rosetta Stone, and the exact distinction between al-Malik and Firʿawn.",
 intro:"One of the strongest textual proofs for Islam is the Qurʾān's accurate recall of ancient Egyptian history and royal titles that were lost to the world by the 7th century. Revealed in pagan Arabia roughly 250 years after Egyptian hieroglyphic literacy died out, the Qurʾān gets details right that were only recovered after the Rosetta Stone.",
 visual:{kind:'steps',items:[
  ["6th–5th c. BCE: Language begins to decline","Post-Babylonian exile erosion of classical Egyptian literacy.",
   ["Early decline: The ancient Egyptian script and linguistic tradition began diminishing very early on from the 6th to 5th century BCE (post-Babylonian exile), gradually fading over the centuries."]],
  ["Late 4th c. CE: Hieroglyphics die out","Last readable Egyptian hieroglyphic tradition disappears.",
   ["Complete loss: By the late 4th century CE, knowledge of ancient Egyptian hieroglyphics was virtually or completely extinct — lost to the vast majority, if not everyone, around the globe."]],
  ["570–610 CE: ~250-year gap in pagan Arabia","Muḥammad ﷺ born in 570 CE; revelation begins ~250 years after extinction.",
   ["No historical channel: Between the late 4th-century disappearance of the language and the Prophet's ﷺ birth (570 CE) lies well over a century to nearly two centuries — expanding to nearly 250 years by the time he received revelation and began preaching in hostile, idolatrous Makkah."]],
  ["1799–1822 CE: Rosetta Stone decipherment","Modern scholarship confirms what the Qurʾān already preserved.",
   ["Rosetta Stone: The groundbreaking discovery and decipherment of the Rosetta Stone (1822) finally allowed scholars to read Egyptian inscriptions again and verify details matching the Qurʾān."]]
 ]},
 cards:[
  ["“King” (al-Malik) for Yūsuf vs “Pharaoh” (Firʿawn) for Mūsā","Matching Egyptian New Kingdom chronology — unlike the Bible.",
   ["Precise royal titles: The Qurʾān consistently calls Joseph's (Yūsuf's) Egyptian ruler al-malik ('the King', Sūrat Yūsuf 12), whereas it calls Moses' (Mūsā's) ruler Firʿawn ('Pharaoh').",
    "Why this matters: In Egyptian history, 'Pharaoh' (per-aa) came into use as a royal title for the monarch only from the New Kingdom (Moses' era), not in the earlier period of Joseph — a distinction the Bible flattens by calling both rulers 'Pharaoh', while the Qurʾān preserves the historically accurate title."],
   {facts:[["Yūsuf's Ruler","al-Malik (King)"],["Mūsā's Ruler","Firʿawn (Pharaoh)"],["Shift","New Kingdom Egypt"]]}],
  ["Lost for ~250 years before revelation","Timeline rules out Arabian or global 7th-century access.",
   ["Timeline of extinction: Classical Egyptian began declining from the 6th–5th century BCE (post-Babylonian exile) and was mostly or wholly lost by the late 4th century CE.",
    "The 250-year gap: Born in 570 CE, the Prophet ﷺ lived well over a century to nearly two centuries after that extinction — and roughly 250 years separated the loss of the script from his prophetic revelation.",
    "Hostile Makkan environment: Surrounded by pagan idolaters in Arabia who had little to no knowledge of ancient Egyptian history, rituals, or royal titulary, there is zero historical room for direct access."],
   {facts:[["Extinction","Late 4th c. CE"],["Birth / Mission","570 CE / ~610 CE"],["Gap","~250 years"]]}],
  ["Confirmed by the Rosetta Stone (1822)","Details inaccessible until modern Egyptology.",
   ["Undeciphered for 1,400 years: Egyptian hieroglyphs remained unreadable across the world until the discovery of the Rosetta Stone and its decipherment in 1822.",
    "Textual proof: That the Qurʾān accurately preserved ancient Egyptian usages and lost expressions in 7th-century Arabia stands as a powerful textual proof of divine revelation."],
   {facts:[["Deciphered","1822 CE (Rosetta Stone)"],["Milieu","7th-century pagan Makkah"]] }]
 ],
 sum:"Revealed in 7th-century pagan Arabia roughly 250 years after Egyptian hieroglyphics died out in the late 4th century CE — and centuries before the Rosetta Stone (1822) — the Qurʾān accurately distinguishes Joseph's 'King' (al-malik) from Moses' New Kingdom 'Pharaoh' (Firʿawn).",
 credit:"Islamic Apologetics · #historical-proofs › the quranic engagement with egyptian hieroglyphics",
 link:"https://discord.com/channels/1514269918978248796/1565511070662135940"});

/* 13. Did the Prophet ﷺ have access to biblical sources? */
cur.ex('islam/proofs/d-ia-other-proofs/t-proving-the-prophet-didnt-have-access-to-biblical-',{
 title:"Did the Prophet ﷺ have access to biblical sources?",k:"Historical Proofs · 16:103",blurb:"Why Makkan oral-borrowing claims fail — and how Qurʾān 16:103 already refuted the accusation at the time.",
 intro:"Critics allege the Prophet ﷺ picked up biblical stories from local oral traditions. Yet the Qurʾān's vast, precise, and corrective engagement across diverse Jewish, Christian, and ancient Near Eastern traditions would demand encyclopaedic access no individual in 7th-century Makkah possessed.",
 visual:{kind:'compare',
  left:{title:"Naturalistic borrowing claims",items:[
   ["“Someone in Makkah taught him”","Critics claim oral rumours or a local informant supplied the stories.",
    ["Why it fails: Even Western orientalists struggle to explain how one unlettered man in pagan Makkah accessed so many disparate traditions accurately while simultaneously correcting them."]]
  ]},
  right:{title:"The historical & Qurʾānic reality",items:[
   ["Clear Arabic vs foreign informant (16:103)","The very suspect Makkans accused spoke a foreign tongue, while the Qurʾān is eloquent, clear Arabic.",
    ["Qurʾān 16:103: Directly answers the contemporary accusation on linguistic and historical grounds."]]
  ]}},
 cards:[
  ["Even Western orientalists struggle to explain access","Some posit multiple regional authors rather than one Makkan man.",
   ["Scholarly dilemma: Because explaining how a single unlettered figure in Makkah had access to such diverse, specialised traditions is so historically implausible, some Western orientalists resort to speculating about multiple authors or transmitters from different regions.",
    "Corrective precision: Unlike passive hearsay, the Qurʾān engages these narratives selectively and critically — demanding mastery, not garbled rumours."],
   {facts:[["Location","7th-century Makkah"],["Orientalist Workaround","Multiple-author theories"],["Flaw","No Makkan corpus"]]}],
  ["The Qurʾān answered the informant claim at the time (16:103)","Foreign tongue vs clear Arabic.",
   ["Contemporary rebuttal: Makkans themselves tried accusing an individual of teaching the Prophet ﷺ, and the Qurʾān exposed the absurdity on the spot: “The tongue of the one they refer to is foreign, and this [Qurʾān] is a clear Arabic language” (al-Naḥl 16:103).",
    "Linguistic impossibility: A non-Arab speaker could neither compose nor impart the Qurʾān's unmatched classical Arabic eloquence."],
   {facts:[["Verse","al-Naḥl 16:103"],["Contrast","Foreign (aʿjamī) vs clear Arabic"]] }]
 ],
 evidence:[
  ["And We certainly know that they say, ‘It is only a human being who teaches the Prophet.’ The tongue of the one they refer to is foreign, and this Qurʾān is [in] a clear Arabic language.","al-Naḥl 16:103","وَلَقَدْ نَعْلَمُ أَنَّهُمْ يَقُولُونَ إِنَّمَا يُعَلِّمُهُ بَشَرٌ ۗ لِّسَانُ الَّذِي يُلْحِدُونَ إِلَيْهِ أَعْجَمِيٌّ وَهَٰذَا لِسَانٌ عَرَبِيٌّ مُّبِينٌ"]
 ],
 sum:"The Qurʾān's vast, corrective engagement across diverse traditions baffles naturalistic Makkan-borrowing theories — forcing some orientalists to posit multiple authors — while 16:103 already refuted the local-informant claim because the accused speaker had a foreign tongue.",
 credit:"Islamic Apologetics · #other-proofs › proving the prophet didnt have access to biblical material or oral tradition",
 link:"https://discord.com/channels/1514269918978248796/1568311339858923721"});

/* 14. Are the Gospels historically reliable? (DEBATE CARD) */
const IRL=IA('response-library','1514467813522276402');
card('islam/general/d-ia-response-library/t-the-gospels-are-not-historically-reliable',{
 title:"Are the Gospels historically reliable?",k:"Biblical History · Methodology",blurb:"Why hostile mentions don't authenticate Gospel narratives, and why Eusebius's church-edifying history is questioned.",
 claim:"The Gospels are reliable history; even hostile sources confirm them.",
 tree:N(IRL,
  "The Gospels are reliable history; even hostile sources confirm them.",
  "Being hostile to someone does not mean you report their history accurately — enemies routinely repeat second-hand claims they heard without verifying their origin. Moreover, much of what we know about early Gospel authorship and tradition comes through Eusebius of Caesarea, whose historical reliability even sympathetic historians question.",
  "Why hostile sources and Eusebius fall short",
  ["Criterion of hostility: Hostile mentions (such as later polemical or pagan remarks) do not independently verify an event or book's origin; enemies regularly repeat circulating Christian claims merely to argue against them.",
   "Dependence on Eusebius: Eusebius of Caesarea (4th century) is the principal funnel through which early patristic traditions about the Gospels' authorship and origins reach us.",
   "Editorial bias: Eusebius openly framed his Ecclesiastical History to edify the church and preserve what served orthodoxy — a limitation recognised even by sympathetic historians."],
  ["Islamic Apologetics · #response-library › The gospels are not historically reliable"],
  [
   N(IRL,"Doesn't Eusebius preserve reliable 2nd-century eyewitness traditions about who wrote the Gospels?",
    "Not reliably: Eusebius selectively curated fragments centuries after the events with an explicit apologetic purpose to edify the church, and modern critical historians widely reject the traditional authorship attributions he passed down.",
    "Eusebius and Gospel authorship claims",
    ["Apologetic selection: Because early patristic fragments survive largely because Eusebius chose what to quote and omit, historians cannot treat his summary as neutral, unvarnished reporting.",
     "Cross-reference: For the detailed breakdown of anonymous authorship, Papias, and manuscript evidence, see Christianity › The Bible › Who wrote the Gospels?"],
    ["Christianity › The Bible › Who wrote the Gospels?"],[],
    {facts:[["Key Source","Eusebius of Caesarea"],["Century","4th Century CE"],["Stated Aim","Edify the Church"],["Cross-Ref","Who wrote the Gospels?"]]})
  ],
  {facts:[["Fallacy","Hostility = Verification"],["Main Funnel","Eusebius of Caesarea"],["Status","Questioned by historians"]],
   visual:{kind:'compare',
    left:{title:"Apologist claim",items:["Hostile references independently verify Gospel claims","Early Gospel authorship traditions are neutral history"]},
    right:{title:"Historical reality",items:["Hostile authors repeat opponents' circulating claims without checking origin","Traditions filter through Eusebius, who openly wrote to edify the church"]}}}),
 sum:"Hostile sources merely echo circulating claims without verifying their origin, and early Gospel authorship traditions rest heavily on Eusebius of Caesarea, whose church-edifying bias even sympathetic historians question."});

/* 15. Recommended books */
cur.ex('islam/general/reading-list',{
 title:"Recommended books",k:"Resources · Reading List",blurb:"Curated PDFs across Creed, Islamic Law & Manners, Christianity, and Atheism shared on the Discord servers.",
 intro:"The servers share many foundational books and study notes as PDFs. Here they are organised by subject; open the Discord channels (#resources-from-the-scholars and #notes-and-resources) to download them.",
 visual:{kind:'steps',items:[
  ["Creed (ʿAqīda)","Classical works on Allah's Names & Attributes, madhhab adherence, takfīr conditions, and refuting Greek logic.",
   ["Works listed: al-Dhahabī (Mukhtaṣar al-ʿUluww), Ibn Rajab (on following the four schools), Ṣāliḥ al-Fawzān (conditions of takfīr), and Ibn Taymiyya (al-Radd ʿalā al-Manṭiqiyyīn)."]],
  ["Islamic Law & Manners (Fiqh & Ādāb)","Works on music and the defence of Shaykh Muḥammad ibn ʿAbd al-Wahhāb's daʿwa.",
   ["Works listed: Ibn al-Qayyim on music, and Shaykh Ṣāliḥ al-Fawzān's defence of Muḥammad ibn ʿAbd al-Wahhāb's daʿwa."]],
  ["Christianity & Comparative Religion","Books and study notes on the Trinity, New Testament prophecy, and Qurʾānic corrections of the Bible.",
   ["Works listed: Jake Brancatella (The Making of the Trinity), Ali Ataie (In Defense of Islam), Finding Muhammad in the New Testament, 'Debunking Christianity' notes by cal, and '200 ways the Qurʾān corrects the Bible'."]],
  ["Atheism","Contemporary Islamic philosophical and theological responses to atheism.",
   ["Works listed: Shaykh Asrar Rashid (Islam Answers Atheism) and Shaykh Ṣāliḥ al-Sindī (Atheism: Its Means, Dangers and Ways of Confronting It)."]]
 ]},
 cards:[
  ["Creed","Classical Sunni theology, fiqh methodology, and logic refutations.",
   ["al-Dhahabī: Mukhtaṣar al-ʿUluww ('Where is Allah?') — classic compilation on Allah's loftiness above the Throne.",
    "Ibn Rajab: Treatise on following the four schools of jurisprudence.",
    "Ṣāliḥ al-Fawzān: On the conditions and principles of takfīr.",
    "Ibn Taymiyya: al-Radd ʿalā al-Manṭiqiyyīn — landmark refutation of Greek Aristotelian logic."],
   {facts:[["Subject","Creed (ʿAqīda)"],["Titles","4 PDFs"],["Format","Discord PDFs"]]}],
  ["Islamic law & manners","Jurisprudence and reform-era daʿwa defence.",
   ["Ibn al-Qayyim: Treatise on the ruling regarding music.",
    "Ṣāliḥ al-Fawzān: Defence of Muḥammad ibn ʿAbd al-Wahhāb's daʿwa."],
   {facts:[["Subject","Law & Manners"],["Titles","2 PDFs"],["Format","Discord PDFs"]]}],
  ["Christianity","Trinity, New Testament Muhammad-prophecies, and biblical critique.",
   ["Jake Brancatella: The Making of the Trinity.",
    "Ali Ataie: In Defense of Islam.",
    "Prophecy & Polemics: Finding Muhammad in the New Testament.",
    "Compiled Study Notes: 'Debunking Christianity' notes by cal, and '200 ways the Qurʾān corrects the Bible'."],
   {facts:[["Subject","Christianity"],["Titles","5 works & notes"],["Format","Discord PDFs"]]}],
  ["Atheism","Islamic responses to modern unbelief.",
   ["Shaykh Asrar Rashid: Islam Answers Atheism.",
    "Ṣāliḥ al-Sindī: Atheism: Its Means, Dangers and Ways of Confronting It."],
   {facts:[["Subject","Atheism"],["Titles","2 PDFs"],["Channel","#resources-from-the-scholars"]]}]
 ],
 sum:"A four-part curated PDF library across Creed (al-Dhahabī, Ibn Rajab, al-Fawzān, Ibn Taymiyya), Law & Manners (Ibn al-Qayyim, al-Fawzān), Christianity (Brancatella, Ali Ataie, cal's notes), and Atheism (Asrar Rashid, Ṣāliḥ al-Sindī) available in the Discord resource channels.",
 credit:"Islamic Apologetics · #resources-from-the-scholars, #notes-and-resources",
 link:"https://discord.com/channels/1514269918978248796"});
})();
