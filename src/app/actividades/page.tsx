import Link from "next/link";
import React from "react";
export default function Actividades() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-accent">
      {/* Hero Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Actividades
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Estamos nun breve receso de verán. En setembro volverán as reunións presenciais e as actividades da tribo Petís. Síguenos en Instagram para estar ao día das novidades!
            </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.instagram.com/a.petis/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-accent)] text-white font-semibold py-4 px-8 rounded-full hover:bg-primary-hover hover:border-primary-hover transition-colors border-2 border-[var(--color-accent)] btn-glow"
            >
              Mantente informado en Instagram
            </a>
          </div>
        </div>
      </section>
    
      {/* Reunións Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              As nosas reunións
            </h2>
            <p className="text-xl text-gray-600">
              Reunións semanais onde compartir experiencias e recibir apoio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información general */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🌿✨ A tribo está de volta! ✨🌿
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Despois dun pequeno descanso, retomamos as nosas reunións de crianza 
                  para compartir experiencias, inquedanzas e moito apoio! 🤗
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  As reunións da tribo seguen sendo momentos que nos impulsan e motivan 
                  para seguir adiante. É xenial que cada mércores, semana a semana desde 
                  fai máis dun ano, teñamos a oportunidade de abrazarnos, compartir, 
                  emocionarnos, chorar, rir e descubrir outras experiencias de maternidade.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                Mentres, por suposto, os nosos petises gozan xuntos. Sempre máxicos e sempre sorprendentes.
                </p>
              </div>
            </div>

            {/* Horarios y ubicación */}
            <div className="bg-gradient-to-br from-light to-accent rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📍 Información práctica
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    🗓 Horarios
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-green-600 font-semibold mr-2">Pontevedra
                      </span>
                      <span className="text-gray-700"> Mércores 17:00 - 19:00</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 font-semibold mr-2">O Salnés</span>
                      <span className="text-gray-700"> Martes 17:00 - 18:45</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    📍 Onde?
                  </h4>
                  <p className="text-gray-700">
                    <strong>Pazo da Cultura de Pontevedra 
                    </strong><br />
                    Seminario 6, segundo andar
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Antigo Priorato de Arra
                    </strong><br />
                    Portonovo, Sanxenxo
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    💡 Importante
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• As reunións son abertas a todas as familias</li>
                    <li>• Non é necesario apuntarse previamente</li>
                    <li>• Podes vir cos teus petises</li>
                    <li>• Ambiente acolledor e seguro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de actividades */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tipos de actividades
            </h2>
            <p className="text-xl text-gray-600">
              Diferentes opcións para participar na comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-light to-accent warm-shadow">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Reunións Regulares
              </h3>
              <p className="text-gray-700">
              Reunións semanais cada mércores en Pontevedra (17:00 - 19:00) e cada martes no Salnés (17:00 - 18:45)
              </p>
            
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-light to-accent warm-shadow">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Obradoiros Especiais
              </h3>
              <p className="text-gray-700">
                Talleres educativos sobre crianza, lactancia, desenvolvemento infantil 
                e actividades creativas para familias.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-light to-accent warm-shadow">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Actividades ao Aire Libre
              </h3>
              <p className="text-gray-700">
              Paseos, picnics e actividades na natureza para desfrutar en familia e crear lazos entre as crianzas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Próximas actividades */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Próximas actividades
        </h2>
        <p className="text-xl text-gray-600">
          Mantente informado das nosas próximas actividades
        </p>
        <div className="flex justify-center py-6">
          <a
            href="mailto:info@asociacionpetis.org"
            className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200 border-2 border-[var(--color-accent)]"
          >
            Contacto
          </a>
        </div>
          </div>
          </div>
        </section>  
         {/*  <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-gray-900 text-2xl">📅</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Reunións semanais
          </h3>
          <p className="text-lg text-gray-700 mb-6">
          </p>
          <div className="flex justify-center py-6">
            <a
          href="mailto:info@asociacionpetis.org"
          className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200 border-2 border-[var(--color-accent)]"
            >
          Contacto
            </a>*
          </div>  
        </div> {/* cierre .text-center */}
     
      
    

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
          <li><a href="/sobre-nos" className="hover:text-white">Sobre nós</a></li>
          <li><a href="/actividades" className="hover:text-white">Actividades</a></li>
          <li><a href="/blog" className="hover:text-white">Blog</a></li>
          <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-4">Información</h5>
        <ul className="space-y-2 text-gray-300">
          <li><a href="/unete" className="hover:text-white">Únete</a></li>
          <li><a href="/actividades" className="hover:text-white">Próximas actividades</a></li>
          <li><a href="/blog" className="hover:text-white">Últimas noticias</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-4">Legal</h5>
        <ul className="space-y-2 text-gray-300">
          <li><a href="/legal-notice" className="hover:text-white">Aviso Legal</a></li>
          <li><a href="/privacy-policy" className="hover:text-white">Política de Privacidade</a></li>
          <li><a href="/cookie-policy" className="hover:text-white">Política de Cookies</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p className="text-xs">&copy; {new Date().getFullYear()} Asociación Petís. Todos los derechos reservados. Creado por <a href="https://conexos.es" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--color-primary-hover)] transition-colors">Conexos</a>
          </p>
    </div>
  </div>
</footer>
    </div>
  );
}