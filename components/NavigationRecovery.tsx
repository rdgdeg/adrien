"use client";

import { useEffect } from "react";

/**
 * Après un déploiement Vercel, la navigation client peut échouer
 * (chunks JS obsolètes). On force un rechargement propre une fois.
 */
export function NavigationRecovery() {
  useEffect(() => {
    const FLAG = "degavre-chunk-reload";

    function shouldReload(message: string) {
      return (
        /Loading chunk [\w-]+ failed/i.test(message) ||
        /ChunkLoadError/i.test(message) ||
        /Failed to fetch RSC payload/i.test(message) ||
        /Failed to load chunk/i.test(message) ||
        /dynamically imported module/i.test(message)
      );
    }

    function recover(message: string) {
      if (!shouldReload(message)) return;
      if (sessionStorage.getItem(FLAG) === "1") return;
      sessionStorage.setItem(FLAG, "1");
      window.location.reload();
    }

    function onError(event: ErrorEvent) {
      recover(String(event.message ?? event.error?.message ?? ""));
    }

    function onRejection(event: PromiseRejectionEvent) {
      const reason = event.reason;
      const message =
        typeof reason === "string"
          ? reason
          : String(reason?.message ?? reason ?? "");
      recover(message);
    }

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);

    // Si on a déjà rechargé avec succès, on efface le drapeau
    const clear = window.setTimeout(() => {
      sessionStorage.removeItem(FLAG);
    }, 4000);

    return () => {
      window.clearTimeout(clear);
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
