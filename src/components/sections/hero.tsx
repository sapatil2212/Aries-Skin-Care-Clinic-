"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Shield, MapPin, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { DOCTOR_INFO, CLINIC_INFO } from "@/lib/constants"
import { useState, useEffect } from "react"
import HeroImage1 from "../../../public/hero/1.png"
import HeroImage2 from "../../../public/hero/2.png"
import HeroImage3 from "../../../public/hero/3.png"
import { useAppointmentModal } from "@/components/appointment-modal-provider"

// Animated Tagline Component
function AnimatedTagline() {
  const taglines = [
    "Your Journey to Flawless Skin Begins Here.",
    "Expert Skin & Hair Care, Rooted in Medical Excellence.",
    "Advanced Aesthetics, Trusted Medical Care."
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length)
    }, 4000) // Change every 4 seconds
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <motion.h1
      key={currentIndex}
      initial={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
      transition={{ 
        duration: 1.2, 
        ease: "easeOut",
        delay: 0.1
      }}
      className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight"
    >
      {taglines[currentIndex]}
    </motion.h1>
  )
}

// Animated Sub-Content Component
function AnimatedSubContent() {
  const subContents = [
    "At Aries Skin & General Clinic, we blend advanced cosmetic technology with expert medical care to reveal a more confident, radiant you.",
    "Led by the experienced Dr. Shweta Sonje, we offer proven treatments for skin, hair, and gynecological health, all under one roof.",
    "Experience the difference of CE & FDA-approved treatments performed by skilled professionals in a state-of-the-art clinic."
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subContents.length)
    }, 4000) // Change every 4 seconds
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <motion.p
      key={currentIndex}
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -40, rotateX: 15 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="text-sm md:text-lg text-gray-600 leading-relaxed"
    >
      {subContents[currentIndex]}
    </motion.p>
  )
}

// Image Carousel Component
function ImageCarousel() {
  const images = [
    {
      id: 1,
      src: HeroImage1.src,
      alt: "Aries Skin Clinic",
      title: "Dr. Shweta Sonje",
      subtitle: "MBBS, Fellowship in Skin Aesthetics",
      experience: "15+ Years Experience"
    },
    {
      id: 2,
      src: HeroImage2.src,
      alt: "Advanced Treatments",
      title: "State-of-the-Art Clinic",
      subtitle: "FDA & CE Approved Equipment",
      experience: "1000+ Happy Patients"
    },
    {
      id: 3,
      src: HeroImage3.src,
      alt: "Expert Care",
      title: "Professional Team",
      subtitle: "Government Certified Facility",
      experience: "18 Advanced Treatments"
    }
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change every 4 seconds to sync with text
    
    return () => clearInterval(interval)
  }, [])
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }
  
  return (
    <div 
      className="relative group bg-transparent overflow-hidden rounded-lg h-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
                              {/* Main Image */}
         <motion.div
           key={currentIndex}
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="bg-transparent w-full h-auto flex items-center justify-center"
         >
           <img 
             src={images[currentIndex].src} 
             alt={images[currentIndex].alt}
             className="w-full h-auto object-contain bg-transparent max-w-full"
           />
         </motion.div>
      
      {/* Navigation Arrows - Hidden by default, visible on hover */}
      <motion.button
        onClick={goToPrevious}
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -20
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-20"
      >
        <ChevronLeft className="h-5 w-5" />
      </motion.button>
      
      <motion.button
        onClick={goToNext}
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : 20
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-20"
      >
        <ChevronRight className="h-5 w-5" />
      </motion.button>
      
      
    </div>
  )
}

export function Hero() {
  const { openModal } = useAppointmentModal()

  return (
    <section className="relative bg-gradient-to-br from-secondary via-white to-secondary min-h-screen flex items-start overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
      
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 md:space-y-4 lg:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
            >
              <Award className="h-4 w-4" />
              <span>15+ Years of Excellence</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3 lg:space-y-4">
              {/* Animated Tagline as Main Headline */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
              >
                <AnimatedTagline />
              </motion.div>
              
              {/* Animated Sub-Content */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              >
                <AnimatedSubContent />
              </motion.div>
            </div>

            {/* Key Features - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
              className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-2"
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-green-600" />
                </div>
                <span className="text-sm text-gray-700">FDA Approved Equipment</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="h-3 w-3 text-blue-600" />
                </div>
                <span className="text-sm text-gray-700">Government Certified</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-purple-600" />
                </div>
                <span className="text-sm text-gray-700">Expert Medical Care</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-3 w-3 text-orange-600" />
                </div>
                <span className="text-sm text-gray-700">Prime Location</span>
              </div>
            </motion.div>

            {/* CTA Buttons - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
              className="hidden md:flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="xl"
                onClick={openModal}
                className="group"
              >
                Book Free Consultation
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>

            {/* Trust Indicators - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
              className="hidden md:flex items-center space-x-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>5.0 Rating</span>
              </div>
              <div>•</div>
              <div>1000+ Happy Patients</div>
              <div>•</div>
              <div>18 Advanced Treatments</div>
            </motion.div>
          </motion.div>

                     {/* Right Content - Image Carousel */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="relative w-full h-full mt-2 md:mt-0"
           >
             <ImageCarousel />
           </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Mobile Fixed Appointment Button */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg"
        style={{ pointerEvents: 'auto' }}
      >
        <Button
          variant="primary"
          size="lg"
          onClick={openModal}
          className="group shadow-2xl px-8 py-4 rounded-full text-lg font-semibold w-full"
        >
          Book Appointment
          <motion.div
            className="ml-2"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="h-5 w-5" />
          </motion.div>
        </Button>
      </motion.div>
    </section>
  )
}
