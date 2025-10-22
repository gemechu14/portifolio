'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Phone, Heart } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Backend Systems', href: '#' },
      { name: 'API Development', href: '#' },
    ],
    resources: [
      { name: 'Resume', href: '/resume.pdf' },
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Testimonials', href: '#' },
    ]
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:gemechubulti11@gmail.com',
      color: 'hover:text-red-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/gemechu',
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/gemechu',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
    },
  ]

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Addis Ababa, Ethiopia',
    },
    {
      icon: Mail,
      text: 'gemechubulti11@gmail.com',
    },
    {
      icon: Phone,
      text: '+251 947 539 988',
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Logo variant="full" size="md" className="mb-6" />
              <p className="text-gray-400 mb-6 leading-relaxed">
                Full-stack developer passionate about creating scalable solutions and 
                exceptional digital experiences. Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                  >
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.li
                    key={contact.text}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                  >
                    <contact.icon size={16} className="text-primary-500 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{contact.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        > */}
          {/* <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> */}
            {/* <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Gemechu. All rights reserved.</span>
            </div> */}
            
            {/* <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" />
              </motion.div>
              <span>using Next.js, React & Tailwind CSS</span>
            </div> */}
          </div>
        {/* </motion.div> */}
      {/* </div> */}
    </footer>
  )
}
