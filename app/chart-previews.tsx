"use client"

import * as React from "react"
import { ChartAreaAxes } from "@/registry/default/blocks/chart-area-axes/chart-area-axes"
import { ChartAreaDefault } from "@/registry/default/blocks/chart-area-default/chart-area-default"
import { ChartAreaGradient } from "@/registry/default/blocks/chart-area-gradient/chart-area-gradient"
import { ChartAreaIcons } from "@/registry/default/blocks/chart-area-icons/chart-area-icons"
import { ChartAreaInteractive } from "@/registry/default/blocks/chart-area-interactive/chart-area-interactive"
import { ChartAreaLegend } from "@/registry/default/blocks/chart-area-legend/chart-area-legend"
import { ChartAreaLinear } from "@/registry/default/blocks/chart-area-linear/chart-area-linear"
import { ChartAreaStacked } from "@/registry/default/blocks/chart-area-stacked/chart-area-stacked"
import { ChartAreaStackedExpand } from "@/registry/default/blocks/chart-area-stacked-expand/chart-area-stacked-expand"
import { ChartAreaStep } from "@/registry/default/blocks/chart-area-step/chart-area-step"
import { ChartBarActive } from "@/registry/default/blocks/chart-bar-active/chart-bar-active"
import { ChartBarDefault } from "@/registry/default/blocks/chart-bar-default/chart-bar-default"
import { ChartBarHorizontal } from "@/registry/default/blocks/chart-bar-horizontal/chart-bar-horizontal"
import { ChartBarInteractive } from "@/registry/default/blocks/chart-bar-interactive/chart-bar-interactive"
import { ChartBarLabel } from "@/registry/default/blocks/chart-bar-label/chart-bar-label"
import { ChartBarLabelCustom } from "@/registry/default/blocks/chart-bar-label-custom/chart-bar-label-custom"
import { ChartBarMixed } from "@/registry/default/blocks/chart-bar-mixed/chart-bar-mixed"
import { ChartBarMultiple } from "@/registry/default/blocks/chart-bar-multiple/chart-bar-multiple"
import { ChartBarNegative } from "@/registry/default/blocks/chart-bar-negative/chart-bar-negative"
import { ChartBarStacked } from "@/registry/default/blocks/chart-bar-stacked/chart-bar-stacked"
import { ChartLineDefault } from "@/registry/default/blocks/chart-line-default/chart-line-default"
import { ChartLineDots } from "@/registry/default/blocks/chart-line-dots/chart-line-dots"
import { ChartLineDotsColors } from "@/registry/default/blocks/chart-line-dots-colors/chart-line-dots-colors"
import { ChartLineDotsCustom } from "@/registry/default/blocks/chart-line-dots-custom/chart-line-dots-custom"
import { ChartLineInteractive } from "@/registry/default/blocks/chart-line-interactive/chart-line-interactive"
import { ChartLineLabel } from "@/registry/default/blocks/chart-line-label/chart-line-label"
import { ChartLineLabelCustom } from "@/registry/default/blocks/chart-line-label-custom/chart-line-label-custom"
import { ChartLineLinear } from "@/registry/default/blocks/chart-line-linear/chart-line-linear"
import { ChartLineMultiple } from "@/registry/default/blocks/chart-line-multiple/chart-line-multiple"
import { ChartLineStep } from "@/registry/default/blocks/chart-line-step/chart-line-step"
import { ChartPieDonut } from "@/registry/default/blocks/chart-pie-donut/chart-pie-donut"
import { ChartPieDonutActive } from "@/registry/default/blocks/chart-pie-donut-active/chart-pie-donut-active"
import { ChartPieDonutText } from "@/registry/default/blocks/chart-pie-donut-text/chart-pie-donut-text"
import { ChartPieInteractive } from "@/registry/default/blocks/chart-pie-interactive/chart-pie-interactive"
import { ChartPieLabel } from "@/registry/default/blocks/chart-pie-label/chart-pie-label"
import { ChartPieLabelCustom } from "@/registry/default/blocks/chart-pie-label-custom/chart-pie-label-custom"
import { ChartPieLabelList } from "@/registry/default/blocks/chart-pie-label-list/chart-pie-label-list"
import { ChartPieLegend } from "@/registry/default/blocks/chart-pie-legend/chart-pie-legend"
import { ChartPieSeparatorNone } from "@/registry/default/blocks/chart-pie-separator-none/chart-pie-separator-none"
import { ChartPieSimple } from "@/registry/default/blocks/chart-pie-simple/chart-pie-simple"
import { ChartPieStacked } from "@/registry/default/blocks/chart-pie-stacked/chart-pie-stacked"
import { ChartRadarDefault } from "@/registry/default/blocks/chart-radar-default/chart-radar-default"
import { ChartRadarDots } from "@/registry/default/blocks/chart-radar-dots/chart-radar-dots"
import { ChartRadarGridCircle } from "@/registry/default/blocks/chart-radar-grid-circle/chart-radar-grid-circle"
import { ChartRadarGridCircleFill } from "@/registry/default/blocks/chart-radar-grid-circle-fill/chart-radar-grid-circle-fill"
import { ChartRadarGridCircleNoLines } from "@/registry/default/blocks/chart-radar-grid-circle-no-lines/chart-radar-grid-circle-no-lines"
import { ChartRadarGridCustom } from "@/registry/default/blocks/chart-radar-grid-custom/chart-radar-grid-custom"
import { ChartRadarGridFill } from "@/registry/default/blocks/chart-radar-grid-fill/chart-radar-grid-fill"
import { ChartRadarGridNone } from "@/registry/default/blocks/chart-radar-grid-none/chart-radar-grid-none"
import { ChartRadarIcons } from "@/registry/default/blocks/chart-radar-icons/chart-radar-icons"
import { ChartRadarLabelCustom } from "@/registry/default/blocks/chart-radar-label-custom/chart-radar-label-custom"
import { ChartRadarLegend } from "@/registry/default/blocks/chart-radar-legend/chart-radar-legend"
import { ChartRadarLinesOnly } from "@/registry/default/blocks/chart-radar-lines-only/chart-radar-lines-only"
import { ChartRadarMultiple } from "@/registry/default/blocks/chart-radar-multiple/chart-radar-multiple"
import { ChartRadarRadius } from "@/registry/default/blocks/chart-radar-radius/chart-radar-radius"
import { ChartRadialGrid } from "@/registry/default/blocks/chart-radial-grid/chart-radial-grid"
import { ChartRadialLabel } from "@/registry/default/blocks/chart-radial-label/chart-radial-label"
import { ChartRadialShape } from "@/registry/default/blocks/chart-radial-shape/chart-radial-shape"
import { ChartRadialSimple } from "@/registry/default/blocks/chart-radial-simple/chart-radial-simple"
import { ChartRadialStacked } from "@/registry/default/blocks/chart-radial-stacked/chart-radial-stacked"
import { ChartRadialText } from "@/registry/default/blocks/chart-radial-text/chart-radial-text"
import { ChartTooltipAdvanced } from "@/registry/default/blocks/chart-tooltip-advanced/chart-tooltip-advanced"
import { ChartTooltipDefault } from "@/registry/default/blocks/chart-tooltip-default/chart-tooltip-default"
import { ChartTooltipDemo } from "@/registry/default/blocks/chart-tooltip-demo/chart-tooltip-demo"
import { ChartTooltipFormatter } from "@/registry/default/blocks/chart-tooltip-formatter/chart-tooltip-formatter"
import { ChartTooltipIcons } from "@/registry/default/blocks/chart-tooltip-icons/chart-tooltip-icons"
import { ChartTooltipIndicatorLine } from "@/registry/default/blocks/chart-tooltip-indicator-line/chart-tooltip-indicator-line"
import { ChartTooltipIndicatorNone } from "@/registry/default/blocks/chart-tooltip-indicator-none/chart-tooltip-indicator-none"
import { ChartTooltipLabelCustom } from "@/registry/default/blocks/chart-tooltip-label-custom/chart-tooltip-label-custom"
import { ChartTooltipLabelFormatter } from "@/registry/default/blocks/chart-tooltip-label-formatter/chart-tooltip-label-formatter"
import { ChartTooltipLabelNone } from "@/registry/default/blocks/chart-tooltip-label-none/chart-tooltip-label-none"

