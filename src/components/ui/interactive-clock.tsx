"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { Clock, ChevronDown } from "lucide-react"

const scrollbarStyles = `
  .clock-wheel {
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
  }
  .clock-wheel::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  .clock-wheel::-webkit-scrollbar-track {
    display: none !important;
    background: transparent !important;
  }
  .clock-wheel::-webkit-scrollbar-thumb {
    display: none !important;
    background: transparent !important;
  }
  .clock-wheel::-webkit-scrollbar-corner {
    display: none !important;
    background: transparent !important;
  }
  .clock-wheel * {
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
  }
  .clock-wheel *::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
`

export interface InteractiveClockProps {
  label?: string
  error?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  required?: boolean
  disabled?: boolean
  placeholder?: string
  format?: "12" | "24"
  minuteStep?: 1 | 5 | 10 | 15 | 30
}

const InteractiveClock = React.forwardRef<HTMLDivElement, InteractiveClockProps>(
  ({ 
    className, 
    label, 
    error, 
    value, 
    onChange, 
    required, 
    disabled, 
    placeholder = "Select time",
    format = "12",
    minuteStep = 1 
  }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedHour, setSelectedHour] = React.useState(9)
    const [selectedMinute, setSelectedMinute] = React.useState(0)
    const [isAM, setIsAM] = React.useState(true)
    const [buttonRect, setButtonRect] = React.useState<DOMRect | null>(null)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(false)
    
    const clockRef = React.useRef<HTMLDivElement>(null)
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const dropdownRef = React.useRef<HTMLDivElement>(null)
    const hourScrollRef = React.useRef<HTMLDivElement>(null)
    const minuteScrollRef = React.useRef<HTMLDivElement>(null)
    const periodScrollRef = React.useRef<HTMLDivElement>(null)

    // Track scroll timeouts to prevent excessive updates
    const scrollTimeoutRef = React.useRef<NodeJS.Timeout>()

    // Detect mobile view
    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Generate time arrays based on format
    const hours = format === "12" 
      ? Array.from({ length: 12 }, (_, i) => i + 1)
      : Array.from({ length: 24 }, (_, i) => i)
    const minutes = Array.from({ length: 60 }, (_, i) => i).filter(m => m % minuteStep === 0)

    // Inject enhanced styles
    React.useEffect(() => {
      const style = document.createElement('style')
      style.textContent = scrollbarStyles
      document.head.appendChild(style)
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style)
        }
      }
    }, [])

    // Parse initial value with better error handling
    React.useEffect(() => {
      if (value) {
        try {
          if (format === "12") {
            const [time, period] = value.split(' ')
            const [hour, minute] = time.split(':').map(Number)
            
            if (period === 'PM' && hour !== 12) {
              setSelectedHour(hour)
            } else if (period === 'AM' && hour === 12) {
              setSelectedHour(12)
            } else {
              setSelectedHour(hour)
            }
            setSelectedMinute(minute)
            setIsAM(period === 'AM')
          } else {
            const [hour, minute] = value.split(':').map(Number)
            setSelectedHour(hour)
            setSelectedMinute(minute)
          }
        } catch (error) {
          console.warn('Invalid time format provided:', value)
        }
      }
    }, [value, format])

     // Enhanced auto-scroll to selected values - only on initial open
     React.useEffect(() => {
       if (isOpen && !isAnimating) {
         setIsAnimating(true)
         setTimeout(() => {
           const scrollToOption = (ref: React.RefObject<HTMLDivElement>, index: number, itemHeight: number) => {
             if (ref.current) {
               const scrollTop = Math.max(0, index * itemHeight - itemHeight * 2)
               ref.current.scrollTo({ top: scrollTop, behavior: 'smooth' })
             }
           }

           // Scroll to selected values
           const hourIndex = format === "12" ? selectedHour - 1 : selectedHour
           const itemHeight = isMobile ? 28 : 32
           scrollToOption(hourScrollRef, Math.max(0, hourIndex), itemHeight)
           
           const minuteIndex = minutes.findIndex(m => m === selectedMinute)
           scrollToOption(minuteScrollRef, Math.max(0, minuteIndex), itemHeight)
           
           if (format === "12") {
             const periodIndex = isAM ? 0 : 1
             scrollToOption(periodScrollRef, periodIndex, itemHeight)
           }

           setTimeout(() => setIsAnimating(false), 500) // Increased delay
         }, 100) // Increased initial delay
       }
     }, [isOpen]) // Only trigger on open, not on value changes

    // Outside click handler
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && 
            buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false)
          buttonRef.current?.focus()
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEscape)
        return () => {
          document.removeEventListener("mousedown", handleClickOutside)
          document.removeEventListener("keydown", handleEscape)
        }
      }
    }, [isOpen])

    const formatTime = (hour: number, minute: number, isAM: boolean) => {
      if (format === "24") {
        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      } else {
        const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
        const displayMinute = minute.toString().padStart(2, '0')
        const period = isAM ? 'AM' : 'PM'
        return `${displayHour}:${displayMinute} ${period}`
      }
    }

    const handleTimeSelect = () => {
      let timeString: string
      
      if (format === "24") {
        timeString = `${selectedHour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')}`
      } else {
        timeString = formatTime(selectedHour, selectedMinute, isAM)
      }
      
      onChange?.(timeString)
      setIsOpen(false)
    }

     // Create debounced scroll handler outside of render function
     const createScrollHandler = React.useCallback((
       items: (number | string)[],
       selected: number | string,
       onSelect: (value: any) => void,
       scrollRef: React.RefObject<HTMLDivElement>,
       itemHeight: number
     ) => {
       return () => {
         if (scrollTimeoutRef.current) {
           clearTimeout(scrollTimeoutRef.current)
         }
         
         scrollTimeoutRef.current = setTimeout(() => {
           if (scrollRef.current && !isAnimating) {
             const scrollTop = scrollRef.current.scrollTop
             const centerOffset = itemHeight * 2
             const itemIndex = Math.round((scrollTop + centerOffset) / itemHeight)
             
             if (itemIndex >= 0 && itemIndex < items.length) {
               const item = items[itemIndex]
               if (item !== selected) {
                 // Only update if the scroll has stopped for a longer period
                 onSelect(item)
               }
             }
           }
         }, 150) // Increased delay to prevent interference
       }
     }, [isAnimating])

    const renderTimeWheel = (
      items: (number | string)[],
      selected: number | string,
      onSelect: (value: any) => void,
      scrollRef: React.RefObject<HTMLDivElement>,
      label: string,
       itemHeight = isMobile ? 28 : 32
    ) => {
      const handleScroll = createScrollHandler(items, selected, onSelect, scrollRef, itemHeight)

      return (
         <div className="flex flex-col items-center">
           <label className="text-xs font-medium text-muted-foreground mb-1 select-none">
             {label}
           </label>
           <div className="relative">
             {/* Enhanced gradient masks */}
             <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white via-white/90 to-transparent z-20 pointer-events-none rounded-t-lg" />
             <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none rounded-b-lg" />
             
             <div className={`${isMobile ? 'w-12 h-24' : 'w-16 h-28'} overflow-hidden rounded-lg border border-gray-200 bg-gray-50/30 relative`}>
              <div 
                ref={scrollRef} 
                className="h-full overflow-y-auto clock-wheel"
                style={{ 
                  scrollSnapType: 'y mandatory',
                  scrollBehavior: 'smooth'
                }}
                 onScroll={handleScroll}
                 onWheel={(e) => e.stopPropagation()}
              >
                {/* Top spacer */}
                <div style={{ height: itemHeight * 2 }} className="pointer-events-none" />
                
                {items.map((item, index) => (
                  <button
                    key={`${item}-${index}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelect(item)
                    }}
                     className={cn(
                       "w-full flex items-center justify-center font-medium transition-all duration-200 select-none",
                       isMobile ? "text-xs" : "text-xs",
                       "focus:outline-none hover:bg-primary/10 active:scale-95",
                       "border-0 bg-transparent",
                       selected === item
                         ? "text-primary font-semibold transform scale-105"
                         : "text-gray-600 hover:text-gray-800"
                     )}
                    style={{ 
                      height: itemHeight,
                      scrollSnapAlign: 'center',
                      border: 'none',
                      outline: 'none'
                    }}
                  >
                    {typeof item === 'number' ? item.toString().padStart(2, '0') : item}
                  </button>
                ))}
                
                {/* Bottom spacer */}
                <div style={{ height: itemHeight * 2 }} className="pointer-events-none" />
              </div>
            </div>
            
             {/* Enhanced selection indicator */}
             <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 ${isMobile ? 'h-6' : 'h-8'} pointer-events-none z-10`}>
               <div className="h-full mx-1 border border-primary/30 bg-primary/10 rounded-md shadow-sm" />
             </div>
          </div>
        </div>
      )
    }

    const renderClockDropdown = () => {
      if (!isOpen || !buttonRect) return null

      const dropdownWidth = buttonRect.width
      const dropdownHeight = isMobile ? 240 : 280
      
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

      return createPortal(
        <>
          {/* Enhanced backdrop with subtle animation */}
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-200" 
            onClick={() => setIsOpen(false)}
            style={{ animation: 'fadeIn 200ms ease-out' }}
          />
          
          {/* Enhanced time picker modal */}
          <div 
            ref={dropdownRef}
            className="rounded-xl border-2 border-gray-100 bg-white shadow-2xl"
            style={{
              position: 'fixed',
              top: Math.max(16, top),
              left,
              zIndex: 50,
              width: dropdownWidth,
              height: dropdownHeight,
              animation: 'slideIn 250ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
             <div className={`${isMobile ? 'p-3' : 'p-4'} h-full flex flex-col`}>
               {/* Enhanced header */}
               <div className={`flex items-center justify-center gap-3 ${isMobile ? 'mb-2' : 'mb-3'}`}>
                 <h3 className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-gray-800 flex items-center gap-1`}>
                   <Clock className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-primary`} />
                   Select Time
                 </h3>
                 <div className={`${isMobile ? 'text-sm' : 'text-lg'} font-mono font-semibold text-primary bg-primary/10 ${isMobile ? 'px-2 py-1' : 'px-3 py-1'} rounded-md`}>
                   {formatTime(selectedHour, selectedMinute, isAM)}
                 </div>
               </div>
              
               {/* Enhanced time picker wheels */}
               <div className={`flex items-center justify-center ${isMobile ? 'space-x-1' : 'space-x-2'} flex-1 ${isMobile ? 'py-1' : 'py-2'}`}>
                {renderTimeWheel(
                  hours,
                  selectedHour,
                  setSelectedHour,
                  hourScrollRef,
                  "Hour"
                )}
                
                
                {renderTimeWheel(
                  minutes,
                  selectedMinute,
                  setSelectedMinute,
                  minuteScrollRef,
                  "Minute"
                )}
                
                {format === "12" && (
                  renderTimeWheel(
                    ['AM', 'PM'],
                    isAM ? 'AM' : 'PM',
                    (period: string) => setIsAM(period === 'AM'),
                    periodScrollRef,
                    "Period"
                  )
                )}
              </div>

               {/* Enhanced action buttons */}
               <div className={`flex justify-end ${isMobile ? 'space-x-1 pt-2' : 'space-x-2 pt-3'} border-t border-gray-100`}>
                 <button
                   type="button"
                   onClick={() => setIsOpen(false)}
                   className={`${isMobile ? 'px-3 py-1 text-xs' : 'px-4 py-1.5 text-xs'} font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors duration-200`}
                 >
                   Cancel
                 </button>
                 <button
                   type="button"
                   onClick={handleTimeSelect}
                   className={`${isMobile ? 'px-3 py-1 text-xs' : 'px-4 py-1.5 text-xs'} font-medium bg-primary text-white rounded-md hover:bg-primary/90 active:bg-primary/80 transition-colors duration-200 shadow-sm`}
                 >
                   Confirm
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
        
        <div className="relative" ref={clockRef}>
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
                {value || placeholder}
              </span>
            </div>
            
            <ChevronDown className={cn(
              "h-3 w-3 text-gray-400 transition-transform duration-200",
              isOpen && "transform rotate-180"
            )} />
          </button>

          {renderClockDropdown()}
        </div>
        
        {error && (
          <p className="text-xs text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

InteractiveClock.displayName = "InteractiveClock"

export { InteractiveClock }