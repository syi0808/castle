# Cinematic Recomposition Exploration

This document explores the next landing-motion revision. It does not authorize more motion by default. Its purpose is to decide which state changes deserve motion after the project set was reduced to `rougher-stuff`, `trandimation`, and `svgr2`.

Prototype: `/lab/cinematic-recomposition`

## Current sequence

```text
Yein Sung
→ rougher-stuff
→ trandimation
→ svgr2
→ Writing
```

The current shared title slot gives the sequence continuity, but every title change uses the same `compress-swap`. This makes project boundaries mechanically consistent at the cost of flattening their different meanings. The project proofs carry specific evidence while the repeated title motion carries no new information after the identity-to-work change.

## Options

### A. Keep every title swap

- `Yein Sung` and all project names continue to share one animated slot.
- Every boundary uses `compress-swap`; each proof activates after the title settles.
- This is structurally simple and maintains a strong common stage.
- It is not preferred because the second and third swaps repeat a transition whose meaning was already established.

### B. One transformation, then authored cuts

- `Yein Sung → rougher-stuff` remains the only title-level `compress-swap`.
- Later project titles change with a direct cut or a short ordinary opacity transition.
- Each project owns the only expressive motion in its chapter.
- This preserves the shared stage while making motion density follow meaning.

This is the recommended direction.

### C. One artifact travels through every project

- A shared object would change from annotated text to a moving card to an SVG component.
- The transitions could appear continuous, but the projects do not share a real artifact or production pipeline.
- This option is rejected because it invents relationships solely to justify continuity.

## Recommended edit

### Frame 0 — Identity hold

- `Yein Sung` remains the only primary object.
- The intro sentence balances the lower field.
- No proof is mounted visibly and no ambient animation runs.

### Frame 1 — Identity becomes work

- `Yein Sung → rougher-stuff` uses `compress-swap` because the slot changes from identity to the first work title.
- The background changes once at the same scene boundary.
- The intro exits with a direct opacity cut before the swap.

### Frame 2 — rougher-stuff proof

- The final frame is the three-word notation specimen.
- Only real rough-notation layers move, in reading order.
- Leaving the chapter completes the marks immediately instead of reversing or erasing them.

### Frame 3 — trandimation proof

- The title changes by cut; no second title deformation competes with the proof.
- The source card and destination registration are visible before motion begins.
- The actual connected-texture `smear` provides the chapter's only expressive transition.

### Frame 4 — svgr2 proof

- The title changes by cut and the exact SVG fixture is already visible.
- The fixture stays fixed while `<svg> → <Icon />` uses `compress-swap` inside the proof.
- `29.99×` remains qualified as the tiny-fixture JSX benchmark.

### Frame 5 — Work closes

- The completed svgr2 frame holds before the sticky stage releases.
- Writing begins after a spatial cut and deliberate neutral gap.
- No outgoing deformation, connector, or background wipe is added.

## Orchestration model

Replace numeric proof events with project-keyed scene controllers:

```text
scene.enter({ reduced })
scene.settle()
scene.leave()
```

- Scene identity is the project `visual` key, not an array index.
- A new scroll request aborts the running title or proof controller immediately.
- The outgoing scene calls `settle()` before it becomes hidden.
- Every scene records whether it has played; re-entry restores its final frame without replay.
- The latest requested scene is the only queued destination.
- No element transform is owned by more than one controller.

## Motion budget

| Boundary | Motion | Reason |
| --- | --- | --- |
| Identity → rougher-stuff | `compress-swap` | Identity slot becomes work slot |
| rougher-stuff proof | rough notation group | Actual package output appears |
| rougher-stuff → trandimation | Cut | No shared object changes state |
| trandimation proof | `smear` | One element changes location |
| trandimation → svgr2 | Cut | No shared object changes state |
| svgr2 representation | `compress-swap` | Source representation becomes component representation |
| Work → Writing | Spatial cut | Narrative energy changes |

## Prototype order

1. Build five complete static frames in an isolated lab route.
2. Add only the identity swap and project-title cuts.
3. Attach each proof's real primitive independently.
4. Implement keyed interruption and permanent settled states.
5. Review desktop and mobile at the seven meaningful title frames and each proof's start, maximum deformation, switch, and final frames.
6. Verify reduced motion, keyboard scrolling, fast reverse scrolling, and re-entry before replacing the landing sequence.

## Acceptance gate

- Every chapter remains identifiable in a screenshot without its motion playing.
- Replacing project-title swaps with cuts makes no project less understandable.
- Fast traversal reaches the newest chapter without showing an intermediate proof.
- A cut never exposes an empty stage.
- Mobile preserves title-first reading order and the same project evidence.
- Reduced motion renders the same final states rather than removing the proofs.
- The Writing boundary is quieter than every Work boundary.
