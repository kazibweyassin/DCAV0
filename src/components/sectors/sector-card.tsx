"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Leaf,
  Gem,
  Building2,
  TrendingUp,
  Shield,
  ChevronRight,
  FileText,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  cn,
  formatPercentageRange,
  formatNumberRange,
} from "@/lib/utils";
import type { Sector } from "@/types/investment";

const SECTOR_ICONS = {
  leaf: Leaf,
  gem: Gem,
  building: Building2,
} as const;

interface SectorCardProps {
  sector: Sector;
  onRequestBrief: (sectorId: Sector["id"]) => void;
  index?: number;
}

export function SectorCard({ sector, onRequestBrief, index = 0 }: SectorCardProps) {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const Icon = SECTOR_ICONS[sector.icon];

  const Wrapper = prefersReducedMotion ? "div" : motion.div;

  return (
    <Wrapper
      {...(prefersReducedMotion
        ? {}
        : {
            initial: { opacity: 0, y: 32 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.15 },
            transition: { duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] },
            whileHover: { y: -6, transition: { duration: 0.3 } },
          })}
    >
    <Card
      className={cn(
        "group relative overflow-hidden bg-card-gradient transition-all duration-500",
        isBriefOpen
          ? "border-emerald/40 shadow-glow ring-1 ring-emerald/20"
          : "hover:border-champagne/20 hover:shadow-glow-gold"
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={sector.imageUrl}
          alt={sector.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-obsidian/60 backdrop-blur-sm">
          <Icon className="h-5 w-5 text-emerald-light" strokeWidth={1.5} />
        </div>
      </div>

      <CardHeader className="relative pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1" />
          <Badge variant="trust" className="shrink-0 text-[10px] uppercase tracking-wider">
            <TrendingUp className="h-3 w-3" />
            {formatPercentageRange(
              sector.estimatedYield.min,
              sector.estimatedYield.max
            )}{" "}
            Yield
          </Badge>
        </div>

        <CardTitle className="mt-2 font-display text-xl leading-snug">
          {sector.title}
        </CardTitle>
        <p className="text-sm text-white/50">{sector.subtitle}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {sector.commodities.map((commodity) => (
            <Badge key={commodity} variant="outline" className="text-[10px]">
              {commodity}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="relative space-y-6">
        {!isBriefOpen ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="text-[10px] uppercase tracking-wider text-white/40">
                  Duration
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {formatNumberRange(
                    sector.durationYears.min,
                    sector.durationYears.max,
                    " Years"
                  )}
                </p>
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="text-[10px] uppercase tracking-wider text-white/40">
                  Asset Class
                </p>
                <p className="mt-1 text-sm font-semibold text-champagne">
                  Hard Assets
                </p>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-light" />
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-light">
                  Risk Mitigation
                </p>
              </div>
              <ul className="space-y-2">
                {sector.riskMitigation.slice(0, 3).map((factor) => (
                  <li
                    key={factor}
                    className="flex items-start gap-2 text-xs text-white/60"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-champagne/60" />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="outline"
              className="w-full group/btn"
              onClick={() => setIsBriefOpen(true)}
            >
              <FileText className="h-4 w-4" />
              View Investment Brief
              <ChevronRight className="transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </>
        ) : (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-champagne">
                Investment Brief: Executive Summary
              </p>
              <button
                type="button"
                onClick={() => setIsBriefOpen(false)}
                className="rounded-md p-1 text-white/40 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Close brief"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-sm leading-relaxed text-white/70">
              {sector.briefSummary}
            </p>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-light">
                Full Risk Mitigation Framework
              </p>
              <ul className="space-y-2">
                {sector.riskMitigation.map((factor) => (
                  <li
                    key={factor}
                    className="flex items-start gap-2 text-xs text-white/60"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-light" />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-lg border border-emerald/20 bg-emerald/5 p-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">
                  Projected Yield
                </p>
                <p className="mt-1 font-display text-lg font-bold text-emerald-light">
                  {formatPercentageRange(
                    sector.estimatedYield.min,
                    sector.estimatedYield.max
                  )}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">
                  Hold Period
                </p>
                <p className="mt-1 font-display text-lg font-bold text-champagne">
                  {formatNumberRange(
                    sector.durationYears.min,
                    sector.durationYears.max,
                    " Yrs"
                  )}
                </p>
              </div>
            </div>

            <Button
              variant="premium"
              className="w-full"
              onClick={() => onRequestBrief(sector.id)}
            >
              Request Full Investment Brief
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
    </Wrapper>
  );
}