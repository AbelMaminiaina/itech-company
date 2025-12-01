import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'dark'
}

const SectionWrapper = ({
  children,
  className = '',
  id,
  background = 'white',
}: SectionWrapperProps) => {
  const backgrounds = {
    white: 'bg-white dark:bg-dark-900',
    gray: 'bg-gray-50 dark:bg-dark-800',
    dark: 'bg-dark-900 dark:bg-black',
  }

  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${backgrounds[background]} ${className}`}
    >
      <motion.div
        className="container-custom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper
