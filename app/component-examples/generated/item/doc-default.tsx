import { ChevronRightIcon, UserIcon } from "lucide-react"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/default/ui/item"

export function ItemDocDemoPreview() {
  return (
    <Item variant="outline" className="max-w-sm">
      <ItemMedia variant="icon"><UserIcon /></ItemMedia>
      <ItemContent>
        <ItemTitle>ModernUI</ItemTitle>
        <ItemDescription>Component registry</ItemDescription>
      </ItemContent>
      <ChevronRightIcon className="text-muted-foreground size-4" />
    </Item>
  )
}
