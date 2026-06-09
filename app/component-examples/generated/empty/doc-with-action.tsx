import { InboxIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty"

export function EmptyDocWithActionPreview() {
  return (
    <Empty className="max-w-sm border">
      <EmptyHeader>
        <EmptyMedia variant="icon"><InboxIcon /></EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>Create your first project to get started.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Create project</Button>
      </EmptyContent>
    </Empty>
  )
}
