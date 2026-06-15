import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'gold' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-[#0F172A]/10 text-[#0F172A]',
    gold: 'bg-[#B8860B]/15 text-[#B8860B] border border-[#B8860B]/30',
    outline: 'border border-[#E5E7EB] text-[#64748B]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
