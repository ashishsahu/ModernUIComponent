import { Kbd, KbdGroup } from "@/registry/default/ui/kbd"

export function KbdDocGroupPreview() {
  return (
    <p className="text-muted-foreground text-sm">
      Press <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup> to open command palette
    </p>
  )
}
