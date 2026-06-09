"use client"

import {
  AlertTriangleIcon,
  ArrowRightIcon,
  AwardIcon,
  CircleCheckIcon,
} from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

type DimensionStatus = "pass" | "warn"

export type QualityDimension = {
  name: string
  status: DimensionStatus
  detail?: string
}

export type QualitySummaryCardProps = {
  title?: string
  statusLabel?: string
  passed?: number
  total?: number
  dimensionCount?: number
  updatedAt?: string
  dimensions?: QualityDimension[]
  onViewAll?: () => void
}

const defaultDimensions: QualityDimension[] = [
  { name: "Accuracy", status: "pass" },
  { name: "Completeness", status: "pass" },
  { name: "Freshness", status: "pass" },
  { name: "Schema", status: "pass" },
  { name: "Uniqueness", status: "warn", detail: "3 issues" },
  { name: "Validity", status: "pass" },
]

const labelLineClass = "text-[13px] leading-[18px] text-foreground"

function StatusIcon({ status }: { status: DimensionStatus }) {
  const isPass = status === "pass"

  if (isPass) {
    return (
      <span className="flex size-[18px] shrink-0 items-center justify-center rounded-[5px] bg-[#dff0e8]">
        <CircleCheckIcon
          className="size-3.5 text-[#4a7c5f]"
          strokeWidth={2}
        />
      </span>
    )
  }

  return (
    <span className="flex size-[18px] shrink-0 items-center justify-center rounded-[5px] bg-[#fff7e6]">
      <AlertTriangleIcon
        className="size-3 text-[#d4a017]"
        strokeWidth={2.25}
      />
    </span>
  )
}

export function QualitySummaryCard({
  title = "Quality",
  statusLabel = "Healthy",
  passed = 47,
  total = 100,
  dimensionCount = 6,
  updatedAt = "3m ago",
  dimensions = defaultDimensions,
  onViewAll,
}: QualitySummaryCardProps) {
  return (
    <Card className="w-full max-w-[22rem] gap-0 border border-border/60 bg-[#f9f9f8] py-5 shadow-sm">
      <CardHeader className="grid-rows-1 items-center gap-0 px-5 pb-4">
        <CardTitle className="flex items-center gap-2 text-[15px] font-medium text-foreground">
          <AwardIcon className="size-4 stroke-[1.75] text-muted-foreground" />
          {title}
        </CardTitle>
        <CardAction>
          <Badge className="rounded-full border-0 bg-[#dff0e8] px-2.5 py-0.5 text-xs font-medium text-[#4a7c5f] hover:bg-[#dff0e8]">
            {statusLabel}
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-1 px-5 pb-4">
        <p className="font-serif leading-none text-foreground">
          <span className="text-[2rem] font-semibold tracking-tight">
            {passed}
          </span>
          <span className="text-base font-normal text-muted-foreground">
            /{total} rules
          </span>
        </p>
        <p className="text-muted-foreground text-[13px]">
          across {dimensionCount} dimensions • {updatedAt}
        </p>
      </CardContent>

      <CardContent className="px-5 pb-5 pt-0">
        <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
          {dimensions.map((dimension) => (
            <div
              key={dimension.name}
              className={
                dimension.detail
                  ? "flex gap-3"
                  : "flex items-center gap-3"
              }
            >
              <div className="flex h-[18px] shrink-0 items-center">
                <StatusIcon status={dimension.status} />
              </div>
              <div className="min-w-0">
                <p className={labelLineClass}>{dimension.name}</p>
                {dimension.detail ? (
                  <p className="mt-0.5 text-[11px] leading-none text-[#d4a017]">
                    {dimension.detail}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="border-t border-border/80 px-5 pt-4 pb-0">
        <button
          type="button"
          className="inline-flex items-center gap-1 text-[13px] font-medium text-[#2d8a8a] transition-colors hover:text-[#2d8a8a]/80"
          onClick={onViewAll}
        >
          View all {passed} quality rules
          <ArrowRightIcon className="size-3.5" />
        </button>
      </CardFooter>
    </Card>
  )
}
