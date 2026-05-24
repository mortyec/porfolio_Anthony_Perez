'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useT } from '@/components/providers/LanguageProvider'
import { Accent } from '@/lib/i18n/Accent'

/**
 * Inline SVG icon components — keep zero external icon deps for brand logos.
 * Designed monochrome to fit the engineer's-workshop palette; tinted on hover.
 */
type IconProps = { className?: string }

const Logos = {
  React: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  Next: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
      <path d="M8 7v10M8 7l8.5 10M16 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  TypeScript: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1" />
      <path d="M8 10h7M11.5 10v8M19 12.5c-.5-.8-1.4-1.5-2.5-1.5-1.2 0-2.2.8-2.2 1.8 0 2.4 4.7 1.8 4.7 4.4 0 1.2-1.2 2-2.7 2-1.1 0-2.2-.5-2.8-1.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Tailwind: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7 11c.8-2 2.3-3 4.5-3 3 0 3.5 2 5 2.5 1 .3 2-.2 3-1.5-1 3-2.5 4-4.5 4-3 0-3.5-2-5-2.5-1-.3-2 .2-3 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M3 17c.8-2 2.3-3 4.5-3 3 0 3.5 2 5 2.5 1 .3 2-.2 3-1.5-1 3-2.5 4-4.5 4-3 0-3.5-2-5-2.5-1-.3-2 .2-3 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  ),
  Node: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <path d="M9 9.5v5c0 .8.4 1.5 1.5 1.5s1.5-.7 1.5-1.5V9.5M14 14.5c.2.9.9 1.5 2 1.5 1.5 0 2-.6 2-1.4 0-2-3.8-1-3.8-2.7 0-.7.6-1.4 1.8-1.4 1 0 1.7.4 1.9 1.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  Supabase: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M13 2 4 13h7v9l9-11h-7V2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  OpenAI: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3a5 5 0 0 1 4.9 4 5 5 0 0 1 1.4 8.7A5 5 0 0 1 12 21a5 5 0 0 1-4.9-4 5 5 0 0 1-1.4-8.7A5 5 0 0 1 12 3z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M12 7v10M7.5 9.5l9 5M16.5 9.5l-9 5" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  Vercel: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 4 22 20H2L12 4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  ),
}

const stack = [
  { name: 'React', subKey: 'react', Icon: Logos.React, tone: 'blue' },
  { name: 'Next.js', subKey: 'next', Icon: Logos.Next, tone: 'default' },
  { name: 'TypeScript', subKey: 'typescript', Icon: Logos.TypeScript, tone: 'blue' },
  { name: 'TailwindCSS', subKey: 'tailwind', Icon: Logos.Tailwind, tone: 'blue' },
  { name: 'Node.js', subKey: 'node', Icon: Logos.Node, tone: 'default' },
  { name: 'Supabase', subKey: 'supabase', Icon: Logos.Supabase, tone: 'default' },
  { name: 'OpenAI', subKey: 'openai', Icon: Logos.OpenAI, tone: 'violet' },
  { name: 'Vercel', subKey: 'vercel', Icon: Logos.Vercel, tone: 'default' },
] as const

const cellVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
}

export function TechStack() {
  const t = useT()
  return (
    <section id="stack" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow={t.techstack.eyebrow}
          title={<Accent>{t.techstack.title}</Accent>}
          description={t.techstack.description}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4"
        >
          {stack.map((tech) => {
            const { Icon, tone } = tech
            const accent =
              tone === 'blue'
                ? 'group-hover:text-[#9ec1ff]'
                : tone === 'violet'
                  ? 'group-hover:text-[#c4b5fd]'
                  : 'group-hover:text-[var(--color-ink)]'

            return (
              <motion.div
                key={tech.name}
                variants={cellVariants}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col items-start justify-between gap-6 bg-[var(--color-surface-1)] p-5 transition-colors duration-300 hover:bg-[var(--color-surface-2)] sm:p-6"
              >
                <Icon
                  className={`h-7 w-7 text-[var(--color-ink-mute)] transition-colors duration-300 ${accent}`}
                />
                <div className="flex w-full items-end justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-medium tracking-tight text-[var(--color-ink)]">
                      {tech.name}
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-ink-mute)]">
                      {t.techstack.sub[tech.subKey]}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--color-ink-faint)] transition-colors duration-300 group-hover:text-[var(--color-ink-mute)]">
                    ↗
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
