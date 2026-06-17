"use client";

import Link from "next/link";
import { useConversion } from "@/components/providers/conversion-provider";

const PLATFORM_LINKS = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Sectors", href: "/#sectors" },
  { label: "Accelerator", href: "/#calculator" },
  { label: "Investment Projects", href: "/investment-projects" },
  { label: "Compliance", href: "/#compliance" },
  { label: "About DCA", href: "/#about" },
] as const;

export function FooterPlatformLinks() {
  const { openAllocation } = useConversion();

  return (
    <ul className="mt-4 space-y-2">
      {PLATFORM_LINKS.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <button
          type="button"
          onClick={openAllocation}
          className="text-sm text-white/50 transition-colors hover:text-white"
        >
          Investor Portal
        </button>
      </li>
    </ul>
  );
}