"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  homeHeroSlideImages,
  homeHeroSlidePaths,
} from "@/lib/home-hero-slides";
import { localizePath } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/locale-context";

const INTERVAL_MS = 7000;

export function HomeHeroSlider() {
  const { locale, t } = useLocale();
  const slides = t.home.heroSlides;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, count]);

  const active = slides[index];
  const href = localizePath(locale, homeHeroSlidePaths[index] ?? "/domaine");

  return (
    <section
      className="relative h-screen min-h-[640px] overflow-hidden"
      aria-roledescription="carousel"
      aria-label={t.home.heroCarouselLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {homeHeroSlideImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt={slides[i]?.imageAlt ?? ""}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === index ? "kenburns" : ""}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/25 to-black/55" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 pb-16 pt-24 text-center text-white md:px-10">
        <div className="max-w-3xl">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.32em] text-white md:text-sm md:tracking-[0.36em]">
            Domaine Degavre
          </p>
          <p className="mt-2 font-script text-3xl leading-none text-white/95 md:text-4xl">
            Ostiches
          </p>

          <div
            key={index}
            className="hero-slide-copy mt-10 md:mt-12"
          >
            <h1 className="font-serif text-3xl italic leading-tight md:text-5xl lg:text-[3.25rem]">
              {active?.subtitle}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/88 md:text-lg">
              {active?.intro}
            </p>
            <Link
              href={href}
              className="mt-8 inline-block font-sans text-[12px] font-semibold uppercase tracking-nav underline decoration-white/50 underline-offset-[10px] transition-colors hover:decoration-white md:text-[13px]"
            >
              {active?.cta}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={homeHeroSlideImages[i]}
              type="button"
              aria-label={`${t.home.heroCarouselLabel} ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <a
          href="#home-content"
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center font-sans text-[11px] font-medium uppercase tracking-nav text-white/85 transition-colors hover:text-white"
        >
          <span className="block">{t.ui.discoverSite}</span>
          <span className="mt-1 block animate-bounce text-lg leading-none">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
