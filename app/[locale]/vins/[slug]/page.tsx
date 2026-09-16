import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, wines } from "@/lib/content";
import { AddToCart } from "@/components/AddToCart";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, localizePath, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return wines.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const wine = wines.find((item) => item.slug === slug);
  if (!wine) return {};
  return { title: wine.name, description: wine.palate };
}

export default async function WinePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const wine = wines.find((item) => item.slug === slug);
  if (!wine) notFound();

  return (
    <main>
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative min-h-[50vh] overflow-hidden">
          <Image
            src={wine.image}
            alt={wine.name}
            fill
            priority
            sizes="50vw"
            className="kenburns object-cover"
          />
        </div>
        <article className="flex flex-col justify-center px-8 py-28 md:px-16">
          <p className="font-sans text-[13px] font-medium uppercase tracking-nav text-moss">
            {wine.appellation}
          </p>
          <h1 className="mt-4 font-serif text-5xl italic md:text-6xl">
            {wine.name}
          </h1>
          <p className="mt-3 text-xl text-ink-soft">
            {wine.vintage} · {wine.style}
          </p>
          <dl className="mt-10 space-y-4 text-base">
            <div className="flex justify-between gap-6 border-b border-line py-3">
              <dt className="font-sans text-[13px] uppercase tracking-nav text-ink-soft">
                {t.shop.grapes}
              </dt>
              <dd className="text-right">{wine.grapes}</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-line py-3">
              <dt className="font-sans text-[13px] uppercase tracking-nav text-ink-soft">
                {t.shop.volume}
              </dt>
              <dd>{wine.volume}</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-line py-3">
              <dt className="font-sans text-[13px] uppercase tracking-nav text-ink-soft">
                {t.cart.total}
              </dt>
              <dd>{formatPrice(wine.price, locale)}</dd>
            </div>
          </dl>
          <h2 className="mt-10 font-serif text-3xl">{t.shop.tasting}</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-soft">
            {wine.nose}
          </p>
          <p className="mt-3 text-lg leading-relaxed text-ink-soft">
            {wine.palate}
          </p>
          <p className="mt-6 text-base text-ink-soft">
            <span className="font-sans text-[13px] uppercase tracking-nav">
              {t.shop.pairing} ·{" "}
            </span>
            {wine.pairing}
          </p>
          <AddToCart slug={wine.slug} />
          <Link
            href={localizePath(locale, "/boutique")}
            className="mt-6 w-fit font-sans text-[13px] font-medium uppercase tracking-nav underline decoration-gold underline-offset-8"
          >
            {t.vins.goShop}
          </Link>
        </article>
      </div>
    </main>
  );
}
