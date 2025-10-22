'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'full' | 'icon' | 'monogram'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ variant = 'full', size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: 'w-6 h-6',
      text: 'text-lg',
      textSize: 'text-sm'
    },
    md: {
      icon: 'w-10 h-10',
      text: 'text-2xl',
      textSize: 'text-lg'
    },
    lg: {
      icon: 'w-16 h-16',
      text: 'text-4xl',
      textSize: 'text-2xl'
    }
  }

  const currentSize = sizeClasses[size]

  const LogoIcon = () => (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 5 }}
      className={`${currentSize.icon} bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 rounded-lg flex items-center justify-center shadow-lg dark:shadow-primary-500/25 relative overflow-hidden border border-primary-200 dark:border-primary-600`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/20" />
      
      {/* Main letter */}
      <span className="text-white font-bold text-xl relative z-10">G</span>
      
      {/* Subtle accent */}
      <div className="absolute top-1 right-1 w-2 h-2 bg-white/30 dark:bg-white/40 rounded-full" />
    </motion.div>
  )

  const LogoText = () => (
    <motion.span
      whileHover={{ scale: 1.02 }}
      className={`${currentSize.text} font-display font-bold gradient-text`}
    >
      Gemechu
    </motion.span>
  )

  const MonogramLogo = () => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${currentSize.icon} bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 rounded-full flex items-center justify-center shadow-lg dark:shadow-primary-500/25 relative overflow-hidden border border-primary-200 dark:border-primary-600`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/20 rounded-full" />
      <span className="text-white font-bold text-xl relative z-10">G</span>
    </motion.div>
  )

  if (variant === 'icon') {
    return <LogoIcon />
  }

  if (variant === 'monogram') {
    return <MonogramLogo />
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <LogoIcon />
      <LogoText />
    </div>
  )
}
