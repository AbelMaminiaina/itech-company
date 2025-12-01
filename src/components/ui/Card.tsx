import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
  onClick?: () => void
}

const Card = ({ children, className = '', hover = true, glass = false, onClick }: CardProps) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300'
  const glassStyles = glass
    ? 'bg-white/10 backdrop-blur-lg border border-white/20 dark:bg-black/20 dark:border-white/10'
    : 'bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700'

  const hoverStyles = hover
    ? 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer'
    : ''

  return (
    <motion.div
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default Card
