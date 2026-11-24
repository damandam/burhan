/* Hadith block 8 — 2026-11-20. Merge clean-up: seven Averroes tiles were merged into finished cards as German one-liners.
   Their content is now added as proper English branches on the existing cards, the merges are removed and the tiles hidden:
   #frau-hund-aisha → woman/donkey/dog card, #juden-vertreiben-halbinsel → expel card, #mehr-frauen-hölle → 3241 card,
   #gabriel-erwürgen → Gabriel squeeze card, #prophet-saw-küsst-thora → Abū Dāwūd 4449 card, #eva-hat-adam-verraten → Eve 3399 card,
   #allah-swt-bart-locken → dream card; primary classical sources and rijāl gradings are documented inline. */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const H='islam/hadith/', HR=H+'d-ia-hadith-refutations/', CR=H+'d-ia-contributed-refutations/';
const A1='islam/general/d-av-sonstiges-islam-1/c-', A2='islam/general/d-av-sonstiges-islam-2/c-';
/* append a branch to the top level of an existing card */
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue; if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('block8: no card',key); };
const folded=/c-(frau-hund-aisha|juden-vertreiben-halbinsel|mehr-frauen-ho-lle|gabriel-erwu-rgen|prophet-saw-ku-sst-thora-und-glaubt-daran|eva-hat-adam-verraten|allah-swt-bart-locken)$/;
window.MOVES=(window.MOVES||[]).filter(op=>!(op.type==='merge'&&folded.test(op.from)));
['frau-hund-aisha','juden-vertreiben-halbinsel','mehr-frauen-ho-lle','gabriel-erwu-rgen','prophet-saw-ku-sst-thora-und-glaubt-daran','eva-hat-adam-verraten'].forEach(k=>cur.hide(A2+k));
cur.hide(A1+'allah-swt-bart-locken');

/* Woman, donkey, dog */
const WD=AV('frau-hund-aisha','1282691049432547463');
add(HR+'t-bukhari-514-donkey-woman-dog',{they:"It's still the Prophet's ﷺ own words, putting women next to dogs and donkeys.",
 we:"Possibly not: the critics' final verdict is that the mawqūf version, Ibn ʿAbbās's own statement, is the more correct one. The precise narrators Saʿīd, Hishām and Hammām narrate it from Qatāda → Jābir ibn Zayd as Ibn ʿAbbās's words, and in ʿAbd ibn Ḥumayd (576) the narrator says “I think he raised it to the Prophet ﷺ”: a doubt.",
 more:Object.assign({h:"Mawqūf, a mature woman, and distraction",p:[
  "Abū Dāwūd notes Saʿīd, Hishām and Hammām narrate it as Ibn ʿAbbās's statement; Aḥmad preferred Hishām over Shuʿba as the more precise ḥāfiẓ. Muḥammad ibn ʿAbd al-Fattāḥ al-Minūfī: “it appears, and Allah knows best, that the mawqūf version is more correct” (as documented by Abū Uways al-Kurdī).",
  "Ibn Mājah 949: “a black dog and a woman who has reached menstruation (al-ḥāʾiḍ)”. A worshipper can't know whether a passing woman is menstruating, so it means a woman of that age: the point is the distraction of attraction, not womanhood. Otherwise a girl would also count.",
  "Al-Nawawī: Mālik, Abū Ḥanīfa, al-Shāfiʿī and most of the Salaf and Khalaf hold that nothing passing invalidates the prayer; “cuts off” means it lessens its perfection through distraction of the heart. Al-Qurṭubī: women tempt, donkeys bray, dogs frighten. Ibn Rajab: the worshipper is told to guard his closeness to Allah from Satan's intrusion, hence the sutra.",
  "The Prophet ﷺ prayed while ʿĀʾisha lay between him and the qibla; Ibn ʿAbbās's donkey passed in front of a row; at Minā a donkey and a dog passed in front of his spear: the prayer wasn't broken.",
  "The warning is general, not about women: “If the one who passes in front of a worshipper knew what he bears, standing forty would be better for him than passing” (Bukhārī 510).",
  "Al-Mubārakfūrī (Minnat al-Munʿim): the woman meant is a stranger, since the distraction and temptation don't exist with one's wife; and “houses had no lamps then”.",
  "Companions compared their own behaviour to animals without insult: ʿAmmār ibn Yāsir “rolled in the dust as an animal does” (Bukhārī, Muslim). Mentioning things together isn't equating them. And Jesus called a woman a dog (Matthew 15:26).",
  "Simple mosques avoid distraction: “I was not commanded to build lofty mosques” (Abū Dāwūd 448)."],src:["Ibn Mājah 949","Bukhārī 510","ʿAbd ibn Ḥumayd 576","Abū Dāwūd 448","Matthew 15:26"]},WD),next:[]});

