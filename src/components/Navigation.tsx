'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={"/logo-petis.svg"}
              alt="Logo Asociación Petís"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
              onError={(e) => {
                // fallback a PNG si el SVG no existe
                e.currentTarget.src = "/logo-petis.png";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors">
              Inicio
            </Link>
            <Link href="/sobre-nos" className="text-gray-700 hover:text-pink-600 transition-colors">
              Sobre nós
            </Link>
            <Link href="/actividades" className="text-gray-700 hover:text-pink-600 transition-colors">
              Actividades
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-pink-600 transition-colors">
              Blog
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-pink-600 transition-colors">
              Contacto
            </Link>
            <Link 
              href="/unete" 
              className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors"
            >
              Únete
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/sobre-nos" 
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nós
              </Link>
              <Link 
                href="/actividades" 
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Actividades
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contacto" 
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link 
                href="/unete" 
                className="block px-3 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Únete
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 