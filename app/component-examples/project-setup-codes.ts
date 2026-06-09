export const projectSetupCodes = {
  overview: `# Install project conventions into your app
npx shadcn@latest add ashishsahu/ModernUIComponent/project-setup

# Files added to your project:
#   AGENTS.md                  → project root
#   docs/modernui-setup.md     → consumer setup guide`,
  agents: `# ModernUI Component Library

## Overview

This repository is the source registry for **ModernUI** — a shadcn-extended React component library distributed via the official \`shadcn\` CLI.

## Conventions

- UI primitives live in \`registry/default/ui/\`
- Composite blocks live in \`registry/default/blocks/\`
- Design tokens live in \`registry/default/theme/globals.css\`
- Registry catalog is defined in the root \`registry.json\`

## Adding a new component

1. Create the source file under \`registry/default/ui/\` or \`registry/default/blocks/\`
2. Register it in the root \`registry.json\`
3. Run \`pnpm registry:build\` to rebuild hosted JSON
4. Run \`npx shadcn@latest registry validate .\` before merging

## Import paths

- Registry source files use \`@/lib/utils\` for utilities
- Blocks import primitives from \`@/registry/default/ui/...\` during local development
- Consumer projects receive files at \`@/components/ui/...\` after \`shadcn add\``,
  consumer: `# ModernUI — Consumer Setup Guide

Install ModernUI components into any React project that supports shadcn/ui (Next.js, Vite, etc.).

## Prerequisites

Your project must have shadcn/ui initialized:

\`\`\`bash
npx shadcn@latest init
\`\`\`

## Option A: GitHub Registry (recommended to start)

\`\`\`bash
# Install foundation first
npx shadcn@latest add ashishsahu/ModernUIComponent/theme
npx shadcn@latest add ashishsahu/ModernUIComponent/utils

# Install primitives
npx shadcn@latest add ashishsahu/ModernUIComponent/button
npx shadcn@latest add ashishsahu/ModernUIComponent/input
npx shadcn@latest add ashishsahu/ModernUIComponent/card
npx shadcn@latest add ashishsahu/ModernUIComponent/dialog

# Install composite blocks
npx shadcn@latest add ashishsahu/ModernUIComponent/login-form

# Optional: project conventions
npx shadcn@latest add ashishsahu/ModernUIComponent/project-setup
\`\`\`

## Install order

1. \`theme\` — CSS variables and base styles
2. \`utils\` — \`cn()\` helper
3. Primitives (\`button\`, \`input\`, \`card\`, \`dialog\`, etc.)
4. Blocks (\`login-form\`, etc.)

## What you get

Files are copied directly into your project. You own and can edit every file — there is no opaque npm dependency for components.`,
} as const
