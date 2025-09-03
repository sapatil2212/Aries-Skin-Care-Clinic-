"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  title?: string
  description?: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onOpenChange, children, title, description, className, size = "md" }, ref) => {
    // Handle escape key
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onOpenChange(false)
        }
      }

      if (open) {
        document.addEventListener("keydown", handleEscape)
        document.body.style.overflow = "hidden"
      }

      return () => {
        document.removeEventListener("keydown", handleEscape)
        document.body.style.overflow = "unset"
      }
    }, [open, onOpenChange])

    return (
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => onOpenChange(false)}
            />
            
            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.3 }}
                className={cn(
                  "relative bg-white rounded-xl shadow-2xl border border-gray-200 max-h-[90vh] overflow-hidden",
                  {
                    "w-full max-w-sm": size === "sm",
                    "w-full max-w-md": size === "md",
                    "w-full max-w-2xl": size === "lg",
                    "w-full max-w-4xl": size === "xl",
                    "w-full h-full": size === "full",
                  },
                  className
                )}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                {(title || description) && (
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-start justify-between">
                      <div>
                        {title && (
                          <h2 className="text-xl font-semibold text-primary mb-1">
                            {title}
                          </h2>
                        )}
                        {description && (
                          <p className="text-sm text-gray-600">
                            {description}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => onOpenChange(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <X className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={cn(
                  "overflow-y-auto",
                  size === "full" ? "h-full" : "max-h-[calc(90vh-8rem)]"
                )}>
                  {children}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    )
  }
)

Modal.displayName = "Modal"

export { Modal }
