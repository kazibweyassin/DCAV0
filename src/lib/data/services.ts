import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  ShieldCheck,
  Layers,
  Users,
  Globe2,
  FileSearch,
} from "lucide-react";

export interface DcaService {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
}

export const DCA_SERVICES: DcaService[] = [
  {
    id: "capital-gateway",
    title: "Institutional Capital Gateway",
    summary:
      "We open regulated pathways for foreign allocators to deploy capital into Uganda.",
    description:
      "DCA acts as the sovereign-aligned entry point for qualified institutional investors, converting international capital intent into structured, compliant allocation mandates under Uganda Investment Authority frameworks.",
    icon: Globe2,
  },
  {
    id: "structuring",
    title: "Vehicle Structuring & SPV Design",
    summary:
      "We architect UIA-certified investment vehicles matched to sector and yield profiles.",
    description:
      "Our team designs special-purpose vehicles, co-investment structures, and tiered allocation models that align foreign limited partners with hard-asset opportunities while preserving repatriation rights and tax incentive eligibility.",
    icon: Layers,
  },
  {
    id: "due-diligence",
    title: "Due Diligence & Risk Architecture",
    summary:
      "Every opportunity is vetted under OECD-aligned institutional standards.",
    description:
      "We conduct multi-layer due diligence across legal title, offtake agreements, environmental certification, chain-of-custody protocols, and counterparty credit before any capital is cleared for deployment.",
    icon: ShieldCheck,
  },
  {
    id: "deployment",
    title: "Hard-Asset Deployment",
    summary:
      "We channel capital exclusively into physical, income-generating infrastructure.",
    description:
      "DCA does not pursue speculative or generalist portfolios. We deploy into agro-processing export corridors, mineral value-addition facilities, and commercial logistics assets with verifiable cash flows and tangible collateral.",
    icon: Landmark,
  },
  {
    id: "investor-relations",
    title: "Investor Relations & Allocation",
    summary:
      "We steward the full allocator journey from brief to allocation review.",
    description:
      "Institutional clients receive confidential investment briefs, sector-specific projections, KYC onboarding, allocation committee review, and ongoing reporting through our secure investor gateway.",
    icon: Users,
  },
  {
    id: "compliance-reporting",
    title: "Compliance Reporting & Sovereign Alignment",
    summary:
      "We maintain transparent reporting aligned with UIA and cross-border regulations.",
    description:
      "DCA ensures Bank of Uganda FX compliance, OECD reporting standards, and UIA incentive documentation so foreign partners retain full visibility across the investment lifecycle.",
    icon: FileSearch,
  },
];

export const DCA_PROCESS = [
  {
    step: "01",
    title: "Qualify & Brief",
    description:
      "Foreign allocators submit institutional credentials. DCA issues sector-specific confidential briefs aligned to liquidity tier and risk appetite.",
  },
  {
    step: "02",
    title: "Structure & Clear",
    description:
      "Our investment committee structures the vehicle, completes OECD and UIA due diligence, and clears the opportunity for capital commitment.",
  },
  {
    step: "03",
    title: "Deploy & Build",
    description:
      "Capital is deployed into hard-asset infrastructure with milestone-based drawdowns, insured logistics, and contracted offtake where applicable.",
  },
  {
    step: "04",
    title: "Report & Repatriate",
    description:
      "Investors receive institutional-grade reporting, yield distributions, and repatriation support under Uganda's foreign investment protection framework.",
  },
] as const;