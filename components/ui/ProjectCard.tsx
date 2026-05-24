'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { screenshotUrl } from '@/lib/screenshot'
import { useT } from '@/components/providers/LanguageProvider'

export interface Project {
  id: string
  index: number
  name: string
  url: string
  description: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useT()
  const host = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
  const indexLabel = String(project.index).padStart(2, '0')

  return (
    <motion.article
      variants={cardVariants}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-1)] transition-[border-color,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-[var(--color-edge-strong)] hover:bg-[var(--color-surface-2)]"
    >
      {/* hairline reveal grid on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 grid-blueprint-fine"
      />

      {/* glow accent on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx,50%) var(--my,0%), rgba(59,130,246,0.12), transparent 50%)',
        }}
      />

      {/* index strip */}
      <div className="relative flex items-center justify-between border-b border-[var(--color-line)] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em]">
        <span className="text-[var(--color-ink-mute)]">
          <span className="text-[var(--color-ink-soft)]">{indexLabel}</span>
          <span className="mx-2 text-[var(--color-ink-faint)]">/</span>
          {t.projects.cardIndex}
        </span>
        <span className="flex items-center gap-1.5 text-[var(--color-live)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-current opacity-60 animate-ping" />
            <span className="relative inline-flex h-full w-full rounded-full bg-current" />
          </span>
          {t.projects.cardStatus}
        </span>
      </div>

      {/* preview */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name}`}
        className="relative block overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-canvas)]"
      >
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={screenshotUrl(project.url, 1280)}
            alt={`${project.name} — website preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            unoptimized
          />
          {/* gradient overlay */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-1)] via-transparent to-transparent opacity-90"
          />
          {/* hover veil */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[var(--color-canvas)]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </a>

      {/* body */}
      <div className="relative flex flex-col gap-4 p-5">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[17px] font-medium leading-tight tracking-tight text-[var(--color-ink)]">
            {project.name}
          </h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 font-mono text-[11px] text-[var(--color-ink-mute)] transition-colors duration-200 hover:text-[#9ec1ff]"
          >
            <span className="text-[var(--color-ink-faint)]">↗</span>
            {host}
          </a>
        </div>

        <p className="text-[13.5px] leading-relaxed text-pretty text-[var(--color-ink-mute)]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-[var(--color-line)] bg-[var(--color-surface-2)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-mute)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-1 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-ink-soft)] transition-colors duration-200 hover:text-[var(--color-ink)]"
          >
            {t.projects.cardVisit}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 ease-out group-hover/cta:-translate-y-px group-hover/cta:translate-x-px"
            />
          </a>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
            {t.projects.cardStage}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
