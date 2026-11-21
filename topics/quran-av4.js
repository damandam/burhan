/* Qurʾān AV batch 4 — 2026-11-20. War verses from Averroes “Koran Scheinargumente 1” (not on the site before):
   NEW in Morality › War: “Did the sword verse abrogate the peace verses?” (#schwert-vers-abrogiert), “The other verses of al-Tawba”
   (#kriegsverse: 9:5 context, 9:12, 9:14, 9:28, 4:89–90, 9:29 + jizya exemptions).
   add() on Creed › “Allah is the best of deceivers?” card: 8:43–44 (#allah-täuscht-muslime-zum-krieg).
   NEW in Qurʾān: “Kill yourselves” (2:54) and 4:66 (#selbstopferung-musa, #selbstopferung-selbstmord).
   The War debate map (war.js) already answers 9:5, 2:191, 9:29, 8:12, 8:39, 9:123 from IA/DR. */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('quran-av4: no card',key); };
const W='islam/morality/war/';

/* sword verse abrogation */
const SV=AV('schwert-vers-abrogiert','1289733262914359348');
card(W+'sword-verse-abrogation',{title:"Did the “sword verse” abrogate the peace verses?",k:"9:5 vs 8:61",blurb:"Ibn Taymiyya, al-Ṭabarī, al-Zarkashī, al-Bukhārī, Ibn Ḥajar: no.",
 claim:"Muslims say 8:61 (“if they incline to peace, incline to it”) was abrogated by the sword verse (9:5), so only war remains.",
 tree:N(SV,"The peace verses were abrogated by the sword verse; Islam's final word is perpetual war.",
  "The leading scholars reject that claim. Ibn Taymiyya: “among those who say the peace verses were abrogated by the sword verse; and that is false.” Al-Ṭabarī on 8:61: whoever says it was abrogated is wrong; there's nothing for it in the Qurʾān, the Sunna or reason. Al-Bukhārī has a whole chapter on making peace treaties with polytheists, and Ibn Ḥajar says 8:61 applies to this day.",
  "The scholars",["Ibn Taymiyya, al-Jawāb al-Ṣaḥīḥ li-man Baddala Dīn al-Masīḥ 1/64: the claim of abrogation is false.","Al-Zarkashī (Badr al-Dīn), al-Burhān fī ʿUlūm al-Qurʾān 1/48: on examination the argument that the peace verses were abrogated by the sword verse is weak, and it isn't so.","Al-Ṭabarī, Tafsīr on 8:61: claiming abrogation is wrong; it is in neither the Book nor the Sunna, and reason doesn't accept it.","Al-Bukhārī, Kitāb al-Jizya: chapter on reconciliation (muwādaʿa) with the polytheists, being good to them, and the sin of whoever breaks it.","Ibn Ḥajar, Fatḥ al-Bārī 6/234: 8:61 remains applicable for honouring peace treaties with non-Muslims."],["Qurʾān 8:61; 9:5","Ibn Taymiyya, al-Jawāb al-Ṣaḥīḥ 1/64","al-Zarkashī, al-Burhān 1/48","Fatḥ al-Bārī 6/234"]),
 sum:"Ibn Taymiyya, al-Ṭabarī, al-Zarkashī, al-Bukhārī and Ibn Ḥajar all deny that 9:5 abrogated the peace verse 8:61."});

