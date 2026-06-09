import { DirectionProvider } from "@/registry/default/ui/direction"

export function DirectionDocLtrPreview() {
  return (
    <DirectionProvider dir="ltr">
      <p className="text-sm">LTR content — Hello</p>
    </DirectionProvider>
  )
}
