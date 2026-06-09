import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/registry/default/ui/toggle"

export function ToggleTextPreview() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}

