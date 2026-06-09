"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function LazyVariantPreview({
  Preview,
}: {
  Preview: React.ComponentType
}) {
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
      { rootMargin: "240px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="min-h-[12rem] w-full">
      {visible ? <Preview /> : null}
    </div>
  )
}

export function VariantPreviewCanvas({
  Preview,
  tall = false,
  blockLayout = false,
  containSidebar = false,
  popoverPreview = false,
}: {
  Preview: React.ComponentType
  tall?: boolean
  blockLayout?: boolean
  containSidebar?: boolean
  popoverPreview?: boolean
}) {
  return (
    <div className="rounded-lg border border-border bg-muted/50 p-1.5">
      <div
        className={cn(
          "relative isolate w-full rounded-md bg-card shadow-sm ring-1 ring-border/40",
          "[transform:translateZ(0)]",
          popoverPreview ? "overflow-visible" : "overflow-hidden",
          blockLayout
            ? "h-[min(720px,80vh)]"
            : popoverPreview
              ? "min-h-80"
              : tall
                ? "h-[min(520px,70vh)]"
                : "min-h-48",
          containSidebar &&
            "[&_[data-slot=sidebar-wrapper]]:!min-h-0 [&_[data-slot=sidebar-wrapper]]:h-full [&_[data-slot=sidebar-container]]:!absolute [&_[data-slot=sidebar-container]]:top-0 [&_[data-slot=sidebar-container]]:!h-full"
        )}
      >
        <div
          className={cn(
            "size-full",
            popoverPreview
              ? "overflow-visible p-4 pb-52"
              : cn(
                  "overflow-auto",
                  blockLayout ? "overflow-x-hidden" : "p-4"
                )
          )}
        >
          <LazyVariantPreview Preview={Preview} />
        </div>
      </div>
    </div>
  )
}

export function BlockPreviewFrame({
  Block,
}: {
  Block: React.ComponentType
}) {
  return (
    <div
      className={cn(
        "relative w-full min-h-[min(720px,80vh)]",
        "[&_[data-slot=sidebar-wrapper]]:flex [&_[data-slot=sidebar-wrapper]]:!min-h-[min(720px,80vh)]",
        "[&_[data-slot=sidebar-container]]:!absolute [&_[data-slot=sidebar-container]]:inset-y-0 [&_[data-slot=sidebar-container]]:!h-full",
        "[&_[data-slot=sidebar-inner]]:h-full",
        "[&_[class*='min-h-\\[100vh\\]']]:!min-h-48"
      )}
    >
      <Block />
    </div>
  )
}

export function BlockLayoutPlaceholder({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="text-muted-foreground flex min-h-[16rem] flex-col items-center justify-center gap-2 p-8 text-center text-sm">
      <p className="text-foreground font-medium">{title}</p>
      <p>{description}</p>
      <p>Use the Code button to copy the full block into your project.</p>
    </div>
  )
}
