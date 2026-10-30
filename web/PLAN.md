# PLAN — « La plante » scroll story (prototype)

Status: **v2, revised after the Codex adversarial review** (`PLAN-codex.md`) · 2026-10-30 · branch `scroll-plant`, stacked on `revival` (PR #12)

## Goal
A pinned giant hemp plant. Scrolling down moves the camera *up* the plant, from the soil to the seeds.
Each part lights up, and a card explains its uses with a link to its page. This prototype uses placeholder SVG art with the real structure.

## Route
`/plante` is a standalone page, linked from the home page. It is not the home hero yet: a 7-screen story as the site's first
screen is a commitment we promote only once it's proven on a real iPhone.

## Story beats — single source: `src/components/plant/beats.ts`
Focal point `f` is in artboard units (400×1600; soil line y=1450). `z` = zoom relative to "full plant fits scene height".

| # | Beat (card) | Layers lit | f (x,y) | z | Link |
|---|---|---|---|---|---|
| 0 | Le chanvre, de la racine à la graine (intro + scroll hint) | soil | 200,1420 | 3.2 | none |
| 1 | Racines : sol régénéré (phytoremédiation, sans pesticides, carbone capté) | roots | 200,1520 | 2.6 | /lechanvre |
| 2 | Cœur de la tige (chènevotte) : béton de chanvre, isolant, blocs | stalk-core + cutaway(core) | 200,900 | 3.0 | /construction |
| 3 | Écorce (fibre libérienne) : tissus, cordages, composites | stalk-bark + cutaway(ring) | 200,900 | 3.0 | /textile |
| 4 | Feuilles et fleurs : CBD, soins corporels | leaves, flowers | 200,420 | 2.0 | /cbd, /soinscorporels |
| 5 | Graines : décortiquées, huile, farine, protéines | seeds | 200,110 | 3.2 | /alimentation |
| 6 | Une plante, des milliers d'usages | all | 200,800 | 1 | /lesmarques |

Beats 2 and 3 **hold the same stem position** (Codex #9). Core vs bark is radial, so a labelled cutaway inset
(« chènevotte : le cœur » / « fibre : l'écorce ») highlights the centre on beat 2 and the ring on beat 3, and the card text repeats it.
No "50 000 usages" figure; the copy stays qualitative.

## Layout (Codex #2, #7, #8)
**Default (no JS, reduced motion, or init failure): compact static content.** The full plant is shown once and the 7 cards are stacked in normal flow.
Live mode applies in CSS when `html.js` is set (inline script before first paint) **and** `prefers-reduced-motion: no-preference`; the camera box is sized in `svh` so beat 0's framing is pure CSS before the controller runs.

Live mode:
```
.story.is-live            display:grid; grid-template-areas:"stage"   (desktop: same single row, 2 columns)
  .scene                  grid-area:stage; position:sticky; top:0; height:100svh; align-self:start; z-index:0; pointer-events:none; aria-hidden
    .camera               400×1600 CSS px box, transform-origin 0 0 — the ONLY element transformed per frame
      <svg> <g data-layer="soil|roots|stalk-core|stalk-bark|leaves|flowers|seeds">
    .cutaway              HTML-level SVG inset (not inside the camera), visible on beats 2–3
  .steps                  grid-area:stage (same area → sticky gets the full story height to travel); z-index:1
    li[data-beat] > article   min-height:100svh per step; the card sits on the "card line"
```
- Mobile: the card line is 78% of the scene height (bottom panel, paper background, safe-area padding), and the plant focal point sits at 32% height.
- Desktop (≥ 992px): cards sit in the right column with the card line at 50%; the plant focal point is at 30% of the width and 50% of the height.

## Motion (Codex #1, #3, #4, #5, #6)
- **No IntersectionObserver.** One passive `scroll` listener schedules a single `requestAnimationFrame` update.
- **Anchors**: `a_k` = the scroll position where article k's centre is on the card line. They're measured on init, on `resize` and on `load` (fonts, images),
  then clamped to the story's scroll range.
- **Camera is scroll-linked**: between `a_k` and `a_k+1`, `t` is clamped to 0..1 and passed through a smoothstep ease; camera = lerp(beat k, beat k+1).
  The camera follows the finger, stops when scrolling stops, and reverses for free. Before `a_0` and after `a_6` it's clamped.
- **Transform**: `translate3d(tx,ty,0) scale(s)` on `.camera`, where `s = (sceneH/1600)·z`, kept ≤ ~2 on screen. There's no permanent `will-change`.
- **Highlights**: the nearest anchor sets `data-beat` → **instant** class swap (no opacity transitions on SVG groups in v1).
- Geometry uses `svh` (stable). The scene uses `overflow-y: visible`, so the plant bleeds below it when Safari's toolbar collapses, and the story uses `overflow: clip`. (`100lvh` was tried for the auditor's toolbar finding, but Chrome's mobile emulation turned it into CLS 1.0, so I reverted it.)

## Accessibility
- Cards are real content in reading order, each with an `h2` and links ≥ 44px, plus a visible focus ring. The scene is `aria-hidden` with `pointer-events:none` underneath the cards.
- `focusin` on a card → `scrollTo` its anchor, so focus never lands behind the scene and the art matches the card.
- Reduced motion = the static stack (above). This route doesn't use `.reveal`.

## Tech
- Placeholder art: `src/components/plant/PlantArt.tsx`, a React component **rendered at build time** (zero hydration). Each layer is a named `<g>`.
- Controller: `<script>` inside `PlantStory.astro` (Astro-bundled, typed), importing `beats.ts`, so markup and motion share one table.
- No GSAP and no new dependencies. CSS scroll timelines are rejected for now because they only reached Safari in 26.

## Perf budget
- Route JS: ≤ 4 kB gz (controller + Base's existing script). No hydration.
- Per frame: one transform write and no layout reads (anchors are cached).
- Placeholder SVG < 15 kB, and no raster images on the route.
- Lighthouse mobile perf ≥ 90, CLS ≈ 0, TBT < 100 ms.

## Art-swap contract (Codex #10)
- Artboard: 400×1600 units, soil y=1450, plant axis x=200, seeds y≈60–160, roots y 1450–1600.
- Layer ids and z-order (back → front): soil, roots, stalk-core, stalk-bark, leaves, flowers, seeds.
- Each layer stays inside its band: roots 1450–1600, stalk 160–1450, leaves 250–1100, flowers 60–400, seeds 60–200.
- Real art is SVG for v1. Later rasters are registered `<image>` elements inside the same `<g>`, in the same coordinates, at ≥ 2× the max on-screen scale.
- The camera only knows focal points and z in artboard units, so swapping art never touches the controller.

## Risks
1. **Real-device feel is unverified.** I can only test Chromium and Lighthouse here. A physical iPhone pass (Safari 17 and 26: slow scroll,
   fling/reverse, toolbar, rotation, rubber-band, VoiceOver, back/forward restore) is Jeremie's acceptance gate.
2. Scaled SVG rasterisation can look blurry on iOS. Keep on-screen scale ≤ 2; if it's soft, fall back to fewer zoom levels rather than viewBox animation.
3. Sticky needs no `overflow:hidden` ancestor. Base uses `overflow-x: clip`, which is fine.

## Codex review: what I did with each point
| # | Objection | Decision |
|---|---|---|
| 1 | IO rootMargin % resolves against width | **Accepted**: IO dropped; geometric anchors + rAF |
| 2 | Grid row bounds sticky travel | **Accepted**: scene and steps share one grid area |
| 3 | 900 ms transitions = slideshow | **Accepted**: scroll-linked interpolation |
| 4 | Camera switches before card arrives | **Accepted**: anchors measured on the articles (card line) |
| 5 | Unsupported compositing claims | **Accepted**: instant highlights, scale ≤ 2, no idle will-change |
| 6 | svh vs toolbar | **Accepted**: svh geometry, oversized background, clamp |
| 7 | Focus behind the scene | **Accepted**: z-order contract, pointer-events none, focusin → anchor |
| 8 | No-JS / reduced-motion contradiction | **Accepted, amended after measuring**: "switch to live after init" caused CLS 1.06 in Lighthouse. Live layout is now gated by `html.js` (set inline before paint) + `prefers-reduced-motion: no-preference` in CSS; no JS or reduced motion → static stack. CLS → 0.02 |
| 9 | Core vs bark at two heights | **Accepted**: same stem shot + labelled cutaway |
| 10 | Art contract doesn't preserve framing | **Accepted**: bands, z-order, focal points; SVG-only v1 |
| 11 | Verification can't prove perf | **Partly**: can't reach a physical iPhone from here → listed as Jeremie's gate; I provide Chromium traces + Lighthouse |
| 12 | Driver under-specified | **Accepted**: one typed beat table, Astro-bundled controller |
