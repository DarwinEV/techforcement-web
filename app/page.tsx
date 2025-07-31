"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ServiceCards } from "@/components/service-cards"
import { BrushWipeText } from "@/components/brush-wipe-text"
import { InteractiveCarousel } from "@/components/interactive-carousel"
import { HeroSection } from "@/components/hero-section"

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Improved ScrollTrigger settings for better performance
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true
    });

    // Hero animations with faster timing
    gsap.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.05 });
    gsap.fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.15, ease: "power3.out" });
    gsap.fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.25, ease: "power3.out" });

    // Stats counter animation with faster scroll trigger
    gsap.from(statsRef.current, {
        scrollTrigger: {
            trigger: statsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            fastScrollEnd: true // Enable fast scroll optimization
        },
        onStart: () => {
            gsap.utils.toArray<HTMLElement>(".stat-number").forEach(elem => {
                const target = parseInt(elem.getAttribute("data-value") || "0");
                gsap.to(elem, {
                    textContent: target,
                    duration: 1.5,
                    ease: "power2.out",
                    snap: { textContent: 1 },
                });
            });
        }
    });

  }, [])

  return (
    <>
      <HeroSection />
      {/* Main content that comes after hero */}
      <div className="bg-primary text-primary-foreground">
        {/* Services Overview */}
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <BrushWipeText text="Our Services" className="text-4xl md:text-5xl font-bold mb-6" />
                <BrushWipeText text="From stunning websites to comprehensive business solutions, we help you establish and grow your digital presence." className="text-xl text-neutral max-w-3xl mx-auto" />
              </div>
              <ServiceCards />
            </div>
          </section>

          {/* Stats Section */}
          <section ref={statsRef} className="py-20 px-4 bg-primary-dark/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="stat-number text-4xl md:text-5xl font-bold text-accent mb-2" data-value="75">0</div>
                  <p className="text-neutral">Projects Completed</p>
                </div>
                <div>
                  <div className="stat-number text-4xl md:text-5xl font-bold text-accent mb-2" data-value="100">0</div>
                  <p className="text-neutral">Client Satisfaction</p>
                </div>
                <div>
                  <div className="stat-number text-4xl md:text-5xl font-bold text-accent mb-2" data-value="10">0</div>
                  <p className="text-neutral">Years of Experience</p>
                </div>
                <div>
                  <div className="stat-number text-4xl md:text-5xl font-bold text-accent mb-2" data-value="50">0</div>
                  <p className="text-neutral">States Served</p>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies Showcase */}
          <section ref={caseStudiesRef} className="py-20">
            <div className="max-w-7xl mx-auto text-center mb-16">
              <BrushWipeText text="Success Stories" className="text-4xl md:text-5xl font-bold mb-6" />
              <BrushWipeText text="See how we've helped businesses like yours achieve their goals with our expert web design and business services." className="text-xl text-neutral max-w-3xl mx-auto" />
            </div>
            <InteractiveCarousel />
          </section>

           {/* Final CTA */}
           <section className="py-20 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <BrushWipeText text="Ready to Elevate Your Business?" className="text-4xl md:text-5xl font-bold mb-6" />
                <BrushWipeText text="Let's build something amazing together. Contact us today for a free, no-obligation quote and find out how we can help you achieve your goals." className="text-xl text-neutral mb-8" />
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg transition-transform duration-200 hover:scale-105">
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
           </section>
      </div>
    </>
  )
}
