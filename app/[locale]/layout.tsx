import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RightRail } from "@/components/RightRail";
import { Providers } from "@/components/Providers";
import { CookieBanner } from "@/components/CookieBanner";
import { LegalBanner } from "@/components/LegalBanner";
import { HtmlLang } from "@/components/HtmlLang";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);

  return (
    <Providers>
      <LocaleProvider locale={locale}>
        <HtmlLang locale={locale} />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-2"
        >
          {t.ui.skipToContent}
        </a>
        <Header />
        <RightRail />
        <div id="contenu" className="pb-28 md:pb-16">
          {children}
        </div>
        <Footer />
        <LegalBanner />
        <CookieBanner />
      </LocaleProvider>
    </Providers>
  );
}
