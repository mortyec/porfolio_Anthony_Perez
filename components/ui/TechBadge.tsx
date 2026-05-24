'use client'

import type { ReactNode } from 'react'

interface TechBadgeProps {
  children: ReactNode
  tone?: 'default' | 'blue' | 'violet'
  pulse?: boolean
}

const tones = {
  default:
    'bg-[var(--color-surface-2)] text-[var(--color-ink-soft)] border-[var(--color-line)]',
  blue: 'bg-[var(--color-accent-soft)] text-[#9ec1ff] border-[var(--color-accent-edge)]',
  violet:
    'bg-[var(--color-runtime-soft)] text-[#c4b5fd] border-[rgba(139,92,246,0.28)]',
} as const

const dotTones = {
  default: 'text-[var(--color-ink-mute)]',
  blue: 'text-[#60a5fa]',
  violet: 'text-[#a78bfa]',
} as const

export function TechBadge({
  children,
  tone = 'default',
  pulse = false,
}: TechBadgeProps) {
  return (
    <span
      className={`group inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] leading-none tracking-tight transition-colors duration-200 ${tones[tone]} hover:border-[var(--color-edge-strong)]`}
    >
      <span className={`relative flex h-1.5 w-1.5 rounded-full ${dotTones[tone]}`}>
        <span className="absolute inset-0 rounded-full bg-current" />
        {pulse && <span className="pulse-dot" />}
      </span>
      <span className="relative z-10">{children}</span>
    </span>
  )
}
