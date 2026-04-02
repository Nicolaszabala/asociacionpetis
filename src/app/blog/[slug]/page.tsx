import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogArticleBySlug, getBlogStaticParams } from "@/lib/content/client";
import ShareButtons from "./ShareButtons";

// SSG: Pre-generar páginas estáticas para todos los artículos
export async function generateStaticParams() {
  return getBlogStaticParams();
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const article = await getBlogArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            <div className="flex justify-center items-center mb-4 text-gray-500">
              <span>{new Date(article.publishedAt).toLocaleDateString('gl-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              {article.tags.length > 0 && (
                <>
                  <span className="mx-2">·</span>
                  <span>{article.tags.join(', ')}</span>
                </>
              )}
            </div>
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-xl h-64 mx-auto rounded-xl overflow-hidden">
                <Image
                  src={article.imageUrl || "/blog/default.jpg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div
              className="prose prose-lg mx-auto text-left mb-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            {article.externalUrl && (
              <div className="mb-8">
                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border-2 border-[var(--color-accent)] px-4 py-2 font-semibold text-[var(--color-accent)] transition-colors duration-200 hover:bg-[var(--color-accent)] hover:text-white"
                >
                  Ver publicación orixinal
                </a>
              </div>
            )}
            <ShareButtons title={article.title} />
          </div>
        </div>
      </section>
    </div>
  );
}
