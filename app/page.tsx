"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-5 py-5 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/inicio/logo_iwf.png" alt="IWF Perú Logo" width={200} height={89} className="h-20 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-orange-600 font-medium tracking-[0.15em] text-sm">
              INICIO
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-600 font-medium tracking-[0.15em] text-sm">
              QUIÉNES SOMOS
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-600 font-medium tracking-[0.15em] text-sm">
              IWF GLOBAL
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-600 font-medium tracking-[0.15em] text-sm">
              SOCIAS
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-600 font-medium tracking-[0.15em] text-sm">
              ACTIVIDADES
            </Link>
            <Link
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium tracking-[0.15em] text-sm transition-colors"
            >
              IWF CONNECT
            </Link>
            <button className="text-gray-700 hover:text-orange-600">
              <Search className="h-5 w-5" />
            </button>
          </nav>

          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
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
                  <div className="words-carousel">
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
                  <div className="orange-underline"></div>
                  <h2 className="text-2xl text-orange-600 font-elegant font-medium mb-8 animate-gentle">
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
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  {/* Duplicados para scroll infinito */}
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                </div>

                {/* Segunda columna */}
                <div className="carousel-column">
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  {/* Duplicados para scroll infinito */}
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                </div>

                {/* Tercera columna */}
                <div className="carousel-column">
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  {/* Duplicados para scroll infinito */}
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
                  <div className="carousel-item shadow-lg bg-gradient-to-br from-gray-100 to-white"></div>
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

        {/* Influence Section */}
        <section className="influence-section py-16 md:py-24">
          <div className="floating-circles">
            <div className="floating-circle"></div>
            <div className="floating-circle"></div>
            <div className="floating-circle"></div>
          </div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center influence-content">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="influence-title text-5xl md:text-6xl mb-6">INFLUENCIA</h2>
              <div className="orange-underline"></div>
              <h3 className="text-2xl text-orange-600 font-medium">
                International Women's Forum
                <br />
                Perú
              </h3>
            </div>

            <div className="md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 md:h-64 overflow-hidden rounded-tl-full shadow-lg">
                  <Image src="/images/women3.jpg" alt="Women leaders" fill className="object-cover" />
                </div>
                <div className="relative h-48 md:h-64 overflow-hidden rounded-tr-full shadow-lg">
                  <div className="absolute inset-0 bg-orange-500/30 backdrop-blur-sm rounded-tr-full"></div>
                </div>
                <div className="relative h-48 md:h-64 overflow-hidden rounded-bl-full shadow-lg">
                  <div className="absolute inset-0 bg-orange-500/30 backdrop-blur-sm rounded-bl-full"></div>
                </div>
                <div className="relative h-48 md:h-64 overflow-hidden rounded-br-full shadow-lg">
                  <Image src="/images/women4.jpg" alt="Women leaders" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section className="py-16 md:py-24 bg-navy-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">NOS APOYAN</h2>

            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="w-40 h-20 bg-white rounded-md flex items-center justify-center p-4">
                <Image
                  src="/images/sponsor1.png"
                  alt="Sponsor 1"
                  width={120}
                  height={60}
                  className="max-h-full w-auto"
                />
              </div>
              <div className="w-40 h-20 bg-white rounded-md flex items-center justify-center p-4">
                <Image
                  src="/images/sponsor2.png"
                  alt="Sponsor 2"
                  width={120}
                  height={60}
                  className="max-h-full w-auto"
                />
              </div>
            </div>

            <div className="mt-24 relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-64 h-32 bg-orange-500 rounded-t-full"></div>
              <Image
                src="/images/50years.png"
                alt="50 years women changing the world"
                width={400}
                height={150}
                className="mx-auto relative z-10"
              />
            </div>
          </div>
        </section>
      </main>

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

      <button
        className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  )
}
