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

  const GSC_PRIORITY_PACKAGES = new Set([
    "adi-kailash-yatra",
    "darma-valley-trek",
    "panchachuli-base-camp-trek",
  ]);

  const packageRoutes: MetadataRoute.Sitemap = ALL_PACKAGES.map((pkg) => ({
    url: `${BASE}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: GSC_PRIORITY_PACKAGES.has(pkg.slug) ? 0.9 : 0.85,
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

  const HIGH_VALUE_BLOG_SLUGS = new Set([
    "best-uttarakhand-treks-for-beginners",
    "best-winter-treks-uttarakhand",
    "best-time-to-trek-kumaon-uttarakhand",
    "adi-kailash-yatra-ultimate-guide",
    "adi-kailash-vs-om-parvat-which-yatra",
    "adi-kailash-vs-kailash-mansarovar",
    "adi-kailash-inner-line-permit-guide",
    "darma-valley-trek-complete-guide",
    "harshil-valley-gangotri-guide",
    "dayara-bugyal-vs-gidara-bugyal",
    "uttarakhand-treks-from-delhi",
  ]);

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: HIGH_VALUE_BLOG_SLUGS.has(post.slug) ? "monthly" : "yearly",
    priority: HIGH_VALUE_BLOG_SLUGS.has(post.slug) ? 0.8 : 0.65,
  }));

  return [
    ...staticRoutes,
    ...packageRoutes,
    ...destinationRoutes,
    ...trekkingRoutes,
    ...blogRoutes,
  ];
}
