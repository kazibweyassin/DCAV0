import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://diamondcapitalafrica.com";

export const SITE_NAME = "Diamond Capital Africa";
export const SITE_SHORT_NAME = "DCA";

export const DEFAULT_DESCRIPTION =
  "Diamond Capital Africa channels foreign institutional capital into Uganda's highest-yield hard-asset sectors: agro-processing, mineral value-addition, and industrial logistics. UIA-aligned. OECD due diligence compliant. Based in Kampala.";

export const DEFAULT_KEYWORDS = [
  "Diamond Capital Africa",
  "DCA investment",
  "Uganda investment",
  "institutional capital Uganda",
  "East Africa investment",
  "foreign direct investment Uganda",
  "hard asset investment",
  "agro-processing Uganda",
  "coffee export investment",
  "mineral refining Uganda",
  "gold value addition Africa",
  "Kampala warehousing investment",
  "UIA bankable projects",
  "Uganda Investment Authority",
  "OECD due diligence",
  "qualified investor Uganda",
  "institutional allocator Africa",
  "commercial real estate Kampala",
  "cold storage logistics Uganda",
] as const;

export const ORGANIZATION = {
  name: SITE_NAME,
  legalName: "Diamond Capital Africa Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/Logo.png`,
  email: "investors@diamondcapitalafrica.com",
  address: {
    addressLocality: "Kampala",
    addressCountry: "UG",
    addressRegion: "Central Region",
  },
  areaServed: ["Uganda", "East Africa", "Africa"],
  foundingLocation: "Kampala, Uganda",
} as const;

interface PageMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
}

export function absoluteUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = [...DEFAULT_KEYWORDS],
  ogImage = "/Logo.png",
  ogImageAlt = `${SITE_NAME} logo`,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...keywords],
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_UG",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Institutional Investment Gateway`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...DEFAULT_KEYWORDS],
  applicationName: SITE_SHORT_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "finance",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} | Institutional Investment Gateway`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_UG",
    type: "website",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} institutional investment logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Institutional Investment Gateway`,
    description: DEFAULT_DESCRIPTION,
    images: ["/Logo.png"],
  },
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
};