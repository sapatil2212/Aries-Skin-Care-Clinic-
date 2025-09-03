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
  Search
} from "lucide-react"
import { TREATMENTS, TREATMENT_CATEGORIES, CLINIC_INFO } from "@/lib/constants"
import { AppointmentModal } from "@/components/appointment-modal"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

const treatmentIcons: Record<string, any> = {
  "laser-hair-reduction": Zap,
  "medicated-hydrafacial": Sparkles,
  "prp-gfc-hair": Heart,
  "carbon-peel": Users,
  default: Star
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence>
                {filteredTreatments.map((treatment, index) => {
                  const IconComponent = treatmentIcons[treatment.id] || treatmentIcons.default
                  
                  return (
                    <motion.div
                      key={treatment.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      layout
                    >
                      <Card className="h-full group card-hover border-0 bg-white/80 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            
                            <div className="text-right text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{treatment.duration}</span>
                              </div>
                              <div className="mt-1">{treatment.sessions}</div>
                            </div>
                          </div>
                          
                          <CardTitle className="text-xl text-primary group-hover:text-primary-dark transition-colors">
                            {treatment.name}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <p className="text-gray-600 leading-relaxed">
                            {treatment.description}
                          </p>
                          
                          <div className="space-y-3">
                            <div className="text-sm font-medium text-primary">Key Benefits:</div>
                            <div className="space-y-1">
                              {treatment.benefits.slice(0, 3).map((benefit, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">{benefit}</span>
                                </div>
                              ))}
                              {treatment.benefits.length > 3 && (
                                <div className="text-xs text-gray-500">
                                  +{treatment.benefits.length - 3} more benefits
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="space-y-2 pt-4 border-t border-gray-100">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Procedure:</span>
                              <span className="text-gray-700 font-medium">
                                {treatment.procedure.slice(0, 30)}...
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Sessions:</span>
                              <span className="text-gray-700 font-medium">{treatment.sessions}</span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2 pt-4">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 text-xs"
                              onClick={() => {
                                // Could open a detailed modal here
                                console.log("Learn more about", treatment.name)
                              }}
                            >
                              Learn More
                            </Button>
                            
                            <Button
                              variant="primary"
                              size="sm"
                              className="flex-1 text-xs"
                              onClick={() => handleBookAppointment(treatment.id)}
                            >
                              Book Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
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
