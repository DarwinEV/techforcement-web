"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Search, Building, Zap, Users, Award } from "lucide-react"
import * as THREE from "three"

export function ServiceCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const cardsRef = useRef<THREE.Mesh[]>([])

  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility and drive more qualified traffic to your business.",
      features: ["Local SEO", "Content Strategy", "Analytics", "Social Media"],
    },
    {
      icon: Building,
      title: "Business Formation",
      description: "Complete business setup services including LLC registration and EIN acquisition.",
      features: ["LLC Registration", "EIN Filing", "Legal Compliance", "Documentation"],
    },
    {
      icon: Zap,
      title: "Google Business Profile",
      description: "Optimize your local presence and attract more customers in your area.",
      features: ["Profile Setup", "Review Management", "Local Listings", "Map Optimization"],
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Strategic guidance to help your business grow and succeed in the digital landscape.",
      features: ["Strategy Planning", "Market Analysis", "Growth Consulting", "Tech Advisory"],
    },
    {
      icon: Award,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your website secure and up-to-date.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Content Updates"],
    },
  ]

  useEffect(() => {
    if (!containerRef.current) return

    // Three.js setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    sceneRef.current = scene
    rendererRef.current = renderer
    cameraRef.current = camera

    camera.position.z = 5

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 100
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.8,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.001

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight
        cameraRef.current.updateProjectionMatrix()
        rendererRef.current.setSize(window.innerWidth, window.innerHeight)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative">
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card
              key={index}
              className="bg-slate-800/80 backdrop-blur-sm border-slate-700 hover:border-teal-500 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                    <Icon className="h-6 w-6 text-teal-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
