import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DocumentPageShell } from "@/components/layout/document-page-shell";
import { DocumentPageHeader } from "@/components/layout/document-page-header";
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
    <DocumentPageShell>
      <JsonLd
        data={[
          investmentProjectsWebPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Investment Projects", path: "/investment-projects" },
          ]),
        ]}
      />

      <main
        id="main-content"
        className="min-h-screen pt-28 pb-16 surface-reading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gateway
          </Link>

          <DocumentPageHeader
            eyebrow="Uganda Investment Authority"
            title="UIA Bankable Investment Projects"
            className="mb-10"
          >
            <p>
              Official UIA bankable projects catalogue for foreign institutional
              allocators. Review sovereign-vetted opportunities across
              Uganda&apos;s highest-yield sectors including agro-processing,
              mineral value-addition, and industrial logistics before requesting
              a confidential DCA investment brief.
            </p>
            <p className="text-sm text-champagne-dark">
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
          </DocumentPageHeader>

          <PdfViewer
            url={UIA_BANKABLE_PROJECTS_PDF}
            externalUrl={UIA_BANKABLE_PROJECTS_SOURCE_URL}
            title={UIA_BANKABLE_PROJECTS_META.title}
            theme="light"
          />
        </div>
      </main>
    </DocumentPageShell>
  );
}