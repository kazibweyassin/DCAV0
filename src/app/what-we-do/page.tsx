import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DocumentPageShell } from "@/components/layout/document-page-shell";
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
    <DocumentPageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "What We Do", path: "/what-we-do" },
          ]),
        ]}
      />

      <main
        id="main-content"
        className="min-h-screen pt-28 pb-16 institutional-grid-light"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gateway
          </Link>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              Our Mandate
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-5xl text-balance">
              What Diamond Capital Africa Does
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
                  className="rounded-xl border border-border bg-card p-8 shadow-premium-light"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald/10">
                    <Icon className="h-6 w-6 text-emerald" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-champagne-dark">
                    {service.summary}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-20 border-t border-border pt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-dark">
              How We Work
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              From Allocator Brief to Capital Deployment
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DCA_PROCESS.map((phase) => (
                <div
                  key={phase.step}
                  className="rounded-xl border border-border bg-secondary/60 p-6"
                >
                  <p className="font-display text-3xl font-bold text-emerald/30">
                    {phase.step}
                  </p>
                  <h3 className="mt-3 text-sm font-semibold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-emerald/20 bg-emerald/5 p-8 sm:p-10">
            <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
              Ready to review allocation opportunities?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
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
    </DocumentPageShell>
  );
}