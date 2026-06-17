import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { DCA_SERVICES, DCA_PROCESS } from "@/lib/data/services";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/seo-schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "What We Do",
  description:
    "Diamond Capital Africa structures, vets, and deploys foreign institutional capital into Uganda's hard-asset economy. Learn how DCA channels allocators through UIA-aligned vehicles across agro-processing, minerals, and logistics.",
  path: "/what-we-do",
  keywords: [
    "what does Diamond Capital Africa do",
    "Uganda institutional capital gateway",
    "foreign investment structuring Uganda",
    "hard asset investment management",
    "UIA investment vehicle structuring",
  ],
});

export default function WhatWeDoPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "What We Do", path: "/what-we-do" },
          ]),
        ]}
      />

      <Navbar />

      <main id="main-content" className="min-h-screen bg-obsidian pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-champagne"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gateway
          </Link>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-light">
              Our Mandate
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl text-balance">
              What Diamond Capital Africa Does
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/50 sm:text-lg">
              DCA exists to solve one problem for foreign institutional
              investors: how to access Uganda&apos;s highest-yield hard-asset
              opportunities with sovereign-grade compliance, transparent due
              diligence, and structured repatriation. We are the gateway, not
              the gamble.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {DCA_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="rounded-xl border border-white/[0.06] bg-card/60 p-8 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald/10">
                    <Icon className="h-6 w-6 text-emerald-light" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-champagne">
                    {service.summary}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-20 border-t border-white/[0.06] pt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              How We Work
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              From Allocator Brief to Capital Deployment
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DCA_PROCESS.map((phase) => (
                <div
                  key={phase.step}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <p className="font-display text-3xl font-bold text-emerald/40">
                    {phase.step}
                  </p>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-emerald/20 bg-emerald/5 p-8 sm:p-10">
            <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
              Ready to review allocation opportunities?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
              Explore our three core hard-asset sectors, model projected yields
              with the investment accelerator, or request a confidential
              institutional brief.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="premium" asChild>
                <Link href="/#sectors">
                  View Sectors
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/investment-projects">UIA Bankable Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}