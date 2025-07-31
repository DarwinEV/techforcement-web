"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function BrushWipeText({ text, className }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
        const words = containerRef.current.querySelectorAll('.word');
        gsap.fromTo(words, 
            { clipPath: 'inset(0 100% 0 0)' },
            { 
                clipPath: 'inset(0 0% 0 0)',
                duration: 0.75,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            }
        )
    }
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {text.split(' ').map((word, index) => (
        <span key={index} className={`word inline-block ${index < text.split(' ').length - 1 ? 'mr-2' : ''}`}>{word}</span>
      ))}
    </div>
  )
} 