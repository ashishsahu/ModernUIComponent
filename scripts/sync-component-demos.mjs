import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"

const ROOT = process.cwd()
const REGISTRY_URL = "https://ui.shadcn.com/r/styles/new-york"
const GENERATED_DIR = path.join(ROOT, "app/component-examples/generated")
const MANUAL_PAGES = new Set(["accordion"])
const BLOCK_COMPONENTS = new Set(["sidebar", "calendar"])
const INTERNAL_COMPONENTS = new Set(["sidebar"])
const CHART_EXAMPLES = new Set([
  "chart-bar-demo",
  "chart-bar-demo-grid",
  "chart-bar-demo-axis",
  "chart-bar-demo-tooltip",
  "chart-bar-demo-legend",
  "chart-tooltip-demo",
])
const EXCLUDE_ITEMS = new Set(["data-table-demo", "mode-toggle"])
const MANUAL_VARIANTS = new Map([
  [
    "sidebar",
    {
      rsc: {
        previewName: "SidebarModernUiRscPreview",
        codeExportName: "sidebarModernUiRscCode",
        importPath: "@/app/component-examples/sidebar-modernui-rsc",
        title: "RSC",
        description:
          "Load ModernUI registry sections with Suspense and a skeleton fallback.",
      },
    },
  ],
])

function toExportName(name) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

function toVariantId(componentName, itemName, kind) {
  if (kind === "block") {
    return itemName.slice(componentName.length + 1)
  }
  if (itemName === `${componentName}-demo`) return "default"
  return itemName.slice(componentName.length + 1)
}

function toVariantTitle(variantId, kind) {
  if (variantId === "default") return "Default"
  if (kind === "block" && /^\d+$/.test(variantId)) return `Example ${variantId}`
  return variantId
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

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

function applySharedTransforms(content) {
  return content
    .replaceAll("@/registry/new-york/ui/", "@/registry/default/ui/")
    .replaceAll("@/registry/new-york/lib/", "@/lib/")
    .replaceAll("@/registry/new-york/hooks/", "@/hooks/")
    .replaceAll("@/registry/new-york/components/", "@/registry/default/ui/")
    .replaceAll("@/components/ui/", "@/registry/default/ui/")
    .replaceAll("@/components/language-selector", "@/hooks/use-translation-stub")
    .replaceAll("clip-path=", "clipPath=")
    .replace(
      /<Link href="([^"]*)" legacyBehavior passHref>\s*<NavigationMenuLink className=\{navigationMenuTriggerStyle\(\)\}>\s*([\s\S]*?)\s*<\/NavigationMenuLink>\s*<\/Link>/g,
      '<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>\n            <Link href="$1">$2</Link>\n          </NavigationMenuLink>'
    )
    .replace(
      /<BreadcrumbLink>\s*<Link href="([^"]*)">([\s\S]*?)<\/Link>\s*<\/BreadcrumbLink>/g,
      "<BreadcrumbLink asChild>\n            <Link href=\"$1\">$2</Link>\n          </BreadcrumbLink>"
    )
    .replace(
      /<BreadcrumbItem key=\{index\}>\s*\{item\.href \? \(\s*<>\s*<BreadcrumbLink([\s\S]*?)<\/BreadcrumbLink>\s*<BreadcrumbSeparator \/>\s*<\/>\s*\) : \(([\s\S]*?)<\/BreadcrumbPage>\s*\)\s*\}\s*<\/BreadcrumbItem>/g,
      "<React.Fragment key={item.label}>\n            <BreadcrumbItem>\n              {item.href ? (\n                <BreadcrumbLink$1</BreadcrumbLink>\n              ) : (\n                $2</BreadcrumbPage>\n              )}\n            </BreadcrumbItem>\n            {item.href ? <BreadcrumbSeparator /> : null}\n          </React.Fragment>"
    )
    .replaceAll('direction="horizontal"', 'orientation="horizontal"')
    .replaceAll('direction="vertical"', 'orientation="vertical"')
    .replace(/\s*initialFocus(?:={[^}]*}|)/g, "")
    .replace(
      /import \{ DropdownMenuCheckboxItemProps \} from "@radix-ui\/react-dropdown-menu"\n\n/,
      ""
    )
    .replaceAll(
      "DropdownMenuCheckboxItemProps",
      "React.ComponentProps<typeof DropdownMenuCheckboxItem>"
    )
    .replace(
      /import \{ Icons \} from "@\/components\/icons"\n/,
      'import { Sparkles } from "lucide-react"\n'
    )
    .replaceAll("<Icons.logo", "<Sparkles")
}

