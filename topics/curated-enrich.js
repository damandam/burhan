/* Enrichment pass: prophecy tiles get the reasoning, the usual objection and the answer (audit: answers too thin). */
(()=>{
const V='christianity/islam-vs/', PR='islam/proofs/d-ia-prophecies-1/';
const yt=id=>`youtube.com/watch?v=${id}`;
const bib=(key,title,ref,text,reading,why,objection,answer,src,credit)=>cur.ex(V+key,{title,k:"Prophecy",blurb:ref,
  intro:`How Muslims read ${ref}, the usual Christian objection, and the answer.`,
  visual:{kind:'compare',left:{title:"The text",items:[[text,ref]]},right:{title:"The Muslim reading",items:[[reading,"Fulfilment"]]}},
  cards:[["Why this reading works",why[0],why],["The usual objection",objection],["The answer",answer[0],answer]],sum:reading,credit});

bib('d-dr-isaiah-54',"Isaiah 54: the barren woman","Isaiah 54:1–3","“Sing, O barren one, who did not bear… for the children of the desolate one will be more than the children of the married wife… your offspring will possess the nations.”",
 "Makkah, the “barren” city that had no prophet, receives the final prophet and revelation and outnumbers Jerusalem.",
 ["Isaiah 54 contrasts a barren woman with a married one; Ishmael's mother Hagar was cast out into the desert (Genesis 21), while Sarah's line received the prophets.","Ibn Qutayba (d. 276 AH) already read it as Makkah: the barren city with no prophet that will have more children than Jerusalem."],
 "Paul applies the barren woman to the Church (Galatians 4:27), so it's about Christians.",
 ["Paul's own allegory in Galatians 4 links the slave woman Hagar with Arabia (4:25), so even his reading keeps the passage pointed at Hagar's line.","Makkah, Hagar and Ishmael's valley, became the centre of worship for over a billion people: “more children than the married wife”."],
 ["Isaiah 54:1–3","Genesis 21:9–21","Galatians 4:22–27","Ibn Qutayba"],"Deenresponds · #isaiah-54");
bib('d-dr-isaiah-21',"Isaiah 21: the burden upon Arabia","Isaiah 21:7, 13–17","A rider on a donkey and a rider on a camel; “the oracle concerning Arabia”; Tema brings water to the thirsty, fugitives flee the sword; “within a year all the glory of Kedar will end.”",
 "Two riders, Jesus on a donkey and Muḥammad ﷺ on a camel; the Hijra (fugitives received at Tema, near Madinah) and Badr, where Quraysh, the sons of Kedar, were defeated about a year later.",
 ["Kedar is Ishmael's second son, the ancestor of the Quraysh (Genesis 25:13).","Tema is an oasis in north-west Arabia; the Hijra brought refugees to Madinah who were given food and water.","Badr came about a year and a half after the Hijra; Quraysh's leaders fell there."],
 "The chapter is about the fall of Babylon (21:9) in the 6th century BC, not the 7th century AD.",
 ["The chapter has several separate oracles; the Arabia oracle (21:13–17) is its own section with its own heading.","The Hebrew has a plural “riders” where the earliest Arabic translations read a singular rider, which the channel's notes discuss."],
 ["Isaiah 21:7, 13–17","Genesis 25:13"],"Deenresponds · #isaiah-21 · "+yt('xNz8Rhfirt0'));
bib('d-dr-isaiah-42',"Isaiah 42: the servant","Isaiah 42:1–13","“Behold my servant… he will bring justice to the nations… the coastlands wait for his law… let the villages where Kedar dwells rejoice; let the inhabitants of Sela sing.”",
 "A law-bringing servant connected to Kedar (Arabia) and Sela (a mountain at Madinah), who fights God's enemies (42:13): Muḥammad ﷺ.",
 ["The servant brings a law (tōrāh) to the nations, more than a moral teacher.","Kedar is named, Ishmael's son; Sela is a mountain beside Madinah where the Prophet ﷺ camped at the Battle of the Trench.","42:13: the LORD goes out like a warrior against His enemies, which fits a prophet who led battles."],
 "Matthew 12:18–21 applies Isaiah 42 to Jesus.",
 ["Matthew quotes only verses 1–4; Kedar, Sela and the warrior of 42:13 don't fit Jesus.","Even Christian commentators like Christopher R. North admit the servant's identity is debated."],
 ["Isaiah 42:1–13","Matthew 12:18–21","Christopher R. North, The Suffering Servant"],"Deenresponds · #isaiah-42");
bib('d-dr-isaiah-19',"Isaiah 19: Egypt turns to the One God","Isaiah 19:19–25","“In that day there will be an altar to the LORD in the midst of Egypt… when they cry to the LORD because of oppressors, He will send them a saviour… Egypt and Assyria will worship together.”",
 "Egypt, oppressed under Byzantine rule, was freed by the Muslims, and both Egypt and the lands of Assyria (Iraq) became monotheistic.",
 ["The prophecy expects foreign nations, not Israel, to worship the God of Israel.","Under Byzantium the Copts were persecuted; ʿAmr ibn al-ʿĀṣ restored their patriarch, and Egypt and Iraq became Muslim lands."],
 "Christian commentators see Alexander the Great, or a Jewish temple in Egypt (Leontopolis), or the spread of Christianity.",
 ["The International Critical Commentary itself notes many see it as a later event clothed as prophecy; none of those options made Egypt and Assyria worship together.","Christian Egypt was split by Chalcedon; Islam united Egypt and Iraq in worship of one God."],
 ["Isaiah 19:19–25"],"Deenresponds · #isaiah-19 · "+yt('x41BsT8WASQ'));
bib('d-dr-isaiah-29',"Isaiah 29: the book given to one who cannot read","Isaiah 29:11–18","“The book is given to one who cannot read, saying ‘Read this’, and he says, ‘I cannot read’… on that day the deaf shall hear the words of a book.”",
 "Jibrīl said “Read!” to the unlettered Prophet ﷺ, who said “I am not a reader”: the scene of the first revelation (Bukhārī 3).",
 ["29:12 matches the first revelation word for word in meaning: a book, an unlettered man, “read”, “I cannot read”.","The Qurʾān describes itself as bringing people “from darkness into light” (14:1), like 29:18."],
 "Isaiah 29 is about Jerusalem's spiritual blindness in Isaiah's day.",
 ["The chapter moves from judgement to a future “in a very little while” when a book is heard and the blind see, a forward-looking promise.","Muslims don't deny the local context; they point to the detailed match with the Prophet's ﷺ first revelation."],
 ["Isaiah 29:11–18","Bukhārī 3","Qurʾān 14:1"],"Deenresponds · #isaiah-29 · "+yt('R2W8w1Mg0eM'));
bib('d-dr-isaiah-45',"Isaiah 45: every knee shall bow","Isaiah 45:22–25","“Turn to Me and be saved, all the ends of the earth… to Me every knee shall bow, every tongue shall swear.”",
 "The worship of the One God spread to the ends of the earth through the Prophet ﷺ, including the nations Israel knew as idolaters.",
 ["In Isaiah's time only Israel worshipped the God of Abraham; after the Prophet ﷺ, Egypt, Assyria and Babylon became monotheistic.","Muslims literally bow and prostrate to God alone five times a day."],
 "Paul applies 45:23 to Jesus (Philippians 2:10–11).",
 ["In Isaiah, “to Me” is God Himself speaking, who says “there is no other” (45:22); applying it to a second person breaks the verse.","Even Philippians ends “to the glory of God the Father”."],
 ["Isaiah 45:22–25","Philippians 2:10–11"],"Deenresponds · #isaiah-45 · "+yt('ZjJ6DcGKU2I'));
bib('d-dr-isaiah-40',"Isaiah 40 and Malachi 3:1","Isaiah 40:3; Malachi 3:1","“A voice cries: in the wilderness prepare the way of the LORD.” / “I send My messenger to prepare the way before Me.”",
 "Malachi, after the exile, reuses Isaiah's language to point to a future messenger and a new “exodus”.",
 ["Malachi 3:1 reapplies Isaiah 40:3, showing the prophecy was still open after the return from exile."],
 "Mark 1:2–3 says John the Baptist fulfilled it.",
 ["Malachi speaks of “the messenger of the covenant” who comes suddenly to his temple and refines like fire (3:1–3), more than a forerunner."],
 ["Isaiah 40:3","Malachi 3:1–3","Mark 1:2–3"],"Deenresponds · #isaiah-40");
bib('d-dr-isaiah-41',"Isaiah 41:25","Isaiah 41:25","“I stirred up one from the north, and he has come, from the rising of the sun, and he shall call upon My name; he shall come upon rulers as on mortar.”",
 "One who calls on God's name and overthrows rulers, read by Muslims as the Prophet ﷺ.",
 ["The figure is raised by God, calls on His name and conquers: a prophet-ruler."],
 "Most commentators identify him with Cyrus (Isaiah 44:28; 45:1).",
 ["Cyrus didn't “call on God's name” as a monotheist; Isaiah 45:4–5 says Cyrus didn't know God. That fits poorly with “he shall call upon My name”."],
 ["Isaiah 41:25; 45:4–5"],"Deenresponds · #isaiah-41");
bib('d-dr-psalm-72',"Psalm 72: the king of the desert peoples","Psalm 72:8–15","“He shall have dominion from sea to sea… those in the wilderness shall bow before him… prayer shall be made for him continually, and he shall be praised all day.”",
 "A king whom desert peoples obey, for whom prayers are made, who is praised: the meaning of the name Muḥammad. Muslims send blessings on him in every prayer.",
 ["The Septuagint renders verse 15 as him being “praised”.","Christians pray to Jesus, not for him; the psalm has people praying for the king, as Muslims do in every prayer (ṣalawāt)."],
 "It's a royal psalm about Solomon and the Davidic line.",
 ["Its superscription is “of Solomon”; Muslims argue it looks beyond Solomon, whose kingdom never reached “to the ends of the earth”."],
 ["Psalm 72:8–15 (LXX)"],"Deenresponds · #psalm-72 · "+yt('CGIh3cLaEZ4'));
bib('d-dr-psalm-9',"Psalm 9:20: a lawgiver for the nations","Psalm 9:20 (LXX)","In the Greek, Latin and Syriac versions: “Appoint a lawgiver over them, O Lord, that the nations may know they are but men.”",
 "A lawgiver over the nations after David: the Prophet ﷺ, who brought the Sharīʿa.",
 ["The ancient translations read “lawgiver” (nomothetēs) where the Hebrew reads “fear”.","The earliest translations preserve a reading the later Hebrew text lost."],
 "The Hebrew reads “put them in fear, O LORD”, not “lawgiver”.",
 ["The Septuagint predates the standardised Masoretic text by centuries; Christians themselves use LXX readings elsewhere (e.g. Isaiah 7:14)."],
 ["Psalm 9:20 (LXX 9:21)"],"Deenresponds · #psalm-9");
bib('d-dr-deuteronomy-33-2',"Deuteronomy 33:2: Sinai, Seir, Paran","Deuteronomy 33:2","“The LORD came from Sinai, dawned from Seir upon them, shone forth from Mount Paran; he came with ten thousand holy ones, with a fiery law at his right hand.”",
 "Three revelations: Sinai (Moses), Seir (Jesus, near Galilee and Judea) and Paran (Arabia, where Ishmael lived), whence the Prophet ﷺ entered Makkah with ten thousand.",
 ["Genesis 21:21: Ishmael lived in the wilderness of Paran.","The Prophet ﷺ conquered Makkah with about 10,000 Companions, bringing a law."],
 "Paran is in the Sinai peninsula, not Arabia.",
 ["Genesis places Ishmael in Paran, and Ishmael's descendants are the Arabs of the Ḥijāz; early Arab geographers identified Paran with the Makkan region."],
 ["Deuteronomy 33:2","Genesis 21:21","Habakkuk 3:3"],"Deenresponds · #deuteronomy-33-2");
bib('d-dr-tenants-prophecy',"The parable of the tenants","Matthew 21:33–44","The vineyard owner sends servants, then his son; the tenants kill them; “the kingdom will be taken from you and given to a nation producing its fruits”; the rejected stone becomes the cornerstone.",
 "Prophethood passes from Israel to another nation, the Ishmaelites, and the “rejected stone” is the last prophet.",
 ["Psalm 118:22, quoted by Jesus: the stone the builders rejected. Ishmael's line was the rejected branch of Abraham's family.","The Prophet ﷺ described himself as the final brick completing the house of prophethood (Bukhārī 3535)."],
 "The other nation is the Gentile Church, and the stone is Jesus.",
 ["The Greek ethnos is singular: a nation, not the nations. The Church isn't a nation.","The stone in 21:44 crushes whoever it falls on, an image of power, matching Daniel 2's kingdom-stone."],
 ["Matthew 21:33–44","Psalm 118:22","Daniel 2:44–45","Bukhārī 3535"],"Deenresponds · #tenants-prophecy · "+yt('hnHnTwnOVv0'));
bib('d-dr-song-of-solomon',"Song of Songs 5:16: “Muḥammadīm”","Song of Songs 5:10–16","“His mouth is most sweet; he is altogether lovely (maḥmaddîm). This is my beloved and this is my friend.”",
 "The Hebrew maḥmaddîm shares the root ḥ-m-d and form of the name Muḥammad; the Prophet ﷺ is also called Allah's beloved and close friend.",
 ["The plural -îm in Hebrew is often a plural of majesty or intensity, as in Elohîm.","The description in 5:10–16 (ruddy-white, black wavy hair) resembles the ḥadīth descriptions of the Prophet ﷺ."],
 "Maḥmaddîm is just an adjective, “desirable”; it isn't a name.",
 ["Names come from meanings: Muḥammad itself means “praised”. The argument is about the root and form, not a dictionary entry.","Some apologists even claim the verse was altered under Islamic influence, which concedes the similarity is striking."],
 ["Song of Songs 5:10–16","Tirmidhī 3616 (ḥabīb)"],"Deenresponds · #song-of-solomon · "+yt('OeaG4OuJb2k'));

/* Prophecies fulfilled: add how they were recorded and the objection */
const add=(key,more)=>cur.ex(PR+key,more);
add('t-fire-of-hijaz',{title:"The fire of the Ḥijāz",k:"Prophecy",blurb:"A fire lighting the camels' necks in Buṣrā.",
 intro:"The Prophet ﷺ foretold a fire coming out of the Ḥijāz that would light up the necks of camels in Buṣrā, in Syria. Six centuries later a volcano erupted near Madinah.",
 visual:{kind:'compare',left:{title:"Foretold",items:[["“A fire will come out of the land of the Ḥijāz that lights up the necks of the camels at Buṣrā.”","Bukhārī 7118; Muslim 2902"]]},right:{title:"Fulfilled",items:[["The Ḥarrat Rahat eruption near Madinah, 654 AH / 1256 CE, burned for weeks.","1256 CE"]]}},
 cards:[["Eyewitness historians","Abū Shāma and al-Nawawī lived through it and connected it with the ḥadīth; reports say its glow was seen far away, including in Buṣrā."],["Recorded before the event","Bukhārī died in 256 AH, four centuries before the eruption, so the prophecy was written down long before."],["Volcanologists confirm","The 1256 eruption of Ḥarrat Rahat is documented geologically, with lava flows reaching near Madinah."]],
 sum:"Written down four centuries in advance, fulfilled by a documented eruption near Madinah."});
add('t-bedouins-competing-in-construction',{title:"Barefoot shepherds building towers",k:"Prophecy",blurb:"From tents to skyscrapers.",
 intro:"In the ḥadīth of Jibrīl, a sign of the Hour is “barefoot, naked, destitute shepherds competing in building tall buildings.”",
 visual:{kind:'compare',left:{title:"Foretold",items:[["Barefoot, destitute shepherds will compete in building tall buildings.","Muslim 8"]]},right:{title:"Fulfilled",items:[["Within one generation, the Bedouin of Arabia went from tents to building the world's tallest towers.","20th–21st century"]]}},
 cards:[["Three precise details","Barefoot and poor, shepherds (herders, not city people), and competing in height, not just building."],["The race for height","The Burj Khalifa, Kingdom Tower (Jeddah) and others were built in direct competition for the tallest."],["Unforeseeable in the 7th century","Arabia was a land of nomads; nothing suggested it would one day lead the world in tall buildings."]]});
add('t-dhi-al-khalasa',{title:"The idol Dhū al-Khalaṣa returns",k:"Prophecy",blurb:"An idol worshipped again before the Hour.",
 intro:"The Prophet ﷺ named a specific idol, destroyed in his lifetime, and said women of the tribe of Daws would worship it again before the Hour.",
 visual:{kind:'compare',left:{title:"Foretold",items:[["“The Hour will not come until the buttocks of the women of Daws sway around Dhū al-Khalaṣa.”","Bukhārī 7116; Muslim 2906"]]},right:{title:"Fulfilled",items:[["The shrine site was venerated again by local tribes centuries later, until it was destroyed again in the 1920s.","Before 1925"]]}},
 cards:[["Destroyed in his lifetime","Jarīr ibn ʿAbdillāh destroyed the shrine on the Prophet's ﷺ order (Bukhārī 3020)."],["A very specific claim","An idol by name, a tribe by name and a ritual (circling it) were all predicted to return, against every expectation in the early Islamic period."]]});
add('t-prophecy-about-the-pharoah',{title:"Pharaoh's body preserved",k:"Prophecy",blurb:"“Today We will save your body as a sign.”",
 intro:"The Qurʾān says Pharaoh's body would be saved as a sign for later generations, a detail the Bible doesn't contain.",
 visual:{kind:'compare',left:{title:"Foretold",items:[["“So today We will save you in body, that you may be a sign for those after you.”","Yūnus 10:92"]]},right:{title:"Fulfilled",items:[["The mummies of New Kingdom pharaohs, including Ramses II, often identified as Moses' pharaoh, were found in 1881 and are displayed today.","Discovered 1881"]]}},
 cards:[["Not in the Bible","Exodus records the army drowning but says nothing about his body being preserved."],["Unknown in 7th-century Arabia","Mummies were hidden in tombs; their discovery came in the 19th century."],["Honest caveat","Which pharaoh it was is debated; the point is that the Qurʾān's detail about preservation fits what was later found."]]});
add('t-siege-of-baghdad-prophecy',{title:"The fall of Baghdad",k:"Prophecy",blurb:"A city by a river, destroyed by a people with small eyes.",
 intro:"A narration describes Muslims settling a low land by a river, called Baṣra (or a great city), later struck by a people with wide faces and small eyes.",
 visual:{kind:'compare',left:{title:"Foretold",items:[["Some of my people will settle low ground by a river… then people with wide faces and small eyes will come and attack them.","Abū Dāwūd 4306"]]},right:{title:"Fulfilled",items:[["The Mongols sacked Baghdad on the Tigris in 1258, ending the Abbasid caliphate.","1258 CE"]]}},
 cards:[["Read by many scholars as Baghdad","Many writers linked the narration with the Mongol sack of Baghdad."],["Honest caveat","The ḥadīth's grading is discussed; present it as supporting evidence, not the strongest proof."]]});
add('t-the-riskiest-prophecy-of-surah-masad',{title:"Abū Lahab will die a disbeliever",k:"Prophecy",blurb:"Sūrat al-Masad named a living enemy and foretold his end.",
 intro:"Sūrat al-Masad condemned Abū Lahab and his wife to the Fire, which meant they would die as disbelievers. He had about ten years to prove it wrong.",
 visual:{kind:'compare',left:{title:"Foretold",items:[["Abū Lahab and his wife will burn in the Fire, so they will die as disbelievers.","Sūrat al-Masad (111)"]]},right:{title:"Fulfilled",items:[["Abū Lahab died a disbeliever shortly after Badr, never even pretending to accept Islam.","624 CE"]]}},
 cards:[["The riskiest prophecy","All he had to say was “I accept Islam”, even falsely, to make the Qurʾān look wrong. He never did."],["His wife too","Umm Jamīl also died in disbelief, as the sūra implies."]]});
})();
