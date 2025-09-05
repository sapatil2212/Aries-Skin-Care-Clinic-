"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface SuccessModalProps {
  open: boolean
  onClose: () => void
  title?: string
  message?: string
  duration?: number // in milliseconds
}

export default function SuccessModal({ 
  open, 
  onClose, 
  title = "Appointment Booked!",
  message = "Your appointment has been successfully scheduled. Confirmation emails have been sent to you and our clinic.",
  duration = 3000
}: SuccessModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (open) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => {
          onClose()
        }, 300) // Wait for exit animation
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [open, duration, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
          />
          
          {/* Success Modal */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ 
                type: "spring", 
                duration: 0.5,
                bounce: 0.3
              }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100/50 p-10 max-w-lg w-full mx-4"
            >
              {/* Modern Animated Success Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.2,
                    type: "spring",
                    duration: 0.5,
                    bounce: 0.2
                  }}
                  className="relative w-28 h-28"
                >
                  {/* Modern gradient background */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.05, 1],
                      opacity: [0, 0.8, 1]
                    }}
                    transition={{ 
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)'
                    }}
                  />
                  
                  {/* Subtle inner glow */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 0.9, 0.85],
                      opacity: [0, 0.3, 0.2]
                    }}
                    transition={{ 
                      delay: 0.4,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    className="absolute inset-2 rounded-full bg-white/20 backdrop-blur-sm"
                  />
                  
                  {/* Modern checkmark container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ 
                      scale: 1,
                      rotate: 0
                    }}
                    transition={{ 
                      delay: 0.5,
                      type: "spring",
                      duration: 0.6,
                      bounce: 0.3
                    }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {/* Modern Checkmark */}
                    <motion.svg
                      className="w-16 h-16 text-white drop-shadow-lg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.3 }}
                    >
                      <motion.path
                        d="M8 12l3 3 5-5"
                        initial={{ 
                          pathLength: 0,
                          strokeDasharray: "0 1"
                        }}
                        animate={{ 
                          pathLength: 1,
                          strokeDasharray: "1 0"
                        }}
                        transition={{ 
                          delay: 0.8,
                          duration: 0.7,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      />
                    </motion.svg>
                  </motion.div>
                  
                  {/* Modern pulse ring */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1.4],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{ 
                      delay: 1.2,
                      duration: 1.2,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 rounded-full border-2 border-green-400/30"
                  />
                </motion.div>
              </div>

              {/* Success Message */}
              <div className="text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold text-gray-900 mb-4 tracking-tight"
                >
                  {title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-base text-gray-600 leading-relaxed font-medium"
                >
                  {message}
                </motion.p>
              </div>

              {/* Modern Progress bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <div className="w-full bg-gray-200/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: duration / 1000,
                      ease: "linear"
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-sm"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
