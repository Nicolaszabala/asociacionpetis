import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
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
              <div className="md:w-1/2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-light)] p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌿✨</div>
                  <p className="text-lg text-[var(--color-text-secondary)]">Imaxe da reunión</p>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center text-sm text-[var(--color-text-secondary)] mb-4">
                  <span className="bg-[#f7f6d9] text-[#a86e2c] px-3 py-1 rounded-full text-xs font-medium">
                    Destacado
                  </span>
                  <span className="ml-4">Outubro 2024</span>
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">
                  Reunións Outubro - A tribo está de volta!
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  🌿✨ A tribo está de volta! ✨🌿 Despois dun pequeno descanso, retomamos as nosas 
                  reunións de crianza para compartir experiencias, inquedanzas e moito apoio! 🤗
                </p>
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  🗓 A partires da próxima semana, reunirémonos cada martes no acolledor local 
                  de Espazo de Momentos.
                </p>
                <Link 
                  href="/blog/reunions-outubro"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-semibold"
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
            <article className="bg-white rounded-2xl border border-[var(--color-primary)] overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-light)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📅</div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Imaxe da actividade</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-text-secondary)] mb-3">
                  <span>Setembro 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">
                  Reunións Setembro
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Adiantamos as datas das reunións que temos previstas para o mes de Setembro de 2024. 
                  Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra.
                </p>
                <Link 
                  href="/blog/reunions-setembro"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-semibold text-sm"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white rounded-2xl border border-[var(--color-primary)] overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-light)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌿</div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Imaxe do picnic</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-text-secondary)] mb-3">
                  <span>Xullo 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">
                  Ruta Lerez + Picnic
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Con este bo tempo apetece xuntarse e desfrutar cas crianzas ao aire libre. 
                  Un paseo polo río Lerez para abrir o apetito e facer xuntas un picnic na praia fluvial.
                </p>
                <Link 
                  href="/blog/ruta-lerez-picnic"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-semibold text-sm"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white rounded-2xl border border-[var(--color-primary)] overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-light)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎓</div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Imaxe do curso</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-text-secondary)] mb-3">
                  <span>Setembro 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">
                  Continuamos nun novo curso
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Péchase un curso e comezamos outro. Facémolo cheas de ilusións, 
                  forzas renovadas e moitas ganas de seguir acompañando ás familias.
                </p>
                <Link 
                  href="/blog/novo-curso"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-semibold text-sm"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 4 */}
            <article className="bg-white rounded-2xl border border-[var(--color-primary)] overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-light)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🤗</div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Imaxe da comunidade</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-text-secondary)] mb-3">
                  <span>Xaneiro 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">
                  As nosas reunións
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  As reunións da tribo seguen sendo momentos que nos impulsan e motivan 
                  para seguir adiante. É xenial que cada mércores, semana a semana desde 
                  fai máis dun ano, teñamos a oportunidade de abrazarnos, compartir, 
                  emocionarnos, chorar, rir e descubrir outras experiencias de maternidade.
                </p>
                <Link 
                  href="/blog/nosas-reunions"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-semibold text-sm btn-pulse"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 5 */}
            <article className="bg-white rounded-2xl border border-[var(--color-primary)] overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-light)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">👋</div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Imaxe de benvida</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-text-secondary)] mb-3">
                  <span>Xaneiro 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">
                  Benvido á asociación!
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Tiñamos ganas, forzas e ilusión. Tiñamos a necesidade dunha tribo. 
                  Tiñamos un grupo de petises con coidadores desexando compartir emocións e experiencias.
                </p>
                <Link 
                  href="/blog/benvido-asociacion"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-semibold text-sm btn-pulse"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 6 */}
            <article className="bg-white rounded-2xl border border-[var(--color-primary)] overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-light)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📋</div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Imaxe do calendario</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-text-secondary)] mb-3">
                  <span>Xuño 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">
                  Reunións Xuño
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Adiantamos as datas das reunións que temos previstas para o mes de Xuño de 2024. 
                  En cor verde as reunións de mañá de 10:30 a 12:30 e en cor vermella as reunións 
                  de tarde de 17:00 a 19:00 horas.
                </p>
                <Link 
                  href="/blog/reunions-xuno"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-semibold text-sm btn-pulse"
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
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-light)] rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Mantente informado
            </h3>
            <p className="text-xl text-[var(--color-light)] mb-8">
              Recibe as últimas noticias e novidades da asociación
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="O teu email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-[var(--color-text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-text-main)]"
                />
                <button className="bg-white text-[#CF996E] font-semibold px-6 py-3 rounded-r-lg hover:bg-[#BFB73F] hover:border-[#BFB73F] transition-colors border-2 border-[#CF996E]">
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
              className="bg-[#CF996E] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#BFB73F] hover:border-[#BFB73F] transition-colors border-2 border-[#CF996E]"
            >
              Asóciate Agora
            </Link>
            <Link 
              href="/actividades"
              className="bg-white text-[#CF996E] font-semibold py-4 px-8 rounded-full hover:bg-[#BFB73F] hover:border-[#BFB73F] transition-colors border-2 border-[#CF996E]"
            >
              Ver Actividades
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 