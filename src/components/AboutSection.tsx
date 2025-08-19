import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, Film, Users } from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Film, number: '15+', label: 'Projects Completed' },
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Camera, number: '8+', label: 'Years Experience' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-cinematic-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6"
              >
                About Me
              </motion.h2>
              
              <motion.div variants={itemVariants} className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate cinematographer and director of photography based in Chennai, Tamil Nadu, with over 8 years of experience in visual storytelling.
                  My journey began with a simple fascination for how light and shadow could evoke emotion,
                  and it has evolved into a career dedicated to bringing stories to life through the lens across South India.
                </p>
                
                <p>
                  Specializing in narrative films, commercials, music videos, corporate videos, and wedding cinematography in Chennai and throughout Tamil Nadu,
                  I believe that every frame should serve the story. My film production company combines technical expertise with artistic vision,
                  ensuring that each project not only looks stunning but also resonates with its audience while capturing the essence of local culture and storytelling.
                </p>
                
                <p>
                  From intimate documentaries to large-scale commercial productions, I work with clients across Chennai's vibrant film industry,
                  delivering professional cinematography services that meet international standards while celebrating the rich visual heritage of Tamil cinema.
                </p>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-cinematic-gray/30 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        className="text-2xl font-bold text-white"
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection