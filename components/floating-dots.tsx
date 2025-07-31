"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function FloatingDots() {
  const dotsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating elements animation
      gsap.set(".floating-dot", {
        opacity: 0,
        scale: 0
      });

      gsap.to(".floating-dot", {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.1,
        delay: 1.2
      });

      // Continuous floating animation
      gsap.to(".floating-dot", {
        y: "-=20",
        rotation: "+=5",
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });
    }, dotsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={dotsRef} className="fixed inset-0 z-0 pointer-events-none">
      {/* Floating decorative elements spread across the site */}
      <div className="floating-dot absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full opacity-60"></div>
      <div className="floating-dot absolute top-1/3 right-1/4 w-6 h-6 bg-cyan-400 rounded-full opacity-40"></div>
      <div className="floating-dot absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full opacity-80"></div>
      <div className="floating-dot absolute top-1/2 right-1/3 w-5 h-5 bg-cyan-300 rounded-full opacity-50"></div>
      <div className="floating-dot absolute bottom-1/4 right-1/5 w-4 h-4 bg-accent rounded-full opacity-70"></div>
      <div className="floating-dot absolute top-1/5 left-1/5 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
      <div className="floating-dot absolute top-3/4 left-1/2 w-3 h-3 bg-cyan-500 rounded-full opacity-50"></div>
      <div className="floating-dot absolute bottom-1/5 left-3/4 w-4 h-4 bg-accent rounded-full opacity-60"></div>
      <div className="floating-dot absolute top-1/6 right-1/6 w-2 h-2 bg-cyan-300 rounded-full opacity-70"></div>
      <div className="floating-dot absolute bottom-1/2 right-1/2 w-5 h-5 bg-accent rounded-full opacity-40"></div>
    </div>
  );
}
