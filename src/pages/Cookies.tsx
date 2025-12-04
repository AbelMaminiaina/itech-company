import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cookie, Shield, BarChart3, Settings as SettingsIcon, Check, X, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import SEO from '../components/SEO'
import {
  getCookiePreferences,
  setCookiePreferences,
  acceptAllCookies,
  rejectNonEssentialCookies,
  clearAnalyticsCookies,
  type CookiePreferences,
} from '../utils/cookieConsent'

const Cookies = () => {
  const [preferences, setPreferences] = useState<Omit<CookiePreferences, 'timestamp'>>({
    necessary: true,
    analytics: true,
    preferences: true,
  })
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Charger les préférences existantes
    const existingPrefs = getCookiePreferences()
    if (existingPrefs) {
      setPreferences({
        necessary: existingPrefs.necessary,
        analytics: existingPrefs.analytics,
        preferences: existingPrefs.preferences,
      })
    }
  }, [])

  const handleSavePreferences = () => {
    setCookiePreferences(preferences)

    // Si analytics est désactivé, supprimer les cookies analytics
    if (!preferences.analytics) {
      clearAnalyticsCookies()
    }

    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAcceptAll = () => {
    acceptAllCookies()
    setPreferences({ necessary: true, analytics: true, preferences: true })
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRejectAll = () => {
    rejectNonEssentialCookies()
    setPreferences({ necessary: true, analytics: false, preferences: false })
    clearAnalyticsCookies()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleSetting = (key: keyof Omit<CookiePreferences, 'timestamp'>) => {
    if (key === 'necessary') return
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const cookieTypes = [
    {
      icon: Shield,
      id: 'necessary',
      title: 'Cookies strictement nécessaires',
      description:
        'Ces cookies sont essentiels au fonctionnement du site web. Ils vous permettent de naviguer sur le site et d\'utiliser ses fonctionnalités de base. Sans ces cookies, le site ne peut pas fonctionner correctement.',
      examples: [
        'Cookies de session pour maintenir votre connexion',
        'Cookies de sécurité pour protéger contre les attaques',
        'Cookies d\'accessibilité pour adapter le site à vos besoins',
      ],
      duration: 'Session ou jusqu\'à 1 an',
      alwaysActive: true,
      enabled: preferences.necessary,
    },
    {
      icon: BarChart3,
      id: 'analytics',
      title: 'Cookies analytiques',
      description:
        'Ces cookies nous permettent de comprendre comment les visiteurs interagissent avec notre site web en collectant et en rapportant des informations de manière anonyme. Ils nous aident à améliorer le fonctionnement de notre site.',
      examples: [
        'Google Analytics (avec anonymisation IP)',
        'Nombre de visiteurs et pages vues',
        'Durée des visites et taux de rebond',
        'Sources de trafic et parcours utilisateur',
      ],
      duration: 'Jusqu\'à 25 mois',
      alwaysActive: false,
      enabled: preferences.analytics,
      thirdParty: 'Google LLC (États-Unis)',
    },
    {
      icon: SettingsIcon,
      id: 'preferences',
      title: 'Cookies de préférence',
      description:
        'Ces cookies permettent au site web de mémoriser vos choix (comme votre nom d\'utilisateur, votre langue ou la région dans laquelle vous vous trouvez) et de fournir des fonctionnalités améliorées et plus personnelles.',
      examples: [
        'Préférences de langue',
        'Mode d\'affichage (clair/sombre)',
        'Paramètres d\'accessibilité',
        'Préférences de mise en page',
      ],
      duration: 'Jusqu\'à 1 an',
      alwaysActive: false,
      enabled: preferences.preferences,
    },
  ]

  return (
    <div className="pt-20">
      <SEO
        title="Politique de Cookies - iTech-Company"
        description="Découvrez comment iTech-Company utilise les cookies pour améliorer votre expérience. Gérez vos préférences de cookies et apprenez-en plus sur notre utilisation des traceurs."
        keywords="cookies, traceurs, préférences cookies, gestion cookies, RGPD, confidentialité, Google Analytics"
        url="/cookies"
      />

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <Check className="w-5 h-5" />
            <span className="font-semibold">Vos préférences ont été enregistrées avec succès</span>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-electric-500/10 rounded-2xl flex items-center justify-center">
                <Cookie className="w-10 h-10 text-electric-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Politique de <span className="text-gradient">Cookies</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
              Transparence totale sur l'utilisation des cookies
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Gérez vos préférences et découvrez comment nous utilisons les cookies pour
              améliorer votre expérience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 bg-gradient-to-br from-electric-500/10 to-electric-600/5 border-electric-500/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Actions rapides</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Gérez vos préférences de cookies en un clic
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Refuser les cookies non essentiels
              </button>
            </div>
          </Card>

          {/* Introduction */}
          <Card className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Qu'est-ce qu'un cookie ?</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Un cookie est un petit fichier texte déposé sur votre ordinateur ou appareil mobile
                lors de votre visite sur notre site web. Les cookies permettent au site de mémoriser
                vos actions et préférences sur une période donnée.
              </p>
              <p>
                Nous utilisons différents types de cookies pour améliorer votre expérience de
                navigation, analyser l'utilisation du site et proposer du contenu pertinent.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>🛡️ Votre contrôle :</strong> Vous avez le contrôle total sur les cookies.
                  Vous pouvez accepter, refuser ou personnaliser vos préférences à tout moment.
                </p>
              </div>
            </div>
          </Card>

          {/* Cookie Types with Settings */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Types de cookies utilisés</h2>
            <div className="space-y-6">
              {cookieTypes.map((cookieType, index) => (
                <motion.div
                  key={cookieType.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <cookieType.icon className="w-6 h-6 text-electric-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{cookieType.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {cookieType.description}
                        </p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Exemples d'utilisation :</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                              {cookieType.examples.map((example, i) => (
                                <li key={i}>{example}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm">
                            <div>
                              <span className="font-semibold">Durée : </span>
                              <span className="text-gray-600 dark:text-gray-400">
                                {cookieType.duration}
                              </span>
                            </div>
                            {cookieType.thirdParty && (
                              <div>
                                <span className="font-semibold">Tiers : </span>
                                <span className="text-gray-600 dark:text-gray-400">
                                  {cookieType.thirdParty}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        {cookieType.alwaysActive ? (
                          <div>
                            <div className="w-12 h-6 bg-electric-500 rounded-full relative flex items-center">
                              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 shadow" />
                            </div>
                            <p className="text-xs text-center mt-1 text-gray-500 whitespace-nowrap">
                              Toujours actif
                            </p>
                          </div>
                        ) : (
                          <button
                            onClick={() => toggleSetting(cookieType.id as keyof Omit<CookiePreferences, 'timestamp'>)}
                            className={`w-12 h-6 rounded-full relative transition-colors ${
                              cookieType.enabled
                                ? 'bg-electric-500'
                                : 'bg-gray-300 dark:bg-dark-600'
                            }`}
                            aria-label={`Toggle ${cookieType.title}`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-transform ${
                                cookieType.enabled ? 'right-0.5' : 'left-0.5'
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <Card className="mb-12">
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleSavePreferences}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-electric-500 hover:bg-electric-600 text-white text-lg rounded-lg font-semibold transition-colors"
              >
                <Check className="w-6 h-6" />
                Enregistrer mes préférences
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Vos préférences seront sauvegardées pour une durée de 13 mois
              </p>
            </div>
          </Card>

          {/* Additional Information */}
          <div className="space-y-8">
            <Card>
              <h3 className="text-2xl font-bold mb-4">Gestion des cookies via votre navigateur</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Vous pouvez également gérer les cookies directement depuis votre navigateur.
                La plupart des navigateurs vous permettent de :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                <li>Consulter les cookies stockés et les supprimer individuellement</li>
                <li>Bloquer les cookies tiers</li>
                <li>Bloquer tous les cookies</li>
                <li>Supprimer tous les cookies lors de la fermeture du navigateur</li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Attention :</strong> Le blocage de tous les cookies peut affecter
                    votre expérience de navigation et certaines fonctionnalités du site peuvent
                    ne plus être disponibles.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4">Cookies tiers</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Nous utilisons Google Analytics pour analyser l'utilisation de notre site.
                  Google Analytics génère des statistiques et autres informations sur le site
                  au moyen de cookies stockés sur les ordinateurs des utilisateurs.
                </p>
                <p>
                  Les informations générées concernant notre site sont utilisées pour créer des
                  rapports sur l'utilisation du site. Google stockera et utilisera ces informations.
                </p>
                <p>
                  Pour plus d'informations sur la politique de confidentialité de Google, visitez :
                  {' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-500 hover:text-electric-400 underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
                <p>
                  Pour désactiver Google Analytics sur tous les sites web, vous pouvez installer
                  le module complémentaire de navigateur :
                  {' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-500 hover:text-electric-400 underline"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </p>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4">Modification de cette politique</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous pouvons mettre à jour cette politique de cookies de temps à autre.
                Nous vous encourageons à consulter cette page régulièrement pour rester informé
                de l'utilisation que nous faisons des cookies.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-electric-500/10 to-electric-600/5 border-electric-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Des questions ?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Si vous avez des questions sur notre utilisation des cookies, n'hésitez pas
                  à nous contacter ou consultez notre politique de confidentialité.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-electric-500 hover:bg-electric-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    Nous contacter
                  </Link>
                  <Link
                    to="/politique-confidentialite"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-electric-500 hover:bg-electric-500 text-electric-500 hover:text-white rounded-lg font-semibold transition-colors"
                  >
                    Politique de confidentialité
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Cookies
