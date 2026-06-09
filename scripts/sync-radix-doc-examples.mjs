import { readFile, writeFile, mkdir, access } from "node:fs/promises"
import path from "node:path"

import {
  GENERATED_DIR,
  normalizeVariantId,
  toExportName,
  transformConsumerCode,
} from "./sync-component-demos.mjs"

const ROOT = process.cwd()
const RADIX_RAW_BASE =
  "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/examples/radix"
const GITHUB_API_DIR =
  "https://api.github.com/repos/shadcn-ui/ui/contents/apps/v4/examples/radix"
const RADIX_MANIFEST = path.join(ROOT, "scripts/radix-example-manifest.json")

const SKIP_COMPONENTS = new Set(["direction", "form", "typography", "toast"])
const SKIP_VARIANTS = new Map([
  ["sidebar", new Set(["rsc"])],
  ["calendar", new Set(["hijri"])],
  ["chart", new Set(["default", "example", "example-axis", "example-grid", "example-legend", "example-tooltip", "rtl"])],
  ["context-menu", new Set(["sides"])],
  ["input-group", new Set(["button", "custom", "textarea"])],
  ["pagination", new Set(["rtl"])],
  ["combobox", new Set(["custom"])],
])

function toVariantPreviewName(componentName, variantId) {
  if (variantId === "default") {
    return `${toExportName(componentName)}DemoPreview`
  }
  return `${toExportName(componentName)}${toExportName(variantId)}Preview`
}

function toVariantCodeExportName(componentName, variantId) {
  if (variantId === "default") {
    return `${toExportName(componentName)}DemoCode`
  }
  return `${toExportName(componentName)}${toExportName(variantId)}Code`
}

