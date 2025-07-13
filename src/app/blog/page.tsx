import Link from "next/link";
import Image from "next/image";

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
              <div className="relative w-full h-64 bg-gradient-to-br from-primary to-light flex items-center justify-center overflow-hidden md:w-1/2">
                <Image
                  src="/blog/reunion-outubro.jpg"
                  alt="Reunións Outubro - A tribo está de volta!"
                  fill
                  className="object-cover"
                  priority
                />
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
              <div className="relative w-full h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center overflow-hidden">
                <Image
                  src="/blog/reunion-setembro.jpg"
                  alt="Reunións Setembro"
                  fill
                  className="object-cover"
                  priority
                />
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
              <div className="relative w-full h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center overflow-hidden">
                <Image
                  src="/blog/nosas-reunions.jpg"
                  alt="As nosas reunións"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-accent)] mb-3">
                  <span>15 Xullo 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-main mb-3">
                  As nosas reunións
                </h3>
                <p className="text-gray-800 mb-4">
                  As reunións da tribo seguen sendo momentos que nos impulsan e motivan para seguir adiante. 
                  É xenial que cada mércores, semana a semana desde fai máis dun ano, teñamos a oportunidade de 
                  abrazarnos, compartir, emocionarnos, chorar, rir e descubrir outras experiencias de maternidade.
                </p>
                <Link 
                  href="/blog/nosas-reunions"
                  className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="relative w-full h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center overflow-hidden">
                <Image
                  src="/blog/reunions-xullo.jpg"
                  alt="Reunións Xullo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-accent)] mb-3">
                  <span>1 Xullo 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-main mb-3">
                  Reunións Xullo
                </h3>
                <p className="text-gray-800 mb-4">
                  Adiantamos as datas das reunións que temos previstas para o mes de Xullo de 2024. 
                  Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. 
                  Estade atentos que co bo tempo seguramente fagamos algunha actividade ao aire libre.
                </p>
                <Link 
                  href="/blog/reunions-xullo"
                  className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 4 */}
            <article className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="relative w-full h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center overflow-hidden">
                <Image
                  src="/blog/ruta-lerez-picnic.jpg"
                  alt="Ruta Lerez + Picnic"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[var(--color-accent)] mb-3">
                  <span>29 Maio 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-main mb-3">
                  Ruta Lerez + Picnic
                </h3>
                <p className="text-gray-800 mb-4">
                  Ola familias! Con este bo tempo apetece xuntarse e desfrutar cas crianzas ao aire libre. 
                  Así que vos propoñemos un plan para este domingo: un paseo polo río Lerez para abrir 
                  o apetito e facer xuntas un picnic na praia fluvial.
                </p>
                <Link 
                  href="/blog/ruta-lerez-picnic"
                  className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                >
                  Ler máis →
                </Link>
              </div>
            </article>

            {/* Post 5 */}
            <article className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="relative w-full h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center overflow-hidden">
                <Image
                  src="/blog/novo-curso.jpg"
                  alt="Continuamos nun novo curso"
                  fill
                  className="object-cover"
                  priority
                />
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

            {/* Post 6 */}
            <article className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
              <div className="relative w-full h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center overflow-hidden">
                <Image
                  src="/blog/benvido-asociacion.jpg"
                  alt="Benvido á asociación!"
                  fill
                  className="object-cover"
                  priority
                />
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
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                  info@asociacionpetis.org
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
                <li><Link href="/sobre-nos" className="hover:text-accent transition-colors">Sobre nós</Link></li>
                <li><Link href="/actividades" className="hover:text-accent transition-colors">Actividades</Link></li>
                <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servizos</h4>
              <ul className="space-y-2">
                <li><Link href="/actividades" className="hover:text-accent transition-colors">Reunións semanais</Link></li>
                <li><Link href="/actividades" className="hover:text-accent transition-colors">Apoio á lactancia</Link></li>
                <li><Link href="/actividades" className="hover:text-accent transition-colors">Actividades familiares</Link></li>
                <li><Link href="/contacto" className="hover:text-accent transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Asociación Petís. Todos os dereitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 