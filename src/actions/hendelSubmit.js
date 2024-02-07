'use server'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function create(pv, data) {
  const email = data?.get('email')
  const pass = data?.get('pass')

  if (email !== process.env.ADMIN_EMAIL && pass !== process.env.ADMIN_PASS) {
    return { error: 'Email and Password not mached' }
  }

  const token = jwt.sign(
    {
      email: process.env.ADMIN_EMAIL,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    process.env.ADMIN_JWT_SECRET
  )
  cookies().set({
    name: 'token',
    value: token,
    httpOnly: false,
    path: '/',
  })
  redirect("/dashboard")
}
