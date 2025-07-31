import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ContactClientPage = dynamic(() => import('./contact-client'))

export const metadata: Metadata = {
    title: 'Contact Us | Techforcement',
    description: 'Get in touch with Techforcement for a free quote on your next web design, SEO, or business formation project. We look forward to hearing from you.',
}

export default function ContactPage() {
  return <ContactClientPage />
}
