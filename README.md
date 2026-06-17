# Diamond Capital Africa — Investment Gateway

Institutional investment platform for Diamond Capital Africa (DCA), channeling foreign capital into Uganda's high-yield hard-asset industries.

## Tech Stack

- **Next.js 14+** (App Router, React Server Components)
- **Tailwind CSS** (Obsidian / Emerald / Champagne theme)
- **Shadcn/ui** + Lucide React icons
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme tokens & utilities
│   ├── layout.tsx           # Root layout, fonts, metadata
│   └── page.tsx             # Homepage (server component shell)
├── components/
│   ├── calculator/          # Investment Accelerator Calculator
│   ├── home/                # Client-side page orchestrator
│   ├── layout/              # Navbar, Hero, Footer
│   ├── modals/              # Dual-gateway KYC conversion modal
│   ├── sectors/             # Interactive sectors dashboard
│   ├── sections/            # Compliance & About sections
│   └── ui/                  # Shadcn/ui primitives
├── lib/
│   ├── calculator.ts        # Yield projection logic
│   ├── data/sectors.ts      # Sector & tier configuration
│   └── utils.ts             # cn(), formatters
└── types/
    └── investment.ts        # Shared TypeScript interfaces
```

## Features

- Sticky blur navbar with Investor Portal Access
- High-conversion hero with UIA & OECD trust badges
- Interactive 3-sector investable dashboard with brief expansion
- Capital allocation calculator ($100K–$5M+) with UIA tax incentives
- Institutional KYC modal (brief request & allocation application)