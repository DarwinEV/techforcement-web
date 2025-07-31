import { MetadataRoute } from 'next'

const caseStudies = [
  { slug: "benavides-landscaping" },
  { slug: "coastal-cabinetry-nj" },
  { slug: "optima-clean" },
  { slug: "bidagent-ai" },
]

const tutorials = [
  { slug: "registering-your-llc" },
  { slug: "getting-your-ein" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: 'https://techforcement.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://techforcement.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://techforcement.com/case-studies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://techforcement.com/tutorials',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://techforcement.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  const caseStudyPages = caseStudies.map(cs => ({
    url: `https://techforcement.com/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const tutorialPages = tutorials.map(t => ({
    url: `https://techforcement.com/tutorials/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...caseStudyPages,
    ...tutorialPages,
  ]
} 