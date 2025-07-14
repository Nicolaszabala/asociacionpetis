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

// ... Aquí deberías definir la lógica para obtener el artículo según el slug, por ejemplo desde una API o fuente de datos externa ...
// Por ahora, solo deja el componente de la página:

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Aquí deberías obtener el artículo según el slug
  // const article = ...
  // if (!article) notFound();
  // return (...)
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
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
            {/* Aquí deberías mostrar los datos del artículo */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Artigo non atopado
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O artigo solicitado non está dispoñible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 