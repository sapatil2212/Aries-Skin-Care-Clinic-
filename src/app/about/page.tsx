"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, GraduationCap, Users, Heart, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { DOCTOR_INFO, CLINIC_INFO } from "@/lib/constants"
import { useAppointmentModal } from "@/components/appointment-modal-provider"
import ClinicImage from "../../../public/about/clinic.png"
import DoctorImage from "../../../public/about/doctor.png"
export default function AboutPage() {
  const { openModal } = useAppointmentModal()
  
  const features = [
    "Commitment to Excellence in Skin Health",
    "State-of-the-Art Facility and Technology", 
    "Trusted by Thousands of Satisfied Patients"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching Home Page About Section */}
      <section className="py-5 md:py-5 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-medium text-gray-500 uppercase tracking-wider"
              >
                • About Us
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Why choose us for all your{" "}
                <span className="text-primary">dermatology needs</span>
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-md text-gray-600 leading-relaxed space-y-3"
              >
                <p>
                  At our clinic, we believe in combining years of trusted medical expertise with the latest advancements in cosmetic and skin care treatments. After successfully treating countless General Medicine and Gynecology patients, we have expanded our services to bring world-class skin, hair, and cosmetic procedures under one roof.
                </p>
                <p>
                  Our clinic is equipped with state-of-the-art technology, featuring only CE and FDA-approved equipment, ensuring safe, effective, and long-lasting results. Every procedure is carried out under the supervision of a skilled doctor and a team of well-trained staff who are committed to providing compassionate care and delivering the highest standards of treatment.
                </p>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>

            {/* Right Content - Single Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Single Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >
                <img 
                  src={ClinicImage.src}
                  alt="Dr. Shweta Sonje with patient"
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Doctor Section */}
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
              {/* Single Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >
                <img 
                  src={DoctorImage.src}
                  alt="Dr. Shweta Sonje"
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Right Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-medium text-gray-500 uppercase tracking-wider"
              >
                • Meet Our Doctor
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                <span className="text-primary">Dr. Shweta Sonje</span>
              </motion.h2>

              {/* Experience & Specialization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm md:text-md font-medium text-gray-800">
                    <span className="text-primary">Experience:</span> 15 years in Medical Practice | 1.5 years in Aesthetics & Cosmetology
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm md:text-md font-medium text-gray-800">
                    <span className="text-primary">Specialization:</span> Gynecology, General Medicine, Skin Aesthetics & Cosmetology
                  </p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-md text-gray-600 leading-relaxed space-y-3"
              >
                <p>
                  Dr. Shweta Sonje brings with her over 15 years of experience in Gynecology and General Medicine. With a vision to extend her expertise in enhancing skin health and beauty, she pursued a Fellowship in Skin Aesthetics and Cosmetology from a renowned institution in Mumbai, backed by Government Certification for advanced skin treatments.
                </p>
                <p>
                  Her holistic approach blends medical knowledge with modern aesthetics, ensuring treatments are both safe and results-driven. With her dedicated team, Dr. Sonje is committed to helping patients look and feel their best, inside and out.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Button 
                  onClick={openModal}
                  className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium group"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Mission & Vision Cards */}
      <section className="py-5 md:py-5 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Our Mission</h3>
                  </div>
                  <p className="text-sm md:text-md text-gray-600 leading-relaxed">
                    To provide world-class dermatological and cosmetic treatments using the latest 
                    technology and evidence-based practices. We are committed to enhancing our patients' 
                    confidence and quality of life through personalized care and exceptional results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Our Vision</h3>
                  </div>
                  <p className="text-sm md:text-md text-gray-600 leading-relaxed">
                    To be the leading skin and hair care clinic in Nashik, known for our innovation, 
                    expertise, and compassionate care. We envision a future where everyone can achieve 
                    their aesthetic goals safely and effectively.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-5 md:py-5 ">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
         

          {/* Single Container with Map and Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl border border-gray-200 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[400px] lg:h-[500px]">
              {/* Left Two-Thirds - Map */}
              <div className="lg:col-span-2 relative h-[250px] sm:h-[300px] lg:h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.5405784069153!2d73.78962419999999!3d20.027787800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebba552420eb%3A0x2e4fb303571dcc31!2sAries%20Skin%20and%20General%20Clinic%20%7C%20Skin%2C%20Hair%2C%20Acne%20%26%20Aesthetic%20Treatment%20in%20Nashik%20%7C!5e0!3m2!1sen!2sin!4v1757054334594!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Right One-Third - Information */}
              <div className="p-4 md:p-6 flex flex-col justify-center space-y-3 md:space-y-4 lg:space-y-6">
                {/* Address Section */}
                <div>
                  <div className="flex items-center space-x-2 mb-2 md:mb-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <MapPin className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </div>
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-primary">Location & Address</h3>
                  </div>
                  
                  <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed">
                    Shop No 1, Keystone Residency Apartment, Behind Sharad Pawar Fruit Market, Peth-Makhalamabad Link Road, Samarth Nagar, Panchavati, Nashik - 422001
                  </p>
                </div>

                {/* Working Hours Section */}
                <div>
                  <div className="flex items-center space-x-2 mb-2 md:mb-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Clock className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </div>
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-primary">Hours</h3>
                  </div>
                  
                  <div className="space-y-1 md:space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[10px] md:text-xs text-gray-600">Monday</span>
                      <span className="text-[10px] md:text-xs font-medium">10 am–2 pm, 5–9 pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] md:text-xs text-gray-600">Tuesday</span>
                      <span className="text-[10px] md:text-xs font-medium">10 am–2 pm, 5–9 pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] md:text-xs text-gray-600">Wednesday</span>
                      <span className="text-[10px] md:text-xs font-medium">10 am–2 pm, 5–9 pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] md:text-xs text-gray-600">Thursday</span>
                      <span className="text-[10px] md:text-xs font-medium">10 am–2 pm, 5–9 pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] md:text-xs text-gray-600">Friday</span>
                      <span className="text-[10px] md:text-xs font-medium">10 am–2 pm, 5–9 pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] md:text-xs text-gray-600">Saturday</span>
                      <span className="text-[10px] md:text-xs font-medium text-red-500">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] md:text-xs text-gray-600">Sunday</span>
                      <span className="text-[10px] md:text-xs font-medium">12 pm–5 pm</span>
                    </div>
                  </div>
                </div>

                {/* Book Appointment Button */}
                <div className="pt-1 md:pt-2">
                  <Button 
                    onClick={openModal}
                    className="w-full bg-teal-700 hover:bg-teal-800 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-medium group text-xs md:text-sm"
                  >
                    Book Appointment
                    <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
