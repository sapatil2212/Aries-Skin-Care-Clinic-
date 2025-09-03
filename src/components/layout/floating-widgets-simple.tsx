"use client"

import * as React from "react"
import { MessageCircle, Phone, ArrowUp, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FloatingWidgetsSimple() {
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
      const phone = "7588832221"
      const message = "Hello! I would like to book an appointment at Aries Skin and General Clinic. Please let me know your availability."
      const cleanPhone = phone.replace(/\D/g, '')
      const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`
      const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const handleCallClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`tel:+917588832221`)
    }
  }

  // Don't render anything until mounted
  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* WhatsApp Widget */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={handleWhatsAppClick}
        className="fixed bottom-32 md:bottom-8 right-4 md:right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-2 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-4 w-4 md:h-6 md:w-6" />
        <div className="absolute -top-12 right-0 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat on WhatsApp
        </div>
      </motion.button>

      {/* Call Widget */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={handleCallClick}
        className="fixed bottom-44 md:bottom-32 right-4 md:right-8 z-50 bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="h-3.5 w-3.5 md:h-5 md:w-5" />
        <div className="absolute -top-12 right-0 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Now
        </div>
      </motion.button>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-32 md:bottom-8 left-4 md:left-8 z-50 bg-primary hover:bg-primary-dark text-white p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
            <div className="absolute -top-12 left-0 bg-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Back to Top
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Sticky Appointment Button - Only show on non-home pages */}
      {!isHomePage && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200"
        >
          <Button
            onClick={handleWhatsAppClick}
            className="group shadow-2xl px-8 py-4 rounded-full text-lg font-semibold w-full bg-primary hover:bg-primary-dark text-white"
          >
            Book Appointment
            <motion.div
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </Button>
        </motion.div>
      )}
    </>
  )
}
