"use client"

import * as React from "react"
import { CLINIC_INFO, WHATSAPP_MESSAGE } from "@/lib/constants"

export function FloatingWidgetsMinimal() {
  const [showScrollTop, setShowScrollTop] = React.useState(false)
  const [isHomePage, setIsHomePage] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
    
    // Check if we're on home page
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname
      setIsHomePage(pathname === "/")
    }

    // Set up scroll listener
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setShowScrollTop(window.scrollY > 500)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      const phone = CLINIC_INFO.phones[0]
      const message = WHATSAPP_MESSAGE
      const cleanPhone = phone.replace(/\D/g, '')
      const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`
      const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const handleCallClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`tel:+91${CLINIC_INFO.phones[0]}`)
    }
  }

  // Don't render anything until mounted
  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* WhatsApp Widget */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      >
        <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        <div className="absolute -top-12 right-0 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
        </div>
      </button>

      {/* Call Widget */}
      <button
        onClick={handleCallClick}
        className="fixed bottom-32 md:bottom-24 right-4 md:right-8 z-50 bg-primary hover:bg-primary-dark text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      >
        <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        <div className="absolute -top-12 right-0 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </div>
      </button>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 md:bottom-8 left-4 md:left-8 z-50 bg-primary hover:bg-primary-dark text-white p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
          </svg>
          <div className="absolute -top-12 left-0 bg-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Back to Top
          </div>
        </button>
      )}

      {/* Mobile Bottom Sticky Appointment Button - Only show on non-home pages */}
      {!isHomePage && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <button
            onClick={handleWhatsAppClick}
            className="group shadow-2xl px-8 py-4 rounded-full text-lg font-semibold w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-300 transform hover:scale-105"
          >
            Book Appointment
            <span className="ml-2 inline-block animate-pulse">→</span>
          </button>
        </div>
      )}
    </>
  )
}
