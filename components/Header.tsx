"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MenuOverlay } from "@/components/MenuOverlay";
import { useCart } from "@/lib/cart";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";

function HomeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 11.5 12 4l8 7.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10.5V20h10v-9.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShopBagIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 8h12l-1.2 12H7.2L6 8Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M9 8V6a3 3 0 0 1 6 0v2"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const { locale, t } = useLocale();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-paper/96 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 md:gap-6 md:px-10 md:py-4">
          <div className="flex items-center gap-3 justify-self-start md:gap-5">
            <Link
              href={localizePath(locale, "/")}
              aria-label={t.ui.home}
              className="inline-flex items-center text-ink transition-colors hover:text-moss"
              onClick={() => setOpen(false)}
            >
              <HomeIcon className="h-[17px] w-[17px]" />
            </Link>
            <button
              type="button"
              className="flex items-center gap-2.5 text-ink"
              aria-expanded={open}
              aria-controls="menu-principal"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <span className="relative block h-3.5 w-3.5" aria-hidden>
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 rotate-45 bg-ink" />
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 -rotate-45 bg-ink" />
                </span>
              ) : (
                <span className="grid grid-cols-2 gap-0.5" aria-hidden>
                  <span className="h-1 w-1 rounded-full bg-ink" />
                  <span className="h-1 w-1 rounded-full bg-ink" />
                  <span className="h-1 w-1 rounded-full bg-ink" />
                  <span className="h-1 w-1 rounded-full bg-ink" />
                </span>
              )}
              <span className="font-sans text-[12px] font-medium uppercase tracking-nav md:text-[13px]">
                {open ? t.ui.close : t.ui.menu}
              </span>
            </button>
            <span className="hidden h-4 w-px bg-line sm:block" aria-hidden />
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
          </div>

          <Link
            href={localizePath(locale, "/")}
            className="justify-self-center"
            onClick={() => setOpen(false)}
          >
            <Logo header />
          </Link>

          <div className="flex items-center justify-end gap-4 justify-self-end md:gap-5">
            <Link
              href={localizePath(locale, "/boutique")}
              className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-nav md:text-[13px]"
              onClick={() => setOpen(false)}
            >
              <ShopBagIcon className="h-[17px] w-[17px]" />
              {t.ui.shop}
            </Link>
            <span className="h-4 w-px shrink-0 bg-line" aria-hidden />
            <Link
              href={localizePath(locale, "/boutique/panier")}
              className="relative inline-flex items-center font-sans text-[12px] font-semibold uppercase tracking-nav md:text-[13px]"
              onClick={() => setOpen(false)}
            >
              {t.ui.cart}
              {count > 0 && (
                <span className="absolute -top-2 left-full ml-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-ink px-1 text-[10px] font-medium tracking-normal text-paper">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
