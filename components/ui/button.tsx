import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-button font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ds-raw-orange-500] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-[--ds-raw-orange-500] text-white shadow-sm hover:bg-[--ds-raw-orange-600]',
        destructive:
          'bg-red-500 text-white shadow-sm hover:bg-red-600',
        outline:
          'border border-[--ds-raw-border-orange] bg-transparent text-[--ds-raw-orange-500] shadow-sm hover:bg-[--ds-raw-orange-500]/5',
        secondary:
          'bg-[--ds-raw-neutral-pill] text-[--ds-raw-navy-975] border border-[--ds-raw-border] shadow-sm hover:bg-[--ds-raw-border] hover:border-[--ds-raw-border]',
        ghost:
          'hover:bg-[--ds-raw-neutral-pill] hover:text-[--ds-raw-navy-975]',
        link: 'text-[--ds-raw-orange-500] underline-offset-4 hover:underline',
        info: 'bg-transparent text-[--ds-raw-info-blue] border border-[rgba(43,145,223,0.2)] shadow-none hover:bg-[rgba(43,145,223,0.05)]',
        'neutral-ghost': 'bg-transparent text-[rgba(16,16,16,0.3)] border border-[rgb(212,222,233)] shadow-none hover:bg-[rgba(16,16,16,0.02)] hover:text-[rgba(16,16,16,0.5)]',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-sm rounded-sm',
        lg: 'h-11 px-8 text-base rounded-sm',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
