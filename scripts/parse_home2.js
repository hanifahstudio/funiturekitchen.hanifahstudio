// Deep parse of Kitchnox HTML: nav, footer, colors, lists
const fs = require('fs');
const html = fs.readFileSync('/home/z/my-project/scripts/kitchnox_home.html', 'utf8');

// Find nav menu (look for header area)
console.log('=== HEADER MENU LINKS ===');
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i) || html.match(/main-header[\s\S]{0,8000}/i);
if (headerMatch) {
  const itemRe = /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let n;
  const seen = new Set();
  while ((n = itemRe.exec(headerMatch[0])) !== null) {
    const text = n[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (text && !seen.has(text + n[1])) {
      seen.add(text + n[1]);
      console.log(`${text} -> ${n[1].replace('https://july.finestwp.com/newwp/kitchnox', '')}`);
    }
  }
}

// Footer
console.log('\n=== FOOTER ===');
const footMatch = html.match(/<footer[\s\S]*?<\/footer>/i) || html.match(/main-footer[\s\S]{0,12000}/i);
if (footMatch) {
  const itemRe = /<(h3|h4|h5|a|li|p)[^>]*>([\s\S]*?)<\/\1>/gi;
  let n;
  const seen = new Set();
  while ((n = itemRe.exec(footMatch[0])) !== null) {
    const text = n[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (text && text.length < 150 && !seen.has(text)) {
      seen.add(text);
      console.log(`<${n[1]}> ${text}`);
    }
  }
}

// Colors from inline styles / CSS links
console.log('\n=== CSS FILES ===');
const cssRe = /<link[^>]*rel=['"]stylesheet['"][^>]*href=['"]([^'"]+)['"]/gi;
let c;
while ((c = cssRe.exec(html)) !== null) {
  if (c[1].includes('kitchnox')) console.log(c[1]);
}

// Buttons/labels
console.log('\n=== SMALL LABELS (section tags) ===');
const labelRe = /<span[^>]*class="[^"]*(tagline|sec-title_tagline|sub-title)[^"]*"[^>]*>([\s\S]*?)<\/span>/gi;
let l;
while ((l = labelRe.exec(html)) !== null) {
  const text = l[2].replace(/<[^>]*>/g, '').trim();
  if (text) console.log(text);
}

// Feature list items (about section checklist)
console.log('\n=== LIST ITEMS ===');
const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
const seenLi = new Set();
let li;
let count = 0;
while ((li = liRe.exec(html)) !== null && count < 50) {
  const text = li[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (text && text.length > 3 && text.length < 100 && !seenLi.has(text)) {
    seenLi.add(text);
    console.log(text);
    count++;
  }
}

// Counters
console.log('\n=== COUNTERS ===');
const cntRe = /<span[^>]*class="[^"]*count-text[^"]*"[^>]*>([\s\S]*?)<\/span>|data-to="([^"]*)"/gi;
while ((c = cntRe.exec(html)) !== null) {
  const val = (c[1] || c[2] || '').replace(/<[^>]*>/g, '').trim();
  if (val) console.log(val);
}
