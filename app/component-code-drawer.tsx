"use client"

import * as React from "react"
import Link from "next/link"
import { CheckIcon, CodeIcon, CopyIcon } from "lucide-react"

import type { CatalogItem } from "@/app/catalog"
import { Button } from "@/registry/default/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/registry/default/ui/sheet"

type RegistryCodeFile = {
  path: string
  content: string
}

type RegistryCodeResponse = {
  name: string
  title: string
  description: string
  install: string
  files: RegistryCodeFile[]
}

type VariantCodeTarget = {
  title: string
  description: string
  install?: string
  code: string
}

type ComponentCodeDrawerProps = {
  item?: CatalogItem | null
  variant?: VariantCodeTarget | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ComponentCodeDrawer({
  item,
  variant,
  open,
  onOpenChange,
}: ComponentCodeDrawerProps) {
  const [data, setData] = React.useState<RegistryCodeResponse | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [copied, setCopied] = React.useState(false)

  const isVariantMode = Boolean(variant)

  React.useEffect(() => {
    if (!open) {
      return
    }

    if (variant) {
      setLoading(false)
      setError(null)
      setData(null)
      setCopied(false)
      return
    }

    if (!item) {
      return
    }

    let cancelled = false
    setLoading(true)
    setError(null)
    setData(null)
    setCopied(false)

    fetch(`/api/component-code/${item.name}`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Could not load source code")
        }
        return response.json() as Promise<RegistryCodeResponse>
      })
      .then((result) => {
        if (!cancelled) setData(result)
      })
      .catch(() => {
        if (!cancelled) setError("Failed to load source code.")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [open, item, variant])

  const copyText = React.useMemo(() => {
    if (variant) return variant.code
    if (!data?.files.length) return ""
    return data.files
      .map((file) => `// ${file.path}\n${file.content}`)
      .join("\n\n")
  }, [data, variant])

  const handleCopy = React.useCallback(async () => {
    if (!copyText) return

    await navigator.clipboard.writeText(copyText)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }, [copyText])

  const title = variant?.title ?? item?.title ?? "Source code"
  const description = variant?.description ?? item?.description
  const install = variant?.install ?? item?.install

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 p-0 sm:max-w-2xl"
      >
        <SheetHeader className="border-b px-6 py-4">
          <div className="flex items-start justify-between gap-4 pr-8">
            <div className="min-w-0 flex-1">
              <SheetTitle>{title}</SheetTitle>
              {description ? (
                <SheetDescription className="mt-1">
                  {description}
                </SheetDescription>
              ) : null}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopy}
              disabled={!copyText || loading}
              className="shrink-0"
            >
              {copied ? (
                <CheckIcon className="size-4" />
              ) : (
                <CopyIcon className="size-4" />
              )}
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>
          {install ? (
            <code className="text-muted-foreground mt-3 block break-all text-xs">
              {install}
            </code>
          ) : null}
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {loading ? (
            <p className="text-muted-foreground text-sm">Loading source...</p>
          ) : null}
          {error ? <p className="text-destructive text-sm">{error}</p> : null}
          {variant?.code ? (
            <pre className="bg-muted/50 text-foreground overflow-x-auto rounded-lg border p-4 text-xs leading-relaxed whitespace-pre">
              <code className="font-mono">{variant.code}</code>
            </pre>
          ) : (
            <p className="text-muted-foreground text-sm">No source available.</p>
          )}
          {!variant &&
            data?.files.map((file) => (
              <div key={file.path} className="mb-6 last:mb-0">
                <p className="text-muted-foreground mb-2 font-mono text-xs">
                  {file.path}
                </p>
                <pre className="bg-muted/50 overflow-x-auto rounded-lg border p-4 text-xs leading-relaxed">
                  <code>{file.content}</code>
                </pre>
              </div>
            ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function ViewCodeButton({
  onClick,
}: {
  onClick: () => void
}) {
  return (
    <Button type="button" variant="outline" size="sm" onClick={onClick}>
      <CodeIcon className="size-4" />
      Code
    </Button>
  )
}

export function ViewVariantsButton({
  href,
  label = "Variants",
}: {
  href: string
  label?: string
}) {
  return (
    <Button type="button" variant="outline" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
