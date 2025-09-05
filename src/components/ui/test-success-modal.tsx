"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import SuccessModal from "@/components/ui/success-modal"

export default function TestSuccessModal() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="p-8">
      <Button onClick={() => setShowModal(true)} className="mb-4">
        Test Modern Success Modal
      </Button>
      
      <SuccessModal
        open={showModal}
        onClose={() => setShowModal(false)}
        title="Test Success!"
        message="This is a test of the animated success modal."
        duration={3000}
      />
    </div>
  )
}
