import { Checkbox } from "@/registry/default/ui/checkbox"
import { Field, FieldLabel } from "@/registry/default/ui/field"

export function FieldDocHorizontalPreview() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <Checkbox id="terms-field" defaultChecked />
      <FieldLabel htmlFor="terms-field" className="font-normal">
        Accept terms and conditions
      </FieldLabel>
    </Field>
  )
}
