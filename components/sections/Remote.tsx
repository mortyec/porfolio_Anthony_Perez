'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowUpRight, MapPin, Clock, Languages, Wifi } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/ui/BrandIcons'
import { useT } from '@/components/providers/LanguageProvider'
import { Accent } from '@/lib/i18n/Accent'

const itemDefs = [
  { key: 'remote', icon: Wifi },
  { key: 'async', icon: Clock },
  { key: 'based', icon: MapPin },
  { key: 'languages', icon: Languages },
] as const

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
}

export function Remote() {
  const t = useT()

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      <div aria-hidden className="absolute inset-0 grid-blueprint mask-fade-radial opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(closest-side, rgba(59,130,246,0.18), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-12 text-center">
          <SectionHeading
            index="05"
            eyebrow={t.remote.eyebrow}
            align="center"
            title={<Accent>{t.remote.title}</Accent>}
            description={t.remote.description}
          />

          {/* status panel — deploy-log feel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={containerVariants}
            className="grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4"
          >
            {itemDefs.map((item) => {
              const Icon = item.icon
              const data = t.remote.items[item.key]
              return (
                <motion.div
                  key={item.key}
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-start gap-3 bg-[var(--color-surface-1)] px-5 py-5 text-left"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-soft)]">
                    <Icon size={15} strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                      {data.label}
                    </span>
                    <span className="text-[13.5px] font-medium tracking-tight text-[var(--color-ink)]">
                      {data.value}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* contact panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-1)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-edge)] to-transparent"
            />
            <div className="flex flex-col gap-6 p-7 sm:p-9">
              <div className="flex flex-col items-center gap-3 text-center">
                <h3 className="max-w-xl text-balance text-2xl font-medium leading-tight tracking-tight text-[var(--color-ink)] sm:text-[28px]">
                  {t.remote.heading}
                </h3>
                <p className="max-w-lg text-pretty text-[14px] leading-relaxed text-[var(--color-ink-mute)]">
                  {t.remote.contactDescription}
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                <a
                  href="mailto:mortydev17@gmail.com"
                  className="group relative inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[var(--color-ink)] px-5 text-[13.5px] font-medium text-[var(--color-canvas)] transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.45),0_0_32px_rgba(59,130,246,0.4)] sm:w-auto"
                >
                  <Mail size={14} />
                  mortydev17@gmail.com
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px"
                  />
                </a>
                <a
                  href="https://wa.me/593999051864"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.remote.whatsappLabel} · ${t.remote.whatsappNumber}`}
                  className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-[var(--color-edge)] bg-transparent px-5 text-[13.5px] font-medium text-[var(--color-ink)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-[rgba(34,197,94,0.45)] hover:bg-[var(--color-live-soft)] hover:shadow-[0_0_0_1px_rgba(34,197,94,0.35),0_0_24px_rgba(34,197,94,0.22)] sm:w-auto"
                >
                  <WhatsappIcon
                    size={15}
                    className="text-[var(--color-ink-soft)] transition-colors duration-300 group-hover:text-[var(--color-live)]"
                  />
                  <span className="hidden font-mono text-[12px] tracking-tight text-[var(--color-ink-soft)] sm:inline">
                    {t.remote.whatsappNumber}
                  </span>
                  <span className="font-mono text-[12px] tracking-tight text-[var(--color-ink-soft)] sm:hidden">
                    {t.remote.whatsappLabel}
                  </span>
                </a>
                <a
                  href="mailto:tony.anthony@hotmail.es"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-[var(--color-edge)] bg-transparent px-5 font-mono text-[12.5px] text-[var(--color-ink-soft)] transition-[border-color,background-color] duration-200 hover:border-[var(--color-edge-strong)] hover:bg-[var(--color-surface-2)] sm:w-auto"
                >
                  tony.anthony@hotmail.es
                </a>
              </div>

              <div className="flex items-center justify-center gap-3 border-t border-[var(--color-line)] pt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-faint)]">
                  {t.remote.socialFooter}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/mortyec"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-soft)] transition-[border-color,color,box-shadow] duration-300 hover:border-[var(--color-edge-strong)] hover:text-[var(--color-ink)] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.3),0_0_18px_rgba(59,130,246,0.2)]"
                  >
                    <GithubIcon size={15} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anthony-pérez-57522b28a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-soft)] transition-[border-color,color,box-shadow] duration-300 hover:border-[var(--color-edge-strong)] hover:text-[var(--color-ink)] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.3),0_0_18px_rgba(59,130,246,0.2)]"
                  >
                    <LinkedinIcon size={15} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
