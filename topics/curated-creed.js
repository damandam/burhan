/* Curated: Islam › Creed & theology. Overrides the raw Discord tiles (same paths), keeps their source links. */
(()=>{
const IA='https://discord.com/channels/1514269918978248796/';
const ex=(key,title,k,blurb,a)=>topic(['islam','creed',key],{title,k,blurb,article:Object.assign({type:'explainer'},a)});
const deb=(key,title,k,blurb,a)=>topic(['islam','creed',key],{title,k,blurb,article:a});

ex('d-ia-pillars-of-iman',"Pillars of īmān","Foundations","The six things every Muslim believes in.",{
 intro:"Īmān (faith) stands on six pillars. Jibrīl asked the Prophet ﷺ about them in front of the Companions, and he listed all six.",
 visual:{kind:'pillars',roof:'Īmān',items:[
  {h:"Allah",ar:"الله",sub:"One, without partner",p:["Belief in Allah's existence, His sole lordship, His sole right to worship, and His names and attributes as He described Himself."],more:{quote:{ar:"قُلْ هُوَ اللَّهُ أَحَدٌ",en:"“Say: He is Allah, the One.” — al-Ikhlāṣ 112:1"}}},
  {h:"Angels",ar:"الملائكة",sub:"Created from light",p:["Beings created from light who never disobey Allah, such as Jibrīl who brings revelation (Muslim 2996)."],more:{quote:{ar:"لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ",en:"“They do not disobey Allah in what He commands them.” — al-Taḥrīm 66:6"}}},
  {h:"Books",ar:"الكتب",sub:"Torah, Zabūr, Injīl, Qurʾān",p:["Allah revealed scriptures to His messengers. The Qurʾān is the last, preserved by Allah Himself."],more:{quote:{ar:"إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",en:"“Indeed We sent down the Reminder and We are its guardians.” — 15:9"}}},
  {h:"Messengers",ar:"الرسل",sub:"From Ādam to Muḥammad ﷺ",p:["Allah sent messengers to every nation with the same core message: worship Allah alone. Muḥammad ﷺ is the last of them."],more:{quote:{ar:"وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَّسُولًا",en:"“We sent to every nation a messenger.” — al-Naḥl 16:36"}}},
  {h:"The Last Day",ar:"اليوم الآخر",sub:"Resurrection & judgement",p:["Belief in death, the grave, resurrection, the reckoning, Paradise and Hell."]},
  {h:"Qadar",ar:"القدر",sub:"Decree, good and bad",p:["Allah knows, has written, wills and creates everything that happens, while humans keep a real, accountable choice."],more:{quote:{ar:"إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ",en:"“Indeed, We created all things with measure (qadar).” — al-Qamar 54:49"}}}]},
 cards:[
  {h:"The ḥadīth of Jibrīl",short:"A stranger in white sat knee to knee with the Prophet ﷺ and asked about Islam, Īmān and Iḥsān.",p:["ʿUmar ibn al-Khaṭṭāb reports that a man appeared, dressed in very white clothes with very black hair, with no sign of travel, whom none of them knew. He sat facing the Prophet ﷺ and asked about Islam, then Īmān, then Iḥsān, then the Hour.","The Prophet ﷺ answered: Īmān is “to believe in Allah, His angels, His books, His messengers and the Last Day, and to believe in qadar, its good and its bad.” Afterwards he said: “That was Jibrīl, who came to teach you your religion.” (Muslim 8)"]},
  {h:"Islam vs. Īmān",short:"Mentioned together, Islam is the outward actions and Īmān the inner beliefs; mentioned alone, each includes the other.",p:["The five pillars of Islam: the testimony of faith, prayer, zakāt, fasting Ramaḍān and Ḥajj.","If both words are mentioned together, each has its own meaning: Islam for outward deeds, Īmān for inner belief. If one is mentioned alone, it includes the other."]}],
 evidence:[{ar:"آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ",en:"“The Messenger believes in what was sent down to him from his Lord, and so do the believers. All believe in Allah, His angels, His books and His messengers.”",ref:"al-Baqara 2:285"}],
 sum:"Six pillars hold up faith: Allah, His angels, His books, His messengers, the Last Day and qadar, all named by the Prophet ﷺ in the ḥadīth of Jibrīl.",
 credit:"Islamic Apologetics · #pillars-of-iman",link:IA+"1515055459252441241"});

ex('d-ia-understanding-the-athari-creed',"The Atharī creed","Method","How the early Muslims understood Allah's names and attributes.",{
 intro:"The Salaf's method has three foundations: affirm what Allah and His Messenger ﷺ affirmed, deny any likeness to creation, and don't ask “how”.",
 visual:{kind:'steps',items:[
  {h:"Affirm",sub:"What Allah affirmed for Himself",p:["Affirm for Allah what He and His Prophet ﷺ affirmed, without adding or removing.","Imam Aḥmad: “We describe Him as He described Himself, and we do not exceed the Qurʾān and ḥadīth.” (Ibn Baṭṭa, al-Ibāna al-Kubrā)"]},
  {h:"No likeness",sub:"Nothing is like Him",p:["Affirming an attribute never means it resembles a creature's. “There is nothing like Him, and He is the All-Hearing, the All-Seeing” (42:11)."]},
  {h:"No “how”",sub:"Bilā kayf",p:["We don't ask about or imagine the modality. Mālik: “The istiwāʾ is known, the how is unknown, believing in it is obligatory, and asking about it is an innovation.”"]}]},
 cards:[{h:"Only revelation describes Allah",short:"ʿAbd al-Raḥmān ibn al-Qāsim: no one may describe Allah except with what He described Himself.",p:["ʿAbd al-Raḥmān ibn al-Qāsim (d. 191 AH), the companion of Imam Mālik, said it is not permissible for anyone to describe Allah except with what He described Himself in the Qurʾān."]}],
 evidence:[{ar:"لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ",en:"“There is nothing like Him, and He is the All-Hearing, the All-Seeing.”",ref:"al-Shūrā 42:11"}],
 sum:"Affirm what revelation affirms, deny any likeness to creation, and leave the “how” to Allah.",
 credit:"Islamic Apologetics · #understanding-the-athari-creed",link:IA+"1515055344643084420"});

ex('d-ia-istiwa',"Istiwāʾ: Allah above the Throne","Attributes","Affirmed as it came, without distortion or likeness.",{
 intro:"Allah rose over the Throne (istawā) in a way that befits Him. The same rule applies to every attribute: hearing, seeing, hands and the rest.",
 cards:[
  {h:"Apparent meaning, no likeness",short:"Affirm the attribute by its apparent meaning, without distortion, reinterpretation, likening or denial.",p:["The early Muslims affirmed attributes according to their apparent meaning without taḥrīf (distortion), taʾwīl (reinterpretation), tashbīh (likening to creation) or taʿṭīl (denial), and without asking about modality."]},
  {h:"Mālik's rule",short:"“The istiwāʾ is known, the how is unknown.”",p:["Imam Mālik: the istiwāʾ is known, its how is unknown, believing in it is obligatory and asking about the how is an innovation."]},
  {h:"Ad-Dārimī against the Jahmiyya",short:"Imam ad-Dārimī wrote a whole refutation of those who denied Allah's attributes.",p:["In Naqḍ ʿUthmān ibn Saʿīd ʿalā al-Marīsī, Imam ad-Dārimī refutes the Jahmī claims that emptied the attributes of meaning."]}],
 evidence:[{ar:"الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَىٰ",en:"“The Most Merciful rose over the Throne.”",ref:"Ṭā Hā 20:5"}],
 sum:"Istiwāʾ is affirmed as Allah stated it: real, befitting Him, unlike any creature, with its “how” unknown.",
 credit:"Islamic Apologetics · #istiwa",link:IA+"1515055770142773358"});

ex('d-ia-uncreated-quran',"The Qurʾān is uncreated","Attributes","Allah's speech is His attribute, not a creation.",{
 intro:"The Qurʾān is the speech of Allah, and His speech is His attribute, so it is not created. This was the test of the great imams.",
 cards:[
  {h:"Imam Aḥmad",short:"“The Qurʾān is the word of Allah and it is not created.”",p:["Imam Aḥmad in Uṣūl al-Sunna: the Qurʾān is the word of Allah and not created, because Allah's words are not separate from Him and nothing of Him is created. He was imprisoned and flogged in the Miḥna rather than say otherwise."]},
  {h:"Imam al-Shāfiʿī",short:"Whoever says the Qurʾān is created is a Jahmī.",p:["al-Shāfiʿī: “Whoever says my utterance of the Qurʾān, or the Qurʾān itself, is created is a Jahmī.”"]}],
 sum:"Speech is an attribute of Allah, and nothing of Allah is created. The Qurʾān is His speech, so it is uncreated.",
 credit:"Islamic Apologetics · #uncreated-quran",link:IA+"1515056211173834752"});

ex('d-ia-innovation-in-religion',"Innovation (bidʿa)","Sunnah","Why more worship isn't always better.",{
 intro:"Worship is only what Allah and His Messenger ﷺ prescribed. Adding to it, even with good intentions, is innovation.",
 cards:[{h:"Saʿīd ibn al-Musayyab and the pebble",short:"“I don't fear Allah will punish you for praying a lot, but for abandoning the Sunnah.”",p:["Saʿīd ibn al-Musayyab saw a man praying many voluntary prayers after the adhān of Fajr and threw a pebble at him: “If you don't know, ask. There is no prayer after the adhān except two rakʿas.”","The man asked: “Do you fear Allah will punish me for praying a lot?” He replied: “No, I fear He will punish you for abandoning the Sunnah.” (al-Khaṭīb, al-Faqīh wa al-Mutafaqqih 1/381, ḥasan)"]}],
 evidence:[{ar:"مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ",en:"“Whoever introduces into this matter of ours what is not from it, it is rejected.”",ref:"Bukhārī 2697, Muslim 1718"}],
 sum:"Following the Sunnah outweighs adding to it. Good intentions don't turn an invented act into worship.",
 credit:"Islamic Apologetics · #innovation-in-religion",link:IA+"1515056443253063680"});

ex('d-ia-divine-governance',"Ruling by Allah's law","Governance","Lesser vs. greater disbelief in judging.",{
 intro:"Judging by other than Allah's law is sometimes a sin and sometimes disbelief. The scholars distinguish the two cases.",
 visual:{kind:'compare',left:{title:"Lesser kufr",items:[{h:"A one-off ruling",sub:"Believes he is sinning and that Allah's law is right",p:["“Kufr dūna kufr” (disbelief lesser than disbelief): a judge rules once against Allah's law while knowing he is disobedient and that Allah's ruling is the truth."]}]},
  right:{title:"Greater kufr",items:[{h:"A replacement legal system",sub:"Systematic laws imposed instead of the Sharīʿa",p:["Shaykh Muḥammad ibn Ibrāhīm: whoever establishes systematic, binding laws in place of the Sharīʿa commits disbelief, even if they admit “the Sharīʿa is more just”. Shaykh Ṣāliḥ al-Fawzān comments on this in his explanation of Kitāb al-Tawḥīd."]}]}},
 sum:"A single sinful ruling is lesser disbelief; replacing Allah's law with another system is greater disbelief.",
 credit:"Islamic Apologetics · #divine-governance",link:IA+"1515056529030647989"});

ex('d-ia-obeying-the-ruler',"Obeying the Muslim ruler","Governance","Patience with unjust rulers.",{
 intro:"Ahl al-Sunna hear and obey Muslim rulers in what is good, even when they are unjust, and stay patient rather than revolt.",
 cards:[{h:"The ḥadīth of Ḥudhayfa",short:"“Listen and obey the leader, even if he strikes your back and takes your wealth.”",p:["The Prophet ﷺ foretold leaders who would not follow his guidance. Ḥudhayfa asked what to do; he said: “Listen and obey the leader, even if he strikes your back and takes your wealth.” (Muslim 1847)"]},
  {h:"Never in disobedience",short:"Obedience is only in what is good.",p:["“There is no obedience to a creature in disobedience to the Creator” (Aḥmad). Obedience is in what is good (Bukhārī 7257)."]}],
 credit:"Islamic Apologetics · #obeying-the-ruler",link:IA+"1515056606537191617"});

ex('d-ia-rebelling-against-the-ruler',"Rebelling against the ruler","Governance","Why the Salaf forbade armed revolt.",{
 intro:"The Salaf forbade armed rebellion against Muslim rulers, even tyrants, because of the bloodshed and division it causes.",
 cards:[{h:"al-Ḥasan al-Baṣrī on al-Ḥajjāj",short:"“Fear Allah and repent to Him; this will suffice you against his oppression.”",p:["Asked about rebelling against the tyrant al-Ḥajjāj, al-Ḥasan al-Baṣrī said: “Fear Allah and repent to Him; this will suffice you against his oppression.” (Ibn al-Jawzī, Ādāb al-Ḥasan al-Baṣrī 1/118)"]},
  {h:"al-Barbahārī",short:"Whoever rebels against a Muslim ruler is a Khārijī.",p:["“Whoever rebels against a Muslim ruler is one of the Khawārij, has split the Muslims, contradicted the narrations and died the death of jāhiliyya.” (Sharḥ al-Sunna #29)"]}],
 credit:"Islamic Apologetics · #rebelling-against-the-ruler",link:IA+"1524060505306828861"});

ex('d-ia-al-wala-wal-bara',"Al-walāʾ wa al-barāʾ","Loyalty","Loyalty to believers, and justice to everyone.",{
 intro:"Loving the believers and disavowing disbelief doesn't mean mistreating non-Muslims. Kindness isn't approval of their religion.",
 visual:{kind:'compare',left:{title:"Allowed and good",items:[{h:"Kindness and justice",sub:"60:8",p:["Allah doesn't forbid you from being kind and just to those who don't fight you because of your religion (60:8)."]},{h:"Believing they're wrong",sub:"without mistreating them",p:["A Muslim can believe Christianity is incorrect without mistreating Christians."]}]},
  right:{title:"Not allowed",items:[{h:"Approving of disbelief",sub:"walāʾ is for Allah's religion",p:["Kindness never means approving of a false religion or taking its people as allies against the believers."]}]}},
 evidence:[{ar:"لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ … أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ",en:"“Allah does not forbid you from those who do not fight you because of religion… from being kind to them and acting justly toward them.”",ref:"al-Mumtaḥana 60:8"}],
 credit:"Islamic Apologetics · #al-wala-wal-bara",link:IA+"1566728538483204106"});

ex('d-ia-swearing-by-other-than-allah',"Swearing by other than Allah","Shirk","A form of minor shirk.",{
 intro:"Swearing an oath by anything other than Allah, such as the Prophet, the Kaʿba or one's parents, is forbidden.",
 evidence:[{en:"“Whoever swears by other than Allah has committed disbelief or shirk.”",ref:"al-Tirmidhī 1535"}],
 cards:[{h:"Also in Shia sources",short:"The channel cites al-Kāfī (vol. 7) on the same prohibition.",p:["The channel shows the prohibition from Sunnī sources (al-Tirmidhī 1535) and from Uṣūl al-Kāfī vol. 7, book 7, chapters 4 and 14, plus PDFs on understanding shirk and al-Albānī's “The Origins of Shirk”."]}],
 credit:"Islamic Apologetics · #swearing-by-other-than-allah",link:IA+"1545144857918439574"});

deb('d-ia-stone-bigger-than-allah',"Can Allah make a stone He can't lift?","Omnipotence","The classic “paradox of the stone”.",{
 claim:"If Allah is all-powerful, can He make a stone so heavy He can't lift it? Either way He isn't all-powerful.",
 tree:{they:"Can Allah create a stone so heavy that He can't lift it?",
  we:"The question contradicts itself: it asks for a being who is all-powerful and not all-powerful at once. A contradiction isn't a “thing”, so failing to do it is no weakness.",
  more:{h:"Power over every possible thing",p:["Ask an expert driver to turn left and right at the same time: he can't, not from lack of skill but because the action is impossible. The same applies here.","Ibn Taymiyya: Allah is able to do every possible thing. What is inherently impossible, like something existing and not existing, has no reality and isn't called “a thing” by the agreement of rational people (Minhāj al-Sunna 2/293).","So Allah can't make such a stone, not because of weakness but because His power can't be limited by something He creates."],
   src:["Ibn Taymiyya, Minhāj al-Sunna 2/293","Qurʾān 2:20"],credit:"Islamic Apologetics · #stone-bigger-than-allah",link:IA+"1538617665470464030"},
  next:[]},
 sum:"Omnipotence is power over everything possible. A self-contradiction isn't a task, so “failing” it says nothing about Allah's power."});

deb('d-ia-hyena-dilemma',"The hyena dilemma","Ḥalāl & ḥarām","“Why pork but not hyena?”",{
 claim:"Islam bans pork and blood as harmful but allows hyena meat, which is also harmful. So the rules are inconsistent.",
 tree:{they:"Pork is forbidden for being harmful, yet hyena is allowed. That's inconsistent.",
  we:"The Sharīʿa doesn't forbid food because of claimed harm, but because Allah named it impure. He called pork “filth” and flowing blood impure; the Prophet ﷺ explicitly ruled hyena lawful game.",
  more:{h:"Revelation decides, not analogy",p:["Jābir ibn ʿAbdillāh was asked about hyena and said it is game, with a ram as its compensation for a pilgrim who kills it; asked “Did you hear that from the Messenger of Allah?” he said “Yes” (al-Tirmidhī 851).","Pork: Allah says “it is filth (rijs)” (6:145). Blood: “poured-out blood” (6:145). Their impurity is named in revelation, not guessed by humans.","An analogy can't override an explicit text. Once the Prophet ﷺ classed hyena as lawful game, speculative claims of harm don't overturn it."],
   quote:{ar:"أَوْ لَحْمَ خِنزِيرٍ فَإِنَّهُ رِجْسٌ",en:"“…or the flesh of swine, for it is filth.” — al-Anʿām 6:145"},
   src:["al-Tirmidhī 851","Qurʾān 6:145"],credit:"Islamic Apologetics · #hyena-dilemma",link:IA+"1519794853364633671"},
  next:[]},
 sum:"Rulings follow revelation, not guesses about harm. Allah named pork and blood impure; the Prophet ﷺ named hyena lawful."});

deb('d-ia-is-allah-the-father',"Is Allah “the Father”?","Terms","What “father” and “son” meant in earlier scriptures.",{
 claim:"The Bible calls God “Father” and Jesus “Son”, so Islam rejects the true God.",
 tree:{they:"The Bible calls God “Father” and Jesus His “Son”. Muslims reject that.",
  we:"We don't dispute that Jesus is the Messiah, nor “son” in their language meaning mercy and closeness. Scholars explained long before Ibn Taymiyya that “father” meant cause or originator, and only the ignorant took it as birth.",
  more:{h:"Father = Creator and Originator",p:["Ibn Taymiyya: Allah is a “father” in the sense of Creator, Originator and Sustainer, compassionate to the believers; “son” in their language meant mercy and closeness.","Christians claim this is a late answer. But al-Bayḍāwī, five decades before Ibn Taymiyya, said earlier religions used “father” and “son” for cause and effect, calling God “father” as the original cause; the ignorant then took it as birth, so it was forbidden. al-Biqāʿī agreed.","Even earlier: al-Wāḥidī (d. 468 AH) and Ibn Qutayba (213–276 AH), student of Isḥāq ibn Rāhawayh, gave the same explanation."],
   src:["Ibn Taymiyya","al-Bayḍāwī (on al-Kahf, al-Baqara)","al-Biqāʿī","al-Wāḥidī","Ibn Qutayba"],credit:"Islamic Apologetics · #is-allah-the-father",link:IA+"1514756651360719051"},
  next:[]},
 sum:"“Father” meant Originator, not begetter, as Muslim scholars explained centuries before Ibn Taymiyya."});
})();
