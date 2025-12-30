"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ServiceCards } from "@/components/service-cards"
import { InteractiveCarousel } from "@/components/interactive-carousel"
import { HeroSection } from "@/components/hero-section"
import { FloatingCloud } from "@/components/floating-clouds"

const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "3", label: "Years Experience" },
  { value: "3", label: "States Served" },
]

export default function HomePage() {

  return (
    <>
      <HeroSection />
      
      {/* Services Section */}
      <ServiceCards />
      
      {/* Stats Section */}
      <section className="relative section-spacing section-padding bg-slate-50 animate-fade-in overflow-hidden">
        {/* Floating clouds */}
        <FloatingCloud position="top-right" size="md" delay="0.5s" />
        <FloatingCloud position="bottom-left" size="sm" delay="2s" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Trusted by Businesses Nationwide</h2>
            <p className="body-lg">Our track record speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
  {/* Case Studies Section */}
  <section id="success-stories" className="relative section-spacing section-padding bg-slate-50 overflow-hidden">
        {/* Floating clouds */}
        <FloatingCloud position="top-left" size="sm" delay="0.5s" />
        <FloatingCloud position="center-right" size="md" delay="1.5s" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Success Stories</h2>
            <p className="body-lg max-w-2xl mx-auto">
              See how we've helped businesses like yours achieve their goals with our expert web design and business services.
            </p>
          </div>
          <InteractiveCarousel />
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="relative section-spacing section-padding bg-slate-50 overflow-hidden">
        {/* Floating clouds */}
        <FloatingCloud position="top-right" size="sm" delay="0.5s" />
        <FloatingCloud position="bottom-left" size="md" delay="1.5s" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
          <p className="body-lg mb-12">
            Let's build something amazing together. Contact us today for a free consultation and discover how we can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="button-primary text-base px-8 py-4 h-auto">
              <Link href="/contact" className="flex items-center gap-2">
                Get Your Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="ghost" className="text-base px-8 py-4 h-auto text-gray-600 hover:text-gray-900" asChild>
              <Link href="/process" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                View Our Process
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
