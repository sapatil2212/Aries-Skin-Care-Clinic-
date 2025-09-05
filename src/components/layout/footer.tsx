"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight, Globe, Facebook, Instagram } from "lucide-react"
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
                </div>
                
                {/* Follow Us On Social */}
                <div className="pt-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-white text-sm">Follow Us On Social</span>
                    <div className="flex space-x-2">
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

                {/* Rate us on Google */}
                <div className="pt-4">
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
                  <div className="flex items-center space-x-3">
                    <a
                      href={`tel:+91${CLINIC_INFO.phones[0]}`}
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Phone className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href={`tel:+91${CLINIC_INFO.phones[0]}`}
                      className="text-white font-medium hover:text-white/80 transition-colors"
                    >
                      {formatPhoneNumber(CLINIC_INFO.phones[0])}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href={generateWhatsAppUrl(CLINIC_INFO.phones[1], WHATSAPP_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                      </svg>
                    </a>
                    <a 
                      href={`tel:+91${CLINIC_INFO.phones[1]}`}
                      className="text-white font-medium hover:text-white/80 transition-colors"
                    >
                      {formatPhoneNumber(CLINIC_INFO.phones[1])}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                    >
                      <Mail className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="text-white/90 text-sm hover:text-white transition-colors"
                    >
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Get In Touch */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                    >
                      <MapPin className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 text-sm leading-relaxed hover:text-white transition-colors"
                    >
                      {CLINIC_INFO.address}
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

            {/* Bottom Section - All elements in one horizontal line */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/80">
                {/* Copyright */}
                <span>Copyright © {new Date().getFullYear()}, Aries Skin and General Clinic. All Rights Reserved.</span>
                
                {/* Separator */}
                <span className="text-white/60">|</span>
                
                {/* Credit */}
                <span>
                  Made with ❤️ by{' '}
                  <a 
                    href="https://digiworldtechnologies.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white underline hover:no-underline transition-all duration-200 font-medium"
                  >
                    Digiworld Infotech
                  </a>
                </span>
                
                {/* Separator */}
                <span className="text-white/60">|</span>
                
                {/* Policy Links */}
                <div className="flex gap-2">
                  <Link 
                    href="/privacy"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-white/60">|</span>
                  <Link 
                    href="/terms"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
