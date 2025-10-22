'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { Project } from '@/data/projectsData'
import { useState } from 'react'

interface ProjectCardProps {
  project: Project
  index: number
  onViewDetail: (project: Project) => void
}

export default function ProjectCard({ project, index, onViewDetail }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={() => onViewDetail(project)}
        className="relative h-full rounded-2xl overflow-hidden glass shadow-xl hover:shadow-2xl transition-all cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(50px)',
        }}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600">
          {/* Project Image */}
          <img
            src={project.demoMedia?.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to first letter if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          
          {/* Fallback to first letter if image fails */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20" style={{ display: 'none' }}>
            {project.title.charAt(0)}
          </div>
          
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"
          />
          
          {/* Quick Info on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white"
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  {project.role}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 bg-white dark:bg-gray-800">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
            {project.techStack}
          </p>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
            {project.description}
          </p>

          {/* Outcome Badge */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">Outcome:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 italic line-clamp-2">
              {project.outcome}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex space-x-2">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetail(project);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-primary-500/50 transition-all"
              >
                <Eye size={16} />
                <span>View Detail</span>
              </motion.button>
              
              {/* {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-4 py-2 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg font-medium text-sm hover:bg-primary-500 hover:text-white transition-all"
                >
                  <Github size={16} />
                </motion.a>
              )} */}
            </div>
            
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              <ExternalLink size={16} />
              <span>View Live</span>
            </motion.a>
          </div>
        </div>

        {/* 3D Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"
          style={{ transform: 'translateZ(-20px)' }}
        />
      </motion.div>
    </motion.div>
  )
}


