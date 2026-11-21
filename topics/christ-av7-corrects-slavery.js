/* Christianity AV batch 7 — 2026-11-21.
   1) Averroes “islam korrigiert christentum” (13 channels: 12 text-bearing cards under christianity/islam-vs/corrects/<slug>).
      Image-only channel omitted from cards: #mond-eigenes-licht (1275987264417038399 — 2 Instagram screenshot images, no text).
   2) Averroes “Sklaven christentum” (12 channels: all 12 cards under christianity/practice/slavery/<slug>). */
(()=>{
const AV=(n,link)=>({credit:'Averroes · #'+n+' (translated from German)',link});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

topic(['christianity','islam-vs','corrects'],{title:"Where the Qurʾān corrects the Bible",k:"Corrections",blurb:"History, prophets and theology where the Qurʾān clears biblical errors."});
topic(['christianity','practice','slavery'],{title:"Slavery in Christianity",k:"Tu quoque",blurb:"Biblical commands, Church Fathers and Christian slave law."});

const C='christianity/islam-vs/corrects/';
const S='christianity/practice/slavery/';

/* ============================================================================
   PART I — WHERE THE QURʾĀN CORRECTS THE BIBLE (12 text-bearing channels)
   ============================================================================ */

/* 1. #moses-äypten */
card(C+'exodus-group-size',{
 title:"The size of the Israelite Exodus",
 k:"History",
 blurb:"The Bible claims ~2–3 million people wandered 40 years in Sinai; the Qurʾān describes a small band.",
 claim:"The Qurʾān merely copied the Exodus story from the Bible — so its numbers should share the Bible's historical problems.",
 tree:N(AV('moses-äypten','https://discord.com/channels/1275832106949283962/1275986243792146463'),
  "Exodus 12:37 says about 600,000 men on foot left Egypt besides women and children — roughly two to three million people — and the Qurʾān just retells the same Bible story.",
  "The Qurʾān deliberately corrects that impossible figure: in Sūrat al-Shuʿarāʾ (26:54–56), Pharaoh and his advisors describe the departing Israelites as a “small band” (shirḏimatun qalīlūn) posing no military threat — matching what modern historians and archaeologists say is actually plausible.",
  "A “small band” vs. millions in the Sinai",
  ["Biblical scale (Exodus 12:37; 1:7): Exodus 12:37 speaks of around 600,000 men on foot, apart from women and children. Coupled with Exodus 1:7, commentators calculate a total population of roughly two million — or several million — leaving Egypt.",
   "Historical impossibility: It is inconceivable that 2–3 million men, women, children, and livestock wandered together in one vast group through the desert for 40 years with zero archaeological remains and zero external eyewitness records.",
   "Qurʾānic correction (26:54–56): Pharaoh addresses his forces saying, “Indeed, these are a small band (shirḏimatun qalīlūn)” — correcting the biblical exaggeration to a historically realistic group size that modern scholarship insists the Exodus group must have had."],
  ["Qurʾān 26:54–56","Exodus 1:7; 12:37"],
  [],
  {facts:[["Bible figure","~600,000 men (~2–3M total)"],["Qurʾān description","“A small band” (26:54)"],["Archaeology","No trace of millions in Sinai"],["Verdict","Qurʾān avoids biblical hyperbole"]],
   quotes:[{by:"Qurʾān 26:54",en:"Indeed, these are but a small band.",ref:"Sūrat al-Shuʿarāʾ 26:54"}],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Exodus 12:37: ~600,000 men on foot, plus women & children","Implies ~2–3 million people + livestock (cf. Exod 1:7)","40 years of desert wandering without archaeological trace or eyewitnesses"]},
    right:{title:"The Qurʾān",items:["Sūra 26:54–56: Pharaoh calls them “a small band”","No threat to Egypt's army in sheer numbers","Aligns with modern historians' conclusion that any Exodus group had to be small"]}}}),
 sum:"Instead of repeating Exodus 12:37's impossible 2–3 million figure, Qurʾān 26:54–56 calls the Israelites a “small band,” matching historical plausibility."});

/* 2. #wissenschaftlichefehlerausbibel-die-koran-korregiert */
card(C+'expanding-universe',{
 title:"Fixed heavens vs. an expanding universe",
 k:"Cosmology",
 blurb:"Psalm 148:4–6 presents the heavens as fixed forever; Qurʾān 51:47 explicitly states Allah expands the cosmos.",
 claim:"The Bible and Qurʾān share the same ancient Near Eastern cosmology of a static sky.",
 tree:N(AV('wissenschaftlichefehlerausbibel-die-koran-korregiert','https://discord.com/channels/1275832106949283962/1275986598688985194'),
  "The Bible's view of creation and the heavens is just as compatible with modern cosmology as the Qurʾān's.",
  "Psalm 148:4–6 portrays the heavens and waters above as established permanently under an unbreakable decree — a static cosmos that stays as created. Qurʾān 51:47, by contrast, explicitly affirms ongoing cosmic expansion (“And the heaven We built with strength, and indeed, We are [its] expander”), which modern astronomy confirms every second.",
  "Static decree vs. cosmic expansion",
  ["Biblical text (Psalm 148:4–6): “Praise Him, you heavens of heavens, and you waters above the heavens! … For He commanded and they were created, and He established them forever and ever; He gave a decree that shall not be transgressed.” This describes a fixed heavens-and-waters structure remaining unchanged as first made.",
   "Qurʾānic correction (51:47): “We built the universe with great power, and surely We are expanding it (wa-innā la-mūsiʿūn).”",
   "Scientific confirmation: Modern astrophysics establishes that the universe expands continuously every second (e.g., WIS Potsdam; Wissenschaft.de, “Das Universum dehnt sich aus, die Menschen aber nicht”; National Geographic Deutschland 2019, “Ausdehnung des Universums schneller als die Physik erlaubt”)."],
  ["Psalm 148:4–6","Qurʾān 51:47","https://www.wis-potsdam.de/de/fragen-fragen/schnell-vergroessert-sich-universum-marla-13-jahre","https://www.wissenschaft.de/astronomie-physik/das-universum-dehnt-sich-aus-die-menschen-aber-nicht/","https://www.nationalgeographic.de/wissenschaft/2019/04/ausdehnung-des-universums-schneller-als-die-physik-erlaubt"],
  [],
  {facts:[["Bible verse","Psalm 148:4–6 (static heavens)"],["Qurʾān verse","Sūra 51:47 (expanding cosmos)"],["Physics","Continuous cosmic expansion"],["Sources","WIS Potsdam · Wissenschaft.de · NatGeo DE"]],
   quotes:[
    {by:"Psalms (Bible)",en:"Praise Him, you heavens of heavens, and you waters above the heavens! … He established them forever and ever; He gave a decree that shall not be transgressed.",ref:"Psalm 148:4–6"},
    {by:"Qurʾān",en:"We built the universe with great power, and We are certainly expanding it.",ref:"Sūrat al-Dhāriyāt 51:47"}],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Psalm 148:4–6: “waters above the heavens”","Heavens established forever under an unchanging decree","Portrays a static cosmos that does not grow"]},
    right:{title:"The Qurʾān",items:["Sūra 51:47: “We are expanding it” (wa-innā la-mūsiʿūn)","Affirms ongoing expansion of the cosmos","Confirmed by modern observational astrophysics"]}}}),
 sum:"Where Psalm 148:4–6 depicts fixed heavens and upper waters under an unchanging decree, Qurʾān 51:47 states that Allah expands the universe."});

/* 3. #mose-und-der-tote */
card(C+'moses-and-the-egyptian',{
 title:"Moses and the slain Egyptian",
 k:"Prophets",
 blurb:"Exodus portrays premeditated murder and secrecy; the Qurʾān records an unintentional blow, witness, and immediate repentance.",
 claim:"The Qurʾān tells a garbled version of Moses killing the Egyptian from Exodus 2.",
 tree:N(AV('mose-und-der-tote','https://discord.com/channels/1275832106949283962/1287355600845541467'),
  "Exodus 2:11–15 gives the original account of Moses killing the Egyptian; the Qurʾān simply borrowed and altered it.",
  "Exodus 2:11–15 leaves a plot hole and tarnishes Moses' character: Moses looks around to make sure no one is watching, deliberately kills the Egyptian, hides the body in the sand without a word of remorse — yet somehow others still find out despite no witness being present — and flees to Midian out of fear. Sūrat al-Qaṣaṣ (28:15–21) resolves both the narrative gap and the moral flaw.",
  "Premeditated murder vs. accidental blow & repentance",
  ["Premeditation vs. accident: In Exodus 2:12, Moses looks both ways, sees no one, strikes the Egyptian dead, and buries him in the sand. In Qurʾān 28:15, Moses steps into a fight between one of his own party and an Egyptian; attempting to intervene, his blow unintentionally causes the Egyptian's death.",
   "The missing witness solved: In Exodus, nobody is around when Moses kills the Egyptian, yet the deed somehow becomes public anyway (2:13–14). In the Qurʾān, Moses' own quarrelsome Israelite companion witnesses the blow and exposes it the next day when Moses rebukes him (28:18–19).",
   "Remorse and forgiveness: Exodus shows no sign of repentance from Moses. In Qurʾān 28:15–16, Moses immediately recognises his fault (“This is from the work of Satan; indeed, he is a manifest, misleading enemy”), begs Allah's forgiveness, and is forgiven.",
   "Vow of reform & divinely guided departure: Moses vows never again to aid wrongdoers/criminals — having realised his own fellow Israelite was quarrelsome and in the wrong (28:17–19). When the notables plot to kill him, a believer warns him and he leaves the city seeking divine guidance (28:20–22), rather than merely fleeing justice."],
  ["Exodus 2:11–15","Qurʾān 28:15–22"],
  [],
  {facts:[["Bible text","Exodus 2:11–15"],["Qurʾān text","Sūrat al-Qaṣaṣ 28:15–21"],["Narrative fix","Israelite companion explains witness"],["Moral fix","Unintentional + immediate tawbah"]],
   quotes:[{by:"Moses in the Qurʾān",en:"This is from the work of Satan; indeed, he is a manifest, misleading enemy.",ref:"Sūrat al-Qaṣaṣ 28:15"}],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Looks around to ensure nobody sees, kills deliberately, hides body in sand (Exod 2:12)","Others still find out even though no witness was present","No remorse or prayer for forgiveness recorded","Flees to Midian to escape Pharaoh's retribution (Exod 2:15)"]},
    right:{title:"The Qurʾān",items:["Intervenes in a fight; fatal blow is unintentional (28:15)","His own quarrelsome Israelite companion witnessed it and exposes him (28:18–19)","Immediately repents, is forgiven, and vows not to aid wrongdoers (28:15–17)","Departs upon being warned, turning to Allah for guidance (28:20–22)"]}}}),
 sum:"Qurʾān 28:15–21 clears Moses of premeditated murder, supplies the missing witness Exodus lacked, and records immediate repentance and reform."});

