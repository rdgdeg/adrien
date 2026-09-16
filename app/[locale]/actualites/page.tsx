import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { news } from "@/lib/content";

export const metadata = {
  title: "Actualités",
  description: "Vendanges, cuvées et vie de la ferme Degavre à Ostiches.",
};

export default function ActualitesPage() {
  return (
    <main>
      <PageHero
        title="Actualités"
        subtitle="La vie du vignoble, des vendanges aux premières bulles."
        image="/photos/vendanges.jpg"
        alt="Vendanges"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        {news.map((item) => (
          <article key={item.slug}>
            <Link href={`/actualites/${item.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-[11px] font-light uppercase tracking-nav text-moss">
                {item.category} · {item.date}
              </p>
              <h2 className="mt-2 font-serif text-3xl group-hover:text-moss">
                {item.title}
              </h2>
              <p className="mt-3 text-ink-soft">{item.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
