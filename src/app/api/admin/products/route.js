import { NextResponse } from 'next/server'

export const POST = async (r) => {
  console.log("this is from api/admin/products produuct add function",await r.json())

  return NextResponse.json({ message: 'send' })
}
