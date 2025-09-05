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
    const datePickerRef = React.useRef<HTMLDivElement>(null)
    const buttonRef = React.useRef<HTMLButtonElement>(null)

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

      // Calculate position to ensure dropdown stays within viewport
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const dropdownWidth = viewportWidth < 640 ? viewportWidth - 80 : 320 // 20rem = 320px
      const dropdownHeight = viewportWidth < 640 ? 350 : 400 // Calendar height
      
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
          {/* Calendar */}
          <div 
            ref={datePickerRef}
            className="w-[calc(100vw-5rem)] sm:w-80 rounded-lg border border-gray-200 bg-white shadow-lg p-3 sm:p-4"
            style={dropdownStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-3 sm:space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateMonth('prev')
                  }}
                  className="p-1 hover:bg-gray-100 rounded transition-colors duration-150"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-600" />
                </button>
                <h3 className="text-sm font-medium text-gray-900">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateMonth('next')
                  }}
                  className="p-1 hover:bg-gray-100 rounded transition-colors duration-150"
                >
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* Day names */}
              <div className="grid grid-cols-7 gap-1">
                {dayNames.map(day => (
                  <div key={day} className="text-center text-xs text-gray-500 font-medium py-1">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentMonth).map((date, index) => {
                  if (!date) {
                    return <div key={index} className="h-8" />
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
                        "h-8 w-8 text-xs rounded transition-colors duration-150 flex items-center justify-center",
                        isDisabled && "text-gray-300 cursor-not-allowed",
                        !isDisabled && !isSelected && !isTodayDate && "text-gray-700 hover:bg-gray-100",
                        isTodayDate && !isSelected && "bg-blue-50 text-blue-600 font-medium",
                        isSelected && "bg-primary text-white font-medium"
                      )}
                    >
                      {date.getDate()}
                    </button>
                  )
                })}
              </div>

              {/* Quick actions */}
              <div className="flex justify-between pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    const today = new Date()
                    if (!isDateDisabled(today)) {
                      handleDateSelect(today)
                    }
                  }}
                  className="text-xs text-primary hover:text-primary/80 transition-colors duration-150"
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(false)
                  }}
                  className="text-xs text-gray-600 hover:text-gray-800 transition-colors duration-150"
                >
                  Cancel
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
