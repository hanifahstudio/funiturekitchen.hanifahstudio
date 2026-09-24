// Download all needed Kitchnox images through the challenge-passed browser session
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUT = '/home/z/my-project/public/images';
const UP = 'https://july.finestwp.com/newwp/kitchnox/wp-content/uploads/2024/08/';
const UP10 = 'https://july.finestwp.com/newwp/kitchnox/wp-content/uploads/2024/10/';
const TH = 'https://july.finestwp.com/newwp/kitchnox/wp-content/themes/kitchnox/assets/images/';

const FILES = [
  // hero + sections
  { url: UP + 'banner-1.jpg', name: 'banner-1.jpg' },
  { url: UP + 'about-1.jpg', name: 'about-1.jpg' },
  { url: UP + 'about-6.jpg', name: 'about-6.jpg' },
  { url: UP + 'consultation-1.jpg', name: 'consultation-1.jpg' },
  { url: UP + 'video-1.jpg', name: 'video-1.jpg' },
  { url: UP + 'transforming-1.png', name: 'transforming-1.png' },
  // projects
  { url: UP + 'project-1.jpg', name: 'project-1.jpg' },
  { url: UP + 'project-2.jpg', name: 'project-2.jpg' },
  { url: UP + 'project-3.jpg', name: 'project-3.jpg' },
  { url: UP + 'project-4.jpg', name: 'project-4.jpg' },
  { url: UP + 'project-32.jpg', name: 'project-32.jpg' },
  { url: UP + 'project-33.jpg', name: 'project-33.jpg' },
  { url: UP + 'project-34.jpg', name: 'project-34.jpg' },
  { url: UP + 'project-35.jpg', name: 'project-35.jpg' },
  { url: UP + 'project-36.jpg', name: 'project-36.jpg' },
  { url: UP + 'project-37.jpg', name: 'project-37.jpg' },
  { url: UP + 'project-38.jpg', name: 'project-38.jpg' },
  { url: UP + 'project-39.jpg', name: 'project-39.jpg' },
  // news
  { url: UP + 'news-13.jpg', name: 'news-13.jpg' },
  { url: UP + 'news-14.jpg', name: 'news-14.jpg' },
  { url: UP + 'news-15.jpg', name: 'news-15.jpg' },
  { url: UP10 + 'news-7.jpg', name: 'news-7.jpg' },
  { url: UP10 + 'news-9.jpg', name: 'news-9.jpg' },
  { url: UP10 + 'news-10.jpg', name: 'news-10.jpg' },
  { url: UP10 + 'news-11.jpg', name: 'news-11.jpg' },
  { url: UP10 + 'news-12.jpg', name: 'news-12.jpg' },
  // testimonials + team
  { url: UP + 'testimonial-1.png', name: 'testimonial-1.png' },
  { url: UP + 'testimonial-2.png', name: 'testimonial-2.png' },
  { url: UP + 'testimonial-3.png', name: 'testimonial-3.png' },
  { url: UP + 'team-1.jpg', name: 'team-1.jpg' },
  { url: UP + 'team-2.jpg', name: 'team-2.jpg' },
  { url: UP + 'team-3.jpg', name: 'team-3.jpg' },
  { url: UP + 'team-4.jpg', name: 'team-4.jpg' },
  // page title bg
  { url: TH + 'background/page-title.jpg', name: 'page-title.jpg' },
  // icons
  ...[1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 19, 20, 21, 22, 23, 31, 32, 33, 55].map(i => ({
    url: TH + 'icons/icon-' + i + '.png', name: 'icon-' + i + '.png',
  })),
];

async function passChallenge(page, url) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  } catch (e) { console.log('goto err:', e.message.substring(0, 60)); }
  for (let i = 0; i < 45; i++) {
    let title = '';
    try { title = await page.title(); } catch (e) {}
    if (!title.includes('One moment') && title.trim() !== '') return true;
    await page.waitForTimeout(2000);
  }
  return false;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
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

  const ok = await passChallenge(page, 'https://july.finestwp.com/newwp/kitchnox/');
  console.log('challenge passed:', ok, '| title:', await page.title());
  await page.waitForTimeout(5000);

  let success = 0, failed = [];
  for (const f of FILES) {
    const dest = path.join(OUT, f.name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 20000) { success++; continue; }
    try {
      const resp = await ctx.request.get(f.url, { timeout: 30000 });
      const buf = await resp.body();
      // check it's a real image (not challenge HTML)
      if (buf.length > 5000 && !(buf.slice(0, 100).toString().includes('<!DOCTYPE'))) {
        fs.writeFileSync(dest, buf);
        success++;
        process.stdout.write('.');
      } else {
        failed.push(f.name + ' (' + buf.length + 'b html?)');
        // retry once after delay
        await page.waitForTimeout(1500);
        const r2 = await ctx.request.get(f.url, { timeout: 30000 });
        const b2 = await r2.body();
        if (b2.length > 5000 && !(b2.slice(0, 100).toString().includes('<!DOCTYPE'))) {
          fs.writeFileSync(dest, b2);
          failed.pop(); success++;
        }
      }
    } catch (e) {
      failed.push(f.name + ' err:' + e.message.substring(0, 40));
    }
  }
  console.log('\nDownloaded:', success, '| Failed:', failed.length);
  if (failed.length) console.log('FAILED:', failed.join(', '));

  await browser.close();
})();
