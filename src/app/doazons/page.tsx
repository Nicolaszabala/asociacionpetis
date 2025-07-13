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
    </div>
  );
}