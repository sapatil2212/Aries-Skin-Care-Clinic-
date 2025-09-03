import type { Metadata } from "next"
import { CLINIC_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: {
    default: "Aries Skin and General Clinic | Dr. Shweta Sonje | Advanced Skin & Hair Treatments in Nashik",
    template: "%s | Aries Skin and General Clinic"
  },
  description: "Aries Skin and General Clinic offers advanced skin and hair treatments in Nashik. Dr. Shweta Sonje provides laser hair reduction, hydrafacial, PRP therapy, and comprehensive skincare solutions using FDA-approved equipment.",
  keywords: [
    "skin clinic nashik",
    "dermatologist nashik",
    "laser hair reduction",
    "hydrafacial",
    "PRP therapy",
    "Dr. Shweta Sonje",
    "skin treatment",
    "hair treatment",
    "cosmetic procedures",
    "Panchavati nashik"
  ],
  authors: [{ name: "Dr. Shweta Sonje" }],
  creator: "Aries Skin and General Clinic",
  publisher: "Aries Skin and General Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ariesskin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ariesskin.com",
    title: "Aries Skin and General Clinic | Advanced Skin & Hair Treatments",
    description: "Expert dermatology and cosmetic treatments by Dr. Shweta Sonje in Nashik. FDA-approved equipment, 15+ years experience.",
    siteName: "Aries Skin and General Clinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aries Skin and General Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aries Skin and General Clinic | Advanced Skin & Hair Treatments",
    description: "Expert dermatology and cosmetic treatments by Dr. Shweta Sonje in Nashik.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}