function toDocVariantTitle(variantId) {
  if (variantId === "default") return "Default"
  const special = {
    rtl: "RTL",
    rsc: "RSC",
    api: "API",
  }
  if (special[variantId]) return special[variantId]
  return variantId
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function parseExampleFile(fileName, uiNamesByLength) {
  const base = fileName.replace(/\.tsx$/, "")

  if (base.endsWith("-demo")) {
    const componentName = base.slice(0, -5)
    if (uiNamesByLength.includes(componentName)) {
      return { componentName, variantId: "default" }
    }
  }

  for (const componentName of uiNamesByLength) {
    if (base.startsWith(`${componentName}-`) && base.length > componentName.length + 1) {
      return {
        componentName,
        variantId: base.slice(componentName.length + 1),
      }
    }
  }

  return null
}

function transformRadixExampleSource(content, previewName) {
  let source = content
    .replaceAll(/@\/styles\/radix-[^/]+\/ui-rtl\//g, "@/registry/default/ui/")
    .replaceAll(/@\/styles\/radix-[^/]+\/ui\//g, "@/registry/default/ui/")
    .replaceAll(/@\/styles\/[^/]+\/ui-rtl\//g, "@/registry/default/ui/")
    .replaceAll(/@\/styles\/[^/]+\/ui\//g, "@/registry/default/ui/")
    .replaceAll("@/registry/new-york/ui/", "@/registry/default/ui/")
    .replaceAll("@/components/ui/", "@/registry/default/ui/")
    .replaceAll("@/components/language-selector", "@/hooks/use-translation-stub")
    .replaceAll("@/registry/new-york-v4/ui/", "@/registry/default/ui/")
    .replaceAll("@/registry/icons/__lucide__", "lucide-react")
    .replace(/from "@tabler\/icons-react"/g, 'from "lucide-react"')
    .replace(/<Card([^>]*)\ssize="[^"]*"/g, "<Card$1")
    .replaceAll("clip-path=", "clipPath=")
    .replace(
      /<Link href="([^"]*)" legacyBehavior passHref>\s*<NavigationMenuLink className=\{navigationMenuTriggerStyle\(\)\}>\s*([\s\S]*?)\s*<\/NavigationMenuLink>\s*<\/Link>/g,
      '<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>\n            <Link href="$1">$2</Link>\n          </NavigationMenuLink>'
    )
    .replace(
      /<BreadcrumbLink>\s*<Link href="([^"]*)">([\s\S]*?)<\/Link>\s*<\/BreadcrumbLink>/g,
      '<BreadcrumbLink asChild>\n            <Link href="$1">$2</Link>\n          </BreadcrumbLink>'
    )

  source = source.replace(/export default function \w+/, `export function ${previewName}`)
  if (!source.includes(`export function ${previewName}`)) {
    source = source.replace(/export function \w+/, `export function ${previewName}`)
  }

  if (
    new RegExp(`export function ${previewName}\\([^)]*\\{`).test(source) ||
    new RegExp(`export function ${previewName}\\(\\s*\\{`).test(source)
  ) {
    source = source.replace(
      new RegExp(`export function ${previewName}\\(`),
      `function ${previewName.replace("Preview", "Demo")}(`
    )
    if (!source.includes('"use client"')) {
      source = `"use client"\n\nimport * as React from "react"\n${source}`
    } else if (!source.includes("import * as React")) {
      source = source.replace(
        '"use client"\n\n',
        '"use client"\n\nimport * as React from "react"\n'
      )
    }
    const demoName = previewName.replace("Preview", "Demo")
    source += `\n\nexport function ${previewName}() {\n  const [country, setCountry] = React.useState("+1")\n  return <${demoName} country={country} setCountry={setCountry} />\n}\n`
  }

  const needsClient =
    /useState|useEffect|useMemo|useCallback|useRef|useReducer|useContext|React\.use\(|"use client"/.test(
      source
    )

  if (!source.startsWith('"use client"') && needsClient) {
    source = `"use client"\n\n${source}`
  }

  return source
}

async function readRadixManifest() {
  try {
    await access(RADIX_MANIFEST)
    const manifest = JSON.parse(await readFile(RADIX_MANIFEST, "utf8"))
    if (Array.isArray(manifest.files) && manifest.files.length > 0) {
      return manifest.files
    }
  } catch {
    // no cached manifest
  }
  return null
}

async function writeRadixManifest(files) {
  await writeFile(
    RADIX_MANIFEST,
    `${JSON.stringify({ updatedAt: new Date().toISOString(), files }, null, 2)}\n`
  )
}

async function fetchRadixExampleFilesFromGitHub() {
  const files = []
  let url = `${GITHUB_API_DIR}?per_page=100`

  while (url) {
    const response = await fetch(url, {
      headers: { Accept: "application/vnd.github+json" },
    })
    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`)
    }

    const page = await response.json()
    files.push(
      ...page
        .filter((entry) => entry.name.endsWith(".tsx"))
        .map((entry) => entry.name)
    )

    const link = response.headers.get("link")
    const next = link?.match(/<([^>]+)>;\s*rel="next"/)?.[1]
    url = next ?? null
  }

  return files
}

async function resolveRadixExampleFiles({ requireRemote = false } = {}) {
  try {
    const files = await fetchRadixExampleFilesFromGitHub()
    await writeRadixManifest(files)
    return { files, source: "github" }
  } catch (error) {
    const cached = await readRadixManifest()
    if (cached) {
      console.warn(
        `GitHub API unavailable (${error.message}). Using cached radix manifest (${cached.length} files).`
      )
      return { files: cached, source: "cache" }
    }

    if (requireRemote) {
      throw new Error(
        `Cannot sync radix doc examples: ${error.message}. No cached manifest at scripts/radix-example-manifest.json.`
      )
    }

    throw error
  }
}

async function syncRadixDocExamples({
  generatedPages,
  uiNames,
  uiItemByName,
  radixExampleFiles,
}) {
  const uiNamesByLength = [...uiNames].sort((a, b) => b.length - a.length)
  const pageByName = new Map(generatedPages.map((page) => [page.name, page]))
  const existingIds = new Map(
    generatedPages.map((page) => [
      page.name,
      new Set(page.variants.map((variant) => normalizeVariantId(variant.id))),
    ])
  )

  const exampleFiles =
    radixExampleFiles ?? (await resolveRadixExampleFiles()).files
  const toFetch = []

  for (const fileName of exampleFiles) {
    const parsed = parseExampleFile(fileName, uiNamesByLength)
    if (!parsed) continue

    const { componentName, variantId } = parsed
    if (SKIP_COMPONENTS.has(componentName)) continue
    if (SKIP_VARIANTS.get(componentName)?.has(variantId)) continue
    if (existingIds.get(componentName)?.has(normalizeVariantId(variantId))) {
      continue
    }

    toFetch.push({ fileName, componentName, variantId })
  }

  let added = 0

  for (const entry of toFetch) {
    const { fileName, componentName, variantId } = entry
    const response = await fetch(`${RADIX_RAW_BASE}/${fileName}`)
    if (!response.ok) continue

    const rawSource = await response.text()
    const previewName = toVariantPreviewName(componentName, variantId)
    const codeExportName = toVariantCodeExportName(componentName, variantId)
    const previewSource = transformRadixExampleSource(rawSource, previewName)
    const consumerSource = transformRadixExampleSource(
      rawSource.replace(/export function \w+/, "export function Example"),
      "Example"
    )
    const consumerCode = transformConsumerCode(consumerSource)

    const variantDir = path.join(GENERATED_DIR, componentName)
    await mkdir(variantDir, { recursive: true })
    await writeFile(path.join(variantDir, `${variantId}.tsx`), `${previewSource}\n`)
    await writeFile(
      path.join(variantDir, `${variantId}.code.ts`),
      `export const ${codeExportName} = ${JSON.stringify(consumerCode)}\n`
    )

    const variant = {
      id: variantId,
      title: toDocVariantTitle(variantId),
      description: `${toDocVariantTitle(variantId)} example from shadcn docs.`,
      previewName,
      codeExportName,
      importPath: `@/app/component-examples/generated/${componentName}/${variantId}`,
    }

    if (pageByName.has(componentName)) {
      pageByName.get(componentName).variants.push(variant)
      existingIds.get(componentName).add(normalizeVariantId(variantId))
    } else {
      const item = uiItemByName.get(componentName)
      const page = {
        name: componentName,
        title: item?.title ?? toExportName(componentName),
        description: item?.description ?? `ModernUI ${componentName} component.`,
        variants: [variant],
      }
      generatedPages.push(page)
      pageByName.set(componentName, page)
      existingIds.set(componentName, new Set([normalizeVariantId(variantId)]))
    }

    added++
  }

  generatedPages.sort((a, b) => a.name.localeCompare(b.name))
  for (const page of generatedPages) {
    page.variants.sort((a, b) => {
      if (a.id === "default") return -1
      if (b.id === "default") return 1
      return a.id.localeCompare(b.id)
    })
  }

  console.log(`\nRadix doc examples added: ${added}`)
  return { added }
}

export { resolveRadixExampleFiles, syncRadixDocExamples }
