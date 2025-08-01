"use client"

import { ArrowRight } from "lucide-react"
import { Code, Search, Building, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Design",
    description: "Custom websites built for performance and exceptional user experience.",
    features: ["Responsive Design", "Performance Optimized", "SEO Ready"]
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Boost your online visibility and drive qualified traffic to your business.",
    features: ["Keyword Research", "Content Strategy", "Analytics"]
  },
  {
    icon: Building,
    title: "Business Formation",
    description: "LLC registration and EIN acquisition to get your business started right.",
    features: ["LLC Setup", "EIN Registration", "Legal Compliance"]
  },
  {
    icon: Zap,
    title: "Digital Marketing",
    description: "Optimize your local presence and attract more customers online.",
    features: ["Google Business", "Social Media", "Ad Campaigns"]
  },
]

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and');
  
  return (
    <Link href={`/services/${serviceSlug}`}>
      <div 
        className="card-modern group cursor-pointer h-full animate-fade-in hover:shadow-xl transition-all duration-300"
        style={{ animationDelay: `${index * 150}ms` }}
      >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="heading-md text-xl">{service.title}</h3>
      </div>
      
      <p className="body-base text-gray-600 mb-6">
        {service.description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            {feature}
          </li>
        ))}
      </ul>
      
        <div className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:gap-3 transition-all">
          Learn more
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}

export function ServiceCards() {
  return (
    <div className="section-spacing section-padding animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 animate-slide-up">Our Services</h2>
          <p className="body-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            From stunning websites to comprehensive business solutions, we help you establish and grow your digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
