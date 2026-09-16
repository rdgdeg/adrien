import type { Locale } from "./config";

export type Dictionary = {
  ui: {
    menu: string;
    close: string;
    discoverOur: string;
    shop: string;
    cart: string;
    skipToContent: string;
    visitTab: string;
    alcoholWarning: string;
    discover: string;
    buy: string;
    reserve: string;
    readMore: string;
    archive: string;
    discoverSite: string;
    newsPrev: string;
    newsNext: string;
    backToTop: string;
  };
  nav: {
    pro: string;
    domaine: string;
    vins: string;
    boutique: string;
    visites: string;
    actualites: string;
    galerie: string;
    contact: string;
    presse: string;
    faq: string;
    children: {
      vignoble: string;
      terroir: string;
      ferme: string;
      bdb: string;
      bdn: string;
      boutiqueOnline: string;
      allCuvees: string;
      panier: string;
      degustation: string;
      vendanges: string;
      patrimoine: string;
      trouver: string;
      ecrire: string;
      pro: string;
    };
  };
  footer: {
    newsletter: string;
    stayInformed: string;
    newsletterText: string;
    sitemap: string;
    privacy: string;
    legal: string;
    since: string;
    columns: { domaine: string; vins: string; visit: string };
    links: {
      presentation: string;
      vignoble: string;
      ferme: string;
      galerie: string;
      cuvees: string;
      boutique: string;
      panier: string;
      actualites: string;
      visites: string;
      contact: string;
      ecrire: string;
      presse: string;
      faq: string;
      pro: string;
    };
  };
  rail: {
    title: string;
    text: string;
    visit: string;
    taste: string;
    write: string;
    shop: string;
  };
  home: {
    heroCarouselLabel: string;
    heroSlides: {
      subtitle: string;
      intro: string;
      cta: string;
      imageAlt: string;
    }[];
    editorial1Kicker: string;
    editorial1Title: string;
    editorial1Text: string;
    editorial2Kicker: string;
    editorial2Title: string;
    editorial2Text1: string;
    editorial2Text2: string;
    editorial3Kicker: string;
    editorial3Title: string;
    editorial3Text: string;
    universes: string;
    shopTile: string;
    visitTile: string;
    newsTitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    directions: string;
    writeKicker: string;
    writeTitle: string;
    writeText: string;
    presseLink: string;
  };
  visites: {
    title: string;
    subtitle: string;
    kicker: string;
    caveauTitle: string;
    caveauText1: string;
    caveauText2: string;
    packDuration: string;
    packDurationValue: string;
    packPrice: string;
    packPriceValue: string;
    packGroup: string;
    packGroupValue: string;
    packLang: string;
    packLangValue: string;
    formKicker: string;
    formTitle: string;
    formDesc: string;
    formPlaceholder: string;
    formSubmit: string;
    labelDate: string;
    labelGuests: string;
    labelLang: string;
    vendangesTitle: string;
    vendangesText1: string;
    vendangesText2: string;
    patrimoineTitle: string;
    patrimoineText: string;
  };
  presse: {
    title: string;
    subtitle: string;
    kicker: string;
    mediaTitle: string;
    mediaText: string;
    contactGeneral: string;
    formKicker: string;
    formTitle: string;
    formDesc: string;
    formPlaceholder: string;
    formSubmit: string;
    coverageTitle: string;
  };
  shop: {
    title: string;
    subtitle: string;
    online: string;
    ourCuvees: string;
    grapes: string;
    vintage: string;
    volume: string;
    tasting: string;
    pairing: string;
    addToCart: string;
    added: string;
    viewCart: string;
    qty: string;
    buy: string;
    shipping: string;
    legalAge: string;
    legalAbuse: string;
    legalMentions: string;
  };
  ageGate: {
    title: string;
    text: string;
    yes: string;
    no: string;
  };
  cookies: {
    title: string;
    text: string;
    more: string;
    necessary: string;
    analytics: string;
    marketing: string;
    refuse: string;
    customize: string;
    save: string;
    accept: string;
  };
  form: {
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    thanks: string;
    subjects: {
      visite: string;
      achat: string;
      presse: string;
      pro: string;
      autre: string;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
    credit: string;
  };
  news: {
    title: string;
    subtitle: string;
    archive: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  meta: {
    homeDescription: string;
  };
  ticker: string[];
  universeTitles: string[];
  newsletter: {
    emailLabel: string;
    placeholder: string;
    privacy: string;
    submit: string;
    thanks: string;
  };
  vins: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroSub: string;
    heroAlt: string;
    quote: string;
    quoteAuthor: string;
    caveauTitle: string;
    caveauText: string;
    goShop: string;
  };
  cart: {
    kicker: string;
    title: string;
    empty: string;
    continue: string;
    remove: string;
    subtotal: string;
    shippingLabel: string;
    shippingFree: string;
    total: string;
    checkout: string;
    pickupNote: string;
  };
  checkout: {
    title: string;
    emptyTitle: string;
    backShop: string;
    thanksTitle: string;
    thanksText: string;
    home: string;
    totalLabel: string;
    totalNote: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    birth: string;
    terms: string;
    submit: string;
  };
  pro: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroSub: string;
    intro: string;
    audiences: { title: string; text: string }[];
    offerTitle: string;
    offerItems: string[];
    conditionsTitle: string;
    conditionsText: string;
    formKicker: string;
    formTitle: string;
    formDesc: string;
    formPlaceholder: string;
    formSubmit: string;
    ctaShop: string;
  };
};

