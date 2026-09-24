// Fetch subpages + color.css from Kitchnox with the same stealth approach
const { chromium } = require('playwright');
const fs = require('fs');

const SUBPAGES = [
  { url: 'https://july.finestwp.com/newwp/kitchnox/about-us/', name: 'about' },
  { url: 'https://july.finestwp.com/newwp/kitchnox/all-service-01/', name: 'services' },
  { url: 'https://july.finestwp.com/newwp/kitchnox/projects-01/', name: 'projects' },
  { url: 'https://july.finestwp.com/newwp/kitchnox/contact-us/', name: 'contact' },
  { url: 'https://july.finestwp.com/newwp/kitchnox/blog-grid/', name: 'blog' },
  { url: 'https://july.finestwp.com/newwp/kitchnox/faqs/', name: 'faqs' },
];

const CSS = [
  'https://july.finestwp.com/newwp/kitchnox/wp-content/themes/kitchnox/assets/css/color.css',
  'https://july.finestwp.com/newwp/kitchnox/wp-content/themes/kitchnox/assets/css/style.css',
];

async function passChallenge(page, url) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  } catch (e) { console.log('goto err:', e.message.substring(0, 80)); }
  for (let i = 0; i < 40; i++) {
    let title = '';
    try { title = await page.title(); } catch (e) {}
    if (!title.includes('One moment') && title.trim() !== '') return true;
    await page.waitForTimeout(2000);
  }
  return false;
}

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-blink-features=AutomationControlled', '--no-sandbox', '--disable-dev-shm-usage'],
  });
  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
  });
  await ctx.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    Object.defineProperty(navigator, 'appVersion', {
      get: () => '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    });
    Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
    Object.defineProperty(navigator, 'language', { get: () => 'en-US' });
    Object.defineProperty(window, 'outerWidth', { get: () => 1440 });
    Object.defineProperty(window, 'outerHeight', { get: () => 900 });
    window.chrome = { runtime: {} };
  });
  const page = await ctx.newPage();

  // Pass challenge once on homepage to get cookies
  await passChallenge(page, 'https://july.finestwp.com/newwp/kitchnox/');
  await page.waitForTimeout(6000);
  console.log('Home title now:', await page.title());

  // Fetch CSS files via browser context (cookies apply)
  for (const cssUrl of CSS) {
    try {
      const resp = await ctx.request.get(cssUrl);
      const body = await resp.text();
      const fname = '/home/z/my-project/scripts/' + cssUrl.split('/').pop().split('?')[0];
      fs.writeFileSync(fname, body);
      console.log('CSS saved:', fname, body.length);
    } catch (e) { console.log('css err:', e.message.substring(0, 80)); }
  }

  // Subpages
  for (const p of SUBPAGES) {
    console.log('\n--- fetching', p.name);
    const ok = await passChallenge(page, p.url);
    await page.waitForTimeout(7000);
    try { await page.waitForLoadState('networkidle', { timeout: 15000 }); } catch (e) {}
    let html = '';
    for (let i = 0; i < 5; i++) {
      try { html = await page.content(); break; } catch (e) { await page.waitForTimeout(3000); }
    }
    fs.writeFileSync(`/home/z/my-project/scripts/kitchnox_${p.name}.html`, html);
    console.log(p.name, 'title:', await page.title(), 'len:', html.length);
    try {
      await page.screenshot({ path: `/home/z/my-project/scripts/kitchnox_${p.name}.png`, fullPage: true });
    } catch (e) {}
  }

  await browser.close();
  console.log('\nDONE');
})();
