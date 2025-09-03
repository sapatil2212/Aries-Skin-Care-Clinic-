"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Sparkles, Heart, Users } from "lucide-react"
import { useAppointmentModal } from "@/components/appointment-modal-provider"

const featuredTreatments = [
  {
    id: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    description: "Permanent hair reduction with minimal discomfort using advanced FDA-approved laser technology",
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    benefits: ["Permanent results", "Minimal pain", "All skin types"],
    sessions: "6-8 sessions",
    duration: "30-60 min"
  },
  {
    id: "medicated-hydrafacial",
    title: "Medicated Hydrafacial",
    description: "Deep cleansing and hydrating facial treatment for glowing, healthy, and rejuvenated skin",
    icon: Sparkles,
    color: "from-purple-500 to-purple-600",
    benefits: ["Instant glow", "Deep cleansing", "No downtime"],
    sessions: "Monthly",
    duration: "60-90 min"
  },
  {
    id: "prp-gfc-hair",
    title: "PRP/GFC for Hair",
    description: "Natural hair regrowth therapy using your own platelet-rich plasma for stronger, healthier hair",
    icon: Heart,
    color: "from-green-500 to-green-600",
    benefits: ["Natural regrowth", "No side effects", "Strengthens follicles"],
    sessions: "3-4 sessions",
    duration: "60-90 min"
  },
  {
    id: "carbon-peel",
    title: "Carbon Peel (Hollywood Facial)",
    description: "Revolutionary laser treatment for skin rejuvenation, pore tightening, and instant radiance",
    icon: Users,
    color: "from-orange-500 to-orange-600",
    benefits: ["Reduced pores", "Brighter skin", "No downtime"],
    sessions: "4-6 sessions",
    duration: "45-60 min"
  }
]

export function TreatmentsPreview() {
  const { openModal } = useAppointmentModal()

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-white">
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
            <Sparkles className="h-4 w-4" />
            <span>Our Treatments</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Advanced{" "}
            <span className="gradient-text">Treatment Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of FDA-approved treatments designed to enhance 
            your natural beauty and boost your confidence
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {featuredTreatments.map((treatment, index) => {
            const IconComponent = treatment.icon
            
            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group card-hover border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${treatment.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="text-right text-sm text-gray-500">
                        <div>{treatment.sessions}</div>
                        <div>{treatment.duration}</div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl text-primary group-hover:text-primary-dark transition-colors">
                      {treatment.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {treatment.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-primary">Key Benefits:</div>
                      <div className="flex flex-wrap gap-2">
                        {treatment.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <Link
                        href="/treatments"
                        className="text-primary hover:text-primary-dark font-medium text-sm flex items-center space-x-1 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={openModal}
                        className="text-xs"
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Skin & Hair?
            </h3>
            
            <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
              Book your free consultation today and discover the treatment that's perfect for you. 
              Our experts will create a personalized plan just for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                onClick={openModal}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Book Free Consultation
              </Button>
              
              <Link href="/treatments">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  View All Treatments
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
