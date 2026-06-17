import type { Sector, CapitalTierConfig, TrustBadge } from "@/types/investment";
import { SECTOR_IMAGES } from "@/lib/data/images";

export const SECTORS: Sector[] = [
  {
    id: "agro-processing",
    title: "Agro-Processing & Commercial Export Infrastructure",
    subtitle: "Value-addition corridors for premium East African commodities",
    commodities: ["Coffee", "Vanilla", "Macadamia"],
    estimatedYield: { min: 14.5, max: 22.0 },
    durationYears: { min: 3, max: 7 },
    riskMitigation: [
      "Forward purchase agreements with EU & Gulf buyers",
      "Cold-chain logistics insured via Lloyd's syndicates",
      "UIA-certified export processing zone incentives",
      "Multi-crop diversification across 3 commodity verticals",
    ],
    briefSummary:
      "Institutional-grade agro-processing facilities targeting premium export markets with vertically integrated cold storage, grading, and packaging infrastructure across Uganda's highest-yield agricultural corridors.",
    icon: "leaf",
    imageUrl: SECTOR_IMAGES["agro-processing"].url,
    imageAlt: SECTOR_IMAGES["agro-processing"].alt,
  },
  {
    id: "mineral-refining",
    title: "Mineral Value-Addition & Refineries",
    subtitle: "Eco-certified precious metals smelting infrastructure",
    commodities: ["Gold", "Tantalum", "Tungsten"],
    estimatedYield: { min: 18.0, max: 28.5 },
    durationYears: { min: 5, max: 10 },
    riskMitigation: [
      "OECD-aligned due diligence & chain-of-custody protocols",
      "Zero-mercury eco-smelting technology certification",
      "Government of Uganda mineral export license framework",
      "Offtake agreements with LBMA-compliant refineries",
    ],
    briefSummary:
      "Environmentally certified mineral refining infrastructure enabling in-country value addition, reducing raw export leakage while capturing premium margins on responsibly sourced precious metals.",
    icon: "gem",
    imageUrl: SECTOR_IMAGES["mineral-refining"].url,
    imageAlt: SECTOR_IMAGES["mineral-refining"].alt,
  },
  {
    id: "real-estate",
    title: "Commercial Real Estate & Industrial Logistics Hubs",
    subtitle: "Kampala warehousing, cold storage & distribution nodes",
    commodities: ["Warehousing", "Cold Storage", "Last-Mile Logistics"],
    estimatedYield: { min: 12.0, max: 18.5 },
    durationYears: { min: 7, max: 15 },
    riskMitigation: [
      "Triple-net lease structures with multinational tenants",
      "Freehold & leasehold title insurance via UIA partners",
      "Strategic Kampala corridor location premiums",
      "USD-denominated lease contracts with CPI escalators",
    ],
    briefSummary:
      "Prime industrial logistics assets in Kampala's fastest-growing commercial corridors, delivering stable income through long-term leases to multinational distributors and cold-chain operators.",
    icon: "building",
    imageUrl: SECTOR_IMAGES["real-estate"].url,
    imageAlt: SECTOR_IMAGES["real-estate"].alt,
  },
];

export const CAPITAL_TIERS: CapitalTierConfig[] = [
  {
    id: "100k",
    label: "$100K",
    amount: 100_000,
    minYield: 11.5,
    maxYield: 16.0,
    durationMonths: { min: 36, max: 60 },
    taxIncentiveRate: 0.05,
  },
  {
    id: "250k",
    label: "$250K",
    amount: 250_000,
    minYield: 12.5,
    maxYield: 18.0,
    durationMonths: { min: 36, max: 72 },
    taxIncentiveRate: 0.08,
  },
  {
    id: "500k",
    label: "$500K",
    amount: 500_000,
    minYield: 13.5,
    maxYield: 20.0,
    durationMonths: { min: 48, max: 84 },
    taxIncentiveRate: 0.1,
  },
  {
    id: "1m",
    label: "$1M",
    amount: 1_000_000,
    minYield: 14.5,
    maxYield: 22.0,
    durationMonths: { min: 48, max: 96 },
    taxIncentiveRate: 0.12,
  },
  {
    id: "2.5m",
    label: "$2.5M",
    amount: 2_500_000,
    minYield: 15.5,
    maxYield: 24.5,
    durationMonths: { min: 60, max: 120 },
    taxIncentiveRate: 0.15,
  },
  {
    id: "5m-plus",
    label: "$5M+",
    amount: 5_000_000,
    minYield: 16.5,
    maxYield: 28.5,
    durationMonths: { min: 60, max: 180 },
    taxIncentiveRate: 0.18,
  },
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: "uia",
    label: "UIA Aligned",
    description: "Uganda Investment Authority certified partner framework",
    icon: "shield",
  },
  {
    id: "oecd",
    label: "OECD Due Diligence",
    description: "Full OECD Guidelines for Multinational Enterprises compliance",
    icon: "file-check",
  },
  {
    id: "institutional",
    label: "Institutional Grade",
    description: "Qualified investor standards & accredited allocator protocols",
    icon: "award",
  },
  {
    id: "global",
    label: "Cross-Border Ready",
    description: "Multi-jurisdiction capital deployment infrastructure",
    icon: "globe",
  },
];

export const COUNTRIES = [
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Singapore",
  "Switzerland",
  "Germany",
  "Netherlands",
  "South Africa",
  "Kenya",
  "Other",
] as const;