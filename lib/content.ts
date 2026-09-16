export const site = {
  name: "Domaine Degavre",
  tagline: "Ostiches",
  region: "Pays des Collines",
  address: "Chemin des Prés de Pidebecq 9",
  city: "7804 Ostiches (Ath)",
  country: "Belgique",
  phone: "+32 474 82 06 73",
  phoneHref: "tel:+32474820673",
  facebook: "https://www.facebook.com/domainedegavre/",
  company: "DEGAVRE Adrien",
  vat: "BE0697.826.017",
  foundedFarm: 1772,
  vineyardPlanted: 2019,
  shipping: 8,
  shippingFreeFrom: 80,
};

export const nav = [
  {
    label: "Le Domaine",
    href: "/domaine",
    children: [
      { label: "Vignoble", href: "/domaine#vignoble" },
      { label: "Terroir", href: "/domaine#terroir" },
      { label: "La ferme de Martincamps", href: "/domaine#ferme" },
    ],
  },
  {
    label: "Les Vins",
    href: "/vins",
    children: [
      { label: "Crémant Blanc de Blancs", href: "/vins/blanc-de-blancs" },
      { label: "Crémant Blanc de Noir", href: "/vins/blanc-de-noir" },
      { label: "Boutique en ligne", href: "/boutique" },
    ],
  },
  {
    label: "Boutique",
    href: "/boutique",
    children: [
      { label: "Toutes les cuvées", href: "/boutique" },
      { label: "Panier", href: "/boutique/panier" },
    ],
  },
  {
    label: "Visites",
    href: "/visites",
    children: [
      { label: "Dégustation", href: "/visites#degustation" },
      { label: "Vendanges", href: "/visites#vendanges" },
      { label: "Patrimoine", href: "/visites#patrimoine" },
    ],
  },
  {
    label: "Actualités",
    href: "/actualites",
    children: [],
  },
  {
    label: "Galerie",
    href: "/galerie",
    children: [],
  },
  {
    label: "Accès",
    href: "/contact",
    children: [
      { label: "Nous trouver", href: "/contact#acces" },
      { label: "Contact", href: "/contact#ecrire" },
      { label: "Presse", href: "/presse" },
    ],
  },
];

export const footerSitemap = [
  {
    title: "Le domaine",
    links: [
      { label: "Présentation", href: "/domaine" },
      { label: "Vignoble", href: "/domaine#vignoble" },
      { label: "La ferme", href: "/domaine#ferme" },
      { label: "Galerie", href: "/galerie" },
    ],
  },
  {
    title: "Vins & boutique",
    links: [
      { label: "Nos cuvées", href: "/vins" },
      { label: "La boutique", href: "/boutique" },
      { label: "Panier", href: "/boutique/panier" },
      { label: "Actualités", href: "/actualites" },
    ],
  },
  {
    title: "Visiter & contact",
    links: [
      { label: "Visites", href: "/visites" },
      { label: "Accès", href: "/contact#acces" },
      { label: "Nous écrire", href: "/contact#ecrire" },
      { label: "Presse", href: "/presse" },
    ],
  },
];

export const universes = [
  {
    title: "Le vignoble",
    href: "/domaine",
    image: "/photos/vignoble.jpg",
    alt: "Rangs de vigne au soleil couchant, Ostiches",
  },
  {
    title: "Les crémants",
    href: "/vins",
    image: "/photos/cour.jpg",
    alt: "Crémants Degavre dans la cour de Martincamps",
  },
  {
    title: "Visites & dégustations",
    href: "/visites",
    image: "/photos/verres.jpg",
    alt: "Dégustation face à la tour-colombier",
  },
  {
    title: "La ferme",
    href: "/domaine#ferme",
    image: "/photos/cour.jpg",
    alt: "Cour de la ferme de Martincamps",
  },
];

