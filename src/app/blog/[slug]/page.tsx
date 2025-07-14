"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

// Componente para los botones de compartir (Client Component)
function ShareButtons({ title }: { title: string }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <div className="flex space-x-4">
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Facebook
      </a>
      <a 
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
      >
        X
      </a>
      <a 
        href={`https://wa.me/?text=${encodeURIComponent(title + ' - ' + shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        WhatsApp
      </a>
    </div>
  );
}

// Datos de los artículos (esto vendrá de Drupal en el futuro)
export const articles = {
  "reunions-outubro": {
    title: "Reunións Outubro - A tribo está de volta!",
    date: "Outubro 2024",
    category: "Reunións",
    excerpt: "A tribo está de volta! Retomamos as nosas reunións de crianza para compartir experiencias, inquedanzas e moito apoio!", 
    image: "",
    imageUrl: "/blog/reunion-outubro.jpg", 
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
  },
  "reunions-setembro": {
    title: "Reunións Setembro",
    date: "Setembro 2024",
    category: "Reunións",
    imageUrl: "/blog/reunion-setembro.jpg", 
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
  "nosas-reunions": {
    title: "As nosas reunións",
    date: "15 Xullo 2024",
    category: "Reunións",
    imageUrl: "/blog/nosas-reunions.jpg", 
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        As reunións da tribo seguen sendo momentos que nos impulsan e motivan para seguir adiante. 
        É xenial que cada mércores, semana a semana desde fai máis dun ano, teñamos a oportunidade de 
        abrazarnos, compartir, emocionarnos, chorar, rir e descubrir outras experiencias de maternidade.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Mentres, por suposto, as nosas petises gozan xuntas. Sempre máxicas e sempre sorprendentes.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Se ti estas dubidando ou coñeces a nais (ou futuras nais) con ganas de crear rede nun lugar seguro, 
        sempre vos estamos esperando, mamás e petises!
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        Este mércores non dispoñemos de espacio para vernos pero esperámosvos o mércores 24 de 17:00 a 19:00 
        na Casa Azul (Rúa Sor Lucí, 4). Se tes algunha dúbida non dubides en contactar con nós por mensaxe 
        privado ou no noso mail asociacionpetis@gmail.com
      </p>
    `,
    excerpt: "As reunións da tribo seguen sendo momentos que nos impulsan e motivan para seguir adiante. É xenial que cada mércores, semana a semana desde fai máis dun ano, teñamos a oportunidade de abrazarnos, compartir, emocionarnos, chorar, rir e descubrir outras experiencias de maternidade.",
    image: "🤗"
  },
  "reunions-xuno": {
    title: "Reunións Xuño",
    date: "21 Marzo 2024",
    category: "Reunións",
    imageUrl: "/blog/reunions-xuno.jpg", 
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
    excerpt: "Adiantamos as datas das reunións que temos previstas para o mes de Xuño de 2024. Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. En cor verde as reunións de mañá de 10:30 a 12:30 e en cor vermella as reunións de tarde.",
    image: "📋"
  },
  "reunions-maio": {
    title: "Reunións Maio",
    date: "21 Marzo 2024",
    category: "Reunións",
    imageUrl: "/blog/reunions-maio.jpg", 
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Adiantamos as datas das reunións que temos previstas para o mes de Maio de 2024.
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
        neste mes de maio tan especial! 🌸
      </p>
    `,
    excerpt: "Adiantamos as datas das reunións que temos previstas para o mes de Maio de 2024. Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. En cor verde as reunións de mañá de 10:30 a 12:30 e en cor vermella as reunións de tarde.",
    image: "📅"
  },
  "reunions-xullo": {
    title: "Reunións Xullo",
    date: "1 Xullo 2024",
    category: "Reunións",
    imageUrl: "/blog/reunions-xullo.jpg", 
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Adiantamos as datas das reunións que temos previstas para o mes de Xullo de 2024.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Esperámosvos con moita ilusión para seguir compartindo experiencias e apoios.
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        Estade atentos que co bo tempo seguramente fagamos algunha actividade ao aire libre.
      </p>
    `,
    excerpt: "Adiantamos as datas das reunións que temos previstas para o mes de Xullo de 2024. Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. Estade atentos que co bo tempo seguramente fagamos algunha actividade ao aire libre.",
    image: "📅"
  },
  "ruta-lerez-picnic": {
    title: "Ruta Lerez + Picnic",
    date: "29 Maio 2024",
    category: "Actividades ao Aire Libre",
    imageUrl: "/blog/ruta-lerez-picnic.jpg", 
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Ola familias! Con este bo tempo apetece xuntarse e desfrutar cas crianzas ao aire libre.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Así que vos propoñemos un plan para oeste domingo: un paseo polo río Lerez para abrir 
        o apetito e facer xuntas un picnic na praia fluvial.
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        📍 Punto de encontro: Praza da Ferrería, 12:00h
      </p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        🥪 Cada familia trae o seu picnic e compartimos experiencias e risas.
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        Non esquezas traer protector solar, gorras e moita auga! 🌞💧
      </p>
    `,
    excerpt: "Ola familias! Con este bo tempo apetece xuntarse e desfrutar cas crianzas ao aire libre. Así que vos propoñemos un plan para este domingo: un paseo polo río Lerez para abrir o apetito e facer xuntas un picnic na praia fluvial.",
    image: "🌳"
  },
  
  "grazas-faro-educa": {
    title: "Grazas a El Faro Educa e Uxía Miranda",
    date: "Martes 8 de abril de 2025",
    category: "Novidades",
    imageUrl: "/blog/faroeduca.jpg",
    image: "",
    excerpt: "Desde Petís queremos amosar o noso agradecemento máis fonda a Uxía Miranda e a todo o equipo de El Faro Educa, por poñer voz e mirada á nosa tribu na súa reportaxe.",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Desde Petís queremos amosar o noso agradecemento máis fonda a Uxía Miranda e a todo o equipo de El Faro Educa, por poñer voz e mirada á nosa tribu na súa reportaxe <a href="https://lnkd.in/dq9D-bqE" target="_blank" rel="noopener noreferrer" class="text-pink-600 underline">«Criar en tribu, criar mellor: Te das cuenta de que no estás sola»</a>.
      </p>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Para nós, que loitamos cada semana por tecer redes de apoio, ver reflectida a nosa realidade e a importancia de criarmos xuntas é un regalo enorme. Grazas por achegar o noso labor a tantas familias que, quizais, hoxe se dean conta de que non están soas.
      </p>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Seguiremos a criar, a acompañar e a escoitar, porque cada crianza merece unha tribu e cada nai merece sentirse arroupada.
      </p>
      <ul class="mb-6">
        <li class="mb-2">💚 Grazas de corazón, Uxía e El Faro Educa.</li>
        <li class="mb-2">💚 Grazas ás familias que facedes Petís posible.</li>
        <li class="mb-2">💚 Grazas aos concellos de Pontevedra e Sanxenxo por abrirnos as portas.</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed">
        Seguimos! ✨
      </p>
    `
  },
  "tribo-salnes-portonovo": {
    title: "Regresamos de Portonovo co corazón cheeeeo cheíño de amor ❤️‍🩹",
    date: "17 de marzo de 2025",
    category: "Novidades",
    imageUrl: "/blog/portonovo.jpg",
    image: "",
    excerpt: "A tribo do Salnés é xa unha realidade e fainos moi felices saber que haberá un espacio aberto para a crianza doutro lado da ría.",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Que chula foi a tarde de hoxe de terapia e de sinceridade, de mapaternidades de todos os tipos imaxinables e de moito, moitísimo cariño e comprensión 💝
      </p>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        A tribo do Salnés é xa unha realidade e fainos moi felices saber que haberá un espacio aberto para a crianza doutro lado da ría.
      </p>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        💞 Sen vós nada desto sería posible: G R A Z A S a cada familia que nos apoia incondicionalmente, a aquelas que fixeron o esforzo de vir a coñecernos e a todas as que están por vir!
      </p>
    `
  },
  "receso-veran-2025": {
    title: "Receso de verán: voltamos en setembro!",
    date: "14 de xullo de 2025",
    category: "Novidades",
    imageUrl: "/blog/veran.jpg",
    image: "☀️",
    excerpt: "Estamos nun breve receso de verán. En setembro volverán as reunións presenciais e as actividades da tribo Petís. Síguenos en Instagram para estar ao día das novidades!",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        A tribo Petís toma un pequeno descanso de verán ☀️. Durante estes meses non haberá reunións presenciais nin actividades, pero en setembro volveremos con máis forza, ilusión e ganas de compartir momentos xuntos.
      </p>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Grazas a todas as familias que facedes posible esta comunidade de apoio, comprensión e acompañamento. O verán é tempo de descanso, de desfrutar das crianzas e de recargar enerxía para seguir tecendo rede.
      </p>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Síguenos en <a href="https://www.instagram.com/a.petis/" target="_blank" rel="noopener noreferrer" class="text-pink-600 underline">Instagram</a> para estar ao día das novidades e do regreso das actividades.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        Bo verán, tribo! Vémonos en setembro ��
      </p>
    `
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
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
            <div className="relative w-full h-64 bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center fade-in-image">
              {article.imageUrl ? (
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover rounded-xl"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="text-8xl mb-4">{article.image}</div>
              )}
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-600"> </p>
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
                <ShareButtons title={article.title} />
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
                  <div className="relative w-full h-48 bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center fade-in-image">
                    {article.imageUrl ? (
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover rounded-xl"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <div className="text-4xl mb-2">{article.image}</div>
                    )}
                    <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-600 text-xs"></p>
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
      <section className="py-20 bg-gradient-to-r from-[#cfc96e] to-[#f7b267]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Únete á nosa comunidade
          </h3>
          <p className="text-xl text-[#f7f6d9] mb-8">
            Forma parte dunha tribo que entende as túas necesidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/unete"
              className="bg-white text-[#f7b267] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Asóciate Agora
            </Link>
            <Link 
              href="/actividades"
              className="bg-transparent text-white font-semibold py-4 px-8 rounded-full border-2 border-white hover:bg-white hover:text-[#f7b267] transition-colors duration-200"
            >
              Ver Actividades
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 