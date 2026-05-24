'use client'

import { useLocale, useT } from '@/components/providers/LanguageProvider'
import { SUPPORTED_LOCALES, type Locale } from '@/lib/i18n/types'

const LABELS: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
}

interface LanguageToggleProps {
  className?: string
  size?: 'sm' | 'md'
}

export function LanguageToggle({ className = '', size = 'sm' }: LanguageToggleProps) {
  const [active, setLocale] = useLocale()
  const t = useT()

  const height = size === 'md' ? 'h-9' : 'h-7'
  const padX = size === 'md' ? 'px-3' : 'px-2.5'
  const fontSize = size === 'md' ? 'text-[12px]' : 'text-[11px]'

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`relative inline-flex items-center gap-px rounded-md border border-[var(--color-line)] bg-[var(--color-surface-2)] p-0.5 font-mono ${className}`}
    >
      {SUPPORTED_LOCALES.map((loc) => {
        const isActive = loc === active
        return (
          <button
            key={loc}
            type="button"
            onClick={() => !isActive && setLocale(loc)}
            aria-pressed={isActive}
            aria-label={`${t.nav.language}: ${LABELS[loc]}`}
            className={[
              'relative inline-flex items-center justify-center rounded-[5px] tracking-tight transition-[background-color,color] duration-150',
              height,
              padX,
              fontSize,
              isActive
                ? 'bg-[var(--color-surface-4)] text-[var(--color-ink)] shadow-[0_0_0_1px_var(--color-edge)_inset]'
                : 'text-[var(--color-ink-mute)] hover:text-[var(--color-ink-soft)]',
            ].join(' ')}
          >
            {LABELS[loc]}
          </button>
        )
      })}
    </div>
  )
}
