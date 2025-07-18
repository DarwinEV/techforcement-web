"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BookOpen, FileText, Building, CreditCard } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function TutorialsPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const tutorialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(".hero-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    gsap.fromTo(
      ".tutorial-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tutorialsRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  const tutorials = [
    {
      id: "llc-registration-guide",
      title: "A Step-by-Step Guide to Registering Your LLC",
      description:
        "Complete walkthrough of the LLC registration process, including state requirements, paperwork, and common pitfalls to avoid.",
      icon: Building,
      readTime: "15 min read",
      difficulty: "Beginner",
      category: "Business Formation",
      content: `
        <h2>Why Choose an LLC?</h2>
        <p>A Limited Liability Company (LLC) offers the perfect balance of protection and flexibility for small business owners. Here's everything you need to know about registering your LLC.</p>
        
        <h3>Step 1: Choose Your State</h3>
        <p>While you can register your LLC in any state, most small businesses benefit from registering in their home state where they'll be conducting business.</p>
        
        <h3>Step 2: Select Your LLC Name</h3>
        <p>Your LLC name must be unique and include "LLC" or "Limited Liability Company." Check availability through your state's business registration website.</p>
        
        <h3>Step 3: File Articles of Organization</h3>
        <p>This is the official document that creates your LLC. Filing fees typically range from $50-$500 depending on your state.</p>
        
        <h3>Step 4: Create an Operating Agreement</h3>
        <p>While not always required, an operating agreement protects your business and clarifies ownership structure.</p>
        
        <div class="bg-teal-50 p-6 rounded-lg my-6">
          <h4 class="text-teal-800 font-semibold mb-2">Need Help?</h4>
          <p class="text-teal-700 mb-4">Short on time? Let us handle the paperwork for you. Our business formation service takes care of everything from name registration to EIN acquisition.</p>
          <a href="/contact" class="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800">
            Learn More About Our Business Formation Service
            <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      `,
    },
    {
      id: "ein-free-guide",
      title: "How to Get Your EIN for Free: The Official Process",
      description:
        "Learn how to obtain your Employer Identification Number directly from the IRS without paying unnecessary fees to third-party services.",
      icon: FileText,
      readTime: "10 min read",
      difficulty: "Beginner",
      category: "Tax & Legal",
      content: `
        <h2>What is an EIN?</h2>
        <p>An Employer Identification Number (EIN) is a unique nine-digit number assigned by the IRS to identify your business for tax purposes.</p>
        
        <h3>When Do You Need an EIN?</h3>
        <ul>
          <li>You have employees</li>
          <li>You operate as a corporation or partnership</li>
          <li>You file employment, excise, or alcohol/tobacco tax returns</li>
          <li>You withhold taxes on income paid to non-resident aliens</li>
          <li>You have a Keogh plan</li>
          <li>You're involved with certain types of organizations</li>
        </ul>
        
        <h3>How to Apply for Free</h3>
        <p>The IRS offers several free methods to obtain your EIN:</p>
        
        <h4>1. Online Application (Recommended)</h4>
        <p>Visit the official IRS website at irs.gov and search for "Apply for EIN Online." This is the fastest method and you'll receive your EIN immediately.</p>
        
        <h4>2. By Phone</h4>
        <p>Call the IRS Business & Specialty Tax Line at 1-800-829-4933. Hours are 7:00 AM to 7:00 PM local time, Monday through Friday.</p>
        
        <div class="bg-yellow-50 p-6 rounded-lg my-6">
          <h4 class="text-yellow-800 font-semibold mb-2">Avoid Scams!</h4>
          <p class="text-yellow-700">Never pay for EIN services. The IRS provides this service completely free. Third-party services that charge fees are unnecessary.</p>
        </div>
        
        <div class="bg-teal-50 p-6 rounded-lg my-6">
          <h4 class="text-teal-800 font-semibold mb-2">Professional Assistance</h4>
          <p class="text-teal-700 mb-4">Need help with your business setup? We can handle your EIN application as part of our comprehensive business formation service.</p>
          <a href="/contact" class="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800">
            Get Professional Help
            <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      `,
    },
    {
      id: "business-bank-account",
      title: "Opening Your First Business Bank Account: What You Need to Know",
      description:
        "Essential guide to choosing and opening a business bank account, including required documents and best practices for financial management.",
      icon: CreditCard,
      readTime: "12 min read",
      difficulty: "Beginner",
      category: "Banking & Finance",
      content: `
        <h2>Why You Need a Business Bank Account</h2>
        <p>Separating your business and personal finances is crucial for legal protection, tax purposes, and professional credibility.</p>
        
        <h3>Required Documents</h3>
        <p>Before visiting the bank, gather these essential documents:</p>
        <ul>
          <li>Articles of Incorporation or Organization</li>
          <li>EIN (Employer Identification Number)</li>
          <li>Business license (if applicable)</li>
          <li>Operating agreement or bylaws</li>
          <li>Personal identification</li>
        </ul>
        
        <h3>Types of Business Accounts</h3>
        <h4>Business Checking Account</h4>
        <p>Essential for daily operations, paying expenses, and receiving payments.</p>
        
        <h4>Business Savings Account</h4>
        <p>Ideal for building emergency funds and earning interest on excess cash.</p>
        
        <h4>Merchant Services</h4>
        <p>Necessary if you plan to accept credit card payments from customers.</p>
        
        <div class="bg-teal-50 p-6 rounded-lg my-6">
          <h4 class="text-teal-800 font-semibold mb-2">Complete Business Setup</h4>
          <p class="text-teal-700 mb-4">We can help you with the entire business formation process, from LLC registration to EIN acquisition and banking guidance.</p>
          <a href="/contact" class="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800">
            Learn About Our Business Services
            <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      `,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center hero-content">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Business Setup{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Tutorials</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Step-by-step guides to help you navigate the business formation process. From LLC registration to tax setup,
            we've got you covered.
          </p>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section ref={tutorialsRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => {
              const Icon = tutorial.icon
              return (
                <Card
                  key={tutorial.id}
                  className="tutorial-card bg-slate-800 border-slate-700 hover:border-teal-500 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                        <Icon className="h-6 w-6 text-teal-400" />
                      </div>
                      <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{tutorial.category}</span>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-teal-400 transition-colors">
                      {tutorial.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 leading-relaxed">{tutorial.description}</p>

                    <div className="flex items-center justify-between text-sm text-slate-400 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {tutorial.readTime}
                      </div>
                      <span className="bg-slate-700 px-2 py-1 rounded text-xs">{tutorial.difficulty}</span>
                    </div>

                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white" asChild>
                      <Link href={`/tutorials/${tutorial.id}`}>
                        Read Tutorial
                        <BookOpen className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated with New Tutorials</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get notified when we publish new business setup guides and tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500"
            />
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Professional Help?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Short on time? Let our experts handle your business formation, website design, and digital marketing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              Get Professional Help
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
