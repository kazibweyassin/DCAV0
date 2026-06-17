"use client";

import Image from "next/image";
import { SectorCard } from "@/components/sectors/sector-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SECTORS } from "@/lib/data/sectors";
import { SITE_IMAGES } from "@/lib/data/images";
import type { SectorId } from "@/types/investment";

interface SectorsDashboardProps {
  onRequestBrief: (sectorId?: SectorId) => void;
}

export function SectorsDashboard({ onRequestBrief }: SectorsDashboardProps) {
  return (
    <section id="sectors" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-light">
            Investable Sectors
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Hard-Asset Corridors with{" "}
            <span className="text-champagne">Institutional-Grade Yields</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">
            Three sovereign-aligned sectors where DCA structures foreign capital
            into tangible, income-generating infrastructure, each vetted under
            UIA incentive frameworks and OECD due diligence protocols.
          </p>
        </ScrollReveal>

        <ScrollReveal className="relative mt-12 overflow-hidden rounded-2xl border border-white/[0.06]" delay={0.1}>
          <div className="relative h-56 sm:h-64">
            <Image
              src={SITE_IMAGES.sectorsBanner}
              alt={SITE_IMAGES.sectorsBannerAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/50 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8">
              <p className="max-w-md font-display text-xl font-medium italic text-white/90 sm:text-2xl">
                Real assets. Real people. Real returns across Uganda&apos;s most
                productive corridors.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SECTORS.map((sector, index) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              index={index}
              onRequestBrief={(id) => onRequestBrief(id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}