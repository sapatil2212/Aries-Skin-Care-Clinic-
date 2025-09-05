"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Zap, 
  Sparkles, 
  Heart, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  Filter,
  Search,
  ArrowRight
} from "lucide-react"
import { TREATMENTS, TREATMENT_CATEGORIES, CLINIC_INFO } from "@/lib/constants"
import { AppointmentModal } from "@/components/appointment-modal"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

// Import treatment images
import LaserHairReductionImg from "../../../public/treatments/Laser-Hair-Reduction.webp"
import MedicatedHydrafacialImg from "../../../public/treatments/Medicated-Hydrafacial.webp"
import CarbonPeelImg from "../../../public/treatments/Carbon-Peel.webp"
import PRPGFCImg from "../../../public/treatments/PRP-GFC.webp"
import ChemicalPeelImg from "../../../public/treatments/Chemical-Peels/Heroimage.webp"
import MicroneedlingImg from "../../../public/treatments/microneedling/micro1.png"
import RFSkinTighteningImg from "../../../public/treatments/skintightening/1.png"
import MelasmaAcneImg from "../../../public/treatments/acne/1.png"
import SkinFungalImg from "../../../public/treatments/fungal/1.png"
import TattooRemovalImg from "../../../public/treatments/tattoo/1.png"
import SkinTagRemovalImg from "../../../public/treatments/mole-removal/1.png"
import IVGlutaDripImg from "../../../public/treatments/Glutathione/1.png"
import EarlobeRepairImg from "../../../public/treatments/Earlobe-Repair/1.png"
import DandruffRemovalImg from "../../../public/treatments/hair/1.png"
import GynecologicalCareImg from "../../../public/treatments/General/1.png"

const treatmentIcons: Record<string, any> = {
  "laser-hair-reduction": Zap,
  "medicated-hydrafacial": Sparkles,
  "prp-gfc-hair": Heart,
  "carbon-peel": Users,
  default: Star
}

const treatmentImages: Record<string, any> = {
  "laser-hair-reduction": LaserHairReductionImg,
  "medicated-hydrafacial": MedicatedHydrafacialImg,
  "carbon-peel": CarbonPeelImg,
  "prp-gfc-hair": PRPGFCImg,
  "chemical-peel": ChemicalPeelImg,
  "microneedling": MicroneedlingImg,
  "rf-skin-tightening": RFSkinTighteningImg,
  "melasma-acne-freckles": MelasmaAcneImg,
  "skin-fungal-disease": SkinFungalImg,
  "tattoo-removal": TattooRemovalImg,
  "skin-tag-removal": SkinTagRemovalImg,
  "iv-gluta-drip": IVGlutaDripImg,
  "earlobe-repair": EarlobeRepairImg,
  "dandruff-removal": DandruffRemovalImg,
  "gynecological-care": GynecologicalCareImg
}

export default function TreatmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const filteredTreatments = TREATMENTS.filter(treatment => {
    const matchesCategory = selectedCategory === "all" || treatment.category === selectedCategory
    const matchesSearch = treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleBookAppointment = (treatmentId?: string) => {
    setSelectedTreatment(treatmentId || null)
    setIsAppointmentModalOpen(true)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
        {/* Hero Section */}
        <section className="pt-12 pb-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Our{" "}
                <span className="gradient-text">Treatments</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive range of FDA-approved treatments designed to enhance 
                your natural beauty and boost your confidence
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 mb-12"
            >
              <div className="flex-1">
                <Input
                  placeholder="Search treatments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon={<Search className="h-4 w-4" />}
                />
              </div>
              
              <div className="md:w-64">
                <Select
                  placeholder="Filter by category"
                  options={TREATMENT_CATEGORIES.map(cat => ({ value: cat.id, label: cat.name }))}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                />
              </div>
            </motion.div>

            {/* Treatments Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatePresence>
                {filteredTreatments.map((treatment, index) => {
                  const IconComponent = treatmentIcons[treatment.id] || treatmentIcons.default
                  const treatmentImage = treatmentImages[treatment.id]
                  
                  return (
                    <motion.div
                      key={treatment.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      layout
                      className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        {/* Image Section */}
                        <div className="relative overflow-hidden order-1 md:order-1">
                          {treatmentImage ? (
                            <img 
                              src={treatmentImage.src} 
                              alt={treatment.name}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-48 md:h-full bg-gradient-to-br from-primary/10 to-primary-dark/10 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center">
                                <IconComponent className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col justify-between order-2 md:order-2">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-bold text-gray-900">
                                {treatment.name}
                              </h3>
                              <div className="text-right text-xs text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{treatment.duration}</span>
                                </div>
                              </div>
                            </div>
                            
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
                                {treatment.benefits.length > 3 && (
                                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                    +{treatment.benefits.length - 3} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 text-xs px-3 py-1 group"
                                onClick={() => {
                                  // Could open a detailed modal here
                                  console.log("Learn more about", treatment.name)
                                }}
                              >
                                View More
                                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                              </Button>
                              <Button
                                variant="primary"
                                size="sm"
                                onClick={() => handleBookAppointment(treatment.id)}
                                className="flex-1 text-xs px-3 py-1"
                              >
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* No Results */}
            {filteredTreatments.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No treatments found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Not Sure Which Treatment is Right for You?
              </h2>
              
              <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
                Book a free consultation with Dr. Shweta Sonje and let our experts 
                create a personalized treatment plan just for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="xl"
                  onClick={() => handleBookAppointment()}
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Book Free Consultation
                </Button>
                
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open(`tel:+91${CLINIC_INFO.phones[0]}`)}
                >
                  Call: +91 {CLINIC_INFO.phones[0]}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <AppointmentModal
        open={isAppointmentModalOpen}
        onOpenChange={setIsAppointmentModalOpen}
      />
    </>
  )
}
