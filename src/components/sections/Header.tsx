import Link from "next/link"
import { Button } from "../ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          佐藤 淳子
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#profile" className="text-white hover:text-pink-200 transition-colors">
            自己紹介
          </Link>
          <Link href="#portfolio" className="text-white hover:text-pink-200 transition-colors">
            ポートフォリオ
          </Link>
        </nav>
        <Link href="#contact">
          <Button variant="outline" className="bg-slate-600/20 text-white border-white/30 hover:bg-white/30">
            Contact
          </Button>
        </Link>
      </div>
    </header>
  )
}