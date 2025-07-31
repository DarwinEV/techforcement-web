import type { Metadata } from 'next'
import CaseStudiesClientPage from './case-studies-client-page'

export const metadata: Metadata = {
    title: 'Case Studies | Techforcement',
    description: 'Explore a selection of our success stories and see how we have helped businesses across the United States achieve their goals with our expert web design and business services.',
}

export default function CaseStudiesPage() {
  return <CaseStudiesClientPage />
}
