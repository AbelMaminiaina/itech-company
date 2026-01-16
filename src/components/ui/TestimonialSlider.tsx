import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Card from './Card'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Noro',
    role: 'CEO',
    company: 'Grhades',
    content: 'iTech-Company a développé notre site e-commerce sur Odoo avec un professionnalisme remarquable. Leur maîtrise technique et leur réactivité ont permis de livrer un projet de qualité dans les délais. Je recommande vivement !',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Noro',
  },
  {
    id: 2,
    name: 'Marie Dubois',
    role: 'CEO',
    company: 'TechStart SAS',
    content: 'iTech-Company a transformé notre vision en réalité. Leur expertise technique et leur sens du design ont dépassé toutes nos attentes. Une collaboration exceptionnelle !',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie',
  },
  {
    id: 3,
    name: 'Thomas Martin',
    role: 'CTO',
    company: 'InnovateLab',
    content: "L'équipe d'iTech-Company est incroyablement professionnelle. Ils ont livré notre application mobile en temps record avec une qualité irréprochable.",
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas',
  },
  {
    id: 4,
    name: 'Sophie Laurent',
    role: 'Product Manager',
    company: 'Digital Solutions',
    content: 'Une agence qui comprend vraiment les enjeux business. Leur approche stratégique et leur maîtrise technique font toute la différence.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
  },
]

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          <Card glass className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
              "{testimonials[current].content}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full"
                loading="lazy"
              />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials[current].role} • {testimonials[current].company}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
          aria-label="Témoignage précédent"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current
                  ? 'bg-electric-500 w-8'
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
          aria-label="Témoignage suivant"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default TestimonialSlider
