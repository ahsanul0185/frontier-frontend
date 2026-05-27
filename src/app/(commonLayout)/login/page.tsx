// src/app/login/page.tsx
import LoginForm from '@/components/auth/LoginForm'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">

      {/* Left — decorative panel */}
      {/* <div className="w-full">
        <Image
          src="https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login Illustration"
            width={400}
            height={400}
            className="h-full w-full object-cover"
        />
      </div> */}

      {/* Right — form panel */}
      <div className="w-full flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
        <LoginForm />
      </div>
    </div>
  )
}