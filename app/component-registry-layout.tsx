"use client"

import * as React from "react"

import { ComponentRegistrySidebar } from "@/app/component-registry-sidebar"

export function ComponentRegistryLayout({
  activeName,
  variantDetail = false,
  children,
}: {
  activeName?: string
  variantDetail?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full flex-col gap-8 px-6 py-8 lg:flex-row lg:gap-10 lg:px-10">
      <ComponentRegistrySidebar
        activeName={activeName}
        variantDetail={variantDetail}
      />
      <div className="flex min-w-0 flex-1 flex-col gap-8">{children}</div>
    </div>
  )
}
