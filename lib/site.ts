export const SITE = {
  name: "AYMO Horizon FZCO",
  shortName: "AYMO Horizon",
  url: "https://aymohorizon.com",
  description:
    "AYMO Horizon FZCO is a Dubai-based company focused on e-commerce, international trade, and digital business operations across global markets.",
  email: "info@aymohorizon.com",
  address: {
    line1: "Dubai Silicon Oasis",
    line2: "Dubai, United Arab Emirates",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Contact", href: "/contact" },
] as const;

export type Activity = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  detail: string;
};

export const ACTIVITIES: Activity[] = [
  {
    slug: "e-commerce",
    title: "E-Commerce Operations",
    icon: "ShoppingBag",
    summary:
      "We build and run online stores across international marketplaces and direct channels.",
    detail:
      "From catalogue management to fulfilment and customer service, we handle the daily work of selling online. Our focus is on stable, well-run operations rather than rapid expansion at any cost.",
  },
  {
    slug: "online-retail",
    title: "Online Retail",
    icon: "Store",
    summary:
      "We sell physical products to consumers through established platforms and our own storefronts.",
    detail:
      "We select products carefully, price them fairly, and stand behind what we sell. Repeat customers matter more to us than one-time transactions.",
  },
  {
    slug: "international-trade",
    title: "International Trade",
    icon: "Globe",
    summary:
      "We move goods between markets, working with suppliers and buyers in several regions.",
    detail:
      "Dubai sits at the centre of global trade routes, and we make use of that position. We manage documentation, logistics, and settlement with care and keep our commitments.",
  },
  {
    slug: "product-sourcing",
    title: "Product Sourcing",
    icon: "PackageSearch",
    summary:
      "We identify, evaluate, and procure products from manufacturers and distributors.",
    detail:
      "Good sourcing is slow work: factory checks, sample reviews, and clear agreements. We invest that time so the products we trade meet the standard our partners expect.",
  },
  {
    slug: "business-development",
    title: "Business Development",
    icon: "Handshake",
    summary:
      "We build commercial relationships and explore new markets for our trading activities.",
    detail:
      "We grow by partnership. That means meeting counterparties in person where possible, agreeing terms in writing, and maintaining relationships over years rather than quarters.",
  },
  {
    slug: "digital-commerce",
    title: "Digital Commerce Solutions",
    icon: "MonitorSmartphone",
    summary:
      "We operate the systems behind our commerce: storefronts, payments, and order management.",
    detail:
      "Reliable infrastructure keeps orders moving and customers informed. We maintain our own tooling for inventory, reporting, and reconciliation so the numbers always add up.",
  },
];

export const VALUES = [
  {
    title: "Integrity",
    text: "We do what we say. Contracts are honoured, invoices are paid on time, and problems are raised early.",
  },
  {
    title: "Reliability",
    text: "Partners should know what to expect from us. We prefer steady delivery over ambitious promises.",
  },
  {
    title: "Excellence",
    text: "We pay attention to detail, from product quality to paperwork. Small things done well build trust.",
  },
  {
    title: "Innovation",
    text: "We adopt new tools when they make our work better, not because they are new.",
  },
  {
    title: "Long-Term Thinking",
    text: "We measure decisions in years. Short-term gains that damage relationships are not worth taking.",
  },
] as const;
