"use client"

import { FileTextIcon, FolderOpenIcon, TerminalIcon } from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"

const installFiles = [
  {
    source: "AGENTS.md",
    target: "AGENTS.md",
    description: "Agent and contributor conventions for ModernUI projects.",
  },
  {
    source: "docs/CONSUMER.md",
    target: "docs/modernui-setup.md",
    description: "Step-by-step consumer install guide for your team.",
  },
] as const

const installOrder = [
  "project-setup — AGENTS.md and consumer docs (this item)",
  "theme — CSS variables and base styles",
  "utils — cn() helper",
  "Primitives — button, input, card, dialog, …",
  "Blocks — login, signup, login-form, …",
] as const

export function ProjectSetupOverviewPreview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6 text-left text-sm">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 font-medium">
          <TerminalIcon className="size-4" />
          Install command
        </div>
        <code className="bg-muted block rounded-md border px-3 py-2 text-xs">
          npx shadcn@latest add ashishsahu/ModernUIComponent/project-setup
        </code>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-medium">
          <FolderOpenIcon className="size-4" />
          Files added to your project
        </div>
        <ul className="flex flex-col gap-3">
          {installFiles.map((file) => (
            <li
              key={file.source}
              className="bg-card flex flex-col gap-1 rounded-md border p-3"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{file.source}</Badge>
                <span className="text-muted-foreground">→</span>
                <Badge variant="outline">{file.target}</Badge>
              </div>
              <p className="text-muted-foreground">{file.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-medium">Recommended install order</p>
        <ol className="text-muted-foreground list-decimal space-y-1 pl-5">
          {installOrder.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export function ProjectSetupAgentsPreview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4 text-left text-sm">
      <div className="flex items-center gap-2 font-medium">
        <FileTextIcon className="size-4" />
        AGENTS.md
      </div>
      <p className="text-muted-foreground">
        Copied to your project root. Gives AI assistants and contributors the
        ModernUI layout, registry workflow, and import path conventions.
      </p>
      <ul className="text-muted-foreground list-disc space-y-1 pl-5">
        <li>Where UI primitives and blocks live in the registry</li>
        <li>How to register new components in registry.json</li>
        <li>Build and validate steps before publishing</li>
        <li>Import paths for registry vs consumer projects</li>
      </ul>
    </div>
  )
}

export function ProjectSetupConsumerPreview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4 text-left text-sm">
      <div className="flex items-center gap-2 font-medium">
        <FileTextIcon className="size-4" />
        docs/modernui-setup.md
      </div>
      <p className="text-muted-foreground">
        Renamed from CONSUMER.md when installed. A setup guide your team can
        follow in any shadcn-compatible React project.
      </p>
      <ul className="text-muted-foreground list-disc space-y-1 pl-5">
        <li>Prerequisites — shadcn init</li>
        <li>GitHub registry install commands</li>
        <li>Hosted namespace option after deploy</li>
        <li>Recommended install order for new projects</li>
      </ul>
    </div>
  )
}
