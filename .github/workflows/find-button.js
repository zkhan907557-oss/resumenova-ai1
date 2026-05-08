const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (file.includes('node_modules') || file.includes('.next')) return;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Look for a <button that contains a nested <button
      // This is a naive check but might help find the file.
      let i = 0;
      let openButtons = 0;
      let regex = /<\/?button\b/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        if (match[0].startsWith('</')) {
            openButtons--;
        } else {
            if (openButtons > 0) {
                results.push(file);
                break;
            }
            openButtons++;
        }
        if(openButtons < 0) openButtons = 0;
      }
    }
  });
  return results;
}
console.log(walk('e:/web site/src'));
