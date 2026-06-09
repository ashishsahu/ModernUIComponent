import { readFile } from "node:fs/promises"
import path from "node:path"

export type RegistryCodeFile = {
  path: string
  content: string
}

export type RegistryCodeResult = {
  name: string
  title: string
  description: string
  install: string
  files: RegistryCodeFile[]
}

type RegistryFile = {
  path: string
}

type RegistryItem = {
  name: string
  title?: string
  description?: string
  files?: RegistryFile[]
}

type Registry = {
  items: RegistryItem[]
}

const ROOT = process.cwd()

export function isValidRegistryName(name: string) {
  return /^[a-z0-9-]+$/.test(name)
}

export async function getRegistryComponentCode(
  name: string
): Promise<RegistryCodeResult | null> {
  if (!isValidRegistryName(name)) return null

  const registryPath = path.join(ROOT, "registry.json")
  const registry = JSON.parse(await readFile(registryPath, "utf8")) as Registry
  const item = registry.items.find((entry) => entry.name === name)

  if (!item?.files?.length) return null

  const files = await Promise.all(
    item.files.map(async (file) => {
      const filePath = path.join(ROOT, file.path)
      const resolved = path.resolve(filePath)
      if (!resolved.startsWith(ROOT)) {
        throw new Error("Invalid registry file path")
      }

      return {
        path: file.path,
        content: await readFile(resolved, "utf8"),
      }
    })
  )

  return {
    name: item.name,
    title: item.title ?? item.name,
    description: item.description ?? "",
    install: `npx shadcn@latest add ashishsahu/ModernUIComponent/${item.name}`,
    files,
  }
}
