"use client"

import Link from "next/link"
import { Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xl mb-4 md:mb-0">Síguenos en nuestras redes</p>

          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 