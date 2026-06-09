"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDownIcon } from "lucide-react"

import { catalog, type CatalogCategory, type CatalogItem } from "@/app/catalog"
import { useComponentSearch } from "@/app/component-search"
import { hasVariantPage } from "@/app/component-variants"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible"

const REGISTRY_SECTION_IDS = catalog.flatMap((category) =>
  category.items.map((item) => item.name)
)

const SCROLL_SPY_OFFSET = 120
const SIDEBAR_SCROLL_KEY = "registry:sidebar-scroll"
const FOUNDATION_ID = "foundation"
const BLOCKS_ID = "blocks"

function splitCatalog(categories: CatalogCategory[]) {
  const foundation = categories.find((category) => category.id === FOUNDATION_ID)
  const blocks = categories.find((category) => category.id === BLOCKS_ID)
  const components = categories.filter(
    (category) => category.id !== FOUNDATION_ID && category.id !== BLOCKS_ID
  )

  return { foundation, blocks, components }
}

type ComponentRegistrySidebarProps = {
  activeName?: string
  variantDetail?: boolean
}

function getItemHref(name: string, variantDetail: boolean) {
  if (variantDetail && hasVariantPage(name)) {
    return `/components/${name}`
  }
  return `/#${name}`
}

function getActiveSectionFromScroll() {
  let current = REGISTRY_SECTION_IDS[0]

  for (const id of REGISTRY_SECTION_IDS) {
    const element = document.getElementById(id)
    if (!element) continue
    if (element.getBoundingClientRect().top <= SCROLL_SPY_OFFSET) {
      current = id
    }
  }

  return current
}

export function useRegistryActiveSection() {
  const [activeName, setActiveName] = React.useState<string | undefined>()

  React.useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "")
      if (hash && REGISTRY_SECTION_IDS.includes(hash)) {
        setActiveName(hash)
      }
    }

    const syncFromScroll = () => {
      const current = getActiveSectionFromScroll()
      setActiveName(current)
      const nextHash = `#${current}`
      if (window.location.hash !== nextHash) {
        history.replaceState(null, "", nextHash)
      }
    }

    syncFromHash()
    syncFromScroll()

    window.addEventListener("hashchange", syncFromHash)
    window.addEventListener("scroll", syncFromScroll, { passive: true })

    return () => {
      window.removeEventListener("hashchange", syncFromHash)
      window.removeEventListener("scroll", syncFromScroll)
    }
  }, [])

  return activeName
}

function getInitialOpenGroups(activeName?: string) {
  const { components } = splitCatalog(catalog)

  return Object.fromEntries(
    components.map((category) => [
      category.id,
      activeName
        ? category.items.some((item) => item.name === activeName)
        : false,
    ])
  )
}

function SidebarSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-brand px-2 text-xs font-medium tracking-wide uppercase">
      {children}
    </p>
  )
}

function SidebarNavItem({
  item,
  activeName,
  variantDetail,
}: {
  item: CatalogItem
  activeName?: string
  variantDetail: boolean
}) {
  const isActive = activeName === item.name
  const href = getItemHref(item.name, variantDetail)
  const className = cn(
    "rounded-md px-2 py-1 text-sm transition-colors",
    isActive
      ? "bg-accent text-accent-foreground font-medium"
      : "hover:text-primary"
  )

  if (variantDetail) {
    return (
      <Link href={href} className={className}>
        {item.title}
      </Link>
    )
  }

  return (
    <a href={href} className={className}>
      {item.title}
    </a>
  )
}

