"use client"

import { Login01Preview } from "@/app/component-examples/generated/login/01"
import { Signup01Preview } from "@/app/component-examples/generated/signup/01"

export const authBlockCatalogPreviews = {
  "login": (
    <div className="mx-auto w-full max-w-sm [&_[class*='min-h-\[min\(720px']]:!min-h-64">
      <Login01Preview />
    </div>
  ),
  "signup": (
    <div className="mx-auto w-full max-w-sm [&_[class*='min-h-\[min\(720px']]:!min-h-64">
      <Signup01Preview />
    </div>
  ),
} as const
