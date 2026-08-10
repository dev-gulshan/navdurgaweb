import type { Metadata } from "next";

export const siteSeo = {
  name: "Navdurga Group",
  url: "https://navdurgagroup.in",
  locale: "en_IN",
  defaultTitle: "Navdurga Group | Steel Manufacturing & Diversified Businesses",
  defaultDescription:
    "Navdurga Group is a diversified business group engaged in steel manufacturing, trading, infrastructure and overseas operations across India and Africa.",
  defaultKeywords: [
    "Navdurga Group",
    "steel manufacturer India",
    "steel products",
    "diversified business group",
    "steel trading",
    "overseas steel business",
    "Tanzania manufacturing unit",
  ],
  socialImage: "/android-icon-192x192.png",
} as const;

export const pageSeo = {
  home: {
    title: siteSeo.defaultTitle,
    description: siteSeo.defaultDescription,
    path: "/",
    keywords: ["Navdurga Group India", "steel manufacturing group", "Navdurga steel"],
  },
  about: {
    title: "About Navdurga Group | Our Journey, Vision & Values",
    description:
      "Learn about Navdurga Group, its growth journey, business philosophy, leadership vision and commitment to quality, innovation and sustainable development.",
    path: "/about",
    keywords: ["about Navdurga Group", "Navdurga Group history", "steel company vision"],
  },
  team: {
    title: "Leadership Team | Navdurga Group",
    description:
      "Meet the leadership team of Navdurga Group and discover the experience, values and vision guiding our businesses in India and overseas markets.",
    path: "/team",
    keywords: ["Navdurga Group team", "Navdurga leadership", "steel industry leaders"],
  },
  business: {
    title: "Our Businesses | Navdurga Group",
    description:
      "Explore Navdurga Group businesses across steel manufacturing, trading, infrastructure, logistics and international operations.",
    path: "/business",
    keywords: ["Navdurga businesses", "steel manufacturing business", "steel trading company"],
  },
  products: {
    title: "Steel Products | Navdurga Group",
    description:
      "Explore Navdurga Group's range of quality steel and allied products manufactured and supplied for construction, industrial and commercial applications.",
    path: "/products",
    keywords: ["steel products", "construction steel products", "industrial steel supplier"],
  },
  overseas: {
    title: "Overseas Operations | Navdurga Group",
    description:
      "Discover Navdurga Group's overseas presence, including manufacturing and business operations in Tanzania and expanding international markets.",
    path: "/overseas",
    keywords: ["Navdurga Tanzania", "overseas steel operations", "Africa steel manufacturing"],
  },
  clients: {
    title: "Our Clients | Navdurga Group",
    description:
      "View the organizations and business partners that trust Navdurga Group for dependable products, quality service and long-term value.",
    path: "/clients",
    keywords: ["Navdurga clients", "steel company clients", "business partners"],
  },
  gallery: {
    title: "Gallery & CSR | Navdurga Group",
    description:
      "Explore Navdurga Group's corporate events, manufacturing milestones, community initiatives, CSR activities, photographs and videos.",
    path: "/gallery",
    keywords: ["Navdurga gallery", "Navdurga CSR", "corporate events", "Tanzania factory"],
  },
  contact: {
    title: "Contact Navdurga Group | Offices & Enquiries",
    description:
      "Contact Navdurga Group for product enquiries, business partnerships, careers and corporate information. Find our registered and corporate office details.",
    path: "/contact",
    keywords: ["contact Navdurga Group", "Navdurga office", "steel product enquiry"],
  },
} as const;

type SeoEntry = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
};

export function createPageMetadata(page: SeoEntry): Metadata {
  const canonical = new URL(page.path, siteSeo.url).toString();

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: [...siteSeo.defaultKeywords, ...(page.keywords ?? [])],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: siteSeo.locale,
      url: canonical,
      siteName: siteSeo.name,
      title: page.title,
      description: page.description,
      images: [{ url: siteSeo.socialImage, alt: siteSeo.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [siteSeo.socialImage],
    },
  };
}
