"use client"

import { useState } from "react"
import { AppointmentModal } from "@/components/appointment-modal"
import { Header } from "@/components/layout/header"

interface AppointmentModalProviderProps {
  children: React.ReactNode
}

export function AppointmentModalProvider({ children }: AppointmentModalProviderProps) {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  return (
    <>
      <Header onAppointmentClick={() => setIsAppointmentModalOpen(true)} />
      {children}
      <AppointmentModal
        open={isAppointmentModalOpen}
        onOpenChange={setIsAppointmentModalOpen}
      />
    </>
  )
}
