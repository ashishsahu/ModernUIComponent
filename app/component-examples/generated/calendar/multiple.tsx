import { Calendar } from "@/registry/default/ui/calendar"
import { Card, CardContent } from "@/registry/default/ui/card"

export function CalendarMultiplePreview() {
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar mode="multiple" />
      </CardContent>
    </Card>
  )
}

