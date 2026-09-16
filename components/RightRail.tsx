"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";

function ShoppingBagIcon({ className = "h-5 w-5" }: { className?: string }) {
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

export function RightRail() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const { count } = useCart();
  const { locale, t } = useLocale();

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 320);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visitActions = [
    { href: "/visites", label: t.rail.visit },
    { href: "/visites#degustation", label: t.rail.taste },
    { href: "/contact", label: t.rail.write },
    { href: "/boutique", label: t.rail.shop },
  ];

  return (
    <>
      {/* Onglet visite + panier, centrés verticalement à droite */}
      <div className="fixed top-1/2 right-0 z-40 flex -translate-y-1/2 flex-col items-end">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="hidden border border-line border-r-0 border-b-0 bg-paper-deep px-2.5 py-10 font-sans text-[12px] font-medium uppercase tracking-nav text-ink shadow-sm transition-colors hover:bg-paper md:block"
          style={{ writingMode: "vertical-rl" }}
        >
          {t.ui.visitTab}
        </button>

        <Link
          href={localizePath(locale, "/boutique/panier")}
          aria-label={t.ui.cart}
          className="relative flex h-14 w-14 items-center justify-center border border-line border-r-0 bg-ink text-paper shadow-md transition-colors hover:bg-ink-soft"
        >
          <ShoppingBagIcon className="h-6 w-6" />
          {count > 0 && (
            <span className="absolute -top-1.5 -left-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-sans font-semibold tracking-normal text-ink">
              {count}
            </span>
          )}
        </Link>
      </div>

      {/* Remonter en haut — bas droite, au-dessus du bandeau légal */}
      <button
        type="button"
        aria-label={t.ui.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-0 bottom-16 z-40 flex h-12 w-12 items-center justify-center border border-line border-r-0 bg-paper-deep text-ink shadow-sm transition-all duration-300 hover:bg-paper md:bottom-[3.25rem] ${
          showTop
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-4 opacity-0"
        }`}
      >
        <span className="text-lg leading-none" aria-hidden>
          ↑
        </span>
      </button>

      <div
        className={`fixed inset-y-0 right-0 z-[60] w-[min(100%,28rem)] border-l border-line bg-paper shadow-2xl transition-transform duration-500 ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-10 py-12">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="self-end font-sans text-[11px] font-medium uppercase tracking-nav text-ink-soft hover:text-ink"
          >
            {t.ui.close}
          </button>
          <p className="mt-10 font-script text-2xl text-moss">Ostiches</p>
          <h2 className="font-display text-4xl font-semibold uppercase tracking-label">
            {t.rail.title}
          </h2>
          <p className="mt-4 text-ink-soft">{t.rail.text}</p>
          <ul className="mt-10 space-y-1">
            {visitActions.map((action) => (
              <li key={action.href}>
                <Link
                  href={localizePath(locale, action.href)}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 font-serif text-2xl italic transition-colors hover:text-moss"
                >
                  {action.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {open && (
        <button
          type="button"
          aria-label={t.ui.close}
          className="fixed inset-0 z-50 bg-ink/25 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
