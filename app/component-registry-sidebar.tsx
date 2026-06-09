"use client"

import * as React from "react"
import Link from "next/link"

import { catalog } from "@/app/catalog"
import { useComponentSearch } from "@/app/component-search"
import { hasVariantPage } from "@/app/component-variants"
import { cn } from "@/lib/utils"

const REGISTRY_SECTION_IDS = catalog.flatMap((category) =>
  category.items.map((item) => item.name)
)

const SCROLL_SPY_OFFSET = 120

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

export function ComponentRegistrySidebar({
  activeName,
  variantDetail = false,
}: ComponentRegistrySidebarProps) {
  const { query } = useComponentSearch()
  const linkRefs = React.useRef(new Map<string, HTMLElement>())

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

  React.useEffect(() => {
    if (!activeName) return
    const link = linkRefs.current.get(activeName)
    link?.scrollIntoView({ block: "nearest", behavior: "smooth" })
  }, [activeName, filteredCatalog])

  const setLinkRef = React.useCallback(
    (name: string) => (element: HTMLAnchorElement | null) => {
      if (element) {
        linkRefs.current.set(name, element)
      } else {
        linkRefs.current.delete(name)
      }
    },
    []
  )

  return (
    <aside className="lg:sticky lg:top-24 lg:h-[calc(100svh-8rem)] lg:w-56 lg:shrink-0 lg:overflow-y-auto">
      <nav className="flex flex-col gap-4">
        <p className="text-brand text-xs font-medium tracking-wide uppercase">
          Components
        </p>
        {filteredCatalog.map((category) => (
          <div key={category.id} className="flex flex-col gap-1">
            <p className="text-muted-foreground text-xs font-medium uppercase">
              {category.title}
            </p>
            {category.items.map((item) => {
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
                  <Link
                    key={item.name}
                    ref={setLinkRef(item.name)}
                    href={href}
                    className={className}
                  >
                    {item.title}
                  </Link>
                )
              }

              return (
                <a
                  key={item.name}
                  ref={setLinkRef(item.name)}
                  href={href}
                  className={className}
                >
                  {item.title}
                </a>
              )
            })}
          </div>
        ))}
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
