import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SIZE_CLASSES = {
  sm: "h-8 w-auto sm:h-9",
  md: "h-10 w-auto sm:h-11",
  lg: "h-12 w-auto sm:h-14",
} as const;

interface BrandLogoProps {
  size?: keyof typeof SIZE_CLASSES;
  className?: string;
  linkToHome?: boolean;
  priority?: boolean;
}

export function BrandLogo({
  size = "md",
  className,
  linkToHome = true,
  priority = false,
}: BrandLogoProps) {
  const image = (
    <Image
      src="/Logo.png"
      alt="Diamond Capital Africa"
      width={240}
      height={64}
      priority={priority}
      className={cn(SIZE_CLASSES[size], "object-contain object-left", className)}
    />
  );

  if (!linkToHome) return image;

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 transition-opacity hover:opacity-90"
      aria-label="Diamond Capital Africa home"
    >
      {image}
    </Link>
  );
}