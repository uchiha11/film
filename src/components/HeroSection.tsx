'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, which is expected in many browsers
        setIsPlaying(false)
      })
    }
  }, [])

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

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => console.log('Video failed to load')}
          poster="https://img.youtube.com/vi/1Jk25_Gpnqw/maxresdefault.jpg"
        >
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-6xl md:text-8xl font-display font-bold mb-6 text-gradient"
          >
            Abishek Ranganathan
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide"
          >
            Cinematographer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Bringing stories to life through the art of cinematic vision. 
            Award-winning cinematographer specializing in narrative films, commercials, and music videos.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-cinematic bg-white text-cinematic-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cinematic-warm"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-cinematic border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-cinematic-black"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Controls */}
      {isVideoLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-8 flex gap-4 z-20"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="bg-cinematic-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="bg-cinematic-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </motion.button>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToNext}
          className="text-white hover:text-cinematic-warm transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default HeroSection