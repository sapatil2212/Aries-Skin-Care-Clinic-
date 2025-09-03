import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingWidgets } from "@/components/layout/floating-widgets"
import { AppointmentModalProvider } from "@/components/appointment-modal-provider"
import { ToastProvider } from "@/components/ui/toast-provider"
import { CLINIC_INFO } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ariesskin.com"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://ariesskin.com",
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#24544B" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: CLINIC_INFO.name,
              description: "Advanced skin and hair treatments clinic in Nashik",
              url: "https://ariesskin.com",
              telephone: `+91${CLINIC_INFO.phones[0]}`,
              email: CLINIC_INFO.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: CLINIC_INFO.address,
                addressLocality: "Nashik",
                addressRegion: "Maharashtra",
                postalCode: "422001",
                addressCountry: "IN"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.9975",
                longitude: "73.7898"
              },
              openingHours: [
                "Mo-Fr 09:00-20:00",
                "Sa 09:00-18:00",
                "Su 10:00-16:00"
              ],
              physician: {
                "@type": "Person",
                name: "Dr. Shweta Sonje",
                jobTitle: "Dermatologist and Cosmetic Surgeon"
              },
              medicalSpecialty: [
                "Dermatology",
                "Cosmetic Surgery",
                "Gynecology"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ToastProvider>
          <AppointmentModalProvider>
            <main className="min-h-screen">{children}</main>
            <Footer />
            <FloatingWidgets />
          </AppointmentModalProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
