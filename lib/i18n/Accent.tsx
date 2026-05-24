import { Fragment } from 'react'

/**
 * Splits a string on [[double-bracket]] sentinels and wraps the matched
 * segments in a tinted <span>. Used so translators can mark accent words
 * inline without writing JSX.
 *
 * Example: "ships [[production code]], not demos"
 * Renders: ships <span class="text-ink-mute">production code</span>, not demos
 */

type Tone = 'mute' | 'soft' | 'ink'

const TONE_CLASS: Record<Tone, string> = {
  mute: 'text-[var(--color-ink-mute)]',
  soft: 'text-[var(--color-ink-soft)]',
  ink: 'text-[var(--color-ink)]',
}

const PATTERN = /\[\[([^\]]+)\]\]/g

export function Accent({
  children,
  tone = 'mute',
}: {
  children: string
  tone?: Tone
}) {
  const parts: Array<{ text: string; accent: boolean }> = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = PATTERN.exec(children)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: children.slice(lastIndex, match.index), accent: false })
    }
    parts.push({ text: match[1], accent: true })
    lastIndex = PATTERN.lastIndex
  }
  if (lastIndex < children.length) {
    parts.push({ text: children.slice(lastIndex), accent: false })
  }
  // Reset for safety since PATTERN is a module-level regex with `g` flag.
  PATTERN.lastIndex = 0

  return (
    <>
      {parts.map((part, i) =>
        part.accent ? (
          <span key={i} className={TONE_CLASS[tone]}>
            {part.text}
          </span>
        ) : (
          <Fragment key={i}>{part.text}</Fragment>
        ),
      )}
    </>
  )
}
