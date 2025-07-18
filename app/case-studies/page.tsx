"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function CaseStudiesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animation
    gsap.fromTo(".hero-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    // Cards animation
    gsap.fromTo(
      ".case-card",
      { opacity: 0, y: 50, rotationY: -15 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  const caseStudies = [
    {
      id: "benavides-landscaping",
      title: "Benavides Landscaping",
      category: "Web Design + SEO",
      description:
        "Complete website redesign with local SEO optimization for a growing landscaping business in New Jersey.",
      image: "/placeholder.svg?height=400&width=600",
      results: {
        traffic: "300%",
        leads: "250%",
        ranking: "#1 Local",
      },
      technologies: ["Next.js", "Tailwind CSS", "Local SEO", "Google Analytics"],
      challenge: "Outdated website with poor mobile experience and no local search visibility.",
      solution: "Modern responsive design with optimized local SEO strategy and lead capture forms.",
      outcome: "Became the top-ranked landscaping service in their area with 3x more inquiries.",
      testimonial: "Techforcement transformed our online presence. We're now getting calls daily from our website!",
      client: "Maria Benavides, Owner",
    },
    {
      id: "coastal-cabinetry",
      title: "Coastal Cabinetry NJ",
      category: "E-commerce",
      description: "Custom e-commerce platform with product configurator for a high-end cabinetry manufacturer.",
      image: "/placeholder.svg?height=400&width=600",
      results: {
        sales: "150%",
        conversion: "45%",
        avgOrder: "$2,800",
      },
      technologies: ["Next.js", "Stripe", "3D Configurator", "CMS"],
      challenge: "Complex product customization process was losing potential customers.",
      solution: "Interactive 3D product configurator with real-time pricing and seamless checkout.",
      outcome: "Streamlined sales process resulted in higher conversion rates and larger orders.",
      testimonial: "The configurator tool has revolutionized how we sell custom cabinets online.",
      client: "James Mitchell, Sales Director",
    },
    {
      id: "optima-clean",
      title: "Optima Clean",
      category: "Service Business",
      description: "Professional cleaning service website with online booking system and customer portal.",
      image: "/placeholder.svg?height=400&width=600",
      results: {
        bookings: "200%",
        retention: "85%",
        efficiency: "40%",
      },
      technologies: ["React", "Booking System", "Payment Processing", "CRM Integration"],
      challenge: "Manual booking process was inefficient and limiting business growth.",
      solution: "Automated booking system with customer portal and integrated payment processing.",
      outcome: "Doubled online bookings while reducing administrative overhead significantly.",
      testimonial: "Our booking system has made managing our business so much easier and more profitable.",
      client: "Sarah Chen, Founder",
    },
    {
      id: "bidagent-ai",
      title: "BidAgent AI",
      category: "SaaS Platform",
      description: "AI-powered bidding platform for construction contractors with advanced analytics.",
      image: "/placeholder.svg?height=400&width=600",
      results: {
        users: "500+",
        accuracy: "92%",
        timeSaved: "75%",
      },
      technologies: ["Next.js", "AI/ML", "PostgreSQL", "Stripe", "Analytics"],
      challenge: "Construction bidding process was time-consuming and often inaccurate.",
      solution: "AI-powered platform that analyzes project requirements and generates accurate bids.",
      outcome: "Contractors save hours per bid while achieving higher accuracy and win rates.",
      testimonial: "BidAgent AI has transformed how we approach bidding. Our win rate has never been higher.",
      client: "Mike Rodriguez, General Contractor",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center hero-content">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Success Stories That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Drive Results
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across the United States achieve their goals with our expert web design
            and comprehensive business services.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={cardsRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
                className="case-card bg-slate-800 border-slate-700 overflow-hidden group hover:border-teal-500 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{study.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-teal-400 mb-1">{value}</div>
                        <div className="text-xs text-slate-400 capitalize">
                          {key === "avgOrder" ? "Avg Order" : key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-teal-500 pl-4 mb-4">
                    <p className="text-slate-300 italic mb-2">"{study.testimonial}"</p>
                    <cite className="text-teal-400 text-sm">— {study.client}</cite>
                  </blockquote>

                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white" asChild>
                    <Link href={`/case-studies/${study.id}`}>
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our proven strategies and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
