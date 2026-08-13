"use client";

import dynamic from "next/dynamic";
import type { GalleryPhoto } from "@/data/gallery";

const GalleryClient = dynamic(
  () => import("@/components/gallery/GalleryClient").then((m) => ({ default: m.GalleryClient })),
  { ssr: false, loading: () => <div className="bg-[#080f0b] min-h-[400px]" /> }
);

export function GalleryClientWrapper({ photos }: { photos: GalleryPhoto[] }) {
  return <GalleryClient photos={photos} />;
}
