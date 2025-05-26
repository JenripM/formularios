import Image from "next/image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

// Datos de ejemplo de las socias - puedes reemplazar con datos reales
const socias = [
  {
    id: 1,
    name: "Tamara Agnic",
    title: "Socia y presidenta de Asociación miembros del directorio de Banco Estado",
    image: "/images/socias/tamara_agnic.jpg"
  },
  {
    id: 2,
    name: "Catalina Aguirre",
    title: "Fundadora & CEO de Kumiko Skincare",
    image: "/images/socias/tamara_agnic.jpg"
  },
  {
    id: 3,
    name: "Ariela Agosin",
    title: "Socia de Agosin Zabaleta",
    image: "/images/socias/tamara_agnic.jpg"
  },
  {
    id: 4,
    name: "Mónica Alcalde",
    title: "Consejera de Fast Food Program Chile",
    image: "/images/socias/tamara_agnic.jpg"
  },
  {
    id: 5,
    name: "Dora Altbir",
    title: "PhD en Ciencias Exactas/Investigación en",
    image: "/images/socias/tamara_agnic.jpg"
  },
  {
    id: 6,
    name: "Isabel Aninat",
    title: "CEO & Founder en Aninat Galería",
    image: "/images/socias/tamara_agnic.jpg"
  },
  {
    id: 7,
    name: "Patricia Arancibia",
    title: "Historiadora y escritora",
    image: "/images/socias/tamara_agnic.jpg"
  },
  {
    id: 8,
    name: "Paola Assael",
    title: "Economista y socia de Blackstone",
    image: "/images/socias/tamara_agnic.jpg"
  }
]

export default function ListadoSociasPage() {
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
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-light tracking-[0.2em]">
            SOCIAS
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-5 py-12">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-light text-gray-800 mb-6 tracking-wide">
            NUESTRAS SOCIAS
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              IWF Chile reúne a un grupo diverso de mujeres líderes con destacada trayectoria en ámbitos como los negocios, la academia, la 
              ciencia, la cultura y el servicio público. A través de su experiencia y conocimientos, nuestras socias contribuyen activamente al 
              desarrollo de la organización y al fortalecimiento del liderazgo femenino en Chile.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
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
                <button className="text-orange-500 hover:text-orange-600 transition-colors">
                  <span className="text-xl font-light">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 