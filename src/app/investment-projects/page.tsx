import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PdfViewer } from "@/components/documents/pdf-viewer";
import { JsonLd } from "@/components/seo/json-ld";
import {
  UIA_BANKABLE_PROJECTS_PDF,
  UIA_BANKABLE_PROJECTS_META,
  UIA_BANKABLE_PROJECTS_SOURCE_URL,
} from "@/lib/data/documents";
import { buildPageMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  investmentProjectsWebPageSchema,
} from "@/lib/seo-schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "UIA Bankable Investment Projects",
  description:
    "Browse official Uganda Investment Authority bankable projects for foreign institutional investors. Review sovereign-vetted opportunities in agro-processing, minerals, logistics, and hard-asset infrastructure across Uganda.",
  path: "/investment-projects",
  keywords: [
    "UIA bankable projects",
    "Uganda investment projects",
    "Uganda Investment Authority",
    "foreign investment Uganda",
    "institutional investment opportunities",
    "Uganda FDI projects",
    "Kampala investment catalogue",
    "Diamond Capital Africa projects",
  ],
});

export default function InvestmentProjectsPage() {
  return (
    <>
      <JsonLd
        data={[
          investmentProjectsWebPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Investment Projects", path: "/investment-projects" },
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

          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-light">
              Uganda Investment Authority
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              UIA Bankable Investment Projects
            </h1>
            <p className="mt-3 text-base leading-relaxed text-white/50">
              Official UIA bankable projects catalogue for foreign institutional
              allocators. Review sovereign-vetted opportunities across
              Uganda&apos;s highest-yield sectors including agro-processing,
              mineral value-addition, and industrial logistics before requesting
              a confidential DCA investment brief.
            </p>
            <p className="mt-2 text-sm text-champagne/80">
              {UIA_BANKABLE_PROJECTS_META.subtitle} · Source:{" "}
              <a
                href={UIA_BANKABLE_PROJECTS_META.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
              >
                {UIA_BANKABLE_PROJECTS_META.source}
              </a>
            </p>
          </div>

          <PdfViewer
            url={UIA_BANKABLE_PROJECTS_PDF}
            externalUrl={UIA_BANKABLE_PROJECTS_SOURCE_URL}
            title={UIA_BANKABLE_PROJECTS_META.title}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}