import { readdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const UI_DIR = "registry/default/ui"
const ROOT = process.cwd()

const NPM_IMPORTS = {
  "radix-ui": "radix-ui",
  "lucide-react": "lucide-react",
  "class-variance-authority": "class-variance-authority",
  "@radix-ui/react-slot": "@radix-ui/react-slot",
  "@radix-ui/react-label": "@radix-ui/react-label",
  zod: "zod",
  "react-hook-form": "react-hook-form",
  "@hookform/resolvers": "@hookform/resolvers",
  cmdk: "cmdk",
  "date-fns": "date-fns",
  "react-day-picker": "react-day-picker",
  "embla-carousel-react": "embla-carousel-react",
  recharts: "recharts",
  sonner: "sonner",
  "next-themes": "next-themes",
  vaul: "vaul",
  "input-otp": "input-otp",
  "react-resizable-panels": "react-resizable-panels",
  "@base-ui/react": "@base-ui/react",
}

function titleCase(name) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function parseImports(source) {
  const registryDeps = new Set()
  const npmDeps = new Set()

  const importRegex = /from\s+["']([^"']+)["']/g
  let match

  while ((match = importRegex.exec(source)) !== null) {
    const specifier = match[1]

    if (
      specifier.startsWith("@/registry/default/ui/") ||
      specifier.startsWith("@/components/ui/")
    ) {
      const dep = specifier.split("/").pop()
      if (dep && dep !== "use-mobile") {
        registryDeps.add(dep.replace(/\.tsx?$/, ""))
      }
    }

    if (NPM_IMPORTS[specifier]) {
      npmDeps.add(NPM_IMPORTS[specifier])
    }
  }

  return { registryDeps, npmDeps }
}

async function main() {
  const entries = await readdir(path.join(ROOT, UI_DIR))
  const componentFiles = entries.filter((file) => file.endsWith(".tsx"))
  const hookFiles = entries.filter((file) => file.endsWith(".ts"))

  const items = []

  const foundation = [
    {
      name: "theme",
      type: "registry:theme",
      title: "ModernUI Theme",
      description: "Design tokens, CSS variables, and base styles for ModernUI.",
      files: [
        {
          path: "registry/default/theme/globals.css",
          type: "registry:theme",
          target: "app/globals.css",
        },
      ],
    },
    {
      name: "utils",
      type: "registry:lib",
      title: "Utils",
      description: "Utility helpers including the cn() classname merger.",
      dependencies: ["clsx", "tailwind-merge"],
      files: [
        {
          path: "lib/utils.ts",
          type: "registry:lib",
          target: "lib/utils.ts",
        },
      ],
    },
  ]

  for (const file of componentFiles.sort()) {
    const name = file.replace(/\.tsx$/, "")
    const source = await readFile(path.join(ROOT, UI_DIR, file), "utf8")
    const { registryDeps, npmDeps } = parseImports(source)

    registryDeps.delete(name)

    const files = [
      {
        path: `${UI_DIR}/${file}`,
        type: "registry:ui",
      },
    ]

    if (name === "sidebar" && hookFiles.includes("use-mobile.ts")) {
      files.push({
        path: `${UI_DIR}/use-mobile.ts`,
        type: "registry:hook",
      })
    }

    const item = {
      name,
      type: "registry:ui",
      title: titleCase(name),
      description: `ModernUI ${titleCase(name)} component.`,
      files,
    }

    if (npmDeps.size > 0) {
      item.dependencies = [...npmDeps].sort()
    }

    const deps = new Set(["utils", ...registryDeps])
    deps.delete(name)
    if (deps.size > 0) {
      item.registryDependencies = [...deps].sort()
    }

    items.push(item)
  }

  items.push({
    name: "login-form",
    type: "registry:block",
    title: "Login Form",
    description: "A sign-in form with Zod validation and ModernUI brand styling.",
    dependencies: ["zod"],
    registryDependencies: ["button", "input", "label", "card"],
    files: [
      {
        path: "registry/default/blocks/login-form/login-form.tsx",
        type: "registry:component",
      },
    ],
  })

  items.push({
    name: "project-setup",
    type: "registry:item",
    title: "Project Setup",
    description:
      "Shared project conventions and agent instructions for ModernUI projects.",
    files: [
      {
        path: "AGENTS.md",
        type: "registry:file",
        target: "~/AGENTS.md",
      },
      {
        path: "docs/CONSUMER.md",
        type: "registry:file",
        target: "~/docs/modernui-setup.md",
      },
    ],
  })

  const registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "modernui",
    homepage: "https://github.com/ashishsahu/ModernUIComponent",
    items: [...foundation, ...items],
  }

  await writeFile(
    path.join(ROOT, "registry.json"),
    `${JSON.stringify(registry, null, 2)}\n`
  )

  console.log(`Generated registry.json with ${registry.items.length} items.`)
}

main()
