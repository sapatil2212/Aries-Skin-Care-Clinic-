'use client';

import { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import GalleryImage1 from "../../../public/home-gallery/gallery-1.webp"
import GalleryImage2 from "../../../public/home-gallery/gallery-2.webp"
import GalleryImage3 from "../../../public/home-gallery/gallery-3.webp"
import GalleryImage4 from "../../../public/home-gallery/gallery-4.webp"
import GalleryImage5 from "../../../public/home-gallery/gallery-5.webp"
import GalleryImage6 from "../../../public/home-gallery/gallery-6.webp"
import GalleryImage7 from "../../../public/home-gallery/gallery-7.webp"
import GalleryImage8 from "../../../public/home-gallery/gallery-8.webp"
import GalleryImage9 from "../../../public/home-gallery/gallery-9.webp"
interface GalleryImage {
  id: number;
  src: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: GalleryImage1.src
  },
  {
    id: 2,
    src: GalleryImage2.src
  },
  {
    id: 3,
    src: GalleryImage3.src
  },
  {
    id: 4,
    src: GalleryImage4.src
  },
  {
    id: 5,
    src: GalleryImage5.src
  },
  {
    id: 6,
    src: GalleryImage6.src
  },
  {
    id: 7,
    src: GalleryImage7.src
  },
  {
    id: 8,
    src: GalleryImage8.src
  },
  {
    id: 9,
    src: GalleryImage9.src
  }
];

export function InteractiveGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const scrollPositionRef = useRef<number>(0);

  // Smooth auto-scroll using requestAnimationFrame
  const smoothAutoScroll = () => {
    if (!scrollContainerRef.current || isHovered) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    const container = scrollContainerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    // Increment scroll position
    scrollPositionRef.current += 0.1; // Adjust speed here (0.5px per frame)

    // Reset when reaching the end
    if (scrollPositionRef.current >= maxScroll) {
      scrollPositionRef.current = 0;
    }

    // Apply the scroll
    container.scrollLeft = scrollPositionRef.current;

    // Continue the animation
    animationFrameRef.current = requestAnimationFrame(smoothAutoScroll);
  };

  const startAutoScroll = () => {
    if (!animationFrameRef.current && !isHovered) {
      animationFrameRef.current = requestAnimationFrame(smoothAutoScroll);
    }
  };

  const stopAutoScroll = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  // Handle mouse enter/leave for pause on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Sync scroll position when user manually scrolls
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollPositionRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  // Initialize auto-scroll
  useEffect(() => {
    if (!isHovered) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
  }, [isHovered]);

  // Cleanup on unmount
  useEffect(() => {
    return () => stopAutoScroll();
  }, []);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setZoomLevel(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setZoomLevel(1);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIndex]);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isModalOpen) return;
    
    switch (e.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowRight':
        nextImage();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      case '+':
        handleZoomIn();
        break;
      case '-':
        handleZoomOut();
        break;
      case '0':
        resetZoom();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImage]);

  return (
    <section className="py-5 sm:py-5 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-secondary via-white to-secondary backdrop-blur-sm border border-gray-200 rounded-3xl p-8 lg:p-12 ">
          
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our{" "}
              <span className="text-primary">
                Modern
              </span>{" "}
              Facilities
            </h2>
            <p className="text-xs md:text-md text-gray-600 leading-relaxed mx-3 md:mx-32">
              Take a virtual tour of our state-of-the-art dermatology clinic and discover the advanced technology and comfortable environment we provide for your care
            </p>
          </div>


          {/* Gallery Grid */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onScroll={handleScroll}
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Duplicate images for seamless loop */}
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 w-80 h-64 group cursor-pointer"
                onClick={() => openModal(image)}
                style={{
                  animation: 'fadeInOut 0.8s ease-in-out',
                  opacity: 0,
                  animationFillMode: 'forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={image.src}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal - Outside main container to avoid overlap */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-[95vw] h-[90vh] max-w-6xl">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 z-50 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Zoom Controls */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <button
                    onClick={handleZoomOut}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-lg p-2 transition-all duration-300"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button
                    onClick={resetZoom}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-lg p-2 transition-all duration-300"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleZoomIn}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-lg p-2 transition-all duration-300"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>

                {/* Image */}
                {selectedImage && (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedImage.src}
                      className="max-w-full max-h-full object-contain transition-transform duration-300"
                      style={{ transform: `scale(${zoomLevel})` }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          50% {
            opacity: 0.8;
            transform: translateY(10px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
