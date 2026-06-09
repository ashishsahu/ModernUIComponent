import { Italic } from "lucide-react"

import { Toggle } from "@/registry/default/ui/toggle"

export function ToggleLgPreview() {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}

