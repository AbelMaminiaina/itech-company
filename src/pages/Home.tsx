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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/10 dark:from-dark-900 dark:via-dark-900 dark:to-dark-900 pt-48 pb-20">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm border border-purple-200 dark:border-purple-700 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* <span className="text-xl">👑</span>
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  Première ESN franco-malgache en 2025
                </span> */}
              </motion.div>

              {/* Main heading with colored keywords */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-[1.1] tracking-tight">
                Nous{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-purple-400 bg-clip-text text-transparent">
                  créons des expériences
                </span>{' '}
                
                <br />
               numériques à fort impact
              </h1>

              {/* Subtitle with mixed styling */}
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                <span className="text-gray-400 dark:text-gray-500">Agence web moderne spécialisée en développement, 
,</span>
                {' '}
                <span className="text-gray-900 dark:text-white font-medium">design et innovation digitale.</span>
              </p>

              {/* CTA Button */}
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
          </div>
        </div>
      </section>

      {/* Tech Stack Logos Animation */}
      <section className="relative py-12 bg-white dark:bg-dark-900 overflow-hidden">
        {/* <div className="container-custom">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            Technologies que nous maîtrisons
          </p>
        </div> */}

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-dark-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-dark-900 to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center gap-12 px-6">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'Python', icon: '🐍' },
                { name: '.NET', icon: '🟣' },
                { name: 'SQL', icon: '🗄️' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Azure', icon: '☁️' },
                { name: 'Figma', icon: '🎨' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 px-6 py-4 bg-gray-100 dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 whitespace-nowrap"
                >
                  <span className="text-3xl">{tech.icon}</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-12 px-6">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'Python', icon: '🐍' },
                { name: '.NET', icon: '🟣' },
                { name: 'SQL', icon: '🗄️' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Azure', icon: '☁️' },
                { name: 'Figma', icon: '🎨' },
              ].map((tech) => (
                <div
                  key={`${tech.name}-2`}
                  className="flex items-center gap-3 px-6 py-4 bg-gray-100 dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 whitespace-nowrap"
                >
                  <span className="text-3xl">{tech.icon}</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper id="services" background="gray">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-poppins mb-4"
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
            className="text-4xl md:text-5xl font-bold font-poppins mb-4"
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
            className="text-4xl md:text-5xl font-bold font-poppins mb-4"
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
            className="text-4xl md:text-5xl font-bold font-poppins mb-4"
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
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-white">
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
