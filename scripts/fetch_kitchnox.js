// Fetch Kitchnox demo site with stealth settings to bypass bot check
const { chromium } = require('playwright');

const PAGES = [
  { url: 'https://july.finestwp.com/newwp/kitchnox/', name: 'home' },
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox',
      '--disable-dev-shm-usage',
    ],
  });

  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
    javaScriptEnabled: true,
  });

  // Hide webdriver + headless markers before any page script runs
  await ctx.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    Object.defineProperty(navigator, 'appVersion', {
      get: () => '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    });
    // Keep REAL PluginArray/MimeTypeArray (spoofing them triggers detection).
    Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
    Object.defineProperty(navigator, 'language', { get: () => 'en-US' });
    Object.defineProperty(window, 'outerWidth', { get: () => 1440 });
    Object.defineProperty(window, 'outerHeight', { get: () => 900 });
    window.chrome = { runtime: {} };
  });

  const page = await ctx.newPage();

  for (const p of PAGES) {
    console.log('Navigating to', p.url);
    try {
      await page.goto(p.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    } catch (e) {
      console.log('goto error (continuing):', e.message);
    }

    // Wait for the challenge to resolve - loop up to 90s checking title
    let passed = false;
    for (let i = 0; i < 45; i++) {
      let title = '';
      try { title = await page.title(); } catch (e) {}
      if (!title.includes('One moment') && title.trim() !== '') {
        console.log('Challenge passed. Title:', title);
        passed = true;
        break;
      }
      await page.waitForTimeout(2000);
    }
    if (!passed) console.log('WARNING: challenge may not have passed');

    // Give the real page time to fully load after redirect
    await page.waitForTimeout(10000);
    try {
      await page.waitForLoadState('networkidle', { timeout: 25000 });
    } catch (e) {}
    await page.waitForTimeout(5000);

    const finalTitle = await page.title();
    const finalUrl = page.url();
    console.log('Final title:', finalTitle, '| URL:', finalUrl);

    let html = '';
    for (let i = 0; i < 5; i++) {
      try {
        html = await page.content();
        break;
      } catch (e) {
        console.log('content retry', i + 1, e.message);
        await page.waitForTimeout(3000);
      }
    }
    require('fs').writeFileSync(`/home/z/my-project/scripts/kitchnox_${p.name}.html`, html);
    console.log('Saved HTML length:', html.length);

    // Extract all links
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a')).map(a => ({
        href: a.href, text: (a.innerText || '').trim().substring(0, 80),
      }));
    });
    require('fs').writeFileSync(`/home/z/my-project/scripts/kitchnox_${p.name}_links.json`, JSON.stringify(links, null, 2));

    // Extract all image URLs
    const imgs = await page.evaluate(() => {
      const urls = new Set();
      document.querySelectorAll('img').forEach(img => {
        if (img.src) urls.add(img.src);
        if (img.dataset.src) urls.add(img.dataset.src);
        if (img.dataset.lazySrc) urls.add(img.dataset.lazySrc);
      });
      // background images
      document.querySelectorAll('*').forEach(el => {
        const bg = getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none') {
          const m = bg.match(/url\(["']?([^"')]+)["']?\)/);
          if (m) urls.add(m[1]);
        }
      });
      return Array.from(urls);
    });
    require('fs').writeFileSync(`/home/z/my-project/scripts/kitchnox_${p.name}_images.json`, JSON.stringify(imgs, null, 2));
    console.log('Images found:', imgs.length);
  }

  // Also take a screenshot
  try {
    await page.screenshot({ path: '/home/z/my-project/scripts/kitchnox_home.png', fullPage: true });
    console.log('Screenshot saved');
  } catch (e) { console.log('screenshot error:', e.message); }

  await browser.close();
})();
