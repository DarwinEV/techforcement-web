import type React from "react"
import type { Metadata } from "next"
import { Inter, Lato } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import { SmoothScroller } from "@/components/global/smooth-scroller"
import { ScrollToTop } from "@/components/scroll-to-top"
import { FloatingDots } from "@/components/floating-dots"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Techforcement - Expert Web Design & Business Services",
  description:
    "Professional web design, SEO, and business formation services for small to medium-sized businesses across the United States. Get your free quote today.",
  keywords:
    "web design, SEO services, business formation, LLC registration, Google Business Profile, small business website",
  authors: [{ name: "Techforcement" }],
  creator: "Techforcement",
  publisher: "Techforcement",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techforcement.com",
    siteName: "Techforcement",
    title: "Techforcement - Expert Web Design & Business Services",
    description:
      "Professional web design, SEO, and business formation services for small to medium-sized businesses across the United States.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Techforcement - Expert Web Design & Business Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techforcement - Expert Web Design & Business Services",
    description:
      "Professional web design, SEO, and business formation services for small to medium-sized businesses across the United States.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lato.variable} font-body bg-primary text-primary-foreground`}>
        <ScrollToTop />
        <FloatingDots />
        <SmoothScroller>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  )
}
