import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useState } from 'react'

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
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

  // Filter articles based on search query
  const filteredArticles = articles.filter((article) => {
    const query = searchQuery.toLowerCase()
    return (
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.author.toLowerCase().includes(query)
    )
  })

  return (
    <div className="pt-20">
      <SEO
        title="Blog"
        description="Découvrez nos articles sur le développement web, mobile, design UI/UX, DevOps, IA et sécurité. Conseils et tendances tech par les experts d'iTech-Company à Madagascar et en France."
        keywords="blog développement web, articles tech, tendances développement, tutoriels web, blog tech Madagascar, blog tech France"
        url="/blog"
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=1080&fit=crop&q=80"
            alt="Blog iTech-Company - Actualités et tendances digitales"
            className="w-full h-full object-cover"
          />
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-900/85 to-purple-900/80 dark:from-dark-900/95 dark:via-dark-900/90 dark:to-purple-900/85"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 text-white">
              Notre <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 mb-8">
              Actualités, conseils et tendances du monde digital
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher des articles par mot-clé..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-dark-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-dark-700 focus:ring-2 focus:ring-electric-500 focus:border-electric-500 transition-all shadow-lg"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
                💡 Explorez l'innovation tech, un article à la fois
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <SectionWrapper>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
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
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">Aucun article trouvé</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Essayez avec d'autres mots-clés
            </p>
          </motion.div>
        )}
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
            Restez informé
          </h2>
          <p className="text-lg text-gray-300 mb-6">
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
