import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  const footerLinks = {
    services: [
      { name: 'Développement Web', path: '/services' },
      { name: 'Développement Mobile', path: '/services' },
      { name: 'UI/UX Design', path: '/services' },
      { name: 'DevOps & Cloud', path: '/services' },
    ],
    company: [
      { name: 'À propos', path: '/about' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '#' },
    ],
    legal: [
      { name: 'Mentions légales', path: '/mentions-legales' },
      { name: 'Politique de confidentialité', path: '/politique-confidentialite' },
      { name: 'CGV', path: '/cgv' },
      { name: 'Cookies', path: '/cookies' },
    ],
  }

  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <motion.div
                className="text-2xl font-bold font-display"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gradient">iTech</span>
                <span className="text-white">-Company</span>
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6">
              Nous créons des expériences numériques à fort impact pour propulser votre business.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-dark-800 hover:bg-electric-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-electric-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-electric-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-electric-500 flex-shrink-0" />
                <a
                  href="mailto:contact@itech-company.com"
                  className="text-gray-400 hover:text-electric-400 transition-colors"
                >
                  contact@itech-company.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} iTech-Company. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-electric-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
