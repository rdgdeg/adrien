import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FormPanel } from "@/components/FormPanel";
import { site } from "@/lib/content";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, localizePath, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

const coverage = [
  {
    outlet: "RTBF",
    title: "À Ostiches, la ferme Degavre produit son crémant",
    href: "https://www.rtbf.be/article/a-ostiches-la-ferme-degavre-produit-son-cremant-11252364",
  },
  {
    outlet: "L’Avenir",
    title: "Vendanges : une année compliquée au domaine",
    href: "https://www.lavenir.net/regions/wallonie-picarde/ath/2024/10/08/vendanges-une-annee-compliquee-RILKNALCR5C77D7N4BW4HUZZKM/",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getDictionary(raw);
  return { title: t.presse.title, description: t.presse.subtitle };
}

export default async function PressePage({
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
        title={t.presse.title}
        subtitle={t.presse.subtitle}
        image="/photos/chai.jpg"
        alt="Chai du Domaine Degavre"
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-nav text-moss">
              {t.presse.kicker}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase tracking-label">
              {t.presse.mediaTitle}
            </h2>
            <p className="mt-6 leading-relaxed text-ink-soft">
              {t.presse.mediaText}
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              <strong className="font-medium text-ink">{site.company}</strong>
              <br />
              {site.address}, {site.city}
              <br />
              <a href={site.phoneHref} className="hover:text-moss">
                {site.phone}
              </a>
            </p>
            <Link
              href={localizePath(locale, "/contact#ecrire")}
              className="mt-8 inline-block font-sans text-[11px] font-medium uppercase tracking-nav text-ink-soft underline decoration-gold underline-offset-8 hover:text-ink"
            >
              {t.presse.contactGeneral}
            </Link>
          </div>

          <FormPanel
            idPrefix="presse"
            kicker={t.presse.formKicker}
            title={t.presse.formTitle}
            description={t.presse.formDesc}
            defaultSubject="presse"
            showSubject={false}
            messagePlaceholder={t.presse.formPlaceholder}
            submitLabel={t.presse.formSubmit}
          />
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-label">
            {t.presse.coverageTitle}
          </h2>
          <ul className="mt-8 space-y-6">
            {coverage.map((item) => (
              <li key={item.href} className="border-b border-line pb-6">
                <p className="font-sans text-[11px] font-medium uppercase tracking-nav text-moss">
                  {item.outlet}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-serif text-2xl italic text-ink hover:text-moss"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
