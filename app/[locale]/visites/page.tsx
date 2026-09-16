import { PageHero } from "@/components/PageHero";
import { FormPanel } from "@/components/FormPanel";
import { site } from "@/lib/content";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getDictionary(raw);
  return { title: t.visites.title, description: t.visites.subtitle };
}

export default async function VisitesPage({
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
        title={t.visites.title}
        subtitle={t.visites.subtitle}
        image="/photos/verres.jpg"
        alt="Dégustation au domaine"
      />

      <section
        id="degustation"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-nav text-moss">
              {t.visites.kicker}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase tracking-label">
              {t.visites.caveauTitle}
            </h2>
            <p className="mt-6 leading-relaxed text-ink-soft">
              {t.visites.caveauText1}
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              {t.visites.caveauText2}{" "}
              <a href={site.phoneHref} className="text-ink hover:text-moss">
                {site.phone}
              </a>
              .
            </p>
            <dl className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
              <div>
                <dt className="font-sans text-[11px] font-medium uppercase tracking-nav text-moss">
                  {t.visites.packDuration}
                </dt>
                <dd className="mt-1 text-ink">{t.visites.packDurationValue}</dd>
              </div>
              <div>
                <dt className="font-sans text-[11px] font-medium uppercase tracking-nav text-moss">
                  {t.visites.packPrice}
                </dt>
                <dd className="mt-1 text-ink">{t.visites.packPriceValue}</dd>
              </div>
              <div>
                <dt className="font-sans text-[11px] font-medium uppercase tracking-nav text-moss">
                  {t.visites.packGroup}
                </dt>
                <dd className="mt-1 text-ink">{t.visites.packGroupValue}</dd>
              </div>
              <div>
                <dt className="font-sans text-[11px] font-medium uppercase tracking-nav text-moss">
                  {t.visites.packLang}
                </dt>
                <dd className="mt-1 text-ink">{t.visites.packLangValue}</dd>
              </div>
            </dl>
          </div>
          <FormPanel
            idPrefix="visite"
            kicker={t.visites.formKicker}
            title={t.visites.formTitle}
            description={t.visites.formDesc}
            defaultSubject="visite"
            showSubject={false}
            visitPack
            messagePlaceholder={t.visites.formPlaceholder}
            submitLabel={t.visites.formSubmit}
          />
        </div>
      </section>

      <section id="vendanges" className="bg-paper-deep px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl font-semibold uppercase tracking-label">
            {t.visites.vendangesTitle}
          </h2>
          <p className="mt-6 leading-relaxed text-ink-soft">
            {t.visites.vendangesText1}
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            {t.visites.vendangesText2}
          </p>
        </div>
      </section>

      <section id="patrimoine" className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <h2 className="font-display text-4xl font-semibold uppercase tracking-label">
          {t.visites.patrimoineTitle}
        </h2>
        <p className="mt-6 leading-relaxed text-ink-soft">
          {t.visites.patrimoineText}
        </p>
      </section>
    </main>
  );
}