export const fr: Dictionary = {
  ui: {
    menu: "Menu",
    close: "Fermer",
    discoverOur: "découvrir notre",
    shop: "Boutique",
    cart: "Panier",
    skipToContent: "Aller au contenu",
    visitTab: "Visiter & déguster",
    alcoholWarning:
      "L’abus d’alcool est dangereux pour la santé. À consommer avec modération.",
    discover: "Découvrir",
    buy: "Acheter",
    reserve: "Réserver",
    readMore: "Lire la suite",
    archive: "Archives",
    discoverSite: "Découvrir le site",
    newsPrev: "Actualités précédentes",
    newsNext: "Actualités suivantes",
    backToTop: "Haut de page",
  },
  nav: {
    pro: "Professionnels",
    domaine: "Le Domaine",
    vins: "Les Vins",
    boutique: "Boutique",
    visites: "Visites",
    actualites: "Actualités",
    galerie: "Galerie",
    contact: "Contact",
    presse: "Presse",
    faq: "FAQ",
    children: {
      vignoble: "Vignoble",
      terroir: "Terroir",
      ferme: "La ferme de Martincamps",
      bdb: "Crémant Blanc de Blancs",
      bdn: "Crémant Blanc de Noir",
      boutiqueOnline: "Boutique en ligne",
      allCuvees: "Toutes les cuvées",
      panier: "Panier",
      degustation: "Dégustation",
      vendanges: "Vendanges",
      patrimoine: "Patrimoine",
      trouver: "Nous trouver",
      ecrire: "Nous écrire",
      pro: "Restaurants & cavistes",
    },
  },
  footer: {
    newsletter: "Infolettre",
    stayInformed: "Rester informé",
    newsletterText:
      "Vendanges, nouvelles cuvées, journées portes ouvertes : recevez les nouvelles du domaine.",
    sitemap: "Plan du site",
    privacy: "Confidentialité",
    legal: "Mentions légales",
    since: "Ferme de Martincamps depuis",
    columns: {
      domaine: "Le domaine",
      vins: "Vins & boutique",
      visit: "Visiter & contact",
    },
    links: {
      presentation: "Présentation",
      vignoble: "Vignoble",
      ferme: "La ferme",
      galerie: "Galerie",
      cuvees: "Nos cuvées",
      boutique: "La boutique",
      panier: "Panier",
      actualites: "Actualités",
      visites: "Visites",
      contact: "Contact & accès",
      ecrire: "Nous écrire",
      presse: "Presse",
      faq: "FAQ",
      pro: "Professionnels",
    },
  },
  rail: {
    title: "Venir au domaine",
    text: "Visites et dégustations sur rendez-vous, au cœur de la ferme de Martincamps.",
    visit: "Réserver une visite",
    taste: "Déguster au domaine",
    write: "Nous écrire",
    shop: "La boutique en ligne",
  },
  home: {
    heroCarouselLabel: "Diapositive d’accueil",
    heroSlides: [
      {
        subtitle: "Crémant de Wallonie",
        intro:
          "Un domaine familial au Pays des Collines : cépages nobles, agriculture raisonnée et bulles nées au hameau de Pidebecq.",
        cta: "Découvrir le domaine",
        imageAlt: "Vignoble du Domaine Degavre",
      },
      {
        subtitle: "La boutique en ligne",
        intro:
          "Blanc de Blancs, Blanc de Noir et coffret découverte : commandez nos AOP et faites-vous livrer en Belgique.",
        cta: "Voir la boutique",
        imageAlt: "Cour de la ferme de Martincamps",
      },
      {
        subtitle: "Visites & dégustations",
        intro:
          "Sur rendez-vous, venez marcher les rangs, entrer dans le chai et goûter nos crémants au cœur de la ferme.",
        cta: "Réserver une visite",
        imageAlt: "Dégustation au domaine",
      },
      {
        subtitle: "Ferme de Martincamps · 1772",
        intro:
          "Briques, tour-colombier et 12 000 pieds de vigne : une histoire wallonne où patrimoine et viticulture se rencontrent.",
        cta: "La ferme & le patrimoine",
        imageAlt: "Chai et cuves au domaine",
      },
    ],
    editorial1Kicker: "Agriculture raisonnée",
    editorial1Title: "Des cépages nobles au Pays des Collines",
    editorial1Text:
      "Contrairement à beaucoup de nouvelles plantations wallonnes, Adrien Degavre a choisi Chardonnay, Pinot blanc, Pinot noir et Auxerrois. Pas de désherbage chimique, des pieds travaillés à la main, un terroir de limons profonds.",
    editorial2Kicker: "Le chai",
    editorial2Title: "Au cœur des vignes",
    editorial2Text1:
      "Le pressoir et les cuves inox occupent une ancienne étable restaurée. La mise en bouteille et le dégorgement se font au domaine, avec l’appui d’un prestataire venu de France.",
    editorial2Text2:
      "Les premières bouteilles d’AOP Crémant de Wallonie sont nées de la vendange 2021, commercialisées en 2023.",
    editorial3Kicker: "Patrimoine",
    editorial3Title: "La cense de Martincamps",
    editorial3Text:
      "Un quadrilatère de briques daté de 1772, une tour-colombier à girouette en forme de cheval, et 12 000 pieds de vigne plantés à l’avant de la ferme familiale.",
    universes: "Nos univers",
    shopTile: "Boutique",
    visitTile: "Venir au domaine",
    newsTitle: "L’actualité du Domaine Degavre",
  },
  contact: {
    title: "Contact & accès",
    subtitle: "Au hameau de Pidebecq, entre Ath et le Pays des Collines.",
    address: "Adresse",
    directions:
      "Depuis Ath, direction Ostiches puis le hameau de Pidebecq. La ferme de Martincamps s’annonce par son quadrilatère de briques et sa tour-colombier. Parking sur place. Visites uniquement sur rendez-vous.",
    writeKicker: "Écrire",
    writeTitle: "Nous écrire",
    writeText:
      "Pour une visite, une commande ou une question, laissez un message. Adrien vous répondra personnellement.",
    presseLink: "Espace presse",
  },
  visites: {
    title: "Visites & dégustations",
    subtitle:
      "Venir à la ferme, marcher les rangs, goûter les bulles du Pays des Collines.",
    kicker: "Sur rendez-vous",
    caveauTitle: "Au caveau du domaine",
    caveauText1:
      "Le domaine n’est pas ouvert tous les jours : Adrien Degavre y travaille la vigne, le chai et la ferme. Les visites se font sur rendez-vous, pour des petits groupes, autour des crémants et de l’histoire de Martincamps.",
    caveauText2: "Vous pouvez aussi appeler le",
    packDuration: "Durée",
    packDurationValue: "± 1 h 30",
    packPrice: "Tarif",
    packPriceValue: "Sur devis (petit groupe)",
    packGroup: "Groupe",
    packGroupValue: "2 à 12 personnes",
    packLang: "Langues",
    packLangValue: "FR · NL · EN",
    formKicker: "Réservation",
    formTitle: "Demander une visite",
    formDesc: "Réponse sous quelques jours ouvrables.",
    formPlaceholder: "Précisions, allergies, horaire souhaité…",
    formSubmit: "Envoyer la demande",
    labelDate: "Date souhaitée",
    labelGuests: "Nombre de personnes",
    labelLang: "Langue de la visite",
    vendangesTitle: "Les vendanges",
    vendangesText1:
      "Chaque automne, plusieurs dizaines de vendangeurs — voisins, amis, étudiants — aident à récolter le raisin, sur plusieurs journées festives. La parcelle historique se vendange encore à la main, condition de l’appellation Crémant de Wallonie.",
    vendangesText2:
      "En 2022, une seconde parcelle de Chardonnay a été plantée : sa première récolte, en 2024, a été faite à la machine, pour un vin effervescent hors AOP à venir vers 2026-2027.",
    patrimoineTitle: "Patrimoine gourmand",
    patrimoineText:
      "Ostiches ouvre parfois un circuit du patrimoine gourmand : Blanc moulin, anciennes brasserie et forge, chocolaterie artisanale, et la ferme Degavre pour une halte autour des vins effervescents.",
  },
  presse: {
    title: "Presse",
    subtitle: "Visuels, interviews et visites pour les médias.",
    kicker: "Espace presse",
    mediaTitle: "Contact médias",
    mediaText:
      "Journalistes, rédactions et créateurs : pour une interview, une visite de presse ou des visuels, écrivez-nous via le formulaire.",
    contactGeneral: "Contact général",
    formKicker: "Demande",
    formTitle: "Contacter le domaine",
    formDesc: "Nous vous répondrons avec les éléments disponibles.",
    formPlaceholder: "Média, sujet, date de parution, besoins photo/vidéo…",
    formSubmit: "Envoyer la demande",
    coverageTitle: "Ils en parlent",
  },
  shop: {
    title: "Boutique",
    subtitle: "Les cuvées du domaine, livrées en Belgique ou à retirer à Ostiches.",
    online: "Vente en ligne",
    ourCuvees: "Nos crémants",
    grapes: "Cépages",
    vintage: "Millésime",
    volume: "Volume",
    tasting: "Dégustation",
    pairing: "Accords",
    addToCart: "Ajouter au panier",
    added: "Ajouté au panier",
    viewCart: "Voir le panier",
    qty: "Quantité",
    buy: "Acheter",
    shipping: "Livraison Belgique dès 8 € · offerte à partir de 80 €",
    legalAge: "Vente d’alcool réservée aux personnes majeures (18 ans et plus).",
    legalAbuse:
      "L’abus d’alcool est dangereux pour la santé. À consommer avec modération.",
    legalMentions: "Mentions légales",
  },
  ageGate: {
    title: "Avez-vous l’âge légal ?",
    text: "La boutique en ligne du Domaine Degavre est réservée à la vente d’alcool. Vous devez avoir au moins 18 ans pour commander.",
    yes: "J’ai 18 ans ou plus",
    no: "Je suis mineur",
  },
  cookies: {
    title: "Ce site utilise des cookies",
    text: "En cliquant sur « Tout accepter », vous acceptez les cookies techniques nécessaires au fonctionnement du site, ainsi que ceux qui mesurent l’audience et personnalisent la communication.",
    more: "En savoir plus",
    necessary: "Cookies strictement nécessaires",
    analytics: "Cookies d’analyse d’audience",
    marketing: "Cookies publicitaires",
    refuse: "Tout refuser",
    customize: "Personnaliser",
    save: "Enregistrer",
    accept: "Tout accepter",
  },
  form: {
    name: "Nom",
    email: "E-mail",
    subject: "Sujet",
    message: "Message",
    send: "Envoyer",
    thanks: "Merci. Adrien vous recontactera dès que possible.",
    subjects: {
      visite: "Visite / dégustation",
      achat: "Achat de vins",
      presse: "Presse / médias",
      pro: "Professionnels / distribution",
      autre: "Autre",
    },
  },
  gallery: {
    title: "Photos",
    subtitle: "Le Pays des Collines, les rangs, la ferme et les bulles.",
    credit: "Photographies du Domaine Degavre, Ostiches.",
  },
  news: {
    title: "Actualités",
    subtitle: "La vie du vignoble, des vendanges aux premières bulles.",
    archive: "Archives",
  },
  faq: {
    title: "FAQ",
    subtitle: "Livraison, âge légal, visites : les réponses essentielles.",
    items: [
      {
        q: "Livrez-vous en Belgique et en France ?",
        a: "Oui, livraison en Belgique (8 €, offerte dès 80 €). Pour la France et l’étranger, contactez-nous : nous organisons l’envoi selon la destination.",
      },
      {
        q: "Quel âge faut-il pour commander ?",
        a: "La vente d’alcool est réservée aux personnes majeures (18 ans et plus). Un contrôle d’âge est demandé à l’entrée de la boutique.",
      },
      {
        q: "Comment réserver une visite ?",
        a: "Les visites se font uniquement sur rendez-vous. Utilisez le formulaire sur la page Visites ou appelez-nous. Groupes de 2 à 12 personnes, ± 1 h 30, en FR, NL ou EN.",
      },
      {
        q: "Puis-je retirer ma commande au domaine ?",
        a: "Oui, le retrait à Ostiches est possible sur rendez-vous. Indiquez-le lors de la commande ou par message.",
      },
      {
        q: "Quels modes de paiement acceptez-vous ?",
        a: "Le parcours boutique actuel est une démonstration. Pour une commande réelle, contactez le domaine : paiement et modalités vous seront confirmés.",
      },
    ],
  },
  meta: {
    homeDescription:
      "Domaine viticole familial à Ostiches, au Pays des Collines. AOP Crémant de Wallonie, ferme de Martincamps depuis 1772.",
  },
  ticker: [
    "AOP Crémant de Wallonie",
    "Boutique en ligne",
    "Ferme de Martincamps · 1772",
    "Visites sur rendez-vous",
    "Blanc de Blancs & Blanc de Noir",
    "Pays des Collines · Ostiches",
  ],
  universeTitles: [
    "Le vignoble",
    "Les crémants",
    "Visites & dégustations",
    "La ferme",
  ],
  newsletter: {
    emailLabel: "Adresse e-mail",
    placeholder: "Saisir votre mail",
    privacy: "J'accepte la politique de confidentialité",
    submit: "Inscrivez-vous",
    thanks: "Merci, vous serez tenu informé des prochaines cuvées.",
  },
  vins: {
    metaTitle: "Les vins",
    metaDescription:
      "AOP Crémant de Wallonie du Domaine Degavre : Blanc de Blancs et Blanc de Noir.",
    heroTitle: "Les crémants",
    heroSub:
      "Deux cuvées d'AOP Crémant de Wallonie, élaborées dans le respect des traditions.",
    heroAlt: "Crémants Degavre",
    quote:
      "« C'est un blanc de blancs. L'assemblage de trois cépages, Chardonnay, Pinot blanc et Auxerrois. »",
    quoteAuthor: "Adrien Degavre",
    caveauTitle: "Boutique & cavistes",
    caveauText:
      "Commandez directement en ligne, ou retrouvez les cuvées chez les cavistes et magasins partenaires. La production reste artisanale : les millésimes suivants demanderont encore du temps de prise de mousse.",
    goShop: "Aller à la boutique",
  },
  cart: {
    kicker: "Boutique",
    title: "Votre panier",
    empty: "Le panier est vide.",
    continue: "Continuer vos achats",
    remove: "Retirer",
    subtotal: "Sous-total",
    shippingLabel: "Livraison Belgique",
    shippingFree: "Offerte",
    total: "Total",
    checkout: "Passer commande",
    pickupNote:
      "Livraison offerte dès 80 €. Retrait possible à Ostiches sur rendez-vous.",
  },
  checkout: {
    title: "Commande",
    emptyTitle: "Panier vide",
    backShop: "Retour à la boutique",
    thanksTitle: "Merci",
    thanksText:
      "Votre demande de commande est enregistrée. Adrien vous confirmera la disponibilité et le paiement par téléphone ou e-mail. Le paiement en ligne pourra être activé ultérieurement.",
    home: "Retour à l'accueil",
    totalLabel: "Total",
    totalNote:
      "Le paiement en ligne sera branché plus tard ; pour l'instant, Adrien vous recontacte pour finaliser.",
    phone: "Téléphone",
    address: "Adresse de livraison",
    city: "Commune",
    country: "Pays",
    birth: "Date de naissance",
    terms: "Je certifie avoir 18 ans ou plus.",
    submit: "Confirmer la demande",
  },
  pro: {
    metaTitle: "Restaurants, cavistes & commerçants",
    metaDescription:
      "Distribuer les crémants du Domaine Degavre : restauration, cavistes et commerces de proximité.",
    heroTitle: "Professionnels",
    heroSub: "Restaurants, cavistes et commerçants",
    intro:
      "Le Domaine Degavre développe un réseau de distribution en Belgique pour ses AOP Crémant de Wallonie. Que vous teniez un restaurant, une cave ou un commerce spécialisé, nous construisons avec vous une collaboration durable, adaptée à votre clientèle.",
    audiences: [
      {
        title: "Restaurants",
        text: "Carte des bulles, accords mets-vins et format restauration. Dégustations privées pour votre équipe et conseils de service.",
      },
      {
        title: "Cavistes",
        text: "Cuvées en exclusivité locale, fiches techniques, support visuel et visites du domaine pour vos clients.",
      },
      {
        title: "Commerçants",
        text: "Épiceries fines, fromageries, hôtels : mise en avant en linéaire ou en réserve, avec conditions adaptées aux petites structures.",
      },
    ],
    offerTitle: "Ce que nous proposons",
    offerItems: [
      "Tarifs professionnels sur demande (volume et fréquence)",
      "Blanc de Blancs, Blanc de Noir et coffret découverte",
      "Livraison ou retrait au domaine à Ostiches",
      "Supports : fiches cuvées, photos, storytelling du terroir",
      "Échantillons pour les comptes validés (sur demande)",
    ],
    conditionsTitle: "Modalités (exemple)",
    conditionsText:
      "Commande minimum indicative : 1 caisse mixte ou 12 bouteilles. Paiement à 30 jours net pour les comptes ouverts, ou paiement comptant à la commande pour les nouveaux partenaires. Zone prioritaire : Belgique (Hainaut, Bruxelles, Brabant wallon). Les conditions définitives sont confirmées par échange direct avec le domaine.",
    formKicker: "Partenariat",
    formTitle: "Demander un devis pro",
    formDesc:
      "Présentez votre établissement : nous revenons vers vous avec une proposition adaptée.",
    formPlaceholder:
      "Nom de l'établissement, type d'activité, volume estimé, zone…",
    formSubmit: "Envoyer la demande",
    ctaShop: "Voir la boutique grand public",
  },
};
