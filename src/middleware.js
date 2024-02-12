import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import * as jose from 'jose'

export async function middleware(request) {
  const requestHeaders = new Headers(request.headers)
  // requestHeaders.set('req_res', 'hello')
  
  // response.headers.set('res_cus', 'hello')
  if (request.nextUrl.pathname === '/dashboard/login') return NextResponse.next()
  let admin_token = request.cookies.get('token_admin')?.value
  if (!admin_token) {
    return NextResponse.redirect(new URL('/dashboard/login', request.url))
  }
  try {
    var { payload } = await jose.jwtVerify(
      admin_token,
      new TextEncoder().encode(process.env.ADMIN_JWT_SECRET)
    )
    if (payload?.email && payload?.id) {
      requestHeaders.set('admin_id', payload.id)
      requestHeaders.set('admin_email', payload.email)
      requestHeaders.set('admin_auth', true)
    }
  } catch (error) {
    const res = NextResponse.redirect(new URL('/dashboard/login', request.url))
    res.cookies.delete('token_admin')
    return res
  }
  


  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  return response
}

export const config = {
  matcher: ['/dashboard/:path*','/api/admin/:path*'],
}
