"use client"

import Image from "next/image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ActividadesPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EC]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-black/50 to-black/30">
        <Image
          src="/images/actividades/actividades.png"
          alt="Actividades IWF"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-5">
          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-montserrat font-medium tracking-[0.15em] mb-2">
              ACTIVIDADES
            </h1>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-5 py-12">
        {/* Main Content Grid - 2x2 Square Layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-0 w-fit">
            {/* Top Left - Dine Arounds */}
            <div className="bg-orange-500 text-white p-4 w-96 h-48 flex flex-col justify-center">
              <h2 className="text-base font-bold mb-2 tracking-wide">
                DINE AROUNDS
              </h2>
              <p className="text-xs leading-relaxed">
                Encuentros exclusivos, donde las socias tienen la oportunidad de compartir experiencias y reflexionar sobre temas de actualidad con invitados de distintos ámbitos, fortaleciendo la conexión y el intercambio de ideas en una mesa común organizada por una socia en su hogar o club.
              </p>
            </div>

            {/* Top Right - Experiencias Exclusivas */}
            <div className="bg-gray-100 p-4 w-96 h-48 flex flex-col justify-center">
              <h2 className="text-base font-bold mb-2 tracking-wide text-gray-800">
                EXPERIENCIAS EXCLUSIVAS DE IWF
              </h2>
              <p className="text-xs leading-relaxed text-gray-600">
                Acceso a eventos únicos que permiten conocer de cerca espacios de relevancia en la cultura, la ciencia, los negocios y la política, brindando a nuestras socias oportunidades de aprendizaje y networking de alto nivel.
              </p>
            </div>

            {/* Bottom Left - Actividades Anuales */}
            <div className="p-4 w-96 h-48 flex flex-col justify-center">
              <h2 className="text-base font-bold mb-2 tracking-wide text-gray-800">
                ACTIVIDADES ANUALES
              </h2>
              <p className="text-xs leading-relaxed text-gray-600">
                A lo largo del año, realizamos eventos clave como la Asamblea Anual, la bienvenida a nuevas socias y el trabajo continuo de los comités, promoviendo la colaboración, el liderazgo y el crecimiento de nuestra comunidad.
              </p>
            </div>

            {/* Bottom Right - Image */}
            <div className="relative w-96 h-48">
              <Image
                src="/images/actividades/actividades_cuadrado.jpg"
                alt="Actividades IWF"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 