import { cn } from "@/lib/utils";

interface DocumentPageHeaderProps {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export function DocumentPageHeader({
  eyebrow,
  title,
  children,
  className,
}: DocumentPageHeaderProps) {
  return (
    <header className={cn("document-page-header max-w-3xl", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h1>
      {children && (
        <div className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {children}
        </div>
      )}
    </header>
  );
}