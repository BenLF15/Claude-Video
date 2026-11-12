// Renders scene.html to PNG wallpapers: node render.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const size = 2732; // square: covers portrait + landscape + parallax zoom on iPad (A16)
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
  const file = 'file://' + path.join(__dirname, 'scene.html');
  for (const mode of ['lock', 'home']) {
    await page.goto(`${file}?mode=${mode}&size=${size}`, { waitUntil: 'commit', timeout: 180000 });
    await page.waitForFunction(() => document.title === 'done', null, { timeout: 120000 });
    const out = path.join(__dirname, '..', mode === 'lock' ? 'Hintergrund-Sperrbildschirm.png' : 'Hintergrund-Startbildschirm.png');
    await page.locator('#c').screenshot({ path: out });
    console.log('wrote', out);
  }
  await browser.close();
})();
