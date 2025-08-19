'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ClientsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const clients = [
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' },
    { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png' },
    { name: 'Sony Pictures', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Sony_Pictures_Television_logo.svg/2560px-Sony_Pictures_Television_logo.svg.png' },
    { name: 'Warner Bros', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/2560px-Warner_Bros_logo.svg.png' },
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
    <section id="clients" className="py-20 bg-cinematic-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cinematic-warm/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
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
            Clients & Collaborations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Trusted by industry leaders and creative visionaries to bring their stories to life.
          </motion.p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-display font-semibold text-center text-white mb-12"
          >
            Trusted by Industry Leaders
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center justify-center p-6 bg-cinematic-gray/20 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-white/10 to-cinematic-warm/10 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join the list of satisfied clients who have brought their vision to life through exceptional cinematography.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-cinematic bg-white text-cinematic-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cinematic-warm"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection