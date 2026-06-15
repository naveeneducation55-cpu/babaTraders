'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  target?: string
  rel?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  disabled,
  type = 'button',
  target,
  rel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B8860B] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'

  const variants = {
    primary: 'bg-[#0F172A] text-white hover:bg-[#1e293b] active:scale-95',
    secondary:
      'bg-transparent border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white active:scale-95',
    ghost: 'bg-transparent text-[#0F172A] hover:bg-[#0F172A]/10 active:scale-95',
  }

  const sizes = {
    sm: 'text-sm px-5 py-2.5 min-h-[40px]',
    md: 'text-base px-7 py-3.5 min-h-[48px]',
    lg: 'text-lg px-9 py-4 min-h-[56px]',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
