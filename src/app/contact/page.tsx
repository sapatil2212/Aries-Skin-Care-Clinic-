"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { useToast } from "@/components/ui/toast"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Navigation
} from "lucide-react"
import { CLINIC_INFO, WHATSAPP_MESSAGE } from "@/lib/constants"
import { formatPhoneNumber, generateWhatsAppUrl } from "@/lib/utils"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const subjectOptions = [
  { value: "appointment", label: "Book Appointment" },
  { value: "treatment-inquiry", label: "Treatment Inquiry" },
  { value: "pricing", label: "Pricing Information" },
  { value: "general", label: "General Inquiry" },
  { value: "feedback", label: "Feedback" },
  { value: "other", label: "Other" }
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const watchedSubject = watch("subject")

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real app, you would send this to your backend
      console.log("Contact Form Data:", data)
      
      toast.success(
        "Message Sent!",
        "Thank you for contacting us. We'll get back to you within 24 hours."
      )
      
      reset()
    } catch (error) {
      toast.error(
        "Failed to Send",
        "There was an error sending your message. Please try again or call us directly."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Contact{" "}
              <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our expert team. We're here to answer your questions 
              and help you start your transformation journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register("name")}
                        error={errors.name?.message}
                        required
                      />
                      
                      <Input
                        label="Phone Number"
                        placeholder="10-digit mobile number"
                        {...register("phone")}
                        error={errors.phone?.message}
                        required
                      />
                    </div>
                    
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email")}
                      error={errors.email?.message}
                      required
                    />
                    
                    <Select
                      label="Subject"
                      placeholder="Select a subject"
                      options={subjectOptions}
                      value={watchedSubject}
                      onChange={(value) => setValue("subject", value)}
                      error={errors.subject?.message}
                      required
                    />
                    
                    <Textarea
                      label="Message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      {...register("message")}
                      error={errors.message?.message}
                      required
                    />
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="xl"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-2">Phone Numbers</h3>
                        <div className="space-y-1">
                          {CLINIC_INFO.phones.map((phone, index) => (
                            <div key={index}>
                              <a
                                href={`tel:+91${phone}`}
                                className="text-gray-600 hover:text-primary transition-colors"
                              >
                                {formatPhoneNumber(phone)}
                              </a>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Available during clinic hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-2">WhatsApp</h3>
                        <a
                          href={generateWhatsAppUrl(CLINIC_INFO.phones[0], WHATSAPP_MESSAGE)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {formatPhoneNumber(CLINIC_INFO.phones[0])}
                        </a>
                        <p className="text-sm text-gray-500 mt-2">Quick responses, 24/7 availability</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-2">Email Address</h3>
                        <a
                          href={`mailto:${CLINIC_INFO.email}`}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {CLINIC_INFO.email}
                        </a>
                        <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-2">Clinic Address</h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {CLINIC_INFO.address}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(CLINIC_INFO.googleMapsUrl, '_blank')}
                        >
                          <Navigation className="h-4 w-4 mr-2" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-2">Working Hours</h3>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Monday - Friday</span>
                            <span className="font-medium">9:00 AM - 8:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Saturday</span>
                            <span className="font-medium">9:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Sunday</span>
                            <span className="font-medium">10:00 AM - 4:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Find <span className="gradient-text">Our Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Panchavati, Nashik, we're easily accessible 
              with convenient parking facilities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600 mb-4">
                  Google Maps integration will be added here
                </p>
                <Button 
                  variant="primary"
                  onClick={() => window.open(CLINIC_INFO.googleMapsUrl, '_blank')}
                >
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
