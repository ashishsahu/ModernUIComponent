import { notFound } from "next/navigation"

import { ChartVariantDetail } from "@/app/chart-variant-detail"
import { ComponentVariantDetail } from "@/app/component-variant-detail"
import { getVariantPageNames } from "@/app/component-variants/variant-page-names"

export function generateStaticParams() {
  return getVariantPageNames().map((name) => ({ name }))
}

export default async function ComponentVariantsPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params

  if (!getVariantPageNames().includes(name)) {
    notFound()
  }

  if (name === "chart") {
    return <ChartVariantDetail />
  }

  return <ComponentVariantDetail name={name} />
}
