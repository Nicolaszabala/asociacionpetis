import Link from "next/link";
import Image from "next/image";
import { articlesArr } from "./articles";

const [featured, ...rest] = articlesArr;

export default function Blog() {
  // Convertimos el objeto en array y ordenamos por fecha descendente
  // La lógica de parseGalicianDate ya no es necesaria, ya que los artículos son estáticos
  // const articlesArr: Article[] = Object.entries(blogArticles)
  //   .map(([slug, data]) => ({ slug, ...(data as any) }))
  //   .sort((a, b) => parseGalicianDate(b.date).getTime() - parseGalicianDate(a.date).getTime());
  // const [featured, ...rest] = articlesArr;
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
      {featured && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="relative w-full h-64 bg-gradient-to-br from-primary to-light flex items-center justify-center overflow-hidden md:w-1/2 fade-in-image">
                  <Image
                    src={featured.imageUrl ? featured.imageUrl : "/blog/default.jpg"}
                    alt={featured.title ? featured.title : "Artigo destacado"}
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
                    <span className="ml-4">{featured.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-main mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-gray-800 mb-6 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${featured.slug}`}
                    className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                  >
                    Ler máis →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
            {rest.map(article => (
              <article key={article.slug} className="bg-white rounded-2xl border border-primary overflow-hidden hover:shadow-lg transition-shadow duration-200 warm-shadow">
                <div className="relative w-full h-48 bg-gradient-to-br from-primary to-light flex items-center justify-center overflow-hidden fade-in-image">
                  <Image
                    src={article.imageUrl || "/blog/default.jpg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[var(--color-accent)] mb-3">
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-main mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-800 mb-4">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] font-semibold py-2 px-4 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200"
                  >
                    Ler máis →
                  </Link>
                </div>
              </article>
            ))}
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
                <li><Link href="/legal" className="hover:text-white">Aviso Legal</Link></li>
                <li><Link href="/privacidade" className="hover:text-white">Política de Privacidade</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Política de Cookies</Link></li>
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
