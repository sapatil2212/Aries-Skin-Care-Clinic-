"use client"

import { motion } from "framer-motion"
import HowImage from "../../../public/home-how-we-work/how-we-work.png"
export function HowWeWork() {
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
                src={HowImage.src}
                alt="Patient receiving facial treatment"
                className="w-full h-[400px] md:h-[450px] object-cover"
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
              className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2E524C] leading-tight"
            >
              A commitment to your skin health
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm text-[#646464] leading-relaxed"
            >
              <p>
                We're dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you.
              </p>
            </motion.div>

            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 pt-4"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-xl md:text-2xl font-bold text-[#2E524C] leading-none">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm md:text-base font-semibold text-[#2E524C] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[#646464] text-xs md:text-sm leading-relaxed">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}