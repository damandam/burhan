/* Christianity AV batch 3 — Child Marriage & Canon Law (part 2; 17 Averroes channels in `Christentum kinder ehe und missbrauch`).
   Cards placed under `christianity/practice/child-marriage/<clean-slug>`:
     1.  johannes-bollandus-canon-law         (#johannes-bollandus, 1315116997742428240)
     2.  canon-law-parental-consent           (#kirchen-recht-buch, 1315119490035486831)
     3.  song-of-solomon-fawns                (#rehkitze, 1340401492426756156)
     4.  rebecca-age-and-church-fathers       (#rebecca, 1350050767490257069)
     5.  council-of-trent-marriage-age        (#konzil-von-trient, 1352403405662060695)
     6.  bathsheba-sanhedrin-69b              (#batsheba, 1352789850520293538)
     7.  martin-luther-vows-age               (#martin-luther, 1352982019381923870)
     8.  arabic-canons-of-nicaea              (#arabische-nicä-concil, 1353003375758934057)
     9.  petrus-dens-moral-theology           (#petrus-dens-katholisch, 1353017779179094016)
     10. canonical-age-codes-and-schaff       (#katholische-buch, 1360668846054441092)
     11. anna-the-prophetess-luke-2           (#hanna, 1362129551802499294)
     12. cornelius-a-lapide-sirach            (#lapide, 1366894534889574400)
     13. byzantine-and-catholic-canonists     (#pedalion, 1367032373853552640)
     14. ambrose-and-ado-of-vienne            (#allgemein, 1384882562371162213)
     15. greek-pais-luke-8-deut-22            (#12-jährige-wird-kind-mädchen-genannt, 1401836599691579503)

   Pointer-only channel (no local text or attachments):
     - #maria-12 (channel ID: 1403327162563559464): cross-reference only (`Averreos 2 #maria-12`).

   Scans/PDFs to capture:
     - Image-only channel (no text argument):
       * #andere-gesellschaften (channel ID: 1413603584330956971): IMG_9816.png, IMG_9815.png
     - Attachments inside text channels above:
       * #kirchen-recht-buch (channel ID: 1315119490035486831): IMG_4586.jpg, IMG_4587.jpg (pp. 148–149, 162)
       * #batsheba (channel ID: 1352789850520293538): Screenshot_2025-05-16_172249.png
       * #petrus-dens-katholisch (channel ID: 1353017779179094016): IMG_5981.png
       * #katholische-buch (channel ID: 1360668846054441092): image.png, Screenshot_2025-04-12_191009.png
       * #lapide (channel ID: 1366894534889574400): IMG_6562.png
       * #allgemein (channel ID: 1384882562371162213): Screenshot_2025-06-18_150642.png
       * #12-jährige-wird-kind-mädchen-genannt (channel ID: 1401836599691579503): IMG_7872.png, IMG_5713.png, IMG_7874.png, IMG_5714.png */

