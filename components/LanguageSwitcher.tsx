"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, stripLocale, localizePath } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/locale-context";

export function LanguageSwitcher() {
  const { locale } = useLocale();
  const pathname = usePathname() || "/";
  const pathWithoutLocale = stripLocale(pathname);

  return (
    <nav
      aria-label="Language"
      className="flex items-center gap-1.5 font-sans text-[11px] font-medium uppercase tracking-nav text-ink-soft"
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center gap-1.5">
          {index > 0 && <span className="text-line" aria-hidden>·</span>}
          <Link
            href={localizePath(code, pathWithoutLocale)}
            hrefLang={code}
            className={
              code === locale
                ? "text-ink"
                : "transition-colors hover:text-ink"
            }
            aria-current={code === locale ? "page" : undefined}
          >
            {localeLabels[code]}
          </Link>
        </span>
      ))}
    </nav>
  );
}
