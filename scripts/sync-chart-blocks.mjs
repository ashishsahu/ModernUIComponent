import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const ROOT = process.cwd()
const BLOCKS_DIR = path.join(ROOT, "registry/default/blocks")
const REGISTRY_URL = "https://ui.shadcn.com/r/styles/new-york"
const EXCLUDE = /^chart-bar-demo/
const TS_NOCHECK = new Set([
  "chart-bar-active",
  "chart-bar-label-custom",
  "chart-bar-mixed",
  "chart-line-label-custom",
  "chart-pie-donut-active",
  "chart-pie-interactive",
  "chart-pie-label-list",
  "chart-radar-label-custom",
])

function toExportName(name) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

function toTitle(name) {
  const [, type, ...rest] = name.split("-")
  const variant = rest
    .join(" ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  return `${type.charAt(0).toUpperCase() + type.slice(1)} Chart ${variant}`
}

function toDescription(name) {
  return `shadcn ${name.replace(/^chart-/, "").replace(/-/g, " ")} chart block.`
}

function chartType(name) {
  return name.split("-")[1]
}

function transformSource(content, exportName, name) {
  let source = content
    .replaceAll("@/registry/new-york/ui/", "@/registry/default/ui/")
    .replaceAll("@/components/ui/", "@/registry/default/ui/")
    .replace(/hsl\(var\((--chart-[^)]+)\)\)/g, "var($1)")
    .replace(/var\(--chart-(\d+)\)\)/g, "var(--chart-$1)")
    .replaceAll("clip-path=", "clipPath=")
    .replace(
      /tick=\{\(\{ x, y, textAnchor, value, index, \.\.\.props \}\) => \{/,
      "tick={({ x, y, textAnchor, value, index, verticalAnchor: _, ...props }) => {"
    )

  source = source.replace(
    /import \{\s*ChartConfig,\s*ChartContainer,/,
    "import {\n  ChartContainer,"
  )

  if (!source.includes("type ChartConfig")) {
    source = source.replace(
      /(ChartTooltipContent,)\n(\} from "@\/registry\/default\/ui\/chart")/,
      "$1\n  type ChartConfig,\n$2"
    )
    source = source.replace(
      /(ChartLegendContent,)\n(\} from "@\/registry\/default\/ui\/chart")/,
      "$1\n  type ChartConfig,\n$2"
    )
  }

  source = source.replace(/ChartTooltipContent,\n,\n/g, "ChartTooltipContent,\n")

  if (/export default function Component/.test(source)) {
    source = source.replace(
      /export default function Component\(\)/,
      `export function ${exportName}()`
    )
  } else {
    source = source.replace(
      /export default function \w+\(\)/,
      `export function ${exportName}()`
    )
  }

  if (source.includes("dot={({ cx, cy, payload })")) {
    source = source.replace(
      "dot={({ cx, cy, payload }) => {",
      "dot={({ cx, cy, payload }) => {\n                if (cx == null || cy == null) return null"
    )
  }

  return applyTsNoCheck(name, source)
}

function applyTsNoCheck(name, source) {
  if (!TS_NOCHECK.has(name)) return source
  const body = source.replace(/^"use client"\n\n?/, "")
  return `// @ts-nocheck\n"use client"\n\n${body}`
}

async function fetchChartNames() {
  const registry = await fetch(`${REGISTRY_URL}/registry.json`).then((r) =>
    r.json()
  )
  return registry.items
    .map((item) => item.name)
    .filter((name) => name.startsWith("chart-") && !EXCLUDE.test(name))
    .sort()
}

async function syncChartBlock(name) {
  const response = await fetch(`${REGISTRY_URL}/${name}.json`)
  if (!response.ok) {
    throw new Error(`${name}: HTTP ${response.status}`)
  }

  const data = await response.json()
  const exportName = toExportName(name)
  const source = transformSource(data.files[0].content, exportName, name)
  const dir = path.join(BLOCKS_DIR, name)

  await mkdir(dir, { recursive: true })
  await writeFile(path.join(dir, `${name}.tsx`), source)

  return {
    name,
    exportName,
    title: toTitle(name),
    description: data.description || toDescription(name),
    registryDependencies: data.registryDependencies ?? ["card", "chart"],
    npmDependencies: data.dependencies?.length ? data.dependencies : ["recharts"],
  }
}

