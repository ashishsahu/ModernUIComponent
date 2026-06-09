"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

import { ComponentSearchProvider } from "@/app/component-search"
import { Toaster } from "@/registry/default/ui/sonner"
import { TooltipProvider } from "@/registry/default/ui/tooltip"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <ComponentSearchProvider>
          {children}
          <Toaster />
        </ComponentSearchProvider>
      </TooltipProvider>
    </ThemeProvider>
  )
}
