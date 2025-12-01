import { motion } from 'framer-motion'
import { Code, Smartphone, Palette, Cloud, Brain, Zap, Check } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Créez des applications web performantes, scalables et modernes qui répondent aux besoins de votre entreprise.',
      features: [
        'Sites web sur mesure',
        'Applications web progressives (PWA)',
        'E-commerce et marketplaces',
        'Dashboards et outils métier',
        'APIs RESTful et GraphQL',
        'Maintenance et support',
      ],
      technologies: ['React', 'Vue.js', 'Next.js', 'Node.js', 'Django', 'Laravel'],
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Des applications mobiles natives ou cross-platform pour iOS et Android avec une expérience utilisateur exceptionnelle.',
      features: [
        'Applications iOS et Android',
        'Cross-platform (React Native, Flutter)',
        'Applications natives performantes',
        'Intégration API et services cloud',
        'Publication sur les stores',
        'Maintenance évolutive',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Des designs modernes, intuitifs et centrés sur l\'utilisateur pour maximiser l\'engagement et la conversion.',
      features: [
        'Recherche et analyse utilisateur',
        'Wireframing et prototypage',
        'Design system et branding',
        'Interface utilisateur moderne',
        'Expérience utilisateur optimisée',
        'Tests d\'utilisabilité',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro'],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Infrastructure cloud robuste, déploiement continu et automatisation pour des applications hautement disponibles.',
      features: [
        'Configuration cloud (AWS, Azure, GCP)',
        'CI/CD et automatisation',
        'Containerisation (Docker, Kubernetes)',
        'Monitoring et alertes',
        'Sécurité et conformité',
        'Optimisation des coûts',
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI'],
    },
    {
      icon: Brain,
      title: 'IA & Automatisation',
      description: 'Solutions intelligentes basées sur l\'intelligence artificielle pour automatiser vos processus et améliorer la productivité.',
      features: [
        'Chatbots et assistants virtuels',
        'Analyse de données et ML',
        'Traitement du langage naturel (NLP)',
        'Vision par ordinateur',
        'Automatisation de tâches',
        'Recommandations personnalisées',
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
    },
    {
      icon: Zap,
      title: 'Intégration API',
      description: 'Connexion fluide de vos systèmes et services via des APIs robustes, sécurisées et bien documentées.',
      features: [
        'Développement d\'APIs REST/GraphQL',
        'Intégration de services tiers',
        'Synchronisation de données',
        'Webhooks et événements temps réel',
        'Documentation API complète',
        'Sécurité et authentification',
      ],
      technologies: ['REST', 'GraphQL', 'WebSockets', 'OAuth', 'JWT'],
    },
  ]

  return (
    <div className="pt-20">
      <SEO
        title="Nos Services"
        description="Découvrez nos services de développement web, mobile, UI/UX design, DevOps, IA et intégration API. Solutions sur mesure pour votre transformation digitale à Madagascar et en France."
        keywords="développement web Madagascar, développement web France, développement web Paris, développement mobile, UI/UX design, DevOps, cloud, IA, automatisation, API, services digitaux"
        url="/services"
      />
      <StructuredData
        type="Service"
        data={{
          name: 'Services de développement web et mobile',
          description: 'Solutions complètes de développement web, mobile, design et cloud',
          serviceType: 'Développement Web et Mobile'
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Nos <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Des solutions digitales complètes pour transformer votre vision en réalité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper>
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="w-16 h-16 bg-electric-500/10 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-electric-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-electric-500/10 text-electric-600 dark:text-electric-400 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Ce que nous offrons
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="dark">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
            Besoin d'un service spécifique ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <Link to="/contact">
            <Button size="lg" variant="primary">
              Nous contacter
            </Button>
          </Link>
        </motion.div>
      </SectionWrapper>
    </div>
  )
}

export default Services
