import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Rocket } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, en livrant des solutions de qualité supérieure.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Nous restons à la pointe de la technologie pour proposer des solutions innovantes.',
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'La qualité est au cœur de notre processus de développement et de design.',
    },
  ]

  const team = [
    {
      name: 'Alexandre Dupont',
      role: 'CEO & Founder',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandre',
      bio: '10+ ans d\'expérience en développement web',
    },
    {
      name: 'Sophie Bernard',
      role: 'Lead Designer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
      bio: 'Experte en UI/UX et branding',
    },
    {
      name: 'Marc Laurent',
      role: 'CTO',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marc',
      bio: 'Architecte logiciel et DevOps expert',
    },
    {
      name: 'Julie Martin',
      role: 'Project Manager',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Julie',
      bio: 'Gestion de projets agiles',
    },
    {
      name: 'Thomas Petit',
      role: 'Full Stack Developer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas',
      bio: 'Spécialiste React et Node.js',
    },
    {
      name: 'Emma Rousseau',
      role: 'Mobile Developer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      bio: 'Experte React Native et Flutter',
    },
  ]

  const milestones = [
    { year: '2019', event: 'Création d\'iTech-Company' },
    { year: '2020', event: 'Premier client international' },
    { year: '2021', event: '20 projets livrés avec succès' },
    { year: '2022', event: 'Expansion de l\'équipe à 10 personnes' },
    { year: '2023', event: 'Certification ISO 9001' },
    { year: '2024', event: '50+ projets et 30+ clients satisfaits' },
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
              À propos <span className="text-gradient">d'iTech-Company</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Une agence digitale passionnée par l'innovation et l'excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Fondée en 2019, iTech-Company est née de la passion de créer des expériences numériques
              exceptionnelles. Notre équipe de développeurs et designers talentueux partage une vision
              commune : transformer les idées innovantes en solutions digitales performantes.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Au fil des années, nous avons accompagné des dizaines d'entreprises dans leur transformation
              digitale, des startups ambitieuses aux grandes entreprises établies. Chaque projet est une
              opportunité de repousser les limites de la technologie et du design.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Aujourd'hui, nous sommes fiers d'être reconnus comme un partenaire de confiance pour des
              projets web, mobile et cloud de haute qualité.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                alt="Team collaboration"
                className="rounded-xl w-full h-48 object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
                alt="Office workspace"
                className="rounded-xl w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                alt="Team meeting"
                className="rounded-xl w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop"
                alt="Modern office"
                className="rounded-xl w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-electric-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Notre Mission</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Accompagner nos clients dans leur transformation digitale en créant des solutions
                  innovantes, performantes et sur mesure qui génèrent un impact réel sur leur business.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-electric-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Notre Vision</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Devenir la référence en matière d'innovation digitale en France et à l'international,
                  reconnue pour son excellence technique et la qualité de ses réalisations.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Nos <span className="text-gradient">Valeurs</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Les principes qui guident notre travail au quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="w-14 h-14 bg-electric-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-electric-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Notre <span className="text-gradient">Équipe</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Des experts passionnés à votre service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-electric-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Notre <span className="text-gradient">Parcours</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="flex gap-8 mb-8 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-electric-500">{milestone.year}</span>
              </div>
              <div className="relative flex-shrink-0">
                <div className="w-4 h-4 bg-electric-500 rounded-full" />
                {index < milestones.length - 1 && (
                  <div className="absolute top-4 left-2 w-0.5 h-full bg-electric-500/30" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <p className="text-lg text-gray-600 dark:text-gray-400">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}

export default About
