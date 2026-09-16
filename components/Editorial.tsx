"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/locale-context";

export function Editorial({
  title,
  kicker,
  text,
  href,
  image,
  alt,
  overlay = false,
}: {
  title: string;
  kicker?: string;
  text: string[];
  href: string;
  image: string;
  alt: string;
  overlay?: boolean;
}) {
  const { t } = useLocale();

  if (overlay) {
    return (
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className="kenburns object-cover"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <Reveal className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center text-white">
          {kicker && (
            <p className="font-sans text-[13px] font-medium uppercase tracking-nav">
              {kicker}
            </p>
          )}
          <h2 className="mt-4 font-serif text-4xl italic md:text-6xl">{title}</h2>
          {text.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 text-xl leading-relaxed text-white/90"
            >
              {paragraph}
            </p>
          ))}
          <Link
            href={href}
            className="mt-8 font-sans text-[13px] font-medium uppercase tracking-nav underline decoration-white/70 underline-offset-8"
          >
            {t.ui.discover}
          </Link>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="grid min-h-[70vh] lg:grid-cols-2">
      <div className="relative min-h-[50vh] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="50vw"
          className="object-cover transition-transform duration-[1800ms] hover:scale-105"
        />
      </div>
      <Reveal className="flex flex-col justify-center bg-paper px-8 py-16 md:px-16">
        {kicker && (
          <p className="font-sans text-[13px] font-medium uppercase tracking-nav text-moss">
            {kicker}
          </p>
        )}
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">{title}</h2>
        {text.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {paragraph}
          </p>
        ))}
        <Link
          href={href}
          className="mt-8 w-fit font-sans text-[13px] font-medium uppercase tracking-nav underline decoration-gold underline-offset-8"
        >
          {t.ui.discover}
        </Link>
      </Reveal>
    </section>
  );
}
