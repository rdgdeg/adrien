"use client";

import { useLocale } from "@/lib/i18n/locale-context";

export function NewsTicker() {
  const { t } = useLocale();
  const items = [...t.ticker, ...t.ticker];

  return (
    <div className="overflow-hidden border-y border-line bg-paper-deep py-4">
      <div className="animate-ticker flex w-max gap-16 pr-16">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-[12px] font-light uppercase tracking-nav text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
