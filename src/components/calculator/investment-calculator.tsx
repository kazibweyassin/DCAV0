"use client";

import { useMemo, useState, type ComponentType } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  Calculator,
  TrendingUp,
  Clock,
  Receipt,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { calculateProjection } from "@/lib/calculator";
import { CAPITAL_TIERS, SECTORS } from "@/lib/data/sectors";
import { SITE_IMAGES } from "@/lib/data/images";
import {
  cn,
  formatCurrency,
  formatPercentageRange,
  formatNumberRange,
} from "@/lib/utils";
import type { CapitalTier, SectorId } from "@/types/investment";

interface InvestmentCalculatorProps {
  onApplyAllocation: () => void;
}

export function InvestmentCalculator({
  onApplyAllocation,
}: InvestmentCalculatorProps) {
  const [selectedSector, setSelectedSector] = useState<SectorId>("agro-processing");
  const [selectedTier, setSelectedTier] = useState<CapitalTier>("500k");

  const projection = useMemo(
    () => calculateProjection(selectedSector, selectedTier),
    [selectedSector, selectedTier]
  );

  const selectedSectorData = SECTORS.find((s) => s.id === selectedSector);
  const prefersReducedMotion = useReducedMotion();
  const projectionKey = `${selectedSector}-${selectedTier}`;

  return (
    <section
      id="calculator"
      className="relative overflow-hidden section-surface-c py-24 lg:py-32"
    >
      <Image
        src={SITE_IMAGES.calculator}
        alt={SITE_IMAGES.calculatorAlt}
        fill
        className="object-cover opacity-15"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
            Investment Accelerator
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Model Your Capital Deployment
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">
            Simulate projected yields, investment timelines, and UIA-facilitated
            tax incentive exemptions based on your allocation tier and sector
            preference.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10">
                  <Calculator className="h-5 w-5 text-emerald-light" />
                </div>
                <CardTitle className="font-display text-lg">
                  Allocation Parameters
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <label className="text-sm font-medium text-white/80">
                  Target Industry
                </label>
                <Select
                  value={selectedSector}
                  onValueChange={(v) => setSelectedSector(v as SectorId)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {SECTORS.map((sector) => (
                      <SelectItem key={sector.id} value={sector.id}>
                        {sector.commodities.join(", ")} ·{" "}
                        {formatPercentageRange(
                          sector.estimatedYield.min,
                          sector.estimatedYield.max
                        )}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-white/80">
                  Capital Allocation Tier
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {CAPITAL_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier.id)}
                      className={cn(
                        "rounded-lg border px-3 py-3 text-sm font-medium transition-all",
                        selectedTier === tier.id
                          ? "border-emerald bg-emerald/20 text-emerald-light shadow-glow"
                          : "border-white/10 bg-white/[0.02] text-white/60 hover:border-champagne/30 hover:text-white"
                      )}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              {selectedSectorData && (
                <div className="rounded-lg border border-champagne/20 bg-champagne/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-champagne/80">
                    Selected Sector
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {selectedSectorData.title}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-champagne/10">
                    <BarChart3 className="h-5 w-5 text-champagne" />
                  </div>
                  <CardTitle className="font-display text-lg">
                    Projected Returns
                  </CardTitle>
                </div>
                <Badge variant="gold">Simulated</Badge>
              </div>
            </CardHeader>
            <CardContent>
              {projection ? (
                <motion.div
                  key={projectionKey}
                  className="space-y-6"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <ProjectionMetric
                      icon={TrendingUp}
                      label="Annual Yield Range"
                      value={formatPercentageRange(
                        projection.projectedAnnualYield.min,
                        projection.projectedAnnualYield.max
                      )}
                      accent="emerald"
                    />
                    <ProjectionMetric
                      icon={TrendingUp}
                      label="Annual Return (USD)"
                      value={`${formatCurrency(projection.projectedAnnualReturn.min)} to ${formatCurrency(projection.projectedAnnualReturn.max)}`}
                      accent="champagne"
                    />
                    <ProjectionMetric
                      icon={Clock}
                      label="Investment Duration"
                      value={formatNumberRange(
                        projection.durationMonths.min,
                        projection.durationMonths.max,
                        " months"
                      )}
                      accent="white"
                    />
                    <ProjectionMetric
                      icon={Receipt}
                      label="UIA Tax Incentive Exemption"
                      value={formatCurrency(projection.taxExemptionValue)}
                      accent="emerald"
                    />
                  </div>

                  <div className="rounded-xl border border-emerald/30 bg-emerald/5 p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/40">
                          Total Projected Return (incl. tax incentives)
                        </p>
                        <p className="mt-2 font-display text-2xl font-bold text-emerald-light sm:text-3xl">
                          {formatCurrency(projection.totalProjectedReturn.min)}{" "}
                          to{" "}
                          {formatCurrency(projection.totalProjectedReturn.max)}
                        </p>
                        <p className="mt-1 text-xs text-white/40">
                          Based on {formatCurrency(projection.capitalAmount)}{" "}
                          deployed capital
                        </p>
                      </div>
                      <Button
                        variant="premium"
                        size="lg"
                        className="shrink-0"
                        onClick={onApplyAllocation}
                      >
                        Apply for Allocation
                      </Button>
                    </div>
                  </div>

                  <p className="text-[11px] leading-relaxed text-white/30">
                    Projections are illustrative simulations based on historical
                    sector performance and UIA incentive schedules. Actual returns
                    may vary. This does not constitute an offer or solicitation.
                    Qualified institutional investors only.
                  </p>
                </motion.div>
              ) : (
                <p className="text-sm text-white/50">
                  Select parameters to view projections.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

interface ProjectionMetricProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent: "emerald" | "champagne" | "white";
}

function ProjectionMetric({
  icon: Icon,
  label,
  value,
  accent,
}: ProjectionMetricProps) {
  const accentClasses = {
    emerald: "text-emerald-light",
    champagne: "text-champagne",
    white: "text-white",
  };

  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="flex items-center gap-2">
        <Icon className={cn("h-4 w-4", accentClasses[accent])} />
        <p className="text-[10px] uppercase tracking-wider text-white/40">
          {label}
        </p>
      </div>
      <p
        className={cn(
          "mt-2 text-sm font-semibold sm:text-base",
          accentClasses[accent]
        )}
      >
        {value}
      </p>
    </div>
  );
}