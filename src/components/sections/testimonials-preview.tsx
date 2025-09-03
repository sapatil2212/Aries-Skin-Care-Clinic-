"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ArrowRight } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"
import { formatDate, getInitials } from "@/lib/utils"

interface TestimonialsPreviewProps {
  onAppointmentClick: () => void
}

export function TestimonialsPreview({ onAppointmentClick }: TestimonialsPreviewProps) {
  const previewTestimonials = TESTIMONIALS.slice(0, 3)

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
            <Star className="h-4 w-4" />
            <span>Patient Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our{" "}
            <span className="gradient-text">Patients Say</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real experiences from real patients who have transformed their lives with our treatments. 
            Their success stories inspire us every day.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {previewTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group card-hover border-0 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
                {/* Background Quote */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-16 w-16 text-primary" />
                </div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                    "{testimonial.review}"
                  </blockquote>
                  
                  {/* Patient Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-semibold">
                      {getInitials(testimonial.name)}
                    </div>
                    
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.treatment}
                      </div>
                      <div className="text-xs text-gray-400">
                        {formatDate(testimonial.date)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Treatment Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      Verified Patient
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                5.0
              </motion.div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                98%
              </motion.div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                1000+
              </motion.div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                15+
              </motion.div>
              <div className="text-gray-600">Years Trusted</div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Ready to Join Our Success Stories?
            </h3>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have experienced life-changing results. 
              Your transformation story could be next.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="xl"
                onClick={onAppointmentClick}
              >
                Start Your Journey
              </Button>
              
              <Link href="/testimonials">
                <Button
                  variant="outline"
                  size="xl"
                  className="group"
                >
                  Read More Stories
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
