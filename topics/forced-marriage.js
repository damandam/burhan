/* Forced marriage — full debate map (2026-11-19), from Islamic Apologetics #forced-marriage
   and #women-and-the-quran › "consent must be sought…". Folds the separate consent tile into this card. */
(()=>{
const S=(f,cap)=>({src:'shots/'+f,cap});
const IA='Islamic Apologetics', FM='https://discord.com/channels/1514269918978248796/1538618936055037972', WQ='https://discord.com/channels/1514269918978248796/1557086518894526485';

const silence={they:"A virgin's silence counts as consent, so her real wishes don't matter.",
  we:"Silence counts as a yes only because a shy girl may not say yes aloud. A clear “no” cancels the marriage, and silence out of fear or pressure is not consent at all.",
  more:{h:"Her silence and her “no”",
    p:["“A previously married woman may not be married until she is consulted, and a virgin may not be married until her permission is sought.” They asked: how is her permission? He said: “That she stays silent” (Bukhārī 5136).",
       "In the Arab custom of the time a young unmarried woman might feel too shy to say “yes” aloud. The Prophet ﷺ made it easy: if she stays silent and doesn't object, that counts as consent.",
       "If she says “no”, the marriage is invalid. The scholars stress that silence caused by fear, pressure or coercion is not valid consent.",
       "Ibn Bāz: these ḥadīth show it is obligatory to seek the woman's permission and not allowed to marry her off without her consent, whether virgin or previously married. Marriage also needs a walī, and shighār (swapping daughters without dowry) is forbidden because it oppresses women."],
    src:["Bukhārī 5136, 5137","Muslim 1421","Ibn Bāz, Fatāwā"],credit:IA+' · #women-and-the-quran › consent must be sought',link:WQ},next:[]};

const minors={they:"But the jurists allowed a father to marry off a young girl without asking her.",
  we:"Some did, citing ʿĀʾisha, but even they give her the right to cancel it at maturity, and strong voices of the salaf said no father may do it at all.",
  more:{h:"Ibn Shubruma, Ibn Taymiyya and Ibn ʿUthaymīn",
    p:["Ibn Shubruma, the jurist of Kūfa and a Successor who died before al-Shāfiʿī and Aḥmad were born: a father may not marry off his young daughter until she matures and consents. He held ʿĀʾisha's case to be specific to the Prophet ﷺ, like the woman who offered herself to him or his having more than four wives (Ibn Ḥazm, al-Muḥallā 9/38–39).",
       "Ibn ʿUthaymīn: a girl of nine must also be asked, because at that age she begins to understand marriage, the view of Ibn Taymiyya. Below nine her consent can't be valid, so the father should wait. If an adult woman can't be forced, a young girl shouldn't be either.",
       "“What benefit does a young girl derive from marriage? Is it not a decision over her private matters without her understanding the implications? Let us wait until she understands the benefits of marriage and its meaning, then we may marry her off, for her best interest lies in her own hands.”",
       "If a father fears for her after his death and marries her to a suitable man, she keeps the right to annul it when she matures. Even so, Ibn ʿUthaymīn says it is better to avoid it: Allah may bring a better suitor later."],
    shots:[S('uthaymin-sharh-mumti-12-57.png',"Ibn ʿUthaymīn, al-Sharḥ al-Mumtiʿ 12/57–59: forcing a woman “contradicts the text and sound reason”; Ibn Shubruma; wait until she can consent.")],
    src:["Ibn Ḥazm, al-Muḥallā 9/38–39","Ibn ʿUthaymīn, al-Sharḥ al-Mumtiʿ 12/57–59","Ibn Taymiyya"],credit:IA+' · #forced-marriage · #women-and-the-quran',link:FM},next:[]};

topic(['islam','morality','marriage','d-ia-forced-marriage'],{title:"Forced marriage",k:"Consent",blurb:"Can a woman be married against her will?",article:{
claim:"In Islam fathers can force their daughters into marriage.",
tree:{they:"In Islam fathers can force their daughters into marriage.",
  we:"No. The Qurʾān forbids taking women against their will, the Prophet ﷺ required a woman's permission and annulled a marriage made against it, and the scholars call forcing her a betrayal and a major sin.",
  more:{h:"Consent is a condition",
    p:["Qurʾān 4:19: “O you who believe, it is not lawful for you to inherit women against their will.” Before Islam a dead man's relative could simply take his widow; the verse ended it.",
       "Khansāʾ bint Khidhām was married off by her father against her will, though she was previously married. She came to the Prophet ﷺ and he annulled the marriage (Bukhārī 5138).",
       "Ibn ʿUthaymīn: if the father could force her, asking her permission would be pointless. “What is the point of asking ‘Do you want us to marry you to this man?’, she says ‘No, he is a wicked man’ or ‘He is suitable but I don't want him’, and then she is told ‘You will be forced’? This contradicts the text.”",
       "On fathers who keep daughters from marrying for the money offered: “a betrayal of trust, a forfeiture of their guardianship, and a grave sin.”"],
    quote:{ar:"يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَحِلُّ لَكُمْ أَن تَرِثُوا النِّسَاءَ كَرْهًا",en:"“O you who believe, it is not lawful for you to inherit women against their will.” — al-Nisāʾ 4:19"},
    shots:[S('uthaymin-forced-marriage.png',"Ibn ʿUthaymīn on forced marriage: 4:19, “a virgin's father should seek her permission”, and fathers who force daughters.")],
    src:["Qurʾān 4:19","Bukhārī 5136, 5138","Ibn ʿUthaymīn (fatwa, via Shamela)"],credit:IA+' · #forced-marriage',link:FM},
  next:[silence,minors]},
sum:"Islam ended the pre-Islamic practice of taking women against their will, made a woman's permission a condition, and the Prophet ﷺ himself annulled a forced marriage. Silence counts only as a shy yes, never over a “no”, and even where jurists let a father contract for a young girl, she can cancel it when she matures."}});
cur.hide('islam/morality/women/d-ia-women-and-the-quran/t-consent-must-be-sought-in-order-to-marry-your-daug');
})();
