# Landing Cinematic Blueprint

This document is the production contract for the landing page. Effects are not selected because they look cinematic. Each effect must perform a narrative or structural job that would otherwise be missing.

## Cinematic thesis

The page has one movement:

```text
Yein Sung → the work → the writing
```

The identity does not sit beside an unrelated demo. It becomes the title slot used by the work. Work then ends cleanly, and Writing begins as a quiet epilogue.

The internal visual idea remains **between states**:

```text
precise source → expressive transition evidence → precise result
```

Roughness is evidence of a state change. It is never a permanent surface treatment. Traditional motion appears only when a real object or label changes state.

## Page timeline

### Beat 0 — Identity hold

- A complete static hero is visible at first paint.
- `Yein Sung` is the dominant object.
- The two-line sentence is the only supporting copy.
- There is no right-side illustration, autoplay demo, cursor interaction, or ambient loop.
- The composition itself must fill the frame.

### Beat 1 — Identity becomes work

- The hero name and the first project name occupy the same authored title slot.
- `compress-swap` changes `Yein Sung` into `rougher-stuff`.
- This effect is justified because a persistent slot changes from identity state to work state.
- The sentence exits with an ordinary opacity cut before the swap. It does not receive a traditional-animation effect.

### Beats 2–4 — Three work chapters

- The viewport becomes a shared project stage.
- Each project owns one title and one proof asset.
- Project titles use the same visual slot, but later project boundaries use a direct cut because no shared object changes meaning between unrelated projects.
- Proof assets do not crossfade through each other. The old proof clears, the title switches, and the next proof activates.
- Every proof must still identify its project when the title is hidden.

### Beat 5 — Work closes

- `svgr2` settles and holds.
- The cinematic stage ends with a hard spatial cut and deliberate empty space.
- No connector line forces continuity into Writing.

### Beat 6 — Writing epilogue

- Writing returns to the warm page background and ordinary document flow.
- The section is nearly static.
- Dates and titles provide the rhythm.
- Only the title currently hovered or focused receives a real rough notation underline.

## Shared stage asset

### 1. What is it?

A single viewport-sized composition used first by identity and then by three projects.

### 2. Final picture

- One large title at the upper-left.
- One proof asset in the lower and central field.
- One chapter fraction at the upper-right during Work only.
- Strong negative space around both title and proof.

### 3. Elements

- Title stack containing four real headings.
- Intro sentence, present only in the identity beat.
- Proof stack containing four independent assets.
- Chapter fraction.
- Invisible scroll chapters that drive state.

### 4. Exact forms

- Title: IBM Plex Sans 500, negative tracking, one line, no uppercase conversion.
- Project title size is bounded so `rougher-stuff` never clips at 320px width.
- Chapter fraction uses mono numerals only and derives its total from project data: `01 / 03`.
- Stage background changes once from warm neutral to near-black at the identity/work threshold.
- No stage border, fake browser frame, floating card chrome, or progress rail.

### 5. Composition

- Desktop title inset: approximately `4vw / 9vh`.
- Desktop proof field: below the title, occupying at most 70% of viewport height.
- Mobile title and proof remain in the same order; no hover assumptions.
- The title and proof never compete at equal scale.

### 6. Match test

- The first and last frames each work as editorial screenshots.
- The title is always the primary object.
- The proof remains large enough to read without becoming a second hero.
- Fast scrolling ends on the latest requested state without replay accumulation.

## Transition asset — compress swap

### 1. What is it?

The actual Tradimation `compress-swap` effect applied only when the identity slot becomes the first work title, and when that boundary is traversed in reverse.

### 2. Final picture

A source title compresses horizontally to an almost-flat exposure; a destination title appears vertically stretched and settles at the same baseline.

### 3. Elements

- The `Yein Sung` identity heading.
- The `rougher-stuff` destination heading.
- One shared title slot with identical transform origin.

### 4. Exact forms

- Package timing: `780ms`.
- Switch exposure: `0.43`, as authored by the library.
- Source and destination use the same font, weight, line-height, and baseline.
- Font size may vary only through a bounded per-title CSS variable needed to prevent clipping.

### 5. Composition

- Transform origin stays at the left-center so the title remains anchored to the page grid.
- Nothing else transforms on the title's element.
- Proof activation begins only after the title reaches its destination state.

### 6. Match test

- Frames `0`, `.24`, `.42`, `.43`, `.64`, `.82`, and `1` contain no crossfade or blank exposure.
- The baseline does not jump.
- Interrupting a transition resolves to the latest requested chapter.
- Reduced motion changes visibility instantly.

## Proof 01 — rougher-stuff

### 1. What are we making?

A live notation specimen, not an illustration of an annotation library.

### 2. Final picture

Three precise words occupy a spacious typographic field. Each word carries one actual generated notation: underline, circle, and bracket.

### 3. Elements

