import { NativeSelect, NativeSelectOption } from "@/registry/default/ui/native-select"

export function NativeSelectDocDisabledPreview() {
  return (
    <NativeSelect defaultValue="apple" disabled className="w-[180px]">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
    </NativeSelect>
  )
}
