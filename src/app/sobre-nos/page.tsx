"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function SobreNos() {
  const [showFeed, setShowFeed] = useState(false);

  useEffect(() => {
    setShowFeed(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-accent">
      {/* Hero Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre nós
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Coñece a historia e os valores da Asociación Petís
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 warm-shadow">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              A nosa historia
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tiñamos ganas, forzas e ilusión. Tiñamos a necesidade dunha tribo. 
                Tiñamos un grupo de petises con coidadores desexando compartir emocións e experiencias.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Así nace Petís, o teu espazo seguro en Pontevedra para que nunca máis 
                te sintas soa, insegura ou xulgada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos unha asociación de apoio á crianza e á lactancia que nace da 
                necesidade de crear unha comunidade de apoio para familias con crianzas pequenas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Valores */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="text-center mb-12 md:mb-0">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A nosa misión</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ofrecer apoio, información e acompañamento ás familias durante a 
                crianza, creando unha comunidade segura e acolledora onde cada 
                persoa se sinta comprendida e apoiada.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Os nosos valores</h3>
              <ul className="text-lg text-gray-700 space-y-4 mx-auto max-w-xs sm:max-w-sm md:max-w-none text-left md:text-left">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Empatía:</span>
                    <span className="block text-gray-700">Comprender e acompañar cada experiencia única</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Respeto:</span>
                    <span className="block text-gray-700">Valorar cada decisión e estilo de crianza</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Comunidade:</span>
                    <span className="block text-gray-700">Crear lazos e apoios entre familias</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Inclusión:</span>
                    <span className="block text-gray-700">Acoller a todas as familias sen xulgar</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center py-4">
         <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Síguenos en Instagram
          </h3>
      </div>
      {/* Feed de Instagram */}
      {showFeed && (
        <>
          <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-79ddf5a8-6612-4d17-a68f-dd8da28709e5" data-elfsight-app-lazy></div>
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Asociación Petís</h4>
              <p className="text-gray-300">
                Apoio á crianza e á lactancia en Pontevedra
              </p>
              <div className="mt-4 flex flex-col space-y-2">
                {/* Mail */}
                <a
                  href="mailto:info@asociacionpetis.org"
                  className="flex items-center justify-center md:justify-start hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  info@asociacionpetis.org
                </a>
                {/* Redes sociales */}
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/a.petis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/petis-asociacion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Enlaces</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/sobre-nos" className="hover:text-white">Sobre nós</Link></li>
                <li><Link href="/actividades" className="hover:text-white">Actividades</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Información</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/unete" className="hover:text-white">Únete</Link></li>
                <li><Link href="/actividades" className="hover:text-white">Próximas actividades</Link></li>
                <li><Link href="/blog" className="hover:text-white">Últimas noticias</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/legal-notice" className="hover:text-white">Aviso Legal</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white">Política de Privacidade</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-white">Política de Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="text-xs">&copy; 2025 Asociación Petís. Todos os dereitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}