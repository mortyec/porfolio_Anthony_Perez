'use client'

import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'mono'

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  href?: string
  external?: boolean
  children: ReactNode
  kbd?: string
}

const base =
  'group relative inline-flex items-center gap-2 rounded-md font-medium text-sm leading-none ' +
  'transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out ' +
  'active:translate-y-px will-change-transform select-none'

const sizing = 'h-11 px-5'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[var(--color-ink)] text-[var(--color-canvas)] border border-[var(--color-ink)] ' +
    'hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_0_28px_rgba(59,130,246,0.35)] ' +
    'hover:bg-white',
  ghost:
    'bg-transparent text-[var(--color-ink)] border border-[var(--color-edge)] ' +
    'hover:border-[var(--color-edge-strong)] hover:bg-[var(--color-surface-2)]',
  mono:
    'bg-[var(--color-surface-2)] text-[var(--color-ink-soft)] border border-[var(--color-line)] ' +
    'font-mono text-xs hover:border-[var(--color-edge-strong)] hover:text-[var(--color-ink)]',
}

const Inner = ({
  children,
  kbd,
  variant,
}: {
  children: ReactNode
  kbd?: string
  variant: Variant
}) => (
  <>
    <span className="relative z-10 flex items-center gap-2">{children}</span>
    {kbd && (
      <span
        className={
          'relative z-10 ml-1 inline-flex h-5 items-center rounded border px-1.5 font-mono text-[10px] tracking-tight ' +
          (variant === 'primary'
            ? 'border-black/15 bg-black/10 text-[var(--color-canvas)]/70'
            : 'border-[var(--color-line)] bg-[var(--color-surface-1)] text-[var(--color-ink-mute)]')
        }
      >
        {kbd}
      </span>
    )}
  </>
)

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  function GlowButton(
    { variant = 'primary', href, external, children, kbd, className = '', ...rest },
    ref,
  ) {
    const classes = `${base} ${sizing} ${variantStyles[variant]} ${className}`

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          {...(external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          <Inner kbd={kbd} variant={variant}>
            {children}
          </Inner>
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...rest}>
        <Inner kbd={kbd} variant={variant}>
          {children}
        </Inner>
      </button>
    )
  },
)
