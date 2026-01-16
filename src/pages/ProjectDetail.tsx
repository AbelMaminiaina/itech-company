import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Calendar, User } from 'lucide-react'
import { projects } from './Portfolio'
import Button from '../components/ui/Button'
import SectionWrapper from '../components/ui/SectionWrapper'
import SEO from '../components/SEO'
import { trackProjectView } from '../utils/analytics'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find((p) => p.id === Number(id))

  // Tracker la vue du projet
  useEffect(() => {
    if (project) {
      trackProjectView(project.id.toString())
    }
  }, [project])

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <Link to="/portfolio">
            <Button icon={ArrowLeft} iconPosition="left">
              Retour au portfolio
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <SEO
        title={project.title}
        description={project.description}
        keywords={`${project.title}, ${project.category}, ${project.stack.join(', ')}, projet iTech-Company`}
        url={`/portfolio/${project.id}`}
        image={project.image}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-electric-500 hover:text-electric-600 mb-8">
              <ArrowLeft className="w-5 h-5" />
              Retour au portfolio
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{project.year}</span>
              </div>
              <div className="px-4 py-1 bg-electric-500/10 text-electric-600 dark:text-electric-400 rounded-full">
                {project.category}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[500px] object-cover"
            loading="lazy"
          />
        </motion.div>
      </SectionWrapper>

      {/* Project Details */}
      <SectionWrapper background="gray">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">À propos du projet</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {project.description}
              </p>

              <h3 className="text-2xl font-bold mb-4">Le défi</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Notre client avait besoin d'une solution moderne et performante pour répondre aux exigences
                de son marché. L'objectif était de créer une expérience utilisateur exceptionnelle tout en
                maintenant des performances optimales et une scalabilité à long terme.
              </p>

              <h3 className="text-2xl font-bold mb-4">La solution</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Nous avons conçu et développé une solution complète en utilisant les technologies les plus
                récentes. Notre approche agile nous a permis de livrer rapidement tout en maintenant une
                qualité irréprochable. Le résultat dépasse les attentes initiales du client.
              </p>

              <h3 className="text-2xl font-bold mb-4">Résultats</h3>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl">
                  <div className="text-4xl font-bold text-gradient mb-2">+150%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Engagement</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl">
                  <div className="text-4xl font-bold text-gradient mb-2">-40%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Temps de chargement</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl">
                  <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 sticky top-24"
            >
              <h3 className="text-xl font-bold mb-4">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-electric-500/10 text-electric-600 dark:text-electric-400 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Catégorie</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{project.category}</p>

              <h3 className="text-xl font-bold mb-4">Client</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{project.client}</p>

              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" icon={ExternalLink} className="w-full">
                    Visiter le site
                  </Button>
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* More Projects */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold mb-8">Projets similaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects
            .filter((p) => p.id !== project.id && p.category === project.category)
            .slice(0, 3)
            .map((relatedProject) => (
              <Link key={relatedProject.id} to={`/portfolio/${relatedProject.id}`}>
                <motion.div
                  className="rounded-xl overflow-hidden group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 bg-white dark:bg-dark-800">
                    <h3 className="font-semibold group-hover:text-electric-500 transition-colors">
                      {relatedProject.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
        </div>
      </SectionWrapper>
    </div>
  )
}

export default ProjectDetail
