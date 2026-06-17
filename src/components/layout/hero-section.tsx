"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Award,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TRUST_BADGES } from "@/lib/data/sectors";
import { SITE_IMAGES } from "@/lib/data/images";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface HeroSectionProps {
  onRequestBrief: () => void;
  onApplyAllocation: () => void;
}

const TRUST_ICON_MAP = {
  shield: ShieldCheck,
  "file-check": FileCheck,
  award: Award,
  globe: Globe2,
} as const;

export function HeroSection({
  onRequestBrief,
  onApplyAllocation,
}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionDiv = prefersReducedMotion ? "div" : motion.div;
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        animate: "visible",
        variants: staggerContainer(0.12, 0.15),
      };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={SITE_IMAGES.hero.background}
        alt={SITE_IMAGES.hero.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/92 to-obsidian/70" />
      <div className="absolute inset-0 bg-hero-gradient institutional-grid opacity-60" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionDiv {...motionProps} className="flex flex-col">
            <MotionDiv variants={prefersReducedMotion ? undefined : fadeUp}>
              <Badge
                variant="gold"
                className="mb-6 px-4 py-1.5 text-xs uppercase tracking-widest"
              >
                Nakasero · Kampala · Uganda
              </Badge>
            </MotionDiv>

            <MotionDiv variants={prefersReducedMotion ? undefined : fadeUp}>
              <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Deploy Institutional Capital into{" "}
                <span className="bg-gradient-to-r from-emerald-light via-emerald to-champagne bg-clip-text text-transparent">
                  East Africa&apos;s High-Yield Frontiers
                </span>
              </h1>
            </MotionDiv>

            <MotionDiv variants={prefersReducedMotion ? undefined : fadeUp}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl text-balance">
                Diamond Capital Africa channels foreign institutional allocators
                into Uganda&apos;s most profitable hard-asset industries:
                agro-processing, mineral value-addition, and industrial logistics,
                all under full UIA compliance and OECD due diligence frameworks.
              </p>
            </MotionDiv>

            <MotionDiv variants={prefersReducedMotion ? undefined : fadeUp}>
              <p className="mt-4 max-w-lg text-sm text-champagne/80 italic">
                Not general investments. Precision capital deployment into
                sovereign-grade, yield-generating infrastructure.
              </p>
            </MotionDiv>

            <MotionDiv variants={prefersReducedMotion ? undefined : fadeUp}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  variant="premium"
                  size="xl"
                  className="group"
                  onClick={onApplyAllocation}
                >
                  Apply for Allocation
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="xl" onClick={onRequestBrief}>
                  Request Investment Brief
                </Button>
              </div>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            className="relative hidden lg:block"
            {...(prefersReducedMotion
              ? {}
              : {
                  initial: { opacity: 0, x: 40 },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
                  },
                })}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-champagne/20 shadow-premium">
              <Image
                src={SITE_IMAGES.hero.accent}
                alt={SITE_IMAGES.hero.accentAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-widest text-champagne">
                  Institutional Relations
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Building trusted partnerships with qualified allocators worldwide
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-xl border border-emerald/30 bg-emerald/10 backdrop-blur-md" />
          </MotionDiv>
        </div>

        <MotionDiv
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: "hidden",
                animate: "visible",
                variants: staggerContainer(0.08, 0.5),
              })}
        >
          {TRUST_BADGES.map((badge) => {
            const Icon = TRUST_ICON_MAP[badge.icon];
            const BadgeWrapper = prefersReducedMotion ? "div" : motion.div;
            return (
              <BadgeWrapper
                key={badge.id}
                {...(prefersReducedMotion ? {} : { variants: fadeUp })}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.25 } }
                }
                className="group flex items-start gap-3 rounded-lg border border-white/[0.06] bg-obsidian/40 p-4 backdrop-blur-sm transition-colors hover:border-emerald/30 hover:bg-emerald/5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald/10">
                  <Icon className="h-4 w-4 text-emerald-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {badge.label}
                  </p>
                  <p className="mt-0.5 text-xs text-white/50">
                    {badge.description}
                  </p>
                </div>
              </BadgeWrapper>
            );
          })}
        </MotionDiv>

        <MotionDiv
          className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/[0.06] pt-8 sm:gap-8"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.85 },
                },
              })}
        >
          <div>
            <p className="font-display text-3xl font-bold text-champagne">
              $240M+
            </p>
            <p className="text-xs uppercase tracking-wider text-white/40">
              Pipeline Assets Under Structuring
            </p>
          </div>
          <div className="hidden h-10 w-px bg-white/10 sm:block" />
          <div>
            <p className="font-display text-3xl font-bold text-emerald-light">
              14% to 28%
            </p>
            <p className="text-xs uppercase tracking-wider text-white/40">
              Projected Annual Yields
            </p>
          </div>
          <div className="hidden h-10 w-px bg-white/10 sm:block" />
          <div>
            <p className="font-display text-3xl font-bold text-white">3</p>
            <p className="text-xs uppercase tracking-wider text-white/40">
              Core Hard-Asset Sectors
            </p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}