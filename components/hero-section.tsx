"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { useCallback } from "react"
import { FloatingCloud } from "@/components/floating-clouds"

export function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen section-padding section-spacing bg-slate-50 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern-light opacity-30" />
      
      {/* Floating clouds for flair */}
      <FloatingCloud position="top-left" size="md" delay="0s" />
      <FloatingCloud position="top-right" size="sm" delay="1s" />
      <FloatingCloud position="bottom-left" size="lg" delay="2s" />
      
      <div className="hero-content text-center z-20 max-w-4xl mx-auto">
        <h1 className="heading-xl mb-6">
          <div className="hero-word text-gradient animate-slide-up">Transform</div>
          <div className="hero-word text-gradient animate-slide-up" style={{ animationDelay: '200ms' }}>Your Business</div>
          <div className="hero-word text-gradient animate-slide-up" style={{ animationDelay: '400ms' }}>Online</div>
        </h1>
        
        <p className="hero-subtitle body-lg max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
          We create exceptional web experiences that drive growth. From stunning websites to comprehensive business solutions.
        </p>
        
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in" style={{ animationDelay: '800ms' }}>
          <Button asChild className="button-primary text-base px-8 py-4 h-auto hover:scale-105 transition-transform">
            <Link href="/contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          
          <Button
            variant="ghost"
            onClick={useCallback(() => {
              const el = document.getElementById('success-stories')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, [])}
            className="text-base px-8 py-4 h-auto text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform"
          >
            <Play className="h-4 w-4 mr-2" />
            View Our Work
          </Button>
        </div>
      </div>
      
      {/* Floating elements with enhanced animations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-indigo-500/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
    </div>
  );
}
