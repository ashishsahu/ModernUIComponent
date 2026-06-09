"use client"

import * as React from "react"

import { Calendar } from "@/registry/default/ui/calendar"
import { Card, CardContent } from "@/registry/default/ui/card"

export function CalendarWeekNumbersPreview() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 3)
  )

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          showWeekNumber
        />
      </CardContent>
    </Card>
  )
}

