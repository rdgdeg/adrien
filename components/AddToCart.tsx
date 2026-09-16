"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useLocale } from "@/lib/i18n/locale-context";

export function AddToCart({ slug }: { slug: string }) {
  const { add } = useCart();
  const { t } = useLocale();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function onAdd() {
    add(slug, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <label className="sr-only" htmlFor={`qty-${slug}`}>
        {t.shop.qty}
      </label>
      <input
        id={`qty-${slug}`}
        type="number"
        min={1}
        max={12}
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value) || 1)}
        className="h-12 w-20 border border-line bg-transparent px-3 text-center"
      />
      <button
        type="button"
        onClick={onAdd}
        className="h-12 bg-ink px-8 text-[13px] uppercase tracking-nav text-paper transition-colors hover:bg-moss-deep"
      >
        {added ? t.shop.added : t.shop.addToCart}
      </button>
    </div>
  );
}
