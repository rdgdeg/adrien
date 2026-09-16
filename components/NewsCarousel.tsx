"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { news } from "@/lib/content";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";

export function NewsCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const { locale, t } = useLocale();

  function scrollByCard(direction: number) {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: direction * 340, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden bg-paper px-4 py-20 md:px-10">
      <div className="mb-10 flex items-end justify-between gap-6">
        <h2 className="font-serif text-4xl md:text-5xl">{t.home.newsTitle}</h2>
        <div className="hidden gap-3 md:flex">
          <button
            type="button"
            aria-label={t.ui.newsPrev}
            onClick={() => scrollByCard(-1)}
            className="h-10 w-10 border border-line text-lg leading-none hover:bg-paper-deep"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label={t.ui.newsNext}
            onClick={() => scrollByCard(1)}
            className="h-10 w-10 border border-line text-lg leading-none hover:bg-paper-deep"
          >
            ›
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      >
        {news.map((item) => (
          <article
            key={item.slug}
            className="w-[280px] shrink-0 snap-start sm:w-[320px]"
          >
            <Link
              href={localizePath(locale, `/actualites/${item.slug}`)}
              className="group block"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 font-sans text-[13px] font-medium uppercase tracking-nav text-moss">
                {item.category}
              </p>
              <h3 className="mt-2 font-serif text-3xl leading-snug group-hover:text-moss">
                {item.title}
              </h3>
              <p className="mt-3 text-base text-ink-soft">{item.excerpt}</p>
              <span className="mt-5 inline-block font-sans text-[13px] font-medium uppercase tracking-nav underline decoration-gold underline-offset-8">
                {t.ui.discover}
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
