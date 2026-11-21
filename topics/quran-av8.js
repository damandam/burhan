/* Qurʾān AV batch 8 — 2026-11-20. History channels from Averroes “Koran Scheinargumente 1/2” (not on the site before).
   add(): Roman prophecy ← #römer-falsche-prophezeiung (ʿAṭiyya); Khiḍr card ← #al-khidir-und-der-junge (+ children in Paradise);
   moon splitting ← #mond-spaltung (Cheraman Perumal, why not seen worldwide).
   NEW Qurʾān › history: Pharaoh's “crucifixion” (#pharao-kreuzigt), al-Sāmirī (#samiri-fehler), al-Aqsa (#masjid-al-aqsa-nicht-existiert),
   “kings” 5:20 (#könige-zu-zeit-mose), Dhū al-Qarnayn's wall & the Alexander legend (#gog-magog-mauer-wo-ist-die + #alexander-der-große-mauer).
   NEW Prophet: the red cloak 3:161 (#prophet-saw-klaut-unterwäsche-beute).  Scans: #römer (4 imgs), #samiri (1), #aqsa (1), #alexander (2), #khidr (PDF). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('quran-av8: no card',key); };
const HI='islam/quran/history/';

/* Roman prophecy */
add('islam/proofs/d-ia-prophecies-1/t-roman-prophecy',N(AV('römer-falsche-prophezeiung','1288849583828500594'),
 "Tirmidhī has a report that 30:2–4 was revealed after the Roman victory, so it isn't a prophecy.",
 "That report rests on ʿAṭiyya al-ʿAwfī, and al-Mubārakfūrī names three problems: he was a mudallis, most scholars consider him weak, and he took tafsīr from al-Kalbī while calling him “Abū Saʿīd”, so that people thought he meant Abū Saʿīd al-Khudrī. Al-Tirmidhī's “ḥasan gharīb” is therefore questionable.",
 "ʿAṭiyya al-ʿAwfī",["Al-Bayhaqī, al-Sunan al-Kubrā: not used as proof (2/126), not relied on (7/66), weak (7/369), not argued with (8/126).","Ibn Ḥibbān: when asked who told him, he said “Abū Saʿīd”; people assumed al-Khudrī, but he meant al-Kalbī, so he may not be used as proof. Al-Nasāʾī: weak. Ibn Ḥajar: weak memory, notorious for tadlīs.","Scans of the gradings in the channel (to capture)."],["Tirmidhī 3192","al-Mubārakfūrī, Tuḥfat al-Aḥwadhī"]));

/* Khiḍr */
add('islam/hadith/d-ia-hadith-refutations/t-khidr-killed-the-boy',N(AV('al-khidir-und-der-junge','1286266393624580157'),
 "“We feared he would overburden them” (18:80): so a child was killed on a guess, and the boy went to Hell.",
 "Most mufassirūn (e.g. al-Qurṭubī) take “we feared” as al-Khiḍr's words, acting on a judgement Allah permitted him; al-Ṭabarī and Ibn ʿAbbās take it as Allah's, with khashiya meaning “we knew”: Allah's foreknowledge of what the boy would become. And a child who dies before the age of accountability is in Paradise: al-Nawawī reports the great consensus, and the Prophet ﷺ saw the children of people, including the children of disbelievers, around Ibrāhīm in Paradise (Bukhārī 7047).",
 "18:80 and children in Paradise",["Bukhārī 7047 (the long dream): “the children around him are the children of people.” Asked about the children of the polytheists: “and the children of the polytheists.”","When the Prophet ﷺ said one shouldn't declare it with certainty, it's out of respect for Allah's judgement, as the ten promised Paradise never said so of themselves.","A PDF on al-Khiḍr is in the channel (to capture)."],["Qurʾān 18:80","Bukhārī 7047"]));

