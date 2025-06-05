import Image from "next/image"
import Navbar from "../components/Navbar"

export default function IWFGlobal() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Banner */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/iwfGlobal/iwfGlobal.png"
            alt="IWF Global Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="text-white text-5xl font-modern mb-2">IWF GLOBAL</h1>
            <div className="w-32 h-1 bg-orange-500"></div>
          </div>
        </div>

        {/* New Banner Section with Marble Background */}
        <div className="relative w-full h-[250px]"> {/* Adjust height as needed */}
          <Image
            src="/images/iwfGlobal/iwf_banner_color.png"
            alt="Marble Banner with Blue Circle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-elegant text-gray-700 text-center">
              ¿QUÉ ES INTERNATIONAL WOMEN'S FORUM?
            </h2>
          </div>
        </div>

        {/* Content Section - Text now in two columns with custom background */}
        <section style={{ backgroundColor: '#D3C587' }} className="py-4">
          <div className="container mx-auto px-5 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-x-10">
              <div className="text-black font-elegant">
                <p className="text-lg leading-tight mb-2">
                  IWF nació en 1974 en Nueva York, cuando un grupo de mujeres visionarias creó una red de apoyo profesional para romper barreras en sectores dominados por hombres. Hoy conecta a más de 8.000 mujeres líderes en 77 foros de 34 países, presentes en América del Norte, Europa, Asia, Oriente Medio, África, América Latina y el Caribe, promoviendo el liderazgo femenino a nivel global.
                </p>
              </div>
              <div className="text-black font-elegant">
                <p className="text-lg leading-tight mb-2">
                  Esta red de socias se administra desde las oficinas de IWF en Washington, DC. y no tiene más agenda política o ideológica que promover a las mujeres en el liderazgo y dar forma a un legado transferible para el beneficio de futuras mujeres líderes. Al vincular a las mujeres con exclusivos recursos, experiencias y oportunidades, la red global de IWF no tiene igual en ningún otro lugar del mundo en la actualidad. En Chile, IWF fue fundada en 2017, consolidándose como un espacio de colaboración y empoderamiento para mujeres prestigiosas y de trayectoria consolidada, y un motor de cambio hacia una sociedad más equitativa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section for global_iwf2.png */}
        <section className="py-16">
          <div className="container mx-auto px-5">
            <Image
              src="/images/iwfGlobal/global_iwf2.png"
              alt="IWF Global Network Visual"
              width={600} 
              height={300} 
              className="h-auto max-w-4xl mx-auto"
            />
          </div>
        </section>

      </main>
    </>
  )
} 