function buildRegistryItem(block) {
  return {
    name: block.name,
    type: "registry:block",
    title: block.title,
    description: block.description,
    dependencies: block.npmDependencies,
    registryDependencies: block.registryDependencies,
    files: [
      {
        path: `registry/default/blocks/${block.name}/${block.name}.tsx`,
        type: "registry:component",
      },
    ],
  }
}

function buildCatalogCategories(blocks) {
  const groups = new Map()

  for (const block of blocks) {
    const type = chartType(block.name)
    if (!groups.has(type)) {
      groups.set(type, [])
    }
    groups.get(type).push(block)
  }

  const order = ["area", "bar", "line", "pie", "radar", "radial", "tooltip"]

  return order
    .filter((type) => groups.has(type))
    .map((type) => ({
      id: `charts-${type}`,
      title: `Charts · ${type.charAt(0).toUpperCase() + type.slice(1)}`,
      items: groups.get(type).map((block) => ({
        name: block.name,
        title: block.title,
        description: block.description,
      })),
    }))
}

function buildChartPreviewsFile(blocks) {
  const imports = blocks
    .map(
      (block) =>
        `import { ${block.exportName} } from "@/registry/default/blocks/${block.name}/${block.name}"`
    )
    .join("\n")

  const entries = blocks
    .map((block) => {
      const wrapperClass = block.name.includes("-interactive")
        ? "w-full min-w-0"
        : "w-full max-w-md"
      return `  "${block.name}": (
    <div className="${wrapperClass}">
      <${block.exportName} />
    </div>
  ),`
    })
    .join("\n")

  return `"use client"

import * as React from "react"
${imports}

export const chartPreviewEntries: Record<string, React.ReactNode> = {
${entries}
}
`
}

function buildChartCatalogFile(categories) {
  const install = (name) =>
    `npx shadcn@latest add ashishsahu/ModernUIComponent/${name}`

  const sections = categories
    .map((category) => {
      const items = category.items
        .map(
          (item) => `      {
        name: "${item.name}",
        title: "${item.title}",
        description: "${item.description.replace(/"/g, '\\"')}",
        install: "${install(item.name)}",
      }`
        )
        .join(",\n")

      return `  {
    id: "${category.id}",
    title: "${category.title}",
    items: [
${items},
    ],
  }`
    })
    .join(",\n")

  return `import type { CatalogCategory } from "@/app/catalog"

export const chartCatalogCategories: CatalogCategory[] = [
${sections},
]
`
}

async function main() {
  const names = await fetchChartNames()
  console.log(`Syncing ${names.length} chart blocks...`)

  const blocks = []
  for (const name of names) {
    blocks.push(await syncChartBlock(name))
    console.log(`  ${name}`)
  }

  const registryPath = path.join(ROOT, "registry.json")
  const registry = JSON.parse(await readFile(registryPath, "utf8"))
  registry.items = registry.items.filter((item) => !item.name.startsWith("chart-"))
  const projectSetupIndex = registry.items.findIndex(
    (item) => item.name === "project-setup"
  )
  registry.items.splice(
    projectSetupIndex,
    0,
    ...blocks.map(buildRegistryItem)
  )
  await writeFile(registryPath, `${JSON.stringify(registry, null, 2)}\n`)

  const categories = buildCatalogCategories(blocks)
  await writeFile(
    path.join(ROOT, "app/chart-catalog.ts"),
    buildChartCatalogFile(categories)
  )
  await writeFile(
    path.join(ROOT, "app/chart-previews.tsx"),
    buildChartPreviewsFile(blocks)
  )

  console.log(`Done. ${blocks.length} chart blocks synced.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
