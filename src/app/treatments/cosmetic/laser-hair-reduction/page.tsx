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
import HeroImage1 from "../../../../../public/treatments/hairremoval/1.png"
import HeroImage2 from "../../../../../public/treatments/hairremoval/1.png"
import HeroImage3 from "../../../../../public/treatments/hairremoval/2.png"
import HeroImage4 from "../../../../../public/treatments/Laser-Hair-Reduction.webp"

const treatment = TREATMENTS.find(t => t.id === 'laser-hair-reduction');

export default function LaserHairReductionPage() {
  if (!treatment) return <div>Treatment not found</div>;

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCallClick = () => {
    window.open(`tel:+917588832221`, '_blank');
  };

  // Laser Hair Reduction specific benefits
  const laserHairReductionBenefits = [
    "Permanent hair reduction",
    "Precise and targeted treatment",
    "Suitable for all skin types",
    "Minimal discomfort and downtime",
    "Safe and FDA approved",
    "Long-lasting results"
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
                • Laser Hair Removal Treatment in Nashik
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Get Smooth, Hair-Free Skin with Confidence
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-md text-gray-600 leading-relaxed space-y-3"
              >
                <p>Tired of waxing, threading, or shaving every few days? At Aries Skin & General Clinic, Nashik, we offer advanced Laser Hair Removal (LHR) that ensures long-lasting smoothness with safety and precision.</p>
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
                  Key Features:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">✨ USFDA-approved technology</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">✨ Safe for all Indian skin types</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">✨ Performed by experienced dermatologists</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">✨ Long-lasting smoothness with safety and precision</span>
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
                  {treatment.duration}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {treatment.sessions}
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
                alt="Laser Hair Reduction Treatment" 
                  className="w-full h-[300px] md:h-[500px] object-contain"
              />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Laser Hair Removal Over Waxing & Shaving Section */}
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
              Why Choose Laser Hair Removal Over Waxing & Shaving?
            </h2>
          </motion.div>

          {/* Comparison Table */}
              <motion.div
            initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8"
          >
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-center text-sm font-semibold w-1/2">Laser Hair Removal</th>
                    <th className="px-2 py-3 text-center text-sm font-semibold text-teal-200">vs</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold w-1/2">Waxing/Shaving</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { laser: "Permanent hair reduction after 6–10 sessions", waxing: "Temporary results – hair regrows in days/weeks" },
                    { laser: "Almost painless", waxing: "Painful waxing & risk of cuts with shaving" },
                    { laser: "Cost-effective in the long run", waxing: "Cheaper initially but lifelong recurring expense" },
                    { laser: "Safe, precise & skin-friendly", waxing: "Can cause irritation, ingrown hair, and pigmentation" },
                    { laser: "Quick sessions with no downtime", waxing: "Requires frequent, time-consuming sessions" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-sm text-gray-600 w-1/2">{row.laser}</td>
                      <td className="px-2 py-3 text-center text-sm font-bold text-teal-600">vs</td>
                      <td className="px-4 py-3 text-sm text-gray-600 w-1/2">{row.waxing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          {/* Conclusion */}
              <motion.div
            initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            className="text-center"
              >
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 md:p-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                👉 Clearly, Laser Hair Removal is the smarter choice for hassle-free grooming.
                </p>
            </div>
            </motion.div>
        </div>
      </section>

      {/* Areas We Treat Section */}
      <section className="py-5 md:py-5 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Areas We Treat with Laser Hair Removal in Nashik
            </h2>
                         <p className="text-xs md:text-[15px] text-gray-600 max-w-3xl mx-5 md:mx-auto">
              At Aries Skin & General Clinic, we provide customized treatment packages for both men and women, including:
              </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Full body hair removal",
                description: "Complete body treatment for comprehensive hair reduction"
              },
              {
                title: "Facial hair removal",
                description: "Upper lip, chin, cheeks, forehead treatment"
              },
              {
                title: "Underarms",
                description: "Precise underarm hair removal for comfort"
              },
              {
                title: "Bikini & Brazilian",
                description: "Intimate area hair removal with discretion"
              },
              {
                title: "Arms & Legs",
                description: "Complete arm and leg hair reduction"
              },
              {
                title: "Chest & Back",
                description: "Men's chest and back hair removal"
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 md:p-6 h-full bg-white border border-gray-200 rounded-lg transition-all duration-300 group">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-teal-600" />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Technology We Use Section */}
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
                  alt="USFDA-approved Laser Technology" 
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
                • Advanced Technology
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Technology <span className="text-primary">We Use</span>
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
                  We use USFDA-approved laser systems designed for Indian skin and hair types.
                </p>
              </motion.div>

              {/* Technology Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Safe for all skin tones, including darker skin</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Fast, effective, and precise hair reduction</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Suitable for both fine and coarse hair</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Minimal discomfort with long-lasting results</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Safety & Side Effects Section */}
      <section className="py-5 md:py-5 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Safety & Side Effects
              </h2>
            <p className="text-xs md:text-[15px] text-gray-600 max-w-3xl mx-5 md:mx-auto">
              Laser Hair Removal at Aries Clinic is safe & dermatologist-supervised.
            </p>
            <p className="text-xs md:text-[15px] text-gray-600 max-w-3xl mx-5 md:mx-auto mt-2">
              Mild redness or irritation may occur in rare cases, but subsides within hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aftercare Tips Section */}
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
              Aftercare Tips
              </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                title: "Avoid sun exposure",
                description: "for 24–48 hours"
                },
                {
                title: "Use soothing creams",
                description: "if mild redness occurs"
                },
                {
                title: "Do not wax or pluck",
                description: "between sessions"
                },
                {
                title: "Follow dermatologist's advice",
                description: "for best results"
                }
            ].map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                <div className="p-4 md:p-6 h-full bg-gray-50 border border-gray-200 rounded-lg transition-all duration-300 group text-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform mx-auto">
                    <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-teal-600" />
                    </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">
                    {tip.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                    {tip.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Ready for Permanent Hair Reduction?
            </h2>
            <p className="text-xs md:text-md text-gray-600 mx-5">
              Join thousands of satisfied patients who have achieved smooth, hair-free skin with us
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
              href="/treatments/cosmetic"
              className="text-teal-700 text-xs sm:text-sm hover:text-teal-800 font-medium transition-colors"
            >
              ← Back to Cosmetic Treatments
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