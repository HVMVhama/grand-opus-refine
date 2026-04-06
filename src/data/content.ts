export const sectors = [
  { name: "Routes & Rails", icon: "Route" },
  { name: "Structures & Ouvrages d'Art", icon: "Building2" },
  { name: "Bâtiments & Aménagements Urbains", icon: "Building" },
  { name: "Eau & Environnement", icon: "Droplets" },
  { name: "Aménagements Maritimes", icon: "Anchor" },
  { name: "Aéroportuaire", icon: "Plane" },
] as const;

export const missions = [
  {
    title: "Maîtrise d'œuvre travaux",
    description:
      "En tant que Maitre d'œuvre, notre mission est d'atteindre les trois objectifs essentiels d'un projet : La qualité des travaux, le respect du budget et le respect du délai. Pour y parvenir, CETA Ingénierie compte sur la l'expérience et l'organisation de ses équipes de contrôle sur site et sur le support permanent apporté par ses experts et cadres à partir du siège. Fort de son expérience, capitalisée à travers la conduite de plusieurs projets d'envergure, CETA Ingénierie, contribue efficacement à la résolution des problèmes techniques et administratifs qui peuvent surgir lors de la réalisation du projet.",
    icon: "HardHat",
  },
  {
    title: "Etudes d'avant-projet",
    description:
      "CETA Ingénierie réalise des études d'avant-projet détaillées permettant de définir les caractéristiques principales du projet, d'estimer les coûts et de planifier les phases de réalisation.",
    icon: "FileSearch",
  },
  {
    title: "Etudes d'exécution",
    description:
      "CETA Ingénierie élabore les études d'exécution nécessaires à la réalisation des travaux, incluant les plans détaillés, les notes de calcul et les spécifications techniques.",
    icon: "PenTool",
  },
] as const;

export const projects = [
  {
    title: "Pont Echangeur Radès - la Goulette",
    subtitle: "OUVRAGES DE LA RAMPE C",
    country: "Tunisie",
  },
  {
    title: "Prolongement de l'Autoroute du Nord",
    subtitle: "",
    country: "Côte d'Ivoire",
  },
  {
    title: "Autoroute Oued Zarga – Boussalem",
    subtitle: "",
    country: "Tunisie",
  },
  {
    title: "Echangeur X2-GP10 : Viaducs en béton précontraint",
    subtitle: "",
    country: "Tunisie",
  },
  {
    title: "Liaison de Tataouine à l'Autoroute A1",
    subtitle: "Gouvernorats de Tataouine et Médenine",
    country: "Tunisie",
  },
  {
    title: "Extension de l'INSTA d'Abéché",
    subtitle: "Etudes architecturales et techniques détaillées",
    country: "Tchad",
  },
  {
    title: "Réhabilitation de l'aérodrome de Djerba Zarzis",
    subtitle: "",
    country: "Tunisie",
  },
  {
    title: "Réhabilitation de la ligne ferroviaire N°6",
    subtitle: "",
    country: "Tunisie",
  },
  {
    title: "Rocade Ouest de Médenine",
    subtitle: "",
    country: "Tunisie",
  },
] as const;

export const clients = [
  "ETEP", "CIRA Mali", "CFE", "BEI", "Banque Mondiale", "Banque de Tunisie",
  "BADEA", "BAD", "APIPA", "PALAFT", "PATF", "Afrique Travaux", "AFH",
  "Tunisie Telecom", "EGMS", "SOMATRA", "Tunisie Autoroutes", "SCC", "SBFTE",
  "CNIST", "AISIP", "ROLSS", "PLT", "SOROUBAT", "SNCFT", "SNC LAVALIN",
  "Poulina", "Office de l'aviation civile et des Aéroports",
  "Ministère de l'équipement et des transports Mauritanie",
  "Ministère des infrastructures et des transports Togo",
  "Ministère de l'équipement de l'habitat et de l'infrastructure Tunisie",
  "Ministère de l'agriculture", "Ministère de la défense",
  "INSTA Abéché Tchad", "Impresa Pellegrini", "GTPH", "Groupe Mliha", "FTSA",
] as const;

export const internationalText = {
  title: "International footprint",
  description:
    "Solidement établie en Tunisie, CETA Ingénierie cherche à développer ses activités à l'International, notamment dans les pays de l'Afrique sub-saharienne, avec des premières réussites dans plusieurs pays comme la Mauritanie, le Togo, le Tchad, la Libye, le Côte d'Ivoire et le Mali.",
  description2:
    "Profondément convaincu de l'importance de la coopération interafricaine, CETA Ingénierie n'a cessé d'élargir son réseau de partenaires locaux avec qui nous avons seller des accords équitables et mutuellement bénéfiques.",
};

export const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Missions", href: "#missions" },
  { label: "Projets", href: "#projets" },
  { label: "International", href: "#international" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "A propos", href: "#" },
    { label: "A l'international", href: "#international" },
    { label: "Carrière", href: "#" },
  ],
  services: [
    { label: "Missions", href: "#missions" },
    { label: "Secteurs", href: "#secteurs" },
    { label: "Projets", href: "#projets" },
  ],
};
