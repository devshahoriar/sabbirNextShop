import { NextResponse } from "next/server"

const v = process.env.DB_URI
const GET = async (r) => {
  const body = await r.json()
  return NextResponse.json(body)
}

export {GET}