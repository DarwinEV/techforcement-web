import { render, screen } from '@testing-library/react'
import { Footer } from '../footer'

describe('Footer', () => {
    it('renders the footer', () => {
        render(<Footer />)
        const footer = screen.getByRole('contentinfo')
        expect(footer).toBeInTheDocument()
    })

    it('renders the correct copyright text', () => {
        render(<Footer />)
        const copyright = screen.getByText(/© \d{4} Techforcement\. All rights reserved\./)
        expect(copyright).toBeInTheDocument()
    })
}) 