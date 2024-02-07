import LoginPage from '@/components/shared/dashBoardComponents/LoginPage'
import { cookies } from 'next/headers';

const page = () => {

  const cookie = cookies()
  console.log(cookie.get('ff'));

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <LoginPage />
    </main>
  )
}

export default page
