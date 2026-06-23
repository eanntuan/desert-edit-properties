import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const OUT_DIR   = path.join(__dirname, 'output', 'previews');

fs.mkdirSync(OUT_DIR, { recursive: true });

// ── helpers ───────────────────────────────────────────────────────────────────

function toBase64(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const buf  = fs.readFileSync(filePath);
  const ext  = path.extname(filePath).slice(1).toLowerCase();
  const mime = ext === 'webp' ? 'image/webp' : ext === 'png' ? 'image/png' : 'image/jpeg';
  return `data:${mime};base64,${buf.toString('base64')}`;
}

function resolveImage(mediaUrl) {
  const rel  = mediaUrl.replace('https://indigopalm.co/', '');
  const base = rel.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  for (const ext of ['.webp', '.jpg', '.jpeg', '.png']) {
    const candidate = path.join(REPO_ROOT, base + ext);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function titleFontSize(title) {
  if (title.length < 30) return 82;
  if (title.length < 50) return 72;
  if (title.length < 70) return 60;
  return 50;
}

function shortDescription(desc) {
  const stripped = desc.replace(/https?:\/\/\S+/g, '').trim();
  const first = stripped.split('. ')[0];
  return first.length > 120 ? first.slice(0, 117) + '...' : first;
}

function escHtml(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function parseCSV(text) {
  const rows = [];
  let headers = null;
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;
    const fields = [];
    let cur = '', inQuote = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') { inQuote = !inQuote; }
      else if (ch === ',' && !inQuote) { fields.push(cur); cur = ''; }
      else cur += ch;
    }
    fields.push(cur);
    if (!headers) { headers = fields; continue; }
    const obj = {};
    headers.forEach((h, i) => obj[h] = fields[i] || '');
    rows.push(obj);
  }
  return rows;
}

// ── assets ────────────────────────────────────────────────────────────────────

const logoSrc = toBase64(path.join(REPO_ROOT, 'android-chrome-512x512.png'))
             || toBase64(path.join(REPO_ROOT, 'images', 'logo-icon.png'))
             || '';

const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

const offlineTemplate = template; // keep Google Fonts link — requires network

const BOARD_COLORS = {
  'Vacation Rental Design':       '#B67550',
  'Desert Getaways':              '#6B8E7A',
  'Coachella Accommodation':      '#C4783B',
  'Vacation Rental Host Tips':    '#7A6B8E',
  'Palm Springs Travel Guide':    '#4A7FA5',
  'Coachella Valley Local Guide': '#8E6B4A',
};

// ── generate ──────────────────────────────────────────────────────────────────

const csvText = fs.readFileSync(path.join(REPO_ROOT, 'pinterest_master_upload.csv'), 'utf8');
const pins    = parseCSV(csvText);

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  headless: 'new',
  executablePath: fs.existsSync(chromePath) ? chromePath : puppeteer.executablePath(),
});

const page = await browser.newPage();
await page.setViewport({ width: 1000, height: 1500, deviceScaleFactor: 1 });

const results = [];

for (let i = 0; i < pins.length; i++) {
  const pin    = pins[i];
  const num    = String(i + 1).padStart(2, '0');
  const slug   = `pin-${num}`;
  const imgPath = resolveImage(pin.media_url);
  const heroSrc = imgPath ? toBase64(imgPath) : null;

  if (!heroSrc) console.warn(`  ⚠ Pin ${i+1}: image not found → ${pin.media_url}`);

  const subtitle    = shortDescription(pin.description);
  const accentColor = BOARD_COLORS[pin.board] || '#B67550';

  let html = offlineTemplate
    .replace('{{HERO_IMAGE}}',  heroSrc || '')
    .replace('{{LOGO_SRC}}',    logoSrc)
    .replace('{{TITLE}}',       escHtml(pin.title))
    .replace('{{SUBTITLE}}',    escHtml(subtitle))
    .replace('{{TITLE_SIZE}}',  titleFontSize(pin.title))
    .replace(/#B67550/g,        accentColor);

  await page.setContent(html, { waitUntil: 'load', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);

  const pngPath = path.join(OUT_DIR, `${slug}.png`);
  await page.screenshot({ path: pngPath, type: 'png', clip: { x:0, y:0, width:1000, height:1500 } });

  results.push({ slug, num: i+1, title: pin.title, board: pin.board, link: pin.link });
  process.stdout.write(`  [${num}/24] ${pin.title.slice(0,50)}\n`);
}

await browser.close();

// ── index.html ────────────────────────────────────────────────────────────────

const cards = results.map(({ slug, num, title, board, link }) => {
  const color = BOARD_COLORS[board] || '#B67550';
  return `
  <div class="card">
    <a href="${slug}.png" target="_blank">
      <img src="${slug}.png" alt="${escHtml(title)}" loading="lazy">
    </a>
    <div class="meta">
      <span class="board-tag" style="background:${color};">${escHtml(board)}</span>
      <p class="pin-num">#${num}</p>
      <p class="pin-title">${escHtml(title)}</p>
      <a href="${link}" target="_blank" class="pin-link">${link.replace('https://indigopalm.co','indigopalm.co')}</a>
    </div>
  </div>`;
}).join('');

const boardSummary = Object.entries(
  results.reduce((acc, r) => { acc[r.board] = (acc[r.board]||0)+1; return acc; }, {})
).map(([b, n]) => `<span class="btag" style="background:${BOARD_COLORS[b]||'#888'};">${b} (${n})</span>`).join('');

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Pinterest Pin Previews — Indigo Palm</title>
<style>
  body { font-family:-apple-system,sans-serif; background:#f5f2ed; margin:0; padding:32px 24px; }
  h1   { font-family:Georgia,serif; font-size:32px; font-weight:400; color:#1E1E1E; margin:0 0 6px; }
  .sub { color:#888; font-size:14px; margin-bottom:16px; }
  .boards { margin-bottom:28px; }
  .btag { display:inline-block; margin:3px 6px 3px 0; padding:4px 12px; border-radius:20px; font-size:11px; font-weight:600; color:#fff; text-transform:uppercase; letter-spacing:0.05em; }
  .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:20px; }
  .card { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.08); }
  .card img { width:100%; display:block; }
  .meta { padding:12px 14px 16px; }
  .board-tag { display:inline-block; font-size:10px; font-weight:600; color:#fff; padding:2px 8px; border-radius:10px; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:8px; }
  .pin-num   { font-size:11px; color:#bbb; margin:0 0 4px; }
  .pin-title { font-size:12px; color:#1E1E1E; font-weight:500; line-height:1.45; margin:0 0 6px; }
  .pin-link  { font-size:11px; color:#B67550; text-decoration:none; word-break:break-all; }
  .pin-link:hover { text-decoration:underline; }
</style>
</head>
<body>
  <h1>Pinterest Pin Previews</h1>
  <p class="sub">${results.length} pins — click any image to open full size (1000×1500)</p>
  <div class="boards">${boardSummary}</div>
  <div class="grid">${cards}</div>
</body>
</html>`;

fs.writeFileSync(path.join(OUT_DIR, 'index.html'), indexHtml, 'utf8');
console.log(`\nDone → ${OUT_DIR}/index.html`);
