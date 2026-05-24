export type Locale = 'es' | 'en'

export const SUPPORTED_LOCALES: readonly Locale[] = ['es', 'en'] as const
export const DEFAULT_LOCALE: Locale = 'es'
export const LOCALE_STORAGE_KEY = 'ap-locale'
