import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const IMG_DIR = new URL('../img/', import.meta.url).pathname;

const HERO_RESIZE = {
  file: 'capa.png',
  maxWidth: 1920
};

async function main() {
  const entries = await readdir(IMG_DIR, { withFileTypes: true });
  const images = entries.filter(
    (entry) => entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name)
  );

  for (const entry of images) {
    const srcPath = path.join(IMG_DIR, entry.name);
    const basename = entry.name.replace(/\.(png|jpe?g)$/i, '');
    const webpPath = path.join(IMG_DIR, `${basename}.webp`);

    let pipeline = sharp(srcPath);

    if (entry.name === HERO_RESIZE.file) {
      pipeline = pipeline.resize({ width: HERO_RESIZE.maxWidth, withoutEnlargement: true });
    }

    const info = await pipeline.webp({ quality: 80 }).toFile(webpPath);
    console.log(`${entry.name} -> ${basename}.webp (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}kb)`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
