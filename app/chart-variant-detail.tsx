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
import { chartVariantPage } from "@/app/component-variants/chart-page"
import type {
  ComponentVariant,
  ComponentVariantSection,
} from "@/app/component-variants/types"
import { VariantPreviewCanvas } from "@/app/variant-preview-canvas"
import { Button } from "@/registry/default/ui/button"

type VariantCodeTarget = {
  title: string
  description: string
  install?: string
  code: string
}

function ChartVariantExample({
  variant,
  pageTitle,
  install,
  hero = false,
  onViewCode,
}: {
  variant: ComponentVariant
  pageTitle: string
  install: string
  hero?: boolean
  onViewCode: (target: VariantCodeTarget) => void
}) {
  const showHeading = !hero && variant.title

  return (
    <div id={variant.id} className="scroll-mt-24 flex flex-col gap-4">
      {showHeading ? (
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-1">
            <h3 className="text-base font-semibold tracking-tight">
              {variant.title}
            </h3>
            {variant.description ? (
              <p className="text-muted-foreground text-sm">
                {variant.description}
              </p>
            ) : null}
          </div>
          <ViewCodeButton
            onClick={() =>
              onViewCode({
                title: `${pageTitle} — ${variant.title}`,
                description: variant.description,
                install,
                code: variant.code,
              })
            }
          />
        </div>
      ) : (
        <div className="flex justify-end">
          <ViewCodeButton
            onClick={() =>
              onViewCode({
                title: `${pageTitle} — Interactive`,
                description: variant.description,
                install,
                code: variant.code,
              })
            }
          />
        </div>
      )}
      <VariantPreviewCanvas
        Preview={variant.Preview}
        tall={hero || variant.id === "interactive"}
      />
    </div>
  )
}

function ChartVariantSection({
  section,
  pageTitle,
  install,
  onViewCode,
}: {
  section: ComponentVariantSection
  pageTitle: string
  install: string
  onViewCode: (target: VariantCodeTarget) => void
}) {
  const isHero = section.id === "hero"

  return (
    <section className="flex flex-col gap-6">
      {section.title ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold tracking-tight">
            {section.title}
          </h2>
          {section.description ? (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {section.description}
            </p>
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-col gap-8">
        {section.variants.map((variant) => (
          <ChartVariantExample
            key={variant.id}
            variant={variant}
            pageTitle={pageTitle}
            install={install}
            hero={isHero}
            onViewCode={onViewCode}
          />
        ))}
      </div>
    </section>
  )
}

export function ChartVariantDetail() {
  const page = chartVariantPage
  const sections = page.sections ?? []

  const [codeTarget, setCodeTarget] = React.useState<VariantCodeTarget | null>(
    null
  )
  const [codeOpen, setCodeOpen] = React.useState(false)

  const handleViewCode = React.useCallback((target: VariantCodeTarget) => {
    setCodeTarget(target)
    setCodeOpen(true)
  }, [])

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
        <div className="flex w-full flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{page.title}</h1>
          <p className="text-muted-foreground leading-relaxed">
            {page.description}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Charts are designed to look great out of the box. They work with the
            other components and are fully customizable. Browse ready-made chart
            blocks in the sidebar under Charts · Area, Bar, Line, and more.
          </p>
          <code className="text-muted-foreground break-all text-xs">
            {page.install}
          </code>
        </div>
      </div>

      <div className="flex w-full flex-col gap-12 pb-16">
        {sections.map((section) => (
          <ChartVariantSection
            key={section.id}
            section={section}
            pageTitle={page.title}
            install={page.install}
            onViewCode={handleViewCode}
          />
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
