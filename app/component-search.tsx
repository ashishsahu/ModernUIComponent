"use client"

import * as React from "react"

import { Input } from "@/registry/default/ui/input"

type ComponentSearchContextValue = {
  query: string
  setQuery: (query: string) => void
}

const ComponentSearchContext =
  React.createContext<ComponentSearchContextValue | null>(null)

export function ComponentSearchProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [query, setQuery] = React.useState("")

  const value = React.useMemo(
    () => ({
      query,
      setQuery,
    }),
    [query]
  )

  return (
    <ComponentSearchContext.Provider value={value}>
      {children}
    </ComponentSearchContext.Provider>
  )
}

export function useComponentSearch() {
  const context = React.useContext(ComponentSearchContext)
  if (!context) {
    throw new Error(
      "useComponentSearch must be used within ComponentSearchProvider"
    )
  }
  return context
}

export function ComponentSearchInput({
  className,
}: {
  className?: string
}) {
  const { query, setQuery } = useComponentSearch()

  return (
    <Input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search components..."
      className={className}
      aria-label="Search components"
    />
  )
}
