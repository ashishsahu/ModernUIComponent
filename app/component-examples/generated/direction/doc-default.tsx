import { DirectionProvider } from "@/registry/default/ui/direction"

export function DirectionDocDemoPreview() {
  return (
    <DirectionProvider dir="rtl">
      <p className="text-sm">RTL content — مرحبا</p>
    </DirectionProvider>
  )
}
