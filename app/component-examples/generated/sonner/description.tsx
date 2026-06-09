"use client"

import { toast } from "sonner"

import { Button } from "@/registry/default/ui/button"

export function SonnerDescriptionPreview() {
  return (
    <Button
      onClick={() =>
        toast("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
        })
      }
      variant="outline"
      className="w-fit"
    >
      Show Toast
    </Button>
  )
}

