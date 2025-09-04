"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna de enlaces */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Enlaces legales</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-600 hover:text-[var(--color-primary-hover)] transition-colors menu-underline"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookie-policy" 
                  className="text-gray-600 hover:text-[var(--color-primary-hover)] transition-colors menu-underline"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal-notice" 
                  className="text-gray-600 hover:text-[var(--color-primary-hover)] transition-colors menu-underline"
                >
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna de información */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Información de contacto</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                Asociación Petís de Apoio á crianza e á lactancia
              </p>
              <p className="text-gray-600">
                Rua Lepanto 7, Pontevedra
              </p>
              <p className="text-gray-600">
                Email: asociacionpetis@gmail.com
              </p>
            </div>
          </div>

          {/* Columna de redes sociales */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/asociacionpetis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[var(--color-primary-hover)] transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://instagram.com/asociacionpetis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[var(--color-primary-hover)] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Asociación Petís. Todos los derechos reservados. Creado por <a href="https://conexos.es" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--color-primary-hover)] transition-colors">Conexos</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
