import { Button } from "@/registry/default/ui/button"
import { Field } from "@/registry/default/ui/field"
import { Input } from "@/registry/default/ui/input"

export function InputInlinePreview() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}

