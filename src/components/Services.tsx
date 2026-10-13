import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01",
        title: "AI Automation",
        description: "Intelligent workflow automation, custom AI agent integrations, and LLM-powered pipelines that eliminate repetitive tasks and scale productivity effortlessly.",
        tags: ["LLMs", "AI Agents", "Workflow Automation", "API Integration"]
    },
    {
        id: "02",
        title: "Website Development",
        description: "Modern, responsive, and blazing-fast web applications built with cutting-edge frameworks, fluid animations, and high-converting user interfaces.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"]
    },
    {
        id: "03",
        title: "Digital Solutions",
        description: "End-to-end digital architecture, cloud-ready backends, CRM configurations, and tailored software solutions that solve real business challenges.",
        tags: ["System Architecture", "Cloud", "APIs", "Database Design"]
    },
    {
        id: "04",
        title: "Testing",
        description: "Comprehensive quality assurance, automated test suites, end-to-end testing, and performance optimization ensuring bug-free, resilient deployments.",
        tags: ["Unit Testing", "E2E Testing", "Vitest", "Playwright", "QA"]
    }
];

const Services = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        // Only enable horizontal scroll on desktop
        if (window.innerWidth >= 768) {
            const track = trackRef.current;
            const container = containerRef.current;

            const scrollTween = gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${track.scrollWidth}`,
                    invalidateOnRefresh: true,
                }
            });

            return () => {
                scrollTween.kill();
                ScrollTrigger.getAll().forEach(t => t.kill());
            };
        }
    }, []);

    return (
        <section id="services" ref={containerRef} className="relative w-full min-h-screen bg-bg-secondary text-white overflow-hidden flex flex-col justify-center">
            <div className="absolute top-10 left-10 md:top-20 md:left-20 z-10">
                <h2 className="text-4xl md:text-8xl font-display font-bold uppercase tracking-tight leading-none mb-4">
                    My <span className="text-accent underline decoration-2 underline-offset-8">Expertise</span>
                </h2>
            </div>

            <div ref={trackRef} className="flex gap-4 px-6 md:px-20 pt-32 md:pt-0 overflow-x-auto md:overflow-visible no-scrollbar h-full items-center">
                {services.map((service) => (
                    <div key={service.id} className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] h-[60vh] md:h-[70vh] bg-card border border-white/10 p-8 md:p-12 flex flex-col justify-between hover:border-accent/50 transition-colors group">
                        <div className="flex justify-between items-start">
                            <span className="text-6xl md:text-8xl font-display font-bold text-white/5 group-hover:text-accent/20 transition-colors">
                                {service.id}
                            </span>
                            <div className="flex gap-2 flex-wrap justify-end">
                                {service.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs border border-white/20 rounded-full text-white/60">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-lg md:text-xl text-white/60 max-w-md">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
