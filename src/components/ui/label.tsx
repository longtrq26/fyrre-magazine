import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { LabelHTMLAttributes, forwardRef } from 'react'

interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {}

const labelVariants = cva(
  't-xsmall flex size-fit items-center justify-center rounded-[6.25rem] border uppercase transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-border-default text-t-default bg-transparent p-[0.4rem_0.6rem] md:p-[0.5rem_0.75rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <label ref={ref} className={cn(labelVariants({ variant, className }))} {...props}>
        {children}
      </label>
    )
  },
)

Label.displayName = 'Label'

export default Label
