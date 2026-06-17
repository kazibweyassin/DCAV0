import Image from "next/image";
import { FileCheck, Scale, Landmark, Globe2 } from "lucide-react";
import { SITE_IMAGES } from "@/lib/data/images";

const COMPLIANCE_PILLARS = [
  {
    icon: Landmark,
    title: "Uganda Investment Authority (UIA)",
    description:
      "All DCA-structured vehicles operate within UIA-certified investment incentive frameworks, including capital investment deductions, repatriation guarantees, and sector-specific tax holidays.",
  },
  {
    icon: FileCheck,
    title: "OECD Due Diligence Guidelines",
    description:
      "Full alignment with OECD Guidelines for Multinational Enterprises and the Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected Areas.",
  },
  {
    icon: Scale,
    title: "Qualified Investor Protocols",
    description:
      "Strict KYC/AML verification for accredited institutional allocators. Minimum allocation thresholds enforced at every gateway entry point.",
  },
  {
    icon: Globe2,
    title: "Cross-Border Capital Compliance",
    description:
      "Bank of Uganda foreign exchange compliance, multi-jurisdiction legal structuring, and transparent reporting for international limited partners.",
  },
] as const;

export function ComplianceSection() {
  return (
    <section id="compliance" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] shadow-premium">
              <Image
                src={SITE_IMAGES.compliance}
                alt={SITE_IMAGES.complianceAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-emerald/20 bg-obsidian/70 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-widest text-emerald-light">
                  Verified Framework
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Every vehicle audited against UIA and OECD compliance standards
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-light">
              Regulatory Framework
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
              Built for Institutional{" "}
              <span className="text-champagne">Trust & Compliance</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/50">
              Diamond Capital Africa bridges the perception gap between premium
              branding and generalist investment firms through verifiable
              regulatory alignment, transparent due diligence, and
              sovereign-grade asset structuring.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {COMPLIANCE_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-emerald/20 hover:bg-emerald/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10">
                    <pillar.icon className="h-5 w-5 text-emerald-light" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}