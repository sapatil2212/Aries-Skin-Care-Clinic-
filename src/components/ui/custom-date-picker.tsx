"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

export interface CustomDatePickerProps {
  label?: string
  error?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  required?: boolean
  disabled?: boolean
  minDate?: string
}

const CustomDatePicker = React.forwardRef<HTMLDivElement, CustomDatePickerProps>(
  ({ className, label, error, value, onChange, required, disabled, minDate }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [currentMonth, setCurrentMonth] = React.useState(new Date())
    const [buttonRect, setButtonRect] = React.useState<DOMRect | null>(null)
    const [isMobile, setIsMobile] = React.useState(false)
    const datePickerRef = React.useRef<HTMLDivElement>(null)
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    // Detect mobile view
    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Parse initial value
    React.useEffect(() => {
      if (value) {
        const date = new Date(value)
        if (!isNaN(date.getTime())) {
          setCurrentMonth(date)
        }
      }
    }, [value])

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (isOpen && datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [isOpen])

    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }

    const formatInputDate = (date: Date) => {
      return date.toISOString().split('T')[0]
    }

    const handleDateSelect = (date: Date) => {
      const dateString = formatInputDate(date)
      onChange?.(dateString)
      setIsOpen(false)
    }

    const isDateDisabled = (date: Date) => {
      if (minDate) {
        const minDateObj = new Date(minDate)
        return date < minDateObj
      }
      return false
    }

    const isDateSelected = (date: Date) => {
      if (!value) return false
      const selectedDate = new Date(value)
      return date.toDateString() === selectedDate.toDateString()
    }

    const isToday = (date: Date) => {
      const today = new Date()
      return date.toDateString() === today.toDateString()
    }

    const getDaysInMonth = (date: Date) => {
      const year = date.getFullYear()
      const month = date.getMonth()
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)
      const daysInMonth = lastDay.getDate()
      const startingDayOfWeek = firstDay.getDay()

      const days = []
      
      // Add empty cells for days before the first day of the month
      for (let i = 0; i < startingDayOfWeek; i++) {
        days.push(null)
      }
      
      // Add days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        days.push(new Date(year, month, day))
      }
      
      return days
    }

    const navigateMonth = (direction: 'prev' | 'next') => {
      setCurrentMonth(prev => {
        const newMonth = new Date(prev)
        if (direction === 'prev') {
          newMonth.setMonth(prev.getMonth() - 1)
        } else {
          newMonth.setMonth(prev.getMonth() + 1)
        }
        return newMonth
      })
    }

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const renderCalendarDropdown = () => {
      if (!isOpen || !buttonRect) return null

      const dropdownWidth = buttonRect.width
      const dropdownHeight = isMobile ? 280 : 320
      
      let left = buttonRect.left
      left = Math.max(16, Math.min(left, window.innerWidth - dropdownWidth - 16))
      
      const spaceBelow = window.innerHeight - buttonRect.bottom
      const spaceAbove = buttonRect.top
      const gap = 8
      
      let top: number
      if (spaceBelow >= dropdownHeight + gap) {
        top = buttonRect.bottom + gap
      } else if (spaceAbove >= dropdownHeight + gap) {
        top = buttonRect.top - dropdownHeight - gap
      } else {
        top = spaceAbove > spaceBelow 
          ? Math.max(16, buttonRect.top - dropdownHeight - gap)
          : buttonRect.bottom + gap
      }

      const dropdownStyle: React.CSSProperties = {
        position: 'fixed',
        top: Math.max(16, top),
        left,
        zIndex: 50,
        width: dropdownWidth,
        height: dropdownHeight
      }

      return createPortal(
        <>
          {/* Enhanced backdrop with subtle animation */}
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-200" 
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            style={{ animation: 'fadeIn 200ms ease-out' }}
          />
          {/* Enhanced calendar modal */}
          <div 
            ref={datePickerRef}
            className="rounded-xl border-2 border-gray-100 bg-white shadow-2xl"
            style={{
              ...dropdownStyle,
              animation: 'slideIn 250ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`${isMobile ? 'px-3 py-2' : 'px-4 py-2'} h-full flex flex-col overflow-hidden`}>
              {/* Enhanced header */}
              <div className={`flex items-center justify-center ${isMobile ? 'gap-1 mb-1' : 'gap-1 mb-1'} flex-shrink-0`}>
                <h3 className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-medium text-gray-800 flex items-center gap-1`}>
                  <Calendar className={`${isMobile ? 'h-3 w-3' : 'h-3 w-3'} text-primary`} />
                  Select Date
                </h3>
                <div className={`${isMobile ? 'text-xs' : 'text-sm'} font-mono font-semibold text-primary bg-primary/10 ${isMobile ? 'px-1 py-0.5' : 'px-1 py-0.5'} rounded-md`}>
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </div>
              </div>
              
              {/* Navigation */}
              <div className={`flex items-center justify-between ${isMobile ? 'mb-1' : 'mb-1'} flex-shrink-0`}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateMonth('prev')
                  }}
                  className={`${isMobile ? 'p-1' : 'p-1'} hover:bg-primary/10 rounded-lg transition-colors duration-200`}
                >
                  <ChevronLeft className={`${isMobile ? 'h-3 w-3' : 'h-3 w-3'} text-primary`} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateMonth('next')
                  }}
                  className={`${isMobile ? 'p-1' : 'p-1'} hover:bg-primary/10 rounded-lg transition-colors duration-200`}
                >
                  <ChevronRight className={`${isMobile ? 'h-3 w-3' : 'h-3 w-3'} text-primary`} />
                </button>
              </div>

              {/* Day names */}
              <div className={`grid grid-cols-7 gap-0 ${isMobile ? 'mb-1' : 'mb-1'} flex-shrink-0`}>
                {dayNames.map(day => (
                  <div key={day} className={`text-center ${isMobile ? 'text-[9px]' : 'text-[10px]'} text-gray-500 font-medium ${isMobile ? 'py-0.5' : 'py-0.5'}`}>
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-0 flex-1 min-h-0">
                {getDaysInMonth(currentMonth).map((date, index) => {
                  if (!date) {
                    return <div key={index} className={isMobile ? 'h-6' : 'h-8'} />
                  }

                  const isDisabled = isDateDisabled(date)
                  const isSelected = isDateSelected(date)
                  const isTodayDate = isToday(date)

                  return (
                    <button
                      key={date.toISOString()}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (!isDisabled) {
                          handleDateSelect(date)
                        }
                      }}
                      disabled={isDisabled}
                      className={cn(
                        `${isMobile ? 'h-6 w-6 text-[10px]' : 'h-8 w-8 text-xs'} rounded-md transition-all duration-200 flex items-center justify-center font-medium`,
                        "focus:outline-none hover:bg-primary/10 active:scale-95",
                        isDisabled && "text-gray-300 cursor-not-allowed",
                        !isDisabled && !isSelected && !isTodayDate && "text-gray-600 hover:text-gray-800",
                        isTodayDate && !isSelected && "bg-primary/10 text-primary font-semibold",
                        isSelected && "bg-primary text-white font-semibold transform scale-105"
                      )}
                    >
                      {date.getDate()}
                    </button>
                  )
                })}
              </div>

              {/* Enhanced action buttons */}
              <div className={`flex justify-end ${isMobile ? 'space-x-1 pt-1' : 'space-x-1 pt-1'} border-t border-gray-100 flex-shrink-0`}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(false)
                  }}
                  className={`${isMobile ? 'px-2 py-0.5 text-[10px]' : 'px-2 py-0.5 text-[10px]'} font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors duration-200`}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    const today = new Date()
                    if (!isDateDisabled(today)) {
                      handleDateSelect(today)
                    }
                  }}
                  className={`${isMobile ? 'px-2 py-0.5 text-[10px]' : 'px-2 py-0.5 text-[10px]'} font-medium bg-primary text-white rounded-md hover:bg-primary/90 active:bg-primary/80 transition-colors duration-200 shadow-sm`}
                >
                  Today
                </button>
              </div>
            </div>
          </div>
          
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideIn {
              from { 
                opacity: 0; 
                transform: translateY(-20px) scale(0.95); 
              }
              to { 
                opacity: 1; 
                transform: translateY(0) scale(1); 
              }
            }
          `}</style>
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
        <div className="relative z-10" ref={datePickerRef}>
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
              <Calendar className="h-3 w-3 text-gray-400" />
              <span className={cn(
                "truncate",
                !value && "text-gray-400"
              )}>
                {value ? formatDate(new Date(value)) : "Select date"}
              </span>
            </div>
            <div className="h-3 w-3" />
          </button>

          {renderCalendarDropdown()}
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

CustomDatePicker.displayName = "CustomDatePicker"

export { CustomDatePicker }
