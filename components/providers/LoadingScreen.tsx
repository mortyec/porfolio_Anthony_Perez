'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const finish = () => {
      const t = window.setTimeout(() => setDone(true), 420)
      return () => window.clearTimeout(t)
    }
    if (document.readyState === 'complete') return finish()
    const onLoad = () => finish()
    window.addEventListener('load', onLoad, { once: true })
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-canvas)]"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative flex h-12 w-12 items-center justify-center rounded-md border border-[var(--color-edge)] bg-[var(--color-surface-2)]"
            >
              <span className="font-mono text-sm font-semibold tracking-tight text-[var(--color-ink)]">
                AP
              </span>
              <span
                className="absolute inset-0 rounded-md"
                style={{ boxShadow: '0 0 24px rgba(59,130,246,0.35)' }}
              />
            </motion.div>
            <div className="relative h-px w-40 overflow-hidden bg-[var(--color-line)]">
              <span
                className="absolute inset-y-0 w-1/3"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(59,130,246,0.9), transparent)',
                  animation: 'loader-bar 1.1s ease-in-out infinite',
                }}
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
              initializing · session
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