/* moon splitting */
add('islam/prophet/d-ia-moon-splitting',N(AV('mond-spaltung','1365416588643139695'),
 "If the moon split, the whole world would have recorded it.",
 "Many factors make worldwide records unlikely: it was night in Arabia and day for much of the world; people were asleep; clouds and mountains block the view; it was brief; a split moon may have looked like a half moon to someone not staring at it; and few chronicles survive from then. Ibn ʿUthaymīn: perhaps clouds hid it from the Indian historians, it didn't last long, or people slept. And there is in fact a South Indian tradition: King Cheraman Perumal of Kerala saw the moon split and went to Mecca.",
 "Why no worldwide record, and Cheraman Perumal",[
  "Ibn ʿUthaymīn, Sharḥ al-ʿAqīda al-Safārīniyya pp. 560–561.","Wisdom: had the whole world seen it, peoples who worshipped the moon and heavenly bodies might have built new idol cults around it.",
  "Otto Loth, Catalogue of the Arabic Manuscripts in the India Office Library (1877) 1/299: a manuscript on the first Muslim settlement in Malabar under King Shakrūti of Cranganore, “a contemporary of the Prophet, who converted through the miracle of the splitting of the moon.”",
  "George Milne Rae, The Syrian Church in India (1892) p. 169: Cheraman Perumal dreamt the full moon appeared at new moon over Mecca and split in two, one half descending at the foot of Abū Qubays.","Nathan Katz, Who Are the Jews of India? p. 21: the Keralolpatti says the last king went to Mecca and became Muslim; the Maharajas of Travancore swore at coronation to keep the sword “until the uncle who went to Mecca returns.” A Hindu work dated the journey to 835 CE, which Dr. Hassena V.A. disputes.",
  "Ibn Taymiyya: travellers reported an ancient building in India with an inscription “built on the night of the splitting of the moon.”",
  "Turn the tables: Augustine (City of God 3.15) and Irenaeus take the darkness at the crucifixion as a real sign, though no outside chronicler clearly records it."],["Qurʾān 54:1–2","Ibn ʿUthaymīn, Sharḥ al-Safārīniyya 560–561","Augustine, City of God 3.15"]));

/* Pharaoh crucifies */
const PH=AV('pharao-kreuzigt','1283736246824468566');
card(HI+'pharaoh-crucifixion',{title:"Did Pharaoh “crucify” people? (7:124)",k:"Ṣ-L-B",blurb:"Ṣalb means hanging or binding to wood, which Egypt practised.",
 claim:"7:124: Pharaoh threatens to “crucify” the magicians, but crucifixion was a Persian and Roman punishment centuries later: an anachronism.",
 tree:N(PH,"Pharaoh says “I will cut off your hands and feet on opposite sides, then crucify you all” (7:124). Crucifixion didn't exist in Moses' Egypt.",
  "The root ṣ-l-b means hanging or binding someone to a tree or wood, not specifically a Roman cross. The same word is used for Joseph's prison companion (12:41: yuṣlabu), and Genesis 40:22 itself says Pharaoh “hanged” the baker. Deuteronomy 21:22–23 also has bodies hung on wood in Moses' time. And note: Pharaoh first cuts off hands and feet, then “crucifies”: a cross by nailing hands and feet wouldn't fit; hanging on wood does.",
  "The word and the Bible",["12:41 (Joseph): yuṣlabu; 7:124, 20:71, 26:49 (Moses): la-uṣallibannakum. Both from ṣ-l-b: to hang, to fasten on wood.","20:71: “I will crucify you on the trunks of palm trees.”","Genesis 40:22: “he hanged the chief baker.” Deuteronomy 21:22–23: “if you hang him on a tree, his body shall not remain all night on the tree.”"],["Qurʾān 7:124; 12:41; 20:71; 26:49","Genesis 40:22","Deuteronomy 21:22–23"]),
 sum:"Ṣalb means hanging on wood, used for Joseph's Egypt too (12:41); Genesis 40:22 has Pharaoh hang the baker."});

/* al-Sāmirī */
const SM=AV('samiri-fehler','1289738267419480126');
card(HI+'al-samiri',{title:"Al-Sāmirī: a Samaritan centuries too early?",k:"20:85–97",blurb:"A name, an origin or a title, not the later city of Samaria.",
 claim:"The Qurʾān has a “Sāmirī” make the golden calf, but Samaria was founded about 600 years after Moses: a historical error.",
 tree:N(SM,"“Al-Sāmirī led them astray” (20:85): a Samaritan in Moses' time is an anachronism.",
  "The Qurʾān never says he was from Samaria. The tafsīr names him Mūsā ibn Ẓafar and says he was called al-Sāmirī either after a place or as a title from his beliefs. Ibn ʿAbbās (in al-Qurṭubī): he belonged to a cow-worshipping people who came to Egypt and pretended to accept the Israelites' religion. Saʿīd ibn Jubayr: a Persian from Kirmān. Mawdūdī: the Sumerians lived in Iraq in Abraham's time and some may have migrated to Egypt; and 1 Kings 16:24 says Samaria was named after a man called Shemer, so the name existed before the city.",
  "Who he was",["Maʿārif al-Qurʾān pp. 143–144, citing Ibn Jarīr from Ibn ʿAbbās: born in the year Pharaoh killed the Israelite boys; his mother hid him in a cave.","Al-Ṭabarī on 20:85: the word for his calling (daʿwa) shows a single individual misled them.","1 Kings 16:24: Omri bought the hill from Shemer and named the city Samaria after Shemer, its owner."],["Qurʾān 20:85–97","1 Kings 16:24","Mawdūdī, Tafhīm on 20:85"]),
 sum:"Al-Sāmirī is a name or title (a place, the Sumerians, or Shemer's name, 1 Kings 16:24), not the later city."});

