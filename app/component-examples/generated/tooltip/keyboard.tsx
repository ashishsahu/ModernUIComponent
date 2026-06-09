import { SaveIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import { Kbd } from "@/registry/default/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

export function TooltipKeyboardPreview() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon-sm">
          <SaveIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Save Changes <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}

