"use client"

import * as React from "react"

import { Progress } from "@/registry/default/ui/progress"
import { Slider } from "@/registry/default/ui/slider"

export function ProgressControlledPreview() {
  const [value, setValue] = React.useState([50])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value[0]} />
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        step={1}
      />
    </div>
  )
}

