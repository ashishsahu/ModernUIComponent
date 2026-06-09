import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"
import { Input } from "@/registry/default/ui/input"

export function InputInvalidPreview() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
      <Input id="input-invalid" placeholder="Error" aria-invalid />
      <FieldDescription>
        This field contains validation errors.
      </FieldDescription>
    </Field>
  )
}

