import { Badge } from "@/registry/default/ui/badge"
import { Spinner } from "@/registry/default/ui/spinner"

export function BadgeSpinnerPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        Deleting
      </Badge>
      <Badge variant="secondary">
        Generating
        <Spinner data-icon="inline-end" />
      </Badge>
    </div>
  )
}

