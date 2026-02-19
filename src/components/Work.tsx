import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        client: "DreamKnot creations",
        category: "Web Platform",
        video: "https://cdn.coverr.co/videos/coverr-surfer-catching-a-wave-5452/1080p.mp4", // Placeholder video
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
        id: 2,
        client: "Apex Finance",
        category: "Brand Identity",
        video: "https://cdn.coverr.co/videos/coverr-stars-in-the-sky-3722/1080p.mp4",
        image: "https://images.unsplash.com/photo-1620641788427-b9509f2d192f?q=80&w=2564&auto=format&fit=crop"
    },
    {
        id: 3,
        client: "Echo Systems",
        category: "Marketing",
        video: "https://cdn.coverr.co/videos/coverr-walking-in-a-forest-4488/1080p.mp4",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 4,
        client: "Quantum Labs",
        category: "Development",
        video: "https://cdn.coverr.co/videos/coverr-coding-on-computer-screen-3629/1080p.mp4",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    }
];

const Work = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".project-card",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section id="work" ref={containerRef} className="py-24 px-6 md:px-12 bg-bg-primary text-white">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                <h2 className="text-5xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-none">
                    Select <br /> <span className="text-stroke text-transparent">Work</span>
                </h2>
                <div className="text-right mt-8 md:mt-0">
                    <p className="font-mono text-sm text-white/50 mb-2">/ SELECTED PROJECTS 2024-2025</p>
                    <p className="max-w-xs text-white/80">
                        Showcasing our finest digital craftsmanship and result-oriented campaigns.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <div className="mt-20 flex justify-center">
                <button className="px-8 py-4 border border-accent text-accent rounded-full hover:bg-accent hover:text-black transition-all font-mono uppercase tracking-widest text-sm relative overflow-hidden group">
                    <span className="relative z-10">View All Projects</span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-0" />
                </button>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    const videoRef = useRef(null);

    return (
        <div
            className="project-card group relative aspect-[4/3] bg-card border border-white/10 overflow-hidden cursor-none"
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => {
                const video = videoRef.current;
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            }}
        >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors z-10" />

            {/* Image Placeholder */}
            <img
                src={project.image}
                alt={project.client}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-0 transition-opacity duration-500"
            />

            {/* Video Reveal */}
            <video
                ref={videoRef}
                src={project.video}
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div>
                    <h3 className="text-3xl font-display font-bold uppercase mb-1">{project.client}</h3>
                    <span className="text-xs font-mono px-2 py-1 border border-white/20 rounded-full">{project.category}</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 group-hover:bg-accent group-hover:border-accent group-hover:text-black">
                    →
                </div>
            </div>
        </div>
    );
};

export default Work;
