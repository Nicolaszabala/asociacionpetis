/**
 * Script para migrar artículos estáticos a Drupal CMS
 *
 * Uso: node scripts/migrate-articles-to-drupal.js
 *
 * IMPORTANTE: Este script requiere credenciales de administrador de Drupal
 * Configurar variables de entorno:
 * - DRUPAL_USERNAME
 * - DRUPAL_PASSWORD
 * - DRUPAL_BASE_URL (opcional, por defecto: https://cms.asociacionpetis.org)
 */

const articlesArr = [
  {
    slug: "receso-veran-2025",
    title: "Receso de verán: voltamos en setembro!",
    date: "14 de xullo de 2025",
    category: "Novidades",
    imageUrl: "/blog/veran.jpg",
    image: "☀️",
    excerpt: "Estamos nun breve receso de verán. En setembro volverán as reunións presenciais e as actividades da tribo Petís. Síguenos en Instagram para estar ao día das novidades!",
    content: "A tribo Petís toma un pequeno descanso de verán ☀️. Durante estes meses non haberá reunións presenciais nin actividades, pero en setembro volveremos con máis forza, ilusión e ganas de compartir momentos xuntos."
  },
  {
    slug: "grazas-faro-educa",
    title: "Grazas a El Faro Educa e Uxía Miranda",
    date: "Martes 8 de abril de 2025",
    category: "Novidades",
    imageUrl: "/blog/faroeduca.jpg",
    image: "",
    excerpt: "Desde Petís queremos amosar o noso agradecemento máis fonda a Uxía Miranda e a todo o equipo de El Faro Educa, por poñer voz e mirada á nosa tribu na súa reportaxe.",
    content: "Desde Petís queremos amosar o noso agradecemento máis fonda a Uxía Miranda e a todo o equipo de El Faro Educa, por poñer voz e mirada á nosa tribu na súa reportaxe. Para nós, que loitamos cada semana por tecer redes de apoio, ver reflectida a nosa realidade e a importancia de criarmos xuntas é un regalo enorme. Grazas por achegar o noso labor a tantas familias que, quizais, hoxe se dean conta de que non están soas. Seguiremos a criar, a acompañar e a escoitar, porque cada crianza merece unha tribu e cada nai merece sentirse arroupada. Grazas de corazón, Uxía e El Faro Educa. Grazas ás familias que facedes Petís posible. Grazas aos concellos de Pontevedra e Sanxenxo por abrirnos as portas. Seguimos! ✨"
  },
  {
    slug: "tribo-salnes-portonovo",
    title: "Regresamos de Portonovo co corazón cheeeeo cheíño de amor ❤️‍🩹",
    date: "17 de marzo de 2025",
    category: "Novidades",
    imageUrl: "/blog/portonovo.jpg",
    image: "",
    excerpt: "A tribo do Salnés é xa unha realidade e fainos moi felices saber que haberá un espacio aberto para a crianza doutro lado da ría.",
    content: "Que chula foi a tarde de hoxe de terapia e de sinceridade, de mapaternidades de todos os tipos imaxinables e de moito, moitísimo cariño e comprensión 💝 A tribo do Salnés é xa unha realidade e fainos moi felices saber que haberá un espacio aberto para a crianza doutro lado da ría. Sen vós nada desto sería posible: G R A Z A S a cada familia que nos apoia incondicionalmente, a aquelas que fixeron o esforzo de vir a coñecernos e a todas as que están por vir!"
  },
  {
    slug: "reunions-outubro",
    title: "Reunións Outubro - A tribo está de volta!",
    date: "Outubro 2024",
    category: "Reunións",
    imageUrl: "/blog/reunion-outubro.jpg",
    image: "",
    excerpt: "A tribo está de volta! Retomamos as nosas reunións de crianza para compartir experiencias, inquedanzas e moito apoio!",
    content: "A tribo está de volta! Retomamos as nosas reunións de crianza para compartir experiencias, inquedanzas e moito apoio! A partires da próxima semana, reunirémonos cada martes no acolledor local de Espazo de Momentos. Onde? @espaciodemomentos: Rúa Alfredo García Alen, 6, 36002 Pontevedra. As reunións son abertas a todas as familias que queiran participar. Non é necesario apuntarse previamente, só vir e disfrutar da compañía da nosa comunidade. Esperámosvos con moita ilusión para seguir crecendo xuntos como tribo! 💕"
  },
  {
    slug: "reunions-setembro",
    title: "Reunións Setembro",
    date: "Setembro 2024",
    category: "Reunións",
    imageUrl: "/blog/reunion-setembro.jpg",
    image: "📅",
    excerpt: "Adiantamos as datas das reunións que temos previstas para o mes de Setembro de 2024.",
    content: "Adiantamos as datas das reunións que temos previstas para o mes de Setembro de 2024. Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. Esperámosvos con moita ilusión para seguir compartindo experiencias e apoios. Non esquezas que podes vir cos teus petís e que o ambiente é sempre acolledor e seguro."
  },
  {
    slug: "nosas-reunions",
    title: "As nosas reunións",
    date: "15 Xullo 2024",
    category: "Reunións",
    imageUrl: "/blog/nosas-reunions.jpg",
    image: "🤗",
    excerpt: "As reunións da tribo seguen sendo momentos que nos impulsan e motivan para seguir adiante. É xenial que cada mércores, semana a semana desde fai máis dun ano, teñamos a oportunidade de abrazarnos, compartir, emocionarnos, chorar, rir e descubrir outras experiencias de maternidade.",
    content: "As reunións da tribo seguen sendo momentos que nos impulsan e motivan para seguir adiante. É xenial que cada mércores, semana a semana desde fai máis dun ano, teñamos a oportunidade de abrazarnos, compartir, emocionarnos, chorar, rir e descubrir outras experiencias de maternidade. Mentres, por suposto, as nosas petises gozan xuntas. Sempre máxicas e sempre sorprendentes. Se ti estas dubidando ou coñeces a nais (ou futuras nais) con ganas de crear rede nun lugar seguro, sempre vos estamos esperando, mamás e petises! Este mércores non dispoñemos de espacio para vernos pero esperámosvos o mércores 24 de 17:00 a 19:00 na Casa Azul (Rúa Sor Lucí, 4). Se tes algunha dúbida non dubides en contactar con nós por mensaxe privado ou no noso mail asociacionpetis@gmail.com"
  },
  {
    slug: "reunions-xullo",
    title: "Reunións Xullo",
    date: "1 Xullo 2024",
    category: "Reunións",
    imageUrl: "/blog/reunions-xullo.jpg",
    image: "📅",
    excerpt: "Adiantamos as datas das reunións que temos previstas para o mes de Xullo de 2024. Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. Estade atentos que co bo tempo seguramente fagamos algunha actividade ao aire libre.",
    content: "Adiantamos as datas das reunións que temos previstas para o mes de Xullo de 2024. Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. Estade atentos que co bo tempo seguramente fagamos algunha actividade ao aire libre."
  },
  {
    slug: "reunions-xuno",
    title: "Reunións Xuño",
    date: "21 Marzo 2024",
    category: "Reunións",
    imageUrl: "/blog/reunions-xuno.jpg",
    image: "📋",
    excerpt: "Adiantamos as datas das reunións que temos previstas para o mes de Xuño de 2024. Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. En cor verde as reunións de mañá de 10:30 a 12:30 e en cor vermella as reunións de tarde.",
    content: "Adiantamos as datas das reunións que temos previstas para o mes de Xuño de 2024. Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. En cor verde as reunións de mañá de 10:30 a 12:30 e en cor vermella as reunións de tarde de 17:00 a 19:00 horas. Esperámosvos con moita ilusión para seguir compartindo experiencias e apoios neste mes de xuño tan especial! 🌞"
  },
  {
    slug: "reunions-maio",
    title: "Reunións Maio",
    date: "21 Marzo 2024",
    category: "Reunións",
    imageUrl: "/blog/reunions-maio.jpg",
    image: "📅",
    excerpt: "Adiantamos as datas das reunións que temos previstas para o mes de Maio de 2024. Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. En cor verde as reunións de mañá de 10:30 a 12:30 e en cor vermella as reunións de tarde.",
    content: "Adiantamos as datas das reunións que temos previstas para o mes de Maio de 2024. Recordade que as reunións son na Sala Valdecorvos na Casa Azul, no concello de Pontevedra. En cor verde as reunións de mañá de 10:30 a 12:30 e en cor vermella as reunións de tarde de 17:00 a 19:00 horas. Esperámosvos con moita ilusión para seguir compartindo experiencias e apoios neste mes de maio tan especial! 🌸"
  },
  {
    slug: "ruta-lerez-picnic",
    title: "Ruta Lerez + Picnic",
    date: "29 Maio 2024",
    category: "Actividades ao Aire Libre",
    imageUrl: "/blog/ruta-lerez-picnic.jpg",
    image: "🌳",
    excerpt: "Ola familias! Con este bo tempo apetece xuntarse e desfrutar cas crianzas ao aire libre. Así que vos propoñemos un plan para este domingo: un paseo polo río Lerez para abrir o apetito e facer xuntas un picnic na praia fluvial.",
    content: "Ola familias! Con este bo tempo apetece xuntarse e desfrutar cas crianzas ao aire libre. Así que vos propoñemos un plan para oeste domingo: un paseo polo río Lerez para abrir o apetito e facer xuntas un picnic na praia fluvial. Punto de encontro: Praza da Ferrería, 12:00h. Cada familia trae o seu picnic e compartimos experiencias e risas. Non esquezas traer protector solar, gorras e moita auga! 🌞💧"
  }
];

