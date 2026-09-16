import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, localizePath, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return { title: "Confidentialité" };
}

export default async function ConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);

  return (
    <main className="mx-auto max-w-2xl px-6 py-32">
      <h1 className="font-serif text-5xl italic">{t.footer.privacy}</h1>
      <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink-soft">
        <p>
          Nous utilisons des cookies techniques nécessaires au fonctionnement
          du site (panier, préférence d’âge, consentement cookies). Les cookies
          d’analyse et publicitaires ne sont déposés qu’avec votre accord.
        </p>
        <p>
          Les données saisies dans les formulaires (contact, commande,
          infolettre) sont destinées au Domaine Degavre pour répondre à votre
          demande. Elles ne sont pas revendues.
        </p>
        <p>
          Vous pouvez modifier votre choix cookies à tout moment en effaçant
          les données locales du navigateur, ou nous écrire via la page{" "}
          <Link
            href={localizePath(locale, "/contact")}
            className="underline underline-offset-4"
          >
            {t.nav.contact}
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
