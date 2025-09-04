"use client"

import { useState } from "react"
import { Modal } from "./modal"
import { Button } from "./button"

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="space-y-4 text-sm text-gray-700">
        <p>
          At Aries Skin and General Clinic, we are committed to protecting your privacy and personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your information when you visit our clinic or use our services.
        </p>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Information We Collect</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal information (name, contact details, medical history)</li>
            <li>Appointment and treatment records</li>
            <li>Payment and billing information</li>
            <li>Website usage data (if applicable)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">How We Use Your Information</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide medical services and treatments</li>
            <li>Schedule and manage appointments</li>
            <li>Maintain medical records</li>
            <li>Process payments</li>
            <li>Send appointment reminders</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Information Protection</h3>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, 
            alteration, disclosure, or destruction. Your medical records are kept confidential and secure.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: ariesskin25@gmail.com
            <br />
            Phone: +91 75888 32221
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
