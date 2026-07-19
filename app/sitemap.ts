import type { MetadataRoute } from "next";
import { ALL_PACKAGES } from "@/data/packages";
import { DESTINATIONS } from "@/data/destinations";
import { TREKKING_REGIONS } from "@/data/trekking";
import { BLOG_POSTS } from "@/data/blog";

const BASE = "https://www.himalvara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/packages`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/destinations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/trekking`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const packageRoutes: MetadataRoute.Sitemap = ALL_PACKAGES.map((pkg) => ({
    url: `${BASE}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const destinationRoutes: MetadataRoute.Sitemap = DESTINATIONS.map((dest) => ({
    url: `${BASE}/destinations/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const trekkingRoutes: MetadataRoute.Sitemap = TREKKING_REGIONS.map((region) => ({
    url: `${BASE}/trekking/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.65,
  }));

  return [
    ...staticRoutes,
    ...packageRoutes,
    ...destinationRoutes,
    ...trekkingRoutes,
    ...blogRoutes,
  ];
}
