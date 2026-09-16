"use client";

import { InquiryForm } from "@/components/InquiryForm";

export function ContactForm({
  variant = "light",
  defaultSubject = "visite",
}: {
  variant?: "light" | "dark";
  defaultSubject?: "visite" | "achat" | "presse" | "autre";
}) {
  return (
    <InquiryForm
      variant={variant}
      defaultSubject={defaultSubject}
      idPrefix="contact"
    />
  );
}
