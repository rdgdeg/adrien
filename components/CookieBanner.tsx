"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";
import { useSplash } from "@/components/Splash";

const STORAGE_KEY = "degavre-cookies";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export function CookieBanner() {
  const [consentNeeded, setConsentNeeded] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const { locale, t } = useLocale();
  const { ready: splashReady } = useSplash();

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setConsentNeeded(true);
  }, []);

  function save(consent: Consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setConsentNeeded(false);
  }

  if (!splashReady || !consentNeeded) return null;

  return (
    <div
      data-cookie-banner
      className="fixed inset-x-3 z-[90] border border-line bg-paper p-4 shadow-2xl animate-fade-up sm:inset-x-auto sm:left-4 sm:w-[min(100%-2rem,420px)] sm:p-5"
      style={{
        bottom: "calc(4.75rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <p className="text-[12px] font-semibold uppercase tracking-nav sm:text-[13px]">
        {t.cookies.title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:mt-3 sm:text-base">
        {t.cookies.text}{" "}
        <Link
          href={localizePath(locale, "/confidentialite")}
          className="underline underline-offset-4"
        >
          {t.cookies.more}
        </Link>
      </p>

      {customize && (
        <div className="mt-4 space-y-3 text-sm sm:text-base">
          <label className="flex items-start gap-3">
            <input type="checkbox" checked disabled className="mt-1" />
            {t.cookies.necessary}
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(event) => setAnalytics(event.target.checked)}
              className="mt-1"
            />
            {t.cookies.analytics}
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(event) => setMarketing(event.target.checked)}
              className="mt-1"
            />
            {t.cookies.marketing}
          </label>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-2 text-[11px] uppercase tracking-nav sm:mt-5 sm:grid-cols-3 sm:text-[12px]">
        <button
          type="button"
          className="min-h-11 border border-line px-2 py-2.5 hover:bg-paper-deep"
          onClick={() =>
            save({ necessary: true, analytics: false, marketing: false })
          }
        >
          {t.cookies.refuse}
        </button>
        <button
          type="button"
          className="min-h-11 border border-line px-2 py-2.5 hover:bg-paper-deep"
          onClick={() => setCustomize((value) => !value)}
        >
          {customize ? t.cookies.save : t.cookies.customize}
        </button>
        <button
          type="button"
          className="min-h-11 bg-ink px-2 py-2.5 text-paper hover:bg-moss-deep"
          onClick={() => {
            if (customize) {
              save({ necessary: true, analytics, marketing });
            } else {
              save({ necessary: true, analytics: true, marketing: true });
            }
          }}
        >
          {t.cookies.accept}
        </button>
      </div>
    </div>
  );
}
