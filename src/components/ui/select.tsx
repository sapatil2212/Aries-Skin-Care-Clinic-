"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  label?: string
  error?: string
  placeholder?: string
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  className?: string
  required?: boolean
  disabled?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, placeholder, options, value, onChange, required, disabled }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="text-xs sm:text-xs font-medium text-gray-700">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={disabled}
            className={cn(
              "flex h-7 sm:h-8 w-full appearance-none rounded-lg border border-gray-300 bg-white px-2 py-1 pr-7 sm:pr-8 text-xs ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
              error && "border-red-300 focus-visible:ring-red-500",
              className
            )}
            required={required}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 h-3 w-3 sm:h-3 sm:w-3 -translate-y-1/2 text-gray-400 pointer-events-none" />
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

Select.displayName = "Select"

export { Select }
