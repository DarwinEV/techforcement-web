"use client"

import { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export function SmoothScroller({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 2,
      speed: 3,
      effects: true,
    })
  }, [])

  return (
    <div id="wrapper">
      <div id="content">{children}</div>
    </div>
  )
} 