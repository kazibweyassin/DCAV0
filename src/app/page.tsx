import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/home-page-client";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo";
import {
  organizationSchema,
  websiteSchema,
  homeWebPageSchema,
  investmentOfferCatalogSchema,
} from "@/lib/seo-schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Institutional Investment Gateway",
  description:
    "Deploy institutional capital into East Africa's high-yield frontiers. Diamond Capital Africa structures foreign allocator capital into Uganda's agro-processing, mineral refining, and industrial logistics sectors under UIA and OECD compliance.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(),
          homeWebPageSchema(),
          investmentOfferCatalogSchema(),
        ]}
      />
      <HomePageClient />
    </>
  );
}