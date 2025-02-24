import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react"
export function Contact() {
  return (
    <section id="contact" className="backdrop-blur-md bg-white/20 p-8 rounded-lg border border-white/30 mt-20 mx-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-8 mx-20">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-pink-300" />
            <span className="text-white">+81 (080) 5053-7770</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-pink-300" />
            <span className="text-white">junta_law@me.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaXTwitter className="w-6 h-6 text-pink-300" />
            <a
              href="https://x.com/myariadcom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition-colors"
            >
              @myariadcom</a>
          </div>
        </div>
        <div className="space-y-4">

          <div className="flex items-center space-x-4">
            <FaFacebook className="w-6 h-6 text-pink-300" />
            <a
              href="https://facebook.com/junko.sato.7509"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition-colors"
            >
              junko.sato.7509
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaInstagram className="w-6 h-6 text-pink-300" />
            <a
              href="https://www.instagram.com/juntalaw1114/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition-colors"
            >
              @juntalaw1114
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaGithub className="w-6 h-6 text-pink-300" />
            <a
              href="https://github.com/JuntaLaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition-colors"
            >
              JuntaLaw</a>
          </div>
        </div>
      </div>
    </section>

  )
}