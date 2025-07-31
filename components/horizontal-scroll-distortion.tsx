"use client"

import { useRef, useEffect, Suspense } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import * as THREE from "three"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
    {
      title: "Benavides Landscaping",
      slug: "benavides-landscaping",
      image: "/placeholder.jpg",
    },
    {
      title: "Coastal Cabinetry NJ",
      slug: "coastal-cabinetry-nj",
      image: "/placeholder.jpg",
    },
    {
      title: "Optima Clean",
      slug: "optima-clean",
      image: "/placeholder.jpg",
    },
    {
      title: "BidAgent AI",
      slug: "bidagent-ai",
      image: "/placeholder.jpg",
    },
]

function DistortedImage({ texture, speed }) {
    const shaderRef = useRef()

    useFrame(() => {
        if (shaderRef.current) {
            shaderRef.current.uniforms.u_speed.value = speed.current
        }
    })

    return (
        <mesh>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                ref={shaderRef}
                uniforms={{
                    u_texture: { value: texture },
                    u_speed: { value: 0 },
                }}
                vertexShader={`
                    uniform float u_speed;
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        vec3 pos = position;
                        pos.x += sin(uv.y * 3.14) * u_speed * 0.1;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                    }
                `}
                fragmentShader={`
                    uniform sampler2D u_texture;
                    varying vec2 vUv;
                    void main() {
                        gl_FragColor = texture2D(u_texture, vUv);
                    }
                `}
            />
        </mesh>
    )
}

function Panel({ project, speed }) {
    const texture = useLoader(TextureLoader, project.image)
    return (
        <div className="panel">
            <div className="content">
                <h2 className="text-4xl font-bold text-white">{project.title}</h2>
                <Link href={`/case-studies/${project.slug}`} className="text-accent hover:text-accent/90 font-bold flex items-center mt-4">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
            <div className="image-container">
                <Canvas>
                    <Suspense fallback={null}>
                        <DistortedImage texture={texture} speed={speed} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export function HorizontalScrollDistortion() {
    const component = useRef(null)
    const slider = useRef(null)
    const speed = useRef(0)

    useEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel")
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + slider.current.offsetWidth,
                    onUpdate: (self) => {
                        speed.current = self.getVelocity() / 1000
                    }
                }
            })
        }, component)
        return () => ctx.revert()
    })

    return (
        <div className="App" ref={component}>
            <div ref={slider} className="container">
                {caseStudies.map((project, index) => (
                    <Panel key={index} project={project} speed={speed} />
                ))}
            </div>
        </div>
    )
} 