/* Expelling Jews and Christians */
const EX=AV('juden-vertreiben-halbinsel','1282002746626801674');
add(H+'d-dr-expel-ahlul-kitab-from-arabia',{they:"ʿUmar carried it out: he expelled the Jews of Khaybar and the Christians of Najrān for their religion.",
 we:"He expelled them for breaking their treaties, not for their faith. The Khaybar treaty itself allowed expulsion on breach. The Jews of Khaybar attacked ʿAbdullāh ibn ʿUmar and dislocated his hands and feet, and the Christians of Najrān broke their treaty by taking usury. Taymāʾ, outside the Ḥijāz, was left alone.",
 more:Object.assign({h:"The historical reasons",p:[
  "“I will expel the Jews and Christians from the Arabian Peninsula and leave none but Muslims” (Muslim 1767). In the usage of the time, the “peninsula” meant the region of Mecca and Medina, the Ḥijāz.",
  "Futūḥ al-Buldān and other sources report repeated breaches of the peace treaty and mistreatment of Muslims; ʿUmar expelled the Jews of Khaybar and Fadak, while places like Taymāʾ, closer to Syria, were spared.",
  "The attack on ʿAbdullāh ibn ʿUmar in Khaybar, in which his hands and feet were dislocated: ʿUmar mentioned it in a sermon and decided on the expulsion for the Muslims' safety. Other reports document killings of Muslims.",
  "Najrān: the Christians broke their treaty by practising usury.",
  "The Ḥijāz is dedicated to the pilgrimage and the Prophet's ﷺ mosque; most scholars still allowed non-Muslims to visit Mecca and Medina with permission for legitimate business.",
  "The Prophet ﷺ also said: “After me there will be conflicts; if you can end them peacefully, do so” (Musnad Aḥmad 695, ṣaḥīḥ). Mālik: a peace treaty with idolaters may be made for one, two or three years, or without time limit (al-Qurṭubī on 8:61)."],src:["Muslim 1767","al-Balādhurī, Futūḥ al-Buldān","Musnad Aḥmad 695","al-Qurṭubī on 8:61"]},EX),next:[]});

/* Most of the people of Hell are women */
const MW=AV('mehr-frauen-hölle','1279116962714091561');
add(CR+'t-sahi-h-al-bukha-ri-3241-most-women-in-hellfire',{they:"So most women go to Hell.",
 we:"That's not what “most of the people of Hell” means. If there are more women than men among humanity, they can be the majority in Hell and in Paradise at the same time, and Qāḍī ʿIyāḍ and Ibn Ḥajar say exactly that: women are also the majority of the people of Paradise.",
 more:Object.assign({h:"Majority of a place, not of a group",p:[
  "Qāḍī ʿIyāḍ: “This ḥadīth shows women are the majority of the people of Paradise, and another ḥadīth that they are the majority of the people of the Fire. It follows that women are the majority of the children of Ādam” (Sharḥ al-Nawawī ʿalā Muslim, on 2834).",
  "Ibn Ḥajar: Abū Hurayra used this ḥadīth to prove women are more numerous in Paradise than men, as Muslim narrates via Ibn Sīrīn (Fatḥ al-Bārī 6/325).",
  "“Most of the pupils in this class are boys” doesn't mean most boys in the world are in that class. If 10% of all women and 10% of all men were in Hell, women would still be the majority there simply because there are more of them. And a majority can be 51% to 49%.",
  "The reasons actually named, and nothing more: frequent cursing (tukthirna al-laʿn: “God curse you”, not modern swearing) and ingratitude to the ʿashīr (Bukhārī 304; Muslim 79/80); denying kindness received (Bukhārī 29, 1052; Muslim 907), illustrated by “I never saw any good from you”; not thanking when given and not being patient when tried (Aḥmad 15531; al-Ḥākim 2773; al-Albānī, al-Ṣaḥīḥa 3058). Four of these are one thing, ingratitude for blessings. “Deficient in intellect and religion” is a separate exchange, not given as a reason for Hell.",
  "ʿAshīr: linguistically the close companion one lives with (al-Nawawī); most applied it to the husband. Ibn Ḥajar: “the husband, or more general than that” (Fatḥ 1/406). Ibn ʿAbd al-Barr: the ʿashīr here is the husband, then the denial of kindness in general is attached, to the husband and others.",
  "Why these sins: minor sins become dangerous when they are normalised and never repented. Cursing and ingratitude easily become habits nobody recognises as sins. The Prophet ﷺ immediately gave the remedy: give charity and seek forgiveness. The severity of a sin and the number of people are different questions. (This is a possible explanation, not one stated by the Prophet ﷺ.)"],src:["Bukhārī 29, 304, 1052","Muslim 79, 907, 2834","Fatḥ al-Bārī 1/406; 6/325","al-Albānī, al-Ṣaḥīḥa 3058"]},MW),next:[]});

