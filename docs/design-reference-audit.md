# Moving Draft — reference audit

This document records principles to combine, not surfaces to imitate.

## Brand references

### Rauno Freiberg — https://rauno.me/

- Keep identity legible before interaction.
- Let type, spacing, and a small number of details carry the page.
- Avoid explaining craft with a decorative developer diagram.

### Jonas Reymondin — https://tympanus.net/codrops/2026/03/16/jonas-reymondins-portfolio-reclaiming-the-ui-eye-through-systems-code-and-pixel-motion/

- Start from a strict grid and restrained type system.
- Allow individual projects to determine their own motion and visual behavior.
- Use motion to reveal the tension between system precision and expression.

### Mountain Drawn — https://mountaindrawn.com/

- A personal metaphor is stronger than a collection of generic industry symbols.
- Keep the metaphor consistent across layout, illustration, and interaction.

## Motion references

### Gabriel Contassot — https://tympanus.net/codrops/2024/04/24/case-study-gabriel-contassots-portfolio-2024/

- Preserve a minimal static composition and add only a few focused transitions.
- A lightweight Astro page can selectively use GSAP without becoming client-rendered.

### Dondre Green — https://tympanus.net/codrops/2025/01/07/case-study-dondre-green/

- Use viewport focus, pinning, and framing to establish cinematic rhythm.
- Do not copy the photography-led aesthetic, blur stack, or horizontal gallery.

## Combined direction

`Moving Draft` treats typography as the visual material. The site does not place a separate illustration beside the identity. A baseline, glyph edge, or project title changes state and creates the next shot.

1. Content is visible before motion.
2. One scene has one primary transformation.
3. A transition reuses an element already on screen.
4. Rough marks appear as evidence of a change.
5. Traditional motion is reserved for an in-between state.
6. The final frame always returns to precision.

## Explicit exclusions

- Generic code, AST, browser, cursor, and spark collages
- Cursor followers and ambient loops
- Character-by-character title reveals
- Smooth-scroll interception
- Decorative arrows without a real relationship
- Repeated fade-up sections
- Mobile interactions that block the first link activation

## Chosen prototype

The type reel keeps one useful idea from direction B: project names share one fixed typographic stage. Everything else is removed unless it comes from the authored visual libraries.

- The hero is a static composition with no supporting illustration.
- `rougher-stuff` uses the package's seeded rough notation underline.
- Project changes use Tradimation's `compress-swap`.
- `trandimation` uses the package's `text-punch` once after settling.
- `svgr2` and `zctf` remain precise until they have authored visual assets.
- A separate lab route exposes meaningful animation frames for visual review.

The direction must work as a static screenshot before motion is considered.
