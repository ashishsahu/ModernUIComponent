import { access, readFile } from "node:fs/promises"
import { constants } from "node:fs"

const registry = JSON.parse(await readFile("registry.json", "utf8"))
const items = registry.items.map((item) => item.name)

for (const item of items) {
  await access(`public/r/${item}.json`, constants.F_OK)
}

await access("public/r/registry.json", constants.F_OK)

console.log(`Validated ${items.length} registry items and catalog.`)
