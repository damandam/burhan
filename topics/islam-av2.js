/* Islam AV batch 2 — 2026-11-20. Averroes “sonstiges islam 3”, group B (the Prophet ﷺ & Companions; not on the site before).
   add(): War map ← “I have been commanded to fight the people” (#prophet-saw-wurde-befohlen-gegen-jeden-zu-kämpfen); apostate scribe ← ʿAbdullāh ibn Saʿd (#abdullah-ibn-said-apostat-apostasie).
   NEW: nabīdh (#prophet-saw-trinkt-alkohol), Āmina's “hallucinations” (#prophet-saw-mutter-halluzinationen), Asmāʾ bint Marwān (#prophet-saw-auftrag-frau-töten),
   one slave for two black slaves (#prophet-saw-schwarze-sklave-verkaufen), Khālid and Banū Jadhīma (#khalid-tötet-unschuldige), ʿUmar and Umm Kulthūm (#omar-ra-heirat-mit-ali-tochter),
   Abū Bakr pokes ʿĀʾisha (#abu-bakr-schlägt-aisha), bathing together (#aisha-ra-bad-sex-mit-prophet-badewanne).
   Scans: #alkohol (3 imgs: Muslim 2004c, al-Nawawī), #abu-bakr (1). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('islam-av2: no card',key); };
const P='islam/prophet/', W='islam/morality/war/', MAR='islam/morality/marriage/';

/* Bukhārī 25 on the War map */
add('islam/morality/war',N(AV('prophet-saw-wurde-befohlen-gegen-jeden-zu-kämpfen','1284331853897138277'),
 "“I have been commanded to fight the people until they testify…” (Bukhārī 25): war on everyone until they convert.",
 "Ibn Taymiyya: it means fighting the combatants whom Allah permitted to be fought, not those with treaties, whose treaties Allah commanded to be fulfilled (Majmūʿ al-Fatāwā 19/20). “The people” here are the hostile Arab polytheists of his time. And he also said: “After me there will be conflicts; if you can end them peacefully, do so” (Musnad Aḥmad 695, ṣaḥīḥ).",
 "Bukhārī 25 in context",[],["Bukhārī 25","Ibn Taymiyya, Majmūʿ al-Fatāwā 19/20","Musnad Aḥmad 695"]));

/* ʿAbdullāh ibn Saʿd */
add('islam/hadith/d-dr-apostate-scribe-hadith',N(AV('abdullah-ibn-said-apostat-apostasie','1350136674658816102'),
 "Al-Nasāʾī 4067: at the conquest of Mecca the Prophet ﷺ wanted the apostate ʿAbdullāh ibn Saʿd ibn Abī Sarḥ killed.",
 "That chain is weak: it has Ismāʿīl ibn ʿAbd al-Raḥmān ibn Abī Karīma al-Suddī, called unreliable and an extreme Shīʿī, and Asbāṭ ibn Naṣr al-Hamdānī, who is no proof (editor's notes, no. 4352, cross-referring nos. 454 and 3873). And in the end ʿAbdullāh was pardoned, returned to Islam and later governed Egypt.",
 "Al-Nasāʾī 4067",[],["al-Nasāʾī 4067","Abū Dāwūd 2683"]));

/* nabīdh */
const NB=AV('prophet-saw-trinkt-alkohol','1288246872342921266');
card(P+'nabidh-not-alcohol',{title:"Did the Prophet ﷺ drink alcohol? (nabīdh)",k:"Muslim 2004",blurb:"Nabīdh is sweetened water; once it ferments it's forbidden.",
 claim:"Muslim 2004 says the Prophet ﷺ drank nabīdh, which is wine.",
 tree:N(NB,"Muslim 2004c: the Prophet ﷺ drank nabīdh. Nabīdh is wine.",
  "Nabīdh is water in which dates or raisins are steeped to sweeten it; it doesn't intoxicate. Al-Nawawī: “nabīdh is water sweetened with raisins and the like, so it tastes pleasant without intoxicating; if left too long and it becomes intoxicating, it's ḥarām” (Sharḥ Muslim 9/64). It's permitted while sweet and unchanged, by consensus (13/174). Lisān al-ʿArab: called nabīdh because dates or raisins are put in water or milk; what contains alcohol is ḥarām, what doesn't is ḥalāl.",
  "What nabīdh is",["Muslim 977a: “I had forbidden you nabīdh except in waterskins; now drink from any vessel, but drink nothing intoxicating.”","The same ḥadīth narrations say he drank it the same day and the next, and had what remained after the third day poured away: before it could ferment.","Turn the tables: the Gospels call Jesus “a glutton and a drunkard” (Luke 7:34), and his first miracle produced wine (John 2)."],["Muslim 2004c, 977a","al-Nawawī, Sharḥ Muslim 9/64; 13/174","Lisān al-ʿArab 14/175","Luke 7:34"]),
 sum:"Nabīdh is sweetened water drunk before fermenting (al-Nawawī, Lisān al-ʿArab); “drink nothing intoxicating” (Muslim 977)."});