/* Gabriel's squeeze */
const GS=AV('gabriel-erwürgen','1280555437091197020');
add(HR+'t-gabriel-squeezed-muhammad-صلى-الله-عليه-وسلم',{they:"A real angel wouldn't terrify a prophet like that.",
 we:"Al-Ṭabarī reports that Jibrīl told him not to be afraid, and Ibn Hishām that Jibrīl introduced himself and told him he was a true prophet. The squeeze cleared his mind of worldly thoughts, warned him of the weight of what was coming, showed that reading comes from Allah, and proved the experience was real, not a thought or whisper. And in the Bible, every meeting with an angel brings terror.",
 more:Object.assign({h:"Why, and the Bible's angels",p:[
  "Al-Ṭabarī: Jibrīl told him not to be frightened. The reasons given: to free him from worldly thoughts; a warning that a great task and heavy words were coming (73:5); to show his dependence: the ability to read is from Allah; and to show it was real, not imagination or whispering.",
  "Ibn Hishām: Jibrīl introduced himself and said he was a true prophet.",
  "Daniel 8:15–18: when Gabriel appeared, Daniel “was frightened and fell on my face.” Daniel 10:7–9: the men with him saw nothing yet fled in terror; Daniel was left without strength, deathly pale.",
  "Acts 9: Paul is blinded for three days; the men with him hear the voice (9:7): a real effect, not a vision. Ezekiel 3:14–15: the hand of the LORD was strong on him and he sat overwhelmed for seven days.",
  "Luke 1:11–12 (Zechariah), 1:26–30 (Mary), 2:9–10 (the shepherds) are struck with fear; Matthew 28:2–4: the guards “became like dead men”; Judges 13:6–22: Manoah fears he will die; Revelation 1:17: John falls “as though dead”."],src:["Qurʾān 73:5","Daniel 8:15–18; 10:7–9","Acts 9:3–9","Ezekiel 3:14–15","Luke 1:12; 1:29; 2:9","Matthew 28:4","Revelation 1:17"]},GS),next:[]});

/* Abū Dāwūd 4449 */
const TK=AV('prophet-saw-küsst-thora-und-glaubt-daran','1282513556671172799');
add(H+'d-dr-abu-dawud-4449-torah-preserved',{they:"Al-Albānī graded the narration ḥasan.",
 we:"That grade covers the story, which al-Bukhārī also tells: he judged the Jews by the Torah because they were Jews, as with Banū Qurayẓa, where their leader's verdict followed their own law. The addition about placing the Torah on a cushion and “I believe in you” comes only from Hishām ibn Saʿd and isn't in al-Bukhārī, like the goat that “ate” verses.",
 more:Object.assign({h:"What the critics said about Hishām ibn Saʿd",p:["Ibn Ḥazm: the report that he took the Torah and said “I believe in you” is fabricated and false, without a proper chain (al-Fiṣal 1/237).","Aḥmad: he wasn't a ḥāfiẓ, Yaḥyā al-Qaṭṭān didn't narrate from him, he wasn't good in ḥadīth. Al-Nasāʾī: weak. Ibn Maʿīn: Hishām ibn Saʿd is weak. Ibn ʿAdī: his ḥadīth is weak but written down. He changed chains without understanding (Ibn Ḥibbān, al-Majrūḥīn)."],src:["Ibn Ḥazm, al-Fiṣal 1/237","Ibn Ḥibbān, al-Majrūḥīn"]},TK),next:[]});

