import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import type { Metadata, ResolvingMetadata } from 'next'

const caseStudies = [
    {
      title: "Benavides Landscaping",
      slug: "benavides-landscaping",
      description: "Complete website redesign with local SEO optimization.",
      image: "/BenavidesLandscapingPageImage.png",
      category: "Web Design + SEO",
      link: "https://benavideslandscaping.com",
      challenge: "The client had an outdated website that was not mobile-friendly and had poor search engine visibility. They were not generating any leads from their online presence.",
      solution: "We created a professional, modern website that establishes a strong online presence tailored specifically for pursuing government contracts and bidding opportunities. The site emphasizes credibility, showcases qualifications, and presents the business as a reliable partner for municipal and state projects. We implemented strategic SEO targeting government procurement searches and integrated features that demonstrate the company's readiness for public sector work.",
      results: "The client now has a professional, government-ready online presence that clearly communicates qualifications, certifications, and past work—positioning them to pursue and win public-sector contracts and bids."
    },
    {
      title: "Coastal Cabinetry",
      slug: "coastal-cabinetry",
      description: "Online catalog showcasing cabinetry with phone-order (call-to-order) flow.",
      image: "/CoastalCabinetryPageImage.png",
      category: "Web Design",
      link: "https://coastalcabinetrynj.com",
      challenge: "The client wanted a simple way for customers to browse cabinetry and place orders by phone, but their existing site lacked a clear catalog and call-first ordering.",
      solution: "We designed a clean, mobile-first online catalog (no ecommerce). Each product page highlights finishes, sizes, and pricing guidance, and includes a prominent click-to-call button, business hours, and availability so customers can easily call to place orders or request a quote.",
      results: "The site now functions as an easy-to-use catalog with a phone-first ordering flow, improving customer confidence and making it straightforward to place orders by phone."
    },
    {
      title: "Optima Clean",
      slug: "optima-clean",
      description: "Professional service website with booking system.",
      image: "/OptimaCleanPageImage.png",
      category: "Service Business",
      link: "https://optima-clean.com",
      challenge: "The client was managing all of their bookings manually, which was time-consuming and prone to errors. They needed a more efficient way to manage their appointments and communicate with customers.",
      solution: "We developed a custom booking system that allows customers to schedule appointments online and receive automated reminders. The system also includes a customer portal where they can view their upcoming appointments and payment history.",
      results: "The new booking system has saved the client an average of 10 hours per week in administrative work. It has also improved the customer experience, with a 95% customer satisfaction rating."
    },
    {
      title: "BidAgent AI",
      slug: "bidagent-ai",
      description: "AI-powered procurement automation platform for contractors.",
      image: "/BidagentsPageImage.png",
      category: "SaaS Platform",
      link: "https://bidagent-ai.vercel.app/",
      challenge: "The construction bidding process is highly competitive and time-consuming. The client wanted to create a software solution that would help contractors save time and win more bids.",
      solution: "We developed an AI-powered SaaS platform that automates the bidding process. The platform uses machine learning to analyze project data and generate accurate bids in a fraction of the time it would take to do manually.",
      results: "The project is currently an MVP and not fully deployed. Early testing and prototypes aim to save contractors 3+ hours per bid on document preparation and 5+ hours per week searching for relevant bid opportunities once the platform is fully operational."
    },
]

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = caseStudies.find(cs => cs.slug === slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Techforcement',
    }
  }
 
  return {
    title: `${caseStudy.title} | Techforcement`,
    description: caseStudy.description,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const caseStudy = caseStudies.find(cs => cs.slug === params.slug)

    if (!caseStudy) {
        return (
            <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900 h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-900">Case Study Not Found</h1>
                <p className="mt-4 text-lg text-gray-600">
                    The case study you are looking for does not exist.
                </p>
                <Link href="/case-studies" className="mt-8">
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Case Studies
                    </Button>
                </Link>
            </div>
        )
    }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
          <div>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 transition-colors">
                <span className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Case Studies
                </span>
            </Link>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-blue-600">{caseStudy.category}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">{caseStudy.title}</h1>
            <div className="mt-8">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={800}
                height={600}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="mt-8">
              <Button size="lg" asChild className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg transition-transform duration-200 hover:scale-105">
                <a href={caseStudy.link} target="_blank" rel="noopener noreferrer">
                  Visit Live Site
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/60 shadow-lg p-8 h-full">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Challenge</h2>
                <p className="mt-4 text-lg text-gray-600">{caseStudy.challenge}</p>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900">Solution</h2>
                <p className="mt-4 text-lg text-gray-600">{caseStudy.solution}</p>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900">Results</h2>
                <p className="mt-4 text-lg text-gray-600">{caseStudy.results}</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-24 text-center bg-gray-900/10 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Ready to Start Your Project?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Let's create a success story for your business.
            </p>
            <div className="mt-10">
                <Button size="lg" asChild className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg transition-transform duration-200 hover:scale-105">
                    <Link href="/contact">
                        Get a Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
} 