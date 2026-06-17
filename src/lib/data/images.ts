/**
 * Curated Unsplash images verified for DCA sector relevance.
 * Uganda/Kampala photographers: Michael Starkie, Keith Kasaija, Robin Kutesa.
 * @see https://unsplash.com for source pages
 */
export const SITE_IMAGES = {
  hero: {
    background:
      "https://images.unsplash.com/photo-1777887544354-74a7248c8a74?w=1920&q=80&auto=format&fit=crop",
    accent:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop",
    alt: "Kampala skyline with modern buildings among lush green hills",
    accentAlt: "Institutional partners formalizing an investment agreement",
    credit: "Michael Starkie / Cytonn Photography",
  },
  sectorsBanner:
    "https://images.unsplash.com/photo-1741012253890-a62490e7ea3e?w=1920&q=80&auto=format&fit=crop",
  sectorsBannerAlt:
    "Green coffee beans drying in the sun at a Ugandan processing facility",
  compliance:
    "https://images.unsplash.com/photo-1776039325172-3f2290cc5f77?w=1200&q=80&auto=format&fit=crop",
  complianceAlt:
    "Institutional stakeholders attending a formal investment presentation",
  about: {
    primary:
      "https://images.unsplash.com/photo-1675756261486-09bd1e0f6c8a?w=1200&q=80&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1761681362862-529f82044bab?w=800&q=80&auto=format&fit=crop",
    primaryAlt: "Panoramic view of Kampala from a high-rise building",
    secondaryAlt: "Evening traffic along a major road in Kampala",
  },
  calculator:
    "https://images.unsplash.com/photo-1769752803898-e7e9a843a120?w=1200&q=80&auto=format&fit=crop",
  calculatorAlt:
    "Cargo ship docked at an export port with container cranes",
} as const;

export const SECTOR_IMAGES = {
  "agro-processing": {
    url: "https://images.unsplash.com/photo-1741012253890-a62490e7ea3e?w=800&q=80&auto=format&fit=crop",
    alt: "Ugandan coffee beans drying on raised beds before export",
    unsplashId: "p80SlcbW49Q",
  },
  "mineral-refining": {
    url: "https://images.unsplash.com/photo-1670159270770-9a455ba607d1?w=800&q=80&auto=format&fit=crop",
    alt: "Workers at an African mineral processing site outside an industrial facility",
    unsplashId: "YHDiiRO0_r8",
  },
  "real-estate": {
    url: "https://images.unsplash.com/photo-1597216148867-c934590e6ea3?w=800&q=80&auto=format&fit=crop",
    alt: "Industrial warehouse interior with stacked export goods on shelving",
    unsplashId: "0l_NXp3StHE",
  },
} as const;