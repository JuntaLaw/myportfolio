'use client'

import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const password = formData.get('password') as string

    const result = await signIn("credentials", {
      password,
      redirect: false,
    })

    if (result?.error) {
      setError("パスワードが正しくありません")
    } else {
      router.push("/")
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-purple-500 to-rose-500 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">ログイン</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              name="password"
              placeholder="パスワードを入力"
              className="w-full p-2 rounded bg-white/20 text-white placeholder-white/60 border border-white/30"
              required
            />
          </div>
          {error && (
            <p className="text-red-300 text-sm">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded transition"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  )
} 