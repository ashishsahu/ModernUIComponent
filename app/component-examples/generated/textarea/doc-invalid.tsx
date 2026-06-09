import { Field, FieldDescription, FieldLabel } from "@/registry/default/ui/field"
import { Textarea } from "@/registry/default/ui/textarea"

export function TextareaDocInvalidPreview() {
  return (
    <Field data-invalid className="max-w-sm">
      <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
      <Textarea id="textarea-invalid" placeholder="Type your message here." aria-invalid />
      <FieldDescription>Please enter a valid message.</FieldDescription>
    </Field>
  )
}
