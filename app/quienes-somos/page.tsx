"use client"

import Image from "next/image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function QuienesSomos() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Banner Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/images/quienesSomos/foro_banner.png"
          alt="IWF Forum Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text visibility */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-5xl md:text-6xl font-montserrat font-bold tracking-wider">
              QUIÉNES SOMOS
            </h1>
            <div className="w-32 h-1 bg-orange-500 mt-6" /> {/* Orange underline */}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-elegant mb-8">ACERCA DE NOSOTRAS</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              IWF es una comunidad internacional, no partidista y apolítica, presente en 34 países, entre ellos Perú.
            </p>
            {/* Aquí puedes agregar más contenido según necesites */}
          </div>
        </div>
      </section>

      <Footer />

      {showScrollTop && (
        <button
          className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
} 