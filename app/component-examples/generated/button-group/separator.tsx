import { Button } from "@/registry/default/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/default/ui/button-group"

export function ButtonGroupSeparatorPreview() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  )
}

