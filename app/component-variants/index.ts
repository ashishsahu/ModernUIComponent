"use client"

import {
  AccordionBasicPreview,
  AccordionBordersPreview,
  AccordionCardPreview,
  AccordionDisabledPreview,
  AccordionMultiplePreview,
} from "@/app/component-examples/accordion-variants"
import { accordionVariantCodes } from "@/app/component-examples/accordion-variant-codes"
import { docVariantPages } from "@/app/component-variants/doc-pages"
import { docVariantSupplements } from "@/app/component-variants/doc-supplements"
import { generatedVariantPages } from "@/app/component-variants/generated-pages"
import { projectSetupVariantPage } from "@/app/component-variants/project-setup-page"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const accordionVariantPage: ComponentVariantPage = {
  name: "accordion",
  title: "Accordion",
  description: "Expandable sections.",
  install: "npx shadcn@latest add ashishsahu/ModernUIComponent/accordion",
  variants: [
    {
      id: "basic",
      title: "Basic",
      description: "Single open item with the first panel expanded by default.",
      Preview: AccordionBasicPreview,
      code: accordionVariantCodes.basic,
    },
    {
      id: "multiple",
      title: "Multiple",
      description: "Allow more than one section to stay open at the same time.",
      Preview: AccordionMultiplePreview,
      code: accordionVariantCodes.multiple,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disable individual items that are not yet available.",
      Preview: AccordionDisabledPreview,
      code: accordionVariantCodes.disabled,
    },
    {
      id: "borders",
      title: "Borders",
      description: "Add borders around the accordion and between each item.",
      Preview: AccordionBordersPreview,
      code: accordionVariantCodes.borders,
    },
    {
      id: "card",
      title: "Card",
      description: "Wrap the accordion in a card with a title and description.",
      Preview: AccordionCardPreview,
      code: accordionVariantCodes.card,
    },
  ],
}

function mergeVariantPages(
  ...sources: Record<string, ComponentVariantPage>[]
): Record<string, ComponentVariantPage> {
  const merged: Record<string, ComponentVariantPage> = {}

  for (const source of sources) {
    for (const [name, page] of Object.entries(source)) {
      if (!merged[name]) {
        merged[name] = page
        continue
      }

      const existingIds = new Set(merged[name].variants.map((variant) => variant.id))
      merged[name] = {
        ...merged[name],
        variants: [
          ...merged[name].variants,
          ...page.variants.filter((variant) => !existingIds.has(variant.id)),
        ],
      }
    }
  }

  return merged
}

export const componentVariantPages: Record<string, ComponentVariantPage> = {
  accordion: accordionVariantPage,
  "project-setup": projectSetupVariantPage,
  ...mergeVariantPages(
    generatedVariantPages,
    docVariantSupplements,
    docVariantPages
  ),
}

const DETAIL_PAGE_LABELS: Record<string, string> = {
  "project-setup": "Details",
}

export function getDetailPageLabel(name: string) {
  return DETAIL_PAGE_LABELS[name] ?? "Variants"
}

export function hasVariantPage(name: string) {
  return name in componentVariantPages
}

export function getVariantPage(name: string) {
  return componentVariantPages[name]
}

export function getVariantPageNames() {
  return Object.keys(componentVariantPages)
}
