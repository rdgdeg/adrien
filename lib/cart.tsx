"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, products, site } from "@/lib/content";

export type CartLine = { slug: string; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  shipping: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "degavre-panier";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const value = useMemo(() => {
    const add = (slug: string, quantity = 1) => {
      if (!getProduct(slug)) return;
      setLines((current) => {
        const existing = current.find((line) => line.slug === slug);
        if (existing) {
          return current.map((line) =>
            line.slug === slug
              ? { ...line, quantity: line.quantity + quantity }
              : line,
          );
        }
        return [...current, { slug, quantity }];
      });
    };

    const setQuantity = (slug: string, quantity: number) => {
      setLines((current) =>
        quantity <= 0
          ? current.filter((line) => line.slug !== slug)
          : current.map((line) =>
              line.slug === slug ? { ...line, quantity } : line,
            ),
      );
    };

    const remove = (slug: string) =>
      setLines((current) => current.filter((line) => line.slug !== slug));

    const clear = () => setLines([]);

    const detailed = lines
      .map((line) => {
        const product = products.find((item) => item.slug === line.slug);
        return product ? { ...line, product } : null;
      })
      .filter(Boolean);

    const subtotal = detailed.reduce(
      (sum, line) => sum + (line?.product.price ?? 0) * (line?.quantity ?? 0),
      0,
    );
    const shipping =
      subtotal === 0 || subtotal >= site.shippingFreeFrom ? 0 : site.shipping;
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);

    return {
      lines,
      add,
      setQuantity,
      remove,
      clear,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
