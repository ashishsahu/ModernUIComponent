import type { ComponentVariantPage } from "@/app/component-variants/types"

import { ChartInteractiveDemoPreview } from "@/app/component-examples/chart-detail/interactive-demo"
import { ChartInteractiveDemoCode } from "@/app/component-examples/chart-detail/interactive-demo.code"
import { ChartBarDemoPreview } from "@/app/component-examples/generated/chart/bar-demo"
import { ChartBarDemoCode } from "@/app/component-examples/generated/chart/bar-demo.code"
import { ChartBarDemoGridPreview } from "@/app/component-examples/generated/chart/bar-demo-grid"
import { ChartBarDemoGridCode } from "@/app/component-examples/generated/chart/bar-demo-grid.code"
import { ChartBarDemoAxisPreview } from "@/app/component-examples/generated/chart/bar-demo-axis"
import { ChartBarDemoAxisCode } from "@/app/component-examples/generated/chart/bar-demo-axis.code"
import { ChartBarDemoTooltipPreview } from "@/app/component-examples/generated/chart/bar-demo-tooltip"
import { ChartBarDemoTooltipCode } from "@/app/component-examples/generated/chart/bar-demo-tooltip.code"
import { ChartBarDemoLegendPreview } from "@/app/component-examples/generated/chart/bar-demo-legend"
import { ChartBarDemoLegendCode } from "@/app/component-examples/generated/chart/bar-demo-legend.code"
import { ChartTooltipDemoPreview } from "@/app/component-examples/generated/chart/tooltip-demo"
import { ChartTooltipDemoCode } from "@/app/component-examples/generated/chart/tooltip-demo.code"
import { ChartRtlDemoPreview } from "@/app/component-examples/chart-detail/rtl-demo"
import { ChartRtlDemoCode } from "@/app/component-examples/chart-detail/rtl-demo.code"

export const chartVariantPage: ComponentVariantPage = {
  name: "chart",
  title: "Chart",
  description:
    "Beautiful charts. Built using Recharts. Copy and paste into your apps.",
  install: "npx shadcn@latest add ashishsahu/ModernUIComponent/chart",
  sections: [
    {
      id: "hero",
      
      
      variants: [
        {
          id: "interactive",
          title: "Interactive",
          description: "An interactive bar chart with tabbed totals.",
          Preview: ChartInteractiveDemoPreview,
          code: ChartInteractiveDemoCode,
        },
      ],
    },
    {
      id: "your-first-chart",
      title: "Your First Chart",
      description: "Build a bar chart step by step — start with bars, then add a grid, axis, tooltip, and legend.",
      variants: [
        {
          id: "bar-demo",
          title: "Bar Chart",
          description: "Define your data and chart config, then compose the chart with Recharts inside ChartContainer.",
          Preview: ChartBarDemoPreview,
          code: ChartBarDemoCode,
        },
        {
          id: "bar-demo-grid",
          title: "Add a Grid",
          description: "Import CartesianGrid and add it to your chart.",
          Preview: ChartBarDemoGridPreview,
          code: ChartBarDemoGridCode,
        },
        {
          id: "bar-demo-axis",
          title: "Add an Axis",
          description: "Add an XAxis with formatted tick labels.",
          Preview: ChartBarDemoAxisPreview,
          code: ChartBarDemoAxisCode,
        },
        {
          id: "bar-demo-tooltip",
          title: "Add Tooltip",
          description: "Use ChartTooltip and ChartTooltipContent for themed tooltips.",
          Preview: ChartBarDemoTooltipPreview,
          code: ChartBarDemoTooltipCode,
        },
        {
          id: "bar-demo-legend",
          title: "Add Legend",
          description: "Add ChartLegend and ChartLegendContent to label series.",
          Preview: ChartBarDemoLegendPreview,
          code: ChartBarDemoLegendCode,
        },
      ],
    },
    {
      id: "tooltip",
      title: "Tooltip",
      description: "A chart tooltip contains a label, name, indicator, and value. Mix and match to customize.",
      variants: [
        {
          id: "tooltip-demo",
          title: "Tooltip Indicators",
          description: "Tooltip layout variants with dot, line, and dashed indicators.",
          Preview: ChartTooltipDemoPreview,
          code: ChartTooltipDemoCode,
        },
      ],
    },
    {
      id: "rtl",
      title: "RTL",
      description: "Charts mirror correctly in right-to-left layouts with reversed axes and legends.",
      variants: [
        {
          id: "rtl",
          title: "RTL Bar Chart",
          description: "Bar chart with RTL axis and translated labels.",
          Preview: ChartRtlDemoPreview,
          code: ChartRtlDemoCode,
        },
      ],
    },
  ],
  variants: [
    {
      id: "interactive",
      title: "Interactive",
      description: "An interactive bar chart with tabbed totals.",
      Preview: ChartInteractiveDemoPreview,
      code: ChartInteractiveDemoCode,
    },
    {
      id: "bar-demo",
      title: "Bar Chart",
      description: "Define your data and chart config, then compose the chart with Recharts inside ChartContainer.",
      Preview: ChartBarDemoPreview,
      code: ChartBarDemoCode,
    },
    {
      id: "bar-demo-grid",
      title: "Add a Grid",
      description: "Import CartesianGrid and add it to your chart.",
      Preview: ChartBarDemoGridPreview,
      code: ChartBarDemoGridCode,
    },
    {
      id: "bar-demo-axis",
      title: "Add an Axis",
      description: "Add an XAxis with formatted tick labels.",
      Preview: ChartBarDemoAxisPreview,
      code: ChartBarDemoAxisCode,
    },
    {
      id: "bar-demo-tooltip",
      title: "Add Tooltip",
      description: "Use ChartTooltip and ChartTooltipContent for themed tooltips.",
      Preview: ChartBarDemoTooltipPreview,
      code: ChartBarDemoTooltipCode,
    },
    {
      id: "bar-demo-legend",
      title: "Add Legend",
      description: "Add ChartLegend and ChartLegendContent to label series.",
      Preview: ChartBarDemoLegendPreview,
      code: ChartBarDemoLegendCode,
    },
    {
      id: "tooltip-demo",
      title: "Tooltip Indicators",
      description: "Tooltip layout variants with dot, line, and dashed indicators.",
      Preview: ChartTooltipDemoPreview,
      code: ChartTooltipDemoCode,
    },
    {
      id: "rtl",
      title: "RTL Bar Chart",
      description: "Bar chart with RTL axis and translated labels.",
      Preview: ChartRtlDemoPreview,
      code: ChartRtlDemoCode,
    },
  ],
}
