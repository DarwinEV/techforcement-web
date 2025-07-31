"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animations with stagger
      gsap.fromTo(".hero-word", 
        { opacity: 0, y: 100, rotationX: -90 }, 
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1.2, 
          ease: "power3.out", 
          stagger: 0.15,
          delay: 0.3
        }
      );
      
      gsap.fromTo(".hero-subtitle", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
      );

      // Rectangle tilt animation on scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              rotation: self.progress * 8,
              scale: 1 - self.progress * 0.1,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        }
      });


      // Scroll-triggered parallax
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(".hero-content", {
            y: self.progress * -50,
            opacity: 1 - self.progress * 0.5,
            duration: 0.3
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative flex flex-col items-center justify-center h-screen bg-primary text-primary-foreground overflow-hidden">
      {/* Background Image Rectangle */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div 
          ref={imageRef}
          className="w-2/3 h-2/3 bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform-gpu transition-transform"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')" }}
          ></div>
        </div>
      </div>

      {/* Main content - positioned top left */}
      <div className="hero-content absolute top-24 left-8 md:left-16 z-20">
        <h1 className="text-6xl md:text-8xl font-bold leading-none">
          <div className="hero-word bg-gradient-to-br from-white via-accent to-cyan-300 bg-clip-text text-transparent">Design.</div>
          <div className="hero-word bg-gradient-to-br from-accent via-cyan-400 to-white bg-clip-text text-transparent">Develop.</div>
          <div className="hero-word bg-gradient-to-br from-cyan-300 via-white to-accent bg-clip-text text-transparent">Deliver.</div>
        </h1>
        
        <p className="hero-subtitle text-lg md:text-xl text-white/90 max-w-lg mt-8 leading-relaxed font-medium">
          A playground where business meets technology.
          <br />
          Built on innovation. Designed by experts.
        </p>
      </div>

    </div>
  );
}
