"use client"

import * as React from "react"

import { catalog, type CatalogItem } from "@/app/catalog"
import {
  ComponentCodeDrawer,
  ViewCodeButton,
  ViewVariantsButton,
} from "@/app/component-code-drawer"
import { ComponentRegistryLayout } from "@/app/component-registry-layout"
import {
  useRegistryActiveSection,
  useRegistryScrollTarget,
} from "@/app/component-registry-sidebar"
import { useComponentSearch } from "@/app/component-search"
import { getDetailPageLabel, hasVariantPage } from "@/app/component-variants"
import { componentPreviews } from "@/app/component-previews"

function LazyPreview({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full">
      {visible ? children : <div className="min-h-24 w-full" aria-hidden />}
    </div>
  )
}

function ComponentCard({
  item,
  onViewCode,
}: {
  item: CatalogItem
  onViewCode: (item: CatalogItem) => void
}) {
  const preview = componentPreviews[item.name]

  return (
    <article
      id={item.name}
      className="scroll-mt-24 flex flex-col gap-4 rounded-lg border bg-card p-4"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.description}</p>
          <code className="text-muted-foreground mt-1 break-all text-xs">
            {item.install}
          </code>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {hasVariantPage(item.name) ? (
            <ViewVariantsButton
              href={`/components/${item.name}`}
              label={getDetailPageLabel(item.name)}
            />
          ) : null}
          <ViewCodeButton onClick={() => onViewCode(item)} />
        </div>
      </div>
      {preview ? (
        <div className="rounded-lg border border-border bg-muted/50 p-1.5">
          <div className="flex min-h-24 w-full items-center justify-center rounded-md bg-card p-6 shadow-sm ring-1 ring-border/40">
            <LazyPreview>{preview}</LazyPreview>
          </div>
        </div>
      ) : null}
    </article>
  )
}

export function ComponentShowcase() {
  useRegistryScrollTarget()
  const activeName = useRegistryActiveSection()
  const { query } = useComponentSearch()
  const [codeItem, setCodeItem] = React.useState<CatalogItem | null>(null)
  const [codeOpen, setCodeOpen] = React.useState(false)

  const handleViewCode = React.useCallback((item: CatalogItem) => {
    setCodeItem(item)
    setCodeOpen(true)
  }, [])

  const filteredCatalog = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return catalog

    return catalog
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.name.includes(q) ||
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        ),
      }))
      .filter((category) => category.items.length > 0)
  }, [query])

  const totalCount = catalog.reduce((sum, c) => sum + c.items.length, 0)

  return (
    <ComponentRegistryLayout activeName={activeName}>
      <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Component Registry
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {totalCount} components distributed via the shadcn CLI. Install
            source into any React project — teams own the code.
          </p>
        </header>

        <section className="bg-muted/50 flex flex-col gap-3 rounded-lg border p-4">
          <h2 className="text-sm font-medium">Quick start</h2>
          <pre className="bg-background overflow-x-auto rounded-md border p-3 text-sm">
            <code>{`npx shadcn@latest init
npx shadcn@latest add ashishsahu/ModernUIComponent/theme
npx shadcn@latest add ashishsahu/ModernUIComponent/utils
npx shadcn@latest add ashishsahu/ModernUIComponent/button`}</code>
          </pre>
        </section>

        <main className="flex flex-col gap-10 pb-16">
          {filteredCatalog.map((category) => (
            <section key={category.id} className="flex flex-col gap-4">
              <h2 className="border-b pb-2 text-xl font-semibold">
                {category.title}
              </h2>
              <div className="grid gap-4">
                {category.items.map((item) => (
                  <ComponentCard
                    key={item.name}
                    item={item}
                    onViewCode={handleViewCode}
                  />
                ))}
              </div>
            </section>
          ))}
        </main>

      <ComponentCodeDrawer
        item={codeItem}
        open={codeOpen}
        onOpenChange={setCodeOpen}
      />
    </ComponentRegistryLayout>
  )
}
