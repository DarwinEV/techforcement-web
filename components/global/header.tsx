"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Zap } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8 max-w-8xl mx-auto h-16 px-6 relative">
        {/* Logo - Grid column 1 */}
        <div>
          <Link href="/" className="flex items-center gap-2 group relative z-20" prefetch={false}>
            <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-gray-800 transition-colors">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">Techforcement</span>
          </Link>
        </div>
        
        {/* Glass bubble background - positioned to avoid logo overlap and contain button */}
        <div className="absolute left-56 right-4 top-2 bottom-2 bg-gray-900/5 backdrop-blur-sm border border-gray-200/20 rounded-2xl shadow-sm" />
        
        {/* Navigation - Grid column 2 with left padding to clear rectangle edge */}
        <nav className="hidden items-center gap-8 md:flex relative z-10 justify-start pl-6">
          <Link 
            href="/services" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" 
            prefetch={false}
          >
            Services
          </Link>
          <Link 
            href="/case-studies" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" 
            prefetch={false}
          >
            Work
          </Link>
          <Link 
            href="/tutorials" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" 
            prefetch={false}
          >
            Resources
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" 
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        
        {/* CTA Button - Grid column 3 positioned inside rectangle with margin */}
        <div className="flex items-center gap-4 relative z-10 justify-end">
          <Button asChild className="button-primary hidden sm:inline-flex">
            <Link href="/contact">Get Started</Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 p-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gray-900">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-semibold">Techforcement</span>
                </div>
                
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/services"
                    className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    prefetch={false}
                  >
                    Services
                  </Link>
                  <Link
                    href="/case-studies"
                    className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    prefetch={false}
                  >
                    Work
                  </Link>
                  <Link
                    href="/tutorials"
                    className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    prefetch={false}
                  >
                    Resources
                  </Link>
                  <Link
                    href="/contact"
                    className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    prefetch={false}
                  >
                    Contact
                  </Link>
                </nav>
                
                <Button asChild className="button-primary w-full mt-4">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
