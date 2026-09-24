// Debug icon URLs via in-page fetch after challenge passes
const { chromium } = require('playwright');

async function passChallenge(page, url) {
  try { await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }); } catch (e) {}
  for (let i = 0; i < 45; i++) {
    let title = '';
    try { title = await page.title(); } catch (e) { await page.waitForTimeout(2000); continue; }
    if (!title.includes('One moment') && title.trim() !== '') return true;
    await page.waitForTimeout(2000);
  }
  return false;
}

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--disable-blink-features=AutomationControlled', '--no-sandbox', '--disable-dev-shm-usage'] });
  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 }, locale: 'en-US',
  });
  await ctx.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    Object.defineProperty(navigator, 'appVersion', { get: () => '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' });
    Object.defineProperty(window, 'outerWidth', { get: () => 1440 });
    Object.defineProperty(window, 'outerHeight', { get: () => 900 });
  });
  const page = await ctx.newPage();
  let passed = false;
  try { passed = await passChallenge(page, 'https://july.finestwp.com/newwp/kitchnox/'); } catch (e) { console.log('challenge err:', e.message); }
  console.log('passed:', passed);
  await page.waitForTimeout(6000);

  const result = await page.evaluate(async () => {
    const urls = [
      'https://july.finestwp.com/newwp/kitchnox/wp-content/themes/kitchnox/assets/images/icons/icon-1.png',
      'https://july.finestwp.com/newwp/kitchnox/wp-content/uploads/2024/08/icon-20.png',
      'https://july.finestwp.com/newwp/kitchnox/wp-content/uploads/2024/08/icon-21.png',
    ];
    const out = [];
    for (const u of urls) {
      try {
        const r = await fetch(u);
        const b = await r.arrayBuffer();
        const head = new TextDecoder().decode(new Uint8Array(b).slice(0, 60));
        out.push(u.split('/').pop() + ' status=' + r.status + ' type=' + r.headers.get('content-type') + ' size=' + b.byteLength + ' head=' + head.substring(0, 20));
      } catch (e) { out.push(u.split('/').pop() + ' ERR ' + e.message); }
    }
    return out;
  });
  console.log(result.join('\n'));
  await browser.close();
})();
