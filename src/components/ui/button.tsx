import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "xl"
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", loading = false, disabled, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn-hover",
          {
            // Default variant
            "bg-gray-100 text-gray-900 hover:bg-gray-200": variant === "default",
            
            // Primary variant
            "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl": variant === "primary",
            
            // Secondary variant
            "bg-secondary text-primary border border-primary hover:bg-primary hover:text-white": variant === "secondary",
            
            // Outline variant
            "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white": variant === "outline",
            
            // Ghost variant
            "hover:bg-primary/10 text-primary": variant === "ghost",
            
            // Link variant
            "text-primary underline-offset-4 hover:underline bg-transparent": variant === "link",
          },
          {
            // Size variants
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-lg px-8": size === "lg",
            "h-12 rounded-xl px-10 text-base": size === "xl",
          },
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
