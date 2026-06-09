import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"
import { Textarea } from "@/registry/default/ui/textarea"

export function TextareaFieldPreview() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  )
}

