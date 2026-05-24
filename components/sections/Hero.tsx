'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight, Mail } from 'lucide-react'
import { TechBadge } from '@/components/ui/TechBadge'
import { ParticleField } from '@/components/providers/ParticleField'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { useT } from '@/components/providers/LanguageProvider'
import { Accent } from '@/lib/i18n/Accent'

const heroTech = [
  { label: 'React', tone: 'default' },
  { label: 'Next.js 16', tone: 'default' },
  { label: 'TypeScript', tone: 'default' },
  { label: 'Tailwind', tone: 'default' },
  { label: 'Node.js', tone: 'default' },
  { label: 'Supabase', tone: 'blue' },
  { label: 'OpenAI API', tone: 'violet' },
] as const

const NAME = 'Anthony Pérez'

export function Hero() {
  const root = useRef<HTMLDivElement | null>(null)
  const t = useT()

  useGSAP(
    () => {
      const letters = gsap.utils.toArray<HTMLSpanElement>('[data-hero-letter]')
      gsap.set(letters, { y: '110%', opacity: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      tl.to(letters, {
        y: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.025,
        delay: 0.15,
      })
        .from(
          '[data-hero-eyebrow]',
          { y: 10, opacity: 0, duration: 0.6, ease: 'power3.out' },
          '<-0.5',
        )
        .from(
          '[data-hero-title]',
          { y: 12, opacity: 0, duration: 0.7, ease: 'power3.out' },
          '<+0.2',
        )
        .from(
          '[data-hero-subtitle]',
          { y: 12, opacity: 0, duration: 0.7, ease: 'power3.out' },
          '<+0.1',
        )
        .from(
          '[data-hero-cta]',
          { y: 10, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08 },
          '<+0.1',
        )
        .from(
          '[data-hero-badge]',
          { y: 8, opacity: 0, duration: 0.5, ease: 'power2.out', stagger: 0.04 },
          '<+0.05',
        )
        .from(
          '[data-hero-meta]',
          { y: 6, opacity: 0, duration: 0.5, ease: 'power2.out', stagger: 0.06 },
          '<',
        )
    },
    { scope: root },
  )

  return (
    <section
      id="top"
      ref={root}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div aria-hidden className="absolute inset-0 grid-blueprint mask-fade-radial opacity-70" />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(59,130,246,0.28), transparent 70%)',
          animation: 'drift-slow 14s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-[-10%] h-[460px] w-[460px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(139,92,246,0.28), transparent 70%)',
          animation: 'drift-slow 18s ease-in-out infinite reverse',
        }}
      />

      <div className="absolute inset-0">
        <ParticleField density={0.00008} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:gap-10">
          <div
            data-hero-eyebrow
            className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-mute)]"
          >
            <span>{t.hero.location}</span>
          </div>

          <h1 className="relative">
            <span className="sr-only">{NAME}</span>
            <span
              aria-hidden
              data-hero-name
              className="relative flex flex-wrap text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.035em] text-[var(--color-ink)]"
              style={{ fontFeatureSettings: '"ss01"' }}
            >
              {NAME.split('').map((char, i) => (
                <span
                  key={i}
                  className="relative inline-block overflow-hidden whitespace-pre align-baseline"
                >
                  <span data-hero-letter className="inline-block will-change-transform">
                    {char === ' ' ? ' ' : char}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          <div className="flex max-w-3xl flex-col gap-5">
            <p
              data-hero-title
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[18px] font-medium tracking-tight text-[var(--color-ink-soft)] sm:text-[20px]"
            >
              <span>{t.hero.title}</span>
              <span className="font-mono text-[12px] text-[var(--color-ink-faint)]">
                {t.hero.seniority}
              </span>
            </p>
            <p
              data-hero-subtitle
              className="max-w-2xl text-pretty text-[15.5px] leading-relaxed text-[var(--color-ink-mute)] sm:text-[16.5px]"
            >
              <Accent tone="soft">{t.hero.subtitle}</Accent>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              data-hero-cta
              href="#projects"
              className="group relative inline-flex h-11 items-center gap-2 rounded-md bg-[var(--color-ink)] px-5 text-[13.5px] font-medium text-[var(--color-canvas)] transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.45),0_0_32px_rgba(59,130,246,0.4)]"
            >
              {t.hero.ctaProjects}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
              <span className="ml-1 inline-flex h-5 items-center rounded border border-black/15 bg-black/10 px-1.5 font-mono text-[10px] text-[var(--color-canvas)]/70">
                ↵
              </span>
            </a>
            <a
              data-hero-cta
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-[var(--color-edge)] bg-transparent px-5 text-[13.5px] font-medium text-[var(--color-ink)] transition-[border-color,background-color] duration-200 hover:border-[var(--color-edge-strong)] hover:bg-[var(--color-surface-2)]"
            >
              {t.hero.ctaContact}
            </a>
            <div className="ml-1 hidden h-8 w-px bg-[var(--color-line)] sm:block" data-hero-cta />
            <div data-hero-cta className="flex items-center gap-1.5">
              <a
                href="https://github.com/mortyec"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.socialGithub}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line)] bg-[var(--color-surface-1)]/60 text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-edge-strong)] hover:text-[var(--color-ink)]"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-pérez-57522b28a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.socialLinkedin}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line)] bg-[var(--color-surface-1)]/60 text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-edge-strong)] hover:text-[var(--color-ink)]"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href="mailto:mortydev17@gmail.com"
                aria-label={t.hero.socialEmail}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line)] bg-[var(--color-surface-1)]/60 text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-edge-strong)] hover:text-[var(--color-ink)]"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {heroTech.map((tech) => (
              <span key={tech.label} data-hero-badge>
                <TechBadge tone={tech.tone} pulse={tech.tone !== 'default'}>
                  {tech.label}
                </TechBadge>
              </span>
            ))}
          </div>

          <div className="mt-4 grid max-w-sm grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-line)]">
            <div data-hero-meta className="flex flex-col gap-1 bg-[var(--color-surface-1)] px-4 py-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                {t.hero.metaProjectsLabel}
              </span>
              <span className="font-mono text-[15px] font-medium text-[var(--color-ink)]">
                {t.hero.metaProjectsValue}
                <span className="text-[var(--color-ink-mute)]">+</span>
              </span>
            </div>
            <div data-hero-meta className="flex flex-col gap-1 bg-[var(--color-surface-1)] px-4 py-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                {t.hero.metaStackLabel}
              </span>
              <span className="font-mono text-[15px] font-medium text-[var(--color-ink)]">
                {t.hero.metaStackValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
