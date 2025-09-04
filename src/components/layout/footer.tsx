"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Globe, Facebook, Instagram, Headphones } from "lucide-react"
import { CLINIC_INFO, NAVIGATION, WHATSAPP_MESSAGE } from "@/lib/constants"
import { formatPhoneNumber, generateWhatsAppUrl } from "@/lib/utils"

// Colorful Google Icon Component
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export function Footer() {

  return (
    <>
      <div className="bg-stone-50 py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          {/* Main Footer Content with Rounded Corners */}
          <div className="bg-primary rounded-t-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                <path d="M20,20 Q30,10 40,20 Q50,30 60,20 Q70,10 80,20" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="25" cy="25" r="2" fill="currentColor"/>
                <circle cx="75" cy="25" r="2" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                <path d="M10,80 Q20,70 30,80 Q40,90 50,80 Q60,70 70,80" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="75" r="2" fill="currentColor"/>
                <circle cx="60" cy="75" r="2" fill="currentColor"/>
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
              {/* Branding and Google Review */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src="/logo/clinic-logo.webp" 
                        alt="Aries Skin Clinic Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Aries.</h3>
                      <p className="text-white/80 text-sm">Skin & General Clinic</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    With a passion for skin health, Aries combines the latest technologies with expert care to deliver exceptional results.
                  </p>
                </div>
                
                {/* Rate us on Google */}
                <div className="pt-2">
                  <Link 
                    href="https://www.google.com/search?q=aries+skin+and+general+clinic+nashik+&sca_esv=7550878c098e0420&sxsrf=AE3TifOPvaE7dkPa8yfjWERpjQfo20SWiQ%3A1756993950139&source=hp&ei=npm5aM62Bbvi2roPxYLdwQU&iflsig=AOw8s4IAAAAAaLmnrlJL-_ZT8tc8ehsp8DOjZPZZtAEM&ved=0ahUKEwjO_ZHCoL-PAxU7sVYBHUVBN1gQ4dUDCBo&uact=5&oq=aries+skin+and+general+clinic+nashik+&gs_lp=Egdnd3Mtd2l6IiVhcmllcyBza2luIGFuZCBnZW5lcmFsIGNsaW5pYyBuYXNoaWsgMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRifBTIFECEYnwVIslRQAFiQU3ACeACQAQCYAZQCoAGgOKoBBzAuMjcuMTC4AQPIAQD4AQGYAiegAsY5wgIKECMY8AUYyQIYJ8ICChAjGMkCGPAFGCfCAgoQABiABBiKBRhDwgINEC4YgAQYigUYQxixA8ICDRAAGIAEGIoFGEMYsQPCAgsQLhiABBixAxiDAcICFBAuGIAEGIoFGJECGLEDGMcBGNEDwgINEC4YQxiABBjlBBiKBcICERAuGIMBGMcBGLEDGNEDGIAEwgIKEC4YgAQYigUYQ8ICCxAAGIAEGLEDGIMBwgIIEC4YgAQYsQPCAggQABiABBixA8ICBRAAGIAEwgIFEC4YgATCAgYQABgWGB7CAggQABgWGB4YCsICCxAAGIAEGIoFGIYDwgIIEAAYgAQYogTCAgUQABjvBcICCBAAGIkFGKIEwgIEECEYFcICBxAhGAoYoAGYAwCSBwcyLjIxLjE2oAfRpQGyBwcwLjIxLjE2uAfBOcIHCzUuMjIuMTEuMC4xyAd6&sclient=gws-wiz#lrd=0x3bddebba552420eb:0x2e4fb303571dcc31,3,,,,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group"
                    title="Review us on Google"
                  >
                    <GoogleIcon 
                      className="w-5 h-5 text-gray-600 group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 leading-none">review us</span>
                      <span className="text-sm text-gray-700 font-medium leading-none">on Google</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Contact Us */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm">For more information</p>
                      <a 
                        href={`tel:+91${CLINIC_INFO.phones[0]}`}
                        className="text-white font-medium hover:text-white/80 transition-colors"
                      >
                        {formatPhoneNumber(CLINIC_INFO.phones[0])}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Headphones className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm">Emergency toll free no</p>
                      <a 
                        href={`tel:+91${CLINIC_INFO.phones[1]}`}
                        className="text-white font-medium hover:text-white/80 transition-colors"
                      >
                        {formatPhoneNumber(CLINIC_INFO.phones[1])}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get In Touch */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Location</p>
                    <a 
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 text-sm leading-relaxed hover:text-white transition-colors block"
                    >
                      {CLINIC_INFO.address}
                    </a>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Email</p>
                    <a 
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="text-white/90 text-sm hover:text-white transition-colors"
                    >
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Quick Link</h4>
                <nav className="space-y-3">
                  {NAVIGATION.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-white/90 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Bottom Section with Copyright and Social Media */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                <div className="text-white text-sm">
                  Copyright © {new Date().getFullYear()} All Rights Reserved.
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-white text-sm">Follow Us On Social</span>
                  <div className="flex space-x-3">
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Globe className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Facebook className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Instagram className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Section */}
      <div className="bg-stone-50 pb-4 pt-2">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col space-y-2">
            {/* Credit Text */}
            <div className="text-center">
              <p className="text-xs text-gray-600">
                Made with ❤️ by{' '}
                <a 
                  href="https://digiworldtechnologies.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary underline hover:no-underline transition-all duration-200 font-medium"
                >
                  Digiworld Infotech
                </a>
              </p>
            </div>
            
            {/* Policy Links */}
            <div className="flex gap-4 justify-center">
              <Link 
                href="/privacy"
                className="text-xs text-gray-600 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-xs text-gray-600 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
