import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata, ResolvingMetadata } from 'next'

const tutorials = [
    {
      title: "A Step-by-Step Guide to Registering Your LLC",
      slug: "registering-your-llc",
      description: "Learn the official process for registering your Limited Liability Company (LLC) and get your business off the ground.",
      category: "Business Formation",
      content: `
        <h2 class="text-3xl font-bold mb-6 text-accent">Why Choose an LLC?</h2>
        <p class="text-lg text-neutral mb-6">A Limited Liability Company (LLC) offers the perfect balance of liability protection and operational flexibility for small business owners. It separates your personal assets from your business debts, providing peace of mind as you grow.</p>
        
        <h3 class="text-2xl font-bold mb-4">Step 1: Choose Your State of Formation</h3>
        <p class="text-lg text-neutral mb-6">While you can register your LLC in any state, most small businesses benefit from registering in their home state where they conduct the majority of their business. This simplifies tax and legal compliance.</p>
        
        <h3 class="text-2xl font-bold mb-4">Step 2: Select a Unique Name for Your LLC</h3>
        <p class="text-lg text-neutral mb-6">Your LLC name must be unique and not currently in use by another business in your state. It must also end with "LLC" or "Limited Liability Company." Always perform a name search on your state's business registration website before finalizing.</p>
        
        <h3 class="text-2xl font-bold mb-4">Step 3: File the Articles of Organization</h3>
        <p class="text-lg text-neutral mb-6">This is the official document that legally creates your LLC. You'll file it with your state's business division, and filing fees typically range from $50 to $500. This document includes basic information like your business name, address, and the names of its members.</p>
      `
    },
    {
      title: "How to Get Your EIN for Free: The Official Process",
      slug: "getting-your-ein",
      description: "A complete guide to obtaining your Employer Identification Number (EIN) for free from the IRS.",
      category: "Business Formation",
      content: `
        <h2 class="text-3xl font-bold mb-6 text-accent">What is an EIN and Why Do You Need It?</h2>
        <p class="text-lg text-neutral mb-6">An Employer Identification Number (EIN) is a unique nine-digit number assigned by the IRS to identify your business for tax purposes. You'll need it to hire employees, open a business bank account, and file your federal tax returns.</p>
        
        <h3 class="text-2xl font-bold mb-4">The Official (and Free) Way to Apply</h3>
        <p class="text-lg text-neutral mb-6">The IRS provides this service completely free of charge. Be wary of third-party services that charge a fee for this process. The fastest and most secure way to apply is directly through the official IRS website.</p>
        
        <h3 class="text-2xl font-bold mb-4">Applying Online</h3>
        <p class="text-lg text-neutral mb-6">Visit the official IRS website and search for "Apply for an EIN Online." The application is straightforward and typically takes less than 15 minutes to complete. Once you submit, you will receive your EIN immediately.</p>
      `
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
    const tutorial = tutorials.find(t => t.slug === slug)

    if (!tutorial) {
        return {
            title: 'Tutorial Not Found | Techforcement',
        }
    }
    
    return {
        title: `${tutorial.title} | Techforcement`,
        description: tutorial.description,
    }
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
    const tutorial = tutorials.find(t => t.slug === params.slug)

    if (!tutorial) {
        return (
            <div className="bg-primary text-primary-foreground h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-accent">Tutorial Not Found</h1>
                <p className="mt-4 text-lg text-neutral">
                    The tutorial you are looking for does not exist.
                </p>
                <Link href="/tutorials" className="mt-8">
                    <Button>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Tutorials
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-primary text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <Link href="/tutorials" className="text-accent hover:text-accent/90 transition-colors">
                    <span className="flex items-center">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Tutorials
                    </span>
                </Link>

                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-accent">{tutorial.title}</h1>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-neutral">{tutorial.category}</p>

                <article className="prose prose-lg prose-invert mt-12" dangerouslySetInnerHTML={{ __html: tutorial.content }} />

                <Card className="mt-16 bg-neutral-900/50 border-accent/20">
                    <CardContent className="p-8 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Overwhelmed? Let Us Help.</h2>
                        <p className="mt-6 text-lg leading-8 text-neutral">
                            Our business formation service handles all the paperwork for you, so you can focus on what matters most—building your business.
                        </p>
                        <div className="mt-10">
                            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg transition-transform duration-200 hover:scale-105">
                                <Link href="/services#business-formation">
                                    Learn More About Our Services
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 