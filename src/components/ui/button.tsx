import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-[4px] whitespace-nowrap rounded-full h-[48px] font-demibold-small transition-colors focus-visible:outline-none',
  {
    variants: {
      variant: {
        light:
          'border border-[var(--border)] bg-[var(--secondary-btn)] text-[var(--text-color)]',
        primary:
          'bg-[var(--primary-btn)] text-[var(--primary-btn-color)] shadow hover:opacity-90',
        ghost:
          'border-0 gap-[4px] rounded-[10px] bg-[var(--background)] shadow-none hover:bg-[var(--background)] h-auto w-auto text-[var(--text-color)]',
      },
      size: {
        default: 'px-[28px]',
        lg: 'px-[28px]',
      },
    },
    compoundVariants: [
      {
        variant: 'ghost',
        class: 'p-0',
      },
    ],
    defaultVariants: {
      variant: 'light',
      size: 'default',
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
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
