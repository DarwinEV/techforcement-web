# Techforcement Website Development: Actionable Plan

This document provides a detailed, step-by-step plan for the development of the Techforcement website.

---

### **Phase 1: Project Setup & Foundation**

-   [x] **1.1: Initialize Project:** Create a new Next.js project with the `create-next-app` CLI, using the TypeScript and App Router options.
-   [x] **1.2: Install Dependencies:**
    -   [x] `pnpm add gsap`
    -   [x] `pnpm add framer-motion`
    -   [x] `pnpm add three @react-three/fiber @react-three/drei`
    -   [x] `pnpm add react-hook-form`
    -   [x] `pnpm add -D @types/three`
-   [x] **1.3: Configure Tailwind CSS:**
    -   [x] Define the color palette (primary, secondary, accent, neutral) in `tailwind.config.ts`.
    -   [x] Add selected fonts (e.g., Inter, Lato) to the configuration.
-   [x] **1.4: Project Structure:**
    -   [x] Verify the `app`, `components`, `hooks`, `lib`, `public`, `styles` directories are correctly set up.
    -   [x] Create a `components/global` directory for Header, Footer, and LoadingScreen.
-   [x] **1.5: Vercel Integration:**
    -   [x] Connect the local repository to a new Vercel project.
    -   [x] Configure build settings and environment variables (if any).

---

### **Phase 2: Global Component Development**

-   [x] **2.1: Build Header Component (`components/global/header.tsx`):**
    -   [x] Create a responsive layout for the header.
    -   [x] Implement sticky-on-scroll behavior.
    -   [x] Add navigation links: Home, Services, Case Studies, Tutorials, Contact.
    -   [x] Style the "Get a Quote" CTA button.
-   [x] **2.2: Build Footer Component (`components/global/footer.tsx`):**
    -   [x] Create a multi-column layout for the footer.
    -   [x] Add contact info, social media icons/links, sitemap link, and copyright notice.
-   [x] **2.3: Build Loading Screen (`components/global/loading-screen.tsx`):**
    -   [x] Create the basic component with a dark background.
    -   [x] Integrate GSAP.
    -   [x] Implement the `DrawSVGPlugin` animation to draw the word "Techforcement".
    -   [x] Add logic to trigger the fade-out transition upon animation completion.

---

### **Phase 3: Page Construction & Content**

-   [x] **3.1: Home Page (`app/page.tsx`):**
    -   [x] **Hero Section:** Add headline and sub-headline. Implement subtle background animation.
    -   [x] **Services Overview:** Create a new component `components/service-cards.tsx`. Design the card layout for the 3D wave effect.
    -   [x] **Case Study Showcase:** Build a grid or carousel to feature top projects.
    -   [x] **Final CTA:** Design and implement the final call-to-action section.
-   [x] **3.2: Case Studies (`app/case-studies/page.tsx`):**
    -   [x] Create the main grid layout for project cards.
    -   [x] Develop the `ProjectCard` component (`components/project-card.tsx`).
    -   [x] Create the dynamic route and page template: `app/case-studies/[slug]/page.tsx`.
    -   [x] Populate with initial project data: Benavides Landscaping, Coastal Cabinetry NJ, etc.
-   [x] **3.3: Tutorials (`app/tutorials/page.tsx`):**
    -   [x] Create the layout for the main tutorials listing page.
    -   [x] Create a dynamic route and page template for individual articles: `app/tutorials/[slug]/page.tsx`.
    -   [x] Write and format the content for "Registering Your LLC" and "How to Get Your EIN".
    -   [x] Implement prominent "Let us handle it" CTAs within the article content.
-   [x] **3.4: Contact Page (`app/contact/page.tsx`):**
    -   [x] Design the centered form layout.
    -   [x] Implement the contact form using `react-hook-form` with fields: Name, Email, Phone, Service, Message.
    -   [x] Add form validation.
    -   [x] Display business contact details alongside the form.

---

### **Phase 4: Advanced Animations**

-   [x] **4.1: Home Page GSAP Animation:**
    -   [x] Target the key marketing phrases on the Home page.
    -   [x] Implement the scroll-triggered text reveal/masking effect using GSAP's `ScrollTrigger` plugin.
-   [x] **4.2: 3D Service Cards (Home Page):**
    -   [x] Integrate `@react-three/fiber` canvas into `components/service-cards.tsx`.
    -   [x] Implement the 3D wave/hover effect on the cards using shaders or `drei` helpers.
-   [x] **4.3: 3D Interactive Case Study Cards:**
    -   [x] Integrate `@react-three/fiber` into the `ProjectCard` component.
    -   [x] Implement the 3D tilt-on-hover effect.
-   [x] **4.4: Page Transitions & Micro-interactions:**
    -   [x] Use `framer-motion`'s `AnimatePresence` to create smooth transitions between pages.
    -   [x] Apply subtle fade-in and hover effects to buttons, links, and other interactive elements.

---

### **Phase 5: SEO & Finalization**

-   [x] **5.1: On-Page SEO:**
    -   [x] **Metadata:** Write and add unique `<title>` and `<meta name="description">` tags for every page using Next.js `metadata` export.
    -   [x] **Headers:** Review all pages to ensure correct and logical use of `<h1>`, `<h2>`, etc.
    -   [x] **Images:** Compress all images and convert to `.webp`. Add descriptive `alt` text to all `<img>` and `Image` tags.
-   [x] **5.2: Technical SEO:**
    -   [x] **Sitemap:** Configure Next.js to auto-generate `sitemap.xml`.
    -   [x] **Robots.txt:** Create/update the `public/robots.txt` file to allow all crawlers and include the sitemap URL.
-   [ ] **5.3: Performance Audit:**
    -   [ ] Run Lighthouse reports on key pages (Home, Case Study, Tutorial).
    -   [ ] Analyze Core Web Vitals (LCP, INP, CLS) and address any issues.
    -   [ ] Use Next.js dynamic imports for heavy components (e.g., Three.js canvases).
-   [ ] **5.4: Final Testing & Review:**
    -   [ ] Test the entire site on major browsers (Chrome, Firefox, Safari).
    -   [ ] Test responsiveness on mobile, tablet, and desktop viewports.
    -   [ ] Proofread all content for typos and grammatical errors.
    -   [ ] **Launch:** Deploy the `main` branch to production on Vercel.
