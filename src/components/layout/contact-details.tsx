import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/data/contact";
import { cn } from "@/lib/utils";

type ContactVariant = "dark" | "light";

interface ContactDetailsProps {
  showIcons?: boolean;
  className?: string;
  variant?: ContactVariant;
}

export function ContactDetails({
  showIcons = true,
  className = "",
  variant = "dark",
}: ContactDetailsProps) {
  const isLight = variant === "light";

  return (
    <address
      className={cn(
        "not-italic space-y-3 text-sm",
        isLight ? "text-muted-foreground" : "text-white/50",
        className
      )}
    >
      <div className="flex items-start gap-2.5">
        {showIcons && (
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
        )}
        <span className="leading-relaxed">
          {CONTACT.address.building}, {CONTACT.address.floor}
          <br />
          {CONTACT.address.street}
          <br />
          {CONTACT.address.area}, {CONTACT.address.city}, {CONTACT.address.country}
        </span>
      </div>

      <div className="flex items-center gap-2.5">
        {showIcons && (
          <Phone className="h-4 w-4 shrink-0 text-emerald" />
        )}
        <span>
          {CONTACT.phones.office.label}:{" "}
          <a
            href={CONTACT.phones.office.href}
            className="text-champagne-dark transition-colors hover:text-emerald"
          >
            {CONTACT.phones.office.display}
          </a>
          <span
            className={cn("mx-2", isLight ? "text-border" : "text-white/20")}
          >
            ·
          </span>
          {CONTACT.phones.mobile.label}:{" "}
          <a
            href={CONTACT.phones.mobile.href}
            className="text-champagne-dark transition-colors hover:text-emerald"
          >
            {CONTACT.phones.mobile.display}
          </a>
        </span>
      </div>

      <div className="flex items-center gap-2.5">
        {showIcons && (
          <Mail className="h-4 w-4 shrink-0 text-emerald" />
        )}
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-champagne-dark transition-colors hover:text-emerald"
        >
          {CONTACT.email}
        </a>
      </div>
    </address>
  );
}