/* 4. #adam-und-eva */
card(C+'adam-and-eve',{
 title:"Adam and Eve: shared responsibility",
 k:"Prophets",
 blurb:"Genesis places the blame on Eve being deceived; the Qurʾān holds both equally accountable and records their joint repentance.",
 claim:"Both scriptures blame Eve for the fall of mankind.",
 tree:N(AV('adam-und-eva','https://discord.com/channels/1275832106949283962/1287358853385814078'),
  "The Qurʾān repeats the Genesis story of the forbidden fruit, which assigns primary blame to Eve.",
  "In Genesis 3:6, Eve is deceived by the serpent first and hands the fruit to Adam — a framing that historically placed disproportionate blame on Eve and on women. In Qurʾān 7:19–23, Satan whispers to both of them together, both are held jointly responsible, and both repent together.",
  "Joint accountability, not Eve's sole guilt",
  ["Biblical framing (Genesis 3:6): Eve is seduced by the serpent and gives the fruit to Adam, which led Christian tradition to assign heavier guilt to Eve (cf. 1 Timothy 2:14).",
   "Qurʾānic correction (7:19–23): Both Adam and Eve are addressed together, tempted together, share responsibility equally, and pray together: “Our Lord, we have wronged ourselves…” (7:23).",
   "Moral balance: The Qurʾān upholds equal moral agency for man and woman and refuses to scapegoat Eve."],
  ["Genesis 3:6","Qurʾān 7:19–23"],
  [],
  {facts:[["Bible text","Genesis 3:6"],["Qurʾān text","Sūrat al-Aʿrāf 7:19–23"],["Theology","Shared accountability & joint tawbah"],["Gender impact","No scapegoating of Eve"]],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Genesis 3:6: Eve is deceived by the serpent first and gives the fruit to Adam","Historically used to assign primary blame to Eve"]},
    right:{title:"The Qurʾān",items:["Sūra 7:19–23: Both Adam and Eve are tempted and held jointly accountable","Both repent together and seek Allah's mercy equally"]}}}),
 sum:"Unlike Genesis 3:6's framing that led to blaming Eve, Qurʾān 7:19–23 holds Adam and Eve jointly responsible and records their shared repentance."});

/* 5. #jesus-geburt */
card(C+'birth-of-jesus',{
 title:"The birth of Jesus and Mary's vindication",
 k:"Jesus",
 blurb:"Luke depicts a stable birth; the Qurʾān records Mary's solitary birth under a palm tree and the infant Jesus speaking to clear her honour.",
 claim:"The Qurʾān's infancy narrative is an unhistorical embellishment of Luke's Gospel.",
 tree:N(AV('jesus-geburt','https://discord.com/channels/1275832106949283962/1287359140573872180'),
  "Luke 2:7 gives the simple historical account of Jesus born in a manger with shepherds and later wise men; the Qurʾān's palm tree and talking infant are later legends.",
  "In Sūrat Maryam (19:22–26, 29–33), Mary gives birth to Jesus alone under a palm tree, sustained by a stream and fresh dates, and the newborn Jesus speaks miraculously from the cradle to defend his mother's chastity before her community — directly underscoring both the miracle of the virgin birth and the preservation of Mary's honour.",
  "Miracle and vindication of Mary's purity",
  ["Biblical account (Luke 2:7): Jesus is born in a manger/stable, visited by shepherds and (in Matthew) later by Magi, without a public miracle defending Mary from accusations of unchastity.",
   "Qurʾānic account (19:22–26): Mary withdraws alone and gives birth under a palm tree, comforted by Allah; when her people accuse her of immorality, the newborn Jesus speaks to declare himself Allah's servant and prophet and vindicate his mother's innocence.",
   "Theological correction: The Qurʾān highlights the miraculous nature of Jesus' birth and protects Mary's honour and purity before her community."],
  ["Luke 2:7","Qurʾān 19:22–26; 19:29–33"],
  [],
  {facts:[["Bible text","Luke 2:7"],["Qurʾān text","Sūrat Maryam 19:22–26"],["Key miracle","Infant Jesus speaks in Mary's defence"],["Focus","Purity and honour of Mary"]],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Luke 2:7: Born in a manger/stable, surrounded by shepherds (and later Magi in Matthew)","No public cradle miracle clearing Mary before her people"]},
    right:{title:"The Qurʾān",items:["Sūra 19:22–26: Mary gives birth alone under a palm tree, provided with water and dates","Newborn Jesus speaks miraculously to defend his mother's innocence and honour"]}}}),
 sum:"Qurʾān 19:22–26 highlights the miracle of Jesus' birth and preserves Mary's purity by having the infant Jesus speak to vindicate her."});

/* 6. #goldene-kalb */
card(C+'golden-calf',{
 title:"Aaron and the Golden Calf",
 k:"Prophets",
 blurb:"Exodus blames Prophet Aaron for crafting the Golden Calf; the Qurʾān clears Aaron and names al-Sāmirī.",
 claim:"The Bible faithfully records that Aaron built the Golden Calf — the Qurʾān just altered the story.",
 tree:N(AV('goldene-kalb','https://discord.com/channels/1275832106949283962/1287359281074802749'),
  "Exodus 32:2–4 explicitly says Aaron took the people's gold, fashioned the molten calf, and led the idolatry.",
  "Making a chosen prophet of God the ring-leader of calf-worship contradicts prophetic integrity. Sūrat Ṭā-Hā (20:85–88, 90) exonerates Prophet Hārūn (Aaron), attributing the crafting of the calf to al-Sāmirī while Aaron actively warned the Israelites against the trial.",
  "Exonerating Prophet Aaron (ʿiṣma)",
  ["Biblical account (Exodus 32:2–4): Aaron collects the Israelites' golden rings at the people's urging and personally casts and fashions the golden calf.",
   "Qurʾānic correction (20:85–88): A man called al-Sāmirī misleads the people and fabricates the calf, while Aaron explicitly warns them beforehand (20:90).",
   "Prophetic integrity: By relieving Aaron of direct guilt for idolatry, the Qurʾān preserves the moral protection and trustworthiness of the prophets (ʿiṣmat al-anbiyāʾ)."],
  ["Exodus 32:2–4","Qurʾān 20:85–90"],
  [],
  {facts:[["Bible text","Exodus 32:2–4"],["Qurʾān text","Sūrat Ṭā-Hā 20:85–88"],["Culprit in Qurʾān","al-Sāmirī (not Aaron)"],["Doctrine","Prophetic integrity (ʿiṣma)"]],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Exodus 32:2–4: Aaron collects the gold and fashions the Golden Calf himself","A prophet of God leads the people into idolatry"]},
    right:{title:"The Qurʾān",items:["Sūra 20:85–88: al-Sāmirī crafts the Golden Calf and misleads the people","Aaron warns the people against it and is cleared of idolatry (20:90)"]}}}),
 sum:"Qurʾān 20:85–88 clears Prophet Aaron of crafting the Golden Calf, attributing the idolatry to al-Sāmirī and upholding prophetic integrity."});

/* 7. #lot-inzest */
card(C+'lot-and-his-daughters',{
 title:"Lot and his daughters",
 k:"Prophets",
 blurb:"Genesis attributes drunkenness and incest to Lot; the Qurʾān rejects such slander and honours him as a righteous prophet.",
 claim:"The Bible is simply honest about prophetic sins, including Lot's incest in Genesis 19.",
 tree:N(AV('lot-inzest','https://discord.com/channels/1275832106949283962/1287362667463311483'),
  "Genesis 19:30–38 tells how Lot's daughters got him drunk and had incestuous relations with him to preserve his lineage.",
  "Attributing repeated drunkenness and incest with his own daughters to the very prophet sent to condemn sexual immorality in Sodom undermines the moral credibility of prophecy itself. The Qurʾān rejects this story completely and honours Lūṭ (21:74–75) with wisdom, knowledge, and righteousness.",
  "Protecting prophetic character",
  ["Biblical account (Genesis 19:30–38): After Sodom and Gomorrah are destroyed, Lot's two daughters get their father intoxicated on consecutive nights and conceive children by him.",
   "Qurʾānic presentation (21:74–75): “And to Lot We gave judgement and knowledge, and We saved him from the city that was committing wicked deeds. Indeed, they were a people of evil, defiantly disobedient. And We admitted him into Our mercy; indeed, he was of the righteous.”",
   "Correction: The Qurʾān guards the moral integrity of Allah's messengers and omits/rejects degrading tales that compromise prophetic character."],
  ["Genesis 19:30–38","Qurʾān 21:74–75"],
  [],
  {facts:[["Bible text","Genesis 19:30–38"],["Qurʾān text","Sūrat al-Anbiyāʾ 21:74–75"],["Bible claim","Drunkenness & incest with daughters"],["Qurʾān stance","Righteous prophet saved from evil"]],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Genesis 19:30–38: Lot gets drunk twice and commits incest with both daughters","Degrades a prophet sent against sexual immorality"]},
    right:{title:"The Qurʾān",items:["Sūra 21:74–75: No incest story; Lot is given wisdom, knowledge, and mercy","Presented consistently as one of the righteous"]}}}),
 sum:"Rejecting Genesis 19:30–38's story of drunkenness and incest, Qurʾān 21:74–75 upholds Lot's moral integrity as a righteous prophet."});

/* 8. #solomo-götzen-dienst */
card(C+'solomon-and-idolatry',{
 title:"Solomon and idolatry",
 k:"Prophets",
 blurb:"1 Kings claims Solomon fell into idolatry despite God giving him a wise heart; Qurʾān 38:30 affirms his lifelong devotion.",
 claim:"Even the wisest king, Solomon, turned away to worship idols in his old age (1 Kings 11).",
 tree:N(AV('solomo-götzen-dienst','https://discord.com/channels/1275832106949283962/1287363057160552522'),
  "1 Kings 11:4–6 states that Solomon's foreign wives turned his heart after other gods.",
  "That claim contradicts the Bible itself — where God granted Solomon an unmatched wise heart and sense of justice such that none like him would ever arise (1 Kings 3:12). The Qurʾān corrects this slur: in Sūra 38:30 (and 2:102), Sulaymān remains an exemplary, penitent servant of Allah who never committed idolatry or magic.",
  "Solomon's faithfulness preserved",
  ["Biblical contradiction (1 Kings 11:4–6 vs. 3:12): 1 Kings 11:4–6 claims Solomon's foreign wives swayed his heart to follow other gods — even though in the Bible itself God gave Solomon a pure/wise heart and unmatched justice and declared no one like him would arise.",
   "Qurʾānic correction (38:30): Allah praises Solomon: “How excellent a servant! Indeed, he was one repeatedly turning back [to Allah].” He never apostatised into polytheism.",
   "Theological consistency: The Qurʾān preserves Solomon's prophetic infallibility (ʿiṣma), wisdom, and unwavering devotion to the One God."],
  ["1 Kings 3:12; 11:4–6","Qurʾān 38:30; 2:102"],
  [],
  {facts:[["Bible text","1 Kings 11:4–6"],["Qurʾān text","Sūrat Ṣād 38:30"],["Internal tension","1 Kgs 3:12 promises unmatched wisdom"],["Verdict","Solomon cleared of idolatry"]],
   quotes:[{by:"Qurʾān 38:30",en:"How excellent a servant! Indeed, he was one repeatedly turning back [to Allah].",ref:"Sūrat Ṣād 38:30"}],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["1 Kings 11:4–6: Led astray by foreign wives to worship other gods","Clashes with God granting him unmatched wisdom and a righteous heart (1 Kgs 3:12)"]},
    right:{title:"The Qurʾān",items:["Sūra 38:30: Praised as an “excellent servant” always turning to Allah","Preserves Solomon's prophetic integrity and monotheistic devotion"]}}}),
 sum:"Qurʾān 38:30 rejects 1 Kings 11:4–6's claim of Solomon's idolatry, affirming his wisdom and lifelong devotion to Allah."});

