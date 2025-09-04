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
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Horarios de reunións
                    </h3>
                    <div className="text-gray-700">
                      <p><strong>Mércores:</strong></p>
                      <p>Pontevedra: Mércores 17:00 - 19:00</p>
                      <p>O Salnés: Martes 17:00 - 18:45</p>
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
              Por suposto! As reunións están pensadas para que as familias poidan asistir xuntas. Os petises gozan xuntos mentres as familias comparten experiencias.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿A asociación ten algún custo?
              </h3>
              <p className="text-gray-700">
                Non, a asociación é completamente gratuita. Non hai custos de 
                asociación nin de participación nas actividades.  Existe a posibilidade de acceder a certas vantaxes por ser socia de pago, unha modalidade na que se paga una cantidade fixa e anual por familia de maneira voluntaria e da acceso a descontos nalgunhas tendas de Pontevedra e acceso preferente aos obradoiros que ofrece a asociación. 
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
  <p className="text-xs">&copy; {new Date().getFullYear()} Asociación Petís. Todos los derechos reservados. Creado por <a href="https://conexos.es" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--color-primary-hover)] transition-colors">Conexos</a>
          </p>    </div>
  </div>
</footer>
    </div>
  );
} 