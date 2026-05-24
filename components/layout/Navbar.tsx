'use client'

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useT } from '@/components/providers/LanguageProvider'
import { LanguageToggle } from '@/components/ui/LanguageToggle'

const linkKeys = [
  { href: '#about', key: 'about', index: '01' },
  { href: '#projects', key: 'projects', index: '02' },
  { href: '#stack', key: 'stack', index: '03' },
  { href: '#contact', key: 'contact', index: '04' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const t = useT()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 12)
  })

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? 'glass-pane'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group relative flex items-center gap-2.5" aria-label={t.nav.home}>
            <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-edge)] bg-[var(--color-surface-2)] font-mono text-[12px] font-semibold tracking-tight text-[var(--color-ink)]">
              AP
              <span
                aria-hidden
                className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: '0 0 20px rgba(59,130,246,0.4)' }}
              />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-[13px] font-medium text-[var(--color-ink)]">Anthony Pérez</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
                {t.nav.eyebrow}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {linkKeys.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-[13px] text-[var(--color-ink-soft)] transition-colors duration-200 hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)]"
              >
                <span className="font-mono text-[10px] text-[var(--color-ink-faint)] transition-colors duration-200 group-hover:text-[var(--color-ink-mute)]">
                  {l.index}
                </span>
                {t.nav[l.key]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <a
              href="mailto:mortydev17@gmail.com"
              className="inline-flex h-9 items-center gap-1.5 rounded-md bg-[var(--color-ink)] px-3.5 text-[12.5px] font-medium text-[var(--color-canvas)] transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_0_24px_rgba(59,130,246,0.3)]"
            >
              {t.nav.hire}
              <span className="font-mono text-[10px] opacity-70">↗</span>
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-soft)]"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[var(--color-canvas)]/90 backdrop-blur-md" />
            <motion.nav
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative mx-5 mt-4 overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-1)]"
              aria-label={t.nav.mobile}
            >
              <ul className="divide-y divide-[var(--color-line)]">
                {linkKeys.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-5 py-4 text-[15px] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface-2)]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-[var(--color-ink-faint)]">{l.index}</span>
                        {t.nav[l.key]}
                      </span>
                      <span className="font-mono text-[var(--color-ink-mute)]">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:mortydev17@gmail.com"
                className="flex items-center justify-between border-t border-[var(--color-line)] bg-[var(--color-surface-2)] px-5 py-4 text-[14px] font-medium text-[var(--color-ink)]"
              >
                {t.nav.hire}
                <span className="font-mono text-[12px] text-[var(--color-ink-mute)]">
                  mortydev17@gmail.com
                </span>
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
