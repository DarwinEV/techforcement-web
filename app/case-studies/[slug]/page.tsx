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
      solution: "We designed and developed a new, modern website with a focus on user experience and mobile-first design. We also implemented a comprehensive local SEO strategy to improve their search engine rankings.",
      results: "Within 3 months of launching the new site, the client saw a 400% increase in organic traffic and a 250% increase in lead generation. They are now ranked in the top 3 for their target keywords in their local area."
    },
    {
      title: "Coastal Cabinetry",
      slug: "coastal-cabinetry",
      description: "Luxury cabinetry website with portfolio showcase.",
      image: "/CoastalCabinetryPageImage.png",
      category: "Web Design",
      link: "https://coastalcabinetrynj.com",
      challenge: "The client wanted to sell their custom cabinetry online, but their existing website did not have e-commerce functionality. They needed a way for customers to visualize and order custom cabinets.",
      solution: "We built a custom e-commerce platform with a powerful product configurator that allows customers to choose from a variety of styles, finishes, and hardware. The platform also includes a secure payment gateway and order management system.",
      results: "The new e-commerce platform has been a huge success, with online sales increasing by 150% in the first 6 months. The product configurator has also helped to reduce the number of customer service inquiries."
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
      results: "BidAgent AI has been adopted by over 500 contractors in the first year. The platform has helped them to reduce their bidding time by an average of 75% and increase their win rate by 20%."
    },
]

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
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
            <div className="bg-primary text-primary-foreground h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-accent">Case Study Not Found</h1>
                <p className="mt-4 text-lg text-neutral">
                    The case study you are looking for does not exist.
                </p>
                <Link href="/case-studies" className="mt-8">
                    <Button>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Case Studies
                    </Button>
                </Link>
            </div>
        )
    }

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
          <div>
            <Link href="/case-studies" className="text-accent hover:text-accent/90 transition-colors">
                <span className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Case Studies
                </span>
            </Link>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-neutral">{caseStudy.category}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl text-accent">{caseStudy.title}</h1>
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
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg transition-transform duration-200 hover:scale-105">
                <a href={caseStudy.link} target="_blank" rel="noopener noreferrer">
                  Visit Live Site
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <Card className="bg-neutral-900 border-neutral-800 p-8 h-full">
              <div>
                <h2 className="text-2xl font-bold text-accent">Challenge</h2>
                <p className="mt-4 text-lg text-neutral">{caseStudy.challenge}</p>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-accent">Solution</h2>
                <p className="mt-4 text-lg text-neutral">{caseStudy.solution}</p>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-accent">Results</h2>
                <p className="mt-4 text-lg text-neutral">{caseStudy.results}</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mt-6 text-lg leading-8 text-neutral">
                Let's create a success story for your business.
            </p>
            <div className="mt-10">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg transition-transform duration-200 hover:scale-105">
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