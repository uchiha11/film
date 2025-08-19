import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Music } from 'lucide-react'

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = volume
      audio.loop = true
    }
  }, [volume])

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (audio) {
      try {
        if (isPlaying) {
          audio.pause()
          setIsPlaying(false)
        } else {
          await audio.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.log('Audio play failed:', error)
      }
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        preload="none"
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
      >
        {/* Using a royalty-free ambient track - replace with your preferred background music */}
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        {/* Fallback for browsers that don't support the audio element */}
        Your browser does not support the audio element.
      </audio>

      {/* Music Control */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-40"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <div className="relative">
          {/* Volume Slider */}
          <AnimatePresence>
            {showVolumeSlider && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-0 right-16 bg-cinematic-black/90 backdrop-blur-sm border border-white/30 rounded-lg p-3 flex items-center space-x-3"
              >
                <VolumeX size={16} className="text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-cinematic-gray rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #00d084 0%, #00d084 ${volume * 100}%, #2a2a2a ${volume * 100}%, #2a2a2a 100%)`
                  }}
                />
                <Volume2 size={16} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMusic}
            className={`relative bg-cinematic-black/70 backdrop-blur-sm border-2 text-white p-4 rounded-full transition-all duration-300 ${
              isPlaying 
                ? 'border-white text-white cinematic-glow' 
                : 'border-white/30 hover:border-white/60'
            }`}
          >
            {/* Animated Background */}
            {isPlaying && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/50"
              />
            )}

            {/* Icon */}
            <div className="relative z-10">
              {isPlaying ? (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Music size={24} />
                </motion.div>
              ) : (
                <Music size={24} />
              )}
            </div>

            {/* Sound Waves Animation */}
            {isPlaying && (
              <div className="absolute -inset-2 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute inset-0 rounded-full border border-white/30"
                  />
                ))}
              </div>
            )}
          </motion.button>

          {/* Tooltip */}
          <AnimatePresence>
            {!showVolumeSlider && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full right-0 mb-2 bg-cinematic-black/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg border border-white/30 whitespace-nowrap"
              >
                {isPlaying ? 'Pause ambient music' : 'Play ambient music'}
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-cinematic-black/90" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #00d084;
          cursor: pointer;
          border: 2px solid #0a0a0a;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #00d084;
          cursor: pointer;
          border: 2px solid #0a0a0a;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        .slider::-webkit-slider-track {
          height: 4px;
          border-radius: 2px;
        }

        .slider::-moz-range-track {
          height: 4px;
          border-radius: 2px;
          background: #2a2a2a;
        }
      `}</style>
    </>
  )
}

export default MusicToggle