import { Button } from "@/registry/default/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/registry/default/ui/button-group"

export function ButtonGroupDocSeparatorPreview() {
  return (
    <ButtonGroup>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Paste</Button>
    </ButtonGroup>
  )
}
