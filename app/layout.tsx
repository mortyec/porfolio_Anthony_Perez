import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { LoadingScreen } from '@/components/providers/LoadingScreen'
import { LanguageProvider } from '@/components/providers/LanguageProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://anthonyperez.dev'),
  title: {
    default: 'Anthony Pérez — Frontend & Full Stack Developer',
    template: '%s · Anthony Pérez',
  },
  description:
    'Frontend & Full Stack Developer Semi Senior, especializado en React, Next.js, productos SaaS e integraciones con IA. Disponible para oportunidades remotas.',
  keywords: [
    'Frontend Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'SaaS',
    'AI',
    'OpenAI',
    'Supabase',
    'Remote',
    'Anthony Pérez',
  ],
  authors: [{ name: 'Anthony Pérez' }],
  creator: 'Anthony Pérez',
  alternates: {
    canonical: '/',
    languages: {
      'es-EC': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    alternateLocale: ['en_US'],
    title: 'Anthony Pérez — Frontend & Full Stack Developer',
    description: 'Construyendo productos SaaS escalables y apps con IA',
    siteName: 'Anthony Pérez',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthony Pérez — Frontend & Full Stack Developer',
    description: 'Construyendo productos SaaS escalables y apps con IA',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#050507',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-canvas)] text-[var(--color-ink)]">
        <LanguageProvider>
          <LoadingScreen />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
