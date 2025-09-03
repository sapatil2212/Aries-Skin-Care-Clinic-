"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { TREATMENT_OPTIONS, HOW_DID_YOU_HEAR_OPTIONS } from "@/lib/constants"
import { useToast } from "@/components/ui/toast"
import { Calendar, Clock, User, Mail, Phone, FileText, AlertCircle } from "lucide-react"

const appointmentSchema = z.object({
  // Personal Details
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number"),
  age: z.number().min(1, "Age must be at least 1").max(120, "Age must be less than 120"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select your gender",
  }),
  
  // Appointment Details
  treatmentType: z.string().min(1, "Please select a treatment"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  concerns: z.string().min(10, "Please describe your concerns (minimum 10 characters)"),
  
  // Medical History
  currentMedications: z.string().optional(),
  previousTreatments: z.string().optional(),
  allergies: z.string().optional(),
  medicalConditions: z.string().optional(),
  
  // Additional Info
  howDidYouHear: z.string().min(1, "Please tell us how you heard about us"),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

interface AppointmentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
  "07:00 PM", "07:30 PM"
]

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" }
]

const howDidYouHearOptions = HOW_DID_YOU_HEAR_OPTIONS.map(option => ({
  value: option.toLowerCase().replace(/\s+/g, '-'),
  label: option
}))

export function AppointmentModal({ open, onOpenChange }: AppointmentModalProps) {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const { toast } = useToast()
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      agreeToTerms: false
    }
  })

  const watchedValues = watch()

  // Get minimum date (tomorrow)
  const minDate = React.useMemo(() => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }, [])

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real app, you would send this to your backend
      console.log("Appointment Data:", data)
      
      toast.success(
        "Appointment Booked!",
        "We'll contact you shortly to confirm your appointment details."
      )
      
      onOpenChange(false)
      reset()
      setCurrentStep(1)
    } catch (error) {
      toast.error(
        "Booking Failed",
        "There was an error booking your appointment. Please try again or call us directly."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4))
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleClose = () => {
    onOpenChange(false)
    reset()
    setCurrentStep(1)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <p className="text-sm text-gray-600">Let's start with your basic details</p>
            </div>
            
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("name")}
              error={errors.name?.message}
              required
            />
            
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                error={errors.email?.message}
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
            
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="Age"
                type="number"
                placeholder="Enter your age"
                {...register("age", { valueAsNumber: true })}
                error={errors.age?.message}
                required
              />
              <Select
                label="Gender"
                placeholder="Select gender"
                options={genderOptions}
                value={watchedValues.gender}
                onChange={(value) => setValue("gender", value as any)}
                error={errors.gender?.message}
                required
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Appointment Details</h3>
              <p className="text-sm text-gray-600">Choose your treatment and preferred time</p>
            </div>
            
            <Select
              label="Treatment Type"
              placeholder="Select treatment"
              options={TREATMENT_OPTIONS}
              value={watchedValues.treatmentType}
              onChange={(value) => setValue("treatmentType", value)}
              error={errors.treatmentType?.message}
              required
            />
            
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="Preferred Date"
                type="date"
                min={minDate}
                {...register("preferredDate")}
                error={errors.preferredDate?.message}
                required
              />
              <Select
                label="Preferred Time"
                placeholder="Select time"
                options={timeSlots.map(time => ({ value: time, label: time }))}
                value={watchedValues.preferredTime}
                onChange={(value) => setValue("preferredTime", value)}
                error={errors.preferredTime?.message}
                required
              />
            </div>
            
            <Textarea
              label="Your Concerns"
              placeholder="Please describe your skin/hair concerns and what you hope to achieve with the treatment..."
              rows={4}
              {...register("concerns")}
              error={errors.concerns?.message}
              required
            />
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <FileText className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Medical History</h3>
              <p className="text-sm text-gray-600">Help us provide better care</p>
            </div>
            
            <Textarea
              label="Current Medications"
              placeholder="List any medications you're currently taking (optional)"
              rows={2}
              {...register("currentMedications")}
              error={errors.currentMedications?.message}
            />
            
            <Textarea
              label="Previous Treatments"
              placeholder="Any previous skin/hair treatments you've had (optional)"
              rows={2}
              {...register("previousTreatments")}
              error={errors.previousTreatments?.message}
            />
            
            <Textarea
              label="Allergies"
              placeholder="Any known allergies or sensitivities (optional)"
              rows={2}
              {...register("allergies")}
              error={errors.allergies?.message}
            />
            
            <Textarea
              label="Medical Conditions"
              placeholder="Any medical conditions we should know about (optional)"
              rows={2}
              {...register("medicalConditions")}
              error={errors.medicalConditions?.message}
            />
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <AlertCircle className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Final Details</h3>
              <p className="text-sm text-gray-600">Just a few more questions</p>
            </div>
            
            <Select
              label="How did you hear about us?"
              placeholder="Select an option"
              options={howDidYouHearOptions}
              value={watchedValues.howDidYouHear}
              onChange={(value) => setValue("howDidYouHear", value)}
              error={errors.howDidYouHear?.message}
              required
            />
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Appointment Summary</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div><span className="font-medium">Name:</span> {watchedValues.name}</div>
                <div><span className="font-medium">Treatment:</span> {TREATMENT_OPTIONS.find(t => t.value === watchedValues.treatmentType)?.label}</div>
                <div><span className="font-medium">Date:</span> {watchedValues.preferredDate}</div>
                <div><span className="font-medium">Time:</span> {watchedValues.preferredTime}</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1"
                {...register("agreeToTerms")}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms" className="text-primary hover:underline">
                  terms and conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  privacy policy
                </a>
                . I understand that this appointment is subject to confirmation.
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Modal
      open={open}
      onOpenChange={handleClose}
      title="Book Your Appointment"
      description="Schedule your consultation with Dr. Shweta Sonje"
      size="lg"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center ${
                  step < 4 ? "flex-1" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      currentStep > step ? "bg-primary" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Personal</span>
            <span>Appointment</span>
            <span>Medical</span>
            <span>Confirm</span>
          </div>
        </div>

        {/* Step content */}
        {renderStepContent()}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          {currentStep < 4 ? (
            <Button
              type="button"
              variant="primary"
              onClick={nextStep}
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Book Appointment
            </Button>
          )}
        </div>
      </form>
    </Modal>
  )
}
