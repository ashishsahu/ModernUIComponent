"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

import {
  ComponentCodeDrawer,
  ViewCodeButton,
} from "@/app/component-code-drawer"
import { ComponentRegistryLayout } from "@/app/component-registry-layout"
import { markRegistryScrollTarget } from "@/app/component-registry-sidebar"
import { getVariantPage } from "@/app/component-variants"
import { VariantPreviewCanvas } from "@/app/variant-preview-canvas"
import { Button } from "@/registry/default/ui/button"

function isSidebarPage(componentName: string) {
  return componentName === "sidebar"
}

function isAuthBlockPage(componentName: string) {
  return componentName === "login" || componentName === "signup"
}

function isCalendarPage(componentName: string) {
  return componentName === "calendar"
}

function isChartPage(componentName: string) {
  return componentName === "chart"
}

function isChartInteractiveVariant(variantId: string) {
  return variantId.includes("-interactive")
}

function isBlockLayoutVariant(variantId: string) {
  return /^\d{2}$/.test(variantId)
}

const POPOVER_PREVIEW_PAGES = new Set([
  "navigation-menu",
  "menubar",
  "dropdown-menu",
  "popover",
  "hover-card",
  "context-menu",
])

function isPopoverPreviewPage(componentName: string) {
  return POPOVER_PREVIEW_PAGES.has(componentName)
}

type VariantCodeTarget = {
  title: string
  description: string
  install?: string
  code: string
}

export function ComponentVariantDetail({ name }: { name: string }) {
  const page = getVariantPage(name)

  const [codeTarget, setCodeTarget] = React.useState<VariantCodeTarget | null>(
    null
  )
  const [codeOpen, setCodeOpen] = React.useState(false)

  const handleViewCode = React.useCallback((target: VariantCodeTarget) => {
    setCodeTarget(target)
    setCodeOpen(true)
  }, [])

  if (!page) {
    return null
  }

  return (
    <ComponentRegistryLayout activeName={page.name} variantDetail>
      <div className="flex flex-col gap-4">
        <Button variant="ghost" size="sm" className="w-fit px-0" asChild>
          <Link
            href={`/#${page.name}`}
            onClick={() => markRegistryScrollTarget(page.name)}
          >
            <ArrowLeftIcon className="size-4" />
            Back to registry
          </Link>
        </Button>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">{page.title}</h1>
          <p className="text-muted-foreground">{page.description}</p>
          <code className="text-muted-foreground break-all text-xs">
            {page.install}
          </code>
        </div>
      </div>

      <div className="flex flex-col gap-6 pb-16">
        {page.variants.map((variant) => (
          <article
            key={variant.id}
            id={variant.id}
            className="scroll-mt-24 flex flex-col gap-4 rounded-lg border bg-card p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 flex-col gap-1">
                <h2 className="text-lg font-semibold">{variant.title}</h2>
                <p className="text-muted-foreground text-sm">
                  {variant.description}
                </p>
              </div>
              <ViewCodeButton
                onClick={() =>
                  handleViewCode({
                    title: `${page.title} — ${variant.title}`,
                    description: variant.description,
                    install: page.install,
                    code: variant.code,
                  })
                }
              />
            </div>
            <VariantPreviewCanvas
              Preview={variant.Preview}
              tall={
                (isSidebarPage(page.name) && !isBlockLayoutVariant(variant.id)) ||
                (isChartPage(page.name) && isChartInteractiveVariant(variant.id))
              }
              blockLayout={
                (isSidebarPage(page.name) ||
                  isAuthBlockPage(page.name) ||
                  isCalendarPage(page.name)) &&
                isBlockLayoutVariant(variant.id)
              }
              containSidebar={
                isSidebarPage(page.name) && !isBlockLayoutVariant(variant.id)
              }
              popoverPreview={isPopoverPreviewPage(page.name)}
            />
          </article>
        ))}
      </div>

      <ComponentCodeDrawer
        variant={codeTarget}
        open={codeOpen}
        onOpenChange={(open) => {
          setCodeOpen(open)
          if (!open) setCodeTarget(null)
        }}
      />
    </ComponentRegistryLayout>
  )
}
