import assert from 'node:assert/strict';
import {checkTranslation,chapters,words,evidence,paths} from './dist/rules.js';
assert.equal(words.length,paths.length);assert.equal(new Set(words).size,6);
for(let c=0;c<chapters.length;c++){
 assert.equal(checkTranslation(c,{}).complete,false);
 const correct=Object.fromEntries(words.map((w,i)=>[i,w]));
 assert.equal(checkTranslation(c,correct).correct,true);
 const wrong={...correct,[chapters[c].sentence[0]]:'death'};
 assert.equal(checkTranslation(c,wrong).correct,false);
 assert.equal(checkTranslation(c,wrong).complete,true);
}
assert.deepEqual([...new Set(evidence.flatMap(e=>e.examples.flatMap(x=>x.marks)))].sort(),[0,1,2,3,4,5]);
console.log('PASS: all three chapters accept the solution, reject wrong/incomplete answers, and all six marks have evidence.');
