"use client"

export type Translations = Record<
  string,
  { dir: "ltr" | "rtl"; values: Record<string, string> }
>

export function useTranslation(translations: Translations, locale: string) {
  const entry = translations[locale] ?? translations.en
  return {
    dir: entry.dir,
    t: entry.values,
  }
}
