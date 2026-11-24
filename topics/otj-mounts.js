/* Jesus in the OT: show the existing related cards inside the new folder too (same node, so later enhancements show everywhere). */
(()=>{
const {mount}=window.OTJ;
[
 ['christianity/trinity/ot-trinity/isaiah-7-14-immanuel','isaiah-7-14'],
 ['christianity/trinity/ot-trinity/isaiah-9-6-mighty-god','isaiah-9-6'],
 ['christianity/trinity/ot-trinity/psalm-22-pierced-hands-and-feet','psalm-22'],
 ['christianity/trinity/ot-trinity/zechariah-12-10-pierced','zechariah-12-10'],
 ['christianity/trinity/ot-trinity/genesis-3-15-protoevangelium','genesis-3-15'],
 ['christianity/trinity/ot-trinity/son-of-man-daniel-7-gospels','daniel-7-son-of-man'],
 ['christianity/jesus/d-ia-messianic-prophecies/t-isaiah-53-islamic-prophecy','isaiah-53-islamic-reading'],
 ['christianity/jesus/d-ia-messianic-prophecies/t-pinned','double-standard'],
 ['christianity/bible/contradictions/judas-jeremiah-misattribution','thirty-pieces-of-silver'],
 ['christianity/bible/contradictions/nt-quotes-nonexistent-ot-verses','phantom-prophecies'],
 ['christianity/trinity/ot-trinity','trinity-in-the-ot']
].forEach(([from,key])=>mount(from,key));
})();
