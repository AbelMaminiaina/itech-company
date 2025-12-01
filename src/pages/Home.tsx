import { motion } from 'framer-motion'
import { ArrowRight, Code, Smartphone, Palette, Cloud, Brain, Zap, Target, Users, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionWrapper from '../components/ui/SectionWrapper'
import TestimonialSlider from '../components/ui/TestimonialSlider'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Applications web modernes, performantes et scalables avec les dernières technologies.',
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Applications iOS et Android natives ou cross-platform pour une expérience optimale.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces intuitives et designs modernes centrés sur l\'expérience utilisateur.',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Infrastructure cloud, CI/CD, et automatisation pour une performance maximale.',
    },
    {
      icon: Brain,
      title: 'IA & Automatisation',
      description: 'Solutions intelligentes basées sur l\'IA pour automatiser vos processus métier.',
    },
    {
      icon: Zap,
      title: 'Intégration API',
      description: 'Connexion et synchronisation de vos systèmes via des APIs robustes.',
    },
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Luxe',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      stack: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 2,
      title: 'App Fitness',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?w=800&h=600&fit=crop',
      stack: ['React Native', 'Firebase', 'Redux'],
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      stack: ['Figma', 'React', 'D3.js'],
    },
  ]

  const whyUs = [
    {
      icon: Target,
      title: 'Approche sur mesure',
      description: 'Chaque projet est unique. Nous créons des solutions personnalisées qui répondent parfaitement à vos besoins.',
    },
    {
      icon: Users,
      title: 'Équipe experte',
      description: 'Des développeurs passionnés et des designers créatifs avec plus de 10 ans d\'expérience combinée.',
    },
    {
      icon: Rocket,
      title: 'Livraison rapide',
      description: 'Méthodologie agile et processus optimisés pour des livraisons rapides sans compromis sur la qualité.',
    },
  ]

  return (
    <div className="overflow-hidden">
      <SEO
        title="iTech-Company"
        description="Nous créons des expériences numériques à fort impact. Agence web spécialisée en développement web, mobile, UI/UX design et IA à Madagascar et en France."
        keywords="agence web Madagascar, agence web France, développement web Antananarivo, développement web Paris, développement mobile, UI/UX design, DevOps, IA, automatisation, iTech-Company"
        url="/"
      />
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                Nous créons des{' '}
                <span className="text-gradient">expériences numériques</span>
                <br />à fort impact
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Agence web moderne spécialisée en développement, design et innovation digitale
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" icon={ArrowRight}>
                    Démarrer un projet
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline">
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Partners */}
            <div className="mt-20">
              <motion.p
                className="text-center text-gray-600 dark:text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Nos partenaires de confiance
              </motion.p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {[
                  { name: 'Ghrades' },
                  { name: 'Build Company' },
                ].map((partner, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.2,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.h3
                      className="text-2xl md:text-4xl font-bold font-display text-gradient"
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      {partner.name}
                    </motion.h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <SectionWrapper id="services" background="gray">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Des solutions complètes pour tous vos besoins digitaux
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 bg-electric-500/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-electric-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" icon={ArrowRight}>
              Voir tous les services
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projets <span className="text-gradient">Récents</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Découvrez quelques-unes de nos réalisations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/portfolio/${project.id}`}>
                <Card className="overflow-hidden p-0 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-electric-500 mb-2">{project.category}</p>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-dark-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="primary" icon={ArrowRight}>
              Voir tout le portfolio
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Why Us Section */}
      <SectionWrapper background="gray">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pourquoi <span className="text-gradient">nous choisir ?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="w-16 h-16 bg-electric-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-electric-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ce que disent <span className="text-gradient">nos clients</span>
          </motion.h2>
        </div>

        <TestimonialSlider />
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
            Prêt à démarrer votre <span className="text-gradient">projet ?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discutons de votre vision et transformons-la en réalité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="primary" icon={ArrowRight}>
                Travaillons ensemble
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                En savoir plus
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  )
}

export default Home
