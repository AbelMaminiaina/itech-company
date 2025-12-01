import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import { Link } from 'react-router-dom'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Les tendances du développement web en 2024',
      excerpt: 'Découvrez les technologies et frameworks qui façonnent le futur du développement web.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      category: 'Développement',
      author: 'Alexandre Dupont',
      date: '15 Novembre 2024',
      readTime: '5 min',
    },
    {
      id: 2,
      title: "L'importance de l'UX Design dans les applications mobiles",
      excerpt: "Comment une bonne expérience utilisateur peut transformer votre application mobile.",
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      category: 'Design',
      author: 'Sophie Bernard',
      date: '10 Novembre 2024',
      readTime: '7 min',
    },
    {
      id: 3,
      title: "DevOps : Automatiser pour mieux déployer",
      excerpt: 'Les meilleures pratiques DevOps pour optimiser vos cycles de développement.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
      category: 'DevOps',
      author: 'Marc Laurent',
      date: '5 Novembre 2024',
      readTime: '6 min',
    },
    {
      id: 4,
      title: "Intelligence Artificielle : Au-delà du buzz",
      excerpt: "Comment l'IA transforme réellement les entreprises aujourd'hui.",
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      category: 'IA',
      author: 'Thomas Petit',
      date: '1 Novembre 2024',
      readTime: '8 min',
    },
    {
      id: 5,
      title: 'Sécurité Web : Les bases essentielles',
      excerpt: 'Protégez votre application web contre les menaces courantes.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
      category: 'Sécurité',
      author: 'Julie Martin',
      date: '28 Octobre 2024',
      readTime: '6 min',
    },
    {
      id: 6,
      title: 'React Native vs Flutter : Quel framework choisir ?',
      excerpt: 'Comparaison détaillée des deux frameworks de développement mobile les plus populaires.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      category: 'Mobile',
      author: 'Emma Rousseau',
      date: '20 Octobre 2024',
      readTime: '10 min',
    },
  ]

  const categories = ['Tous', 'Développement', 'Design', 'DevOps', 'IA', 'Mobile', 'Sécurité']

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
              Notre <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Actualités, conseils et tendances du monde digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden p-0 group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-electric-500 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-electric-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {article.readTime} de lecture
                    </span>
                    <Link
                      to={`/blog/${article.id}`}
                      className="text-electric-500 hover:text-electric-600 flex items-center gap-1"
                    >
                      Lire plus <ArrowRight className="w-4 h-4" />
                    </Link>
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
            Restez informé
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Abonnez-vous à notre newsletter pour recevoir nos derniers articles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-3 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white border border-gray-300 dark:border-dark-700 focus:ring-2 focus:ring-electric-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-electric-500 hover:bg-electric-600 text-white font-medium rounded-lg transition-colors">
              S'abonner
            </button>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  )
}

export default Blog