/* Āmina */
card(P+'amina-hallucinations',{title:"Did the Prophet's ﷺ mother have hallucinations?",k:"Ibn Isḥāq",blurb:"An unsourced report, and inheritance doesn't work that way.",
 claim:"Āmina had visions or hallucinations, so her son inherited a mental illness.",
 tree:N(AV('prophet-saw-mutter-halluzinationen','1288556350095360030'),"Ibn Kathīr reports Āmina saw visions; so the Prophet's ﷺ revelations were inherited hallucinations.",
  "Ibn Kathīr quotes it from Ibn Isḥāq, who gives no source, and there is no other chain: an unsourced, fabricated story. And even if a parent had epilepsy, only a small share of children (about 2–5%) inherit it.",
  "No chain",[],["Ibn Kathīr, al-Sīra al-Nabawiyya"]),
 sum:"The report comes from Ibn Isḥāq without any chain."});

/* Asmāʾ bint Marwān */
card(W+'asma-bint-marwan',{title:"Did the Prophet ﷺ order the killing of Asmāʾ bint Marwān?",k:"A fabricated story",blurb:"Every version runs through liars; he forbade killing women.",
 claim:"The Prophet ﷺ had the poetess Asmāʾ bint Marwān killed in her sleep for mocking him.",
 tree:N(AV('prophet-saw-auftrag-frau-töten','1293287390529454151'),"A Muslim stabbed Asmāʾ bint Marwān at night while she nursed her baby, and the Prophet ﷺ praised him.",
  "The story is fabricated. Every version has a severe flaw: one goes through Muḥammad ibn al-Ḥajjāj, whom al-Bukhārī calls abandoned, Ibn Maʿīn “an evil liar”, al-Dāraquṭnī “a liar”; al-Albānī grades it mawḍūʿ. The other is al-Wāqidī's: Aḥmad: “a liar who alters ḥadīth”; al-Bukhārī and Abū Ḥātim: matrūk; al-Nasāʾī counted him among the four best-known forgers.",
  "And his actual conduct",["He forbade killing women: seeing a slain woman he said “she was not one who would fight” and told Khālid: “Kill no woman and no hired labourer” (Abū Dāwūd 2669).","He pardoned the Meccans at the conquest and even the Jewish woman who poisoned him."],["Abū Dāwūd 2669"]),
 sum:"Both versions run through known liars (Muḥammad ibn al-Ḥajjāj; al-Wāqidī); al-Albānī: fabricated."});

/* one for two black slaves */
const SL=AV('prophet-saw-schwarze-sklave-verkaufen','1293963769172590683');
card('islam/morality/slavery/one-slave-for-two-black-slaves',{title:"He bought a slave for two black slaves (Muslim 1602)",k:"A Muslim freed from his owner",blurb:"He freed a Muslim, paid what the owner demanded, and Bilāl was bought for gold.",
 claim:"The Prophet ﷺ exchanged one slave for two black slaves: black people were worth half.",
 tree:N(SL,"Muslim 1602: a slave pledged hijra; his master came; the Prophet ﷺ bought him for two black slaves.",
  "The slave had come as a Muslim without revealing he was a slave; letting him leave without compensating his master would have been theft. So the Prophet ﷺ bought him free. Nowhere does the ḥadīth say the Prophet ﷺ set the price: the owner did, selling his own property. And nothing says the freed man wasn't black himself.",
  "Who set the price",["Abū Bakr bought Bilāl, a black slave tortured under stones, for 200 ūqiyya of gold; the sellers said they'd have taken one piece, and he said he'd have paid a hundred (al-Dhahabī, Siyar 1/353: strong chain). Bilāl is among the people of Paradise.","At that time Islam was small and the prevailing forms of payment had to be used; the two were companions' slaves, not his own."],["Muslim 1602","al-Dhahabī, Siyar Aʿlām al-Nubalāʾ 1/353"]),
 sum:"He freed a Muslim by paying what his owner asked; the price was the seller's, and Abū Bakr paid gold for Bilāl."});