function transformAsyncRscPreviewForClient(source) {
  if (!/async function \w+\(\) \{[\s\S]*?await /.test(source)) {
    return source
  }

  let result = source.replace(
    /async function (\w+)\(\) \{\s*const (\w+) = await (\w+)\(\)/,
    `const $3Promise = $3()\n\nfunction $1() {\n  const $2 = React.use($3Promise)`
  )

  if (result === source) return source

  if (!result.startsWith('"use client"')) {
    result = `"use client"\n\n${result}`
  }

  return result
}

function transformPreviewSource(content, previewName) {
  let source = applySharedTransforms(content)

  source = source.replace(
    /export default function \w+\(/,
    `export function ${previewName}(`
  )
  source = source.replace(
    /export default function \w+\(\)/,
    `export function ${previewName}()`
  )

  source = transformAsyncRscPreviewForClient(source)

  const needsClient =
    /useState|useEffect|useMemo|useCallback|useRef|useReducer|useContext|React\.use\(|"use client"/.test(
      source
    )

  if (!source.startsWith('"use client"') && needsClient) {
    source = `"use client"\n\n${source}`
  }

  return source
}

function transformConsumerCode(content) {
  let code = applySharedTransforms(content)
    .replaceAll("@/registry/new-york/ui/", "@/components/ui/")
    .replaceAll("@/components/ui/", "@/components/ui/")

  code = code.replace(/export default function (\w+)/, "export function $1")
  return code
}

function transformBlockFile(content, componentName, blockName) {
  const blockBase = `@/app/component-examples/generated/${componentName}/blocks/${blockName}`
  let source = applySharedTransforms(content)
  source = source.replaceAll(
    `@/registry/new-york/blocks/${blockName}/`,
    `${blockBase}/`
  )
  return source
}

function findComponentForItem(itemName, uiNamesByLength) {
  if (CHART_EXAMPLES.has(itemName)) return "chart"

  return uiNamesByLength.find(
    (name) =>
      itemName === `${name}-demo` ||
      (itemName.startsWith(`${name}-`) && itemName.length > name.length + 1)
  )
}

function groupRegistryItems(uiNames, items) {
  const uiNamesByLength = [...uiNames].sort((a, b) => b.length - a.length)
  const grouped = new Map()

  const addItem = (componentName, item, kind) => {
    if (MANUAL_PAGES.has(componentName)) return
    if (!grouped.has(componentName)) grouped.set(componentName, [])
    grouped.get(componentName).push({ ...item, kind })
  }

  for (const item of items) {
    if (EXCLUDE_ITEMS.has(item.name)) continue

    if (item.type === "registry:example") {
      const componentName = findComponentForItem(item.name, uiNamesByLength)
      if (componentName) addItem(componentName, item, "example")
      continue
    }

    if (item.type === "registry:internal") {
      for (const componentName of INTERNAL_COMPONENTS) {
        if (
          item.name === `${componentName}-demo` ||
          (item.name.startsWith(`${componentName}-`) &&
            item.name.length > componentName.length + 1)
        ) {
          addItem(componentName, item, "internal")
        }
      }
      continue
    }

    if (item.type === "registry:block") {
      for (const componentName of BLOCK_COMPONENTS) {
        if (new RegExp(`^${componentName}-\\d+$`).test(item.name)) {
          addItem(componentName, item, "block")
        }
      }
    }
  }

  for (const [componentName, entries] of grouped) {
    entries.sort((a, b) => {
      const rank = (entry) => {
        if (entry.name.endsWith("-demo")) return 0
        if (entry.kind === "block") return 2
        return 1
      }
      const diff = rank(a) - rank(b)
      if (diff !== 0) return diff
      return a.name.localeCompare(b.name)
    })
    grouped.set(componentName, entries)
  }

  return grouped
}

async function fetchRegistryItem(name) {
  const response = await fetch(`${REGISTRY_URL}/${name}.json`)
  if (!response.ok) return null
  return response.json()
}

async function writeExampleVariant(componentName, itemMeta, kind) {
  const item = await fetchRegistryItem(itemMeta.name)
  const rawSource = item?.files?.[0]?.content
  if (!rawSource) return null

  const variantId = toVariantId(componentName, itemMeta.name, kind)
  const manualVariant = MANUAL_VARIANTS.get(componentName)?.[variantId]
  if (manualVariant) {
    return {
      id: variantId,
      title: manualVariant.title,
      description: manualVariant.description,
      previewName: manualVariant.previewName,
      codeExportName: manualVariant.codeExportName,
      importPath: manualVariant.importPath,
    }
  }
  const previewName = toVariantPreviewName(componentName, variantId)
  const codeExportName = toVariantCodeExportName(componentName, variantId)
  const previewSource = transformPreviewSource(rawSource, previewName)
  const consumerCode = transformConsumerCode(rawSource)

  const variantDir = path.join(GENERATED_DIR, componentName)
  await mkdir(variantDir, { recursive: true })

  await writeFile(path.join(variantDir, `${variantId}.tsx`), `${previewSource}\n`)
  await writeFile(
    path.join(variantDir, `${variantId}.code.ts`),
    `export const ${codeExportName} = ${JSON.stringify(consumerCode)}\n`
  )

  return {
    id: variantId,
    title: toVariantTitle(variantId, kind),
    description: `shadcn ${componentName} ${kind === "internal" ? "pattern" : "example"}.`,
    previewName,
    codeExportName,
    importPath: `@/app/component-examples/generated/${componentName}/${variantId}`,
  }
}

async function writeBlockVariant(componentName, itemMeta) {
  const item = await fetchRegistryItem(itemMeta.name)
  if (!item?.files?.length) return null

  const blockName = itemMeta.name
  const blockDir = path.join(GENERATED_DIR, componentName, "blocks", blockName)
  await mkdir(blockDir, { recursive: true })

  let entryImportPath = null

  for (const file of item.files) {
    let relativePath = file.path
    if (relativePath.startsWith(`blocks/${blockName}/`)) {
      relativePath = relativePath.slice(`blocks/${blockName}/`.length)
    } else if (relativePath === `blocks/${blockName}.tsx`) {
      relativePath = "index.tsx"
    }

    const transformed = transformBlockFile(file.content, componentName, blockName)
    const outPath = path.join(blockDir, relativePath)
    await mkdir(path.dirname(outPath), { recursive: true })
    await writeFile(outPath, `${transformed}\n`)

    if (relativePath === "page.tsx" || relativePath === "index.tsx") {
      entryImportPath = `@/app/component-examples/generated/${componentName}/blocks/${blockName}/${relativePath.replace(/\.tsx$/, "")}`
    }
  }

  if (!entryImportPath) return null

  const variantId = toVariantId(componentName, blockName, "block")
  const previewName = toVariantPreviewName(componentName, variantId)
  const codeExportName = toVariantCodeExportName(componentName, variantId)
  const entryFile = entryImportPath.endsWith("/page")
    ? "page.tsx"
    : entryImportPath.endsWith("/index")
      ? "index.tsx"
      : "page.tsx"

  const blockEntrySource = item.files.find(
    (file) =>
      file.path === `blocks/${blockName}/${entryFile}` ||
      file.path === `blocks/${blockName}.tsx`
  )?.content
  const consumerCode = blockEntrySource
    ? transformConsumerCode(blockEntrySource)
    : ""

  const wrapperSource = `"use client"

import BlockExample from "${entryImportPath}"

import { BlockPreviewFrame } from "@/app/variant-preview-canvas"

export function ${previewName}() {
  return <BlockPreviewFrame Block={BlockExample} />
}
`

  const variantDir = path.join(GENERATED_DIR, componentName)
  await writeFile(path.join(variantDir, `${variantId}.tsx`), wrapperSource)
  await writeFile(
    path.join(variantDir, `${variantId}.code.ts`),
    `export const ${codeExportName} = ${JSON.stringify(consumerCode)}\n`
  )

  return {
    id: variantId,
    title: toVariantTitle(variantId, "block"),
    description: `shadcn ${blockName} block example.`,
    previewName,
    codeExportName,
    importPath: `@/app/component-examples/generated/${componentName}/${variantId}`,
  }
}

async function writeGeneratedPages(generatedPages) {
  const imports = generatedPages
    .flatMap((page) =>
      page.variants.flatMap((variant) => [
        `import { ${variant.previewName} } from "${variant.importPath}"`,
        `import { ${variant.codeExportName} } from "${variant.importPath}.code"`,
      ])
    )
    .join("\n")

  const pagesObject = generatedPages
    .map(
      (page) => `  ${JSON.stringify(page.name)}: {
    name: ${JSON.stringify(page.name)},
    title: ${JSON.stringify(page.title)},
    description: ${JSON.stringify(page.description)},
    install: ${JSON.stringify(`npx shadcn@latest add ashishsahu/ModernUIComponent/${page.name}`)},
    variants: [
${page.variants
  .map(
    (variant) => `      {
        id: ${JSON.stringify(variant.id)},
        title: ${JSON.stringify(variant.title)},
        description: ${JSON.stringify(variant.description)},
        Preview: ${variant.previewName},
        code: ${variant.codeExportName},
      },`
  )
  .join("\n")}
    ],
  },`
    )
    .join("\n")

  await writeFile(
    path.join(ROOT, "app/component-variants/generated-pages.tsx"),
    `"use client"

${imports}
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const generatedVariantPages: Record<string, ComponentVariantPage> = {
${pagesObject}
}
`
  )
}

async function main() {
  const ourRegistry = JSON.parse(
    await readFile(path.join(ROOT, "registry.json"), "utf8")
  )
  const uiItems = ourRegistry.items.filter((item) => item.type === "registry:ui")
  const uiNames = uiItems.map((item) => item.name)
  const uiItemByName = new Map(uiItems.map((item) => [item.name, item]))

  const shadcnRegistry = await fetch(`${REGISTRY_URL}/registry.json`).then((r) =>
    r.json()
  )
  const grouped = groupRegistryItems(uiNames, shadcnRegistry.items)

  await rm(GENERATED_DIR, { recursive: true, force: true })
  await mkdir(GENERATED_DIR, { recursive: true })

  const generatedPages = []
  const skipped = []

  for (const [componentName, entries] of grouped) {
    const item = uiItemByName.get(componentName)
    const variants = []

    for (const entry of entries) {
      const variant =
        entry.kind === "block"
          ? await writeBlockVariant(componentName, entry)
          : await writeExampleVariant(componentName, entry, entry.kind)
      if (variant) variants.push(variant)
    }

    if (!variants.length) {
      skipped.push(componentName)
      continue
    }

    generatedPages.push({
      name: componentName,
      title: item?.title ?? toExportName(componentName),
      description: item?.description ?? `ModernUI ${componentName} component.`,
      variants,
    })

    console.log(`  ${componentName} (${variants.length})`)
  }

  const { syncRadixDocExamples } = await import("./sync-radix-doc-examples.mjs")
  await syncRadixDocExamples({ generatedPages, uiNames, uiItemByName })
  await writeGeneratedPages(generatedPages)

  console.log(`\nGenerated registry pages: ${generatedPages.length}`)
  if (skipped.length) {
    console.log(`No registry variants: ${skipped.join(", ")}`)
  }

  return { generatedPages, uiItemByName, skipped }
}

export { main as syncComponentDemos, GENERATED_DIR, toExportName, transformPreviewSource, transformConsumerCode, writeFile, mkdir, path, ROOT }
