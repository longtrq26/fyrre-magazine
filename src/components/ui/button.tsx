import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className = '', children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'h-[3.125rem] uppercase font-general-sans bg-bg-primary text-t-inverse text-[0.875rem] font-medium flex items-center justify-center p-[0.25rem_1.5rem]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
