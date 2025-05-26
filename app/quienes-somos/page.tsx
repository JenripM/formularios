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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 flex items-end justify-start p-8 sm:p-12 md:p-16">
          <div>
            <h1 className="text-white text-4xl sm:text-5xl font-montserrat font-bold tracking-wider">
              QUIÉNES SOMOS
            </h1>
            <div className="w-40 sm:w-56 h-1.5 bg-orange-500 mt-3" />
          </div>
        </div>
      </section>

      {/* New About Section with Image */}
      <section className="relative w-full bg-white py-20">
        {/* Banner Background with title */}
        <div className="absolute w-full h-[140px] bg-[#F5F1EC] top-[250px]">
          <div className="container mx-auto px-5 h-full">
            <div className="flex md:flex-row h-full">
              <div className="hidden md:block md:w-1/2 h-full" />
              <div className="w-full md:w-1/2 h-full flex items-center">
                <h2 className="text-3xl font-montserrat font-bold text-gray-700 tracking-wider">
                  ACERCA DE NOSOTRAS
                </h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row items-start justify-between gap-20 relative">
            {/* Left Column - Founder Image */}
            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/images/quienesSomos/imagen_fundadora.png"
                  alt="Fundadora IWF"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="w-full md:w-1/2 relative">
              <div className="absolute top-[120px] -right-6 z-10">
                <Image
                  src="/images/quienesSomos/circulo_naranja.png"
                  alt="Círculo decorativo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              
              <div className="mt-[320px] pr-16">
                <p className="text-gray-700 text-xl leading-relaxed font-elegant" style={{ lineHeight: '1.8' }}>
                  IWF es una comunidad internacional, no partidista y apolítica, presente en 34 países, entre ellos Chile, y que tiene más de 8.000 mujeres líderes de primer nivel como asociadas, con más de 50 años consecutivos de continuo crecimiento. Ha sido creada para enriquecer y promover el liderazgo femenino, conectando a mujeres de alto nivel profesional a través de diversos espacios de encuentro, con el compromiso de impulsar la igualdad de oportunidades.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision y Mision - Now outside the container, for full-width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-32">
          <div className="bg-white p-16">
            <h2 className="text-4xl font-modern text-gray-800 mb-6">NUESTRA VISIÓN</h2>
            <p className="text-gray-600 text-xl leading-relaxed font-elegant">
              Ser la mayor comunidad global de profesionales prestigiosas, promoviendo el liderazgo en las mujeres hoy y mañana.
            </p>
          </div>
          <div className="bg-[#D4B572] p-16">
            <h2 className="text-4xl font-modern text-gray-700 mb-6">NUESTRA MISIÓN</h2>
            <p className="text-gray-700 text-xl leading-relaxed font-elegant">
              Conectar una comunidad global de mujeres líderes, creando espacios donde se den conversaciones relevantes.
            </p>
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