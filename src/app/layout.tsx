"use client"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { useState } from "react"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingWidgets } from "@/components/layout/floating-widgets"
import { AppointmentModal } from "@/components/appointment-modal"
import { ToastContainer, useToast } from "@/components/ui/toast"
import { CLINIC_INFO } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

// Note: Metadata export is not supported in client components
// This will be handled by a separate metadata file or moved to a different approach

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const { toasts, removeToast } = useToast()

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <Header onAppointmentClick={() => setIsAppointmentModalOpen(true)} />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWidgets />
        
        <AppointmentModal
          open={isAppointmentModalOpen}
          onOpenChange={setIsAppointmentModalOpen}
        />
        
        <ToastContainer toasts={toasts} onRemove={removeToast} />
      </body>
    </html>
  )
}
