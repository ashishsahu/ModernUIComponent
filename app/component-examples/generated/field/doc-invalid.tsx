import { Field, FieldDescription, FieldLabel } from "@/registry/default/ui/field"
import { Input } from "@/registry/default/ui/input"

export function FieldDocInvalidPreview() {
  return (
    <Field data-invalid className="max-w-sm">
      <FieldLabel htmlFor="email-invalid">Email</FieldLabel>
      <Input id="email-invalid" aria-invalid placeholder="you@company.com" />
      <FieldDescription>Please enter a valid email address.</FieldDescription>
    </Field>
  )
}
