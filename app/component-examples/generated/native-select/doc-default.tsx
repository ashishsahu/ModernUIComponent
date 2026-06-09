import { NativeSelect, NativeSelectOption } from "@/registry/default/ui/native-select"

export function NativeSelectDocDemoPreview() {
  return (
    <NativeSelect defaultValue="apple" className="w-[180px]">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="orange">Orange</NativeSelectOption>
    </NativeSelect>
  )
}
