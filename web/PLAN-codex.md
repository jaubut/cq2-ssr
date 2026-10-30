Plan-level review: **two deterministic blockers**, followed by risks the proposed verification will miss.

1. **BLOCKER — The “centre-line” observer is wrong.** ([Plan:43](/home/aubut/lanes/cq2-ssr/web/PLAN.md:43))  
   **Fails:** Unreliable beat selection across orientations. **Why:** `rootMargin` percentages resolve against **width**, including vertical margins. At 390×844, the intended line becomes a 454px band; on wide desktop viewports it can collapse. Multiple intersecting steps also make callback order an invalid selection rule. **Smallest fix:** Calculate a narrow band in pixels from measured height, rebuild on resize, and select the beat geometrically. [Specification](https://www.w3.org/TR/intersection-observer/#dom-intersectionobserver-rootmargin)

2. **BLOCKER — The mobile grid gives sticky no travel.** ([Plan:29](/home/aubut/lanes/cq2-ssr/web/PLAN.md:29))  
   **Fails:** The plant scrolls away. **Why:** With the shown auto-placement, the scene occupies its own `100svh` grid row. That grid area bounds sticky movement; the next row’s negative margin does not enlarge it. **Smallest fix:** Overlap scene and steps in one shared, story-height grid area, remove the negative margin, and use `align-self: start`. Desktop gets separate columns within that same row. [Grid containing blocks](https://www.w3.org/TR/css-grid-2/#grid-area-concept)

3. **MAJOR — 900ms transitions produce a slideshow with lag.** ([Plan:68](/home/aubut/lanes/cq2-ssr/web/PLAN.md:68))  
   **Fails:** Camera position does not follow scrolling. **Why:** It stays stationary between thresholds, keeps moving after scrolling stops, and retargets unfinished transitions during flings or reversals. Overshoot adds movement unrelated to the gesture.  
   **Smallest fix:** Interpolate camera position from clamped scroll progress using one scheduled animation-frame update. Keep discrete beats for labels. GSAP is unnecessary; CSS scroll timelines alone cannot cover Safari 17–18—they arrived in Safari 26. [WebKit release](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/)

4. **MAJOR — The camera switches before its card arrives.** ([Plan:38](/home/aubut/lanes/cq2-ssr/web/PLAN.md:38))  
   **Fails:** Previous card, next plant part. **Why:** A step’s top reaches the centre trigger while its bottom-aligned article can still be below the viewport. Correcting the observer’s percentages does not correct this mismatch.  
   **Smallest fix:** Define activation anchors relative to the articles and synchronize camera keyframes to those anchors. Specify ownership at boundaries and after reverse scrolling.

5. **MAJOR — “One composited layer” is an unsupported performance assumption.** ([Plan:51](/home/aubut/lanes/cq2-ssr/web/PLAN.md:51))  
   **Fails:** The claimed 60fps budget has no defensible basis. **Why:** Promoting `.camera` does not guarantee independent compositing of its SVG `<g>` fades. Those can repaint SVG content during scaling. Permanent `will-change` can retain expensive resources. A full-width 390×1560 artboard at DPR 3 and scale 2.4 represents roughly **120MiB** for one full-resolution RGBA surface—an illustrative backing size, not a measured allocation. [SVG group rendering](https://www.w3.org/TR/SVG2/render.html#Groups), [will-change guidance](https://www.w3.org/TR/css-will-change/#using)  
   **Smallest fix:** Start with instantaneous group highlights, bound rendered dimensions, and remove idle promotion. Profile before adding fades. Animating `viewBox` is not a performance fallback.

6. **MAJOR — `svh` stabilizes dimensions, not the entire composition.** ([Plan:69](/home/aubut/lanes/cq2-ssr/web/PLAN.md:69))  
   **Fails:** Scene coverage and trigger geometry diverge as browser chrome changes. **Why:** `100svh` remains smaller when the toolbar retracts; replacing it with `dvh` makes geometry change during scrolling. Safe-area padding does not solve that. `overflow-x: clip` does not prevent rubber-band overscroll. [Viewport definitions](https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/)  
   **Smallest fix:** Keep stable story geometry, extend only the decorative background if needed, recalculate viewport-dependent measurements, and clamp progress at both ends.

7. **MAJOR — Native focus scrolling does not guarantee visibility or the right beat.** ([Plan:57](/home/aubut/lanes/cq2-ssr/web/PLAN.md:57))  
   **Fails:** Focus can land behind the scene or show a mismatched illustration. **Why:** Sticky creates a stacking context; no foreground stacking contract exists. Native scrolling exposes a link, not necessarily its step’s activation point. `aria-hidden` changes neither painting nor hit-testing.  
   **Smallest fix:** Explicitly place cards above the scene, disable scene pointer events, and synchronize focused cards with the controller. Check Tab/Shift-Tab and enlarged text. Avoid inheriting [`.reveal`’s initial invisibility](/home/aubut/lanes/cq2-ssr/web/src/styles/global.css:27).

8. **MAJOR — The static fallback and initialization contradict each other.** ([Plan:58](/home/aubut/lanes/cq2-ssr/web/PLAN.md:58))  
   **Fails:** No-JS retains seven oversized steps; initialization can animate from the full plant to the roots. **Why:** Defaulting `data-beat` to 6 does not disable sticky layout, negative margins, or step heights. Removing sticky alone also does not produce the promised reduced-motion stack.  
   **Smallest fix:** Make compact, normal-flow content the CSS default. Enable the story only after successful initialization; set the initial camera without transitions. Reduced motion must restore every layout override and disable all motion.

9. **MAJOR — Core versus bark is taught as two different heights.** ([Plan:19](/home/aubut/lanes/cq2-ssr/web/PLAN.md:19))  
   **Fails:** Viewers see successive trunk shots without understanding inner wood versus outer fibre. **Why:** Targets move from y62 to y48 even though the distinction is radial. An unspecified inset cannot carry the explanation reliably, especially inside an `aria-hidden` scene.  
   **Smallest fix:** Hold the same stem position for both beats. Show a labelled cutaway with unmistakable centre/ring highlights; repeat that distinction in the card text.

10. **MAJOR — The art-swap contract does not preserve framing.** ([Plan:63](/home/aubut/lanes/cq2-ssr/web/PLAN.md:63))  
    **Fails:** Replacement art requires camera and renderer changes. **Why:** “Full width” and “scale 1 = fit” differ for a 1:4 artboard. Layer names do not specify bounds, registration, stacking, or raster resolution. An HTML WebP cannot directly replace an SVG `<g>`. The roots target, y1376, is even above the specified soil line at y1450.  
    **Smallest fix:** Define base-fit geometry, focal anchors, card exclusion space, and layer bounds. Keep SVG-only for v1; later rasters can use registered SVG `<image>` elements.

11. **MAJOR — Verification cannot establish the stated performance claim.** ([Plan:75](/home/aubut/lanes/cq2-ssr/web/PLAN.md:75))  
    **Fails:** Clean screenshots and Lighthouse scores can accompany visibly poor scrolling. **Why:** Neither measures sustained Safari paint cost, interrupted transitions, or memory growth through repeated traversal.  
    **Smallest fix:** Require physical iPhone recordings/traces covering slow scroll, fling/reverse, toolbar changes, rotation, rubber-band, focus navigation, and back restoration. Include Safari 17 and 26.

12. **MINOR — The driver is under-specified; React hydration is not the missing piece.** ([Plan:45](/home/aubut/lanes/cq2-ssr/web/PLAN.md:45))  
    **Fails:** Independent markup, CSS, and script mappings drift. **Why:** The “40-line” target omits initialization, restored scroll, resize, and motion-preference changes.  
    **Smallest fix:** One typed beat table and one scoped, Astro-processed controller. Keep static rendering and no GSAP; budget actual route output, including [Base’s existing script](/home/aubut/lanes/cq2-ssr/web/src/layouts/Base.astro:73).

**The three changes I would insist on before building:**

1. Replace the mobile grid/negative-margin layout and define deterministic camera/card activation geometry.
2. Replace 900ms camera transitions with scroll-linked interpolation; make compact static content the default.
3. Specify a labelled core/bark cutaway and bounded SVG rendering contract, with physical-iPhone performance verification as a delivery gate.