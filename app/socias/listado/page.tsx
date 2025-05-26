"use client"

import Image from "next/image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useState } from "react"

// Datos de ejemplo de las socias - puedes reemplazar con datos reales
const socias = [
  {
    id: 1,
    name: "Tamara Agnic",
    title: "Socia y presidenta de Asociación miembros del directorio de Banco Estado",
    image: "/images/socias/tamara_agnic.jpg",
    description: "Socia de Escolatora, presidenta de Chile Transparente y directora de Euroestudios, donde fue presidenta del Comité de Auditoría. Con más de 30 años de experiencia en gobierno corporativo, cumplimiento y sistemas de integridad, ha liderado importantes entidades públicas y privadas, como la Superintendencia de Pensiones y la Unidad de Análisis Financiero (UAF). Ingeniera comercial y MBA. Tamara también se desempeña como defensora del liderazgo femenino y la transparencia, contribuyendo significativamente al desarrollo de políticas y estrategias para fortalecer la integridad y la responsabilidad social en las organizaciones chilenas.",
    linkedin: "#",
    curriculum: "#"
  },
  {
    id: 2,
    name: "Catalina Aguirre",
    title: "Fundadora & CEO de Kumiko Skincare",
    image: "/images/socias/tamara_agnic.jpg",
    description: "Emprendedora y líder en la industria de cosméticos naturales. Fundó Kumiko Skincare con la visión de crear productos de belleza sustentables y de alta calidad. Con más de 15 años de experiencia en el sector, ha posicionado su marca como referente en el mercado chileno.",
    linkedin: "#",
    curriculum: "#"
  },
  {
    id: 3,
    name: "Ariela Agosin",
    title: "Socia de Agosin Zabaleta",
    image: "/images/socias/tamara_agnic.jpg",
    description: "Abogada especializada en derecho corporativo y comercial. Socia del prestigioso estudio jurídico Agosin Zabaleta, donde lidera importantes transacciones y asesorías legales para empresas multinacionales.",
    linkedin: "#",
    curriculum: "#"
  },
  {
    id: 4,
    name: "Mónica Alcalde",
    title: "Consejera de Fast Food Program Chile",
    image: "/images/socias/tamara_agnic.jpg",
    description: "Ejecutiva con amplia experiencia en la industria alimentaria y retail. Ha ocupado posiciones de liderazgo en importantes empresas del sector, contribuyendo al desarrollo de estrategias comerciales innovadoras.",
    linkedin: "#",
    curriculum: "#"
  },
  {
    id: 5,
    name: "Dora Altbir",
    title: "PhD en Ciencias Exactas/Investigación en",
    image: "/images/socias/tamara_agnic.jpg",
    description: "Científica e investigadora reconocida internacionalmente en el campo de la física y ciencias exactas. Ha publicado numerosos artículos científicos y ha contribuido significativamente al avance del conocimiento en su área.",
    linkedin: "#",
    curriculum: "#"
  },
  {
    id: 6,
    name: "Isabel Aninat",
    title: "CEO & Founder en Aninat Galería",
    image: "/images/socias/tamara_agnic.jpg",
    description: "Galerista y promotora de arte contemporáneo. Fundó Aninat Galería, una de las galerías más prestigiosas de Chile, promoviendo el arte latinoamericano y apoyando a artistas emergentes.",
    linkedin: "#",
    curriculum: "#"
  },
  {
    id: 7,
    name: "Patricia Arancibia",
    title: "Historiadora y escritora",
    image: "/images/socias/tamara_agnic.jpg",
    description: "Historiadora y escritora reconocida por sus investigaciones sobre la historia política y social de Chile. Ha publicado numerosos libros y artículos académicos que han contribuido al entendimiento de la historia contemporánea.",
    linkedin: "#",
    curriculum: "#"
  },
  {
    id: 8,
    name: "Paola Assael",
    title: "Economista y socia de Blackstone",
    image: "/images/socias/tamara_agnic.jpg",
    description: "Economista especializada en mercados financieros e inversiones. Socia de Blackstone, donde lidera estrategias de inversión y desarrollo de mercados en América Latina.",
    linkedin: "#",
    curriculum: "#"
  }
]

export default function ListadoSociasPage() {
  const [selectedSocia, setSelectedSocia] = useState<any>(null)

  const openModal = (socia: any) => {
    setSelectedSocia(socia)
  }

  const closeModal = () => {
    setSelectedSocia(null)
  }

  return (
    <div className="min-h-screen bg-[#F5F1EC]">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-black/50 to-black/30">
        <Image
          src="/images/socias/socias_conjunto.png"
          alt="Socias IWF"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-5">
          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-montserrat font-medium tracking-[0.15em] mb-2">
              SOCIAS
            </h1>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-5 py-12">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-light text-gray-800 mb-6 tracking-wide font-elegant">
            NUESTRAS SOCIAS
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-4 text-sm font-elegant">
              IWF Chile reúne a un grupo diverso de mujeres líderes con destacada trayectoria en ámbitos como los negocios, la academia, la 
              ciencia, la cultura y el servicio público. A través de su experiencia y conocimientos, nuestras socias contribuyen activamente al 
              desarrollo de la organización y al fortalecimiento del liderazgo femenino en Chile.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm font-elegant">
              Conoce a las mujeres que forman parte de esta red y que, con su visión y liderazgo, impulsan el cambio en Chile y el mundo. IWF 
              desempeña un papel crucial a la hora de incentivar a la próxima generación de mujeres líderes, ayudándolas a que persigan sus 
              sueños y sus aspiraciones de desarrollo profesional.
            </p>
          </div>
        </div>

        {/* Socias Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socias.map((socia) => (
            <div key={socia.id} className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative">
                <Image
                  src={socia.image}
                  alt={socia.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-base text-gray-800 mb-1">
                  {socia.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {socia.title}
                </p>
                <button 
                  onClick={() => openModal(socia)}
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                >
                  <span className="text-xl font-light">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {selectedSocia && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
            >
              ×
            </button>
            
            <div className="flex flex-col md:flex-row">
              {/* Left side - Image */}
              <div className="md:w-1/3 bg-gray-100">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={selectedSocia.image}
                    alt={selectedSocia.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {selectedSocia.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {selectedSocia.title}
                  </p>
                  <button className="text-orange-500 hover:text-orange-600 transition-colors mb-2">
                    <span className="text-xl font-light">+</span>
                  </button>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="md:w-2/3 bg-purple-800 text-white p-8">
                <div className="mb-6">
                  <p className="text-sm leading-relaxed mb-6">
                    {selectedSocia.description}
                  </p>
                  
                  <div className="flex gap-4 mb-8">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                      LinkedIn
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                      Ver Curriculum
                    </button>
                  </div>
                </div>
                
                <div className="border-t border-purple-600 pt-6">
                  <h4 className="text-xl font-elegant mb-2">
                    {selectedSocia.name}
                  </h4>
                  <p className="text-sm opacity-90">
                    {selectedSocia.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
} 