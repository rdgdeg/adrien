"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-serif text-4xl italic">Chargement interrompu</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        La page n’a pas pu se charger correctement. Rechargez pour réessayer.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="min-h-11 bg-ink px-6 text-[12px] uppercase tracking-nav text-paper hover:bg-moss-deep"
        >
          Recharger
        </button>
        <button
          type="button"
          onClick={reset}
          className="min-h-11 border border-line px-6 text-[12px] uppercase tracking-nav hover:bg-paper-deep"
        >
          Réessayer
        </button>
      </div>
    </main>
  );
}
