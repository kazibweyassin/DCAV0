export type SectorId = "agro-processing" | "mineral-refining" | "real-estate";

export type CapitalTier =
  | "100k"
  | "250k"
  | "500k"
  | "1m"
  | "2.5m"
  | "5m-plus";

export type AssetClassInterest =
  | "agro-processing"
  | "mineral-refining"
  | "real-estate"
  | "diversified";

export interface Sector {
  id: SectorId;
  title: string;
  subtitle: string;
  commodities: string[];
  estimatedYield: { min: number; max: number };
  durationYears: { min: number; max: number };
  riskMitigation: string[];
  briefSummary: string;
  icon: "leaf" | "gem" | "building";
  imageUrl: string;
  imageAlt: string;
}

export interface CapitalTierConfig {
  id: CapitalTier;
  label: string;
  amount: number;
  minYield: number;
  maxYield: number;
  durationMonths: { min: number; max: number };
  taxIncentiveRate: number;
}

export interface CalculatorProjection {
  capitalAmount: number;
  projectedAnnualYield: { min: number; max: number };
  projectedAnnualReturn: { min: number; max: number };
  durationMonths: { min: number; max: number };
  taxExemptionValue: number;
  totalProjectedReturn: { min: number; max: number };
}

export interface KYCFormData {
  investorName: string;
  email: string;
  countryOfOrigin: string;
  assetClassInterest: AssetClassInterest | "";
  accreditationsConfirmed: boolean;
  liquidityCapacity: CapitalTier | "";
}

export type ConversionTrigger = "brief" | "allocation";

export interface TrustBadge {
  id: string;
  label: string;
  description: string;
  icon: "shield" | "globe" | "award" | "file-check";
}