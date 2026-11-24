/* Hadith block 3 — 2026-11-20. Averroes German hadith tiles → full English cards, from the full channel text
   (~/Downloads/burhan-averroes-all.json): #sonne-geht-im-quellen-meer-unter, #aisha-ra-stillt-männer, #stillen-vers-aisha (new),
   #ashura-juden, #prophet-saw-blut-rein, #rassismus (folded into the Bukhārī 7142 card, see hadith-block2 edit below).
   Cross-server check: IA / Deenresponds have no channel on these five topics (searched: 18:86, Sahla/Sālim, ʿĀshūrāʾ, cupping blood).
   Covers Averroes' Hadith channels: Sun setting in a muddy spring, ʿĀshūrāʾ fast, ʿĀʾisha's suckling, and related reports. */
(()=>{
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const A1='islam/general/d-av-sonstiges-islam-1/c-', A2='islam/general/d-av-sonstiges-islam-2/c-', A3='islam/general/d-av-sonstiges-islam-3/c-';

/* ───────── The sun setting in a spring of hot water ───────── */
const SU=AV('sonne-geht-im-quellen-meer-unter','1275928325096870054');
card(A1+'sonne-geht-im-quellen-meer-unter',{title:"Does the sun set in a spring of hot water?",k:"Abū Dāwūd 4002 · Bukhārī 3199",blurb:"One narrator's odd wording against the agreed version.",
 claim:"A ḥadīth says the sun sets in a spring of hot water, and another that it goes to prostrate under the Throne. Both are unscientific.",
 tree:{they:"Abū Dharr narrates that the Prophet ﷺ said the sun “sets in a spring of hot water” (innahā taghrubu fī ʿaynin ḥāmiya). That's a flat-earth myth.",
  we:"That wording is not the established ḥadīth. Abū Dharr's ḥadīth comes through Ibrāhīm al-Taymī, and almost all his students narrate it without any spring. Only one line, al-Ḥakam ibn ʿUtayba through Sufyān ibn Ḥusayn, adds “a spring of hot water”. The ḥadīth scholars call such a lone deviation shādhdh (anomalous).",
  more:Object.assign({h:"The two chains",p:[
   "Ibrāhīm ibn Yazīd al-Taymī → his father → Abū Dharr. From Ibrāhīm it was taken by al-Ḥakam ibn ʿUtayba, al-Aʿmash, Fuḍayl ibn Ghazwān, Hārūn ibn Saʿd and Mūsā ibn al-Musayyab (Ibn Manda, al-Īmān 2/926).",
   "Chain 1: al-Aʿmash, Yūnus ibn ʿUbayd, Mūsā ibn al-Musayyab and Hārūn ibn Saʿd. The sun “goes and prostrates beneath the Throne, then asks permission to rise… until it is told: return to where you came from, and it rises from its place of setting.” Then he recited 36:38. No spring is mentioned. This is the version in al-Bukhārī and Muslim.",
   "Chain 2: only al-Ḥakam ibn ʿUtayba from Ibrāhīm. Abū Dharr rode behind the Prophet ﷺ on a donkey at sunset; he asked: “Do you know where this sets?”, then said: “It sets in a spring of hot water.” (Aḥmad 35/363; Abū Dāwūd 4002; al-Bazzār 9/407; al-Ḥākim 2/267, who called the chain ṣaḥīḥ.) Everyone narrates it via Yazīd ibn Hārūn → Sufyān ibn Ḥusayn → al-Ḥakam.",
   "Al-Bazzār: “We know of no one except Sufyān ibn Ḥusayn who narrated this from al-Ḥakam… while Yūnus ibn ʿUbayd, al-Aʿmash and Hārūn ibn Saʿd narrated it from Ibrāhīm” (without it).",
   "The chain diagram marks the routes of transmission: only the red line (al-Ḥakam) carries the deviating spring wording."],src:["Bukhārī 3199","Muslim 159","Abū Dāwūd 4002","Musnad Aḥmad 35/363","al-Bazzār, al-Baḥr al-Zakhkhār 9/407 (under no. 4010)","Ibn Manda, al-Īmān 2/926"]},SU),
  next:[
   {they:"But al-Ḥakam is a trustworthy narrator, and al-Ḥākim graded it ṣaḥīḥ.",
    we:"Trustworthy narrators can still err, and a lone wording that contradicts the majority and the best memorisers is rejected (shādhdh and muʿallal). Al-Ḥakam was also a mudallis who here only says “from” (ʿan), never “I heard”.",
    more:Object.assign({h:"Why the wording is rejected",p:[
     "The first wording is agreed upon by the majority of narrators and those with the best memory in Ibrāhīm al-Taymī's ḥadīth.",
     "Al-Ḥakam was described as a mudallis by al-Nasāʾī (Dhikr al-Mudallisīn no. 11) and Ibn Ḥibbān (al-Thiqāt 4/144). No one reports him saying he heard it directly; all say “ʿan”. Ibn Ḥajar puts him in the second level of mudallisīn (Marātib al-Mudallisīn p. 30).",
     "Sufyān ibn Ḥusayn: Ibn Saʿd said he was trustworthy “but made many mistakes in his narrations” (al-Ṭabaqāt al-Kubrā 7/227 no. 3417).",
     "Shādhdh: “the ḥadīth a reliable transmitter reports which conflicts with what others report.” Muʿallal: a ḥadīth in which a hidden defect is found though its chain looks sound; a lone narrator contradicted by others reveals the defect (Ibn al-Ṣalāḥ, An Introduction to the Science of Hadith, tr. Dickinson, pp. 57, 67).",
     "Scholars who graded “the ḥadīth” ṣaḥīḥ meant its basis is authentic, not that this wording beats the version established in the two Ṣaḥīḥs (Ibn ʿUthaymīn, Tafsīr al-Qurʾān al-Karīm 5/191)."],src:["al-Nasāʾī, Dhikr al-Mudallisīn 11","Ibn Ḥibbān, al-Thiqāt 4/144","Ibn Ḥajar, Marātib al-Mudallisīn p. 30","Ibn Saʿd, al-Ṭabaqāt 7/227"]},SU),
    next:[
     {they:"Then what about the sun prostrating under the Throne every night?",
      we:"The Muslims held by consensus that the earth and the heavenly bodies are round. Ibn Taymiyya reports this consensus from the Companions onward. Scholars who knew the sun never stops shining somewhere did not read this ḥadīth as a physical place on earth, so it can't be the flat-earth claim the critic needs.",
      more:Object.assign({h:"Consensus on a round earth",p:[
       "Ibn Taymiyya: “The heavenly bodies are round according to the Muslim scholars among the Companions and those who followed them in guidance; this was also proven from them with chains… more than one of the Muslim scholars reported that there was consensus on it” (Minhāj al-Sunna 5/442).",
       "Day and night alternate through the movement of these round bodies, which follows from many texts of the Qurʾān and Sunna.",
       "Muslims led in astronomy. If the apparent sense of the ḥadīth contradicted this, there could have been no consensus the other way. The correct view is that it does not contradict astronomical fact.",
       "Whoever attacks the Sunna over the spring wording simply doesn't know how precisely the ḥadīth scholars sift versions and separate proven from unproven reports."],src:["Ibn Taymiyya, Minhāj al-Sunna 5/442","Qurʾān 36:38"]},SU),next:[]}]}]},
 sum:"The “spring of hot water” is one narrator's shādhdh wording (al-Ḥakam via Sufyān ibn Ḥusayn); the agreed version in Bukhārī and Muslim has no spring, and the scholars held by consensus that the earth is round."});

/* ───────── Adult breastfeeding (Sahla and Sālim) ───────── */
const BF=AV('aisha-ra-stillt-männer','1275938408564260976');
card(A1+'aisha-ra-stillt-ma-nner',{title:"Breastfeeding an adult? Sahla and Sālim",k:"Muslim 1453 · Muwaṭṭaʾ",blurb:"A one-time exemption, given by cup, during the end of adoption.",
 claim:"The Prophet ﷺ told a woman to breastfeed a grown man, and ʿĀʾisha used it so men could visit her. That's shameful.",
 tree:{they:"Sahla bint Suhayl was told to suckle Sālim, a bearded adult who fought at Badr (Muslim 1453). That's disgusting.",
  we:"Fosterage only counts in infancy: “Fosterage is only through hunger (in the first two years)” (Bukhārī 5102, from ʿĀʾisha herself). Sahla's case was a special permission for one household at the moment adoption was abolished, and the milk was given to him, not nursed from the breast.",
  more:Object.assign({h:"Why Sahla was allowed",p:[
   "Sālim had grown up in Abū Ḥudhayfa's house as an adopted son. When Islam abolished adoption (33:4–5) he suddenly became a stranger to Sahla. A transition was needed: he was like a real son to her and it was hard to treat him as a stranger.",
   "Sahla: “Messenger of Allah, I see (displeasure) in Abū Ḥudhayfa's face when Sālim enters.” He said: “Suckle him.” She said: “How can I suckle him when he is a grown man?” He smiled and said: “I know he is a young man” (Muslim 1453a).",
   "“Suckle him and you will become unlawful (in marriage) to him, and what is in Abū Ḥudhayfa's heart will go.” She returned and said: “I suckled him, and what was in Abū Ḥudhayfa's heart went” (Muslim 1453b; also 1453c with “he has a beard”).",
   "Her surprise shows she knew suckling only works in infancy; when he repeated it she understood it was exceptional.",
   "The Arabic riḍāʿ doesn't specify direct contact. An infant must nurse from the breast; for an adult a cup is the natural meaning.",
   "Abū Ḥudhayfa was displeased at the mere idea of Sālim coming close to his wife like a son. Could such a jealous man accept, and be made happy by, his wife literally nursing another man? His displeasure “went”, which only makes sense if no such thing happened."],src:["Muslim 1453a–c","Bukhārī 5102","Qurʾān 33:4–5; 2:233"]},BF),
  next:[
   {they:"ʿĀʾisha used it as a precedent so men could visit her.",
    we:"That was ʿĀʾisha's personal view, and all the other wives of the Prophet ﷺ rejected it: “By Allah, we think it was only a permission for Sālim specifically.” The great majority of Companions and scholars agree with them.",
    more:Object.assign({h:"The other wives and the majority",p:[
     "Muwaṭṭaʾ 30/12: ʿĀʾisha told her sister Umm Kulthūm and her nieces to give milk to men she wanted to visit her. “The other wives of the Prophet ﷺ refused to let anyone come to them this way. They said: No! By Allah, we think what the Messenger of Allah ﷺ commanded Sahla was only a permission for Sālim. No one will come in to us this way!”",
     "Umm Salama to ʿĀʾisha: “By Allah, I don't want to be seen by a boy who has passed the age of suckling” (Muslim 1453c).",
     "The view that fosterage only counts in the first two years is that of ʿUmar, ʿAlī, Ibn ʿAbbās, Ibn Masʿūd, Jābir, Abū Hurayra, Ibn ʿUmar, Umm Salama, Saʿīd ibn al-Musayyab, ʿAṭāʾ, al-Zuhrī, Qatāda, al-Shaʿbī, Sufyān al-Thawrī, al-Awzāʿī, Mālik, al-Shāfiʿī, Aḥmad and Isḥāq.",
     "Ibn Kathīr on 2:233: ʿĀʾisha held that milk given to an older person creates fosterage (also ʿAṭāʾ and al-Layth), using Sālim's case; “the other wives of the Prophet did not agree and thought it was a special case. This is the view of the majority (al-jumhūr)… the four Imams, the seven jurists, the senior Companions and the rest of the wives.” Their proof, from ʿĀʾisha herself: “Fosterage is only through hunger.”"],src:["Muwaṭṭaʾ, Kitāb al-Raḍāʿ 30/12","Muslim 1453c","Ibn Kathīr, Tafsīr on 2:233 (1/358)","Bukhārī 5102"]},BF),
    next:[
     {they:"So is adult breastfeeding allowed in Islam today?",
      we:"No. Fosterage that creates maḥram relations only happens in the first two years. Sahla's case was an exemption the Prophet ﷺ gave her at the end of adoption; it is not a rule anyone can use.",
      more:Object.assign({h:"The ruling",p:["“The mothers shall suckle their children two full years” (2:233). Fosterage after that age has no legal effect, according to the four schools.","See also the card on the “ten sucklings” report in Qurʾān › Preservation (Muslim 1452)."],src:["Qurʾān 2:233"]},BF),next:[]}]}]},
 sum:"Sahla's permission was a one-time exemption at the end of adoption, given by cup; fosterage only counts in infancy, ʿĀʾisha's wider view was rejected by the other wives and the majority."});

/* ───────── The “ten sucklings” report (new channel #stillen-vers-aisha) ───────── */
const TS=AV('stillen-vers-aisha','1372610717999431700');
card('islam/quran/preservation/ten-sucklings',{title:"The “ten sucklings” verse: was the Qurʾān incomplete?",k:"Muslim 1452",blurb:"Abrogated, not lost; one narrator's extra phrase.",
 claim:"ʿĀʾisha says a verse on ten, then five sucklings was still recited when the Prophet ﷺ died, yet it isn't in the Qurʾān. So a verse was lost.",
 tree:{they:"“It was revealed in the Qurʾān that ten clear sucklings make (marriage) unlawful, then it was replaced by five, and the Prophet ﷺ died while this was still recited in the Qurʾān” (Muslim 1452a). So the Qurʾān lost a verse.",
  we:"The verse was abrogated (naskh), not forgotten. And the phrase “he died while it was still recited” is a mistake by a single narrator: the report comes from ʿAmra bint ʿAbd al-Raḥmān through three students, and only one of them has that phrase.",
  more:Object.assign({h:"The three routes from ʿAmra",p:[
   "A. Yaḥyā ibn Saʿīd al-Anṣārī (the most reliable route), Muslim 1452b: “Ten sucklings were revealed, then five.” No mention that it remained in the Qurʾān until his death.",
   "Al-Shāfiʿī (Musnad 67) adds: ʿĀʾisha only let in those who had completed five sucklings. It was about a fiqh rule, not a “lost” verse.",
   "B. al-Qāsim ibn Muḥammad, Ibn Mājah 1942: “It was in the Qurʾān, then it was dropped (saqaṭa).” A clear statement of abrogation.",
   "C. ʿAbdullāh ibn Abī Bakr: only he adds “the Prophet ﷺ died while it was still recited”. Even he is inconsistent: al-Tirmidhī (1184) has a version from him without it."],src:["Muslim 1452a–b","Ibn Mājah 1942","al-Shāfiʿī, Musnad 67","Tirmidhī 1184"]},TS),
  next:[
   {they:"But it's in Ṣaḥīḥ Muslim, so the phrase is authentic.",
    we:"The scholars named the mistake. Al-Ṭaḥāwī: only ʿAbdullāh ibn Abī Bakr said it, and it is an error (wahm); al-Qāsim and Yaḥyā were more reliable. The phrase most likely means it was still recited by some who hadn't yet learned of the abrogation.",
    more:Object.assign({h:"Scholars on the error",p:[
     "Al-Ṭaḥāwī (d. 321), Sharḥ Mushkil al-Āthār 2063: “Only ʿAbdullāh ibn Abī Bakr said that; it is an error (wahm). Al-Qāsim and Yaḥyā were more reliable.”",
     "Al-Jaṣṣāṣ (d. 370), Aḥkām al-Qurʾān: the statement contradicts the consensus on the preservation of the Qurʾān.",
     "Ibn al-ʿArabī: there is no confirmation that any verse went missing after the Prophet ﷺ.",
     "The ruling developed in stages: ten sucklings, then five (ʿĀʾisha held to this; other Companions did not), and the final position that any suckling in infancy counts. Ibn ʿAbbās: “It used to be ten, then five; today one is enough” (Muṣannaf Ibn Abī Shayba 17314)."],src:["al-Ṭaḥāwī, Sharḥ Mushkil al-Āthār 2063","al-Jaṣṣāṣ, Aḥkām al-Qurʾān","Muṣannaf Ibn Abī Shayba 17314"]},TS),
    next:[
     {they:"Then the Companions must have lost it when they compiled the Qurʾān.",
      we:"No Companion ever said a verse was missing. The Qurʾān was compiled under Abū Bakr and ʿUthmān publicly, by the people who memorised it, and ʿĀʾisha herself never claimed a verse had been lost.",
      more:Object.assign({h:"Why the charge fails",p:["1. Only one narrator makes the disputed statement; all others contradict him.","2. ʿĀʾisha herself never claimed a Qurʾān verse was missing.","3. The Qurʾān was collected under Abū Bakr and ʿUthmān; none of the Companions mentioned a missing verse.","4. The ruling developed step by step, which is evidence of abrogation, not loss."]},TS),next:[]}]}]},
 sum:"The ten/five sucklings verse was abrogated; only ʿAbdullāh ibn Abī Bakr adds “still recited”, and al-Ṭaḥāwī called it his error."});

/* ───────── ʿĀshūrāʾ ───────── */
const AS=AV('ashura-juden','1278489547247845487');
card(A2+'ashura-juden',{title:"Did he drop ʿĀshūrāʾ when the Jews didn't follow him?",k:"Bukhārī 2002 · 2003",blurb:"From obligatory to recommended, and fasted in Mecca before Medina.",
 claim:"Shamoun: once it was clear the Jews would never follow him, Muḥammad turned on them and gave up the ʿĀshūrāʾ fast and the qibla he had chosen to win them over.",
 tree:{they:"He adopted ʿĀshūrāʾ to impress the Jews of Medina and dropped it when they rejected him (Shamoun).",
  we:"Wrong on both counts. ʿĀshūrāʾ was never dropped: when Ramaḍān became obligatory, ʿĀshūrāʾ went from obligatory to recommended, as a mercy. And he was already fasting it in Mecca with Quraysh, long before he met the Jews of Medina.",
  more:Object.assign({h:"What the reports say",p:[
   "ʿĀʾisha: people used to fast ʿĀshūrāʾ before Ramaḍān was made obligatory, and on that day the Kaʿba was covered. When Allah made Ramaḍān obligatory, the Messenger of Allah ﷺ said: “Whoever wants to fast it may do so, and whoever wants to leave it may leave it” (Bukhārī 1592; 2002).",
   "Ibn ʿUmar: the Prophet ﷺ fasted ʿĀshūrāʾ and ordered it; when Ramaḍān was prescribed, “ʿĀshūrāʾ was left”. ʿAbdullāh didn't fast it unless it fell on his regular fasting day (Bukhārī 1892). He didn't stop fasting it altogether.",
   "Shaykh ʿAbd al-ʿAzīz al-Rājiḥī: “left” means left as an obligation, while it remained recommended. That is clear from the report itself.",
   "The Prophet ﷺ fasted ʿĀshūrāʾ in Mecca, and so did Quraysh. The Arabs inherited its importance from Ibrāhīm and Ismāʿīl. It was obligatory before Ramaḍān.",
   "One can also understand that it was obligatory for a time in Medina, where many Jews lived, to show that the Muslims follow the true religion of Mūsā while still differing from them (not fasting the same way), as with trimming the moustache to differ from them."],src:["Bukhārī 1592, 1892, 2002","Muslim 1125"]},AS),
  next:[
   {they:"The story about Pharaoh drowning on that day proves he copied the Jews.",
    we:"The core command to fast ʿĀshūrāʾ is authentic from many Companions independently, and narrations exist without the drowning addition. Fasting it was part of the Abrahamic heritage the Arabs already kept.",
    more:Object.assign({h:"The authentic core",p:["The reports of Ibn ʿAbbās, Abū Mūsā, Salama ibn al-Akwaʿ, ʿAbdullāh ibn Masʿūd, ʿĀʾisha, al-Rubayyiʿ bint Muʿawwidh and Ibn ʿUmar, that the Prophet ﷺ ordered or practised the ʿĀshūrāʾ fast, are in Bukhārī and Muslim with reliable chains that support each other.","The narration also exists without the addition about Pharaoh's drowning, confirming that the fast's Prophetic basis is independent of that added clause."],src:["Bukhārī, Muslim (Kitāb al-Ṣawm)"]},AS),
    next:[
     {they:"If it's the same day as Yom Kippur, why don't they fall together?",
      we:"Because the calendars work differently. The Jewish calendar is lunisolar and inserts leap months, so Yom Kippur (10 Tishri) always falls in autumn. The Islamic calendar is purely lunar with no leap months, so ʿĀshūrāʾ (10 Muḥarram) moves about 11 days earlier every year.",
      more:Object.assign({h:"Two calendars",p:["Jewish calendar: months begin with the new crescent (29–30 days), but extra months are inserted regularly to stay with the solar year and the seasons. So Yom Kippur is always in autumn in the Gregorian calendar.","Islamic calendar: also lunar, but always 12 months, no leap months. A lunar year is about 11 days shorter than a solar year, so ʿĀshūrāʾ wanders through all seasons.","Example: in 2022 ʿĀshūrāʾ fell on 8 August, Yom Kippur on 5 October."]},AS),next:[]}]}]},
 sum:"ʿĀshūrāʾ was fasted in Mecca before Medina, and was never dropped: after Ramaḍān it became recommended, not abandoned."});

/* ───────── Was the Prophet's ﷺ blood pure? ───────── */
const BL=AV('prophet-saw-blut-rein','1283851172536389662');
card(A3+'prophet-saw-blut-rein',{title:"Did Companions drink the Prophet's ﷺ blood?",k:"Cupping reports",blurb:"Six reports examined one by one: only Ibn al-Zubayr's has some basis.",
 claim:"Companions drank the Prophet's ﷺ blood and he approved, even saying “prophethood went through you”. That's superstition and contradicts Islam's own law that blood is impure.",
 tree:{they:"Companions drank his blood after cupping, and he praised them for it. Islam calls blood impure, so this is a contradiction.",
  we:"First, the rule: spilled blood is ḥarām and impure by the Qurʾān (6:145), the Sunna and consensus. Then the reports: six are cited, most are weak or fabricated, the words “prophethood went through you” are found in none of them, and in several he rebukes the person.",
  more:Object.assign({h:"Spilled blood is impure",p:[
   "“Say: I do not find in what has been revealed to me anything forbidden to eat except carrion, poured-out blood or the flesh of swine, for that is impure (rijs)…” (6:145). Al-Ṭabarī: rijs means something najis and repulsive (Jāmiʿ al-Bayān 8/53).",
   "Asmāʾ bint Abī Bakr: a woman asked about menstrual blood on clothes. He said: “Scrape it, rub it with water, wash it, then pray in it” (Bukhārī 227; Muslim 291). Al-Bukhārī's chapter: “Washing blood”; al-Nawawī's: “The impurity of blood and how to wash it.”",
   "Al-Nawawī: “Blood is impure, and this is the consensus of the Muslims.”",
   "No report contains the phrase “prophethood went through you”."],src:["Qurʾān 6:145","Bukhārī 227","Muslim 291","al-Ṭabarī, Jāmiʿ al-Bayān 8/53"]},BL),
  next:[
   {they:"ʿAbdullāh ibn al-Zubayr drank it and was told the Fire would never touch him.",
    we:"This is the only report with some basis, and in its best chain the Prophet ﷺ rebukes him: “Why did you drink the blood? Woe to the people because of you, and woe to you because of the people.” The “Fire will never touch you” version has a liar in its chain.",
    more:Object.assign({h:"Ibn al-Zubayr: the chains",p:[
     "Ibn al-Zubayr came while he was being cupped; told to pour the blood away where no one would see, he drank it. “O ʿAbdullāh, what did you do?… Why did you drink the blood? Woe to the people because of you and woe to you because of the people” (Ibn Abī ʿĀṣim, al-Āḥād 1/414; al-Bazzār 6/169; al-Ḥākim 3/638; al-Bayhaqī 7/67; Ibn ʿAsākir 28/163).",
     "All via Hunayd ibn al-Qāsim, from ʿĀmir ibn ʿAbdullāh ibn al-Zubayr, from his father. Hunayd is in al-Tārīkh al-Kabīr 8/249 and al-Jarḥ wa al-Taʿdīl 9/121 without comment, so he is majhūl, but can be ḥasan with support. Ibn Ḥajar: “nothing wrong with him, but he isn't known for knowledge” (al-Talkhīṣ al-Ḥabīr 1/30). Al-Dhahabī: “I know nothing wrong about Hunayd” (Siyar 3/366).",
     "The version with “the Fire will never touch you” (al-Dāraquṭnī 1/228; Ibn ʿAsākir 28/162) has ʿAlī ibn Mujāhid, called a liar by Yaḥyā ibn al-Ḍurays and Ibn Maʿīn; Ibn Ḥajar: matrūk. Also Rabāḥ al-Nūbī and Muḥammad ibn Ḥumayd al-Rāzī, both weak. Al-ʿAẓīmābādī: maʿlūl (al-Taʿlīq al-Mughnī 1/425).",
     "A third version via Kaysān from Salmān (Juzʾ al-Ghiṭrīf; al-Iṣāba 4/93; al-Talkhīṣ 1/32): “the Fire will only touch you to fulfil the oath.”",
     "Taking all together, there seems to be a basis for the story that Ibn al-Zubayr drank it, and Allah knows best."],src:["al-Talkhīṣ al-Ḥabīr 1/30–32","Siyar Aʿlām al-Nubalāʾ 3/366","al-Dāraquṭnī 1/228"]},BL),
    next:[
     {they:"Safīna, Abū Hind and others also drank it and he approved.",
      we:"None of these is reliable. Safīna's report is very weak, Abū Hind's has him told “blood is ḥarām, don't do it again”, the Quraysh slave's is fabricated, and Mālik ibn Sinān's is mursal.",
      more:Object.assign({h:"The other five",p:[
       "Safīna (Burayh ibn ʿUmar ibn Safīna → father → grandfather): told to bury the blood, he drank it and the Prophet ﷺ smiled (al-Bukhārī, al-Tārīkh al-Kabīr 4/209; Ibn ʿAdī 2/64; al-Bayhaqī 7/67; al-Ṭabarānī 7/81). Ibn Kathīr: “weak because of Burayh… ḍaʿīf jiddan” (al-Fuṣūl 300). Al-Albānī, al-Ḍaʿīfa 1074: two defects, ʿUmar ibn Safīna (unknown; al-ʿUqaylī: an unknown ḥadīth) and Burayh (al-Dāraquṭnī: weak; Ibn Ḥibbān: may not be used as proof). ʿAbd al-Ḥaqq al-Ishbīlī also graded it weak.",
       "Sālim Abū Hind al-Ḥajjām (Abū Nuʿaym, Maʿrifat al-Ṣaḥāba): he drank it and the Prophet ﷺ said: “Woe to you, Sālim, didn't you know blood is ḥarām? Don't do it again.” Its chain has Abū al-Ḥajjāf, about whom there is discussion (al-Talkhīṣ 1/30).",
       "A Quraysh slave (Nāfiʿ Abū Hurmuz → ʿAṭāʾ → Ibn ʿAbbās): drank it all, “you have saved yourself from the Fire.” Ibn Ḥibbān lists it as a fabrication narrated from ʿAṭāʾ (al-Majrūḥīn 3/59).",
       "Mālik ibn Sinān, father of Abū Saʿīd al-Khudrī: sucked the wound at Uḥud and refused to spit, then fought and was martyred. Mursal (Saʿīd ibn Manṣūr 2/221 via ʿUmar ibn al-Sāʾib), per Ibn Ḥajar, al-Talkhīṣ 1/31.",
       "Conclusion: of the reports about Companions drinking his blood, Ibn al-Zubayr's is the most reliable, though its chain is discussed. No other report is reliable."],src:["al-Albānī, al-Silsila al-Ḍaʿīfa 1074","Ibn Kathīr, al-Fuṣūl fī al-Sīra 300","Ibn Ḥibbān, al-Majrūḥīn 3/59","Saʿīd ibn Manṣūr 2/221"]},BL),next:[]}]}]},
 sum:"Spilled blood is impure by Qurʾān, Sunna and consensus; of six reports only Ibn al-Zubayr's has a basis, and there he is rebuked."});

/* Racism (#rassismus) is folded into the Bukhārī 7142 card (hadith-block2.js): hide the separate merge. */
window.MOVES=(window.MOVES||[]).filter(op=>!(op.type==='merge'&&/c-rassismus$/.test(op.from)));
cur.hide(A2+'rassismus');
})();
