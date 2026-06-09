import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

import {
  applySharedTransforms,
  ROOT,
  toExportName,
  transformConsumerCode,
} from "./sync-component-demos.mjs"

const GENERATED_DIR = path.join(ROOT, "app/component-examples/generated")
const VARIANTS_DIR = path.join(ROOT, "app/component-variants")

const AUTH_PAGES = [
  {
    name: "login",
    title: "Login",
    description: "Authentication layouts and login form blocks.",
    style: "new-york",
    blocks: ["01", "02", "03", "04", "05"],
  },
  {
    name: "signup",
    title: "Signup",
    description: "Registration layouts and signup form blocks.",
    style: "new-york-v4",
    blocks: ["01", "02", "03", "04", "05"],
  },
]

function applyAuthTransforms(content) {
  return applySharedTransforms(content)
    .replaceAll("@/registry/new-york-v4/ui/", "@/registry/default/ui/")
    .replaceAll("@/registry/new-york-v4/lib/", "@/lib/")
    .replaceAll("@/registry/new-york-v4/blocks/", "@/registry/default/blocks/")
    .replaceAll("@/registry/new-york/blocks/", "@/registry/default/blocks/")
    .replaceAll("@/registry/default/lib/utils", "@/lib/utils")
}

function transformAuthBlockFile(content, pageName, blockName) {
  const blockBase = `@/app/component-examples/generated/${pageName}/blocks/${blockName}`
  let source = applyAuthTransforms(content)
  source = source.replaceAll(
    `@/registry/default/blocks/${blockName}/`,
    `${blockBase}/`
  )
  return source
}

function toBlockRegistryName(pageName, variantId) {
  return `${pageName}-${variantId}`
}

function toVariantPreviewName(pageName, variantId) {
  return `${toExportName(pageName)}${variantId}Preview`
}

function toVariantCodeExportName(pageName, variantId) {
  return `${toExportName(pageName)}${variantId}Code`
}

function normalizeBlockFilePath(filePath, blockName) {
  if (filePath.startsWith(`blocks/${blockName}/`)) {
    return filePath.slice(`blocks/${blockName}/`.length)
  }
  if (filePath.startsWith(`registry/new-york-v4/blocks/${blockName}/`)) {
    return filePath.slice(`registry/new-york-v4/blocks/${blockName}/`.length)
  }
  if (filePath === `blocks/${blockName}.tsx`) {
    return "index.tsx"
  }
  return filePath
}

async function fetchRegistryItem(style, name) {
  const response = await fetch(
    `https://ui.shadcn.com/r/styles/${style}/${name}.json`
  )
  if (!response.ok) return null
  return response.json()
}

async function writeAuthBlockVariant(pageConfig, variantId) {
  const blockName = toBlockRegistryName(pageConfig.name, variantId)
  const item = await fetchRegistryItem(pageConfig.style, blockName)
  if (!item?.files?.length) {
    throw new Error(`Missing registry item: ${blockName}`)
  }

  const blockDir = path.join(
    GENERATED_DIR,
    pageConfig.name,
    "blocks",
    blockName
  )
  await mkdir(blockDir, { recursive: true })

  let entryImportPath = null

  for (const file of item.files) {
    const relativePath = normalizeBlockFilePath(file.path, blockName)
    const transformed = transformAuthBlockFile(
      file.content,
      pageConfig.name,
      blockName
    )
    const outPath = path.join(blockDir, relativePath)
    await mkdir(path.dirname(outPath), { recursive: true })
    await writeFile(outPath, `${transformed}\n`)
  }

  const entryFile =
    item.files.find((file) => normalizeBlockFilePath(file.path, blockName) === "page.tsx")
      ?.path ?? null

  if (entryFile) {
    entryImportPath = `@/app/component-examples/generated/${pageConfig.name}/blocks/${blockName}/page`
  }

  if (!entryImportPath) {
    throw new Error(`Missing page entry for ${blockName}`)
  }

  const previewName = toVariantPreviewName(pageConfig.name, variantId)
  const codeExportName = toVariantCodeExportName(pageConfig.name, variantId)
  const blockEntrySource = item.files.find(
    (file) => normalizeBlockFilePath(file.path, blockName) === "page.tsx"
  )?.content
  const consumerCode = blockEntrySource
    ? transformConsumerCode(applyAuthTransforms(blockEntrySource))
    : ""

  const variantDir = path.join(GENERATED_DIR, pageConfig.name)
  await mkdir(variantDir, { recursive: true })

  const wrapperSource = `"use client"

import BlockExample from "${entryImportPath}"

import { BlockPreviewFrame } from "@/app/variant-preview-canvas"

export function ${previewName}() {
  return <BlockPreviewFrame Block={BlockExample} />
}
`

  await writeFile(path.join(variantDir, `${variantId}.tsx`), wrapperSource)
  await writeFile(
    path.join(variantDir, `${variantId}.code.ts`),
    `export const ${codeExportName} = ${JSON.stringify(consumerCode)}\n`
  )

  return {
    id: variantId,
    title: `Example ${variantId}`,
    description: item.description ?? `shadcn ${blockName} block.`,
    install: `npx shadcn@latest add ${blockName}`,
    previewName,
    codeExportName,
    importPath: `@/app/component-examples/generated/${pageConfig.name}/${variantId}`,
  }
}