/* al-Aqsa */
const AQ=AV('masjid-al-aqsa-nicht-existiert','1283238833823158293');
card(HI+'masjid-al-aqsa-17-1',{title:"Did al-Masjid al-Aqsā exist at the Night Journey? (17:1)",k:"Masjid = place of prostration",blurb:"The sanctuary existed since Sulaymān, even in ruins.",
 claim:"17:1 says the Prophet ﷺ was taken to al-Masjid al-Aqsā, but no mosque stood in Jerusalem in 621; the Aqsa mosque was built decades later.",
 tree:N(AQ,"There was no al-Aqsa mosque in 621, so 17:1 is a historical error.",
  "Masjid means a place of prostration, with or without a building: “the whole earth has been made a masjid for me” (Bukhārī 335). The sanctuary in Jerusalem existed long before: Sulaymān asked Allah that whoever goes out only to pray in al-Masjid al-Aqsā be freed of sin (Aḥmad 11/220, ṣaḥīḥ). In 621 the Temple Mount was a ruin but still a known holy site; the Dome of the Rock (691–692) and today's mosque came later, but the name referred to the whole site.",
  "The site",["“Travel only to three mosques: al-Masjid al-Ḥarām, my mosque, and al-Masjid al-Aqṣā” (Bukhārī 1189; Muslim 1397).","Neither the Companions nor the polytheists asked what or where al-Aqṣā was when 17:1 came: it was familiar. Al-Fawzān and Ibn ʿUthaymīn: it was the mosque of the prophets, built before Muḥammad ﷺ. Jawād ʿAlī, al-Mufaṣṣal 11/177: pre-Islamic Arabs used masjid for any place of worship.","The claim of a “ṣaḥīḥ ḥadīth” placing al-Aqṣā in Mecca has no source.","Turn the tables: Ezra 2:68 speaks of “the house of the LORD which is in Jerusalem” while the temple lay in ruins."],["Qurʾān 17:1","Bukhārī 335, 1189","Muslim 1397","Musnad Aḥmad 11/220","Ezra 2:68"]),
 sum:"A masjid is a place of prostration; the Jerusalem sanctuary existed since Sulaymān and was known by that name, even in ruins (cf. Ezra 2:68)."});

/* kings 5:20 */
const KG=AV('könige-zu-zeit-mose','1372630841624236163');
card(HI+'kings-in-moses-time-5-20',{title:"“He made you kings” (5:20): kings in Moses' time?",k:"Mulūk",blurb:"Malik = an owner, a free person with house and servant.",
 claim:"5:20 has Moses say Allah “made you kings”, but Israel had no kings until Saul and David.",
 tree:N(KG,"Israel had no kings in Moses' time, so 5:20 is wrong.",
  "Malik comes from malaka, to own or control; it doesn't have to mean monarch. The Prophet ﷺ called someone with a house and a servant a king (Muslim 2979), and Ibn ʿAbbās explained mulūk here as “you had wives and servants” (al-Ḥākim 3214). After slavery in Egypt the Israelites became free owners of land, cattle and servants (Exodus 12:35–38). Translations render it “possessors” (Saheeh International) or “your own masters” (Asad).",
  "Usage",["Kaʿb ibn al-Ashraf called the Quraysh mulūk though they weren't monarchs (Ibn Isḥāq). Ibn Mājah 4107 likewise.","Revelation 1:6 (Arabic Bible): Christians are made mulūk, kings, though not monarchs.","Adapted from W. A. Cheema, “Refuting missionaries on Qurʾān and kings in Israel before Moses” (ICRAA, 2013)."],["Qurʾān 5:20","Muslim 2979","al-Ḥākim 3214","Exodus 12:35–38","Revelation 1:6"]),
 sum:"Mulūk in 5:20 means owners, free people with homes and servants (Ibn ʿAbbās; Muslim 2979), not monarchs."});

