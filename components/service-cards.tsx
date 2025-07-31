"use client"

import { Card } from "@/components/ui/card"
import { Code, Search, Building, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Design",
    description: "Custom websites built for performance and user experience.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Boost your online visibility and drive qualified traffic.",
  },
  {
    icon: Building,
    title: "Business Formation",
    description: "LLC registration and EIN acquisition to get you started.",
  },
  {
    icon: Zap,
    title: "Google Business Profile",
    description: "Optimize your local presence and attract more customers.",
  },
]

function ServiceCardContent({ service }) {
    const Icon = service.icon;
    return (
        <Card 
            className="h-full bg-neutral-900/80 backdrop-blur-sm border-neutral-800 text-white flex flex-col justify-center items-center text-center p-6 transition-all duration-300 hover:border-accent hover:-translate-y-2 cursor-pointer group"
        >
            <div className="p-3 bg-accent/20 rounded-lg mb-4 group-hover:bg-accent/30 transition-colors">
                <Icon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-neutral-400 leading-relaxed">{service.description}</p>
        </Card>
    )
}

export function ServiceCards() {
  return (
    <div className="relative h-[400px]">
      {/* Background gradient instead of Three.js */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 animate-pulse" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full items-center">
        {services.map((service, index) => (
          <div key={index} className="h-3/4">
            <ServiceCardContent service={service} />
          </div>
        ))}
      </div>
    </div>
  )
}
