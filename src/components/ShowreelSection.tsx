import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ShowreelSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section id="showreel" className="py-20 bg-cinematic-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-cinematic-warm/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Showreel
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A curated collection of my finest cinematography work, showcasing the art of visual storytelling 
            across various genres and formats.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative bg-cinematic-gray rounded-2xl overflow-hidden cinematic-glow">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/KXFo2hQipgs?autoplay=0&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1"
              title="Cinematography Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-2">
              Cinematography Reel 2024
            </h3>
            <p className="text-gray-400 text-lg">
              A showcase of recent projects including narrative films, commercials, and music videos
            </p>
          </motion.div>

          {/* Additional Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { title: 'Runtime', value: '3:45', description: 'Minutes of curated content' },
              { title: 'Projects', value: '12', description: 'Featured works' },
              { title: 'Genres', value: '5+', description: 'Different styles showcased' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-cinematic-gray/30 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{item.title}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShowreelSection
