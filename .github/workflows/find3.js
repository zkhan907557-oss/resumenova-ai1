const fs = require('fs');
const content = fs.readFileSync('e:/web site/src/app/builder/page.tsx', 'utf8');

let idx = 0;
while (true) {
    idx = content.indexOf('<button', idx);
    if (idx === -1) break;
    
    let closeIdx = content.indexOf('</button>', idx);
    let nextBtnIdx = content.indexOf('<button', idx + 7);
    
    if (nextBtnIdx !== -1 && nextBtnIdx < closeIdx) {
        console.log('FOUND NESTED BUTTON!');
        console.log(content.substring(idx, closeIdx + 9));
    }
    idx += 7;
}
