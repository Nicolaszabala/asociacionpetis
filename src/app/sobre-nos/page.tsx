import Link from "next/link";

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-accent">
      {/* Hero Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="text-center">
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
              <ul className="text-lg text-gray-700 space-y-2 text-left">
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  <strong>Empatía:</strong> Comprender e acompañar cada experiencia única
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  <strong>Respeto:</strong> Valorar cada decisión e estilo de crianza
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  <strong>Comunidade:</strong> Crear lazos e apoios entre familias
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  <strong>Inclusión:</strong> Acolher a todas as familias sen xulgar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O que facemos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que facemos
            </h2>
            <p className="text-xl text-gray-600">
              Actividades e servizos que ofrecemos ás familias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Reunións de Apoio
              </h3>
              <p className="text-gray-700 text-center">
                Reunións semanais onde as familias poden compartir experiencias, 
                inquedanzas e recibir apoio nun ambiente seguro e acolledor.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Obradoiros e Talleres
              </h3>
              <p className="text-gray-700 text-center">
                Actividades educativas sobre crianza, lactancia e desenvolvemento 
                infantil, así como talleres creativos para familias.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Actividades ao Aire Libre
              </h3>
              <p className="text-gray-700 text-center">
                Paseos, picnics e actividades na natureza para disfrutar en familia 
                e crear lazos entre as crianzas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-light to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Únete á nosa comunidade
          </h3>
          <p className="text-xl text-gray-800 mb-8">
            Forma parte dunha tribo que entende as túas necesidades e te apoia 
            en cada paso da crianza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/unete"
              className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200 border-2 border-[var(--color-accent)]"
            >
              Asóciate Agora
            </Link>
            <Link 
              href="/contacto"
              className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200 border-2 border-[var(--color-accent)]"
            >
              Contacta Conosco
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