export const chartPreviewEntries: Record<string, React.ReactNode> = {
  "chart-area-axes": (
    <div className="w-full max-w-md">
      <ChartAreaAxes />
    </div>
  ),
  "chart-area-default": (
    <div className="w-full max-w-md">
      <ChartAreaDefault />
    </div>
  ),
  "chart-area-gradient": (
    <div className="w-full max-w-md">
      <ChartAreaGradient />
    </div>
  ),
  "chart-area-icons": (
    <div className="w-full max-w-md">
      <ChartAreaIcons />
    </div>
  ),
  "chart-area-interactive": (
    <div className="w-full min-w-0">
      <ChartAreaInteractive />
    </div>
  ),
  "chart-area-legend": (
    <div className="w-full max-w-md">
      <ChartAreaLegend />
    </div>
  ),
  "chart-area-linear": (
    <div className="w-full max-w-md">
      <ChartAreaLinear />
    </div>
  ),
  "chart-area-stacked": (
    <div className="w-full max-w-md">
      <ChartAreaStacked />
    </div>
  ),
  "chart-area-stacked-expand": (
    <div className="w-full max-w-md">
      <ChartAreaStackedExpand />
    </div>
  ),
  "chart-area-step": (
    <div className="w-full max-w-md">
      <ChartAreaStep />
    </div>
  ),
  "chart-bar-active": (
    <div className="w-full max-w-md">
      <ChartBarActive />
    </div>
  ),
  "chart-bar-default": (
    <div className="w-full max-w-md">
      <ChartBarDefault />
    </div>
  ),
  "chart-bar-horizontal": (
    <div className="w-full max-w-md">
      <ChartBarHorizontal />
    </div>
  ),
  "chart-bar-interactive": (
    <div className="w-full min-w-0">
      <ChartBarInteractive />
    </div>
  ),
  "chart-bar-label": (
    <div className="w-full max-w-md">
      <ChartBarLabel />
    </div>
  ),
  "chart-bar-label-custom": (
    <div className="w-full max-w-md">
      <ChartBarLabelCustom />
    </div>
  ),
  "chart-bar-mixed": (
    <div className="w-full max-w-md">
      <ChartBarMixed />
    </div>
  ),
  "chart-bar-multiple": (
    <div className="w-full max-w-md">
      <ChartBarMultiple />
    </div>
  ),
  "chart-bar-negative": (
    <div className="w-full max-w-md">
      <ChartBarNegative />
    </div>
  ),
  "chart-bar-stacked": (
    <div className="w-full max-w-md">
      <ChartBarStacked />
    </div>
  ),
  "chart-line-default": (
    <div className="w-full max-w-md">
      <ChartLineDefault />
    </div>
  ),
  "chart-line-dots": (
    <div className="w-full max-w-md">
      <ChartLineDots />
    </div>
  ),
  "chart-line-dots-colors": (
    <div className="w-full max-w-md">
      <ChartLineDotsColors />
    </div>
  ),
  "chart-line-dots-custom": (
    <div className="w-full max-w-md">
      <ChartLineDotsCustom />
    </div>
  ),
  "chart-line-interactive": (
    <div className="w-full min-w-0">
      <ChartLineInteractive />
    </div>
  ),
  "chart-line-label": (
    <div className="w-full max-w-md">
      <ChartLineLabel />
    </div>
  ),
  "chart-line-label-custom": (
    <div className="w-full max-w-md">
      <ChartLineLabelCustom />
    </div>
  ),
  "chart-line-linear": (
    <div className="w-full max-w-md">
      <ChartLineLinear />
    </div>
  ),
  "chart-line-multiple": (
    <div className="w-full max-w-md">
      <ChartLineMultiple />
    </div>
  ),
  "chart-line-step": (
    <div className="w-full max-w-md">
      <ChartLineStep />
    </div>
  ),
  "chart-pie-donut": (
    <div className="w-full max-w-md">
      <ChartPieDonut />
    </div>
  ),
  "chart-pie-donut-active": (
    <div className="w-full max-w-md">
      <ChartPieDonutActive />
    </div>
  ),
  "chart-pie-donut-text": (
    <div className="w-full max-w-md">
      <ChartPieDonutText />
    </div>
  ),
  "chart-pie-interactive": (
    <div className="w-full min-w-0">
      <ChartPieInteractive />
    </div>
  ),
  "chart-pie-label": (
    <div className="w-full max-w-md">
      <ChartPieLabel />
    </div>
  ),
  "chart-pie-label-custom": (
    <div className="w-full max-w-md">
      <ChartPieLabelCustom />
    </div>
  ),
  "chart-pie-label-list": (
    <div className="w-full max-w-md">
      <ChartPieLabelList />
    </div>
  ),
  "chart-pie-legend": (
    <div className="w-full max-w-md">
      <ChartPieLegend />
    </div>
  ),
  "chart-pie-separator-none": (
    <div className="w-full max-w-md">
      <ChartPieSeparatorNone />
    </div>
  ),
  "chart-pie-simple": (
    <div className="w-full max-w-md">
      <ChartPieSimple />
    </div>
  ),
  "chart-pie-stacked": (
    <div className="w-full max-w-md">
      <ChartPieStacked />
    </div>
  ),
  "chart-radar-default": (
    <div className="w-full max-w-md">
      <ChartRadarDefault />
    </div>
  ),
  "chart-radar-dots": (
    <div className="w-full max-w-md">
      <ChartRadarDots />
    </div>
  ),
  "chart-radar-grid-circle": (
    <div className="w-full max-w-md">
      <ChartRadarGridCircle />
    </div>
  ),
  "chart-radar-grid-circle-fill": (
    <div className="w-full max-w-md">
      <ChartRadarGridCircleFill />
    </div>
  ),
  "chart-radar-grid-circle-no-lines": (
    <div className="w-full max-w-md">
      <ChartRadarGridCircleNoLines />
    </div>
  ),
  "chart-radar-grid-custom": (
    <div className="w-full max-w-md">
      <ChartRadarGridCustom />
    </div>
  ),
  "chart-radar-grid-fill": (
    <div className="w-full max-w-md">
      <ChartRadarGridFill />
    </div>
  ),
  "chart-radar-grid-none": (
    <div className="w-full max-w-md">
      <ChartRadarGridNone />
    </div>
  ),
  "chart-radar-icons": (
    <div className="w-full max-w-md">
      <ChartRadarIcons />
    </div>
  ),
  "chart-radar-label-custom": (
    <div className="w-full max-w-md">
      <ChartRadarLabelCustom />
    </div>
  ),
  "chart-radar-legend": (
    <div className="w-full max-w-md">
      <ChartRadarLegend />
    </div>
  ),
  "chart-radar-lines-only": (
    <div className="w-full max-w-md">
      <ChartRadarLinesOnly />
    </div>
  ),
  "chart-radar-multiple": (
    <div className="w-full max-w-md">
      <ChartRadarMultiple />
    </div>
  ),
  "chart-radar-radius": (
    <div className="w-full max-w-md">
      <ChartRadarRadius />
    </div>
  ),
  "chart-radial-grid": (
    <div className="w-full max-w-md">
      <ChartRadialGrid />
    </div>
  ),
  "chart-radial-label": (
    <div className="w-full max-w-md">
      <ChartRadialLabel />
    </div>
  ),
  "chart-radial-shape": (
    <div className="w-full max-w-md">
      <ChartRadialShape />
    </div>
  ),
  "chart-radial-simple": (
    <div className="w-full max-w-md">
      <ChartRadialSimple />
    </div>
  ),
  "chart-radial-stacked": (
    <div className="w-full max-w-md">
      <ChartRadialStacked />
    </div>
  ),
  "chart-radial-text": (
    <div className="w-full max-w-md">
      <ChartRadialText />
    </div>
  ),
  "chart-tooltip-advanced": (
    <div className="w-full max-w-md">
      <ChartTooltipAdvanced />
    </div>
  ),
  "chart-tooltip-default": (
    <div className="w-full max-w-md">
      <ChartTooltipDefault />
    </div>
  ),
  "chart-tooltip-demo": (
    <div className="w-full max-w-md">
      <ChartTooltipDemo />
    </div>
  ),
  "chart-tooltip-formatter": (
    <div className="w-full max-w-md">
      <ChartTooltipFormatter />
    </div>
  ),
  "chart-tooltip-icons": (
    <div className="w-full max-w-md">
      <ChartTooltipIcons />
    </div>
  ),
  "chart-tooltip-indicator-line": (
    <div className="w-full max-w-md">
      <ChartTooltipIndicatorLine />
    </div>
  ),
  "chart-tooltip-indicator-none": (
    <div className="w-full max-w-md">
      <ChartTooltipIndicatorNone />
    </div>
  ),
  "chart-tooltip-label-custom": (
    <div className="w-full max-w-md">
      <ChartTooltipLabelCustom />
    </div>
  ),
  "chart-tooltip-label-formatter": (
    <div className="w-full max-w-md">
      <ChartTooltipLabelFormatter />
    </div>
  ),
  "chart-tooltip-label-none": (
    <div className="w-full max-w-md">
      <ChartTooltipLabelNone />
    </div>
  ),
}
