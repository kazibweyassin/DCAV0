"use client";

import Link from "next/link";
import { useConversion } from "@/components/providers/conversion-provider";
import { cn } from "@/lib/utils";

const PLATFORM_LINKS = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Sectors", href: "/#sectors" },
  { label: "Accelerator", href: "/#calculator" },
  { label: "Investment Projects", href: "/investment-projects" },
  { label: "Compliance", href: "/#compliance" },
  { label: "About DCA", href: "/#about" },
] as const;

type FooterLinksVariant = "dark" | "light";

interface FooterPlatformLinksProps {
  variant?: FooterLinksVariant;
}

export function FooterPlatformLinks({
  variant = "dark",
}: FooterPlatformLinksProps) {
  const { openAllocation } = useConversion();
  const isLight = variant === "light";

  const linkClass = cn(
    "text-sm transition-colors",
    isLight
      ? "text-muted-foreground hover:text-foreground"
      : "text-white/50 hover:text-white"
  );

  return (
    <ul className="mt-4 space-y-2">
      {PLATFORM_LINKS.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className={linkClass}>
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <button type="button" onClick={openAllocation} className={linkClass}>
          Investor Portal
        </button>
      </li>
    </ul>
  );
}