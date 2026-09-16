import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata = {
  title: "Le domaine",
  description:
    "Vignoble familial à Ostiches : cépages nobles, terroir de limons, ferme de Martincamps depuis 1772.",
};

export default function DomainePage() {
  return (
    <main>
      <PageHero
        title="Le domaine"
        subtitle="Une ferme de 1772, un vignoble planté en 2019, un crémant né au Pays des Collines."
        image="/photos/vignoble.jpg"
        alt="Vignoble à Ostiches"
      />

      <section id="vignoble" className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-[11px] font-light uppercase tracking-nav text-moss">
          Ostiches · Ath
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">
          Objectif bulles
        </h2>
        <p className="mt-6 leading-relaxed text-ink-soft">
          Petit village agricole rattaché à Ath, Ostiches abrite la ferme
          Degavre depuis {site.foundedFarm}. Grandes cultures, pommes de terre
          et blondes d’Aquitaine ont longtemps fait vivre la famille. En
          reprenant l’exploitation, Adrien Degavre, agronome et maître-assistant
          à la Haute École Condorcet, a choisi une diversification précise : le
          vin effervescent.
        </p>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Le 27 avril 2019, 12 000 pieds sont plantés sur 2,2 hectares à
          l’avant de la ferme. Surprise : plutôt que des cépages résistants,
          Adrien opte pour les variétés classiques — 6 000 Chardonnay, puis
          Pinot blanc, Pinot noir et Auxerrois, 2 000 pieds chacun, et quelques
          pieds de Solaris « pour essayer ».
        </p>
        <p className="mt-4 leading-relaxed text-ink-soft">
          En 2022, le vignoble double : deux hectares de Chardonnay, parcelle
          plein sud, ventée, pour un feuillage plus sec et moins de mildiou.
        </p>
      </section>

      <section
        id="terroir"
        className="bg-paper-deep px-6 py-24"
      >
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-light uppercase tracking-nav text-moss">
              Terroir
            </p>
            <h2 className="mt-4 font-serif text-4xl">Limons profonds</h2>
            <p className="mt-6 leading-relaxed text-ink-soft">
              On associe souvent le crémant aux sols calcaires de Champagne, du
              Ruffus ou du Chant d’Éole. Ici, ce n’est pas le cas : des limons
              très profonds, assez riches, et une vigne très productive.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Le travail est en agriculture raisonnée : pas de désherbage
              chimique, des pieds travaillés manuellement, les outils de la
              ferme adaptés à la viticulture. Marc Degavre, le père d’Adrien,
              accompagne l’installation du vignoble depuis le premier piquet.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-8 self-center">
            {[
              ["1772", "Ferme familiale"],
              ["12 000", "Pieds plantés en 2019"],
              ["4 ha", "Vignoble aujourd’hui"],
              ["2023", "Premières bouteilles"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-serif text-4xl italic">{value}</dt>
                <dd className="mt-2 text-[12px] font-light uppercase tracking-nav text-ink-soft">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="ferme" className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-[11px] font-light uppercase tracking-nav text-moss">
          Patrimoine
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">
          La cense de Martincamps
        </h2>
        <p className="mt-6 leading-relaxed text-ink-soft">
          Au XVIIIe siècle, la ferme s’appelait la cense de Martincamps. C’est
          un quadrilatère de bâtiments en brique, daté de 1772, dans le hameau
          de Pidebecq. La tour-colombier, en brique et pierre calcaire, est
          surmontée d’une girouette en forme de cheval.
        </p>
        <p className="mt-4 leading-relaxed text-ink-soft">
          La vinification se fait dans une aile restaurée : l’ancienne étable
          accueille désormais pressoir et cuves. Le lieu ouvre parfois au
          public, notamment lors des Journées du patrimoine et du circuit du
          patrimoine gourmand d’Ostiches.
        </p>
      </section>
    </main>
  );
}
