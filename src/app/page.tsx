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
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/reunion-petis.jpeg"
                  alt="Foto de familias de la Asociación Petís en un picnic al aire libre"
                  fill
                  style={{ objectFit: "cover" }}
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
                <span className="text-white text-2xl">👥</span>
              </div>
              <h4 className="text-xl font-semibold text-text-main mb-4">Grupo de Apoio</h4>
              <p className="text-text-secondary">
                Reunións semanais onde compartir experiencias, inquedanzas e moito apoio 
                nun ambiente acolledor e seguro.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white border border-accent warm-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-semibold text-text-main mb-4">Obradoiros</h4>
              <p className="text-text-secondary">
                Actividades educativas e lúdicas para familias, desde talleres de 
                crianza ata actividades creativas cos petís.
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
