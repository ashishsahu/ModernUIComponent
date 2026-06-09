import { Plus } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/default/ui/button-group"

export function ButtonGroupSplitPreview() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <Plus />
      </Button>
    </ButtonGroup>
  )
}

