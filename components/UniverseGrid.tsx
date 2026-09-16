"use client";

import Image from "next/image";
import Link from "next/link";
import { universes } from "@/lib/content";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";

export function UniverseGrid() {
  const { locale, t } = useLocale();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {universes.map((item, index) => (
        <Link
          key={item.href + item.title}
          href={localizePath(locale, item.href)}
          className="group relative block aspect-square overflow-hidden"
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/40" />
          <h2 className="absolute inset-x-0 bottom-8 text-center font-serif text-3xl italic text-white transition-transform duration-500 group-hover:-translate-y-1 md:text-4xl">
            {t.universeTitles[index] ?? item.title}
          </h2>
        </Link>
      ))}
    </section>
  );
}
