import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Asociación Petís
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-8">
                Apoio á Crianza e á Lactancia
              </h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Tiñamos ganas, forzas e ilusión. Tiñamos a necesidade dunha tribo. 
                Así nace Petís, o teu espazo seguro en Pontevedra para que nunca máis 
                te sintas soa, insegura ou xulgada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/unete"
                  className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Únete á Asociación
                </Link>
                <Link 
                  href="/actividades"
                  className="bg-white hover:bg-gray-50 text-pink-600 font-semibold py-4 px-8 rounded-full border-2 border-pink-600 transition-colors duration-200"
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
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
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
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Grupo de Apoio</h4>
              <p className="text-gray-700">
                Reunións semanais onde compartir experiencias, inquedanzas e moito apoio 
                nun ambiente acolledor e seguro.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Obradoiros</h4>
              <p className="text-gray-700">
                Actividades educativas e lúdicas para familias, desde talleres de 
                crianza ata actividades creativas cos petís.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Actividades ao Aire Libre</h4>
              <p className="text-gray-700">
                Paseos, picnics e actividades na natureza para disfrutar en familia 
                e crear lazos entre as crianzas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Únete á nosa tribo
          </h3>
          <p className="text-xl text-pink-100 mb-8">
            Asóciate de balde e forma parte dunha comunidade que entende as túas 
            necesidades e te apoia en cada paso da crianza.
          </p>
          <Link 
            href="/unete"
            className="bg-white text-pink-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 inline-block"
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