(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P='christianity/practice/child-marriage/';

/* 1. Johannes Bollandus — Acta Sanctorum & canonists on age 10–12 */
const JB=AV('johannes-bollandus','1315116997742428240');
card(P+'johannes-bollandus-canon-law',{
 title:"Johannes Bollandus & Catholic canonists on marriage at ages 10–12",
 k:"Canon law",
 blurb:"Bollandus cites St. Gertrude at 10, Sigibert at 12, and canonists allowing marriage at 11.",
 claim:"Christian tradition always barred pre-teen and early-teen marriage as unheard of.",
 tree:N(JB,
  "Christian hagiography and canon law never treated children aged ten to twelve as eligible for marriage.",
  "In the Jesuit Bollandist Acta Sanctorum, Johannes Bollandus records ten-year-old St. Gertrude receiving a royal marriage proposal, notes that Sigibert's age of twelve was no obstacle to his marriage with Fridiburga, and cites standard Catholic canonists teaching that precocity ('malitia') supplies for chronological age and that eleven years can suffice for marital capacity.",
  "Bollandus, St. Gertrude (10), Sigibert (12), & canonists (11)",
  [
   "St. Gertrude at age 10: At a royal banquet, the king asked the ten-year-old St. Gertrude whether she wanted a boy dressed in gold and silk as her husband; filled with holy indignation, she refused with an oath—declaring she wanted neither him nor any other worldly man, only Christ the Lord—to the amazement of the king and nobles, while the boy withdrew confused and angry (Acta Sanctorum, Tom. II, p. 595, note c).",
   "Sigibert at age 12: Bollandus concludes from Gertrude's case that Sigibert's age of twelve poses no barrier to his marriage with Fridiburga.",
   "Canon-law rule (X 4.2.14): Canonists explicitly teach under c. XIV de Desponsatione impuberum (Liber Extra IV.2.14) that there are cases where precocity/malice supplies for age ('malitia supplet aetatem').",
   "Eleven years sufficient: Standard moral and canonical authorities—Lucius Ferraris (Bibliotheca Canonica, s.v. 'Matrimonium', art. II, n. 22ff. and n. 35ff.) and Franz Schmalzgrueber (l. c. 52)—affirm that eleven years suffice to regard someone as capable of marriage."
  ],
  ["Johannes Bollandus, Acta Sanctorum, Tom. II, p. 595, note c (mlat.uzh.ch/browser/23545:5.61)","Decretals of Gregory IX, X 4.2.14 (c. XIV de Desponsat. impub.)","Lucius Ferraris, Bibliotheca Canonica, 'Matrimonium', art. II, nn. 22ff., 35ff.","Franz Schmalzgrueber, Jus Ecclesiasticum Universum, l. c. 52"],
  [],
  {
   facts:[["Author","Johannes Bollandus (SJ)"],["Ages Cited","10 (Gertrude), 11 (canonists), 12 (Sigibert)"],["Rule","X 4.2.14 (malitia supplet aetatem)"],["Authorities","Ferraris & Schmalzgrueber"]],
   quotes:[{by:"Johannes Bollandus (citing St. Gertrude & canonists)",en:"She however, as if filled with anger, rejected him with an oath and said: 'I want neither him nor any other worldly man as my husband, except Christ the Lord.'... This happened with the ten-year-old Saint Gertrude [Tom. II, p. 595, note c]; and therefore the age of twelve years of Sigibert seems to be no obstacle to his marriage with Fridiburga. Indeed, the canonists teach that there are cases in which precocity [malitia] supplies for age [c. XIV de Desponsat. impub. (IV. 2.)], and that eleven years suffice to consider someone capable of marriage.",ref:"Acta Sanctorum / mlat.uzh.ch/browser/23545:5.61"}]
  }),
 sum:"Bollandus documents a ten-year-old's marriage proposal, treats twelve as unproblematic for Sigibert, and cites Ferraris and Schmalzgrueber on eleven being sufficient under canon law."
});

/* 2. Kirchenrechtbuch — Minor's marriage valid without parental consent */
const KR=AV('kirchen-recht-buch','1315119490035486831');
card(P+'canon-law-parental-consent',{
 title:"Catholic canon law textbook: a minor's marriage is valid even without parental consent",
 k:"Parental consent",
 blurb:"Lack of parental consent is neither an invalidating nor even a prohibitive impediment for a minor.",
 claim:"In Christian canon law, minors could never validly marry without their parents' permission.",
 tree:N(KR,
  "Christian marriage law strictly required parental consent to validate any marriage of a minor.",
  "Standard Catholic canon law textbooks state explicitly that lack of parental consent—even for a minor child—constitutes neither a diriment (invalidating) impediment nor even a prohibitive (impedient) impediment to marriage.",
  "Canon law on minors marrying without parental consent",
  [
   "Neither diriment nor prohibitive: On page 162, the canon law textbook establishes that the absence of parental consent to the marriage even of a minor child ('auch des minderjährigen Kindes') creates neither an invalidating nor a delaying impediment.",
   "Duty of piety only: Refraining from marrying against the well-founded wishes of one's parents is classified solely as a moral duty of filial piety ('Pflicht der Pietät'), not a condition for legal validity or liceity.",
   "Source scans: Pages 148–149 and 162 are attached as two scans in the Discord channel (IMG_4586.jpg, IMG_4587.jpg — to capture)."
  ],
  ["Catholic Canon Law Textbook, pp. 148–149, 162 (IMG_4586.jpg, IMG_4587.jpg)"],
  [],
  {
   facts:[["Page","p. 162 (also pp. 148–149)"],["Scope","Even minor children"],["Status","Valid & not even a prohibitive impediment"],["Scans","2 images to capture"]],
   quotes:[{by:"Catholic Canon Law Textbook",en:"Therefore, the lack of parental consent to the contracting of marriage—even of a minor child—constitutes neither a diriment nor even a prohibitive impediment to marriage. It is a duty of filial piety, however, that children do not contract their marriages against the well-founded will of their parents.",ref:"p. 162"}]
  }),
 sum:"Catholic canon law did not even require parental consent for the validity of a minor's marriage, treating filial deference solely as a moral duty of piety."
});

/* 3. Song of Solomon 4:5 — Young fawns */
const RK=AV('rehkitze','1340401492426756156');
card(P+'song-of-solomon-fawns',{
 title:"Song of Solomon 4:5: breasts compared to 'two young fawns'",
 k:"Biblical imagery",
 blurb:"Song of Songs 4:5 compares the bride's breasts to two baby deer—twin fawns of a gazelle.",
 claim:"Biblical love poetry exclusively depicts mature, fully developed adult anatomy.",
 tree:N(RK,
  "The Bible's Song of Songs always describes the bride with strictly mature, adult imagery.",
  "Song of Solomon 4:5 explicitly compares the beloved's breasts to 'two young fawns' (Rehkitze / Rehkalb—newborn or baby deer), twins of a gazelle grazing among the lilies.",
  "Song of Solomon 4:5",
  [
   "Biblical text: Song of Solomon 4:5 describes the bride's breasts with the diminutive image of 'two young fawns' (twin offspring of a gazelle).",
   "Terminology: The German rendering 'Rehkitze' ('Rehkalb') literally denotes a baby deer / fawn, highlighting youthful, small development in biblical erotic poetry."
  ],
  ["Song of Solomon (Song of Songs) 4:5"],
  [],
  {
   facts:[["Verse","Song of Solomon 4:5"],["Imagery","Two young fawns (baby deer)"],["Context","Biblical love poetry"],["Point","Youthful bodily imagery"]],
   quotes:[{by:"Song of Solomon 4:5",en:"Your two breasts are like two fawns, twins of a gazelle, that graze among the lilies.",ref:"Song of Solomon 4:5"}]
  }),
 sum:"Song of Solomon 4:5 itself compares the beloved's breasts to two young fawns—baby deer—undercutting claims that biblical marriage poetry avoids youthful imagery."
});

/* 4. Rebecca — Clement, Jerome, Rashi's 3-year chronology, & Gen 24:16–20 well analysis */
const RB=AV('rebecca','1350050767490257069');
card(P+'rebecca-age-and-church-fathers',{
 title:"Rebecca's age: Church Fathers, Rashi's 3-year chronology, and Genesis 24",
 k:"Biblical marriage",
 blurb:"Clement and Jerome highlight Rebecca's youth and nurse; Rashi calculates age 3, while Midrash gives 10 or 14.",
 claim:"Rebecca was unmistakably a grown adult woman when she married Isaac.",
 tree:N(RB,
  "Genesis 24 portrays Rebecca as a mature, independent adult woman who couldn't possibly have been a child.",
  "Early Church Fathers and classical Jewish exegetes read Genesis 24 very differently. Clement of Alexandria stresses the redundant emphasis in Genesis 24:16 ('a virgin, whom no man had known') as pointing to a young girl untouched by a man, while Jerome asks on Genesis 24:59 why Rebecca needed her wet-nurse's consolation if she were a grown woman. Orthodox Jewish tradition (Rashi) calculates her age at three years—with secondary Midrashic views giving ten or fourteen.",
  "Clement of Alexandria & Jerome on Genesis 24",
  [
   "Clement of Alexandria on Genesis 24:16: Clement puzzles over why Scripture adds 'whom no man had known' after already calling her a 'virgin'—asking whether there is some other kind of virgin touched by a man, and concluding it means a young girl ('ein Mädchen') untouched by a man.",
   "Jerome (Hieronymus) on Genesis 24:59: Noting that Rebecca's family sent away 'their sister Rebecca, and her nurse [Amme], and Abraham's servant, and his men', Jerome comments that it was fitting for a virgin departing without her parents to be comforted by the consolation of her nurse.",
   "Patristic implication: Why would a fully grown, independent woman require the soothing presence and accompaniment of her nurse upon leaving home?"
  ],
  ["Clement of Alexandria on Genesis 24:16","Jerome (Hieronymus) on Genesis 24:59"],
  [
   N(RB,
    "Jewish tradition never placed Rebecca at such a young age—and how could a 3-year-old carry water jars or have a nurse?",
    "In Orthodox Judaism, Rashi's Torah-based chronology—reckoned from Genesis 23:1 (Sarah's death) and 25:20 (Isaac marrying at 40)—places Rebecca at 3 years old, making it the primary rabbinic view alongside secondary Midrashic opinions of 10 or 14 years (Sefer ha-Yashar, Seder Olam Rabbah). Jewish commentators also answer all three standard Christian objections directly from the Hebrew text and historical practice.",
    "Rashi's chronology & Jewish replies to 3 Christian objections",
    [
     "Biblical chronology (Rashi): Genesis 25:20 states Isaac was 40 when he married; at Sarah's death (Genesis 23:1), Isaac was 37 when Rebecca was born (linking the binding of Isaac, Rebecca's birth notice in Gen 22, and Sarah's death); three years later, Isaac marries a 3-year-old Rebecca.",
     "Secondary Midrashic opinions: Texts such as Sefer ha-Yashar and Seder Olam Rabbah give 10 or 14 years as secondary traditions.",
     "Objection 1 (Gen 22 records conception, not birth): Reply—Hebrew distinguishes between יָלְדָה (yāləḏāh, 'bore', used for Nahor's other descendants) and יָלַד (yālaḏ, 'begot', used for Rebecca); Rashi stresses the genealogy primarily marks the timing of Rebecca's birth.",
     "Objection 2 (A 3-year-old cannot carry water jars, Gen 24:15–20): Reply—Historical documentation shows child labor was practiced from age 3 (for example, in the 20th-century United States).",
     "Objection 3 ('Nurse' in Gen 24:59 does not indicate age): Reply—Hebrew יָנַק (yānaq) literally means 'to suckle/nurse', and the nurse is singled out separately from the other maidservants (Gen 24:61), pointing to a very young child."
    ],
    ["Genesis 22:23; 23:1; 24:15–20, 59, 61; 25:20","Rashi on Genesis 25:20","Sefer ha-Yashar; Seder Olam Rabbah"],
    [
     N(RB,
      "Watering ten camels at a well (Gen 24:16–20) would require hauling hundreds of liters—impossible for a very young girl.",
      "A strict reading of Genesis 24:16–20 requires far less physical exertion than critics assume: the trough (הַשֹּׁקֶת, ha-shoqet) typically held leftover water from prior users, the text counts only two trips to the well (once for Eliezer, 'once more'—עוֹד—for the camels), and camels resting briefly drink only a few liters each.",
      "Textual & cultural analysis of Genesis 24:16–20",
      [
       "Pre-filled trough: The watering trough (ha-shoqet) at a communal well already retained ~20–30 liters from earlier herds; Rebecca did not start from zero.",
       "Only two trips in the text: The text records only that she emptied her jar into the trough once (v. 20a) and ran 'once more' (עוֹד, v. 20b) to the well—no endless marathon of hauling.",
       "Cultural camel-watering practice: During brief stops, camels do not drink to full capacity (5 liters per animal suffices in a group sharing the trough), and troughs were reused throughout the day.",
       "Theological parallel & what the text omits: Like the widow of Zarephath's small jar of oil (1 Kings 17:12), Rebecca's voluntary initiative (v. 19) is the sign for Eliezer. Crucially, the text never says the camels drank to full saturation (only 'until they had enough', v. 19) nor that Rebecca was exhausted—she ran (v. 20)."
      ],
      ["Genesis 24:16–20","1 Kings 17:12"],
      [],
      {
       facts:[["Trips","2 well trips (עוֹד, v. 20)"],["Watering","Shared trough + ~5 L/camel"],["Parallel","Widow of Zarephath (1 Kgs 17:12)"],["Text omits","Full saturation or exhaustion"]],
       visual:{kind:'steps',items:[
        ["Gen 24:16","Fills jar once at the well (~10–15 L); trough already holds ~20–30 L leftover water."],
        ["Gen 24:18","Gives Eliezer a drink; jar remains partly filled (~5–10 L)."],
        ["Gen 24:19","Voluntarily offers: 'I will draw for your camels also' (announcement, not yet action)."],
        ["Gen 24:20a","Empties remaining 5–10 L into the trough (~30–40 L total)."],
        ["Gen 24:20b","Runs 'once more' (עוֹד) to the well for one refill (~10–15 L -> ~40–55 L total)."],
        ["Gen 24:20c","10 camels drink ~4–5 L each from the full trough—sufficient for short refreshment."]
       ]}
      })
    ],
    {
     facts:[["Primary Jewish View","Age 3 (Rashi)"],["Secondary Views","10 or 14 (Midrash)"],["Hebrew Key","yānaq (suckle) & yālaḏ"],["Verses","Gen 22–25"]],
     visual:{kind:'compare',
      left:{title:"3 Christian Objections",items:["Gen 22 records conception, not birth","A 3-year-old cannot carry jars (Gen 24:15–20)","'Nurse' (Gen 24:59) doesn't prove childhood"]},
      right:{title:"Jewish Counter-Arguments",items:["Hebrew contrasts yāləḏāh ('bore') vs yālaḏ ('begot') for Rebecca","Child labor from age 3 is historically documented (e.g., 20th-c. US)","yānaq means 'suckle'; nurse is listed apart from maids (Gen 24:61)"]}}
    })
  ],
  {
   facts:[["Fathers","Clement of Alexandria & Jerome"],["Jewish Primary","Age 3 (Rashi)"],["Midrash","10 / 14 years"],["Verses","Gen 24:16, 59"]],
   quotes:[
    {by:"Clement of Alexandria",en:"This is not written about her without reason. Yet I am troubled by the meaning of the statement: 'She was a virgin, whom no man had known.' For it sounds as though a virgin were something different from one untouched by any man. And what is this added emphasis supposed to mean, when speaking of a virgin, that it says 'a man had not known her'? Is there perhaps some other virgin whom a man has touched?",ref:"On Genesis 24:16"},
    {by:"Jerome (Hieronymus)",en:"And they sent away their sister Rebecca, and her nurse, and Abraham's servant, and the men who were with him. In Hebrew it stands: 'And they sent away their sister Rebecca, and her nurse, and Abraham's servant, and his men.' For it was fitting that a virgin setting out without her parents to marry should be comforted by the consolation of her nurse.",ref:"On Genesis 24:59"}
   ]
  }),
 sum:"Clement and Jerome highlight Rebecca's untouched youth and need for her wet-nurse's comfort, while Rashi's Torah chronology places her at three (and Midrash at 10 or 14)."
});

/* 5. Council of Trent — 12 & 14 */
const KT=AV('konzil-von-trient','1352403405662060695');
card(P+'council-of-trent-marriage-age',{
 title:"Council of Trent: minimum marriage ages of 12 for girls and 14 for boys",
 k:"Church councils",
 blurb:"Catholic ecumenical council standard: 12 years for girls and 14 years for boys.",
 claim:"Ecumenical Catholic councils set modern adult age thresholds for marriage.",
 tree:N(KT,
  "Official Catholic conciliar teaching always required adult ages comparable to modern secular law.",
  "Under the Council of Trent, the canonical minimum ages for marriage remained 12 years for girls and 14 years for boys.",
  "Council of Trent (12 for girls, 14 for boys)",
  [
   "Minimum age rule: 12 years for girls and 14 years for boys."
  ],
  ["Council of Trent"],
  [],
  {
   facts:[["Council","Council of Trent"],["Girls","12 years"],["Boys","14 years"]]
  }),
 sum:"The Council of Trent maintained the traditional canonical minimum marriage ages of twelve for girls and fourteen for boys."
});

/* 6. Bathsheba — Babylonian Talmud Sanhedrin 69b */
const BS=AV('batsheba','1352789850520293538');
card(P+'bathsheba-sanhedrin-69b',{
 title:"Bathsheba in Sanhedrin 69b: biblical chronology yields 6 or 8 years old",
 k:"Talmud & Bible",
 blurb:"Sanhedrin 69b calculates from Ahithophel's death at 33 that Bathsheba bore Solomon at 6 or 8.",
 claim:"Scriptural chronology precludes girls bearing children before modern adulthood.",
 tree:N(BS,
  "Biblical narratives never imply procreation at ages six to eight.",
  "In Babylonian Talmud Sanhedrin 69b, the Gemara uses biblical genealogies and timelines from 2 Samuel and Psalm 55:24 to argue that earlier generations begot children at age 8—or even that Ahithophel and Eliam begot at 9 while Bathsheba gave birth to Solomon at age 6.",
  "Sanhedrin 69b calculation from Ahithophel's lifespan",
  [
   "Genealogy: Bathsheba was the daughter of Eliam (2 Samuel 11:3) and granddaughter of Ahithophel ('Eliam, son of Ahithophel', 2 Samuel 23:34).",
   "Ahithophel's age at death: Based on Psalm 55:24 ('Men of blood and treachery shall not live out half their days') and a Baraita, the Talmud holds Ahithophel died at 33 years old (2 Samuel 17:23).",
   "Age at Solomon's birth: Since Solomon was at least 7 years old when Ahithophel died during Absalom's rebellion, Ahithophel was 26 at Solomon's birth (33 − 7).",
   "Three generations in 24 years: Subtracting 2 years for the three pregnancies (Eliam, Bathsheba, Solomon) leaves 24 years across three generations (Ahithophel → Eliam → Bathsheba → Solomon) = 8 years per generation.",
   "Gemara's alternative (age 6): The Gemara asks whether Ahithophel and Eliam might have begotten at 9 while Bathsheba bore Solomon at 6, noting women's earlier capability—especially since Bathsheba had already borne a prior child to David before Solomon (2 Samuel 11:27).",
   "Related channel & scan: Cross-referenced to #rabbiner-juden-helfen-kirchenväter; 1 screenshot attached in channel (Screenshot_2025-05-16_172249.png — to capture)."
  ],
  ["Babylonian Talmud, Sanhedrin 69b","2 Samuel 11:3, 27; 12:25; 13:23, 38; 14:28; 15:7; 17:23; 23:34","Psalm 55:24"],
  [
   N(BS,
    "How does Sanhedrin 69b establish that Solomon was at least 7 years old when Ahithophel died?",
    "The Gemara pieces together every chronological marker in 2 Samuel between Solomon's birth (named Jedidiah, 2 Samuel 12:25) and Absalom's rebellion—totaling at least seven full years.",
    "Step-by-step biblical timeline in Sanhedrin 69b",
    [
     "Solomon's birth: David and Bathsheba's son Solomon/Jedidiah is born (2 Samuel 12:25).",
     "Amnon's death (+2 years): 'After two full years Absalom had sheepshearers' (2 Samuel 13:23)—at least 2 years after Solomon's birth.",
     "Exile in Geshur (+3 years = 5): 'Absalom fled and went to Geshur, and was there three years' (2 Samuel 13:38).",
     "Return to Jerusalem (+2 years = 7): 'Absalom lived two full years in Jerusalem' (2 Samuel 14:28).",
     "Absalom's rebellion: 'At the end of forty years Absalom said: Let me go to Hebron' (2 Samuel 15:7)—by which point Solomon was at least 7 years old, and Ahithophel hanged himself (2 Samuel 17:23) at age 33."
    ],
    ["2 Samuel 12:25; 13:23, 38; 14:28; 15:7; 17:23"],
    [],
    {
     facts:[["Ahithophel's Death","Age 33 (Ps 55:24)"],["Solomon's Age","≥ 7 years (2 Sam 13–15)"],["Remaining Span","24 yrs ÷ 3 gens = 8"],["Alternative","9 / 9 / 6 years (Bathsheba at 6)"]],
     visual:{kind:'steps',items:[
      ["2 Sam 12:25","Solomon (Jedidiah) born to David and Bathsheba (year 0)."],
      ["2 Sam 13:23","Amnon killed after 2 full years (Solomon ≥ 2)."],
      ["2 Sam 13:38","Absalom flees to Geshur for 3 years (Solomon ≥ 5)."],
      ["2 Sam 14:28","Absalom stays 2 years in Jerusalem (Solomon ≥ 7)."],
      ["2 Sam 15:7 & 17:23","Absalom rebels; Ahithophel hangs himself at 33 (Ps 55:24) -> was 26 at Solomon's birth."],
      ["24 yrs ÷ 3 gens","Minus ~2 yrs for pregnancies = 24 yrs for 3 generations (8 each, or 9 + 9 + 6 for Bathsheba)."]
     ]}
    })
  ],
  {
   facts:[["Source","Talmud, Sanhedrin 69b"],["Verses","2 Sam 11:3; 23:34; Ps 55:24"],["Result","8 yrs/gen or Bathsheba at 6"],["Scan","1 screenshot to capture"]],
   quotes:[{by:"2 Samuel 11:3 & 23:34 / Psalm 55:24",en:"'Is not this Bathsheba, the daughter of Eliam, the wife of Uriah?' (2 Sam 11:3) — 'Eliam the son of Ahithophel' (2 Sam 23:34) — 'Men of blood and treachery shall not live out half their days' (Ps 55:24).",ref:"Basis of Sanhedrin 69b"}]
  }),
 sum:"Using 2 Samuel's timeline and Psalm 55:24, Sanhedrin 69b derives eight years per generation—or suggests Bathsheba bore Solomon at age six after an earlier child."
});

/* 7. Martin Luther — Vows at age 10 or 12 */
const ML=AV('martin-luther','1352982019381923870');
card(P+'martin-luther-vows-age',{
 title:"Martin Luther: rejecting an 18-year threshold and defending vows at ages 10–12",
 k:"Reformation",
 blurb:"In The Babylonian Captivity of the Church, Luther mocks making 18 the minimum age over 10 or 12.",
 claim:"The Protestant Reformers treated age 18 as the obvious minimum threshold for adult commitments and sexual awareness.",
 tree:N(ML,
  "Reformation theology insisted on age 18 as the baseline for sexual awareness and binding vows.",
  "In The Babylonian Captivity of the Church (Part 3, Article on Baptism), Martin Luther explicitly attacks setting age 18 as the minimum threshold for valid vows based on sexual urges—asking why a vow taken at 10 or 12 would not be just as valid.",
  "Luther on vows, sexual awareness, and ages 10–12",
  [
   "Context: While discussing baptism and monastic/religious vows, Luther criticizes opponents who require age 18 on the grounds that sexual awareness ('motions of the flesh') begins then.",
   "Ages 10–12 defended: Luther calls setting an arbitrary age limit 'folly' and states he sees no reason why a vow made at 18 should be valid while one made at 10 or 12 is not—implying 10- to 12-year-olds can already experience those feelings and make binding vows (which applies theoretically to marriage vows as well).",
   "Inconsistency exposed: Luther presses further—what if someone scarcely feels fleshly motions at 20, or feels them more strongly at 30 than at 20? And why set no similar age limit for vows of poverty and obedience, since even spiritual people struggle to detect avarice or pride?"
  ],
  ["Martin Luther, The Babylonian Captivity of the Church, Part 3, 'On Baptism' (ccel.org/ccel/luther/first_prin/first_prin.v.iii.iii.html)"],
  [],
  {
   facts:[["Author","Martin Luther"],["Work","Babylonian Captivity of the Church"],["Ages Cited","10 or 12 vs. 18"],["Point","Rejects 18-year minimum"]],
   quotes:[{by:"Martin Luther",en:"It seems to me folly that others fix a limit of age for a valid vow, when they cannot even fix one for themselves. And I do not see why a vow made at eighteen years should be valid, yet not if it was made at ten or twelve years. It is not enough to say that at eighteen a person feels the motions of the flesh. What if he scarcely feels them at twenty or thirty, or feels them more strongly at thirty than at twenty? Why then is not a similar age limit fixed for the vows of poverty and obedience? When is a man to recognize that he is covetous or proud, when even the most spiritual men have difficulty discovering these inclinations in themselves?",ref:"The Babylonian Captivity of the Church, Part 3 (On Baptism)"}]
  }),
 sum:"Martin Luther dismissed an eighteen-year age threshold as 'folly', arguing that vows made at ten or twelve are no less valid than those made at eighteen."
});

/* 8. Arabic Canons of Nicaea — Canon IV */
const AN=AV('arabische-nicä-concil','1353003375758934057');
card(P+'arabic-canons-of-nicaea',{
 title:"Arabic Canons of Nicaea (Canon IV): young girls and orphans in clerical households",
 k:"Early church canons",
 blurb:"Though pseudo-Nicene, Canon IV was widely accepted and warns celibate clergy against young girls and orphans.",
 claim:"Early Eastern church canons never had to guard against clerical desire toward young girls.",
 tree:N(AN,
  "Early church disciplinary canons only regulated clergy living with adult women, never young girls.",
  "Although not part of the original twenty canons of Nicaea I, the Arabic Canons of Nicaea enjoyed wide circulation and acceptance—and Canon IV explicitly forbids celibate bishops, widowed presbyters, priests, and unmarried deacons from living with any woman, specifically naming both 'a young girl' and 'an orphan taken in out of mercy under the pretext of upbringing'.",
  "Arabic Canons of Nicaea, Canon IV",
  [
   "Historical status: Even though the Arabic Canons do not belong to the genuine ecumenical canons of Nicaea I (325), they were already widespread early on and held a degree of authoritative acceptance.",
   "Scope of Canon IV: Bishops, widowed presbyters, celibate priests, and unmarried deacons are barred from cohabiting with, accompanying, being familiar with, or gazing persistently at women.",
   "Explicit inclusion of young girls and orphans: The canon specifies this applies whether the woman is 'beautiful or ugly, a young girl or past the age of puberty, of noble birth or an orphan taken in out of mercy under the pretext of upbringing [Erziehung]'—warning that the devil uses such pretexts to drive clergy into 'the fire of lust'.",
   "Permitted exceptions: Only an elderly/aged woman, sister, mother, aunt, or grandmother—free from all suspicion of scandal—may reside with them."
  ],
  ["Arabic Canons of Nicaea, Canon IV"],
  [],
  {
   facts:[["Text","Arabic Canons of Nicaea, Canon IV"],["Status","Pseudo-Nicene, widely accepted"],["Target","Celibate clergy & young girls/orphans"],["Motive Cited","'Fire of lust'"]],
   quotes:[{by:"Arabic Canons of Nicaea, Canon IV",en:"We decree that bishops shall not live together with women, nor a presbyter who is a widower... This applies regardless of whether the woman is beautiful or ugly, a young girl or past the age of puberty, of noble birth or an orphan taken in out of mercy under the pretext of upbringing. For the devil kills religious, bishops, presbyters, and deacons with such weapons and drives them to the fire of lust. However, if it is an old woman who is aged, or a sister, mother, aunt, or grandmother, it is permitted to live with these, since such persons are free from every suspicion of scandal.",ref:"Canon IV"}]
  }),
 sum:"Widely circulated Eastern church legislation (Arabic Canons of Nicaea, Canon IV) explicitly barred celibate clergy from keeping young girls or female orphans under the pretext of upbringing lest it spark lust."
});

/* 9. Petrus Dens — Theologia Moralis et Dogmatica */
const PD=AV('petrus-dens-katholisch','1353017779179094016');
card(P+'petrus-dens-moral-theology',{
 title:"Petrus Dens's Catholic seminary manual: underage marriage valid if strength supplies age",
 k:"Catholic manuals",
 blurb:"Standard 18th–19th c. seminary textbook lists nonage as an impediment—'unless strength supplies the lacking age'.",
 claim:"Modern-era Catholic seminary textbooks taught an absolute prohibition on underage marriage with no exceptions.",
 tree:N(PD,
  "By the 18th and 19th centuries, standard Catholic seminary theology treated underage marriage as unconditionally void.",
  "Petrus Dens—who directed the Archiepiscopal College in Mechelen for forty years and authored Theologia Moralis et Dogmatica, a standard textbook across 18th- and 19th-century Catholic seminaries—teaches in De Matrimonio that underage status voids marriage 'unless perhaps her strength supplies for the lacking age'.",
  "Petrus Dens, Theologia Moralis et Dogmatica (De Matrimonio, No. 70)",
  [
   "Who Petrus Dens was: President of the Archiepiscopal Seminary/College in Mechelen, Belgium, for forty years; his Theologia Moralis et Dogmatica served as a standard manual for training Catholic priests across seminaries and theological faculties in the 18th and 19th centuries.",
   "The 16 diriment impediments: In De Matrimonio, No. 70 (Dublin 1832, Vol. VII, p. 194), Dens summarizes the sixteen invalidating impediments in verse: error, condition, vow, consanguinity, crime, disparity of cult, force, sacred orders, prior marriage bond, public honesty, madness, affinity, clandestinity, impotence, unreturned abduction, and nonage.",
   "The underage exception: For the sixteenth impediment, Dens writes: 'If she is under age, unless perhaps her strength supplies for the lacking age'—meaning physical capacity overrides chronological immaturity.",
   "Reference & scan: Also referenced in Charles Hodge's Systematic Theology Vol. III (ccel.org/ccel/hodge/theology3/theology3.iii.v.xi.html); 1 image attached in channel (IMG_5981.png — to capture)."
  ],
  ["Petrus Dens, Theologia Moralis et Dogmatica, De Matrimonio, No. 70, Vol. VII, p. 194 (Dublin, 1832)","Charles Hodge, Systematic Theology, Vol. III (CCEL link)","IMG_5981.png (scan to capture)"],
  [],
  {
   facts:[["Author","Petrus Dens (Mechelen, 40 yrs)"],["Work","Theologia Moralis et Dogmatica (1832)"],["Citation","De Matrimonio, No. 70, VII:194"],["Exception","Strength supplies lacking age"]],
   quotes:[{by:"Petrus Dens",en:"These sixteen marriage impediments are expressed in the following verses: Error, condition, vow, consanguinity, crime, difference in faith, force, orders, bond, honesty, madness, affinity, clandestinity, and impotence; if a woman has been abducted and not restored to a safe place; if she is under age, unless perhaps her strength supplies for the lacking age. These forbid a marital union and render contracted marriages invalid.",ref:"Theologia Moralis et Dogmatica, De Matrimonio, No. 70, Vol. VII, p. 194"}]
  }),
 sum:"Standard 18th–19th-century Catholic seminary manual Theologia Moralis et Dogmatica by Petrus Dens explicitly exempts underage marriage whenever physical capacity ('strength') supplies for lacking age."
});

/* 10. Katholische Buch — Catholic Encyclopedia, Schaff-Herzog, Civil Codes, Milaš, & Compilatio Prima */
const KB=AV('katholische-buch','1360668846054441092');
card(P+'canonical-age-codes-and-schaff',{
 title:"Canonical Age (14/12), civil codes, Orthodox law (Milaš), and Compilatio Prima",
 k:"Canon & civil law",
 blurb:"Catholic Encyclopedia (7 betrothal, 14/12 marriage + puberty exception), Schaff-Herzog, civil laws, and Milaš.",
 claim:"Christian church and Christian-majority legal systems long ago abolished 12/14 marriage and puberty exceptions.",
 tree:N(KB,
  "Modern Christian reference works and Christian-majority states uniformly rejected 12/14 canonical marriage ages.",
  "The Catholic Encyclopedia ('Canonical Age'), Philip Schaff's Schaff-Herzog Encyclopedia (Vol. 1, p. 242), Orthodox canonist Nikodim Milaš, and medieval decretal law all document that Catholic and Orthodox canon law—as well as numerous Christian nations and US/Canadian jurisdictions—maintained 14 for males and 12 for females (with natural puberty or post-age cohabitation validating even earlier unions).",
  "Catholic Encyclopedia ('Canonical Age') & Schaff-Herzog",
  [
   "Catholic Encyclopedia rule: Betrothal (sponsalia) requires 7 completed years. Marriage requires 14 years for males and 12 for females under pain of nullity—unless natural puberty supplies for the lacking age.",
   "Public honesty from invalid underage marriage: Marriages invalid due to lack of legal or natural puberty count as betrothals and generate the diriment impediment of public honesty (c. 14, De desponsatione impuberum, X 4.2.14).",
   "Schaff-Herzog Encyclopedia & scans: Philip Schaff (19th-century church historian), Schaff-Herzog Encyclopedia of Religious Knowledge, Vol. 1, p. 242 (encyc01.pdf), plus 2 scans in channel (image.png, Screenshot_2025-04-12_191009.png — to capture)."
  ],
  ["Catholic Encyclopedia, 'Canonical Age' (catholic.com/encyclopedia/canonical-age)","Decretals of Gregory IX, X 4.2.14","Philip Schaff, Schaff-Herzog Encyclopedia of Religious Knowledge, Vol. 1, p. 242"],
  [
   N(KB,
    "Didn't modern civil codes in Christian countries raise the age far above 12 and 14?",
    "Civil codes often required higher ages than canon law, yet Catholic and Common Law jurisdictions—including Austria, Spain, Portugal, England, Greece, Canada, and parts of the US—retained 14/12 (or 14/14, 15/13), and in many places underage or unconsented marriages remained valid.",
    "Civil vs. canonical ages across Europe, North America, and Asia",
    [
     "Catholic canonical minimum preserved: England, Spain, Portugal, and Greece (except Ionian Islands: 16/14) kept the 14/12 canonical minimum; Austria set 14 for both (and canonical age applied to Catholics).",
     "European variations: France, Italy, Belgium, Romania: 18/15 (with dispensations explicitly foreseen; France also void without parental consent). Holland, Switzerland, Russia (except Caucasus): 15/13. Hungary: 18/16. Denmark: 20/16. Germany: 21/16 (marriages under that age valid though illicit).",
     "Non-Western note in Catholic Encyclopedia: In India natives marry under canonical age; in China age differs due to the 13-month lunar year rather than the solar year.",
     "United States & English Common Law: Parts of the US kept canonical 14/12; states with higher minimums did not automatically invalidate underage marriages unless expressly voided by statute. English Common Law (14 for boys, 12 for girls) applied in nearly all Canadian provinces (except Ontario 14, Manitoba 16)—and marriages below those ages were not permanently void, becoming valid through continued cohabitation upon reaching minimum age.",
     "Parental consent rules: Required in Canadian provinces below 18 (Ontario, Manitoba, New Brunswick) or 21 (Quebec, Nova Scotia, BC, PEI, Alberta, Saskatchewan), affecting validity only in Quebec (voidable by parents alone) and PEI (void under 1831 Act). In most US states (American and English Encyclopedia of Law, 'Marriage', 1191) and England (Brown, History of Matrimonial Institutions, Vol. II, p. 191), lacking parental consent is administrative and does not invalidate the marriage."
    ],
    ["Catholic Encyclopedia, 'Canonical Age'","American and English Encyclopedia of Law, 'Marriage', 1191","Brown, History of Matrimonial Institutions, Vol. II, p. 191"],
    []),
   N(KB,
    "What about Eastern Orthodox canon law and earlier papal decretals?",
    "Orthodox canonist Nikodim Milaš confirms the Church adopted Roman law's 14/12 across 11th-, 13th-, and 17th-century synods as a removable impediment, while medieval papal decretal law (Compilatio Prima IV.2.3) treated bodily capability for generation—not chronological age—as decisive.",
    "Nikodim Milaš (Orthodox) & Compilatio Prima IV.2.3",
    [
     "Nikodim Milaš (1845–1915), Orthodox Church Law: Roman law fixed 14 (boys) and 12 (girls), adopted by the Church and enacted by synodal decrees of the 11th, 13th, and 17th centuries. Marriage before that age is illicit, yet once the spouses reach the prescribed age and choose to remain in the union, the impediment of immaturity ceases automatically and the marriage is recognized as legally valid (provided other conditions are met)—making immature age a removable impediment (if consummated early, remaining at 12 legitimizes it).",
     "Compilatio Prima, Book IV, Title 2 (De desponsatione impuberum), Ch. 3 (also codified in Gregory IX's Liber Extra X 4.2.3; attributed in the channel note to 'Pope Gregory VII'): 'It is established that one is regarded as sexually mature whose bodily development is such that they are already capable of procreation, even if they have not yet reached the age limits fixed by the laws.'"
    ],
    ["Nikodim Milaš, Orthodox Church Law","Compilatio Prima, Liber IV, Titulus II, ch. 3 (cf. X 4.2.3)"],
    [],
    {
     facts:[["Orthodox Canonist","Nikodim Milaš (1845–1915)"],["Synods","11th, 13th, 17th c."],["Decretal","Compilatio Prima IV.2.3"],["Rule","Bodily capacity > legal age"]],
     quotes:[{by:"Compilatio Prima IV.2.3",en:"It is established that he [or she] is regarded as sexually mature whose bodily development is such that they are already capable of procreation, even if they have not yet reached the age limits established by the laws.",ref:"Liber IV, Titulus II: De desponsatione impuberum, ch. 3"}]
    })
  ],
  {
   facts:[["Betrothal","7 years (sponsalia)"],["Marriage","14 (boys) / 12 (girls)"],["Exception","Natural puberty supplies age"],["Scans","2 images to capture"]],
   visual:{kind:'compare',
    left:{title:"Canon & Common Law",items:["Betrothal at 7; marriage at 14 (M) / 12 (F)","Natural puberty overrides 14/12 (X 4.2.14; Comp. I IV.2.3)","England, Spain, Portugal, Greece, parts of US & Canada kept 14/12"]},
    right:{title:"Higher Civil Thresholds",items:["France, Italy, Belgium, Romania: 18 / 15","Holland, Switzerland, Russia: 15 / 13; Hungary: 18 / 16","Germany 21 / 16 (under-age valid though illicit); Denmark: 20 / 16"]}}
  }),
 sum:"Catholic, Orthodox, and Common Law traditions codified 14/12 (and betrothal at 7), allowed natural puberty to override age limits, and retained 14/12 across multiple modern Christian nations."
});

/* 11. Anna the Prophetess (Luke 2:36–37) */
const HN=AV('hanna','1362129551802499294');
card(P+'anna-the-prophetess-luke-2',{
 title:"Anna the prophetess (Luke 2:36–37): Protestant & Catholic exegetes assume marriage at 12 or 15",
 k:"Biblical exegesis",
 blurb:"Jamieson-Fausset-Brown assumes earliest marriage at 12 (reaching 103); Cornelius a Lapide gives 15.",
 claim:"Biblical commentators never assumed Israelite women in the New Testament married as young as 12–15.",
 tree:N(HN,
  "Bible commentators treat New Testament figures like Anna the prophetess as having married in full adulthood.",
  "Both Protestant and Catholic biblical commentators calculate Anna the prophetess's age in Luke 2:36–37 from early teen marriage: the Jamieson-Fausset-Brown Commentary takes 12 as the earliest marriageable age (yielding 103 years), while Cornelius a Lapide places her marriage at 15.",
  "Luke 2:36–37 in Protestant & Catholic commentary",
  [
   "Jamieson-Fausset-Brown Commentary (Protestant scholars, Commentary Critical and Explanatory on the Whole Bible, ch. 2): Notes that Anna lived 7 years with her husband (Luke 2:36) and was a widow 84 years (Luke 2:37)—concluding that if she married at the earliest marriageable age of twelve, she could not have been less than 103 years old (12 + 7 + 84 = 103).",
   "Cornelius a Lapide (16th–17th c. Catholic exegete drawing on Church Fathers, Vol. 4 on Luke, p. 125): States that Anna was 15 years old at her marriage."
  ],
  ["Luke 2:36–37","Jamieson-Fausset-Brown, Commentary Critical and Explanatory on the Whole Bible, Luke 2","Cornelius a Lapide, Commentaria in Evangelium Lucae, Vol. 4, p. 125"],
  [],
  {
   facts:[["Verse","Luke 2:36–37"],["JFB (Protestant)","Earliest marriage at 12 (12+7+84 = 103)"],["Lapide (Catholic)","Married at 15 (Vol. 4, p. 125)"]],
   quotes:[{by:"Jamieson-Fausset-Brown Commentary",en:"A prophetess lived, etc.—She had lived seven years with her husband (Luke 2:36), and had been a widow eighty-four years; so that, if she had married at the earliest marriageable age of twelve, she could not at this time have been less than 103 years old.",ref:"Commentary on Luke 2:36–37"}]
  }),
 sum:"Mainstream Protestant (Jamieson-Fausset-Brown) and Catholic (Cornelius a Lapide) commentators naturally calculate Anna's age in Luke 2 assuming marriage at 12 or 15."
});

/* 12. Cornelius a Lapide on Sirach */
const LP=AV('lapide','1366894534889574400');
card(P+'cornelius-a-lapide-sirach',{
 title:"Cornelius a Lapide on Sirach: civil and canon laws prescribe marriage at age 12",
 k:"Catholic exegesis",
 blurb:"On Sirach (p. 211), Lapide states civil and canon law direct women of marriageable age to marry at 12.",
 claim:"Classic Catholic scriptural commentaries never endorsed 12 as the prescribed age for a girl to marry.",
 tree:N(LP,
  "Catholic biblical commentators treated age 12 merely as a theoretical legal floor, never a prescribed norm.",
  "In his commentary on Sirach (p. 211), the renowned Jesuit exegete Cornelius a Lapide states plainly that both civil and canon laws prescribe that a woman of marriageable age should marry at twelve years.",
  "Cornelius a Lapide on Sirach, p. 211",
  [
   "Primary statement: Commenting on Sirach (Ecclesiasticus), page 211, Cornelius a Lapide cites both civil and canon law as prescribing marriage at age 12 for girls ('Puellae nuptiae').",
   "Scan & archive link: Digitized Bavarian State Library edition (bsb10326637, p. 211) and 1 image attached in channel (IMG_6562.png — to capture)."
  ],
  ["Cornelius a Lapide, Commentary on Sirach, p. 211 (digitale-sammlungen.de/de/view/bsb10326637?page=211&q=Puellae+nuptiae)","IMG_6562.png (scan to capture)"],
  [],
  {
   facts:[["Author","Cornelius a Lapide (SJ)"],["Work","Commentary on Sirach, p. 211"],["Age Prescribed","12 years for girls"],["Scan","1 image to capture"]],
   quotes:[{by:"Cornelius a Lapide",en:"Moreover, civil and canon laws prescribe that a woman of marriageable age should marry at 12 years.",ref:"Commentary on Sirach, p. 211"}]
  }),
 sum:"Cornelius a Lapide's Sirach commentary explicitly affirms that both civil and canon law prescribe marriage for a girl at twelve years of age."
});

/* 13. Pedalion — Balsamon, Justinian, Byzantine/Russian/Georgian councils, & Lorenzo Brancati */
const PDN=AV('pedalion','1367032373853552640');
card(P+'byzantine-and-catholic-canonists',{
 title:"Byzantine & Catholic canonists: Justinian, Balsamon, Brancati, and Orthodox synods",
 k:"Eastern & Western canons",
 blurb:"Justinian (12/14 & concubines ≥ 12), Balsamon, Ecloga/Prochiron/Stoglav, and Brancati on consummation before 12.",
 claim:"Neither Eastern Orthodox saints and synods nor Catholic canonists permitted 12-year-old marriage or early consummation.",
 tree:N(PDN,
  "Eastern Orthodox emperors, saints, and canonists—unlike later medieval Westerners—forbade marriage at 12 and concubinage with young girls.",
  "Byzantine Emperor Justinian I (revered as a saint in Eastern Orthodoxy), canonist Theodore Balsamon, Byzantine imperial codes (Ecloga, Prochiron), the Russian Stoglav Council (1551), and Catholic canonist Lorenzo Brancati all codified 12 for girls (14 or 15 for boys)—with Justinian's Digest allowing concubinage from age 12 and Brancati upholding consummated marriages contracted before 12.",
  "Theodore Balsamon & Emperor Justinian I (6th c.)",
  [
   "Theodore Balsamon (Byzantine canonist, p. 207): Drawing on civil law and Justinian's Institutes (on guardianship and the Atilian tutor under natural law), Balsamon states that puberty begins for boys immediately after completing age 14 and for girls after completing age 12—quoting Justinian's constitution: 'The rule of antiquity well established for girls we leave in its order, so that they become marriageable after completing their 12th year.'",
   "Justinian I (6th-century Byzantine emperor and Eastern Orthodox saint): Permits marriage at 12 for girls and 14 for boys.",
   "Justinian's Digest 25.7.1.4 (De concubinis): 'Any person, of whatever age, may openly keep a concubine, unless she is under twelve years of age.' Elsewhere in the same title, public declaration was only required for taking a freeborn woman of standing as a concubine—poor women could be taken as concubines without public declaration."
  ],
  ["Theodore Balsamon, All Extant Works, p. 207 (bsb10800862?q=puella&page=204,205)","Justinian, Institutes (Atilian tutor)","Justinian, Digest 25.7.1.4 (thelatinlibrary.com/justinian/digest25.shtml)"],
  [
   N(PDN,
    "Did Eastern Orthodox synods and legal codes raise those ages later?",
    "Only marginally—or much later in the 19th century: Byzantine imperial codes and Russian and Georgian Orthodox synods maintained 12 or 13 for girls for over a millennium.",
    "Byzantine imperial codes, Stoglav (1551), & Ruis-Urbnisi (11th c.)",
    [
     "Ecloga (8th c., Emperors Leo the Isaurian & Constantine Copronymus): Fixed marriage age at 15 for men and 13 for women.",
     "Prochiron (9th c., Emperor Basil the Macedonian): Lowered/fixed the limits at 14 for men and 12 for women.",
     "Council of Ruis-Urbnisi (11th c., Georgian Orthodox Church under Catholicos-Patriarch John VI): Permitted betrothals, while forbidding weddings of minors (girls under 12).",
     "Stoglav Council (1551, Russian Orthodox Church): Set marriage norms at 15 for men and 12 for women—and this council remained binding until the 19th century, when the age was raised to 18/16."
    ],
    ["azbyka.ru; pravenc.ru/text/1470249.html","pravenc.ru/text/638558.html (Council of Ruis-Urbnisi)"],
    []),
   N(PDN,
    "What if sexual intercourse took place before a girl turned 12?",
    "Catholic canonist Lorenzo Brancati explicitly rules in Epitome canonum omnium (pp. 308, 505) that if a girl near marriageable age—or betrothed by her father before age 12—was carnally known and her parents confirm she was already marriageable (early puberty before 12), the marriage is valid and cannot be annulled.",
    "Lorenzo Brancati (Epitome canonum omnium, pp. 308 & 505)",
    [
     "Refusal after consummation (p. 308): Where marriage occurs with a girl near marriageable age, intercourse takes place, and she later refuses consent: if her parents confirm she was marriageable at the time and the man swears he knew her, they are believed and the marriage is not annulled (citing Lateran III appendix, title 'On Betrothals', ch. 10, 'Si quis acceperit').",
     "Betrothal & consummation before 12 (p. 505): If a girl was betrothed by her father before her 12th year and already carnally known by the groom, she cannot later be given to another man if the parents confirm she was already marriageable (early puberty prior to age 12) and the man knew her—for then the marriage is valid (ibid., ch. 10)."
    ],
    ["Lorenzo Brancati, Epitome canonum omnium, pp. 308, 505 (bsb10321870?page=322,323&q=puella)","Third Lateran Council Appendix, De sponsalibus, ch. 10 ('Si quis acceperit')"],
    [],
    {
     facts:[["Author","Lorenzo Brancati (Catholic)"],["Pages","pp. 308 & 505"],["Case","Consummation before age 12"],["Verdict","Marriage valid, not annulled"]],
     quotes:[{by:"Lorenzo Brancati",en:"If a betrothed girl was betrothed by her father before her twelfth year and already carnally known by the groom, she cannot later be given to someone else if the parents confirm that she was already marriageable and the man knew her—for then the marriage is valid.",ref:"Epitome canonum omnium, p. 505"}]
    })
  ],
  {
   facts:[["Byzantine","Balsamon & Justinian I (12/14)"],["Concubinage","Digest 25.7.1.4 (≥ 12 yrs)"],["Orthodox Synods","12 or 13 until 19th c."],["Catholic","Brancati (valid < 12 if consummated)"]],
   quotes:[{by:"Emperor Justinian I",en:"Any person, of whatever age, may openly keep a concubine, unless she is under twelve years of age.",ref:"Digest 25.7.1.4 (De concubinis)"}]
  }),
 sum:"Eastern Orthodox saints, synods (Stoglav, Ruis-Urbnisi), Justinian (even for concubinage at 12), Balsamon, and Catholic canonist Brancati all upheld 12-year marriage—and even validated consummation before 12."
});

/* 14. Ambrose of Milan & Ado of Vienne */
const AG=AV('allgemein','1384882562371162213');
card(P+'ambrose-and-ado-of-vienne',{
 title:"Ado of Vienne (Secunda at 12) & Ambrose of Milan (parents choose, girl not consulted)",
 k:"Church Fathers",
 blurb:"12-year-old Secunda receives many marriage proposals; Ambrose says a girl is not consulted at betrothal.",
 claim:"Church Fathers insisted a bride be a mature adult who freely chooses her own spouse.",
 tree:N(AG,
  "Patristic and medieval Christian tradition rejected arranged betrothals without the girl's consultation and treated 12-year-olds as far too young for marriage offers.",
  "Archbishop Ado of Vienne's Martyrology casually notes that twelve-year-old Secunda had already received many marriage proposals, while Church Father Ambrose of Milan writes in On Abraham that a girl is not consulted at her betrothal because maidenly modesty demands leaving the choice of husband to her parents.",
  "Martyrology of Ado of Vienne & Ambrose, On Abraham I.9.91",
  [
   "Ado of Vienne (Archbishop, ca. 800–875): His Martyrology describes a young girl named Secunda, twelve years old, staying in the upper rooms of her house—'Although many marriage proposals were made to her, she rejected them all and loved only God' before joining fellow martyrs Maxima and Donatilla.",
   "Ambrose of Milan, On Abraham (ca. 387/397), Book I, Ch. IX, §91: States directly that 'the girl is not consulted at a betrothal, for she awaits the judgment of her parents'; choosing a husband oneself does not belong to virginal modesty. Only after she is already betrothed is she asked about the day of travel.",
   "Euripides cited as ideal: Ambrose praises Euripides's line ('The care of my marriage matters my father will take over, for it is not mine to judge of these') and urges virgins—and even young widows fearing weakness—to leave the choice of a husband to their parents so as not to seem impetuous in desire."
  ],
  ["Martyrology of Ado of Vienne (Secunda, Maxima, Donatilla)","Ambrose of Milan, On Abraham (De Abraham), Book I, Ch. IX, §91","Screenshot_2025-06-18_150642.png (scan to capture)"],
  [],
  {
   facts:[["Martyrology","Ado of Vienne (Secunda, age 12)"],["Church Father","Ambrose of Milan (On Abraham I.9.91)"],["Rule","Girl not consulted at betrothal"],["Scan","1 screenshot to capture"]],
   quotes:[
    {by:"Martyrology of Ado of Vienne",en:"There was a young girl who stayed in the upper rooms of her house, twelve years old, named Secunda. Although many marriage proposals were made to her, she rejected them all and loved only God. Filled with God's Spirit, she went to her fellow martyrs Maxima and Donatilla as they passed by.",ref:"Martyrology"},
    {by:"Ambrose of Milan",en:"The girl is not consulted at a betrothal, for she awaits the judgment of her parents. For it does not belong to virginal modesty to choose a husband for oneself. Yet after she has already been betrothed to a man, she is consulted regarding the day of travel... 'The care of my marriage matters my father will take over, for it is not mine to judge of these.'... It should rather appear that she is desired by the man than that she herself desires the man.",ref:"On Abraham, Book I, Ch. IX, §91"}
   ]
  }),
 sum:"Ado of Vienne records twelve-year-olds receiving numerous marriage proposals as routine, while Ambrose of Milan teaches that a girl is not consulted at betrothal and must leave spouse selection to her parents."
});

/* 15. Greek pais / paidion in Luke 8, Mark 5, Matt 9 vs. Deut 22:28–29 */
const GP=AV('12-jährige-wird-kind-mädchen-genannt','1401836599691579503');
card(P+'greek-pais-luke-8-deut-22',{
 title:"Biblical Greek: 12-year-old called 'child' (paidion / pais) in Luke 8:54 & Deut 22:28–29",
 k:"Biblical Greek",
 blurb:"The 12-year-old girl in Mark/Matt/Luke is called paidion/pais—the exact word (paida) used in Deut 22:28–29.",
 claim:"When the Bible uses 'child' (pais / paidion), it excludes marriageable 12-year-olds, and Deuteronomy 22 concerns adult women.",
 tree:N(GP,
  "In biblical Greek, calling someone 'child' (pais/paidion) refers strictly to pre-marriageable young children, whereas Deuteronomy 22:28–29 deals with adult women.",
  "In the Nestle-Aland Greek New Testament, Jairus's twelve-year-old daughter is called both 'little girl' (korasion) and 'child' (paidion in Mark and Matthew; pais in Luke 8:54)—and the Septuagint of Deuteronomy 22:28–29 uses the exact same Greek word (paida, accusative of pais) for an unbetrothed virgin in its marriage law.",
  "Paidion / Pais in the Gospels and LXX Deuteronomy 22:28–29",
  [
   "Mark & Matthew on the 12-year-old: Although Mark 5:41 and Matthew 9:25 say 'little girl, arise', earlier in both narratives (Nestle-Aland) the twelve-year-old is explicitly called 'child' (paidion).",
   "Luke 8:54 ('Child, arise!'): Luke uses the Greek noun pais (nominative, 'child') directly when Jesus addresses the twelve-year-old girl (biblehub.com/interlinear/luke/8-54.htm).",
   "Deuteronomy 22:28–29 (Septuagint): In the biblical law mandating marriage after seizing an unbetrothed virgin, the Greek Septuagint uses paida—the accusative singular of the very same noun pais used in Luke 8:54.",
   "Linguistic conclusion & scans: Both terms prove that biblical Greek calls a twelve-year-old 'child' (pais/paidion) and uses the same word (paida) in Deuteronomy 22:28–29's marriage legislation. 4 scans attached in channel (IMG_7872.png, IMG_5713.png, IMG_7874.png, IMG_5714.png — to capture)."
  ],
  ["Luke 8:54 (biblehub.com/interlinear/luke/8-54.htm)","Mark 5; Matthew 9 (Nestle-Aland)","LXX Deuteronomy 22:28–29","IMG_7872.png, IMG_5713.png, IMG_7874.png, IMG_5714.png (scans to capture)"],
  [],
  {
   facts:[["Gospels","Mark 5, Matt 9 (paidion); Luke 8:54 (pais)"],["Old Testament","LXX Deut 22:28–29 (paida)"],["Age","12-year-old girl"],["Scans","4 images to capture"]],
   visual:{kind:'compare',
    left:{title:"12-Year-Old in the Gospels",items:["Mark & Matthew (Nestle-Aland): called paidion ('child')","Luke 8:54: 'Child [pais], arise!'","Proves 12-year-olds are called pais/paidion"]},
    right:{title:"LXX Deuteronomy 22:28–29",items:["Uses paida (accusative of pais)","Describes an unbetrothed virgin in marriage law","Same Greek lemma as Luke 8:54"]}}
  }),
 sum:"The Septuagint's marriage law in Deuteronomy 22:28–29 uses the exact same Greek word (paida, from pais) that Luke 8:54 applies to a twelve-year-old child."
});

})();
