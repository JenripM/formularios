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
          src="https://lh3.googleusercontent.com/pw/AP1GczMTwK8z7AFAija412O3NBSp809maSFCtyzNRS4RUvpZPTRe3IB66bfjmD5xfPoKY7oEChfJ89fJDt2qr-D4pPV4BI-LlD23Hv_f2OW-d7BxYSM-QUTx-KJOIqDx5JLJPkXk4uZQQTHiCKhG9xcCQTBD=w1418-h945-s-no-gm?authuser=0"
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
                src="https://lh3.googleusercontent.com/pw/AP1GczPcwpdvYonNzxm1IBxu1IL9G3epdzny4Z9Bxzs1CrcGxa3bF71aRQSOhaRQYK2xd70T-n-90sKudO6MhCSqJZS93mcW-e3Q2gknCPnBGgxtacrtCYF3f_mYdnhXe75g-oqiXXlp__PjmkXJdq4ZEmwa=w1340-h893-s-no-gm?authuser=0"
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
                  src="https://lh3.googleusercontent.com/pw/AP1GczO0Ik2gEe9xGUm6d4KQmSdgaLCwi-elSIuZefhyjW_hdUGoMau2uYKucv010GkRhX2xgjyCzL4jZ1zkgCLGypdIlPLDUwRjeVc7xGP1NU1OM7rWr6PNlqvZlAO0aUFUUvefmhY9psAaoRF3HyMhbAzI=w1340-h893-s-no-gm?authuser=0"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczMx3Ga0MZzjCR3emJgkmAyxuYX9iqdtPx8xKcVQp5Lstl8ubl68p_b9qk6mQVTCWQbKaPzCSXRq5CvYEFWqbySWruV5r2_b2HfP1P1lRGs6P-htS3ye-hw1Loee4mYPduX33Jtvft3SxYstry7dhhXw=w1340-h893-s-no-gm?authuser=0"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczMU7XUVw3Ua0SS5rHjtUQHa_RaA_CjHIA6u9pd-x86rIQykSwl01HMS0O1r6br9lQEPe_8eOitjtoeaK5HvOUX0CcUG3UW47wco5_2VuxZfsNN2YC3EWX6llTIDNVqcphWuVXDnnKBHW76RNWmKKXYE=w1340-h893-s-no-gm?authuser=0"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczNNJH7JP5iTwhcB3KkJUiWhKqADFew9qUW5yaHjxT8nAQGIiqBoFH2k5WBAmO5s5rOyH9T3yhCXWr9Qlh618o8V6Z7onUuPrO_yHsYpOQHt38UAvRA-DvS1vD8PBMjKQxrM4jVWNtJUpxBK2Iob7NHY=w1340-h893-s-no-gm?authuser=0"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczMKY2N91X5WO0Gjs-ATSkq8rXIIIwBPyDEZViOmh2TbC4dshWoZhx8k20c0PVHh0BCv9qCl0xAeEcYLDCnnkYC6AtUmnA5tvgp_oxtLQ1SzTp9qe_IUwEFRXwYdcFRfWXqGD87CV9Uqp0YkcRG9O65f=w1340-h893-s-no-gm?authuser=0"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Duplicate set for infinite scroll */}
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczOEDeyjVx5yB5LjihgnhY3-baYZ8SnSPdHog65WXLupq0zIVdwLifKoW3UQMJCVoo0fT-GXWiiYBO54QUHbvG6TS1vsciKNF26jaHcG-D6Jd3YBz1uW5fpeIVvASo53nUg4smZYOZRc0XFIMw7pAtTr=w1340-h893-s-no-gm?authuser=0"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczOTuqzSWYsh_hpxfSXmeqvOV9GlP02OKtSoSH7Aud9PfOqPN3tp8mM2Vbkfzgj2TWHIQTaWA_wKXX6OZxKzznYj_RvLV7LIzTtqIEoIBAoVw_XvlyAue_r3t-_Z8U-htBnt-d1e1DXQtXjxMoNRFqKC=w1340-h893-s-no-gm?authuser=0"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczOt3Ycs5Gym__XYq2r41VZn8za7r7VXEVeRlEx0Ivp6E0NmrFI9q33AJqk9bwDuIDON9rAvh3bzpas5YhIdBYhlgqonQkT-HyuYdFVqmDNYiRR3h43n3wchZr5L78yuwjzvr8QzcPuTJSj-cSg2vgr7=w1340-h893-s-no-gm?authuser=0"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczPnmGeUn0ITeWpdUa0sEg90jhqu9rBE7l0kjwLwbHutrh2QGlkZhTN9Hj0GHW0NYowGGNgyg76CbANEOJn9ZnyJ9DhTQSZJ2dbnXit-FZ-R2KQyDc2urHrv7q2uZzhUrGPEcx-qd7bhL9AGH92lD98_=w1340-h893-s-no-gm?authuser=0"
                  alt="Actividades IWF Chile"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 relative">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczNiYGDiEAKNm819L4BUglbR1hojJDmgCpxCgaqMKb7YHeaE_3_O2v9ilF7SWYy1S8rSZnOZ1-_sgfCA2RVmsy3-Js5S7cwnhO306VhdU3ubwEGuJg7w3D6ebKpn37AuCnZgHlWMH2B3NHhzGj4Q9Z4y=w1340-h893-s-no-gm?authuser=0"
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