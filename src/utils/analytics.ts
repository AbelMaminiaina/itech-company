import ReactGA from 'react-ga4'
import { hasAnalyticsConsent } from './cookieConsent'

// Remplacez 'G-XXXXXXXXXX' par votre véritable ID de mesure Google Analytics 4
// Pour obtenir votre ID : https://analytics.google.com/ > Admin > Flux de données
const GA_MEASUREMENT_ID = 'G-VE6GB3ZXD6'

// Variable pour suivre si GA est initialisé
let isGAInitialized = false

// Initialiser Google Analytics (seulement si le consentement est donné)
export const initGA = () => {
  // Vérifier le consentement avant d'initialiser
  if (!hasAnalyticsConsent()) {
    console.log('[Analytics] Consentement non donné, Google Analytics n\'est pas initialisé')
    return
  }

  // Éviter la double initialisation
  if (isGAInitialized) {
    return
  }

  try {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      gaOptions: {
        anonymizeIp: true, // Anonymiser les IP pour RGPD
      },
    })
    isGAInitialized = true
    console.log('[Analytics] Google Analytics initialisé avec succès')
  } catch (error) {
    console.error('[Analytics] Erreur lors de l\'initialisation de Google Analytics:', error)
  }
}

// Désactiver Google Analytics
export const disableGA = () => {
  if (isGAInitialized) {
    // Google Analytics ne peut pas être vraiment "désinitialisé", mais on peut arrêter de l'utiliser
    isGAInitialized = false
    console.log('[Analytics] Google Analytics désactivé')
  }
}

// Logger une page vue
export const logPageView = (path: string, title: string) => {
  if (!isGAInitialized || !hasAnalyticsConsent()) {
    return
  }

  try {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title,
    })
  } catch (error) {
    console.error('[Analytics] Erreur lors du log de page vue:', error)
  }
}

// Logger un événement personnalisé
export const logEvent = (category: string, action: string, label?: string) => {
  if (!isGAInitialized || !hasAnalyticsConsent()) {
    return
  }

  try {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    })
  } catch (error) {
    console.error('[Analytics] Erreur lors du log d\'événement:', error)
  }
}

// Événements personnalisés pour iTech-Company

/**
 * Tracker la soumission du formulaire de contact
 */
export const trackContactFormSubmit = () => {
  logEvent('Contact', 'Form Submit', 'Contact Form')
}

/**
 * Tracker la consultation d'un projet du portfolio
 * @param projectId - ID du projet consulté
 */
export const trackProjectView = (projectId: string) => {
  logEvent('Portfolio', 'View Project', `Project ${projectId}`)
}

/**
 * Tracker la consultation d'un service
 * @param serviceName - Nom du service consulté
 */
export const trackServiceView = (serviceName: string) => {
  logEvent('Services', 'View Service', serviceName)
}

/**
 * Tracker une candidature à une offre d'emploi
 * @param jobTitle - Titre du poste
 */
export const trackJobApplication = (jobTitle: string) => {
  logEvent('Recrutement', 'Apply', jobTitle)
}

/**
 * Tracker le téléchargement d'un fichier
 * @param fileName - Nom du fichier téléchargé
 */
export const trackDownload = (fileName: string) => {
  logEvent('Download', 'Click', fileName)
}

/**
 * Tracker un clic sur un lien externe
 * @param url - URL du lien externe
 */
export const trackOutboundLink = (url: string) => {
  logEvent('Outbound', 'Click', url)
}

/**
 * Tracker un clic sur un réseau social
 * @param platform - Nom de la plateforme (Facebook, Twitter, etc.)
 */
export const trackSocialClick = (platform: string) => {
  logEvent('Social', 'Click', platform)
}

/**
 * Tracker la lecture d'un article de blog
 * @param articleTitle - Titre de l'article
 */
export const trackBlogArticleView = (articleTitle: string) => {
  logEvent('Blog', 'View Article', articleTitle)
}

/**
 * Tracker un clic sur le bouton CTA
 * @param ctaName - Nom du CTA
 */
export const trackCTAClick = (ctaName: string) => {
  logEvent('CTA', 'Click', ctaName)
}
