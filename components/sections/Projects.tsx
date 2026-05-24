'use client'

import { motion } from 'framer-motion'
import { ProjectCard, type Project } from '@/components/ui/ProjectCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useT } from '@/components/providers/LanguageProvider'
import { Accent } from '@/lib/i18n/Accent'
import type { Dictionary } from '@/lib/i18n/dictionaries'

type ProjectKey = keyof Dictionary['projects']['items']

interface ProjectDef {
  id: ProjectKey
  index: number
  name: string
  url: string
  tags: string[]
}

const projectDefs: ProjectDef[] = [
  {
    id: 'lynkco',
    index: 1,
    name: 'Lynkco Ecuador',
    url: 'https://www.lynkcoecuador.com.ec/',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'vehicentroEc',
    index: 2,
    name: 'Vehicentro Ecuador',
    url: 'https://vehicentro.com/',
    tags: ['Next.js', 'React', 'Performance'],
  },
  {
    id: 'vehicentroCo',
    index: 3,
    name: 'Vehicentro Colombia',
    url: 'https://www.vehicentro.co/',
    tags: ['Next.js', 'Responsive', 'CMS'],
  },
  {
    id: 'autazo',
    index: 4,
    name: 'Autazo',
    url: 'https://autazo.com/',
    tags: ['Marketplace', 'React', 'Conversion'],
  },
  {
    id: 'waikiki',
    index: 5,
    name: 'Waikiki Academy',
    url: 'https://www.waikikiacademy.edu.ec/',
    tags: ['EdTech', 'Accessibility', 'CMS'],
  },
  {
    id: 'unbuenlugar',
    index: 6,
    name: 'Un Buen Lugar',
    url: 'https://www.unbuenlugar.com/',
    tags: ['Real Estate', 'Search', 'Marketplace'],
  },
  {
    id: 'sinotrukCo',
    index: 7,
    name: 'Sinotruk Howo Colombia',
    url: 'https://www.sinotrukhowo.com.co/',
    tags: ['Enterprise', 'Branding', 'Responsive'],
  },
  {
    id: 'sinotrukEc',
    index: 8,
    name: 'Sinotruk Ecuador',
    url: 'https://sinotruk.com.ec/',
    tags: ['Corporate', 'Performance', 'Next.js'],
  },
  {
    id: 'sunward',
    index: 9,
    name: 'Sunward Ecuador',
    url: 'https://www.sunward.com.ec/',
    tags: ['Industrial', 'Enterprise', 'UI'],
  },
  {
    id: 'case',
    index: 10,
    name: 'Case Ecuador',
    url: 'https://www.case.com.ec/',
    tags: ['Enterprise', 'Usability', 'B2B'],
  },
  {
    id: 'avaluos',
    index: 11,
    name: 'Avalúos Un Buen Lugar',
    url: 'https://avaluo.unbuenlugar.com/',
    tags: ['Real Estate', 'Workflow', 'Forms'],
  },
  {
    id: 'mokenla',
    index: 12,
    name: 'Mokenla',
    url: 'https://www.mokenla.com/',
    tags: ['EdTech', 'Platform', 'LatAm'],
  },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

export function Projects() {
  const t = useT()

  const projects: Project[] = projectDefs.map((p) => ({
    id: p.id,
    index: p.index,
    name: p.name,
    url: p.url,
    description: t.projects.items[p.id],
    tags: p.tags,
  }))

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-surface-1)]/40 py-24 md:py-32"
    >
      <div className="absolute inset-0 grid-blueprint-fine opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            eyebrow={t.projects.eyebrow}
            title={<Accent>{t.projects.title}</Accent>}
            description={t.projects.description}
          />
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
            <span className="text-[var(--color-ink-soft)]">12</span>
            <span className="text-[var(--color-ink-faint)]">/</span>
            <span>{t.projects.countLabel}</span>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={gridVariants}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
