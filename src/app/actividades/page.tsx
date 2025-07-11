import Link from "next/link";
import React from "react";
export default function Actividades() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-accent">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Actividades
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reunións, obradoiros e actividades para familias
          </p>
        </div>
      </section>
    
      {/* Reunións Section */}
      <section className="py-20">
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
                  Mentres, por suposto, as nosas petís gozan xuntas. Sempre máxicas e 
                  sempre sorprendentes.
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
                      <span className="text-green-600 font-semibold mr-2">Mañá:</span>
                      <span className="text-gray-700">10:30 - 12:30</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 font-semibold mr-2">Tarde:</span>
                      <span className="text-gray-700">17:00 - 19:00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    📍 Onde?
                  </h4>
                  <p className="text-gray-700">
                    <strong>Espazo de Momentos</strong><br />
                    Rúa Alfredo García Alen, 6<br />
                    36002 Pontevedra
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    💡 Importante
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• As reunións son abertas a todas as familias</li>
                    <li>• Non é necesario apuntarse previamente</li>
                    <li>• Podes vir cos teus petís</li>
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
                Reunións semanais cada mércores con dous horarios: mañá (10:30-12:30) 
                e tarde (17:00-19:00) para adaptarse ás necesidades de cada familia.
              </p>
              <button className="mt-6 bg-white text-[var(--color-accent)] font-semibold py-3 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors border-2 border-[var(--color-accent)]">
                Ver próximas reunións
              </button>
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
                Paseos, picnics e actividades na natureza para disfrutar en familia 
                e crear lazos entre as crianzas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Próximas actividades */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Próximas actividades
            </h2>
            <p className="text-xl text-gray-600">
              Mantente informado das nosas próximas actividades
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gray-900 text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reunións semanais
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                
              
              </p>
            </div> {/* cierre .text-center */}
          </div> {/* cierre .bg-white... */}
        </div> {/* cierre .max-w-7xl... */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Asociación Petís</h4>
              <p className="text-gray-300">
                Apoio á crianza e á lactancia en Pontevedra
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <a href="mailto:info@asociacionpetis.org" className="flex items-center hover:text-accent transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1" /></svg>
                  info@asociacionpetis.org
                </a>
                <a href="https://www.instagram.com/a.petis/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm4.25 2.25A6.25 6.25 0 1018.25 12 6.25 6.25 0 0012 5.75zm0 1.5A4.75 4.75 0 1116.75 12 4.75 4.75 0 0112 7.25zm6.5 1.25a1.25 1.25 0 11-1.25-1.25A1.25 1.25 0 0118.5 8.5z" />
                  </svg>
                </a>
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
                <li><a href="/legal" className="hover:text-white">Aviso Legal</a></li>
                <li><a href="/privacidade" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="/cookies" className="hover:text-white">Política de Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Asociación Petís. Todos os dereitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}