/* 9. #7-tag-ruhe-tag */
card(C+'seventh-day-rest',{
 title:"Did God “rest” on the seventh day?",
 k:"Theology",
 blurb:"Genesis 2:2–3 attributes rest after work to God; Qurʾān 50:38 explicitly denies any weariness touched Him.",
 claim:"The Qurʾān copies the Genesis creation account, including the seventh-day rest.",
 tree:N(AV('7-tag-ruhe-tag','https://discord.com/channels/1275832106949283962/1287365290769907734'),
  "Genesis 2:2–3 says God finished His work and rested on the seventh day from all that He had made.",
  "An omnipotent Creator does not grow tired or need recovery. Sūrat Qāf (50:38) directly corrects this anthropomorphic idea: Allah created the heavens and earth in six days, “and no weariness touched Us.”",
  "Creation without fatigue",
  ["Biblical text (Genesis 2:2–3): “And on the seventh day God finished His work that He had done, and He rested on the seventh day from all His work that He had done” (note: Exodus 31:17 even adds He was “refreshed”).",
   "Qurʾānic correction (50:38): “And We did certainly create the heavens and the earth and what is between them in six days, and there touched Us no weariness (wa-mā massanā min lughūb).”",
   "Theological precision: The Qurʾān purifies the concept of God from human-like fatigue or need for rest."],
  ["Genesis 2:2–3","Qurʾān 50:38"],
  [],
  {facts:[["Bible text","Genesis 2:2–3"],["Qurʾān text","Sūrat Qāf 50:38"],["Issue","Anthropomorphic fatigue"],["Correction","“No weariness touched Us”"]],
   quotes:[
    {by:"Genesis (Bible)",en:"And God finished on the seventh day His works which He made; and He rested on the seventh day from all His works which He had made.",ref:"Genesis 2:2–3"},
    {by:"Qurʾān",en:"And verily We created the heavens and the earth, and all that is between them, in six days, and naught of weariness touched Us.",ref:"Sūrat Qāf 50:38"}],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Genesis 2:2–3: God finishes His work and rests on the seventh day","Implies human-like exhaustion or cessation after labour"]},
    right:{title:"The Qurʾān",items:["Sūra 50:38: Created in six days, “and no weariness touched Us”","Explicitly rejects divine fatigue or need for rest"]}}}),
 sum:"Against Genesis 2:2–3's depiction of God resting after creation, Qurʾān 50:38 explicitly affirms that “no weariness touched Us.”"});

/* 10. #mose-und-hand */
card(C+'moses-white-hand',{
 title:"Moses' shining hand: miracle, not leprosy",
 k:"Prophets",
 blurb:"Exodus 4:6 turns Moses' hand leprous and diseased; Qurʾān 20:22 specifies it shone white “without any harm.”",
 claim:"The Qurʾān merely repeats the biblical sign of Moses' hand turning white.",
 tree:N(AV('mose-und-hand','https://discord.com/channels/1275832106949283962/1292639291696091237'),
  "Exodus 4:6 already has Moses' hand turning white when pulled from his cloak — the Qurʾān just retells it.",
  "The Qurʾānic author deliberately corrects a flawed biblical detail: Exodus 4:6 turns Moses' hand leprous (a loathsome skin disease), whereas Qurʾān 20:22 specifies that his hand came forth shining white “without any harm or disease” (min ghayri sūʾ).",
  "Sign of light, not skin disease",
  ["Biblical description (Exodus 4:6): When Moses pulls his hand from his cloak, it is “leprous, like snow” — depicted as a disease/affliction.",
   "Qurʾānic correction (20:22): Allah commands Moses: “And draw your hand to your side; it will come out white without disease/harm (min ghayri sūʾ) — another sign.”",
   "Intentional correction: Rather than blindly copying Exodus, the Qurʾān explicitly inserts “without harm” to remove the notion of a repulsive illness from a prophet's miracle."],
  ["Exodus 4:6","Qurʾān 20:22"],
  [],
  {facts:[["Bible text","Exodus 4:6 (leprous hand)"],["Qurʾān text","Sūrat Ṭā-Hā 20:22"],["Key phrase","Min ghayri sūʾ (“without harm”)"],["Point","Deliberate prophetic correction"]],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Exodus 4:6: Moses' hand becomes leprous like snow","Portrays the miracle as a skin disease/affliction"]},
    right:{title:"The Qurʾān",items:["Sūra 20:22: Moses' hand emerges radiant white, expressly “without harm/disease”","A pure luminous sign fitting a prophet of Allah"]}}}),
 sum:"Where Exodus 4:6 makes Moses' hand leprous, Qurʾān 20:22 deliberately specifies it emerged white “without harm or disease.”"});

/* 11. #joseph-prophezeiung */
card(C+'josephs-dream-prophecy',{
 title:"Joseph's dream prophecy: unfulfilled in Genesis, fulfilled in Sūra 12",
 k:"Prophecy",
 blurb:"In Genesis, Rachel dies before ever bowing to Joseph; in the Qurʾān, both parents and all brothers prostrate, fulfilling the vision completely.",
 claim:"The Qurʾān's story of Joseph's dream is copied from Genesis 37–43.",
 tree:N(AV('joseph-prophezeiung','https://discord.com/channels/1275832106949283962/1292647396546973696'),
  "Genesis 37:9–10 gives the dream of the sun, moon, and eleven stars, and Genesis 42–43 shows its fulfilment.",
  "In Genesis 37:9–10, Jacob explicitly interprets “the sun” as himself and “the moon” as Joseph's mother — yet Rachel had already died in Genesis 35:19 before the famine, so “the moon” never bows down, and Jacob's bowing is not clearly stated either! In Sūrat Yūsuf (12:4, 12:100), both of Joseph's parents and his brothers fall down before him, fulfilling every element of the dream.",
  "The unfulfilled moon in Genesis vs. complete fulfilment in Sūra 12",
  ["The prophecy in Genesis (37:9–10): Joseph tells his father and brothers he saw the sun, the moon, and eleven stars bowing down to him. Jacob rebukes him: “Shall I and your mother and your brothers indeed come to bow ourselves to the ground before you?” — identifying himself as the sun, Joseph's mother as the moon, and the eleven brothers as the stars.",
   "Partial/failed fulfilment in Genesis (42:6; 35:19): In Genesis 42:6, Joseph's brothers bow before him in Egypt when buying grain. However, Joseph's mother Rachel had already died earlier (Genesis 35:19), so “the moon” never bows to Joseph; furthermore, when Jacob arrives later, Genesis never clearly records him bowing to Joseph.",
   "The prophecy and its complete fulfilment in the Qurʾān (12:4 & 12:100): In 12:4, Yūsuf tells his father he saw eleven stars, the sun, and the moon prostrating to him. In 12:100, he raises both his parents (abawayhi) onto the throne, and they all fall down in prostration before him; Yūsuf declares: “O my father, this is the explanation of my vision of before; my Lord has made it reality.”",
   "Summary of contrast: Genesis leaves the dream's “moon” (mother) unfulfilled and the “sun” (father) unclear; the Qurʾān records both parents and all brothers present and prostrating, fulfilling the prophecy literally and completely."],
  ["Genesis 35:19; 37:9–10; 42:6","Qurʾān 12:4; 12:100"],
  [],
  {facts:[["Bible texts","Gen 35:19 · 37:9–10 · 42:6"],["Qurʾān texts","Sūra 12:4 & 12:100"],["Bible flaw","Rachel died in Gen 35:19 before Egypt"],["Qurʾān fix","Both parents & brothers bow (12:100)"]],
   quotes:[
    {by:"Genesis (Bible)",en:"Shall we indeed come, I and your mother and your brothers, to bow ourselves to the earth before you?",ref:"Genesis 37:10"},
    {by:"Qurʾān",en:"And he raised his parents upon the throne, and they bowed to him in prostration. And he said, ‘O my father, this is the explanation of my vision of before; my Lord has made it reality.’",ref:"Sūrat Yūsuf 12:100"}],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Gen 37:9–10: Sun = father, Moon = mother, 11 stars = brothers","Gen 42:6: Brothers bow down in Egypt","Gen 35:19: Rachel (the mother/moon) is already dead — never bows; Jacob's bowing is unclear"]},
    right:{title:"The Qurʾān",items:["Sūra 12:4: Eleven stars, sun, and moon prostrate in the dream","Sūra 12:100: Both parents (abawayhi) and brothers prostrate before Yūsuf","Yūsuf explicitly confirms: “My Lord has made my earlier vision reality”"]}}}),
 sum:"Because Rachel dies in Genesis 35:19, “the moon” never fulfils Joseph's dream in the Bible, whereas Qurʾān 12:100 records both parents and all brothers bowing."});

