import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Code, Palette, Zap, Globe } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design & Development | Techforcement',
  description: 'Custom websites built for performance and exceptional user experience. Responsive design, performance optimized, and SEO ready.',
}

const features = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored solutions built from the ground up to meet your specific business needs."
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Clean, contemporary designs that reflect your brand and engage your audience."
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Fast-loading websites optimized for speed and user experience."
  },
  {
    icon: Globe,
    title: "SEO Ready",
    description: "Built with search engine optimization best practices from day one."
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements."
  },
  {
    step: "02", 
    title: "Design & Prototype",
    description: "Our team creates wireframes and designs that align with your brand and user needs."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your website using modern technologies and thoroughly test across all devices."
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We launch your website and provide ongoing support to ensure optimal performance."
  }
]

export default function WebDesignPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/services" className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 mb-6">
            Web Design & Development
          </h1>
          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Custom websites built for performance and exceptional user experience. We create digital experiences that drive results for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your website meets your goals and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-900/10 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's create a website that showcases your business and drives results. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg transition-transform duration-200 hover:scale-105">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild className="text-gray-600 hover:text-gray-900 px-8 py-4 text-lg">
              <Link href="/case-studies">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
