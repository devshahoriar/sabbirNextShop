import { NextResponse } from 'next/server'

export const POST = async (r) => {
  console.log(await r.json())

  return NextResponse.json({ message: 'send' })
}