/* 12. #moses-pharao-verhärtetes-herz */
card(C+'pharaohs-hardened-heart',{
 title:"Pharaoh's hardened heart: divine injustice vs. moral consequence",
 k:"Theology",
 blurb:"Exodus 4:21 starts with God hardening Pharaoh's heart; the Qurʾān states Pharaoh rebelled first, and sealing followed as judgement.",
 claim:"Both the Bible and the Qurʾān say God hardens hearts, so Islam has the exact same problem as Exodus 4:21.",
 tree:N(AV('moses-pharao-verhärtetes-herz','https://discord.com/channels/1275832106949283962/1525313545577828362'),
  "In Exodus 4:21 God says He will harden Pharaoh's heart, and the Qurʾān also says Allah seals hearts (2:7) — so both teach the same thing.",
  "There is a crucial difference in moral order: Exodus 4:21 opens with God announcing “I will harden his heart so that he will not let the people go” before Pharaoh even refuses. In the Qurʾān, Pharaoh knowingly rejects the signs out of arrogance first (79:21; 27:14), and Allah's sealing or turning of hearts (61:5; 2:7) is explicitly a judicial consequence of persistent human rebellion.",
  "Human rejection first, divine sealing after",
  ["The problem in Exodus 4:21–22: God tells Moses beforehand, “I will harden his heart, so that he will not let the people go,” raising the theological difficulty of why Pharaoh is then punished if God Himself prevented his compliance.",
   "Pharaoh chooses rebellion first in the Qurʾān: Sūra 79:21 states, “But he denied and disobeyed,” and Sūra 27:14 explains, “He rejected them out of arrogance, though their own souls were convinced of them.”",
   "Sealing as consequence (61:5 & 2:7): Qurʾān 61:5 lays out the exact sequence: “So when they deviated, Allah caused their hearts to deviate.” Likewise, “Allah has sealed their hearts” (2:7) is a divine judgement upon stubborn persistence in unbelief, not an arbitrary cause of first disbelief.",
   "Fair note on the Christian reply: Some Christian commentators argue Exodus displays an interplay between human and divine hardening because Pharaoh is later said to harden his own heart in Exodus 8:15, 8:32, and 9:34; yet Exodus 4:21 still places God's decree to harden his heart at the very outset, whereas the Qurʾān makes the human-first sequence unambiguous."],
  ["Exodus 4:21–22; 8:15, 32; 9:34","Qurʾān 2:7; 27:14; 61:5; 79:21"],
  [],
  {facts:[["Bible problem","Exodus 4:21 (“I will harden his heart”)"],["Christian reply","Exod 8:15, 32; 9:34 (self-hardening)"],["Qurʾān sequence","61:5 (“When they deviated…”)"],["Pharaoh's guilt","27:14 (convinced, yet arrogant)"]],
   quotes:[
    {by:"Exodus (Bible)",en:"I will harden his heart, so that he will not let the people go.",ref:"Exodus 4:21"},
    {by:"Qurʾān",en:"And when they deviated, Allah caused their hearts to deviate.",ref:"Sūrat al-Ṣaff 61:5"}],
   visual:{kind:'compare',
    left:{title:"The Bible",items:["Exodus 4:21: God announces beforehand, “I will harden his heart”","Pharaoh then refuses to let Israel go","(Christian theologians note later verses where Pharaoh hardens his own heart: Exod 8:15; 8:32; 9:34)"]},
    right:{title:"The Qurʾān",items:["Sūra 79:21 & 27:14: Pharaoh consciously rejects signs he inwardly knew were true","Sūra 61:5: Explicit order — humans deviate first, then Allah turns their hearts","Sūra 2:7: Sealing of hearts is a just punishment for sustained rejection"]}}}),
 sum:"Unlike Exodus 4:21's opening decree to harden Pharaoh's heart, the Qurʾān explicitly places Pharaoh's arrogant rejection first and divine sealing afterwards as judgement (61:5)."});


/* ============================================================================
   PART II — SLAVERY IN CHRISTIANITY (12 channels)
   ============================================================================ */

/* 1. #sexslave-haare-und-nägel */
card(S+'captive-women-deuteronomy-21',{
 title:"War-captive women (Deuteronomy 21:10–14) & patristic concubinage",
 k:"War captives",
 blurb:"Deut 21:10–14 forces a captive woman into sexual servitude with unilateral dismissal; rabbis, Church Fathers, and Jerome's Letter to Oceanus.",
 claim:"The Bible condemns taking female war captives as concubines, and Church Fathers opposed concubinage with slaves.",
 tree:N(AV('sexslave-haare-und-nägel','https://discord.com/channels/1275832106949283962/1277640261253595282'),
  "Deuteronomy 21:10–14 protects captive women through honourable marriage, and Christian Fathers rejected sexual relations with slaves and concubines.",
  "Deuteronomy 21:10–14 commands the captor to take a desirable captive woman into his house, shave her head, pare her nails, strip her clothes, let her weep a month for her parents, have intercourse with her, and — if he loses desire for her — simply send her away without selling her because he has “humiliated/forced” her (Hebrew ʿinnītāh, Piel of ʿānāh, as in Deut 22:28–29). The woman has no consent, and the “month of weeping” shows it is coerced, temporary servitude — backed by rabbinic rulings, Church Fathers, and Jerome's tolerance of slave-concubinage.",
  "Deuteronomy 21:10–14: forced captivity, age-neutral “woman,” and dismissal",
  ["The biblical statute (Deut 21:10–14): When you go to war and see a beautiful captive woman and desire her, bring her home, shave her head, cut her nails, remove her captive clothes, let her mourn her father and mother for a full month, then go in to her as her husband; if you no longer delight in her, let her go wherever she wishes — do not sell her for money or treat her harshly, “because you have humiliated/forced her.”",
   "Proof of coercion (ʿānāh in Piel): Why must she weep for a full month if she consented? Moreover, the closing clause uses the Hebrew verb ʿinnītāh (Piel of ʿānāh, “humbled/violated,” cf. Deuteronomy 22:28–29), and she has neither choice in entering the union nor protection against unilateral dismissal.",
   "Age-neutral term & lower-tier “wife”: The Hebrew word translated “woman” (ishshah) is neutral regarding age — denoting a female human rather than guaranteeing an adult (even Augustine noted “woman” signifies the female sex regardless of age). Likewise, Hagar is called Abraham's “wife” even though she was a concubine, a lower legal status."],
  ["Deuteronomy 21:10–14; 22:28–29"],
  [
   N(AV('sexslave-haare-und-nägel','https://discord.com/channels/1275832106949283962/1277640261253595282'),
    "Rabbinic and Christian commentators understood Deuteronomy 21 purely as humane protection against abuse.",
    "Both rabbinic authorities and early Church Fathers openly explain these rules in terms of lust, repulsion, purification of a heathen, and unilateral use.",
    "Rashi, Rambam, Church Fathers & Lapide on Deut 21:10–14",
    ["Rashi (on Deut 21:13): Pagan women adorned themselves in wartime to entice enemy soldiers to unchastity, so her fine clothes are stripped. She stays in the main living quarters where the captor constantly stumbles past her weeping and unkempt, so the novelty of her beauty wears off and she becomes repulsive to him — contrasting her misery with the joyful, adorned Israelite wife.",
     "Maimonides / Rambam (two rabbinic positions): (1) Majority view in Sifre and the Gemara (Tractate Kiddushin): the first sexual intercourse with the captive is permitted immediately after capture so the soldier may satisfy his lust, after which he must abstain until the one-month ritual is complete; (2) Minority view of Rabbi Yochanan (Jerusalem Talmud): neither first nor second intercourse is permitted until the full month has passed.",
     "Clement of Alexandria (Stromata III, ch. 11, §71.4): Writes that before having sex with her, one must make her unattractive (shaving hair and paring nails), and if he still feels desire after the interval, he may lie with her.",
     "Cornelius a Lapide (Commentary on the Pentateuch, p. 987, citing Cajetan on v. 12): Explains the hair-shaving and nail-cutting as purification rites to soften “the harshness and impropriety of the act” — namely, that a heathen woman was being brought into Israel, so she must forget her former people and kin.",
     "Cyril of Alexandria (Theosis): Comments on Deut 21:10–14 that there is little point looking for hidden meanings here because the command is plain and straightforward.",
     "Ephrem the Syrian (Theosis): Explains the 30-day wait prevents taking her on the very day of her capture purely out of lust, giving the man thirty days to reflect whether he truly wants her as a wife.",
     "Theodoret of Cyrus (Theosis): Confirms the sexual reality plainly: if a man becomes intimate with a captive woman and is unwilling afterward to keep her as his wife, Moses commands she be freed as compensation for the intimacy."],
    ["Rashi on Deut 21:13","Maimonides / Sifre / b. Kiddushin / y. Talmud","Clement of Alexandria, Stromata III.11.71.4","Cornelius a Lapide p. 987 (citing Cajetan)","Cyril of Alexandria, Ephrem, Theodoret (Theosis)"],
    [],
    {quotes:[
      {by:"Rashi",en:"She stays in the house he constantly uses: going in he stumbles over her, going out he stumbles over her; he sees her endless weeping and neglected appearance — all so that she may become repulsive to him.",ref:"Commentary on Deuteronomy 21:13"},
      {by:"Theodoret of Cyrus",en:"If a man becomes intimate with a captive woman and afterward is unwilling to take her as his wife, Moses orders that she be set free and granted liberty as compensation for the intimate relationship.",ref:"Questions on Deuteronomy (Theosis)"}]}),
   N(AV('sexslave-haare-und-nägel','https://discord.com/channels/1275832106949283962/1277640261253595282'),
    "At least Church Fathers like Jerome strictly condemned Christians keeping slave-concubines.",
    "In his Letter to Oceanus (§5), Jerome discusses concubinage with slaves without treating the sexual relationship itself as a moral bar to clerical ordination — focusing instead on legal marriage contracts and poverty.",
    "Jerome's Letter to Oceanus (Epistulae, BKV, §5)",
    ["Eligibility for clergy: Jerome asks whether a man who kept a concubine before baptism, was baptized after her death, and then married a lawful wife can become a cleric — answering: “You will have to say he can; for he only had a concubine, not a wife.”",
     "Contract vs. intercourse: Jerome writes: “The Apostle therefore probably intended to condemn not sinful intercourse, but the marriage contract and dowry arrangements” — placing legal marriage obligations, not concubine intercourse, in focus.",
     "Slave-concubines as routine for the poor: “We experience it again and again how many men, because of their poverty, avoid the burden connected with marrying a wife. Instead of a wife they live with their female slaves and raise the children begotten of them as legitimate.”",
     "Law & church adaptation: Jerome adds that where poverty prevents obtaining an imperial rescript, “both the laws of the state and the ecclesiastical regulations change” — confirming slave-concubinage was practically accommodated rather than universally condemned."],
    ["Jerome (347–420), Epistulae (BKV), Letter to Oceanus §5"],
    [],
    {quotes:[
      {by:"Jerome",en:"We see it happen time and again that many men, on account of their poverty, avoid the burden tied to marrying a wife. Instead of a spouse they cohabit with their female slaves and raise the children begotten from them as legitimate.",ref:"Epistulae (BKV), Letter to Oceanus §5"}]})
  ],
  {facts:[["Bible law","Deut 21:10–14 (30-day captive ritual)"],["Majority rabbinic view","1st intercourse permitted immediately"],["Fathers cited","Clement · Cyril · Ephrem · Theodoret · Jerome"],["Key term","ʿinnītāh (Piel of ʿānāh: forced/humbled)"]],
   visual:{kind:'steps',items:[["Capture & bring home","Spot a desirable captive woman in war and take her into your house (Deut 21:10–12)."],["Humiliate & wait","Shave her head, pare her nails, strip captive clothes; she weeps 1 month for parents (majority rabbis allow immediate 1st intercourse first)."],["Unilateral dismissal","If desire fades, send her away without payment — she has no say in entering or staying."] ]}}),
 sum:"Deuteronomy 21:10–14 institutionalises non-consensual captive concubinage (confirmed by Rashi, Rambam, Clement, Theodoret), while Jerome's Letter to Oceanus reflects ecclesiastical accommodation of slave-concubinage."});

