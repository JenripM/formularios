"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function QuienesSomos() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Banner Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="https://i.imgur.com/IsTwVCN.jpeg"
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
      <section className="relative w-full bg-white py-10 md:py-20">
        {/* Banner Background with title - Only show on desktop */}
        <div className="hidden md:block absolute w-full h-[140px] bg-[#F5F1EC] top-[250px]">
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
          {/* Mobile Title */}
          <div className="md:hidden mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-gray-700 tracking-wider">
              ACERCA DE NOSOTRAS
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-20 relative">
            {/* Left Column - Founder Image */}
            <div className="w-full md:w-1/2 sm:block flex justify-center">
              <div className="relative h-[300px] md:h-[600px] w-full">
                <Image
                  src="/images/quienesSomos/1.png"
                  alt="Fundadora IWF"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="w-full md:w-1/2 relative">
              <div className="hidden md:block absolute top-[120px] -right-6 z-10">
                <Image
                  src="/images/quienesSomos/circulo_naranja.png"
                  alt="Círculo decorativo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="mt-0 md:mt-[320px] pr-0 md:pr-16">
                <p
                  className="text-gray-700 text-base md:text-xl leading-relaxed font-elegant"
                  style={{ lineHeight: "1.8" }}
                >
                  IWF Perú tiene como propósito impulsar la equidad y el
                  liderazgo femenino, promover el intercambio cultural y
                  profesional entre mujeres de diversos ámbitos. Buscamos
                  generar impacto, movilizar e inspirar a lideres peruanas
                  mediante la difusión de ideas y nuevas perspectivas a través
                  del desarrollo de programas, conversatorios y eventos
                  innovadores en temas vinculados al liderazgo, crecimiento
                  personal y profesional, tecnología, cultura, arte, educación,
                  deporte y diversidad, promoviendo espacios más inclusivos y
                  equitativos para las futuras generaciones.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision y Mision - Now outside the container, for full-width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-16 md:mt-32">
          <div className="bg-[#F5F1EC] p-8 md:p-16">
            <h2 className="text-2xl md:text-4xl font-modern text-gray-800 mb-4 md:mb-6">
              NUESTRA VISIÓN
            </h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed font-elegant">
              Ser un foro influyente de mujeres líderes peruanas que impacten
              positivamente en su entorno, generando redes de confianza,
              colaboración y crecimiento, tanto a nivel nacional como
              internacional.
            </p>
          </div>
          <div className="bg-[#D4B572] p-8 md:p-16">
            <h2 className="text-2xl md:text-4xl font-modern text-gray-700 mb-4 md:mb-6">
              NUESTRA MISIÓN
            </h2>
            <p className="text-gray-700 text-base md:text-xl leading-relaxed font-elegant">
              Fomentar la participación activa de mujeres líderes en diversos
              ámbitos del país, promoviendo el desarrollo de sus capacidades, el
              fortalecimiento de su influencia y el apoyo entre pares.
            </p>
          </div>
        </div>

        {/* Ejes Fundamentales Section */}
        <section className="bg-white py-10 md:py-20">
          <div className="container mx-auto px-5">
            {/* Title */}
            <div className="text-left mb-8 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-modern text-gray-800 mb-4">
                EJES FUNDAMENTALES
              </h2>
              <div className="w-32 h-1 bg-orange-500"></div>
            </div>

            {/* Four Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Influencia */}
              <div className="text-center">
                <div className="relative w-32 h-20 md:w-48 md:h-32 mx-auto mb-4 md:mb-6">
                  <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                    {/* Placeholder for image - you'll need to add the actual image */}
                    <img
                      src="https://lh3.googleusercontent.com/pw/AP1GczMx3Ga0MZzjCR3emJgkmAyxuYX9iqdtPx8xKcVQp5Lstl8ubl68p_b9qk6mQVTCWQbKaPzCSXRq5CvYEFWqbySWruV5r2_b2HfP1P1lRGs6P-htS3ye-hw1Loee4mYPduX33Jtvft3SxYstry7dhhXw=w1418-h945-s-no-gm?authuser=0"
                      alt="Influencia Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-modern text-gray-800 mb-3 md:mb-4">
                  Influencia
                </h3>
                <div className="text-gray-600 font-elegant text-sm md:text-lg leading-relaxed">
                  <p className="mb-2">
                    - <strong>Inspiramos</strong> a otras mujeres.
                  </p>
                </div>
              </div>

              {/* Visibilidad */}
              <div className="text-center">
                <div className="relative w-32 h-20 md:w-48 md:h-32 mx-auto mb-4 md:mb-6">
                  <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                    {/* Placeholder for image - you'll need to add the actual image */}
                    <img
                      src="https://lh3.googleusercontent.com/pw/AP1GczMKY2N91X5WO0Gjs-ATSkq8rXIIIwBPyDEZViOmh2TbC4dshWoZhx8k20c0PVHh0BCv9qCl0xAeEcYLDCnnkYC6AtUmnA5tvgp_oxtLQ1SzTp9qe_IUwEFRXwYdcFRfWXqGD87CV9Uqp0YkcRG9O65f=w1418-h945-s-no-gm?authuser=0"
                      alt="Influencia Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-modern text-gray-800 mb-3 md:mb-4">
                  Visibilidad
                </h3>
                <div className="text-gray-600 font-elegant text-sm md:text-lg leading-relaxed">
                  <p className="mb-2">
                    - <strong>Somos un referente</strong> para otras mujeres
                    peruanas.
                  </p>
                  <p className="mb-2">
                    - <strong>Prestigio</strong> de ser parte de la
                    organización.
                  </p>
                </div>
              </div>

              {/* Diversidad */}
              <div className="text-center">
                <div className="relative w-32 h-20 md:w-48 md:h-32 mx-auto mb-4 md:mb-6">
                  <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                    {/* Placeholder for image - you'll need to add the actual image */}
                    <img
                      src="https://lh3.googleusercontent.com/pw/AP1GczNT4FMDEhyDUDRZuSDZkKzvpjvU9rxfGb1XRyvQPAcx_7J9M8CPijt8tHTE68MkvwNvjpl9O00h6CyV4mjiLDbo-aw2uTVhjuknb_JuYDTbERNMt7rZHBtOtMlYpfZFdn4_Ii1GgLmRkJYWK9AqUeXH=w1418-h945-s-no-gm?authuser=0"
                      alt="Influencia Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-modern text-gray-800 mb-3 md:mb-4">
                  Diversidad
                </h3>
                <div className="text-gray-600 font-elegant text-sm md:text-lg leading-relaxed">
                  <p className="mb-2">
                    - <strong>Son parte</strong> mujeres de distintas
                    disciplinas, generaciones y regiones.
                  </p>
                  <p className="mb-2">
                    - <strong>Aseguramos</strong> que nuestra red refleje la
                    riqueza y pluralidad del talento femenino en Perú.
                  </p>
                </div>
              </div>

              {/* Comunidad */}
              <div className="text-center">
                <div className="relative w-32 h-20 md:w-48 md:h-32 mx-auto mb-4 md:mb-6">
                  <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                    {/* Placeholder for image - you'll need to add the actual image */}
                    <img
                      src="https://lh3.googleusercontent.com/pw/AP1GczMHiYPWGUT0Ond0SerNvdPHPbuQ6S8v6d7aoXKbYP2KVg3-z7FOGTSMX6NhkDh9nyK2XSCuGkFjQ6cNHAenicdKIX2QJf6YbNDIPLOhjqpHvMAuSeDm40kNr6ddqU9OYSmj-bZnRgktVI_rFC-K1OWd=w1418-h945-s-no-gm?authuser=0"
                      alt="Influencia Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-modern text-gray-800 mb-3 md:mb-4">
                  Comunidad
                </h3>
                <div className="text-gray-600 font-elegant text-sm md:text-lg leading-relaxed">
                  <p className="mb-2">
                    - <strong>Damos acceso</strong> a una red internacional de
                    mujeres influyentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
  );
}
