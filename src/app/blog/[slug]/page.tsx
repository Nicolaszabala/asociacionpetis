import Link from "next/link";
import { notFound } from "next/navigation";

// Datos de los artículos (esto vendrá de Drupal en el futuro)
const articles = {
  "reunions-outubro": {
    title: "Reunións Outubro - A tribo está de volta!",
    date: "Outubro 2024",
    category: "Reunións",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        🌿✨ A tribo está de volta! ✨🌿 Despois dun pequeno descanso, retomamos as nosas 
        reunións de crianza para compartir experiencias, inquedanzas e moito apoio! 🤗
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        🗓 A partires da próxima semana, reunirémonos cada martes no acolledor local 
        de Espazo de Momentos.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        📍 Onde? @espaciodemomentos: Rúa Alfredo García Alen, 6, 36002 Pontevedra
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        As reunións son abertas a todas as familias que queiran participar. Non é necesario 
        apuntarse previamente, só vir e disfrutar da compañía da nosa comunidade.
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        Esperámosvos con moita ilusión para seguir crecendo xuntos como tribo! 💕
      </p>
    `,
    excerpt: "A tribo está de volta! Retomamos as nosas reunións de crianza para compartir experiencias, inquedanzas e moito apoio!",
    image: "🌿✨"
  },
  "reunions-setembro": {
    title: "Reunións Setembro",
    date: "Setembro 2024",
    category: "Reunións",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Adiantamos as datas das reunións que temos previstas para o mes de Setembro de 2024.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Esperámosvos con moita ilusión para seguir compartindo experiencias e apoios.
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        Non esquezas que podes vir cos teus petís e que o ambiente é sempre acolledor e seguro.
      </p>
    `,
    excerpt: "Adiantamos as datas das reunións que temos previstas para o mes de Setembro de 2024.",
    image: "📅"
  },
  "ruta-lerez-picnic": {
    title: "Ruta Lerez + Picnic",
    date: "Xullo 2024",
    category: "Actividades ao Aire Libre",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Ola familias! Con este bo tempo apetece xuntarse e desfrutar cas crianzas ao aire libre.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Así que vos propoñemos un plan para este domingo: un paseo polo río Lerez para abrir 
        o apetito e facer xuntas un picnic na praia fluvial.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        O lugar de quedada é na praia fluvial do Río Lerez (Avenida Bos Aires) e a hora 
        será sobre as 12:00 do mediodía.
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        Traede algo para compartir e moita ilusión para disfrutar dunha mañá marabillosa 
        en familia! 🌿☀️
      </p>
    `,
    excerpt: "Con este bo tempo apetece xuntarse e desfrutar cas crianzas ao aire libre. Un paseo polo río Lerez para abrir o apetito e facer xuntas un picnic na praia fluvial.",
    image: "🌿"
  },
  "novo-curso": {
    title: "Continuamos nun novo curso",
    date: "Setembro 2024",
    category: "Novidades",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Péchase un curso e comezamos outro. Facémolo cheas de ilusións, forzas renovadas 
        e moitas ganas de seguir acompañando ás familias.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        O curso pasado foi marabilloso, con moitas familias novas que se uniron á nosa 
        comunidade e moitas experiencias compartidas que nos fixeron crecer como tribo.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Para este novo curso temos moitas novidades preparadas: novos obradoiros, 
        actividades ao aire libre, e por suposto, as nosas queridas reunións semanais.
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        Grazas a todas as familias que forman parte desta comunidade tan especial. 
        Xuntos seguimos crecendo! 💕
      </p>
    `,
    excerpt: "Péchase un curso e comezamos outro. Facémolo cheas de ilusións, forzas renovadas e moitas ganas de seguir acompañando ás familias.",
    image: "🎓"
  },
  "nosas-reunions": {
    title: "As nosas reunións",
    date: "Xaneiro 2024",
    category: "Reunións",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        As reunións da tribo seguen sendo momentos que nos impulsan e motivan para seguir adiante.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        É xenial que cada mércores, semana a semana desde fai máis dun ano, teñamos a 
        oportunidade de abrazarnos, compartir, emocionarnos, chorar, rir e descubrir 
        outras experiencias de maternidade.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Mentres, por suposto, as nosas petís gozan xuntas. Sempre máxicas e siempre sorprendentes.
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        Grazas a todas as familias que fan posible estes momentos tan especiais. 
        A nosa tribo é realmente marabillosa! 🤗💕
      </p>
    `,
    excerpt: "As reunións da tribo seguen sendo momentos que nos impulsan e motivan para seguir adiante. É xenial que cada mércores, semana a semana desde fai máis dun ano, teñamos a oportunidade de abrazarnos, compartir, emocionarnos, chorar, rir e descubrir outras experiencias de maternidade.",
    image: "🤗"
  },
  "benvido-asociacion": {
    title: "Benvido á asociación!",
    date: "Xaneiro 2024",
    category: "Novidades",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Tiñamos ganas, forzas e ilusión. Tiñamos a necesidade dunha tribo. 
        Tiñamos un grupo de petises con coidadores desexando compartir emocións e experiencias.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Así nace Petís, o teu espazo seguro en Pontevedra para que nunca máis 
        te sintas soa, insegura ou xulgada.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Somos unha asociación de apoio á crianza e á lactancia que nace da necesidade 
        de crear unha comunidade de apoio para familias con crianzas pequenas.
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        Benvidos todos á nosa tribo! Estamos aquí para acompañarvos en cada paso 
        da vosa aventura de crianza. 💕
      </p>
    `,
    excerpt: "Tiñamos ganas, forzas e ilusión. Tiñamos a necesidade dunha tribo. Tiñamos un grupo de petises con coidadores desexando compartir emocións e experiencias.",
    image: "👋"
  },
  "reunions-xuno": {
    title: "Reunións Xuño",
    date: "Xuño 2024",
    category: "Reunións",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Adiantamos as datas das reunións que temos previstas para o mes de Xuño de 2024.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        En cor verde as reunións de mañá de 10:30 a 12:30 e en cor vermella as reunións 
        de tarde de 17:00 a 19:00 horas.
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        Esperámosvos con moita ilusión para seguir compartindo experiencias e apoios 
        neste mes de xuño tan especial! 🌞
      </p>
    `,
    excerpt: "Adiantamos as datas das reunións que temos previstas para o mes de Xuño de 2024. En cor verde as reunións de mañá de 10:30 a 12:30 e en cor vermella as reunións de tarde de 17:00 a 19:00 horas.",
    image: "📋"
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver ao blog
            </Link>
            
            <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium">
                {article.category}
              </span>
              <span className="mx-4">•</span>
              <span>{article.date}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Article Image */}
            <div className="h-64 bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">{article.image}</div>
                <p className="text-gray-600">Imaxe do artigo</p>
              </div>
            </div>
            
            {/* Article Body */}
            <div className="p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Comparte este artigo
                </h3>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Facebook
                  </button>
                  <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                    Twitter
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Artigos relacionados
            </h2>
            <p className="text-xl text-gray-600">
              Descubre máis contido da nosa asociación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(articles)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, article]) => (
                <article key={slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  <div className="h-48 bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{article.image}</div>
                      <p className="text-sm text-gray-600">Imaxe do artigo</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${slug}`}
                      className="text-pink-600 hover:text-pink-700 font-semibold text-sm"
                    >
                      Ler máis →
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Únete á nosa comunidade
          </h3>
          <p className="text-xl text-pink-100 mb-8">
            Forma parte dunha tribo que entende as túas necesidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/unete"
              className="bg-white text-pink-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Asóciate Agora
            </Link>
            <Link 
              href="/actividades"
              className="bg-transparent text-white font-semibold py-4 px-8 rounded-full border-2 border-white hover:bg-white hover:text-pink-600 transition-colors duration-200"
            >
              Ver Actividades
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 