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
import SuccessModal from "@/components/ui/success-modal"
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
  const [showSuccessModal, setShowSuccessModal] = useState(false)
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
      // Send contact form data to API
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      const result = await response.json()
      console.log("Contact form submitted successfully:", result)
      
      setShowSuccessModal(true)
      reset()
    } catch (error) {
      console.error('Contact form submission error:', error)
      toast.error(
        "Failed to Send",
        "There was an error sending your message. Please try again or call us directly."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-5 md:py-5">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-4 pb-4 md:pt-8 md:pb-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Contact{" "}
              <span className="text-teal-600">Us</span>
            </h1>
            <p className="text-sm md:text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our expert team. We're here to answer your questions 
              and help you start your transformation journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="border border-gray-200 rounded-xl bg-white">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-primary mb-4">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                </div>
              </div>
            </motion.div>

            {/* Map and Contact Information Combined */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                {/* Map Section */}
                <div className="h-64 md:h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.5405784069153!2d73.78962419999999!3d20.027787800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebba552420eb%3A0x2e4fb303571dcc31!2sAries%20Skin%20and%20General%20Clinic%20%7C%20Skin%2C%20Hair%2C%20Acne%20%26%20Aesthetic%20Treatment%20in%20Nashik%20%7C!5e0!3m2!1sen!2sin!4v1757054334594!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                
                {/* Contact Information Section */}
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Phone Numbers */}
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded flex items-center justify-center flex-shrink-0">
                        <Phone className="h-3 w-3 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2">
                          {CLINIC_INFO.phones.map((phone, index) => (
                            <a
                              key={index}
                              href={`tel:+91${phone}`}
                              className="text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors font-semibold"
                            >
                              {formatPhoneNumber(phone)}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded flex items-center justify-center flex-shrink-0">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                        </svg>
                      </div>
                      
                      <div className="flex-1">
                        <a
                          href={generateWhatsAppUrl(CLINIC_INFO.phones[0], WHATSAPP_MESSAGE)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors font-semibold"
                        >
                          {formatPhoneNumber(CLINIC_INFO.phones[0])}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded flex items-center justify-center flex-shrink-0">
                        <Mail className="h-3 w-3 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <a
                          href={`mailto:${CLINIC_INFO.email}`}
                          className="text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors font-semibold"
                        >
                          {CLINIC_INFO.email}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-3 w-3 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors font-semibold">
                          {CLINIC_INFO.address}
                        </p>
                       
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Message Sent!"
        message="Thank you for contacting us. We'll get back to you within 24 hours. A confirmation email has been sent to your inbox."
        duration={4000}
      />
    </div>
  )
}
