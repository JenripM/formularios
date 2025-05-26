import Image from "next/image"
import Navbar from "../components/Navbar"

export default function IWFGlobal() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Banner */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/iwfGlobal/iwfGlobal.png"
            alt="IWF Global Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="text-white text-6xl font-modern">IWF GLOBAL</h1>
          </div>
        </div>

        {/* Content Section */}
        <section className="container mx-auto px-5 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-elegant mb-10 text-center">
              ¿QUÉ ES INTERNATIONAL WOMEN'S FORUM?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="prose lg:prose-lg">
                <p>
                  International Women's Forum (IWF) es una organización global que reúne a mujeres líderes de alto nivel de diversos campos profesionales. Fundada en 1974, IWF ha crecido hasta convertirse en una red internacional presente en 34 países.
                </p>
                <p>
                  Nuestra misión es conectar a mujeres líderes preeminentes a nivel local, nacional e internacional. Cultivamos una red dinámica para compartir conocimientos y ideas, enriquecer las experiencias de liderazgo y proporcionar un foro para la colaboración entre pares.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 bg-blue-600 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/iwfGlobal/circuit-board.png"
                    alt="Circuit Board Design"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 