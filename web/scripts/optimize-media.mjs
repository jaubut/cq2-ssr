// Builds web/public/ (gitignored) from the legacy ../static: photos → webp (1600w + 800w), videos → 720p H.264 + poster.
// Idempotent: skips outputs newer than their source. Runs before dev/build.
import { readdir, stat, mkdir, copyFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import sharp from 'sharp';

const SRC = path.resolve(import.meta.dirname, '../../static');
const VIDEO = path.resolve(import.meta.dirname, '../../assets/video');
const OUT = path.resolve(import.meta.dirname, '../public');

const fresh = async (src, out) => { try { return (await stat(out)).mtimeMs >= (await stat(src)).mtimeMs; } catch { return false; } };

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.name.startsWith('.')) continue;
    if (e.isDirectory()) yield* walk(p); else yield p;
  }
}

for await (const src of walk(SRC)) {
  const rel = path.relative(SRC, src);
  const out = path.join(OUT, rel);
  await mkdir(path.dirname(out), { recursive: true });
  if (/\.(jpe?g|png)$/i.test(src)) {
    for (const w of [1600, 800]) {
      const o = `${out}.${w}.webp`;
      if (!(await fresh(src, o))) await sharp(src).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 72 }).toFile(o);
    }
  } else if (!(await fresh(src, out))) await copyFile(src, out);
}

await mkdir(path.join(OUT, 'video'), { recursive: true });
for (const f of await readdir(VIDEO)) {
  if (!f.endsWith('.mp4')) continue;
  const src = path.join(VIDEO, f), out = path.join(OUT, 'video', f);
  if (await fresh(src, out)) continue;
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-vf', 'scale=-2:min(720\\,ih)', '-c:v', 'libx264', '-crf', '30', '-preset', 'slow', '-an', '-movflags', '+faststart', out]);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', '1', '-i', out, '-frames:v', '1', '-vf', 'scale=-2:720', out.replace(/\.mp4$/, '.jpg')]);
}
console.log('media ready →', OUT);
