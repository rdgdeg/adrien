"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { LogoMark } from "@/components/LogoMark";

const STORAGE_KEY = "degavre-splash-seen";
const MIN_VISIBLE_MS = 900;
const FADE_MS = 1800;

export function Splash() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    setVisible(true);
    let finished = false;
    const startedAt = Date.now();

    function dismiss() {
      if (finished) return;
      finished = true;
      setExiting(true);
      window.setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, "1");
        setVisible(false);
      }, FADE_MS);
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
      return () => window.removeEventListener("load", dismissAfterMinWait);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center bg-paper ${
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
  );
}
