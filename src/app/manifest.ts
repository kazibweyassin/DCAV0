import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_SHORT_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#047857",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/Logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}