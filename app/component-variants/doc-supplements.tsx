"use client"

import { TextareaDocFieldPreview } from "@/app/component-examples/generated/textarea/doc-field"
import { TextareaDocFieldCode } from "@/app/component-examples/generated/textarea/doc-field.code"
import { TextareaDocInvalidPreview } from "@/app/component-examples/generated/textarea/doc-invalid"
import { TextareaDocInvalidCode } from "@/app/component-examples/generated/textarea/doc-invalid.code"
import { TextareaDocRtlPreview } from "@/app/component-examples/generated/textarea/doc-rtl"
import { TextareaDocRtlCode } from "@/app/component-examples/generated/textarea/doc-rtl.code"
import { InputDocFieldPreview } from "@/app/component-examples/generated/input/doc-field"
import { InputDocFieldCode } from "@/app/component-examples/generated/input/doc-field.code"
import { InputDocInvalidPreview } from "@/app/component-examples/generated/input/doc-invalid"
import { InputDocInvalidCode } from "@/app/component-examples/generated/input/doc-invalid.code"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const docVariantSupplements: Record<string, ComponentVariantPage> = {
  "textarea": {
    name: "textarea",
    title: "Textarea",
    description: "ModernUI Textarea component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/textarea",
    variants: [
      {
        id: "field",
        title: "Field",
        description: "Textarea with Field label and description.",
        Preview: TextareaDocFieldPreview,
        code: TextareaDocFieldCode,
      },
      {
        id: "invalid",
        title: "Invalid",
        description: "Invalid textarea state with Field error styling.",
        Preview: TextareaDocInvalidPreview,
        code: TextareaDocInvalidCode,
      },
      {
        id: "rtl",
        title: "RTL",
        description: "Right-to-left textarea with translations.",
        Preview: TextareaDocRtlPreview,
        code: TextareaDocRtlCode,
      },
    ],
  },
  "input": {
    name: "input",
    title: "Input",
    description: "ModernUI Input component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/input",
    variants: [
      {
        id: "field",
        title: "Field",
        description: "Input with Field label and description.",
        Preview: InputDocFieldPreview,
        code: InputDocFieldCode,
      },
      {
        id: "invalid",
        title: "Invalid",
        description: "Invalid input state with Field error styling.",
        Preview: InputDocInvalidPreview,
        code: InputDocInvalidCode,
      },
    ],
  },
}
