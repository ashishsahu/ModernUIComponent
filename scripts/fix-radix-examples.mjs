import { readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"

const GENERATED_DIR = path.join(process.cwd(), "app/component-examples/generated")

function normalizeLucideImports(content) {
  return content.replace(
    /import\s+\{([^}]+)\}\s+from\s+"lucide-react"/g,
    (_, imports) => {
      const names = imports
        .split(",")
        .map((part) => part.trim().replace(/^Icon/, ""))
        .join(", ")
      return `import { ${names} } from "lucide-react"`
    }
  )
}

function applyFixes(content) {
  return normalizeLucideImports(
    content
      .replaceAll(/@\/styles\/radix-[^/]+\/ui-rtl\//g, "@/registry/default/ui/")
      .replaceAll(/@\/styles\/radix-[^/]+\/ui\//g, "@/registry/default/ui/")
      .replaceAll(/@\/styles\/[^/]+\/ui-rtl\//g, "@/registry/default/ui/")
      .replaceAll(/@\/styles\/[^/]+\/ui\//g, "@/registry/default/ui/")
      .replaceAll("@/registry/new-york-v4/ui/", "@/registry/default/ui/")
      .replaceAll("@/registry/icons/__lucide__", "lucide-react")
      .replace(/from "@tabler\/icons-react"/g, 'from "lucide-react"')
      .replace(/<Card([^>]*)\ssize="[^"]*"/g, "<Card$1")
      .replace(/size="xs"/g, 'size="sm"')
      .replace(/\bIcon([A-Z][A-Za-z0-9]*)\b/g, "$1")
  )
}

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(fullPath)
      continue
    }
    if (!entry.name.endsWith(".tsx") && !entry.name.endsWith(".code.ts")) continue
    const content = await readFile(fullPath, "utf8")
    const fixed = applyFixes(content)
    if (fixed !== content) {
      await writeFile(fullPath, fixed)
    }
  }
}

await walk(GENERATED_DIR)
console.log("Fixed radix example imports")
