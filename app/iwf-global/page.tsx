import Image from "next/image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

export default function IWFGlobal() {
  const members = [
  {
    name: 'Kimberly Cooper Jaqua',
    role: 'Presidenta IWF Global',
    organization: 'IWF Oregon',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-06.png',
  },
  {
    name: 'Elisabeth Ourliac',
    role: 'Vicepresidenta Global',
    organization: 'IWF Francia',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-07.png',
  },
  {
    name: 'Rosel Moxel',
    role: 'Presidenta del comité de Auditoría y Finanzas de la IWF',
    organization: 'IWF Bahamas',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-08.png',
  },
  {
    name: 'Reem Abu Hassan',
    role: 'Directora IWF Global',
    organization: 'IWF Jordania',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-09.png',
  },
    {
    name: 'Kathy Anderson',
    role: 'Directora IWF Global',
    organization: 'IWF Carolina del Norte',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-10.png',
  },
  {
    name: 'Terry Axelrod',
    role: 'Directora IWF Global',
    organization: 'IWF Washington',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-11.png',
  },
  {
    name: 'Adriane Brown',
    role: 'Directora IWF Global',
    organization: 'IWF Washington',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-12.png',
  },
  {
    name: 'Irene Charnley',
    role: 'Directora IWF Global',
    organization: 'IWF Sudáfrica',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-13.png',
  },
    {
    name: 'Silvia Dávila Kreimerman',
    role: 'Directora IWF Global',
    organization: 'IWF México',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-14.png',
  },
    {
    name: 'Ann Drake',
    role: 'Directora IWF Global',
    organization: 'IWF Chicago / IWF Florida',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-15.png',
  },  {
    name: 'Betsy Fischer Martin',
    role: 'Directora IWF Global',
    organization: 'IWF Luisiana / IWF Washington',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-16.png',
  },  {
    name: 'Pilar Girón',
    role: 'Directora IWF Global',
    organization: 'IWF España',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-17.png',
  },  {
    name: 'Julie Goldstein',
    role: 'Directora IWF Global',
    organization: 'IWF Reino Unido',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-21.png',
  },
  
  {
       name: 'Ruveni Kelleher',
    role: 'Directora IWF Global',
    organization: 'IWF Australia',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-20.png',
  },
  {
    name: 'Doris Meister',
    role: 'Directora IWF Global',
    organization: 'IWF Nueva York',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-19.png',
  },
  
  {
   name: 'Brenda Papa',
    role: 'Directora IWF Global',
    organization: 'IWF Barbados',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-18.png',
  },
    {
     name: 'Leslie Quinton',
    role: 'Directora IWF Global',
    organization: 'IWF Canadá',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-22.png',
  },
  {
    name: 'Drina Rendie',
    role: 'Directora IWF Global',
    organization: 'IWF Chile',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-23.png',
  },
  {
    name: 'Prof.Dr. Funda Sivrikaya Şerifoğlu',
    role: 'Directora IWF Global',
    organization: 'IWF Turquía',
    image: 'https://iwfchile.cl/wp-content/uploads/2025/03/dg-24.png',
  },
 

];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Banner */}
        <div className="relative w-full h-[400px]">
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczMx3Ga0MZzjCR3emJgkmAyxuYX9iqdtPx8xKcVQp5Lstl8ubl68p_b9qk6mQVTCWQbKaPzCSXRq5CvYEFWqbySWruV5r2_b2HfP1P1lRGs6P-htS3ye-hw1Loee4mYPduX33Jtvft3SxYstry7dhhXw=w1418-h945-s-no-gm?authuser=0"
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
<section className="py-8 px-4 sm:px-8 md:px-16 lg:px-80 bg-gray-100">
  <h2 className="text-4xl font-elegant font-bold text-gray-700 mb-6">
    DIRECTORIO IWF GLOBAL
    <hr className="border-t-2 border-orange-500 mt-2 w-[35%]" />
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {members.map((member, index) => (
      <div key={index} className="flex flex-col items-center p-4">
        <img className="w-48 h-48 sm:w-64 sm:h-64 object-cover mb-4" src={member.image} alt={member.name} />
        <p className="text-xl font-semibold text-gray-800">{member.name}</p>
        <p className="text-sm text-gray-600">{member.role}</p>
        <p className="text-sm text-gray-500">{member.organization}</p>
      </div>
    ))}
  </div>
</section>

      <Footer />

      </main>
    </>
  )
} 