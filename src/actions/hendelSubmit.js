'use server'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login_admin(pv, data) {
  const email = data?.get('email')
  const pass = data?.get('pass')

  if (email !== process.env.ADMIN_EMAIL && pass !== process.env.ADMIN_PASS) {
    return { error: 'Email and Password not mached' }
  }

  const token = jwt.sign(
    {
      email: process.env.ADMIN_EMAIL,
      id: 1,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    process.env.ADMIN_JWT_SECRET
  )
  cookies().set({
    name: 'token_admin',
    value: token,
    httpOnly: false,
    path: '/',
  })
  redirect('/dashboard')
}

export const AddProductAdmin = async () => {
  console.log('kk')
}
