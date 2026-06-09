import {
  GENERATED_DIR,
  mkdir,
  path,
  syncComponentDemos,
  transformConsumerCode,
  transformPreviewSource,
  toExportName,
  writeFile,
  ROOT,
} from "./sync-component-demos.mjs"
import { docVariantDefinitions } from "./doc-variant-definitions.mjs"
import { readFile } from "node:fs/promises"

const MANUAL_PAGES = ["accordion", "project-setup"]
const DOC_ONLY_PAGES = new Set(Object.keys(docVariantDefinitions))

function toVariantPreviewName(componentName, variantId) {
  if (variantId === "default") {
    return `${toExportName(componentName)}DocDemoPreview`
  }
  return `${toExportName(componentName)}Doc${toExportName(variantId)}Preview`
}

function toVariantCodeExportName(componentName, variantId) {
  if (variantId === "default") {
    return `${toExportName(componentName)}DocDemoCode`
  }
  return `${toExportName(componentName)}Doc${toExportName(variantId)}Code`
}

async function writeDocVariants() {
  const docPages = []

  for (const [componentName, variants] of Object.entries(docVariantDefinitions)) {
    const written = []

    for (const variant of variants) {
      const previewName = toVariantPreviewName(componentName, variant.id)
      const codeExportName = toVariantCodeExportName(componentName, variant.id)
      const previewSource = transformPreviewSource(variant.source, previewName)
      const consumerCode = transformConsumerCode(variant.source)

      const variantDir = path.join(GENERATED_DIR, componentName)
      await mkdir(variantDir, { recursive: true })

      const fileId = `doc-${variant.id}`
      await writeFile(path.join(variantDir, `${fileId}.tsx`), `${previewSource}\n`)
      await writeFile(
        path.join(variantDir, `${fileId}.code.ts`),
        `export const ${codeExportName} = ${JSON.stringify(consumerCode)}\n`
      )

      written.push({
        id: variant.id,
        title: variant.title,
        description: variant.description,
        previewName,
        codeExportName,
        importPath: `@/app/component-examples/generated/${componentName}/${fileId}`,
      })
    }

    const ourRegistry = JSON.parse(
      await readFile(path.join(ROOT, "registry.json"), "utf8")
    )
    const item = ourRegistry.items.find((entry) => entry.name === componentName)

    docPages.push({
      name: componentName,
      title: item?.title ?? toExportName(componentName),
      description: item?.description ?? `ModernUI ${componentName} component.`,
      variants: written,
      merge: variants.some((variant) => variant.merge),
    })
  }

  return docPages
}

function renderDocPagesFile(docPages, mergeOnly) {
  const pages = mergeOnly
    ? docPages.filter((page) => page.merge)
    : docPages.filter((page) => !page.merge)

  const imports = pages
    .flatMap((page) =>
      page.variants.flatMap((variant) => [
        `import { ${variant.previewName} } from "${variant.importPath}"`,
        `import { ${variant.codeExportName} } from "${variant.importPath}.code"`,
      ])
    )
    .join("\n")

  const pagesObject = pages
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

  return `"use client"

${imports}
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const ${mergeOnly ? "docVariantSupplements" : "docVariantPages"}: Record<string, ComponentVariantPage> = {
${pagesObject}
}
`
}

async function main() {
  const { generatedPages } = await syncComponentDemos()
  const docPages = await writeDocVariants()

  await writeFile(
    path.join(ROOT, "app/component-variants/doc-pages.tsx"),
    renderDocPagesFile(docPages, false)
  )
  await writeFile(
    path.join(ROOT, "app/component-variants/doc-supplements.tsx"),
    renderDocPagesFile(docPages, true)
  )

  const allNames = [
    ...MANUAL_PAGES,
    ...new Set([
      ...generatedPages.map((page) => page.name),
      ...DOC_ONLY_PAGES,
    ]),
  ].sort()

  await writeFile(
    path.join(ROOT, "app/component-variants/variant-page-names.ts"),
    `export function getVariantPageNames(): string[] {
  return ${JSON.stringify(allNames, null, 2)}
}
`
  )

  const docOnly = docPages.filter((page) => !page.merge)
  const supplements = docPages.filter((page) => page.merge)
  console.log(
    `\nDoc-only pages: ${docOnly.length}, supplements: ${supplements.length}, doc variants: ${docPages.reduce((n, p) => n + p.variants.length, 0)}`
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
