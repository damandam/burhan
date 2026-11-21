/* Islam AV batch 5 — 2026-11-21. Averroes “sonstiges islam 3”, group E (Qurʾān, prophecies & Jesus/Injīl; 6 channels).
   add(): Goat ate verses ← chain critique of Ibn Mājah 1944 & Ibn Ḥazm (#ziege-isst-koran-vers, 1 scan);
          Six/seven days of creation ← Ibn Bāz & Ibn Taymiyya grade 7-day ḥadīth ḍaʿīf (#erde-in-7-tagen-erschaffen, 1 scan);
          Mutawaffīka 3:55 / 4:158 ← meaning of ilayya & classical tafsīr on tawaffī (#jesus-zu-allah-empor);
          What is the Injīl? ← 5 structured evidence cards on Jesus' Gospel vs. later writings (#jesus-injil);
          Roman prophecy ← Muslim 2898 & “Romans” as Christian nations (#römer-mehrheit).
   NEW:   islam/proofs/caesar-persia-prophecy ← Fall of Kisrā & Caesar in Iraq and the Levant (#cesar-prophezeiung-falsch). */
(()=>{
const AV=(n,link)=>({credit:'Averroes · #'+n+' (translated from German)',link});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('islam-av5: no card',key); };

/* 1. Goat ate Qurʾān verses → d-dr-goat-ate-verses */
const GZ=AV('ziege-isst-koran-vers','https://discord.com/channels/1275832106949283962/1293956473872846918');
add('islam/quran/preservation/d-dr-goat-ate-verses',N(GZ,
 "Even if other chains omit the tame goat/sheep, Sunan Ibn Mājah 1944 still records it — and didn't Ibn Ḥazm grade it ṣaḥīḥ?",
 "Four narrations transmit this exact report with the same isnād, yet only Ibn Mājah 1944 (via Muḥammad ibn Isḥāq) adds that a tame sheep ate the page — an isolated wording rejected by major ḥadīth masters (al-Dāraquṭnī, al-Jūrqānī, Shuʿayb al-Arnaʾūṭ, Riyāḍ al-Baghdādī). And Ibn Ḥazm himself explained that the verse was already abrogated, known to all Companions, and intentionally omitted from the Qurʾān.",
 "Chain comparison & ḥadīth scholars' verdict",
 ["Four parallel narrations: (1) Kitāb al-Raḍāʿ no. 17 (Ṣaḥīḥ), (2) Ṣaḥīḥ Muslim 1452 (Ṣaḥīḥ), and (3) Sunan Ibn Mājah 1942 (Ṣaḥīḥ) all share literally the same chain (isnād) on the breastfeeding verses — without the goat/sheep detail. Only (4) Sunan Ibn Mājah 1944, narrated through Muḥammad ibn Isḥāq, adds that a tame sheep ate the sheet.",
  "Why Muḥammad ibn Isḥāq's addition is rejected: Muḥammad ibn Isḥāq is criticised by ḥadīth scholars for errors in some of his reports and for diverging from leading trustworthy narrators (thiqāt). When such a narrator differs from stronger authorities or introduces strange/odd wordings that trustworthy narrators did not report, his isolated addition is not accepted and the narration is graded ḍaʿīf.",
  "Four scholar gradings: Graded weak (ḍaʿīf) by al-Dāraquṭnī (d. 385 AH), al-Jūrqānī / al-Jawraqānī (d. 543 AH), Shuʿayb al-Arnaʾūṭ (d. 1438 AH), and Riyāḍ al-Baghdādī.",
  "Channel media note: Includes 1 YouTube screenshot scan in the channel (Screenshot_20231019_220015_YouTube.png, to capture)."],
 ["Kitāb al-Raḍāʿ no. 17","Ṣaḥīḥ Muslim 1452","Sunan Ibn Mājah 1942, 1944","al-Dāraquṭnī; al-Jūrqānī; Shuʿayb al-Arnaʾūṭ","Ibn Ḥazm, al-Muḥallā 12/177"],
 [N(GZ,
   "Ibn Ḥazm graded the narration ṣaḥīḥ — doesn't that concede a lost verse?",
   "No: Ibn Ḥazm (al-Muḥallā, vol. 12, p. 177) stated that the verses were abrogated (mansūkh), were deliberately not written into the manuscripts because the Prophet ﷺ did not wish them to be included in the Qurʾānic copy, and were already known to all the Companions anyway.",
   "Ibn Ḥazm's position (al-Muḥallā 12/177)",
   ["Abrogation, not loss: Even on Ibn Ḥazm's grading, nothing of the final Qurʾān was lost — the Prophet ﷺ himself excluded abrogated wording from the official compilation, and the Ṣaḥāba all knew the report's contents."],
   ["Ibn Ḥazm, al-Muḥallā, vol. 12, p. 177"])],
 {facts:[["Report", "Sunan Ibn Mājah 1944"], ["Sole transmitter of addition", "Muḥammad ibn Isḥāq"], ["Verdict", "Ḍaʿīf (isolated wording)"], ["Ibn Ḥazm", "Abrogated (al-Muḥallā 12/177)"]],
  visual:{kind:'compare',
   left:{title:"Same isnād without the sheep/goat", items:["Kitāb al-Raḍāʿ no. 17 (Ṣaḥīḥ)","Ṣaḥīḥ Muslim 1452 (Ṣaḥīḥ)","Sunan Ibn Mājah 1942 (Ṣaḥīḥ)"]},
   right:{title:"Only Ibn Isḥāq adds the sheep", items:["Sunan Ibn Mājah 1944 (via Ibn Isḥāq)","Contradicts leading thiqāt on the same chain","Graded ḍaʿīf by al-Dāraquṭnī, al-Jūrqānī, al-Arnaʾūṭ & al-Baghdādī"]}}}));

/* 2. Earth created in 7 days ḥadīth → d-dr-how-many-days-for-creation */
add('islam/quran/d-dr-how-many-days-for-creation',N(AV('erde-in-7-tagen-erschaffen','https://discord.com/channels/1275832106949283962/1288536408696295495'),
 "A ḥadīth says Allah created everything across seven days (Saturday to Friday), contradicting the Qurʾān's six days.",
 "That seven-day creation narration is weak (ḍaʿīf): both Ibn Taymiyya (raḥimahullāh) and Shaykh ʿAbd al-ʿAzīz ibn ʿAbdullāh ibn Bāz explicitly graded the ḥadīth weak.",
 "Weakness of the seven-day creation ḥadīth",
 ["Shaykh ʿAbd al-ʿAzīz ibn Bāz: Explicitly states that the seven-day creation ḥadīth is weak (https://www.youtube.com/watch?v=0ndRAqM-QGM).",
  "Ibn Taymiyya (raḥimahullāh): Also graded this narration weak (ḍaʿīf).",
  "Channel media note: 1 scan is attached in the channel (IMG_0847.png, to capture)."],
 ["Shaykh ʿAbd al-ʿAzīz ibn Bāz (YouTube)","Ibn Taymiyya (channel scan)"],
 [],
 {facts:[["Status", "Weak (ḍaʿīf)"], ["Scholars cited", "Ibn Taymiyya & Ibn Bāz"], ["Channel media", "1 scan (IMG_0847.png)"]]}));

/* 3. Jesus raised to Allah (3:55 & 4:158) → mutawaffika-3-55 */
const JE=AV('jesus-zu-allah-empor','https://discord.com/channels/1275832106949283962/1348453103808155809');
add('islam/quran/d-ia-quran-surahs/mutawaffika-3-55',N(JE,
 "“I will raise you to Myself” (3:55; 4:158) means Jesus sits inside or beside Allah on His Throne — and why did Allah say mutawaffīka?",
 "“To Myself” (ilayya) means upwards to Allah's heaven of honour, not that Allah is confined to a place (al-Qurṭubī on 4:158) or that Jesus is on the Throne — authentic ḥadīth places ʿĪsā in the 2nd heaven, and Qurʾān 2:28 uses “to Allah” for every human return. Likewise, classical tafsīr (al-Ṭaḥāwī, al-Ṭabarī, al-Baghawī, Ibn Kathīr) explains mutawaffīka as taking Jesus up alive and whole without death, or in sleep.",
 "Meaning of “to Myself” (4:158; 3:55)",
 ["Four core points on “to Myself” (ilayya): (1) “To Myself” denotes direction upwards towards Allah, not physical merging with Him; (2) an authentic ḥadīth confirms ʿĪsā (ʿalayhi al-salām) is in the 2nd heaven, not beside Allah's essence; (3) the Bible itself depicts Jesus ascending visibly upward towards the Father and seated at His right hand; (4) Qurʾān 2:28 states all humans return “to Allah” upon death, yet nobody claims we sit on Allah's Throne.",
  "Tafsīr al-Qurṭubī (4:158): “Rather, Allah raised him to Himself” is an independent statement meaning “into heaven”, for Allah is exalted above any place (wa-Allāhu taʿālā mutaʿālin ʿani al-makān). “All-Mighty” (ʿazīzan) refers to His severe punishment of the Jews through Titus of Rome (Buṭrus ibn Astāsyānūs al-Rūmī), who inflicted a great massacre upon them; “All-Wise” (ḥakīman) refers to the curse and wrath decreed upon them.",
  "Tafsīr Ibn Kathīr (3:55): “And I will purify you from those who disbelieve” means by raising him into heaven. Afterwards his followers split into sects — some calling him Allah's servant and messenger, others “Son of God”, others “God” or “the third of three” — which the Qurʾān refuted. This lasted roughly 300 years until Constantine (Qusṭanṭīn), a philosopher who entered Christianity (reportedly as a stratagem to corrupt it), added innovations, permitted pork, and built over 12,000 churches; yet Christians remained dominant over the Jews as closer to the truth, though both were in error."],
 ["Qurʾān 3:55; 4:158; 2:28","Tafsīr al-Qurṭubī 4:158","Tafsīr Ibn Kathīr 3:55"],
 [N(JE,
   "How do the classical commentators specifically explain mutawaffīka in 3:55?",
   "The majority of commentators explain mutawaffīka as taking Jesus completely (body and soul) from the earth without death, or taking him in sleep — reading it together with rāfiʿuka ilayya (“raising you to Myself”).",
   "Classical Tafsīr on mutawaffīka (3:55)",
   ["Tafsīr al-Ṭaḥāwī (3:55): Reports the majority opinion that mutawaffīka does not mean death, but “I will take you completely (body and soul) from the earth,” while rāfiʿuka ilayya means “I will raise you to My place of honour in heaven.” The two clauses explain one another (al-ʿaṭf li-l-tafsīr).",
    "Tafsīr al-Ṭabarī (from al-Ḥasan al-Baṣrī): “Allah raised him to Himself, and he is with Him in heaven.”",
    "Tafsīr al-Baghawī (3:55) — al-Ḥasan, al-Kalbī & Ibn Jurayj: Mutawaffīka means “I will take you and raise you alive — without death,” proven by 5:117 (“when You took me up, tawaffaytanī”) and by the fact that Jesus' followers triumphed only after his ascension, not after a death.",
    "Tafsīr al-Baghawī — two linguistic senses: (a) “I will raise you unharmed” (from tawaffaytu, taking something in full); (b) “I will take you into My protection” (from tawaffaytu minhu, receiving something from someone).",
    "Tafsīr al-Baghawī — al-Rabīʿ ibn Anas: Tawaffī here means sleep — Jesus was raised while asleep, just as in Qurʾān 6:60 (“It is He who takes your souls by night”)."],
   ["Tafsīr al-Ṭaḥāwī 3:55","Tafsīr al-Ṭabarī 3:55","Tafsīr al-Baghawī 3:55","Qurʾān 5:117; 6:60"],
   [],
   {quotes:[
     {by:"al-Qurṭubī",en:"‘Rather, Allah raised him to Himself’ is an independent statement meaning ‘into heaven.’ Allah, the Exalted, is exalted above any place.",ref:"Tafsīr al-Qurṭubī on 4:158"},
     {by:"al-Ḥasan al-Baṣrī (via al-Ṭabarī)",en:"Allah raised him to Himself, and he is with Him in heaven.",ref:"Tafsīr al-Ṭabarī on 3:55"}
   ]})],
 {facts:[["Verses", "Qurʾān 3:55 · 4:158 · 2:28 · 5:117 · 6:60"], ["Location", "2nd heaven (ṣaḥīḥ ḥadīth)"], ["Tafsīr", "al-Qurṭubī · Ibn Kathīr · al-Ṭabarī · al-Baghawī · al-Ṭaḥāwī"]]}));

/* 4. What is the Injīl? (5 structured evidence cards) → d-dr-what-is-the-injil */
const IJ=AV('jesus-injil','https://discord.com/channels/1275832106949283962/1287274887139819571');

add('christianity/islam-vs/d-dr-what-is-the-injil',N(IJ,
 "The Injīl means the four Gospels and Paul's letters, not a revelation Jesus preached himself.",
 "Jesus began his ministry proclaiming “the Gospel of God” and “the Gospel of the Kingdom” — a revealed message he actively taught long before Mark, Matthew, Luke, John, or Paul were written.",
 "1 · Jesus proclaimed the “Gospel of God”",
 ["Mark 1:14–15: After John was arrested, Jesus went into Galilee proclaiming the gospel of God: “The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel!” Analysis: Jesus begins his ministry by proclaiming the “gospel of God,” a message received directly from God.",
  "Matthew 4:23: “He went throughout all Galilee, teaching in their synagogues and proclaiming the gospel of the kingdom and healing every disease and sickness among the people.” Analysis: Jesus actively proclaims the gospel of the kingdom that he himself teaches.",
  "Luke 4:43: “I must preach the gospel of the kingdom of God to the other towns as well; for I was sent for this purpose.” Analysis: Jesus' mission is to proclaim the gospel of the kingdom of God.",
  "Matthew 9:35: Jesus went through all cities and villages, teaching in synagogues and proclaiming the gospel of the kingdom. Analysis: Proclaiming this Gospel stands at the very centre of Jesus' activity."],
 ["Mark 1:14–15","Matthew 4:23; 9:35","Luke 4:43"],[],
 {facts:[["Core phrase", "“Gospel of God” / “of the Kingdom”"], ["Key verses", "Mark 1:14–15 · Matt 4:23; 9:35 · Luke 4:43"]],
  quotes:[{by:"Gospel of Mark",en:"Jesus came into Galilee, proclaiming the gospel of God, and saying, ‘The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.’",ref:"Mark 1:14–15"}]}));

add('christianity/islam-vs/d-dr-what-is-the-injil',N(IJ,
 "Jesus spoke on his own authority, not as a messenger delivering words given by God.",
 "John and the Synoptics repeatedly quote Jesus saying his teaching is not his own, that the Father commanded him what to say and speak, and that crowds recognised his divine authority above the scribes.",
 "2 · Jesus' teaching comes directly from God",
 ["John 7:16: “My teaching is not mine, but his who sent me.” Analysis: Jesus stresses his teaching is not of human origin, but comes directly from God.",
  "John 12:49–50: “For I have not spoken on my own, but the Father who sent me commanded me what to say and what to speak… What I say, therefore, I say just as the Father has told me.” Analysis: Jesus confirms he speaks the very words given to him by the Father.",
  "Matthew 7:28–29 & Mark 1:22: The crowds were astonished at his teaching, “because he taught them as one who had authority, and not as their scribes.” Analysis: Jesus' teaching stands apart through its divine authority.",
  "Matthew 11:27 & John 14:10: “All things have been handed over to me by my Father…” (Matt 11:27); “The words that I say to you I do not speak on my own; rather, the Father who dwells in me does his works” (John 14:10) — Jesus' words and works are direct revelations from the Father (alongside John 10:30, “I and the Father are one,” underscoring that his teaching flows from this close relationship)."],
 ["John 7:16; 10:30; 12:49–50; 14:10","Matthew 7:28–29; 11:27","Mark 1:22"],[],
 {facts:[["Source of teaching", "Commanded by the Father"], ["Key verses", "John 7:16; 12:49–50 · Matt 7:28–29"]],
  quotes:[{by:"Gospel of John",en:"For I have not spoken on my own, but the Father who sent me has commanded me what to say and speak… What I say, therefore, I say as the Father has told me.",ref:"John 12:49–50"}]}));

add('christianity/islam-vs/d-dr-what-is-the-injil',N(IJ,
 "There is no distinct body of revelation taught by Jesus inside the Gospels.",
 "The Gospels preserve concrete pillars of Jesus' own teaching: the Sermon on the Mount, parables of the Kingdom, his self-disclosure as the Messiah who reveals all things, words of eternal life, and commands he ordered to be preserved.",
 "3 · Core content & method of Jesus' revelation",
 ["Sermon on the Mount (Matthew 5–7): Jesus teaches in depth about life in the Kingdom of God — Beatitudes, exposition of the Law, and ethical commands — original teachings showing his authoritative exposition of God's will.",
  "Parables as a unique teaching method (Matthew 13:34–35; Mark 4:11–12): Jesus spoke to the crowds only in parables (“I will utter what has been hidden since the foundation of the world”, Matt 13:35) and gave his disciples the secret of the Kingdom of God while outsiders heard in parables (Mark 4:11–12).",
  "Self-disclosure as Messiah & words of eternal life (John 4:25–26; 6:68–69): When the Samaritan woman says the Messiah “will proclaim all things to us,” Jesus answers “I am he” (4:25–26); Simon Peter declares, “You have the words of eternal life, and we have believed and come to know that you are the Holy One of God” (6:68–69).",
  "Eternal foundation & commission (Matthew 24:35; 28:18–20): “Heaven and earth will pass away, but my words will not pass away” (24:35 — presenting his words as eternal and unchanging, pointing to their divine origin), and he commissions the disciples to teach all nations “to observe everything I have commanded you” (28:18–20)."],
 ["Matthew 5–7; 13:34–35; 24:35; 28:18–20","Mark 4:11–12","John 4:25–26; 6:68–69"],[],
 {facts:[["Core discourses", "Sermon on the Mount · Parables"], ["Durability", "“My words will not pass away” (Matt 24:35)"]],
  quotes:[{by:"Gospel of Matthew",en:"Heaven and earth will pass away, but my words will not pass away.",ref:"Matthew 24:35"}]}));

add('christianity/islam-vs/d-dr-what-is-the-injil',N(IJ,
 "Early Christians always treated “the Gospel” as the four-Gospel New Testament canon.",
 "The Didache refers to Jesus' teachings as “the gospel of our Lord” (singular) containing the Lord's Prayer, and patristic scholar Arthur J. Bellinzoni notes that many second-century Church Fathers relied on a single exclusive Gospel authority.",
 "4 · Early Christian witness: Didache & Bellinzoni",
 ["The Didache: Refers to the teachings of Jesus as the one Gospel — “Do not pray like the hypocrites, but as the Lord commanded in his gospel: thus shall you pray: ‘Our Father, who art in heaven…’ … as you have it in the gospel of our Lord.”",
  "Arthur J. Bellinzoni (The Gospel of Luke in the Apostolic Fathers: An Overview, p. 45): Notes that many Church Fathers — beginning apparently with Marcion in the mid-second century and continuing with Justin, Tatian, and others — appear to have relied on a single exclusive Gospel authority."],
 ["Didache (8:2)","Arthur J. Bellinzoni, The Gospel of Luke in the Apostolic Fathers, p. 45"],[],
 {facts:[["Early text", "Didache (“his gospel”, singular)"], ["Patristic scholar", "Arthur J. Bellinzoni (p. 45)"]],
  quotes:[
   {by:"The Didache",en:"Do not pray like the hypocrites, but as the Lord commanded in His gospel: thus shall you pray: Our Father, who art in heaven… as you have it in the gospel of our Lord.",ref:"Didache 8:2"},
   {by:"Arthur J. Bellinzoni",en:"Many Church Fathers, apparently beginning with Marcion in the middle of the second century and continuing with Justin, Tatian, and others, seem to have relied on a single exclusive Gospel authority.",ref:"The Gospel of Luke in the Apostolic Fathers: An Overview, p. 45"}
  ]}));

add('christianity/islam-vs/d-dr-what-is-the-injil',N(IJ,
 "If Jesus preached an Injīl, why wasn't it preserved as a single book written by him?",
 "John 21:25 itself states that much of what Jesus did and taught was never written down (or not widely circulated), while the Christian chronological dilemma shows Jesus' first followers did not read Mark, Luke, or Paul's letters, which came decades later.",
 "5 · John 21:25 & the chronological dilemma",
 ["John 21:25: “Now there are also many other things that Jesus did; if every one of them were written down, I suppose the world itself could not contain the books that would be written.” This shows the Injīl itself was not written down in the manner of John's Gospel — or parts may have been written without becoming widely circulated — whereas Jesus himself in Matthew and the other Gospels is shown proclaiming and teaching the Gospel.",
  "Question for Christians: Did the earliest Christians read a different Gospel than you do today? Jesus preached the Gospel — he certainly did not preach Luke, Mark, or Paul's letters, which came after him.",
  "The Christian dilemma: Did Christians during Jesus' lifetime and right after him read Paul? Paul arrived roughly twenty years later, meaning the written New Testament Gospels and Pauline epistles did not exist during the time of Jesus' immediate followers."],
 ["John 21:25"],[],
 {facts:[["Unwritten acts/teachings", "John 21:25"], ["Chronology", "Paul wrote ~20 years after Jesus"]],
  visual:{kind:'compare',
   left:{title:"During Jesus' ministry", items:["Jesus preaches the “Gospel of God” directly","Disciples hear and transmit his oral teaching","No Mark, Luke, John, or Pauline letters exist yet"]},
   right:{title:"Decades later", items:["Paul's letters appear ~20 years later","Canonical Gospels written after Jesus' ministry","John 21:25 admits much else was never written down"]}}}));

/* 5. Romans as the majority at the Last Hour → t-roman-prophecy */
add('islam/proofs/d-ia-prophecies-1/t-roman-prophecy',N(AV('römer-mehrheit','https://discord.com/channels/1275832106949283962/1349384105598521385'),
 "How can the Prophet ﷺ foretell that “the Romans will be the most numerous people at the Hour” (Muslim 2898) when the Roman Empire fell?",
 "Scholars agree “al-Rūm” here means Western/Christian peoples — as confirmed by Qurʾān 9:29, al-Qāḍī ʿIyāḍ (d. 544 AH), and historian Hugh N. Kennedy — not an unconquered Roman Empire, since the Prophet ﷺ himself foretold the empire's conquest.",
 "“The Romans will be the majority at the Hour”",
 ["Meaning of al-Rūm: Scholars largely agree “the Romans” refers to Western/Christian nations. Non-Muslim historian Hugh N. Kennedy (The Great Arab Conquests) notes that in Arabic at that period al-Rūm covered Greeks, Russians, Serbs, and other Christian peoples and Christian-influenced lands that adopted that faith and tradition, since in Arabic al-Rūm includes their successors and permits a broad interpretation.",
  "Not the old empire: It cannot mean the classical Roman Empire would never fall, because the Prophet ﷺ himself foretold the conquest of the Roman/Byzantine realm; scholars also noted some of them would embrace Islam and conclude peace treaties with Muslims.",
  "Qurʾān 9:29 equivalence: In Islamic theology “Romans” and “Christians” are frequently used synonymously — Qurʾān 9:29 speaks of “those who were given the Scripture” (Christians) and was historically revealed concerning the Byzantine Roman army.",
  "al-Qāḍī ʿIyāḍ (d. 544 AH): Explained that al-Rūm meant the Christian Byzantines and saw the prophecy already unfolding: “The truth of this ḥadīth has already become visible: today they are the most numerous nation in the world — excluding the tribes of Yaʾjūj and Maʾjūj. They occupied lands from al-Shām (Syria) to Spain, and the Christian religion spread further than any other.”",
  "ʿAmr ibn al-ʿĀṣ (on Muslim 2898): Explained why it is fitting that they remain numerous at the end — because of the positive traits mentioned in the ḥadīth (patience, swift recovery after calamities, and charity)."],
 ["Ṣaḥīḥ Muslim 2898","Qurʾān 9:29","al-Qāḍī ʿIyāḍ (d. 544 AH)","Hugh N. Kennedy, The Great Arab Conquests"],[],
 {facts:[["Ḥadīth", "Ṣaḥīḥ Muslim 2898"], ["Meaning of al-Rūm", "Christian / Western nations (cf. 9:29)"], ["Historian", "Hugh N. Kennedy"], ["Classical witness", "al-Qāḍī ʿIyāḍ (d. 544 AH)"]],
  quotes:[{by:"al-Qāḍī ʿIyāḍ (d. 544 AH)",en:"The truth of this ḥadīth has already become visible: today they are the most numerous nation in the world — excluding the tribes of Yaʾjūj and Maʾjūj. They occupied lands from al-Shām (Syria) to Spain, and the Christian religion spread further than any other.",ref:"Commentary on Ṣaḥīḥ Muslim 2898"}]}));

/* 6. NEW card: Caesar & Kisrā prophecy */
const CP=AV('cesar-prophezeiung-falsch','https://discord.com/channels/1275832106949283962/1288564633979846746');
card('islam/proofs/caesar-persia-prophecy',{title:"“No Kisrā or Caesar after him”: fulfilled prophecy",k:"al-Nawawī · al-Khaṭṭābī · al-Bayhaqī",blurb:"The prophecy ended Persian and Byzantine rule over Iraq and the Levant.",
 claim:"The Prophet ﷺ foretold there would be no Caesar after the reigning Caesar, yet later Byzantine emperors still existed — so the prophecy failed.",
 tree:N(CP,
  "There were more Byzantine emperors (“Caesars”) after Heraclius, so saying “there will be no Caesar after him” was a false prophecy.",
  "Classical commentators explain the prophecy refers specifically to the end of Kisrā's (Persian) and Caesar's (Byzantine) rule over Iraq and the Levant (al-Shām): Persia was destroyed completely, Byzantium was expelled from the Levant never to rule there again, and Muslims took both regions and their treasures.",
  "Rule in Iraq & the Levant ended forever",
  ["al-Nawawī (Sharḥ Ṣaḥīḥ Muslim, 18/43): Explains that the Prophet ﷺ foretold the end of Kisrā's (Persia) and Caesar's (Byzantium) dominion in Iraq and the Levant. Both came true: the Persian Empire was completely destroyed, the Romans lost control of the Levant, and Muslims conquered those lands and spent their treasures in the cause of Islam — a manifest miracle.",
   "al-Khaṭṭābī (Aʿlām al-Ḥadīth, 2/1447): Explains that Allah utterly destroyed the Persian Empire (Kisrā) and left its treasures to the Muslims, while Caesar was driven out of the Levant, his treasures taken as spoils, and no further Caesar ever ruled in that region again — the territory passed completely under Muslim control.",
   "al-Bayhaqī (Dalāʾil al-Nubuwwa, 4/394): Records that before embracing Islam, the Quraysh feared losing their trade with the Levant and Iraq if they became Muslim. The Prophet ﷺ reassured them that after the fall of Kisrā and Caesar no one would bear those titles over those territories again — which was fulfilled when Persian and Byzantine rule there ended."],
  ["al-Nawawī, Sharḥ Ṣaḥīḥ Muslim 18/43","al-Khaṭṭābī, Aʿlām al-Ḥadīth 2/1447","al-Bayhaqī, Dalāʾil al-Nubuwwa 4/394"],
  [N(CP,
    "If the Romans lost power, doesn't that clash with the ḥadīth saying the Romans will remain strong and numerous?",
    "Not at all: the Caesar prophecy addresses Rome's loss of rule over the Levant, whereas the ḥadīth of al-Mustawrid al-Qurashī (Ṣaḥīḥ Muslim 2898) addresses the Romans' global survival and prominence until the Hour.",
    "Harmonised with Muslim 2898 (al-Mustawrid al-Qurashī)",
    ["Two distinct aspects: The first prophecy does not discuss whether the Romans would remain strong outside the Levant; that is clarified in the ḥadīth of al-Mustawrid al-Qurashī (Ṣaḥīḥ Muslim 2898).",
     "What Muslim 2898 foretells: Although the Romans lost dominion over the Levant, they would retain a major role in the world and be the most numerous people when the Hour arrives — marked by patience, swift recovery after disasters, and charity/kindness."],
    ["Ṣaḥīḥ Muslim 2898 (al-Mustawrid al-Qurashī)"])],
  {facts:[["Prophecy scope", "Iraq (Kisrā) & the Levant (Caesar)"],["Companion ḥadīth", "Ṣaḥīḥ Muslim 2898"],["Scholars", "al-Nawawī · al-Khaṭṭābī · al-Bayhaqī"],["Context", "Quraysh trade security (Dalāʾil 4/394)"]],
   visual:{kind:'compare',
    left:{title:"Foretold by the Prophet ﷺ", items:["Fall of Kisrā (Persia) and Caesar's rule in Iraq & al-Shām","No Kisrā or Caesar reigning over those regions again","Their treasures spent in the path of Islam","Romans still remain numerous globally until the Hour (Muslim 2898)"]},
    right:{title:"Fulfilled in history", items:["Sasanian Persia totally destroyed; treasures taken by Muslims","Byzantines driven out of the Levant; no Caesar ruled there again","Quraysh's trade routes in Iraq & Syria secured under Islam","Byzantine/Christian peoples remained vast across the world"]}},
   quotes:[
    {by:"al-Nawawī",en:"The Prophet ﷺ foretold that the rule of Kisrā and Caesar in Iraq and the Levant would end: the Persian Empire was completely destroyed, the Romans lost the Levant, and the Muslims conquered these lands and used their treasures for Islam — a manifest miracle.",ref:"Sharḥ Ṣaḥīḥ Muslim, 18/43 (summary)"},
    {by:"al-Khaṭṭābī",en:"Allah destroyed the Persian Empire completely and gave its treasures to the Muslims; Caesar was driven from the Levant, his treasures seized, and no further Caesar ruled in that region after him.",ref:"Aʿlām al-Ḥadīth, 2/1447 (summary)"},
    {by:"al-Bayhaqī",en:"When the Quraysh feared losing their trade with the Levant and Iraq upon accepting Islam, the Prophet ﷺ reassured them that after the fall of Kisrā and Caesar none would hold those titles there again — fulfilled when both empires' rule ended in those lands.",ref:"Dalāʾil al-Nubuwwa, 4/394 (summary)"}
   ]}),
 sum:"The prophecy foretold the permanent end of Persian and Byzantine dominion over Iraq and the Levant — fulfilled to the letter (al-Nawawī, al-Khaṭṭābī, al-Bayhaqī) while harmonising with Muslim 2898 on the Romans' continued global numbers."});
})();
