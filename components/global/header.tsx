"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Mountain } from "lucide-react"

export function Header() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isAtTop ? "translate-y-0" : "-translate-y-full"
      } bg-primary text-primary-foreground`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Mountain className="h-6 w-6" />
          <span className="text-lg font-semibold">Techforcement</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/services" className="hover:text-accent transition-colors" prefetch={false}>
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-accent transition-colors" prefetch={false}>
            Case Studies
          </Link>
          <Link href="/tutorials" className="hover:text-accent transition-colors" prefetch={false}>
            Tutorials
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link
                  href="/services"
                  className="text-sm font-medium hover:text-accent transition-colors"
                  prefetch={false}
                >
                  Services
                </Link>
                <Link
                  href="/case-studies"
                  className="text-sm font-medium hover:text-accent transition-colors"
                  prefetch={false}
                >
                  Case Studies
                </Link>
                <Link
                  href="/tutorials"
                  className="text-sm font-medium hover:text-accent transition-colors"
                  prefetch={false}
                >
                  Tutorials
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:text-accent transition-colors"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
