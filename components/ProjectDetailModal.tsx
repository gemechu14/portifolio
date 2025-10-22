'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Play, ChevronLeft, ChevronRight, Maximize2, Pause, Play as PlayIcon } from 'lucide-react'
import { Project } from '@/data/projectsData'
import { useState, useEffect } from 'react'

interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isAutoSliding, setIsAutoSliding] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoSliding || !project?.demoMedia || project.demoMedia.type === 'video') return

    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => 
        prev === project.demoMedia!.content.length - 1 ? 0 : prev + 1
      )
    }, 4000) // 4 seconds per slide

    return () => clearInterval(interval)
  }, [isAutoSliding, project?.demoMedia])

  // Fullscreen functionality
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }

    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyPress)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [isFullscreen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!project) return null

  const nextMedia = () => {
    if (project.demoMedia) {
      setCurrentMediaIndex((prev) => 
        prev === project.demoMedia!.content.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevMedia = () => {
    if (project.demoMedia) {
      setCurrentMediaIndex((prev) => 
        prev === 0 ? project.demoMedia!.content.length - 1 : prev - 1
      )
    }
  }

  const renderMedia = () => {
    if (!project.demoMedia) return null

    const currentMedia = project.demoMedia.content[currentMediaIndex]

    if (project.demoMedia.type === 'video') {
      return (
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover rounded-lg"
            controls
            poster={project.demoMedia.thumbnail}
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
          >
            <source src={currentMedia} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )
    }

    return (
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentMediaIndex}
            src={currentMedia}
            alt={`${project.title} demo ${currentMediaIndex + 1}`}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setIsFullscreen(true)}
          />
        </AnimatePresence>
      </div>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {project.title}
                </h2>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {project.role}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
              {/* Media Section */}
              {project.demoMedia && (
                <div className="lg:w-1/2 p-6">
                  <div className="relative h-80 lg:h-96 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    {renderMedia()}
                    
                    {/* Media Navigation */}
                    {project.demoMedia.content.length > 1 && (
                      <>
                        {/* Navigation Arrows */}
                        <button
                          onClick={prevMedia}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                        
                        <button
                          onClick={nextMedia}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                        
                        {/* Auto-slide Toggle */}
                        <button
                          onClick={() => setIsAutoSliding(!isAutoSliding)}
                          className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                            isAutoSliding 
                              ? 'bg-primary-500 text-white' 
                              : 'bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-300'
                          }`}
                        >
                          {isAutoSliding ? <Pause className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
                        </button>
                        
                        {/* Fullscreen Button */}
                        <button
                          onClick={() => setIsFullscreen(true)}
                          className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                        >
                          <Maximize2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                        
                        {/* Media Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {project.demoMedia.content.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentMediaIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentMediaIndex
                                  ? 'bg-primary-500 scale-125'
                                  : 'bg-white/50 hover:bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Details Section */}
              <div className={`${project.demoMedia ? 'lg:w-1/2' : 'w-full'} p-6 overflow-y-auto`}>
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Project Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Technologies Used
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {project.techStack}
                    </p>
                  </div>

                  {/* Features */}
                  {project.features && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Key Features
                      </h3>
                      <ul className="space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Challenges & Solutions */}
                  {project.challenges && project.solutions && (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Challenges
                        </h3>
                        <ul className="space-y-1">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Solutions
                        </h3>
                        <ul className="space-y-1">
                          {project.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Project Outcome
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 italic">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium shadow-lg hover:shadow-primary-500/50 transition-all"
                    >
                      <ExternalLink size={18} />
                      <span>View Live</span>
                    </motion.a>
                    
                    {/* {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-all"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </motion.a>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {isFullscreen && project?.demoMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentMediaIndex}
                  src={project.demoMedia.content[currentMediaIndex]}
                  alt={`${project.title} demo ${currentMediaIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              
              {/* Fullscreen Controls */}
              {project.demoMedia.content.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevMedia();
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextMedia();
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.demoMedia.content.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentMediaIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentMediaIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
              
              {/* Close Button */}
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}
