import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FormPanel } from "@/components/FormPanel";
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
    title: t.pro.metaTitle,
    description: t.pro.metaDescription,
  };
}

export default async function ProfessionnelsPage({
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
        title={t.pro.heroTitle}
        subtitle={t.pro.heroSub}
        image="/photos/verres.jpg"
        alt={t.pro.heroSub}
      />

      <section className="mx-auto max-w-3xl px-6 py-20 md:px-10">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink-soft">{t.pro.intro}</p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-paper-deep px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          {t.pro.audiences.map((block) => (
            <Reveal key={block.title}>
              <h2 className="font-display text-2xl font-semibold uppercase tracking-label">
                {block.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{block.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-label md:text-4xl">
              {t.pro.offerTitle}
            </h2>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-ink-soft">
              {t.pro.offerItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-moss" aria-hidden>
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-12 font-display text-xl font-semibold uppercase tracking-label">
              {t.pro.conditionsTitle}
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              {t.pro.conditionsText}
            </p>
            <Link
              href={localizePath(locale, "/boutique")}
              className="mt-10 inline-block font-sans text-[13px] font-medium uppercase tracking-nav underline decoration-gold underline-offset-8"
            >
              {t.pro.ctaShop}
            </Link>
          </Reveal>
          <FormPanel
            idPrefix="pro"
            kicker={t.pro.formKicker}
            title={t.pro.formTitle}
            description={t.pro.formDesc}
            defaultSubject="pro"
            showSubject={false}
            messagePlaceholder={t.pro.formPlaceholder}
            submitLabel={t.pro.formSubmit}
          />
        </div>
      </section>
    </main>
  );
}
