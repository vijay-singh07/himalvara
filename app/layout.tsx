import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";

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
    "Adi Kailash Yatra",
    "Om Parvat Yatra",
    "Darma Valley Trek",
    "Panchachuli Base Camp",
    "Kumaon trekking",
    "Uttarakhand trek",
    "Pithoragarh trekking",
    "Inner Line Permit trek",
    "veteran trek guides India",
    "Himalvara Travels",
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
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
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
    description: "Veteran-led expeditions across Nepal, Bhutan, Tibet & India.",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"],
  },
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
  logo: `${BASE}/logo.png`,
  description:
    "Veteran-led yatras and trekking company specialising in the Kumaon Himalaya, Uttarakhand, India since 2009.",
  foundingDate: "2009",
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
    telephone: "+91-70119-16777",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/himalvara",
    "https://www.instagram.com/himalvara",
  ],
};

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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
