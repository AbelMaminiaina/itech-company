import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Send, Star } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'
import { trackContactFormSubmit } from '../utils/analytics'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname : '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Tracker la soumission du formulaire
    trackContactFormSubmit()

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        lastname : '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const testimonials = [
    {
      name: 'Sophie Martin',
      company: 'TechStart Paris',
      rating: 5,
      comment: 'Une équipe exceptionnelle qui a transformé notre vision en réalité. Le professionnalisme et la réactivité d\'iTech-Company ont dépassé nos attentes.',
    },
    {
      name: 'Marc Dubois',
      company: 'Innovate Madagascar',
      rating: 5,
      comment: 'Collaboration fluide et efficace. La qualité du code et le respect des délais sont remarquables.',
    },
    {
      name: 'Claire Rousseau',
      company: 'E-commerce Solutions',
      rating: 5,
      comment: 'Excellent accompagnement du début à la fin du projet. L\'équipe a su comprendre nos besoins et proposer des solutions innovantes.',
    },
  ]

  return (
    <div className="pt-20">
      <SEO
        title="Contactez-nous"
        description="Contactez iTech-Company pour discuter de votre projet digital. Notre équipe à Madagascar et en France est prête à transformer vos idées en réalité. Email: contact@itech-company.com"
        keywords="contact iTech-Company, devis développement web, contact agence Madagascar, contact agence France, projet digital, consultation gratuite"
        url="/contact"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-8 md:py-12">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold font-poppins">
              Contactez-<span className="text-gradient">nous</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-12 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h2 className="text-2xl font-semibold font-poppins mb-4">Envoyez-nous un message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400">
                  Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400">
                  Une erreur s'est produite. Veuillez réessayer.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Prenom<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all"
                      placeholder="Votre prenom"
                    />
                  </div>

                 
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all"
                      placeholder="Votre email"
                    />
                  </div>                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all"
                      placeholder="Votre numéro"
                    />
                  </div>                  
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="web">Développement Web</option>
                      <option value="mobile">Développement Mobile</option>
                      <option value="design">UI/UX Design</option>
                      <option value="devops">DevOps & Cloud</option>
                      <option value="ai">IA & Automatisation</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all resize-none"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  className="w-full"
                  onClick={() => {}}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Agency Slogan */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center h-full"
            >
              {/* Modern Agency Image */}
              <motion.div
                className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&q=80"
                  alt="Équipe iTech-Company - Agence web moderne"
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 leading-tight">
                Nous{' '}
                <span className="text-gradient">créons des expériences</span>{' '}
                numériques à fort impact
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent font-medium">
                  Agence web moderne
                </span>{' '}
                spécialisée en développement, design et innovation digitale.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Notre équipe est disponible du lundi au vendredi de 9h à 18h pour répondre à vos questions et discuter de votre projet.
              </p>
            </motion.div>
          </div>
          </div>
        </div>

      </section>

      {/* Testimonials Section */}
      <SectionWrapper background="gray">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-poppins mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ce que disent <span className="text-gradient">nos clients</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            La satisfaction de nos clients est notre priorité
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-electric-500 text-electric-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="dark">
        <motion.div
          className="text-center max-w-2xl mx-auto py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold font-poppins mb-4 text-white">
            Prêt à démarrer ?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Rejoignez les nombreuses entreprises qui nous font confiance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="primary" icon={Mail}>
                Nous contacter
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  )
}

export default Contact
