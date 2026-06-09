import { Button } from "@/registry/default/ui/button"
import { Kbd } from "@/registry/default/ui/kbd"

export function KbdButtonPreview() {
  return (
    <Button variant="outline">
      Accept{" "}
      <Kbd data-icon="inline-end" className="translate-x-0.5">
        ⏎
      </Kbd>
    </Button>
  )
}

