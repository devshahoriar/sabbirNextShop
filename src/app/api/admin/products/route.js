import { NextResponse } from 'next/server'

export const POST = (r) => {
  console.log(r)
  return NextResponse.json({ message: 'send' })
}
