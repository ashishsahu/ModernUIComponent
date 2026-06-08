# ModernUI Component Registry

A shadcn-extended React UI component library distributed via the official [shadcn CLI](https://ui.shadcn.com/docs/cli). Teams install components as source files they own and can customize.

## What's included

| Item | Type | Description |
|------|------|-------------|
| `theme` | foundation | ModernUI design tokens and CSS variables |
| `utils` | foundation | `cn()` classname utility |
| `button` | primitive | Button with `brand` variant |
| `input` | primitive | Text input |
| `card` | primitive | Card layout |
| `label` | primitive | Form label |
| `dialog` | primitive | Modal dialog |
| `login-form` | block | Sign-in form with Zod validation |
| `project-setup` | meta | AGENTS.md and consumer docs |

## Development

```bash
pnpm install
pnpm dev          # Docs site at http://localhost:3000
pnpm registry:build   # Build public/r/*.json for hosted namespace
pnpm registry:validate
```

## Distribute to consumer projects

- [docs/CONSUMER.md](docs/CONSUMER.md) — consumer setup guide
- [docs/GITHUB.md](docs/GITHUB.md) — publish to GitHub Registry
- [docs/HOSTED.md](docs/HOSTED.md) — deploy hosted `@modernui` namespace

### GitHub Registry

```bash
npx shadcn@latest add ashishsahu/ModernUIComponent/theme
npx shadcn@latest add ashishsahu/ModernUIComponent/button
npx shadcn@latest add ashishsahu/ModernUIComponent/login-form
```

### Hosted namespace (@modernui)

```bash
npx shadcn@latest registry add @modernui=https://your-registry-url.com/r/{name}.json
npx shadcn@latest add @modernui/button
```

## Project structure

```txt
registry/default/
├── ui/                  # primitives (button, input, card, dialog, label)
├── blocks/              # composite components (login-form)
└── theme/               # globals.css design tokens
lib/utils.ts             # cn() helper
registry.json            # root catalog
public/r/                # built registry JSON (generated)
docs/                    # consumer, GitHub, and hosted setup guides
```

## Based on

Built on the [shadcn registry template](https://github.com/shadcn-ui/registry-template) with Tailwind v4 and Next.js 15.