const DRUPAL_BASE_URL = process.env.DRUPAL_BASE_URL || 'https://cms.asociacionpetis.org';
const DRUPAL_USERNAME = process.env.DRUPAL_USERNAME;
const DRUPAL_PASSWORD = process.env.DRUPAL_PASSWORD;

async function parseJsonResponse(response) {
  const rawText = await response.text();
  const cleanedText = rawText.startsWith('<{') ? rawText.substring(1) : rawText;
  return JSON.parse(cleanedText);
}

/**
 * Genera el header de autenticación Basic Auth
 */
function getBasicAuthHeader() {
  const credentials = `${DRUPAL_USERNAME}:${DRUPAL_PASSWORD}`;
  const encoded = Buffer.from(credentials).toString('base64');
  return `Basic ${encoded}`;
}

async function createArticle(article) {
  console.log(`📝 Creando artículo: "${article.title}"...`);

  // Construir el payload según JSON:API de Drupal (simplificado según recomendación)
  const payload = {
    data: {
      type: 'node--article',
      attributes: {
        title: article.title,
        body: {
          value: `<p>${article.content}</p>`,
          format: 'basic_html',
        },
        status: true, // Publicar el artículo
      },
    },
  };

  const response = await fetch(`${DRUPAL_BASE_URL}/jsonapi/node/article`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json',
      'Authorization': getBasicAuthHeader(),
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`❌ Error creando "${article.title}":`, response.status, errorText);
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  const data = await parseJsonResponse(response);
  console.log(`✅ Artículo creado: "${article.title}" (UUID: ${data.data.id})`);
  return data.data;
}

