"use client"

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the floating widgets with no SSR
const FloatingWidgetsMinimal = dynamic(
  () => import('./floating-widgets-minimal').then(mod => ({ default: mod.FloatingWidgetsMinimal })),
  { 
    ssr: false,
    loading: () => null
  }
)

export function FloatingWidgetsDynamic() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Only render after mounting
  if (!isMounted) {
    return null
  }

  return <FloatingWidgetsMinimal />
}
