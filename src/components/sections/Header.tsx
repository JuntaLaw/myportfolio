'use client'

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#hero" className="text-white hover:text-pink-300 transition-colors">Home</a>
            </li>
            <li>
              <a href="#profile" className="text-white hover:text-pink-300 transition-colors">Profile</a>
            </li>
            <li>
              <a href="#portfolio" className="text-white hover:text-pink-300 transition-colors">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-pink-300 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>

        <Button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="bg-pink-500 hover:bg-pink-600 text-white"
        >
          ログアウト
        </Button>
      </div>
    </header>
  )
}