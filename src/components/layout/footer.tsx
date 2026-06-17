import { BrandLogo } from "@/components/layout/brand-logo";
import { FooterPlatformLinks } from "@/components/layout/footer-links";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-obsidian-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <BrandLogo size="sm" linkToHome={false} />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              An institutional investment management firm headquartered in
              Kampala, Uganda. We structure, deploy, and steward foreign capital
              into sovereign-grade hard-asset opportunities across East Africa.
            </p>
            <p className="mt-3 text-sm text-white/40">
              Kampala, Uganda ·{" "}
              <a
                href="mailto:investors@diamondcapitalafrica.com"
                className="text-champagne/80 transition-colors hover:text-champagne"
              >
                investors@diamondcapitalafrica.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-champagne">
              Platform
            </h4>
            <FooterPlatformLinks />
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-champagne">
              Compliance
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>UIA Registered Framework</li>
              <li>OECD Due Diligence Aligned</li>
              <li>Qualified Investor Standards</li>
              <li>Bank of Uganda FX Compliance</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Diamond Capital Africa Ltd. All rights
            reserved. Kampala, Uganda.
          </p>
          <p className="text-xs text-white/30">
            This platform is intended for qualified institutional investors only.
          </p>
        </div>
      </div>
    </footer>
  );
}