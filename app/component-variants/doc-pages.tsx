"use client"

import { ButtonGroupDocDemoPreview } from "@/app/component-examples/generated/button-group/doc-default"
import { ButtonGroupDocDemoCode } from "@/app/component-examples/generated/button-group/doc-default.code"
import { ButtonGroupDocOrientationPreview } from "@/app/component-examples/generated/button-group/doc-orientation"
import { ButtonGroupDocOrientationCode } from "@/app/component-examples/generated/button-group/doc-orientation.code"
import { ButtonGroupDocSizePreview } from "@/app/component-examples/generated/button-group/doc-size"
import { ButtonGroupDocSizeCode } from "@/app/component-examples/generated/button-group/doc-size.code"
import { ButtonGroupDocSeparatorPreview } from "@/app/component-examples/generated/button-group/doc-separator"
import { ButtonGroupDocSeparatorCode } from "@/app/component-examples/generated/button-group/doc-separator.code"
import { ButtonGroupDocSplitPreview } from "@/app/component-examples/generated/button-group/doc-split"
import { ButtonGroupDocSplitCode } from "@/app/component-examples/generated/button-group/doc-split.code"
import { ButtonGroupDocInputPreview } from "@/app/component-examples/generated/button-group/doc-input"
import { ButtonGroupDocInputCode } from "@/app/component-examples/generated/button-group/doc-input.code"
import { DirectionDocDemoPreview } from "@/app/component-examples/generated/direction/doc-default"
import { DirectionDocDemoCode } from "@/app/component-examples/generated/direction/doc-default.code"
import { DirectionDocLtrPreview } from "@/app/component-examples/generated/direction/doc-ltr"
import { DirectionDocLtrCode } from "@/app/component-examples/generated/direction/doc-ltr.code"
import { EmptyDocDemoPreview } from "@/app/component-examples/generated/empty/doc-default"
import { EmptyDocDemoCode } from "@/app/component-examples/generated/empty/doc-default.code"
import { EmptyDocWithActionPreview } from "@/app/component-examples/generated/empty/doc-with-action"
import { EmptyDocWithActionCode } from "@/app/component-examples/generated/empty/doc-with-action.code"
import { FieldDocDemoPreview } from "@/app/component-examples/generated/field/doc-default"
import { FieldDocDemoCode } from "@/app/component-examples/generated/field/doc-default.code"
import { FieldDocInvalidPreview } from "@/app/component-examples/generated/field/doc-invalid"
import { FieldDocInvalidCode } from "@/app/component-examples/generated/field/doc-invalid.code"
import { FieldDocHorizontalPreview } from "@/app/component-examples/generated/field/doc-horizontal"
import { FieldDocHorizontalCode } from "@/app/component-examples/generated/field/doc-horizontal.code"
import { FormDocDemoPreview } from "@/app/component-examples/generated/form/doc-default"
import { FormDocDemoCode } from "@/app/component-examples/generated/form/doc-default.code"
import { InputGroupDocDemoPreview } from "@/app/component-examples/generated/input-group/doc-default"
import { InputGroupDocDemoCode } from "@/app/component-examples/generated/input-group/doc-default.code"
import { InputGroupDocButtonPreview } from "@/app/component-examples/generated/input-group/doc-button"
import { InputGroupDocButtonCode } from "@/app/component-examples/generated/input-group/doc-button.code"
import { InputGroupDocTextareaPreview } from "@/app/component-examples/generated/input-group/doc-textarea"
import { InputGroupDocTextareaCode } from "@/app/component-examples/generated/input-group/doc-textarea.code"
import { ItemDocDemoPreview } from "@/app/component-examples/generated/item/doc-default"
import { ItemDocDemoCode } from "@/app/component-examples/generated/item/doc-default.code"
import { ItemDocMutedPreview } from "@/app/component-examples/generated/item/doc-muted"
import { ItemDocMutedCode } from "@/app/component-examples/generated/item/doc-muted.code"
import { KbdDocDemoPreview } from "@/app/component-examples/generated/kbd/doc-default"
import { KbdDocDemoCode } from "@/app/component-examples/generated/kbd/doc-default.code"
import { KbdDocGroupPreview } from "@/app/component-examples/generated/kbd/doc-group"
import { KbdDocGroupCode } from "@/app/component-examples/generated/kbd/doc-group.code"
import { NativeSelectDocDemoPreview } from "@/app/component-examples/generated/native-select/doc-default"
import { NativeSelectDocDemoCode } from "@/app/component-examples/generated/native-select/doc-default.code"
import { NativeSelectDocDisabledPreview } from "@/app/component-examples/generated/native-select/doc-disabled"
import { NativeSelectDocDisabledCode } from "@/app/component-examples/generated/native-select/doc-disabled.code"
import { SpinnerDocDemoPreview } from "@/app/component-examples/generated/spinner/doc-default"
import { SpinnerDocDemoCode } from "@/app/component-examples/generated/spinner/doc-default.code"
import { SpinnerDocSizePreview } from "@/app/component-examples/generated/spinner/doc-size"
import { SpinnerDocSizeCode } from "@/app/component-examples/generated/spinner/doc-size.code"
import { SpinnerDocButtonPreview } from "@/app/component-examples/generated/spinner/doc-button"
import { SpinnerDocButtonCode } from "@/app/component-examples/generated/spinner/doc-button.code"
import { SpinnerDocBadgePreview } from "@/app/component-examples/generated/spinner/doc-badge"
import { SpinnerDocBadgeCode } from "@/app/component-examples/generated/spinner/doc-badge.code"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const docVariantPages: Record<string, ComponentVariantPage> = {
  "button-group": {
    name: "button-group",
    title: "Button Group",
    description: "ModernUI Button Group component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/button-group",
    variants: [
      {
        id: "default",
        title: "Default",
        description: "Grouped actions with nested groups and a dropdown menu.",
        Preview: ButtonGroupDocDemoPreview,
        code: ButtonGroupDocDemoCode,
      },
      {
        id: "orientation",
        title: "Orientation",
        description: "Vertical button group layout.",
        Preview: ButtonGroupDocOrientationPreview,
        code: ButtonGroupDocOrientationCode,
      },
      {
        id: "size",
        title: "Size",
        description: "Small, default, and large buttons in a group.",
        Preview: ButtonGroupDocSizePreview,
        code: ButtonGroupDocSizeCode,
      },
      {
        id: "separator",
        title: "Separator",
        description: "Separate button groups visually.",
        Preview: ButtonGroupDocSeparatorPreview,
        code: ButtonGroupDocSeparatorCode,
      },
      {
        id: "split",
        title: "Split",
        description: "Primary action with a secondary trigger.",
        Preview: ButtonGroupDocSplitPreview,
        code: ButtonGroupDocSplitCode,
      },
      {
        id: "input",
        title: "Input",
        description: "Button group with an input field.",
        Preview: ButtonGroupDocInputPreview,
        code: ButtonGroupDocInputCode,
      },
    ],
  },
  "direction": {
    name: "direction",
    title: "Direction",
    description: "ModernUI Direction component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/direction",
    variants: [
      {
        id: "default",
        title: "RTL",
        description: "Right-to-left direction provider.",
        Preview: DirectionDocDemoPreview,
        code: DirectionDocDemoCode,
      },
      {
        id: "ltr",
        title: "LTR",
        description: "Left-to-right direction provider.",
        Preview: DirectionDocLtrPreview,
        code: DirectionDocLtrCode,
      },
    ],
  },
  "empty": {
    name: "empty",
    title: "Empty",
    description: "ModernUI Empty component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/empty",
    variants: [
      {
        id: "default",
        title: "Default",
        description: "Empty state with icon, title, and description.",
        Preview: EmptyDocDemoPreview,
        code: EmptyDocDemoCode,
      },
      {
        id: "with-action",
        title: "With Action",
        description: "Empty state with a call-to-action button.",
        Preview: EmptyDocWithActionPreview,
        code: EmptyDocWithActionCode,
      },
    ],
  },
  "field": {
    name: "field",
    title: "Field",
    description: "ModernUI Field component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/field",
    variants: [
      {
        id: "default",
        title: "Field",
        description: "Label, control, and description for a single field.",
        Preview: FieldDocDemoPreview,
        code: FieldDocDemoCode,
      },
      {
        id: "invalid",
        title: "Invalid",
        description: "Invalid field state with error styling.",
        Preview: FieldDocInvalidPreview,
        code: FieldDocInvalidCode,
      },
      {
        id: "horizontal",
        title: "Horizontal",
        description: "Horizontal field orientation with a checkbox.",
        Preview: FieldDocHorizontalPreview,
        code: FieldDocHorizontalCode,
      },
    ],
  },
  "form": {
    name: "form",
    title: "Form",
    description: "ModernUI Form component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/form",
    variants: [
      {
        id: "default",
        title: "React Hook Form",
        description: "Form component integrated with React Hook Form and Zod.",
        Preview: FormDocDemoPreview,
        code: FormDocDemoCode,
      },
    ],
  },
  "input-group": {
    name: "input-group",
    title: "Input Group",
    description: "ModernUI Input Group component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/input-group",
    variants: [
      {
        id: "default",
        title: "Default",
        description: "Input with icon addon and keyboard hint.",
        Preview: InputGroupDocDemoPreview,
        code: InputGroupDocDemoCode,
      },
      {
        id: "button",
        title: "Button",
        description: "Input group with trailing button addon.",
        Preview: InputGroupDocButtonPreview,
        code: InputGroupDocButtonCode,
      },
      {
        id: "textarea",
        title: "Textarea",
        description: "Multi-line input group with block-end addons.",
        Preview: InputGroupDocTextareaPreview,
        code: InputGroupDocTextareaCode,
      },
    ],
  },
  "item": {
    name: "item",
    title: "Item",
    description: "ModernUI Item component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/item",
    variants: [
      {
        id: "default",
        title: "Default",
        description: "Item with icon, title, and description.",
        Preview: ItemDocDemoPreview,
        code: ItemDocDemoCode,
      },
      {
        id: "muted",
        title: "Muted",
        description: "Muted item variant for secondary content.",
        Preview: ItemDocMutedPreview,
        code: ItemDocMutedCode,
      },
    ],
  },
  "kbd": {
    name: "kbd",
    title: "Kbd",
    description: "ModernUI Kbd component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/kbd",
    variants: [
      {
        id: "default",
        title: "Default",
        description: "Keyboard shortcut keys.",
        Preview: KbdDocDemoPreview,
        code: KbdDocDemoCode,
      },
      {
        id: "group",
        title: "Group",
        description: "Grouped keyboard shortcuts in a sentence.",
        Preview: KbdDocGroupPreview,
        code: KbdDocGroupCode,
      },
    ],
  },
  "native-select": {
    name: "native-select",
    title: "Native Select",
    description: "ModernUI Native Select component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/native-select",
    variants: [
      {
        id: "default",
        title: "Default",
        description: "Styled native select element.",
        Preview: NativeSelectDocDemoPreview,
        code: NativeSelectDocDemoCode,
      },
      {
        id: "disabled",
        title: "Disabled",
        description: "Disabled native select state.",
        Preview: NativeSelectDocDisabledPreview,
        code: NativeSelectDocDisabledCode,
      },
    ],
  },
  "spinner": {
    name: "spinner",
    title: "Spinner",
    description: "ModernUI Spinner component.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/spinner",
    variants: [
      {
        id: "default",
        title: "Default",
        description: "Loading spinner in an item layout.",
        Preview: SpinnerDocDemoPreview,
        code: SpinnerDocDemoCode,
      },
      {
        id: "size",
        title: "Size",
        description: "Different spinner sizes.",
        Preview: SpinnerDocSizePreview,
        code: SpinnerDocSizeCode,
      },
      {
        id: "button",
        title: "Button",
        description: "Spinner inside loading buttons.",
        Preview: SpinnerDocButtonPreview,
        code: SpinnerDocButtonCode,
      },
      {
        id: "badge",
        title: "Badge",
        description: "Spinner inside badges.",
        Preview: SpinnerDocBadgePreview,
        code: SpinnerDocBadgeCode,
      },
    ],
  },
}
