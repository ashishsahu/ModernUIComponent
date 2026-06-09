import { InboxIcon } from "lucide-react"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty"

export function EmptyDocDemoPreview() {
  return (
    <Empty className="max-w-sm border">
      <EmptyHeader>
        <EmptyMedia variant="icon"><InboxIcon /></EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>You are all caught up.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