async function writeAuthBlockPages(pages) {
  const imports = pages
    .flatMap((page) =>
      page.variants.flatMap((variant) => [
        `import { ${variant.previewName} } from "${variant.importPath}"`,
        `import { ${variant.codeExportName} } from "${variant.importPath}.code"`,
      ])
    )
    .join("\n")

  const exports = pages
    .map(
      (page) => `export const ${toExportName(page.name)}VariantPage: ComponentVariantPage = {
  name: ${JSON.stringify(page.name)},
  title: ${JSON.stringify(page.title)},
  description: ${JSON.stringify(page.description)},
  install: ${JSON.stringify(`npx shadcn@latest add ${page.name}-01`)},
  variants: [
${page.variants
  .map(
    (variant) => `    {
      id: ${JSON.stringify(variant.id)},
      title: ${JSON.stringify(variant.title)},
      description: ${JSON.stringify(variant.description)},
      Preview: ${variant.previewName},
      code: ${variant.codeExportName},
    },`
  )
  .join("\n")}
  ],
}`
    )
    .join("\n\n")

  await writeFile(
    path.join(VARIANTS_DIR, "auth-block-pages.ts"),
    `import type { ComponentVariantPage } from "@/app/component-variants/types"

${imports}

${exports}
`
  )
}

async function writeCatalogPreviews(pages) {
  const imports = pages
    .map(
      (page) =>
        `import { ${toVariantPreviewName(page.name, "01")} } from "@/app/component-examples/generated/${page.name}/01"`
    )
    .join("\n")

  const entries = pages
    .map(
      (page) => `  ${JSON.stringify(page.name)}: (
    <div className="mx-auto w-full max-w-sm [&_[class*='min-h-\\[min\\(720px']]:!min-h-64">
      <${toVariantPreviewName(page.name, "01")} />
    </div>
  ),`
    )
    .join("\n")

  await writeFile(
    path.join(ROOT, "app/component-examples/auth-block-catalog-previews.tsx"),
    `"use client"

${imports}

export const authBlockCatalogPreviews = {
${entries}
} as const
`
  )
}

async function main() {
  const pages = []

  for (const pageConfig of AUTH_PAGES) {
    const variants = []

    for (const variantId of pageConfig.blocks) {
      const variant = await writeAuthBlockVariant(pageConfig, variantId)
      variants.push(variant)
      console.log(`  ${pageConfig.name}-${variantId}`)
    }

    pages.push({ ...pageConfig, variants })
  }

  await writeAuthBlockPages(pages)
  await writeCatalogPreviews(pages)

  console.log(`\nGenerated auth block pages: ${pages.map((page) => page.name).join(", ")}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
