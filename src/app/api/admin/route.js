import { NextResponse } from "next/server"

const GET = async (r) => {
  const body = await r.json()
  return NextResponse.json(body)
}

export {GET}