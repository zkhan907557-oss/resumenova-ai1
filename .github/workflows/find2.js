const fs = require('fs');
const path = require('path');

function checkFile(file) {
    const content = fs.readFileSync(file, 'utf8');
    const idx1 = content.indexOf('<button');
    if (idx1 !== -1) {
        const after = content.substring(idx1 + 7);
        const idx2 = after.indexOf('<button');
        const idxClose = after.indexOf('</button>');
        if (idx2 !== -1 && idxClose !== -1 && idx2 < idxClose) {
            console.log("Found in file: " + file);
        }
    }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (file.includes('node_modules') || file.includes('.next')) return;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      walk(file);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      checkFile(file);
    }
  });
}
walk('e:/web site/src');
