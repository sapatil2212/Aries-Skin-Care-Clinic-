"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, MapPin, ArrowRight, ChevronDown, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { NAVIGATION, CLINIC_INFO } from "@/lib/constants"
import { cn, formatPhoneNumber } from "@/lib/utils"

interface HeaderProps {
  onAppointmentClick: () => void
}

export function Header({ onAppointmentClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isTreatmentsOpen, setIsTreatmentsOpen] = React.useState(false)
  const [openSubCategories, setOpenSubCategories] = React.useState<Set<string>>(new Set())
  const pathname = usePathname()
  const menuRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setIsMenuOpen(false)
    setIsTreatmentsOpen(false)
    setOpenSubCategories(new Set())
  }, [pathname])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
        setIsTreatmentsOpen(false)
        setOpenSubCategories(new Set())
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const handleGetDirections = () => {
    const googleMapsUrl = "https://maps.app.goo.gl/41wjFQCukoUpB9m29?g_st=ipc"
    window.open(googleMapsUrl, "_blank")
  }

  const handleWhatsAppClick = () => {
    const phone = CLINIC_INFO.phones[1] || CLINIC_INFO.phones[0] // Use second phone number for WhatsApp
    const message = "Hello! I would like to book an appointment at Aries Skin and General Clinic. Please let me know your availability."
    const cleanPhone = phone.replace(/\D/g, '')
    const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`
    const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const toggleTreatments = () => {
    setIsTreatmentsOpen(!isTreatmentsOpen)
    if (isTreatmentsOpen) {
      setOpenSubCategories(new Set())
    }
  }

  const toggleSubCategory = (categoryId: string) => {
    setOpenSubCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="container mx-auto px-6 sm:px-8 lg:px-32">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
            <div className="flex items-center justify-between sm:justify-start sm:space-x-6">
              {/* Contact Number */}
              <a
                href={`tel:+91${CLINIC_INFO.phones[0]}`}
                className="flex items-center space-x-1 text-xs hover:text-gray-200 transition-colors"
              >
                <Phone className="h-3 w-3" />
                <span>{formatPhoneNumber(CLINIC_INFO.phones[0])}</span>
              </a>
              
              {/* Vertical Separator - Mobile Only */}
              <div className="w-px h-4 bg-white/30 sm:hidden"></div>
              
              {/* Get Direction - Mobile Only */}
              <button
                onClick={handleGetDirections}
                className="flex items-center space-x-1 text-xs hover:text-gray-200 transition-colors sm:hidden"
              >
                <span>Get Direction</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-3 w-3" />
                </motion.div>
              </button>
              
              {/* WhatsApp Contact - Desktop Only */}
              <button
                onClick={handleWhatsAppClick}
                className="hidden sm:flex items-center space-x-1 text-xs hover:text-gray-200 transition-colors"
              >
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>{formatPhoneNumber(CLINIC_INFO.phones[1] || CLINIC_INFO.phones[0])}</span>
              </button>
            </div>
            
            {/* Get Direction - Desktop Only */}
            <button
              onClick={handleGetDirections}
              className="hidden sm:flex items-center space-x-1 text-xs hover:text-gray-200 transition-colors"
            >
              <span>Get Direction</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-3 w-3" />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        )}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src="/logo/clinic-logo.webp" 
                  alt="Aries Skin Clinic Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary leading-tight">
                  Aries Skin & General Clinic
                </h1>
                <p className="text-sm text-gray-600">Dr. Shweta Sonje</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAVIGATION.map((item) => (
                <div key={item.href} className="relative group">
                  {item.hasDropdown ? (
                    <div className="flex items-center gap-1 cursor-pointer py-2">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <ChevronDown className="h-3 w-3 text-gray-500 group-hover:text-primary transition-colors" />
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary py-2",
                        pathname === item.href
                          ? "text-primary border-b-2 border-primary"
                          : "text-gray-700"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                                      {/* Treatments Dropdown */}
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-3">
                            {item.dropdownItems.map((category) => (
                              <div key={category.id} className="group/category relative">
                                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors">
                                  <div className="flex-1">
                                    <h4 className="font-medium text-gray-900 group-hover/category:text-primary transition-colors">
                                      {category.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {category.description}
                                    </p>
                                  </div>
                                  {category.hasSubDropdown && (
                                    <div className="text-gray-400 group-hover/category:text-primary transition-colors">
                                      <ArrowRight className="h-4 w-4" />
                                    </div>
                                  )}
                                </div>
                                
                                {/* Sub-dropdown for treatments - positioned to the right */}
                                {category.hasSubDropdown && category.subItems && (
                                  <div className="absolute left-full top-0 ml-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/category:opacity-100 group-hover/category:visible transition-all duration-300 z-50">
                                    <div className="p-4">
                                      <div className="mb-3 pb-2 border-b border-gray-200">
                                        <h5 className="font-semibold text-gray-900 text-sm">{category.name}</h5>
                                        <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                                      </div>
                                      <div className="space-y-1">
                                        {category.subItems.map((treatment) => (
                                          <Link
                                            key={treatment.id}
                                            href={treatment.href}
                                            className="block text-sm text-gray-600 py-2.5 px-3 hover:text-primary hover:bg-primary/5 transition-colors rounded-lg"
                                          >
                                            {treatment.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-gray-200">
                            <Link
                              href="/treatments"
                              className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
                            >
                              View All Treatments →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`tel:+91${CLINIC_INFO.phones[0]}`)}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={onAppointmentClick}
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-4">
                                  <nav className="flex flex-col space-y-4">
                    {NAVIGATION.map((item) => (
                      <div key={item.href}>
                        {item.hasDropdown && item.dropdownItems ? (
                          <div className="space-y-2">
                            <button
                              onClick={toggleTreatments}
                              className="flex items-center justify-between w-full text-xs font-medium py-2.5 px-2 text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-50"
                            >
                              <span>{item.name}</span>
                              <motion.div
                                animate={{ rotate: isTreatmentsOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-gray-500"
                              >
                                <ChevronDown className="h-3.5 w-3.5" />
                              </motion.div>
                            </button>
                            
                            <AnimatePresence>
                              {isTreatmentsOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 space-y-2 bg-gray-50/80 rounded-xl p-3 border border-gray-200/60">
                                    {item.dropdownItems.map((category) => (
                                      <div key={category.id} className="space-y-2">
                                        <button
                                          onClick={() => toggleSubCategory(category.id)}
                                          className="flex items-center justify-between w-full text-xs font-medium py-2 px-3 text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-white/80"
                                        >
                                          <div className="text-left">
                                            <div className="font-medium text-xs">{category.name}</div>
                                            <div className="text-xs text-gray-500 mt-0.5">{category.description}</div>
                                          </div>
                                          {category.hasSubDropdown && (
                                            <motion.div
                                              animate={{ rotate: openSubCategories.has(category.id) ? 180 : 0 }}
                                              transition={{ duration: 0.2 }}
                                              className="text-gray-400"
                                            >
                                              <ChevronDown className="h-3.5 w-3.5" />
                                            </motion.div>
                                          )}
                                        </button>
                                        
                                        {/* Sub-dropdown for treatments */}
                                        {category.hasSubDropdown && category.subItems && (
                                          <AnimatePresence>
                                            {openSubCategories.has(category.id) && (
                                              <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden ml-4 pl-4 border-l-2 border-primary/20 space-y-1"
                                              >
                                                <div className="max-h-48 overflow-y-auto pr-2">
                                                  {category.subItems.map((treatment) => (
                                                    <Link
                                                      key={treatment.id}
                                                      href={treatment.href}
                                                      className="block text-xs text-gray-600 py-1.5 px-3 hover:text-primary hover:bg-white/80 transition-all duration-200 rounded-lg"
                                                    >
                                                      {treatment.name}
                                                    </Link>
                                                  ))}
                                                </div>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        )}
                                      </div>
                                    ))}
                                    <div className="pt-2">
                                      <Link
                                        href={item.href}
                                        className="block text-xs text-primary font-medium py-2 px-3 hover:text-primary-dark hover:bg-white/80 transition-all duration-200 rounded-lg"
                                      >
                                        View All Treatments →
                                      </Link>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              "text-xs font-medium py-2.5 px-2 transition-colors hover:text-primary rounded-lg hover:bg-gray-50",
                              pathname === item.href
                                ? "text-primary font-semibold bg-primary/5"
                                : "text-gray-700"
                            )}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  <div className="flex flex-row space-x-2 pt-4 border-t border-gray-200">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`tel:+91${CLINIC_INFO.phones[0]}`)}
                      className="flex-1"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={onAppointmentClick}
                      className="flex-1"
                    >
                      Book Appointment
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
