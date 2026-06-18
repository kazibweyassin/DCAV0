"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand-logo";
import { useConversion } from "@/components/providers/conversion-provider";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/#sectors", label: "Sectors" },
  { href: "/#calculator", label: "Accelerator" },
  { href: "/investment-projects", label: "Investment Projects" },
  { href: "/#about", label: "About DCA" },
] as const;

type NavbarVariant = "dark" | "light";

interface NavbarProps {
  variant?: NavbarVariant;
}

export function Navbar({ variant = "dark" }: NavbarProps) {
  const { openAllocation } = useConversion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isLight = variant === "light";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = isLight
    ? "text-sm text-muted-foreground transition-colors hover:text-emerald"
    : "text-sm text-white/70 transition-colors hover:text-champagne";

  const menuButtonClass = isLight
    ? "inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
    : "inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isLight
          ? isScrolled
            ? "glass-nav-light"
            : "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : isScrolled
            ? "glass-nav shadow-lg"
            : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <BrandLogo size="md" priority />

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secure"
            size="sm"
            className="hidden sm:inline-flex gap-2"
            onClick={openAllocation}
          >
            <Lock className="h-3.5 w-3.5" />
            Investor Portal Access
          </Button>

          <button
            type="button"
            className={menuButtonClass}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {isMobileOpen && (
        <div
          id="mobile-nav-menu"
          className={cn(
            "border-t px-6 py-4 lg:hidden",
            isLight ? "glass-nav-light" : "glass-nav border-white/[0.06]"
          )}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="secure"
              size="sm"
              className="w-full gap-2"
              onClick={() => {
                setIsMobileOpen(false);
                openAllocation();
              }}
            >
              <Lock className="h-3.5 w-3.5" />
              Investor Portal Access
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}