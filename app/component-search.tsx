"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
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
  const hasQuery = query.length > 0

  return (
    <div className={cn("relative", className)}>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search components..."
        className={cn(hasQuery && "pr-9")}
        aria-label="Search components"
      />
      {hasQuery ? (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground absolute top-1/2 right-1 size-7 -translate-y-1/2"
          onClick={() => setQuery("")}
          aria-label="Clear search"
        >
          <XIcon className="size-4" />
        </Button>
      ) : null}
    </div>
  )
}
