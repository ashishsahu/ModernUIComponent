import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"

export function BadgeLinkPreview() {
  return (
    <Badge asChild>
      <a href="#link">
        Open Link <ArrowUpRightIcon data-icon="inline-end" />
      </a>
    </Badge>
  )
}

