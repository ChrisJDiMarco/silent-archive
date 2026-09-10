export const meanings=['water','light','life','give','we','you','stone','death'];
export const words=['water','life','give','light','we','you'];
export const paths=[
'M6 10 Q10 3 14 10 T22 10 M6 17 Q10 10 14 17 T22 17 M6 24 Q10 17 14 24 T22 24',
'M14 28 V12 M14 19 Q3 19 5 7 Q15 7 14 19 M14 15 Q24 15 23 4 Q14 5 14 15',
'M5 8 H17 L12 3 M17 8 L12 13 M23 24 H11 L16 19 M11 24 L16 29',
'M14 8 V3 M14 29 V24 M5 16 H1 M27 16 H23 M5 7 L8 10 M20 22 L23 25 M5 25 L8 22 M20 10 L23 7 M20 16 A6 6 0 1 1 8 16 A6 6 0 1 1 20 16',
'M5 27 V11 Q5 5 10 5 Q15 5 15 11 V27 M11 27 V11 Q11 5 16 5 Q21 5 21 11 V27 M3 27 H24',
'M5 27 H23 M14 27 V12 M9 6 A5 5 0 1 1 19 6 A5 5 0 1 1 9 6 M7 18 L14 12 L21 18'
];
export const glyph=(id,cls='')=>`<span class="glyph ${cls}" aria-label="Alien mark ${id+1}"><svg viewBox="0 0 28 32" aria-hidden="true"><path d="${paths[id]}"/></svg></span>`;
export const chapters=[
{title:'A word for water.',description:'Nothing here is labeled for us. Start with what you can observe.',sentence:[0,1,2],context:'Etched around the rim of a vessel.',translation:'Water gives life.',hint:'The same flowing mark is inside the vessel and beside the irrigation channel. The sprouting mark appears wherever something grows.'},
{title:'What makes a world live?',description:'One mark has changed. The rest of the sentence is the same.',sentence:[3,1,2],context:'Carved into the sun-facing side of the archive.',translation:'Light gives life.',hint:'Compare the two garden inscriptions. One begins with the vessel’s mark; the other begins with the mark beneath the sun.'},
{title:'Who was this message for?',description:'Two unfamiliar marks. One final message. Someone expected you.',sentence:[4,5,0,2],context:'Hidden on the inner face of the threshold.',translation:'We give water to you.',hint:'The joined figures refer to the builders: we. The lone figure faces the visitor: you. Read giver → recipient → gift → action.'}
];
export const evidence=[
{title:'The vessel',description:'A channel carries liquid from a deep vessel to a dry seed bed. Wherever the liquid reaches, small green shoots emerge.',examples:[{marks:[0],label:'Inside the vessel'},{marks:[1],label:'Beside new shoots'}],note:'The long inscription follows the channel: vessel → growing bed → a repeated transfer mark.'},
{title:'The garden',description:'Two matching seed beds: one receives liquid, the other receives sunlight through a lens. Both grow. Their inscriptions differ by only the first mark.',examples:[{marks:[0,1,2],label:'Irrigated bed'},{marks:[3,1,2],label:'Sunlit bed'}],note:'A smaller drawing shows hands passing a bowl. The same final mark sits between the hands.'},
{title:'The threshold',description:'A relief shows the builders as joined figures, pointing toward themselves. Across the doorway, a lone figure stands exactly where a visitor would arrive.',examples:[{marks:[4],label:'The builders, pointing inward'},{marks:[5],label:'The arriving visitor'}],note:'A worn diagram orders the figures: giver → recipient → gift → action. The recipient is omitted when there is none.'}
];
export function checkTranslation(chapter,guesses){const ids=chapters[chapter].sentence;return {complete:ids.every(i=>Boolean(guesses[i])),correct:ids.every(i=>guesses[i]===words[i]),matches:ids.filter(i=>guesses[i]===words[i]).length,total:ids.length};}
