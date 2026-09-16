import { InquiryForm } from "@/components/InquiryForm";
import type { InquirySubject } from "@/components/InquiryForm";

export function FormPanel({
  kicker,
  title,
  description,
  defaultSubject = "visite",
  idPrefix,
  showSubject = true,
  visitPack = false,
  messagePlaceholder,
  submitLabel,
  variant = "light",
}: {
  kicker?: string;
  title: string;
  description?: string;
  defaultSubject?: InquirySubject;
  idPrefix: string;
  showSubject?: boolean;
  visitPack?: boolean;
  messagePlaceholder?: string;
  submitLabel?: string;
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";

  return (
    <div
      className={
        dark
          ? "border border-paper/15 bg-paper/5 p-8 md:p-12"
          : "border border-line bg-paper-deep p-8 md:p-10"
      }
    >
      {kicker && (
        <p
          className={`font-sans text-[11px] font-medium uppercase tracking-nav ${
            dark ? "text-gold" : "text-moss"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-semibold uppercase tracking-label md:text-4xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-md leading-relaxed ${
            dark ? "text-paper/80" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
      <div className={description ? "mt-8" : "mt-6"}>
        <InquiryForm
          variant={variant}
          defaultSubject={defaultSubject}
          idPrefix={idPrefix}
          showSubject={showSubject}
          visitPack={visitPack}
          messagePlaceholder={messagePlaceholder}
          submitLabel={submitLabel}
        />
      </div>
    </div>
  );
}
