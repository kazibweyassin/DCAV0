"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SITE_IMAGES } from "@/lib/data/images";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-white/[0.06] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] shadow-premium">
              <Image
                src={SITE_IMAGES.about.primary}
                alt={SITE_IMAGES.about.primaryAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-xl border border-champagne/20 shadow-premium sm:block lg:-right-8">
              <div className="relative aspect-square">
                <Image
                  src={SITE_IMAGES.about.secondary}
                  alt={SITE_IMAGES.about.secondaryAlt}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              About Diamond Capital Africa
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
              Precision Capital.{" "}
              <span className="text-emerald-light">Not General Investments.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/50 sm:text-lg">
              Headquartered at Workers House in Nakasero, Kampala, DCA is an institutional investment
              management firm purpose-built to channel international foreign
              capital into Uganda&apos;s highest-yield hard-asset industries. We
              are not a generalist fund. We are a sovereign-aligned gateway for
              allocators seeking tangible, income-generating exposure to East
              Africa&apos;s economic frontier.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Every allocation is structured through UIA-certified vehicles,
              vetted under OECD due diligence protocols, and backed by physical
              infrastructure with verifiable cash flows.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}