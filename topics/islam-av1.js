/* Islam AV batch 1 — 2026-11-20. Averroes “sonstiges islam 3”, group A (Allah's attributes; not on the site before).
   add(): “I am time” card ← #allah-ist-zeit (Muslim 2246, Ibn Taymiyya).
   NEW Creed › Attributes: Allah's foot and Hell (#allah-fuß-hölle), the shin 68:42 + the form on Judgement Day (#schienbein + #allah-gestalt-erkenenn-schienbein),
   the semen-and-Throne report (#sperma-thron).  #100-und-99-barmherzigkeit is a PDF only (to capture). Scans: #allah-fuß-hölle (3 imgs), #allah-ist-zeit (2), #gestalt (1). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('islam-av1: no card',key); };
const AT='islam/creed/attributes/';

/* “I am time” */
add('islam/hadith/d-dr-is-allah-time',N(AV('allah-ist-zeit','1287409315665416358'),
 "The ḥadīth literally says Allah is time.",
 "Read the full wording: “The son of Ādam reviles time (al-dahr), and I am time: in My hand are the night and the day” (Muslim 2246). Ibn Taymiyya: in the Jāhiliyya people blamed misfortunes (illness, poverty, death) on “time” and cursed it; the Prophet ﷺ said don't curse time, because Allah is the one who sends those things. Cursing “time” is really cursing the One who acts. It's human language from experience, like saying “the sun sets”.",
 "Muslim 2246 and Ibn Taymiyya",["“In My hand are the night and the day; I alternate them” makes clear Allah is the controller of time, not time itself.","The ḥadīth comes a few narrations after the explanation in the same chapter (scans in the channel; to capture)."],["Muslim 2246","Bukhārī 4826"]));

/* foot */
const FH=AV('allah-fuß-hölle','1287421718595375266');
card(AT+'allahs-foot-and-hell',{title:"Allah's foot in Hell? (Bukhārī 6661)",k:"Qadam · 50:30",blurb:"Placed on it, not in it; Hell contracts and is full.",
 claim:"Bukhārī 6661 says Allah puts His foot in Hell. So God enters Hell, and has a body like ours.",
 tree:N(FH,"“Hell will keep saying ‘are there more?’ until the Lord of Might places His foot in it, and it says ‘Enough, enough!’” (Bukhārī 6661). Allah's foot in Hell.",
  "The wording has ʿalayhā, “on it”, and even the variant fīhā doesn't mean the foot enters Hell: it acts on it from above. Ibn Taymiyya: the qadam is real, Allah's own, without asking how (bilā takyīf); its only effect is that Hell contracts onto its inmates, and that contraction is its being “filled” (32:13; 11:119), so no more are thrown in. Allah's mercy shows in the result: the casting in stops.",
  "Ibn Taymiyya's argument",["1. The qadam is on/over Hell, not in it. 2. Its only effect named is contraction (yanzawī baʿḍuhā ilā baʿḍ). 3. The contraction is the filling Allah swore to (“I will fill Hell”). 4. So no further people are cast in: mercy as the consequence, without any taʾwīl of the qadam. 5. Hell's “Enough! by Your might” is acknowledgement that it is full.","Turn the tables: Christians say God was in Hades (the Descent); Clement of Alexandria says the apostles too preached to the dead in Hades (Stromata VI.6). The Lord's Prayer and Psalms place God in heaven (Matthew 6:9; Psalm 115:3; 123:1)."],["Bukhārī 6661","Qurʾān 50:30; 32:13; 11:119","Clement of Alexandria, Stromata VI.6"]),
 sum:"The foot is placed on Hell (ʿalayhā), Hell contracts and is filled, and no more are cast in (Ibn Taymiyya); an attribute affirmed without likening."});

