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
import HeroImage1 from "../../../../../public/treatments/hair/2.png"
import HeroImage2 from "../../../../../public/treatments/hair/1.png"
import HeroImage3 from "../../../../../public/treatments/hair/3.png"
import HeroImage4 from "../../../../../public/treatments/hair/3.png"

const treatment = TREATMENTS.find(t => t.id === 'prp-gfc-hair');

export default function PRPGFCforHairPage() {
  if (!treatment) return <div>Treatment not found</div>;

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCallClick = () => {
    window.open(`tel:+917588832221`, '_blank');
  };

  // PRP GFC Hair specific benefits
  const prpGfcHairBenefits = [
    "Stimulates natural hair growth",
    "Reduces hair fall and thinning",
    "Improves hair density and thickness",
    "Safe and natural treatment",
    "No side effects or downtime",
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
                • Advanced Hair Treatment
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
                <p>PRP (Platelet-Rich Plasma) therapy is a safe, non-surgical hair restoration procedure designed to combat thinning hair and hair loss. By using the patient's own blood plasma enriched with platelets, PRP stimulates the natural growth cycle of hair follicles, leading to thicker, stronger, and healthier hair over time.</p>
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
                  Key Benefits:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Stimulates Hair Growth – Promotes stronger and denser hair</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Minimally Invasive – Simple injections, no surgery required</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Natural Healing – Uses the body's own plasma</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Quick Recovery – Minimal downtime</span>
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
                  Natural Treatment
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
                alt="PRP GFC Hair Treatment" 
                  className="w-full h-[300px] md:h-[500px] object-contain"
              />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRP Hair Restoration Treatment Section */}
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
                  alt="PRP Hair Restoration Treatment" 
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
                🩸 PRP Hair Restoration Treatment
          </motion.div>
          
              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                PRP Hair <span className="text-primary">Restoration</span> Treatment
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
                  PRP (Platelet-Rich Plasma) therapy is a safe, non-surgical hair restoration procedure designed to combat thinning hair and hair loss. By using the patient's own blood plasma enriched with platelets, PRP stimulates the natural growth cycle of hair follicles, leading to thicker, stronger, and healthier hair over time.
                </p>
              </motion.div>

              {/* How PRP Works */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-gray-900">How PRP Works</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">A small sample of blood is drawn from the patient.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">The blood is processed in a centrifuge to separate platelet-rich plasma from other components.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">This concentrated PRP, rich in growth factors, is carefully injected into the scalp.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Growth factors improve blood circulation, activate dormant follicles, and extend the natural growth phase of hair.</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRP Benefits Section */}
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
              Benefits of PRP Hair Treatment
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Stimulates Hair Growth",
                description: "Promotes stronger and denser hair"
              },
              {
                title: "Minimally Invasive",
                description: "Simple injections, no surgery required"
              },
              {
                title: "Natural Healing",
                description: "Uses the body's own plasma, reducing the risk of side effects"
              },
              {
                title: "Improves Hair Thickness & Strength",
                description: "Encourages healthier, shinier strands"
              },
              {
                title: "Quick Recovery",
                description: "Minimal downtime, patients can resume normal activities soon after"
              },
              {
                title: "Cost-Effective Solution",
                description: "Affordable treatment option with proven results"
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
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
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

          {/* Ideal For Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 bg-white rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-center">Ideal For</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Early-stage hair thinning</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Men and women experiencing gradual hair loss</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Patients looking for natural, non-surgical options</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GFC Hair Restoration Treatment Section */}
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
                🌱 GFC Hair Restoration Treatment
              </motion.div>
          
              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                GFC Hair <span className="text-primary">Restoration</span> Treatment
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
                  GFC (Growth Factor Concentrate) therapy is an advanced, next-generation hair restoration treatment. It uses concentrated growth factors derived from the patient's own blood to rejuvenate hair follicles and promote long-lasting hair growth. Known for its superior results, GFC has become one of the most trusted and effective methods for tackling hair loss.
                </p>
              </motion.div>

              {/* How GFC Works */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-gray-900">How GFC Works</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Blood is drawn from the patient and processed using advanced techniques.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Growth factors are extracted and concentrated into a highly potent solution.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">The concentrate is injected into targeted areas of the scalp.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">The growth factors nourish and strengthen follicles, reducing hair fall and boosting regeneration.</span>
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
                  src={HeroImage3.src}
                  alt="GFC Hair Restoration Treatment" 
                  className="w-full h-[300px] md:h-[500px] object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GFC Benefits Section */}
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
              Benefits of GFC Hair Treatment
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Highly Effective",
                description: "Provides a higher concentration of growth factors compared to PRP"
              },
              {
                title: "Strengthens Hair Follicles",
                description: "Reduces hair fall and supports long-term growth"
              },
              {
                title: "Promotes Healthy, Thick Hair",
                description: "Revitalizes follicles for stronger strands"
              },
              {
                title: "Safe & Natural",
                description: "Derived from the patient's own blood, eliminating allergy risks"
              },
              {
                title: "Long-Lasting Results",
                description: "Many patients report sustained improvements with regular sessions"
              },
              {
                title: "Faster Recovery Time",
                description: "Minimal downtime with quick return to daily activities"
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
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
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


      {/* PRP vs GFC Comparison Section */}
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
              PRP vs GFC: Which Hair Restoration Treatment is Right for You?
            </h2>
            <p className="text-xs md:text-[15px] text-gray-600 max-w-4xl mx-auto">
              Hair restoration treatments are evolving, and PRP (Platelet-Rich Plasma) and GFC (Growth Factor Concentrate) are two of the most popular therapies. Both use your body's natural healing abilities to stimulate hair growth—but they differ in technique, effectiveness, and results.
            </p>
          </motion.div>

          {/* Comparison Points */}
          <div className="space-y-8 mb-8">
            {[
              {
                title: "1. Treatment Process",
                prp: "Blood is processed to separate platelet-rich plasma, which is then injected into the scalp.",
                gfc: "Advanced processing extracts and concentrates only the essential growth factors before injecting them into the scalp.",
                keyDifference: "GFC delivers a higher concentration of pure growth factors compared to PRP."
              },
              {
                title: "2. Effectiveness",
                prp: "Stimulates hair growth gradually, with visible improvements over multiple sessions.",
                gfc: "Provides faster and more noticeable results due to its concentrated formulation.",
                keyDifference: "GFC is often more effective for moderate-to-severe hair loss, while PRP works best in early stages."
              },
              {
                title: "3. Safety",
                prp: "100% safe and natural, as it uses your own plasma.",
                gfc: "Equally safe and natural, with the added benefit of fewer impurities since only growth factors are injected.",
                keyDifference: "Both treatments are safe and carry minimal risk."
              },
              {
                title: "4. Duration & Results",
                prp: "Results are gradual; multiple sessions are needed for best outcomes.",
                gfc: "Results can be faster and longer-lasting with fewer sessions."
              },
              {
                title: "5. Cost",
                prp: "More affordable, widely available.",
                gfc: "Slightly more expensive due to advanced preparation and concentration of growth factors."
              }
            ].map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">{comparison.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold text-sm">🩸</span>
                      </div>
                      <h4 className="font-semibold text-gray-900">PRP Hair Treatment</h4>
                    </div>
                    <p className="text-sm text-gray-600">{comparison.prp}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-green-600 font-bold text-sm">🌱</span>
                      </div>
                      <h4 className="font-semibold text-gray-900">GFC Hair Treatment</h4>
                    </div>
                    <p className="text-sm text-gray-600">{comparison.gfc}</p>
                  </div>
                </div>
                {comparison.keyDifference && (
                  <div className="mt-4 p-3 bg-teal-50 border border-teal-200 rounded-lg">
                    <p className="text-sm text-teal-800">
                      <span className="font-semibold">✅ Key Difference:</span> {comparison.keyDifference}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-6 text-center">Quick Comparison Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">PRP Hair Treatment 🩸</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">GFC Hair Treatment 🌱</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Source", prp: "Platelet-rich plasma from blood", gfc: "Concentrated growth factors from blood" },
                    { feature: "Concentration", prp: "Moderate", gfc: "High & pure" },
                    { feature: "Effectiveness", prp: "Best for early-stage hair loss", gfc: "Effective for moderate-to-severe hair loss" },
                    { feature: "Results", prp: "Gradual improvement", gfc: "Faster, longer-lasting" },
                    { feature: "Sessions Required", prp: "Multiple", gfc: "Fewer" },
                    { feature: "Cost", prp: "Relatively affordable", gfc: "Higher (advanced process)" },
                    { feature: "Safety", prp: "Very safe", gfc: "Very safe" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 text-center">{row.prp}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 text-center">{row.gfc}</td>
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
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-center">Conclusion</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <h4 className="font-semibold text-gray-900 mb-2">Choose PRP if:</h4>
                <p className="text-sm text-gray-600">You're in the early stages of hair thinning, looking for a cost-effective, natural solution.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Choose GFC if:</h4>
                <p className="text-sm text-gray-600">You want faster, longer-lasting results and are willing to invest in an advanced treatment.</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                💡 <span className="font-semibold">For best advice, consult with our specialists at Aries Skin & General Clinic</span> to determine which treatment suits your hair restoration goals.
              </p>
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
                At Aries Skin & General Clinic, we provide safe, effective, and natural hair restoration treatments under the guidance of skilled doctors and trained professionals. We ensure optimal results with proper aftercare guidance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {[
                {
                  icon: Award,
                  title: "Expert Care",
                  description: "Expert hair restoration care with modern equipment"
                },
                {
                  icon: Users,
                  title: "Natural Treatment",
                  description: "Safe, natural treatments using your own blood"
                },
                {
                  icon: Shield,
                  title: "Safe Environment",
                  description: "Hygienic, comfortable, and patient-friendly environment"
                },
                {
                  icon: Star,
                  title: "Proven Results",
                  description: "Proven results with satisfied clients"
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
                ✨ Your journey to natural, healthy, and thick hair starts at Aries Skin & General Clinic.
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
              Ready to Restore Your Hair?
            </h2>
            <p className="text-xs md:text-md text-gray-600 mx-5">
              Join thousands of satisfied patients who have achieved natural hair growth with us
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
              href="/treatments/hair"
              className="text-teal-700 text-xs sm:text-sm hover:text-teal-800 font-medium transition-colors"
            >
              ← Back to Hair Care & Treatments
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