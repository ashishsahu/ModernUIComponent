"use client"

import { Calendar } from "@/registry/default/ui/calendar"

export function CalendarCaptionPreview() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  )
}

