'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

const ShowreelSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const togglePlay = () => {
    const video = videoRef.current
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    const video = videoRef.current
    if (video) {
      if (!isFullscreen) {
        if (video.requestFullscreen) {
          video.requestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
      setIsFullscreen(!isFullscreen)
    }
  }

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
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster="https://images.unsplash.com/photo-1489599904472-84b0e19e8b37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/50 via-transparent to-cinematic-black/30" />

            {/* Play Button Overlay */}
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center bg-cinematic-black/30 backdrop-blur-sm"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="bg-white text-cinematic-black p-6 rounded-full cinematic-glow hover:bg-cinematic-warm transition-all duration-300"
                >
                  <Play size={48} className="ml-1" />
                </motion.button>
              </motion.div>
            )}

            {/* Video Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-4 left-4 right-4 flex justify-between items-center"
            >
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="bg-cinematic-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="bg-cinematic-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleFullscreen}
                className="bg-cinematic-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Maximize size={20} />
              </motion.button>
            </motion.div>
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