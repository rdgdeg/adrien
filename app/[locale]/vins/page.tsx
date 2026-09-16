import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { formatPrice, wines } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, localizePath, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getDictionary(raw);
  return {
    title: t.vins.metaTitle,
    description: t.vins.metaDescription,
  };
}

export default async function VinsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);

  return (
    <main>
      <PageHero
        title={t.vins.heroTitle}
        subtitle={t.vins.heroSub}
        image="/photos/cour.jpg"
        alt={t.vins.heroAlt}
      />

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Reveal>
          <p className="font-serif text-3xl italic text-ink-soft">
            {t.vins.quote}
          </p>
          <p className="mt-5 font-sans text-[14px] font-medium uppercase tracking-nav">
            {t.vins.quoteAuthor}
          </p>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-2">
        {wines.map((wine) => (
          <Link
            key={wine.slug}
            href={localizePath(locale, `/vins/${wine.slug}`)}
            className="group relative min-h-[70vh] overflow-hidden"
          >
            <Image
              src={wine.image}
              alt={wine.name}
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/35" />
            <div className="relative flex min-h-[70vh] flex-col items-center justify-end px-6 pb-16 text-center text-white">
              <p className="font-sans text-[13px] uppercase tracking-nav">
                {wine.appellation}
              </p>
              <h2 className="mt-3 font-serif text-4xl italic md:text-5xl">
                {wine.name}
              </h2>
              <p className="mt-2 text-lg">
                {wine.vintage} · {formatPrice(wine.price, locale)}
              </p>
              <span className="mt-6 font-sans text-[13px] uppercase tracking-nav underline underline-offset-8">
                {t.ui.discover}
              </span>
            </div>
          </Link>
        ))}
      </section>

      <section id="caveau" className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl">
            {t.vins.caveauTitle}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            {t.vins.caveauText}
          </p>
          <Link
            href={localizePath(locale, "/professionnels")}
            className="mt-6 mr-8 inline-block font-sans text-[13px] font-medium uppercase tracking-nav underline decoration-gold underline-offset-8"
          >
            {t.nav.pro}
          </Link>
          <Link
            href={localizePath(locale, "/boutique")}
            className="mt-6 inline-block font-sans text-[13px] font-medium uppercase tracking-nav underline decoration-gold underline-offset-8"
          >
            {t.vins.goShop}
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
