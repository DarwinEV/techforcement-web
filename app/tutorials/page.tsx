import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tutorials | Techforcement',
    description: 'Free guides and resources to help you navigate the complexities of starting and growing your business, from LLC registration to EIN acquisition.',
}

  const tutorials = [
    {
      title: "A Step-by-Step Guide to Registering Your LLC",
    slug: "registering-your-llc",
    description: "Learn the official process for registering your Limited Liability Company (LLC) and get your business off the ground.",
      category: "Business Formation",
  },
    {
      title: "How to Get Your EIN for Free: The Official Process",
    slug: "getting-your-ein",
    description: "A complete guide to obtaining your Employer Identification Number (EIN) for free from the IRS.",
    category: "Business Formation",
  },
]

export default function TutorialsPage() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-accent">Tutorials</h1>
          <p className="mt-6 text-lg leading-8 text-neutral">
            Free guides and resources to help you navigate the complexities of starting and growing your business.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {tutorials.map((tutorial) => (
                <Card
              key={tutorial.slug}
              className="bg-neutral-900 border-neutral-800 overflow-hidden group hover:border-accent transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">{tutorial.category}</p>
                <h3 className="mt-4 text-2xl font-bold text-neutral-foreground">{tutorial.title}</h3>
                <p className="mt-4 text-lg text-neutral">{tutorial.description}</p>
                <div className="mt-6">
                    <Button variant="ghost" size="sm" asChild className="text-accent hover:text-accent/90 p-0">
                        <Link href={`/tutorials/${tutorial.slug}`}>
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                </div>
                  </CardContent>
                </Card>
          ))}
        </div>

        <div className="mt-24 text-center bg-neutral-900/50 rounded-lg p-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need Help with the Paperwork?</h2>
            <p className="mt-6 text-lg leading-8 text-neutral">
                Let us handle the complexities of business formation for you. We'll make sure everything is done right, so you can focus on what you do best.
            </p>
            <div className="mt-10">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg transition-transform duration-200 hover:scale-105">
                    <Link href="/services#business-formation">
                        Learn More About Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
