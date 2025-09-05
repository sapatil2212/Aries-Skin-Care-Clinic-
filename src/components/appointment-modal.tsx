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
import { ProfessionalDropdown } from "@/components/ui/professional-dropdown"
import { InteractiveClock } from "@/components/ui/interactive-clock"
import { CustomDatePicker } from "@/components/ui/custom-date-picker"
import SuccessModal from "@/components/ui/success-modal"
import { TREATMENT_OPTIONS, HOW_DID_YOU_HEAR_OPTIONS } from "@/lib/constants"
import { useToast } from "@/components/ui/toast"
import { Calendar, Clock, User, Mail, Phone, FileText, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react"

const appointmentSchema = z.object({
  // Personal Details
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number starting with 6-9")
    .length(10, "Phone number must be exactly 10 digits"),
  age: z.number().min(1, "Age must be at least 1").max(100, "Age must not be more than 100"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select your gender",
  }),
  
  // Appointment Details
  treatmentType: z.string().min(1, "Please select a treatment"),
  preferredDate: z.string().min(1, "Please select a preferred date")
    .refine((date) => {
      const selectedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return selectedDate >= today
    }, "Date cannot be in the past"),
  preferredTime: z.string().min(1, "Please select a preferred time")
    .refine((time) => {
      const [timeStr, period] = time.split(' ')
      const [hour, minute] = timeStr.split(':')
      const hour24 = period === 'PM' && hour !== '12' ? parseInt(hour) + 12 : 
                    period === 'AM' && hour === '12' ? 0 : parseInt(hour)
      const timeInMinutes = hour24 * 60 + parseInt(minute)
      
      // Working hours: 10 AM - 2 PM (600-840 minutes) and 5 PM - 9 PM (1020-1260 minutes)
      const morningStart = 10 * 60 // 10 AM
      const morningEnd = 14 * 60   // 2 PM
      const eveningStart = 17 * 60 // 5 PM
      const eveningEnd = 21 * 60   // 9 PM
      
      return (timeInMinutes >= morningStart && timeInMinutes <= morningEnd) ||
             (timeInMinutes >= eveningStart && timeInMinutes <= eveningEnd)
    }, "Please select a time during working hours (10 AM-2 PM or 5 PM-9 PM)"),
  concerns: z.string().min(10, "Please describe your concerns (minimum 10 characters)"),
  
  // Medical History
  currentMedications: z.string().optional(),
  previousTreatments: z.string().optional(),
  allergies: z.string().optional(),
  medicalConditions: z.string().optional(),
  
  // Additional Info
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
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM"
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
  const [validationAttempted, setValidationAttempted] = React.useState(false)
  const [showSuccessModal, setShowSuccessModal] = React.useState(false)
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
      agreeToTerms: false,
      name: '',
      email: '',
      phone: '',
      gender: undefined,
      treatmentType: '',
      preferredDate: '',
      preferredTime: '',
      concerns: ''
    }
  })

  const watchedValues = watch()

  // Individual field validation functions
  const getFieldError = (fieldName: string, value: any): string => {
    switch (fieldName) {
      case 'name':
        if (!value) return 'Name is required'
        if (value.length < 2) return 'Name must be at least 2 characters'
        return ''
      
      case 'email':
        if (!value) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address'
        return ''
      
      case 'phone':
        if (!value) return 'Phone number is required'
        if (!/^[6-9]\d{9}$/.test(value)) return 'Please enter a valid 10-digit phone number starting with 6-9'
        return ''
      
        case 'age':
          if (!value || value === '' || value === null || value === undefined) return 'Age is required'
          const numValue = Number(value)
          if (isNaN(numValue) || numValue === 0) return 'Age must be a valid number'
          if (numValue < 1) return 'Age must be at least 1'
          if (numValue > 100) return 'Age must not be more than 100'
          return ''
      case 'gender':
        if (!value) return 'Please select your gender'
        return ''
      
      case 'treatmentType':
        if (!value) return 'Please select a treatment'
        return ''
      
      case 'preferredDate':
        if (!value) return 'Please select a preferred date'
        if (new Date(value) < new Date(new Date().setHours(0, 0, 0, 0))) return 'Date cannot be in the past'
        return ''
      
      case 'preferredTime':
        if (!value) return 'Please select a preferred time'
        // Check if time is within working hours (10 AM - 2 PM and 5 PM - 9 PM)
        const [timeStr, period] = value.split(' ')
        if (!timeStr || !period) return 'Please select a valid time'
        
        const [hour, minute] = timeStr.split(':')
        const hour24 = period === 'PM' && hour !== '12' ? parseInt(hour) + 12 : 
                      period === 'AM' && hour === '12' ? 0 : parseInt(hour)
        const timeInMinutes = hour24 * 60 + parseInt(minute)
        
        // Working hours: 10 AM - 2 PM (600-840 minutes) and 5 PM - 9 PM (1020-1260 minutes)
        const morningStart = 10 * 60 // 10 AM
        const morningEnd = 14 * 60   // 2 PM
        const eveningStart = 17 * 60 // 5 PM
        const eveningEnd = 21 * 60   // 9 PM
        
        const isWorkingHours = (timeInMinutes >= morningStart && timeInMinutes <= morningEnd) ||
                              (timeInMinutes >= eveningStart && timeInMinutes <= eveningEnd)
        
        if (!isWorkingHours) {
          return 'Please select a time during working hours (10 AM-2 PM or 5 PM-9 PM)'
        }
        return ''
      
      case 'concerns':
        if (!value) return 'Please describe your concerns'
        if (value.length < 10) return 'Please describe your concerns (minimum 10 characters)'
        return ''
      
      case 'agreeToTerms':
        if (!value) return 'You must agree to the terms and conditions'
        return ''
      
      default:
        return ''
    }
  }

  // Get minimum date (tomorrow)
  const minDate = React.useMemo(() => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }, [])

  const onSubmit = async (data: AppointmentFormData) => {
    console.log('🎉 onSubmit function called with data:', data)
    console.log('Form errors:', errors)
    setIsSubmitting(true)
    
    try {
      // Send appointment data to API endpoint for email confirmation
      console.log('Sending request to API...')
      const response = await fetch('/api/send-appointment-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      console.log('API response status:', response.status)
      
      if (!response.ok) {
        throw new Error('Failed to send confirmation emails')
      }
      
      // Log appointment data for debugging
      console.log("Appointment Data:", data)
      
      // Show success modal instead of toast
      setShowSuccessModal(true)
      
      // Close the appointment modal
      onOpenChange(false)
      reset()
      setCurrentStep(1)
    } catch (error) {
      console.error('Appointment booking error:', error)
      toast.error(
        "Booking Failed",
        "There was an error booking your appointment. Please try again or call us directly."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        // Check if all fields are present and valid
        const nameValid = !!(watchedValues.name && watchedValues.name.length >= 2)
        const emailValid = !!(watchedValues.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(watchedValues.email))
        const phoneValid = !!(watchedValues.phone && /^[6-9]\d{9}$/.test(watchedValues.phone))
        const ageValid = !!(watchedValues.age && 
          !isNaN(Number(watchedValues.age)) && 
          Number(watchedValues.age) >= 1 && 
          Number(watchedValues.age) <= 100)
        const genderValid = !!(watchedValues.gender && ['male', 'female', 'other'].includes(watchedValues.gender))
        
        return nameValid && emailValid && phoneValid && ageValid && genderValid
        
      case 2:
        // Check if all fields are present and valid
        const treatmentValid = !!(watchedValues.treatmentType && watchedValues.treatmentType.length > 0)
        const dateValid = !!(watchedValues.preferredDate && new Date(watchedValues.preferredDate) >= new Date(new Date().setHours(0, 0, 0, 0)))
        
        // Enhanced time validation for working hours
        let timeValid = false
        if (watchedValues.preferredTime && watchedValues.preferredTime.length > 0) {
          const [timeStr, period] = watchedValues.preferredTime.split(' ')
          if (timeStr && period) {
            const [hour, minute] = timeStr.split(':')
            const hour24 = period === 'PM' && hour !== '12' ? parseInt(hour) + 12 : 
                          period === 'AM' && hour === '12' ? 0 : parseInt(hour)
            const timeInMinutes = hour24 * 60 + parseInt(minute)
            
            // Working hours: 10 AM - 2 PM (600-840 minutes) and 5 PM - 9 PM (1020-1260 minutes)
            const morningStart = 10 * 60 // 10 AM
            const morningEnd = 14 * 60   // 2 PM
            const eveningStart = 17 * 60 // 5 PM
            const eveningEnd = 21 * 60   // 9 PM
            
            timeValid = (timeInMinutes >= morningStart && timeInMinutes <= morningEnd) ||
                       (timeInMinutes >= eveningStart && timeInMinutes <= eveningEnd)
          }
        }
        
        const concernsValid = !!(watchedValues.concerns && watchedValues.concerns.length >= 10)
        
        return treatmentValid && dateValid && timeValid && concernsValid
        
      case 3:
        return true // Medical history is optional
        
      case 4:
        return !!(watchedValues.agreeToTerms)
        
      default:
        return false
    }
  }

  const getStepValidationMessage = (step: number): string => {
    switch (step) {
      case 1:
        const errors1 = []
        if (!watchedValues.name || watchedValues.name.length < 2) {
          errors1.push('Name (minimum 2 characters)')
        }
        if (!watchedValues.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(watchedValues.email)) {
          errors1.push('Valid email address')
        }
        if (!watchedValues.phone || !/^[6-9]\d{9}$/.test(watchedValues.phone)) {
          errors1.push('Valid 10-digit phone number (starting with 6-9)')
        }
        if (!watchedValues.age || isNaN(watchedValues.age) || watchedValues.age < 1 || watchedValues.age > 100) {
          errors1.push('Age (between 1-100)')
        }
        if (!watchedValues.gender || !['male', 'female', 'other'].includes(watchedValues.gender)) {
          errors1.push('Gender selection')
        }
        return errors1.length > 0 ? `Please provide: ${errors1.join(', ')}` : ''
        
      case 2:
        const errors2 = []
        if (!watchedValues.treatmentType) {
          errors2.push('Treatment Type')
        }
        if (!watchedValues.preferredDate || new Date(watchedValues.preferredDate) < new Date(new Date().setHours(0, 0, 0, 0))) {
          errors2.push('Valid future date')
        }
        if (!watchedValues.preferredTime) {
          errors2.push('Preferred Time')
        } else {
          // Check if time is within working hours
          const [timeStr, period] = watchedValues.preferredTime.split(' ')
          if (timeStr && period) {
            const [hour, minute] = timeStr.split(':')
            const hour24 = period === 'PM' && hour !== '12' ? parseInt(hour) + 12 : 
                          period === 'AM' && hour === '12' ? 0 : parseInt(hour)
            const timeInMinutes = hour24 * 60 + parseInt(minute)
            
            const morningStart = 10 * 60 // 10 AM
            const morningEnd = 14 * 60   // 2 PM
            const eveningStart = 17 * 60 // 5 PM
            const eveningEnd = 21 * 60   // 9 PM
            
            const isWorkingHours = (timeInMinutes >= morningStart && timeInMinutes <= morningEnd) ||
                                  (timeInMinutes >= eveningStart && timeInMinutes <= eveningEnd)
            
            if (!isWorkingHours) {
              errors2.push('Time during working hours (10 AM-2 PM or 5 PM-9 PM)')
            }
          }
        }
        if (!watchedValues.concerns || watchedValues.concerns.length < 10) {
          errors2.push('Your Concerns (minimum 10 characters)')
        }
        return errors2.length > 0 ? `Please provide: ${errors2.join(', ')}` : ''
        
      case 4:
        if (!watchedValues.agreeToTerms) {
          return 'Please agree to the terms and conditions'
        }
        return ''
        
      default:
        return ''
    }
  }

  const nextStep = () => {
    setValidationAttempted(true)
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4))
      setValidationAttempted(false) // Reset for next step
    } else {
      // Trigger validation to show error messages
      handleSubmit(() => {})()
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleClose = () => {
    onOpenChange(false)
    reset()
    setCurrentStep(1)
    setValidationAttempted(false)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-2 sm:space-y-4 px-1 sm:px-2">
            <div className="text-center mb-2 sm:mb-4">
              <User className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1" />
              <h3 className="text-sm sm:text-base font-semibold">Personal Information</h3>
              <p className="text-xs text-gray-600">Let's start with your basic details</p>
            </div>
            
            <div>
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                {...register("name")}
                error={errors.name?.message}
                required
                className={watchedValues.name && watchedValues.name.length < 2 ? "border-red-500" : ""}
              />
              {watchedValues.name && getFieldError('name', watchedValues.name) && (
                <p className="text-xs text-red-600 mt-1">{getFieldError('name', watchedValues.name)}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  error={errors.email?.message}
                  required
                  className={watchedValues.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(watchedValues.email) ? "border-red-500" : ""}
                />
                {watchedValues.email && getFieldError('email', watchedValues.email) && (
                  <p className="text-xs text-red-600 mt-1">{getFieldError('email', watchedValues.email)}</p>
                )}
              </div>
              <div>
                <Input
                  label="Phone Number"
                  placeholder="10-digit mobile number"
                  {...register("phone")}
                  error={errors.phone?.message}
                  required
                  className={watchedValues.phone && !/^[6-9]\d{9}$/.test(watchedValues.phone) ? "border-red-500" : ""}
                />
                {watchedValues.phone && getFieldError('phone', watchedValues.phone) && (
                  <p className="text-xs text-red-600 mt-1">{getFieldError('phone', watchedValues.phone)}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <Input
                  label="Age"
                  type="number"
                  placeholder="Enter your age"
                  min="1"
                  max="100"
                  {...register("age", { 
                    valueAsNumber: true,
                    validate: (value) => {
                      if (!value || isNaN(value)) return "Age is required"
                      if (value < 1) return "Age must be at least 1"
                      if (value > 100) return "Age must not be more than 100"
                      return true
                    }
                  })}
                  error={errors.age?.message}
                  required
                  className={
                    (watchedValues.age !== undefined && 
                     (isNaN(Number(watchedValues.age)) || 
                      Number(watchedValues.age) < 1 || 
                      Number(watchedValues.age) > 100)) ? "border-red-500" : ""
                  }
                />
                {watchedValues.age !== undefined && getFieldError('age', watchedValues.age) && (
                  <p className="text-xs text-red-600 mt-1">{getFieldError('age', watchedValues.age)}</p>
                )}
              </div>
              <div>
                <ProfessionalDropdown
                  label="Gender"
                  placeholder="Select gender"
                  options={genderOptions}
                  value={watchedValues.gender}
                  onChange={(value) => setValue("gender", value as any)}
                  error={errors.gender?.message}
                  required
                />
                {watchedValues.gender && getFieldError('gender', watchedValues.gender) && (
                  <p className="text-xs text-red-600 mt-1">{getFieldError('gender', watchedValues.gender)}</p>
                )}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-2 sm:space-y-4 px-1 sm:px-2">
            <div className="text-center mb-2 sm:mb-4">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1" />
              <h3 className="text-sm sm:text-base font-semibold">Appointment Details</h3>
              <p className="text-xs text-gray-600">Choose your treatment and preferred time</p>
            </div>
            
            <div>
              <ProfessionalDropdown
                label="Treatment Type"
                placeholder="Select treatment"
                options={TREATMENT_OPTIONS}
                value={watchedValues.treatmentType}
                onChange={(value) => setValue("treatmentType", value)}
                error={errors.treatmentType?.message}
                required
              />
              {watchedValues.treatmentType && getFieldError('treatmentType', watchedValues.treatmentType) && (
                <p className="text-xs text-red-600 mt-1">{getFieldError('treatmentType', watchedValues.treatmentType)}</p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <CustomDatePicker
                  label="Preferred Date"
                  value={watchedValues.preferredDate}
                  onChange={(value) => setValue("preferredDate", value)}
                  error={errors.preferredDate?.message}
                  required
                  minDate={minDate}
                />
                {watchedValues.preferredDate && getFieldError('preferredDate', watchedValues.preferredDate) && (
                  <p className="text-xs text-red-600 mt-1">{getFieldError('preferredDate', watchedValues.preferredDate)}</p>
                )}
              </div>
              <div>
                <InteractiveClock
                  label="Preferred Time"
                  value={watchedValues.preferredTime}
                  onChange={(value) => setValue("preferredTime", value)}
                  error={errors.preferredTime?.message}
                  required
                />
                {watchedValues.preferredTime && getFieldError('preferredTime', watchedValues.preferredTime) && (
                  <p className="text-xs text-red-600 mt-1">{getFieldError('preferredTime', watchedValues.preferredTime)}</p>
                )}
              </div>
            </div>
            
            <div>
              <Textarea
                label="Your Concerns"
                placeholder="Please describe your skin/hair concerns and what you hope to achieve with the treatment..."
                rows={2}
                {...register("concerns")}
                error={errors.concerns?.message}
                required
                className={watchedValues.concerns && watchedValues.concerns.length < 10 ? "border-red-500" : ""}
              />
              {watchedValues.concerns && getFieldError('concerns', watchedValues.concerns) && (
                <p className="text-xs text-red-600 mt-1">{getFieldError('concerns', watchedValues.concerns)}</p>
              )}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-1 sm:space-y-2 px-1 sm:px-2">
            <div className="text-center mb-1 sm:mb-2">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1" />
              <h3 className="text-sm sm:text-base font-semibold">Medical History</h3>
              <p className="text-xs text-gray-600">Help us provide better care</p>
            </div>
            
            <Textarea
              label="Current Medications"
              placeholder="List any medications you're currently taking (optional)"
              rows={1}
              className="min-h-[35px] sm:min-h-[45px]"
              {...register("currentMedications")}
              error={errors.currentMedications?.message}
            />
            
            <Textarea
              label="Previous Treatments"
              placeholder="Any previous skin/hair treatments you've had (optional)"
              rows={1}
              className="min-h-[35px] sm:min-h-[45px]"
              {...register("previousTreatments")}
              error={errors.previousTreatments?.message}
            />
            
            <Textarea
              label="Allergies"
              placeholder="Any known allergies or sensitivities (optional)"
              rows={1}
              className="min-h-[35px] sm:min-h-[45px]"
              {...register("allergies")}
              error={errors.allergies?.message}
            />
            
            <Textarea
              label="Medical Conditions"
              placeholder="Any medical conditions we should know about (optional)"
              rows={1}
              className="min-h-[35px] sm:min-h-[45px]"
              {...register("medicalConditions")}
              error={errors.medicalConditions?.message}
            />
          </div>
        )

      case 4:
        return (
          <div className="space-y-2 sm:space-y-4 px-1 sm:px-2">
            <div className="text-center mb-2 sm:mb-4">
              <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-1" />
              <h3 className="text-sm sm:text-base font-semibold">Final Details</h3>
              <p className="text-xs text-gray-600">Review and confirm your appointment</p>
            </div>
            
            <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-1 text-xs sm:text-sm">Appointment Summary</h4>
              <div className="space-y-1 text-xs text-gray-600">
                <div><span className="font-medium">Name:</span> {watchedValues.name}</div>
                <div><span className="font-medium">Treatment:</span> {TREATMENT_OPTIONS.find(t => t.value === watchedValues.treatmentType)?.label}</div>
                <div><span className="font-medium">Date:</span> {watchedValues.preferredDate}</div>
                <div><span className="font-medium">Time:</span> {watchedValues.preferredTime}</div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-0.5"
                  {...register("agreeToTerms")}
                />
                <label htmlFor="terms" className="text-xs text-gray-600">
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
              {watchedValues.agreeToTerms !== undefined && getFieldError('agreeToTerms', watchedValues.agreeToTerms) && (
                <p className="text-xs text-red-600 mt-1">{getFieldError('agreeToTerms', watchedValues.agreeToTerms)}</p>
              )}
              {errors.agreeToTerms && (
                <p className="text-xs text-red-600 mt-1">{errors.agreeToTerms.message}</p>
              )}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      <Modal
        open={open}
        onOpenChange={handleClose}
        title="Book Your Appointment"
        description="Schedule your consultation with Dr. Shweta Sonje"
        size="xl"
      >
      <form onSubmit={handleSubmit(
        (data) => {
          console.log('✅ Form validation passed, calling onSubmit')
          onSubmit(data)
        },
        (errors) => {
          console.log('❌ Form validation failed:', errors)
        }
      )} className="px-3 sm:px-4 py-2 sm:py-4">
        {/* Progress indicator */}
        <div className="mb-2 sm:mb-3 px-1 sm:px-2">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    currentStep >= step
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`h-0.5 w-4 sm:w-6 ${
                      currentStep > step ? "bg-primary" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step content */}
        {renderStepContent()}

        {/* Validation message */}
        {!validateStep(currentStep) && currentStep < 4 && validationAttempted && (
          <div className="px-1 sm:px-2">
            <div className="bg-red-50 border border-red-200 rounded-lg p-2 mb-2">
              <p className="text-xs text-red-600">
                {getStepValidationMessage(currentStep)}
              </p>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200 px-1 sm:px-2">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-1 sm:gap-2 transition-all duration-200 hover:gap-1 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Previous
          </Button>
          
          {currentStep < 4 ? (
            <Button
              type="button"
              variant="primary"
              onClick={nextStep}
              disabled={!validateStep(currentStep)}
              className={`flex items-center gap-1 sm:gap-2 transition-all duration-200 hover:gap-3 group text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${
                !validateStep(currentStep) 
                  ? 'opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400' 
                  : 'hover:bg-primary/90'
              }`}
            >
              Next
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
              disabled={isSubmitting || !validateStep(currentStep)}
              className={`flex items-center gap-1 sm:gap-2 transition-all duration-200 hover:gap-3 group text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${
                !validateStep(currentStep) || isSubmitting
                  ? 'opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400' 
                  : 'hover:bg-primary/90'
              }`}
            >
              Book Appointment
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          )}
        </div>
      </form>
    </Modal>
    
    {/* Success Modal */}
    <SuccessModal
      open={showSuccessModal}
      onClose={() => setShowSuccessModal(false)}
      title="Appointment Booked!"
      message="Your appointment has been successfully scheduled. Confirmation emails have been sent to you and our clinic."
      duration={3000}
    />
    </>
  )
}
