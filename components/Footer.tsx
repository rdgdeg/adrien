"use client";

import Link from "next/link";
import { FacebookLink } from "@/components/FacebookLink";
import { Logo } from "@/components/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { site } from "@/lib/content";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";

export function Footer() {
  const { locale, t } = useLocale();

  const sitemap = [
    {
      title: t.footer.columns.domaine,
      links: [
        { label: t.footer.links.presentation, href: "/domaine" },
        { label: t.footer.links.vignoble, href: "/domaine#vignoble" },
        { label: t.footer.links.ferme, href: "/domaine#ferme" },
        { label: t.footer.links.galerie, href: "/galerie" },
      ],
    },
    {
      title: t.footer.columns.vins,
      links: [
        { label: t.footer.links.cuvees, href: "/vins" },
        { label: t.footer.links.pro, href: "/professionnels" },
        { label: t.footer.links.boutique, href: "/boutique" },
        { label: t.footer.links.panier, href: "/boutique/panier" },
        { label: t.footer.links.actualites, href: "/actualites" },
      ],
    },
    {
      title: t.footer.columns.visit,
      links: [
        { label: t.footer.links.visites, href: "/visites" },
        { label: t.footer.links.contact, href: "/contact" },
        { label: t.footer.links.presse, href: "/presse" },
        { label: t.footer.links.faq, href: "/faq" },
      ],
    },
  ];

  const legalLinks = [
    { href: "/confidentialite", label: t.footer.privacy },
    { href: "/mentions-legales", label: t.footer.legal },
  ];

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="font-sans text-[13px] font-medium uppercase tracking-nav text-ink-soft">
              {t.footer.newsletter}
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              {t.footer.stayInformed}
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-soft">
              {t.footer.newsletterText}
            </p>
            <NewsletterForm />
          </div>

          <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
            <Logo />
            <address className="mt-6 not-italic text-base leading-relaxed text-ink-soft">
              {site.address}
              <br />
              {site.city}
              <br />
              {site.country}
            </address>
            <a
              href={site.phoneHref}
              className="mt-4 inline-block text-base tracking-wide hover:text-moss"
            >
              {site.phone}
            </a>
            <div className="mt-6 flex items-center gap-4">
              <FacebookLink
                className="h-11 w-11 rounded-full border border-line"
                iconClassName="h-5 w-5"
              />
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-14">
          <p className="font-sans text-[11px] font-medium uppercase tracking-nav text-ink-soft">
            {t.footer.sitemap}
          </p>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {sitemap.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-label text-ink">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={localizePath(locale, link.href)}
                        className="text-base text-ink-soft transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-sans text-[13px] font-medium uppercase tracking-nav text-ink-soft">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={localizePath(locale, link.href)}
              className="hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-10 text-sm tracking-wide text-ink-soft">
          © {new Date().getFullYear()} {site.name} · {t.footer.since}{" "}
          {site.foundedFarm}
        </p>
        <p className="mt-2 text-sm text-ink-soft">{t.ui.alcoholWarning}</p>
      </div>
    </footer>
  );
}
