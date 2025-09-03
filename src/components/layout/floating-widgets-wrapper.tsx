"use client"

import { useEffect, useState } from 'react'
import { FloatingWidgets } from './floating-widgets'

export function FloatingWidgetsWrapper() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Only render FloatingWidgets after component mounts on client
  if (!isMounted) {
    return null
  }

  return <FloatingWidgets />
}
