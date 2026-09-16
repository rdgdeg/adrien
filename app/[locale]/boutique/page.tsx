import Image from "next/image";
import Link from "next/link";
import { formatPrice, products } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
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
  return { title: t.shop.title, description: t.shop.subtitle };
}

export default async function BoutiquePage({
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
        title={t.shop.title}
        subtitle={t.shop.subtitle}
        image="/photos/cour.jpg"
        alt={t.shop.title}
      />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-[13px] uppercase tracking-nav text-moss">
            {t.shop.online}
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            {t.shop.ourCuvees}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 120}>
              <Link
                href={localizePath(locale, `/boutique/${product.slug}`)}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[13px] uppercase tracking-nav text-moss">
                  {product.appellation}
                </p>
                <h3 className="mt-2 font-serif text-3xl group-hover:text-moss">
                  {product.name}
                </h3>
                <p className="mt-1 text-ink-soft">
                  {product.vintage} · {product.volume}
                </p>
                <p className="mt-3 text-lg">
                  {formatPrice(product.price, locale)}
                </p>
                <span className="mt-4 inline-block text-[13px] uppercase tracking-nav underline decoration-gold underline-offset-8">
                  {t.shop.buy}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-16 text-center text-base text-ink-soft">
          {t.shop.shipping}
        </p>
      </section>
    </main>
  );
}
