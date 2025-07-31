"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Benavides Landscaping",
    slug: "benavides-landscaping",
    description: "Complete website redesign with local SEO optimization.",
    image: "/BenavidesLandscapingPageImage.png",
    category: "Web Design + SEO",
    link: "https://benavideslandscaping.com",
  },
  {
    title: "Coastal Cabinetry",
    slug: "coastal-cabinetry",
    description: "Luxury cabinetry website with portfolio showcase.",
    image: "/CoastalCabinetryPageImage.png",
    category: "Web Design",
    link: "https://coastalcabinetrynj.com",
  },
  {
    title: "Optima Clean",
    slug: "optima-clean",
    description: "Professional cleaning service website with booking system.",
    image: "/OptimaCleanPageImage.png",
    category: "Service Business",
    link: "https://optima-clean.com",
  },
  {
    title: "BidAgent AI",
    slug: "bidagent-ai",
    description: "AI-powered procurement automation platform for contractors.",
    image: "/BidagentsPageImage.png",
    category: "SaaS Platform",
    link: "https://bidagent-ai.vercel.app/",
  },
]

export default function CaseStudiesClientPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-accent">Our Work</h1>
          <p className="mt-6 text-lg leading-8 text-neutral">
            We've helped businesses of all sizes achieve their goals. Here are a few of our success stories.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((project) => (
            <Link href={`/case-studies/${project.slug}`} key={project.slug} className="group">
              <div className="relative overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-105">
                {/* Animated Glow Effect */}
                <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" 
                     style={{
                       background: 'linear-gradient(45deg, #22D3EE, #3B82F6, #22D3EE, #8B5CF6, #22D3EE)',
                       backgroundSize: '400% 400%',
                       animation: 'glow-rotate 3s ease-in-out infinite'
                     }} />
                
                {/* Main card content */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center text-accent font-bold group-hover:text-accent/90 transition-colors duration-300">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
