export type GalleryCategory =
  | "all"
  | "Nepal"
  | "Bhutan"
  | "Tibet"
  | "India"
  | "Trekking"
  | "Cultural"
  | "Wildlife";

export type AspectRatio = "landscape" | "portrait" | "square" | "wide" | "tall";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  location: string;
  category: Exclude<GalleryCategory, "all">;
  aspectRatio: AspectRatio;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  /* ── Nepal / Trekking ──────────────────────────────── */
  {
    id: "g01",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    alt: "Everest region — classic Himalayan trail with prayer flags",
    location: "Everest Region, Nepal",
    category: "Nepal",
    aspectRatio: "wide",
  },
  {
    id: "g02",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85",
    alt: "Annapurna peaks glowing at sunrise",
    location: "Annapurna Region, Nepal",
    category: "Nepal",
    aspectRatio: "portrait",
  },
  {
    id: "g03",
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85",
    alt: "Himalayan high-altitude trail through alpine meadows",
    location: "Manaslu Region, Nepal",
    category: "Trekking",
    aspectRatio: "landscape",
  },
  {
    id: "g04",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85",
    alt: "High-altitude mountain ridge at golden hour",
    location: "Everest Region, Nepal",
    category: "Trekking",
    aspectRatio: "wide",
  },
  {
    id: "g05",
    src: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=85",
    alt: "Himalvara guide leading a trekking group through pine forest",
    location: "Langtang Region, Nepal",
    category: "Trekking",
    aspectRatio: "square",
  },
  {
    id: "g06",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85",
    alt: "Rocky glacial moraine trail in the Himalayas",
    location: "Khumbu, Nepal",
    category: "Nepal",
    aspectRatio: "landscape",
  },
  {
    id: "g07",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    alt: "Prayer flags on a Himalayan mountain pass",
    location: "Thorong La, Annapurna Circuit",
    category: "Trekking",
    aspectRatio: "portrait",
  },
  {
    id: "g08",
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85",
    alt: "Trekkers descending a remote high-altitude valley",
    location: "Manaslu Circuit, Nepal",
    category: "Nepal",
    aspectRatio: "wide",
  },
  {
    id: "g09",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85",
    alt: "Himalayan massif reflected in a glacial lake",
    location: "Annapurna Sanctuary, Nepal",
    category: "Nepal",
    aspectRatio: "square",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=85",
    alt: "Climbers ascending the final ridge before a summit",
    location: "Island Peak, Nepal",
    category: "Trekking",
    aspectRatio: "portrait",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85",
    alt: "Sunrise panorama — Everest and Lhotse from Kala Patthar",
    location: "Kala Patthar (5,644 m), Nepal",
    category: "Nepal",
    aspectRatio: "landscape",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    alt: "Wide river valley in the Langtang National Park",
    location: "Langtang Valley, Nepal",
    category: "Nepal",
    aspectRatio: "wide",
  },

  /* ── Bhutan / Cultural ──────────────────────────────── */
  {
    id: "g13",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=85",
    alt: "Ancient monastery perched above a valley in Bhutan",
    location: "Paro, Bhutan",
    category: "Bhutan",
    aspectRatio: "portrait",
  },
  {
    id: "g14",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=85",
    alt: "Punakha Dzong fortress at the river confluence",
    location: "Punakha, Bhutan",
    category: "Cultural",
    aspectRatio: "landscape",
  },
  {
    id: "g15",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=85",
    alt: "Traditional Bhutanese prayer wheel corridor",
    location: "Thimphu, Bhutan",
    category: "Bhutan",
    aspectRatio: "square",
  },
  {
    id: "g16",
    src: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=900&q=85",
    alt: "Local guide and trekkers on the Tiger's Nest trail",
    location: "Taktsang, Bhutan",
    category: "Bhutan",
    aspectRatio: "landscape",
  },

  /* ── Tibet ──────────────────────────────────────────── */
  {
    id: "g17",
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85",
    alt: "Tibetan plateau at high altitude with distant peaks",
    location: "Tibet Plateau",
    category: "Tibet",
    aspectRatio: "wide",
  },
  {
    id: "g18",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    alt: "Everest North Base Camp approach trail",
    location: "Everest North BC, Tibet",
    category: "Tibet",
    aspectRatio: "portrait",
  },

  /* ── India / Cultural ───────────────────────────────── */
  {
    id: "g19",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=85",
    alt: "Taj Mahal in morning mist, Agra",
    location: "Agra, India",
    category: "India",
    aspectRatio: "landscape",
  },
  {
    id: "g20",
    src: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=85",
    alt: "Ancient Buddhist monastery in Ladakh",
    location: "Ladakh, India",
    category: "Cultural",
    aspectRatio: "portrait",
  },
  {
    id: "g21",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=85",
    alt: "High mountain pass in the Spiti Valley",
    location: "Spiti Valley, India",
    category: "India",
    aspectRatio: "square",
  },

  /* ── Wildlife ────────────────────────────────────────── */
  {
    id: "g22",
    src: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&q=85",
    alt: "Jungle trail at dawn inside Chitwan National Park",
    location: "Chitwan National Park, Nepal",
    category: "Wildlife",
    aspectRatio: "wide",
  },
  {
    id: "g23",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85",
    alt: "River canoe safari in the Rapti River, Chitwan",
    location: "Sauraha, Nepal",
    category: "Wildlife",
    aspectRatio: "landscape",
  },

  /* ── Cultural ────────────────────────────────────────── */
  {
    id: "g24",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=85",
    alt: "Boudhanath Stupa draped in prayer flags, Kathmandu",
    location: "Kathmandu, Nepal",
    category: "Cultural",
    aspectRatio: "portrait",
  },
];

export const GALLERY_CATEGORIES: { label: string; value: GalleryCategory }[] = [
  { label: "All", value: "all" },
  { label: "Nepal", value: "Nepal" },
  { label: "Trekking", value: "Trekking" },
  { label: "Bhutan", value: "Bhutan" },
  { label: "Tibet", value: "Tibet" },
  { label: "India", value: "India" },
  { label: "Cultural", value: "Cultural" },
  { label: "Wildlife", value: "Wildlife" },
];
