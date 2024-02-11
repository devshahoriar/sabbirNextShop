import LoginPage from '@/components/shared/dashBoardComponents/LoginPage'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'

const page = () => {
  const h = cookies()
  if (h.get('token_admin')) {
    redirect('/dashboard')
  }

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <LoginPage />
    </main>
  )
}
export const metadata = {
  title: 'Login | Admin',
}
export default page
