import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/data/contact";

interface ContactDetailsProps {
  showIcons?: boolean;
  className?: string;
}

export function ContactDetails({
  showIcons = true,
  className = "",
}: ContactDetailsProps) {
  return (
    <address
      className={`not-italic space-y-3 text-sm text-white/50 ${className}`}
    >
      <div className="flex items-start gap-2.5">
        {showIcons && (
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-light" />
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
          <Phone className="h-4 w-4 shrink-0 text-emerald-light" />
        )}
        <span>
          {CONTACT.phones.office.label}:{" "}
          <a
            href={CONTACT.phones.office.href}
            className="text-champagne/80 transition-colors hover:text-champagne"
          >
            {CONTACT.phones.office.display}
          </a>
          <span className="mx-2 text-white/20">·</span>
          {CONTACT.phones.mobile.label}:{" "}
          <a
            href={CONTACT.phones.mobile.href}
            className="text-champagne/80 transition-colors hover:text-champagne"
          >
            {CONTACT.phones.mobile.display}
          </a>
        </span>
      </div>

      <div className="flex items-center gap-2.5">
        {showIcons && (
          <Mail className="h-4 w-4 shrink-0 text-emerald-light" />
        )}
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-champagne/80 transition-colors hover:text-champagne"
        >
          {CONTACT.email}
        </a>
      </div>
    </address>
  );
}