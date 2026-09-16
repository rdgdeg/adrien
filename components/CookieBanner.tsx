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

  // Pas de cookies pendant le splash ; uniquement une fois le site révélé
  if (!splashReady || !consentNeeded) return null;

  return (
    <div
      data-cookie-banner
      className="fixed bottom-4 left-4 z-[90] w-[min(100%-2rem,420px)] border border-line bg-paper p-5 shadow-2xl animate-fade-up"
    >
      <p className="text-[13px] font-semibold uppercase tracking-nav">
        {t.cookies.title}
      </p>
      <p className="mt-3 text-base leading-relaxed text-ink-soft">
        {t.cookies.text}{" "}
        <Link
          href={localizePath(locale, "/confidentialite")}
          className="underline underline-offset-4"
        >
          {t.cookies.more}
        </Link>
      </p>

      {customize && (
        <div className="mt-4 space-y-3 text-base">
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

      <div className="mt-5 grid grid-cols-3 gap-2 text-[12px] uppercase tracking-nav">
        <button
          type="button"
          className="border border-line px-2 py-2 hover:bg-paper-deep"
          onClick={() =>
            save({ necessary: true, analytics: false, marketing: false })
          }
        >
          {t.cookies.refuse}
        </button>
        <button
          type="button"
          className="border border-line px-2 py-2 hover:bg-paper-deep"
          onClick={() => setCustomize((value) => !value)}
        >
          {customize ? t.cookies.save : t.cookies.customize}
        </button>
        <button
          type="button"
          className="bg-ink px-2 py-2 text-paper hover:bg-moss-deep"
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
