import { Card, CardContent } from "@/components/ui/card"
import { Code, Search, Building, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Techforcement',
  description: 'Explore the professional services offered by Techforcement, including web design, SEO, business formation, and Google Business Profile optimization.',
}

const services = [
  {
    id: "web-design",
    icon: Code,
    title: "Web Design & Development",
    description: "We create stunning, high-performance websites that are tailored to your brand and designed to convert visitors into customers. Our websites are built with modern technologies to ensure they are fast, secure, and optimized for all devices.",
    features: ["Custom Design", "Responsive & Mobile-First", "SEO Optimized", "E-commerce Solutions"],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Our SEO services are designed to increase your online visibility and drive more qualified traffic to your website. We use a combination of on-page and off-page strategies to improve your search engine rankings and grow your business.",
    features: ["Local SEO", "Keyword Research", "Content Strategy", "Link Building"],
  },
  {
    id: "business-formation",
    icon: Building,
    title: "Business Formation",
    description: "We provide comprehensive business formation services to help you get your business off the ground. We can help you with everything from registering your LLC to obtaining your EIN, so you can focus on what you do best.",
    features: ["LLC Registration", "EIN Filing", "Operating Agreements", "Compliance Support"],
  },
  {
    id: "gbp",
    icon: Zap,
    title: "Google Business Profile",
    description: "We'll optimize your Google Business Profile to help you attract more local customers. A well-optimized profile can improve your visibility in local search results and on Google Maps, driving more foot traffic and phone calls to your business.",
    features: ["Profile Setup & Optimization", "Review Management", "Local Postings", "Performance Tracking"],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-accent">Our Services</h1>
          <p className="mt-6 text-lg leading-8 text-neutral">
            We offer a comprehensive suite of services to help you establish and grow your online presence.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {services.map((service) => (
            <Card key={service.id} id={service.id} className="bg-neutral-900 border-neutral-800 overflow-hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="lg:col-span-1 flex items-center justify-center p-8 bg-accent/10">
                  <service.icon className="h-24 w-24 text-accent" />
              </div>
              <div className="lg:col-span-2 p-8">
                <h2 className="text-3xl font-bold text-accent">{service.title}</h2>
                <p className="mt-4 text-lg text-neutral">{service.description}</p>
                <ul className="mt-6 grid grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Discuss Your Project?</h2>
            <p className="mt-6 text-lg leading-8 text-neutral">
                Contact us today for a free consultation and let's talk about how we can help your business succeed.
            </p>
            <div className="mt-10">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg transition-transform duration-200 hover:scale-105">
                    <Link href="/contact">
                        Get a Free Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
} 