"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Logo } from "@/components/Logo";
import { LogoMark } from "@/components/LogoMark";

export const SPLASH_STORAGE_KEY = "degavre-splash-seen";
const MIN_VISIBLE_MS = 1100;
const FADE_MS = 1400;

type SplashContextValue = {
  /** Splash en cours (première visite) */
  active: boolean;
  /** Prêt à afficher cookies / UI secondaire */
  ready: boolean;
};

const SplashContext = createContext<SplashContextValue>({
  active: true,
  ready: false,
});

export function useSplash() {
  return useContext(SplashContext);
}

export function SplashProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(true);
  const [ready, setReady] = useState(false);
  const [exiting, setExiting] = useState(false);

  const finish = useCallback(() => {
    document.documentElement.classList.add("splash-seen", "splash-done");
    document.body.style.overflow = "";
    localStorage.setItem(SPLASH_STORAGE_KEY, "1");
    setActive(false);
    setReady(true);
  }, []);

  useEffect(() => {
    const alreadySeen =
      localStorage.getItem(SPLASH_STORAGE_KEY) ||
      document.documentElement.classList.contains("splash-seen");

    if (alreadySeen) {
      document.documentElement.classList.add("splash-seen", "splash-done");
      document.body.style.overflow = "";
      setActive(false);
      setReady(true);
      return;
    }

    document.body.style.overflow = "hidden";
    let finished = false;
    const startedAt = Date.now();

    function dismiss() {
      if (finished) return;
      finished = true;
      setExiting(true);
      window.setTimeout(finish, FADE_MS);
    }

    function dismissAfterMinWait() {
      const elapsed = Date.now() - startedAt;
      const delay = Math.max(0, MIN_VISIBLE_MS - elapsed);
      window.setTimeout(dismiss, delay);
    }

    if (document.readyState === "complete") {
      dismissAfterMinWait();
    } else {
      window.addEventListener("load", dismissAfterMinWait, { once: true });
      return () => {
        window.removeEventListener("load", dismissAfterMinWait);
        document.body.style.overflow = "";
      };
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [finish]);

  const value = useMemo(
    () => ({ active, ready }),
    [active, ready],
  );

  return (
    <SplashContext.Provider value={value}>
      {children}
      {active && (
        <div
          data-splash-root
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-paper ${
            exiting ? "splash-exit" : ""
          }`}
          aria-hidden={exiting}
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <LogoMark
              size={320}
              className="splash-watermark max-h-[min(70vw,420px)] max-w-[min(70vw,420px)] opacity-[0.07] md:opacity-[0.08]"
            />
          </div>
          <div className="relative z-10 animate-fade-up">
            <Logo />
          </div>
        </div>
      )}
    </SplashContext.Provider>
  );
}
