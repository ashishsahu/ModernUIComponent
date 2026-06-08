import * as React from "react"
import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import { LoginForm } from "@/registry/default/blocks/login-form/login-form"

const components = [
  {
    name: "theme",
    title: "Theme",
    description: "ModernUI design tokens and CSS variables.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/theme",
    preview: null,
  },
  {
    name: "button",
    title: "Button",
    description: "Button with default, brand, and standard variants.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/button",
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button>Default</Button>
        <Button variant="brand">Brand</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    ),
  },
  {
    name: "input",
    title: "Input",
    description: "Text input with focus ring and validation states.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/input",
    preview: (
      <div className="flex w-full max-w-sm flex-col gap-3">
        <Input placeholder="Email address" type="email" />
        <Input placeholder="Disabled" disabled />
      </div>
    ),
  },
  {
    name: "card",
    title: "Card",
    description: "Layout container with header, content, and footer slots.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/card",
    preview: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Card content area for any child elements.</p>
        </CardContent>
      </Card>
    ),
  },
  {
    name: "dialog",
    title: "Dialog",
    description: "Modal overlay for confirmations and forms.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/dialog",
    preview: (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogDescription>
              This dialog uses the ModernUI theme and button primitives.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    ),
  },
  {
    name: "login-form",
    title: "Login Form",
    description: "Composite sign-in block with Zod validation.",
    install: "npx shadcn@latest add ashishsahu/ModernUIComponent/login-form",
    preview: <LoginForm />,
  },
]

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-4xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-2">
        <p className="text-brand text-sm font-medium tracking-wide uppercase">
          ModernUI
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          Component Registry
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          A shadcn-extended UI library distributed via the official shadcn CLI.
          Install components into any React project — teams own the code.
        </p>
      </header>

      <section className="bg-muted/50 flex flex-col gap-3 rounded-lg border p-4">
        <h2 className="text-sm font-medium">Quick start (consumer project)</h2>
        <pre className="bg-background overflow-x-auto rounded-md border p-3 text-sm">
          <code>{`npx shadcn@latest init
npx shadcn@latest add ashishsahu/ModernUIComponent/theme
npx shadcn@latest add ashishsahu/ModernUIComponent/utils
npx shadcn@latest add ashishsahu/ModernUIComponent/button`}</code>
        </pre>
        <p className="text-muted-foreground text-sm">
          See{" "}
          <a href="https://github.com/ashishsahu/ModernUIComponent/blob/main/docs/CONSUMER.md" className="text-primary underline-offset-4 hover:underline">
            docs/CONSUMER.md
          </a>{" "}
          for full setup instructions.
        </p>
      </section>

      <main className="flex flex-col gap-6">
        {components.map((component) => (
          <article
            key={component.name}
            className="relative flex min-h-[200px] flex-col gap-4 rounded-lg border p-4"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold">{component.title}</h2>
              <p className="text-muted-foreground text-sm">
                {component.description}
              </p>
              <code className="text-muted-foreground mt-1 text-xs">
                {component.install}
              </code>
            </div>
            {component.preview && (
              <div className="flex flex-1 items-center justify-center py-4">
                {component.preview}
              </div>
            )}
          </article>
        ))}
      </main>
    </div>
  )
}
