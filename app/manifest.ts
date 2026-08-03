import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Himalvara Travels",
    short_name: "Himalvara",
    description: "Veteran-led Himalayan trekking and tours across Kumaon & Garhwal, Uttarakhand.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1f17",
    theme_color: "#1b3a2d",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
