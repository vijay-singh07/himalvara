import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Nepal", href: "/destinations/nepal" },
      { label: "Bhutan", href: "/destinations/bhutan" },
      { label: "Tibet", href: "/destinations/tibet" },
      { label: "India", href: "/destinations/india" },
    ],
  },
  {
    label: "Trekking",
    href: "/trekking",
    children: [
      { label: "Pithoragarh Inner Himalaya", href: "/trekking/inner-himalaya" },
      { label: "Darma Valley", href: "/trekking/darma-valley" },
      { label: "Munsiyari & Panchachuli", href: "/trekking/munsiyari" },
      { label: "Kumaon Cultural Circuit", href: "/trekking/kumaon-cultural" },
    ],
  },
  {
    label: "Packages",
    href: "/packages",
    children: [
      { label: "All Packages", href: "/packages" },
      { label: "Adi Kailash Yatra", href: "/packages/adi-kailash-yatra" },
      { label: "Darma Valley Trek", href: "/packages/darma-valley-trek" },
      { label: "Kumaon Temples Tour", href: "/packages/kumaon-temples-heritage-tour" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
