# Techforcement Website

Small business services and tech consulting. We provide a range of solutions to programming and tech needs.

## Tech Stack

- Framework: Next.js (App Router) with React
- Language: TypeScript
- Styling: Tailwind CSS (with PostCSS)
- UI: Custom components with Lucide icons
- Testing: Jest (configuration present)
- Build & Deploy: Vercel

## Site Structure

- `app/` — Next.js App Router pages and layouts (homepage, case studies, services, contact)
- `components/` — Reusable UI components and sections (global header/footer, UI primitives)
- `public/` — Static assets and images
- `styles/` — Global styles
- `hooks/` — Custom React hooks used across the app
- `lib/` — Utility functions
- `components/global/` — Site-level shared components (header, footer, etc.)

## Email / Contact

The contact form uses EmailJS for client-side email delivery. The EmailJS public key and template/service IDs are used in the browser code. In production, consider restricting the template/service in your EmailJS dashboard and monitoring usage to avoid misuse.