import { Button } from "@/registry/default/ui/button"
import { ButtonGroup } from "@/registry/default/ui/button-group"
import { Input } from "@/registry/default/ui/input"

export function ButtonGroupDocInputPreview() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline">Search</Button>
    </ButtonGroup>
  )
}