/* 2. #sklaven-kirchenväter */
card(S+'church-fathers-on-slavery',{
 title:"The Church Fathers, councils, and Aquinas on slavery",
 k:"Church Fathers",
 blurb:"Augustine calls slavery God's just order; Chrysostom, Basil, Hippolytus, Toledo IX, and Aquinas justify beating, returning runaways, and church-owned slaves.",
 claim:"The Church Fathers and early Church Councils opposed slavery and forbade beating or owning slaves.",
 tree:N(AV('sklaven-kirchenväter','https://discord.com/channels/1275832106949283962/1275981595635089571'),
  "The Church Fathers recognised slavery as contrary to Christian teaching and never justified beating or keeping slaves.",
  "Major Church Fathers, canonical authorities, Church councils, and Thomas Aquinas explicitly defended slavery as a divinely ordered institution, permitted physical beatings with rods, restricted slaves from baptism without owner consent, ordered runaway slaves returned to their masters, and even enslaved clerics' children to the Church for life.",
  "Augustine: slavery as God's just order for sin",
  ["Augustine of Hippo (City of God XIX.15): Teaches that slavery is “rightly understood as imposed upon the sinner” (iure), occurring “not without the judgment of God, with whom there is no injustice.”",
   "Punishment and natural order: Augustine writes that all servitude happens under God's righteous judgement assigning penalties according to deserts, preserving the natural order and forbidding disruption of it.",
   "Apostolic obedience: Augustine appeals directly to apostolic Scripture: “Therefore the Apostle also admonishes slaves to be subject to their masters and to serve them wholeheartedly with good will” (Ideoque apostolus etiam servos monet subditos esse dominis suis et ex animo eis cum bona voluntate servire)."],
  ["Augustine, De civitate Dei XIX.15"],
  [
   N(AV('sklaven-kirchenväter','https://discord.com/channels/1275832106949283962/1275981595635089571'),
    "At least Church Fathers forbade masters from physically beating their slaves.",
    "John Chrysostom and Thomas Aquinas explicitly defended beating slaves as necessary and lawful chastisement — citing Proverbs and Sirach.",
    "John Chrysostom & Thomas Aquinas on beating slaves",
    ["Chrysostom (Homily 12 on Acts 4:36–37): Advises masters not merely to utter constant threats without striking, because endless threats terrorise slaves and tempt them to run away — whereas beating is temporary while threats wound the mind perpetually.",
     "Chrysostom (Homily 15 on Ephesians, §3): While criticising mistresses who strip maidservants and call husbands to bind them to pillars, he explicitly affirms beating: “What then, should one not beat? I do not say that, for it is necessary — yet neither continually, nor immoderately, nor for personal offences.”",
     "Chrysostom (Homilies on Genesis 3:8): Compares Adam and Eve hiding from God to careless slaves who deserve a whipping and cower in corners of the house.",
     "Thomas Aquinas (Summa Theologiae II-II, Q. 65, Art. 2): Cites Proverbs 13:24, Proverbs 23:13, and Sirach 33:28 (“Torture and fetters are for a wicked slave”). Distinguishing beating from mutilation, Aquinas concludes that because a slave is under his master's jurisdiction just as a child is under a parent, “a master may lawfully beat his slave, so that instruction may be enforced by chastisement.”"],
    ["Chrysostom, Hom. 12 on Acts; Hom. 15 on Eph §3; Hom. on Gen 3:8","Thomas Aquinas, Summa Theologiae II-II, Q. 65, Art. 2 (newadvent.org/summa/3065.htm)"],
    [],
    {quotes:[
      {by:"John Chrysostom",en:"What then, should one not beat? I do not say that, for it is necessary — yet neither continually, nor immoderately, nor for personal offences.",ref:"Homily 15 on Ephesians, §3"},
      {by:"Thomas Aquinas",en:"Since the child is subject to the power of the parent, and the slave to the power of his master, a parent may lawfully beat his child and a master his slave, so that instruction may be enforced by chastisement.",ref:"Summa Theologiae II-II, Q. 65, Art. 2"}]}),
   N(AV('sklaven-kirchenväter','https://discord.com/channels/1275832106949283962/1275981595635089571'),
    "The Church freed slaves who sought refuge or wanted to become Christians.",
    "Church canons restricted slaves' baptism without master approval, ordered runaway slaves sent back to their masters, and made children of illicit clerical unions perpetual slaves of the Church.",
    "Hippolytus, Basil the Great & 9th Council of Toledo",
    ["Hippolytus of Rome (Canons, Canon 10): “A slave who wishes to become a Christian may be baptized only with the consent of his master.”",
     "Basil the Great (Longer Rules / Fifty-Five Detailed Rules, Q. 11 — BKV): “Slaves who are still under the yoke and take refuge with the brotherhood [church/community] are to be admonished, corrected, and sent back to their masters, after the example of the blessed Paul, who sent Onesimus back to Philemon after begetting him through the Gospel.”",
     "9th Council of Toledo (655 CE): Decrees that any cleric from bishop down to subdeacon who fathers sons in an illicit union with a free woman or a slave woman is to be canonically punished, and the children born of such defilement shall receive no inheritance and “shall belong forever as slaves to the church” where their fathers served."],
    ["Hippolytus of Rome, Canons, Canon 10","Basil the Great, Longer Rules XI (bkv.unifr.ch)","9th Council of Toledo (655 CE)"],
    [],
    {quotes:[
      {by:"Basil the Great",en:"Slaves who are still under the yoke and flee to the brotherhood for refuge are to be admonished, corrected, and sent back to their masters, after the example of the blessed Paul, who sent Onesimus back to Philemon.",ref:"Longer Rules, Q. 11"},
      {by:"9th Council of Toledo (655)",en:"The children born of such defilement shall not only not receive their parents' inheritance, but shall belong forever as slaves to the church at which their fathers served.",ref:"Council of Toledo IX, 655 CE"}]})
  ],
  {facts:[["Authorities","Augustine · Chrysostom · Hippolytus · Basil · Aquinas"],["Council","9th Council of Toledo (655 CE)"],["Beating","Defended by Chrysostom & Aquinas"],["Runaways","Basil orders return to masters"]],
   quotes:[
    {by:"Augustine of Hippo",en:"The condition of servitude is rightly understood as imposed upon the sinner… Every slavery happens under the judgment of God, with whom there is no injustice.",ref:"City of God XIX.15"}],
   visual:{kind:'steps',items:[["Divine order (Augustine)","Slavery is a just penalty for sin under God's faultless judgement (City of God XIX.15)."],["Physical beating (Chrysostom & Aquinas)","Beating slaves with a rod is lawful and necessary discipline (Hom. Eph 15; ST II-II Q.65)."],["Baptism & runaways (Hippolytus & Basil)","No baptism without master's consent (Canon 10); runaway slaves sent back to masters (Rule XI)."],["Church slavery (Toledo IX, 655)","Clerics' illegitimate children become perpetual slaves of the church."]]}}),
 sum:"From Augustine and Chrysostom to Basil, Toledo IX (655), and Aquinas, classical Christian authorities affirmed slavery as divine order, defended beating slaves, and returned runaways."});

/* 3. #synode-von-gangra-350 */
card(S+'synod-of-gangra',{
 title:"Synod of Gangra (Canon 3): anathema for freeing slaves",
 k:"Church councils",
 blurb:"The Synod of Gangra anathematised anyone who, on grounds of piety, taught a slave to leave his master.",
 claim:"Early church synods condemned slavery and encouraged enslaved Christians to leave their masters.",
 tree:N(AV('synode-von-gangra-350','https://discord.com/channels/1275832106949283962/1275981169187356692'),
  "Early Christian synods encouraged believers to reject slaveholders on spiritual grounds.",
  "Canon 3 of the Synod of Gangra (c. 340–350 CE, associated in tradition with c. 15 bishops and authorities such as Gregory of Nazianzus, Basil the Great, and Eusebius of Emesa) placed a formal curse (anathema) on anyone who taught slaves under the pretext of piety to despise or flee their masters — harmonising this directly with 1 Timothy 6:1 and Titus 2:9–10.",
  "Canon 3 and its canonical reception",
  ["Canon 3 of Gangra: “If anyone, under the pretext of piety, teaches a slave to despise his master and to run away from his service, and not to serve his own master with good will and all honour, let him be accursed (anathema).”",
   "Scriptural grounding (Van Espen, Balsamon, Zonaras): Canonists point out that Canon 3 directly enforces 1 Timothy 6:1 (“Let all who are under a yoke as slaves regard their own masters as worthy of all honor, so that the name of God and the teaching may not be reviled”) and Titus 2:9–10 (exhorting slaves to be submissive in everything, not argumentative or pilfering).",
   "Long-term reception in Catholic canon law: This canon entered the Corpus Juris Canonici — Gratian's Decretum, Part II, Causa XVII, Q. IV, c. 37 (Isidore's version) and c. 38 (from Martin of Braga's collections, also ascribed to a council under Pope Martin as Canon 47)."],
  ["Synod of Gangra (c. 340–350), Canon 3","1 Timothy 6:1; Titus 2:9–10","Van Espen; Balsamon; Zonaras","Corpus Juris Canonici, Gratian Causa XVII Q. IV c. 37–38"],
  [],
  {facts:[["Council","Synod of Gangra (c. 340–350)"],["Penalty","Anathema (formal curse)"],["Scriptural basis","1 Timothy 6:1 & Titus 2:9–10"],["Reception","Gratian's Decretum C.17 Q.4"]],
   quotes:[{by:"Synod of Gangra",en:"If anyone, under the pretext of piety, teaches a slave to despise his master and to run away from his service, and not to serve his own master with good will and all honour, let him be anathema.",ref:"Canon 3"}],
   visual:{kind:'steps',items:[["Synod of Gangra (Canon 3)","Curses anyone teaching slaves out of piety to leave their masters."],["Apostolic basis","Grounded explicitly in 1 Tim 6:1 and Titus 2:9–10 (Van Espen, Balsamon, Zonaras)."],["Medieval canon law","Codified into Gratian's Decretum (Causa XVII, Q. IV, c. 37–38) and attributed to Pope Martin (Canon 47)."]]}}),
 sum:"Canon 3 of the Synod of Gangra anathematised anyone urging slaves on religious grounds to leave their masters, entering medieval canon law via Gratian."});

