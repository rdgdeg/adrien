import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";
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
    title: t.contact.title,
    description: `${site.address}, ${site.city}. ${site.phone}.`,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);

  const mapSrc =
    "https://maps.google.com/maps?q=Chemin%20des%20Pr%C3%A9s%20de%20Pidebecq%209%2C%207804%20Ostiches&t=&z=14&ie=UTF8&iwloc=&output=embed";

  return (
    <main>
      <PageHero
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        image="/photos/cour.jpg"
        alt="Campagne autour d’Ostiches"
      />

      <section id="acces" className="grid border-b border-line lg:grid-cols-2">
        <div className="border-b border-line bg-paper-deep px-8 py-16 md:px-16 md:py-24 lg:border-b-0 lg:border-r">
          <p className="font-sans text-[11px] font-medium uppercase tracking-nav text-moss">
            {t.contact.address}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold uppercase tracking-label md:text-5xl">
            {site.name}
          </h2>
          <p className="mt-8 text-xl leading-relaxed">
            {site.address}
            <br />
            {site.city}
            <br />
            {site.country}
          </p>
          <a
            href={site.phoneHref}
            className="mt-8 inline-block text-xl font-medium hover:text-moss"
          >
            {site.phone}
          </a>
          <p className="mt-10 max-w-md leading-relaxed text-ink-soft">
            {t.contact.directions}
          </p>
        </div>
        <div className="min-h-[420px] bg-ink/5">
          <iframe
            title="Carte du Domaine Degavre à Ostiches"
            src={mapSrc}
            className="h-full min-h-[420px] w-full border-0 grayscale contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section id="ecrire" className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="lg:pt-4">
            <p className="font-sans text-[11px] font-medium uppercase tracking-nav text-gold">
              {t.contact.writeKicker}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase tracking-label md:text-5xl">
              {t.contact.writeTitle}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/80">
              {t.contact.writeText}{" "}
              <Link
                href={localizePath(locale, "/presse")}
                className="text-gold underline underline-offset-4 hover:text-paper"
              >
                {t.contact.presseLink}
              </Link>
              .
            </p>
            <p className="mt-10 hidden text-sm text-paper/60 lg:block">
              {site.address} · {site.city}
            </p>
          </div>
          <div className="border border-paper/15 bg-paper/5 p-8 md:p-12">
            <ContactForm variant="dark" />
          </div>
        </div>
      </section>
    </main>
  );
}
