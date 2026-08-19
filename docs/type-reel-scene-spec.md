# Type Reel Scene Spec

## Shared frame

1. **Purpose** — Show that Yein builds tools for moving between states.
2. **Final image** — One large project name anchors one transformation diagram inside a full-viewport frame.
3. **Elements** — Project name, source state, transition evidence, destination state, and a small chapter number.
4. **Forms** — Exact typography and geometry at rest; rough or exaggerated forms only during a state change.
5. **Composition** — The name occupies the upper-left. The diagram occupies the center and lower-right. The number stays in the upper-right.
6. **Match test** — Each scene must remain identifiable when the project name is hidden and readable when motion is paused.

## Hero — Cel study

1. **Purpose** — Introduce the site's motion language without an unrelated illustration.
2. **Final image** — A single block is surrounded by four exposed animation poses.
3. **Elements** — One live block, four pose outlines, and frame numbers.
4. **Forms** — Poses use the exact `text-punch` scale states: `1`, `1.32/.74`, `.78/1.28`, `1.08/.95`, `1`.
5. **Composition** — The name remains dominant on the left. The cel study balances its weight on the right.
6. **Match test** — The object must read as animation timing, not abstract decoration.

## rougher-stuff — Precision disturbed

1. **Purpose** — Show expressive annotation entering an otherwise precise interface.
2. **Final image** — A strict interface plane with one selected control marked by the actual notation package.
3. **Elements** — Outer frame, aligned content rails, one target control, and one rough box annotation.
4. **Forms** — All interface geometry is orthogonal. Only the generated annotation is irregular.
5. **Composition** — The quiet interface fills the stage; the marked control sits off-center to create one focal point.
6. **Match test** — Removing the notation must return the scene to a completely precise UI.

## trandimation — Exposed poses

1. **Purpose** — Show traditional animation principles as authored UI motion.
2. **Final image** — Five cel poses reveal compression, stretch, correction, and settle.
3. **Elements** — Pose rectangles, frame ticks, and one traveling playhead.
4. **Forms** — Pose proportions use the actual `text-punch` keyframes.
5. **Composition** — Poses progress left to right with increasing visual emphasis toward the active frame.
6. **Match test** — The sequence must communicate squash and stretch in a still screenshot.

## svgr2 — Structure retained

1. **Purpose** — Show SVG becoming a component through an intermediate representation.
2. **Final image** — Source geometry unfolds into a tree and resolves into a component boundary.
3. **Elements** — SVG source, AST nodes, transformation path, and component destination.
4. **Forms** — The source path is reused inside the destination so the transformation preserves identity.
5. **Composition** — Three states share one baseline, with the AST occupying the central hinge.
6. **Match test** — The diagram must read as `SVG → structure → component` without supporting prose.

## zctf — Runtime crossing

1. **Purpose** — Show fast data transfer between Rust and JavaScript runtimes.
2. **Final image** — A direct binary rail crosses a runtime boundary while a parsed JSON route bends beneath it.
3. **Elements** — Runtime endpoints, boundary, binary packets, direct rail, and parsed route.
4. **Forms** — Binary data uses solid aligned blocks; JSON uses separated tokens and a longer segmented path.
5. **Composition** — Endpoints balance both sides. The direct route owns the visual center; the slower route remains subordinate.
6. **Match test** — The upper path must look structurally shorter and more direct without relying on benchmark copy.
