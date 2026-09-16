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

      <div className="relative flex h-full flex-col items-center justify-center px-5 pb-28 pt-20 text-center text-white sm:px-6 sm:pb-16 md:px-10 md:pt-24">
        <div className="max-w-3xl">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-white sm:text-[13px] sm:tracking-[0.32em] md:text-sm md:tracking-[0.36em]">
            Domaine Degavre
          </p>
          <p className="mt-2 font-script text-2xl leading-none text-white/95 sm:text-3xl md:text-4xl">
            Ostiches
          </p>

          <div
            key={index}
            className="hero-slide-copy mt-8 md:mt-12"
          >
            <h1 className="font-serif text-[1.65rem] italic leading-tight sm:text-3xl md:text-5xl lg:text-[3.25rem]">
              {active?.subtitle}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/88 sm:mt-5 sm:text-base md:text-lg">
              {active?.intro}
            </p>
            <Link
              href={href}
              className="mt-6 inline-block min-h-11 px-2 py-2 font-sans text-[11px] font-semibold uppercase tracking-nav underline decoration-white/50 underline-offset-[10px] transition-colors hover:decoration-white sm:mt-8 sm:text-[12px] md:text-[13px]"
            >
              {active?.cta}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center gap-4 sm:bottom-8 sm:gap-5">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            {slides.map((_, i) => (
              <button
                key={homeHeroSlideImages[i]}
                type="button"
                aria-label={`${t.home.heroCarouselLabel} ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => go(i)}
                className="flex min-h-11 min-w-11 items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === index
                      ? "h-2 w-8 bg-white"
                      : "h-2 w-2 bg-white/45 hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
          <a
            href="#home-content"
            className="text-center font-sans text-[10px] font-medium uppercase tracking-nav text-white/85 transition-colors hover:text-white sm:text-[11px]"
          >
            <span className="block">{t.ui.discoverSite}</span>
            <span className="mt-1 block animate-bounce text-lg leading-none">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
