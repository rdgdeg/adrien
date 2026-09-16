import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, products } from "@/lib/content";
import { AddToCart } from "@/components/AddToCart";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, localizePath, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.palate };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main>
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative min-h-[55vh] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="50vw"
            className="kenburns object-cover"
          />
        </div>
        <article className="flex flex-col justify-center px-8 py-28 md:px-16">
          <p className="text-[13px] uppercase tracking-nav text-moss">
            {product.appellation}
          </p>
          <h1 className="mt-4 font-serif text-5xl italic md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-3 text-xl text-ink-soft">
            {product.vintage} · {product.style}
          </p>
          <p className="mt-6 font-serif text-3xl">
            {formatPrice(product.price, locale)}
          </p>
          <dl className="mt-10 space-y-4">
            <div className="flex justify-between gap-6 border-b border-line py-3">
              <dt className="text-[13px] uppercase tracking-nav text-ink-soft">
                {t.shop.grapes}
              </dt>
              <dd className="text-right">{product.grapes}</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-line py-3">
              <dt className="text-[13px] uppercase tracking-nav text-ink-soft">
                {t.shop.volume}
              </dt>
              <dd>{product.volume}</dd>
            </div>
          </dl>
          <h2 className="mt-10 font-serif text-3xl">{t.shop.tasting}</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">{product.nose}</p>
          <p className="mt-3 leading-relaxed text-ink-soft">{product.palate}</p>
          <p className="mt-6 text-ink-soft">
            <span className="text-[13px] uppercase tracking-nav">
              {t.shop.pairing} ·{" "}
            </span>
            {product.pairing}
          </p>
          <AddToCart slug={product.slug} />
          <Link
            href={localizePath(locale, "/boutique/panier")}
            className="mt-6 w-fit text-[13px] uppercase tracking-nav underline decoration-gold underline-offset-8"
          >
            {t.shop.viewCart}
          </Link>
        </article>
      </div>
    </main>
  );
}
