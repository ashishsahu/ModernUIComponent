import { Button } from "@/registry/default/ui/button"
import { Spinner } from "@/registry/default/ui/spinner"

export function SpinnerDocButtonPreview() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
    </div>
  )
}
