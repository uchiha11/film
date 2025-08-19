'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ShowreelSection from '@/components/ShowreelSection'
import PortfolioSection from '@/components/PortfolioSection'
import ClientsSection from '@/components/ClientsSection'
import ContactSection from '@/components/ContactSection'
import MusicToggle from '@/components/MusicToggle'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-cinematic-black flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-cinematic-gold border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl font-display text-cinematic-gold"
          >
            Loading<span className="loading-dots"></span>
          </motion.h1>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="relative">
      <Navigation />
      <MusicToggle />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <AboutSection />
        <ShowreelSection />
        <PortfolioSection />
        <ClientsSection />
        <ContactSection />
      </motion.div>
    </main>
  )
}