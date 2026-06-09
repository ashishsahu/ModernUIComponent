import { Field, FieldDescription, FieldLabel } from "@/registry/default/ui/field"
import { Input } from "@/registry/default/ui/input"

export function InputDocInvalidPreview() {
  return (
    <Field data-invalid className="max-w-sm">
      <FieldLabel htmlFor="input-invalid">Email</FieldLabel>
      <Input id="input-invalid" aria-invalid placeholder="you@company.com" />
      <FieldDescription>Please enter a valid email address.</FieldDescription>
    </Field>
  )
}