/* Gog & Magog / Alexander */
const GM=AV('gog-magog-mauer-wo-ist-die','1371128507203322036'), AX=AV('alexander-der-große-mauer','1367632290800341053');
card(HI+'dhul-qarnayn-wall',{title:"Dhū al-Qarnayn's wall: where is it, and was it copied from the Alexander legend?",k:"18:83–98",blurb:"Two events, and a legend that came later and differs.",
 claim:"No one has ever found the wall of Gog and Magog (18:94–98), and the story was copied from the Syriac Alexander legend.",
 tree:N(GM,"The wall holding back Gog and Magog should still exist. Where is it?",
  "The Qurʾān and Sunna don't require it to stand today. The Prophet ﷺ already said: “Today an opening has been made in the barrier of Gog and Magog like this” (Bukhārī 3168), so it was already crumbling. Several scholars see two events: the wall broke and Gog and Magog broke out (al-Saʿdī: the Tatars in the east, invasions in Europe), and they will appear a final time after the Dajjāl.",
  "Two events",["Ibn ʿĀshūr: their emergence is estimated in the late 6th century AH, with the Mongols and Tatars, beginning with Genghis Khan taking Bukhara in 616 AH (al-Taḥrīr wa al-Tanwīr 17/33).","Al-Saʿdī, Risālatān fī Fitnat al-Dajjāl wa Yājūj wa Mājūj 1/51–52: “the first opening of the wall and their initial emergence have already happened… their emergence after the Dajjāl (ḥadīth of al-Nawwās ibn Samʿān) doesn't mean they hadn't appeared before; emergence means moving from one place to another.”"],["Qurʾān 18:94–98; 21:96","Bukhārī 3168","Muslim 2937"],
  [N(AX,"The story was copied from the Syriac Alexander legend.",
    "The Qurʾān doesn't name Alexander, avoids the romance's myths (dragons, the water of life, immortality) and makes Dhū al-Qarnayn a humble believer: “This is a mercy from my Lord” (18:98), unlike the deified hero of the romances. The earliest Arabic Alexander legends are 8th–9th century. And the Syriac legend's editor, E. A. Wallis Budge, says it was overloaded with later Christian additions; its gate is against the Huns, shaped by memories of Attila, not Gog and Magog.",
    "The Syriac legend and its editor",["Budge, The History of Alexander the Great, being the Syriac Version (1889) p. 81 (archive.org): the version seems an abridgement of the metrical discourse attributed to Jacob of Serugh, both based on Pseudo-Callisthenes II.37–39; “the Christian legend has been overloaded with many additions, evidently the work of a Christian redactor.”","The gate against the Hûnâyê is based on Pseudo-Callisthenes III.29; the predicted evils come from an author familiar with Attila's ravages in the 5th century and biblical eschatology; the many place names point to a very late composition.","Josephus doesn't tell the wall story. Ethiopian versions (Kebra Nagast, 14th c.; Zēna Eskender, 15th–16th c.; Ethiopic Pseudo-Methodius, 15th c.) are far later."],["Qurʾān 18:83–98","E. A. W. Budge, The Syriac Alexander, p. 81"])]),
 sum:"The Prophet ﷺ already spoke of an opening in the wall (Bukhārī 3168); Gog and Magog's first outbreak is past (al-Saʿdī), and the Syriac legend is late, Christianised and about the Huns."});

/* red cloak 3:161 */
const RC=AV('prophet-saw-klaut-unterwäsche-beute','1282883657777811457');
card('islam/prophet/red-cloak-3-161',{title:"Did the Prophet ﷺ steal “underwear” from the spoils? (3:161)",k:"Qaṭīfa ḥamrāʾ",blurb:"A luxurious red cloak, a weak report, and a verse that clears him.",
 claim:"A report says a red “underwear” went missing at Badr and people suspected the Prophet ﷺ took it.",
 tree:N(RC,"Abū Dāwūd and al-Tirmidhī: 3:161 was revealed about a red garment lost at Badr; some said the Prophet ﷺ took it.",
  "The report is weak (Zubayr ʿAlī Zaʾī), and even as told, the verse clears him: “It is not for a prophet to act dishonestly with the spoils.” Qaṭīfa ḥamrāʾ isn't underwear but a thick, soft red cloth like velvet, a valuable cloak; no one would bother about an undergarment. The verse also fits Uḥud: the archers left their posts fearing they'd miss their share, and the Prophet ﷺ said: “Did you think we would act dishonestly and not give you your share?” (Ṭanṭāwī, Mawdūdī).",
  "The word and the context",["Qaṭīfa: thick, soft fabric (velvet) used for cloaks and blankets; ḥamrāʾ: red.","Mawdūdī on 3:161: the archers suspected the Prophet's ﷺ honesty in distributing the spoils; Allah rebukes them: can you expect Allah's Messenger to divide unjustly what is entrusted to him?","Turn the tables: Jeremiah 13:1–11: God tells Jeremiah to buy a linen loincloth, wear it, hide it by the Euphrates and dig it up ruined, a sign of Judah's pride."],["Qurʾān 3:161","Abū Dāwūd 3971","Tirmidhī 3009","Jeremiah 13:1–11"]),
 sum:"The report is weak; qaṭīfa is a valuable red cloak, and 3:161 itself declares the Prophet ﷺ free of dishonesty with spoils."});
})();