/* the shin */
const SQ=AV('schienbein','1348658732002705489'), GF=AV('allah-gestalt-erkenenn-schienbein','1348618488217866293');
card(AT+'the-shin-68-42',{title:"“The day the shin is uncovered” (68:42) and Allah's form on Judgement Day",k:"Sāq",blurb:"The verse is an idiom of terror; the ḥadīth affirms an attribute and a test.",
 claim:"68:42 and a ḥadīth say Allah uncovers His shin, and that He appears in a form people don't recognise: an anthropomorphic, shape-shifting God.",
 tree:N(SQ,"“The day the shin is uncovered and they are called to prostrate but cannot” (68:42): Allah shows His leg.",
  "Most early exegetes read the verse as an Arabic idiom of terror: when someone flees in fear he lifts his garment and his shin shows, so “the war uncovered its shin” means it grew fierce. Ibn ʿAbbās: “the hardest hour of the Day of Resurrection”, “a day of terror and severe distress”; Mujāhid: “the severity of the matter”; Saʿīd ibn Jubayr likewise. Ibn Taymiyya himself says the verse doesn't establish the attribute; the ḥadīth of Abū Saʿīd does.",
  "The tafsīr",["Ṭanṭāwī and al-Zamakhsharī (al-Kashshāf): a metaphor for a desperate situation; like calling a miser “tight-fisted”. The shin is indefinite to show an unimaginably terrible matter.","Al-Baghawī, Ibn Qutayba; Ibn Kathīr's reports from Ibn ʿAbbās, Mujāhid (via Ibn Abī Najīḥ and Ibn Jurayj), al-ʿAwfī and al-Ḍaḥḥāk.","The Salaf differed on the verse (al-Nawawī, al-Ḥasan al-Baṣrī, Ibn al-Jawzī, al-Qurṭubī)."],["Qurʾān 68:42","Bukhārī 4919; 7439"],
  [N(SQ,"But the ḥadīth (Bukhārī 7439) says Allah uncovers His shin.",
    "In the authentic ḥadīth the shin is affirmed as a real attribute, like the Face or the Hands, without distortion, denial, asking how or likening (bilā kayf, bilā tamthīl). Its function: the believers recognise their Lord by it as the sign between them and Him; and it separates the sincere, who are enabled to prostrate, from the hypocrites and show-offs, whose backs become one rigid plank.",
    "Two functions",["After every nation follows what it worshipped, the believers wait; asked how they'll know their Lord, they say there is a sign between them; He uncovers His shin and they prostrate."],["Bukhārī 7439"]),
   N(GF,"Allah first comes in a form they don't recognise: He changes shape.",
    "Allah doesn't change; their perception does. Ibn ʿUthaymīn (Sharḥ Ṣaḥīḥ Muslim vol. 1): He appears first in a form they don't know as a test, whether they'd follow a god they don't recognise as the Christians and Jews blindly followed theirs; the believers refuse three times (“we associate nothing with Allah”); then He appears in the form they know. Abū ʿĀṣim and al-Dārimī likewise: people's sight is changed.",
    "The Salaf",["Isḥāq ibn ʿĪsā al-Ṭabbāʿ: a man who denied the ḥadīth said “Allah is too great to be seen like that”; ʿAbd al-ʿAzīz ibn Abī Salama al-Mājishūn replied: “Fool! Allah's greatness doesn't change; rather He changes your two eyes so you see Him as He wills.” The man repented.","There are many narrations of this long ḥadīth with variations in wording; scan in the channel (to capture)."],["Bukhārī 7439","Muslim 183"])]),
 sum:"The verse is an idiom of terror (Ibn ʿAbbās, Mujāhid); the ḥadīth affirms the shin without likening, as the sign of recognition and a test of sincerity, and it's people's perception that changes."});

/* semen and the Throne */
const ST=AV('sperma-thron','1348786435708293170');
card(AT+'semen-and-the-throne-report',{title:"The report of the nuṭfa and the Throne",k:"Ibn Masʿūd · Abū al-Zaʿrāʾ",blurb:"Weak, and not even a prophetic ḥadīth.",
 claim:"A report links the nuṭfa (semen) to Allah's Throne, a bizarre belief in Islam.",
 tree:N(ST,"Al-Qurṭubī, al-Ṭabarānī and al-Ḥākim narrate a report about the nuṭfa and the Throne.",
  "It's weak and not prophetic: it only goes back to Ibn Masʿūd, through Abū al-Zaʿrāʾ. Al-Bukhārī: his ḥadīth isn't followed; Ibn Ḥazm: not strong; Abū Ḥātim: a shaykh whose ḥadīth aren't proof, like an unknown; al-Nasāʾī knew no one but Salama ibn Kuhayl narrating from him; Ibn ʿAdī doubted he heard from Ibn Masʿūd. Al-Dhahabī contradicts al-Ḥākim's claim that it meets al-Bukhārī's and Muslim's conditions, since neither used Abū al-Zaʿrāʾ.",
  "The chains",["Second chain: Muḥammad ibn Kaʿb from “a man” from Abū Hurayra from the Prophet ﷺ: an unnamed man makes it very weak.","Authentic reports from Abū Hurayra mention something similar without the semen detail."],["al-Ḥākim, al-Mustadrak","al-Dhahabī, Talkhīṣ"]),
 sum:"The report is mawqūf on Ibn Masʿūd through the weak Abū al-Zaʿrāʾ, and the other chain has an unnamed narrator."});
})();
