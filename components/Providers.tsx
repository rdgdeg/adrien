"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/lib/cart";
import { SplashProvider } from "@/components/Splash";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <SplashProvider>{children}</SplashProvider>
    </CartProvider>
  );
}
