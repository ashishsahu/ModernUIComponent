"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CircleIcon,
  FileTextIcon,
  GithubIcon,
  LayoutGridIcon,
  PaletteIcon,
  SearchIcon,
  XIcon,
} from "lucide-react"

import { allComponents } from "@/app/catalog"
import { hasVariantPage } from "@/app/component-variants"
import { markRegistryScrollTarget } from "@/app/component-registry-sidebar"
import { GITHUB_URL } from "@/app/github-link"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/default/ui/command"

type OmniSearchContextValue = {
  setOpen: (open: boolean) => void
}

const OmniSearchContext = React.createContext<OmniSearchContextValue | null>(
  null
)

function useOmniSearch() {
  const context = React.useContext(OmniSearchContext)
  if (!context) {
    throw new Error("useOmniSearch must be used within OmniSearchRoot")
  }
  return context
}

const searchableComponents = [...allComponents].sort((a, b) =>
  a.title.localeCompare(b.title)
)

function OmniSearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()

  const navigateToRegistryItem = React.useCallback(
    (name: string) => {
      onOpenChange(false)
      markRegistryScrollTarget(name)
      if (hasVariantPage(name)) {
        router.push(`/components/${name}`)
        return
      }
      router.push(`/#${name}`)
    },
    [onOpenChange, router]
  )

  const navigateToHome = React.useCallback(() => {
    onOpenChange(false)
    router.push("/")
  }, [onOpenChange, router])

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search"
      description="Search components, documentation, and links"
      showCloseButton={false}
      className="top-[12%] max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-0 sm:max-w-xl"
    >
      <div className="relative [&_[data-slot=command-input-wrapper]]:pr-10">
        <CommandInput placeholder="Type to search..." />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 z-10 size-7 -translate-y-1/2"
          onClick={() => onOpenChange(false)}
          aria-label="Close search"
        >
          <XIcon className="size-4" />
        </Button>
      </div>
      <CommandList className="max-h-[min(420px,50vh)]">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Components">
          {searchableComponents.map((item) => (
            <CommandItem
              key={item.name}
              value={`${item.title} ${item.name} ${item.description}`}
              onSelect={() => navigateToRegistryItem(item.name)}
            >
              <CircleIcon />
              <span>{item.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Documentation">
          <CommandItem
            value="Getting Started project setup"
            onSelect={() => navigateToRegistryItem("project-setup")}
          >
            <FileTextIcon />
            <span>Getting Started</span>
          </CommandItem>
          <CommandItem value="Components catalog" onSelect={navigateToHome}>
            <LayoutGridIcon />
            <span>Components</span>
          </CommandItem>
          <CommandItem
            value="Theming theme design tokens"
            onSelect={() => navigateToRegistryItem("theme")}
          >
            <PaletteIcon />
            <span>Theming</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          <CommandItem
            value="GitHub Repository"
            onSelect={() => {
              onOpenChange(false)
              window.open(GITHUB_URL, "_blank", "noopener,noreferrer")
            }}
          >
            <GithubIcon />
            <span>GitHub Repository</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

export function OmniSearchRoot({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((current) => !current)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const value = React.useMemo(() => ({ setOpen }), [])

  return (
    <OmniSearchContext.Provider value={value}>
      {children}
      <OmniSearchDialog open={open} onOpenChange={setOpen} />
    </OmniSearchContext.Provider>
  )
}

export function OmniSearchTrigger({ className }: { className?: string }) {
  const { setOpen } = useOmniSearch()

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className={cn(
        "border-input bg-muted/40 text-muted-foreground hover:bg-muted/60 inline-flex h-9 w-full items-center gap-2 rounded-md border px-3 text-sm transition-colors",
        className
      )}
      aria-label="Open search"
    >
      <SearchIcon className="size-4 shrink-0 opacity-60" />
      <span className="flex-1 truncate text-left">Type to search...</span>
      <kbd className="bg-background text-muted-foreground pointer-events-none hidden h-5 shrink-0 items-center gap-0.5 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:inline-flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </button>
  )
}
