// Adapted from BYQ terra-tory-hero-1 (layout, word stagger, dashed circles, pill hover) — see BYQ_SOURCES.md.
// Rendered at build time (no hydration): the stagger is a CSS keyframe, so text is visible without JS.
import type { CSSProperties } from 'react';
import { img } from '../media';

type Props = { words: string[]; image: string; cta: { href: string; label: string }; kicker: string };

const rise = (delay: number): { className: string; style: CSSProperties } => ({
  className: 'motion-safe:animate-[rise_.7s_var(--ease-out-soft)_both]',
  style: { animationDelay: `${delay}ms` },
});

export default function Hero({ words, image, cta, kicker }: Props) {
  return (
    <section className="relative flex items-end h-[100svh] min-h-[560px] overflow-hidden text-white">
      <img {...img(image, '100vw')} alt="" className="absolute inset-0 size-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/50 to-transparent pointer-events-none" />
      <div className="absolute rounded-full pointer-events-none outline outline-dashed outline-white/40 motion-safe:animate-[fade_1s_both] size-[1024px] -top-[478px] -left-[376px] max-[991px]:size-[550px] max-[991px]:-top-[144px] max-[991px]:-left-[173px] max-[479px]:size-[256px] max-[479px]:-top-[45px] max-[479px]:-left-[109px]" />
      <div className="absolute rounded-full pointer-events-none border border-dashed border-white/60 motion-safe:animate-[fade_1s_.3s_both] size-[256px] bottom-[277px] -right-[99px] max-[479px]:size-[156px] max-[479px]:bottom-[156px] max-[479px]:-right-[55px]" />
      <div className="relative w-full max-w-[1800px] mx-auto px-8 max-[479px]:px-4 pb-20 max-[991px]:pb-28 max-[479px]:pb-16">
        <div className="flex flex-col items-start gap-8">
          <p {...rise(0)} className={`label ${rise(0).className} [text-shadow:0_1px_8px_rgb(0_0_0/.5)]`}>{kicker}</p>
          <h1 className="flex flex-wrap max-w-[976px] gap-x-4 m-0">
            {words.map((w, i) =>
              w === '__line__' ? (
                <span key="line" aria-hidden style={rise(i * 80).style}
                  className={`${rise(0).className} my-auto h-1 w-[317px] max-[991px]:w-[220px] max-[479px]:w-[80px] bg-white/60`} />
              ) : (
                <span key={i} style={rise(i * 80).style}
                  className={`${rise(0).className} display text-[112px] max-[991px]:text-[72px] max-[767px]:text-[64px] max-[479px]:text-[14vw]`}>
                  {w}
                </span>
              ),
            )}
          </h1>
          <a href={cta.href} style={rise(560).style}
            className={`${rise(0).className} group inline-flex items-center min-h-11 rounded-[32px] bg-accent text-ink px-5 no-underline`}>
            <span className="h-6 overflow-hidden">
              <span className="flex flex-col transition-transform duration-[250ms] group-hover:-translate-y-6">
                {[0, 1].map((k) => (
                  <span key={k} aria-hidden={k === 1} className="flex h-6 items-center gap-2">
                    {cta.label}
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" aria-hidden>
                      <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                ))}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
