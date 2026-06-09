import { Field, FieldDescription, FieldLabel } from "@/registry/default/ui/field"
import { Textarea } from "@/registry/default/ui/textarea"

export function TextareaDocFieldPreview() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  )
}
