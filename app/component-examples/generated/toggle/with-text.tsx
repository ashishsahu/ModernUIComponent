import { Italic } from "lucide-react"

import { Toggle } from "@/registry/default/ui/toggle"

export function ToggleWithTextPreview() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  )
}

