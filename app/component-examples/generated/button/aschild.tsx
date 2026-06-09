import Link from "next/link"

import { Button } from "@/registry/default/ui/button"

export function ButtonAschildPreview() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}

