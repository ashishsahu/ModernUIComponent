import { UserIcon } from "lucide-react"
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/registry/default/ui/item"

export function ItemDocMutedPreview() {
  return (
    <Item variant="muted" className="max-w-sm">
      <ItemMedia variant="icon"><UserIcon /></ItemMedia>
      <ItemContent>
        <ItemTitle>Processing payment...</ItemTitle>
      </ItemContent>
    </Item>
  )
}