/* 4. #augustinus-hippo-sklaven-buch */
card(S+'augustine-slavery-scholarship',{
 title:"Augustine's practice with slaves (scholarship summary)",
 k:"Church Fathers",
 blurb:"Historical study of Augustine's sermons and letters: rod-beating, chains, sexual abuse by masters, slaves as wedding gifts, and banning apologies.",
 claim:"Augustine championed the dignity and emancipation of slaves in practice.",
 tree:N(AV('augustinus-hippo-sklaven-buch','https://discord.com/channels/1275832106949283962/1278078756875141220'),
  "Augustine's writings show him working to end harsh slave punishment and defend slaves' rights.",
  "Detailed scholarship on Augustine's sermons and letters (pp. 21–45) documents the opposite: he condemned Donatist-backed slave revolts, endorsed beating slaves with rods via Proverbs 29:19, noted masters casually using female slaves sexually, listed slaves alongside cattle and grain as wealth, discouraged emancipation, and even advised masters not to apologise to slaves after unjust beatings.",
  "Punishment, wealth, and control in Augustine's North Africa",
  ["Condemning slave resistance (p. 21): Augustine shows little interest in rural slaves except to condemn revolts encouraged in some areas by the Donatists: “What master is not forced to live in fear of his own slave if the slave places himself under the protection of the Donatists?”",
   "Standard punishments & Proverbs 29:19 (pp. 27–29): Beating with rods/sticks was the normal punishment Augustine mentions most often — alongside imprisonment, chains, turning the mill normally worked by horses or donkeys, or banishing a house slave to hard labour in the countryside. In a brutal era where wives discussed bruises from their husbands, rod-beating was deemed “humane”; Augustine approved it and cited Proverbs 29:19 (“A slave cannot be corrected by mere words; though he understands, he will not heed”).",
   "Slaves as status symbols & property rights (pp. 30–31): Augustine lists slaves alongside grain, oil, wine, gold, silver, and cattle as normal possessions of a wealthy man; in circles like Melania the Younger, slaves were given as wedding gifts. He treats slave ownership as a civil property right and shows little interest in manumission: “Christ did not make slaves into freedmen, but made bad slaves into good slaves.”"],
  ["Secondary study on Augustine & slavery, pp. 21, 27–31, 38–39, 45","Proverbs 29:19"],
  [
   N(AV('augustinus-hippo-sklaven-buch','https://discord.com/channels/1275832106949283962/1278078756875141220'),
    "Surely Augustine still protected slaves from sexual exploitation and cruel masters.",
    "His sermons show masters routinely assumed the right to use their own female slaves sexually, he barred slaves from fleeing cruel masters unless ordered to sin, and he told masters never to ask a slave's forgiveness even after an excessive beating.",
    "Sexual exploitation, flight, and refusing apologies (pp. 29, 38–39, 45)",
    ["Casual sexual use of female slaves (p. 29): Augustine's sermons reveal how lightly masters viewed sexual relations with their own female slaves — while adultery with another man's wife or visiting a prostitute was seen as wrong, masters could not fathom why using their own slave woman was wrong, asking whether a man did not have the right to do as he pleased in his own house.",
     "No escape from a cruel master (pp. 38–39): Slaves suffering under bad masters are told to draw strength from eschatological hope and view suffering as a test of virtue. The sole justification for disobeying a bad master was a command to commit sin — so “a slave who runs away merely because he finds life too hard is actually fleeing the service of Christ, the true Lord.”",
     "Never apologise to a slave (p. 45): If a master exceeds the bounds of justice when punishing or beating a slave, Augustine instructs him not to ask the slave for forgiveness — acknowledging the rule is harsh, lest “the slave become proud.”"],
    ["Secondary study on Augustine & slavery, pp. 29, 38–39, 45"],
    [],
    {quotes:[
      {by:"Augustine (cited p. 21)",en:"What master is not forced to live in fear of his own slave if the slave places himself under the protection of the Donatists?",ref:"Study on Augustine, p. 21"},
      {by:"Summary of Augustine (cited pp. 30–31)",en:"Christ did not make slaves into freedmen, but made bad slaves into good slaves.",ref:"Study on Augustine, pp. 30–31"}]})
  ],
  {facts:[["Normal penalty","Beating with rods (Prov 29:19)"],["Other penalties","Chains, prison, mill-turning"],["Property status","Listed with cattle, gold, wedding gifts"],["No apology rule","p. 45: lest the slave grow proud"]],
   quotes:[{by:"Study on Augustine (p. 29)",en:"Augustine approved beating with sticks as a punishment for slaves and even found a biblical basis for it in Proverbs 29:19 — ‘A slave is not corrected by words alone, for though he understands, he pays no heed.’",ref:"Secondary study, p. 29"}],
   visual:{kind:'steps',items:[["Social order (pp. 21, 30–31)","Opposes Donatist slave revolts; treats slaves as standard property & wedding gifts."],["Corporal discipline (pp. 27–29)","Endorses rod-beating via Proverbs 29:19; mentions chains and mill-labour."],["Endurance & pride (pp. 38–39, 45)","Running from a harsh master flees Christ; never ask a slave's pardon even after excessive beating."]]}}),
 sum:"Historical scholarship on Augustine documents his support for rod-beating (Prov 29:19), refusal of manumission as a goal, ban on fleeing harsh masters, and refusal to let masters apologise to beaten slaves."});

/* 5. #canon-zusammenfassung-1900 */
card(S+'canon-law-slaves',{
 title:"Christian Canon Law on slave marriage and children",
 k:"Canon law",
 blurb:"Church canons stripped slave fathers of authority over their children's marriage and condemned mixed children to hereditary slavery.",
 claim:"Christian canon law granted enslaved families full parental rights and protected children from hereditary bondage.",
 tree:N(AV('canon-zusammenfassung-1900','https://discord.com/channels/1275832106949283962/1278079977203564594'),
  "Canon law treated enslaved Christians as equals in family and marriage rights.",
  "Classical canon law collections explicitly stripped enslaved fathers — including slaves owned by the Church itself — of the right to choose their children's spouses, and decreed that children born of a free man and an enslaved woman inherited servile status.",
  "Four canonical rulings on slaves and their offspring",
  ["Denying parental authority (C. 1, Question III): “The girl's father was clearly the slave of your church, and her uncle was of free birth. We therefore decree that the choice of the niece's husband belongs to her uncle, and not to her father, because his will is not free.”",
   "Hereditary slavery (C. 15, Question IV): “The children of a free man and a slave woman are of servile condition. Those born always follow the worse part.”",
   "Children follow the enslaved mother (C. 15 §1, Question IV): “Those who do not come from a lawful marriage follow the mother rather than the father” — directly disadvantaging children born to enslaved women.",
   "Legal hierarchy of women (C. 12, Question II): “Thus a wife is one thing and a concubine another, just as the slave woman was different from the free woman.”"],
  ["Canon Law compilation (C. 1 Q. III; C. 15 Q. IV; C. 15 §1 Q. IV; C. 12 Q. II)"],
  [],
  {facts:[["Father's right","Denied if enslaved (C. 1 Q. III)"],["Mixed child status","Follows worse part (C. 15 Q. IV)"],["Illegitimate birth","Follows mother (C. 15 §1 Q. IV)"],["Woman status","Slave vs. free distinction (C. 12 Q. II)"]],
   quotes:[
    {by:"Canon Law (C. 1, Q. III)",en:"The girl's father was clearly the slave of your church, and her uncle was of free birth. We therefore decree that the choice of the niece's husband belongs to her uncle, and not to her father, because his will is not free.",ref:"C. 1, Question III"},
    {by:"Canon Law (C. 15, Q. IV)",en:"The children of a free man and a slave woman are of servile condition. Those born always follow the worse part.",ref:"C. 15, Question IV"}],
   visual:{kind:'compare',
    left:{title:"Free citizen",items:["Retains legal will to arrange family marriage (uncle overrides father)","Free status preserved in lawful marriage"]},
    right:{title:"Church / private slave",items:["Father's will ruled “not free” — stripped of say over daughter's marriage","Children of a free man & slave woman inherit slavery (“worse part”)"]}}}),
 sum:"Christian canon law denied enslaved fathers authority over their daughters' marriage and perpetuated slavery onto children born of enslaved women."});

/* 6. #friedensvertrag-sklaverrei */
card(S+'war-captives-deuteronomy-20',{
 title:"Forced labour and enslaving conquered cities (Deut 20:10–14)",
 k:"Old Testament",
 blurb:"Deuteronomy 20 commands forced labour if a city surrenders, and slaughtering all males while enslaving women and children if it resists.",
 claim:"Only Islam permits taking captives in war; biblical warfare never enslaved entire populations.",
 tree:N(AV('friedensvertrag-sklaverrei','https://discord.com/channels/1275832106949283962/1277642606075052115'),
  "Islamic warfare rules on captives are harsh, whereas biblical war law was humane and avoided enslaving conquered peoples.",
  "Deuteronomy 20:10–14 gives conquered cities a stark ultimatum: surrender and have the entire population reduced to forced labour (slavery), or resist and have every male killed by the sword while women and children are seized as plunder.",
  "Surrender = forced labour; resistance = execution and plunder",
  ["Peace offer with forced servitude (Deut 20:10–11): “When you draw near to a city to fight against it, offer terms of peace to it. And if it responds to you peaceably and opens to you, then all the people who are found in it shall do forced labor for you and shall serve you.”",
   "Refusal = slaughter of males & enslavement of women/children (Deut 20:12–14): “But if it makes no peace with you, but makes war against you, then you shall besiege it. And when the LORD your God gives it into your hand, you shall put all its males to the sword, but the women and the little ones, the livestock, and everything else in the city, all its spoil, you shall take as plunder for yourselves. And you shall enjoy the spoil of your enemies, which the LORD your God has given you.”"],
  ["Deuteronomy 20:10–14"],
  [],
  {facts:[["Bible passage","Deuteronomy 20:10–14"],["If city surrenders","All inhabitants become forced labour"],["If city resists","All males killed by the sword"],["Women & children","Taken as divinely granted plunder"]],
   quotes:[{by:"Deuteronomy (Bible)",en:"If it responds to you peaceably and opens to you, then all the people who are found in it shall be subjected to forced labour for you and shall serve you. … But if it makes war against you… you shall strike all its males with the edge of the sword; yet the women and the children and the livestock… you shall take as plunder for yourselves.",ref:"Deuteronomy 20:11–14"}],
   visual:{kind:'compare',
    left:{title:"City accepts peace (v. 10–11)",items:["Gates opened without battle","Entire population reduced to forced labour and servitude"]},
    right:{title:"City resists (v. 12–14)",items:["City besieged and captured","All males put to the sword; women, children & goods seized as spoil"]}}}),
 sum:"Deuteronomy 20:10–14 explicitly mandates mass forced labour even for cities that surrender peacefully, and killing all males while plundering women and children if they resist."});