/* the other Tawba verses */
const KV=AV('kriegsverse','1284264878269267979');
card(W+'tawba-war-verses-in-context',{title:"9:12, 9:14, 9:28, 4:89: more war verses in context",k:"Sūrat al-Tawba",blurb:"Treaty-breakers who attacked first, and a jizya with long exemptions.",
 claim:"Beyond 9:5, the Qurʾān says fight the leaders of disbelief (9:12), the polytheists are impure (9:28), seize and kill them (4:89).",
 tree:N(KV,"Sūrat al-Tawba is full of commands to fight the unbelievers.",
  "Read the sūra from its start: it is about a specific group of polytheists who broke their treaty and attacked first (8:56; 9:13). Those who kept their treaty were to be honoured to its end (9:4), and even the treaty-breakers could get asylum and safe passage (9:6). Al-Qurṭubī: the Prophet ﷺ disliked seeing a woman killed and forbade killing women; “do not transgress” means not killing women, children, monks and the like.",
  "9:1–14 in order",["8:56: those who break their treaty every time. 9:3: the declaration of disassociation from the treaty-breakers. 9:4: “except those polytheists with whom you made a treaty and who didn't fail you or support anyone against you: fulfil their treaty to its term.”","9:6: “If any polytheist seeks your protection, grant it so he may hear the word of Allah, then deliver him to his place of safety.”","9:13: “Will you not fight a people who broke their oaths, plotted to expel the Messenger, and attacked you first?”","Ṭanṭāwī: the polytheists in 9:5 are those who broke their treaties and whose term had expired.","Ibn Kathīr: the strongest view links it with 2:190, “fight those who fight you, but don't transgress”."],["Qurʾān 8:56; 9:3–6; 9:13; 2:190","al-Qurṭubī, Ibn Kathīr, Ṭanṭāwī on 9:5"],
  [N(KV,"9:12 says fight the leaders of disbelief, so fight all disbelievers.",
     "Al-Rāzī: “fight the leaders of disbelief” means fighting the combatant disbelievers, and the leaders are named because they urged their people on; 9:14 is about the polytheists who expelled the Prophet ﷺ and broke their oaths.",
     "9:12–14",["Al-Rāzī on 9:12."],["Qurʾān 9:12–14"]),
   N(KV,"9:28 calls polytheists najas, impure.",
     "Al-Rāzī: the majority of scholars say their bodies are pure; the impurity is of their religion before Allah, which clings to them as dirt clings to a body. Christians, likewise, consider Islam damnable.",
     "9:28",["Al-Rāzī on 9:28: their bodies are pure (majority)."],["Qurʾān 9:28"]),
   N(KV,"4:89 says seize and kill them wherever you find them.",
     "Read one verse further: 4:90 says if they withdraw, don't fight you and offer peace, “Allah has given you no way against them.”",
     "4:89–90",[],["Qurʾān 4:89–90"]),
   N(KV,"9:29 imposes the jizya, a tax on unbelievers.",
     "9:29 applies to a state at war with peoples who have no peace treaty. Those who live peacefully under Muslim rule are protected: “whoever kills a person under a covenant will not smell the fragrance of Paradise” (Bukhārī 3166). The jizya replaced military service and was waived for many.",
     "Who was exempt",["Women and children; the disabled, blind and old, even if rich; the needy and the insane; day labourers, servants and wage-earners; the chronically ill, even if rich; monks and others devoted only to worship.","Any non-Muslim who volunteers for military service to defend the land.","If the Muslim state can't protect non-Muslims, they owe nothing (Ibn al-Qayyim, Aḥkām Ahl al-Dhimma 1/8, 15). See also the War map's 9:29 step."],["Bukhārī 3166","Ibn al-Qayyim, Aḥkām Ahl al-Dhimma 1/8, 15"])]),
 sum:"Al-Tawba targets treaty-breakers who attacked first; treaty-keepers were honoured, asylum offered (9:6), 4:90 forbids fighting those who offer peace, and the jizya had wide exemptions."});

/* 8:43–44 on the creed “deceives” card */
add('islam/creed/d-dr-allah-deceives',N(AV('allah-täuscht-muslime-zum-krieg','1285937342657462356'),
 "In 8:43–44 Allah deceived even the Muslims: He showed them the enemy as few so they'd fight.",
 "No lie was told. In the Prophet's ﷺ dream the enemy appeared few, and Allah sent more than a thousand angels (8:9), so in the battle they really were overpowered: showing part of a truth that is then fulfilled isn't deception. The disbelievers saw the Muslims as few because they couldn't see the angels. Allah withheld details to bring about His plan, without lying and without overriding anyone's will.",
 "Badr: a dream, angels, and withheld information",["8:43: Allah showed them to you in your dream as few. 8:44: He made each side appear few in the other's eyes so that a matter already decreed would come about.","8:9: “I will reinforce you with a thousand angels, following one another.”","Compare the Bible: God commanded Abraham to sacrifice his son without first revealing it was a test (Genesis 22). Withholding information isn't lying."],["Qurʾān 8:9; 8:43–44","Genesis 22"]));

/* 2:54 and 4:66 */
const MS=AV('selbstopferung-musa','1332339070906662974'), SS=AV('selbstopferung-selbstmord','1332335789924679781');
card('islam/quran/d-ia-alleged-contradictions/kill-yourselves-2-54',{title:"“Kill yourselves” (2:54) and 4:66",k:"The golden calf",blurb:"A punishment for idolatry, as in Exodus 32, and a hypothetical for hypocrites.",
 claim:"2:54 tells the Israelites to kill themselves, and 4:66 mentions killing yourselves: the Qurʾān commands suicide.",
 tree:N(MS,"Mūsā told his people: “turn in repentance to your Creator and kill yourselves” (2:54).",
  "They had worshipped the golden calf, and under the Torah idolatry carried the death penalty. Ibn ʿAbbās: as repentance the innocent killed the calf-worshippers they met, even relatives, and Allah forgave both the killed and the killers. Others read it as killing their desires and egos so they wouldn't return to idolatry. Either way it isn't suicide.",
  "The Qurʾān and Exodus",["Exodus 32:27–28: “Thus says the LORD, the God of Israel: put your sword on your side each of you… and each of you kill his brother, his companion and his neighbour.” The Levites killed about three thousand that day.","Ibn Kathīr on 2:55–56: those who demanded to see Allah were struck by lightning and revived (al-Suddī; al-Rabīʿ and Qatāda: death was their punishment and they were revived to finish their lives).","If Allah forgave them, the command can't have been to destroy themselves without purpose."],["Qurʾān 2:54–56","Exodus 32:27–28"],
  [N(SS,"4:66 also says “kill yourselves”.",
    "4:66 is hypothetical: “If We had decreed for them: kill yourselves or leave your homes, they wouldn't have done it except a few.” It shows that the hypocrites would never really obey Allah's commands, not that such a command was given.",
    "A conditional",[],["Qurʾān 4:66"])]),
 sum:"2:54 was the punishment for the calf-worship, matching Exodus 32 (or killing their egos); 4:66 is a hypothetical about the hypocrites."});
})();
