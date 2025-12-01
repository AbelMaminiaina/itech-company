import { motion } from 'framer-motion'
import { Clock, Briefcase, ArrowRight } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Recrutement = () => {
  const jobs = [
    {
      id: 1,
      title: 'Développeur Odoo',
      type: 'CDI',
      experience: '2-5 ans',
      description: 'Nous recherchons un développeur Odoo expérimenté pour développer et personnaliser des modules ERP pour nos clients.',
      requirements: [
        'Maîtrise d\'Odoo (versions 14+)',
        'Connaissance de Python et PostgreSQL',
        'Expérience en développement de modules personnalisés',
        'Capacité à analyser les besoins métier',
      ],
      benefits: [
        'Salaire compétitif',
        'Télétravail flexible',
        'Formation continue',
        'Projets variés',
      ],
    },
    {
      id: 2,
      title: 'Développeur WordPress',
      type: 'CDI',
      experience: '2-4 ans',
      description: 'Créez des sites WordPress performants et personnalisés pour nos clients avec des thèmes et plugins sur mesure.',
      requirements: [
        'Maîtrise de WordPress, PHP, MySQL',
        'Expérience en développement de thèmes et plugins',
        'Connaissance de WooCommerce',
        'Bonnes pratiques SEO et performance',
      ],
      benefits: [
        'Environnement créatif',
        'Projets diversifiés',
        'Horaires flexibles',
        'Évolution de carrière',
      ],
    },
    {
      id: 3,
      title: 'Consultant Systeme.io & Zapier',
      type: 'CDI',
      experience: '1-3 ans',
      description: 'Accompagnez nos clients dans l\'automatisation de leurs processus marketing et business avec Systeme.io et Zapier.',
      requirements: [
        'Maîtrise de Systeme.io (tunnels de vente, emailing)',
        'Expérience avec Zapier et automatisations',
        'Connaissance des outils no-code',
        'Excellentes compétences en communication',
      ],
      benefits: [
        'Formation sur les derniers outils',
        'Clients internationaux',
        'Télétravail possible',
        'Prime de performance',
      ],
    },
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Nous encourageons la créativité et l\'innovation dans chaque projet.',
    },
    {
      title: 'Collaboration',
      description: 'Travaillez avec une équipe passionnée et bienveillante.',
    },
    {
      title: 'Développement',
      description: 'Formation continue et montée en compétences garanties.',
    },
    {
      title: 'Équilibre',
      description: 'Flexibilité et respect de l\'équilibre vie pro/perso.',
    },
  ]

  return (
    <div className="pt-20">
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
              Rejoignez <span className="text-gradient">notre équipe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Construisez votre carrière dans une agence digitale dynamique et innovante
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Pourquoi nous rejoindre ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Des valeurs qui nous animent au quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <h3 className="text-xl font-semibold mb-3 text-electric-500">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Postes <span className="text-gradient">disponibles</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {jobs.length} opportunités pour faire grandir votre carrière
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-2xl transition-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column */}
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      <span className="px-3 py-1 bg-electric-500 text-white text-sm font-semibold rounded-full">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-electric-500" />
                        <span>{job.experience} d'expérience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-electric-500" />
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {job.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Compétences requises :</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-electric-500 mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Avantages :</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {job.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-electric-500 mt-1">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col justify-center">
                    <Button
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      className="w-full"
                      href="mailto:recrutement@itech-company.com"
                    >
                      Postuler
                    </Button>
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
            Candidature spontanée
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Vous ne trouvez pas le poste idéal ? Envoyez-nous votre candidature spontanée !
          </p>
          <Button
            size="lg"
            variant="primary"
            href="mailto:recrutement@itech-company.com"
            icon={ArrowRight}
          >
            Envoyer ma candidature
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  )
}

export default Recrutement
