"use client"

import Image from "next/image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useEffect, useState } from "react"
import useFirestore from "../../../hooks/useFirestore";

export default function ListadoSociasPage() {
  const [selectedMember, setSelectedMember] = useState<any>(null)
  const [equipoList, setEquipo] = useState<any[]>([]);

  const { getEquipo } = useFirestore();

  useEffect(() => {
    async function fetchEquipo() {
      const data = await getEquipo();
      console.log("Datos recibidos de getEquipo:", data);
      setEquipo(data ?? []);
    }
    fetchEquipo();
  }, [getEquipo]);

  const openModal = (member: any) => {
    setSelectedMember(member)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }

  return (
    <div className="min-h-screen bg-[#F5F1EC]">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-black/50 to-black/30">
        <Image
          src="/images/socias/socias_conjunto2.jpg"
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
              IWF Perú reúne a un grupo diverso de mujeres líderes con destacada trayectoria en ámbitos como los negocios, la academia, la 
              ciencia, la cultura y el servicio público. A través de su experiencia y conocimientos, nuestras socias contribuyen activamente al 
              desarrollo de la organización y al fortalecimiento del liderazgo femenino en Perú.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm font-elegant">
              Conoce a las mujeres que forman parte de esta red y que, con su visión y liderazgo, impulsan el cambio en Perú y el mundo. IWF 
              desempeña un papel crucial a la hora de incentivar a la próxima generación de mujeres líderes, ayudándolas a que persigan sus 
              sueños y sus aspiraciones de desarrollo profesional.
            </p>
          </div>
        </div>

        {/* Socias Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipoList.map((member) => (
            <div key={member.id} className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative">
                <Image
                  src={member.imagenUrl || "/images/default-profile.jpg"}
                  alt={member.nombres}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-base text-gray-800 mb-1">
                  {member.nombres}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {member.cargo}
                </p>
                <button 
                  onClick={() => openModal(member)}
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
      {selectedMember && (
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
                    src={selectedMember.imagenUrl || "/images/default-profile.jpg"}
                    alt={selectedMember.nombres}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {selectedMember.nombres}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {selectedMember.cargo}
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
                    {selectedMember.descripcion}
                  </p>
                  
                  <div className="flex gap-4 mb-8">
                    {selectedMember.linkedin && (
                      <a 
                        href={selectedMember.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                    {selectedMember.curriculum && (
                      <a 
                        href={selectedMember.curriculum} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        Ver Curriculum
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-purple-600 pt-6">
                  <h4 className="text-xl font-elegant mb-2">
                    {selectedMember.nombres}
                  </h4>
                  <p className="text-sm opacity-90">
                    {selectedMember.cargo}
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