"use client";

import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/layout/hero-section";
import { SectorsDashboard } from "@/components/sectors/sectors-dashboard";
import { InvestmentCalculator } from "@/components/calculator/investment-calculator";
import { WhatWeDoSection } from "@/components/sections/what-we-do-section";
import { ComplianceSection } from "@/components/sections/compliance-section";
import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/layout/footer";
import { useConversion } from "@/components/providers/conversion-provider";

export function HomePageClient() {
  const { openBrief, openAllocation } = useConversion();

  return (
    <>
      <Navbar />

      <main id="main-content">
        <HeroSection
          onRequestBrief={() => openBrief()}
          onApplyAllocation={openAllocation}
        />
        <WhatWeDoSection />
        <SectorsDashboard onRequestBrief={(sectorId) => openBrief(sectorId)} />
        <InvestmentCalculator onApplyAllocation={openAllocation} />
        <ComplianceSection />
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}