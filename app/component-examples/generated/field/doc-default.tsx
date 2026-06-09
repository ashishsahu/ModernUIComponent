import { Field, FieldDescription, FieldLabel } from "@/registry/default/ui/field"
import { Input } from "@/registry/default/ui/input"

export function FieldDocDemoPreview() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" placeholder="you@company.com" />
      <FieldDescription>We never share your email.</FieldDescription>
    </Field>
  )
}
