// Image URLs point at the webp variants produced by scripts/optimize-media.mjs.
const photo = (src: string) => /\.(jpe?g|png)$/i.test(src);
export const img = (src: string, sizes = '(max-width: 479px) 100vw, (max-width: 991px) 50vw, 25vw') =>
  photo(src) ? { src: `${src}.1600.webp`, srcset: `${src}.800.webp 800w, ${src}.1600.webp 1600w`, sizes } : { src };
export const poster = (video: string) => video.replace(/\.mp4$/, '.jpg');
