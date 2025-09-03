"use client"

import { useState } from "react"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { TreatmentsPreview } from "@/components/sections/treatments-preview"
import { TestimonialsPreview } from "@/components/sections/testimonials-preview"
import { AppointmentModal } from "@/components/appointment-modal"

export default function HomePage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true)
  }

  return (
    <>
      <Hero onAppointmentClick={handleAppointmentClick} />
      <Features />
      <TreatmentsPreview onAppointmentClick={handleAppointmentClick} />
      <TestimonialsPreview onAppointmentClick={handleAppointmentClick} />
      
      <AppointmentModal
        open={isAppointmentModalOpen}
        onOpenChange={setIsAppointmentModalOpen}
      />
    </>
  )
}
