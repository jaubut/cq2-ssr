# BYQ Supply sources

Design base for the 2026 revival. Licensed via Tech Lab Studio's BYQ Supply account —
private client/own-project use only; no resale or redistribution of the components themselves.

| BYQ item | Name | Used in | What was taken |
|---|---|---|---|
| `terra-tory-bento-1` | Sustainable Impact Bento Grid | `src/components/Bento.astro`, `src/styles/global.css` | 4→2→1 col grid, 16px cards, 32px padding, stat/label/display type scale (48px / 92% / -0.04em), dashed divider, accent card with dashed circle, scroll-into reveal, `#15190d` ink, `#eaece4` card, `#f6d987` accent |
| `terra-tory-hero-1` | Hero (full-viewport, staggered headline) | `src/components/Hero.tsx` | 100vh layout, staggered word entrance (80ms, IntersectionObserver), inline rule between words, two dashed circles, pill CTA with slide-up hover, responsive type steps (112/72/64/14vw) |

Not used: `terra-tory-tabs-1` (no tabbed content in the legacy site).

Adaptations: LT Superior → Inter Tight (Google Fonts); BYQ stock imagery/video replaced by Chanvre Québec's own photos
(legacy `static/`); palette merged with the legacy brand colours `#f8f3eb` (paper), `#4f5d56` (sage), `#cb5a44` (clay).
