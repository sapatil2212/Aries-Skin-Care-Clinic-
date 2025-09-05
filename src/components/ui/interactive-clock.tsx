"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { Clock } from "lucide-react"

export interface InteractiveClockProps {
  label?: string
  error?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  required?: boolean
  disabled?: boolean
}

const InteractiveClock = React.forwardRef<HTMLDivElement, InteractiveClockProps>(
  ({ className, label, error, value, onChange, required, disabled }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedHour, setSelectedHour] = React.useState(9)
    const [selectedMinute, setSelectedMinute] = React.useState(0)
    const [isAM, setIsAM] = React.useState(true)
    const [buttonRect, setButtonRect] = React.useState<DOMRect | null>(null)
    const clockRef = React.useRef<HTMLDivElement>(null)
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    // Parse initial value
    React.useEffect(() => {
      if (value) {
        const [time, period] = value.split(' ')
        const [hour, minute] = time.split(':')
        const hourNum = parseInt(hour)
        const minuteNum = parseInt(minute)
        
        if (period === 'PM' && hourNum !== 12) {
          setSelectedHour(hourNum)
        } else if (period === 'AM' && hourNum === 12) {
          setSelectedHour(0)
        } else {
          setSelectedHour(hourNum)
        }
        setSelectedMinute(minuteNum)
        setIsAM(period === 'AM')
      }
    }, [value])

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [isOpen])

    const formatTime = (hour: number, minute: number, isAM: boolean) => {
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
      const displayMinute = minute.toString().padStart(2, '0')
      const period = isAM ? 'AM' : 'PM'
      return `${displayHour}:${displayMinute} ${period}`
    }

    const handleTimeSelect = () => {
      const actualHour = isAM ? (selectedHour === 12 ? 0 : selectedHour) : (selectedHour === 12 ? 12 : selectedHour + 12)
      const timeString = `${actualHour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')}`
      const displayTime = formatTime(selectedHour, selectedMinute, isAM)
      onChange?.(displayTime)
      setIsOpen(false)
    }

    const hours = Array.from({ length: 12 }, (_, i) => i + 1)
    const minutes = Array.from({ length: 60 }, (_, i) => i).filter(m => m % 15 === 0) // 15-minute intervals

    const renderClockDropdown = () => {
      if (!isOpen || !buttonRect) return null

      // Calculate position to ensure dropdown stays within viewport
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const dropdownWidth = viewportWidth < 640 ? viewportWidth - 64 : 288 // 18rem = 288px
      const dropdownHeight = viewportWidth < 640 ? 280 : 400 // Reduced height for mobile
      
      // Center horizontally relative to the button
      let left = buttonRect.left + (buttonRect.width / 2) - (dropdownWidth / 2)
      
      // Adjust horizontal position if dropdown would go off-screen
      if (left < 16) {
        left = 16
      } else if (left + dropdownWidth > viewportWidth - 16) {
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
        maxHeight: viewportWidth < 640 ? 'calc(100vh - 100px)' : 'calc(100vh - 200px)',
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
            }} 
          />
          {/* Clock */}
          <div 
            ref={dropdownRef}
            className="w-[calc(100vw-4rem)] sm:w-72 rounded-lg border border-gray-200 bg-white shadow-lg p-2 sm:p-4"
            style={dropdownStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2 sm:space-y-4">
              <div className="text-center">
                <h3 className="text-xs sm:text-sm font-medium text-gray-900">Select Time</h3>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                {/* Hour Selection */}
                <div className="text-center">
                  <label className="text-xs text-gray-600 mb-1 sm:mb-2 block">Hour</label>
                  <div className="grid grid-cols-4 sm:grid-cols-3 gap-1">
                    {hours.map((hour) => (
                      <button
                        key={hour}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedHour(hour)
                        }}
                        className={cn(
                          "w-6 h-6 sm:w-8 sm:h-8 text-xs rounded border transition-colors duration-150",
                          selectedHour === hour
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        )}
                      >
                        {hour}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Minute Selection */}
                <div className="text-center">
                  <label className="text-xs text-gray-600 mb-1 sm:mb-2 block">Minute</label>
                  <div className="grid grid-cols-4 sm:grid-cols-2 gap-1">
                    {minutes.map((minute) => (
                      <button
                        key={minute}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedMinute(minute)
                        }}
                        className={cn(
                          "w-6 h-6 sm:w-8 sm:h-8 text-xs rounded border transition-colors duration-150",
                          selectedMinute === minute
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        )}
                      >
                        {minute.toString().padStart(2, '0')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* AM/PM Selection */}
                <div className="text-center">
                  <label className="text-xs text-gray-600 mb-1 sm:mb-2 block">Period</label>
                  <div className="flex space-x-1 sm:space-x-0 sm:space-y-1 sm:flex-col">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsAM(true)
                      }}
                      className={cn(
                        "w-10 h-6 sm:w-12 sm:h-8 text-xs rounded border transition-colors duration-150",
                        isAM
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      )}
                    >
                      AM
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsAM(false)
                      }}
                      className={cn(
                        "w-10 h-6 sm:w-12 sm:h-8 text-xs rounded border transition-colors duration-150",
                        !isAM
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      )}
                    >
                      PM
                    </button>
                  </div>
                </div>
              </div>

              {/* Selected Time Display */}
              <div className="text-center p-1 sm:p-2 bg-gray-50 rounded">
                <span className="text-xs sm:text-sm font-medium text-gray-900">
                  {formatTime(selectedHour, selectedMinute, isAM)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-1 sm:space-x-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(false)
                  }}
                  className="px-2 py-1 sm:px-3 text-xs text-gray-600 hover:text-gray-800 transition-colors duration-150"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleTimeSelect()
                  }}
                  className="px-2 py-1 sm:px-3 text-xs bg-primary text-white rounded hover:bg-primary/90 transition-colors duration-150"
                >
                  Select
                </button>
              </div>
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
        <div className="relative z-10" ref={clockRef}>
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
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 text-gray-400" />
              <span className={cn(
                "truncate",
                !value && "text-gray-400"
              )}>
                {value || "Select time"}
              </span>
            </div>
            <div className="h-3 w-3" />
          </button>

          {renderClockDropdown()}
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

InteractiveClock.displayName = "InteractiveClock"

export { InteractiveClock }