/* Eve's “betrayal” */
const EV=AV('eva-hat-adam-verraten','1291547362325561396');
add(HR+'t-eve-betrayal-bukhari-3399-muslim-1470',{they:"“Betrayal” means Eve was unfaithful to Ādam.",
 we:"The scholars explain the word: Ibn al-Jawzī: “Ḥawwāʾ's betrayal of her husband was that she failed in giving him counsel about the tree, and nothing else.” Ibn al-Athīr says the same. How could Eve be unfaithful when she and Ādam were the only humans?",
 more:Object.assign({h:"What “khiyāna” means here, and no original sin",p:["Ibn al-Jawzī, Kashf al-Mushkil 3/504; Ibn al-Athīr, Jāmiʿ al-Uṣūl 10/325: the quote above.","Against inherited sin: “Whoever performs Ḥajj for Allah without obscenity or sin returns like the day his mother bore him” (Bukhārī 1521): every person is born free of sin."],src:["Ibn al-Jawzī, Kashf al-Mushkil 3/504","Ibn al-Athīr, Jāmiʿ al-Uṣūl 10/325","Bukhārī 1521"]},EV),next:[]});

/* Allah as a young man with curly hair */
const BL=AV('allah-swt-bart-locken','1275837338689339445');
add(H+'d-dr-allah-came-in-a-dream-as-a-young-boy',{they:"The narration says he saw his Lord curly-haired and beardless in a green garment.",
 we:"All its chains go back to Ḥammād ibn Salama, and Ibn ʿAdī reports that Ibn Abī al-ʿAwjāʾ, his stepson, used to insert such ḥadīth into his books. Ibn al-Jawzī: “not established”. The Umm al-Ṭufayl version is fabricated (al-Shawkānī). And the Bible describes God with white hair like wool (Daniel 7:9).",
 more:Object.assign({h:"The chains, a dream, and Daniel",p:[
  "Al-Albānī: the marfūʿ ḥadīth of Ḥammād ← Qatāda ← ʿIkrima ← Ibn ʿAbbās, “I saw my Lord curly-haired, beardless, in a green garment”, is weak, as al-Dhahabī said in al-Siyar (al-Ḍaʿīfa).",
  "Ibn al-Jawzī, al-ʿIlal al-Mutanāhiya: “This ḥadīth is not established; all its routes come from Ḥammād ibn Salama. Ibn ʿAdī said: Ibn Abī al-ʿAwjāʾ was Ḥammād's stepson and used to insert these ḥadīth into his books.”",
  "Umm al-Ṭufayl's wording (a noble young man, green feet, golden sandals, a golden bed): al-Shawkānī: fabricated; its chain has a forger, a liar and an unknown (al-Fawāʾid al-Majmūʿa).",
  "Even if a dream: Ibn Taymiyya explains that the Prophet ﷺ said he did not see his Lord, “you will not see your Lord until you die”, and ʿĀʾisha: whoever claims Muḥammad saw his Lord has lied; “vision cannot grasp Him” (6:103) refers to eyes in this world. What is seen in a dream can be in any form, like Muʿādh's report “my Lord came to me in the best form” in a dream (Bayān Talbīs al-Jahmiyya 7/222–250).",
  "Daniel 7:9: “the Ancient of Days took his seat; his clothing was white as snow, and the hair of his head like pure wool.”"],src:["al-Albānī, al-Ḍaʿīfa","Ibn al-Jawzī, al-ʿIlal al-Mutanāhiya","al-Shawkānī, al-Fawāʾid al-Majmūʿa","Ibn Taymiyya, Bayān Talbīs al-Jahmiyya 7/222–250","Qurʾān 6:103","Daniel 7:9"]},BL),next:[]});
})();
