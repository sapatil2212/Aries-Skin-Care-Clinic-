import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { CLINIC_INFO, NAVIGATION, WHATSAPP_MESSAGE } from "@/lib/constants"
import { formatPhoneNumber, generateWhatsAppUrl } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Aries Skin & General Clinic</h3>
              <p className="text-primary-light">Dr. Shweta Sonje</p>
              <p className="text-sm text-primary-light">
                Advanced Skin & Hair Treatments
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-primary-light leading-relaxed">
                  {CLINIC_INFO.address}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-primary-light hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <div>
                  <div>{formatPhoneNumber(CLINIC_INFO.phones[0])}</div>
                  <div className="text-primary-light">
                    {formatPhoneNumber(CLINIC_INFO.phones[1])}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>{CLINIC_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4" />
                <a
                  href={generateWhatsAppUrl(CLINIC_INFO.phones[0], WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Working Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Clinic Timings</span>
              </div>
              <div className="space-y-1 text-primary-light pl-6">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatments List */}
        <div className="mt-8 pt-8 border-t border-primary-light/20">
          <h4 className="text-lg font-semibold mb-4">Our Treatments</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-primary-light">
            <span>Laser Hair Reduction</span>
            <span>Medicated Hydrafacial</span>
            <span>Tattoo Removal</span>
            <span>Carbon Peel</span>
            <span>PRP/GFC for Hair</span>
            <span>Skin Tag Removal</span>
            <span>Chemical Peel</span>
            <span>Microneedling</span>
            <span>RF Skin Tightening</span>
            <span>Hair Fall Treatment</span>
            <span>Acne Treatment</span>
            <span>IV Gluta Drip</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-light/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-primary-light">
              © {new Date().getFullYear()} Aries Skin and General Clinic. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-primary-light hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-light hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
