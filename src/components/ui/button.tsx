import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import ICArrow from '../icons/ICArrow'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  direction?: 'right' | 'left'
  showArrow?: boolean
}

const buttonVariants = cva('font-general-sans flex items-center justify-center uppercase', {
  variants: {
    variant: {
      primary:
        'bg-bg-primary text-t-inverse h-[3.125rem] p-[0.25rem_1.5rem] text-[0.875rem] font-medium',
      text: 'text-t-default h-[1.5rem] gap-[0.5rem] p-0 text-[1rem] font-semibold',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, direction = 'right', showArrow, children, ...props }, ref) => {
    // Tự động hiện mũi tên nếu là variant 'text' trừ khi bị ép tắt bằng showArrow={false}
    const shouldShowArrow = showArrow ?? variant === 'text'

    return (
      <button ref={ref} className={cn(buttonVariants({ variant, className }))} {...props}>
        {shouldShowArrow && direction === 'left' && (
          <span className="flex size-[1.5rem] items-center justify-center">
            <ICArrow className="fill-icon-default size-[1rem] rotate-180" />
          </span>
        )}

        {children}

        {shouldShowArrow && direction === 'right' && (
          <span className="flex size-[1.5rem] items-center justify-center">
            <ICArrow className="fill-icon-default size-[1rem]" />
          </span>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
