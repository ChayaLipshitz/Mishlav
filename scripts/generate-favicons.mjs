import sharp from 'sharp';
import { mkdir } from 'fs/promises';

const sizes = [48, 96, 192, 512];
const source = 'public/logo.png';

await mkdir('public', { recursive: true });

for (const size of sizes) {
  await sharp(source)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(`public/favicon-${size}.png`);
}

// Default favicon used by browsers and Google
await sharp(source)
  .resize(48, 48, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toFile('public/favicon.png');

await sharp(source)
  .resize(180, 180, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('Favicons generated.');
