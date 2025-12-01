import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import SectionWrapper from '../components/ui/SectionWrapper'
import SEO from '../components/SEO'

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Luxe Premium',
    category: 'Web Development',
    description: 'Plateforme e-commerce haut de gamme avec système de paiement sécurisé et gestion de stock en temps réel.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    year: '2024',
    client: 'LuxeBrand Paris',
  },
  {
    id: 2,
    title: 'App Fitness & Nutrition',
    category: 'Mobile App',
    description: 'Application mobile de coaching sportif avec suivi des performances, plans nutritionnels personnalisés et communauté.',
    image: 'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?w=800&h=600&fit=crop',
    stack: ['React Native', 'Firebase', 'Redux', 'Stripe', 'Google Fit'],
    year: '2024',
    client: 'FitLife Pro',
  },
  {
    id: 3,
    title: 'Dashboard Analytics Pro',
    category: 'UI/UX Design',
    description: 'Interface de visualisation de données complexes avec graphiques interactifs et rapports personnalisés.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    stack: ['Figma', 'React', 'D3.js', 'TypeScript', 'Material-UI'],
    year: '2024',
    client: 'DataViz Corp',
  },
  {
    id: 4,
    title: 'Plateforme SaaS B2B',
    category: 'Web Development',
    description: 'Solution SaaS complète pour la gestion de projets avec collaboration en temps réel et intégrations multiples.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    stack: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker', 'Kubernetes'],
    year: '2023',
    client: 'ProjectHub',
  },
  {
    id: 5,
    title: 'App Livraison Express',
    category: 'Mobile App',
    description: 'Application de livraison avec tracking GPS en temps réel, système de notation et paiement intégré.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
    stack: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps'],
    year: '2023',
    client: 'QuickDeliver',
  },
  {
    id: 6,
    title: 'Chatbot IA Customer Service',
    category: 'IA & Automation',
    description: 'Assistant virtuel intelligent avec traitement du langage naturel pour automatiser le service client.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    stack: ['Python', 'OpenAI GPT', 'FastAPI', 'React', 'WebSocket'],
    year: '2023',
    client: 'CustomerFirst',
  },
]

const Portfolio = () => {
  const categories = ['Tous', 'Web Development', 'Mobile App', 'UI/UX Design', 'IA & Automation']

  return (
    <div className="pt-20">
      <SEO
        title="Portfolio"
        description="Découvrez nos projets de développement web, mobile et design. Des solutions innovantes créées par iTech-Company pour des clients à Madagascar, en France et à l'international."
        keywords="portfolio développement web, projets web Madagascar, projets web France, réalisations iTech-Company, applications mobiles, sites web professionnels"
        url="/portfolio"
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
              Notre <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Découvrez nos projets et réalisations qui ont fait la différence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter (Optional - can be enhanced with state management) */}
      <SectionWrapper>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-gray-300 dark:border-dark-700 hover:border-electric-500 hover:text-electric-500 transition-colors"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
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
                <Card className="overflow-hidden p-0 group h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm mb-1">{project.client}</p>
                        <p className="text-xs opacity-80">{project.year}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-electric-500 mb-2">{project.category}</p>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-dark-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-3 py-1 text-xs bg-gray-100 dark:bg-dark-700 rounded-full">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Portfolio
