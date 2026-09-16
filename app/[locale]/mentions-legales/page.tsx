import { site } from "@/lib/content";

export const metadata = {
  title: "Mentions légales",
};

export default function MentionsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-32">
      <h1 className="font-serif text-5xl italic">Mentions légales</h1>
      <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink-soft">
        <p>
          {site.company}
          <br />
          {site.address}, {site.city}, {site.country}
          <br />
          N° d’entreprise : {site.vat}
          <br />
          Téléphone : {site.phone}
        </p>
        <p>
          Ce site présente le Domaine Degavre et propose une boutique en ligne
          destinée aux majeurs. Les prix affichés sont TTC et indicatifs tant
          que le paiement n’est pas branché à un prestataire (Stripe,
          Bancontact, etc.).
        </p>
        <p>
          La vente d’alcool est interdite aux mineurs. L’accès à la boutique
          nécessite une confirmation d’âge. L’abus d’alcool est dangereux pour
          la santé ; à consommer avec modération.
        </p>
        <p>
          Les formulaires (contact, infolettre, commande) sont pour l’instant
          des démonstrations locales : aucun e-mail n’est envoyé vers un
          serveur. Pour joindre le domaine, utilisez le téléphone indiqué.
        </p>
      </div>
    </main>
  );
}