async function main() {
  console.log('🚀 Iniciando migración de artículos a Drupal...\n');

  // Validar credenciales
  if (!DRUPAL_USERNAME || !DRUPAL_PASSWORD) {
    console.error('❌ ERROR: Debes configurar las variables de entorno:');
    console.error('   DRUPAL_USERNAME=tu_usuario');
    console.error('   DRUPAL_PASSWORD=tu_contraseña');
    console.error('\nEjemplo:');
    console.error('   DRUPAL_USERNAME=admin DRUPAL_PASSWORD=xxx node scripts/migrate-articles-to-drupal.js');
    process.exit(1);
  }

  try {
    console.log('🔐 Usando Basic Authentication\n');

    // Crear artículos uno por uno
    const created = [];
    const failed = [];

    for (const article of articlesArr) {
      try {
        const result = await createArticle(article);
        created.push({ slug: article.slug, uuid: result.id });
      } catch (error) {
        console.error(`❌ Falló: ${article.title}`);
        failed.push({ slug: article.slug, error: error.message });
      }
    }

    // Reporte final
    console.log('\n' + '='.repeat(60));
    console.log('📊 RESUMEN DE MIGRACIÓN');
    console.log('='.repeat(60));
    console.log(`✅ Artículos creados: ${created.length}/${articlesArr.length}`);
    console.log(`❌ Artículos fallidos: ${failed.length}`);

    if (created.length > 0) {
      console.log('\n✅ Artículos creados exitosamente:');
      created.forEach(({ slug, uuid }) => {
        console.log(`   - ${slug} → ${uuid}`);
      });
    }

    if (failed.length > 0) {
      console.log('\n❌ Artículos que fallaron:');
      failed.forEach(({ slug, error }) => {
        console.log(`   - ${slug}: ${error}`);
      });
    }

    console.log('\n🎉 Migración completada!');

  } catch (error) {
    console.error('\n❌ ERROR FATAL:', error.message);
    process.exit(1);
  }
}

main();
