"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ColorSwatchProps = {
  label: string
  hex?: string
  className?: string
  style?: React.CSSProperties
}

function ColorSwatch({ label, hex, className, style }: ColorSwatchProps) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <div
        className={cn("h-10 rounded-md border border-border/50", className)}
        style={style}
      />
      <span className="truncate text-xs leading-tight">{label}</span>
      {hex ? (
        <span className="text-muted-foreground font-mono text-[10px] uppercase">
          {hex}
        </span>
      ) : null}
    </div>
  )
}

function PaletteSection({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="flex w-full flex-col gap-3">
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        {description ? (
          <p className="text-muted-foreground text-xs">{description}</p>
        ) : null}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {children}
      </div>
    </section>
  )
}

const figmaBrand = [
  ["Slate", "#242422"],
  ["Dark Teal", "#009293"],
  ["Cream", "#EDE9E5"],
  ["Cream BG 1", "#F2EFEC"],
  ["Cream BG 2", "#F6F4F2"],
  ["Cream BG 3", "#F9F8F7"],
  ["Teal BG 1", "#D6EDED"],
  ["Teal BG 2", "#E5F4F4"],
] as const

const figmaBlacks = [
  ["Black Primary", "#242422"],
  ["Black Secondary", "#595959"],
  ["Black Tertiary", "#8C8C8C"],
  ["Black Quaternary", "#BFBFBF"],
] as const

const figmaGreys = [
  ["Grey 16", "#D6D6D6"],
  ["Grey 8", "#EBEBEB"],
  ["Grey 4", "#F5F5F5"],
  ["Grey 2", "#FAFAFA"],
  ["White", "#FFFFFF"],
] as const

const semanticColors = [
  ["Primary", "bg-primary"],
  ["Primary FG", "bg-primary-foreground border"],
  ["Brand", "bg-brand"],
  ["Brand FG", "bg-brand-foreground border"],
  ["Background", "bg-background border"],
  ["Foreground", "bg-foreground"],
  ["Card", "bg-card border"],
  ["Card FG", "bg-card-foreground"],
  ["Popover", "bg-popover border"],
  ["Secondary", "bg-secondary border"],
  ["Muted", "bg-muted border"],
  ["Muted FG", "bg-muted-foreground"],
  ["Accent", "bg-accent border"],
  ["Accent FG", "bg-accent-foreground"],
  ["Destructive", "bg-destructive"],
  ["Border", "bg-border"],
  ["Input", "bg-input border"],
  ["Ring", "bg-ring"],
  ["Cream", "bg-cream border"],
  ["Teal BG", "bg-teal-bg border"],
] as const

const textScale = [
  ["Text Primary", "--text-primary"],
  ["Text Secondary", "--text-secondary"],
  ["Text Tertiary", "--text-tertiary"],
  ["Text Quaternary", "--text-quaternary"],
] as const

const chartColors = [
  ["Chart 1", "bg-chart-1"],
  ["Chart 2", "bg-chart-2"],
  ["Chart 3", "bg-chart-3"],
  ["Chart 4", "bg-chart-4"],
  ["Chart 5", "bg-chart-5"],
] as const

const sidebarColors = [
  ["Sidebar", "bg-sidebar border"],
  ["Sidebar FG", "bg-sidebar-foreground"],
  ["Sidebar Primary", "bg-sidebar-primary"],
  ["Sidebar Accent", "bg-sidebar-accent border"],
  ["Sidebar Border", "bg-sidebar-border border"],
  ["Sidebar Ring", "bg-sidebar-ring"],
] as const

export function ThemePalettePreview() {
  return (
    <div className="flex w-full flex-col gap-6">
      <PaletteSection
        title="Figma brand & surfaces"
        description="Source palette from Dev-Ready Designs."
      >
        {figmaBrand.map(([label, hex]) => (
          <ColorSwatch
            key={label}
            label={label}
            hex={hex}
            style={{ backgroundColor: hex }}
          />
        ))}
      </PaletteSection>

      <PaletteSection
        title="Figma blacks"
        description="Text and ink scale."
      >
        {figmaBlacks.map(([label, hex]) => (
          <ColorSwatch
            key={label}
            label={label}
            hex={hex}
            style={{ backgroundColor: hex }}
          />
        ))}
      </PaletteSection>

      <PaletteSection
        title="Figma greys"
        description="Neutral grey ramp."
      >
        {figmaGreys.map(([label, hex]) => (
          <ColorSwatch
            key={label}
            label={label}
            hex={hex}
            style={{ backgroundColor: hex }}
          />
        ))}
      </PaletteSection>

      <PaletteSection
        title="Semantic tokens"
        description="Theme variables — update with light/dark mode."
      >
        {semanticColors.map(([label, cls]) => (
          <ColorSwatch key={label} label={label} className={cls} />
        ))}
      </PaletteSection>

      <PaletteSection title="Text scale" description="Figma text color tokens.">
        {textScale.map(([label, token]) => (
          <ColorSwatch
            key={label}
            label={label}
            style={{ backgroundColor: `var(${token})` }}
          />
        ))}
      </PaletteSection>

      <PaletteSection title="Charts" description="Data visualization ramp.">
        {chartColors.map(([label, cls]) => (
          <ColorSwatch key={label} label={label} className={cls} />
        ))}
      </PaletteSection>

      <PaletteSection title="Sidebar" description="Navigation surface tokens.">
        {sidebarColors.map(([label, cls]) => (
          <ColorSwatch key={label} label={label} className={cls} />
        ))}
      </PaletteSection>
    </div>
  )
}
