"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    
    // Also handle ScrollSmoother if it exists
    const timeout = setTimeout(() => {
      const smoother = ScrollSmoother.get()
      if (smoother) {
        smoother.scrollTo(0, false) // Instantly scroll to top
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}
