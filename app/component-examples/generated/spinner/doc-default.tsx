import { Item, ItemContent, ItemMedia, ItemTitle } from "@/registry/default/ui/item"
import { Spinner } from "@/registry/default/ui/spinner"

export function SpinnerDocDemoPreview() {
  return (
    <Item variant="muted" className="max-w-sm">
      <ItemMedia><Spinner /></ItemMedia>
      <ItemContent><ItemTitle>Processing payment...</ItemTitle></ItemContent>
    </Item>
  )
}
