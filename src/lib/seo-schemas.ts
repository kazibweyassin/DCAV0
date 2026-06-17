import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    image: ORGANIZATION.logo,
    email: ORGANIZATION.email,
    description:
      "Institutional investment management firm channeling foreign capital into Uganda's agro-processing, mineral refining, and industrial logistics sectors.",
    address: {
      "@type": "PostalAddress",
      addressLocality: ORGANIZATION.address.addressLocality,
      addressCountry: ORGANIZATION.address.addressCountry,
      addressRegion: ORGANIZATION.address.addressRegion,
    },
    areaServed: ORGANIZATION.areaServed.map((name) => ({
      "@type": "Country",
      name,
    })),
    knowsAbout: [
      "Institutional capital deployment",
      "Uganda hard-asset investment",
      "Agro-processing export infrastructure",
      "Mineral value-addition",
      "Commercial real estate and logistics",
      "UIA investment incentives",
      "OECD due diligence",
    ],
    sameAs: [ORGANIZATION.url],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Institutional investment gateway for foreign allocators deploying capital into East Africa's high-yield hard-asset frontiers.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-UG",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/investment-projects`,
      },
      name: "View UIA Bankable Projects",
    },
  };
}

export function homeWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${SITE_NAME} | Institutional Investment Gateway`,
    description:
      "Deploy institutional capital into Uganda's agro-processing, mineral refining, and industrial logistics sectors under UIA and OECD frameworks.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-UG",
    primaryImageOfPage: ORGANIZATION.logo,
  };
}

export function investmentProjectsWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/investment-projects#webpage`,
    url: `${SITE_URL}/investment-projects`,
    name: "UIA Bankable Investment Projects",
    description:
      "Official Uganda Investment Authority bankable projects catalogue for foreign institutional investors.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-UG",
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function investmentOfferCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "DCA Investable Hard-Asset Sectors",
    url: `${SITE_URL}/#sectors`,
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agro-Processing & Commercial Export Infrastructure",
          description:
            "Coffee, vanilla, and macadamia value-addition with export logistics in Uganda.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mineral Value-Addition & Refineries",
          description:
            "Eco-certified precious metals smelting and in-country mineral refining.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Real Estate & Industrial Logistics Hubs",
          description:
            "Kampala warehousing, cold storage, and distribution infrastructure.",
        },
      },
    ],
  };
}