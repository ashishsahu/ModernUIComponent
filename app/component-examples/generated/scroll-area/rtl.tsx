"use client"

import * as React from "react"

import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation-stub"
import { ScrollArea } from "@/registry/default/ui/scroll-area"
import { Separator } from "@/registry/default/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      tags: "Tags",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      tags: "العلامات",
    },
  },
  he: {
    dir: "rtl",
    values: {
      tags: "תגיות",
    },
  },
}

export function ScrollAreaRtlPreview() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <ScrollArea className="h-72 w-48 rounded-md border" dir={dir}>
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">{t.tags}</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}

