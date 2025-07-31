"use client"

import Link from "next/link"

const caseStudies = [
  {
    title: "Benavides Landscaping",
    slug: "benavides-landscaping",
    image: "/BenavidesLandscapingPageImage.png",
  },
  {
    title: "Coastal Cabinetry NJ",
    slug: "coastal-cabinetry-nj",
    image: "/CoastalCabinetryPageImage.png",
  },
  {
    title: "Optima Clean",
    slug: "optima-clean",
    image: "/OptimaCleanPageImage.png",
  },
  {
    title: "BidAgent AI",
    slug: "bidagent-ai",
    image: "/BidagentsPageImage.png",
  },
]

export function InteractiveCarousel() {
  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {caseStudies.map((project, index) => (
          <Link href={`/case-studies/${project.slug}`} key={index}>
            <div className="group relative cursor-pointer">
              {/* Animated Glow Effect - Outside the card */}
              <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" 
                   style={{
                     background: 'linear-gradient(45deg, #22D3EE, #3B82F6, #22D3EE, #8B5CF6, #22D3EE)',
                     backgroundSize: '400% 400%',
                     animation: 'glow-rotate 3s ease-in-out infinite'
                   }} />
              
              {/* Main card */}
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-900">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300" 
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-end p-6">
                  <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
