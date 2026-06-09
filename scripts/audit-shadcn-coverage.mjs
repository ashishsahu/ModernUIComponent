const REGISTRY_URL = "https://ui.shadcn.com/r/styles/new-york"
const our = JSON.parse(
  await import("node:fs/promises").then((fs) =>
    fs.readFile(new URL("../registry.json", import.meta.url), "utf8")
  )
)
const d = await fetch(`${REGISTRY_URL}/registry.json`).then((r) => r.json())
const uiNames = our.items
  .filter((i) => i.type === "registry:ui")
  .map((i) => i.name)
  .sort((a, b) => b.length - a.length)
const examples = d.items.filter((i) => i.type === "registry:example")
const blocks = d.items.filter((i) => i.type === "registry:block")

const fallback = [
  "button-group",
  "chart",
  "direction",
  "empty",
  "field",
  "form",
  "input-group",
  "item",
  "kbd",
  "native-select",
  "sidebar",
  "spinner",
]

for (const name of fallback) {
  const ex = examples.filter(
    (e) =>
      e.name === `${name}-demo` ||
      (e.name.startsWith(`${name}-`) && e.name.length > name.length + 1)
  )
  const bl = blocks.filter((b) => b.name.startsWith(`${name}-`) || b.name === name)
  console.log(
    name,
    "examples:",
    ex.map((e) => e.name).join(", ") || "-",
    "| blocks:",
    bl.length
  )
}

const matched = new Set()
for (const ex of examples) {
  const ui = uiNames.find(
    (n) =>
      ex.name === `${n}-demo` ||
      (ex.name.startsWith(`${n}-`) && ex.name.length > n.length + 1)
  )
  if (ui) matched.add(ex.name)
}

const unmatched = examples.filter(
  (e) =>
    !matched.has(e.name) &&
    !e.name.startsWith("chart-bar") &&
    !e.name.startsWith("chart-area") &&
    !e.name.startsWith("chart-line") &&
    !e.name.startsWith("chart-pie") &&
    !e.name.startsWith("chart-radar") &&
    !e.name.startsWith("chart-radial") &&
    !e.name.startsWith("typography") &&
    !e.name.startsWith("date-picker") &&
    !e.name.startsWith("toast")
)
console.log("\nUnmatched examples:", unmatched.length)
console.log(unmatched.map((e) => e.name).join("\n"))

console.log("\nSidebar examples (all):", examples.filter((e) => e.name.startsWith("sidebar")).map((e) => e.name))
console.log("Sidebar blocks:", blocks.filter((b) => b.name.startsWith("sidebar")).map((b) => b.name))
