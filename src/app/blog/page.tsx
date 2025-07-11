import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-accent">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As últimas noticias e novidades da Asociación Petís
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-primary to-light p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌿✨</div>
                  <p className="text-lg text-gray-800">Imaxe da reunión</p>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center text-sm text-[var(--color-accent)] mb-4">
                  <span className="bg-[#f7f6d9] text-[#a86e2c] px-3 py-1 rounded-full text-xs font-medium">
                    Destacado
                  </span>
                  <span className="ml-4">Outubro 2024</span>
                </div>
                <h2 className="text-2xl font-bold text-main mb-4">
                  Reunións Outubro - A tribo está de volta!
                </h2>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  🌿✨ A tribo está de volta! ✨🌿 Despois dun pequeno descanso, retomamos as nosas 
                  reunións de crianza para compartir experiencias, inquedanzas e moito apoio! 🤗
                </p>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  🗓 A partires da próxima semana, reunirémonos cada martes no acolledor local 
                  de Espazo de Momentos.
                </p>
                <Link 
                  href="/blog/reunions-outubro"
                  className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                >
                  Ler máis →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Últimas noticias
            </h2>
            <p className="text-xl text-gray-600">
              Mantente informado das nosas actividades e novidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📅</div>
                  <p className="text-sm text-gray-800">Imaxe da actividade</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-accent)] mb-3">
                  <span>Setembro 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-main mb-3">
                  Reunións Setembro
                </h3>
                <p className="text-gray-800 mb-4">
                  Adiantamos as datas das reunións que temos previstas para o mes de Setembro de 2024. 
                  Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra.
                </p>
                <Link 
                  href="/blog/reunions-setembro"
                  className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌿</div>
                  <p className="text-sm text-gray-800">Imaxe do picnic</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-accent)] mb-3">
                  <span>Xullo 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-main mb-3">
                  Ruta Lerez + Picnic
                </h3>
                <p className="text-gray-800 mb-4">
                  Con este bo tempo apetece xuntarse e desfrutar cas crianzas ao aire libre. 
                  Un paseo polo río Lerez para abrir o apetito e facer xuntas un picnic na praia fluvial.
                </p>
                <Link 
                  href="/blog/ruta-lerez-picnic"
                  className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎓</div>
                  <p className="text-sm text-gray-800">Imaxe do curso</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-accent)] mb-3">
                  <span>Setembro 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-main mb-3">
                  Continuamos nun novo curso
                </h3>
                <p className="text-gray-800 mb-4">
                  Péchase un curso e comezamos outro. Facémolo cheas de ilusións, 
                  forzas renovadas e moitas ganas de seguir acompañando ás familias.
                </p>
                <Link 
                  href="/blog/novo-curso"
                  className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 4 */}
            <article className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🤗</div>
                  <p className="text-sm text-gray-800">Imaxe da comunidade</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-accent)] mb-3">
                  <span>Xaneiro 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-main mb-3">
                  As nosas reunións
                </h3>
                <p className="text-gray-800 mb-4">
                  As reunións da tribo seguen sendo momentos que nos impulsan e motivan 
                  para seguir adiante. É xenial que cada mércores, semana a semana desde 
                  fai máis dun ano, teñamos a oportunidade de abrazarnos, compartir, 
                  emocionarnos, chorar, rir e descubrir outras experiencias de maternidade.
                </p>
                <Link 
                  href="/blog/nosas-reunions"
                  className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 5 */}
            <article className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">👋</div>
                  <p className="text-sm text-gray-800">Imaxe de benvida</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-accent)] mb-3">
                  <span>Xaneiro 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-main mb-3">
                  Benvido á asociación!
                </h3>
                <p className="text-gray-800 mb-4">
                  Tiñamos ganas, forzas e ilusión. Tiñamos a necesidade dunha tribo. 
                  Tiñamos un grupo de petises con coidadores desexando compartir emocións e experiencias.
                </p>
                <Link 
                  href="/blog/benvido-asociacion"
                  className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 6 */}
            <article className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📋</div>
                  <p className="text-sm text-gray-800">Imaxe do calendario</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-accent)] mb-3">
                  <span>Xuño 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-main mb-3">
                  Reunións Xuño
                </h3>
                <p className="text-gray-800 mb-4">
                  Adiantamos as datas das reunións que temos previstas para o mes de Xuño de 2024. 
                  En cor verde as reunións de mañá de 10:30 a 12:30 e en cor vermella as reunións 
                  de tarde de 17:00 a 19:00 horas.
                </p>
                <Link 
                  href="/blog/reunions-xuno"
                  className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                >
                  Ler máis →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-light to-accent rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Mantente informado
            </h3>
            <p className="text-xl text-gray-800 mb-8">
              Recibe as últimas noticias e novidades da asociación
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="O teu email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-main bg-white border-2 border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
                <button className="bg-white text-[var(--color-accent)] font-semibold px-6 py-3 rounded-r-lg border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Únete á nosa comunidade
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Forma parte dunha tribo que entende as túas necesidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/unete"
              className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200 inline-block border-2 border-[var(--color-accent)]"
            >
              Asóciate Agora
            </Link>
            <Link 
              href="/actividades"
              className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200 border-2 border-[var(--color-accent)]"
            >
              Ver Actividades
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
                <li><Link href="/legal" className="hover:text-white">Aviso Legal</Link></li>
                <li><Link href="/privacidade" className="hover:text-white">Política de Privacidade</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Política de Cookies</Link></li>
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