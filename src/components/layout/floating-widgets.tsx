"use client"

import * as React from "react"
import { MessageCircle, Phone, ArrowUp, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { CLINIC_INFO, WHATSAPP_MESSAGE } from "@/lib/constants"
import { generateWhatsAppUrl } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = React.useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const handleWhatsAppClick = () => {
    window.open(
      generateWhatsAppUrl(CLINIC_INFO.phones[0], WHATSAPP_MESSAGE),
      "_blank",
      "noopener,noreferrer"
    )
  }

  const handleCallClick = () => {
    window.open(`tel:+91${CLINIC_INFO.phones[0]}`)
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
