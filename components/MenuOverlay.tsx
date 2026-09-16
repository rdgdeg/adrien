"use client";

import Link from "next/link";
import { FacebookLink } from "@/components/FacebookLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { site } from "@/lib/content";
import { useLocale } from "@/lib/i18n/locale-context";
import { localizePath } from "@/lib/i18n/config";

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { locale, t } = useLocale();

  const items = [
    {
      label: t.nav.domaine,
      href: "/domaine",
      children: [
        { label: t.nav.children.vignoble, href: "/domaine#vignoble" },
        { label: t.nav.children.terroir, href: "/domaine#terroir" },
        { label: t.nav.children.ferme, href: "/domaine#ferme" },
      ],
    },
    {
      label: t.nav.vins,
      href: "/vins",
      children: [
        { label: t.nav.children.bdb, href: "/vins/blanc-de-blancs" },
        { label: t.nav.children.bdn, href: "/vins/blanc-de-noir" },
        { label: t.nav.children.boutiqueOnline, href: "/boutique" },
        { label: t.nav.children.pro, href: "/professionnels" },
      ],
    },
    {
      label: t.nav.boutique,
      href: "/boutique",
      children: [
        { label: t.nav.children.allCuvees, href: "/boutique" },
        { label: t.nav.children.panier, href: "/boutique/panier" },
      ],
    },
    {
      label: t.nav.visites,
      href: "/visites",
      children: [
        { label: t.nav.children.degustation, href: "/visites#degustation" },
        { label: t.nav.children.vendanges, href: "/visites#vendanges" },
        { label: t.nav.children.patrimoine, href: "/visites#patrimoine" },
      ],
    },
    { label: t.nav.actualites, href: "/actualites", children: [] },
    { label: t.nav.galerie, href: "/galerie", children: [] },
    {
      label: t.nav.contact,
      href: "/contact",
      children: [
        { label: t.nav.children.trouver, href: "/contact#acces" },
        { label: t.nav.children.ecrire, href: "/contact#ecrire" },
      ],
    },
    { label: t.nav.pro, href: "/professionnels", children: [] },
    { label: t.nav.presse, href: "/presse", children: [] },
    { label: t.nav.faq, href: "/faq", children: [] },
  ];

  return (
    <div
      id="menu-principal"
      className={`fixed inset-0 z-40 bg-[#faf8f4] transition-opacity duration-500 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col overflow-y-auto px-5 pb-28 pt-24 sm:px-6 md:px-12 md:pb-16 md:pt-32 lg:max-w-7xl">
        <div className="mb-6 flex justify-end sm:mb-8 sm:hidden">
          <LanguageSwitcher />
        </div>
        <div
          className={`grid gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 ${open ? "menu-ready" : ""}`}
        >
          {items.map((item) => (
            <div key={item.href} className="menu-col">
              <Link
                href={localizePath(locale, item.href)}
                onClick={onClose}
                className="font-serif text-[1.65rem] leading-tight italic text-ink transition-colors hover:text-moss sm:text-[2rem] md:text-[2.25rem]"
              >
                {item.label}
              </Link>
              {item.children.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={localizePath(locale, child.href)}
                        onClick={onClose}
                        className="font-sans text-[13px] font-medium uppercase tracking-nav text-ink-soft transition-colors hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-4 border-t border-line pt-10 text-[13px] text-ink-soft md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-sans uppercase tracking-nav">{site.address}</p>
            <p>{site.city}</p>
            <a
              href={site.phoneHref}
              className="mt-2 inline-block text-ink hover:text-moss"
            >
              {site.phone}
            </a>
          </div>
          <FacebookLink
            className="h-10 w-10 rounded-full border border-line"
            iconClassName="h-5 w-5"
          />
        </div>
      </div>
    </div>
  );
}
