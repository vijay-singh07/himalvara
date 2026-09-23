import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { WhatsAppFloat } from "@/components/common/WhatsAppFloat";
import { GoogleAnalytics } from "@next/third-parties/google";

const BASE = "https://www.himalvara.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    template: "%s | Himalvara Travels",
    default: "Himalvara Travels — Veteran-Led Himalayan Trekking & Tours",
  },
  description:
    "Veteran-led spiritual yatras and treks in the Kumaon Himalaya, Uttarakhand. Adi Kailash, Om Parvat, Darma Valley, Panchachuli Base Camp, and Kumaon cultural heritage tours.",
  keywords: [
    "Himalvara",
    "Himalvara Travels",
    "Adi Kailash Yatra",
    "Om Parvat Yatra",
    "Darma Valley Trek",
    "Panchachuli Base Camp",
    "Kumaon trekking",
    "Garhwal trekking",
    "Uttarakhand trek",
    "Pithoragarh trekking",
    "Inner Line Permit trek",
    "veteran trek guides India",
    "Himalayan travel company",
    "Kumaon tour operator",
  ],
  authors: [{ name: "Himalvara Travels" }],
  creator: "Himalvara Travels",
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Himalvara Travels",
    title: "Himalvara Travels — Veteran-Led Himalayan Trekking & Tours",
    description:
      "Veteran-led yatras and treks in the Kumaon Himalaya. Adi Kailash, Om Parvat, Darma Valley, Panchachuli Base Camp & Kumaon cultural tours.",
    images: [
      {
        url: `${BASE}/gallery/vsb-299.jpg`,
        width: 1200,
        height: 630,
        alt: "Himalayan peaks — Himalvara Travels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@himalvara",
    title: "Himalvara Travels — Veteran-Led Himalayan Trekking & Tours",
    description: "Veteran-led yatras and treks across Kumaon & Garhwal, Uttarakhand.",
    images: [`${BASE}/gallery/vsb-299.jpg`],
  },
  // Google Search Console verification
  // Steps: search.google.com/search-console → Add Property → HTML tag method → copy content value
  // Then set NEXT_PUBLIC_GSC_VERIFY in .env.local
  ...(process.env.NEXT_PUBLIC_GSC_VERIFY
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFY } }
    : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b3a2d",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Himalvara Travels",
  url: BASE,
  logo: `${BASE}/himalvara-logo.png`,
  description:
    "Veteran-led yatras and trekking company specialising in the Kumaon Himalaya, Uttarakhand, India since 2018.",
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pithoragarh",
    addressLocality: "Pithoragarh",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
    postalCode: "262501",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7819940565",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/himalvara",
    "https://www.instagram.com/himalvara",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Himalvara Travels",
  url: BASE,
  description:
    "Veteran-led trekking and spiritual yatras in Uttarakhand — Kumaon and Garhwal Himalayas.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE}/packages?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// GA4 Measurement ID — replace with your real ID from Google Analytics
// Steps: analytics.google.com → Admin → Data Streams → Web → Measurement ID (G-XXXXXXXXXX)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppFloat />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
