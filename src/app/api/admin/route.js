import { NextResponse } from "next/server"

const POST = async (r) => {
  // const body = await r.json()
  return NextResponse.json(body)
}

export {POST}