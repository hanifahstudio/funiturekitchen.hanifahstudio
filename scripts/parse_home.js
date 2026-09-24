// Parse Kitchnox homepage HTML structure: sections, headings, text
const fs = require('fs');
const html = fs.readFileSync('/home/z/my-project/scripts/kitchnox_home.html', 'utf8');

// Extract headings
const headings = [];
const hRe = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
let m;
while ((m = hRe.exec(html)) !== null) {
  const text = m[2].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text) headings.push({ tag: m[1].toLowerCase(), text: text.substring(0, 120) });
}
console.log('=== HEADINGS ===');
headings.forEach(h => console.log(`${h.tag}: ${h.text}`));

// Extract section classes (top-level structure)
console.log('\n=== SECTIONS ===');
const secRe = /<section[^>]*class="([^"]*)"[^>]*>/gi;
while ((m = secRe.exec(html)) !== null) {
  console.log('section.' + m[1]);
}

// Main nav menu items
console.log('\n=== NAV MENU ===');
const navMatch = html.match(/<ul[^>]*class="[^"]*main-menu[^"]*"[^>]*>([\s\S]*?)<\/ul>/i);
if (navMatch) {
  const itemRe = /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let n;
  const seen = new Set();
  while ((n = itemRe.exec(navMatch[1])) !== null) {
    const text = n[2].replace(/<[^>]*>/g, '').trim();
    if (text && !seen.has(text)) { seen.add(text); console.log(`${text} -> ${n[1].replace('https://july.finestwp.com/newwp/kitchnox', '')}`); }
  }
}

// Body text paragraphs
console.log('\n=== PARAGRAPHS ===');
const pRe = /<p[^>]*>([\s\S]*?)<\/p>/gi;
const paras = [];
while ((m = pRe.exec(html)) !== null) {
  const text = m[1].replace(/<[^>]*>/g, ' ').replace(/&#\d+;/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length > 20) paras.push(text.substring(0, 200));
}
paras.slice(0, 40).forEach((p, i) => console.log(`P${i + 1}: ${p}`));