export const wines = [
  {
    slug: "blanc-de-blancs",
    name: "Crémant Blanc de Blancs",
    vintage: "2021",
    appellation: "AOP Crémant de Wallonie",
    style: "Brut",
    grapes: "50 % Chardonnay, 25 % Pinot blanc, 25 % Auxerrois",
    price: 25,
    volume: "75 cl",
    image: "/photos/cour.jpg",
    nose: "Belle fraîcheur, pomme verte et subtiles notes de fleurs blanches.",
    palate:
      "Bulles fines, tension et netteté. Un blanc de blancs de tradition, assemblé des trois cépages blancs du domaine.",
    pairing: "Apéritif, poissons, crustacés, fromages frais.",
    stock: true,
  },
  {
    slug: "blanc-de-noir",
    name: "Crémant Blanc de Noir",
    vintage: "2021",
    appellation: "AOP Crémant de Wallonie",
    style: "Brut · 100 % Pinot noir · vieilli sur lattes",
    grapes: "100 % Pinot noir",
    price: 27,
    volume: "75 cl",
    image: "/photos/verres.jpg",
    nose: "Fraîcheur, pomme verte, fleurs blanches.",
    palate:
      "Fines bulles, structure et longueur, avec des notes subtiles de fruits rouges en fin de bouche.",
    pairing: "Apéritif, entrée de poisson ou viande blanche, desserts.",
    stock: true,
  },
];

export const products = [
  ...wines,
  {
    slug: "coffret-decouverte",
    name: "Coffret découverte",
    vintage: "2021",
    appellation: "AOP Crémant de Wallonie",
    style: "Blanc de Blancs + Blanc de Noir",
    grapes: "Les deux cuvées du domaine",
    price: 49,
    volume: "2 × 75 cl",
    image: "/photos/cour.jpg",
    nose: "Un voyage entre la tension du blanc de blancs et la structure du pinot noir.",
    palate: "Le coffret idéal pour découvrir le domaine, à offrir ou à partager.",
    pairing: "Table festive, cadeau, dégustation à deux.",
    stock: true,
  },
];

