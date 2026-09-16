"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";

const STORAGE_KEY = "degavre-age";

export function AgeGate({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { locale, t } = useLocale();
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    setAllowed(localStorage.getItem(STORAGE_KEY) === "oui");
  }, []);

  function confirm() {
    localStorage.setItem(STORAGE_KEY, "oui");
    setAllowed(true);
  }

  function deny() {
    router.push(localizePath(locale, "/"));
  }

  if (allowed) return children;
  if (allowed === null) {
    return <div className="min-h-screen bg-paper" />;
  }

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center bg-paper">
      <Image
        src="/photos/cour.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative mx-6 w-full max-w-lg bg-paper px-8 py-12 text-center shadow-2xl animate-fade-up">
        <Logo />
        <h1 className="mt-8 font-serif text-4xl italic md:text-5xl">
          {t.ageGate.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          {t.ageGate.text}
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={confirm}
            className="bg-ink px-4 py-3 text-[13px] uppercase tracking-nav text-paper hover:bg-moss-deep"
          >
            {t.ageGate.yes}
          </button>
          <button
            type="button"
            onClick={deny}
            className="border border-line px-4 py-3 text-[13px] uppercase tracking-nav hover:bg-paper-deep"
          >
            {t.ageGate.no}
          </button>
        </div>
        <p className="mt-6 text-sm text-ink-soft">{t.ui.alcoholWarning}</p>
      </div>
    </div>
  );
}
