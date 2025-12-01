import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  href?: string
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  className = '',
  href,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-electric-500 hover:bg-electric-600 text-white shadow-lg shadow-electric-500/30 hover:shadow-xl hover:shadow-electric-500/40',
    secondary: 'bg-dark-700 hover:bg-dark-600 text-white dark:bg-white dark:text-dark-900 dark:hover:bg-gray-100',
    outline: 'border-2 border-electric-500 text-electric-500 hover:bg-electric-500 hover:text-white',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  )
}

export default Button
