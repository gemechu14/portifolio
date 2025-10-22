'use client'

import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiNodedotjs, SiSpringboot, SiFlutter, SiPostgresql, SiMongodb, SiDocker, SiGit, SiTailwindcss, SiExpress, SiTypescript } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    icon: SiReact,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    icon: SiNodedotjs,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'Mobile & Tools',
    icon: SiFlutter,
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5,
                      transition: { duration: 0.2 },
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="group relative p-4 rounded-xl glass shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity rounded-xl"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}, transparent)`,
                      }}
                    />

                    <div className="relative flex items-center space-x-4">
                      <skill.icon
                        className="transition-transform group-hover:scale-110"
                        size={32}
                        style={{ color: skill.color }}
                      />
                      <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>

                    {/* 3D Depth Shadow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5 rounded-xl pointer-events-none"
                      style={{ transform: 'translateZ(-10px)' }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


