"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice, getProduct } from "@/lib/content";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";

export default function CommandePage() {
  const { lines, total, clear } = useCart();
  const [done, setDone] = useState(false);
  const { locale, t } = useLocale();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
    clear();
  }

  if (lines.length === 0 && !done) {
    return (
      <main className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl italic">{t.checkout.emptyTitle}</h1>
        <Link
          href={localizePath(locale, "/boutique")}
          className="mt-6 inline-block text-[13px] uppercase tracking-nav underline decoration-gold underline-offset-8"
        >
          {t.checkout.backShop}
        </Link>
      </main>
    );
  }

  if (done) {
    return (
      <main className="mx-auto max-w-xl px-6 py-32 text-center">
        <p className="font-script text-3xl text-moss">Ostiches</p>
        <h1 className="mt-4 font-serif text-5xl italic">
          {t.checkout.thanksTitle}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-ink-soft">
          {t.checkout.thanksText}
        </p>
        <Link
          href={localizePath(locale, "/")}
          className="mt-10 inline-block text-[13px] uppercase tracking-nav underline decoration-gold underline-offset-8"
        >
          {t.checkout.home}
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-32">
      <h1 className="font-serif text-5xl italic">{t.checkout.title}</h1>
      <p className="mt-4 text-lg text-ink-soft">
        {t.checkout.totalLabel} : {formatPrice(total, locale)}.{" "}
        {t.checkout.totalNote}
      </p>
      <ul className="mt-8 space-y-2 text-ink-soft">
        {lines.map((line) => {
          const product = getProduct(line.slug);
          if (!product) return null;
          return (
            <li key={line.slug}>
              {product.name} × {line.quantity}
            </li>
          );
        })}
      </ul>
      <form onSubmit={onSubmit} className="mt-10 space-y-6">
        <div>
          <label htmlFor="nom" className="text-[13px] uppercase tracking-nav">
            {t.form.name}
          </label>
          <input
            id="nom"
            name="nom"
            required
            className="mt-2 w-full border-b border-ink bg-transparent py-3 outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-[13px] uppercase tracking-nav">
            {t.form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border-b border-ink bg-transparent py-3 outline-none"
          />
        </div>
        <div>
          <label htmlFor="tel" className="text-[13px] uppercase tracking-nav">
            {t.checkout.phone}
          </label>
          <input
            id="tel"
            name="tel"
            required
            className="mt-2 w-full border-b border-ink bg-transparent py-3 outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="adresse"
            className="text-[13px] uppercase tracking-nav"
          >
            {t.checkout.address}
          </label>
          <textarea
            id="adresse"
            name="adresse"
            rows={3}
            required
            className="mt-2 w-full border-b border-ink bg-transparent py-3 outline-none"
          />
        </div>
        <label className="flex items-start gap-3 text-base text-ink-soft">
          <input type="checkbox" required className="mt-1" />
          {t.checkout.terms}
        </label>
        <button
          type="submit"
          className="h-12 bg-ink px-8 text-[13px] uppercase tracking-nav text-paper hover:bg-moss-deep"
        >
          {t.checkout.submit}
        </button>
      </form>
    </main>
  );
}
