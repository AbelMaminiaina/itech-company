import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Github,
  Clock,
  ArrowRight,
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/itechcompanymg', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/itech-company-mg', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/AbelMaminiaina', label: 'GitHub' },
  ]

  const footerLinks = {
    services: [
      { name: 'Développement Web', path: '/services#web' },
      { name: 'Développement Mobile', path: '/services#mobile' },
      { name: 'UI/UX Design', path: '/services#design' },
      { name: 'DevOps & Cloud', path: '/services#devops' },
      { name: 'IA & Automatisation', path: '/services#ia' },
    ],
    company: [
      { name: 'Accueil', path: '/' },
      { name: 'À propos', path: '/about' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Blog', path: '/blog' },
      { name: 'Recrutement', path: '/recrutement' },
      { name: 'Contact', path: '/contact' },
    ],
    resources: [
      { name: 'Outils', path: '/outils' },
    ],
    legal: [
      { name: 'Mentions légales', path: '/mentions-legales' },
      { name: 'Politique de confidentialité', path: '/politique-confidentialite' },
      { name: 'CGV', path: '/cgv' },
      { name: 'Cookies', path: '/cookies' },
    ],
  }

  return (
    <footer className="bg-dark-900 text-gray-300" itemScope itemType="https://schema.org/Organization">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4" itemProp="url">
              <motion.div
                className="text-2xl font-bold font-display"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gradient" itemProp="name">iTech</span>
                <span className="text-white">-Company</span>
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6" itemProp="description">
              Nous créons des expériences numériques à fort impact pour propulser votre business. Agence web à Madagascar et en France.
            </p>

            {/* Contact Info */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-electric-500 flex-shrink-0" />
                <a
                  href="mailto:contact@itech-company.com"
                  className="text-gray-400 hover:text-electric-400 transition-colors"
                  itemProp="email"
                >
                  contact@itech-company.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-electric-500 flex-shrink-0" />
                <a
                  href="tel:+261340000000"
                  className="text-gray-400 hover:text-electric-400 transition-colors"
                  itemProp="telephone"
                >
                  +261 34 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  <span itemProp="streetAddress">Ambohimanarina</span>, <span itemProp="addressLocality">Antananarivo</span>, <span itemProp="addressCountry">Madagascar</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-electric-500 flex-shrink-0" />
                <span className="text-gray-400">Lun - Ven: 08h00 - 18h00</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-800 hover:bg-electric-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  itemProp="sameAs"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <nav aria-label="Services">
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-electric-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Entreprise</h3>
            <nav aria-label="Entreprise">
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-electric-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Ressources</h3>
            <nav aria-label="Ressources et informations légales">
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-electric-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-electric-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} iTech-Company. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <span className="text-gray-500 text-sm">Madagascar</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500 text-sm">France</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500 text-sm">Belgique</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500 text-sm">Suisse</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500 text-sm">Canada</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
