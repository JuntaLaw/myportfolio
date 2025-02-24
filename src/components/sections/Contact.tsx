import { Button } from "@/components/ui/button"
import { Camera, Code, Mail, MessageSquare, Phone, Twitter, Facebook, BicepsFlexed, SquareArrowRight } from "lucide-react"
import Link from "next/link"
export function Contact() {
  return (
    <section id="contact" className="backdrop-blur-md bg-white/20 p-8 rounded-lg border border-white/30 mt-20 mx-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-8 mx-20">
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
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Twitter className="w-6 h-6 text-pink-300" />
            <span className="text-white">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="w-6 h-6 text-pink-300" />
            <span className="text-white">hello@creativevision.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <MessageSquare className="w-6 h-6 text-pink-300" />
            <span className="text-white">@creativevision</span>
          </div>
        </div>
      </div>
    </section>
  )
}