/* 7. #sirach-sklave */
card(S+'sirach-33-slaves',{
 title:"Sirach 33:24–31: work, fetters, and torture for slaves",
 k:"Deuterocanon",
 blurb:"Catholic and Orthodox Scripture (Sirach 33:24–31) compares slaves to donkeys and prescribes blows, torture, and fetters to prevent idleness or desire for freedom.",
 claim:"Scripture never endorses torturing, shackling, or denying slaves leisure lest they seek freedom.",
 tree:N(AV('sirach-sklave','https://discord.com/channels/1275832106949283962/1288282093251461202'),
  "Scripture never compares slaves to pack animals or recommends fetters and torture.",
  "In Catholic and Orthodox Bibles, Sirach 33:24–31 (Einheitsübersetzung 2016) explicitly compares a slave to a donkey, warns that leaving him idle makes him seek freedom, and prescribes blows, torture, and fetters for disobedience (alongside Luke 17:7's picture of unthanked slave labour).",
  "“For wicked slaves there are blows and torture”",
  ["Comparison to a donkey & preventing freedom (Sirach 33:24–25): “Fodder, stick, and burdens for the donkey; bread, discipline, and work for the slave. Make your servant work, and you will have rest; let him go idle, and he will seek his freedom.”",
   "Blows, torture, and fetters (Sirach 33:26–28): “Yoke and thong bow the neck; for wicked servants there are blows and torture (Schläge und Folter). Put him to work so he does not become idle, for idleness teaches much evil. Give him work suited to him; if he does not obey, put him in fetters.”",
   "Limits in vv. 29–31 & New Testament parallel: Verses 29–31 add not to be excessively harsh without justice, and if you have only one slave to treat him like yourself / a brother because you bought him with your blood/need him — yet the preceding verses canonically endorse torture, shackles, and suppressing any desire for liberty (cf. Luke 17:7)."],
  ["Sirach 33:24–31 (Einheitsübersetzung 2016)","Luke 17:7"],
  [],
  {facts:[["Book","Sirach 33:24–31 (Catholic/Orthodox)"],["Analogy","Donkey (fodder/stick) = Slave (work)"],["If idle","“He will seek his freedom” (v. 25)"],["If disobedient","Blows, torture & fetters (vv. 26–28)"]],
   quotes:[{by:"Sirach (Einheitsübersetzung 2016)",en:"Fodder, stick, and burdens for the donkey; bread, discipline, and work for the slave. Make your servant work, so you have rest; leave him idle, and he will seek freedom. Yoke and thong bow the neck; for wicked servants there are blows and torture.",ref:"Sirach 33:24–26"}],
   visual:{kind:'steps',items:[["Keep working (vv. 24–25, 27)","Compare slave to a donkey; prevent idleness lest he want liberty."],["Punish disobedience (vv. 26, 28)","Prescribe yoke, blows, torture, and fetters for non-compliance."],["Self-interest caveat (vv. 29–31)","Moderate excess only because you paid for him and need his labour."]]}}),
 sum:"Sirach 33:24–31 explicitly compares slaves to donkeys, warns against idleness lest they seek freedom, and prescribes blows, torture, and fetters for disobedience."});

/* 8. #lukas-17 */
card(S+'luke-17-unworthy-slaves',{
 title:"Luke 17:7–10: slaves owe service without thanks or rest",
 k:"New Testament",
 blurb:"Jesus assumes as self-evident that a tired field slave must serve his master's dinner first and receive no thanks.",
 claim:"Jesus' own words in the Gospels undermine slavery and teach masters to thank and wait upon their slaves.",
 tree:N(AV('lukas-17','https://discord.com/channels/1275832106949283962/1291874328777986180'),
  "Jesus rejected the master–slave dynamic and never used uncompensated slave obedience as a positive norm.",
  "In Luke 17:7–10, Jesus builds a spiritual lesson directly upon the unquestioned assumption that an exhausted slave returning from ploughing or herding receives neither rest nor gratitude — he must first cook and serve his master's meal before eating himself, because he has merely done what was owed.",
  "Jesus' own parable in Luke 17:7–10",
  ["The Gospel scenario (Luke 17:7–9): “Who among you, having a slave ploughing or keeping sheep, will say to him when he has come in from the field, ‘Come at once and recline at table’? Will he not rather say to him, ‘Prepare supper for me, and dress properly, and serve me while I eat and drink, and afterward you will eat and drink’? Does he thank the slave because he did what was commanded?”",
   "The moral lesson (Luke 17:10): “So you also, when you have done all that you were commanded, say, ‘We are unworthy slaves; we have only done what was our duty.’”",
   "Theological implication: Jesus treats a master demanding extra labour from a tired field slave without a word of thanks as completely normal and uses it as the model for discipleship — without offering a single critique of slavery."],
  ["Luke 17:7–10"],
  [],
  {facts:[["Speaker","Jesus (Gospel of Luke)"],["Passage","Luke 17:7–10"],["Premise","Master does not thank tired slave"],["Critique of slavery","None in the passage"]],
   quotes:[{by:"Jesus in Luke 17:8–10",en:"Will he not rather say to him, ‘Prepare what I shall eat for supper, and gird yourself and serve me until I have eaten and drunk; and afterward you shall eat and drink’? Does he thank the slave because he did what was commanded? So you also, when you have done all that you are commanded, say: We are unworthy slaves; we have done what we were obliged to do.",ref:"Luke 17:8–10"}],
   visual:{kind:'steps',items:[["Field labour all day","Slave comes in exhausted from ploughing or herding (v. 7)."],["No rest or thanks","Master orders him to cook and serve first before eating (vv. 8–9)."],["Model of duty","Jesus applies this unthanked obligation directly to believers (v. 10)."]]}}),
 sum:"In Luke 17:7–10, Jesus treats a master refusing rest or thanks to an exhausted slave as self-evident and makes it the model of human duty before God."});

/* 9. #lukas-12 */
card(S+'luke-12-beating-slaves',{
 title:"Luke 12:42–47 & 1 Peter 2:18–20: beating disobedient slaves",
 k:"New Testament",
 blurb:"Luke 12:47 states as a general rule that a disobedient slave receives “many blows” — cited by Augustine and Aquinas to justify beating slaves.",
 claim:"The New Testament condemns beating slaves and never endorses corporal punishment against them.",
 tree:N(AV('lukas-12','https://discord.com/channels/1275832106949283962/1291882864475897856'),
  "Luke 12:45–46 condemns a wicked servant who beats other slaves, proving Jesus forbade beating slaves.",
  "While Luke 12:45–46 punishes an abusive steward acting above his station, the very next verse (Luke 12:47) states as a general rule that a slave who knew his master's will and did not act accordingly “will receive many blows.” Christian authorities like Augustine and Thomas Aquinas used this exact text — alongside 1 Peter 2:18–20 — to justify masters beating slaves.",
  "Luke 12:47 as a general rule, not an isolated abuse",
  ["Distinction between vv. 45–46 and v. 47: In Luke 12:45–46, the master cuts in pieces a steward who gets drunk and beats the other male and female slaves while the master is away. Verse 47, however, is a general principle: “And that slave who knew his master's will, and did not prepare himself or act according to his will, will receive many blows” (followed in v. 48 by “few blows” for one who did not know).",
   "1 Peter 2:18–20 (beating endured as grace): “Slaves, be subject to your masters with all fear, not only to the good and gentle, but also to the crooked/harsh. For this is grace, if because of consciousness of God one endures sorrows while suffering unjustly. For what credit is there if, when you sin and are beaten, you endure it? But if you do good and suffer and endure it, this is grace with God.”"],
  ["Luke 12:42–48","1 Peter 2:18–20"],
  [
   N(AV('lukas-12','https://discord.com/channels/1275832106949283962/1291882864475897856'),
    "Luke 12:47 is purely metaphorical and Church Fathers never used it to defend literal beating.",
    "Both Augustine and Thomas Aquinas explicitly cited it alongside other texts to defend literal physical beatings of slaves.",
    "Augustine & Thomas Aquinas apply Luke 12:47–48 literally",
    ["Augustine (On the Sermon on the Mount, Book I, on Matthew 5, §63): Having just stated a father may beat his young son to improve his conduct, Augustine quotes Luke 12:47–48 (“beaten with few blows… beaten with many blows”) to argue that whoever holds power in the natural order ought to punish with the same fatherly “love” — so sin is corrected by punishment rather than left unpunished.",
     "Thomas Aquinas quoting Augustine (On John, Tractate 10, ch. 9): “Have you a friend? Admonish him gently. A wife? Restrain her strictly. Have you a female slave? Compel her even with blows. Do what you can according to your station.”"],
    ["Augustine, De sermone Domini in monte I (on Matt 5), §63","Thomas Aquinas citing Augustine, Tractatus in Ioannem X.9"],
    [],
    {quotes:[
      {by:"Augustine",en:"Nothing further is required than that the one to whom power is given in the natural order of things should punish — and punish with the same love that a father has toward his little son.",ref:"On the Sermon on the Mount I, §63 (citing Luke 12:47–48)"},
      {by:"Augustine (cited by Aquinas)",en:"Have you a friend? Admonish him gently. A wife? Restrain her strictly. Have you a female slave? Compel her even with blows. Do what you can according to your station.",ref:"Tractate 10 on John, ch. 9"}]})
  ],
  {facts:[["Luke 12:47","Disobedient slave receives “many blows”"],["1 Peter 2:18–20","Submit even to harsh/crooked masters"],["Augustine","Applies Luke 12:47–48 to physical discipline"],["Aquinas / Tractate 10","“Female slave? Compel her even with blows”"]],
   quotes:[{by:"1 Peter 2:18–20",en:"Slaves, be subject to your masters with all fear, not only to the good and gentle, but also to the crooked… For what credit is there if, when you sin and are beaten, you endure it?",ref:"1 Peter 2:18–20"}],
   visual:{kind:'compare',
    left:{title:"What Christians claim",items:["Luke 12:45–46 condemns a steward beating slaves","Luke 12:47 is purely about the afterlife, not literal beating"]},
    right:{title:"What the texts & Fathers say",items:["Luke 12:47 states a general rule of “many blows” for disobedient slaves","1 Pet 2:18–20 commands enduring beatings from even harsh masters","Augustine & Aquinas cite Luke 12:47–48 and Tractate 10.9 to endorse beating slaves"]}}}),
 sum:"Luke 12:47–48 and 1 Peter 2:18–20 presuppose corporal beating of slaves, and both Augustine and Aquinas cited them to justify physical punishment."});

