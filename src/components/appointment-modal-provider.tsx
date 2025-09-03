"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { AppointmentModal } from "@/components/appointment-modal"
import { Header } from "@/components/layout/header"

interface AppointmentModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const AppointmentModalContext = createContext<AppointmentModalContextType | undefined>(undefined)

export function useAppointmentModal() {
  const context = useContext(AppointmentModalContext)
  if (context === undefined) {
    throw new Error('useAppointmentModal must be used within an AppointmentModalProvider')
  }
  return context
}

interface AppointmentModalProviderProps {
  children: ReactNode
}

export function AppointmentModalProvider({ children }: AppointmentModalProviderProps) {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const openModal = () => setIsAppointmentModalOpen(true)
  const closeModal = () => setIsAppointmentModalOpen(false)

  return (
    <AppointmentModalContext.Provider value={{ isOpen: isAppointmentModalOpen, openModal, closeModal }}>
      <Header onAppointmentClick={openModal} />
      {children}
      <AppointmentModal
        open={isAppointmentModalOpen}
        onOpenChange={setIsAppointmentModalOpen}
      />
    </AppointmentModalContext.Provider>
  )
}
