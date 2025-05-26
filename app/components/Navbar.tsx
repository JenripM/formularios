"use client"

import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSociasDropdownOpen, setIsSociasDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setIsSociasDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleQuienesSomosClick = () => {
    setIsSociasDropdownOpen(false);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSociasClick = () => {
    setIsDropdownOpen(false);
    setIsSociasDropdownOpen(!isSociasDropdownOpen);
  };

  return (
    <div ref={dropdownRef}>
      <header className="sticky top-0 z-50 bg-[#F5F1EC] shadow-sm">
        <div className="container mx-auto px-5 py-5 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/inicio/logo_iwf.png" alt="IWF Perú Logo" width={200} height={89} className="h-20 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium tracking-[0.15em] text-sm">
              INICIO
            </Link>
            <button 
              className="text-gray-700 hover:text-orange-600 font-medium tracking-[0.15em] text-sm"
              onClick={handleQuienesSomosClick}
            >
              QUIÉNES SOMOS
            </button>
            <Link href="/iwf-global" className="text-gray-700 hover:text-orange-600 font-medium tracking-[0.15em] text-sm">
              IWF GLOBAL
            </Link>
            <button 
              className="text-gray-700 hover:text-orange-600 font-medium tracking-[0.15em] text-sm"
              onClick={handleSociasClick}
            >
              SOCIAS
            </button>
            <Link href="/actividades" className="text-gray-700 hover:text-orange-600 font-medium tracking-[0.15em] text-sm">
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

      {isDropdownOpen && (
        <div className="dropdown-menu active">
          <div className="dropdown-content">
            <div className="dropdown-section">
              <h3>¿Quiénes Somos?</h3>
              <p>IWF es una comunidad internacional, no partidista y apolítica, presente en 34 países, entre ellos Perú.</p>
            </div>
            <div className="dropdown-section">
              <Link href="/quienes-somos" className="dropdown-link font-elegant text-2xl" onClick={() => setIsDropdownOpen(false)}>
                ¿Quiénes Somos?
                <span className="dropdown-arrow">›</span>
              </Link>
            </div>
            <div className="dropdown-section">
              <Link href="#" className="dropdown-link gray font-elegant text-2xl" onClick={() => setIsDropdownOpen(false)}>
                Directorio y Comités
                <span className="dropdown-arrow">›</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isSociasDropdownOpen && (
        <div className="dropdown-menu active">
          <div className="dropdown-content">
            <div className="dropdown-section">
              <h3>Socias</h3>
              <p>IWF Chile reúne a un grupo diverso de mujeres líderes con destacada trayectoria en distintos ámbitos, desde los negocios y la academia hasta ciencia, cultura o servicio público.</p>
            </div>
            <div className="dropdown-section">
              <Link href="/socias/listado" className="dropdown-link font-elegant text-2xl" onClick={() => setIsSociasDropdownOpen(false)}>
                Listado de socias
                <span className="dropdown-arrow">›</span>
              </Link>
            </div>
            <div className="dropdown-section">
              <Link href="/socias/criterios" className="dropdown-link gray font-elegant text-2xl" onClick={() => setIsSociasDropdownOpen(false)}>
                Criterios de asociación
                <span className="dropdown-arrow">›</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 