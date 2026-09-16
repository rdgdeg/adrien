import Image from "next/image";
import Link from "next/link";
import { HomeHeroSlider } from "@/components/HomeHeroSlider";
import { UniverseGrid } from "@/components/UniverseGrid";
import { NewsTicker } from "@/components/NewsTicker";
import { NewsCarousel } from "@/components/NewsCarousel";
import { Editorial } from "@/components/Editorial";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, localizePath, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function Home({
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
      <HomeHeroSlider />

      <div id="home-content">
        <UniverseGrid />
        <NewsTicker />
        <NewsCarousel />
      </div>

      <Editorial
        overlay
        kicker={t.home.editorial1Kicker}
        title={t.home.editorial1Title}
        text={[t.home.editorial1Text]}
        href={localizePath(locale, "/domaine")}
        image="/photos/vignoble.jpg"
        alt="Vignes en rangs au soleil"
      />

      <Editorial
        kicker={t.home.editorial2Kicker}
        title={t.home.editorial2Title}
        text={[t.home.editorial2Text1, t.home.editorial2Text2]}
        href={localizePath(locale, "/vins")}
        image="/photos/chai.jpg"
        alt="Cuves Letina dans le chai Degavre"
      />

      <Editorial
        overlay
        kicker={t.home.editorial3Kicker}
        title={t.home.editorial3Title}
        text={[t.home.editorial3Text]}
        href={localizePath(locale, "/domaine#ferme")}
        image="/photos/cour.jpg"
        alt="Cour de la ferme Degavre"
      />

      <section className="px-4 py-20 md:px-10">
        <Reveal>
          <h2 className="mb-10 font-serif text-4xl md:text-5xl">
            {t.home.universes}
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Link
              href={localizePath(locale, "/boutique")}
              className="group relative block min-h-[420px] overflow-hidden"
            >
              <Image
                src="/photos/cour.jpg"
                alt="Crémants du domaine"
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/25" />
              <span className="absolute inset-x-0 bottom-8 text-center font-serif text-4xl italic text-white md:text-5xl">
                {t.home.shopTile}
              </span>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href={localizePath(locale, "/visites")}
              className="group relative block min-h-[420px] overflow-hidden"
            >
              <Image
                src="/photos/verres.jpg"
                alt="Visite du domaine"
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/25" />
              <span className="absolute inset-x-0 bottom-8 text-center font-serif text-4xl italic text-white md:text-5xl">
                {t.home.visitTile}
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
