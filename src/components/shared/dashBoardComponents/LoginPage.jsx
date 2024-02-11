'use client'
import { login_admin } from '@/actions/hendelSubmit'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useFormState } from 'react-dom'

const LoginPage = () => {
  const [state, formAction] = useFormState(login_admin, {})
  return (
    <div className="w-[98%] md:w-[550px] border rounded-md shadow-2xl">
      <h1 className="font-bold text-2xl text-center my-10">Admin Login</h1>
      <div>
        <form action={formAction} className="flex flex-col gap-5 m-3 mt-5">
          <div>
            <label>Email</label>
            <Input name="email" type="email" placeholder="admin@gmail.com" />
          </div>
          <div>
            <label>Password</label>
            <Input name="pass" type="password" placeholder="****" />
          </div>

          <Button className="text-white">Login</Button>
        </form>
        <p className="text-center my-2 text-sm text-red-600 h-5">
          {state?.error}
        </p>
      </div>
    </div>
  )
}

export default LoginPage
