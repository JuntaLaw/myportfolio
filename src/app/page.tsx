import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Code, Mail, MessageSquare, Phone, Video } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-purple-500 to-rose-500">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Junko Sato
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#services" className="text-white hover:text-pink-200 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-white hover:text-pink-200 transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-white hover:text-pink-200 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            Hire Me
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bringing Your Vision to Life
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Professional videography and web development services to elevate your brand and captivate your audience.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            View My Work
          </Button>
        </section>

        <section id="services" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">My Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg border border-white/30">
              <Video className="w-12 h-12 text-pink-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Videography</h3>
              <p className="text-white/80">
                Cinematic video production for commercials, events, and brand stories.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg border border-white/30">
              <Code className="w-12 h-12 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
              <p className="text-white/80">
                Custom websites and web applications built with modern technologies.
              </p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Portfolio Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-lg">
                <img
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={`Portfolio item ${item}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2">Project Title</h3>
                    <p className="text-white/80 text-sm">Short project description goes here.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="backdrop-blur-md bg-white/20 p-8 rounded-lg border border-white/30">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="bg-white/30 border-white/30 text-white placeholder-white/70" />
                <Input placeholder="Your Email" type="email" className="bg-white/30 border-white/30 text-white placeholder-white/70" />
                <Textarea placeholder="Your Message" className="bg-white/30 border-white/30 text-white placeholder-white/70" rows={4} />
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Send Message</Button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-pink-300" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-pink-300" />
                <span className="text-white">hello@creativevision.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="w-6 h-6 text-pink-300" />
                <span className="text-white">@creativevision</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="backdrop-blur-md bg-white/10 border-t border-white/20 py-6">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} CreativeVision. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}