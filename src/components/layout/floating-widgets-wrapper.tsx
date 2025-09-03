"use client"

import { useEffect, useState } from 'react'
import { FloatingWidgetsDynamic } from './floating-widgets-dynamic'

export function FloatingWidgetsWrapper() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Only render FloatingWidgets after component mounts on client
  if (!isMounted) {
    return null
  }

  return <FloatingWidgetsDynamic />
}
