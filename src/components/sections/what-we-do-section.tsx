"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { DCA_SERVICES } from "@/lib/data/services";

export function WhatWeDoSection() {
  const prefersReducedMotion = useReducedMotion();
  const CardWrapper = prefersReducedMotion ? "div" : motion.div;

  return (
    <section
      id="what-we-do"
      className="relative border-t border-white/[0.06] bg-obsidian-100/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-light">
            What We Do
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Your Institutional Gateway into{" "}
            <span className="text-champagne">Uganda&apos;s Hard-Asset Economy</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">
            Diamond Capital Africa is not a general investment platform. We
            structure, vet, and deploy foreign institutional capital into
            Uganda&apos;s most profitable physical industries, with full UIA
            alignment and OECD-grade due diligence at every stage.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DCA_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <CardWrapper
                key={service.id}
                {...(prefersReducedMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 24 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, amount: 0.15 },
                      transition: {
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      whileHover: { y: -4, transition: { duration: 0.25 } },
                    })}
                className="group rounded-xl border border-white/[0.06] bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-emerald/25 hover:bg-emerald/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10">
                  <Icon className="h-5 w-5 text-emerald-light" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-champagne/90">
                  {service.summary}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {service.description}
                </p>
              </CardWrapper>
            );
          })}
        </div>

        <ScrollReveal
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          delay={0.1}
        >
          <Button variant="premium" size="lg" asChild>
            <Link href="/what-we-do">
              Explore Our Full Mandate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/#sectors">View Investable Sectors</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}