import Link from "next/link";
import React from "react";
export default function Actividades() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-accent">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Actividades
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reunións, obradoiros e actividades para familias
          </p>
        </div>
      </section>
    
      {/* Reunións Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              As nosas reunións
            </h2>
            <p className="text-xl text-gray-600">
              Reunións semanais onde compartir experiencias e recibir apoio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información general */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🌿✨ A tribo está de volta! ✨🌿
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Despois dun pequeno descanso, retomamos as nosas reunións de crianza 
                  para compartir experiencias, inquedanzas e moito apoio! 🤗
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  As reunións da tribo seguen sendo momentos que nos impulsan e motivan 
                  para seguir adiante. É xenial que cada mércores, semana a semana desde 
                  fai máis dun ano, teñamos a oportunidade de abrazarnos, compartir, 
                  emocionarnos, chorar, rir e descubrir outras experiencias de maternidade.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mentres, por suposto, as nosas petís gozan xuntas. Sempre máxicas e 
                  sempre sorprendentes.
                </p>
              </div>
            </div>

            {/* Horarios y ubicación */}
            <div className="bg-gradient-to-br from-light to-accent rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📍 Información práctica
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    🗓 Horarios
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-green-600 font-semibold mr-2">Mañá:</span>
                      <span className="text-gray-700">10:30 - 12:30</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 font-semibold mr-2">Tarde:</span>
                      <span className="text-gray-700">17:00 - 19:00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    📍 Onde?
                  </h4>
                  <p className="text-gray-700">
                    <strong>Espazo de Momentos</strong><br />
                    Rúa Alfredo García Alen, 6<br />
                    36002 Pontevedra
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    💡 Importante
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• As reunións son abertas a todas as familias</li>
                    <li>• Non é necesario apuntarse previamente</li>
                    <li>• Podes vir cos teus petís</li>
                    <li>• Ambiente acolledor e seguro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de actividades */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tipos de actividades
            </h2>
            <p className="text-xl text-gray-600">
              Diferentes opcións para participar na comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-light to-accent warm-shadow">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Reunións Regulares
              </h3>
              <p className="text-gray-700">
                Reunións semanais cada mércores con dous horarios: mañá (10:30-12:30) 
                e tarde (17:00-19:00) para adaptarse ás necesidades de cada familia.
              </p>
              <button className="mt-6 bg-white text-[var(--color-accent)] font-semibold py-3 px-8 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors border-2 border-[var(--color-accent)]">
                Ver próximas reunións
              </button>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-light to-accent warm-shadow">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Obradoiros Especiais
              </h3>
              <p className="text-gray-700">
                Talleres educativos sobre crianza, lactancia, desenvolvemento infantil 
                e actividades creativas para familias.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-light to-accent warm-shadow">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Actividades ao Aire Libre
              </h3>
              <p className="text-gray-700">
                Paseos, picnics e actividades na natureza para disfrutar en familia 
                e crear lazos entre as crianzas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Próximas actividades */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Próximas actividades
            </h2>
            <p className="text-xl text-gray-600">
              Mantente informado das nosas próximas actividades
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gray-900 text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reunións semanais
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                
              
              </p>
            </div> {/* cierre .text-center */}
          </div> {/* cierre .bg-white... */}
        </div> {/* cierre .max-w-7xl... */}
      </section>
    </div>
  );
}