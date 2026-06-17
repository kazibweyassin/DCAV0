import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ConversionProvider } from "@/components/providers/conversion-provider";
import { ROOT_METADATA } from "@/lib/seo";
import "./globals.css";

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

export const metadata: Metadata = ROOT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-UG" className="dark">
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