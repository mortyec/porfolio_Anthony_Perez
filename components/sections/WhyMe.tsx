'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Timer,
  Palette,
  BrainCircuit,
  Network,
  Globe2,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useT } from '@/components/providers/LanguageProvider'
import { Accent } from '@/lib/i18n/Accent'

const reasonDefs = [
  { key: 'startup', icon: Zap },
  { key: 'fast', icon: Timer },
  { key: 'ui', icon: Palette },
  { key: 'ai', icon: BrainCircuit },
  { key: 'saas', icon: Network },
  { key: 'remote', icon: Globe2 },
] as const

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function WhyMe() {
  const t = useT()
  return (
    <section
      id="why"
      className="relative scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-surface-1)]/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow={t.whyme.eyebrow}
          title={<Accent>{t.whyme.title}</Accent>}
          description={t.whyme.description}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {reasonDefs.map((r, i) => {
            const Icon = r.icon
            const data = t.whyme.reasons[r.key]
            return (
              <motion.article
                key={r.key}
                variants={cardVariants}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-canvas)] p-6 transition-[border-color] duration-300 hover:border-[var(--color-edge-strong)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-edge)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-soft)] transition-colors duration-300 group-hover:border-[var(--color-accent-edge)] group-hover:text-[#9ec1ff]">
                    <Icon size={17} strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
                    {String(i + 1).padStart(2, '0')} / 06
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[15px] font-medium tracking-tight text-[var(--color-ink)]">
                    {data.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-pretty text-[var(--color-ink-mute)]">
                    {data.desc}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
