import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, ArrowUp, MessageCircle } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const navigation = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  // { name: 'Portfolio', path: '/portfolio' },
  // { name: 'À propos', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Recrutement', path: '/recrutement' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [hideNavbar, setHideNavbar] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Détecter si on scroll vers le bas ou le haut
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas - cacher la navbar
        setHideNavbar(true)
      } else {
        // Scroll vers le haut - montrer la navbar
        setHideNavbar(false)
      }

      setScrolled(currentScrollY > 20)
      setShowScrollTop(currentScrollY > 300)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Navbar principale */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: hideNavbar ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                className="text-2xl font-bold font-display"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gradient">iTech</span>
                <span className="text-dark-900 dark:text-white">-Company</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-electric-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-electric-500 dark:hover:text-electric-400'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-electric-500"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container-custom py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-electric-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Boutons en bas à droite - Scroll to Top et Contact */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Contact Button avec animations */}
            <Link to="/contact">
              <motion.div
                className="relative w-14 h-14"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Cercle extérieur animé (pulse) */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-electric-500/30"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Bouton principal */}
                <motion.div
                  className="relative w-14 h-14 rounded-full bg-gradient-to-br from-electric-500 to-purple-600 hover:from-electric-600 hover:to-purple-700 text-white shadow-xl flex items-center justify-center transition-all"
                  animate={{
                    boxShadow: [
                      "0 10px 40px rgba(59, 130, 246, 0.5)",
                      "0 10px 60px rgba(147, 51, 234, 0.6)",
                      "0 10px 40px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-label="Contact"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <MessageCircle className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </Link>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full bg-white dark:bg-dark-800 hover:bg-gray-50 dark:hover:bg-dark-700 shadow-xl flex items-center justify-center transition-all border border-gray-200 dark:border-dark-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
