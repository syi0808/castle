# Hero Smear Study

This study is deliberately isolated from the landing page. It may be integrated only after its static frame, motion frames, and composition all pass review.

## 1. What are we making?

A single live object that proves the site's motion language. It is not a decorative illustration and it does not attempt to summarize every project.

The object is a `trandimation` specimen card rendered through the real connected-texture `smear` effect. It shows one precise interface object becoming an exaggerated speed drawing and returning to a precise object.

## 2. What should the final picture be?

The first viewport remains an editorial portrait:

- `Yein Sung` owns the left and upper field.
- The two-line sentence anchors the lower-left.
- A quiet animation stage occupies the right side.
- The specimen card rests at the stage's destination coordinate.
- Nothing loops and nothing follows the pointer.

The final still must look intentional after the effect has finished. It cannot depend on motion to fill an empty composition.

## 3. What elements make that picture?

Only four:

1. The existing name and sentence.
2. The motion stage.
3. One specimen card.
4. One destination registration mark.

There are no exposed timelines, decorative arrows, ghost copies, invented nodes, code icons, or explanatory labels.

## 4. What exact form does each element take?

### Motion stage

**Role:** A coordinate space that makes position and deformation legible.

**Form:**

- Aspect ratio close to `4 / 3` on desktop.
- No enclosing card border.
- A 24px precision grid at very low contrast.
- Clipped overflow so the WebGL surface never becomes page decoration.
- The stage owns the Tradimation `overlayRoot`.

**Failure conditions:** It resembles a dashboard widget, a hero background effect, or graph paper added only to fill space.

### Specimen card

**Role:** The same connected texture before, during, and after the transition.

**Form:**

- Approximately `190 × 74px` on desktop and `150 × 60px` on mobile.
- Muted brick fill, near-black 2px outline, and one hard 6px offset shadow.
- Small corner radius inherited from the actual Tradimation artifact language.
- Contains only the project name `trandimation`.
- Uses the site's sans face and remains readable at the smear's widest pose.

**Failure conditions:** It looks like a CTA, contains marketing copy, or becomes a generic floating rounded rectangle.

### Registration mark

**Role:** Show the exact destination coordinate and give the movement a real relationship.

**Form:**

- Two 12px hairlines crossing at the destination center.
- A 5px empty center circle.
- Accent color at 45% opacity while idle, 80% at settle.
- Never animates independently.

**Failure conditions:** It reads as a decorative sparkle, cursor, or target users should click.

### Smear effect

**Role:** Expose the real motion language rather than a GSAP approximation.

**Form:**

- Use `@tradimation/core` effect `smear` with its connected 32×14 texture mesh.
- Desktop distance is bounded by the available stage width, targeting roughly `220px`.
- Mobile distance targets roughly `110px`.
- Default authored timing remains `670ms` unless the composed stage proves it needs adjustment.
- Run once after fonts and layout are stable.
- Reduced motion skips directly to the final position.
- A lab-only replay control may reset and replay the specimen; it is not part of the proposed landing composition.

**Failure conditions:** The card crossfades, separates into DOM slices, travels outside the stage, loops, or replays because of scroll jitter.

## 5. How do the elements combine?

### Desktop

- Hero grid: approximately `56% identity / 44% motion stage`.
- The card begins at `18%` of the stage width and `48%` of its height.
- The registration mark sits one authored smear distance to the right.
- The card and mark share a horizontal centerline.
- The stage aligns optically with the cap height and lower edge of the name block rather than the viewport center.

### Mobile

- Identity remains first.
- The stage moves below the sentence and spans the content width.
- The card and travel distance reduce together; the shape language does not change.
- No autoplay if the stage is already outside the initial viewport.

## 6. How closely does the result match the intended picture?

The study passes only if all are true:

- At frame `0`, it reads as an intentional editorial composition rather than an empty hero with a demo beside it.
- At the take extreme, the texture remains continuous and the project name is still perceptually attached to the card.
- At the brake frame, deformation feels authored rather than like CSS scale.
- At frame `1`, the card center lands on the registration mark within one pixel.
- The stage remains subordinate to `Yein Sung` but visually strong enough to balance it.
- Removing the motion still leaves a complete final still.
- The study is recognizably derived from the existing Tradimation contact sheets, not from a newly invented motion style.

## Frame references

The effect is judged against the existing source artifacts rather than a hand-drawn approximation:

- `../cel-motion/artifacts/traditional-pose-contact-sheet.jpg`
- `../cel-motion/artifacts/smear-final-2-contact-sheet.jpg`
- `../cel-motion/artifacts/smear-final-2-slow.mp4`

Review frames: start, anticipation, maximum smear, brake compression, overshoot, settle, final hold.
