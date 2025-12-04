// Gestion du consentement des cookies conforme RGPD

export interface CookiePreferences {
  necessary: boolean // Toujours true, ne peut pas être désactivé
  analytics: boolean
  preferences: boolean
  timestamp: number
}

const CONSENT_KEY = 'itech_cookie_consent'
const CONSENT_VERSION = '1.0'

// Obtenir les préférences de cookies
export const getCookiePreferences = (): CookiePreferences | null => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) return null

    const data = JSON.parse(stored)

    // Vérifier la version du consentement
    if (data.version !== CONSENT_VERSION) {
      return null
    }

    return data.preferences
  } catch {
    return null
  }
}

// Sauvegarder les préférences de cookies
export const setCookiePreferences = (preferences: Omit<CookiePreferences, 'timestamp'>): void => {
  const data = {
    version: CONSENT_VERSION,
    preferences: {
      ...preferences,
      timestamp: Date.now(),
    },
  }

  localStorage.setItem(CONSENT_KEY, JSON.stringify(data))

  // Déclencher un événement personnalisé pour notifier les changements
  window.dispatchEvent(new CustomEvent('cookiePreferencesChanged', { detail: data.preferences }))
}

// Accepter tous les cookies
export const acceptAllCookies = (): void => {
  setCookiePreferences({
    necessary: true,
    analytics: true,
    preferences: true,
  })
}

// Refuser les cookies non essentiels
export const rejectNonEssentialCookies = (): void => {
  setCookiePreferences({
    necessary: true,
    analytics: false,
    preferences: false,
  })
}

// Vérifier si le consentement a été donné
export const hasConsent = (): boolean => {
  return getCookiePreferences() !== null
}

// Vérifier si le consentement pour les analytics est donné
export const hasAnalyticsConsent = (): boolean => {
  const preferences = getCookiePreferences()
  return preferences?.analytics === true
}

// Vérifier si le consentement pour les préférences est donné
export const hasPreferencesConsent = (): boolean => {
  const preferences = getCookiePreferences()
  return preferences?.preferences === true
}

// Révoquer le consentement
export const revokeConsent = (): void => {
  localStorage.removeItem(CONSENT_KEY)
  window.dispatchEvent(new CustomEvent('cookiePreferencesChanged', { detail: null }))
}

// Vérifier si le consentement a expiré (après 13 mois)
export const isConsentExpired = (): boolean => {
  const preferences = getCookiePreferences()
  if (!preferences) return true

  const thirteenMonths = 13 * 30 * 24 * 60 * 60 * 1000 // 13 mois en millisecondes
  return Date.now() - preferences.timestamp > thirteenMonths
}

// Supprimer les cookies analytics si le consentement est retiré
export const clearAnalyticsCookies = (): void => {
  // Supprimer les cookies Google Analytics
  const cookiesToDelete = ['_ga', '_gat', '_gid', '_ga_*']

  cookiesToDelete.forEach(cookieName => {
    if (cookieName.includes('*')) {
      // Gérer les wildcards pour les cookies GA4
      const prefix = cookieName.replace('*', '')
      document.cookie.split(';').forEach(cookie => {
        const cookieKey = cookie.split('=')[0].trim()
        if (cookieKey.startsWith(prefix)) {
          deleteCookie(cookieKey)
        }
      })
    } else {
      deleteCookie(cookieName)
    }
  })
}

// Fonction helper pour supprimer un cookie
const deleteCookie = (name: string): void => {
  const domains = [window.location.hostname, `.${window.location.hostname}`]
  const paths = ['/', '']

  domains.forEach(domain => {
    paths.forEach(path => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; domain=${domain};`
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`
    })
  })
}
