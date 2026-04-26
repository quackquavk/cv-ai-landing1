import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-1.5 py-px text-[11px] font-[400] transition-colors focus:outline-none focus:ring-2 focus:ring-[--ds-raw-orange-500] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[--ds-raw-orange-500] text-white hover:opacity-90",
        secondary:
          "bg-[--ds-raw-neutral-pill] text-[--ds-raw-navy-975] border border-[--ds-raw-border]",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[--ds-raw-border] text-[--ds-raw-slate-body]",
        success:
          "bg-[rgba(21,190,83,0.2)] text-[--ds-raw-green-text] border border-[rgba(21,190,83,0.4)]",
        info:
          "bg-[rgba(40,116,173,0.1)] text-[--ds-raw-info-blue] border border-[rgba(40,116,173,0.2)]",
        warning:
          "bg-[rgba(155,104,41,0.1)] text-[--ds-raw-lemon] border border-[rgba(155,104,41,0.2)]",
        ruby:
          "bg-[rgba(234,34,97,0.1)] text-[--ds-raw-ruby] border border-[rgba(234,34,97,0.2)]",
        magenta:
          "bg-[--ds-raw-magenta-light] text-[--ds-raw-magenta] border border-[--ds-raw-magenta-light]",
        orange:
          "bg-[--ds-raw-orange-500]/10 text-[--ds-raw-orange-500] border border-[--ds-raw-orange-500]/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants } 