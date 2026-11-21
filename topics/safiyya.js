/* Islam › Morality › Marriage › Ṣafiyya — full debate map (rebuilt 2026-11-19)
   Sources: Averroes #kian-folter and #saffiya-frau-des-propheten (German, translated); classical references they cite. */
(()=>{
const KF='Averroes · #kian-folter (translated from German)', SF='Averroes · #saffiya-frau-des-propheten (translated from German)';
const L={kf:'https://discord.com/channels/1275832106949283962/1275837008421326890',sf:'https://discord.com/channels/1275832106949283962/1282885620401963080'};

const kinana={they:"Her husband Kināna was tortured with fire to reveal hidden treasure.",
  we:"That story has no chain back to the Prophet ﷺ. It comes from Ibn Isḥāq through Muḥammad ibn Ḥumayd al-Rāzī, a narrator the critics distrusted. Other reports say Kināna was handed over and executed for killing the Companion Maḥmūd ibn Maslama.",
  more:{h:"The Kināna report",
    p:["The torture story reaches us through Muḥammad ibn Ḥumayd al-Rāzī. Al-Dhahabī called him ṣāḥib ʿajāʾib, “a man of strange tales”; al-Bukhārī said his reports must be treated with great caution, and some called him a liar.",
       "Ibn Isḥāq gives no continuous chain (sanad) to the Prophet ﷺ for it. Imam Mālik, who knew him, criticised him for taking stories about Khaybar from Jewish sources (isrāʾīliyyāt).",
       "Al-Ṭabarī also reports that the Prophet ﷺ handed Kināna to Muḥammad ibn Maslama, who killed him in retaliation for his brother Maḥmūd, killed at Khaybar. Ibn Ḥajar likewise gives retaliation for Maḥmūd as the reason.",
       "Shibli Nomani: “The whole truth is that Kināna was killed, but not for refusing to reveal the treasure. He was killed because he had killed Maḥmūd ibn Maslama.” Cheragh Ali and Hajjah Amina Adil also call the torture story a fabrication.",
       "Mūsā ibn ʿUqba's early Maghāzī concentrates on the actual fighting at Khaybar and mentions no torture story.",
       "The channel also quotes Ḥāfiẓ Ibn Kathīr: “Muḥammad would never use torture as a means of extracting information; the story is probably a later fabrication”, and al-Dhahabī: “Such actions contradict the character of the Prophet Muḥammad.”"],
    src:["al-Ṭabarī, Tārīkh (via Ibn Ḥumayd ← Ibn Isḥāq)","al-Dhahabī, Mīzān al-Iʿtidāl (Ibn Ḥumayd)","Ibn Ḥajar","Shibli Nomani, Sīrat al-Nabī","Cheragh Ali","Mūsā ibn ʿUqba, al-Maghāzī"],
    credit:KF,link:L.kf},next:[]};

const sameDay={they:"He married her the same day her family died.",
  we:"No. He waited until her waiting period was complete, on the road back to Madinah, three nights out from Khaybar, and the wedding meal was dates, dried cheese and ghee.",
  more:{h:"The waiting period and the wedding",
    p:["Anas: when they reached Sadd al-Rawḥāʾ she became pure from her menses, and then the Prophet ﷺ married her (Bukhārī 4211). That waiting period (istibrāʾ) is a legal requirement precisely to prevent what the objection describes.",
       "Anas (Bukhārī 4213): the Prophet ﷺ stayed three nights between Khaybar and Madinah, where he married Ṣafiyya. Anas invited the Muslims to the wedding meal: no bread or meat, only dates, dried cheese (aqiṭ) and ghee on leather mats.",
       "People asked whether she was one of the Mothers of the Believers or a captive “his right hand possessed”. They said: if he veils her, she is a wife. When he set off, he made a place for her behind him and drew the screen between her and the people. So she was a full, honoured wife.",
       "Bukhārī 2235: on the journey he covered her with a cloak, then knelt by his camel and let her put her foot on his knee to mount."],
    src:["Bukhārī 4211, 4213, 2235"],credit:SF,link:L.sf},next:[]};

const consent={they:"A captive can't really consent. She just had no choice.",
  we:"She was given the choice in words: accept Islam and stay with him, or remain Jewish and be freed to go back to her people. She answered that Allah and His Messenger were dearer to her than freedom and going home.",
  more:{h:"Her own answer",
    p:["Ibn Ḥibbān 4530 (graded ṣaḥīḥ by al-Albānī): the Prophet ﷺ freed the captives, Ṣafiyya among them. He gave her the choice to be freed and become his wife, or to return to her people, and she chose to be freed and become his wife.",
       "Ibn Saʿd (al-Ṭabaqāt 8/123), from Ibrāhīm ibn Jaʿfar from his father: he said to her, “Your father was one of my worst enemies among the Jews until Allah killed him.” She replied, “O Messenger of Allah, Allah says in His Book: no bearer of burdens bears another's burden (6:164).” He said: “Choose. If you choose Islam, I will keep you for myself; if you prefer Judaism, I will free you to return to your people.” She said: “I love Islam and believed in you before you invited me. I have nothing left in Judaism, no father and no brother. Allah and His Messenger are dearer to me than freedom and returning to my people.”",
       "Anas reports that he freed her and made her freedom her dowry (Bukhārī 371, 5086)."],
    quote:{ar:"وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ",en:"“No bearer of burdens will bear the burden of another.” — al-Anʿām 6:164 (Ṣafiyya's own reply)"},
    src:["Ṣaḥīḥ Ibn Ḥibbān 4530","Ibn Saʿd, al-Ṭabaqāt 8/123","Bukhārī 371, 5086","Qurʾān 6:164"],credit:SF,link:L.sf},
  next:[{they:"She must have hated the man who killed her father.",
    we:"She says she did at first, and that he explained himself until the bitterness left her. Then she called him the most good-natured person she had ever seen, and wished at his deathbed that she could suffer in his place.",
    more:{h:"From bitterness to love",
      p:["Al-Bayhaqī (Dalāʾil al-Nubuwwa 4/230): Ṣafiyya recalled that she had hated the Prophet ﷺ because he had killed her father and her former husband. He explained to her: “Your father rallied the Arabs against me and committed a terrible act”, and kept explaining until her bitterness was gone.",
         "Her father Ḥuyayy ibn Akhṭab had been his declared enemy from the start. Ṣafiyya herself narrates that when the Prophet ﷺ arrived at Qubāʾ, her father and uncle went to see him. Her uncle asked: “Is it really him?” “Yes, by Allah.” “Do you recognise him?” “Yes.” “And what do you feel towards him?” “By Allah, I will be his enemy as long as I live” (Ibn Hishām 2/257–258).",
         "She said afterwards: “I have never seen anyone more good-natured than the Messenger of Allah ﷺ” (Abū Yaʿlā, Musnad 13/38).",
         "At his deathbed she said: “By Allah, O Messenger of Allah, I wish I were in your place.” The other wives winked at each other, and he said: “By Allah, she is telling the truth” (Ibn Saʿd 8/101).",
         "Before Khaybar she had dreamed that the moon fell into her lap. When she told Kināna, he struck her in the face, saying “You want the king of the Ḥijāz!”, and the bruise was still on her face when the Prophet ﷺ met her (Ibn Kathīr, al-Sīra)."],
      src:["al-Bayhaqī, Dalāʾil al-Nubuwwa 4/230","Ibn Hishām, al-Sīra 2/257–258","Abū Yaʿlā, Musnad 13/38","Ibn Saʿd, al-Ṭabaqāt 8/101","Ibn Kathīr, al-Sīra al-Nabawiyya","al-Ṭabarānī 19667"],credit:SF,link:L.sf},
    next:[{they:"Then why did the other wives look down on her?",
      we:"Some teased her Jewish lineage, and the Prophet ﷺ defended her: “Say: my father is Hārūn, my uncle is Mūsā, and my husband is Muḥammad.” She became known for her devotion and generosity.",
      more:{h:"Honoured, devout and generous",
        p:["When she was teased as the daughter of a Jew, the Prophet ﷺ told her to say: “How can you be better than me, when my husband is Muḥammad, my father is Hārūn and my uncle is Mūsā?” (al-Tirmidhī, Manāqib).",
           "She gave jewellery from Khaybar to Fāṭima and gifts to some of the other wives (Ibn Saʿd 8/100). She gave away everything she had for Allah's sake, even a house during her lifetime (Ibn Saʿd 8/102).",
           "When people gathered in her room reciting the Qurʾān and prostrating, she called out: “You have prostrated and recited, but where are your tears?” (Abū Nuʿaym, Ḥilyat al-Awliyāʾ 2/55).",
           "Ibn Kathīr: “She was one of the best of women in worship, piety, asceticism, devotion and charity” (al-Bidāya wa al-Nihāya 8/47)."],
        src:["al-Tirmidhī, Manāqib","Ibn Saʿd, al-Ṭabaqāt 8/100, 102","Abū Nuʿaym, Ḥilyat al-Awliyāʾ 2/55","Ibn Kathīr, al-Bidāya 8/47"],credit:SF,link:L.sf},next:[]}]}]};

topic(['islam','morality','marriage','safiyya'],{title:"Ṣafiyya bint Ḥuyayy",k:"Khaybar",blurb:"Married after Khaybar. Was she forced? Was Kināna tortured?",article:{
claim:"Muhammad tortured and killed Ṣafiyya's husband, then forced her to marry him the same day.",
tree:{
 they:"Muhammad killed Ṣafiyya's family at Khaybar, then took her as his wife.",
 we:"He freed her first, and her freedom was her dowry. She was offered the choice to go back to her people as a free woman, and she chose Islam and the Prophet ﷺ.",
 more:{h:"Freed, then married",
  p:["Anas reports that the Prophet ﷺ freed Ṣafiyya and made her freedom her dowry (Bukhārī 371, 5086).",
     "Ibn Ḥibbān (ṣaḥīḥ) and Ibn Saʿd record that he gave her the choice to be freed and return to her people, and she chose him.",
     "Her father Ḥuyayy ibn Akhṭab had sworn to be his enemy for life and rallied the tribes against Madinah. Khaybar was a war, not a raid on a peaceful family."],
  src:["Bukhārī 371, 5086","Ṣaḥīḥ Ibn Ḥibbān 4530","Ibn Saʿd, al-Ṭabaqāt 8/123","Ibn Hishām 2/257–258"],credit:SF,link:L.sf},
 next:[kinana,sameDay,consent]},
sum:"She was freed before marriage, told in words she could go home, and chose him. He married her only after her waiting period, veiled her as a full wife, explained himself until her bitterness left, and defended her against mockery. The torture story about Kināna rests on a broken, weak chain."
}});
cur.hide('islam/general/d-av-sonstiges-islam-3/c-saffiya-frau-des-propheten');
window.MOVES=(window.MOVES||[]).filter(op=>!/c-saffiya-frau-des-propheten$/.test(op.from));
})();
