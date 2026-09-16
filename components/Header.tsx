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

function CartIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 6h2.2l1.3 10.2a1.5 1.5 0 0 0 1.5 1.3h8.3a1.5 1.5 0 0 0 1.5-1.25L20 9H8"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.2" fill="currentColor" />
      <circle cx="17" cy="20" r="1.2" fill="currentColor" />
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-paper/96 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3 md:gap-6 md:px-10 md:py-4">
          <div className="flex min-w-0 items-center gap-2 justify-self-start sm:gap-3 md:gap-5">
            <Link
              href={localizePath(locale, "/")}
              aria-label={t.ui.home}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-ink transition-colors hover:text-moss"
              onClick={() => setOpen(false)}
            >
              <HomeIcon className="h-[18px] w-[18px]" />
            </Link>
            <button
              type="button"
              className="flex h-10 items-center gap-2 text-ink"
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
              <span className="font-sans text-[11px] font-medium uppercase tracking-nav sm:text-[12px] md:text-[13px]">
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

          <div className="flex items-center justify-end gap-1 justify-self-end sm:gap-3 md:gap-5">
            <Link
              href={localizePath(locale, "/boutique")}
              aria-label={t.ui.shop}
              className="inline-flex h-10 items-center gap-2 px-1.5 font-sans text-[12px] font-semibold uppercase tracking-nav md:px-0 md:text-[13px]"
              onClick={() => setOpen(false)}
            >
              <ShopBagIcon className="h-[18px] w-[18px]" />
              <span className="hidden sm:inline">{t.ui.shop}</span>
            </Link>
            <span
              className="hidden h-4 w-px shrink-0 bg-line sm:block"
              aria-hidden
            />
            <Link
              href={localizePath(locale, "/boutique/panier")}
              aria-label={t.ui.cart}
              className="relative inline-flex h-10 items-center px-1.5 font-sans text-[12px] font-semibold uppercase tracking-nav md:px-0 md:text-[13px]"
              onClick={() => setOpen(false)}
            >
              <CartIcon className="h-[18px] w-[18px] sm:hidden" />
              <span className="hidden sm:inline">{t.ui.cart}</span>
              {count > 0 && (
                <span className="absolute top-0.5 right-0 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-ink px-1 text-[9px] font-medium tracking-normal text-paper sm:-top-1.5 sm:left-full sm:right-auto sm:ml-1.5 sm:h-[18px] sm:min-w-[18px] sm:text-[10px]">
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
