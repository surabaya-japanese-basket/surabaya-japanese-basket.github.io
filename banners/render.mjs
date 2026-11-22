// 配布用バナーと OGP 画像を public/banners/ に書き出す。
//   node banners/render.mjs
// 前提: devDependencies (playwright, qrcode) と Chromium (`npx playwright install chromium`)。
// 文言を変えたいときは banners/template.html を編集して再実行する。
import { chromium } from 'playwright';
import QRCode from 'qrcode';
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://surabaya-japanese-basket.github.io/';
const URL_SHORT = SITE.replace(/^https:\/\//, '').replace(/\/$/, '');

const targets = [
  { layout: 'og', file: 'ogp.png', width: 1200, height: 630 },
  { layout: 'square', file: 'banner-square.png', width: 1080, height: 1080 },
  { layout: 'story', file: 'banner-story.png', width: 1080, height: 1920 },
];

const template = await readFile(path.join(root, 'banners/template.html'), 'utf8');
const qr = await QRCode.toString(SITE, {
  type: 'svg',
  margin: 0,
  errorCorrectionLevel: 'M',
  color: { dark: '#14201a', light: '#ffffff' },
});

const outDir = path.join(root, 'public/banners');
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
for (const t of targets) {
  const html = template
    .replace('{{LAYOUT}}', t.layout)
    .replace('{{QR}}', qr)
    .replace('{{URL_SHORT}}', URL_SHORT);
  const ctx = await browser.newContext({ viewport: { width: t.width, height: t.height }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(outDir, t.file), clip: { x: 0, y: 0, width: t.width, height: t.height } });
  console.log('wrote', path.join('public/banners', t.file));
  await ctx.close();
}
await browser.close();