- `underline`
- `circle`
- `bracket`
- Three generated rough notation layers

### 4. Exact forms

- Words use the normal sans face, not handwriting.
- Sizes descend slightly to avoid a logo-lockup appearance.
- Annotation configuration uses package seed `43`, one iteration, `1.25` roughness, and the site accent.
- Underline, circle, and right bracket come directly from `@rougher-stuff/rough-notation`.
- No hand-authored SVG line is allowed.

### 5. Composition

- The words occupy three different grid coordinates with visible alignment discipline.
- Marks may overlap their own word but never another word.
- Draw order follows reading order with one grouped exposure.

### 6. Match test

- Before activation, the proof is entirely precise.
- After activation, all roughness originates from the package.
- Hiding the title still leaves an unmistakable notation specimen.

## Proof 02 — trandimation

### 1. What are we making?

A real connected-texture motion specimen placed where the Tradimation project is being shown.

### 2. Final picture

One `same element` specimen card rests at a destination registration mark after passing through the authored smear frames.

### 3. Elements

- A quiet coordinate field.
- One connected HTML specimen card.
- One destination registration mark.
- One WebGL surface owned by the proof root.

### 4. Exact forms

- Use the actual `smear` implementation and its 32×14 connected mesh.
- Desktop travel is bounded near `220px`; mobile near `110px`.
- Timing remains the authored `670ms`.
- Card proportions, hard shadow, border, and modest radius follow the existing Tradimation contact sheets.
- The card contains only `same element`.

### 5. Composition

- The source and destination share one horizontal centerline.
- The registration mark is the exact computed destination center.
- The grid exists only inside the proof's coordinate field.

### 6. Match test

- The connected texture remains continuous at maximum smear.
- The card lands on the registration point within one pixel.
- No loop, hover trigger, or scroll scrub is used.
- WebGL failure and reduced motion both show the final settled frame.

## Proof 03 — svgr2

### 1. What are we making?

A transformation proof that preserves the same SVG output while its representation changes.

### 2. Final picture

The exact 16×16 triangle benchmark fixture is rendered large. Beneath it, `<svg>` changes to `<Icon />` while the triangle remains visually unchanged. A real benchmark figure shows why this fork exists.

### 3. Elements

- Exact fixture path `M8 1l7 14H1L8 1z`.
- Source label `<svg>`.
- Destination label `<Icon />`.
- Evidence `29.99×` with the scoped word `JSX`.

### 4. Exact forms

- The triangle is a direct enlargement of the repository fixture, not a new logo.
- The source and destination labels share one slot and use `compress-swap` once.
- `29.99×` comes from the repository's tiny-fixture JSX-only benchmark and is not generalized to the whole project.
- No invented AST tree or generic React logo is used.

### 5. Composition

- Triangle is the primary proof object.
- Representation label sits directly beneath it.
- Benchmark evidence stays in a corner and never competes with the project title.

### 6. Match test

- The triangle does not move or change shape while representation changes.
- The benchmark qualifier remains visible enough to prevent a misleading claim.
- Hiding the project title still communicates SVG-to-component transformation.

## Writing epilogue asset

### 1. What are we making?

A calm recent-writing index that releases the tension built by the work stage.

### 2. Final picture

One large `Writing` heading followed by five title rows. No visual preview runs automatically.

### 3. Elements

- Heading.
- Archive link.
- Date and title per row.
- One generated underline for the currently hovered or focused title.

### 4. Exact forms

- No description paragraphs, tags, category labels, timeline ornament, or entrance stagger.
- Date remains small mono.
- Title remains sans and clearly larger than the date.
- Underline comes from rough notation with a stable seed.

### 5. Composition

- The section begins after a deliberate gap from Work.
- Rows occupy the ordinary site grid rather than the cinematic viewport stage.
- The footer follows without another visual climax.

### 6. Match test

- Writing feels quieter than Work.
- The list is fully readable without JavaScript.
- Keyboard focus receives the same annotation as hover.

## Motion and interruption contract

- Native scrolling is never intercepted.
- Scroll chapters select states; they do not scrub the internal effect frames.
- Only the identity-to-first-work title transition uses a motion controller.
- Later project-title changes are synchronous cuts.
- A newer requested chapter replaces queued intermediate chapters.
- Proof effects play once per page visit and settle permanently.
- Re-entering a chapter restores its completed state rather than replaying it.
- All controllers are destroyed on `pagehide`.
- `prefers-reduced-motion` preserves every completed visual state and removes transitions.

## Integration gate

The landing may replace the current implementation only after:

- The initial Hero still is balanced with no visual proof running.
- Identity-to-work swap passes all seven frame checks.
- Each project proof passes its own six-step match test.
- Desktop and mobile completed states remain readable.
- Fast wheel, trackpad, keyboard, and reverse scroll do not accumulate animations.
- The page builds and all content remains present without client JavaScript.
