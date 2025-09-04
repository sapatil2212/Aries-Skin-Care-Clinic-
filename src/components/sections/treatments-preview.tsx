"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award } from "lucide-react"
import { useAppointmentModal } from "@/components/appointment-modal-provider"

import HomeTreatment1 from "../../../public/treatments/Laser-Hair-Reduction.webp"
import HomeTreatment2 from "../../../public/treatments/Carbon-Peel.webp"
import HomeTreatment3 from "../../../public/treatments/Medicated-Hydrafacial.webp"
import HomeTreatment4 from "../../../public/treatments/PRP-GFC.webp"


const featuredTreatments = [
  {
    id: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    description: "Permanent hair reduction with minimal discomfort using advanced FDA-approved laser technology for all skin types.",
    benefits: ["Permanent results", "Minimal pain", "All skin types", "No downtime"],
    image: HomeTreatment1.src,
    link: "/treatments/cosmetic/laser-hair-reduction"
  },
  {
    id: "medicated-hydrafacial",
    title: "Medicated Hydrafacial",
    description: "Deep cleansing and hydrating facial treatment for glowing, healthy, and rejuvenated skin with instant results.",
    benefits: ["Instant glow", "Deep cleansing", "No downtime", "Hydrated skin"],
    image: HomeTreatment3.src,
    link: "/treatments/skin/medicated-hydrafacial"
  },
  {
    id: "prp-gfc-hair",
    title: "PRP/GFC for Hair",
    description: "Natural hair regrowth therapy using your own platelet-rich plasma for stronger, healthier hair growth.",
    benefits: ["Natural regrowth", "No side effects", "Strengthens follicles", "Safe procedure"],
    image: HomeTreatment4.src,
    link: "/treatments/hair/prp-gfc-hair"
  },
  {
    id: "carbon-peel",
    title: "Carbon Peel (Hollywood Facial)",
    description: "Revolutionary laser treatment for skin rejuvenation, pore tightening, and instant radiance with no downtime.",
    benefits: ["Reduced pores", "Brighter skin", "No downtime", "Instant results"],
    image: HomeTreatment2.src,
    link: "/treatments/skin/carbon-peel"
  }
]

export function TreatmentsPreview() {
  const { openModal } = useAppointmentModal()

  return (
    <section className="py-5 md:py-5 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-20 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Award className="h-4 w-4" />
            <span>Our Treatments</span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4"
          >
            Advanced{" "}
            <span className="text-primary">Treatment Solutions</span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm md:text-md text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Discover our comprehensive range of FDA-approved treatments designed to enhance your natural beauty and boost your confidence
          </motion.p>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredTreatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl bordery overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Image Section */}
                <div className="relative overflow-hidden order-1 md:order-1">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between order-2 md:order-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {treatment.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-primary">Key Benefits:</div>
                      <div className="flex flex-wrap gap-1">
                        {treatment.benefits.slice(0, 3).map((benefit, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex gap-2">
                      <Link href={treatment.link} className="flex-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs px-3 py-1 group"
                        >
                          View More
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={openModal}
                        className="flex-1 text-xs px-3 py-1"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Treatments Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/treatments">
            <Button
              variant="primary"
              size="lg"
              className="group"
            >
              View All Treatments
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}