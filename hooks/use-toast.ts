"use client"

import type { ReactNode } from "react"
import { toast as sonnerToast } from "sonner"

type ToastProps = {
  title?: ReactNode
  description?: ReactNode
  variant?: "default" | "destructive"
}

export function toast({ title, description, variant }: ToastProps) {
  if (variant === "destructive") {
    sonnerToast.error(title, { description })
    return
  }

  sonnerToast(title, { description })
}

export function useToast() {
  return { toast }
}
