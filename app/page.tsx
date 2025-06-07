"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const settings = {
    dots: true,               // Muestra los puntos de navegación
    infinite: true,           // Desplazamiento infinito
    speed: 5,               // Velocidad de transición
    slidesToShow: 1,          // Cuántas imágenes mostrar a la vez
    slidesToScroll: 1,        // Cuántas imágenes mover por vez
    autoplay: true,           // Hace que se mueva automáticamente
    autoplaySpeed: 3000,      // Velocidad de auto-movimiento (3 segundos)
  };
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

      <main className="flex-grow relative z-30">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-beige-50">
          <div className="floating-circles">
            <div className="floating-circle"></div>
            <div className="floating-circle"></div>
            <div className="floating-circle"></div>
          </div>
          <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 z-10">
              <div className="title-container">
                <div className="w-full max-w-3xl">
                  <div className="words-carousel mb-1">
                    <div className="words-carousel-inner">
                      <h1 className="word-item text-3xl md:text-5xl font-montserrat font-bold text-gray-800 tracking-[0.15em]">
                        DIVERSIDAD
                      </h1>
                      <h1 className="word-item text-3xl md:text-5xl font-montserrat font-bold text-gray-800 tracking-[0.15em]">
                        VISIBILIDAD
                      </h1>
                      <h1 className="word-item text-3xl md:text-5xl font-montserrat font-bold text-gray-800 tracking-[0.15em]">
                        INFLUENCIA
                      </h1>
                    </div>
                  </div>
                  <div className="orange-underline mt-1"></div>
                  <h2 className="text-2xl text-orange-600 font-elegant font-medium mt-1 mb-8 animate-gentle">
                    International Women's Forum
                    <br />
                    Perú
                  </h2>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 carousel-wrapper">
              <div className="three-column-carousel">
                {/* Primera columna */}
                <div className="carousel-column">
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_01.png" alt="IWF Forum 1" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_02.png" alt="IWF Forum 2" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_03.png" alt="IWF Forum 3" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  {/* Duplicados para scroll infinito */}
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_01.png" alt="IWF Forum 1" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_02.png" alt="IWF Forum 2" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_03.png" alt="IWF Forum 3" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Segunda columna */}
                <div className="carousel-column">
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_04.png" alt="IWF Forum 4" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_05.png" alt="IWF Forum 5" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_06.png" alt="IWF Forum 6" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  {/* Duplicados para scroll infinito */}
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_04.png" alt="IWF Forum 4" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_05.png" alt="IWF Forum 5" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_06.png" alt="IWF Forum 6" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Tercera columna */}
                <div className="carousel-column">
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_01.png" alt="IWF Forum 7" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_02.png" alt="IWF Forum 8" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_03.png" alt="IWF Forum 9" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  {/* Duplicados para scroll infinito */}
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_01.png" alt="IWF Forum 7" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_02.png" alt="IWF Forum 8" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="carousel-item shadow-lg">
                    <Image src="/images/inicio/forum_inicio_03.png" alt="IWF Forum 9" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-orange-500 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-elegant mb-6 animate-gentle">
              Somos la única organización mundial <span className="font-normal">de liderazgo de mujeres</span>
            </h2>
            <p className="text-xl md:text-2xl font-elegant mb-8 animate-reveal delay-300">
              con 50 años consecutivos de crecimiento.
            </p>
            <div className="text-2xl md:text-4xl font-medium tracking-[0.15em] animate-reveal delay-600">
              <span className="font-montserrat">77 FOROS</span>
              <span className="mx-4 text-white/80">|</span>
              <span className="font-montserrat">34 PAÍSES</span>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 tracking-[0.2em] animate-fadeIn">NOSOTRAS SOMOS</h2>

            <div className="relative overflow-hidden carousel-mask">
              <div className="flex whitespace-nowrap animate-scroll">
                <div className="inline-flex space-x-8 text-xl md:text-2xl text-gold-500 font-elegant italic">
                  <span>Matemáticas</span>
                  <span>Bibliotecarias</span>
                  <span>Psicólogas</span>
                  <span>Escritoras</span>
                  <span>Ingenieras</span>
                  <span>Profesoras</span>
                  <span>Educadoras</span>
                  <span>Periodistas</span>
                  <span>Diplomáticas</span>
                </div>
                {/* Duplicado para scroll infinito */}
                <div className="inline-flex space-x-8 text-xl md:text-2xl text-gold-500 font-elegant italic">
                  <span>Matemáticas</span>
                  <span>Bibliotecarias</span>
                  <span>Psicólogas</span>
                  <span>Escritoras</span>
                  <span>Ingenieras</span>
                  <span>Profesoras</span>
                  <span>Educadoras</span>
                  <span>Periodistas</span>
                  <span>Diplomáticas</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden carousel-mask mt-8">
              <div className="flex whitespace-nowrap animate-scroll-reverse">
                <div className="inline-flex space-x-8 text-xl md:text-2xl text-gold-500 font-elegant italic">
                  <span>Emprendedoras</span>
                  <span>Empresarias</span>
                  <span>Economistas</span>
                  <span>Científicas</span>
                  <span>Artistas</span>
                  <span>Galeristas</span>
                  <span>Directoras de empresas</span>
                  <span>Enfermeras</span>
                </div>
                {/* Duplicado para scroll infinito */}
                <div className="inline-flex space-x-8 text-xl md:text-2xl text-gold-500 font-elegant italic">
                  <span>Emprendedoras</span>
                  <span>Empresarias</span>
                  <span>Economistas</span>
                  <span>Científicas</span>
                  <span>Artistas</span>
                  <span>Galeristas</span>
                  <span>Directoras de empresas</span>
                  <span>Enfermeras</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden carousel-mask mt-8">
              <div className="flex whitespace-nowrap animate-scroll">
                <div className="inline-flex space-x-8 text-xl md:text-2xl text-gold-500 font-elegant italic">
                  <span>Médicas</span>
                  <span>Diseñadoras</span>
                  <span>Académicas</span>
                  <span>Historiadoras</span>
                  <span>Astrónomas</span>
                  <span>Mentoras</span>
                  <span>Arquitectas</span>
                  <span>Abogadas</span>
                </div>
                {/* Duplicado para scroll infinito */}
                <div className="inline-flex space-x-8 text-xl md:text-2xl text-gold-500 font-elegant italic">
                  <span>Médicas</span>
                  <span>Diseñadoras</span>
                  <span>Académicas</span>
                  <span>Historiadoras</span>
                  <span>Astrónomas</span>
                  <span>Mentoras</span>
                  <span>Arquitectas</span>
                  <span>Abogadas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asamblea 2024 Section */}
          <section className="py-8 md:py-10 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 tracking-[0.2em]">ASAMBLEA 2024</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/inicio/forum_inicio_01.png" alt="Imagen 1" className="object-cover w-full h-full" />
            </div>
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/inicio/forum_inicio_02.png" alt="Imagen 2" className="object-cover w-full h-full" />
            </div>
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/inicio/forum_inicio_03.png" alt="Imagen 3" className="object-cover w-full h-full" />
            </div>
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/inicio/forum_inicio_04.png" alt="Imagen 4" className="object-cover w-full h-full" />
            </div>
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/inicio/forum_inicio_05.png" alt="Imagen 5" className="object-cover w-full h-full" />
            </div>
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/inicio/forum_inicio_06.png" alt="Imagen 6" className="object-cover w-full h-full" />
            </div>
          </Slider>
        </div>
      </div>
    </section>



      </main>

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
