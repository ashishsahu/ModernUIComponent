"use client"

import { useTranslation, type Translations } from "@/hooks/use-translation-stub"
import { Field, FieldDescription, FieldLabel } from "@/registry/default/ui/field"
import { Textarea } from "@/registry/default/ui/textarea"

const translations: Translations = {
  en: { dir: "ltr", values: { label: "Feedback", placeholder: "Your feedback helps us improve...", description: "Share your thoughts." } },
  ar: { dir: "rtl", values: { label: "التعليقات", placeholder: "تعليقاتك تساعدنا على التحسين...", description: "شاركنا أفكارك." } },
}

export function TextareaDocRtlPreview() {
  const { dir, t } = useTranslation(translations, "ar")
  return (
    <Field className="max-w-xs" dir={dir}>
      <FieldLabel htmlFor="feedback" dir={dir}>{t.label}</FieldLabel>
      <Textarea id="feedback" placeholder={t.placeholder} dir={dir} rows={4} />
      <FieldDescription dir={dir}>{t.description}</FieldDescription>
    </Field>
  )
}
