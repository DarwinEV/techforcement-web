"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin)

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete,
        })
      },
    })

    // Animate each letter appearing
    tl.fromTo(
      ".letter",
      {
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.1,
        stagger: 0.05,
        ease: "back.out(1.7)",
      },
    )
      .to(
        ".letter",
        {
          color: "#14b8a6",
          duration: 0.3,
          stagger: 0.02,
        },
        "-=0.5",
      )
      .to(textRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(textRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      })

    return () => {
      tl.kill()
    }
  }, [onComplete])

  const letters = "TECHFORCEMENT".split("")

  return (
    <div ref={containerRef} className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div ref={textRef} className="text-6xl md:text-8xl font-bold">
        {letters.map((letter, index) => (
          <span key={index} className="letter inline-block text-white" style={{ transformOrigin: "center bottom" }}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}