/* 10. #sklaverrei-findetbibel-gott-nict-gut */
card(S+'galatians-3-28-and-leviticus',{
 title:"Does Galatians 3:28 abolish slavery? (Plus Leviticus 25)",
 k:"Rebuttals",
 blurb:"Leviticus treats slavery as bad only for Israelites; Galatians 3:28 teaches spiritual equality in salvation — or else it would abolish “male and female” too.",
 claim:"Slavery was normal back then, and in the New Testament Paul abolished it in Galatians 3:28 (“neither slave nor free”).",
 tree:N(AV('sklaverrei-findetbibel-gott-nict-gut','https://discord.com/channels/1275832106949283962/1299181510724943942'),
  "In the Old Testament slavery was just a normal social custom, and in Galatians 3:28 Paul declared there is “neither slave nor free,” abolishing slavery.",
  "Both claims fail. In Leviticus 25, the biblical God explicitly recognises that being a slave is bad — forbidding harsh enslavement of fellow Israelites while commanding permanent chattel slavery of foreigners. And Galatians 3:28 teaches spiritual equality before God in salvation, not social abolition — otherwise “neither male nor female” would abolish gender roles too, which Paul explicitly upholds.",
  "Leviticus' double standard & what Galatians 3:28 actually says",
  ["Leviticus exposes the “normal back then” excuse: Christians argue slavery was simply good/normal in antiquity, yet in Leviticus 25 God treats slavery as an indignity unsuitable for Israelites — forbidding harsh rule over fellow Israelites — while explicitly ordering permanent inherited slavery for surrounding peoples.",
   "Galatians 3:28 (“There is neither Jew nor Greek, there is neither slave nor free, there is neither male nor female, for you are all one in Christ Jesus”): This verse describes equal spiritual access to salvation and adoption in Christ, not a political manifesto to abolish social institutions.",
   "The consistency test (“neither male nor female”): If “neither slave nor free” meant abolishing the institution of slavery, then by identical logic “neither male nor female” would abolish distinctions between men and women — which Paul explicitly rejects elsewhere (e.g., 1 Corinthians 11; Ephesians 5).",
   "Paul's actual practice (Philemon & 1 Cor 7:21): In the Epistle to Philemon, Paul sends the runaway slave Onesimus back to his master Philemon (urging him to welcome him as a brother, without demanding emancipation of all slaves). In 1 Corinthians 7:21, Paul writes: “Were you a slave when called? Do not be concerned about it. But if you can gain your freedom, avail yourself of the opportunity” — spiritual freedom matters most, leaving slavery intact."],
  ["Leviticus 25:39–46","Galatians 3:28","1 Corinthians 7:21; 11","Ephesians 5","Philemon"],
  [],
  {facts:[["Leviticus 25","Bad for Israelites, mandated for Gentiles"],["Galatians 3:28","Spiritual salvation, not abolition"],["Consistency test","Also says “neither male nor female”"],["Paul's practice","Sends Onesimus back (Philemon)"]],
   quotes:[{by:"Galatians 3:28",en:"There is neither Jew nor Greek, there is neither slave nor free, there is neither male nor female, for you are all one in Christ Jesus.",ref:"Galatians 3:28"}],
   visual:{kind:'compare',
    left:{title:"Apologetic claim",items:["Gal 3:28 abolishes slavery as an institution","Slavery was treated as neutral/good in the OT"]},
    right:{title:"Textual reality",items:["Gal 3:28 means equal salvation (just as “male and female” aren't abolished — cf. 1 Cor 11, Eph 5)","Paul tells slaves not to worry about status (1 Cor 7:21) and returns Onesimus (Philemon)","Leviticus 25 explicitly treats slavery as bad for Israelites yet orders it for non-Israelites"]}}}),
 sum:"Leviticus 25 treats slavery as bad only for Israelites, and Galatians 3:28 teaches spiritual equality in salvation — leaving slavery intact just as it leaves “male and female” intact."});

/* 11. #sklaverrei-befehele */
card(S+'biblical-slavery-commands',{
 title:"Biblical commands on slavery: Old & New Testament",
 k:"Scripture",
 blurb:"Leviticus 25:44–46 mandates permanent inherited slavery; Exodus 21 allows fatal beatings after two days and splitting families; NT epistles demand obedience.",
 claim:"The Bible never commands chattel slavery, and Christians can distance themselves from the Old Testament through the New Testament.",
 tree:N(AV('sklaverrei-befehele','https://discord.com/channels/1275832106949283962/1310616477887369306'),
  "God never commanded perpetual slavery in the Bible — and even if the Old Testament allowed it, the New Testament did away with it.",
  "Leviticus 25:44–46 explicitly commands/permits buying foreign slaves as permanent inherited property, Exodus 21 legalises beating slaves and separating families, and the New Testament (Ephesians, 1 Timothy, Titus, Colossians, 1 Peter) repeatedly commands slaves to obey even harsh masters — with early commentators confirming routine beatings.",
  "Old Testament laws: perpetual chattel slavery, beating & family separation",
  ["Perpetual inherited slavery (Leviticus 25:44–46): “As for your male and female slaves whom you may have: you may buy male and female slaves from among the nations that are around you. You may also buy from among the strangers who sojourn with you and their clans that are with you, who have been born in your land, and they may be your property. You may bequeath them to your sons after you to inherit as a possession forever. You may make slaves of them, but over your brothers the people of Israel you shall not rule, one over another ruthlessly.”",
   "Beating slaves without penalty (Exodus 21:20–21): “When a man strikes his slave, male or female, with a rod and the slave dies under his hand, he shall be avenged. But if the slave survives a day or two, he is not to be avenged, for the slave is his money.”",
   "Splitting enslaved families (Exodus 21:4): “If his master gives him a wife and she bears him sons or daughters, the wife and her children shall be her master's, and he shall go out alone.”",
   "Selling daughters into servitude (Exodus 21:7–8): “When a man sells his daughter as a slave, she shall not go out as the male slaves do. If she does not please her master, who has designated her for himself, then he shall let her be redeemed. He shall have no right to sell her to a foreign people, since he has broken faith with her.” (Plus women and children of conquered cities taken as war-plunder.)"],
  ["Leviticus 25:44–46","Exodus 21:4, 7–8, 20–21"],
  [
   N(AV('sklaverrei-befehele','https://discord.com/channels/1275832106949283962/1310616477887369306'),
    "As Christians we follow the New Testament, where Jesus and the Apostles abolished slavery.",
    "Four Pauline letters and 1 Peter explicitly uphold slavery, demand total obedience even to cruel masters, and tell slaves to serve believing masters even more eagerly.",
    "New Testament commands & Christian commentators",
    ["Ephesians 6:5–9: “Slaves, obey your earthly masters with fear and trembling, with a sincere heart, as you would Christ… knowing that whatever good anyone does, this he will receive back from the Lord, whether he is a bondservant or is free.” (Masters are told not to threaten, not to free them.)",
     "1 Timothy 6:1–2: “Let all who are under a yoke as slaves regard their own masters as worthy of all honour, so that the name of God and the teaching may not be reviled. Those who have believing masters must not be disrespectful on the ground that they are brothers; rather they must serve all the better since those who benefit by their good service are believers and beloved.”",
     "Titus 2:9–10: “Slaves are to be submissive to their own masters in everything; they are to be well-pleasing, not argumentative, not pilfering, but showing all good faith.”",
     "Colossians 3:22: “Slaves, obey in everything those who are your earthly masters, not by way of eye-service, as people-pleasers, but with sincerity of heart, fearing the Lord.”",
     "1 Peter 2:18–20 (Nestle-Aland) & commentators: “House-slaves, be subject in all fear to your masters, not only to the good and gentle, but also to the crooked/harsh…” Hilary of Arles (c. 449 CE, Introductory Commentary on 1 Peter 2:20) comments that those who deserve punishment receive no mercy from God if they perish; Cornelius a Lapide (p. 250) notes that being “tormented with blows” was a standard punishment for slaves, administered on the face or on the back."],
    ["Ephesians 6:5–9","1 Timothy 6:1–2","Titus 2:9–10","Colossians 3:22","1 Peter 2:18–20 (NA)","Hilary of Arles (c. 449) on 1 Pet 2:20","Cornelius a Lapide, p. 250"],
    [],
    {quotes:[
      {by:"1 Timothy 6:1–2",en:"Those who have believing masters must not respect them less because they are brothers, but serve them all the more eagerly.",ref:"1 Timothy 6:1–2"},
      {by:"Hilary of Arles (c. 449)",en:"Peter shows here that those who deserve punishment cannot expect mercy or grace from God when they perish.",ref:"Introductory Commentary on 1 Peter 2:20"}]})
  ],
  {facts:[["Old Testament","Lev 25:44–46 · Exod 21:4, 7–8, 20–21"],["New Testament","Eph 6 · 1 Tim 6 · Tit 2 · Col 3 · 1 Pet 2"],["Beating rule","No penalty if slave survives 1–2 days"],["Commentators","Hilary of Arles (449) & Lapide (p. 250)"]],
   quotes:[{by:"Exodus 21:20–21",en:"If he survives a day or two, it shall not be avenged; for the slave is his money.",ref:"Exodus 21:20–21"}],
   visual:{kind:'compare',
    left:{title:"Old Testament",items:["Lev 25:44–46: Buy non-Israelites as permanent inherited property","Exod 21:20–21: No penalty for fatal beating if slave lives 1–2 days","Exod 21:4, 7–8: Wife/children stay master's property; daughters sold as slaves"]},
    right:{title:"New Testament",items:["Eph 6:5–9 & Col 3:22: Obey earthly masters in everything as Christ","1 Tim 6:1–2: Serve believing masters even harder","Titus 2:9–10 & 1 Pet 2:18–20: Submit in all fear even to harsh masters"]}}}),
 sum:"Both Testaments codify slavery — Leviticus 25:44–46 and Exodus 21 regulate permanent ownership and beating, while five New Testament epistles command slaves to obey even harsh masters."});

/* 12. #sklaven-buch-augustinus */
card(S+'augustine-beating-primary-refs',{
 title:"Primary references in Augustine for beating slaves with rods",
 k:"Primary sources",
 blurb:"Seven exact critical-edition citations (PL, CCL, CSEL) across Augustine's Sermons, Psalms, Letters, City of God, John, and Confessions.",
 claim:"Claims that Augustine frequently discussed beating slaves with rods lack primary-source references.",
 tree:N(AV('sklaven-buch-augustinus','https://discord.com/channels/1275832106949283962/1376978504041758791'),
  "Critics just repeat secondary claims without citing where Augustine himself speaks of beating slaves with rods.",
  "Beating with the rod/stick (verberare / virga) was the most frequently mentioned form of slave punishment in Augustine's own corpus — attested across seven distinct works in standard Latin critical editions (Patrologia Latina, Corpus Christianorum, and CSEL).",
  "Seven critical-edition citations in Augustine's works",
  ["Sermones: Sermones 199.2.3 (PL 38, 1028) and Sermones 161.9.9 (PL 38, 883).",
   "Expositions of the Psalms: Enarrationes in Psalmos 122.6 (CCL 40, 1819).",
   "Letters: Epistulae 185.6.21 (CSEL 57, 20).",
   "City of God: De civitate Dei XIX.16 (CSEL 40/2).",
   "Tractates on John & Confessions: In Johannis Evangelium Tractatus 10.9 (CCL 36, 105–106) and Confessiones IX.9.20 (CSEL 33, 214)."],
  ["Augustine, Sermones 199.2.3 (PL 38, 1028); 161.9.9 (PL 38, 883)","Enarrationes in Psalmos 122.6 (CCL 40, 1819)","Epistulae 185.6.21 (CSEL 57, 20)","De civitate Dei XIX.16 (CSEL 40/2)","In Johannis Evangelium Tractatus 10.9 (CCL 36, 105–106)","Confessiones IX.9.20 (CSEL 33, 214)"],
  [],
  {facts:[["Punishment","Beating with rod / stick"],["Sermons & Letters","Serm. 199, 161 · Ep. 185"],["Major works","City of God XIX.16 · Conf. IX.9.20"],["Editions","PL · CCL · CSEL"]],
   visual:{kind:'steps',items:[["Sermons & Letters","Sermones 199.2.3 (PL 38, 1028); 161.9.9 (PL 38, 883); Epistulae 185.6.21 (CSEL 57, 20)."],["Scriptural commentaries","Enarrationes in Psalmos 122.6 (CCL 40, 1819); In Johannis Evang. Tractatus 10.9 (CCL 36, 105–106)."],["Major treatises","De civitate Dei XIX.16 (CSEL 40/2); Confessiones IX.9.20 (CSEL 33, 214)."]]}}),
 sum:"Seven exact primary citations across Augustine's Sermons, Letters, Psalms, John, City of God, and Confessions confirm rod-beating as his most frequently mentioned slave punishment."});

})();
