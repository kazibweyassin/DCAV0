import { BrandLogo } from "@/components/layout/brand-logo";
import { FooterPlatformLinks } from "@/components/layout/footer-links";
import { ContactDetails } from "@/components/layout/contact-details";
import { cn } from "@/lib/utils";

type FooterVariant = "dark" | "light";

interface FooterProps {
  variant?: FooterVariant;
}

export function Footer({ variant = "dark" }: FooterProps) {
  const isLight = variant === "light";

  return (
    <footer
      className={cn(
        "border-t",
        isLight
          ? "border-border bg-secondary/50"
          : "border-white/[0.06] bg-obsidian-200"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandLogo size="sm" linkToHome={false} />
            <p
              className={cn(
                "mt-4 max-w-md text-sm leading-relaxed",
                isLight ? "text-muted-foreground" : "text-white/50"
              )}
            >
              An institutional investment management firm headquartered in
              Nakasero, Kampala. We structure, deploy, and steward foreign
              capital into sovereign-grade hard-asset opportunities across East
              Africa.
            </p>
            <div className="mt-6">
              <h4
                className={cn(
                  "text-sm font-semibold uppercase tracking-wider",
                  isLight ? "text-champagne-dark" : "text-champagne"
                )}
              >
                Contact
              </h4>
              <ContactDetails className="mt-3" variant={variant} />
            </div>
          </div>

          <div>
            <h4
              className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isLight ? "text-champagne-dark" : "text-champagne"
              )}
            >
              Platform
            </h4>
            <FooterPlatformLinks variant={variant} />
          </div>

          <div>
            <h4
              className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isLight ? "text-champagne-dark" : "text-champagne"
              )}
            >
              Compliance
            </h4>
            <ul
              className={cn(
                "mt-4 space-y-2 text-sm",
                isLight ? "text-muted-foreground" : "text-white/50"
              )}
            >
              <li>UIA Registered Framework</li>
              <li>OECD Due Diligence Aligned</li>
              <li>Qualified Investor Standards</li>
              <li>Bank of Uganda FX Compliance</li>
            </ul>
          </div>
        </div>

        <div
          className={cn(
            "mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row",
            isLight ? "border-border" : "border-white/[0.06]"
          )}
        >
          <p
            className={cn(
              "text-xs",
              isLight ? "text-muted-foreground/80" : "text-white/30"
            )}
          >
            © {new Date().getFullYear()} Diamond Capital Africa Ltd. All rights
            reserved. Nakasero, Kampala, Uganda.
          </p>
          <p
            className={cn(
              "text-xs",
              isLight ? "text-muted-foreground/80" : "text-white/30"
            )}
          >
            This platform is intended for qualified institutional investors only.
          </p>
        </div>
      </div>
    </footer>
  );
}