'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Layers,
  Sparkles,
  Rocket,
  Boxes,
  Gauge,
  GitBranch,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useT } from '@/components/providers/LanguageProvider'
import { Accent } from '@/lib/i18n/Accent'

const focusItems = [
  { key: 'saas', icon: Layers, accent: 'blue' },
  { key: 'ai', icon: Sparkles, accent: 'violet' },
  { key: 'mvp', icon: Rocket, accent: 'blue' },
  { key: 'arch', icon: Boxes, accent: 'default' },
  { key: 'perf', icon: Gauge, accent: 'default' },
  { key: 'e2e', icon: GitBranch, accent: 'violet' },
] as const

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  const t = useT()

  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* top row: portrait + heading */}
        <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:items-center lg:gap-14">
          {/* portrait card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative w-full max-w-[380px] overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-1)] transition-[border-color] duration-300 hover:border-[var(--color-edge-strong)]"
          >
            {/* index strip */}
            <div className="flex items-center border-b border-[var(--color-line)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
              <span>
                <span className="text-[var(--color-ink-soft)]">{t.about.index}</span>
                <span className="mx-2 text-[var(--color-ink-faint)]">/</span>
                {t.about.portraitIndex}
              </span>
            </div>

            {/* portrait image */}
            <div className="relative aspect-square w-full bg-[var(--color-canvas)]">
              <Image
                src="https://avatars.githubusercontent.com/u/68710030?v=4"
                alt="Anthony Pérez"
                fill
                sizes="(max-width: 1024px) 380px, 340px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                priority
              />
              {/* soft vignette */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-surface-1)]/40 via-transparent to-transparent"
              />
            </div>

            {/* meta strip */}
            <div className="flex items-center justify-between border-t border-[var(--color-line)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-mute)]">
              <span className="truncate">{t.about.portraitRole}</span>
            </div>

            {/* hover glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(420px circle at 50% 0%, rgba(59,130,246,0.10), transparent 55%)',
              }}
            />
          </motion.div>

          {/* heading column */}
          <SectionHeading
            index="01"
            eyebrow={t.about.eyebrow}
            title={<Accent>{t.about.title}</Accent>}
            description={t.about.description}
          />
        </div>

        {/* focus grid — full width below */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {focusItems.map((item, i) => {
            const Icon = item.icon
            const data = t.about.focus[item.key]
            const accentClass =
              item.accent === 'blue'
                ? 'text-[#9ec1ff] border-[var(--color-accent-edge)] bg-[var(--color-accent-soft)]'
                : item.accent === 'violet'
                  ? 'text-[#c4b5fd] border-[rgba(139,92,246,0.28)] bg-[var(--color-runtime-soft)]'
                  : 'text-[var(--color-ink-soft)] border-[var(--color-line)] bg-[var(--color-surface-2)]'

            return (
              <motion.li
                key={item.key}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-1)] p-5 transition-[border-color,background-color] duration-300 hover:border-[var(--color-edge-strong)] hover:bg-[var(--color-surface-2)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-md border ${accentClass}`}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-[14.5px] font-medium tracking-tight text-[var(--color-ink)]">
                  {data.label}
                </h3>
                <p className="text-[13px] leading-relaxed text-pretty text-[var(--color-ink-mute)]">
                  {data.desc}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
