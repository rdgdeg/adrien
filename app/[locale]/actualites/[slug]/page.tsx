import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/lib/content";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = news.find((article) => article.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = news.find((article) => article.slug === slug);
  if (!item) notFound();

  return (
    <main>
      <header className="relative h-[60vh] min-h-[360px]">
        <Image
          src={item.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative flex h-full flex-col items-center justify-end px-6 pb-16 text-center text-white">
          <p className="text-[11px] uppercase tracking-nav">
            {item.category} · {item.date}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl italic md:text-6xl">
            {item.title}
          </h1>
        </div>
      </header>
      <article className="mx-auto max-w-2xl px-6 py-20">
        {item.body.map((paragraph) => (
          <p key={paragraph} className="mt-5 leading-relaxed text-ink-soft">
            {paragraph}
          </p>
        ))}
        <Link
          href="/actualites"
          className="mt-12 inline-block text-[11px] uppercase tracking-nav underline decoration-gold underline-offset-8"
        >
          Toutes les actualités
        </Link>
      </article>
    </main>
  );
}
