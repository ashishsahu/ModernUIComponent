"use client"

import * as React from "react"

export type TranslationEntry = {
  dir: "ltr" | "rtl"
  values: Record<string, string>
  locale?: string
}

export type Translations = Record<string, TranslationEntry>

export function useTranslation(translations: Translations, locale: string) {
  const entry = translations[locale] ?? translations.en
  return {
    dir: entry.dir,
    language: entry.locale ?? locale,
    locale: entry.locale ?? locale,
    t: entry.values,
    setLanguage: () => {},
  }
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
  defaultLanguage?: string
}) {
  return children
}

export function LanguageSelector(_props: {
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}) {
  return null
}
