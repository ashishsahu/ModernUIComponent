import { Badge } from "@/registry/default/ui/badge"
import { Spinner } from "@/registry/default/ui/spinner"

export function SpinnerDocBadgePreview() {
  return (
    <div className="flex items-center gap-4">
      <Badge><Spinner data-icon="inline-start" />Syncing</Badge>
      <Badge variant="secondary"><Spinner data-icon="inline-start" />Updating</Badge>
    </div>
  )
}
