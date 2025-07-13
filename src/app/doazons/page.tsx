import Link from "next/link";

export default function DoazonsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Axúdanos a seguir medrando
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            As túas doazóns permítennos organizar máis actividades, apoiar a máis familias e crear unha comunidade máis forte. 
            Grazas ao teu apoio, Petís pode seguir sendo un espazo seguro e acolledor para todas as familias.
          </p>
            <a
            href="mailto:info@asociacionpetis.org"
            className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200 border-2 border-[var(--color-accent)]"
            >
            Contacto
            </a>
          <p className="text-gray-500 mt-6 text-sm">
            Tamén podes contactar connosco para outras formas de colaboración:{" "}
            <a href="mailto:info@asociacionpetis.org" className="underline text-[var(--color-accent)]">
              info@asociacionpetis.org
            </a>
          </p>
          <div className="mt-10">
            <Link href="/" className="text-[var(--color-accent)] underline">
              ← Volver á páxina principal
            </Link>
          </div>
        </div>
      </section>
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

