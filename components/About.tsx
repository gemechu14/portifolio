'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, MapPin, Code } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Info Cards */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateX: 10 }}
              className="flex items-start space-x-4 p-6 rounded-2xl glass shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex-shrink-0 p-3 bg-primary-500/10 rounded-xl">
                <GraduationCap className="text-primary-500" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  BSc in Software Engineering
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Addis Ababa Science and Technology University
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateX: 10 }}
              className="flex items-start space-x-4 p-6 rounded-2xl glass shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex-shrink-0 p-3 bg-primary-500/10 rounded-xl">
                <Briefcase className="text-primary-500" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Current Position
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Software Engineer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Cooperative Bank of Oromia
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateX: 10 }}
              className="flex items-start space-x-4 p-6 rounded-2xl glass shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex-shrink-0 p-3 bg-primary-500/10 rounded-xl">
                <MapPin className="text-primary-500" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateX: 10 }}
              className="flex items-start space-x-4 p-6 rounded-2xl glass shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex-shrink-0 p-3 bg-primary-500/10 rounded-xl">
                <Code className="text-primary-500" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Full-stack Development
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Backend-oriented
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Biography */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl glass shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I&apos;m a passionate Software Engineer with a strong foundation in full-stack development, 
                  specializing in building scalable and efficient backend systems that power modern applications.
                </p>
                <p>
                  Currently working at Cooperative Bank of Oromia, I focus on creating robust solutions 
                  that handle complex business logic, integrate seamlessly with various services, and 
                  deliver exceptional user experiences.
                </p>
                <p>
                  With expertise spanning from React and Next.js on the frontend to Node.js and Spring Boot 
                  on the backend, plus mobile development with Flutter, I enjoy tackling challenging problems 
                  and transforming ideas into reality.
                </p>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                  Let&apos;s build something amazing together!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


