'use client'

import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { useT } from '@/components/providers/LanguageProvider'

const navKeys = ['about', 'projects', 'stack', 'contact'] as const

export function Footer() {
  const t = useT()

  const socials = [
    {
      label: t.footer.socialGithub,
      href: 'https://github.com/mortyec',
      icon: GithubIcon,
      external: true,
    },
    {
      label: t.footer.socialLinkedin,
      href: 'https://www.linkedin.com/in/anthony-pérez-57522b28a/',
      icon: LinkedinIcon,
      external: true,
    },
    {
      label: t.footer.socialEmail,
      href: 'mailto:mortydev17@gmail.com',
      icon: Mail,
      external: false,
    },
  ]

  return (
    <footer className="relative border-t border-[var(--color-line)] bg-[var(--color-canvas)]">
      <div className="absolute inset-0 grid-blueprint-fine opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div className="flex items-start gap-3">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[var(--color-edge)] bg-[var(--color-surface-2)] font-mono text-sm font-semibold tracking-tight text-[var(--color-ink)]">
              AP
            </span>
            <div className="flex flex-col">
              <span className="text-[14px] font-medium text-[var(--color-ink)]">Anthony Pérez</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
                {t.footer.role}
              </span>
              <a
                href="mailto:mortydev17@gmail.com"
                className="mt-2 font-mono text-[12px] text-[var(--color-ink-soft)] transition-colors hover:text-[#9ec1ff]"
              >
                mortydev17@gmail.com
              </a>
            </div>
          </div>

          <nav aria-label={t.nav.mobile} className="flex flex-col gap-3 md:items-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-faint)]">
              {t.footer.navigate}
            </span>
            <ul className="flex flex-col gap-2 md:items-center">
              {navKeys.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-[13.5px] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
                  >
                    {t.footer.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3 md:items-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-faint)]">
              {t.footer.channels}
            </span>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-line)] bg-[var(--color-surface-1)] text-[var(--color-ink-soft)] transition-[border-color,color,box-shadow] duration-300 hover:border-[var(--color-edge-strong)] hover:text-[var(--color-ink)] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.3),0_0_18px_rgba(59,130,246,0.2)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-line)] pt-6">
          <span className="font-mono text-[11px] text-[var(--color-ink-mute)]">
            {t.footer.copyright}
          </span>
        </div>
      </div>
    </footer>
  )
}
