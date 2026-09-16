"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Logo } from "@/components/Logo";
import { LogoMark } from "@/components/LogoMark";

export const SPLASH_STORAGE_KEY = "degavre-splash-seen";
const MIN_VISIBLE_MS = 1200;
const FADE_MS = 900;

type SplashContextValue = {
  active: boolean;
  ready: boolean;
};

const SplashContext = createContext<SplashContextValue>({
  active: true,
  ready: false,
});

export function useSplash() {
  return useContext(SplashContext);
}

/** Masque le splash HTML via CSS — ne jamais le retirer du DOM (React le gère). */
function hideBootSplashWithCss(mode: "seen" | "handoff") {
  const root = document.documentElement;
  if (mode === "seen") {
    root.classList.add("splash-seen");
    root.classList.remove("splash-handoff");
  } else {
    root.classList.add("splash-handoff");
  }
}

export function SplashProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(true);
  const [ready, setReady] = useState(false);
  const [exiting, setExiting] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  const finish = useCallback(() => {
    localStorage.setItem(SPLASH_STORAGE_KEY, "1");
    hideBootSplashWithCss("seen");
    document.body.style.overflow = "";
    setActive(false);
    setReady(true);
  }, []);

  useEffect(() => {
    const alreadySeen =
      Boolean(localStorage.getItem(SPLASH_STORAGE_KEY)) ||
      document.documentElement.classList.contains("splash-seen");

    if (alreadySeen) {
      hideBootSplashWithCss("seen");
      document.body.style.overflow = "";
      setActive(false);
      setReady(true);
      return;
    }

    // React affiche son overlay : on masque le boot splash en CSS uniquement
    hideBootSplashWithCss("handoff");
    document.body.style.overflow = "hidden";

    let finished = false;
    const startedAt = Date.now();

    function dismiss() {
      if (finished) return;
      finished = true;
      setExiting(true);
      timers.current.push(window.setTimeout(finish, FADE_MS));
    }

    function scheduleDismiss() {
      const elapsed = Date.now() - startedAt;
      const delay = Math.max(0, MIN_VISIBLE_MS - elapsed);
      timers.current.push(window.setTimeout(dismiss, delay));
    }

    if (document.readyState === "complete") {
      scheduleDismiss();
    } else {
      window.addEventListener("load", scheduleDismiss, { once: true });
    }

    return () => {
      clearTimers();
      window.removeEventListener("load", scheduleDismiss);
      document.body.style.overflow = "";
    };
  }, [finish, clearTimers]);

  const value = useMemo(() => ({ active, ready }), [active, ready]);

  return (
    <SplashContext.Provider value={value}>
      {children}
      {active && (
        <div
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
