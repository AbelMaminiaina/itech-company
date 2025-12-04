import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, Settings, X, Check, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  hasConsent,
  isConsentExpired,
  acceptAllCookies,
  rejectNonEssentialCookies,
  setCookiePreferences,
  getCookiePreferences,
  type CookiePreferences,
} from '../utils/cookieConsent'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<Omit<CookiePreferences, 'timestamp'>>({
    necessary: true,
    analytics: true,
    preferences: true,
  })

  useEffect(() => {
    // Vérifier si le consentement a déjà été donné ou s'il a expiré
    const consentGiven = hasConsent()
    const expired = isConsentExpired()

    if (!consentGiven || expired) {
      // Afficher le bandeau après un court délai
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      // Charger les préférences existantes
      const existingPrefs = getCookiePreferences()
      if (existingPrefs) {
        setPreferences({
          necessary: existingPrefs.necessary,
          analytics: existingPrefs.analytics,
          preferences: existingPrefs.preferences,
        })
      }
    }
  }, [])

  const handleAcceptAll = () => {
    acceptAllCookies()
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleRejectAll = () => {
    rejectNonEssentialCookies()
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    setCookiePreferences(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleClose = () => {
    setShowBanner(false)
    setShowSettings(false)
  }

  const toggleSetting = (key: keyof Omit<CookiePreferences, 'timestamp'>) => {
    if (key === 'necessary') return // Ne peut pas être désactivé
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="container-custom max-w-6xl mx-auto">
          <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 overflow-hidden">
            {!showSettings ? (
              // Vue simplifiée
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-electric-500" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      Nous respectons votre vie privée
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic
                      et personnaliser le contenu. En cliquant sur "Tout accepter", vous consentez
                      à l'utilisation de tous les cookies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-electric-500 hover:bg-electric-600 text-white rounded-lg font-semibold transition-colors"
                      >
                        <Check className="w-5 h-5" />
                        Tout accepter
                      </button>

                      <button
                        onClick={handleRejectAll}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-dark-700 dark:hover:bg-dark-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors"
                      >
                        <X className="w-5 h-5" />
                        Tout refuser
                      </button>

                      <button
                        onClick={() => setShowSettings(true)}
                        className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-dark-600 hover:border-electric-500 dark:hover:border-electric-500 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors"
                      >
                        <Settings className="w-5 h-5" />
                        Personnaliser
                      </button>
                    </div>

                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      En savoir plus sur notre{' '}
                      <Link
                        to="/politique-confidentialite"
                        className="text-electric-500 hover:text-electric-400 underline"
                      >
                        politique de confidentialité
                      </Link>
                      {' '}et notre{' '}
                      <Link
                        to="/cookies"
                        className="text-electric-500 hover:text-electric-400 underline"
                      >
                        politique de cookies
                      </Link>
                      .
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            ) : (
              // Vue détaillée avec paramètres
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center">
                      <Settings className="w-6 h-6 text-electric-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Paramètres des cookies
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Gérez vos préférences de cookies
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
                    aria-label="Retour"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Cookies nécessaires */}
                  <div className="border border-gray-200 dark:border-dark-700 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-5 h-5 text-electric-500" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Cookies strictement nécessaires
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas
                          être désactivés. Ils permettent des fonctionnalités de base comme la
                          sécurité et l'accessibilité.
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-12 h-6 bg-electric-500 rounded-full relative flex items-center">
                          <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 shadow" />
                        </div>
                        <p className="text-xs text-center mt-1 text-gray-500">Toujours actif</p>
                      </div>
                    </div>
                  </div>

                  {/* Cookies analytics */}
                  <div className="border border-gray-200 dark:border-dark-700 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Cookies analytiques
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Ces cookies nous permettent d'analyser l'utilisation du site pour améliorer
                          nos services (Google Analytics avec anonymisation IP).
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <button
                          onClick={() => toggleSetting('analytics')}
                          className={`w-12 h-6 rounded-full relative transition-colors ${
                            preferences.analytics
                              ? 'bg-electric-500'
                              : 'bg-gray-300 dark:bg-dark-600'
                          }`}
                          aria-label="Toggle analytics cookies"
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-transform ${
                              preferences.analytics ? 'right-0.5' : 'left-0.5'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Cookies de préférence */}
                  <div className="border border-gray-200 dark:border-dark-700 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Cookies de préférence
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Ces cookies permettent de mémoriser vos préférences (langue, mode sombre, etc.)
                          pour améliorer votre expérience.
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <button
                          onClick={() => toggleSetting('preferences')}
                          className={`w-12 h-6 rounded-full relative transition-colors ${
                            preferences.preferences
                              ? 'bg-electric-500'
                              : 'bg-gray-300 dark:bg-dark-600'
                          }`}
                          aria-label="Toggle preference cookies"
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-transform ${
                              preferences.preferences ? 'right-0.5' : 'left-0.5'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-electric-500 hover:bg-electric-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    <Check className="w-5 h-5" />
                    Enregistrer mes préférences
                  </button>

                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-electric-500 hover:bg-electric-500 text-electric-500 hover:text-white rounded-lg font-semibold transition-colors"
                  >
                    Tout accepter
                  </button>
                </div>

                <div className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
                  Consultez notre{' '}
                  <Link
                    to="/cookies"
                    className="text-electric-500 hover:text-electric-400 underline"
                  >
                    politique de cookies
                  </Link>
                  {' '}pour plus d'informations.
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CookieBanner
