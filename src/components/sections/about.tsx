"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Award, TrendingUp, Gem, Play, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"
import HomeAbout from "../../../public/home-about/home-about.png"
export function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const stats = [
    {
      value: "96%",
      label: "Patient Satisfaction Rate",
    },
    {
      value: "12+",
      label: "Years Of Experience",
    },
    {
      value: "1,000+",
      label: "Successful Surgeries",
    },
    {
      value: "30+",
      label: "State-Of-The-Art Facilities",
    }
  ]

  const features = [
    "Commitment to Excellence in Skin Health",
    "State-of-the-Art Facility and Technology", 
    "Trusted by Thousands of Satisfied Patients"
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            >
              Why choose us for all your{" "}
              <span className="text-primary">dermatology needs</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm md:text-md text-gray-600 leading-relaxed space-y-3"
            >
              <p>
                After years of dedicated practice in General Medicine and Gynecology, our clinic has now expanded to offer advanced Cosmetic Procedures, Skin, and Hair Care treatments.
              </p>
              <p>
                We are equipped with state-of-the-art technology and high-end equipment, all CE and FDA-approved, ensuring safe, effective, and reliable results. Our team of skilled doctors and trained staff is committed to delivering the highest standards of care with a personalized approach.
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

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button 
                className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium group"
              >
                About More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
             
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
              className="rounded-3xl overflow-hidden "
            >
              <img 
                src={HomeAbout.src }
                alt="Dr. Shweta Sonje with patient"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Divider Line */}
        <div className="mt-12 mb-6">
          <hr className="border-gray-200" />
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}