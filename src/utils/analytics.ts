import ReactGA from 'react-ga4'

// Remplacez 'G-XXXXXXXXXX' par votre véritable ID de mesure Google Analytics 4
// Pour obtenir votre ID : https://analytics.google.com/ > Admin > Flux de données
const GA_MEASUREMENT_ID = 'G-VE6GB3ZXD6'

// Initialiser Google Analytics
export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID, {
    gaOptions: {
      anonymizeIp: true, // Anonymiser les IP pour RGPD
    },
  })
}

// Logger une page vue
export const logPageView = (path: string, title: string) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title,
  })
}

// Logger un événement personnalisé
export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  })
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
