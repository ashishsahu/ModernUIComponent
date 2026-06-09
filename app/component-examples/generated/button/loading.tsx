import { Loader2 } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export function ButtonLoadingPreview() {
  return (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  )
}

