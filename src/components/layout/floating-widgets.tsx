"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { MessageCircle, Phone, ArrowUp, ArrowRight, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useAppointmentModal } from "@/components/appointment-modal-provider"

import { Button } from "@/components/ui/button"


export function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = React.useState(false)
  const { openModal } = useAppointmentModal()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  // Import constants only on client side
  const CLINIC_INFO = {
    phones: ["7588832221"]
  }
  const WHATSAPP_MESSAGE = "Hello! I would like to book an appointment at Aries Skin and General Clinic. Please let me know your availability."
  
  const generateWhatsAppUrl = (phone: string, message: string) => {
    const cleanPhone = phone.replace(/\D/g, '')
    const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`
    return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
      window.open(
        generateWhatsAppUrl(CLINIC_INFO.phones[0], WHATSAPP_MESSAGE),
        "_blank",
        "noopener,noreferrer"
      )
    }
  }

  const handleCallClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`tel:+91${CLINIC_INFO.phones[0]}`)
    }
  }

  return (
    <>
      {/* WhatsApp Widget */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={handleWhatsAppClick}
        className="fixed bottom-32 md:bottom-8 right-4 md:right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-2 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-4 w-4 md:h-6 md:w-6" />
      </motion.button>

      {/* Call Widget */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={handleCallClick}
        className="fixed bottom-44 md:bottom-32 right-4 md:right-8 z-50 bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="h-3.5 w-3.5 md:h-5 md:w-5" />
      </motion.button>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-32 md:bottom-8 left-4 md:left-8 z-50 bg-primary hover:bg-primary-dark text-white p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Sticky Appointment Button - Only show on non-home pages */}
      {!isHomePage && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-sm border-t border-gray-200"
        >
          <Button
            onClick={openModal}
            className="group shadow-lg px-6 py-3 rounded-lg text-sm font-medium w-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </Button>
        </motion.div>
      )}
    </>
  )
}
