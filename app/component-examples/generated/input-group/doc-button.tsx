import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/registry/default/ui/input-group"

export function InputGroupDocButtonPreview() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Enter your domain" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="default">Check</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
