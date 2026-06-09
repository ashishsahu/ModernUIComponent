import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"
import { ButtonGroup } from "@/registry/default/ui/button-group"

export function ButtonGroupDocSplitPreview() {
  return (
    <ButtonGroup>
      <Button>Save</Button>
      <Button size="icon" aria-label="More save options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  )
}