/* Khālid and Banū Jadhīma */
card(W+'khalid-banu-jadhima',{title:"Khālid ibn al-Walīd and Banū Jadhīma (Bukhārī 4339)",k:"“O Allah, I disown what Khālid did”",blurb:"A misunderstanding the Prophet ﷺ publicly condemned.",
 claim:"Khālid killed people who had become Muslim, so Islam's heroes were murderers.",
 tree:N(AV('khalid-tötet-unschuldige','1293955751089541160'),"Khālid killed captives of Banū Jadhīma who had accepted Islam.",
  "They didn't say “we have become Muslims” but “ṣabaʾnā, ṣabaʾnā”: the polytheists' word for those who left their religion. Khālid thought they had gone over to another religion and started killing and capturing. Ibn ʿUmar refused to kill his captive. When the Prophet ﷺ heard, he raised his hands and said twice: “O Allah, I disown what Khālid has done.” Al-Khaṭṭābī: he rebuked Khālid for rushing before understanding their words.",
  "Bukhārī 4339",["8 AH, after the conquest of Mecca, before Ḥunayn. He paid the blood money for the dead (Ibn Isḥāq).","So the ḥadīth is a condemnation of the act, and a lesson to verify people's intentions before any military action."],["Bukhārī 4339","al-Khaṭṭābī, Aʿlām al-Ḥadīth"]),
 sum:"The Prophet ﷺ publicly disowned Khālid's act, a misunderstanding of “ṣabaʾnā” (al-Khaṭṭābī)."});

/* ʿUmar and Umm Kulthūm */
card(MAR+'umar-umm-kulthum',{title:"ʿUmar and Umm Kulthūm bint ʿAlī",k:"A broken chain",blurb:"The story of uncovering her leg isn't authentic.",
 claim:"ʿUmar married ʿAlī's young daughter and uncovered her leg when she was sent to him.",
 tree:N(AV('omar-ra-heirat-mit-ali-tochter','1291091198064197692'),"Ibn ʿAbd al-Barr and Ibn Ḥajar report ʿUmar proposing to Umm Kulthūm; ʿAlī sent her, and ʿUmar uncovered her leg.",
  "The chain of that detail is broken, so it isn't authentic (al-Albānī). The report itself says ʿAlī first answered “she is still young” and then made the marriage depend on her own acceptance; and no narration states her age.",
  "The report",["Ibn ʿAbd al-Barr, al-Istīʿāb; Ibn Ḥajar, al-Iṣāba: the marriage itself is reported; the leg anecdote has an interrupted chain."],["al-Istīʿāb","al-Iṣāba"]),
 sum:"The leg anecdote has a broken chain (al-Albānī); the marriage depended on her consent and her age isn't given."});

/* Abū Bakr pokes ʿĀʾisha */
card('islam/morality/women/abu-bakr-pokes-aisha',{title:"Did Abū Bakr hit ʿĀʾisha? (Bukhārī 334)",k:"The lost necklace",blurb:"A father's poke in the side, the night tayammum was revealed.",
 claim:"Abū Bakr hit his daughter ʿĀʾisha in front of the Prophet ﷺ.",
 tree:N(AV('abu-bakr-schlägt-aisha','1287897365143093350'),"Bukhārī: Abū Bakr struck ʿĀʾisha.",
  "Read it: on a journey her necklace broke; everyone stopped where there was no water; people complained to Abū Bakr. He came while the Prophet ﷺ slept with his head on her lap, scolded her and “poked me in my side with his hand”, the word is ṭaʿana, a prod; she didn't move so as not to wake the Prophet ﷺ. The next morning the verse of tayammum was revealed, and Usayd ibn Ḥuḍayr said: “This is not the first of your blessings, O family of Abū Bakr.”",
  "Bukhārī 334",[],["Bukhārī 334, 3672","Qurʾān 5:6"]),
 sum:"A father's prod (ṭaʿana) during the episode that brought the verse of tayammum, which Usayd called a blessing of Abū Bakr's family."});

/* bathing together */
card(MAR+'bathing-together',{title:"The Prophet ﷺ and ʿĀʾisha bathing together",k:"Bukhārī 250",blurb:"Husband and wife washing after intimacy.",
 claim:"Reports describe the Prophet ﷺ and ʿĀʾisha in a bath together; Muslims make that sexual.",
 tree:N(AV('aisha-ra-bad-sex-mit-prophet-badewanne','1350593488365944834'),"A ḥadīth has the Prophet ﷺ and ʿĀʾisha in the bath together: indecent.",
  "The claim misrepresents it. The Arabic makes clear they were husband and wife who had been intimate and then washed together from one vessel for ghusl. It's narrated as a ruling on purification: spouses may bathe from one container.",
  "A purification ruling",[],["Bukhārī 250, 261"]),
 sum:"A husband and wife performing ghusl from one vessel: narrated as a purification ruling."});
})();
