// src/components/auth/LoginForm.tsx
'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { useState } from 'react'
import { loginUser } from '@/services/auth.service'

export default function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await loginUser({username, password});
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    };

  return (
    <div className="max-w-sm w-full mx-auto flex flex-col gap-8">
      {/* Heading */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Welcome back
        </span>
        <h1 className="font-serif text-3xl text-foreground font-normal">
          Sign in to your account
        </h1>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="username"
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-light"
          >
            Username
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="your username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground transition-colors duration-200"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="password"
              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-light"
            >
              Password
            </Label>
            <Link
              href="/forgot-password"
              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Forgot?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground transition-colors duration-200"
          />
        </div>

        <Button type="submit" size="lg" className="w-full mt-2">
          Sign In
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <span className="flex-1 h-px bg-border" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">or</span>
        <span className="flex-1 h-px bg-border" />
      </div>

      {/* Sign up */}
      <p className="text-center text-xs text-muted-foreground font-light">
        Don&apos;t have an account?{' '}
        <Link
          href="/register"
          className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Create one
        </Link>
      </p>
    </div>
  )
}