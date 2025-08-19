import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, Play, ExternalLink, Calendar } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  year: string
  description: string
  image: string
  video?: string
  client: string
}

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects: Project[] = [
    {
      id: 1,
      title: 'Cinematic Reel 1',
      category: 'Videos',
      year: '2024',
      description: 'A showcase of cinematic storytelling and visual excellence through dynamic camera work.',
      image: 'https://img.youtube.com/vi/X-MZXIXPwFw/maxresdefault.jpg',
      video: 'X-MZXIXPwFw',
      client: 'Creative Studio'
    },
    {
      id: 2,
      title: 'Cinematic Reel 2',
      category: 'Videos',
      year: '2024',
      description: 'High-energy visual storytelling with innovative lighting techniques and composition.',
      image: 'https://img.youtube.com/vi/KXFo2hQipgs/maxresdefault.jpg',
      video: 'KXFo2hQipgs',
      client: 'Film Production'
    },
    {
      id: 3,
      title: 'Cinematic Reel 3',
      category: 'Videos',
      year: '2023',
      description: 'Atmospheric cinematography combining practical effects with artistic vision.',
      image: 'https://img.youtube.com/vi/kpPDGftkT4U/maxresdefault.jpg',
      video: 'kpPDGftkT4U',
      client: 'Media House'
    },
    {
      id: 4,
      title: 'Cinematic Reel 4',
      category: 'Videos',
      year: '2023',
      description: 'Creative visual narrative showcasing advanced cinematographic techniques.',
      image: 'https://img.youtube.com/vi/c3Y_BjV1yEA/maxresdefault.jpg',
      video: 'c3Y_BjV1yEA',
      client: 'Production House'
    },
    {
      id: 5,
      title: 'Cinematic Reel 5',
      category: 'Videos',
      year: '2022',
      description: 'Innovative storytelling through compelling visual composition and lighting.',
      image: 'https://img.youtube.com/vi/VtOjN2KJ3NI/maxresdefault.jpg',
      video: 'VtOjN2KJ3NI',
      client: 'Independent Film'
    },
    {
      id: 6,
      title: 'Cinematic Reel 6',
      category: 'Videos',
      year: '2022',
      description: 'Masterful cinematography showcasing artistic vision and technical excellence.',
      image: 'https://img.youtube.com/vi/41W7sRc5wps/maxresdefault.jpg',
      video: '41W7sRc5wps',
      client: 'Creative Agency'
    },
    {
      id: 7,
      title: 'Commercial Project',
      category: 'Commercial',
      year: '2024',
      description: 'Professional commercial cinematography showcasing brand storytelling and visual impact.',
      image: 'https://img.youtube.com/vi/-yLYGrDMhoI/maxresdefault.jpg',
      video: '-yLYGrDMhoI',
      client: 'Brand Agency'
    },
  ]

  const categories = ['All', 'Videos', 'Commercial']
  
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter)

  const openLightbox = (project: Project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="portfolio" className="py-20 bg-cinematic-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
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
            Portfolio
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            A selection of my most impactful work showcasing cinematic storytelling and visual excellence across videos and commercials.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-white text-cinematic-black'
                    : 'bg-cinematic-gray/30 text-white hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-cinematic-gray">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Play className="text-white" size={20} />
                          <span className="text-white font-medium">View Project</span>
                        </div>
                        <ExternalLink className="text-white" size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-cinematic-black px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-4">
                  <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Calendar size={16} className="mr-2" />
                    {project.year} • {project.client}
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-cinematic-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full bg-cinematic-gray rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-cinematic-black/50 text-white p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <X size={24} />
              </button>

              {/* Project Media */}
              <div className="relative">
                {selectedProject.video ? (
                  <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${selectedProject.video}?autoplay=0&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1`}
                    title={selectedProject.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full aspect-video object-cover"
                  />
                )}
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      {selectedProject.year} • {selectedProject.client}
                    </div>
                  </div>
                  <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PortfolioSection
