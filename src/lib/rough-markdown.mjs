const pattern = /:(underline|highlight|circle|question|warning|callout)\[([^\]]+)\]/g;

function transform(parent) {
  if (!parent.children) return;
  parent.children = parent.children.flatMap((node) => {
    if (node.type !== "text" || !pattern.test(node.value)) { pattern.lastIndex = 0; transform(node); return [node]; }
    pattern.lastIndex = 0; const children = []; let cursor = 0; let match;
    while ((match = pattern.exec(node.value))) {
      if (match.index > cursor) children.push({ type: "text", value: node.value.slice(cursor, match.index) });
      const type = match[1]; const callout = type === "question" || type === "warning" || type === "callout";
      children.push({ type: "roughAnnotation", data: { hName: callout ? "span" : "mark", hProperties: { className: callout ? ["rough-callout", `rough-${type}`] : ["rough-mark"], "data-rough": type } }, children: [{ type: "text", value: match[2] }] });
      cursor = pattern.lastIndex;
    }
    if (cursor < node.value.length) children.push({ type: "text", value: node.value.slice(cursor) });
    return children;
  });
}

export default function roughMarkdown() { return (tree) => transform(tree); }
