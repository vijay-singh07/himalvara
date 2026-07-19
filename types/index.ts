/* ─── Navigation ─────────────────────────────────────────────── */
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

/* ─── Packages / Treks ───────────────────────────────────────── */
export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Strenuous";
export type Category =
  | "Trekking"
  | "Peak Climbing"
  | "Cultural Tour"
  | "Wildlife Safari"
  | "Expedition"
  | "Day Hike";

export interface Package {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  destination: string;
  image: string;
  gallery?: string[];
  duration: number;
  difficulty: Difficulty;
  groupSize: { min: number; max: number };
  altitude?: number;
  price: number;
  priceNote?: string;
  rating: number;
  reviewCount: number;
  highlights: string[];
  overview: string;
  itinerary?: ItineraryDay[];
  includes?: string[];
  excludes?: string[];
  bestSeason?: string[];
  featured?: boolean;
  popular?: boolean;
  badge?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  altitude?: number;
  distance?: number;
  duration?: number;
}

/* ─── Destinations ───────────────────────────────────────────── */
export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  image: string;
  tagline: string;
  packageCount: number;
  featured?: boolean;
}

/* ─── Testimonials ───────────────────────────────────────────── */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  text: string;
  trek?: string;
  date?: string;
}

/* ─── Statistics ─────────────────────────────────────────────── */
export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon?: string;
}

/* ─── Gallery ────────────────────────────────────────────────── */
export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category?: string;
  location?: string;
}

/* ─── Blog ───────────────────────────────────────────────────── */
export interface ContentBlock {
  type: "paragraph" | "h2" | "h3" | "list" | "callout";
  text?: string;
  items?: string[];
  /** callout variant — default "info" */
  variant?: "info" | "veteran" | "warning";
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  authorRole?: string;
  authorImage?: string;
  authorBio?: string;
  date: string;
  readTime: number;
  tags?: string[];
  featured?: boolean;
  content?: ContentBlock[];
}
