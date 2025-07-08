import Link from "next/link";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
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
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
                  <div className="w-12 h-12 bg-[var(--color-primary-hover)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@asociacionpetis.org" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                        info@asociacionpetis.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
                  className="w-full bg-pink-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-pink-700 transition-colors duration-200"
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
      <section className="py-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-light)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ven a coñecernos
          </h3>
          <p className="text-xl text-[#f7f6d9] mb-8">
            A mellor forma de coñecernos é asistir a unha das nosas reunións
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/actividades"
              className="bg-white text-[var(--color-primary)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-primary-hover)] hover:border-[var(--color-primary-hover)] transition-colors border-2 border-[var(--color-primary)] btn-pulse"
            >
              Ver Actividades
            </Link>
            <Link 
              href="/unete"
              className="bg-[var(--color-primary)] text-white font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-primary-hover)] hover:border-[var(--color-primary-hover)] transition-colors border-2 border-[var(--color-primary)] btn-pulse"
            >
              Únete á Asociación
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 