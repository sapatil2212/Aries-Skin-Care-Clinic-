"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AppointmentModal } from '@/components/appointment-modal';
import { 
  Clock, 
  Calendar, 
  Shield, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Award,
  Users,
  Droplets,
  X
} from 'lucide-react';
import { TREATMENTS } from '@/lib/constants';
import Link from 'next/link';
import HeroImage1 from "../../../../../public/treatments/Medicated-Hydrafacial/Medicated-Hydrafacial.png"
import HeroImage2 from "../../../../../public/treatments/Medicated-Hydrafacial/Medicated-Hydrafacial-2.png"
import HeroImage3 from "../../../../../public/treatments/Medicated-Hydrafacial/Medicated-Hydrafacial-3.png"
import HeroImage4 from "../../../../../public/treatments/Medicated-Hydrafacial/Medicated-Hydrafacial-4.png"

const treatment = TREATMENTS.find(t => t.id === 'carbon-peel');

export default function CarbonPeelHollywoodFacialPage() {
  if (!treatment) return <div>Treatment not found</div>;

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCallClick = () => {
    window.open(`tel:+917588832221`, '_blank');
  };

  // Hollywood Peel specific benefits
  const hollywoodPeelBenefits = [
    "Reduces fine lines & wrinkles",
    "Minimizes pores & acne",
    "Evens out skin tone & pigmentation",
    "Provides an instant glow",
    "Short, safe & painless procedure",
    "No downtime – resume daily activities immediately"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-5 md:py-5 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 px-4 md:px-0"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-medium text-gray-500 uppercase tracking-wider"
              >
                • Advanced Skin Treatment
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Hollywood Peel – Advanced Skin Rejuvenation
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-md text-gray-600 leading-relaxed space-y-3"
              >
                <p>Also known as the Hollywood Spectra Peel or Carbon Laser Peel, this treatment is a quick, safe, and effective skin rejuvenation procedure loved by celebrities. A thin layer of medical-grade carbon solution is applied to the skin and then gently targeted with a laser.</p>
              </motion.div>

              {/* Treatment Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  This treatment helps in:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Exfoliating dead skin cells</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Killing acne-causing bacteria</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Stimulating collagen production</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Improving overall skin tone and texture</span>
                  </div>
              </div>
              </motion.div>

              {/* Treatment Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 text-sm text-gray-600"
              >
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  30 minutes
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  4 sessions recommended
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  FDA Approved
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-row gap-4 pt-2"
              >
                <Button
                  onClick={handleAppointmentClick}
                  className="flex-1 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium group"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button
                  onClick={handleCallClick}
                  variant="outline"
                  className="flex-1 px-6 py-3 text-sm font-medium rounded-lg border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white transition-all duration-300"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
            >
              <img 
                  src={HeroImage1.src}
                alt="Hollywood Peel Treatment" 
                  className="w-full h-[300px] md:h-[500px] object-contain"
              />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Hollywood Peel Section */}
      <section className="py-5 md:py-5 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

            {/* Left Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >
                <img 
                  src={HeroImage2.src}
                  alt="Hollywood Peel Treatment Process" 
                  className="w-full h-[300px] md:h-[500px] object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Right Content */}
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="space-y-4 px-4 md:px-0 order-1 lg:order-2"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-medium text-gray-500 uppercase tracking-wider"
              >
                • What is a Hollywood Peel?
          </motion.div>
          
              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Advanced <span className="text-primary">Skin Rejuvenation</span> Treatment
              </motion.h2>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xs md:text-[15px] text-gray-600 leading-relaxed space-y-3"
              >
                <p>
                  The carbon absorbs light and heat, which helps to exfoliate dead skin cells, kill acne-causing bacteria, stimulate collagen production, and improve overall skin tone and texture.
                </p>
                <p>
                  The result? Glowing, refreshed, and younger-looking skin with no downtime. Each session takes about 30 minutes and is completely painless.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-5 md:py-5 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Hollywood Peel
            </h2>
                         <p className="text-xs md:text-[15px] text-gray-600 max-w-3xl mx-5 md:mx-auto">
                Experience the transformative benefits of our advanced Hollywood Spectra Laser technology
              </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {hollywoodPeelBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-3 md:p-6 h-full bg-gradient-to-br from-blue-50 to-green-50 border-0 rounded-lg transition-all duration-300 group">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                    {benefit}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Achieve radiant, healthy skin with our proven treatment approach
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Treatment Process Section */}
      <section className="py-5 md:py-5 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            
            {/* Left Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >
                <img 
                  src={HeroImage3.src}
                  alt="Hollywood Peel Treatment Process" 
                  className="w-full h-[300px] md:h-[500px] object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Right Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 px-4 md:px-0"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-medium text-gray-500 uppercase tracking-wider"
              >
                • How is the Treatment Performed?
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                How Our <span className="text-primary">Treatment Works</span>
              </motion.h2>

              {/* Process Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                  <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Carbon Application</h3>
                    <p className="text-xs md:text-md text-gray-600">A thin layer of carbon solution is applied to the face</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Deep Penetration</h3>
                    <p className="text-xs md:text-md text-gray-600">The solution penetrates deep into pores and binds with dead skin, oil, and impurities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Laser Treatment</h3>
                    <p className="text-xs md:text-md text-gray-600">A specialized Hollywood laser is then passed over the skin</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                    </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Vaporization</h3>
                    <p className="text-xs md:text-md text-gray-600">The carbon absorbs the laser energy, causing dead cells and impurities to be vaporized instantly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Collagen Stimulation</h3>
                    <p className="text-xs md:text-md text-gray-600">Collagen production is stimulated, leaving the skin smoother, firmer, and radiant</p>
                </div>
              </div>
                
              </motion.div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* How Often Should You Do It Section */}
      <section className="py-5 md:py-5 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How Often Should You Do It?
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
              {[
                {
                  title: "Recommended Sessions",
                  description: "4 sessions, spaced 4–6 weeks apart for best results"
                },
                {
                  title: "Quick Pre-Event Treatment",
                  description: "Works as a quick pre-event facial if you need instant radiance"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 md:p-6 h-full bg-white border border-gray-200 rounded-lg transition-all duration-300 group text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform mx-auto">
                      <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Can Get Hollywood Peel Section */}
      <section className="py-5 md:py-5 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 px-4 md:px-0"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-medium text-gray-500 uppercase tracking-wider"
              >
                • Who Can Get a Hollywood Peel?
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Perfect For <span className="text-primary">Most Skin Types</span>
              </motion.h2>

              {/* Suitable For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-md sm:text-lg font-semibold text-gray-900">Hollywood Peel is suitable for most skin types and is especially beneficial for:</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-md text-gray-700">Dull & uneven skin tone</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-md text-gray-700">Fine lines & wrinkles</span>
                    </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-md text-gray-700">Enlarged pores</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-md text-gray-700">Pigmentation & tanning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-md text-gray-700">Acne & oily skin</span>
                  </div>
                </div>
              </motion.div>

              {/* Not Suitable For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-gray-900">⚠️ Special Note:</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-md text-gray-700">People with very dry skin should moisturize well after treatment, as the peel may temporarily cause dryness</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >
                <img 
                  src={HeroImage4.src}
                  alt="Hollywood Peel for Everyone" 
                  className="w-full h-[300px] md:h-[500px] object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recovery & Aftercare Section */}
      <section className="py-5 md:py-5 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Recovery & Aftercare
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {[
                {
                  title: "No Downtime",
                  description: "You can return to normal routine right after treatment"
                },
                {
                  title: "Mild Redness",
                  description: "Mild redness or irritation may occur but subsides quickly"
                },
                {
                  title: "Post-Treatment Care",
                  description: "Use a good moisturizer & sunscreen post-treatment to protect and hydrate your skin"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 md:p-6 h-full bg-white border border-gray-200 rounded-lg transition-all duration-300 group text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform mx-auto">
                      <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Aries Section */}
      <section className="py-5 md:py-5 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Aries Skin & General Clinic?
              </h2>
              <p className="text-xs md:text-md text-gray-600 max-w-3xl mx-auto">
                At Aries Skin & General Clinic, we use the latest Hollywood Spectra Laser technology under the care of experienced doctors and trained staff. We ensure safe, painless, and hygienic procedures with customized treatment plans for your skin type and affordable pricing with celebrity-level results.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {[
                {
                  icon: Award,
                  title: "Expert Care",
                  description: "Safe, painless, and hygienic procedures"
                },
                {
                  icon: Users,
                  title: "Customized Plans",
                  description: "Customized treatment plans for your skin type"
                },
                {
                  icon: Shield,
                  title: "Advanced Technology",
                  description: "Latest Hollywood Spectra Laser technology"
                },
                {
                  icon: Star,
                  title: "Affordable Results",
                  description: "Affordable pricing with celebrity-level results"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 md:p-6 h-full bg-white border border-gray-200 rounded-lg transition-all duration-300 group text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform mx-auto">
                      <item.icon className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-xs sm:text-lg font-medium text-gray-800">
                ✨ If you want instant glow and long-lasting rejuvenation, Hollywood Peel at Aries Skin & General Clinic is the perfect choice.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 md:py-5 bg-white mx-5">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-2 sm:space-y-6"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-xs md:text-md text-gray-600 mx-5">
              Join thousands of satisfied patients who have achieved their skin goals with us
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <Button
                onClick={handleAppointmentClick}
                className="flex-1 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium group"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
              
              <Button
                onClick={handleCallClick}
                variant="outline"
                className="flex-1 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white px-6 py-3 rounded-lg font-medium"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>

            <div className="flex flex-row items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                1000+ Happy Patients
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                5.0 Rating
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                15+ Years Experience
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-5 md:py-5 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <div className="flex flex-row items-center justify-between gap-4">
            <Link 
              href="/treatments/skin"
              className="text-teal-700 text-xs sm:text-sm hover:text-teal-800 font-medium transition-colors"
            >
              ← Back to Skin Care & Treatments
            </Link>
            
            <Link 
              href="/treatments"
              className="text-teal-700 hover:text-teal-800 font-medium text-xs sm:text-sm transition-colors"
            >
              View All Treatments →
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal 
        open={isAppointmentModalOpen}
        onOpenChange={setIsAppointmentModalOpen}
      />
    </div>
  );
}