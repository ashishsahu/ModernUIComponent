import { ArrowUpIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group"

export function InputGroupDocTextareaPreview() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupTextarea placeholder="Ask, search, or make anything..." />
      <InputGroupAddon align="block-end">
        <InputGroupButton size="icon-sm" variant="default" className="ml-auto rounded-full">
          <ArrowUpIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
