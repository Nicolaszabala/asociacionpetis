import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-accent">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Asociación Petís
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
                Apoio á Crianza e á Lactancia
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Tiñamos ganas, forzas e ilusión. Tiñamos a necesidade dunha tribo. 
                Así nace Petís, o teu espazo seguro en Pontevedra para que nunca máis 
                te sintas soa, insegura ou xulgada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/unete"
                  className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200 border-2 border-[var(--color-accent)]"
                >
                  Únete á Asociación
                </Link>
                <Link 
                  href="/actividades"
                  className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200 border-2 border-[var(--color-accent)]"
                >
                  Ver Actividades
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl fade-in-image">
                <Image
                  src="/portada_petis.jpg"
                  alt="Foto de familias de la Asociación Petís en un picnic al aire libre"
                  width={600}
                  height={400}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-secondary rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-light rounded-full opacity-30"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              O que ofrecemos
            </h3>
            <p className="text-xl text-gray-600">
              Unha comunidade de apoio para familias con crianzas pequenas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white border border-accent warm-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 56 56"
                    className="w-10 h-10"
                  >
                    {/* Cabezas */}
                    <circle cx="16" cy="21" r="5" fill="#CF996E"/>
                    <circle cx="40" cy="21" r="5" fill="#CF996E"/>
                    <circle cx="28" cy="33" r="6" fill="#CF996E"/>
                    {/* Cuerpos */}
                    <ellipse cx="16" cy="31" rx="7" ry="3.5" fill="#CF996E" />
                    <ellipse cx="40" cy="31" rx="7" ry="3.5" fill="#CF996E" />
                    <ellipse cx="28" cy="44" rx="10" ry="5" fill="#CF996E" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-text-main mb-4">Grupo de Apoio</h4>
              <p className="text-text-secondary">
                Reunións semanais onde compartir experiencias, inquedanzas e moito apoio 
                nun ambiente acolledor e seguro.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white border border-accent warm-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">✏️</span>
              </div>
              <h4 className="text-xl font-semibold text-text-main mb-4">Obradoiros</h4>
              <p className="text-text-secondary">
                 Actividades educativas e lúdicas para familias, dende talleres de crianza ata actividades creativas cos petises.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white border border-accent warm-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <h4 className="text-xl font-semibold text-text-main mb-4">Actividades ao Aire Libre</h4>
              <p className="text-text-secondary">
                Paseos, picnics e actividades na natureza para disfrutar en familia 
                e crear lazos entre as crianzas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-6">
            Únete á nosa tribo
          </h3>
          <p className="text-xl text-gray-900 mb-8">
            Asóciate de balde e forma parte dunha comunidade que entende as túas 
            necesidades e te apoia en cada paso da crianza.
          </p>
          <Link 
            href="/unete"
            className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200 inline-block border-2 border-[var(--color-accent)]"
          >
            Asóciate Agora
          </Link>
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
            <p className="text-xs">&copy; 2025 Asociación Petís. Todos os dereitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}