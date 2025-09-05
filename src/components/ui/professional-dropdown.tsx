"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { ChevronDown, Check } from "lucide-react"

export interface ProfessionalDropdownOption {
  value: string
  label: string
}

export interface ProfessionalDropdownProps {
  label?: string
  error?: string
  placeholder?: string
  options: ProfessionalDropdownOption[]
  value?: string
  onChange?: (value: string) => void
  className?: string
  required?: boolean
  disabled?: boolean
}

const ProfessionalDropdown = React.forwardRef<HTMLDivElement, ProfessionalDropdownProps>(
  ({ className, label, error, placeholder, options, value, onChange, required, disabled }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState("")
    const [buttonRect, setButtonRect] = React.useState<DOMRect | null>(null)
    const dropdownRef = React.useRef<HTMLDivElement>(null)
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    const selectedOption = options.find(option => option.value === value)

    const filteredOptions = options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false)
          setSearchTerm("")
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [isOpen])

    const handleSelect = (optionValue: string) => {
      onChange?.(optionValue)
      setIsOpen(false)
      setSearchTerm("")
    }

    const renderDropdown = () => {
      if (!isOpen || !buttonRect) return null

      // Calculate position to ensure dropdown stays within viewport
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const dropdownWidth = Math.min(buttonRect.width, 320) // Max width of 320px
      const dropdownHeight = Math.min(filteredOptions.length * 40 + (options.length > 5 ? 60 : 0), 200) // Approximate height
      
      // Align with button left edge
      let left = buttonRect.left
      
      // Adjust horizontal position if dropdown would go off-screen
      if (left + dropdownWidth > viewportWidth - 16) {
        left = viewportWidth - dropdownWidth - 16
      }
      
      // Smart vertical positioning - check space above and below
      const spaceBelow = viewportHeight - buttonRect.bottom
      const spaceAbove = buttonRect.top
      const gap = 4 // Gap between button and dropdown
      
      let top: number
      
      // If not enough space below but enough above, open upward
      if (spaceBelow < dropdownHeight + gap && spaceAbove > dropdownHeight + gap) {
        top = buttonRect.top - dropdownHeight - gap
      }
      // If not enough space above but enough below, open downward
      else if (spaceAbove < dropdownHeight + gap && spaceBelow > dropdownHeight + gap) {
        top = buttonRect.bottom + gap
      }
      // If both have space, prefer opening below
      else if (spaceBelow >= dropdownHeight + gap) {
        top = buttonRect.bottom + gap
      }
      // If neither has enough space, open in the direction with more space
      else if (spaceAbove > spaceBelow) {
        top = buttonRect.top - dropdownHeight - gap
      }
      // Default to below
      else {
        top = buttonRect.bottom + gap
      }

      const dropdownStyle: React.CSSProperties = {
        position: 'fixed',
        top: Math.max(16, top), // Ensure minimum top margin
        left: Math.max(16, left), // Ensure minimum left margin
        zIndex: 9999,
        maxHeight: 'calc(100vh - 200px)',
        overflowY: 'auto'
      }

      return createPortal(
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[9998] bg-transparent" 
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
              setSearchTerm("")
            }} 
          />
          {/* Dropdown */}
          <div 
            ref={dropdownRef}
            className="w-full max-w-xs rounded-lg border border-gray-200 bg-white shadow-lg"
            style={dropdownStyle}
            onClick={(e) => e.stopPropagation()}
          >
            {options.length > 5 && (
              <div className="p-2 border-b border-gray-100">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            )}
            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelect(option.value)
                    }}
                    className={cn(
                      "flex w-full items-center justify-between px-3 py-2 text-xs hover:bg-gray-50 transition-colors duration-150",
                      value === option.value && "bg-primary/10 text-primary"
                    )}
                  >
                    <span className="truncate">{option.label}</span>
                    {value === option.value && (
                      <Check className="h-3 w-3 text-primary" />
                    )}
                  </button>
                ))
              ) : (
                <div className="px-3 py-2 text-xs text-gray-500">
                  No options found
                </div>
              )}
            </div>
          </div>
        </>,
        document.body
      )
    }

    return (
      <div className="space-y-1" ref={ref}>
        {label && (
          <label className="text-xs sm:text-xs font-medium text-gray-700">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative z-10" ref={dropdownRef}>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => {
              if (!disabled) {
                if (buttonRef.current) {
                  setButtonRect(buttonRef.current.getBoundingClientRect())
                }
                setIsOpen(!isOpen)
              }
            }}
            disabled={disabled}
            className={cn(
              "flex h-7 sm:h-8 w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-300 focus-visible:ring-red-500",
              isOpen && "ring-2 ring-primary ring-offset-2",
              className
            )}
          >
            <span className={cn(
              "truncate",
              !selectedOption && "text-gray-400"
            )}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown className={cn(
              "h-3 w-3 sm:h-3 sm:w-3 text-gray-400 transition-transform duration-200",
              isOpen && "rotate-180"
            )} />
          </button>

          {renderDropdown()}
        </div>
        {error && (
          <p className="text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    )
  }
)

ProfessionalDropdown.displayName = "ProfessionalDropdown"

export { ProfessionalDropdown }
