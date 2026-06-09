import type { ComponentType } from "react"

export type ComponentVariant = {
  id: string
  title: string
  description: string
  Preview: ComponentType
  code: string
}

export type ComponentVariantSection = {
  id: string
  title?: string
  description?: string
  variants: ComponentVariant[]
}

export type ComponentVariantPage = {
  name: string
  title: string
  description: string
  install: string
  variants: ComponentVariant[]
  sections?: ComponentVariantSection[]
}
