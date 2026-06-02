import React from 'react'
import { motion } from 'framer-motion'
interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <div
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl"
          style={{
            margin: align === 'center' ? '0 auto' : '0',
          }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className={`h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mt-6 rounded-full ${align === 'center' ? 'w-24 mx-auto' : 'w-24'}`}
      />
    </div>
  )
}
