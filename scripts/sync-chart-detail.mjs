import { access, mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const ROOT = process.cwd()
const CHART_DETAIL_DIR = path.join(ROOT, "app/component-examples/chart-detail")
const GENERATED_CHART_DIR = path.join(ROOT, "app/component-examples/generated/chart")
const VARIANTS_DIR = path.join(ROOT, "app/component-variants")

const CHART_SECTIONS = [
  {
    id: "hero",
    variants: [
      {
        id: "interactive",
        title: "Interactive",
        description: "An interactive bar chart with tabbed totals.",
        previewName: "ChartInteractiveDemoPreview",
        codeExportName: "ChartInteractiveDemoCode",
        importPath: "@/app/component-examples/chart-detail/interactive-demo",
      },
    ],
  },
  {
    id: "your-first-chart",
    title: "Your First Chart",
    description:
      "Build a bar chart step by step — start with bars, then add a grid, axis, tooltip, and legend.",
    variants: [
      {
        id: "bar-demo",
        title: "Bar Chart",
        description:
          "Define your data and chart config, then compose the chart with Recharts inside ChartContainer.",
        previewName: "ChartBarDemoPreview",
        codeExportName: "ChartBarDemoCode",
        importPath: "@/app/component-examples/generated/chart/bar-demo",
      },
      {
        id: "bar-demo-grid",
        title: "Add a Grid",
        description: "Import CartesianGrid and add it to your chart.",
        previewName: "ChartBarDemoGridPreview",
        codeExportName: "ChartBarDemoGridCode",
        importPath: "@/app/component-examples/generated/chart/bar-demo-grid",
      },
      {
        id: "bar-demo-axis",
        title: "Add an Axis",
        description: "Add an XAxis with formatted tick labels.",
        previewName: "ChartBarDemoAxisPreview",
        codeExportName: "ChartBarDemoAxisCode",
        importPath: "@/app/component-examples/generated/chart/bar-demo-axis",
      },
      {
        id: "bar-demo-tooltip",
        title: "Add Tooltip",
        description:
          "Use ChartTooltip and ChartTooltipContent for themed tooltips.",
        previewName: "ChartBarDemoTooltipPreview",
        codeExportName: "ChartBarDemoTooltipCode",
        importPath: "@/app/component-examples/generated/chart/bar-demo-tooltip",
      },
      {
        id: "bar-demo-legend",
        title: "Add Legend",
        description: "Add ChartLegend and ChartLegendContent to label series.",
        previewName: "ChartBarDemoLegendPreview",
        codeExportName: "ChartBarDemoLegendCode",
        importPath: "@/app/component-examples/generated/chart/bar-demo-legend",
      },
    ],
  },
  {
    id: "tooltip",
    title: "Tooltip",
    description:
      "A chart tooltip contains a label, name, indicator, and value. Mix and match to customize.",
    variants: [
      {
        id: "tooltip-demo",
        title: "Tooltip Indicators",
        description: "Tooltip layout variants with dot, line, and dashed indicators.",
        previewName: "ChartTooltipDemoPreview",
        codeExportName: "ChartTooltipDemoCode",
        importPath: "@/app/component-examples/generated/chart/tooltip-demo",
      },
    ],
  },
  {
    id: "rtl",
    title: "RTL",
    description:
      "Charts mirror correctly in right-to-left layouts with reversed axes and legends.",
    variants: [
      {
        id: "rtl",
        title: "RTL Bar Chart",
        description: "Bar chart with RTL axis and translated labels.",
        previewName: "ChartRtlDemoPreview",
        codeExportName: "ChartRtlDemoCode",
        importPath: "@/app/component-examples/chart-detail/rtl-demo",
      },
    ],
  },
]

const INTERACTIVE_DEMO_SOURCE = `"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/default/ui/chart"

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartInteractiveDemoPreview() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card className="w-full py-0 pb-4">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-0!">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                type="button"
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={\`var(--color-\${activeChart})\`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
`

const RTL_DEMO_SOURCE = `"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { useTranslation, type Translations } from "@/hooks/use-translation-stub"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/default/ui/chart"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      desktop: "Desktop",
      mobile: "Mobile",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      january: "يناير",
      february: "فبراير",
      march: "مارس",
      april: "أبريل",
      may: "مايو",
      june: "يونيو",
      desktop: "سطح المكتب",
      mobile: "الجوال",
    },
  },
}

const chartData = [
  { month: "january", desktop: 186, mobile: 80 },
  { month: "february", desktop: 305, mobile: 200 },
  { month: "march", desktop: 237, mobile: 120 },
  { month: "april", desktop: 73, mobile: 190 },
  { month: "may", desktop: 209, mobile: 130 },
  { month: "june", desktop: 214, mobile: 140 },
]

export function ChartRtlDemoPreview() {
  const { t, dir } = useTranslation(translations, "ar")

  const chartConfig = {
    desktop: {
      label: t.desktop,
      color: "var(--chart-2)",
    },
    mobile: {
      label: t.mobile,
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig

  return (
    <div dir={dir} className="w-full">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
              (t[value as keyof typeof t] as string).slice(0, 3)
            }
            reversed={dir === "rtl"}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                labelFormatter={(value) => t[value as keyof typeof t] as string}
              />
            }
          />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
`

function toConsumerCode(source) {
  return source
    .replace(/^\/\/ @ts-nocheck\n/, "")
    .replaceAll("@/registry/default/ui/", "@/components/ui/")
}

async function fileExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function writeManualDemos() {
  await writeFile(
    path.join(CHART_DETAIL_DIR, "interactive-demo.tsx"),
    INTERACTIVE_DEMO_SOURCE
  )
  await writeFile(
    path.join(CHART_DETAIL_DIR, "interactive-demo.code.ts"),
    `export const ChartInteractiveDemoCode = ${JSON.stringify(toConsumerCode(INTERACTIVE_DEMO_SOURCE))}\n`
  )
  await writeFile(path.join(CHART_DETAIL_DIR, "rtl-demo.tsx"), RTL_DEMO_SOURCE)
  await writeFile(
    path.join(CHART_DETAIL_DIR, "rtl-demo.code.ts"),
    `export const ChartRtlDemoCode = ${JSON.stringify(toConsumerCode(RTL_DEMO_SOURCE))}\n`
  )
}

async function writeChartCatalogPreview() {
  const previewSource = `"use client"

import { ChartInteractiveDemoPreview } from "@/app/component-examples/chart-detail/interactive-demo"

export function ChartCatalogPreview() {
  return (
    <div className="w-full min-w-0">
      <ChartInteractiveDemoPreview />
    </div>
  )
}
`

  await writeFile(
    path.join(CHART_DETAIL_DIR, "catalog-preview.tsx"),
    previewSource
  )
}

async function resolveSections() {
  const sections = []

  for (const section of CHART_SECTIONS) {
    const variants = []

    for (const variant of section.variants) {
      const generatedPath = variant.importPath.replace(
        "@/app/component-examples/",
        "app/component-examples/"
      )
      const tsxPath = path.join(ROOT, `${generatedPath}.tsx`)
      if (!(await fileExists(tsxPath))) continue
      variants.push(variant)
    }

    if (variants.length) {
      sections.push({
        ...section,
        variants,
      })
    }
  }

  return sections
}

async function writeChartPage(sections) {
  const allVariants = sections.flatMap((section) => section.variants)
  const imports = allVariants
    .flatMap((variant) => [
      `import { ${variant.previewName} } from "${variant.importPath}"`,
      `import { ${variant.codeExportName} } from "${variant.importPath}.code"`,
    ])
    .join("\n")

  const sectionsObject = sections
    .map((section) => {
      const variantsObject = section.variants
        .map(
          (variant) => `        {
          id: ${JSON.stringify(variant.id)},
          title: ${JSON.stringify(variant.title)},
          description: ${JSON.stringify(variant.description)},
          Preview: ${variant.previewName},
          code: ${variant.codeExportName},
        },`
        )
        .join("\n")

      return `    {
      id: ${JSON.stringify(section.id)},
      ${section.title ? `title: ${JSON.stringify(section.title)},` : ""}
      ${section.description ? `description: ${JSON.stringify(section.description)},` : ""}
      variants: [
${variantsObject}
      ],
    },`
    })
    .join("\n")

  const flatVariantsObject = allVariants
    .map(
      (variant) => `    {
      id: ${JSON.stringify(variant.id)},
      title: ${JSON.stringify(variant.title)},
      description: ${JSON.stringify(variant.description)},
      Preview: ${variant.previewName},
      code: ${variant.codeExportName},
    },`
    )
    .join("\n")

  await writeFile(
    path.join(VARIANTS_DIR, "chart-page.ts"),
    `import type { ComponentVariantPage } from "@/app/component-variants/types"

${imports}

export const chartVariantPage: ComponentVariantPage = {
  name: "chart",
  title: "Chart",
  description:
    "Beautiful charts. Built using Recharts. Copy and paste into your apps.",
  install: "npx shadcn@latest add ashishsahu/ModernUIComponent/chart",
  sections: [
${sectionsObject}
  ],
  variants: [
${flatVariantsObject}
  ],
}
`
  )
}

async function stripChartFromGeneratedPages() {
  const filePath = path.join(VARIANTS_DIR, "generated-pages.tsx")
  let content = await readFile(filePath, "utf8")

  content = content.replace(
    /^import .* from "@\/app\/component-examples\/generated\/chart\/.*"\n/gm,
    ""
  )
  content = content.replace(/\n  "chart": \{[\s\S]*?\n  \},(?=\n  "[^"]+":)/, "")

  await writeFile(filePath, content)
}

async function main() {
  await mkdir(CHART_DETAIL_DIR, { recursive: true })
  await writeManualDemos()
  const sections = await resolveSections()
  await writeChartCatalogPreview()
  await writeChartPage(sections)
  await stripChartFromGeneratedPages()

  const variantCount = sections.reduce(
    (count, section) => count + section.variants.length,
    0
  )
  console.log(
    `Chart detail page: ${variantCount} doc examples across ${sections.length} sections`
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