export function ComponentRegistrySidebar({
  activeName,
  variantDetail = false,
}: ComponentRegistrySidebarProps) {
  const { query } = useComponentSearch()
  const asideRef = React.useRef<HTMLElement>(null)
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>(
    () => getInitialOpenGroups(activeName)
  )
  const isSearching = query.trim().length > 0

  const filteredCatalog = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return splitCatalog(catalog)

    const filtered = catalog
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

    return splitCatalog(filtered)
  }, [query])

  React.useEffect(() => {
    if (!activeName || isSearching) return

    const { components } = splitCatalog(catalog)
    const category = components.find((entry) =>
      entry.items.some((item) => item.name === activeName)
    )
    if (!category) return

    setOpenGroups((current) =>
      current[category.id]
        ? current
        : { ...current, [category.id]: true }
    )
  }, [activeName, isSearching])

  React.useEffect(() => {
    const aside = asideRef.current
    if (!aside) return

    const saved = sessionStorage.getItem(SIDEBAR_SCROLL_KEY)
    if (saved) {
      aside.scrollTop = Number(saved)
    }

    const onScroll = () => {
      sessionStorage.setItem(SIDEBAR_SCROLL_KEY, String(aside.scrollTop))
    }

    aside.addEventListener("scroll", onScroll, { passive: true })
    return () => aside.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <aside
      ref={asideRef}
      className="no-scrollbar lg:sticky lg:top-24 lg:h-[calc(100svh-8rem)] lg:w-56 lg:shrink-0 lg:overflow-y-auto"
    >
      <nav className="flex flex-col gap-6">
        {filteredCatalog.foundation ? (
          <section className="flex flex-col gap-1">
            <SidebarSectionLabel>Foundation</SidebarSectionLabel>
            <div className="flex flex-col gap-0.5 pl-3">
              {filteredCatalog.foundation.items.map((item) => (
                <SidebarNavItem
                  key={item.name}
                  item={item}
                  activeName={activeName}
                  variantDetail={variantDetail}
                />
              ))}
            </div>
          </section>
        ) : null}

        {filteredCatalog.components.length > 0 ? (
          <section className="flex flex-col gap-2">
            <SidebarSectionLabel>Components</SidebarSectionLabel>
            <div className="flex flex-col gap-1 pl-3">
              {filteredCatalog.components.map((category) => {
                const isOpen = isSearching
                  ? true
                  : (openGroups[category.id] ?? false)

                return (
                  <Collapsible
                    key={category.id}
                    open={isOpen}
                    onOpenChange={(open) => {
                      if (isSearching) return
                      setOpenGroups((current) => ({
                        ...current,
                        [category.id]: open,
                      }))
                    }}
                    className="group/collapsible"
                  >
                    <CollapsibleTrigger className="text-muted-foreground hover:text-foreground flex w-full items-center gap-1 rounded-md px-2 py-1 text-xs font-medium uppercase transition-colors">
                      <span className="flex-1 text-left">{category.title}</span>
                      <ChevronDownIcon className="size-3.5 shrink-0 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1 flex flex-col gap-0.5 pl-3">
                      {category.items.map((item) => (
                        <SidebarNavItem
                          key={item.name}
                          item={item}
                          activeName={activeName}
                          variantDetail={variantDetail}
                        />
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                )
              })}
            </div>
          </section>
        ) : null}

        {filteredCatalog.blocks ? (
          <section className="flex flex-col gap-1">
            <SidebarSectionLabel>Blocks</SidebarSectionLabel>
            <div className="flex flex-col gap-0.5 pl-3">
              {filteredCatalog.blocks.items.map((item) => (
                <SidebarNavItem
                  key={item.name}
                  item={item}
                  activeName={activeName}
                  variantDetail={variantDetail}
                />
              ))}
            </div>
          </section>
        ) : null}
      </nav>
    </aside>
  )
}

export function useRegistryScrollTarget() {
  React.useEffect(() => {
    const scrollToTarget = () => {
      const fromStorage = sessionStorage.getItem("registry:scroll-to")
      const hashId = window.location.hash.replace(/^#/, "")
      const id = fromStorage || hashId
      if (!id) return

      if (fromStorage) {
        sessionStorage.removeItem("registry:scroll-to")
      }

      const scroll = () => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

      scroll()
      window.setTimeout(scroll, 300)
    }

    scrollToTarget()
    window.addEventListener("hashchange", scrollToTarget)
    return () => window.removeEventListener("hashchange", scrollToTarget)
  }, [])
}

export function markRegistryScrollTarget(name: string) {
  sessionStorage.setItem("registry:scroll-to", name)
}
