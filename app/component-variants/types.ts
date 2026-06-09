import type { ComponentType } from "react"

export type ComponentVariant = {
  id: string
  title: string
  description: string
  Preview: ComponentType
  code: string
}

export type ComponentVariantPage = {
  name: string
  title: string
  description: string
  install: string
  variants: ComponentVariant[]
}
