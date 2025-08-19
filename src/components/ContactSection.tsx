'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Instagram } from 'lucide-react'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@johndoe.com',
      href: 'mailto:hello@johndoe.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@johndoe_cinematographer',
      href: 'https://instagram.com/johndoe_cinematographer',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="contact" className="py-20 bg-cinematic-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your vision to life? Reach out through any of the channels below.
          </motion.p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Instagram' ? '_blank' : undefined}
                  rel={info.label === 'Instagram' ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-6 p-6 bg-cinematic-gray/20 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="bg-white/20 p-4 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                    <info.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    <div className="text-white font-medium text-lg">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-white/10 to-gray-500/10 p-6 rounded-2xl border border-white/20 text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-3">
                Available for New Projects
              </h4>
              <p className="text-gray-300 mb-4">
                Ready to bring your vision to life? Reach out through any of the channels above.
              </p>
              <div className="flex items-center justify-center text-sm text-white">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                Typically responds within 24 hours
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection