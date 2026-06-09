import { PlusIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"
import { ButtonGroup } from "@/registry/default/ui/button-group"

export function ButtonGroupDocSizePreview() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline" size="sm">Small</Button>
        <Button variant="outline" size="sm"><PlusIcon /></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline"><PlusIcon /></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">Large</Button>
        <Button variant="outline" size="lg"><PlusIcon /></Button>
      </ButtonGroup>
    </div>
  )
}
