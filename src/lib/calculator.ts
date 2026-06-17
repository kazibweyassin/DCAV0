import type {
  CalculatorProjection,
  CapitalTierConfig,
  Sector,
  SectorId,
} from "@/types/investment";
import { CAPITAL_TIERS, SECTORS } from "@/lib/data/sectors";

export function getSectorById(id: SectorId): Sector | undefined {
  return SECTORS.find((s) => s.id === id);
}

export function getTierById(id: string): CapitalTierConfig | undefined {
  return CAPITAL_TIERS.find((t) => t.id === id);
}

export function calculateProjection(
  sectorId: SectorId,
  tierId: string
): CalculatorProjection | null {
  const sector = getSectorById(sectorId);
  const tier = getTierById(tierId);

  if (!sector || !tier) return null;

  const sectorYieldBoost =
    (sector.estimatedYield.min + sector.estimatedYield.max) / 2 / 20;
  const minYield = Math.min(
    tier.minYield + sectorYieldBoost,
    sector.estimatedYield.max
  );
  const maxYield = Math.min(
    tier.maxYield + sectorYieldBoost,
    sector.estimatedYield.max
  );

  const minAnnualReturn = tier.amount * (minYield / 100);
  const maxAnnualReturn = tier.amount * (maxYield / 100);

  const sectorMonths = {
    min: sector.durationYears.min * 12,
    max: sector.durationYears.max * 12,
  };
  const durationMonths = {
    min: Math.max(tier.durationMonths.min, sectorMonths.min),
    max: Math.min(tier.durationMonths.max, sectorMonths.max),
  };
  const avgDurationMonths =
    (durationMonths.min + durationMonths.max) / 2;
  const durationYears = avgDurationMonths / 12;

  const taxExemptionValue = tier.amount * tier.taxIncentiveRate;

  const totalMin =
    minAnnualReturn * durationYears + taxExemptionValue;
  const totalMax =
    maxAnnualReturn * durationYears + taxExemptionValue;

  return {
    capitalAmount: tier.amount,
    projectedAnnualYield: { min: minYield, max: maxYield },
    projectedAnnualReturn: { min: minAnnualReturn, max: maxAnnualReturn },
    durationMonths,
    taxExemptionValue,
    totalProjectedReturn: { min: totalMin, max: totalMax },
  };
}