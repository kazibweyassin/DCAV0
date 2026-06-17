import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ConversionProvider } from "@/components/providers/conversion-provider";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://diamondcapitalafrica.com";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Diamond Capital Africa | Institutional Investment Gateway",
  description:
    "Deploy institutional capital into East Africa's high-yield frontiers. DCA channels foreign allocators into Uganda's most profitable hard-asset industries under UIA and OECD compliance frameworks.",
  keywords: [
    "Diamond Capital Africa",
    "Uganda investment",
    "institutional capital",
    "East Africa",
    "hard assets",
    "UIA",
    "OECD due diligence",
  ],
  openGraph: {
    title: "Diamond Capital Africa | Institutional Investment Gateway",
    description:
      "Precision capital deployment into Uganda's agro-processing, mineral refining, and industrial logistics sectors.",
    type: "website",
    locale: "en_US",
    images: ["/Logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond Capital Africa | Institutional Investment Gateway",
    description:
      "Deploy institutional capital into Uganda's highest-yield hard-asset sectors.",
    images: ["/Logo.png"],
  },
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-emerald focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <ConversionProvider>{children}</ConversionProvider>
      </body>
    </html>
  );
}