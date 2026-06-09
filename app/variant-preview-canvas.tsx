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
        setVisible(entry.isIntersecting)
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
  fullWidth = false,
  tall = false,
  containSidebar = false,
}: {
  Preview: React.ComponentType
  fullWidth?: boolean
  tall?: boolean
  containSidebar?: boolean
}) {
  return (
    <div className="rounded-lg border border-border bg-muted/50 p-1.5">
      <div
        className={cn(
          "relative isolate w-full overflow-hidden rounded-md bg-card shadow-sm ring-1 ring-border/40",
          "[transform:translateZ(0)]",
          tall ? "h-[min(520px,70vh)]" : "min-h-48",
          !fullWidth && "mx-auto max-w-lg",
          containSidebar &&
            "[&_[data-slot=sidebar-wrapper]]:!min-h-0 [&_[data-slot=sidebar-wrapper]]:h-full [&_[data-slot=sidebar-container]]:!absolute [&_[data-slot=sidebar-container]]:top-0 [&_[data-slot=sidebar-container]]:!h-full"
        )}
      >
        <div className="size-full overflow-auto p-4">
          <LazyVariantPreview Preview={Preview} />
        </div>
      </div>
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
