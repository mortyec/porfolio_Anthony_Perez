'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  index: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
}

const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
      className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : ''}`}
    >
      <motion.div
        variants={headingVariants}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-mute)]"
      >
        <span className="text-[var(--color-ink-soft)]">{index}</span>
        <span className="h-px w-8 bg-[var(--color-line)]" />
        <span>{eyebrow}</span>
      </motion.div>
      <motion.h2
        variants={headingVariants}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl text-balance text-3xl font-medium leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-[44px]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={headingVariants}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-pretty text-[15px] leading-relaxed text-[var(--color-ink-mute)]"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
