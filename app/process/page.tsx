import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Process | Techforcement',
  description: 'Learn about Techforcements project workflow, from initial consultation to delivery and ongoing maintenance.',
}

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your unique needs, goals, and budget. Through detailed consultations, we gather requirements and create a clear roadmap for your project, ensuring alignment on scope and timeline.",
  },
  {
    number: "02",
    title: "Design & Development",
    description: "Our team creates drafts and prototypes while keeping you in the loop. We maintain regular communication, share progress updates, and incorporate your feedback throughout the entire design and development phase.",
  },
  {
    number: "03",
    title: "Ongoing Improvements",
    description: "As we develop features and implement improvements, we continue having regular discussions with you. Your input shapes the final product, and we ensure every enhancement aligns with your vision and objectives.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Once your project is complete, we deliver a polished final product. We also discuss long-term maintenance options, whether you prefer ongoing support, regular updates, or a long-term maintenance contract to keep your solution running smoothly.",
  },
]

export default function ProcessPage() {
  return (
    <div className="bg-slate-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">Our Process</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            A collaborative approach to bringing your vision to life. From initial consultation to ongoing support, we keep you involved every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <Card key={index} className="bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl font-bold text-blue-600">{step.number}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white border border-gray-200/60 rounded-xl shadow-sm p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why This Process Works</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><strong>Clear Communication:</strong> Regular updates and feedback loops ensure you're never out of the loop.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><strong>Flexibility:</strong> Your input shapes the project, allowing us to adapt to your changing needs.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><strong>Quality Results:</strong> Collaborative development leads to better outcomes that truly meet your objectives.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><strong>Long-term Support:</strong> We don't just deliver—we're here to support your success with ongoing maintenance options.</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
