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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pt-8 sm:pt-4">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.3 }}
                className={cn(
                  "relative bg-white rounded-xl shadow-2xl border border-gray-200 max-h-[95vh] overflow-visible",
                  {
                    "w-full max-w-sm": size === "sm",
                    "w-full max-w-md": size === "md",
                    "w-full max-w-2xl": size === "lg",
                    "w-full max-w-4xl max-h-[95vh]": size === "xl",
                    "w-full h-full": size === "full",
                  },
                  className
                )}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                {(title || description) && (
                  <div className="px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 text-center">
                        {title && (
                          <h2 className="text-lg font-semibold text-primary mb-1">
                            {title}
                          </h2>
                        )}
                        {description && (
                          <p className="text-xs text-gray-600">
                            {description}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => onOpenChange(false)}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors absolute right-4"
                      >
                        <X className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={cn(
                  "overflow-visible",
                  size === "full" ? "h-full" : 
                  size === "xl" ? "max-h-[calc(95vh-4rem)] sm:max-h-[calc(95vh-6rem)]" :
                  "max-h-[calc(95vh-6rem)] sm:max-h-[calc(95vh-8rem)]"
                )}>
                  <div className="relative z-10 overflow-y-auto overflow-x-visible h-full">
                    {children}
                  </div>
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
