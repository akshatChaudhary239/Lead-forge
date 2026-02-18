// @ts-nocheck
import { useEffect, useRef, Suspense, lazy } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { Canvas } from "@react-three/fiber";

const HeroOrb = lazy(() => import("./three/HeroOrb"));

const Hero = () => {
    const titleRef = useRef(null);
    const marqueeRef = useRef(null);

    useEffect(() => {
        const split = new SplitType(titleRef.current, { types: 'chars' });

        gsap.fromTo(split.chars,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.03,
                duration: 1,
                ease: 'power3.out',
                delay: 1.5 // Wait for loader
            }
        );

        gsap.fromTo(".hero-subtitle",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 2.2, ease: "power2.out" }
        );

    }, []);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-bg-primary">
            {/* 3D Background - Lazy Loaded & Disabled on Mobile via CSS logic if needed, but R3F handles resize well */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                <Suspense fallback={null}>
                    <Canvas gl={{ antialias: true, alpha: true }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1} />
                        <HeroOrb />
                    </Canvas>
                </Suspense>
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_90%)] pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 text-center px-6">
                <h1 ref={titleRef} className="hero-title text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-none mb-6">
                    LeadForge <br /> <span className="text-stroke text-transparent">Growth Hub</span>
                </h1>
                <p className="hero-subtitle text-lg md:text-xl font-mono text-white/60 max-w-2xl mx-auto">
                    Forging digital growth through data-driven performance marketing and high-end web experiences.
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-[10px] font-mono tracking-widest text-white/50">SCROLL</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-accent to-transparent" />
            </div>

            {/* Marquee Strip */}
            <div className="absolute bottom-0 w-full z-20 bg-accent text-black py-2 overflow-hidden whitespace-nowrap border-t border-black">
                <div className="animate-marquee-infinite inline-flex gap-8 items-center font-mono font-bold text-sm tracking-wider">
                    {Array(10).fill("DIGITAL GROWTH · LEAD GENERATION · PERFORMANCE MARKETING · STRATEGY · ").map((text, i) => (
                        <span key={i}>{text}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
