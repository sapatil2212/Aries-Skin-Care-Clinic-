"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Award, 
  Users, 
  Stethoscope, 
  MapPin, 
  Clock, 
  Phone,
  Sparkles,
  Heart,
  CheckCircle
} from "lucide-react"
import { CLINIC_INFO } from "@/lib/constants"

const facilities = [
  {
    icon: Shield,
    title: "FDA Approved Equipment",
    description: "State-of-the-art laser and cosmetic equipment certified for safety and efficacy",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Award,
    title: "Sterile Environment",
    description: "Hospital-grade sterilization and hygiene protocols for patient safety",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Users,
    title: "Expert Staff",
    description: "Trained medical professionals and support staff providing personalized care",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Stethoscope,
    title: "Advanced Diagnostics",
    description: "Comprehensive skin and hair analysis using latest diagnostic technology",
    color: "from-orange-500 to-orange-600"
  }
]

const equipment = [
  "Q-Switched Nd:YAG Laser for Tattoo Removal",
  "Diode Laser for Hair Reduction",
  "Fractional CO2 Laser for Skin Resurfacing",
  "Radiofrequency Device for Skin Tightening",
  "Hydrafacial Machine for Deep Cleansing",
  "Microneedling Devices for Collagen Induction",
  "Cryotherapy Equipment for Skin Tag Removal",
  "Professional Chemical Peel Solutions"
]

const safetyProtocols = [
  "Pre-treatment skin assessment and patch testing",
  "Sterile, single-use instruments for all procedures",
  "Regular equipment calibration and maintenance",
  "Trained staff following strict hygiene protocols",
  "Emergency medical support and first aid facilities",
  "Patient monitoring during and after treatments"
]

export default function OurClinicPage() {
  return (
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
              <span className="gradient-text">State-of-the-Art</span>
              {" "}Clinic
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience world-class treatments in a modern, safe, and comfortable environment 
              designed with your wellness in mind
            </p>
          </motion.div>

          {/* Clinic Image/Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Modern & Comfortable Environment
                </h3>
                <p className="text-gray-600">
                  Clinic Photo Gallery Coming Soon
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              World-Class <span className="gradient-text">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clinic is equipped with the latest technology and maintains the highest 
              standards of safety and hygiene
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon
              
              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group card-hover border-0 bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-10">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${facility.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors">
                            {facility.title}
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed">
                            {facility.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Advanced <span className="gradient-text">Equipment</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We invest in the latest FDA and CE approved medical equipment to ensure 
                the highest quality treatments with proven results and maximum safety.
              </p>
              
              <div className="space-y-3">
                {equipment.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Safety <span className="gradient-text">Protocols</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your safety is our top priority. We follow stringent safety protocols 
                and maintain the highest standards of medical hygiene.
              </p>
              
              <div className="space-y-3">
                {safetyProtocols.map((protocol, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Shield className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{protocol}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Visit Our <span className="gradient-text">Clinic</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located in Panchavati, Nashik with easy accessibility and ample parking
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Location & Address</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {CLINIC_INFO.address}
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="primary" 
                      className="w-full"
                      onClick={() => window.open(CLINIC_INFO.googleMapsUrl, '_blank')}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open(`tel:+91${CLINIC_INFO.phones[0]}`)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call: +91 {CLINIC_INFO.phones[0]}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Working Hours</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-primary">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-primary">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-primary">10:00 AM - 4:00 PM</span>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2 text-green-700">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Extended hours available for appointments</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
