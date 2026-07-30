#!/usr/bin/env node
/**
 * Recorta imágenes de los mockups de Mavila (img_desing/Home.png 1024x1536).
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = 'img_desing/Home.png';
const OUT_LOGOS = 'public/images/logos';
const OUT_WORK = 'public/images/work';

await mkdir(OUT_LOGOS, { recursive: true });
await mkdir(OUT_WORK, { recursive: true });

async function removeDarkBackground(inputBuffer) {
  const img = sharp(inputBuffer);
  const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const output = Buffer.from(data);
  for (let i = 0; i < output.length; i += channels) {
    const r = output[i], g = output[i + 1], b = output[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    if (max < 90 && (max - min) < 35) output[i + 3] = 0;
  }
  return sharp(output, { raw: { width, height, channels: 4 } }).png().toBuffer();
}

// ── TRUST BAND (y=555-605) ─────────────────────────────
const logos = [
  { name: 'starbucks.png',   left: 75,  top: 555, width: 200, height: 50 },
  { name: 'kwema.png',       left: 250, top: 558, width: 130, height: 45 },
  { name: 'interseguro.png', left: 380, top: 558, width: 150, height: 45 },
  { name: 'urbaner.png',     left: 530, top: 558, width: 170, height: 45 },
  { name: 'atlas.png',       left: 680, top: 555, width: 130, height: 50 },
  { name: 'delosi.png',      left: 815, top: 558, width: 140, height: 45 },
];
for (const l of logos) {
  const buf = await sharp(SRC).extract({ left: l.left, top: l.top, width: l.width, height: l.height }).png().toBuffer();
  const cleaned = await removeDarkBackground(buf);
  await sharp(cleaned).png().toFile(`${OUT_LOGOS}/${l.name}`);
  console.log(`✓ logos/${l.name}`);
}

// ── SELECTED WORK: SOLO el phone/dashboard (no la card entera) ──────────
// Crop más conservador, sin texto del card ni del card vecino
// Card 1 (Starbucks): phone café x=190-300, y=915-1010 (corto antes del "Modernizing")
// Card 2 (Kwema):     phone SOS x=440-555, y=915-1010
// Card 3 (Interseguro): dashboard x=640-860, y=920-1015
const work = [
  { name: 'starbucks-phone.png',  left: 190, top: 915, width: 110, height: 95 },
  { name: 'kwema-phone.png',      left: 440, top: 915, width: 115, height: 95 },
  { name: 'interseguro-dash.png', left: 640, top: 920, width: 220, height: 95 },
];
for (const w of work) {
  await sharp(SRC).extract({ left: w.left, top: w.top, width: w.width, height: w.height }).png().toFile(`${OUT_WORK}/${w.name}`);
  console.log(`✓ work/${w.name}`);
}

console.log('\nHecho.');
