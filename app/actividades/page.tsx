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
          src="/images/actividades/ac_principal.jpg"
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
        {/* Main Content Grid - Responsive Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Top Left - Dine Arounds */}
            <div className="bg-orange-500 text-white p-6 md:p-4 min-h-[200px] md:min-h-[192px] flex flex-col justify-center">
              <h2 className="text-lg md:text-base font-bold mb-3 md:mb-2 tracking-wide">
                DINE AROUNDS
              </h2>
              <p className="text-sm md:text-xs leading-relaxed">
                Encuentros exclusivos, donde las socias tienen la oportunidad de compartir experiencias y reflexionar sobre temas de actualidad con invitados de distintos ámbitos, fortaleciendo la conexión y el intercambio de ideas en una mesa común organizada por una socia en su hogar o club.
              </p>
            </div>

            {/* Top Right - Experiencias Exclusivas */}
            <div className="bg-gray-100 p-6 md:p-4 min-h-[200px] md:min-h-[192px] flex flex-col justify-center">
              <h2 className="text-lg md:text-base font-bold mb-3 md:mb-2 tracking-wide text-gray-800">
                EXPERIENCIAS EXCLUSIVAS DE IWF
              </h2>
              <p className="text-sm md:text-xs leading-relaxed text-gray-600">
                Acceso a eventos únicos que permiten conocer de cerca espacios de relevancia en la cultura, la ciencia, los negocios y la política, brindando a nuestras socias oportunidades de aprendizaje y networking de alto nivel.
              </p>
            </div>

            {/* Bottom Left - Actividades Anuales */}
            <div className="bg-white p-6 md:p-4 min-h-[200px] md:min-h-[192px] flex flex-col justify-center">
              <h2 className="text-lg md:text-base font-bold mb-3 md:mb-2 tracking-wide text-gray-800">
                ACTIVIDADES ANUALES
              </h2>
              <p className="text-sm md:text-xs leading-relaxed text-gray-600">
                A lo largo del año, realizamos eventos clave como la Asamblea Anual, la bienvenida a nuevas socias y el trabajo continuo de los comités, promoviendo la colaboración, el liderazgo y el crecimiento de nuestra comunidad.
              </p>
            </div>

            {/* Bottom Right - Image */}
            <div className="relative min-h-[200px] md:min-h-[192px]">
              <Image
                src="/images/actividades/ac_2.jpg"
                alt="Actividades IWF"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Image Carousel Section */}
        <div className="mt-16">
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-4 md:space-x-6">
              {/* First set of images */}
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="/images/actividades/actividades_6.jpg"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="/images/actividades/actividades_1.jpg"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="/images/actividades/actividades_2.jpg"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="/images/actividades/actividades_3.jpg"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="/images/actividades/actividades_4.jpg"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Duplicate set for infinite scroll */}
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="/images/actividades/actividades_5.jpg"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="/images/actividades/actividades_7.jpg"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="/images/actividades/actividades_chile.jpg"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="/images/actividades/actividades_chile.jpg"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="/images/actividades/actividades_chile.jpg"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Próximas Conferencias Internacionales Section */}
        <div className="mt-16 md:mt-20 mb-12 md:mb-16">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-700 mb-8 md:mb-12 tracking-wide">
            PRÓXIMAS CONFERENCIAS INTERNACIONALES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Seattle Conference */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/conferencias/conferencia_1.jpg"
                  alt="Seattle Space Needle"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    2025 IWF World Leadership Conference & Gala
                  </h3>
                  <p className="text-sm mb-1">Seattle, Washington</p>
                  <p className="text-sm">May 21 - 23, 2025</p>
                </div>
                <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cape Town Conference */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/conferencias/conferencia_2.jpg"
                  alt="Cape Town South Africa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    2025 Cornerstone Conference
                  </h3>
                  <p className="text-sm mb-1">Cape Town, South Africa</p>
                  <p className="text-sm">November 5 - 7, 2025</p>
                </div>
                <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* London Conference */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/conferencias/conferencia_3.jpg"
                  alt="London Big Ben"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    2026 Cornerstone Conference
                  </h3>
                  <p className="text-sm mb-1">London, England</p>
                  <p className="text-sm">May 13 - 15, 2026</p>
                </div>
                <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 