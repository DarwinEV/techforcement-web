"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ServiceCards } from "@/components/service-cards"
import { LoadingScreen } from "@/components/loading-screen"
import { useState } from "react"

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      // Hero animations
      gsap.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" },
      )

      gsap.fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" })

      // Text reveal animation on scroll
      gsap.fromTo(
        ".reveal-text",
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".reveal-text",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Stats counter animation
      gsap.fromTo(
        ".stat-number",
        { textContent: 0 },
        {
          textContent: (i, target) => target.getAttribute("data-value"),
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        },
      )

      // Case studies fade in
      gsap.fromTo(
        ".case-study-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: caseStudiesRef.current,
            start: "top 80%",
          },
        },
      )
    }
  }, [isLoading])

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6">
            Expert Web Design That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Drives Business Growth
            </span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We create high-performance websites and provide comprehensive business services for small to medium-sized
            businesses across the United States.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="reveal-text text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From stunning websites to comprehensive business solutions, we help you establish and grow your digital
              presence.
            </p>
          </div>

          <ServiceCards />
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-number text-4xl md:text-5xl font-bold text-teal-400 mb-2" data-value="150">
                0
              </div>
              <p className="text-slate-300">Projects Completed</p>
            </div>
            <div>
              <div className="stat-number text-4xl md:text-5xl font-bold text-teal-400 mb-2" data-value="98">
                0
              </div>
              <p className="text-slate-300">Client Satisfaction %</p>
            </div>
            <div>
              <div className="stat-number text-4xl md:text-5xl font-bold text-teal-400 mb-2" data-value="50">
                0
              </div>
              <p className="text-slate-300">States Served</p>
            </div>
            <div>
              <div className="stat-number text-4xl md:text-5xl font-bold text-teal-400 mb-2" data-value="24">
                0
              </div>
              <p className="text-slate-300">Hour Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section ref={caseStudiesRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve their goals with our expert web design and business
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Benavides Landscaping",
                description: "Complete website redesign with local SEO optimization",
                image: "/placeholder.svg?height=300&width=400",
                results: "300% increase in online inquiries",
                category: "Web Design + SEO",
              },
              {
                title: "Coastal Cabinetry NJ",
                description: "E-commerce platform with custom product configurator",
                image: "/placeholder.svg?height=300&width=400",
                results: "150% boost in online sales",
                category: "E-commerce",
              },
              {
                title: "Optima Clean",
                description: "Professional service website with booking system",
                image: "/placeholder.svg?height=300&width=400",
                results: "200% more bookings",
                category: "Service Business",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="case-study-card bg-slate-800 border-slate-700 overflow-hidden group hover:border-teal-500 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm">{project.category}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-teal-400 font-semibold">{project.results}</span>
                    <Button variant="ghost" size="sm" className="text-teal-400 hover:text-teal-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white bg-transparent"
              >
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that trust Techforcement for their web design and business service
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
