"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";

export type InquirySubject = "visite" | "achat" | "presse" | "pro" | "autre";

export function InquiryForm({
  variant = "light",
  defaultSubject = "visite",
  idPrefix = "inquiry",
  showSubject = true,
  visitPack = false,
  messagePlaceholder,
  submitLabel,
}: {
  variant?: "light" | "dark";
  defaultSubject?: InquirySubject;
  idPrefix?: string;
  showSubject?: boolean;
  visitPack?: boolean;
  messagePlaceholder?: string;
  submitLabel?: string;
}) {
  const [done, setDone] = useState(false);
  const { t } = useLocale();
  const dark = variant === "dark";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }

  const labelClass = dark
    ? "font-sans text-[11px] font-medium uppercase tracking-nav text-paper/70"
    : "font-sans text-[11px] font-medium uppercase tracking-nav text-ink-soft";
  const fieldClass = dark
    ? "mt-2 w-full border-b border-paper/35 bg-transparent py-2.5 text-paper outline-none placeholder:text-paper/40 focus:border-gold"
    : "mt-2 w-full border-b border-ink bg-transparent py-2.5 outline-none placeholder:text-ink-soft/60 focus:border-moss";
  const buttonClass = dark
    ? "font-sans text-[11px] font-medium uppercase tracking-nav text-gold underline decoration-gold/60 underline-offset-8 hover:text-paper"
    : "font-sans text-[11px] font-medium uppercase tracking-nav text-ink underline decoration-gold underline-offset-8 hover:text-moss";

  const subjects: { value: InquirySubject; label: string }[] = [
    { value: "visite", label: t.form.subjects.visite },
    { value: "achat", label: t.form.subjects.achat },
    { value: "presse", label: t.form.subjects.presse },
    { value: "pro", label: t.form.subjects.pro },
    { value: "autre", label: t.form.subjects.autre },
  ];

  if (done) {
    return (
      <p
        className={`font-serif text-2xl italic ${dark ? "text-gold" : "text-moss"}`}
      >
        {t.form.thanks}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div>
        <label htmlFor={`${idPrefix}-nom`} className={labelClass}>
          {t.form.name}
        </label>
        <input
          id={`${idPrefix}-nom`}
          name="nom"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-email`} className={labelClass}>
          {t.form.email}
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>
      {visitPack && (
        <>
          <div>
            <label htmlFor={`${idPrefix}-date`} className={labelClass}>
              {t.visites.labelDate}
            </label>
            <input
              id={`${idPrefix}-date`}
              name="date"
              type="date"
              required
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-guests`} className={labelClass}>
              {t.visites.labelGuests}
            </label>
            <input
              id={`${idPrefix}-guests`}
              name="guests"
              type="number"
              min={2}
              max={12}
              defaultValue={4}
              required
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-lang`} className={labelClass}>
              {t.visites.labelLang}
            </label>
            <select
              id={`${idPrefix}-lang`}
              name="langue"
              className={fieldClass}
              defaultValue="FR"
            >
              <option value="FR">FR</option>
              <option value="NL">NL</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </>
      )}
      {showSubject && (
        <div>
          <label htmlFor={`${idPrefix}-sujet`} className={labelClass}>
            {t.form.subject}
          </label>
          <select
            id={`${idPrefix}-sujet`}
            name="sujet"
            className={fieldClass}
            defaultValue={defaultSubject}
          >
            {subjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label htmlFor={`${idPrefix}-message`} className={labelClass}>
          {t.form.message}
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required={!visitPack}
          rows={visitPack ? 3 : 5}
          placeholder={messagePlaceholder}
          className={fieldClass}
        />
      </div>
      <button type="submit" className={buttonClass}>
        {submitLabel ?? t.form.send}
      </button>
    </form>
  );
}
