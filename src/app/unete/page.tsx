import Link from "next/link";
import AssociationForm from "./AssociationForm";

export default function Unete() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-accent">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Únete á Asociación
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Asóciate de balde e forma parte da nosa comunidade de apoio
          </p>
        </div>
      </section>

      {/* Información de asociación */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 warm-shadow">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-accent text-3xl">🤝</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Asóciate de balde
              </h2>
              <p className="text-xl text-gray-600">
                A asociación é completamente gratuita e aberta a todas as familias
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Por que asociarse?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <div>
                      <strong className="text-gray-900">Apoio emocional:</strong>
                      <p className="text-gray-700">Encontra comprensión e acompañamento</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <div>
                      <strong className="text-gray-900">Comunidade:</strong>
                      <p className="text-gray-700">Forma parte dunha tribo que te entende</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <div>
                      <strong className="text-gray-900">Actividades:</strong>
                      <p className="text-gray-700">Acceso a reunións, obradoiros e eventos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <div>
                      <strong className="text-gray-900">Información:</strong>
                      <p className="text-gray-700">Recursos e información sobre crianza</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <div>
                      <strong className="text-gray-900">Gratuíto:</strong>
                      <p className="text-gray-700">Non hai custos de asociación</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Como asociarse
                </h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-light to-accent rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">1. Ven a unha reunión</h4>
                    <p className="text-gray-700">
                      Asiste a unha das nosas reunións semanais para coñecernos 
                      e ver se te sentes cómoda na comunidade.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-light to-accent rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">2. Solicita a asociación</h4>
                    <p className="text-gray-700">
                      Podes solicitar asociarte en calquera momento, 
                      falando con calquera membro da xunta directiva.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-light to-accent rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">3. ¡Benvida á tribo!</h4>
                    <p className="text-gray-700">
                      Unha vez asociada, terás acceso a todas as actividades 
                      e serás parte da nosa comunidade de apoio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de asociación */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 warm-shadow">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Únete
            </h2>
            <AssociationForm />
          </div>
        </div>
      </section>

      {/* Horarios de reuniones */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ven a coñecernos
            </h2>
            <p className="text-xl text-gray-600">
              As reunións son abertas a todas as familias, asociadas ou non
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-light to-accent rounded-2xl p-8 text-center warm-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Reunión de Mañá
              </h3>
              <p className="text-2xl font-bold text-green-600 mb-2">10:30 - 12:30</p>
              <p className="text-gray-700">Mércores</p>
            </div>

            <div className="bg-gradient-to-br from-light to-accent rounded-2xl p-8 text-center warm-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Reunión de Tarde
              </h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">17:00 - 19:00</p>
              <p className="text-gray-700">Mércores</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📍 Onde nos atopas
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Espazo de Momentos</strong><br />
                Rúa Alfredo García Alen, 6<br />
                36002 Pontevedra
              </p>
              <p className="text-sm text-gray-500">
                Non é necesario apuntarse previamente. Podes vir cos teus petís.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-light">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Únete á nosa tribo
          </h3>
          <p className="text-xl text-gray-800 mb-8">
            Forma parte dunha comunidade que entende as túas necesidades 
            e te apoia en cada paso da crianza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/actividades"
              className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors border-2 border-[var(--color-accent)] btn-pulse"
            >
              Ver Actividades
            </Link>
            <Link 
              href="/contacto"
              className="bg-white text-[var(--color-accent)] font-semibold py-4 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors border-2 border-[var(--color-accent)] btn-pulse"
            >
              Pregunta Información
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
            <p className="text-xs">&copy; 2025 Asociación Petís. Todos os dereitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 