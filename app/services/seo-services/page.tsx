import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Services | Techforcement',
  description: 'Boost your online visibility and drive qualified traffic to your business with our comprehensive SEO services.',
}

export default function SEOServicesPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <Link href="/services" className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 mb-6">
            SEO Services
          </h1>
          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Boost your online visibility and drive qualified traffic to your business with our comprehensive SEO services.
          </p>
        </div>

        <div className="text-center bg-gray-900/10 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-6">
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's improve your search engine visibility and drive more qualified traffic to your business.
          </p>
          <Button size="lg" asChild className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg transition-transform duration-200 hover:scale-105">
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
