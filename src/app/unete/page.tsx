import Link from "next/link";

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
    </div>
  );
} 