import Link from "next/link"

import { Button } from "@/registry/default/ui/button"

export function ButtonAsChildPreview() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}

