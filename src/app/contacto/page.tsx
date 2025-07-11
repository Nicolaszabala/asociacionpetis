import Link from "next/link";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-accent">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Póñete en contacto conosco. Estamos aquí para axudarte.
          </p>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="bg-white rounded-2xl shadow-xl p-8 warm-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Información de contacto
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Onde nos atopas
                    </h3>
                    <p className="text-gray-700">
                      <strong>Espazo de Momentos</strong><br />
                      Rúa Alfredo García Alen, 6<br />
                      36002 Pontevedra
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Horarios de reunións
                    </h3>
                    <div className="text-gray-700">
                      <p><strong>Mércores:</strong></p>
                      <p>Mañá: 10:30 - 12:30</p>
                      <p>Tarde: 17:00 - 19:00</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@asociacionpetis.org" className="text-accent hover:text-primary-hover">
                        info@asociacionpetis.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Redes sociais
                    </h3>
                    <p className="text-gray-700">
                      Síguenos nas nosas redes sociais para estar ao día das nosas actividades
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="bg-white rounded-2xl shadow-xl p-8 warm-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Envíanos unha mensaxe
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="O teu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="o.teu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="informacion">Información xeral</option>
                    <option value="asociacion">Asociación</option>
                    <option value="actividades">Actividades</option>
                    <option value="voluntariado">Voluntariado</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaxe" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaxe
                  </label>
                  <textarea
                    id="mensaxe"
                    name="mensaxe"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Escribe a túa mensaxe aquí..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors border-2 border-[var(--color-accent)] btn-pulse"
                >
                  Enviar mensaxe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Respostas ás preguntas máis comúns
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Podo asistir ás reunións sen estar asociada?
              </h3>
              <p className="text-gray-700">
                Si, as reunións son abertas a todas as familias, asociadas ou non. 
                Podes vir a coñecernos antes de decidir asociarte.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Podo levar os meus fillos ás reunións?
              </h3>
              <p className="text-gray-700">
                Por suposto! As reunións están pensadas para que as familias 
                poidan asistir xuntas. Os petís gozan xuntos mentres as familias 
                comparten experiencias.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿A asociación ten algún custo?
              </h3>
              <p className="text-gray-700">
                Non, a asociación é completamente gratuita. Non hai custos de 
                asociación nin de participación nas actividades.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Como me poño en contacto con vos?
              </h3>
              <p className="text-gray-700">
                Podes contactarnos por email, asistir a unha das nosas reunións 
                ou usar o formulario de contacto desta páxina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-light to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ven a coñecernos
          </h3>
          <p className="text-xl text-gray-800 mb-8">
            A mellor forma de coñecernos é asistir a unha das nosas reunións
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/actividades"
              className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors border-2 border-[var(--color-accent)] btn-pulse"
            >
              Ver Actividades
            </Link>
            <Link 
              href="/unete"
              className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors border-2 border-[var(--color-accent)] btn-pulse"
            >
              Únete á Asociación
            </Link>
          </div>
        </div>
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