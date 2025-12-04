import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { initGA, logPageView, disableGA } from './utils/analytics'
import { hasAnalyticsConsent, clearAnalyticsCookies } from './utils/cookieConsent'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Blog from './pages/Blog'
import Recrutement from './pages/Recrutement'
import Contact from './pages/Contact'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import Cookies from './pages/Cookies'
import MentionsLegales from './pages/MentionsLegales'
import CGV from './pages/CGV'

function AppContent() {
  const location = useLocation()
  const [darkMode, setDarkMode] = useState(true)

  // Initialiser Google Analytics au chargement de l'application (si consentement donné)
  useEffect(() => {
    initGA()

    // Écouter les changements de préférences de cookies
    const handleCookiePreferencesChanged = (event: Event) => {
      const customEvent = event as CustomEvent
      const preferences = customEvent.detail

      if (preferences?.analytics) {
        // L'utilisateur a accepté les analytics, initialiser GA
        initGA()
      } else {
        // L'utilisateur a refusé les analytics, désactiver GA et supprimer les cookies
        disableGA()
        clearAnalyticsCookies()
      }
    }

    window.addEventListener('cookiePreferencesChanged', handleCookiePreferencesChanged)

    return () => {
      window.removeEventListener('cookiePreferencesChanged', handleCookiePreferencesChanged)
    }
  }, [])

  // Tracker chaque changement de page (seulement si consentement donné)
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      logPageView(location.pathname, document.title)
    }
  }, [location])

  // Scroll vers le haut à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)

    if (prefersDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/recrutement" element={<Recrutement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<CGV />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  )
}

export default App
