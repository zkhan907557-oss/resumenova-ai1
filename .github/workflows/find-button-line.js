const fs = require('fs');

const file = 'e:/web site/src/app/builder/page.tsx';
const content = fs.readFileSync(file, 'utf8');

let lines = content.split('\n');
let openButtons = 0;
let regex = /<\/?button\b/g;

lines.forEach((line, i) => {
    let match;
    while ((match = regex.exec(line)) !== null) {
        if (match[0].startsWith('</')) {
            openButtons--;
        } else {
            if (openButtons > 0) {
                console.log('Nested button found at line:', i + 1);
                console.log('Line content:', line);
            }
            openButtons++;
        }
    }
});
