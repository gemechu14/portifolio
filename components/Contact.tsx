'use client'

import { motion } from 'framer-motion'
// import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { Mail, Linkedin, Send, Phone } from 'lucide-react'


export default function Contact() {
  // const socialLinks = [
  //   {
  //     name: 'Email',
  //     icon: Mail,
  //     href: 'mailto:gemechubulti11@gmail.com',
  //     color: '#EA4335',
  //     label: 'gemechu@example.com',
  //   },
  //   {
  //     name: 'LinkedIn',
  //     icon: Linkedin,
  //     href: 'https://linkedin.com/in/gemechu',
  //     color: '#0A66C2',
  //     label: 'linkedin.com/in/gemechu',
  //   },
  //   {
  //     name: 'telegram',
  //     icon: Github,
  //     href: 'https://github.com/gemechu',
  //     color: '#181717',
  //     label: 'github.com/gemechu',
  //   },
  // ]

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:gemechubulti11@gmail.com',
      color: '#EA4335',
      label: 'gemechubulti11@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/gemechu',
      color: '#0A66C2',
      label: 'linkedin.com/in/gemechu',
    },
    {
      name: 'Telegram',
      icon: Send, // you can use Send or a Telegram icon from lucide-react if available
      href: 'https://t.me/Gameb86', // replace with your Telegram username
      color: '#0088cc',
      label: '@Gameb86',
    },
    {
      name: 'Phone',
      icon: Phone, // import from lucide-react
      href: 'tel:+251947539988', // replace with your actual phone number
      color: '#34A853',
      label: '+251 947 539 988',
    },
  ]

  // your existing JSX return block

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let&apos;s Build Together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: `0 20px 40px ${link.color}33`,
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-8 rounded-2xl glass shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at center, ${link.color}, transparent)`,
                  }}
                />

                <div className="relative flex flex-col items-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 20 , scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/20"
                    style={{
                      boxShadow: `0 0 30px ${link.color}22`,
                    }}
                  >
                    <link.icon
                      size={32}
                      style={{ color: link.color }}
                      className="transition-all"
                    />
                  </motion.div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                      {link.label}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    <Send size={20} className="text-primary-500" />
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative p-8 md:p-12 rounded-3xl glass shadow-2xl overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-600/10 to-primary-500/10 bg-[length:200%_100%]"
            />

            <div className="relative text-center space-y-6">
              <h3 className="text-3xl font-display font-bold text-gray-800 dark:text-gray-200">
                Ready to Start a Project?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://t.me/Gameb86"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(0, 136, 204, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold text-base shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  <Send size={20} />
                  <span>Telegram</span>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/gemechu"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(10, 102, 194, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-full font-semibold text-base shadow-lg hover:shadow-blue-700/50 transition-all"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  href={`mailto:gemechubulti11@gmail.com?subject=${encodeURIComponent('Project inquiry from portfolio')}&body=${encodeURIComponent('Hi Gemechu,%0D%0A%0D%0AMy name is ... I would like to discuss ...')}`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-base shadow-lg hover:shadow-primary-500/50 transition-all"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}


