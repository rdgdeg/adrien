"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice, getProduct } from "@/lib/content";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";

export default function PanierPage() {
  const { lines, setQuantity, remove, subtotal, shipping, total } = useCart();
  const { locale, t } = useLocale();

  return (
    <main className="mx-auto max-w-4xl px-6 py-32">
      <p className="text-[13px] uppercase tracking-nav text-moss">
        {t.cart.kicker}
      </p>
      <h1 className="mt-3 font-serif text-5xl italic">{t.cart.title}</h1>

      {lines.length === 0 ? (
        <div className="mt-12">
          <p className="text-xl text-ink-soft">{t.cart.empty}</p>
          <Link
            href={localizePath(locale, "/boutique")}
            className="mt-6 inline-block text-[13px] uppercase tracking-nav underline decoration-gold underline-offset-8"
          >
            {t.cart.continue}
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              return (
                <li
                  key={line.slug}
                  className="grid gap-6 py-8 sm:grid-cols-[120px_1fr_auto]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl">{product.name}</h2>
                    <p className="mt-1 text-ink-soft">{product.volume}</p>
                    <div className="mt-4 flex items-center gap-4">
                      <input
                        type="number"
                        min={1}
                        max={12}
                        value={line.quantity}
                        onChange={(event) =>
                          setQuantity(
                            line.slug,
                            Number(event.target.value) || 1,
                          )
                        }
                        className="h-11 w-20 border border-line px-3 text-center"
                        aria-label={`${t.shop.qty} ${product.name}`}
                      />
                      <button
                        type="button"
                        onClick={() => remove(line.slug)}
                        className="text-[13px] uppercase tracking-nav underline underline-offset-4"
                      >
                        {t.cart.remove}
                      </button>
                    </div>
                  </div>
                  <p className="font-serif text-2xl">
                    {formatPrice(product.price * line.quantity, locale)}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 ml-auto max-w-sm space-y-3 text-lg">
            <div className="flex justify-between">
              <span>{t.cart.subtotal}</span>
              <span>{formatPrice(subtotal, locale)}</span>
            </div>
            <div className="flex justify-between">
              <span>{t.cart.shippingLabel}</span>
              <span>
                {shipping === 0
                  ? t.cart.shippingFree
                  : formatPrice(shipping, locale)}
              </span>
            </div>
            <div className="flex justify-between border-t border-line pt-3 font-serif text-2xl">
              <span>{t.cart.total}</span>
              <span>{formatPrice(total, locale)}</span>
            </div>
            <p className="text-base text-ink-soft">{t.cart.pickupNote}</p>
            <Link
              href={localizePath(locale, "/boutique/commande")}
              className="mt-4 flex h-12 items-center justify-center bg-ink text-[13px] uppercase tracking-nav text-paper hover:bg-moss-deep"
            >
              {t.cart.checkout}
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
