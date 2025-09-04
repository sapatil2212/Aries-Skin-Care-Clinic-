"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function HowWeWork() {
  const [isExpanded, setIsExpanded] = useState(false)
  const steps = [
    {
      number: "01",
      title: "Personalized Consultation",
      description: "This helps us create a customized treatment plan that aligns with your specific needs and expectations."
    },
    {
      number: "02", 
      title: "Tailored Treatment Plans",
      description: "This helps us create a customized treatment plan that aligns with your specific needs and expectations."
    },
    {
      number: "03",
      title: "Continuous Care & Follow-Up", 
      description: "This helps us create a customized treatment plan that aligns with your specific needs and expectations."
    }
  ]

  return (
    <section className="py-5 md:py-5 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-8 items-center">
          
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
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Main Image */}
              <img 
                src="/home-about/home-about.png"
                alt="Patient receiving facial treatment"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 px-2 sm:px-0"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium text-gray-500 uppercase tracking-wider"
            >
              • How We work
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E524C] leading-tight"
            >
              A commitment to your skin health
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm md:text-md text-[#646464] leading-relaxed"
            >
              <p>
                We're dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you.
              </p>
            </motion.div>

            {/* Toggle Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-2 text-[#2E524C] hover:text-[#1a3a35] transition-colors"
              >
                <span className="font-medium">
                  {isExpanded ? 'Hide' : 'Show'} Our Process
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
            </motion.div>

            {/* Steps - Expandable */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-6 pt-4 overflow-hidden"
                >
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="space-y-3"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl font-bold text-[#2E524C] leading-none">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#2E524C] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#646464] text-sm md:text-md leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="border-t border-gray-200 pt-4"></div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}