import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-manrope ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300 font-audiowide tracking-wide",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-glow",
        ghost: "hover:bg-accent/20 hover:text-accent transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        neon: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-audiowide",
        magenta: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)] transition-all duration-300 font-audiowide",
        gradient: "bg-gradient-to-r from-primary via-accent to-warning text-background hover:scale-105 hover:shadow-glow transition-all duration-300 font-audiowide tracking-wide",
        retro: "bg-gradient-card border border-primary/30 text-primary hover:border-primary hover:shadow-glow transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg font-audiowide tracking-wider",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
