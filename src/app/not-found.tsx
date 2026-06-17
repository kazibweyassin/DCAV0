import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-obsidian px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-sm text-white/50">
        The resource you requested is not available. Return to the DCA
        investment gateway to explore sectors and allocation opportunities.
      </p>
      <Button variant="premium" size="lg" className="mt-8" asChild>
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to Gateway
        </Link>
      </Button>
    </main>
  );
}