import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Kumaon", href: "/destinations/kumaon" },
      { label: "Garhwal", href: "/destinations/garhwal" },
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
      { label: "Harshil & Gangotri", href: "/trekking/harshil-gangotri" },
      { label: "Kyarkoti Lake", href: "/trekking/kyarkoti-lake" },
      { label: "Gidara Bugyal", href: "/trekking/gidara-bugyal" },
      { label: "Dayara Bugyal", href: "/trekking/dayara-bugyal" },
    ],
  },
  {
    label: "Packages",
    href: "/packages",
    children: [
      { label: "All Packages", href: "/packages" },
      { label: "Adi Kailash Yatra", href: "/packages/adi-kailash-yatra" },
      { label: "Darma Valley Trek", href: "/packages/darma-valley-trek" },
      { label: "Dayara Bugyal Trek", href: "/packages/dayara-bugyal-trek" },
      { label: "Harshil & Gangotri", href: "/packages/harshil-valley-gangotri" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
