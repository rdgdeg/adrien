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
      setShowTop(window.scrollY > 280);
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
      {/* Visite + panier : desktop */}
      <div className="fixed top-1/2 right-0 z-40 hidden w-14 -translate-y-1/2 flex-col gap-2 md:flex">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex min-h-[7.5rem] w-full items-center justify-center border border-line border-r-0 bg-paper-deep py-6 font-sans text-[10px] font-medium uppercase leading-tight tracking-nav text-ink shadow-sm transition-colors hover:bg-paper"
          style={{ writingMode: "vertical-rl" }}
        >
          {t.ui.visitTab}
        </button>

        <Link
          href={localizePath(locale, "/boutique/panier")}
          aria-label={t.ui.cart}
          className="relative flex h-14 w-full items-center justify-center border border-line border-r-0 bg-ink text-paper shadow-md transition-colors hover:bg-ink-soft"
        >
          <ShoppingBagIcon className="h-6 w-6" />
          {count > 0 && (
            <span className="absolute -top-1.5 -left-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-sans font-semibold tracking-normal text-ink">
              {count}
            </span>
          )}
        </Link>
      </div>

      {/* Visite : onglet compact mobile (panier déjà dans le header) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed top-1/2 right-0 z-40 flex max-h-[40vh] -translate-y-1/2 items-center justify-center border border-line border-r-0 bg-paper-deep px-2 py-5 font-sans text-[9px] font-medium uppercase tracking-nav text-ink shadow-sm md:hidden"
        style={{ writingMode: "vertical-rl" }}
      >
        {t.ui.visitTab}
      </button>

      <button
        type="button"
        aria-label={t.ui.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-2 z-40 flex h-11 w-11 items-center justify-center border border-line bg-paper-deep text-ink shadow-sm transition-all duration-300 hover:bg-paper md:right-0 md:h-12 md:w-14 md:border-r-0 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
        style={{
          bottom: "calc(5.5rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <span className="text-lg leading-none" aria-hidden>
          ↑
        </span>
      </button>

      <div
        className={`fixed inset-y-0 right-0 z-[60] w-full max-w-md border-l border-line bg-paper shadow-2xl transition-transform duration-500 sm:w-[min(100%,28rem)] ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 py-10 pb-24 sm:px-10 sm:py-12">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="min-h-11 self-end px-2 font-sans text-[11px] font-medium uppercase tracking-nav text-ink-soft hover:text-ink"
          >
            {t.ui.close}
          </button>
          <p className="mt-6 font-script text-2xl text-moss sm:mt-10">
            Ostiches
          </p>
          <h2 className="font-display text-3xl font-semibold uppercase tracking-label sm:text-4xl">
            {t.rail.title}
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-[1.125rem]">
            {t.rail.text}
          </p>
          <ul className="mt-8 space-y-1 sm:mt-10">
            {visitActions.map((action) => (
              <li key={action.href}>
                <Link
                  href={localizePath(locale, action.href)}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 font-serif text-xl italic transition-colors hover:text-moss sm:text-2xl"
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
