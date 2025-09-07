"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import gallery images
import Gallery1 from "../../../public/gallery/1.jpeg"
import Gallery2 from "../../../public/gallery/2.jpeg"
import Gallery3 from "../../../public/gallery/3.jpeg"
import Gallery4 from "../../../public/gallery/4.jpeg"
import Gallery5 from "../../../public/gallery/5.jpeg"
import Gallery6 from "../../../public/gallery/6.jpeg"
import Gallery7 from "../../../public/gallery/7.jpeg"
import Gallery8 from "../../../public/gallery/8.jpeg"
import Gallery9 from "../../../public/gallery/9.jpeg"
import Gallery10 from "../../../public/gallery/10.jpeg"

// Import clinic images
import ClinicImg from "../../../public/about/clinic.png"
import DoctorImg from "../../../public/about/doctor.png"

const galleryImages = [
  {
    id: 1,
    src: Gallery1.src,
    alt: "Clinic Interior - Modern Treatment Room",
    category: "Interior"
  },
  {
    id: 2,
    src: Gallery2.src,
    alt: "Clinic Interior - Reception Area",
    category: "Interior"
  },
  {
    id: 3,
    src: Gallery3.src,
    alt: "Clinic Interior - Waiting Area",
    category: "Interior"
  },
  {
    id: 4,
    src: Gallery4.src,
    alt: "Clinic Interior - Treatment Room",
    category: "Interior"
  },
  {
    id: 5,
    src: Gallery5.src,
    alt: "Clinic Interior - Consultation Room",
    category: "Interior"
  },
  {
    id: 6,
    src: Gallery6.src,
    alt: "Clinic Interior - Modern Equipment",
    category: "Equipment"
  },
  {
    id: 7,
    src: Gallery7.src,
    alt: "Clinic Interior - Sterile Environment",
    category: "Equipment"
  },
  {
    id: 8,
    src: Gallery8.src,
    alt: "Clinic Interior - Advanced Technology",
    category: "Equipment"
  },
  {
    id: 9,
    src: Gallery9.src,
    alt: "Clinic Interior - Professional Setup",
    category: "Equipment"
  },
  {
    id: 10,
    src: Gallery10.src,
    alt: "Clinic Interior - Additional View",
    category: "Interior"
  },
  {
    id: 11,
    src: ClinicImg.src,
    alt: "Aries Skin and General Clinic - Exterior View",
    category: "Exterior"
  },
  {
    id: 12,
    src: DoctorImg.src,
    alt: "Dr. Shweta Sonje - Medical Director",
    category: "Team"
  }
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLImageElement>(null)

  const filteredImages = galleryImages

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.5, 0.5))
  }

  const resetZoom = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
      setSelectedImage(filteredImages[previousIndex].id)
      setZoom(1)
      setPosition({ x: 0, y: 0 })
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
      setSelectedImage(filteredImages[nextIndex].id)
      setZoom(1)
      setPosition({ x: 0, y: 0 })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      {/* Hero Section */}
      <section className="pt-12 pb-20">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-6">
              Clinic <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take a virtual tour of our state-of-the-art clinic and see the modern facilities 
              where we provide world-class treatments
            </p>
          </motion.div>


          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white transition-all duration-300 group-hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-gray-400/30 backdrop-blur-sm rounded-full p-2 hover:bg-gray-400/50 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-400/30 backdrop-blur-sm rounded-full p-2 hover:bg-gray-400/50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-400/30 backdrop-blur-sm rounded-full p-2 hover:bg-gray-400/50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-4 right-4 z-10 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleZoomIn()
                }}
                className="bg-gray-400/30 backdrop-blur-sm rounded-full p-2 hover:bg-gray-400/50 transition-colors"
              >
                <ZoomIn className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleZoomOut()
                }}
                className="bg-gray-400/30 backdrop-blur-sm rounded-full p-2 hover:bg-gray-400/50 transition-colors"
              >
                <ZoomOut className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  resetZoom()
                }}
                className="bg-gray-400/30 backdrop-blur-sm rounded-full p-2 hover:bg-gray-400/50 transition-colors"
              >
                <RotateCcw className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Image Container */}
            <div 
              className="overflow-hidden rounded-lg"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
            >
              <img
                ref={imageRef}
                src={filteredImages.find(img => img.id === selectedImage)?.src}
                alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                className="w-full h-full max-h-[90vh] object-contain transition-transform duration-200"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                  transformOrigin: 'center center'
                }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-400/30 backdrop-blur-sm rounded-full px-4 py-2">
              <p className="text-white text-sm">
                {filteredImages.findIndex(img => img.id === selectedImage) + 1} of {filteredImages.length}
              </p>
            </div>

            {/* Zoom Level Indicator */}
            {zoom !== 1 && (
              <div className="absolute bottom-16 right-4 bg-gray-400/30 backdrop-blur-sm rounded-full px-3 py-1">
                <p className="text-white text-sm font-medium">
                  {Math.round(zoom * 100)}%
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}
