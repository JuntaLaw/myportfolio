import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { Hero } from "@/components/sections/Hero"
import { Header } from "@/components/sections/Header"
import { Profile } from "@/components/sections/Profile"
import { Portfolio } from "@/components/sections/Portfolio"
import { Contact } from "@/components/sections/Contact"

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-purple-500 to-rose-500">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <Hero />
        <Profile />
        <Portfolio />
        <Contact />
      </main>

      <footer className="backdrop-blur-md bg-white/10 border-t border-white/20 py-6">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Junko Sato. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}