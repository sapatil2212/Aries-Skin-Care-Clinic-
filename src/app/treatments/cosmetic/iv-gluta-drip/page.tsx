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
import HeroImage1 from "../../../../../public/treatments/Glutathione/1.png"

import HeroImage2 from "../../../../../public/treatments/Glutathione/2.png"
import HeroImage3 from "../../../../../public/treatments/Medicated-Hydrafacial/Medicated-Hydrafacial-3.png"
import HeroImage4 from "../../../../../public/treatments/Medicated-Hydrafacial/Medicated-Hydrafacial-4.png"

const treatment = TREATMENTS.find(t => t.id === 'iv-gluta-drip');

export default function IVGlutaDripPage() {
  if (!treatment) return <div>Treatment not found</div>;

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCallClick = () => {
    window.open(`tel:+917588832221`, '_blank');
  };

  // IV Gluta Drip specific benefits
  const ivGlutaDripBenefits = [
    "Brightens and lightens skin tone",
    "Reduces dark spots and pigmentation",
    "Boosts skin hydration and glow",
    "Improves overall skin texture",
    "Safe and natural treatment",
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
                • Glutathione IV Drip Therapy in Nashik
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Illuminate Your Radiance from Within – Reveal Your Natural Glow with Glutathione IV Therapy 
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-md text-gray-600 leading-relaxed space-y-3"
              >
                <p>At Aries Skin & General Clinic, Nashik, we offer advanced Glutathione IV Drip Therapy – a scientifically backed treatment that works from the inside out to rejuvenate your skin.</p>
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
                  Safe Treatment
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
                alt="IV Gluta Drip Treatment" 
                  className="w-full h-[300px] md:h-[500px] object-contain"
              />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
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
              Overview – Best Glutathione IV Treatment in Nashik
            </h2>
            <p className="text-xs md:text-[15px] text-gray-600 max-w-4xl mx-5 md:mx-auto">
              Glutathione is a powerful natural antioxidant that helps fight free radicals, detoxifies your body, and restores skin health. With regular sessions, it can:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: " Reduce pigmentation and melasma",
                description: "Targets dark spots and uneven skin tone"
              },
              {
                title: " Brighten & even out skin tone",
                description: "Achieves natural, radiant complexion"
              },
              {
                title: " Minimize wrinkles and fine lines",
                description: "Anti-aging benefits for youthful skin"
              },
              {
                title: " Detoxify your system for overall wellness",
                description: "Comprehensive body detoxification"
              }
            ].map((benefit, index) => (
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
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              This therapy is also a favorite among celebrities and athletes for its skin-enhancing, anti-aging, and body-rejuvenating effects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Glutathione Section */}
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
                  alt="What is Glutathione" 
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
                • What is Glutathione?
          </motion.div>
          
              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Master <span className="text-primary">Antioxidant</span> for Skin Health
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
                  Glutathione is a master antioxidant naturally produced in the body. But as we age, its levels decline, leading to:
                </p>
              </motion.div>

              {/* Problems */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-md text-gray-700">Dullness & pigmentation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-md text-gray-700">Wrinkles & sagging</span>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-md text-gray-700">Uneven skin tone</span>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-md text-gray-700">Weakened immunity</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xs md:text-[15px] text-gray-600 leading-relaxed"
              >
                <p>
                  Glutathione IV replenishes these levels, helping you look brighter, fresher, and healthier.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Benefits of Glutathione IV Drip Therapy Section */}
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
              Benefits of Glutathione IV Drip Therapy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Lightens & brightens skin naturally",
                description: "Achieves natural skin lightening from within"
              },
              {
                title: "Evens out pigmentation & dark spots",
                description: "Targets and reduces uneven skin tone"
              },
              {
                title: "Reduces wrinkles, fine lines & early signs of aging",
                description: "Anti-aging benefits for youthful appearance"
              },
              {
                title: "Protects skin from UV & environmental damage",
                description: "Shields skin from harmful external factors"
              },
              {
                title: "Detoxifies liver & removes toxins",
                description: "Comprehensive body detoxification"
              },
              {
                title: "Strengthens immunity & boosts energy",
                description: "Enhances overall health and vitality"
              },
              {
                title: "Improves hair & nail health",
                description: "Benefits extend beyond skin to hair and nails"
              },
              {
                title: "Relieves jet lag & fatigue",
                description: "Restores energy and reduces tiredness"
              }
            ].map((benefit, index) => (
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
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Glutathione Helps With Section */}
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
              Conditions Glutathione Helps With
              </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: " Uneven & dark skin tone",
                description: "Addresses overall skin discoloration and unevenness"
              },
              {
                title: " Melasma & hyperpigmentation",
                description: "Targets stubborn dark patches and spots"
              },
              {
                title: " Fine lines, dark circles & wrinkles",
                description: "Reduces signs of aging and fatigue"
              },
              {
                title: " Sun damage & tanning",
                description: "Reverses effects of UV exposure"
              },
              {
                title: " Post-travel fatigue & jet lag",
                description: "Restores energy after long journeys"
              },
              {
                title: " Skin dullness & lack of glow",
                description: "Brings back natural radiance and brightness"
              }
            ].map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                <div className="p-4 md:p-6 h-full bg-gradient-to-br from-teal-50 to-blue-50 border-0 rounded-lg transition-all duration-300 group">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-teal-600" />
                    </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">
                    {condition.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                    {condition.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Types of Glutathione IV Drips at Aries Clinic Section */}
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
              Types of Glutathione IV Drips at Aries Clinic
            </h2>
                         <p className="text-xs md:text-[15px] text-gray-600 max-w-3xl mx-5 md:mx-auto">
              We offer customized Glutathione drips depending on your skin needs:
              </p>
              </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Single / Double / Triple Boosters",
                description: "Gradual skin brightening & detox"
              },
              {
                title: "Cinderella Drip",
                description: "Celebrity-favorite cocktail with Glutathione, Vitamin C, B Complex, Alpha Lipoic Acid & more – for ultimate glow & anti-aging"
              },
              {
                title: "Bella Drip",
                description: "Premium infusion designed for faster results & overall rejuvenation"
              }
            ].map((drip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 md:p-6 h-full bg-white border border-gray-200 rounded-lg transition-all duration-300 group">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <Droplets className="h-4 w-4 md:h-6 md:w-6 text-teal-600" />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">
                    {drip.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {drip.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Safety & Precautions Section */}
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
              Safety & Precautions
              </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: " Performed only by qualified dermatologists at Aries Clinic, Nashik",
                description: "Expert medical supervision ensures safety"
              },
              {
                title: " USFDA-approved formulations",
                description: "High-quality, approved ingredients"
              },
              {
                title: "Kidney function test recommended before treatment",
                description: "Pre-treatment screening for safety"
              },
              {
                title: "Zero downtime & safe when administered by experts",
                description: "Minimal side effects with proper care"
              }
            ].map((safety, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                <div className="p-4 md:p-6 h-full bg-white border border-gray-200 rounded-lg transition-all duration-300 group">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-4 w-4 md:h-6 md:w-6 text-teal-600" />
                    </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">
                    {safety.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                    {safety.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            className="text-center mt-8"
              >
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Possible mild side effects (rare): Temporary rashes or mild stomach discomfort, which subside quickly.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Results – Before & After Section */}
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
              Results – Before & After
              </h2>
            <p className="text-xs md:text-[15px] text-gray-600 max-w-3xl mx-5 md:mx-auto">
              Patients at Aries Clinic, Nashik have seen:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Noticeable glow & fairness after a few sessions",
                description: "Visible improvement in skin brightness"
              },
              {
                title: "Reduction in pigmentation & melasma",
                description: "Significant decrease in dark spots"
              },
              {
                title: "Smoother, more youthful skin",
                description: "Enhanced skin texture and appearance"
              }
            ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                <div className="p-4 md:p-6 h-full bg-white border border-gray-200 rounded-lg transition-all duration-300 group">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <Star className="h-4 w-4 md:h-6 md:w-6 text-teal-600" />
                    </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">
                    {result.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                    {result.description}
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
              Ready to Illuminate Your Radiance from Within?
            </h2>
            <p className="text-xs md:text-md text-gray-600 mx-5">
              Join thousands of satisfied patients who have achieved radiant, glowing skin with our Glutathione IV Drip Therapy
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