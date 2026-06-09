import { Italic } from "lucide-react"

import { Toggle } from "@/registry/default/ui/toggle"

export function ToggleOutlinePreview() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}

