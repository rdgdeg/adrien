"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";
import Link from "next/link";

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const { locale, t } = useLocale();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-6 font-serif text-xl italic text-moss">
        {t.newsletter.thanks}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-md">
      <label className="sr-only" htmlFor="newsletter-email">
        {t.newsletter.emailLabel}
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder={t.newsletter.placeholder}
        className="w-full border-b border-ink bg-transparent py-3 text-sm outline-none placeholder:text-ink-soft"
      />
      <label className="mt-4 flex items-start gap-3 text-xs text-ink-soft">
        <input type="checkbox" required className="mt-0.5" />
        {t.newsletter.privacy}{" "}
        <Link
          href={localizePath(locale, "/confidentialite")}
          className="underline underline-offset-2"
        >
          →
        </Link>
      </label>
      <button
        type="submit"
        className="mt-6 font-sans text-[13px] font-medium uppercase tracking-nav underline decoration-gold underline-offset-8"
      >
        {t.newsletter.submit}
      </button>
    </form>
  );
}