export const news = [
  {
    slug: "vendanges-2024",
    date: "8 octobre 2024",
    category: "Vignoble",
    title: "Vendanges 2024 : une année compliquée",
    excerpt:
      "Trois journées ont suffi pour récolter la parcelle historique. Rendement en recul de 65 % après une saison humide, le mildiou et la grêle.",
    image: "/photos/vendanges.jpg",
    body: [
      "Les vendanges au Domaine Degavre se sont achevées dans une ambiance chaleureuse, malgré une année climatique particulièrement difficile.",
      "Adrien Degavre a planté 12 000 pieds sur plus de deux hectares en 2019. Les premières vendanges manuelles ont eu lieu en 2021 ; les premières bouteilles d’AOP Crémant de Wallonie ont été commercialisées en 2023.",
      "En 2024, trois journées ont suffi là où huit avaient été nécessaires l’année précédente. Humidité à la floraison, mildiou, grêle de juillet : le rendement a chuté de plus de 65 % par rapport à une année normale. Une tour antigel et un canon à chaleur avaient toutefois permis d’éviter le gel d’avril.",
      "Bonne nouvelle : la parcelle de Chardonnay plantée en 2022 a connu sa première récolte, pour la première fois à la machine. Ce vin effervescent, hors AOP car non vendangé à la main, sera à déguster vers 2026-2027, comme la cuvée 2024 du crémant.",
    ],
  },
  {
    slug: "cremant-de-wallonie",
    date: "11 septembre 2023",
    category: "Les vins",
    title: "Les premières bouteilles de crémant",
    excerpt:
      "Après quatre années et 12 000 pieds, le domaine commercialise son Blanc de Blancs : Chardonnay, Pinot blanc et Auxerrois.",
    image: "/photos/verres.jpg",
    body: [
      "Lorsqu’il a repris la ferme familiale à Ostiches, Adrien Degavre a choisi de diversifier l’exploitation par le crémant : un blanc de blancs, assemblage de Chardonnay, Pinot blanc et Auxerrois.",
      "Presque tout se fait au domaine. Un pressoir d’occasion et des cuves neuves ont été installés dans une ancienne étable. Seules la mise en bouteille et le dégorgement, qui demandent des machines très coûteuses, sont assurés par un prestataire français venu travailler sur place.",
      "Le terroir n’est pas calcaire comme en Champagne. Ici, des limons profonds et riches, très productifs pour la vigne. Une seconde parcelle a été plantée ; un Pinot noir a suivi.",
    ],
  },
  {
    slug: "patrimoine-martincamps",
    date: "Septembre",
    category: "La ferme",
    title: "La cense de Martincamps ouvre ses portes",
    excerpt:
      "Quadrilatère en briques de 1772, tour-colombier à girouette en forme de cheval : la ferme Degavre accueille les Journées du patrimoine.",
    image: "/photos/cour.jpg",
    body: [
      "Située dans le hameau de Pidebecq, la ferme Degavre était au XVIIIe siècle la cense de Martincamps. C’est un quadrilatère de bâtiments en brique, daté de 1772. La tour-colombier, en brique et pierre calcaire, est surmontée d’une girouette en forme de cheval.",
      "Ces dernières années, l’exploitation agricole a fait le pari de la diversification en plantant 12 000 pieds de vigne. Lors des Journées du patrimoine et des circuits gourmands d’Ostiches, le domaine ouvre ses portes pour des visites et dégustations.",
    ],
  },
  {
    slug: "nouvelle-parcelle",
    date: "Avril 2022",
    category: "Vignoble",
    title: "Deux hectares de Chardonnay plein sud",
    excerpt:
      "Une parcelle venteuse, orientée au soleil, pour limiter le mildiou. Le vignoble double, et la ferme s’apprête à grandir.",
    image: "/photos/vignoble.jpg",
    body: [
      "Adrien Degavre a doublé son vignoble en plantant près de dix mille pieds de Chardonnay. La parcelle n’a pas été choisie au hasard : orientation plein sud, beaucoup de vent, un feuillage plus sec, moins de mildiou.",
      "Il exploite la ferme avec ses parents. Marc, son père, a arrêté la traite et accompagne cette reconversion. L’ambition reste celle d’un vin local, ancré dans le Pays des Collines.",
    ],
  },
];

export const gallery = [
  {
    src: "/photos/vignoble.jpg",
    alt: "Rangs de vigne au soleil, Ostiches",
    caption: "Vignoble · Pays des Collines",
    year: "2023",
  },
  {
    src: "/photos/cour.jpg",
    alt: "Crémants Degavre dans la cour de Martincamps",
    caption: "Cour de Martincamps",
    year: "2023",
  },
  {
    src: "/photos/verres.jpg",
    alt: "Dégustation face à la tour-colombier",
    caption: "Dégustation au domaine",
    year: "2024",
  },
  {
    src: "/photos/chai.jpg",
    alt: "Cuves inox dans le chai de la ferme",
    caption: "Chai · cuves inox",
    year: "2022",
  },
  {
    src: "/photos/vendanges.jpg",
    alt: "Vendanges : cagettes de raisin et tracteur",
    caption: "Vendanges manuelles",
    year: "2024",
  },
];

export const tickerItems = [
  "AOP Crémant de Wallonie",
  "Boutique en ligne",
  "Ferme de Martincamps · 1772",
  "Visites sur rendez-vous",
  "Blanc de Blancs & Blanc de Noir",
  "Pays des Collines · Ostiches",
];

export function formatPrice(
  value: number,
  locale: "fr" | "nl" | "en" = "fr",
) {
  const tag =
    locale === "nl" ? "nl-BE" : locale === "en" ? "en-BE" : "fr-BE";
  return new Intl.NumberFormat(tag, {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}
