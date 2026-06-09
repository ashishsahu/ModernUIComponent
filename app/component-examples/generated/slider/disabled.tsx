import { Slider } from "@/registry/default/ui/slider"

export function SliderDisabledPreview() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      disabled
      className="mx-auto w-full max-w-xs"
    />
  )
}

