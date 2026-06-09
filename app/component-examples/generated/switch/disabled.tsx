import { Field, FieldLabel } from "@/registry/default/ui/field"
import { Switch } from "@/registry/default/ui/switch"

export function SwitchDisabledPreview() {
  return (
    <Field orientation="horizontal" data-disabled className="w-fit">
      <Switch id="switch-disabled-unchecked" disabled />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  )
}

