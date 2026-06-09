import { NextResponse } from "next/server"

import { getRegistryComponentCode } from "@/lib/registry-code"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params

  try {
    const result = await getRegistryComponentCode(name)
    if (!result) {
      return NextResponse.json({ error: "Component not found" }, { status: 404 })
    }

    return NextResponse.json(result)
  } catch {
    return NextResponse.json(
      { error: "Failed to load component source" },
      { status: 500 }
    )
  }
}
