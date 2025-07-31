"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Card } from "@/components/ui/card"
import { Code, Search, Building, Zap } from "lucide-react"
import * as THREE from "three"
import { gsap } from "gsap"

const services = [
  {
    icon: Code,
    title: "Web Design",
    description: "Custom websites built for performance and user experience.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Boost your online visibility and drive qualified traffic.",
  },
  {
    icon: Building,
    title: "Business Formation",
    description: "LLC registration and EIN acquisition to get you started.",
  },
  {
    icon: Zap,
    title: "Google Business Profile",
    description: "Optimize your local presence and attract more customers.",
  },
]

function WaveBackground({ shaderRef }) {
  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.u_time.value = state.clock.getElapsedTime()
    }
  })

  return null;
}

function ServiceCardContent({ service, onHover }) {
    const Icon = service.icon;
    return (
        <Card 
            className="h-full bg-neutral-900/80 backdrop-blur-sm border-neutral-800 text-white flex flex-col justify-center items-center text-center p-6 transition-all duration-300 hover:border-accent hover:-translate-y-2 cursor-pointer"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
        >
            <div className="p-3 bg-accent/20 rounded-lg mb-4">
                <Icon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-neutral-400 leading-relaxed">{service.description}</p>
        </Card>
    )
}

export function ServiceCards() {
  const shaderRef = useRef<{ uniforms: { [key: string]: THREE.IUniform } }>(null!);

  const handleCardHover = (isHovering: boolean) => {
    if(shaderRef.current) {
        gsap.to(shaderRef.current.uniforms.u_hover, {
            value: isHovering ? 1 : 0,
            duration: 0.5
        })
    }
  }

  return (
    <div className="relative h-[400px]">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <WaveBackground shaderRef={shaderRef} />
        </Canvas>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full items-center">
        {services.map((service, index) => (
          <div key={index} className="h-3/4">
            <ServiceCardContent service={service} onHover={handleCardHover} />
          </div>
        ))}
      </div>
    </div>
  )
}
