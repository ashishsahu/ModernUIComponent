import { readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"

const ROOT = process.cwd()
const GENERATED_PAGES = path.join(
  ROOT,
  "app/component-variants/generated-pages.tsx"
)

const REMOVE = [
  ["calendar", "hijri"],
  ["chart", "default"],
  ["chart", "example"],
  ["chart", "example-axis"],
  ["chart", "example-grid"],
  ["chart", "example-legend"],
  ["chart", "example-tooltip"],
  ["chart", "rtl"],
  ["context-menu", "sides"],
  ["input-group", "button"],
  ["input-group", "custom"],
  ["input-group", "textarea"],
  ["pagination", "rtl"],
  ["combobox", "custom"],
]

for (const [component, variantId] of REMOVE) {
  const file = path.join(
    ROOT,
    "app/component-examples/generated",
    component,
    `${variantId}.tsx`
  )
  const codeFile = `${file.slice(0, -4)}.code.ts`
  await rm(file, { force: true })
  await rm(codeFile, { force: true })
}

let source = await readFile(GENERATED_PAGES, "utf8")

for (const [component, variantId] of REMOVE) {
  const blockRe = new RegExp(
    `\\s*\\{\\s*id: "${variantId}",[\\s\\S]*?\\},`,
    "g"
  )
  const pageStart = source.indexOf(`"${component}": {`)
  if (pageStart === -1) continue
  const pageEnd = source.indexOf("\n  },", pageStart)
  const pageBlock = source.slice(pageStart, pageEnd)
  const cleaned = pageBlock.replace(blockRe, "")
  source = source.slice(0, pageStart) + cleaned + source.slice(pageEnd)
}

const importRe = /^import \{[^}]+\} from "@\/app\/component-examples\/generated\/[^"]+";?\n/gm
const usedImports = new Set()
for (const match of source.matchAll(/Preview: (\w+)|code: (\w+)/g)) {
  if (match[1]) usedImports.add(match[1])
  if (match[2]) usedImports.add(match[2])
}

source = source.replace(importRe, (line) => {
  const name = line.match(/import \{ (\w+) \}/)?.[1]
  return name && usedImports.has(name) ? line : ""
})

await writeFile(GENERATED_PAGES, source)
console.log(`Pruned ${REMOVE.length} broken variants`)
