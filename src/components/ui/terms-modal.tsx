"use client"

import { useState } from "react"
import { Modal } from "./modal"
import { Button } from "./button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms of Service">
      <div className="space-y-4 text-sm text-gray-700">
        <p>
          Welcome to Aries Skin and General Clinic. These Terms of Service govern your use of our medical services 
          and clinic facilities. By using our services, you agree to these terms.
        </p>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Medical Services</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>All treatments are performed by qualified medical professionals</li>
            <li>Results may vary from person to person</li>
            <li>Follow-up appointments may be required for optimal results</li>
            <li>Pre-treatment consultation is mandatory for all procedures</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Appointments and Cancellations</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Appointments must be scheduled in advance</li>
            <li>24-hour notice required for cancellations</li>
            <li>Late arrivals may result in rescheduling</li>
            <li>No-show fees may apply for missed appointments</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Payment Terms</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Payment is due at the time of service</li>
            <li>We accept cash, card, and digital payments</li>
            <li>Package deals are non-refundable</li>
            <li>Insurance claims are patient responsibility</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Liability and Disclaimers</h3>
          <p>
            While we strive to provide the best possible care, we cannot guarantee specific results. 
            Patients are responsible for following post-treatment care instructions and attending follow-up appointments.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
          <p>
            For questions about these terms, please contact us:
            <br />
            Email: ariesskin25@gmail.com
            <br />
            Phone: +91 75888 32221
            <br />
            Address: Shop No 1, Keystone Residency Apartment, Behind Sharad Pawar Fruit Market, 
            Peth-Makhalamabad Link Road, Samarth Nagar, Panchavati, Nashik - 422001
          </p>
        </div>

        <p className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      
      <div className="flex justify-end mt-6">
        <Button onClick={onClose} variant="outline">
          Close
        </Button>
      </div>
    </Modal>
  )
}
