/* Creed map: does Allah change when He acts in time? Ibn Taymiyya on the voluntary attributes, the first act, “the Avenger before the first sinner”, active power vs passive potency.
   Sources checked 2026-11-28: Bukhārī 3191 & 7418, Muslim 2713 (sunnah.com); al-ʿAqīda al-Ṭaḥāwiyya with Ibn Abī l-ʿIzz (shamela 10777/89, ar.wikisource); Aquinas ST I q.25 a.1 (newadvent); SEP “Ibn Taymiyya” §4.4–4.5 (after Hoover). */
(()=>{
const {cr,N,card}=window.B;
const SEP={name:'Stanford Encyclopedia of Philosophy, “Ibn Taymiyya” §4.4–4.5',url:'https://plato.stanford.edu/entries/ibn-taymiyya/'};
const TAH={name:'al-ʿAqīda al-Ṭaḥāwiyya, with Ibn Abī l-ʿIzz’s commentary',url:'https://shamela.ws/book/10777/89'};
const STA={name:'Aquinas, Summa Theologiae I q.25 a.1',url:'https://www.newadvent.org/summa/1025.htm'};
const B3191={name:'Ṣaḥīḥ al-Bukhārī 3191',url:'https://sunnah.com/bukhari:3191'};
const B7418={name:'Ṣaḥīḥ al-Bukhārī 7418',url:'https://sunnah.com/bukhari:7418'};
const M2713={name:'Ṣaḥīḥ Muslim 2713',url:'https://sunnah.com/muslim:2713a'};
const S=cr(SEP,TAH);

card('islam/creed/attributes/allah-acts-in-time',{
  title:"Does Allah change when He acts in time?",
  k:"Creed · voluntary attributes",
  blurb:"Speaking, creating and avenging “when He wills”, without gaining or losing any perfection.",
  claim:"If Allah speaks, creates or takes vengeance at a certain moment, He changes: He moves from not-doing to doing, from potential to actual. A God who changes is not perfect and not eternal.",
  tree:N(S,
    "Allah speaks to Mūsā at a certain moment (7:143), hears the woman when she argues (58:1), and punishes Pharaoh at a certain time. Before that He had not done it, afterwards He had. Going from not-doing to doing is change, and change means He lacked something before or gained something after. So either Allah is not perfect, or these acts are not really His.",
    "Separate three levels. (1) His essence and attributes (life, knowledge, power, will, justice) are eternal and never change. (2) The kind of acting, creating and speaking, has no beginning: He “has always been a speaker when He wills”. (3) Only the individual acts follow one another, when He wills. An act shows a perfection He already had; it adds none. A deficiency would be a God who cannot act when He wills.",
    "The three levels (Ibn Taymiyya)",
    [
      "Level 1 · essence and attributes: always complete, never change (life, knowledge, power, will, justice).",
      "Level 2 · the kind of act: no first act. The Salaf formula: lam yazal mutakalliman idhā shāʾa, “He has always been a speaker, when He wills”.",
      "Level 3 · the individual act: this speech to Mūsā (7:143), this hearing (58:1), this punishment. Each begins when He wills.",
      "Ibn Taymiyya calls these al-ṣifāt al-ikhtiyāriyya, the voluntary attributes: they subsist in His essence and are exercised by His will and power (SEP §4.4).",
      "The Qurʾān describes acts at a moment: “When Mūsā came at Our appointed time and his Lord spoke to him” (7:143); “Allah has heard the words of the woman who argues with you” (58:1)."
    ],
    ["Qurʾān 7:143; 58:1","SEP “Ibn Taymiyya” §4.4"],
    [
      N(cr(TAH),
        "But there was a first time He took vengeance. Before the first sinner He was not “the Avenger”.",
        "Two different sentences. “Allah is the One of vengeance” describes who He is: His justice, power and will were always complete, so it was always true. “Allah punished Pharaoh” describes a deed and is true from the deed onward. Before the first sinner nothing was missing in Allah, only the object of vengeance was missing in creation. Al-Ṭaḥāwī says the same of the Creator: He had the meaning of Creator when nothing was created.",
        "Attribute vs. deed",
        [
          "Qurʾān: “Allah is Almighty, One of vengeance (dhū intiqām)” (3:4). The Qurʾān mostly says dhū intiqām; “al-Muntaqim” as a separate name comes from the weak list of 99 names, so it is debated.",
          "al-Ṭaḥāwī: له معنى الربوبية ولا مربوب، ومعنى الخالق ولا مخلوق: “He has the meaning of Lordship when there is none to be lord over, and the meaning of Creator when there is no creature.”",
          "al-Ṭaḥāwī: He did not acquire the name “Creator” after creating; just as He is “the Giver of life to the dead” and deserved that name before giving them life, He deserved the name “Creator” before making them.",
          "Vengeance needs a sinner. Vengeance without guilt would be injustice, so not taking vengeance before was itself justice."
        ],
        ["Qurʾān 3:4","al-ʿAqīda al-Ṭaḥāwiyya (Ibn Abī l-ʿIzz, Sharḥ)"],
        [
          N(cr('Burhān'),
            "A man is not a “hero” before he saves anyone, even if he could. So the title comes only with the deed.",
            "“Hero” is a deed-title: among humans we wait for the deed because the ability is uncertain; he may fail or lose his nerve. Allah's power and will are perfect and certain. And even among humans, a judge is a judge before his first verdict. The Qurʾān itself uses the doer-word before the deed: “I am creating (khāliqun) a human being from clay” (38:71), said before Adam existed.",
            "Deed-titles and attribute-names",
            [
              "Names of Allah are tawqīfī: we only use names from the Qurʾān and Sunna. “Hero” is not one of them; the comparison is for the logic only.",
              "Qurʾān 38:71 (cf. 15:28): innī khāliqun basharan, said to the angels before Adam was made. 2:30: innī jāʿilun fī l-arḍi khalīfa.",
              "Even if one insists the description “has avenged” begins with the deed: the first rescue gives a man no new strength, only a new relation to the one rescued. In Allah no new perfection appears."
            ],
            ["Qurʾān 38:71; 15:28; 2:30"],[])
        ]),
      N(cr(STA),
        "Still: a potential that becomes actual is imperfection. God is pure act.",
        "There are two kinds of “potential”. Passive potency is the capacity to be changed by something else, like wood that can become a chair; it shows a lack. Active power is the capacity to bring something about yourself; it is a perfection. Allah's ability to act is active power. Even Aquinas, whom the objector quotes, says passive power exists in God not at all, but active power must be assigned to Him in the highest degree.",
        "Active power ≠ passive potency",
        [
          "A deficiency is lacking something one ought to have or do. Before a sinner exists, one ought not to take vengeance. Not doing what ought not to be done is no deficiency.",
          "Change is a defect only if it is (a) forced from outside, (b) adds a perfection that was missing, or (c) removes one. Allah's acts are by His own will; the sinner is the occasion, not a cause that compels Him; nothing is added or lost.",
          "The burden is on the objector: name the perfection Allah lacked before the act. Justice, power and will were already complete.",
          "Aquinas, ST I q.25 a.1: active power “we must assign to Him in the highest degree”; passive power is not in God."
        ],
        ["Aquinas, Summa Theologiae I q.25 a.1"],
        [
          N(cr(SEP),
            "Grant it in your words: Allah had the potential to speak or avenge, and then actualized it. That is still going from potency to act, so still a deficiency.",
            "Grant the wording; the conclusion still does not follow, and for Ibn Taymiyya it is the reverse. Perfection is not frozen changelessness but living, willing activity. One who acts by his own will when he wills is more perfect than one who cannot act at all; a God who could never do anything new would be like the dead and the mute, less than His creatures. The step from not-doing to doing comes from Allah alone, nothing outside moves Him, and the act completes nothing that was missing. That is life and will, not lack.",
            "Ibn Taymiyya: acting is perfection",
            [
              "A fortiori (his method, SEP §4.2): God must be living, knowing, powerful, hearing, seeing and speaking; otherwise He would be dead, ignorant, impotent, blind, deaf and mute, less perfect than creatures who have these.",
              "Against the Ashʿarīs (SEP §4.4): a speech that is timelessly eternal is cut off from will and power, and that impugns God's perfection. Speaking by will and power, when He wills, is the more perfect.",
              "Wisdom (SEP §4.5): it is a greater perfection to create things for wise purposes at the right times than to create without purpose.",
              "What would be a deficiency: (a) being moved by something outside, (b) lacking the power before, (c) needing the act to become complete. None applies: the will is His own, the power was complete, the act shows His perfection and adds none.",
              "The Qurʾān describes exactly this God: “Doer of whatever He wills” (faʿʿālun li-mā yurīd, 85:16; 11:107); “Every day He is upon some matter” (55:29).",
              "The objector's model, the unmoved mover that never does anything new, comes from Aristotle, not from revelation. Ibn Taymiyya refuses to measure Allah's perfection by it."
            ],
            ["SEP “Ibn Taymiyya” §4.2, §4.4, §4.5","Qurʾān 85:16; 11:107; 55:29"],[],
            {visual:{kind:'steps',items:[
              ["Grant it","“potential → act”, in their words"],
              ["Moved from outside?","No: by His own will"],
              ["Power missing before?","No: complete from eternity"],
              ["Does the act complete Him?","No: it shows, it adds nothing"],
              ["So","life and will (85:16), not lack"]]}})
        ],
        {visual:{kind:'compare',
          left:{title:"Passive potency (a lack)",items:["Being changed by something else","Wood → chair","Gains what it did not have","Not in Allah"]},
          right:{title:"Active power (a perfection)",items:["Bringing about by one's own will","A judge giving a verdict","Shows what it already has","Allah has it fully"]}}}),
      N(cr(SEP,B3191,B7418,M2713),
        "Then there must have been a first time He ever spoke or created. What was He doing before?",
        "Ibn Taymiyya: there was no first act. Each act and each creature has a beginning, and Allah is before each one, but the series of His acts has no beginning, like the negative numbers, where every number has one before it and none is first. A first act would raise two problems: why exactly then, when every moment before was the same; and a move from never-acting to acting would be a move from deficiency to perfection.",
        "No first act (and the other view)",
        [
          "Kind vs. individual: the kind of creating is without beginning; every individual creature has a beginning. No created thing is eternal alongside Allah (SEP §4.4).",
          "Bukhārī 3191: كان الله ولم يكن شيء غيره، وكان عرشه على الماء, “Allah was and there was nothing other than Him, and His Throne was on the water; He wrote everything in the Reminder and created the heavens and the earth.” The same hadith mentions the Throne, so it describes the beginning of this world.",
          "Bukhārī 7418, same hadith: ولم يكن شيء قبله, “and there was nothing before Him”. This matches the Prophet's ﷺ duʿāʾ: “You are the First, there is nothing before You” (Muslim 2713).",
          "Qurʾān 11:7: “He created the heavens and the earth in six days, and His Throne was on the water”: something created already existed before this universe.",
          "Honest note · this is Ibn Taymiyya's position, not consensus. The Ashʿarīs hold there was a first act, chosen by the eternal will, and that an infinite past (an actual infinite already traversed) is impossible. Don't combine this view with a kalām argument that the past cannot be infinite."
        ],
        ["Bukhārī 3191; 7418","Muslim 2713","Qurʾān 11:7","SEP “Ibn Taymiyya” §4.4–4.5","Jon Hoover, “Perpetual Creativity in the Perfection of God”, Journal of Islamic Studies 15 (2004)"],
        [
          N(cr(SEP),
            "Then Allah speaks without pause, every moment?",
            "No. The formula is “a speaker when He wills” (idhā shāʾa). “No first act” means there was never a state of “Allah alone, never having spoken or created”. It does not mean a new act at every instant. Created things also persist, like the Throne. And there is no empty “time box” in which Allah waits: time is the sequence of created events, not a container around Him.",
            "“When He wills”",
            ["lam yazal mutakalliman idhā shāʾa: always a speaker, when He wills: to Mūsā, to the angels, on the Day of Judgement."],
            ["SEP “Ibn Taymiyya” §4.4"],[]),
          N(cr(SEP),
            "Then the universe is eternal, like Avicenna said.",
            "No. This universe, the heavens and the earth, has a beginning: six days (11:7). What has no beginning is the kind “there is something created”, not any particular thing. Against Avicenna, for whom one particular world flows from God by necessity and is eternal, Ibn Taymiyya holds that every creature comes about by Allah's will, at its own time, and depends on Him.",
            "Not an eternal world",
            ["No created thing is eternal with Allah; every one is preceded by Him and depends on Him."],
            ["Qurʾān 11:7","SEP “Ibn Taymiyya” §4.4"],[]),
          N(S,
            "Inconsistent: you accept a first act of vengeance but reject a first act overall.",
            "The difference is the reason. Vengeance had a first time because its object, the first sinner, appeared then; the “why then?” has an answer. Before the very first act there would be nothing but Allah, with complete power and will and nothing missing, so “why then and not before?” has no answer. Ibn Taymiyya calls that “preponderance without a preponderator”. The Ashʿarīs reply that choosing a moment without an outside difference is exactly what will is. This is the real point where the two schools part.",
            "First vengeance vs. first act",
            [
              "Vengeance: first time, yes; reason, the first sinner; deficiency, none.",
              "Acting as such: first time, no (Ibn Taymiyya); a first act would have no reason.",
              "Ashʿarī reply: the eternal will fixes the time without any change in Allah."
            ],
            ["SEP “Ibn Taymiyya” §4.4"],[])
        ]),
      N(cr('Burhān'),
        "(A Christian:) Your God changes; ours is pure act and never changes.",
        "The Christian has the same pattern and more. Creation is a first act on most Christian views. And the incarnation: “the Word became flesh” (John 1:14). At a moment in time a divine person becomes something he was not before, with a body, hunger and death. If acting at a moment were a deficiency, becoming a man at a moment would be far worse.",
        "Their own first act",
        ["John 1:14: “the Word became flesh”.","Whatever view of the past one takes, it does not reduce three to one; see the Trinity cards."],
        ["John 1:14"],[])
    ],
    {visual:{kind:'steps',items:[
      ["Essence & attributes","always complete, never change"],
      ["Kind of acting","no first act: “a speaker when He wills”"],
      ["Object appears","e.g. the first sinner"],
      ["Individual act","by His own will, at its time"],
      ["Result","a perfection shown, none added"]]},
     facts:[["Ibn Taymiyya's term","al-ṣifāt al-ikhtiyāriyya"],["Formula","lam yazal mutakalliman idhā shāʾa"],["Ṭaḥāwī","Creator before any creature"],["Hadith","Bukhārī 3191 · 7418"]]}
  ),
  sum:"Allah's essence and attributes never change; He has always acted “when He wills”; each act shows a perfection He already had. Active power is a perfection, not passive potency; Ibn Taymiyya denies a first act, the Ashʿarīs affirm one."
});
})();
