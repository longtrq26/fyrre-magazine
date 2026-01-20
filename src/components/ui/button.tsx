import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import ICArrow from '../icons/ICArrow'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  direction?: 'right' | 'left'
  showArrow?: boolean
}

const buttonVariants = cva(
  'font-general-sans flex items-center justify-center uppercase transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-bg-primary text-t-inverse t-small hover:bg-bg-primary/90 h-[2.75rem] px-4 font-medium md:h-[3.125rem] md:px-6',
        text: 'text-t-default t-default h-fit gap-[0.5rem] p-0 font-semibold hover:opacity-60',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

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
