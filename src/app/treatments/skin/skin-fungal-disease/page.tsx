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
import HeroImage1 from "../../../../../public/treatments/fungal/1.png"
import HeroImage2 from "../../../../../public/treatments/fungal/2.png"
import HeroImage3 from "../../../../../public/treatments/Medicated-Hydrafacial/Medicated-Hydrafacial-3.png"
import HeroImage4 from "../../../../../public/treatments/Medicated-Hydrafacial/Medicated-Hydrafacial-4.png"

const treatment = TREATMENTS.find(t => t.id === 'skin-fungal-disease');

export default function SkinFungalDiseaseTreatmentPage() {
  if (!treatment) return <div>Treatment not found</div>;

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCallClick = () => {
    window.open(`tel:+917588832221`, '_blank');
  };

  // Skin Fungal Disease specific benefits
  const skinFungalDiseaseBenefits = [
    "Effective treatment of fungal infections",
    "Prevents recurrence of infections",
    "Relieves itching and discomfort",
    "Improves skin appearance and health",
    "Safe and proven treatment methods",
    "Expert medical supervision"
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
                • Medical Skin Treatment
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                {treatment.name}
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-md text-gray-600 leading-relaxed space-y-3"
              >
                <p>{treatment.description}</p>
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
                    <span className="text-sm text-gray-600">Treating fungal skin infections</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Relieving itching and discomfort</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Preventing infection recurrence</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Improving skin health and appearance</span>
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
                  Medical Treatment
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
                alt="Skin Fungal Disease Treatment" 
                  className="w-full h-[300px] md:h-[500px] object-contain"
              />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Fungal Infections Guide Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                📋 Complete Medical Guide
              </motion.div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Fungal Infections: <span className="text-teal-600">Causes, Symptoms & Treatments</span>
              </h2>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                Fungal infections are among the most common skin concerns worldwide, affecting millions of people each year. They can appear in different forms—such as rashes, itching, or scaling—and if left untreated, may lead to severe discomfort and complications.
              </p>
            </div>

            {/* Side-by-Side Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="flex flex-col space-y-6">
                
                {/* What are Fungal Infections */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50 flex-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🔬</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">What are Fungal Infections?</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Fungal infections (mycoses) occur when fungi thrive in warm, moist environments. They can affect the skin, nails, hair, or even internal organs. While some infections are mild and easily treatable, others may become chronic and require ongoing medical care.
                  </p>
                </motion.div>

                {/* What is Skin Fungus */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border border-green-200/50 flex-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🦠</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">What is Skin Fungus?</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Skin fungus refers to fungal infections that specifically affect the skin. The most common causes include dermatophytes, yeasts, and molds. These infections can appear anywhere on the body, often leading to redness, itching, and discomfort.
                  </p>
                </motion.div>

                {/* How They Look */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-6 border border-orange-200/50 flex-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">👁️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">How They Look</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Fungal skin infections may appear as:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      'Red, itchy, scaly patches',
                      'Blisters or oozing areas',
                      'Discoloration of the skin',
                      'Rash with raised, defined borders',
                      'Pustules at the edge of the infected area'
                    ].map((symptom, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Common Types */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border border-purple-200/50 flex-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🏷️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Common Types</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Athlete's Foot (Tinea Pedis)",
                        description: "Itchy, burning, peeling skin between the toes. Highly contagious."
                      },
                      {
                        name: "Ringworm (Tinea Corporis)",
                        description: "Red, circular patches with raised borders, affecting skin, scalp, or nails."
                      },
                      {
                        name: "Yeast Infections (Candida Overgrowth)",
                        description: "Commonly affects skin folds, mouth, throat, or genital areas; symptoms include redness, itching, and cottage cheese-like discharge."
                      }
                    ].map((type, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{type.name}</h4>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-6">
                
                {/* Who is at Risk */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border border-red-200/50 flex-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">⚠️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Who is at Risk?</h3>
                  </div>
                  <p className="text-gray-600 mb-4">While anyone can get a fungal infection, certain individuals are at higher risk:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      'People with weakened immunity (HIV, cancer treatment, organ transplant, etc.)',
                      'Long-term or high-dose antibiotic users',
                      'Diabetic patients',
                      'Overweight individuals',
                      'Pregnant women',
                      'People who sweat excessively',
                      'Babies (diaper rash)'
                    ].map((risk, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{risk}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Causes */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl p-6 border border-yellow-200/50 flex-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🔍</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Causes</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      'Warm, humid environments',
                      'Poor hygiene practices',
                      'Sharing personal items like towels or shoes',
                      'Weak immune system',
                      'Prolonged use of antibiotics or steroids'
                    ].map((cause, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{cause}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Symptoms */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 border border-indigo-200/50 flex-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">📋</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Symptoms</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      'Persistent itching and redness',
                      'Rash with scaling or peeling',
                      'Skin discoloration',
                      'Cracks or blisters',
                      'Burning or discomfort in affected areas'
                    ].map((symptom, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Treatment Options */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-6 border border-teal-200/50 flex-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">💊</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Treatment Options</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Topical Antifungal Creams & Ointments",
                        description: "Applied directly to infected areas for mild cases."
                      },
                      {
                        title: "Oral Antifungal Medications",
                        description: "Prescribed in severe or widespread infections."
                      },
                      {
                        title: "Home Remedies (supportive care)",
                        description: "Tea tree oil, apple cider vinegar, and garlic may help mild cases but should not replace medical treatment."
                      }
                    ].map((treatment, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{treatment.title}</h4>
                          <p className="text-xs text-gray-600">{treatment.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Prevention & Care */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-6 border border-emerald-200/50 flex-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🛡️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Prevention & Care</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      'Keep skin clean and dry',
                      'Wear loose, breathable clothing',
                      'Avoid sharing personal items',
                      'Change socks and undergarments daily',
                      'Seek treatment promptly if symptoms persist'
                    ].map((prevention, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{prevention}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* When to See Doctor */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200/50 flex-1"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">👨‍⚕️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">When to See a Doctor?</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    If your symptoms last for more than 1–2 weeks, worsen despite treatment, or spread to sensitive areas like the face or genitals, consult a dermatologist immediately.
                  </p>
                </motion.div>

              </div>
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
                At Aries Skin & General Clinic, we provide professional, effective, and safe fungal infection treatment under the guidance of skilled doctors and trained professionals. We ensure complete recovery with proper medical care and prevention guidance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {[
                {
                  icon: Award,
                  title: "Medical Expertise",
                  description: "Expert medical care with proper diagnosis and treatment"
                },
                {
                  icon: Users,
                  title: "Personalized Care",
                  description: "Individualized treatment plans for each patient"
                },
                {
                  icon: Shield,
                  title: "Safe Treatment",
                  description: "Safe, effective, and evidence-based medical treatments"
                },
                {
                  icon: Star,
                  title: "Proven Results",
                  description: "High success rate with satisfied patients"
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
                ✨ Your journey to healthy, infection-free skin starts at Aries Skin & General Clinic.
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
              Ready to Treat Your Fungal Infection?
            </h2>
            <p className="text-xs md:text-md text-gray-600 mx-5">
              Join thousands of satisfied patients who have achieved healthy, infection-free skin with us
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