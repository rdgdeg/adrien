"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";

/** Bandeau légal âge / abus d’alcool — affiché sur tout le site. */
export function LegalBanner() {
  const { locale, t } = useLocale();

  return (
    <aside
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[80] pb-[env(safe-area-inset-bottom,0px)]"
      aria-label={t.shop.legalMentions}
    >
      <div className="pointer-events-auto border-t border-white/15 bg-ink px-3 py-2 text-center text-[10px] leading-snug tracking-wide text-paper/95 sm:px-4 sm:py-2.5 sm:text-[11px] md:px-6 md:text-[12px]">
        <p className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-0.5 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1">
          <span>{t.shop.legalAge}</span>
          <span className="hidden text-paper/35 sm:inline" aria-hidden>
            |
          </span>
          <span className="max-sm:line-clamp-2">{t.shop.legalAbuse}</span>
          <span className="hidden text-paper/35 sm:inline" aria-hidden>
            |
          </span>
          <Link
            href={localizePath(locale, "/mentions-legales")}
            className="underline decoration-paper/50 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            {t.shop.legalMentions}
          </Link>
        </p>
      </div>
    </aside>
  );
}
