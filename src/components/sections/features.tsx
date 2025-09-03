"use client"

import { motion } from "framer-motion"
import { Award, Shield, Users, MapPin, Clock, Stethoscope } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Trusted expertise in gynecology, general medicine, and advanced skin treatments with proven results",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "FDA & CE Approved Equipment",
    description: "State-of-the-art technology ensuring highest safety and efficacy standards for all treatments",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Users,
    title: "Expert Medical Team",
    description: "Skilled doctors and trained staff providing personalized care with attention to detail",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Conveniently located in Panchavati, Nashik with easy accessibility and ample parking",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Extended working hours including weekends to accommodate your busy schedule",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Care",
    description: "Complete healthcare solutions from general medicine to advanced cosmetic procedures",
    color: "from-teal-500 to-teal-600"
  }
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Excellence in{" "}
            <span className="gradient-text">Healthcare</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine years of medical expertise with cutting-edge technology to deliver 
            exceptional results that enhance your confidence and well-being
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                                      <CardContent className="p-10">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                15+
              </motion.div>
              <div className="text-primary-light">Years Experience</div>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                1000+
              </motion.div>
              <div className="text-primary-light">Happy Patients</div>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                18
              </motion.div>
              <div className="text-primary-light">Advanced Treatments</div>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                24/7
              </motion.div>
              <div className="text-primary-light">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
