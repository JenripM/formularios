import Image from "next/image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function CriteriosPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EC]">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-black/50 to-black/30">
        <Image
          src="/images/women2.jpg"
          alt="Criterios de Asociación"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-light tracking-[0.2em] text-center">
            CRITERIOS DE ASOCIACIÓN
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-5 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center tracking-wide">
            REQUISITOS PARA SER SOCIA
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Liderazgo Profesional
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Las candidatas deben demostrar un liderazgo excepcional en su campo profesional, 
                con logros significativos y reconocimiento en su industria o área de especialización.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Compromiso con el Desarrollo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compromiso demostrado con el desarrollo profesional de otras mujeres y la promoción 
                de la igualdad de género en el ámbito laboral y social.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Trayectoria Destacada
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experiencia profesional sólida con al menos 10 años en posiciones de liderazgo 
                o como emprendedora exitosa en su campo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Valores Compartidos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Alineación con los valores y la misión de IWF, incluyendo integridad, 
                excelencia, diversidad e inclusión.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Proceso de Nominación
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Las candidatas deben ser nominadas por una socia actual de IWF y pasar por 
                un proceso de evaluación que incluye:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Revisión de antecedentes profesionales</li>
                <li>Entrevistas con el comité de membresía</li>
                <li>Referencias profesionales</li>
                <li>Evaluación de compatibilidad con la comunidad IWF</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium tracking-[0.15em] text-sm transition-colors">
              CONTACTAR PARA MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 