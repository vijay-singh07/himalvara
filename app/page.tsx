import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { PackageCategoriesSection } from "@/components/home/PackageCategoriesSection";
import { FeaturedPackagesSection } from "@/components/home/FeaturedPackagesSection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Himalvara Travels — Premium Himalayan Trekking & Tours",
  description:
    "Veteran-led trekking and spiritual yatras in the Kumaon Himalaya. Adi Kailash, Om Parvat, Darma Valley, Panchachuli Base Camp, and Kumaon cultural tours from Uttarakhand.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PackageCategoriesSection />
      <FeaturedPackagesSection />
      <DestinationsSection />
      <WhyChooseUsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
    </>
  );
}
